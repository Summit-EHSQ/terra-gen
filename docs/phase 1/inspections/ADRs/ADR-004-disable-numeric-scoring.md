---
status: accepted
date: 2026-09-17
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

# Hide Numeric Scores and Use Categorical Inspection Outcomes

## Context and Problem Statement

The current checklists may display numerical information inherited from SafetyCulture, but the organization does not use an overall percentage as a meaningful risk measure. A high percentage could make a materially deficient or unsafe inspection appear acceptable. The platform may still need an internal calculation to classify an inspection and support reporting.

## Decision Drivers

* Initial programs do not use weighted scores.
* Some questions have no correct or incorrect answer.
* Negative responses may identify deficiencies.
* A single negative response can make an applicable inspection nonconforming.
* Consistent program setup is preferred over retaining hypothetical options.

## Considered Options

* Require numeric scoring for every question.
* Calculate a score internally but do not expose it to users.
* Make numeric scoring optional by program or question.
* Present a categorical result derived from response semantics.
* Retain SafetyCulture scoring without evaluating its use.

## Decision Outcome

Chosen option: **Hide numeric scores and present a categorical result derived from response semantics**, because inspection performance should be interpreted through individual responses, deficiencies, actions, and completion measures rather than an aggregate percentage.

For inspection types that require an overall outcome, an applicable negative response will produce a nonconforming or failed result and all required positive responses will produce a passing result. Any underlying numeric calculation will remain an implementation detail and will not be displayed as a percentage to inspectors.

## Consequences

* Descriptive questions can remain unscored.
* Deficiencies can derive from response semantics.
* Checklist administrators have one fewer configuration decision.
* Reports do not need to reconcile incompatible scoring models.
* A high percentage cannot obscure a material failed item.
* Failure rules may need to vary by inspection type where response semantics differ.
* Prominent failure language may affect user behavior and must be designed carefully.
* A future program with a demonstrated scoring requirement will require scoring to be deliberately re-enabled through configuration.

## More Information

Hiding scoring is a reversible configuration choice, not removal of the underlying platform capability. The final user-facing label, such as failed, nonconforming, or action required, remains a detailed design decision. This decision supersedes the earlier proposal to leave numeric scoring visible or optional by program.

Transcript references: inspections preparation workshop 09:00–10:56, 13:53–14:45, and 28:21–30:36; integration and inspections workshop 2:20:02–2:21:46, 2:22:18–2:24:54, and 2:26:18–2:35:05.
