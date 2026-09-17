---
status: proposed
date: null
deciders: []
consulted:
  - Dave McLean
  - Jeremiah Soto
  - Vanessa Newmarker
informed:
  - Matthew Futter
primary_application: Employee Management
secondary_applications: Training Management, Intelex Platform Administration, Integration Management
---

# Use Position Codes as Provisioning Profile Inputs

## Context and Problem Statement

Configuring every employee's hierarchy access, application groups, and training assignments individually would be difficult to maintain. Position codes are available from HR and are already expected to help determine training work groups, but the source catalogue is granular and new codes may appear over time.

## Decision Drivers

* Automate common onboarding and transfer activities.
* Reuse consistent access and training rules.
* Detect position codes that have not been configured.
* Reassess derived assignments when an employee changes roles.
* Preserve controlled exceptions.

## Considered Options

* Configure every employee individually.
* Map every position code directly to a unique set of assignments.
* Use broad role categories unrelated to HR position codes.
* Use position codes as inputs to reusable Intelex profiles with exceptions.

## Decision Outcome

Chosen option: **Integrate position codes with employee data and map them to reusable Intelex provisioning profiles.**

A profile may define default login hierarchy assignments, application or security-group memberships, and training work groups. Several position codes may map to one profile. A new position code will produce an administrative notification or work item so its rules can be defined. When an employee's code changes, the system will reassess profile-derived assignments.

## Consequences

* Routine provisioning becomes repeatable and scalable.
* Role changes can update access and training consistently.
* Unconfigured codes become visible rather than silently receiving arbitrary defaults.
* The granular HR catalogue may require significant mapping work.
* Automatic changes must preserve approved manual exceptions where appropriate.

## More Information

This ADR defines the shared provisioning mechanism. Training-specific applicability remains documented in Training Management ADR-001, **Assign Training Requirements by Employee Profile and Designation**. The profile catalogue, mapping ownership, and exception precedence remain to be designed.

Transcript references: 2:21:49–2:23:08 and 2:27:15–2:32:29.
