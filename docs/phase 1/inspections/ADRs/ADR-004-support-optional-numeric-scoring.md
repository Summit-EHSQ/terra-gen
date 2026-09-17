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
secondary_applications: Reporting
---

# Support Questions With or Without Numeric Scoring

## Context and Problem Statement

The current checklists may display numerical information inherited from SafetyCulture, but the initial programs do not assign meaningful weights to questions or rely on an overall score. Questions may instead be descriptive or evaluated according to whether the response indicates an acceptable condition or deficiency. Future programs could have a legitimate need for scoring.

## Decision Drivers

* Initial programs do not use weighted scores.
* Some questions have no correct or incorrect answer.
* Negative responses may identify deficiencies.
* Future programs may use scoring differently.

## Considered Options

* Require numeric scoring for every question.
* Prohibit numeric scoring across Inspections.
* Make numeric scoring optional by program or question.
* Retain SafetyCulture scoring without evaluating its use.

## Decision Outcome

Chosen option: **Make numeric scoring optional by inspection program or question**, because the initial programs do not use scoring as a meaningful measure while future programs may have valid scoring requirements. Initial-program interpretation will primarily use response values, deficiencies, findings, actions, and completion measures.

## Consequences

* Descriptive questions can remain unscored.
* Deficiencies can derive from response semantics.
* Future programs can introduce scoring without redesigning the application.
* Reports must distinguish scored and unscored programs.
* Scores must not be compared across incompatible programs.

## More Information

This decision does not establish a scoring algorithm, weighting model, pass threshold, or score-based workflow.

Transcript references: 09:00–10:56, 13:53–14:45, and 28:21–30:36.
