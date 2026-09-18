# Document Control

This component governs how Terra-Gen creates, classifies, approves, releases, distributes, secures, and migrates controlled documents in Intelex. The Phase 1 direction preserves the standard Intelex Document Control model wherever practical, centralizes administration, and applies additional control according to governance need.

[Documentation portal](../README.md) · [Phase 1 change log](../CHANGELOG.md) · [Open tasks and questions](../OPEN-TASKS-AND-QUESTIONS.md)

## Scope

Document Control covers the controlled-document lifecycle, administration model, document taxonomy, location applicability, supporting files, security exceptions, external authoring, numbering, approval, release, distribution, and migration sequencing.

It does not define the content or operating workflow of other applications. When another application uses a controlled document—for example, as training content—its application-specific behavior remains governed by that application's ADRs.

## Current Direction

- Retain the standard Intelex configuration unless a confirmed requirement justifies customization.
- Use centralized administration while allowing business participation through governed workflow roles.
- Apply formal control based on governance need rather than placing every file into the same lifecycle.
- Model independently governed supporting files as related controlled documents.
- Classify documents with independent controlled taxonomies and use location placement and shortcuts for applicability.
- Keep documents broadly discoverable by default and apply security restrictions by exception.
- Author content externally, then manage release candidates and controlled publication in Intelex.
- Require deliberate release and distribution rather than treating approval alone as publication.
- Validate migration with a representative 20–30 document pilot, then use a metadata-driven production load with a controlled source-change period.

## Decision Register

| ADR | Status | Decision |
| --- | --- | --- |
| [ADR-001](ADRs/ADR-001-preserve-standard-document-control-configuration.md) | Accepted | Preserve the Standard Document Control Configuration |
| [ADR-002](ADRs/ADR-002-use-centralized-document-control-administration.md) | Accepted | Use Centralized Document Control Administration |
| [ADR-003](ADRs/ADR-003-scope-document-control-by-governance-need.md) | Accepted | Scope Document Control by Governance Need |
| [ADR-004](ADRs/ADR-004-register-supporting-files-as-related-controlled-documents.md) | Accepted | Register Supporting Files as Related Controlled Documents |
| [ADR-005](ADRs/ADR-005-classify-documents-with-independent-controlled-taxonomies.md) | Accepted | Classify Documents with Independent Controlled Taxonomies |
| [ADR-006](ADRs/ADR-006-use-location-placement-and-shortcuts-for-applicability.md) | Accepted | Use Location Placement and Shortcuts for Applicability |
| [ADR-007](ADRs/ADR-007-apply-document-security-by-exception.md) | Accepted | Apply Document Security by Exception |
| [ADR-008](ADRs/ADR-008-author-externally-and-control-release-candidates-in-intelex.md) | Accepted | Author Externally and Control Release Candidates in Intelex |
| [ADR-009](ADRs/ADR-009-use-intelex-managed-document-numbering.md) | Proposed | Use Intelex-Managed Document Numbering |
| [ADR-010](ADRs/ADR-010-use-configurable-sequential-approval-processes.md) | Proposed | Use Configurable Sequential Approval Processes |
| [ADR-011](ADRs/ADR-011-require-deliberate-release-and-distribution.md) | Accepted | Require Deliberate Release and Distribution |
| [ADR-012](ADRs/ADR-012-migrate-corporate-documents-before-site-content.md) | Accepted | Validate Document Migration through a Representative Pilot and Metadata-Driven Production Load |

## Dependencies and Boundaries

- Platform Administration supplies location structures, visibility patterns, and workflow-role concepts.
- Training Management determines completion authority, retraining, and version traceability when controlled documents are used as training content.
- Location applicability must remain distinct from document classification and security.
- Approval, release, and distribution are separate lifecycle events and should not be collapsed in implementation.

## Source Evidence

- [Design Workshop Day 3 — Morning, September 17, 2026](<raw artifacts/meeting_transcripts/2026-09-17-terra-gen-summit-ehsq-design-workshop-day-3-morning.md>)

Each ADR cites the relevant workshop timestamps in its **More Information** section.

## Open Work

- Approve or revise the proposed numbering approach.
- Define approval-route variants, role ownership, escalation, and delegation.
- Select the representative pilot set; establish the migration inventory, metadata mapping, validation, production sequencing, source-change cutoff, and reconciliation rules.
- Define the controlled taxonomies, document types, applicability rules, and security exceptions.
- Confirm operational ownership for administration, release, distribution, periodic review, and obsolete content.

Track material Phase 1 work in the [consolidated open-task register](../OPEN-TASKS-AND-QUESTIONS.md).

## Maintaining This Component

Keep the decision register synchronized with ADR statuses and titles. Add source artifacts without rewriting their evidentiary content, record material ADR changes in the Phase 1 change log, and preserve cross-domain links when Document Control decisions affect training, security, or workflow routing.
