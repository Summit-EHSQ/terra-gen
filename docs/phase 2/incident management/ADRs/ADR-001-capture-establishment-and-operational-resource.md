---
status: proposed
date: null
deciders: []
consulted:
  - Dave McLean
  - Vanessa Newmarker
informed:
  - Matthew Futter
primary_application: Incident Management
secondary_applications: Inspections, Environmental Compliance, Intelex Platform Administration
---

# Capture Both OSHA Establishment and Operational Resource

## Context and Problem Statement

An OSHA establishment may contain several plants, projects, resources, warehouses, or administrative buildings. Regulatory reporting needs establishment attribution, while investigations and operational reporting need the actual place where an event occurred. Making every resource a Location Structure node would enlarge the hierarchy and conflate resource-level reporting with establishment security.

## Decision Drivers

* Preserve standard OSHA establishment reporting.
* Identify the actual resource or site where an event occurred.
* Support granular incident and inspection analysis.
* Avoid expanding the Location Structure to every asset.
* Prevent invalid establishment-resource combinations.
* Handle the uncommon event outside an employee's normal establishment.

## Considered Options

* Record only the employee's assigned establishment.
* Add every resource beneath the establishment in the Location Structure.
* Capture establishment and operational resource as separate related values.
* Let users select both values from unrestricted lists.

## Decision Outcome

Chosen option: **Capture the OSHA establishment and operational resource or site as separate, related values on relevant records.**

For incidents, establishment will normally default from the affected employee. The user will explicitly select the actual resource or site because some employees move between resources. Resource choices will be filtered by establishment. Authorized users may override the default establishment for the uncommon event that belongs to another establishment.

Other applications may use different defaults. Inspections, for example, may require explicit selection rather than inheriting an employee assignment.

## Consequences

* Regulatory and operational reporting remain distinct and reconcilable.
* Resource-level trends can be analyzed without an oversized Location Structure.
* Forms require an additional selection and relationship filtering.
* Resource-to-establishment relationships must be maintained.
* Overrides require permission and audit controls.
* Terminology for site, resource, asset, project, and legal entity must be standardized.

## More Information

The lowest operational unit is likely an individual plant or resource rather than a legal entity, because one legal entity may contain several resources. The final model must also classify substations, warehouses, and administrative buildings where events can occur.

Transcript references: 0:40:35–0:42:44, 1:33:39–1:42:56, and 1:44:21–1:46:52.
