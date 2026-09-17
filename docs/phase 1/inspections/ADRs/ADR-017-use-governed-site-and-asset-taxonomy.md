---
status: proposed
date: 2026-09-17
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

## Decision Drivers

* Establish reusable master data for operational context.
* Filter site and resource selection by establishment.
* Support inspection-frequency rules at the correct level.
* Enable future reuse by Incident Management, JSA, Asset Management, and reporting.
* Avoid treating temporary program groupings as security structures.

## Considered Options

* Maintain an independent site list for every inspection program.
* Use a single flat equipment list without classification or filtering.
* Establish a governed hierarchy of atomic sites, resources, and assets with program-specific groupings layered above it.

## Decision Outcome

Chosen direction: **Establish a governed taxonomy of atomic sites, resources, and assets, with program-specific groupings referencing rather than replacing those records.**

Each operational record will have a stable identity and, where applicable, a relationship to one establishment. Inspection selection lists will be filtered by establishment and may be further filtered by asset type. Program-specific collections, such as the resources covered by one regulatory plan, will reference the underlying atomic records. The taxonomy will provide application context and reporting dimensions without automatically creating an additional security boundary.

## Consequences

* Inspection data can be compared across programs and applications.
* New programs are less likely to require independent taxonomies.
* Program groupings do not erase site- or asset-level identity.
* Enterprise agreement on terminology, hierarchy, and ownership is required.
* Initial manual configuration may be necessary until an authoritative source is available.
* Existing program lists may require mapping and cleanup.

## More Information

The detailed hierarchy, authoritative source, and integration boundary were explicitly deferred for a dedicated asset-hierarchy workshop. This ADR records the architectural direction rather than a finalized data model.

Transcript references: integration and inspections workshop 0:47:02–1:06:10, 1:07:02–1:14:16, 1:24:21–1:41:09, and 2:24:54–2:29:57.
