[CmdletBinding()]
param(
    [Parameter(ParameterSetName = 'ByName', Mandatory = $true)]
    [string] $ProjectName,

    [Parameter(ParameterSetName = 'ById', Mandatory = $true)]
    [long] $ProjectId,

    [string] $PlanPath = (Join-Path $PSScriptRoot '..\docs\phase 1\inspections\ADRs\ADR-008-implementation-plan-configurable-site-inspection-frequency.md'),

    [string] $ParentCompanyTaskId,

    [switch] $Apply
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$baseUri = 'https://api.forecast.it/api'
$importNamespace = 'terra-gen:adr-008-configurable-operational-activity-targets'
$apiKey = $env:FORECAST_API_KEY

if ([string]::IsNullOrWhiteSpace($apiKey)) {
    throw 'FORECAST_API_KEY is not set. Supply it through the process environment; do not save it in this repository.'
}

function Invoke-ForecastRequest {
    param(
        [Parameter(Mandatory = $true)]
        [ValidateSet('GET', 'POST', 'PUT')]
        [string] $Method,

        [Parameter(Mandatory = $true)]
        [string] $Path,

        [hashtable] $Body
    )

    $headers = @{
        'X-FORECAST-API-KEY' = $apiKey
        'Accept'             = 'application/json'
    }

    for ($attempt = 1; $attempt -le 3; $attempt++) {
        try {
            $request = @{
                Uri         = "$baseUri$Path"
                Method      = $Method
                Headers     = $headers
                ErrorAction = 'Stop'
            }

            if ($null -ne $Body) {
                $request.ContentType = 'application/json; charset=utf-8'
                $request.Body = $Body | ConvertTo-Json -Depth 10 -Compress
            }

            return Invoke-RestMethod @request
        }
        catch {
            $statusCode = 0
            if ($_.Exception.PSObject.Properties.Name -contains 'Response' -and
                $null -ne $_.Exception.Response -and
                $_.Exception.Response.PSObject.Properties.Name -contains 'StatusCode' -and
                $null -ne $_.Exception.Response.StatusCode) {
                $statusCode = [int] $_.Exception.Response.StatusCode
            }

            $retryable = $statusCode -eq 429 -or $statusCode -ge 500
            if (-not $retryable -or $attempt -eq 3) {
                throw "Forecast request failed ($Method $Path, HTTP $statusCode). $($_.Exception.Message)"
            }

            Start-Sleep -Seconds ([math]::Pow(2, $attempt - 1))
        }
    }
}

function Get-PlanField {
    param(
        [Parameter(Mandatory = $true)]
        [string] $Body,

        [Parameter(Mandatory = $true)]
        [string] $Label
    )

    $pattern = '(?m)^- \*\*' + [regex]::Escape($Label) + ':\*\*\s*(?<value>.*)$'
    $match = [regex]::Match($Body, $pattern)
    if (-not $match.Success) {
        throw "Task section is missing the '$Label' field."
    }

    return $match.Groups['value'].Value.Trim()
}

function Get-PlanTasks {
    param(
        [Parameter(Mandatory = $true)]
        [string] $Path
    )

    $resolvedPath = (Resolve-Path -LiteralPath $Path).Path
    $markdown = Get-Content -Raw -LiteralPath $resolvedPath
    $headingPattern = '(?ms)^### (?<id>(?:CFG|UI|SEC|AUT|RPT|INIT)-\d{2})\s+—\s+(?<name>[^\r\n]+)\r?\n(?<body>.*?)(?=^### |\z)'
    $matches = [regex]::Matches($markdown, $headingPattern)

    $tasks = foreach ($match in $matches) {
        $body = $match.Groups['body'].Value
        [pscustomobject]@{
            Id             = $match.Groups['id'].Value
            Name           = $match.Groups['name'].Value.Trim()
            Category       = Get-PlanField -Body $body -Label 'Category'
            Objective      = Get-PlanField -Body $body -Label 'Objective'
            DetailedScope  = Get-PlanField -Body $body -Label 'Detailed scope'
            Deliverable    = Get-PlanField -Body $body -Label 'Deliverable'
            Prerequisites  = Get-PlanField -Body $body -Label 'Strict technical prerequisites'
            BlockedStatus  = Get-PlanField -Body $body -Label 'Blocked status'
            Implementer    = Get-PlanField -Body $body -Label 'Recommended implementer role'
            Reviewer       = Get-PlanField -Body $body -Label 'Recommended reviewer/approver role'
            RoleRationale  = Get-PlanField -Body $body -Label 'Role rationale'
            Acceptance     = Get-PlanField -Body $body -Label 'Acceptance criteria'
            References     = Get-PlanField -Body $body -Label 'Specification references'
            Assumptions    = Get-PlanField -Body $body -Label 'Assumptions and open questions'
            SourcePath     = $resolvedPath
        }
    }

    if ($tasks.Count -ne 34) {
        throw "Expected 34 implementation tasks in the plan, but parsed $($tasks.Count)."
    }

    $duplicateIds = $tasks | Group-Object Id | Where-Object Count -gt 1
    if ($duplicateIds) {
        throw "Duplicate task IDs found: $($duplicateIds.Name -join ', ')."
    }

    return @($tasks)
}

function ConvertTo-Slug {
    param([Parameter(Mandatory = $true)][string] $Value)

    return (($Value.ToLowerInvariant() -replace '[^a-z0-9]+', '-') -replace '(^-|-$)', '')
}

function Get-TaskMarker {
    param([Parameter(Mandatory = $true)][string] $TaskId)

    return "[$importNamespace:task:$TaskId]"
}

function Get-CategoryMarker {
    param([Parameter(Mandatory = $true)][string] $Category)

    return "[$importNamespace:category:$(ConvertTo-Slug -Value $Category)]"
}

function Get-ImplementationDescription {
    param([Parameter(Mandatory = $true)] $Task)

    return @(
        Get-TaskMarker -TaskId $Task.Id
        "Source: ADR-008 Technical Implementation Plan"
        "Category: $($Task.Category)"
        ''
        "Objective: $($Task.Objective)"
        ''
        "Detailed scope: $($Task.DetailedScope)"
        ''
        "Deliverable: $($Task.Deliverable)"
        ''
        "Strict technical prerequisites: $($Task.Prerequisites)"
        ''
        "Blocked status: $($Task.BlockedStatus)"
        ''
        "Recommended implementer role: $($Task.Implementer)"
        "Recommended reviewer/approver role: $($Task.Reviewer)"
        "Role rationale: $($Task.RoleRationale)"
        ''
        "Acceptance criteria: $($Task.Acceptance)"
        ''
        "Specification references: $($Task.References)"
        ''
        "Assumptions and open questions: $($Task.Assumptions)"
    ) -join "`n"
}

function Find-ByMarker {
    param(
        [Parameter(Mandatory = $true)]
        [object[]] $ExistingTasks,

        [Parameter(Mandatory = $true)]
        [string] $Marker
    )

    return @($ExistingTasks | Where-Object {
        $null -ne $_.description -and $_.description.Contains($Marker)
    })
}

function Assert-NoUnmanagedTitleConflict {
    param(
        [Parameter(Mandatory = $true)]
        [object[]] $ExistingTasks,

        [Parameter(Mandatory = $true)]
        [string] $Title,

        [Parameter(Mandatory = $true)]
        [string] $Marker
    )

    $conflicts = @($ExistingTasks | Where-Object {
        $_.title -eq $Title -and ($null -eq $_.description -or -not $_.description.Contains($Marker))
    })

    if ($conflicts.Count -gt 0) {
        throw "An unmanaged Forecast task already uses the title '$Title'. Resolve the conflict before importing."
    }
}

$planTasks = Get-PlanTasks -Path $PlanPath
$projects = @(Invoke-ForecastRequest -Method GET -Path '/v1/projects')
if ($projects.Count -eq 1 -and $projects[0] -is [System.Array]) {
    $projects = $projects[0]
}

if ($PSCmdlet.ParameterSetName -eq 'ByName') {
    $matchingProjects = @($projects | Where-Object name -eq $ProjectName)
    if ($matchingProjects.Count -ne 1) {
        throw "Expected exactly one Forecast project named '$ProjectName'; found $($matchingProjects.Count)."
    }
    $project = $matchingProjects[0]
}
else {
    $matchingProjects = @($projects | Where-Object id -eq $ProjectId)
    if ($matchingProjects.Count -ne 1) {
        throw "Forecast project ID $ProjectId was not found."
    }
    $project = $matchingProjects[0]
}

$hierarchyEnabled = $false
if ($project.PSObject.Properties.Name -contains 'use_sub_tasks') {
    $hierarchyEnabled = [bool] $project.use_sub_tasks
}
elseif ($project.PSObject.Properties.Name -contains 'task_levels') {
    $hierarchyEnabled = [int] $project.task_levels -eq 2
}
else {
    throw "Forecast did not return a recognized hierarchy field for project '$($project.name)'."
}

if (-not $hierarchyEnabled) {
    throw "Project '$($project.name)' does not have Forecast task hierarchy enabled. Enable sub-tasks before this import can run."
}

$categoryParent = $null
if (-not [string]::IsNullOrWhiteSpace($ParentCompanyTaskId)) {
    $normalizedCompanyTaskId = $ParentCompanyTaskId.Trim() -replace '^[Tt]', ''
    if ($normalizedCompanyTaskId -notmatch '^\d+$') {
        throw "ParentCompanyTaskId '$ParentCompanyTaskId' must be a Forecast task number such as T25856."
    }

    $categoryParent = Invoke-ForecastRequest -Method GET -Path "/v3/tasks/company_task_id/$normalizedCompanyTaskId"
    if ([long] $categoryParent.project_id -ne [long] $project.id) {
        throw "Parent task T$normalizedCompanyTaskId belongs to project $($categoryParent.project_id), not project $($project.id)."
    }
}

$existingTasks = @(Invoke-ForecastRequest -Method GET -Path "/v3/projects/$($project.id)/tasks")
if ($existingTasks.Count -eq 1 -and $existingTasks[0] -is [System.Array]) {
    $existingTasks = $existingTasks[0]
}
$categories = @($planTasks | Select-Object -ExpandProperty Category -Unique)
$results = [System.Collections.Generic.List[object]]::new()
$categoryIds = @{}

Write-Host "Forecast project: $($project.name) (ID $($project.id))"
if ($null -ne $categoryParent) {
    Write-Host "Category parent: T$normalizedCompanyTaskId — $($categoryParent.title) (internal ID $($categoryParent.id))"
}
Write-Host "Plan inventory: $($categories.Count) category tasks + $($planTasks.Count) implementation tasks = $($categories.Count + $planTasks.Count) total"
Write-Host "Mode: $(if ($Apply) { 'APPLY' } else { 'DRY RUN' })"

foreach ($category in $categories) {
    $title = $category
    $marker = Get-CategoryMarker -Category $category
    $matches = @(Find-ByMarker -ExistingTasks $existingTasks -Marker $marker)
    if ($matches.Count -gt 1) {
        throw "Multiple managed category tasks found for '$category'."
    }

    if ($matches.Count -eq 1) {
        $actualParentId = $null
        if ($matches[0].PSObject.Properties.Name -contains 'parent_task_id') {
            $actualParentId = $matches[0].parent_task_id
        }
        $expectedParentId = if ($null -ne $categoryParent) { [long] $categoryParent.id } else { $null }
        if (($null -eq $expectedParentId -and $null -ne $actualParentId) -or
            ($null -ne $expectedParentId -and [long] $actualParentId -ne $expectedParentId)) {
            throw "Managed category task '$category' is not nested under the expected parent task."
        }

        Assert-NoUnmanagedTitleConflict -ExistingTasks $existingTasks -Title $title -Marker $marker
        $action = 'Skipped'
        if ($matches[0].title -ne $title) {
            if ($Apply) {
                $updated = Invoke-ForecastRequest -Method PUT -Path "/v3/tasks/$($matches[0].id)" -Body @{
                    title = $title
                }
                $matches[0] = $updated
                $action = 'Updated'
            }
            else {
                $action = 'WouldUpdate'
            }
        }

        $categoryIds[$category] = [long] $matches[0].id
        $results.Add([pscustomobject]@{ Type = 'Category'; Key = $category; Title = $title; Action = $action; ForecastId = $matches[0].id })
        continue
    }

    Assert-NoUnmanagedTitleConflict -ExistingTasks $existingTasks -Title $title -Marker $marker
    if (-not $Apply) {
        $results.Add([pscustomobject]@{ Type = 'Category'; Key = $category; Title = $title; Action = 'WouldCreate'; ForecastId = $null })
        continue
    }

    $children = @($planTasks | Where-Object Category -eq $category | ForEach-Object Id)
    $description = @(
        $marker
        'Source: ADR-008 Technical Implementation Plan'
        'Purpose: Organizational parent task for implementation-plan tasks in this category.'
        "Child plan tasks: $($children -join ', ')"
    ) -join "`n"

    $categoryBody = @{
        title       = $title
        description = $description
        project_id  = [long] $project.id
        estimate    = 0
        approved    = $true
    }
    if ($null -ne $categoryParent) {
        $categoryBody.parent_task_id = [long] $categoryParent.id
    }

    $created = Invoke-ForecastRequest -Method POST -Path '/v3/tasks' -Body $categoryBody
    $categoryIds[$category] = [long] $created.id
    $existingTasks += $created
    $results.Add([pscustomobject]@{ Type = 'Category'; Key = $category; Title = $title; Action = 'Created'; ForecastId = $created.id })
}

foreach ($task in $planTasks) {
    $title = "$($task.Id) — $($task.Name)"
    $marker = Get-TaskMarker -TaskId $task.Id
    $matches = @(Find-ByMarker -ExistingTasks $existingTasks -Marker $marker)
    if ($matches.Count -gt 1) {
        throw "Multiple managed implementation tasks found for '$($task.Id)'."
    }

    if ($matches.Count -eq 1) {
        $expectedParentId = [long] $categoryIds[$task.Category]
        if ($matches[0].PSObject.Properties.Name -notcontains 'parent_task_id' -or
            [long] $matches[0].parent_task_id -ne $expectedParentId) {
            throw "Managed task '$($task.Id)' is not nested under the expected category task $expectedParentId."
        }
        $results.Add([pscustomobject]@{ Type = 'Implementation'; Key = $task.Id; Title = $title; Action = 'Skipped'; ForecastId = $matches[0].id })
        continue
    }

    Assert-NoUnmanagedTitleConflict -ExistingTasks $existingTasks -Title $title -Marker $marker
    if (-not $Apply) {
        $results.Add([pscustomobject]@{ Type = 'Implementation'; Key = $task.Id; Title = $title; Action = 'WouldCreate'; ForecastId = $null })
        continue
    }

    if (-not $categoryIds.ContainsKey($task.Category)) {
        throw "No Forecast category ID is available for '$($task.Category)'."
    }

    $created = Invoke-ForecastRequest -Method POST -Path '/v3/tasks' -Body @{
        title          = $title
        description    = Get-ImplementationDescription -Task $task
        project_id     = [long] $project.id
        parent_task_id = [long] $categoryIds[$task.Category]
        estimate       = 0
        approved       = $true
    }
    $existingTasks += $created
    $results.Add([pscustomobject]@{ Type = 'Implementation'; Key = $task.Id; Title = $title; Action = 'Created'; ForecastId = $created.id })
}

$results | Format-Table Type, Key, Action, ForecastId, Title -AutoSize

$summary = $results | Group-Object Action | Sort-Object Name | ForEach-Object {
    "$($_.Name)=$($_.Count)"
}
Write-Host "Summary: $($summary -join ', ')"

if (-not $Apply) {
    if (@($results | Where-Object Action -eq 'WouldCreate').Count -gt 0) {
        Write-Host 'No Forecast data was changed. Run again with -Apply to create the listed tasks.'
    }
    else {
        Write-Host 'No Forecast data was changed. All managed tasks already exist with the expected hierarchy.'
    }
}
