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
secondary_applications: Action Management, Reporting, Workflow Management
---

# Separate Inspection and Corrective-Action Lifecycles

## Context and Problem Statement

An inspection can be complete and accepted while one or more corrective actions remain outstanding. Keeping the inspection workflow open solely as a placeholder for those actions would duplicate the assignment, reminder, escalation, and task-list behavior already provided by each action record. Users still need to distinguish a fully resolved inspection from a completed inspection with open actions.

## Decision Drivers

* Keep workflow stages associated with work a user must perform.
* Give every corrective action independent ownership, due date, reminders, and escalation.
* Avoid leaving inspections artificially open.
* Make inspections with outstanding actions easy to find.
* Preserve an auditable action-completion record.

## Considered Options

* Keep an inspection open until every related action closes.
* Automatically close or reopen the inspection when action states change.
* Complete the inspection workflow independently and derive a separate operational classification from its actions.

## Decision Outcome

Chosen option: **Complete the inspection workflow independently and derive a separate operational classification from related action states.**

Once the configured inspection review is accepted, the inspection may close even when related actions remain open. A calculated field or equivalent derived classification will identify conditions such as in progress, complete with open actions, and complete with all actions closed. The classification will support inventory filtering and reporting but will not create an additional workflow task.

Each action remains an independent workflow record. Closing an action requires at least a completion comment or equivalent completion detail; supporting photographs or files may be attached where appropriate. The inspection form will display a summary of related actions and their completion states.

## Consequences

* Inspection review and remediation can proceed on their appropriate timelines.
* Action assignees receive individual tasks, reminders, and escalations.
* Users can filter completed inspections that still require remediation.
* Users must understand the distinction between workflow state and derived operational classification.
* The classification depends on reliable inspection-action relationships and status updates.

## More Information

The exact classification labels and escalation schedule remain detailed design decisions. Mandatory comments were confirmed as the common completion-evidence baseline; mandatory photographs were not established as a universal requirement.

Transcript references: integration and inspections workshop 0:12:05–0:16:59 and 0:20:25–0:21:34.
