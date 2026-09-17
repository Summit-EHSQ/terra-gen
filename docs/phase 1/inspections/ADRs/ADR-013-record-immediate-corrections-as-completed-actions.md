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
secondary_applications: Action Management
---

# Record Immediate Corrections as Completed Actions

## Context and Problem Statement

Inspectors may correct a deficiency while still in the field. Omitting the action loses evidence of the original issue and its resolution, while forcing the inspector to assign a task and reopen it solely to mark it complete adds unnecessary work. The standard action-type choices also introduce classification that is not used consistently by the inspection process.

## Decision Drivers

* Preserve evidence of corrections completed during inspection.
* Satisfy action validation for negative responses.
* Reduce repetitive field-user steps.
* Capture responsible person, completion date, and completion notes.
* Apply a consistent action classification.

## Considered Options

* Record only outstanding actions.
* Describe immediate corrections only in the response comment.
* Create an open action and complete it as a separate step.
* Allow an action to be created already complete.

## Decision Outcome

Chosen option: **Allow an action plan to be marked already complete when it is created.**

An already-complete action will capture the completed activity, the person who performed it, completion date, and completion notes without a separate assignment-and-closure cycle. An outstanding action will instead require its responsible person and due date.

Inspection action type will default to corrective and its selector will be hidden. Multiple actions may still be created when the condition requires more than one response.

## Consequences

* Immediate corrections remain visible in action and issue reporting.
* Inspectors avoid an artificial two-step closure process.
* Completed and outstanding actions share one record structure.
* The form requires conditional validation based on completion state.
* Preventive and containment classifications are not routinely exposed in the inspection pathway.

## More Information

The workshop described the already-complete pathway as a small configuration addition rather than a separate workflow.

Transcript references: 3:05:46–3:11:47.
