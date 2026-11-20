[CmdletBinding()]
param()
$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest
$helper = Join-Path $env:USERPROFILE '.codex/skills/forecast-task-manager/scripts/invoke-forecast-api.ps1'
$workspace = (Resolve-Path -LiteralPath '.').Path
$payloadDirectory = (Resolve-Path -LiteralPath 'tmp/forecast-p550-t26948-osha-plan-v7').Path
if (-not $payloadDirectory.StartsWith(($workspace + [IO.Path]::DirectorySeparatorChar), [StringComparison]::OrdinalIgnoreCase)) { throw 'Payload directory is outside the workspace.' }
$manifest = Get-Content -LiteralPath (Join-Path $payloadDirectory 'manifest.json') -Raw | ConvertFrom-Json
$auditPath = Join-Path $workspace 'docs/phase 2/incident management/osha-establishment-analytics/forecast-task-import.json'
$result = [ordered]@{ project = $manifest.projectNumber; projectId = $manifest.projectId; parent = $manifest.parentNumber; parentId = $manifest.parentId; planRevision = $manifest.planRevision; sourceSha256 = $manifest.sourceSha256; created = 0; skipped = 0; failed = 0; verified = 0; tasks = @() }
function Save-Result { $result | ConvertTo-Json -Depth 12 | Set-Content -LiteralPath $auditPath -Encoding utf8 }
function Read-Tasks {
 $items = & $helper -Method GET -Path "/v3/projects/$($manifest.projectId)/tasks" | ConvertFrom-Json
 while (@($items).Count -eq 1 -and @($items)[0] -is [array]) { $items = @($items)[0] }
 foreach ($item in $items) { if (-not ($item.PSObject.Properties.Name -contains 'id')) { throw 'Unexpected task-list response shape.' }; $item }
}
function Plain-Text([string]$value) { ([Net.WebUtility]::HtmlDecode(($value -replace '<[^>]*>', ' ')) -replace '\s+', ' ').Trim() }
try {
 $parent = & $helper -Method GET -Path "/v3/tasks/company_task_id/26948" | ConvertFrom-Json
 if ($parent.id -ne $manifest.parentId -or $parent.project_id -ne $manifest.projectId) { throw 'Parent/project mismatch.' }
 $existing = Read-Tasks
 $numbers = @{}
 foreach ($entry in $manifest.tasks) {
  $matches = @($existing | Where-Object { ($_.PSObject.Properties.Name -contains 'parent_task_id') -and $_.parent_task_id -eq $manifest.parentId -and ($_.title -ceq $entry.title -or ([string]$_.description).Contains($entry.marker)) })
  if ($matches.Count -gt 1) { throw "More than one matching task for $($entry.sourceId)." }
  $bodyPath = Join-Path $payloadDirectory $entry.payload
  $body = Get-Content -LiteralPath $bodyPath -Raw | ConvertFrom-Json
  foreach ($key in @($numbers.Keys)) { $body.description = $body.description.Replace("{{FORECAST:$key}}", $numbers[$key]) }
  if ($body.description -match '\{\{FORECAST:') { throw "Unresolved earlier-task reference for $($entry.sourceId)." }
  if ($matches.Count -eq 1) {
   $task = $matches[0]
   $operation = 'Skipped existing'
   $result.skipped++
  } else {
   $body | ConvertTo-Json -Depth 12 | Set-Content -LiteralPath $bodyPath -Encoding utf8
   $task = & $helper -Method POST -Path '/v3/tasks' -BodyPath $bodyPath -Execute | ConvertFrom-Json
   if (-not $task.id) { throw "Creation returned no task ID for $($entry.sourceId)." }
   $operation = 'Created'
   $result.created++
  }
  $numbers[$entry.sourceId] = "T$($task.company_task_id)"
  $record = [ordered]@{ sourceId = $entry.sourceId; id = $task.id; taskNumber = $numbers[$entry.sourceId]; title = $entry.title; operation = $operation; verified = $false }
  $result.tasks += $record
  Save-Result
  $actual = & $helper -Method GET -Path "/v3/tasks/$($task.id)" | ConvertFrom-Json
  if ($actual.project_id -ne $manifest.projectId -or $actual.parent_task_id -ne $manifest.parentId -or $actual.title -cne $entry.title) { throw "Task relationship/title verification failed for $($entry.sourceId)." }
  if ((Plain-Text $actual.description) -cne (Plain-Text $body.description)) { throw "Description verification failed for $($entry.sourceId); existing content was not overwritten." }
  $record.verified = $true
  $result.verified++
  Save-Result
  Write-Output "$operation $($numbers[$entry.sourceId]): $($entry.title)"
 }
 $after = Read-Tasks
 foreach ($entry in $manifest.tasks) {
  $matches = @($after | Where-Object { ($_.PSObject.Properties.Name -contains 'parent_task_id') -and $_.parent_task_id -eq $manifest.parentId -and ($_.title -ceq $entry.title -or ([string]$_.description).Contains($entry.marker)) })
  if ($matches.Count -ne 1) { throw "Rerun duplicate check failed for $($entry.sourceId)." }
 }
 $result.rerunWouldCreate = 0
 Save-Result
 # Delete only the operation's known temporary JSON payloads, after verifying each absolute path.
 foreach ($name in @($manifest.tasks.payload) + @('manifest.json')) {
  $target = (Resolve-Path -LiteralPath (Join-Path $payloadDirectory $name)).Path
  if (-not $target.StartsWith(($payloadDirectory + [IO.Path]::DirectorySeparatorChar), [StringComparison]::OrdinalIgnoreCase)) { throw 'Cleanup target escaped the operation directory.' }
  Remove-Item -LiteralPath $target
 }
 Write-Output ("Completed: created={0}, skipped={1}, failed={2}, verified={3}; rerun would create=0" -f $result.created,$result.skipped,$result.failed,$result.verified)
} catch {
 $result.failed++
 $result.error = $_.Exception.Message
 Save-Result
 throw
}
