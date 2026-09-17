---
status: accepted
date: 2026-09-17
deciders:
  - Amy Roth
  - Mike Tran
consulted:
  - Amy Roth
  - Whitney Goller
  - Matthew Futter
  - Vanessa Newmarker
  - Dave McLean
informed: []
primary_application: Training Management
secondary_applications: Competency Management, Employee Management, Integration Management
---

# Assign Training Requirements through Job-Code-Mapped Workgroups

## Context and Problem Statement

Training applicability differs between corporate, office, field, location-specific, and specially authorized employee populations. Maintaining course assignments independently for hundreds of HR job codes would duplicate common rules and be difficult to govern.

## Decision Drivers

* Training content differs by employee profile.
* Onboarding includes a defined selection from the broader course catalog.
* Some additional requirements depend on designation or authorization.
* Requirements can change with an employee's role.
* Position codes are available from the HR source and are intended to support training work-group assignment.
* New and changed position codes must be handled without silently applying an unsuitable training profile.

## Considered Options

* Assign reusable requirement sets through workgroups, supplemented by specific designations.
* Map HR job or position codes directly to unique course lists.
* Map HR job or position codes to combinations of reusable Intelex workgroups.
* Maintain all course assignments individually for each employee.
* Apply a uniform training package to all employees.

## Decision Outcome

Chosen option: **Map HR job or position codes to combinations of reusable Intelex workgroups**, because common training bundles must be reused across many granular HR codes. Designations and approved exceptions may add requirements beyond the mapped workgroups.

Each workgroup contains a reusable set of courses. Employees and courses may participate in multiple workgroups. When overlapping workgroups contain the same course, Training Management must create only one employee-course requirement.

The employee integration will carry position codes as well as employee records. A new position code must be identified for configuration, and an employee position-code change must cause profile-derived assignments to be reassessed. The mapping does not need to be one-to-one: several granular HR position codes may share an Intelex profile.

When a sufficiently complete pre-start employee record is received, its configured position code will place the employee into the applicable workgroups and create training requirements before the start date. An unconfigured position code will not silently receive an arbitrary training bundle.

## Consequences

* Shared requirement sets can reduce repeated assignment maintenance.
* Profile differences remain visible instead of being flattened into a common monthly program.
* Profile membership and designation changes require a defined maintenance process.
* Automated assignment rules depend on complete and stable employee and position-code data.
* New position codes require an administrative notification or work queue before they can be used reliably.
* Profile changes must distinguish source-derived assignments from approved manual exceptions.
* Pre-start assignments may appear overdue when the employee first gains access; that condition is accepted rather than adding an initial grace-period customization.

## More Information

Transcript references: 07:55–08:16, 09:04–09:39, 12:11–12:49, 15:59–16:46, 24:34–25:01, and 32:21–32:40.

Existing applicability rules were described, but their precise Intelex configuration was not approved. The later organizational-structure workshop established position codes as the likely source input for employee profiles and confirmed that position changes should cascade into profile-derived assignments. The profile catalogue, mapping ownership, and exception-preservation rules remain to be defined.

Additional transcript references from the organizational-structure workshop: 2:21:49–2:23:08 and 2:27:15–2:32:29. Latest Training Management workshop references: 2:25:06–2:32:25. Integration and inspections workshop references: 0:38:17–0:51:25. See ADR-002 and ADR-006.
