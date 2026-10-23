---
status: proposed
date: 2026-09-17
deciders: []
consulted:
  - Dave McLean
informed: []
primary_application: Training Management
secondary_applications: Document Control, Quiz Builder
---

# Version Training Content for Audit Traceability

## Context and Problem Statement

An auditor may need to determine the controlled document, quiz, or SCORM content used for a historical completion. The Document Control workshop established that governed training source files may be approved and revisioned in Document Control, while executable copies such as SCORM packages must also be attached to the applicable Training Management course. A document revision does not necessarily require a course-version change or organization-wide retraining.

## Decision Drivers

* Reconstruct the content used for a completion.
* Distinguish administrative and material changes.
* Preserve course and quiz history.
* Avoid unnecessary retraining.
* Keep training-impact assessment as a governed decision.
* Distinguish the controlled source from the executable course copy.

## Considered Options

* Resolve all completions to the latest document version.
* Automatically publish a course version for every document revision.
* Review each document revision and explicitly create or update the applicable course version.
* Capture the exact released document version automatically at completion.

## Decision Outcome

Chosen option: **Review each controlled-document revision and explicitly create or update the applicable course version**, because Document Control cannot determine whether a revision requires changed learning content, assessment, or retraining.

Governed source content will use Document Control for approval and revision history. Content required for execution, including a SCORM package, will also be attached to the applicable course because Document Control is a repository and workflow wrapper rather than a SCORM player. Each course version must identify its applicable content and assessment. A material change may reschedule affected employee requirements; an administrative change need not do so.

The October 23 internal MARCOM call proposes a provider catalogue and automatic propagation of the latest package to linked training courses, recorded in [ADR-016](ADR-016-use-a-reusable-marcom-content-catalogue.md) and [ADR-017](ADR-017-source-and-refresh-course-packages-from-the-marcom-catalogue.md). This is a distinct provider-content path; the call does not resolve whether MARCOM packages also require Document Control governance. It does not select a mechanism for retaining the exact provider revision used by an earlier completion or establish that every refresh requires retraining. Preserve the audit outcome above while resolving this boundary; automatic propagation must not be represented as proof that historical traceability is satisfied.

The subsequent metadata analysis proposes retained MARCOM Content Release records under stable language-specific Catalogue Entries (ADR-016), supplying their current package to linked training course versions (ADR-017). Preserve each catalogue release's package and metadata snapshot; do not use provider copyright month/year as a release identity or substitute another language variant. Per the user's 2026-10-23 clarification, Training Management already provides learner attempts, completions, and historical evidence. Those responsibilities remain in Training Management; the MARCOM catalogue adds no evidence object or attempt/completion linkage requirement.

## Consequences

* Historical course and quiz versions support audit reconstruction.
* Document release and training-impact assessment remain separate governance activities.
* Administrators must coordinate changes across applications.
* Missed version associations can weaken traceability.
* Automatic capture of the exact controlled-document version remains a desirable implementation option.
* Administrators must keep the executable course copy aligned with the released controlled source.
* Analysis: automatic MARCOM package replacement could undermine historical reconstruction unless the version or evidence-preservation mechanism is explicitly designed and validated.

## More Information

Training Management workshop references: 01:21:10–01:59:51. Document Control workshop references: 00:30:02–00:35:30, 01:52:18–01:54:53, and 02:29:58–02:30:32. The required audit outcome and application boundary are clear, but the technical mechanism for binding the exact controlled-document version to a completion remains unsettled.

[MARCOM Requirements Knowledge Transfer, October 23, 2026](<../raw artifacts/meeting_transcripts/2026-10-23-terra-gen-training-management-marcom-requirements-knowledge-transfer.md>), 0:03–2:56 and 16:47–17:45, adds automatic latest-package propagation. Provider revision history was described first as a stretch goal, then as intended specification scope at 11:37–12:57; neither an immutable revision store nor completion-level version capture was selected. Resolve historical completions, in-progress attempts, existing assignments, course-version creation, and retraining effects together. Revised 2026-10-23; original draft date and proposed status retained.

[MARCOM metadata analysis](../MARCOM-METADATA-ANALYSIS-2026-10-23.md), based on the active English and Spanish tabs, supplies language/industry identity and copyright-precision evidence for the proposed release model. The model refines the target only; exact controlled-document version capture and provider-content governance boundaries remain unresolved.
