---
status: proposed
deciders:
  - Whitney Goller
  - Mike Tran
consulted:
  - Dave McLean
informed:
  - Emma Lister
  - Matthew Futter
primary_application: Inspections
secondary_applications: ""
---

# Support Conditional Questions and Branching

## Context and Problem Statement

Current inspection checklists contain subquestions that appear based on earlier answers. They also contain sections and multiple response types. Intelex must preserve this behavior so inspectors see questions relevant to observed conditions without completing unnecessary fields.

## Decision Drivers

* Existing checklists contain dependent subquestions.
* Different questions require different response types.
* Conditional responses may require additional details, evidence, findings, or actions.
* Parent and dependent questions must remain traceable.

## Considered Options

* Display every possible question.
* Create separate checklists for every response path.
* Support conditional questions and branching within a checklist.
* Capture conditional details only through comments.

## Decision Outcome

Chosen option: **Support conditional questions and branching within a checklist**, because existing programs require different follow-up information based on earlier responses. Checklist configuration will determine when dependent questions appear and the inspection record will retain their relationship to the triggering answer.

## Consequences

* Inspectors see follow-up questions only when relevant.
* A common checklist can support multiple conditions without duplication.
* Checklist authors must define and test branching rules.
* Reports must distinguish unanswered questions from questions that were not applicable.
* Mobile and offline behavior must apply the same branching rules.

## More Information

The complete branching rules, supported nesting depth, and cross-section branching were not defined.

Transcript references: 07:37–08:59 and 10:22–10:56.
