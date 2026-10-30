# Revision 2 existing automation reconciliation

Only the narrow client-required edits below are active. Existing names, flags, type codes, native maps, publisher/generator and branch-clearing behavior are retained otherwise. Original flows are in [baseline evidence](../as-is/evidence.json); new contracts are H01–H08 in the [technical specification](solution-specification.md).

| Evidence / handler | Exported enabled / ActionType | Instruction | Target behavior |
| --- | --- | --- | --- |
| E55; Attach Risk if Assessment Results is not blank | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E187; FMEA-Update Recommended Action Action Taken | true / 2 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E241; Actions on Update | true / 2 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E265; Copy Values from Question during Publish | true / 1 | Modify H08 | Add only ContributesToOutcome copy; retain existing ActReqChoices copy and native publisher. |
| E429; Relate to Checklist Answer | true / 3 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E437; Create Anwer Records | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E477; Send Assignment Notification Upon Completion of Inspection | true / 2 | Modify notification condition | Retain release-change assignment event for outstanding actions; exclude already-completed entry; no duplicate task-entry notice. |
| E522; Start Date must be on or after today. | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E629; (0) Actions on Create & Update | true / 2 | Modify H01 | Correct N/A-comment clearing and preserve valid ActReqChoices/ComReqChoices for both Choice and Choices in Inspection authoring; keep other consumers. |
| E842; Clear Answer if not visible | true / 2 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E883; (2) Actions on Update | true / 2 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E935; (1) Actions on Create | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E942; [DEPRECATED] Check Consistency on Points | true / 16 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E952; Create Section and Set Default Value | true / 2 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E1075; Clear Person Responsible and Due Date when workflow is Closed | true / 16 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E1236; Create Role | true / 3 | Modify H01 | Repurpose Create Role as Validate Inspection Program Settings: replace ad hoc role creation with scoped fixed-setting/review/equipment guards. G02 supplies actual native event bindings. |
| E1319; Sync RelatedQstions to RelateQuestions | true / 3 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E1391; Completion Date | true / 3 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E1400; Get Action Source | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E1420; Due Date in future on creation | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E1429; FMEA - Sync Project Revision Action Plans | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E1477; Clear Conditional Display Fields if not dependent | true / 2 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E1765; Set Auto Checklist Code | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E1788; Sync Location | true / 2 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E1815; Calc Due Date | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E1884; Init Abstract Field Values on Create | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E1960; On Create | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2000; Set Inspection Name | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2007; Create answers | true / 1 | Modify H02 | Set existing discriminator and skip native answer generation for EXTERNAL; reuse INTERNAL mechanism. |
| E2023; Sync Inspector to Person Responsible | true / 2 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2096; Set Location Field | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2258; Update Workflow Person Responsible | true / 2 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2283; Notify Inspector if Created by Someone Else | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2348; Copy Values | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2361; Clear Person Responsible and Due Date when workflow is Closed | true / 2 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2390; Section and Sort Order Management | true / 3 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2415; Related to MM Checklist Grid | true / 3 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2571; Set Record Name | true / 3 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2575; Track Modified Changes | true / 2 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2594; Set Action Owner | true / 2 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2601; Update Status | true / 3 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2606; Clean up Choice List Field | true / 3 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2628; Throw Error if Saved at Location that Isn't Bottom | true / 16 | Modify H05 | Replace RMD leaf-location restriction with supplied establishment criteria. |
| E2669; Update CreateMode Flag | true / 2 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2924; Clear Completed information on Create | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2929; Set [Helper] Inspection Relation | true / 1 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2936; Set Record Name | true / 3 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2976; [INACTIVE] Set Field values on Abstract | true / 16 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E2980; Sync Person Responsible | true / 2 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E3072; Trigger Activities | true / 2 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E3077; [OBSOLETE] Init Values | false / 16 | Reuse | Retain installed flow and metadata; no general hardening/cleanup. Apply only the specific new field/source conditions in H contracts where directly required. |
| E3088; Action Already Completed | true / 2 | Modify H06 | Validate initial completion evidence before native completion; G06 event-order input. |

## Native workflow actions

| Action evidence | Instruction |
| --- | --- |
| E2697 | I01 ordered steps in technical specification; preserve stable action ID. |
| E2704 | I02 ordered steps in technical specification; preserve stable action ID. |
| E2702 | I03 ordered steps in technical specification; preserve stable action ID. |
| E2706 | I04 ordered steps in technical specification; preserve stable action ID. |
| E2518 | I05 ordered steps in technical specification; preserve stable action ID. |

## Forms and dependencies

Use F01–F06. Retain unrelated shared views/profiles and audit/sub-checklist workflows; no bulk rewrite. Native E1319 alias synchronization, E2096 location copy, E2929 inspection helper, E842 clear-on-hide and native publication calculations are deliberately reused. The current main spec supplies exact required changes, not a request to retrofit all 52 handlers.
