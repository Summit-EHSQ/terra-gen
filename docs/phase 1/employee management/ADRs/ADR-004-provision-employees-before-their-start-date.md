---
status: accepted
date: 2026-09-17
deciders:
  - Amy Roth
  - Mike Tran
consulted:
  - Dave McLean
  - Jeremiah Soto
  - Matthew Futter
informed: []
primary_application: Employee Management
secondary_applications: Training Management, Integration Management
---

# Provision Employees before Their Start Date

## Context and Problem Statement

Location-specific onboarding and training must be prepared before a new employee starts. Onboarding data becomes available progressively, and the employee's email address may be provisioned later than the employee identifier, job code, location, supervisor, and hire date.

## Decision Drivers

* Prepare onboarding and training before the first day.
* Minimize manual employee creation.
* Allow an employee to exist before login credentials are available.
* Avoid sending records without the context needed for downstream automation.
* Enrich employee and user data through subsequent daily feeds.

## Considered Options

* Wait until every employee and account field is populated.
* Create new employees manually from the onboarding report.
* Send the technical minimum fields immediately.
* Send a sufficiently complete pre-start record and supplement it later.

## Decision Outcome

Chosen option: **Create a sufficiently complete employee record approximately one week before the expected start date and supplement it through later feeds.**

The pre-start record must contain the employee identifier, name, future hire date, configured job code, work location, and other fields required for intended downstream processing. Email and remaining account attributes may arrive later. User access will not be activated until the SSO identifier is available.

## Consequences

* Training and onboarding preparation can begin before the employee starts.
* Employee creation and user-account activation become separate lifecycle events.
* Boomi must decide when a record is sufficiently complete to send.
* Late or incomplete onboarding data remains an exception requiring monitoring.
* An employee without an email address can be referenced by other records but cannot log in.

## More Information

The preferred upstream improvement is to place the provisioned Entra email address into Paylocity automatically. That improvement strengthens but does not block the Intelex integration.

Transcript references: 0:27:57–0:38:44 and 0:50:44–0:55:47.
