---
status: accepted
date: 2026-09-08
deciders:
  - Amy Roth
  - Dave McLean
consulted:
  - Paul Niemer
  - Whitney Goller
informed: []
primary_application: Training Management
secondary_applications: ""
---

# Validate Existing Custom Learning Packages before Adoption

## Context and Problem Statement

Existing custom incident-management and fleet-safety learning packages are intended for potential reuse in Intelex. The supported SCORM specification was not confirmed during the meeting.

## Decision Drivers

* Reuse existing custom training content.
* Identify compatibility issues early.
* Confirm the SCORM specification supported by Intelex.
* Test representative packages produced through different content-development arrangements.

## Considered Options

* Test representative existing packages in Intelex before relying on their reuse.
* Assume compatibility and defer validation until broader content loading.

## Decision Outcome

Chosen option: **Test representative existing packages in Intelex before relying on their reuse**, because compatibility must be established before the packages become part of the training design.

Successful playback was the explicit requested check. Because the proposed training model also relies on content-reported completion, completion and result reporting should be included in validation before adoption. This decision authorizes a compatibility check; it does not establish that either package is already compatible.

## Consequences

* Compatibility issues can be identified before broader content loading.
* Reuse remains contingent on validation results.
* Package transfer may require a file-drop service because of file size.
* Testing should cover the behavior needed to satisfy a training requirement, beyond simply opening the content.

## More Information

Transcript reference: 53:16–54:38.

Supported SCORM version and package compatibility remained open at the end of the meeting. The sample topics do not establish integrations with Incident Management or Fleet Management. See ADR-003 and ADR-004.
