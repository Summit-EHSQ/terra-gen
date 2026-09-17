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

EDIS can receive malformed values, invalid dates, unknown list values, or references to supervisors who do not exist. Intelex logs processing errors in a back-office screen, but the standard process does not proactively notify administrators. Non-fatal reference errors may also affect downstream workflow routing.

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

Records with non-fatal errors may continue processing, but the unresolved validation or reference problem will remain visible for correction.

## Consequences

* Integration defects are visible shortly after processing.
* Administrators assume an ongoing review responsibility.
* Daily notifications may be noisy during stabilization.
* Workflow-specific fallback routing may still be required.

## More Information

The notification frequency may be reduced after error patterns and operational response are understood. Workflow fallback does not replace correction of the underlying employee data.

Transcript references: 0:56:18–1:02:12.
