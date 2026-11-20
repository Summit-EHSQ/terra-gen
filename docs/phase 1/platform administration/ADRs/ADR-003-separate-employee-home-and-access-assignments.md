---
status: proposed
date: null
last_revised: 2026-11-10
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

The November 10 meeting additionally proposes a reporting-based Location Structure with regulatory establishments held separately. Under that proposal, organizational placement, regulatory attribution and exceptional access cannot be represented as though they were one interchangeable assignment. The accepted establishment-based baseline remains in force until the transition in [ADR-009](ADR-009-separate-reporting-locations-from-osha-establishments.md) is resolved. [Call, 0:26:03–0:29:24]

## Decision Drivers

* Preserve accurate employee and incident attribution.
* Support supervisors with cross-establishment teams.
* Avoid changing home assignments only to grant access.
* Make exceptional access explicit and auditable.
* Allow broad access to be limited to the appropriate application.
* Preserve separate regulatory establishment attribution if organizational placement uses a different hierarchy. [Call, 0:26:03–0:27:08]

## Considered Options

* Use home assignments for both attribution and access.
* Maintain separate home and login assignments for both hierarchies.
* Place every cross-location user at the top of each hierarchy.
* Grant every exception through manually maintained groups.
* Maintain organizational home/login placement, regulatory establishment and exceptional access as separate concepts where their meanings differ — November 10 refinement.

## Decision Outcome

Chosen option: **Maintain employee attribution separately from exceptional access assignments, and distinguish regulatory establishment from organizational home/login location where they differ.**

Under the accepted baseline, the home establishment describes where the employee belongs for attribution and reporting. Where a central function or cross-establishment role requires broader access, that access will be granted explicitly through controlled login-location assignments, application permissions, or governed security groups. The initial design does not provision Home Business Hierarchy and Login Business Hierarchy values because no second security hierarchy has been adopted.

The user has confirmed preserving the existing employee-establishment calculation and storing its result separately from organizational Home Location. Intelex maintains hierarchy nodes/roll-ups, with Boomi supplying assignments. See [November 10 follow-up confirmation](<../raw artifacts/2026-11-10-reporting-location-establishment-confirmations.md>). The coordinated ADR-009 transition and exact technical bindings remain pending. Preserve the governed employee-establishment calculation independently from organizational home/login placement. Do not infer that the employee's security location or the selected inspection asset determines the employee's regulatory establishment. The meeting preserves employee establishment attribution while proposing separate asset-derived inspection context. It does not define a new Employee property, payload mapping, exception precedence or access-grant mechanism. Those bindings must be reconciled with the accepted Employee specification before implementation. [Call, 0:26:03–0:29:24]

## Consequences

* Employee attribution remains accurate when responsibilities span locations.
* Access can change without falsifying the employee's work location.
* Employee provisioning must maintain an accurate home establishment and any approved access exceptions.
* Role changes must remove or revise stale login assignments.
* Administrators need clear definitions for home and login values.
* Architectural analysis: adopting a reporting-based hierarchy requires separate field meanings and consumer mappings rather than silently changing HomeLocationCode from establishment to reporting location.

## More Information

Application permissions, workflow assignments, and group memberships remain separate controls. This ADR does not authorize broad access to sensitive incident records merely because a user has establishment access.

Transcript references: 0:15:53–0:16:36, 1:43:25–1:44:05, and 2:13:50–2:17:51.

Additional evidence: [November 10 asset-hierarchy call](<../raw artifacts/meeting_transcripts/2026-11-10-summit-tg-asset-hierarchy-setup.md>), 0:26:03–0:29:24. The original unknown decision date and proposed status are preserved. The [reconciliation plan](../../ADR-RECONCILIATION-2026-11-10.md) records the accepted hierarchy conflict and pending employee binding; the [Employee specification](<../../employee management/ADR-001-004-technical-specification-employee-provisioning.md>), sections 10–10.1, remains unchanged.
