---
status: accepted
date: 2026-09-17
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

Chosen option: **Configure review activation, reviewer routing, and review due period by inspection program**, because requirements vary across programs and locations. Where review is enabled, routing will normally use a designated site or functional role, such as Site Health and Safety Coordinator. Supervisor- or submitter-based routing remains available where appropriate; named-person routing and technical expressions will not be the normal pattern.

## Consequences

* Reviews, corrections, resubmissions, and approvals remain in Intelex.
* Routing can reflect site-specific responsibility.
* Future programs can use different review patterns.
* Site-to-reviewer assignments must be maintained.
* Notifications, return reasons, status transitions, and finalization rules require definition.
* An overdue review remains actionable and generates reminders rather than becoming locked.

## More Information

A possible second-stage site review was discussed as a future scenario, not a confirmed requirement. The configuration should accommodate it without activating it by default.

Transcript references: inspections preparation workshop 17:14–22:09; integration and inspections workshop 2:06:29–2:10:24, 2:15:59–2:18:50, and 2:53:28–2:54:23.
