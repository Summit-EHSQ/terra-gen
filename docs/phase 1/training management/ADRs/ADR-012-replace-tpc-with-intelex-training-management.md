---
status: proposed
date: 2026-09-17
deciders: []
consulted:
  - Dave McLean
  - Paul Niemer
  - Matthew Futter
  - Vanessa Newmarker
informed: []
primary_application: Training Management
secondary_applications: Quiz Builder, Document Management, Employee Management
---

# Replace TPC with Intelex Training Management

## Context and Problem Statement

TPC currently delivers and tracks online training. The target architecture must determine whether TPC remains a parallel LMS or Intelex becomes the training system of record and delivery platform.

The October 28 call develops the completion-history migration approach. Historical completions, current requirements, and the employee/course records needed to reference that history must be addressed explicitly rather than assuming the completion import establishes all current obligations. [Call, 35:08–43:19]

## Decision Drivers

* Consolidate assignments and completion history.
* Support SCORM, quizzes, documents, videos, and sessions.
* Avoid duplicate integrations and employee experiences.
* Link training directly to documents and qualifications.
* Validate historical-data loading before production cutover.
* Agree the scope and limitations of migrated history.

## Considered Options

* Retain TPC and integrate results into Intelex.
* Operate TPC and Intelex in parallel.
* Replace TPC with Intelex Training Management.

## Decision Outcome

Chosen option: **Replace TPC with Intelex Training Management**, because the stated direction is to retire the current LMS and rely on Intelex and its SCORM capability.

Prepare and rehearse completion-history migration under [ADR-020](ADR-020-migrate-training-history-through-a-rehearsed-cumulative-production-load.md). Use one planned cumulative production history load covering the agreed historical period and cutover endpoint.

Where the agreed migration includes completions for former employees or retired courses, establish those reference records before loading history and archive the applicable records afterward.

Configure current training applicability independently through workgroups, location-based courses, and individual assignments as applicable under [ADR-001](ADR-001-assign-training-requirements-through-job-code-mapped-workgroups.md) and [ADR-019](ADR-019-combine-independent-position-location-and-individual-training-assignments.md). History alone does not identify requirements for courses a person has never completed.

The call does not establish a final go-live date, historical retention period, TPC shutdown date, or completed cutover approval.

## Consequences

* Intelex becomes the central source for requirements and completion history.
* Existing content must be migrated, recreated, or repackaged.
* SCORM authoring capability and Quiz Builder licensing may be required.
* Third-party content availability and refresh arrangements remain dependencies.
* Migration requires tested mappings and agreed historical scope.
* Historical employee and course records may be necessary even when absent from the active integration population.
* TPC shutdown and the final extraction must be coordinated with treatment of activity occurring after the agreed cutoff.

## More Information

Original evidence: Latest Training Management workshop, 00:03:41–00:05:04.

Additional evidence: [Call — Terra-Gen Training Setup Q&A, October 28, 2026, 3:30 PM ET](<../raw artifacts/meeting_transcripts/2026-10-28-terra-gen-training-setup-qa.md>):

- 35:08–37:59: completion history and applicability limitations.
- 38:01–41:08: extraction, rehearsal, and cumulative production loading.
- 41:11–43:19: sample coverage, inactive references, and agreed migration scope.

Related:

- [ADR-002](ADR-002-use-individual-recurrence-for-self-service-training.md): completion-based recurrence seeded by historical dates.
- [ADR-010](ADR-010-validate-existing-custom-learning-packages-before-adoption.md): package compatibility validation.
- [ADR-011](ADR-011-establish-an-ongoing-marcom-content-refresh-process.md): ongoing MARCOM refresh.
- [ADR-014](ADR-014-preserve-training-history-across-employment-status-changes.md): training history across employment-status changes.
- [ADR-019](ADR-019-combine-independent-position-location-and-individual-training-assignments.md): independent assignment sources.
- [ADR-020](ADR-020-migrate-training-history-through-a-rehearsed-cumulative-production-load.md): cumulative history migration.

This revision does not resolve MARCOM refresh, prove package compatibility, or establish reconstruction of historical content versions.
