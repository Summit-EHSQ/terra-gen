---
status: proposed
date: 2026-09-17
deciders: []
consulted:
  - Dave McLean
informed: []
primary_application: Training Management
secondary_applications: Employee Management, Integration Management, Reporting and Dashboards
---

# Preserve Training History across Employment Status Changes

## Context and Problem Statement

Employees may terminate, later be rehired, change jobs, or take a leave of absence. Training history must remain auditable without treating all former requirements as currently applicable or exposing sensitive leave information in operational reports.

## Decision Drivers

* Preserve historical requirements and completions.
* Reuse the persistent HR employee identity on rehire.
* Recalculate applicability from current job-code and workgroup mappings.
* Protect leave-of-absence information.
* Retain complete administrative data.

## Considered Options

* Create a new Intelex person for every rehire.
* Delete or detach inactive training records.
* Preserve history and reactivate only currently applicable requirements.
* Treat leave of absence identically to termination.

## Decision Outcome

Chosen option: **Preserve history and reactivate only currently applicable requirements**, because the HR employee identifier can reconnect a rehired employee to prior records while current workgroups determine present obligations.

Reactivated requirements should receive a new applicable-from date. Leave status should be available from the HR feed, but operational dashboards should exclude leave records through audience-appropriate report filters rather than hiding them globally from Training Management administrators.

## Consequences

* Training history remains continuous and auditable.
* Rehire and job changes can re-evaluate requirements automatically.
* Incorrect HR treatment of a rehire as a new employee can still produce duplicates.
* Dashboard builders must consistently apply privacy filters.
* Detailed leave activation and catch-up behavior remains to be configured.

## More Information

Latest Training Management workshop references: 02:00:08–02:12:22. The transcript supported filtered operational reporting, not global deletion or concealment of administrative records.
