---
status: proposed
date: 2026-10-28
deciders: []
consulted:
  - Dave McLean
  - Paul Niemer
  - Matthew Futter
  - Vanessa Newmarker
informed: []
primary_application: Training Management
secondary_applications: Employee Management
---

# Migrate Training History through a Rehearsed Cumulative Production Load

## Context and Problem Statement

TPC completion history must be migrated to support historical reporting and completion-based recurrence. The source continues to change before cutover, including corrections to older records.

The call distinguishes early test loads from the production migration. It also identifies a referential dependency: imported completions require corresponding employee and course records, including historical records outside the active population when those completions are included. [Call, 35:08–43:19]

## Decision Drivers

- Validate the extraction and import procedure before production cutover.
- Include current source corrections in the final history dataset.
- Understand and agree the historical scope loaded into Intelex.
- Resolve employee and course references for included completions.
- Distinguish evidence of previous completion from current training applicability. [Call, 35:55–43:19]

## Considered Options

- Rehearse in test, then perform one planned production load from a cumulative extract covering the agreed historical period.
- Load an early production baseline followed by incremental history loads.
- Attempt the process for the first time immediately before go-live.

## Decision Outcome

Chosen option: **Rehearse the migration in test and perform one planned cumulative production history load**, because a fresh cumulative extract can include corrections to previously recorded history without depending on an unestablished delta-reconciliation process. [Call, 39:18–41:08]

Use early source extracts to establish and validate the mapping and import procedure. Within the active population, ideally include at least one record for every employee and every course; this is a coverage objective rather than a requirement for every employee/course combination. [Call, 41:11–41:52]

The final production extract must use the agreed historical start point and extend through the agreed cutover endpoint. The historical period and final delivery date remain to be established. January 31 and three days before go-live were illustrative, not committed dates.

If the agreed scope includes former employees or retired courses:

- Create the corresponding employee and course records before their history.
- Load the historical completions.
- Archive the applicable former employees and retired courses afterward.

This is conditional on including that history; the call does not select an all-time retention period or require every inactive record to be migrated. [Call, 41:52–42:42]

Imported completion history must not be treated as a complete source of present training requirements. Where a person needs a course they have never completed, applicability must come from configured assignment rules or an explicit assignment. [Call, 37:06–37:44]

## Consequences

The following are architectural analysis:

- Production migration depends on a rehearsed extraction and loading procedure.
- Historical employee and course scope must be agreed before reference-data preparation.
- A fresh cumulative extract reduces exposure to missed backdated corrections.
- Reconciliation must account for rejected rows and missing references, rather than assuming a completed import includes every intended record.
- “One planned production load” does not establish an atomic transaction, automatic rollback, or a retry strategy; those mechanisms remain undefined.
- Post-cutoff completions and corrections require an agreed operating procedure.

## More Information

[Call — Terra-Gen Training Setup Q&A, October 28, 2026, 3:30 PM ET](<../raw artifacts/meeting_transcripts/2026-10-28-terra-gen-training-setup-qa.md>):

- 35:08–37:59: rehearsal, timing, and applicability gaps.
- 38:01–41:08: cumulative production extract and source corrections.
- 41:11–41:52: desired active employee/course sample coverage.
- 41:52–42:42: historical employee/course prerequisites and archival.
- 42:49–43:19: individual-row failures and agreement on loaded scope.
- 43:23–43:51: use of the supplied import template.

Row-level failure behavior was described in the call, not independently tested.

Unresolved inputs include the retained historical period, final cutoff, stable employee/course matching, duplicate handling, recurrence-date reconciliation, rejected-row correction and retry, and treatment of post-cutoff activity.

Related: Training Management [ADR-001](ADR-001-assign-training-requirements-through-job-code-mapped-workgroups.md), [ADR-002](ADR-002-use-individual-recurrence-for-self-service-training.md), [ADR-012](ADR-012-replace-tpc-with-intelex-training-management.md), [ADR-014](ADR-014-preserve-training-history-across-employment-status-changes.md), and [ADR-019](ADR-019-combine-independent-position-location-and-individual-training-assignments.md).
