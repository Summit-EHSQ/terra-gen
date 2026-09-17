---
status: proposed
deciders:
  - Whitney Goller
  - Mike Tran
consulted:
  - Dave McLean
informed:
  - Emma Lister
  - Matthew Futter
primary_application: Inspections
secondary_applications: Site Management, Reporting, Intelex Platform Administration
---

# Track Inspection Frequency as Configurable Site-Level Requirements

## Context and Problem Statement

At least one health and safety program requires no fewer than two inspections per year at each site. Environmental inspection performance is also viewed at the site level. The organizational-structure workshop subsequently distinguished an OSHA establishment from the more granular operational resource, plant, or site where an inspection occurs. These obligations are recurring targets rather than necessarily pre-scheduled assignments to named inspectors.

## Decision Drivers

* Current requirements are measured by site.
* More inspections than the minimum remain valid.
* Requirements are currently tracked manually.
* Not every requirement needs a pre-created assigned inspection.
* Future programs may use different frequencies or scopes.
* A single OSHA establishment may contain several operational resources or sites with separate inspection obligations.

## Considered Options

* Pre-create and assign every required inspection.
* Record completed inspections without tracking requirements.
* Configure recurring completion requirements by program and site.
* Hard-code the twice-yearly rule.

## Decision Outcome

Chosen option: **Configure recurring completion requirements by inspection program and operational resource or site**, because the present obligation is a resource-level minimum and does not require each occurrence to be scheduled to a specific individual. Applicable programs will define a required quantity and period, and completed inspections will be reconciled against that requirement.

The resource or site is separate from the OSHA establishment used by the Location Structure. Resource choices will be related to and filtered by establishment so a completed inspection can contribute to both establishment-level and resource-level reporting without treating every resource as an OSHA establishment.

## Consequences

* Compliance can be monitored without unnecessary assigned records.
* Sites can perform more than the minimum.
* Dashboards can identify unmet, partially met, and met requirements.
* Reporting periods, boundaries, and treatment of late inspections must be defined.
* The model may require extension for requirements measured by person or asset.
* Resource-to-establishment relationships must be maintained for filtering and aggregation.

## More Information

The health and safety requirement discussed is at least two inspections per year per site. In this ADR, “site” means the operational resource or plant against which the inspection obligation is measured; it does not automatically mean the OSHA establishment. The red-yellow-green example may guide presentation but does not establish final threshold logic.

Transcript references: 23:19–26:56 in the Inspections workshop and 1:33:02–1:42:56 in the organizational-structure workshop.
