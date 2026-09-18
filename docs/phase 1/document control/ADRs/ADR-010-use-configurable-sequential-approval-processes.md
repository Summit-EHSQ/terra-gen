---
status: proposed
date: 2026-09-18
deciders: []
consulted:
  - Amy Roth
  - Dave McLean
informed:
  - Matthew Futter
primary_application: Document Control
secondary_applications: Intelex Platform Administration
---

# Use Configurable Sequential Approval Processes

## Context and Problem Statement

Approval requirements vary by document and domain. The product supports configurable and fixed processes, named people, groups, roles, sequential steps, and advisory reviewers.

## Decision Drivers

* Variation among document types.
* Sequential approval and audit evidence.
* Continuity during absences and personnel changes.
* Ability to introduce stricter rules after patterns stabilize.

## Considered Options

* Use one fixed process for every document.
* Define mandatory fixed processes by domain from the outset.
* Use configurable processes, supplemented by roles and fixed processes where rules become stable.

## Decision Outcome

Chosen option: **Use configurable processes, supplemented by roles and fixed processes where rules become stable.**

Later revisions will normally inherit the previous approvers. Responsibilities attached to a function should use maintained roles rather than hard-coded people. Multiple approvers in one step are alternatives on a first-completer basis; mandatory individual approvals require separate sequential steps. Advisory reviewers will be used principally when evidence of consultation is required, not for active co-authoring.

## Consequences

* Initial routing can fit each document without premature proliferation of lifecycles.
* Role-based assignments are resilient to personnel changes.
* Flexibility can produce inconsistent or weak segregation of duties without governance.
* Mandatory domain routes and approval templates remain to be defined.

## More Information

Transcript references: 01:56:26–02:17:26. See Platform Administration ADR-005.
