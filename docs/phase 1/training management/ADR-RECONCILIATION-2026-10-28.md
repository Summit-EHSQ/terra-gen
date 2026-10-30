# ADR Reconciliation Plan

Source: [Terra-Gen Training Setup Q&A, October 28, 2026, 3:30 PM ET](<raw artifacts/meeting_transcripts/2026-10-28-terra-gen-training-setup-qa.md>) ("Call" below). The supplied transcript is preserved with identical metadata and content in Employee Management and Training Management.

This reconciliation records three new proposed ADRs and one revision. The user authorized saving the conversation drafts to the repository; that authorization does not change their proposed statuses or constitute client design or commercial approval. EM, TM, and PA distinguish the Employee Management, Training Management, and Platform Administration namespaces. The comparison covers all 24 existing EM/TM ADRs, eight related PA ADRs, and three new candidates. No existing accepted ADR is rewritten by this change set.

| Existing/Candidate ADR | Current status | New finding | Disposition | Target ADR | Evidence | Rationale |
|---|---|---|---|---|---|---|
| EM-001 — Position Code profiles | proposed | Ordinary codes and published profiles reaffirmed; technical text conflicts with newer specification | needs clarification | EM-001 | Call 15:20–17:12, 30:43–31:53; accepted Employee specification §2.2 | Preserve profile decision; reconcile obsolete implementation details separately. |
| EM-002 — Establishment assignment | accepted | Logic requested again, not restated | retain unchanged | EM-002 | Call 47:35–47:47, 56:03–56:13 | Existing October 28 clarification remains authoritative. |
| EM-003 — Employee integration | accepted | No new transport decision; existing transport text is outdated | needs clarification | EM-003 / replacement ID unresolved | Call 46:21–46:35, 54:47–55:16; accepted specification §2.2 | Preserve accepted history when reconciling the already accepted direct route. |
| EM-004 — Pre-start provisioning | accepted | Pre-start creation and training effects reconfirmed | retain unchanged | EM-004 | Call 33:51–35:08 | No provisioning decision change. |
| EM-005 — Daily integration monitoring | accepted | No frequency change; architecture references share transport inconsistency | needs clarification | EM-005 | Existing ADR; accepted specification §2.2 | Preserve daily monitoring; reconcile coverage terminology separately. |
| EM-006 — Entra authentication | accepted | Follow-up discussion planned, no alternative selected | retain unchanged | EM-006 | Call 46:21–46:35 | Scheduling is not an authentication change. |
| TM-001 — Position-code-mapped workgroups | accepted | Position mappings and immediate initial due dates reconfirmed | retain unchanged | TM-001 | Call 30:43–31:53, 33:08–35:08 | New assignment-source detail is recorded in TM-019. |
| TM-002 — Individual recurrence | accepted | No automated day-1/30/60/90 staging selected | retain unchanged | TM-002 | Call 32:15–35:08 | Initial scheduling does not change completion-based recurrence. |
| TM-003 — Common requirement across delivery methods | proposed | No changed delivery-equivalence decision | retain unchanged | TM-003 | Existing ADR; Call | Independent of new assignment routes. |
| TM-004 — Completion evidence and system of record | proposed | No changed completion authority | retain unchanged | TM-004 | Existing ADR; Call | Migration does not redefine completion authority. |
| TM-005 — Atomic courses | proposed | Course-level migration discussed | retain unchanged | TM-005 | Call 37:06–37:44, 42:25–42:42 | No changed course granularity. |
| TM-006 — Standalone qualification workflow | accepted | Qualification delivery is to be deferred and reassessed | retain unchanged | TM-006 | Call 47:52–52:29 | Sequencing does not reverse accepted architecture. |
| TM-007 — Separate qualification definitions | proposed | No replacement design selected | retain unchanged | TM-007 | Call 48:15–52:29 | Retain for later reassessment. |
| TM-008 — Authorized competency attestation | proposed | No replacement design selected | retain unchanged | TM-008 | Call 48:15–52:29 | Deferral does not reject attestation. |
| TM-009 — Policy-driven validity and renewal | proposed | Program rules require refinement | retain unchanged | TM-009 | Call 48:15–52:29 | Preserve policy dependency. |
| TM-010 — Package compatibility validation | accepted | No compatibility result supplied | retain unchanged | TM-010 | Existing ADR; Call | Validation remains open. |
| TM-011 — MARCOM refresh process | accepted | No changed refresh decision | retain unchanged | TM-011 | Existing ADR; Call | Unaffected. |
| TM-012 — Replace TPC | proposed | Clearer migration boundary and rehearsal dependency | revise draft | TM-012 | Call 35:08–43:51 | Extend the same replacement decision; migration mechanics belong in TM-020. |
| TM-013 — Content-version traceability | proposed | History migration does not establish content-version reconstruction | retain unchanged | TM-013 | Existing ADR; Call 35:08–43:51 | Completion dates alone do not settle version traceability. |
| TM-014 — History across employment changes | proposed | Historical imports may need former employee records | retain unchanged | TM-014 | Call 41:52–42:25 | Migration prerequisites are in TM-020; ongoing lifecycle behavior is unchanged. |
| TM-015 — Evidence and centralized qualification completion | accepted | Deferral without reversing evidence controls | retain unchanged | TM-015 | Call 47:52–52:29 | Preserve accepted evidence requirements. |
| TM-016 — MARCOM catalogue | proposed | No changed catalogue decision | retain unchanged | TM-016 | Existing ADR; Call | Unaffected. |
| TM-017 — MARCOM release pinning | proposed | No changed pinning decision | retain unchanged | TM-017 | Existing ADR; Call | Unaffected. |
| TM-018 — API-assisted catalogue load | proposed | Employee history migration is a separate load | retain unchanged | TM-018 | Existing ADR; Call 35:08–43:51 | Its non-personal-data boundary does not authorize history migration. |
| PA-001 — Establishment-based hierarchy | accepted | Possible alternate structure awaits presentation | retain unchanged | PA-001 | Call 44:18–46:28, 55:03–55:16 | No replacement structure defined or approved. |
| PA-002 — Intersection visibility | superseded | No reactivation decision | retain unchanged | PA-002 | Call 44:18–46:28 | Preserve superseded history. |
| PA-003 — Attribution and exceptional access | proposed | Training applicability differs from exceptional access | retain unchanged | PA-003 | Call 54:28–55:16; existing ADR | Home/login assignments not redefined. |
| PA-004 — Intelex hierarchy maintenance | accepted | Integration/hierarchy discussions planned | retain unchanged | PA-004 | Call 44:18–46:28 | Ownership boundary unchanged. |
| PA-005 — Location-scoped workflow roles | accepted | Roles used in examples, no execution decision | retain unchanged | PA-005 | Call 07:16–10:51 | Examples do not reverse specification role deferral. |
| PA-006 — External support access | accepted | No changed access decision | retain unchanged | PA-006 | Existing ADR; Call | Unaffected. |
| PA-007 — Shared tasks and reporting | proposed | Unknown-code notification handling reaffirmed | retain unchanged | PA-007 | Call 16:00–17:12 | No new task framework selected. |
| PA-008 — Platform change governance | proposed | Future qualification scope needs reassessment | retain unchanged | PA-008 | Call 48:15–52:29 | Project rescoping does not replace operating governance. |
| Candidate — Independent assignment sources | Not applicable | Position workgroups, location courses, individual exceptions | add | TM-019 | Call 28:00–31:53, 53:38–55:16 | Distinct applicability architecture; avoids composite key. Explicit direction, high confidence, conditional location mapping. |
| Candidate — Cumulative history migration | Not applicable | Rehearse in test; cumulative production load with historical references | add | TM-020 | Call 35:08–43:51 | Durable migration/reference constraints. Explicit direction, high confidence. |
| Candidate — Qualification deferral and reassessment | Not applicable | Defer delivery, retain design, reassess before restart | add | TM-021 | Call 47:52–52:29 | Delivery boundary without discarding accepted architecture. Explicit direction, high confidence; formal commercial evidence missing. |

## Change Summary

### Added

- [TM ADR-019 — Combine Independent Position, Location, and Individual Training Assignments](ADRs/ADR-019-combine-independent-position-location-and-individual-training-assignments.md).
- [TM ADR-020 — Migrate Training History through a Rehearsed Cumulative Production Load](ADRs/ADR-020-migrate-training-history-through-a-rehearsed-cumulative-production-load.md).
- [TM ADR-021 — Defer Qualification Delivery Pending Program and Scope Reassessment](ADRs/ADR-021-defer-qualification-delivery-pending-program-and-scope-reassessment.md).

### Modified

- [TM ADR-012 — Replace TPC with Intelex Training Management](ADRs/ADR-012-replace-tpc-with-intelex-training-management.md): migration dependencies and distinction between historical completion and current applicability. Original date and proposed status retained.

### Unchanged

- Immediate initial due dates, pre-start provisioning, completion-based recurrence, and accepted qualification architecture remain.
- No supersession, deprecation, withdrawal, or consolidation results from this call.
- Full proposed text is saved in the four individually linked ADR files rather than duplicated here.

## Traceability and Gaps

1. **Location audience:** The integrated location is the establishment. A remote employee may belong to an establishment where they do not physically work. Confirm the relationship used for training assignment before configuring location-based courses; this call selects neither a replacement hierarchy nor a separate training-location model. [Call, 54:47–55:16; EM-002; PA-001/003]
2. **Exceptions:** Seven exceptions is not an agreed total. Vanessa identifies missing workgroups, including Legal's. Direct assignment is an available mechanism, not confirmation of exception volume. [Call, 24:17–27:37]
3. **Rejected alternatives:** Composite position/location keys and custom location overlays were explored before the final independent-stream direction. Do not implement them as selected requirements. [Call, 03:07–13:12, 28:00–31:53]
4. **Pre-existing Employee ADR inconsistency:** The [accepted Employee specification](<../employee management/ADR-001-004-technical-specification-employee-provisioning.md>), §2.2, replaces staging/APIHub and version-owned authoring. Reconcile EM-001/003/005 separately using that recorded evidence, preserving accepted history. The call does not make those transport decisions. TM-001's expected reassessment after position changes also requires reconciliation with the specification's initial-only membership application.
5. **Dates and commercial evidence:** January 31 is hypothetical; three days is illustrative. Deferral and a no-cost change order are reported, but the email and executed amendment were not supplied. Future qualification implementation cost is unresolved. [Call, 35:45–36:34, 40:00–40:25, 50:07–51:06]
6. **Source registration:** The conversation draft's source-registration gap is closed by preserving the supplied transcript in both application folders. No source ID is invented. All new ADRs remain proposed; saving does not prove tenant configuration, testing, client approval, or contractual execution.
