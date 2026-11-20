---
status: proposed
date: 2026-11-10
deciders: []
consulted:
  - Amy Roth
  - Jeremiah Soto
  - Dave McLean
  - Matthew Futter
informed: []
primary_application: Intelex Platform Administration
secondary_applications: Inspections, Incident Management, Environmental Compliance
---

# Consume a Governed Asset Hierarchy from Terra-Gen

## Context and Problem Statement

Terra-Gen wants inspections associated with identifiable operational assets and areas, including resources, feeders, units, substations, switchyards, warehouses and offices. The hierarchy is a client reporting/context requirement, rather than a prerequisite imposed by Intelex. Jeremiah describes a SQL source being developed ahead of a future ERP, with an Asset Management Team approving asset additions and changes before they flow downstream. [Call, 0:01:46–0:04:11; 0:05:00–0:11:13; 0:13:52–0:15:42; 0:23:22–0:30:19]

The existing [Inspections ADR-017](<../../inspections/ADRs/ADR-017-use-governed-site-and-asset-taxonomy.md>) establishes reusable operational context but leaves source and integration ownership open. This record defines the shared master-data boundary; inspection selection belongs to that application ADR.

## Decision Drivers

* Identify inspected operational entities at useful hierarchy levels. [Call, 0:05:00–0:10:18]
* Support different asset names and aliases from the authoritative data. [Call, 0:02:33–0:03:51]
* Maintain upstream business approval and a supported downstream update process. [Call, 0:13:52–0:15:42]
* Include facilities as well as generation resources. [Call, 0:23:22–0:24:32; 0:29:57–0:30:19]
* Configure around a supplied data dictionary within the discussed scope envelope. [Call, 0:12:03–0:12:28; 0:18:25–0:18:48]

## Considered Options

* Consume a source-governed hierarchy through one recursive custom Asset object — selected direction.
* Treat resources as assets and higher levels only as descriptive lookup attributes — earlier option explored at 0:06:52–0:09:10.
* Maintain independent asset/site lists inside each Intelex application — existing alternative in Inspections ADR-017.
* Have Intelex users manually maintain the shared asset master — analyst-derived alternative, inconsistent with the stated integration ownership assumption.

## Decision Outcome

Chosen option: **Consume a governed Terra-Gen asset hierarchy into one custom, self-referencing Asset object**, because the meeting requires selectable parent and component assets while retaining upstream control of their data. [Call, 0:09:15–0:11:13; 0:13:52–0:17:50]

Each hierarchy node is a separate record with its own source identity. Switchyards, substations, resources, feeders and units can be represented as assets where the approved source model defines them that way. Warehouses and offices are included where relevant. The discussion allows inspection at an intermediate or top-level asset rather than requiring selection of a leaf. It does not prescribe one fixed depth or require every asset to pass through every example level. [Call, 0:09:15–0:11:13; 0:17:17–0:17:50; 0:23:22–0:30:19]

The records share one field set. Type-specific relevance may be expressed through selective population and presentation rules. Build the mapping around the source dictionary, including agreed identifiers, names and aliases; no field list or alias-storage structure has yet been supplied. The discussed initial envelope is **up to 30 configured fields**, not an Intelex capability limit or a finalized field count. [Call, 0:02:33–0:03:51; 0:10:28–0:12:28; 0:18:25–0:18:48]

Terra-Gen's source process owns asset creation and change approval. The Asset Management Team approves changes; the team identified by Jeremiah maintains the database. Asset reference data in Intelex is maintained through the integration. User-facing asset-maintenance screens are read-only and local create/edit controls are unavailable. Missing or incorrect assets are corrected upstream and then propagated, rather than created manually by inspectors. The actual service permissions remain to be designed. [Call, 0:13:52–0:15:42]

An asset has a direct establishment relationship or derives establishment from its parent asset. Establishments remain distinct from asset nodes and asset reporting does not create a security hierarchy. This separation can be designed independently; adopting the replacement Location Structure in [PA ADR-009](ADR-009-separate-reporting-locations-from-osha-establishments.md) requires its own transition resolution. [Call, 0:27:30–0:31:27]

## Consequences

The following are architectural analysis:

* Multiple applications can share operational identities rather than maintaining incompatible site lists.
* The SQL source, business approval process and integration become dependencies for adding or correcting assets available to inspectors.
* One object simplifies reuse but requires clear type-specific field relevance and validation.
* Establishment inheritance requires defined handling for missing parents, conflicting mappings and reparenting.
* Temporary spreadsheet data used in test does not change production master-data ownership.

## More Information

[Call — November 10, 2026](<../raw artifacts/meeting_transcripts/2026-11-10-summit-tg-asset-hierarchy-setup.md>): 0:02:33–0:12:28, model alternatives, aliases and dictionary; 0:13:52–0:17:50, source governance, read-only reference data and identities; 0:18:25–0:18:48, 30-field envelope; 0:23:22–0:30:19, facilities and establishments; 0:33:13–0:35:37, configuration dependency and additional scope.

Confirm the authoritative source schema, database owner's name (transcribed as “ITOK”), steward/contact, node types, alias semantics, parent validity, stable keys, establishment source/mapping, lifecycle and retirement rules. No internal object name, GUID, endpoint, fixed asset-type catalogue or ERP product is allocated by this draft.

The new hierarchy and integration require a change order; the meeting does not establish an executed commercial approval. Dictionary → custom object/endpoints → integration mapping is the stated dependency, not a committed schedule. [PA ADR-011](ADR-011-synchronize-assets-through-a-parent-first-api-integration.md) defines the proposed transport. Existing conditional `Shared_OperationalResource` references in the [Inspections target](<../../inspections/target/field-contract.md>) require a later explicit binding; they are not assumed to identify this custom object.
