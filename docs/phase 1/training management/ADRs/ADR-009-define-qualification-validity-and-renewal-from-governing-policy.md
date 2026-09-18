---
status: proposed
date: 2026-09-17
deciders: []
consulted:
  - Amy Roth
  - Paul Niemer
  - Whitney Goller
  - Dave McLean
informed: []
primary_application: Competency Management
secondary_applications: Training Management
---

# Define Qualification Validity and Renewal from Governing Policy

## Context and Problem Statement

Some qualifications are one-time, while others recur independently of their supporting awareness courses. Initial qualification steps may also differ from later renewal requirements. A universal rule that expires a qualification whenever any associated course becomes overdue can therefore misrepresent the governing program.

## Decision Drivers

* Support both one-time and recurring certifications.
* Account for supporting training only when policy makes it a continuing condition.
* Accommodate differences between competency programs.
* Support different initial and renewal requirements.

## Considered Options

* Apply a fixed validity period to the competency.
* Expire the qualification when the earliest associated course expires.
* Treat applicable competencies as one-time achievements.
* Configure validity and renewal requirements from the governing policy.

## Decision Outcome

Chosen option: **Configure validity and renewal requirements from the governing policy**, because supporting-course recurrence, qualification duration, and renewal assessments are not universally coupled.

The effective qualification date is normally the completion date of the final required assessment. A supporting course becoming overdue changes qualification status only when the applicable policy explicitly makes current completion a condition of continued qualification. Initial and subsequent qualification cycles may reference different requirement sets.

Each qualification may define a validity period and an advance-notification period. Expiry will be calculated from the verified effective date. When renewal is completed early, the next validity period begins from the newly verified completion date. Upcoming and overdue work will route to the designated responsible role.

## Consequences

* Qualification status can reflect the actual policy rather than an assumed global rule.
* Initial and renewal cycles remain traceably linked while permitting different requirements.
* Each qualification policy must be interpreted and configured explicitly.
* Reinstatement after overdue training or qualification expiry requires program-specific rules.
* Reminder timing and ownership can vary by qualification.

## More Information

Transcript references: 35:03–35:53 and 45:45–48:27.

The latest workshops superseded the earlier proposed earliest-component-expiry rule. The discussion confirmed configurable expiry and advance reminders, while exact reminder values and escalation recipients remain qualification-specific. Initial certification will be implemented and validated before advanced recertification, lapse, and reinstatement logic. See ADR-002, ADR-006, ADR-007, and ADR-015.
