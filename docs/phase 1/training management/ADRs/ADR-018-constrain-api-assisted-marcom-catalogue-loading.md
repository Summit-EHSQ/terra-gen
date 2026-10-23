---
status: proposed
date: 2026-10-23
deciders: []
consulted:
  - Dave McLean
  - Khurram Agha
  - Edvert Colegio
  - Ethan Hung
informed: []
primary_application: Training Management
secondary_applications: Integration Management
---

# Constrain API-Assisted MARCOM Catalogue Loading

## Context and Problem Statement

The team proposes a one-time API-assisted load of the MARCOM catalogue using AI-assisted tools. Dave describes temporary API credentials and explicitly excludes employee/personal data from this approach. The call identifies credential persistence as a concern and requires deactivating the key afterward. These are controls for this load, not a general production integration policy. [KT, 11:37–16:47]

## Decision Drivers

* Populate several hundred provider catalogue entries for client mapping. [KT, 0:03–2:56; 4:00–5:58]
* Reduce repeated loading by building in development and loading the catalogue in test. [KT, 7:01–8:37]
* Keep personal data outside this AI-assisted loading approach and deactivate the temporary key after use. [KT, 11:37–12:57; 15:32–16:47]

## Considered Options

* Use a scoped API-assisted initial load of non-personal course data with a temporary credential deactivated afterward.
* Populate the catalogue manually (analyst-derived alternative).
* Delay the load until a credential-vault integration is available (analyst-derived alternative; vault integration was discussed as unsolved).

## Decision Outcome

Chosen option: **Use an API-assisted initial load of non-personal MARCOM course data with a temporary credential deactivated after use**, because the proposed approach enables the catalogue load while respecting the data and key-lifecycle boundaries stated in the call. [KT, 11:37–16:47]

Build the functionality in development, then load the current catalogue into Terra-Gen's test environment so the client can map its training courses to provider content. The course-to-MARCOM mapping will extend the existing client data-loading work; it does not automatically create every provider entry as a client course. [KT, 7:01–8:37; 16:47–17:45]

Employee and other personal data are excluded from this AI-assisted loading approach. Deactivate the temporary API key after the loading session. No production execution, ongoing synchronization service, or credential-vault mechanism is selected. The specific loading tool is not established by the anecdotal tooling demonstration. [KT, 11:37–16:47]

### Metadata-Driven Load Contract

The [supplied guide](<../raw artifacts/MARCOM Adaptive Learning Course File Name and Metadata Guide 09 10 26.xlsx>) contributes 358 English rows (`English language!A2:Y359`) and 194 Spanish rows (`Spanish language!A2:Z195`). Import only these two active tabs; exclude both discontinued tabs. Preserve the original source artifact. The following rules are proposed from the [analysis](../MARCOM-METADATA-ANALYSIS-2026-10-23.md) and ADR-016's target model:

* Map every named column by its meaning and per-sheet position; Spanish has an extra localized-title column. Spanish N1's stale reference to column D must not redirect the actual package mapping away from E.
* Load or resolve the separate MARCOM Classification, MARCOM Industry, and MARCOM Topic catalogue objects before loading Content Release references. Match by trimmed name within each object, preserve raw source labels on releases, and reuse the same catalogue record across languages when its label matches. Each release requires one reference to each of the three objects; duplicate names or missing matches require reconciliation rather than a text-only fallback. [User model clarification, 2026-10-23; ADR-016]
* Match Entry by Producer and trimmed Product Code, preserving the raw provider code separately. Do not merge by three-digit ID, title, language suffix, or current/previous filename. Existing codes are not rekeyed silently on later loads.
* Stage one metadata snapshot per entry for this edition; upload/associate package bytes separately. A filename alone cannot make a release usable. Compare complete mapped metadata and attachment digest, when available, to avoid generating duplicate releases on identical reruns. Record workbook/sheet/row and import provenance; retry failed rows using the same keys.
* Retain raw strings while using explicit trimmed comparison values, Unicode text, text IDs with leading zeros, month/year copyright, and null optional fields. Do not truncate long descriptions/objectives or invent a price currency.
* Parse English M128 and M129 into multiple aliases while preserving their original cells. Alias matches are diagnostic and require review when ambiguous, not alternate Entry keys.
* Preserve and flag the seven unheaded English Y cells rather than silently mapping or discarding them. Do not infer deactivation from missing rows or the unexamined discontinued tabs.
* Reconcile 552 source rows to 552 distinct provider-product Entries for a clean initial load, and account for every row as matched/created or exception. Report English/Spanish subtotals, draft/release readiness, attachments matched/missing, alias occurrences, and unresolved anomalies. Counts describe expected source coverage, not completed loading or compatibility validation.

The metadata snapshot's 89 populated previous-filename cells yield 91 alias occurrences when the two observed multi-value cells are split; validate alias deduplication and ambiguity rather than assuming 91 globally unique aliases. Catalogue loading does not approve customer course assignments or establish translation equivalence.

## Consequences

The following are architectural analysis:

* The initial catalogue load and later provider-refresh operation remain separate concerns.
* Completion of the load includes deactivating the temporary key; the responsible operator and evidence of deactivation still need to be specified.
* Mapping validation, load reconciliation, retries, and handling of duplicate identifiers require design before execution.
* The call's tooling and credential-storage descriptions are reported concerns, not verified statements about any product's retention guarantees.

## More Information

[KT — MARCOM Requirements Knowledge Transfer, October 23, 2026](<../raw artifacts/meeting_transcripts/2026-10-23-terra-gen-training-management-marcom-requirements-knowledge-transfer.md>), 4:00–5:58, 7:01–8:37, 11:37–16:47, and 16:47–17:45. Timing and estimated effort are planning discussion, not architectural commitments.

Related: [ADR-016](ADR-016-use-a-reusable-marcom-content-catalogue.md) and [ADR-011](ADR-011-establish-an-ongoing-marcom-content-refresh-process.md). This ADR records proposed controls; it does not authorize this assistant to access a tenant or perform a load.

[Subsequent pinning decision](<../raw artifacts/2026-10-23-marcom-course-version-pinning-decision.md>), Supplied decision paragraph 4: catalogue imports and release publication must not create Training Course Versions or update their pinned release/file. Import retries reconcile catalogue data only; customer course adoption remains a manual Training Management action under ADR-017.
