---
status: proposed
date: null
deciders: []
consulted:
  - Dave McLean
  - Vanessa Newmarker
  - Jeremiah Soto
informed:
  - Matthew Futter
primary_application: Intelex Platform Administration
secondary_applications: Incident Management, Training Management, Inspections, Document Control, Environmental Compliance
---

# Use Establishments as the Initial Location Hierarchy and Keep Asset Taxonomy Separate

## Context and Problem Statement

Terra-Gen combines physical establishments, operating resources, technologies, corporate functions, and employees who may work remotely or support several locations. The available HR department values do not reliably represent the company's management structure, while work-location values can be resolved to establishments. Incident Management also derives OSHA and Cal/OSHA reporting from the Location Structure. Operational assets remain important for inspection and reporting context but are not presently an authoritative security hierarchy.

## Decision Drivers

* Preserve standard OSHA establishment reporting.
* Use reliable source data for the initial security boundary.
* Support geographic, technology, and resource reporting without conflating those dimensions with access.
* Represent matrix responsibilities without duplicating establishments or employees.
* Keep the structure maintainable as the operating portfolio changes.
* Provide a shared foundation for multiple Intelex applications.

## Considered Options

* Represent every dimension in one Location Structure.
* Use establishments for the initial Location Structure and defer the Business Hierarchy until a reliable organizational source is identified.
* Use the Location Structure for establishments and a separate non-security asset taxonomy for operational context.
* Flatten the Location Structure and use reporting tags for every other dimension.
* Duplicate establishments beneath technology or organizational branches.

## Decision Outcome

Chosen option: **Use the Location Structure for establishments at initial go-live and keep the operational asset taxonomy separate from security.**

The Location Structure will initially remain relatively flat, with recognized establishments rolling up to Terra-Gen. Employees will be integrated to an establishment. Intelex may contain manually maintained roll-up nodes where useful, but the integration does not require or govern them. Sites, resources, technologies, and equipment will be represented through governed operational reference data for application context and reporting. A Business Hierarchy may be introduced later only when a reliable source and validated application use cases exist.

## Consequences

* OSHA reporting can use standard Intelex behavior.
* The initial model can be supported by available HR work-location data.
* Asset and resource data can evolve without automatically changing access.
* Management reporting lines are not represented by the initial hierarchy.
* Cross-establishment roles require controlled login assignments or security exceptions.
* A future Business Hierarchy requires a separate validation and adoption decision.

## More Information

This ADR revises the earlier two-hierarchy direction after review of the available HR data. The detailed enterprise asset hierarchy remains subject to a dedicated design workshop.

Transcript references: organizational-structure workshop 0:11:20–0:18:01, 0:40:35–0:42:44, 0:48:50–0:56:55, 1:33:02–1:39:33, and 2:05:38–2:10:42; integration and inspections workshop 1:30:23–1:41:09 and 2:30:24–2:43:07.
