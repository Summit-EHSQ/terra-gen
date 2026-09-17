---
status: accepted
date: 2026-09-08
deciders:
  - Amy Roth
  - Dave McLean
consulted:
  - Whitney Goller
informed: []
primary_application: Training Management
secondary_applications: ""
---

# Establish an Ongoing MARCOM Content Refresh Process

## Context and Problem Statement

MARCOM materials had not remained current through the existing learning provider. The meeting identified that initial content availability does not establish an automatic update process in the target environment.

## Decision Drivers

* Address the existing problem of outdated learning materials.
* Maintain content after initial deployment.
* Reduce manual monitoring and upload effort.
* Determine what update mechanisms are available through the provider.

## Considered Options

* Upload selected content once and leave future updates to ad hoc activity.
* Establish a repeatable refresh process with manual steps where necessary.
* Automate update detection and delivery where supported.

## Decision Outcome

Chosen option: **Establish a repeatable refresh process and automate it where supported**, because content currency must be maintained after the initial import.

The agreement concerns the required maintenance outcome. It does not select an integration technology or promise fully automatic updates. An existing content-loading UI library was offered for investigation and possible development-environment use; production adoption was not decided.

## Consequences

* Content maintenance becomes part of the delivered operating model.
* Ownership, update cadence, and verification need to be established.
* Automation feasibility depends on available provider capabilities.
* Initial import tooling alone does not resolve long-term content currency.

## More Information

Transcript references: 54:43–59:01 and 59:27–59:33.

Provider distribution behavior was described in the meeting and remains subject to technical verification. Replacement behavior, version history, and effects on existing completion records were not defined. See ADR-010.
