---
status: accepted
date: 2026-09-18
deciders:
  - Amy Roth
consulted:
  - Dave McLean
  - Paul Niemer
  - Matthew Voss
informed:
  - Health and Safety coordinators
  - Site supervisors
primary_application: Competency Management
secondary_applications: Document Control, Intelex Platform Administration
---

# Require Objective Evidence and Centralized Qualification Completion

## Context and Problem Statement

Qualification evidence may arrive after an activity as a certificate, sign-in sheet, or assessment form. Allowing one person to enter provisional results and another to re-open and verify them would duplicate effort and was considered unlikely to be followed consistently.

## Decision Drivers

* Maintain defensible evidence.
* Avoid duplicate entry and verification steps.
* Prevent provisional information from being treated as official.
* Make completion responsibility clear.
* Reduce workflow handoffs.

## Considered Options

* Allow trainers to enter provisional completion and route it for verification.
* Allow supervisors to complete activities without attachments.
* Have one responsible administrator record completion after receiving evidence.
* Make evidence optional for all activities.

## Decision Outcome

Chosen option: **Have the responsible qualification administrator record completion after receiving objective evidence.**

Qualification steps will not use separate provisional-entry and verification stages in the initial workflow. Supporting evidence will initially be mandatory for every completed step. The responsible administrator will enter and finalize the result in one interaction after receiving the required evidence.

Evidence requirements may become qualification-specific later only when a substantiated exception is approved.

## Consequences

* Qualification records have consistent audit support.
* Duplicate data entry is avoided.
* Completion may not appear until evidence is received.
* The responsible role may become a processing bottleneck.
* Exceptions require explicit configuration and governance.

## More Information

No clear exception to mandatory evidence was identified during the workshop. See ADR-006, ADR-008, and Platform Administration ADR-005.

Transcript references: 02:56:16–03:00:45.
