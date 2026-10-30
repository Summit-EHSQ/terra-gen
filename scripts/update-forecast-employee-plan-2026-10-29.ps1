[CmdletBinding()]
param()
$ErrorActionPreference = 'Stop'
$workspace = Split-Path -Parent $PSScriptRoot
$helper = 'C:\Users\DaveMcLean\.codex\skills\forecast-task-manager\scripts\invoke-forecast-api.ps1'
$manifestPath = Join-Path $workspace 'outputs\forecast-employee-revision-2026-10-29-manifest.json'
$resultPath = Join-Path $workspace 'outputs\forecast-employee-revision-2026-10-29-result.json'
$manifest = Get-Content -Raw -LiteralPath $manifestPath | ConvertFrom-Json
& node (Join-Path $PSScriptRoot 'validate-employee-implementation-plan.cjs') | Out-Null
if ($LASTEXITCODE -ne 0) { throw 'Current plan validation failed' }
if ($manifest.project -ne 605488 -or $manifest.parent -ne 16891569 -or $manifest.operations.Count -ne 40) { throw 'Unexpected revision scope' }
$result = [ordered]@{ project_id = 605488; parent_task = 'T25797'; started_utc = [DateTime]::UtcNow.ToString('o'); status = 'running'; updated = @(); skipped = @(); failed = @() }
function Save-RevisionResult { $result | ConvertTo-Json -Depth 35 | Set-Content -LiteralPath $resultPath -Encoding utf8 }
Save-RevisionResult
foreach ($operation in $manifest.operations) {
 try {
  $current = (& $helper -Method GET -Path "/v3/tasks/$($operation.id)") | ConvertFrom-Json
  $payload = Get-Content -Raw -LiteralPath $operation.bodyFile | ConvertFrom-Json
  if ($current.id -ne $operation.id -or $current.company_task_id -ne $operation.number -or $current.project_id -ne 605488 -or $current.parent_task_id -ne $operation.before.parent_task_id) { throw 'Task identity/project/parent mismatch' }
  $matchesExpected = $true
  foreach ($name in $payload.PSObject.Properties.Name) { if ($current.$name -cne $payload.$name) { $matchesExpected = $false } }
  if ($matchesExpected) {
   $result.skipped += [pscustomobject]@{ number=$operation.number; id=$current.id; kind=$operation.kind; reason='Already matches verified payload' }
   Save-RevisionResult
   continue
  }
  if ($current.title -cne $operation.before.title -or $current.description -cne $operation.before.description) { throw 'Task content changed since prepared preview; preserve and reconcile before updating' }
  $null = & $helper -Method PUT -Path "/v3/tasks/$($operation.id)" -BodyPath $operation.bodyFile -Execute
  $after = (& $helper -Method GET -Path "/v3/tasks/$($operation.id)") | ConvertFrom-Json
  foreach ($name in $payload.PSObject.Properties.Name) { if ($after.$name -cne $payload.$name) { throw "Updated $name did not match payload" } }
  $unexpected = @()
  foreach ($property in $current.PSObject.Properties.Name) {
   if ($property -in @($payload.PSObject.Properties.Name) -or $property -in @('updated_at','updated_by','last_updated','updated_by_id')) { continue }
   $oldValue = ConvertTo-Json -InputObject $current.$property -Depth 30 -Compress
   $newValue = ConvertTo-Json -InputObject $after.$property -Depth 30 -Compress
   if ($oldValue -cne $newValue) { $unexpected += $property }
  }
  $result.updated += [pscustomobject]@{ number=$operation.number; id=$current.id; kind=$operation.kind; title=$after.title; parent_task_id=$after.parent_task_id; description_verified=$true; unexpected_changes=$unexpected; after=$after }
  Save-RevisionResult
  if ($unexpected.Count -gt 0) { throw "Unexpected changes: $($unexpected -join ', ')" }
  Write-Output "Verified T$($operation.number) ($($operation.kind)); $($result.updated.Count + $result.skipped.Count)/40"
 }
 catch {
  $result.status='stopped'
  $result.failed += [pscustomobject]@{number=$operation.number;id=$operation.id;reason=$_.Exception.Message}
  Save-RevisionResult
  throw
 }
}
$result.status='complete'
$result.completed_utc=[DateTime]::UtcNow.ToString('o')
Save-RevisionResult
Write-Output "Complete: updated=$($result.updated.Count), skipped=$($result.skipped.Count), failed=$($result.failed.Count)."
