---
status: proposed
date: 2026-09-17
deciders: []
consulted:
  - Amy Roth
  - Whitney Goller
  - Dave McLean
informed: []
primary_application: Training Management
secondary_applications: ""
---

# Model Independently Governed Training Topics as Atomic Courses

## Context and Problem Statement

Existing programs may contain several training topics but expose only an aggregate program completion. Intelex needs recurrence, version, content, assessment, and completion history at the smallest independently governed training topic.

## Decision Drivers

* Retain topic-level completion evidence.
* Allow different frequencies and content by topic.
* Reuse courses across workgroups and qualifications.
* Preserve program, orientation, and monthly roll-up reporting.

## Considered Options

* Represent an existing multi-topic program as one course.
* Represent each file or learning asset as a course.
* Represent each independently governed topic as an atomic course and derive higher-level summaries.

## Decision Outcome

Chosen option: **Represent each independently governed topic as an atomic course and derive higher-level summaries**, because each topic may have its own recurrence, content, assessment, and qualification relationship.

An orientation or program completion date may be derived after all constituent courses are complete, but it does not replace the underlying course records.

## Consequences

* Each topic has an independent, auditable completion history.
* Program and monthly results can be explained through the courses they summarize.
* The course catalogue and assignment volume will be larger.
* Roll-up rules are required for orientation and program-level completion.

## More Information

Transcript reference: 11:59–15:38. Latest workshop references: 00:12:11–00:15:52 and 01:42:14–01:45:56.

The current monthly dates are extracted from the LMS. No open, completed, or raw-record inventory views were specified. See ADR-001 and ADR-003.
