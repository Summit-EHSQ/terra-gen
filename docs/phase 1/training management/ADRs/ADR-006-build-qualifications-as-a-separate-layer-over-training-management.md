---
status: accepted
date: 2026-09-18
deciders:
  - Amy Roth
consulted:
  - Whitney Goller
  - Paul Niemer
  - Dave McLean
informed:
  - Matthew Voss
primary_application: Competency Management
secondary_applications: Training Management, Intelex Platform Administration
---

# Track Qualifications through a Standalone Configurable Requirement Workflow

## Context and Problem Statement

Qualifications may depend on internal instruction, third-party courses, certificates, practical evaluations, skills demonstrations, experience, and authorized attestations. These activities are not represented consistently in Training Management, and direct integration would not cover all evidence sources without substantial complexity.

## Decision Drivers

* Support internal and third-party qualification activities.
* Represent sequenced practical and evaluated requirements.
* Avoid forcing every requirement into the course catalogue.
* Provide one view of qualification progress and current validity.
* Keep the framework configurable across qualification types.

## Considered Options

* Derive qualification status directly from Training Management.
* Add every qualification activity as a Training Management course.
* Track only a standalone final certification result.
* Track qualifications through a standalone configurable requirement workflow.

## Decision Outcome

Chosen option: **Track qualifications through a standalone configurable requirement workflow.**

Each qualification will define a configurable list of activities. An activity may represent instruction, a certificate, an evaluation, a skills demonstration, experience, or an authorized attestation. Activities may define dependencies, pass/fail outcomes, permitted attempts, responsible roles, and a completion window.

Training may still be delivered and recorded in Training Management. In the initial architecture, however, a Training Management record will not directly set qualification status. A qualification administrator will confirm the applicable activity from objective evidence in the same manner as externally delivered training. Verified completion of every required activity establishes the qualification effective date.

## Consequences

* Qualification progress can include mixed internal and external evidence sources.
* The qualification workflow is not dependent on Training Management integration.
* Some completion information may be represented in both applications.
* Administrators must verify evidence and maintain qualification configuration.
* Complex program rules must be expressed as explicit parameters.
* The framework can later support external assessors without making them an initial dependency.

## More Information

This decision supersedes the earlier design in this ADR that treated qualification as a layer directly linked to Training Management requirements. Detailed digital conversion of assessment forms remains optional later scope and may require a change order. Initial certification will be validated before advanced recertification and lapse behavior is implemented. See ADR-007, ADR-008, ADR-009, and ADR-015.

Latest workshop references: 02:46:50–03:06:26.
