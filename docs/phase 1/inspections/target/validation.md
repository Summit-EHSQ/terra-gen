# Revision 2 technical and task validation

Static configuration-contract checks. The as-is baseline remains separate. G01–G08 technical inputs are not asserted resolved.

| Check | Result |
| --- | --- |
| consultantLanguageTasks | 34 |
| explicitExistingFieldModifications | 61 |
| unchangedFieldContexts | 19 |
| explicitExistingElementRows | 88 |
| revision | 2 |
| objects | 92 |
| coreObjectSections | 28 |
| fieldRows | 508 |
| changedFieldRows | 111 |
| retainedFieldRows | 392 |
| newLocalFields | 31 |
| externalInterfaceFields | 5 |
| nativeSchemas | 2 |
| nativeStages | 5 |
| nativeActions | 5 |
| tasks | 34 |
| previousTasks | 63 |
| technicalEdges | 89 |
| sourceHandlers | 52 |
| sourceViewsProfiles | 186 |
| linksChecked | 127 |
| Structural/document errors | 0 |

## Configuration limitations

- Existing published calculations, native publisher/generator and branch clear-on-hide are deliberately reused; their historic/concurrency limitations are not represented as corrected.
- G01–G08 remain supplied configuration inputs. Missing native expressions/recipient binding, uploaded-report metadata and initial completed event order block only affected assignments.
- Existing read-only mechanisms or scalar attributes omitted from the export remain unchanged; this is not a full tenant rebuild or runtime certification.
- No tenant configuration, formula execution, formal testing, deployment or historical migration was performed.

## Skill validation disposition

| Rule group | Disposition |
| --- | --- |
| Fields, object sections, inheritance | Each modelled object has its own section and every declared field has one canonical row; source GUIDs/inheritance preserved. |
| Relationships/inverses | All endpoints resolve; new catalogue selectors disable inverse; native maps/reverse-only source declarations are retained. |
| Conditional requiredness | Native IsRequired is distinguished from R-rule requiredness; new fields on existing shared records are natively optional to avoid retrospective mandatory-data work. |
| Formula vocabulary/dependencies | Extracted expressions identified; changed prose/placeholder branches not asserted executable; G02 supplies missing native bindings. |
| Publication atomicity/retry | Existing native mechanism reused; no claim that optional hardening was implemented or verified. |
| Lifecycle/scoped changes | Only client-required native guards/copies/validation are modified. Existing clear-on-hide and source-link synchronization remain. |
| Native evidence/security | SEC-02 scopes required review history and accepted-record access; no global audit/security remediation. |
| Date/time | New SubmittedAt/AcceptedAt timezone enabled; existing date/time properties retained with no implicit conversion. |
| Catalogue inheritance | Four independent new catalogues, own field/seed tables; no shared catalogue reparenting/normalization. |
| Task consistency | Summary/details match, both roles and blockers present, strict graph matches predecessors, no external input node or retired prerequisite. |
| Scope/coverage | Every local changed field mapped; five external interface fields are supplied rather than created; all source handlers/views classified. |
| Migration/deployment | Outside current build plan; no physical removals or retrospective backfill instruction. |

## Task-content gate

The document build also executes the [task-content validation gate](implementation-content-validation.json) against the [recorded content review](implementation-content-review.json). The current revision covers IMP-01; the other 33 tasks remain explicitly unreviewed against this new contract. The gate checks instruction references, preparation-only work, task/rendered-review freshness and edits outside the selected scope. A structural pass does not certify the unreviewed content.

## Readiness

The reference is ready for consultant review/configuration planning. Individual native expression, data, role, mobile and output bindings remain blocked exactly as listed, so the complete implementation contract is not claimed tenant-validated.
