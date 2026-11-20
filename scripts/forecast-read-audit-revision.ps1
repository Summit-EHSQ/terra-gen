$ErrorActionPreference = 'Stop'
$helper = Join-Path $env:USERPROFILE '.codex/skills/forecast-task-manager/scripts/invoke-forecast-api.ps1'
$directory = Join-Path (Get-Location).Path 'tmp/forecast-p550-no-audit'
New-Item -ItemType Directory -Path $directory -Force | Out-Null
$projects = & $helper -Method GET -Path '/v1/projects' | ConvertFrom-Json
$project = @($projects | Where-Object { $_.company_project_id -eq 550 })
if ($project.Count -ne 1 -or $project[0].id -ne 605489) { throw 'P550 project mismatch.' }
$parent = & $helper -Method GET -Path '/v3/tasks/company_task_id/26948' | ConvertFrom-Json
if ($parent.id -ne 17053734 -or $parent.project_id -ne 605489) { throw 'T26948 parent mismatch.' }
$manifest = Get-Content -LiteralPath 'docs/phase 2/incident management/osha-establishment-analytics/forecast-task-import.json' -Raw | ConvertFrom-Json
$tasks = @()
foreach ($entry in $manifest.tasks) {
 $number = $entry.taskNumber.Substring(1)
 $task = & $helper -Method GET -Path "/v3/tasks/company_task_id/$number" | ConvertFrom-Json
 if ($task.id -ne $entry.id -or $task.project_id -ne 605489 -or $task.parent_task_id -ne 17053734 -or $task.title -cne $entry.title) { throw "Task target mismatch: $($entry.taskNumber)" }
 $tasks += [pscustomobject]@{ sourceId = $entry.sourceId; taskNumber = $entry.taskNumber; id = $task.id; title = $task.title; project_id = $task.project_id; parent_task_id = $task.parent_task_id; description = $task.description }
}
$tasks | ConvertTo-Json -Depth 12 | Set-Content -LiteralPath (Join-Path $directory 'current-tasks.json') -Encoding utf8
Write-Output "Resolved $($tasks.Count) Forecast tasks in P550 under T26948; read-only snapshot saved."
