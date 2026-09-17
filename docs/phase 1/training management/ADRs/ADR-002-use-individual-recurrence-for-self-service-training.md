---
status: accepted
date: 2026-09-17
deciders:
  - Amy Roth
  - Mike Tran
consulted:
  - Amy Roth
  - Whitney Goller
  - Vanessa Newmarker
  - Paul Niemer
  - Dave McLean
informed: []
primary_application: Training Management
secondary_applications: Competency Management
---

# Use Individual Recurrence for Self-Service Training

## Context and Problem Statement

The current program coordinates much of its training by month or quarter. Intelex instead maintains a requirement for each employee-course combination and calculates recurrence from the employee's completion date. Recreating the monthly calendar for self-service courses would require continuing mass maintenance and would weaken the platform's automated recurrence model.

## Decision Drivers

* Reduce duplicated training for new employees.
* Preserve scheduled sessions where live delivery supports site operations.
* Respect program-specific recurrence requirements.
* Keep seasonal safety communications distinct from formal course due dates.

## Considered Options

* Retain coordinated monthly or periodic schedules for all applicable training.
* Move applicable training to individual completion-based recurrence.
* Use individual recurrence for self-service courses and scheduled sessions for live delivery.

## Decision Outcome

Chosen option: **Use individual recurrence for self-service courses and scheduled sessions for live delivery**, because this preserves automated employee-level compliance while retaining coordinated delivery where an instructor, date, or location is material.

Common monthly or seasonal topics may still be addressed through safety meetings. A material policy change may trigger an organization-wide rescheduling of the associated course, but ordinary self-service recurrence will not be forced into a common monthly schedule.

For recurring courses, the next due date will be calculated by adding the configured course frequency to the employee's most recent completion date, not to the original assignment date or prior due date. Historical person-course completion dates will be loaded to seed this calculation.

## Consequences

* Individual recurrence may reduce unnecessary early repetition.
* Live and virtual instructor-led delivery remains schedulable through sessions.
* Managers must adapt from a cohort calendar to employee-level compliance dates.
* Historical completion dates must be migrated to seed the first accurate due dates.
* A pre-due activation and notification window remains to be configured.
* Early or late completion moves the next due date because recurrence follows actual completion.

## More Information

Transcript references: 15:59–16:22, 18:23–21:43, 22:00–24:14, 30:00–32:09, and 1:00:07–1:01:13.

The later workshop superseded the earlier direction to preserve both scheduling models equally. It favored strict completion-based recurrence for self-service training and rejected a general grace period. A roughly 30–45 day activation window was discussed but not finalized. Latest Training Management workshop references: 00:05:12–00:34:01 and 01:16:37–01:20:46. Integration and inspections workshop references: 0:42:49–0:49:26. See ADR-001, ADR-003, and ADR-009.
