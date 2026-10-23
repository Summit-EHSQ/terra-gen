# ADR Reconciliation Plan

Source: [user-provided MARCOM course-version pinning decision](<raw artifacts/2026-10-23-marcom-course-version-pinning-decision.md>), **Supplied decision**, paragraphs 2–5. This later direction replaces the October call's automatic-distribution proposal. Current ADR-017 is unapproved, so retain its ID and revise the draft rather than allocating a superseding ADR. All statuses remain unchanged; no tenant implementation or source compatibility test is claimed.

| Existing/Candidate ADR | Current status | New finding | Disposition | Target ADR | Evidence | Rationale |
|---|---|---|---|---|---|---|
| ADR-001 | accepted | Assignment rules unchanged | retain unchanged | ADR-001 | Decision concerns content selection only | Preserve existing assignment architecture. |
| ADR-002 | accepted | Recurrence unchanged | retain unchanged | ADR-002 | Supplied decision | New catalogue content does not reschedule training. |
| ADR-003 | proposed | Delivery equivalence unchanged | retain unchanged | ADR-003 | Supplied decision | No new equivalence rule. |
| ADR-004 | proposed | Completion authority unchanged | retain unchanged | ADR-004 | Supplied decision | Existing Training Management retains completion behavior. |
| ADR-005 | proposed | Atomic-course boundary unchanged | retain unchanged | ADR-005 | Supplied decision | No automatic provider-to-client course creation. |
| ADR-006 | accepted | Qualification workflow unchanged | retain unchanged | ADR-006 | Supplied decision | No qualification integration added. |
| ADR-007 | proposed | Qualification scope unchanged | retain unchanged | ADR-007 | Supplied decision | No affirmative scope change. |
| ADR-008 | proposed | Attestation unchanged | retain unchanged | ADR-008 | Supplied decision | No attestation direction. |
| ADR-009 | proposed | Qualification validity unchanged | retain unchanged | ADR-009 | Supplied decision | No expiry or renewal change. |
| ADR-010 | accepted | Compatibility validation remains required | retain unchanged | ADR-010 | Platform behavior is user-supplied context | Do not infer package test completion. |
| ADR-011 | accepted | Provider refresh outcome unchanged | retain unchanged | ADR-011 | Supplied decision, final paragraph | Catalogue refresh is distinct from course adoption. |
| ADR-012 | proposed | TPC retirement unchanged | retain unchanged | ADR-012 | Supplied decision | No cutover approval. |
| ADR-013 | proposed | Course version retains a specific provider release/file | revise draft | ADR-013 | Supplied decision, paragraphs 4–5 | Remove the automatic-replacement premise; retain native evidence boundary. |
| ADR-014 | proposed | Employee-status history unchanged | retain unchanged | ADR-014 | Supplied decision | No employee lifecycle direction. |
| ADR-015 | accepted | Qualification evidence unchanged | retain unchanged | ADR-015 | Supplied decision | Preserve accepted authority. |
| ADR-016 | proposed | Current Release is a selection-time default, not an update trigger | revise draft | ADR-016 | Supplied decision, paragraphs 4–5 | Retained releases remain; existing course references stay pinned. |
| ADR-017 | proposed | Replace automatic propagation with selection-change pinning | revise draft | ADR-017 | Supplied decision, paragraphs 2–5 | User controls adoption through a manually created Course Version. Rename the file/title and update links without changing ID. |
| ADR-018 | proposed | Import must not create or update Training Course Versions | revise draft | ADR-018 | Supplied decision, paragraph 4 | Make the new boundary explicit in catalogue loading. |
| C1 — pin a specific release and file | Not applicable | Record exact selection-time release; ordinary saves preserve it | revise draft | ADR-017 | Supplied decision, paragraphs 4–5 | Explicit direction, high confidence. |
| C2 — no automatic Training Course Version creation/adoption | Not applicable | Catalogue arrival/current-pointer change cannot change course versions | revise draft | ADR-017 | Supplied decision, paragraphs 3–5 | Remove propagation handlers, retry action, and successor-update task. Explicit direction, high confidence. |
| C3 — non-null and changed selection guard | Not applicable | Create/Update resolution requires populated and changed MARCOM Course | revise draft | ADR-017 | Supplied decision, final parenthesis | Preserve ISCHANGED intent without inventing tenant field names or expression syntax. High confidence; Create evaluation needs confirmation. |

## Change Summary

### Modified

- ADR-013/016/017/018, the technical specification, implementation plan, current domain overview, metadata interpretation, and affected open questions.
- Retire implementation task CFG-15 and AH-04 without reusing their identifiers; retain 20 active tasks. Treat newer-release comparisons as optional adoption information, not a failed update queue.
- Preserve all 80 field definitions and 11 relationships; the course's resolved release becomes a stored selection-time reference, not a continuously refreshed one.

### Unchanged

- Fourteen ADRs, including all six accepted records; no new ADR, status transition, supersession, deprecation, or withdrawal.
- Raw transcripts and workbook evidence; earlier reconciliation plans remain historical with links to this revision.

## Traceability and Gaps

The latest-course-version behavior is user-provided context. It resolves the design direction but does not establish internal field names, package-copy mechanics, or exact `ISCHANGED` syntax. Initial selection on Create must be recognized as changed; an unchanged selection on Update must preserve the pinned release/file even if Current Release advanced or the Entry was later deactivated. Native course-version edit permissions still apply. Existing learner-evidence functionality remains outside catalogue scope. Provider notification/ingestion and publication authority are separate open matters.

Validation passed: 18 existing ADRs and three candidates each appear once; all six accepted ADRs match the repository baseline. The specification retains nine object sections, 80 field rows, 11 matching relationships, and the visible pipe/Language.Name display. The plan has 20 matching summary/detail tasks and 44 matching dependency edges with no cycles; retired CFG-15 is absent from active tasks and the diagram. ADR-017's old path has no remaining documentation references, current file links resolve, and Git whitespace checks pass. Runtime behavior and tenant expression syntax have not been tested.

## Proposed ADR Text

Complete changed bodies are saved in [ADR-013](ADRs/ADR-013-version-training-content-for-audit-traceability.md), [ADR-016](ADRs/ADR-016-use-a-reusable-marcom-content-catalogue.md), [ADR-017](ADRs/ADR-017-pin-marcom-content-to-training-course-versions.md), and [ADR-018](ADRs/ADR-018-constrain-api-assisted-marcom-catalogue-loading.md).
