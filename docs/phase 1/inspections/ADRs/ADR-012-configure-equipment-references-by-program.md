---
status: accepted
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
secondary_applications: Asset Management
---

# Configure Equipment References by Inspection Program

## Context and Problem Statement

Future inspection programs may inspect a specific vehicle or piece of equipment, while the initial site and office programs may not. The project has not confirmed that a governed equipment inventory at the required level of detail will be integrated into Intelex.

## Decision Drivers

* Support future equipment-specific inspections.
* Avoid irrelevant equipment fields on general inspections.
* Require traceability when an inspection is equipment-specific.
* Avoid assuming that an asset integration already exists.

## Considered Options

* Require equipment on every inspection.
* Remove equipment support until an asset inventory exists.
* Use free-text equipment references globally.
* Configure equipment references by inspection type.

## Decision Outcome

Chosen option: **Retain equipment-reference behavior as an inspection-type configuration.**

When a program enables equipment tracking, the inspector must identify the equipment. The reference source may be configured as text initially or as a governed equipment-record lookup when a suitable inventory becomes available.

## Consequences

* Equipment-specific programs can preserve asset-level traceability.
* General inspections are not burdened with an irrelevant field.
* Free-text references may be inconsistent until an asset library is available.
* A later asset integration can improve validation without changing the inspection-program model.

## More Information

The detailed asset source and integration boundary remain open. The workshop deliberately retained the equipment option because known future inspections may require it.

Transcript references: 2:46:01–2:51:11.
