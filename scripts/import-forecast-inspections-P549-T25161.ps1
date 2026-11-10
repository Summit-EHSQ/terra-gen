[CmdletBinding()]
param([switch] $Execute)
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$workspace = Split-Path -Parent $PSScriptRoot
$artifactRoot = Join-Path $workspace 'outputs\forecast-inspections-P549-T25161'
$manifest = Get-Content -Raw -LiteralPath (Join-Path $artifactRoot 'prepared-import.json') | ConvertFrom-Json
$helper = 'C:\Users\DaveMcLean\.codex\skills\forecast-task-manager\scripts\invoke-forecast-api.ps1'
$source = Join-Path $workspace $manifest.source_path
if ((Get-FileHash -LiteralPath $source -Algorithm SHA256).Hash.ToLowerInvariant() -cne $manifest.source_sha256) { throw 'Approved source changed after import preparation.' }
if ($manifest.project_id -ne 605488 -or $manifest.parent_id -ne 16777340 -or $manifest.operations.Count -ne 34) { throw 'Unexpected import scope.' }
function Read-Forecast([string] $Path) {
    $data = @(& $helper -Method GET -Path $Path | ConvertFrom-Json)
    if ($data.Count -eq 1 -and $data[0] -is [array]) { $data = @($data[0]) }
    foreach ($record in $data) {
        if ($record.PSObject.Properties['company_task_id']) {
            foreach ($optional in @('parent_task_id','description')) {
                if (-not $record.PSObject.Properties[$optional]) { $record | Add-Member -NotePropertyName $optional -NotePropertyValue $null }
            }
        }
    }
    return $data
}
function Normalize-Description([string] $Value) {
    $text = $Value -replace '<br\s*/?>', "`n" -replace '</div\s*>', "`n" -replace '<[^>]+>', ''
    return ([System.Net.WebUtility]::HtmlDecode($text) -replace '\s+', ' ').Trim()
}
$projects = @(Read-Forecast '/v1/projects' | Where-Object { $_.company_project_id -eq 549 })
if ($projects.Count -ne 1 -or $projects[0].id -ne 605488 -or -not $projects[0].use_sub_tasks) { throw 'Project identity or hierarchy support mismatch.' }
$parent = @(Read-Forecast '/v3/tasks/company_task_id/25161')[0]
if ($parent.id -ne 16777340 -or $parent.project_id -ne 605488 -or $parent.title -cne 'Inspections') { throw 'Parent identity/project mismatch.' }
$existing = @(Read-Forecast '/v3/projects/605488/tasks')
$planned = @()
foreach ($operation in $manifest.operations) {
    $unprefixed = $operation.body.title -replace '^IMP-\d+ — ', ''
    $found = @($existing | Where-Object {
        ($_.description -and $_.description.Contains($operation.marker)) -or
        ($_.parent_task_id -eq 16777340 -and ($_.title -ceq $operation.body.title -or $_.title -ceq $unprefixed))
    })
    if ($found.Count -gt 1) { throw "Ambiguous existing task for $($operation.source_id)." }
    if ($found.Count -eq 1 -and $found[0].parent_task_id -ne 16777340) { throw "Existing marked task moved outside the requested parent: $($operation.source_id). No parent change is authorized by this create-only import." }
    $planned += [pscustomobject]@{ source_id=$operation.source_id; operation=$operation; existing=($found | Select-Object -First 1) }
}
Write-Output "Resolved P549 / T25161. Creates: $(@($planned | Where-Object { $null -eq $_.existing }).Count); existing matches: $(@($planned | Where-Object { $null -ne $_.existing }).Count)."
if (-not $Execute) { return }
$resultPath = Join-Path $artifactRoot 'import-result.json'
$result = [ordered]@{ project='P549';project_id=605488;parent='T25161';parent_id=16777340;status='running';created=@();skipped=@();failed=@();preserved_existing=@();rerun_would_create=$null }
function Save-Result { $result | ConvertTo-Json -Depth 12 | Set-Content -LiteralPath $resultPath -Encoding utf8 }
function Verify-Task($Task,$Body) {
    if ($Task.project_id -ne 605488 -or $Task.parent_task_id -ne 16777340 -or $Task.title -cne $Body.title) { throw 'Task title/project/parent verification failed.' }
    if ((Normalize-Description $Task.description) -cne (Normalize-Description $Body.description)) { throw 'Task description verification failed; stop without overwriting.' }
}
$temporaryRoot = Join-Path $env:TEMP ('codex-forecast-inspections-' + [guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path $temporaryRoot | Out-Null
$temporaryRoot = (Resolve-Path -LiteralPath $temporaryRoot).Path
$createdPayloads = @()
Save-Result
try {
    foreach ($item in $planned) {
        try {
            $body = $item.operation.body
            if ($null -ne $item.existing) {
                $current = @(Read-Forecast "/v3/tasks/$($item.existing.id)")[0]
                Verify-Task $current $body
                $result.skipped += [pscustomobject]@{ source_id=$item.source_id;id=$current.id;number=$current.company_task_id;title=$current.title;verified=$true }
            }
            else {
                if ($item.source_id -notmatch '^IMP-\d{2}$') { throw 'Invalid payload file identifier.' }
                $payloadPath = Join-Path $temporaryRoot ($item.source_id + '.json')
                $body | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $payloadPath -Encoding utf8
                $createdPayloads += $payloadPath
                $created = & $helper -Method POST -Path '/v3/tasks' -BodyPath $payloadPath -Execute | ConvertFrom-Json
                if (-not $created.id) { throw 'Create response lacked task ID; do not retry without checking live tasks.' }
                $entry = [pscustomobject]@{ source_id=$item.source_id;id=$created.id;number=$created.company_task_id;title=$body.title;verified=$false }
                $result.created += $entry
                Save-Result
                $current = @(Read-Forecast "/v3/tasks/$($created.id)")[0]
                Verify-Task $current $body
                $entry.number=$current.company_task_id
                $entry.verified=$true
            }
            Save-Result
            Write-Output "Verified $($item.source_id) as T$($current.company_task_id) ($($result.created.Count+$result.skipped.Count)/34)."
        }
        catch {
            $result.status='stopped'
            $result.failed += [pscustomobject]@{ source_id=$item.source_id;reason=$_.Exception.Message }
            Save-Result
            throw
        }
    }
    $after = @(Read-Forecast '/v3/projects/605488/tasks')
    foreach ($operation in $manifest.operations) {
        $matches = @($after | Where-Object { ($_.description -and $_.description.Contains($operation.marker)) -or ($_.parent_task_id -eq 16777340 -and $_.title -ceq $operation.body.title) })
        if ($matches.Count -ne 1) { throw "Duplicate/missing task in rerun check: $($operation.source_id)" }
        Verify-Task $matches[0] $operation.body
    }
    foreach ($original in $existing | Where-Object { $_.id -in @(16928346,16928354) }) {
        $preserved = @($after | Where-Object { $_.id -eq $original.id })[0]
        foreach ($field in @('title','description','parent_task_id','project_id')) {
            if ($preserved.$field -cne $original.$field) { throw "Existing task T$($original.company_task_id) changed during the import." }
        }
        $result.preserved_existing += "T$($original.company_task_id)"
    }
    $result.rerun_would_create=0
    $result.status='complete'
    Save-Result
    Write-Output "Complete: created=$($result.created.Count), skipped=$($result.skipped.Count), failed=$($result.failed.Count); rerun creates=0."
}
catch {
    if ($result.status -eq 'running') { $result.status='stopped';$result.failed += [pscustomobject]@{source_id='final-verification';reason=$_.Exception.Message};Save-Result }
    throw
}
finally {
    foreach ($payload in $createdPayloads) {
        if (Test-Path -LiteralPath $payload) {
            $resolved = (Resolve-Path -LiteralPath $payload).Path
            if (-not $resolved.StartsWith($temporaryRoot + [System.IO.Path]::DirectorySeparatorChar,[System.StringComparison]::OrdinalIgnoreCase)) { throw 'Temporary payload cleanup escaped its directory.' }
            Remove-Item -LiteralPath $resolved
        }
    }
    Remove-Item -LiteralPath $temporaryRoot
}
