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
secondary_applications: Training Management, Inspections
---

# Register Supporting Files as Related Controlled Documents

## Context and Problem Statement

Policies are commonly accompanied by forms, work instructions, inspection templates, and training material that may change independently or have different owners.

## Decision Drivers

* Independent revision and ownership.
* Traceable numbers and histories for each controlled file.
* Reuse of supporting material.
* Notification when a related released document changes.

## Considered Options

* Combine the policy and all attachments into one file.
* Treat attachments as unversioned files on a parent record.
* Register each governed file separately and connect the records through document relationships.

## Decision Outcome

Chosen option: **Register each governed file separately and connect the records through document relationships.**

Each policy, form, work instruction, training file, or other controlled attachment receives its own number and revision history. Relationships provide navigation and may notify the owner of a related document after a release. Notification direction is explicit; reciprocal notifications require reciprocal relationships.

## Consequences

* Supporting content can be revised without republishing a compound file.
* Each file has independent ownership and audit evidence.
* Migration creates more controlled records and relationship maintenance.
* Administrators must understand that relationships are directional and are not a parent-child record hierarchy.

## More Information

Transcript references: 00:09:15–00:17:15 and 01:50:49–01:54:53.
