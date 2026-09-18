---
status: proposed
date: 2026-09-17
deciders:
  - Amy Roth
  - Mike Tran
consulted:
  - Dave McLean
  - Jeremiah Soto
  - Vanessa Newmarker
informed:
  - Matthew Futter
primary_application: Employee Management
secondary_applications: Training Management, Intelex Platform Administration, Integration Management
---

# Use Position Codes as Inputs to Training and Provisioning Profiles

## Context and Problem Statement

Configuring every employee's training and validated provisioning assignments individually would be difficult to maintain. Position codes will help determine training work groups and may support other validated provisioning rules. Paylocity reporting can provide the position code, although availability of a stable identifier through the production integration interface still requires technical validation. The source catalogue is granular and new codes may appear over time.

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

This decision remains proposed until Paylocity confirms that a stable position-code identifier is available through its production integration interface. Position descriptions will not be treated as an equivalent stable key without validation.

A profile will define training work groups and may define other provisioning assignments only where the corresponding business rules have been validated. Several position codes may map to one profile. Position codes will exist as governed reference records in Intelex rather than being treated only as unvalidated text from the integration.

A new position code will produce an administrative notification or work item so its rules can be defined. Basic employee provisioning may proceed when sufficient identity and establishment data exist, but position-code-derived training assignments will remain incomplete until the code is mapped. When an employee's code changes, the system will reassess profile-derived assignments.

## Consequences

* Routine provisioning becomes repeatable and scalable.
* Role changes can update access and training consistently.
* Unconfigured codes become visible rather than silently receiving arbitrary defaults.
* The granular HR catalogue may require significant mapping work.
* Implementation depends on confirmation of a stable source identifier.
* Automatic changes must preserve approved manual exceptions where appropriate.
* A new position code may delay training assignment without necessarily delaying basic employee or user creation.

## More Information

This ADR defines the shared provisioning mechanism. Training-specific applicability remains documented in Training Management ADR-001, **Assign Training Requirements through Job-Code-Mapped Workgroups**. The profile catalogue, mapping ownership, exception precedence, and exact minimal-record behavior remain to be designed.

Transcript references: organizational-structure workshop 2:21:49–2:23:08 and 2:27:15–2:32:29; integration and inspections workshop 0:24:50–0:29:40 and 2:31:33–2:32:18.
