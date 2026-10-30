---
status: accepted
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

The rules will use available residence, work-location, jurisdiction, and reporting-chain data. Work location will provide the primary establishment input, with explicit transformation rules for remote employees and exceptions. The rules will execute in Boomi before the employee payload is delivered to Intelex. Results must permit review and authorized correction.

## Consequences

* Remote onboarding can produce a consistent establishment assignment.
* The existing methodology becomes explicit and testable.
* Complete and current HR data becomes a dependency.
* Regulatory exceptions may expand the rules over time.
* Manual corrections could be overwritten unless override precedence is defined.
* Boomi becomes the governed location for maintaining and testing the transformation logic.

## More Information

The detailed decision table should address California residents, employees assigned to operating establishments, remote employees outside California, reporting chains that reach different establishments, incomplete source data, and approved overrides.

Transcript references: organizational-structure workshop 2:02:51–2:04:54, 2:24:05–2:27:15, 2:32:29–2:33:13, and 2:42:43–2:45:14; integration and inspections workshop 0:18:05–0:23:14.

## Detailed rule clarification — October 28, 2026

The user supplied the [establishment assignment flow](<../raw artifacts/2026-10-28-establishment-assignment-flow.md>) to close the detailed business-rule question. The original decision and September 17 acceptance record above are retained. This clarification replaces the earlier request for a detailed decision table; it does not add a reporting-chain calculation requirement.

For a new employee, relocation or job change, apply these branches in order in Boomi before delivering HomeLocationCode:

1. If the employee is assigned to, or works at, an established site, use that establishment. This branch takes precedence over residence.
2. Otherwise, treat the employee as remote. If the employee is a California resident, use the San Diego establishment.
3. Otherwise, use the established site designated as the main location for the employee’s job function.

The supplied flow covers employee hours and injury/illness events on OSHA Forms 300, 300A and 301. It defines the Employee establishment calculation; it does not settle event-specific Incident Management attribution or overrides.

Remaining implementation inputs are the source fields, valid site-to-LocationCode mappings (including San Diego), job-function-to-main-site mappings and resolution of conflicting assigned/actual sites. Job function must not be assumed to equal Position Code. The specification’s missing/conflicting-data hold and requirement for durable authorized corrections remain; the flow does not define correction authority or precedence. See specification section 10.1 for the current integration contract.
