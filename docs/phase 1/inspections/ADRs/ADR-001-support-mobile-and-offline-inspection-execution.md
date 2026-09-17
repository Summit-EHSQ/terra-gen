---
status: proposed
deciders:
  - Whitney Goller
  - Mike Tran
consulted:
  - Dave McLean
  - Jacie Drakos
  - Jeremiah Soto
  - Matthew Futter
informed:
  - Emma Lister
primary_application: Inspections
secondary_applications: Intelex Mobile
---

# Support Mobile and Offline Inspection Execution

## Context and Problem Statement

Inspections are normally conducted in the field using handheld devices. Inspectors must capture photographs and may move between connected and disconnected areas during a single inspection, particularly at remote sites. The solution must preserve work when connectivity is interrupted and allow later desktop review.

## Decision Drivers

* Field inspectors will use handheld devices rather than laptops.
* Some operating locations have unreliable connectivity.
* Photographs are routine inspection evidence.
* Desktop review remains useful for final administrative cleanup.

## Considered Options

* Require continuous connectivity.
* Use offline paper or external forms and enter results later.
* Support mobile execution with offline continuity and later synchronization.
* Limit mobile use to photo capture and complete inspections on a desktop.

## Decision Outcome

Chosen option: **Support mobile execution with offline continuity and later synchronization**, because inspections must remain usable throughout field activities when network service is interrupted. Inspectors may review or correct the synchronized inspection from a desktop before final submission.

## Consequences

* Inspectors can work at remote sites without continuous connectivity.
* Inspection data and photographs must synchronize reliably.
* Conflict handling and synchronization status must be understandable.
* Mobile forms must remain usable for long checklists.
* Desktop and mobile access must operate on the same inspection record.

## More Information

Synchronization rules, conflict resolution, attachment limits, and the exact boundary between draft and submitted records require detailed design.

Transcript references: 04:27–07:22 and 27:46–28:13.
