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

The later [user-provided MARCOM update decision](<../raw artifacts/2026-10-23-marcom-course-version-pinning-decision.md>) replaces the October call's automatic propagation proposal. Each Training Course Version stores a specific Resolved MARCOM Release and uses only its file. Resolve that reference/file on Create or Update only when MARCOM Course is populated and changed; ordinary saves and catalogue pointer changes preserve existing selections. The training team manually creates a new Course Version to adopt a newer release of the same provider course. [ADR-016](ADR-016-use-a-reusable-marcom-content-catalogue.md) retains provider releases; [ADR-017](ADR-017-pin-marcom-content-to-training-course-versions.md) defines the guard and adoption boundary.

Retain each catalogue release's package and metadata snapshot; copyright month/year is not a release identity. Existing Training Management already provides learner attempts, completions, and historical evidence. The catalogue adds no learner-evidence object or completion linkage. The exact controlled-document version association and provider-content Document Control governance boundary remain separate open matters.

## Consequences

* Historical course and quiz versions support audit reconstruction.
* Document release and training-impact assessment remain separate governance activities.
* Administrators must coordinate changes across applications.
* Missed version associations can weaken traceability.
* Automatic capture of the exact controlled-document version remains a desirable implementation option.
* Administrators must keep the executable course copy aligned with the released controlled source.
* Pinned MARCOM references/files prevent a catalogue update from changing the package associated with an existing Training Course Version; the training team deliberately adopts later releases.

## More Information

Training Management workshop references: 01:21:10–01:59:51. Document Control workshop references: 00:30:02–00:35:30, 01:52:18–01:54:53, and 02:29:58–02:30:32. The required audit outcome and application boundary are clear, but the technical mechanism for binding the exact controlled-document version to a completion remains unsettled.

The [October 23 call](<../raw artifacts/meeting_transcripts/2026-10-23-terra-gen-training-management-marcom-requirements-knowledge-transfer.md>), 0:03–2:56 and 16:47–17:45, is historical evidence for automatic propagation, now replaced by the [pinning decision](<../raw artifacts/2026-10-23-marcom-course-version-pinning-decision.md>), Supplied decision paragraphs 2–5. Original draft date and proposed status are retained; no accepted history is rewritten.

[MARCOM metadata analysis](../MARCOM-METADATA-ANALYSIS-2026-10-23.md), based on the active English and Spanish tabs, supplies language/industry identity and copyright-precision evidence for the proposed release model. The model refines the target only; exact controlled-document version capture and provider-content governance boundaries remain unresolved.
