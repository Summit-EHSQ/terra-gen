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
secondary_applications: Integration Management, Intelex Platform Administration
---

# Integrate Employees through Boomi and EDIS

## Context and Problem Statement

Employee creation requires coordinated updates to employee, user, group, hierarchy, and environment-access data. The organization also expects to distribute employee data to several enterprise systems and does not want each consumer to implement its own source-system logic.

## Decision Drivers

* Centralize transformation, logging, and integration governance.
* Use the supported Intelex employee integration interface.
* Avoid separate point-to-point integrations for every consumer.
* Process employee changes consistently and frequently.
* Preserve a viable alternative if the initially scoped transport is rejected.

## Considered Options

* Maintain employees manually in Intelex.
* Integrate Paylocity directly with individual Intelex tables.
* Use Boomi to produce a daily EDIS file delivered through SFTP.
* Use Boomi to invoke the equivalent Intelex REST endpoints.

## Decision Outcome

Chosen option: **Use Boomi as the managed integration layer and Intelex EDIS as the employee provisioning interface.**

Boomi will produce a one-way daily payload, normally representing the current employee population. The initially scoped transport is an SFTP-delivered CSV or Excel file. The equivalent Intelex REST API remains an implementation alternative if IT or security review determines that SFTP is unsuitable.

## Consequences

* Intelex receives one governed downstream employee payload.
* Transformation and source consolidation are owned outside Intelex.
* Boomi and the selected transport require operational monitoring.
* Changing from SFTP to REST should not materially change the logical employee payload.
* Employee-deactivation semantics must be finalized before production operation.

## More Information

The workshop did not choose among active/inactive flags, omission-based archival, or termination-date calculation for employee deactivation. That remains an open integration-design decision.

Transcript references: 0:03:27–0:10:27 and 0:20:31–0:23:14.
