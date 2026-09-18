---
status: accepted
date: 2026-09-17
deciders:
  - Amy Roth
  - Mike Tran
  - Whitney Goller
consulted:
  - Dave McLean
  - Jeremiah Soto
informed:
  - Matthew Futter
primary_application: Intelex Platform Administration
secondary_applications: Inspections, Incident Management, Employee Management, Document Control, Competency Management
---

# Use Location-Scoped Roles for Workflow Routing

## Context and Problem Statement

Operational workflows often need to route work to a responsible function at a site, such as the site health and safety coordinator or a document-control approver. Routing everything to the submitter's supervisor is not always appropriate, while hard-coding a person makes workflows fragile when personnel change or take leave.

## Decision Drivers

* Route work to the responsible function at the relevant location.
* Allow more than one person to occupy a role.
* Avoid hard-coded personal assignments.
* Reuse role definitions across applications.
* Keep application-specific role administration within Intelex.

## Considered Options

* Route all work to the employee's supervisor.
* Hard-code a named person in each workflow.
* Provision operational roles as Entra groups.
* Maintain reusable, location-scoped roles in Intelex.

## Decision Outcome

Chosen option: **Maintain reusable operational roles in Intelex and populate them with one or more people for each applicable location.**

Workflows will route to these roles where responsibility belongs to a site or corporate function rather than a particular person. Document Control approval processes should use roles where continuity matters more than document-specific naming. Role membership will be maintained administratively in Intelex rather than synchronized from Entra ID. Substitution is therefore an administrative change to the role rather than custom leave-of-absence automation.

The same pattern may designate the role responsible for qualification evidence, expiry monitoring, and renewal tasks.

## Consequences

* Workflows remain stable when role occupants change.
* The same role can support several applications and workflows.
* Administrators must maintain membership for each applicable location.
* Missing role assignments can interrupt routing and require validation or fallback handling.
* Administrators must update affected role assignments when an occupant is unavailable.

## More Information

The first explicit use is the Site Health and Safety Coordinator role for inspection review and new-employee notification. Later incident and hazard workflows may reuse the same pattern.

Earlier transcript references: 1:04:36–1:09:17 and 2:08:14–2:10:24. Document Control workshop references: 01:57:44–02:04:06.
