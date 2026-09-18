---
status: accepted
date: 2026-09-18
deciders:
  - Amy Roth
  - Mike Tran
  - Whitney Goller
consulted:
  - Dave McLean
informed:
  - Matthew Futter
primary_application: Document Control
secondary_applications: Training Management, Inspections, SDS Management
---

# Scope Document Control by Governance Need

## Context and Problem Statement

Policies, procedures, form templates, training source material, SCORM packages, site plans, and safety data sheets may be consumed elsewhere. Application use alone does not determine whether the source requires approval, revision control, and controlled release.

## Decision Drivers

* Formal approval and revision history.
* Periodic review and controlled release.
* Auditability of authoritative source content.
* Separation of governed templates from completed operational records.

## Considered Options

* Store content only in the application that executes the process.
* Store every business file in Document Control.
* Store content in Document Control when it requires controlled-document governance.

## Decision Outcome

Chosen option: **Store content in Document Control when it requires controlled-document governance.**

The scope includes governed policies, procedures, work instructions, form templates, site plans, and controlled training source files. Completed inspections and other executed records remain in their originating applications. SDS files may be held as controlled documents while a dedicated SDS application remains out of scope.

## Consequences

* Governed source content has one approval and revision history.
* A file may also be deployed to another application for execution.
* Owners must distinguish the controlled source from its operational copy.
* SDS storage is an interim boundary, not a complete SDS-management design.

## More Information

Transcript references: 00:09:04–00:19:18 and 00:30:02–00:35:30. See Training Management ADR-004 and ADR-013.
