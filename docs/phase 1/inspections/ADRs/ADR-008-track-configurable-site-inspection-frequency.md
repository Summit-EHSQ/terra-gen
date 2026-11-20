---
status: proposed
last_revised: 2026-11-10
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

Chosen option: **Configure recurring completion requirements by inspection program and operational resource or site**, because the present obligation is a resource-level minimum and does not require each occurrence to be scheduled to a specific individual. Applicable programs will define a required quantity and period, or a recurring interval, and completed inspections will be reconciled against that requirement. Each applicable establishment-and-resource combination will be independently measurable. Qualifying criteria may include inspection type, checklist, site or resource, effective dates, and—where required—the inspection outcome.

The requirement will be represented separately from the inspection records. The system will not rely on automatically generated future draft inspections because users would have to locate and complete those pre-created records. Reminder or at-risk thresholds may notify responsible roles when a requirement is not on track within its period.

The resource or site is distinct from the OSHA establishment. Under the accepted platform baseline, that establishment is represented by Location Structure. The November 10 call proposes separating the reporting Location Structure from regulatory establishments and deriving an inspection's establishment from its selected asset. That proposal remains subject to [Platform Administration ADR-009](<../../platform administration/ADRs/ADR-009-separate-reporting-locations-from-osha-establishments.md>); it does not change the target's site/resource grain or approved frequency rules. [Call, 0:25:24–0:31:19]

Maintain an explicit resource/asset-to-establishment relationship so completed inspections can contribute to both reporting dimensions. Apply the selection and derived-context rules in [ADR-017](ADR-017-use-governed-site-and-asset-taxonomy.md). If an establishment-first view is provided, filter its resource choices consistently; do not require an inspector to select an establishment before the asset solely to satisfy the older navigation description. Target matching for inspections at different hierarchy levels remains unresolved: selecting a parent asset does not by itself establish credit for every descendant target. This matching limitation is architectural analysis, not a rule selected in the call.

## Consequences

* Compliance can be monitored without unnecessary assigned records.
* Sites can perform more than the minimum.
* Dashboards can identify unmet, partially met, and met requirements.
* Reporting periods, boundaries, and treatment of late inspections must be defined.
* Matching rules must be precise enough to prevent the wrong inspection from satisfying a requirement.
* Reminder thresholds and escalation recipients require detailed design.
* The model may require extension for requirements measured by person or asset.
* Resource-to-establishment relationships must be maintained for filtering and aggregation.
* Architectural analysis: any approved Location Structure change requires review of target location bindings, establishment aggregation and historical relationship handling before existing counts are reinterpreted.

## More Information

Target logical model and implementation rules, generalized for cross-application operational activity targets: [Solution Specification: Configurable Operational Activity Targets](ADR-008-solution-specification-configurable-site-inspection-frequency.md).

The health and safety requirement discussed is at least two inspections per year per site. In this ADR, “site” means the operational resource or plant against which the inspection obligation is measured; it does not automatically mean the OSHA establishment. A reporting-only alternative was considered but cannot identify a required inspection when no corresponding record exists. The red-yellow-green example may guide presentation but does not establish final threshold logic.

Transcript references: 23:19–26:56 in the Inspections workshop; 1:33:02–1:42:56 in the organizational-structure workshop; integration and inspections workshop 0:36:39–0:46:35 and 1:12:30–1:14:16.

Additional evidence: [November 10 asset-hierarchy call](<../raw artifacts/meeting_transcripts/2026-11-10-summit-tg-asset-hierarchy-setup.md>), 0:25:24–0:31:19. No new numerical frequency, ad hoc grouping rule, ancestor-crediting policy or target-automation implementation is agreed. The linked operational-activity target specification and implementation artifacts remain separate existing contracts; their location/establishment bindings require reconciliation if PA ADR-009 is adopted. Proposed status and the original absence of a decision date are preserved.
