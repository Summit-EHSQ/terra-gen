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
secondary_applications: Incident Management, Integration Management, Intelex Platform Administration
---

# Automate Establishment Assignment for Remote Employees

## Context and Problem Statement

A significant portion of the workforce is remote. The HR system identifies remote workers but does not directly supply the OSHA establishment used by EHS reporting. The current methodology considers residence, work location, jurisdiction, and reporting chain. Repeating that assignment manually for every employee does not scale.

## Decision Drivers

* Support accurate OSHA and Cal/OSHA reporting.
* Apply the existing assignment methodology consistently.
* Avoid ongoing manual work for the remote population.
* Use available HR data and preserve traceability.
* Allow correction when source data is incomplete or exceptional.

## Considered Options

* Assign all remote employees to one corporate establishment.
* Use the HR office label without transformation.
* Assign every remote employee manually in Intelex.
* Apply a documented ruleset during employee integration.
* Make the HR system calculate the final establishment immediately.

## Decision Outcome

Chosen option: **Automate remote employee establishment assignment through a documented, deterministic ruleset.**

The rules will use available residence, work-location, jurisdiction, and reporting-chain data. The preferred long-term source may be the HR system. Until that is practical, the rules may execute in the integration transformation layer or Intelex; the execution tier remains an integration-design decision. Results must permit review and authorized correction.

## Consequences

* Remote onboarding can produce a consistent establishment assignment.
* The existing methodology becomes explicit and testable.
* Complete and current HR data becomes a dependency.
* Regulatory exceptions may expand the rules over time.
* Manual corrections could be overwritten unless override precedence is defined.

## More Information

The detailed decision table should address California residents, employees assigned to operating establishments, remote employees outside California, reporting chains that reach different establishments, incomplete source data, and approved overrides.

Transcript references: 2:02:51–2:04:54, 2:24:05–2:27:15, 2:32:29–2:33:13, and 2:42:43–2:45:14.
