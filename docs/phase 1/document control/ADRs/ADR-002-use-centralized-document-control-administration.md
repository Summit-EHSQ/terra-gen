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
secondary_applications: Intelex Platform Administration
---

# Use Centralized Document Control Administration

## Context and Problem Statement

Folders, document types, lifecycle rules, permissions, and approval structures are shared controls. Broad local administration could fragment the repository and create inconsistent governance.

## Decision Drivers

* Maintain a coherent enterprise taxonomy.
* Limit powerful administration to trained users.
* Preserve auditability and consistent workflow controls.
* Allow document ownership without uncontrolled structural changes.

## Considered Options

* Allow broad self-service administration.
* Centralize every document activity in one team.
* Centralize structural administration while permitting governed document ownership and site coordination.

## Decision Outcome

Chosen option: **Centralize structural administration while permitting governed document ownership and site coordination.**

A small administrative group will maintain folders, types, lifecycle rules, permissions, and reusable workflow structures. Document owners and designated site coordinators may manage assigned content within that framework. Requests for new taxonomy values are governance changes, not end-user actions.

## Consequences

* Classification and workflow controls remain consistent.
* Site participation does not require global administration rights.
* The central team may become a service bottleneck.
* An intake and approval process is needed for structural changes.

## More Information

Transcript references: 00:07:12–00:07:36, 00:53:50–00:55:16, and 01:01:00–01:02:02.
