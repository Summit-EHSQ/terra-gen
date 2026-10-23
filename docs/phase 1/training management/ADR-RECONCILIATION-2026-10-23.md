# ADR Reconciliation Plan

Historical reconciliation snapshot: subsequent [pinning reconciliation](ADR-RECONCILIATION-2026-10-23-PINNING.md) replaces automatic course-content propagation with user-controlled adoption and a specific stored release/file. Earlier findings below are historical, not the current update requirement.

Review date: 2026-10-23. Source: [MARCOM Requirements Knowledge Transfer, October 23](<raw artifacts/meeting_transcripts/2026-10-23-terra-gen-training-management-marcom-requirements-knowledge-transfer.md>) (hereafter **KT**). This is a proposed repository change set, not client approval or evidence of implementation. Existing statuses remain authoritative.

This plan records the call-only reconciliation. The subsequent [metadata follow-up plan](ADR-RECONCILIATION-2026-10-23-METADATA.md) refines ADR-013/016/017/018 and narrows several gaps below; consult it for the current proposed data model.

| Existing/Candidate ADR | Current status | New finding | Disposition | Target ADR | Evidence | Rationale |
|---|---|---|---|---|---|---|
| ADR-001 | accepted | No change to position-code/workgroup assignment | retain unchanged | ADR-001 | KT 0:03–2:56 concerns content sourcing | Catalogue entries do not establish employee obligations. |
| ADR-002 | accepted | No change to completion-based recurrence | retain unchanged | ADR-002 | KT 0:03–2:56 | Package refresh does not establish a recurrence rule. |
| ADR-003 | proposed | No change to equivalent delivery methods | retain unchanged | ADR-003 | KT 0:03–2:56 | Source selection is separate from delivery equivalence. |
| ADR-004 | proposed | No change to completion evidence or system of record | retain unchanged | ADR-004 | KT 0:03–2:56; 8:37–11:32 | Discussion supplies no new completion criterion. |
| ADR-005 | proposed | Provider catalogue is distinct from client course catalogue | retain unchanged | ADR-005 | KT 4:00–5:58; 16:47–17:45 | Loading every provider entry does not make each one an assigned client course. |
| ADR-006 | accepted | Qualification workflow unaffected | retain unchanged | ADR-006 | KT, full transcript | No affirmative qualification change. |
| ADR-007 | proposed | Qualification scopes unaffected | retain unchanged | ADR-007 | KT, full transcript | Silence does not withdraw the proposal. |
| ADR-008 | proposed | Attestation unaffected | retain unchanged | ADR-008 | KT, full transcript | No new attestation direction. |
| ADR-009 | proposed | Qualification validity unaffected | retain unchanged | ADR-009 | KT, full transcript | Package updates do not determine qualification expiry. |
| ADR-010 | accepted | MARCOM questions do not demonstrate sample compatibility | retain unchanged | ADR-010 | KT 8:37–11:32; 17:45–18:21 | Preserve the existing compatibility validation gate. |
| ADR-011 | accepted | Internal catalogue addresses downstream distribution; provider notification remains open | retain unchanged | ADR-011 | KT 3:11–3:55; 11:37–12:57; 16:47–17:45 | Adds implementation direction without changing accepted maintenance outcome. |
| ADR-012 | proposed | No additional TPC retirement decision | retain unchanged | ADR-012 | KT, full transcript | Catalogue loading does not authorize cutover. |
| ADR-013 | proposed | Automatic MARCOM propagation creates a historical-content preservation question | revise draft | ADR-013 | KT 0:03–2:56; 16:47–17:45 | Distinguish managed provider content from controlled-document impact assessment; retain audit requirement and expose unresolved mechanism. |
| ADR-014 | proposed | Employment-status history unaffected | retain unchanged | ADR-014 | KT, full transcript | No employee lifecycle change. |
| ADR-015 | accepted | Qualification evidence completion unaffected | retain unchanged | ADR-015 | KT, full transcript | Preserve accepted authority and evidence rules. |
| C1 — reusable provider catalogue and optional revision history | Not applicable | Store MARCOM metadata and packages in Training Management; load whole catalogue; design for reuse | add | ADR-016 | KT 0:03–2:56; 3:55–5:58; 11:37–12:57 | Establishes reusable content identity and storage; version history remains a stretch goal. Explicit, high confidence in catalogue direction, medium in revision scope. |
| C2 — course source selection and cascading package refresh | Not applicable | Choose manual upload or MARCOM catalogue; link stable catalogue identity and propagate latest content | add | ADR-017 | KT 0:03–2:56; 16:47–17:45 | Independently consequential update behavior with unresolved history and in-progress attempt semantics. Explicit, high confidence in direction. |
| C3 — scoped API-assisted initial load and credential lifecycle | Not applicable | Use API-assisted course-data loading, exclude employee/personal data from this approach, deactivate temporary key afterward | add | ADR-018 | KT 7:01–8:37; 11:37–16:47 | Establishes data and credential boundaries for this load. Explicit, high confidence; production use not established. |
| C4 — adaptive learning capability | Not applicable | Client expects feature, but package versus LMS behavior is unverified | needs clarification | None; tracked in ADR-017 limitations | KT 8:37–11:32; 17:45–18:21 | No supported capability or implementation choice to draft as decided. Explicit uncertainty, high confidence in gap. |
| C5 — provider release notification/dissemination | Not applicable | Ask Intelex/MARCOM how updates are communicated | needs clarification | Existing ADR-011; related ADR-016 | KT 3:11–3:55; 11:37–12:57; 16:47–17:45 | Accepted refresh outcome remains; no mechanism selected. Explicit uncertainty, high confidence in gap. |

## Change Summary

### Added

- ADR-016, ADR-017, and ADR-018, all proposed; source transcript preserved with metadata.

### Modified

- ADR-013 clarifies the MARCOM update boundary and unresolved historical traceability.
- Domain overview, current repository totals, Phase 1 change log, and affected open-task entries reflect this proposal.

### Unchanged

- Fourteen existing ADRs, including all six accepted decisions. No supersession, deprecation, withdrawal, or consolidation.

## Traceability and Gaps

- Sources use file paths and timestamps; the repository has no required registered source-ID schema or machine-readable ADR index. No source identifier or approval is invented.
- The transcript header says 14:44 while the recording title contains `104418`; timezone and authoritative meeting time are unknown. Preserve both source values.
- Catalogue metadata field names, unique-key rules, language representation, revision model, and definition of latest remain unspecified. Revision history was first a stretch goal and later included in intended specification work; this is not evidence of a mandatory approved model.
- Automatic refresh must be reconciled with historical audit reconstruction. No mechanism for immutable packages, completion snapshots, new course versions, or in-progress attempts was selected. Do not infer that updates require retraining or reset due dates.
- Adaptive learning, release notifications, provider interfaces, content rights, and refresh ownership need confirmation. No provider API or LMS capability is established here.
- Cross-client reuse is a design preference for the object; other-client rollout and a paid content-distribution service were speculative, not Terra-Gen commitments.
- Build timing, rough hours, staffing fallback, and the mapping spreadsheet are ordinary implementation actions, not additional ADRs. The development-build/test-load sequence and course-to-provider mapping are retained in ADR-018 as load context. General AI tooling anecdotes and token-usage commentary are not application decisions.
- Existing incomplete qualification source locators remain a pre-existing gap recorded in the open-task register; this call does not resolve them.
- Validation: all 18 Training Management ADRs contain the required MADR sections; the matrix covers 15 prior ADRs and five candidates exactly once; the source body is preserved verbatim. Counts match six accepted/twelve proposed domain records and 36 accepted/24 proposed/one superseded Phase 1 records. New file links resolve and Git whitespace checks pass. A pre-existing open-task-register link to the absent `gitbook-docs.yaml` remains outside this update's scope.

## Proposed ADR Text

The complete proposed bodies are saved separately for review:

- [ADR-013 — revised draft](ADRs/ADR-013-version-training-content-for-audit-traceability.md)
- [ADR-016 — MARCOM catalogue](ADRs/ADR-016-use-a-reusable-marcom-content-catalogue.md)
- [ADR-017 — linked package updates](ADRs/ADR-017-pin-marcom-content-to-training-course-versions.md)
- [ADR-018 — initial catalogue load](ADRs/ADR-018-constrain-api-assisted-marcom-catalogue-loading.md)
