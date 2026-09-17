---
status: accepted
date: 2026-09-17
deciders:
  - Whitney Goller
  - Mike Tran
consulted:
  - Dave McLean
  - Amy Roth
informed:
  - Emma Lister
  - Matthew Futter
primary_application: Inspections
secondary_applications: Incident Management
---

# Route Near Misses to Incident Management

## Context and Problem Statement

An inspection may identify both a checklist deficiency and an event that qualifies as a near miss. An inspection response and action plan do not provide the event classification and investigation behavior expected from Incident Management.

## Decision Drivers

* Use the application designed for event records and investigations.
* Avoid expanding inspection actions into a second incident model.
* Retain inspection evidence and corrective follow-up.
* Preserve traceability between related records where practical.

## Considered Options

* Record the event only as an inspection action.
* Add incident-investigation fields to Inspections.
* Record the event in Incident Management while retaining the inspection response.
* Treat every unsafe inspection response as an incident.

## Decision Outcome

Chosen option: **Create a record in Incident Management when an observation meets the definition of a near miss or another incident type.**

The inspection will retain its response, comment, evidence, and applicable action plan. Incident Management will own event classification and formal incident workflow.

## Consequences

* Incident-specific processing remains in the appropriate application.
* Inspections remains focused on checklist execution and corrective follow-up.
* Users need guidance for distinguishing an inspection issue from a reportable event.
* One observation may have related records in both applications.

## More Information

The workshop established the application boundary but did not decide whether record creation or cross-linking will be automated.

Transcript references: 2:23:39–2:24:54.
