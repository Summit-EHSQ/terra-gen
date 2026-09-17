---
status: proposed
deciders:
  - Whitney Goller
  - Mike Tran
consulted:
  - Dave McLean
  - Matthew Futter
informed:
  - Emma Lister
primary_application: Inspections
secondary_applications: Health and Safety, Environmental Compliance
---

# Replace SafetyCulture Incrementally Through a Three-Program Initial Release

## Context and Problem Statement

The initial release is intended to replace SafetyCulture for health and safety project site inspections, environmental compliance project site inspections, and office EH&S inspections. Additional program-specific inspections are expected later.

## Decision Drivers

* SafetyCulture is to be retired for migrated programs.
* Limiting the first release reduces rollout complexity.
* Initial programs have established checklists and practices.
* Later inspection types may have different requirements.
* Shared foundations should be proven before expansion.

## Considered Options

* Migrate every program in one release.
* Retain SafetyCulture and use Intelex only for reporting.
* Migrate three initial programs and extend incrementally.
* Build independent solutions for each inspection type.

## Decision Outcome

Chosen option: **Migrate the three identified programs in the initial release and extend the architecture incrementally**, because this provides a defined replacement boundary while allowing the common inspection model to be validated before later programs are introduced.

## Consequences

* The initial release has a clear operational objective.
* SafetyCulture can be retired for migrated programs after validation.
* Later programs can build on a proven common structure.
* Some inspections may remain outside Intelex temporarily.
* Migration must address checklists, open records, historical records, and cutover.

## More Information

Historical-data migration, coexistence duration, decommissioning criteria, and cutover responsibilities were not defined and require a separate implementation decision.

Transcript references: 02:13–03:59 and 30:49–31:34.
