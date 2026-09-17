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

# Use Complementary Location and Business Hierarchies

## Context and Problem Statement

Terra-Gen combines physical establishments, operating resources, technologies, corporate functions, and employees who may work remotely or support several locations. A single hierarchy cannot represent all of these dimensions without duplication or difficult reporting and security rules. Incident Management also derives OSHA and Cal/OSHA reporting from the Location Structure.

## Decision Drivers

* Preserve standard OSHA establishment reporting.
* Support geographic, functional, technology, and resource reporting.
* Represent matrix responsibilities without duplicating establishments or employees.
* Keep the structure maintainable as the operating portfolio changes.
* Provide a shared foundation for multiple Intelex applications.

## Considered Options

* Represent every dimension in one Location Structure.
* Use the Location Structure for establishments and the Business Hierarchy for organizational and operational segmentation.
* Flatten the Location Structure and use reporting tags for every other dimension.
* Duplicate establishments beneath technology or organizational branches.

## Decision Outcome

Chosen option: **Use the Location Structure for the geographic and OSHA establishment hierarchy and use the Business Hierarchy for organizational, technology, resource, and functional segmentation.**

The Location Structure will remain relatively flat and resolve to recognized establishments. The Business Hierarchy will provide the second dimension needed for operating resources, technologies, and corporate functions that cut across establishments. The detailed branches remain subject to validation against application workflows and planned organizational changes.

## Consequences

* OSHA reporting can use standard Intelex behavior.
* Physical location and organizational responsibility can be reported independently.
* Matrix teams can be represented without duplicating employees or establishments.
* Every employee and relevant record may require assignments in both structures.
* Cross-cutting responsibilities may still require controlled exceptions or security groups.
* Incorrect alignment between the hierarchies could expose or hide records.

## More Information

The high-voltage organization and leaders with employees across establishments are explicit validation cases. This is a foundational model and should remain proposed until tested against Incident Management, Training Management, Inspections, and Environmental Compliance.

Transcript references: 0:11:20–0:18:01, 0:40:35–0:42:44, 0:48:50–0:56:55, 1:33:02–1:39:33, and 2:05:38–2:10:42.
