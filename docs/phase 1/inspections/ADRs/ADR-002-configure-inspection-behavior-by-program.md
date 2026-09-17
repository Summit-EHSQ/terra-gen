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
secondary_applications: ""
---

# Configure Inspection Behavior by Inspection Program

## Context and Problem Statement

The initial health and safety, environmental compliance, and office EH&S inspection programs share common capabilities but may require different checklists, permissions, frequencies, findings, and workflows. Additional programs are expected later, so initial requirements should not be embedded directly in application logic.

## Decision Drivers

* Programs have different governance and review requirements.
* Finding, workflow, frequency, and access requirements vary.
* Future programs must be introduced without rebuilding the application.

## Considered Options

* Hard-code behavior for each initial checklist.
* Apply one rule set to every inspection.
* Configure reusable behavior at the inspection-program level.
* Create a separate application for each program.

## Decision Outcome

Chosen option: **Configure reusable inspection behavior at the inspection-program level**, because present and future programs require different combinations of common capabilities. The inspection program will govern its checklist, access, finding behavior, review requirements, frequency rules, and reporting expectations.

## Consequences

* New programs can reuse the same application foundation.
* Administrators can activate only relevant capabilities.
* Program configuration becomes an architecturally significant part of the application.
* Validation is required to prevent incomplete or contradictory settings.

## More Information

The transcript supports program-level configuration but does not explicitly select a dedicated Preferences object or define its fields. That object model remains subject to detailed design.

Transcript references: 19:31–21:22 and 26:08–27:38.
