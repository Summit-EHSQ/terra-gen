# Inspections

This component governs the Phase 1 inspection model, from configurable checklists and mobile execution through review, corrective actions, reporting, and migration from SafetyCulture.

[Documentation portal](../README.md) · [Phase 1 change log](../CHANGELOG.md) · [Open tasks and questions](../OPEN-TASKS-AND-QUESTIONS.md)

## Scope

Inspections covers program-specific configuration, offline execution, branching and response behavior, categorical outcomes, review and approval, portable records, frequency requirements, reporting, corrective actions, equipment and asset context, regulatory consolidation, and phased SafetyCulture replacement.

It does not replace Incident Management for near misses or other events that meet incident criteria. Corrective actions have a related but distinct lifecycle from their originating inspections.

## Current Direction

- Support user-specific mobile and offline inspection execution.
- Configure checklist and workflow behavior by inspection program.
- Use restrained conditional branching and complete, sectioned checklists.
- Hide numeric scores and report categorical outcomes.
- Create actions directly from responses without a formal Finding layer in the current design.
- Route near misses to Incident Management.
- Separate inspection completion from corrective-action completion.
- Proposed: preserve atomic inspection records, consolidate regulatory reporting, and use governed site, resource, equipment, and asset context.
- Proposed: replace SafetyCulture incrementally through a three-program initial release rather than through an unvalidated big-bang cutover.

## Decision Register

| ADR | Status | Decision |
| --- | --- | --- |
| [ADR-001](ADRs/ADR-001-support-mobile-and-offline-inspection-execution.md) | Accepted | Support Mobile and Offline Inspection Execution |
| [ADR-002](ADRs/ADR-002-configure-inspection-behavior-by-program.md) | Accepted | Configure Inspection Behavior by Inspection Program |
| [ADR-003](ADRs/ADR-003-support-conditional-questions-and-branching.md) | Accepted | Support Conditional Questions and Branching |
| [ADR-004](ADRs/ADR-004-disable-numeric-scoring.md) | Accepted | Hide Numeric Scores and Use Categorical Inspection Outcomes |
| [ADR-005](ADRs/ADR-005-use-responses-and-direct-actions-without-formal-findings.md) | Accepted | Use Inspection Responses and Direct Actions without Formal Findings |
| [ADR-006](ADRs/ADR-006-add-configurable-review-and-approval-workflow.md) | Accepted | Add Configurable Review and Approval Workflow |
| [ADR-007](ADRs/ADR-007-generate-branded-portable-inspection-records.md) | Proposed | Generate Branded, Portable Inspection Records |
| [ADR-008](ADRs/ADR-008-track-configurable-site-inspection-frequency.md) | Proposed | Track Inspection Frequency as Configurable Site-Level Requirements |
| [ADR-009](ADRs/ADR-009-report-inspection-outcomes-and-trends.md) | Proposed | Report on Deficiencies, Completion, Timeliness, and Trends |
| [ADR-010](ADRs/ADR-010-replace-safetyculture-incrementally.md) | Proposed | Replace SafetyCulture Incrementally Through a Three-Program Initial Release |
| [ADR-011](ADRs/ADR-011-enforce-complete-sectioned-checklists.md) | Accepted | Enforce Complete, Sectioned Checklists |
| [ADR-012](ADRs/ADR-012-configure-equipment-references-by-program.md) | Accepted | Configure Equipment References by Inspection Program |
| [ADR-013](ADRs/ADR-013-record-immediate-corrections-as-completed-actions.md) | Accepted | Record Immediate Corrections as Completed Actions |
| [ADR-014](ADRs/ADR-014-route-near-misses-to-incident-management.md) | Accepted | Route Near Misses to Incident Management |
| [ADR-015](ADRs/ADR-015-separate-inspection-and-action-lifecycles.md) | Accepted | Separate Inspection and Corrective-Action Lifecycles |
| [ADR-016](ADRs/ADR-016-record-atomic-inspections-and-consolidate-regulatory-reporting.md) | Proposed | Record Atomic Inspections and Consolidate Regulatory Reporting |
| [ADR-017](ADRs/ADR-017-use-governed-site-and-asset-taxonomy.md) | Proposed | Use a Governed Site and Asset Taxonomy for Inspection Context |

## Dependencies and Boundaries

- Platform Administration supplies hierarchies, record visibility, and location-scoped reviewer roles.
- Employee Management supplies identity, access assignments, and mobile authentication.
- Incident Management owns near-miss and incident records.
- The shared site/resource/asset taxonomy determines inspection applicability, frequency, attribution, equipment selection, and reporting roll-ups.

## Source Evidence

- [Inspections Design Prep, August 26, 2026](<raw artifacts/meeting_transcripts/2026-08-26-terra-gen-summit-inspections-design-prep.md>)
- [Design Workshop Day 2 — Morning, September 16, 2026](<raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-morning.md>)
- [Design Workshop Day 2 — Afternoon, September 16, 2026](<raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-afternoon.md>)

ADR **More Information** sections identify the relevant timestamps.

## Open Work

- Approve frequency, portable-record, reporting, migration, regulatory-consolidation, and taxonomy proposals.
- Define the governed site/resource/asset model and ownership.
- Complete mobile/offline synchronization, conflict, attachment, and device-loss design.
- Configure each initial program's sections, responses, branching, evidence, actions, review, and outcomes.
- Prototype and govern the official inspection PDF.
- Define KPI formulas, reporting dimensions, thresholds, audiences, and drill-through.
- Inventory SafetyCulture content and decide migration, coexistence, cutover, and decommissioning.
- Validate whether combined regulatory outputs from atomic inspections meet governing requirements.

Track these items in the [consolidated open-task register](../OPEN-TASKS-AND-QUESTIONS.md).

## Maintaining This Component

Keep program configuration separate from shared platform foundations. When changing response, action, or classification behavior, review reporting semantics and downstream Incident Management effects. Record future adoption of formal findings or audit workflows in new ADRs rather than silently expanding the current model.
