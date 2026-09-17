---
status: proposed
date: null
deciders: []
consulted:
  - Dave McLean
  - Vanessa Newmarker
  - Jeremiah Soto
informed:
  - Matthew Futter
primary_application: Intelex Platform Administration
secondary_applications: Employee Management, Incident Management, Training Management
---

# Separate Employee Home and Access Assignments

## Context and Problem Statement

An employee's physical or administrative home does not necessarily describe the records they need to access. Central functions and supervisors may work from one establishment while supporting people or processes across several establishments.

## Decision Drivers

* Preserve accurate employee and incident attribution.
* Support supervisors with cross-establishment teams.
* Avoid changing home assignments only to grant access.
* Make exceptional access explicit and auditable.
* Allow broad access to be limited to the appropriate application.

## Considered Options

* Use home assignments for both attribution and access.
* Maintain separate home and login assignments for both hierarchies.
* Place every cross-location user at the top of each hierarchy.
* Grant every exception through manually maintained groups.

## Decision Outcome

Chosen option: **Maintain separate home and login assignments for the Location Structure and Business Hierarchy.**

Home assignments describe where the employee belongs for attribution and reporting. Login assignments describe the hierarchy branches whose records the employee may access. Login assignments may default from home assignments when the scopes match; supervisors, central functions, and matrix roles may receive different login assignments.

## Consequences

* Employee attribution remains accurate when responsibilities span locations.
* Access can change without falsifying the employee's work location.
* Employee provisioning must manage four hierarchy values.
* Role changes must remove or revise stale login assignments.
* Administrators need clear definitions for home and login values.

## More Information

The employee model contains Home Location, Login Location, Home Business Hierarchy, and Login Business Hierarchy. Application permissions and group memberships remain separate controls.

Transcript references: 0:15:53–0:16:36, 1:43:25–1:44:05, and 2:13:50–2:17:51.
