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
secondary_applications: Integration Management, Workflow Management
---

# Monitor Employee Integration Errors Daily

## Context and Problem Statement

The Boomi-to-Paylocity-Employee-Record-to-APIHub process can receive malformed values, invalid dates, unknown Position Codes, unpublished Position Code configurations, or references to supervisors and locations that do not exist. Errors may occur during custom-record validation, Action Handler calculation, APIHub execution, or `EmployeeUserAccess` validation. Without consolidated monitoring, a failure in any one of these stages could leave an employee unprovisioned or only partially prepared for downstream use.

## Decision Drivers

* Detect missing employees and failed updates promptly.
* Prevent silent degradation of workflow routing.
* Give administrators an actionable correction queue.
* Allow monitoring frequency to be reduced after stabilization.

## Considered Options

* Rely on administrators to inspect the back-office log.
* Send a weekly summary.
* Send a daily summary.
* Attempt to suppress or automatically correct every error.

## Decision Outcome

Chosen option: **Send a daily employee-integration error summary to the responsible administration team during initial operation.**

The summary will cover Boomi delivery, Paylocity Employee Record validation and calculation, unpublished Position Code blocks, APIHub requests, `EmployeeUserAccess` responses, and failures to establish the Employee-to-Paylocity relation. Records with non-fatal errors may continue processing, but the unresolved validation or reference problem will remain visible for correction.

## Consequences

* Integration defects are visible shortly after processing.
* Administrators assume an ongoing review responsibility.
* Daily notifications may be noisy during stabilization.
* Workflow-specific fallback routing may still be required.

## More Information

The notification frequency may be reduced after error patterns and operational response are understood. Workflow fallback does not replace correction of the underlying employee data.

The current integration sequence and its validation gates are defined in [Paylocity Employee Integration Technical Requirements and Clarifications](<../raw artifacts/2026-09-25-paylocity-employee-integration-technical-requirements.md>) and Employee Management ADR-003.

Transcript references: 0:56:18–1:02:12.
