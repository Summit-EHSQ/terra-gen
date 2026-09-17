---
status: proposed
date: 2026-09-17
deciders: []
consulted:
  - Dave McLean
informed: []
primary_application: Training Management
secondary_applications: Quiz Builder, Document Management
---

# Replace TPC with Intelex Training Management

## Context and Problem Statement

TPC currently delivers and tracks online training. The target architecture must determine whether TPC remains a parallel LMS or Intelex becomes the training system of record and delivery platform.

## Decision Drivers

* Consolidate assignments and completion history.
* Support SCORM, quizzes, documents, videos, and sessions.
* Avoid duplicate integrations and employee experiences.
* Link training directly to documents and qualifications.

## Considered Options

* Retain TPC and integrate results into Intelex.
* Operate TPC and Intelex in parallel.
* Replace TPC with Intelex Training Management.

## Decision Outcome

Chosen option: **Replace TPC with Intelex Training Management**, because the stated direction is to retire the current LMS and rely on Intelex and its SCORM capability.

## Consequences

* Intelex becomes the central source for requirements and completion history.
* Existing content must be migrated, recreated, or repackaged.
* SCORM authoring capability and Quiz Builder licensing may be required.
* Third-party content availability and refresh arrangements remain dependencies.

## More Information

Latest Training Management workshop references: 00:03:41–00:05:04. This decision does not resolve the ongoing MARCOM refresh mechanism documented in ADR-011.
