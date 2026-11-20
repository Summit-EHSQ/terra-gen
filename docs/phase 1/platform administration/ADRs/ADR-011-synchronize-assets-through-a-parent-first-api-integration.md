---
status: proposed
date: 2026-11-10
deciders: []
consulted:
  - Jeremiah Soto
  - Dave McLean
  - Amy Roth
  - Matthew Futter
informed: []
primary_application: Intelex Platform Administration
secondary_applications: Integration Management, Inspections
---

# Synchronize Assets through a Parent-First API Integration

## Context and Problem Statement

The source-owned asset master needs repeatable creation and updates in Intelex. Every hierarchy node is a separate record, and a child must reference an existing parent. The meeting distinguishes this ordinary object relationship from special handling described for EmployeeUserAccess; employee-reference tolerance must not be assumed for assets. [Call, 0:15:53–0:22:33]

The logical master-data boundary is in [PA ADR-010](ADR-010-consume-a-governed-asset-hierarchy-from-terra-gen.md). This record captures its integration identity and ordering contract, not the employee provisioning implementation.

## Decision Drivers

* Propagate approved source changes without local asset maintenance. [Call, 0:14:47–0:15:42]
* Address the same Intelex record on subsequent updates. [Call, 0:15:53–0:17:50]
* Avoid predictable parent-reference failures. [Call, 0:19:09–0:22:33]
* Reduce repeated identifier lookups where the source can retain the returned identifier. [Call, 0:15:53–0:17:00]

## Considered Options

* Use Boomi API delivery with retained record identities and parent-before-child sequencing — preferred direction.
* Look up the Intelex ID by source asset ID before each update — discussed, less efficient alternative.
* Accept parent identifiers as text and link later inside Intelex, with exception notification and manual retry — discussed contingency, not the initial choice.
* Use recurring manual imports instead of synchronization — analyst-derived alternative. One-time test seed loads are a separate temporary use.

## Decision Outcome

Chosen option: **Use Boomi to create and update asset records through the Intelex API, delivering parents before their children**, because the proposed hierarchy requires valid parent references and predictable update identity. [Call, 0:15:53–0:22:33]

Create records through POST and update their corresponding records through PATCH, as described in the meeting. Each source node needs its own stable source identifier. Prefer retaining the Intelex identifier returned after creation in the SQL source so later updates and child references can address the matching record without an extra lookup. If source-side storage is unavailable, the discussed lookup-by-source-key alternative needs an explicit, validated matching contract before use. The source team's commitment to the storage optimization is not established. [Call, 0:15:53–0:17:50]

Create or resolve a parent before submitting a child that refers to it. Resolve the parent's Intelex identity and supply that relationship when creating the child. This applies throughout the hierarchy and when adding a new branch. The initial design puts sequencing in Boomi. Do not implement deferred text-parent linking, an Intelex exception queue or a manual reconnect action as if those contingencies were selected requirements. [Call, 0:19:09–0:22:33]

This is a proposed integration contract based on the discussion. Exact endpoints, payload fields, relationship representation, authentication and supported error behavior remain to be verified against the configured custom object. The employee API's described behavior is not evidence for the custom Asset endpoint.

## Consequences

The following are architectural analysis:

* Delivery depends on the asset schema/endpoints and reliable per-node source identities.
* Boomi needs to manage hierarchy dependencies rather than sending unordered independent records.
* Retaining the returned Intelex ID can reduce lookups but introduces an upstream cross-reference that must remain valid across environments and retries.
* Ambiguous IDs, unsuccessful parents or partial batches require explicit handling before dependent work can proceed.
* Operational support must cover the source, Boomi delivery and Intelex responses; the employee monitoring ADR does not automatically define asset support.

## More Information

[Call — November 10, 2026](<../raw artifacts/meeting_transcripts/2026-11-10-summit-tg-asset-hierarchy-setup.md>): 0:15:53–0:17:50, POST/PATCH and identities; 0:19:09–0:20:20, parent-first creation; 0:20:20–0:22:33, employee API distinction and fallback; 0:33:13–0:34:36, dictionary/schema/endpoints dependency; 0:34:42–0:35:37, added integration/support scope.

Unresolved: extraction cadence, source/Intelex key uniqueness, environment-specific mappings, retry and duplicate prevention, failure reporting, orphan handling, concurrent parent changes, retirement/deletion, reconciliation, credentials, operator ownership and recovery procedures. No numerical retry policy, synchronization SLA or deletion semantics were agreed.

The meeting proposes one-time spreadsheets for UAT if integrations are not ready. Those loads are test preparation, not a replacement for source ownership or evidence that the API integration passed validation. [Call, 0:44:59–0:46:56]

Related: [PA ADR-004](ADR-004-maintain-the-organizational-hierarchy-in-intelex.md) governs the existing organizational hierarchy and is not silently replaced by the asset integration; [Inspections ADR-017](<../../inspections/ADRs/ADR-017-use-governed-site-and-asset-taxonomy.md>) consumes asset context. The [reconciliation plan](../../ADR-RECONCILIATION-2026-11-10.md) preserves the separate, pre-existing Employee ADR/specification transport conflict.
