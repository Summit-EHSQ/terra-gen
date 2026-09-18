---
status: proposed
date: 2026-09-18
deciders: []
consulted:
  - Amy Roth
  - Dave McLean
informed:
  - Matthew Futter
primary_application: Intelex Platform Administration
secondary_applications: Document Control, Training Management, Inspections, Incident Management
---

# Use Shared Tasks and Security-Aware Reporting

## Context and Problem Statement

Workflow tasks from multiple applications converge in the platform task framework. Standard views support personal tasks, direct reports, locations, and administrators, but the staff view does not traverse an arbitrary management hierarchy.

## Decision Drivers

* One operational inventory for cross-application work.
* Least-privilege access.
* Supervisor and general-manager oversight.
* Reusable reports and dashboards.
* Limited report-authoring licenses.

## Considered Options

* Build application-specific task lists.
* Grant broad all-task access to operational leaders.
* Use standard task views and supplement hierarchy gaps with security-aware reports and dashboards.

## Decision Outcome

Chosen option: **Use standard task views and supplement hierarchy gaps with security-aware reports and dashboards.**

Individuals will use My Tasks, supervisors will use direct-report views, designated local leaders may use location-scoped views, and unrestricted task access will remain administrative. Reports for extended teams may traverse a practical, explicitly bounded number of supervisor relationships.

Reports will normally be authored centrally and shared. The same report may return different results for different viewers because execution respects the viewer's security context. Scheduling a report under another user's context requires administrative control and an approved access rationale.

## Consequences

* Users receive one cross-application task experience.
* Extended-team oversight does not require unrestricted access.
* Hierarchy depth and dashboard measures require explicit design.
* Central report authors may become a bottleneck.
* Scheduled distribution can bypass expected access patterns if not governed.

## More Information

Transcript references: 02:30:32–02:39:17 and 02:43:13–02:50:54.
