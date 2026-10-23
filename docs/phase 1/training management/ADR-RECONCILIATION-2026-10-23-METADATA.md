# ADR Reconciliation Plan

Historical reconciliation snapshot: subsequent [pinning reconciliation](ADR-RECONCILIATION-2026-10-23-PINNING.md) replaces automatic course-content propagation with user-controlled adoption and a specific stored release/file. Earlier findings below are historical, not the current update requirement.

Metadata follow-up, 2026-10-23. Builds on the [call reconciliation](ADR-RECONCILIATION-2026-10-23.md). Evidence: the supplied [MARCOM workbook](<raw artifacts/MARCOM Adaptive Learning Course File Name and Metadata Guide 09 10 26.xlsx>), only `English language` rows 1–359 and `Spanish language` rows 1–195. The two `DiscontinueNotReplaced` tabs are excluded. [Analysis and exact locators](MARCOM-METADATA-ANALYSIS-2026-10-23.md) distinguish observed data from proposed model rules.

| Existing/Candidate ADR | Current status | New finding | Disposition | Target ADR | Evidence | Rationale |
|---|---|---|---|---|---|---|
| ADR-001 | accepted | No assignment change | retain unchanged | ADR-001 | Active tabs contain provider inventory | Provider entries do not assign employees. |
| ADR-002 | accepted | No recurrence rule supplied | retain unchanged | ADR-002 | English H:I; Spanish I:J | Duration/copyright are not recurrence. |
| ADR-003 | proposed | No delivery-equivalence approval | retain unchanged | ADR-003 | English G; Spanish H | Language availability does not establish equivalence. |
| ADR-004 | proposed | No completion threshold supplied | retain unchanged | ADR-004 | English T; Spanish U | Descriptions do not define completion evidence. |
| ADR-005 | proposed | Provider variants remain content inventory | retain unchanged | ADR-005 | English A:F; Spanish A:G | No automatic client-course creation. |
| ADR-006 | accepted | No qualification change | retain unchanged | ADR-006 | Active tabs | Preserve standalone workflow. |
| ADR-007 | proposed | No qualification-scope change | retain unchanged | ADR-007 | Active tabs | Industry is provider classification. |
| ADR-008 | proposed | No attestation change | retain unchanged | ADR-008 | Active tabs | No new attestation evidence. |
| ADR-009 | proposed | Copyright is month/year, not qualification validity | retain unchanged | ADR-009 | English I; Spanish J | Do not derive validity from it. |
| ADR-010 | accepted | Provider describes adaptive SCORM behavior, not a tested target package | retain unchanged | ADR-010 | English T2; Spanish U2 | Compatibility gate still applies. |
| ADR-011 | accepted | No notification/feed mechanism supplied | retain unchanged | ADR-011 | Active tabs | Accepted maintenance outcome is unchanged. |
| ADR-012 | proposed | No cutover evidence | retain unchanged | ADR-012 | Active tabs | No new TPC retirement decision. |
| ADR-013 | proposed | Retain catalogue releases; existing Training Management owns learning history | revise draft | ADR-013 | English D,I,T; Spanish E,J,U; analyst model in ADR-016; user clarification 2026-10-23 | Clarify content retention without adding learner-evidence functionality to the catalogue. |
| ADR-014 | proposed | No employee-status data | retain unchanged | ADR-014 | Active tabs | History/lifecycle decision unaffected. |
| ADR-015 | accepted | No qualification evidence change | retain unchanged | ADR-015 | Active tabs | Preserve accepted evidence control. |
| ADR-016 | proposed | Explicit entry/release/alias model and complete field mapping | revise draft | ADR-016 | English A1:Y359; Spanish A1:Z195 | Replaces unresolved conceptual schema with a reviewable target. |
| ADR-017 | proposed | Link language-specific entry; resolve current release; adaptive claim clarified | revise draft | ADR-017 | English L,G,T; Spanish M,H,U | Keep automatic propagation within selected language/industry entry. |
| ADR-018 | proposed | Define active-sheet reconciliation and import exceptions | revise draft | ADR-018 | All active rows; English Y42,Y83,Y135,Y189,Y261,Y304,Y352 | Keyed repeatable loading and exception handling follow the target model. |
| C1 — identity and language/industry granularity | Not applicable | Three-digit IDs repeat; product codes unique after trimming | revise draft | ADR-016 | English A3,L3,A59,L59; Spanish A2,M2 | One selectable entry per provider product/language, no mandatory translation-family object. Explicit data, high confidence; key stability across future editions needs confirmation. |
| C2 — release snapshots and current selection | Not applicable | Filenames and copyright cannot safely define release order | revise draft | ADR-016 | English D,I,M; Spanish E,J,N; call 0:03–2:56 | Analyst proposal: retained release snapshots with explicit current pointer, not inferred chronological sorting. Medium confidence in proposed structure. |
| C3 — metadata, auxiliary assets, and alias multiplicity | Not applicable | Distinct descriptions, bilingual titles, optional regulations, multiple former filenames | revise draft | ADR-016 | English M128:M129,S:X; Spanish C:D,T:Y | Preserve all named source fields and optional filenames; model aliases as children. High confidence in observed shape. |
| C4 — import normalization and anomalies | Not applicable | Whitespace, unheaded values, and different column offsets need explicit treatment | revise draft | ADR-018 | English Y42; Spanish N1; English L123; Spanish M65 | Preserve raw evidence; normalize controlled comparisons without corrupting provider values. High confidence. |
| C5 — adaptive learning in supplied packages | Not applicable | SCORM description explicitly attributes chapter test-out to content | needs clarification | ADR-017 evidence limitation; ADR-010 validation | English T2; Spanish U2 versus October call 8:37–11:32 | Narrow previous uncertainty: provider intent now documented, target behavior and completion reporting still untested. High confidence in provider claim, unknown compatibility. |
| C6 — discrete metadata catalogue objects | Not applicable | Classification, Industry, and Topic must be separate catalogue objects | revise draft | ADR-016; load alignment in ADR-018 | Explicit user instruction, 2026-10-23; English E,F,N and Spanish F,G,O | Add MARCOM Classification, MARCOM Industry, and MARCOM Topic with required release references; replaces optional lookup-object wording. High confidence. |

## Change Summary

### Modified

- Proposed ADR-016 defines six catalogue objects, field mapping, keys, cardinality, and a diagram: Catalogue Entry, Content Release, Previous Filename Alias, MARCOM Classification, MARCOM Industry, and MARCOM Topic. The three metadata catalogue objects are explicitly required by the user's clarification.
- Proposed ADR-013/017/018 align catalogue content retention, package resolution, and import rules with that target. The user's subsequent scope clarification removes learner-evidence functionality from the catalogue; existing Training Management owns it.
- Domain overview, related open work, and Phase 1 change log reflect the refinement; ADR totals and statuses are unchanged.

### Unchanged

- Fourteen ADRs, including all six accepted records. No new identifiers, supersession, withdrawal, or consolidation.

## Traceability and Gaps

The workbook is evidence, not approval or instructions. Its column label protecting Product Code informs preservation of the provider identifier; it does not authorize any action. Technical object/field names below are logical proposals, not verified Intelex names. Release retention is now an analyst-recommended part of this proposed target, strengthening the call's stretch goal; approval and feasibility remain open. Provider release IDs, future product-code stability, publication authority, and exact storage limits need confirmation. Excluded-tab absence must not deactivate existing entries. The user's 2026-10-23 clarification confirms learner-evidence functionality is already built in Training Management; it is outside the MARCOM catalogue model and requires no new catalogue evidence object or attempt/completion linkage.

Validation passed: archived workbook bytes and SHA-256 match the source; active-tab extraction reconciles 358 English plus 194 Spanish entries and 552 unique normalized provider/product keys; 89 previous-filename cells produce 91 alias occurrences; seven unheaded cells are accounted for. The matrix covers all 18 existing ADRs and six candidates once each, including the user's discrete-object clarification. Required MADR sections, mapping coverage for every English source column plus the Spanish title, unchanged status totals, new local links, and Git whitespace checks passed. No workbook, tenant configuration, or accepted ADR was changed.

## Proposed ADR Text

Complete changed records: [ADR-013](ADRs/ADR-013-version-training-content-for-audit-traceability.md), [ADR-016](ADRs/ADR-016-use-a-reusable-marcom-content-catalogue.md), [ADR-017](ADRs/ADR-017-pin-marcom-content-to-training-course-versions.md), and [ADR-018](ADRs/ADR-018-constrain-api-assisted-marcom-catalogue-loading.md).
