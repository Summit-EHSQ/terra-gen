---
status: proposed
date: 2026-09-17
deciders: []
consulted:
  - Amy Roth
  - Whitney Goller
  - Paul Niemer
  - Dave McLean
informed: []
primary_application: Competency Management
secondary_applications: Training Management
---

# Build Qualifications as a Separate Layer over Training Management

## Context and Problem Statement

Some qualifications require formal training followed by sequenced practical assessments performed by authorized trainers. Training Management does not provide the dependency, assessor ownership, and evidence model needed for these activities.

## Decision Drivers

* Recognize qualifications requiring multiple components.
* Include practical and evaluated requirements alongside courses.
* Reuse underlying training across competencies.
* Continue tracking training that does not support a competency.

## Considered Options

* Represent a qualification as a separate container linked to reusable training and assessment requirements.
* Track a standalone certification result without structured prerequisite relationships.
* Treat each training completion as sufficient evidence of competency.

## Decision Outcome

Chosen option: **Represent a qualification as a separate container linked to reusable training and assessment requirements**, because qualification can depend on courses, evaluations, practical activities, experience, and authorized sign-offs acting together.

Underlying training may support multiple qualifications and may also exist independently. Qualification assessments are not modeled as employee self-service courses. Completion of all prerequisite courses activates the first applicable assessor-owned task, and subsequent assessment tasks activate in their configured order.

## Consequences

* Qualification status can be traced to its supporting requirements.
* Shared training can contribute to more than one competency.
* Business logic must evaluate the combined requirement state.
* Custom workflow is required to sequence assessments and assign assessor responsibility.
* Attainment and continued validity remain separately governed.

## More Information

Transcript references: 30:29–31:39, 33:04–35:53, 39:42–40:13, and 48:53–49:24.

The later workshop confirmed this as an independent layer because Training Management cannot sequence course dependencies. Latest workshop references: 02:32:37–02:49:17 and 03:06:57–03:13:52. Detailed digital assessment forms remain optional later scope; the initial pattern may use assessor confirmation plus attached evidence. See ADR-007, ADR-008, and ADR-009.
