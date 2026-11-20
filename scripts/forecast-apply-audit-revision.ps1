$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest
$helper = Join-Path $env:USERPROFILE '.codex/skills/forecast-task-manager/scripts/invoke-forecast-api.ps1'
$workspace = (Resolve-Path -LiteralPath '.').Path
$directory = (Resolve-Path -LiteralPath 'tmp/forecast-p550-no-audit').Path
if (-not $directory.StartsWith(($workspace + [IO.Path]::DirectorySeparatorChar), [StringComparison]::OrdinalIgnoreCase)) { throw 'Temporary operation directory is outside workspace.' }
$manifest = Get-Content -LiteralPath (Join-Path $directory 'update-manifest.json') -Raw | ConvertFrom-Json
$before = Get-Content -LiteralPath (Join-Path $directory 'current-tasks.json') -Raw | ConvertFrom-Json
$out = Join-Path $workspace 'docs/phase 2/incident management/osha-establishment-analytics/forecast-audit-policy-update.json'
$result = [ordered]@{ project = 'P550'; parent = 'T26948'; planRevision = $manifest.planRevision; specificationRevision = $manifest.specificationRevision; updated = 0; skipped = 0; failed = 0; verified = 0; tasks = @() }
function Save-Result {
 $json = $result | ConvertTo-Json -Depth 12
 for ($attempt = 0; $attempt -lt 10; $attempt++) {
  try { [IO.File]::WriteAllText($out, $json, [Text.UTF8Encoding]::new($false)); return }
  catch [IO.IOException] { if ($attempt -eq 9) { throw }; Start-Sleep -Milliseconds 150 }
 }
}
function Hash-Text([string]$text) { $sha = [Security.Cryptography.SHA256]::Create(); try { [Convert]::ToHexString($sha.ComputeHash([Text.Encoding]::UTF8.GetBytes($text))).ToLowerInvariant() } finally { $sha.Dispose() } }
try {
 $parent = & $helper -Method GET -Path '/v3/tasks/company_task_id/26948' | ConvertFrom-Json
 if ($parent.id -ne $manifest.parentId -or $parent.project_id -ne $manifest.projectId) { throw 'Parent/project mismatch.' }
 foreach ($entry in $manifest.updates) {
  $old = @($before | Where-Object { $_.id -eq $entry.id })
  if ($old.Count -ne 1) { throw "Missing read-only snapshot for $($entry.taskNumber)." }
  $actual = & $helper -Method GET -Path "/v3/tasks/$($entry.id)" | ConvertFrom-Json
  if ($actual.title -cne $entry.title -or $actual.project_id -ne $manifest.projectId -or $actual.parent_task_id -ne $manifest.parentId) { throw "Task identity changed: $($entry.taskNumber)." }
  $bodyPath = Join-Path $directory $entry.payload
  $payload = Get-Content -LiteralPath $bodyPath -Raw | ConvertFrom-Json
  if (@($payload.PSObject.Properties).Count -ne 1 -or $null -eq $payload.description) { throw 'Only description may be updated.' }
  if ($actual.description -ceq $payload.description) {
   if ($old[0].description -cne $payload.description) { $result.updated++ } else { $result.skipped++ }
  } else {
   if ($actual.description -cne $old[0].description) { throw "Description changed since review: $($entry.taskNumber). Preserve and merge those changes first." }
   $null = & $helper -Method PUT -Path "/v3/tasks/$($entry.id)" -BodyPath $bodyPath -Execute
   $result.updated++
  }
  $record = [ordered]@{ sourceId = $entry.sourceId; id = $entry.id; taskNumber = $entry.taskNumber; title = $entry.title; fieldsChanged = @('description'); beforeDescriptionSha256 = (Hash-Text $old[0].description); expectedDescriptionSha256 = (Hash-Text $payload.description); verified = $false }
  $result.tasks += $record
  Save-Result
  $verified = & $helper -Method GET -Path "/v3/tasks/$($entry.id)" | ConvertFrom-Json
  if ($verified.description -cne $payload.description -or $verified.title -cne $entry.title -or $verified.parent_task_id -ne $manifest.parentId -or $verified.project_id -ne $manifest.projectId) { throw "Read-back verification failed: $($entry.taskNumber)." }
  if ($verified.description -match '(?i)(?<!not )\benable(?: native| Intelex)? (?:audit|change history)|IsAuditEnabled from FALSE to TRUE|appears in change history|Use Intelex change history') { throw "Audit enablement wording remains: $($entry.taskNumber)." }
  $record.verified = $true
  $result.verified++
  Save-Result
  Write-Output "Verified $($entry.taskNumber): Audit Trail excluded."
 }
 foreach ($name in @($manifest.updates.payload) + @('update-manifest.json','current-tasks.json')) {
  $target = (Resolve-Path -LiteralPath (Join-Path $directory $name)).Path
  if (-not $target.StartsWith(($directory + [IO.Path]::DirectorySeparatorChar), [StringComparison]::OrdinalIgnoreCase)) { throw 'Cleanup path escaped operation directory.' }
  Remove-Item -LiteralPath $target
 }
 Write-Output ("Completed: updated={0}, skipped={1}, failed={2}, verified={3}" -f $result.updated,$result.skipped,$result.failed,$result.verified)
} catch {
 $result.failed++
 $result.error = $_.Exception.Message
 Save-Result
 throw
}
