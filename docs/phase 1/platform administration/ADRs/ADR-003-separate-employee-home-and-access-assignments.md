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

# Separate Employee Attribution from Exceptional Access Assignments

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

Chosen option: **Maintain the employee's home establishment separately from exceptional access assignments.**

The home establishment describes where the employee belongs for attribution and reporting. Where a central function or cross-establishment role requires broader access, that access will be granted explicitly through controlled login-location assignments, application permissions, or governed security groups. The initial design does not provision Home Business Hierarchy and Login Business Hierarchy values because no second security hierarchy has been adopted.

## Consequences

* Employee attribution remains accurate when responsibilities span locations.
* Access can change without falsifying the employee's work location.
* Employee provisioning must maintain an accurate home establishment and any approved access exceptions.
* Role changes must remove or revise stale login assignments.
* Administrators need clear definitions for home and login values.

## More Information

Application permissions, workflow assignments, and group memberships remain separate controls. This ADR does not authorize broad access to sensitive incident records merely because a user has establishment access.

Transcript references: 0:15:53–0:16:36, 1:43:25–1:44:05, and 2:13:50–2:17:51.
