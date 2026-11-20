---
status: proposed
date: 2026-09-17
last_revised: 2026-11-10
deciders: []
consulted:
  - Dave McLean
  - Amy Roth
  - Matthew Futter
  - Whitney Goller
  - Jeremiah Soto
  - Darren
  - Edward
informed:
  - Emma Lister
primary_application: Inspections
secondary_applications: Asset Management, Incident Management, JSA, Environmental Compliance, Reporting
---

# Use a Governed Site and Asset Taxonomy for Inspection Context

## Context and Problem Statement

Inspection programs currently group operational locations in different ways. Some entries represent actual resources, plants, substations, or equipment, while others are convenient collections created to reduce field effort or align with a regulatory plan. Allowing each program to create an unrelated site list would weaken cross-application reporting and increase administrative reconfiguration.

The November 10 meeting develops the previously deferred asset model. It proposes a shared source-owned hierarchy that includes facilities and generation assets, allows inspection at a relevant hierarchy level, and supplies establishment context from the selected asset. The shared object and integration are proposed in [PA ADR-010](<../../platform administration/ADRs/ADR-010-consume-a-governed-asset-hierarchy-from-terra-gen.md>) and [PA ADR-011](<../../platform administration/ADRs/ADR-011-synchronize-assets-through-a-parent-first-api-integration.md>). [Call, 0:09:15–0:11:13; 0:13:52–0:15:42; 0:23:22–0:29:24]

## Decision Drivers

* Establish reusable master data for operational context.
* Keep establishment and operational-resource choices consistent without requiring repeated context entry. [Call, 0:27:08–0:29:24]
* Support inspection-frequency rules at the correct level.
* Enable future reuse by Incident Management, JSA, Asset Management, and reporting.
* Avoid treating temporary program groupings as security structures.
* Let users identify the inspected entity at a meaningful hierarchy level rather than always selecting a leaf. [Call, 0:09:15–0:10:18]

## Considered Options

* Maintain an independent site list for every inspection program.
* Use a single flat equipment list without classification or filtering.
* Establish a governed hierarchy of atomic sites, resources, and assets with program-specific groupings layered above it.
* Require establishment-first selection and then restrict every inspection to a leaf asset — analyst-derived navigation alternative, inconsistent with the meeting's any-level inspection example.

## Decision Outcome

Chosen option: **Use the governed site/asset hierarchy for inspection context, select the entity being inspected, and derive its establishment**, while program-specific groupings reference rather than replace the underlying records. [Call, 0:09:15–0:10:18; 0:23:22–0:29:24]

Each operational node retains a stable identity. The inspector can start from a relevant resource, substation, building or other allowed node and narrow through the hierarchy where needed. The inspected record may be a parent-level entity such as a switchyard; leaf selection is not universal. Warehouses and offices are part of the proposed operational inventory, not excluded because they are not generation resources. The meeting does not fix the final selector layout or permitted types for every inspection program. [Call, 0:09:15–0:11:13; 0:23:22–0:24:32; 0:29:57–0:30:19]

Populate establishment from the inspected asset's direct relationship or its parent's establishment relationship. It describes the inspected entity, not the inspector's employee establishment. The user should not need a redundant establishment selection when the asset provides the context. Where an establishment-first search or type filter is provided, keep its results consistent with the same relationships; do not make that search order the only supported route. [Call, 0:27:08–0:29:24]

Program-specific collections, such as resources covered by a regulatory plan, continue to reference the underlying records. A parent asset selected for a genuinely parent-level inspection is an identifiable operational entity, rather than permission to combine unrelated results or award automatic descendant target credit. Frequency matching and consolidated output remain governed by [ADR-008](ADR-008-track-configurable-site-inspection-frequency.md) and [ADR-016](ADR-016-record-atomic-inspections-and-consolidate-regulatory-reporting.md). The distinction is architectural analysis; the meeting did not settle ancestor/descendant counting rules.

The taxonomy provides context and reporting dimensions without creating an additional security boundary. The separate reporting Location Structure proposal in [PA ADR-009](<../../platform administration/ADRs/ADR-009-separate-reporting-locations-from-osha-establishments.md>) remains conditional. This ADR does not remove existing inspection permissions or decide how its security Location is populated. [Call, 0:26:03–0:27:08; 0:30:29–0:31:27]

Ordinary users do not create missing assets during inspection entry. Correct the governed source and let the integration propagate the change, consistent with PA ADR-010. One-time test loads discussed for UAT are a temporary preparation path. [Call, 0:14:47–0:15:42; 0:44:59–0:46:56]

## Consequences

* Inspection data can be compared across programs and applications.
* New programs are less likely to require independent taxonomies.
* Program groupings do not erase site- or asset-level identity.
* Enterprise agreement on terminology, hierarchy, and ownership is required.
* Production asset availability depends on the governed source and integration; provisional test loading does not transfer ownership to inspectors.
* Existing program lists may require mapping and cleanup.
* Architectural analysis: missing/conflicting establishment links, reparented assets and historical context require explicit validation and retention rules before reporting depends on derived values.

## More Information

Earlier workshops deferred the detailed hierarchy, authoritative source and integration boundary. The November 10 call supplies a proposed direction, not a complete dictionary, endpoint contract, verified configuration or approved change order.

Transcript references: integration and inspections workshop 0:47:02–1:06:10, 1:07:02–1:14:16, 1:24:21–1:41:09, and 2:24:54–2:29:57.

Additional evidence: [November 10 asset-hierarchy call](<../raw artifacts/meeting_transcripts/2026-11-10-summit-tg-asset-hierarchy-setup.md>), 0:09:15–0:11:13, selectable parent assets; 0:13:52–0:15:42, source governance; 0:23:22–0:30:19, facilities and establishment derivation; 0:30:29–0:31:27, reporting versus security. Original date, ID and proposed status are preserved.

Open points include allowed record types and navigation per program, missing-parent/establishment handling, override permissions, historical versus current establishment values, reparenting effects, security-location binding and mapping of existing site lists. The [Inspections target field contract](../target/field-contract.md) contains a conditional Operational Resource interface; matching it to the shared Asset object requires explicit design, not a silent rename or additional local asset store.
