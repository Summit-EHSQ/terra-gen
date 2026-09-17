---
status: proposed
deciders:
  - Whitney Goller
  - Mike Tran
consulted:
  - Dave McLean
  - Matthew Futter
informed:
  - Emma Lister
primary_application: Inspections
secondary_applications: Workflow Management, Health and Safety, Environmental Compliance
---

# Add Configurable Review and Approval Workflow

## Context and Problem Statement

The standard one-way inspection submission process does not provide the review required by the initial EH&S programs. Current inspections are exported and manually returned when corrections are needed. Reviewer responsibility may depend on the program and site, while future programs may require no review, one review, or multiple reviews.

## Decision Drivers

* EH&S inspections require review and sign-off.
* Reviewers must be able to return inspections for correction.
* Functional reviewers differ by program.
* Reviewer responsibility may vary by site.
* Review activity must produce an auditable history.

## Considered Options

* Retain review outside Intelex.
* Require the same workflow for every inspection.
* Configure review stages and routing by program and site.
* Use a separate workflow application after submission.

## Decision Outcome

Chosen option: **Configure review stages and routing by inspection program and site**, because requirements vary across programs and locations. Initial health and safety and environmental compliance inspections will route to their respective functional reviewers before finalization, using designated site or functional roles where practical.

## Consequences

* Reviews, corrections, resubmissions, and approvals remain in Intelex.
* Routing can reflect site-specific responsibility.
* Future programs can use different review patterns.
* Site-to-reviewer assignments must be maintained.
* Notifications, return reasons, status transitions, and finalization rules require definition.

## More Information

A possible second-stage site review was discussed as a future scenario, not a confirmed requirement. The configuration should accommodate it without activating it by default.

Transcript references: 17:14–22:09.
