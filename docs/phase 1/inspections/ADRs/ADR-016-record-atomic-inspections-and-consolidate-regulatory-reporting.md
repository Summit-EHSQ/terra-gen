---
status: proposed
date: 2026-09-17
deciders:
  - Whitney Goller
  - Mike Tran
consulted:
  - Dave McLean
  - Amy Roth
informed:
  - Emma Lister
  - Matthew Futter
primary_application: Inspections
secondary_applications: Environmental Compliance, Reporting, Asset Management
---

# Record Atomic Inspections and Consolidate Regulatory Reporting

## Context and Problem Statement

Some regulatory plans cover several operational sites or resources and are currently represented by one completed form. In practice, the physical checks occur at distinct locations, potentially on different dates, and each location can have different deficient responses and corrective actions. Linking one inspection to several sites would reduce data entry but obscure the location of individual results.

## Decision Drivers

* Preserve site- and resource-level inspection history.
* Associate deficiencies and actions with the correct operational entity.
* Support repeated-failure and asset-trend analysis.
* Retain the ability to produce a combined plan-level record.
* Avoid changing the common inspection model for a specialized regulatory output.

## Considered Options

* Store one inspection linked to multiple sites or resources.
* Create separate inspections without a combined reporting mechanism.
* Create one inspection per atomic site or resource and consolidate selected records after completion.

## Decision Outcome

Chosen direction: **Create one inspection per atomic site or resource and consolidate selected records after completion when a regulatory plan requires a combined output.**

Findings and corrective actions will remain associated with their atomic inspection. A future plan-level reporting process may select the applicable inspections and present their date range, included sites or resources, checklist responses, comments, and actions. Where one combined answer is required, the summary may use the least favorable applicable response while retaining the underlying source records.

## Consequences

* Deficiencies remain attributable to specific sites and resources.
* Repeated failures can be analyzed accurately.
* Field users may complete several records where the current process uses one form.
* Consolidated reporting requires additional configuration or development.
* Combination rules and regulatory acceptance criteria must be defined.

## More Information

The combined regulatory output was described as feasible but outside the immediate confirmed scope and lower priority than the underlying inspection model. This ADR remains proposed until the governing plans, asset hierarchy, and report requirements are validated.

Transcript references: integration and inspections workshop 1:55:59–2:11:40 and 2:14:25–2:17:14.
