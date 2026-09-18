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

# Use Location Placement and Shortcuts for Applicability

## Context and Problem Statement

Documents may apply enterprise-wide, to one establishment, or to a selected group of establishments. Copying a document to every applicable location would create competing revisions.

## Decision Drivers

* One authoritative revision.
* Corporate-to-establishment visibility.
* Site relevance without enterprise-wide exposure.
* Selective multi-establishment applicability.

## Considered Options

* Copy the document into every applicable establishment.
* Place every document at the corporate level.
* Place one authoritative record appropriately and use shortcuts for selected additional establishments.

## Decision Outcome

Chosen option: **Place one authoritative record appropriately and use shortcuts for selected additional establishments.**

Enterprise documents will be placed at the Terra-Gen level so they are visible down the Location Structure. A document for one establishment will be placed there. A document that applies to several selected establishments will retain one authoritative record and expose it in the other applicable locations through shortcuts.

## Consequences

* One document retains the approval and revision history.
* Users see content applicable to their location.
* Shortcut behavior and authoritative placement require administrator guidance.
* Applicability changes require shortcut maintenance.

## More Information

Transcript references: 00:19:55–00:21:21, 00:46:40–00:48:07, and 00:56:51–01:00:24.
