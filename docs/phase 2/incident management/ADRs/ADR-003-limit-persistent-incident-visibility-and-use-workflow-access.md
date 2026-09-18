---
status: accepted
date: 2026-09-18
deciders:
  - Amy Roth
consulted:
  - Dave McLean
informed:
  - Matthew Futter
primary_application: Incident Management
secondary_applications: Intelex Platform Administration, Employee Management
---

# Limit Persistent Incident Visibility and Use Workflow-Derived Access

## Context and Problem Statement

The initial location hierarchy is establishment-based and does not distinguish teams or departments within an establishment. Giving supervisors general incident-view permission could therefore expose sensitive records outside their immediate responsibility. Intelex can allow a user assigned a workflow task to access the applicable record without granting continuing view permission.

## Decision Drivers

* Protect employee and incident privacy.
* Allow supervisors and other participants to complete assigned work.
* Avoid a second hierarchy solely for incident access.
* Distinguish workflow participation from continuing visibility.
* Keep persistent access explicit and auditable.

## Considered Options

* Give supervisors continuing access to all incidents at their establishment.
* Secure incidents through a second departmental hierarchy.
* Use filtered lists while retaining broad underlying access.
* Limit persistent access and use workflow assignments for temporary access.

## Decision Outcome

Chosen option: **Limit persistent incident access and use workflow assignments for temporary task access.**

Persistent visibility will be granted only to approved groups such as EHS personnel, authorized senior managers, investigators, and a governed incident-viewer group. A supervisor or other participant assigned an incident workflow task may view the record while completing that task. Completion of the task does not confer continuing access unless the person independently belongs to an authorized viewer group.

Filtered views will not be treated as security controls.

## Consequences

* Sensitive incidents are not broadly visible merely because users share an establishment.
* Supervisors can complete required verification or review tasks.
* Earlier workflow participants may not see the record after their task is complete.
* Viewer-group membership requires governance and periodic review.
* Reporting must respect the same underlying security context.

## More Information

Exact viewer-group membership remains a business configuration decision. Platform Administration ADR-002 is superseded by this application-specific access model and the single hierarchy in Platform Administration ADR-001.

Transcript references: 00:38:35–00:46:49.
