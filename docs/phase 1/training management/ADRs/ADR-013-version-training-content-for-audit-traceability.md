---
status: proposed
date: 2026-09-17
deciders: []
consulted:
  - Dave McLean
informed: []
primary_application: Training Management
secondary_applications: Document Management, Quiz Builder
---

# Version Training Content for Audit Traceability

## Context and Problem Statement

An auditor may need to determine the controlled document, quiz, or SCORM content used for a historical completion. A document revision does not necessarily require new training content or organization-wide retraining.

## Decision Drivers

* Reconstruct the content used for a completion.
* Distinguish administrative and material changes.
* Preserve course and quiz history.
* Avoid unnecessary retraining.
* Keep training-impact assessment as a governed decision.

## Considered Options

* Resolve all completions to the latest document version.
* Automatically publish a course version for every document revision.
* Review each document revision and explicitly create or update the applicable course version.
* Capture the exact released document version automatically at completion.

## Decision Outcome

Chosen option: **Review each document revision and explicitly create or update the applicable course version**, because Document Management cannot determine whether a revision requires changed learning content, assessment, or retraining.

Each course version must identify its applicable content and assessment. A material change may reschedule affected employee requirements; an administrative change need not do so.

## Consequences

* Historical course and quiz versions support audit reconstruction.
* Document release and training-impact assessment remain separate governance activities.
* Administrators must coordinate changes across applications.
* Missed version associations can weaken traceability.
* Automatic capture of the exact controlled-document version remains a desirable implementation option.

## More Information

Latest Training Management workshop references: 01:21:10–01:59:51. The required audit outcome was clear, but the preferred technical mechanism for binding the exact document version at completion was not fully settled.
