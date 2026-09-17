---
status: proposed
date: null
deciders: []
consulted:
  - Dave McLean
  - Jeremiah Soto
informed:
  - Matthew Futter
primary_application: Intelex Platform Administration
secondary_applications: Employee Management, Integration Management, Incident Management, Training Management
---

# Maintain the Organizational Hierarchy in Intelex

## Context and Problem Statement

External systems contain employee, office, department, position, and resource information, but the complete Intelex hierarchy serves reporting, security, and OSHA purposes that do not have a direct equivalent in the HR or identity systems.

## Decision Drivers

* Preserve behavior specific to Intelex.
* Avoid treating HR office labels as OSHA establishments.
* Support hierarchy changes without restructuring source systems.
* Match integrated records through stable identifiers.
* Establish a maintainable ownership boundary.

## Considered Options

* Recreate the entire hierarchy from the HR system.
* Recreate the entire hierarchy from a future ERP.
* Maintain the hierarchy in Intelex while integrating atomic records and stable identifiers.
* Maintain hierarchy and employee assignments entirely by hand.

## Decision Outcome

Chosen option: **Maintain hierarchy nodes and parent-child roll-ups within Intelex while integrations supply relevant atomic records, stable source identifiers, and assignments.**

Source systems should provide consistent identifiers for employees, positions, work locations or establishments where available, and operating resources where integrated. An external source may later govern a specific branch, but no integration will initially control the complete Intelex hierarchy.

## Consequences

* Intelex-specific reporting and security remain under application control.
* The hierarchy can evolve independently from HR and ERP structures.
* Stable identifiers allow integrations to match and update atomic records.
* Intelex requires an identified administrative owner and change-control process.
* Hierarchy changes may require coordinated updates to integration mappings.

## More Information

The workshop did not select a final hierarchy owner. Ownership, identifier standards, and maintenance procedures must be defined before production data is loaded. The structure should use the minimum useful number of levels and keep comparable concepts at consistent depths where practical.

Transcript references: 0:22:30–0:25:42 and 1:00:40–1:01:47.
