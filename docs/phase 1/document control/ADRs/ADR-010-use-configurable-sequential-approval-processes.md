---
status: proposed
date: 2026-09-18
last_revised: 2026-11-10
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

The November 10 discussion distinguishes loading a provisional document preview from invoking its future approval route. Waiting for approver metadata is delaying inspection of generated policy headers and metadata mapping. Dave states that approvers are not needed for the initial load, although recording them prepares the next revision. [Call, 0:47:05–0:49:14]

## Decision Drivers

* Variation among document types.
* Sequential approval and audit evidence.
* Continuity during absences and personnel changes.
* Ability to introduce stricter rules after patterns stabilize.
* Preview generated documents and metadata mapping before committing bulk policy-formatting effort. [Call, 0:49:21–0:51:24; 1:06:14–1:06:38]

## Considered Options

* Use one fixed process for every document.
* Define mandatory fixed processes by domain from the outset.
* Use configurable processes, supplemented by roles and fixed processes where rules become stable.
* Require every future revision approver before importing even provisional preview data — analyst-derived sequencing alternative, not required by the call.

## Decision Outcome

Chosen option: **Use configurable processes, supplemented by roles and fixed processes where rules become stable.**

Later revisions will normally inherit the previous approvers. Responsibilities attached to a function should use maintained roles rather than hard-coded people. Multiple approvers in one step are alternatives on a first-completer basis; mandatory individual approvals require separate sequential steps. Advisory reviewers will be used principally when evidence of consultation is required, not for active co-authoring.

For the provisional test import, do not make future revision-approver values a prerequisite to loading a usable preview. Files still need the metadata necessary for registration and display; a file-only staging upload is not a finished user preview. Start with available representative records, inspect the generated headers and mappings, and correct provisional values on a subsequent run. Recording approvers in advance remains useful for later revision routing. [Call, 0:47:05–0:51:24; 1:05:53–1:06:38]

This is a test-import sequencing clarification. It does not remove an applicable approval step, authorize release without approval, or establish a production rule allowing missing approvers. The accepted [ADR-012 pilot](ADR-012-migrate-corporate-documents-before-site-content.md) and [ADR-011 release/distribution controls](ADR-011-require-deliberate-release-and-distribution.md) remain authoritative. The exact mandatory import fields and final approval/header mapping are still unresolved.

## Consequences

* Initial routing can fit each document without premature proliferation of lifecycles.
* Role-based assignments are resilient to personnel changes.
* Flexibility can produce inconsistent or weak segregation of duties without governance.
* Mandatory domain routes and approval templates remain to be defined.
* Architectural analysis: provisional imported values need correction before they are relied on for production routing or controlled release.

## More Information

Transcript references: 01:56:26–02:17:26. See Platform Administration ADR-005.

Additional evidence: [November 10 asset-hierarchy call](<../raw artifacts/meeting_transcripts/2026-11-10-summit-tg-asset-hierarchy-setup.md>), 0:47:05–0:51:24, metadata and approver distinction; 1:04:11–1:06:38, initial partial load and core-team preview. Approval-field/header design is not resolved by the statement that an import can proceed. Original date and proposed status are preserved; accepted authoring, pilot and release ADRs are unchanged.
