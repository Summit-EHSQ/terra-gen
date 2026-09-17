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
secondary_applications: ""
---

# Enforce Complete, Sectioned Checklists

## Context and Problem Statement

Leaving checklist-completion and section controls available to each application administrator would create inconsistent programs and additional procedures. The organization expects inspectors to respond to every question, including explicitly selecting not applicable where that response is permitted.

## Decision Drivers

* Prevent incomplete inspections from being treated as finished.
* Distinguish an explicit not-applicable response from an unanswered question.
* Present long checklists in a consistent structure.
* Reduce application-administrator choices and setup errors.

## Considered Options

* Leave completion validation and sections configurable for every checklist.
* Permit partial checklist submission.
* Enforce completion but leave sections optional.
* Enforce completion and enable sections for all checklists.

## Decision Outcome

Chosen option: **Enable checklist-completion validation and checklist sections by default, and hide both configuration controls.**

Every checklist question must receive a response before completion. Checklists will use the section capability even where a simple checklist has only one high-level section.

## Consequences

* Completed inspections contain an explicit result for every question.
* Checklist presentation is consistent across programs.
* Application administrators have fewer configuration choices.
* A future exception requires a deliberate platform configuration change.

## More Information

Question-level response choices remain configurable. Not applicable is included only where it is semantically valid and may require an explanatory comment.

Transcript references: 2:19:42–2:20:35 and 2:33:57–2:35:05.
