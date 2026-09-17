---
status: accepted
date: 2026-09-17
deciders:
  - Amy Roth
  - Mike Tran
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

Source systems will provide consistent identifiers for employees, positions, work locations or establishments where available, and operating resources where integrated. Boomi will transform source attributes into the hierarchy assignment codes expected by Intelex. Boomi will not own the Intelex hierarchy nodes or parent-child roll-ups themselves.

## Consequences

* Intelex-specific reporting and security remain under application control.
* The hierarchy can evolve independently from HR and ERP structures.
* Stable identifiers allow integrations to match and update atomic records.
* Intelex requires an identified administrative owner and change-control process.
* Hierarchy changes may require coordinated updates to integration mappings.
* Source-system department structures do not need to reproduce the Intelex reporting and security hierarchy exactly.

## More Information

An Intelex administrative owner, identifier standards, and maintenance procedures must be defined before production data is loaded. The structure should use the minimum useful number of levels and keep comparable concepts at consistent depths where practical.

Transcript references: organizational-structure workshop 0:22:30–0:25:42 and 1:00:40–1:01:47; integration and inspections workshop 0:17:40–0:23:14.
