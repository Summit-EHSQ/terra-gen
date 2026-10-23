# Training and Competency Management

This component governs how Terra-Gen assigns, delivers, records, renews, and audits training and qualifications in Intelex, including the planned replacement of TPC.

[Documentation portal](../README.md) · [Phase 1 change log](../CHANGELOG.md) · [Open tasks and questions](../OPEN-TASKS-AND-QUESTIONS.md)

## Scope

Training Management covers job-code-mapped workgroups, recurring requirements, live and self-service delivery, completion authority, atomic courses, custom learning packages, content refresh, TPC replacement, content versioning, and historical records. Competency Management covers sequenced qualifications, materially different qualification scopes, authorized attestation, and policy-driven validity and renewal.

Training courses and completions form the foundation for qualifications, but the two layers remain distinct because qualifications may sequence training, practical assessments, attestations, and renewal-specific requirements.

## Current Direction

- Assign training through reusable workgroups derived from position or job codes.
- Use individual completion-based recurrence for self-service training.
- Represent equivalent live and self-service delivery against a common course requirement where appropriate.
- Match completion authority and evidence to the nature of each requirement.
- Model independently governed topics as atomic courses beneath broader program roll-ups.
- Track qualifications through a standalone configurable requirement workflow; Training Management records may provide evidence but do not directly set qualification status in the initial architecture.
- Preserve distinct qualification definitions when populations or scopes require materially different steps.
- Validate custom learning packages before adoption and govern ongoing MARCOM refreshes.
- Require objective evidence and centralized administrator completion for qualification steps.
- Proposed: replace TPC while preserving version traceability and employee history.
- Use a reusable MARCOM catalogue and pin a specific provider release/file when the Training Course Version selects or changes its MARCOM Course. A catalogue update leaves existing courses unchanged; the training user manually creates a Course Version to adopt a newer release.
- Proposed catalogue model: one language-specific Entry per provider Product Code, retained Content Releases with an explicit current pointer, and previous-filename Alias children. Three-digit IDs remain searchable attributes because they repeat across industries.
- MARCOM Classification, MARCOM Industry, and MARCOM Topic are separate catalogue objects; each Content Release references one record in each catalogue and preserves its original provider labels.
- Proposed: constrain the initial API-assisted catalogue load to non-personal course data in test and deactivate temporary credentials afterward.

## Decision Register

| ADR | Status | Decision |
| --- | --- | --- |
| [ADR-001](ADRs/ADR-001-assign-training-requirements-through-job-code-mapped-workgroups.md) | Accepted | Assign Training Requirements through Position-Code-Mapped Workgroups |
| [ADR-002](ADRs/ADR-002-use-individual-recurrence-for-self-service-training.md) | Accepted | Use Individual Recurrence for Self-Service Training |
| [ADR-003](ADRs/ADR-003-use-a-common-course-requirement-across-delivery-methods.md) | Proposed | Use a Common Course Requirement Across Delivery Methods |
| [ADR-004](ADRs/ADR-004-match-completion-authority-to-the-training-requirement.md) | Proposed | Match Completion Evidence and System of Record to the Requirement |
| [ADR-005](ADRs/ADR-005-model-independently-governed-training-topics-as-atomic-courses.md) | Proposed | Model Independently Governed Training Topics as Atomic Courses |
| [ADR-006](ADRs/ADR-006-build-qualifications-as-a-separate-layer-over-training-management.md) | Accepted | Track Qualifications through a Standalone Configurable Requirement Workflow |
| [ADR-007](ADRs/ADR-007-use-separate-qualification-definitions-for-materially-different-scopes.md) | Proposed | Use Separate Qualification Definitions for Materially Different Scopes |
| [ADR-008](ADRs/ADR-008-support-authorized-competency-attestation.md) | Proposed | Support Authorized Competency Attestation |
| [ADR-009](ADRs/ADR-009-define-qualification-validity-and-renewal-from-governing-policy.md) | Proposed | Define Qualification Validity and Renewal from Governing Policy |
| [ADR-010](ADRs/ADR-010-validate-existing-custom-learning-packages-before-adoption.md) | Accepted | Validate Existing Custom Learning Packages before Adoption |
| [ADR-011](ADRs/ADR-011-establish-an-ongoing-marcom-content-refresh-process.md) | Accepted | Establish an Ongoing MARCOM Content Refresh Process |
| [ADR-012](ADRs/ADR-012-replace-tpc-with-intelex-training-management.md) | Proposed | Replace TPC with Intelex Training Management |
| [ADR-013](ADRs/ADR-013-version-training-content-for-audit-traceability.md) | Proposed | Version Training Content for Audit Traceability |
| [ADR-014](ADRs/ADR-014-preserve-training-history-across-employment-status-changes.md) | Proposed | Preserve Training History across Employment Status Changes |
| [ADR-015](ADRs/ADR-015-require-objective-evidence-and-centralized-qualification-completion.md) | Accepted | Require Objective Evidence and Centralized Qualification Completion |
| [ADR-016](ADRs/ADR-016-use-a-reusable-marcom-content-catalogue.md) | Proposed | Use a Reusable MARCOM Content Catalogue |
| [ADR-017](ADRs/ADR-017-pin-marcom-content-to-training-course-versions.md) | Proposed | Pin MARCOM Content to Training Course Versions |
| [ADR-018](ADRs/ADR-018-constrain-api-assisted-marcom-catalogue-loading.md) | Proposed | Constrain API-Assisted MARCOM Catalogue Loading |

See the [October 23 ADR reconciliation plan](ADR-RECONCILIATION-2026-10-23.md) for the disposition of every prior ADR, new candidates, and evidence gaps.

The [metadata follow-up reconciliation](ADR-RECONCILIATION-2026-10-23-METADATA.md) refines ADR-013/016/017/018. [ADR-016](ADRs/ADR-016-use-a-reusable-marcom-content-catalogue.md) contains the target object model, relationship diagram, field mapping, and release rules; the [metadata analysis](MARCOM-METADATA-ANALYSIS-2026-10-23.md) records 358 English and 194 Spanish entries and import anomalies.

The [MARCOM Course Catalog Technical Specification](MARCOM-COURSE-CATALOG-TECHNICAL-SPECIFICATION.md) translates ADR-016/017 into a proposed logical model, canonical field contracts, concrete catalogue seed values, automation, permissions, import rules, and acceptance criteria. No `.ipack` baseline is available; tenant metadata and execution mechanisms remain verification gates.

The [MARCOM Course Catalog Implementation Plan](MARCOM-COURSE-CATALOG-IMPLEMENTATION-PLAN.md) contains 20 active assignable configuration tasks (former CFG-15 is retired), minimum implementer and reviewer roles, technical dependencies, blocked external inputs, and coverage of all 80 field definitions. Catalogue configuration values are included; provider-content migration, formal testing, and deployment are separate workstreams.

## Dependencies and Boundaries

- Employee Management supplies persistent employee identity, lifecycle status, and position-code inputs.
- Platform Administration supplies employee placement, access, and shared organizational structures.
- Document Control governs controlled documents that may serve as training content; Training Management governs assignment, completion, retraining, and learner evidence.
- Qualification validity must be derived from governing policy rather than inferred solely from supporting course expiry.

## Source Evidence

- [MARCOM Course File Name and Metadata Guide](<raw artifacts/MARCOM Adaptive Learning Course File Name and Metadata Guide 09 10 26.xlsx>) — only `English language` and `Spanish language` analyzed; both discontinued tabs excluded. Provider SCORM descriptions document adaptive chapter test-out intent; target compatibility remains untested.
- [MARCOM Requirements Knowledge Transfer, October 23, 2026](<raw artifacts/meeting_transcripts/2026-10-23-terra-gen-training-management-marcom-requirements-knowledge-transfer.md>) — internal direction; client approval is not established.
- [Training Management Design Prep, September 8, 2026](<raw artifacts/meeting_transcripts/2026-09-08-terra-gen-summit-ehsq-training-mgmt-design-prep.md>)
- [Design Workshop Day 1 — Afternoon, September 15, 2026](<raw artifacts/meeting_transcripts/2026-09-15-terra-gen-summit-ehsq-design-workshop-day-1-afternoon.md>)
- [Design Workshop Day 2 — Morning, September 16, 2026](<raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-morning.md>)
- [Design Workshop Day 2 — Afternoon, September 16, 2026](<raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-afternoon.md>)
- [Design Workshop Day 3 — Morning, September 17, 2026](<raw artifacts/meeting_transcripts/2026-09-17-terra-gen-summit-ehsq-design-workshop-day-3-morning.md>)

ADR **More Information** sections identify the relevant timestamps.

## Open Work

- Approve or revise the twelve proposed training and competency ADRs.
- Build the governed course, workgroup, requirement, and delivery-equivalence catalogue.
- Derive qualification definitions, assessor authority, validity, renewal, lapse, and reinstatement rules from policy.
- Design authorized competency attestation and its evidence model.
- Validate SCORM and custom-package compatibility.
- Test the supplied Incident Reporting and Fleet Safety packaged-learning samples under `content/phase 1/training management/`; repository presence does not establish compatibility.
- Define TPC inventory, migration, coexistence, cutover, historical-data treatment, and decommissioning.
- Prototype exact course, document, quiz, and SCORM version traceability.
- Establish the MARCOM refresh operating model.
- Review the proposed Entry/Release/Alias schema, separate MARCOM Classification/Industry/Topic catalogue objects, and full metadata mapping; confirm provider key stability, current-release designation, release retention, guarded selection-time release/file pinning, asset availability, and import anomalies. Existing Training Management functionality owns learner attempts, completions, and historical evidence. Validate provider-described adaptive chapter test-out in actual English/Spanish packages and confirm release notifications.
- Configure assignment and history behavior for termination, leave, rehire, and job changes.

Track these items in the [consolidated open-task register](../OPEN-TASKS-AND-QUESTIONS.md).

## Maintaining This Component

Keep courses, requirements, delivery methods, completions, and qualifications conceptually distinct. Changes to employee lifecycle data or controlled-document versions must be assessed for assignment and audit effects. Record policy interpretations explicitly and avoid applying a single renewal rule across qualifications without source authority.

The [course-version pinning decision](<raw artifacts/2026-10-23-marcom-course-version-pinning-decision.md>) replaces automatic package propagation. See the [pinning reconciliation](ADR-RECONCILIATION-2026-10-23-PINNING.md) for the revised ADRs and retired task.
