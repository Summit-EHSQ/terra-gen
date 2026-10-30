# Inspections — Complete field configuration reference

Revision 2. [Primary technical specification](solution-specification.md) contains the core field tables and workflow contracts; this reference covers every retained shared/dependency object individually. Configure only Add/Modify rows. Retained external metadata is an interface, not an instruction to rebuild its owning application. No optional revision 1 fields or storage conversions are active.

## 1. Complete object inventory

| Object / internal name | Object ID / basis | Inheritance parent | Instruction | Direct fields |
| --- | --- | --- | --- | --- |
| Action Plan Abstract / ActionPlans_ActionPlanAbsObject | edca9466-cdf8-4317-85c9-d3efb40373a2 | FragApplication_AbCorrectivActiObject | Reuse existing object | 23 |
| Action Plan Template / ActionPlans_ActioPlanTemObject | 589c9aa4-c12c-4247-80f4-eedba36fd75c | None | Reuse external interface | 0 |
| Activity Abstract / ActionPlans_ActivityAbsObject | 347a4ed1-ecdb-40b5-b8d8-9a258e9adb99 | FragApplication_AbCorrectivActiObject | Reuse external interface | 3 |
| Action - Type of Review / ActionPlans_ActTypeofReviewObject | 9d47eece-a2dd-4103-b076-9d1ea3e2407a | None | Reuse external interface | 0 |
| Global Action Plan Abstract / ActionPlans_GlobActPlanAbsObject | 2746e1f2-7359-4939-8476-0426fb8e5f3e | FragApplication_AbCorrectivActiObject | Reuse external interface | 0 |
| CAR / CAR_CARObject | 99e58a14-f67c-4cbc-b8f8-3dbc48177c6f | ComplyFramework_CARAbstractObject | Reuse external interface | 0 |
| Cause Analysis / CauseAnalysis_CauseAnalysisObject | a631a825-2e5f-4fb7-ae45-6d084d8582d3 | None | Reuse external interface | 0 |
| Root Cause / CauseAnalysis_RootCauseObject | cb8d3588-d610-4120-b084-f31276410731 | None | Reuse external interface | 0 |
| Finding (CFW) / CFW_FindingObject | 97529fd9-8002-44d3-a87b-d540f421c578 | EventFwk_EventObject | Reuse external interface | 0 |
| CLF - Answer Type / CLF_AnswerTypeObject | 4b8c65a0-c069-4f9d-afb1-d4fc97140e41 | None | Reuse existing object | 3 |
| Checklist Abstract / CLF_CheckliAbstractObject | c726d108-022c-4b4b-8928-5160ce43a535 | None | Reuse existing object | 3 |
| Checklist Answer / CLF_ChecklistAnswerObject | 3557470f-8de9-461c-bdcb-9edf9cc2b6c6 | None | Reuse identity; configure listed fields only | 32 |
| Checklist / CLF_ChecklistObject | 6fe45655-67bc-4593-91e3-675ccc304fdc | CLF_CheckliAbstractObject | Reuse identity; configure listed fields only | 12 |
| Checklist Type / CLF_ChecklistTypeObject | 0259a1d3-455a-4ba5-8c4b-dbd3f0be9ea7 | None | Reuse existing object | 9 |
| Choice List / CLF_ChoiceListObject | b8491b3d-469a-4bdf-b9e1-ddcecf257422 | None | Reuse identity; configure listed fields only | 8 |
| Choice / CLF_ChoiceObject | d36a079a-12db-4b54-9c70-f80d146ff8ca | None | Reuse identity; configure listed fields only | 12 |
| CLF - Finding Due Date / CLF_FindingDDObject | 235842cd-b2bd-4a2e-a8c3-b8e0f0d351f9 | None | Reuse existing object | 3 |
| Finding / CLF_FindingObject | 18bb2218-f236-4baf-ad0b-cc187222c8f2 | EventFwk_EventObject | Reuse existing object | 13 |
| Finding Status / CLF_FindingStatusObject | 2c6e1a6e-253b-4275-9c0c-d9f4b64a8834 | None | Reuse existing object | 5 |
| Inspection Action Plan / CLF_InsActionPlanObject | b714db5b-7015-4f4e-b05f-a9eb0e507d53 | ActionPlans_ActionPlanAbsObject | Reuse identity; configure listed fields only | 13 |
| Localizable Resource / CLF_LocalizResourceObject | 9731e3e6-7280-4553-8d65-3af2c60aaad9 | None | Reuse existing object | 3 |
| Audit (Multiple checklists) / CLF_MultichecklistsObject | d1173495-0379-44d4-851a-9cab62d3f144 | CLF_ChecklistAnswerObject | Reuse existing object | 5 |
| Preferences / CLF_PreferencesObject | 9f91762c-29b1-49d4-8f9b-580b73a7ff6d | None | Reuse existing object | 2 |
| Published Checklist / CLF_PubChecklistObject | f0ba4595-963b-45fd-8b19-592ce53f7b3c | CLF_CheckliAbstractObject | Reuse existing object | 6 |
| Published Question / CLF_PubQuestObject | 0e5d5f7f-2039-4194-8f37-86771b63e36f | CLF_QuestAbstractObject | Reuse identity; configure listed fields only | 17 |
| Question Abstract / CLF_QuestAbstractObject | 312a57bc-343e-4337-a251-91609c550820 | None | Reuse identity; configure listed fields only | 22 |
| Question Answer / CLF_QuestionAnswerObject | 9083e2f5-2e24-4174-92db-75a61a217d0b | None | Reuse identity; configure listed fields only | 43 |
| Question / CLF_QuestObject | 92628acf-dcc3-41c3-b23f-198d83cba0ef | CLF_QuestAbstractObject | Reuse existing object | 17 |
| Section Answer / CLF_SectionAnswerObject | b01defd7-dd92-4793-ab45-64a123159338 | None | Reuse existing object | 6 |
| Section / CLF_SectionObject | 6c774cf4-c380-4706-81ef-a656239fe8cf | None | Reuse identity; configure listed fields only | 4 |
| Single checklist / CLF_SinglechecklistObject | 3baadf79-b7a0-482b-8165-fa490a96bcae | CLF_ChecklistAnswerObject | Reuse existing object | 0 |
| Sub-checklist / CLF_SubchecklistObject | 3f6970f2-408f-4bee-bdae-80f0db6ca83a | CLF_ChecklistAnswerObject | Reuse existing object | 1 |
| Tag / CLF_TagObject | 820903cc-cbc9-4198-834f-a80d2b78b20e | None | Reuse existing object | 2 |
| CAR Abstract / ComplyFramework_CARAbstractObject | 9e02f3af-cb69-48f0-8206-dfbe8cb7d06c | None | Reuse external interface | 0 |
| Global App Settings / ConfgAppSetting_GlobAppSettingsObject | 73d6b091-b922-45ff-85ee-d92e8267971e | ConfgAppSetting_SpecAppSettingsObject | Reuse existing object | 0 |
| Icon Asset / ConfgAppSetting_IconAssetObject | 51760767-f9a1-4930-a7d3-0580ea2f87fd | None | Reuse existing object | 3 |
| Instruction Text / ConfgAppSetting_InstructionTextObject | ccdcd5a5-82d8-4822-b2ac-703d41dc5d0d | None | Reuse existing object | 9 |
| Person Responsible Option / ConfgAppSetting_PersRespOptionObject | b566862a-2640-4325-96ff-da5dc0ad6b68 | None | Reuse existing object | 4 |
| Abstract Application Specific App Settings / ConfgAppSetting_SpecAppSettingsObject | 08f1bba7-28ca-461a-96d7-d2f0e2202128 | None | Reuse existing object | 12 |
| Instruction Text Panel Generator / ConfgAppSetting_TPanelGeneratorObject | 8884bd44-4951-4dbf-9c7f-d9b574946afd | None | Reuse existing object | 5 |
| Abstract Evidence / EventFwk_AbsEvidenceObject | 92a1b764-06f7-4556-8e6a-1f72be0b1c7c | None | Reuse external interface | 0 |
| CAPA / EventFwk_CAPAObject | 11b88061-922a-4690-86df-61f1b766b34a | FragApplication_AbCorrectivActiObject | Reuse external interface | 0 |
| Event Action Plan / EventFwk_EventActionPlanObject | 684c77dc-7d3c-4387-98ca-d93cf8b6ae16 | ActionPlans_ActionPlanAbsObject | Reuse external interface | 0 |
| Event Cost / EventFwk_EventCostObject | b2ca1b26-74a4-4a99-aa8c-fac02454835b | FragApplication_AbstractCostObject | Reuse external interface | 0 |
| Event / EventFwk_EventObject | 3979d543-6df2-46a1-a26e-293cd7978bdc | EventFwk_EventScenarioObject | Reuse existing object | 40 |
| Event Scenario / EventFwk_EventScenarioObject | c0d0d372-c03c-46cd-9f51-cdd28b620177 | None | Reuse existing object | 4 |
| Event Type / EventFwk_EventTypeObject | 33cdd92d-1fc4-4a8a-9cbe-48e6ffb26a13 | None | Reuse external interface | 0 |
| Lesson Learned / EventFwk_LessonLearnedObject | 63e2eb5b-3f7b-4dd3-a295-9f4f9f712cef | ActionPlans_GlobActPlanAbsObject | Reuse external interface | 0 |
| Nonconformance Abstract / EventFwk_NonConfAbstractObject | ac4266ea-f1d6-4bb3-aca7-31e1585dd540 | EventFwk_EventObject | Reuse external interface | 0 |
| Severity / EventFwk_SeverityObject | 412062e5-1181-47a1-83c0-91d0e52a2bd6 | None | Reuse external interface | 0 |
| Team Member / EventFwk_TeamMemberObject | 88f9a145-d866-4be9-961a-a741789ec394 | None | Reuse external interface | 0 |
| VOC Abstract / EventFwk_VOCAbstractObject | eb90c958-cbcf-4f4a-89ba-2e0bedea4770 | EventFwk_EventObject | Reuse external interface | 0 |
| Abstract Corrective Action / FragApplication_AbCorrectivActiObject | ffaeb11a-e798-47ed-a3fb-1336a82876dd | None | Reuse identity; configure listed fields only | 29 |
| Abstract Cost / FragApplication_AbstractCostObject | b14ca608-e356-4b60-b9ec-3db8e6e208e0 | None | Reuse external interface | 1 |
| Action Cost / FragApplication_ActionCostObject | 9121f9af-5120-47d8-97e8-a04ea1ee6ce8 | FragApplication_AbstractCostObject | Reuse external interface | 0 |
| Color / FragApplication_ColorObject | dc9d451a-c909-4a8d-8296-f0cf88971f06 | None | Reuse existing object | 3 |
| Abstract Corrective Action Corrective/Preventive / FragApplication_CorrectivePreveObject | 4ede3636-6468-4b3c-bbc7-c5a34250e6bd | None | Reuse external interface | 0 |
| Equipment / FragApplication_EquipmentObject | d05bf7ff-7ab2-47f3-96d9-97a1a328d9ce | None | Reuse external interface | 1 |
| Progress Notes / FragApplication_PrgressNotesObject | 7d1fa155-4b0e-4552-9a6a-4e1c2b30e941 | None | Reuse external interface | 0 |
| Inspection - Type of Review / Insp_ActTypeofReviewObject | 121d71e4-ed81-4f6e-8d36-c76d3aaf9f2d | None | Reuse existing object | 3 |
| Inspection / Insp_EquipInspectionObject | 4266a8f5-e53c-4b81-921c-540913945dfd | Insp_InspectionAbsObject | Reuse identity; configure listed fields/parameters | 30 |
| Equipment List Option / Insp_EquipListOptionObject | db312533-2245-4dab-9ffa-7c2d5c254d73 | None | Reuse existing object | 4 |
| Inspection Abstract / Insp_InspectionAbsObject | 8c33cf5c-67fd-4cca-8703-96ec39efff81 | CLF_ChecklistAnswerObject | Reuse identity; configure listed fields/parameters | 19 |
| Inspection Role Option / Insp_InspRoleOptionObject | 538d6243-3abc-44e4-b059-9ba40076c922 | None | Reuse existing object | 4 |
| Inspection Review Decision / Insp_IReviewDecisionObject | e693fba5-fae3-4a4f-a89f-f797af1f16a8 | None | Reuse existing object | 3 |
| Mobile Action / Insp_MobileActionObject | b75f1fef-ed47-4d29-8a11-fd7986ca1c9f | None | Reuse existing object | 3 |
| Type of Inspection / Insp_TypeObject | c504f266-819b-47a2-84f2-0154fdcf19de | CLF_ChecklistTypeObject | Reuse identity; configure listed fields only | 25 |
| Object / MetObjectEntity | 09300b47-1b32-4ea7-9dfc-be1fb427d12f | MetTypeEntity | Reuse external interface | 0 |
| Type / MetTypeEntity | a69a7f61-e713-41c0-96fa-1cf97a084f74 | None | Reuse external interface | 0 |
| NCR / NCR_NCRObject | 27120010-b7c8-4d71-a23a-d0970607efba | EventFwk_NonConfAbstractObject | Reuse external interface | 0 |
| Permit Record / PTW_PermitRecordObject | 5cb20c2b-6a4f-4402-a75d-5628ec4dd610 | None | Reuse external interface | 0 |
| Node / QP_NodeAbstractObject | ed20ee1a-4c61-40eb-969b-91ddd9fe19b7 | None | Reuse external interface | 2 |
| Project Revision / QP_ProjRevObject | 440174ae-c4c9-4d86-ad7d-e72bbab69db4 | None | Reuse external interface | 0 |
| Reaction Plan / QP_ReactionPlanObject | 8fcd293e-0288-4892-93e3-de6f418b89a7 | QP_NodeAbstractObject | Reuse external interface | 0 |
| Recommended Action / QP_RecoActionObject | 13d4a5ac-9329-4eff-8221-1db8d857359c | QP_NodeAbstractObject | Reuse external interface | 1 |
| Assessment Result Abstract / RiskFmk_AResultAbstractObject | 7822ebd3-9ce6-494b-9ff6-88061b2bcd46 | None | Reuse external interface | 1 |
| Operational Risk Abstract / RiskFmk_OpRiskObject | 3ede7c62-0206-4a39-b6ed-ba8c99b79f4c | RiskFmk_RiskObject | Reuse external interface | 0 |
| Risk Assessment Abstract / RiskFmk_RiskAssessmentObject | 5243c661-78da-4e1f-a764-850e3b8e89a1 | None | Reuse external interface | 1 |
| Risk / RiskFmk_RiskObject | da1604a8-ddbd-463b-83c3-8b5240f9cbbe | EventFwk_EventScenarioObject | Reuse external interface | 0 |
| Employee / SysEmployeeEntity | 6afb3ac6-96db-4072-9293-4d02699d1264 | SysSubjectEntity | Reuse external interface | 2 |
| Group / SysGroupEntity | dc95c2f3-4325-40d5-91af-046ef46fdfc4 | SysSubjectEntity | Reuse external interface | 0 |
| Location / SysLocationEntity | f5d5209b-0a7d-4858-a302-678fcc065dd2 | None | Reuse external interface | 1 |
| Role / SysRoleEntity | 1b44b982-2248-41c5-971e-dfa68eddb196 | SysGroupEntity | Reuse external interface | 0 |
| Subject / SysSubjectEntity | 785124a0-20be-4606-8d25-56dd86248bbf | None | Reuse external interface | 0 |
| Workflow Instance / SysWorkflowInstanceEntity | ff5895e2-f1a0-4f19-83fc-417947fcef53 | None | Reuse external interface | 7 |
| Workflow Recurring Series / SysWorkflowRecurringSeriesEntity | 50d7bbfc-a211-4703-90fa-7d12f7866f84 | None | Reuse external interface | 2 |
| Workflow Stage / SysWorkflowStageEntity | f3ca6a8e-9736-4749-9c16-6c27e180b90e | None | Reuse external interface | 1 |
| Inspection Source / Insp_InspectionSourceObject | Proposed; no GUID | None | Add local catalogue | 4 |
| Inspection Outcome / Insp_OutcomeObject | Proposed; no GUID | None | Add local catalogue | 4 |
| Response Outcome / Insp_ResponseOutcomeObject | Proposed; no GUID | None | Add local catalogue | 4 |
| Inspection Classification / Insp_ClassificationObject | Proposed; no GUID | None | Add local catalogue | 4 |
| Operational Resource / Shared_OperationalResource | Proposed; no GUID | Unresolved | Conditional external binding; no local object creation | 5 |

## 2. Declared fields

### 2.1 Action Plan Abstract

**Internal name:** `ActionPlans_ActionPlanAbsObject`. **Inheritance parent:** `FragApplication_AbCorrectivActiObject`. **Configuration:** Reuse existing object.

**Object ID:** edca9466-cdf8-4317-85c9-d3efb40373a2 (E42). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | ActionPlans_ActionPlanAbs_Detail; 0069b4c9-eecc-451d-b5d5-a309c08dc4cd |
| DefaultInventoryView | CAR_ActionPlanAbs_Inventory; 95274b8e-5e73-4334-bfa2-5a5f309a45f4 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Action Plans; 4ed20735-6d62-41a7-9b9b-2cd26bb2a9bf |

**Directly declared fields:** `Activites`, `ActivitiesStart`, `ActivitProgress`, `AssessResults`, `CFWFindings`, `MActivitesOrder`, `MaxTasksOrder`, `NbActivites`, `NbOpenActivit`, `NbOpened`, `NbTasks`, `NCR`, `PermitAbstract`, `PersonResp`, `ProvenEffective`, `ReviewerComment`, `ReviewType`, `RiskAbs`, `StartDate`, `Tasks`, `TasksProgress`, `Template`, `VOCAbstract`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Activities | 1:M to ActionPlans_ActivityAbsObject; inverse ActPlanAbstract | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Activites`; E1210 |
| Activities Can Start | Yes/No | N | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `ActivitiesStart`; E2271 |
| Activities Progress | Percent (native); precision 18, scale 2 | N | None (no field override exported); calculation `IFERROR((NbActivites-NbOpenActivit)/NbActivites, 0)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `ActivitProgress`; E1350 |
| Assessment Results | M:1 to RiskFmk_AResultAbstractObject; inverse ActionPlansAbs | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `AssessResults`; E69 |
| CFWFindings | M:N to CFW_FindingObject; inverse APs | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CFWFindings`; E2036 |
| Max Activities Order | Float; preserve native numeric attributes | N | None (no field override exported); calculation `MAX(Activites.Order)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `MActivitesOrder`; E1205 |
| Max Tasks Order | Number (Integer) | N | None (no field override exported); calculation `MAX(Tasks.Order)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `MaxTasksOrder`; E2325 |
| # Activities | Number (Integer) | N | None (no field override exported); calculation `COUNT(Activites)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbActivites`; E1357 |
| # Opened Activities | Number (Integer) | N | None (no field override exported); calculation `COUNT(FILTER(Activites.IsCompleted, "=", FALSE))` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbOpenActivit`; E1354 |
| # Opened Tasks | Number (Integer) | N | None (no field override exported); calculation `COUNT(FILTER(Tasks.IsCompleted, "=", FALSE))` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbOpened`; E460 |
| # Tasks | Number (Integer) | N | None (no field override exported); calculation `COUNT(Tasks)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbTasks`; E465 |
| NCR | M:1 to NCR_NCRObject; inverse ActionPlan | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `NCR`; E2114 |
| Permit Abstract | M:1 to PTW_PermitRecordObject; inverse ActionPlan | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PermitAbstract`; E2305 |
| Person Responsible | M:1 to SysEmployeeEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PersonResp`; E1540 |
| Implemented and Proven Effective? | Yes/No | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ProvenEffective`; E394 |
| Reviewer Comment | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ReviewerComment`; E2303 |
| Type of Review | M:1 to ActionPlans_ActTypeofReviewObject; inverse disabled | N | Fixed record 5702e807-81f3-43ea-ab5a-a1b703747dfc (label not exported; G03 if changed) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `ReviewType`; E2174 |
| Risk Abstract | M:1 to RiskFmk_RiskObject; inverse ActionPlansAbs | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `RiskAbs`; E57 |
| Start Date | Date | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `StartDate`; E524 |
| Tasks | 1:M to ActionPlans_ActivityAbsObject; inverse ActionPlan | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Tasks`; E605 |
| Tasks Progress | Percent (native); precision 18, scale 2 | N | None (no field override exported); calculation `IFERROR((NbTasks - NbOpened)/NbOpened, 0)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `TasksProgress`; E456 |
| Template | M:1 to ActionPlans_ActioPlanTemObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Template`; E3079 |
| VOC Abstract | M:1 to EventFwk_VOCAbstractObject; inverse ActionPlans | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `VOCAbstract`; E2622 |

### 2.2 Action Plan Template

**Internal name:** `ActionPlans_ActioPlanTemObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** 589c9aa4-c12c-4247-80f4-eedba36fd75c (E2380). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Action Plans; 4ed20735-6d62-41a7-9b9b-2cd26bb2a9bf |

**Directly declared fields:** None; declarations remain on the inheritance base.

### 2.3 Activity Abstract

**Internal name:** `ActionPlans_ActivityAbsObject`. **Inheritance parent:** `FragApplication_AbCorrectivActiObject`. **Configuration:** Reuse external interface.

**Object ID:** 347a4ed1-ecdb-40b5-b8d8-9a258e9adb99 (E609). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Action Plans; 4ed20735-6d62-41a7-9b9b-2cd26bb2a9bf |

**Directly declared fields:** `CanStart`, `Order`, `PrereActivities`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Can Start | Yes/No | N | None (no field override exported); calculation `OR(<br>  COUNT(PrereActivities)=0<br>, <br>  AND(<br>    COUNT(PrereActivities)>0<br>  ,<br>    COUNT(FILTER(PrereActivities.IsCompleted, "=", FALSE))=0<br>  )<br>)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `CanStart`; E1548 |
| Order | Float; preserve native numeric attributes | N | `ActPlanAbstract.MActivitesOrder+1` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Order`; E1208 |
| Prerequisite Activities | M:N to ActionPlans_ActivityAbsObject; inverse ReferencedBy | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PrereActivities`; E1019 |

### 2.4 Action - Type of Review

**Internal name:** `ActionPlans_ActTypeofReviewObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** 9d47eece-a2dd-4103-b076-9d1ea3e2407a (E2177). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Action Plans; 4ed20735-6d62-41a7-9b9b-2cd26bb2a9bf |

**Directly declared fields:** None; declarations remain on the inheritance base.

### 2.5 Global Action Plan Abstract

**Internal name:** `ActionPlans_GlobActPlanAbsObject`. **Inheritance parent:** `FragApplication_AbCorrectivActiObject`. **Configuration:** Reuse external interface.

**Object ID:** 2746e1f2-7359-4939-8476-0426fb8e5f3e (E1751). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Action Plans; 4ed20735-6d62-41a7-9b9b-2cd26bb2a9bf |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.6 CAR

**Internal name:** `CAR_CARObject`. **Inheritance parent:** `ComplyFramework_CARAbstractObject`. **Configuration:** Reuse external interface.

**Object ID:** 99e58a14-f67c-4cbc-b8f8-3dbc48177c6f (E2388). **Abstract:** false. **Workflow:** true. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Corrective Action Reporting; a76d62e2-178a-4a0d-9e0e-9168c0d99995 |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.7 Cause Analysis

**Internal name:** `CauseAnalysis_CauseAnalysisObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** a631a825-2e5f-4fb7-ae45-6d084d8582d3 (E1473). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Cause Analysis; 67589436-8d77-4ccd-8b4b-a034f65613aa |

**Directly declared fields:** None; declarations remain on the inheritance base.

### 2.8 Root Cause

**Internal name:** `CauseAnalysis_RootCauseObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** cb8d3588-d610-4120-b084-f31276410731 (E179). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Cause Analysis; 67589436-8d77-4ccd-8b4b-a034f65613aa |

**Directly declared fields:** None; declarations remain on the inheritance base.

### 2.9 Finding (CFW)

**Internal name:** `CFW_FindingObject`. **Inheritance parent:** `EventFwk_EventObject`. **Configuration:** Reuse external interface.

**Object ID:** 97529fd9-8002-44d3-a87b-d540f421c578 (E2040). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework (v2); a36a1650-f766-44aa-aff5-a8f8c3ee42a6 |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.10 CLF - Answer Type

**Internal name:** `CLF_AnswerTypeObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** 4b8c65a0-c069-4f9d-afb1-d4fc97140e41 (E795). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | Index; af2b2478-5c57-480a-9ddd-fefba5c89b53 |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Caption`, `Index`, `Value`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Caption | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Caption`; E1006 |
| Index | Integer | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `Index`; E1348 |
| Value | Text; preserve existing length (not exported) | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Value`; E633 |

Initial values:

Inherited columns are record values, not duplicate declarations. Proposed seeds have no invented record GUID.

| Basis | Id | Deleted | Value | Index | Caption |
| --- | --- | --- | --- | --- | --- |
| Extracted | 93ab1484-09ce-4868-9618-bfa62ea0b01c | false | Choices | 5 | Choices |
| Extracted | 771916e1-5251-4658-add8-3091457e7295 | false | Choice | 0 | Choice |
| Extracted | c52ac043-81af-413a-a393-6490fec6b1aa | false | Text | 3 | Text |
| Extracted | 7580b590-07e8-4142-9059-3020a636d918 | false | Date | 4 | Date |
| Extracted | ed36fa47-3b62-4323-a2ca-a58c8fad2ac1 | false | Float | 2 | Float |
| Extracted | a6e3bb24-6722-4dd2-b7fd-02ae1a16debd | false | Checkbox | 1 | Checkbox |

### 2.11 Checklist Abstract

**Internal name:** `CLF_CheckliAbstractObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** c726d108-022c-4b4b-8928-5160ce43a535 (E369). **Abstract:** true. **Workflow:** false. **Location bound:** true. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_CheckliAbstract_Detail; 4c3b3ff4-d898-470d-a7df-d0505f826fe1 |
| DefaultInventoryView | CLF_CheckliAbstract_Inventory; 979476b6-e3a1-4120-a358-c4370f7c95c6 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Description`, `Location`, `Title`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Description | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain native inherited Checklist → Published Checklist business copy. **Retain**; internal `Description`; E1221 |
| Location | M:1 to SysLocationEntity; inverse CLFCheckliAbstractObject | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain native inherited Checklist → Published Checklist business copy. **Retain**; internal `Location`; E2330 |
| Title | Text, maximum 200 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain native inherited Checklist → Published Checklist business copy. **Retain**; internal `Title`; E1962 |

### 2.12 Checklist Answer

**Internal name:** `CLF_ChecklistAnswerObject`. **Inheritance parent:** None. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** 3557470f-8de9-461c-bdcb-9edf9cc2b6c6 (E75). **Abstract:** true. **Workflow:** false. **Location bound:** true. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_ChecklistAnswer_Detail; 22e1d276-8cae-4a75-a42c-6ee07af95242 |
| DefaultInventoryView | CLF_ChecklistAnswer_Inventory; 916b3885-7512-47ff-b607-c66c1ee3d6bb |
| DisplayProperty | DisplayField; 45b27141-411b-47ac-8be4-6a200a7ba35b |
| OrderProperty | RecordNo; 9af1b94a-91f8-41b5-a41b-aaa63f8a4d96 |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `ActionPlanAbst`, `ActionPlans`, `ApplicQuestions`, `Comments`, `CreatedBy`, `DefPersRespFind`, `Depth`, `DisplayField`, `FilledQuestions`, `Findings`, `Id`, `Location`, `MasterChecklist`, `MaxPoints`, `Name`, `NbActions`, `NbFindings`, `NbSubChecklists`, `oSectionAnswers`, `Path`, `PersResponsibl`, `PointsAwarded`, `PrevChecklistId`, `Progress`, `PubChecklist`, `QuestionAnswers`, `RecordNo`, `Score`, `SectAnswers`, `SubChecklists`, `SysteTypeHelper`, `Workflow`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Action Plans | 1:M to FragApplication_AbCorrectivActiObject; inverse CheckListAnsAct | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ActionPlanAbst`; E2260 |
| Action Plans | 1:M to CLF_InsActionPlanObject; inverse ChecklistAnswer | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ActionPlans`; E2042 |
| # Questions | Number (Integer) | N | None (no field override exported); calculation `IF(COUNT(QuestionAnswers)=0, COUNT(PubChecklist.PubQuestions), COUNT(QuestionAnswers)) + SUM(SubChecklists.ApplicQuestions)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `ApplicQuestions`; E2104 |
| Comments | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Comments`; E2436 |
| Created By | M:1 to SysEmployeeEntity; inverse disabled | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CreatedBy`; E2020 |
| Action Owner | M:1 to SysEmployeeEntity; inverse disabled | N | `CURRENTUSER` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `DefPersRespFind`; E2382 |
| Depth | Number (Integer) | N | None (no field override exported); calculation `IF(MasterChecklist<>NULL, MasterChecklist.Depth+1, 1)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `Depth`; E2363 |
| Display Field | Text, maximum 50 | N | None (no field override exported); calculation `IF(LEN(Name)>50, CONCATENATE(LEFT(Name, 47), "..."), Name)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `DisplayField`; E2322 |
| # Filled Questions | Number (Integer) | N | None (no field override exported); calculation `SUM(QuestionAnswers.IsFilled) + SUM(SubChecklists.FilledQuestions)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `FilledQuestions`; E1800 |
| Findings | 1:M to CLF_FindingObject; inverse ChecklistAnswer; native IsRequired FALSE | N | None (no field override exported) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `Findings`; E2963; R02 |
| Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Id`; E760 |
| Location | M:1 to SysLocationEntity; inverse CLFChecklistAnswerObject | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Location`; E1886 |
| Audit | M:1 to CLF_ChecklistAnswerObject; inverse SubChecklists | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `MasterChecklist`; E762 |
| Max Points | Float; preserve native numeric attributes; native IsRequired FALSE | N | None (no field override exported); calculation `SUM(QuestionAnswers.MaxPoints) + SUM(SubChecklists.MaxPoints)` (extracted; calculation) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `MaxPoints`; E1193; R02 |
| Name | Text, maximum 255 | N | `CONCATENATE( "Inspection "," - ", DAY(NOW), "/", MONTH(NOW), "/", YEAR(NOW))` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Name`; E1964 |
| # Actions | Number (Integer) | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `NbActions`; E2269 |
| # Findings | Number (Integer); native IsRequired FALSE | N | None (no field override exported); calculation `COUNT(Findings) + SUM(SubChecklists.NbFindings)` (extracted; calculation) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `NbFindings`; E2972; R02 |
| # Sub-Checklists | Number (Integer) | N | None (no field override exported); calculation `COUNT(SubChecklists)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbSubChecklists`; E2945 |
| [Helper] Trigger Creation of Section Answers and Default Values | Yes/No | N | false | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `oSectionAnswers`; E1189 |
| Path | Text; preserve existing length (not exported) | N | None (no field override exported); calculation `IF(MasterChecklist<>NULL, CONCATENATE(MasterChecklist.Path, ".", RecordNo), RecordNo)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `Path`; E2079 |
| Person Responsible | M:1 to SysEmployeeEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PersResponsibl`; E2171 |
| Points Awarded | Float; preserve native numeric attributes; native IsRequired FALSE | N | None (no field override exported); calculation `SUM(QuestionAnswers.PointsAwarded) + SUM(SubChecklists.PointsAwarded)` (extracted; calculation) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `PointsAwarded`; E1981; R02 |
| Previous Checklist Id | Text; preserve existing length (not exported) | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `PrevChecklistId`; E2966 |
| Progress | Percent (native); precision 18, scale 0 | N | None (no field override exported); calculation `IFERROR(FilledQuestions / ApplicQuestions, 0)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `Progress`; E2100 |
| Checklist | M:1 to CLF_PubChecklistObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PubChecklist`; E1364 |
| Question Answers | 1:M to CLF_QuestionAnswerObject; inverse ChecklistAnswer | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `QuestionAnswers`; E1197 |
| Record No. | AutoNumber | N | None (no field override exported) | Read only; preserve existing view/permission rules | Native autonumber generation. **Retain**; internal `RecordNo`; E1169 |
| Score | Percent (native); precision 18, scale 2; native IsRequired FALSE | N | None (no field override exported); calculation `IFERROR(PointsAwarded/ MaxPoints, 0)` (extracted; calculation) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `Score`; E1977; R02 |
| Section Answers | 1:M to CLF_SectionAnswerObject; inverse ChecklistAnswer | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `SectAnswers`; E2960 |
| Sub Checklists | 1:M to CLF_ChecklistAnswerObject; inverse MasterChecklist | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `SubChecklists`; E1200 |
| System Type Helper | Text; preserve existing length (not exported); native IsRequired FALSE | N | Inspection create hook sets literal Insp_EquipInspectionObject; retain other native discriminator values | Hidden/read only | H02 sets before scoped question/readiness evaluation; no runtime TYPEOF function. **Modify**; internal `SysteTypeHelper`; E1023; R01, R02 |
| Workflow | M:1 to SysWorkflowInstanceEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Workflow`; E1932 |

### 2.13 Checklist

**Internal name:** `CLF_ChecklistObject`. **Inheritance parent:** `CLF_CheckliAbstractObject`. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** 6fe45655-67bc-4593-91e3-675ccc304fdc (E514). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_Checklist_Detail; 9668bbf5-b9a1-4966-966c-9d81420b46c3 |
| DefaultInventoryView | CLF_Checklist_Inventory; e2b9b327-3a0d-4d6a-8ef4-99a907ea7020 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Active`, `AutoCode`, `ChecklistType`, `EnableScoring`, `EnableSections`, `HelpeQuestions`, `Id`, `NbQuestions`, `PubChecklists`, `Questions`, `Reference`, `Sections`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Active | Yes/No | Y | true | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `Active`; E691 |
| Autogenerate Checklist Code? | Yes/No | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `AutoCode`; E1786 |
| Checklist Type | M:1 to CLF_ChecklistTypeObject; inverse Checklists | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `ChecklistType`; E1770 |
| Enable Scoring? | Yes/No; native IsRequired FALSE | Y | FALSE for Inspections checklists | Hidden/enforced FALSE for these programs | H01 authoring validation; no removal of native capability; publication: Authoring/native publication management only; no additional target copy. **Modify**; internal `EnableScoring`; E1784; R02 |
| Enable Sections? | Yes/No; native IsRequired FALSE | Y | TRUE for Inspections checklists | Hidden/enforced TRUE for these programs | H01 authoring validation; no removal of native capability; publication: Authoring/native publication management only; no additional target copy. **Modify**; internal `EnableSections`; E1534; R02 |
| [Helper] Questions | 1:M to CLF_QuestObject; inverse HelperChecklist | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `HelpeQuestions`; E1776 |
| Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `Id`; E1456 |
| # Questions | Number (Integer) | N | None (no field override exported); calculation `COUNT(HelpeQuestions)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `NbQuestions`; E1760 |
| Published Checklists | 1:M to CLF_PubChecklistObject; inverse Checklist | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `PubChecklists`; E1767 |
| Questions | M:N to CLF_QuestObject; inverse Checklists | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `Questions`; E713 |
| Code | Text, maximum 100 | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Copied by native mapping in §7. **Retain**; internal `Reference`; E661 |
| Sections | 1:M to CLF_SectionObject; inverse Checklist | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `Sections`; E1781 |

### 2.14 Checklist Type

**Internal name:** `CLF_ChecklistTypeObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** 0259a1d3-455a-4ba5-8c4b-dbd3f0be9ea7 (E966). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_ChecklistType_Detail; b2f05c74-d1bf-41be-be1a-397eed8976d2 |
| DefaultInventoryView | CLF_ChecklistType_Inventory; 536fad31-a0f8-44b0-a6c9-17f7c804e6fe |
| DisplayProperty | Name; a4dac596-3c7a-4401-aed4-b8700c486108 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Checklists`, `Description`, `MaxOrder`, `Name`, `NbChecklists`, `NbQuestions`, `QueAnswerObject`, `Questions`, `Reference`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Checklists | 1:M to CLF_ChecklistObject; inverse ChecklistType | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Checklists`; E968 |
| Description | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Description`; E1733 |
| Max Order | Float; preserve native numeric attributes | N | None (no field override exported); calculation `MAX(Questions.Order)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `MaxOrder`; E1735 |
| Name | Text, maximum 200 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E1561 |
| # Checklists | Number (Integer) | N | None (no field override exported); calculation `COUNT(Checklists)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbChecklists`; E963 |
| # Questions | Number (Integer) | N | None (no field override exported); calculation `COUNT(Questions)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbQuestions`; E1738 |
| Question Answer Object | Text, maximum 200 | Y | CLF_QuestionAnswerObject | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `QueAnswerObject`; E1741 |
| Questions | 1:M to CLF_QuestObject; inverse ChecklistType | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Questions`; E1135 |
| Code | Text, maximum 100 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Reference`; E1728 |

### 2.15 Choice List

**Internal name:** `CLF_ChoiceListObject`. **Inheritance parent:** None. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** b8491b3d-469a-4bdf-b9e1-ddcecf257422 (E95). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_ChoiceList_Detail; e18ca4b4-7d9c-4fdb-96fe-1497fccad9cd |
| DefaultInventoryView | CLF_ChoicesList_Inventory; d44fbc81-a83e-4b38-8382-ac0733d13bda |
| DisplayProperty | Name; f45a0af0-e631-4e97-a593-2405ea55c866 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `ChoiceLists`, `Choices`, `Description`, `Id`, `MaxPoints`, `Name`, `NbChoices`, `Reference`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Choice Lists | 1:M to CLF_QuestAbstractObject; inverse ChoiceList | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ChoiceLists`; E1913 |
| Choices | 1:M to CLF_ChoiceObject; inverse ChoiceList | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Choices`; E725 |
| Description | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Description`; E3082 |
| Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Id`; E631 |
| Max Points | Float; preserve native numeric attributes; native IsRequired FALSE | N | None (no field override exported); calculation `MAX(Choices.Value)` (extracted; calculation) | Hide numeric-scoring presentation in Inspections; retain original field/calculation | Existing scoring implementation retained; not used for target categorical outcome. **Modify**; internal `MaxPoints`; E722; D01 |
| Name | Text, maximum 200 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E1911 |
| # Choices | Number (Integer) | N | None (no field override exported); calculation `COUNT(Choices)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbChoices`; E2566 |
| Code | Text, maximum 100 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Reference`; E1937 |

### 2.16 Choice

**Internal name:** `CLF_ChoiceObject`. **Inheritance parent:** None. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** d36a079a-12db-4b54-9c70-f80d146ff8ca (E210). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_Choice_Detail; 4dcfce64-3982-4a17-a657-ca5c892e677b |
| DefaultInventoryView | CLF_Choice_Inventory; 835f675c-51cc-4444-a022-9729e5f5dfb8 |
| DisplayProperty | Name; f856ad02-7c5f-4d97-8b98-f778c0581c8b |
| OrderProperty | SortOrder; f054acbb-4e70-4abb-a6aa-90dc93ad0965 |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `BColor`, `ChoiceList`, `Css`, `Id`, `IsNA`, `MobileAction`, `Name`, `Reference`, `SortOrder`, `TColor`, `Value`, `IsNegative`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Background-color | M:1 to FragApplication_ColorObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `BColor`; E310 |
| Choice List | M:1 to CLF_ChoiceListObject; inverse Choices | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ChoiceList`; E302 |
| Css | Text; preserve existing length (not exported) | N | text-align:center;padding:8px 3px;border-radius:10px;border:1px dotted lightgrey; | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Css`; E327 |
| Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Id`; E755 |
| Is NA | Yes/No | N | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `IsNA`; E325 |
| Mobile Action | M:1 to Insp_MobileActionObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `MobileAction`; E320 |
| Name | Text, maximum 200 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E306 |
| Code | Text, maximum 100 | Y | `CONCATENATE(ChoiceList.Reference, ".",  ChoiceList.NbChoices+1)` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Reference`; E316 |
| Sort Order | Float; preserve native numeric attributes | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `SortOrder`; E308 |
| Text-color | M:1 to FragApplication_ColorObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `TColor`; E329 |
| Value | Float; preserve native numeric attributes; native IsRequired FALSE | N | None (no field override exported) | Hide numeric-scoring presentation in Inspections; retain original field/calculation | Existing scoring implementation retained; not used for target categorical outcome. **Modify**; internal `Value`; E323; D01 |
| Is Negative? | Yes/No; native IsRequired FALSE | N | FALSE for new Choice records; legacy NULL is treated as FALSE; no historical backfill | Choice administrator edits on Choice detail/toolbox/mass-update and applicable mobile profiles. Shared across every question using this Choice record; use separate Choice records when business meanings differ. | H03/D01 evaluates Choice.IsNegative or any selected Choices.IsNegative after visibility/N/A checks and only for contributing Choice/Choices questions. Choice-level value is live, not copied to Published Question. Explicit IsNA takes precedence. Do not infer polarity from name, translation or numeric Value. Reevaluate unaccepted answers on their next evaluation and always before submission/approval; leave accepted ResponseOutcome and OverallOutcome untouched.. **Add**; internal `IsNegative`; USR-CHOICE-NEGATIVE; R02, D01 |

### 2.17 CLF - Finding Due Date

**Internal name:** `CLF_FindingDDObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** 235842cd-b2bd-4a2e-a8c3-b8e0f0d351f9 (E578). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | Index; 93d53fa6-3dfd-42fb-98cd-989ac39c13fa |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Caption`, `Index`, `Value`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Caption | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Caption`; E576 |
| Index | Integer | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `Index`; E1062 |
| Value | Number (Integer) | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Value`; E1822 |

Initial values:

Inherited columns are record values, not duplicate declarations. Proposed seeds have no invented record GUID.

| Basis | Id | Deleted | Value | Index | Caption |
| --- | --- | --- | --- | --- | --- |
| Extracted | 692618c0-eb32-4580-98d4-3d4984baffb6 | false | 7 | 2 | 1 week |
| Extracted | 6f4b1be9-7436-409d-8af3-ad3f246625c9 | false | 30 | 4 | 1 month |
| Extracted | eb1f2003-c086-4224-aca9-a26c842f6442 | false | 3 | 1 | 3 days |
| Extracted | 062252c9-faae-4eca-a428-8293818c98f3 | false | 14 | 3 | 2 weeks |
| Extracted | 5e108aed-80b1-4b12-82c9-109287c51ffe | false | 1 | 0 | Immediately |

### 2.18 Finding

**Internal name:** `CLF_FindingObject`. **Inheritance parent:** `EventFwk_EventObject`. **Configuration:** Reuse existing object.

**Object ID:** 18bb2218-f236-4baf-ad0b-cc187222c8f2 (E172). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_Finding_Detail; dfd08cc7-bda9-41a7-9f25-a5d38f9e814e |
| DefaultInventoryView | CLF_Finding_Inventory; eed81059-db2d-40f0-b529-447a9139ae40 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `ActionPlans`, `ChecklistAnswer`, `DueIn`, `FindingStatus`, `HasActionPlans`, `IsOpen`, `ManCloseCom`, `ManualClose`, `NbAPs`, `NbOpAPs`, `PersResponsible`, `QuestionAnswers`, `ResponseDue`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Action Plans | M:N to CLF_InsActionPlanObject; inverse Findings | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ActionPlans`; E566 |
| Related to | M:1 to CLF_ChecklistAnswerObject; inverse Findings | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ChecklistAnswer`; E1185 |
| Due in | M:1 to CLF_FindingDDObject; inverse disabled | Y | Fixed record eb1f2003-c086-4224-aca9-a26c842f6442 (3) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `DueIn`; E1817 |
| Status | M:1 to CLF_FindingStatusObject; inverse disabled | N | Fixed record 2ea0b4d2-ce73-4bd4-a837-5030d44e6e45 (label not exported; G03 if changed) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `FindingStatus`; E174 |
| Has Action Plans | Yes/No | N | None (no field override exported); calculation `IF(NbAPs>0, TRUE, FALSE)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `HasActionPlans`; E1033 |
| Is Open | Number (Integer) | N | None (no field override exported); calculation `IF(AND(FindingStatus.Code<>"Closed", FindingStatus.Code<>"Closed without Action"), 1, 0)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `IsOpen`; E167 |
| Closed Comment | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ManCloseCom`; E1232 |
| Corrected on the spot | Yes/No | N | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `ManualClose`; E1234 |
| # Action Plans | Number (Integer) | N | None (no field override exported); calculation `COUNT(AbsCorActPlan)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbAPs`; E1036 |
| # Opened Action Plans | Number (Integer) | N | None (no field override exported); calculation `COUNT(FILTER(ActionPlans.IsCompleted, "<>", TRUE))` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbOpAPs`; E2004 |
| Person Responsible | M:1 to SysEmployeeEntity; inverse disabled | Y | `IF(ChecklistAnswer.DefPersRespFind=NULL, CreatedBy, ChecklistAnswer.DefPersRespFind)` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `PersResponsible`; E1797 |
| Related Questions | M:N to CLF_QuestionAnswerObject; inverse Findings | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `QuestionAnswers`; E1223 |
| Response Due | Date | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ResponseDue`; E1820 |

### 2.19 Finding Status

**Internal name:** `CLF_FindingStatusObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** 2c6e1a6e-253b-4275-9c0c-d9f4b64a8834 (E473). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_FindingStatus_Detail; a55b727c-ab52-4e8e-9596-4a0e98525c80 |
| DefaultInventoryView | CLF_FindingStatus_Inventory; 6bf816b7-8770-4b28-8969-41d966d5ddeb |
| DisplayProperty | Name; 0e1e53f2-fc07-4118-a04f-e73435763482 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `BC`, `Code`, `Icon`, `Name`, `TC`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Background Color | M:1 to FragApplication_ColorObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `BC`; E1117 |
| Code | Text, maximum 50 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Code`; E177 |
| Icon | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Icon`; E1693 |
| Name | Text, maximum 250 | N | `Code` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Name`; E1697 |
| Text Color | M:1 to FragApplication_ColorObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `TC`; E1702 |

### 2.20 Inspection Action Plan

**Internal name:** `CLF_InsActionPlanObject`. **Inheritance parent:** `ActionPlans_ActionPlanAbsObject`. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** b714db5b-7015-4f4e-b05f-a9eb0e507d53 (E28). **Abstract:** false. **Workflow:** true. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_InsActionPlan_Detail; c485a139-be02-459f-b04a-24ca99a821fd |
| DefaultInventoryView | CLF_InsActionPlan_Inventory; f21b6ba9-b82d-47b2-9575-fce0e82cd2fe |
| DisplayProperty | RecordName; 7f006665-2bb0-41f3-a16a-82d3833c055a |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `ActionOwner`, `AlBeenCorrected`, `ChecklistAnswer`, `Findings`, `HelperReleaseAP`, `hRelatedInsp`, `hRelatedInspId`, `NotifiDate`, `PlaDisplayField`, `QuestionAnswers`, `QuestionList`, `RecordName`, `RelateQuestions`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Action Owner | M:1 to SysEmployeeEntity; inverse disabled; native IsRequired FALSE | Conditional | Existing default expression ChecklistAnswer.DefPersRespFind; no new global default | Required/editable for AlBeenCorrected=FALSE. Hidden/nonmandatory for TRUE. Native field cannot remain unconditionally required. | F05 existing Action Already Complete Show/Hide view action applies conditional mandatory rules; E3088 validates completed-entry evidence before native completion. **Modify**; internal `ActionOwner`; E1812; R06 |
| Has this action already been corrected? | Yes/No; native IsRequired FALSE | Y | FALSE | Action author on initial entry; saved outstanding actions use normal Complete action | F05 selects the form branch; existing E3088 DateNotRequired path records immediate completion after its new checks; G06 confirms task suppression. **Modify**; internal `AlBeenCorrected`; E534; R06 |
| [OLD] Related to | M:1 to CLF_ChecklistAnswerObject; inverse ActionPlans; native IsRequired FALSE | N | None (no field override exported) | Reuse installed helper/map behavior; expose only existing user-facing source/action controls | Existing product supplies matching inspection/response links and E1319/E2096/E2929 helper behavior; no new source initializer is specified.. **Modify**; internal `ChecklistAnswer`; E782; R06 |
| Related Findings | M:N to CLF_FindingObject; inverse ActionPlans | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Findings`; E2369 |
| [Helper] Release AP | Yes/No; native IsRequired FALSE | N | None (no field override exported); calculation `ChecklistAnswer:Insp_EquipInspectionObject.ReleActionPlans` (extracted; calculation) | Reuse installed helper/map behavior; expose only existing user-facing source/action controls | Retain extracted release calculation. Outstanding assignment remains at accepted-inspection release; H06 handles immediate path.. **Modify**; internal `HelperReleaseAP`; E490; R06 |
| [Helper] Related Inspection | M:1 to Insp_EquipInspectionObject; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Reuse installed helper/map behavior; expose only existing user-facing source/action controls | Existing product supplies matching inspection/response links and E1319/E2096/E2929 helper behavior; no new source initializer is specified.. **Modify**; internal `hRelatedInsp`; E154; R06 |
| [Helper] Related Inspection Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `hRelatedInspId`; E152 |
| [Helper] Target Date for Notifications | Date | N | None (no field override exported); calculation `Workflow.DueDate` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NotifiDate`; E2120 |
| [Helper] Inspection Action Plan Display Field | Text, maximum 255 | N | None (no field override exported); calculation [E1897-calculation](configuration-expressions.md#e1897-calculation) (extracted) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `PlaDisplayField`; E1897 |
| Question Answers | M:N to CLF_QuestionAnswerObject; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Reuse installed helper/map behavior; expose only existing user-facing source/action controls | Existing product supplies matching inspection/response links and E1319/E2096/E2929 helper behavior; no new source initializer is specified.. **Modify**; internal `QuestionAnswers`; E1618; R06 |
| Question List | Text; preserve existing length (not exported) | N | None (no field override exported); calculation `JOIN(QuestionAnswers.QuesSummaryText,"<br/>")` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `QuestionList`; E1615 |
| Record Name | Text, maximum 255 | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `RecordName`; E2938 |
| [Helper] Related Questions | M:N to CLF_QuestionAnswerObject; inverse InspActionPlans; native IsRequired FALSE | N | None (no field override exported) | Reuse installed helper/map behavior; expose only existing user-facing source/action controls | Existing product supplies matching inspection/response links and E1319/E2096/E2929 helper behavior; no new source initializer is specified.. **Modify**; internal `RelateQuestions`; E1321; R06 |

### 2.21 Localizable Resource

**Internal name:** `CLF_LocalizResourceObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** 9731e3e6-7280-4553-8d65-3af2c60aaad9 (E663). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_LocalizResource_Detail; 0f66bbd4-3585-4bee-8128-5c695ed01865 |
| DefaultInventoryView | CLF_LocalizResource_Inventory; 6ce0f7a0-51fd-4e26-83b7-3db277da787d |
| DisplayProperty | Key; 5165fde7-7c70-4931-b1ea-bf3cab72cd2e |
| OrderProperty | Key; 5165fde7-7c70-4931-b1ea-bf3cab72cd2e |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Comments`, `Key`, `Value`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Comments | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Comments`; E670 |
| Key | Text, maximum 50 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Key`; E665 |
| Value | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Value`; E672 |

### 2.22 Audit (Multiple checklists)

**Internal name:** `CLF_MultichecklistsObject`. **Inheritance parent:** `CLF_ChecklistAnswerObject`. **Configuration:** Reuse existing object.

**Object ID:** d1173495-0379-44d4-851a-9cab62d3f144 (E703). **Abstract:** false. **Workflow:** true. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_MulticheckList_Detail; 72f933b2-1ade-4926-8197-ae09e70fd8ee |
| DefaultInventoryView | CLF_Multichecklist_Inventory; e77ff084-5ca2-4593-9acf-98996c6c9242 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Agenda`, `Objective`, `PersResponsible`, `RelatedCAR`, `Scope`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Agenda | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Agenda`; E2109 |
| Objective | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Objective`; E2478 |
| Person Responsiblea | M:1 to SysEmployeeEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PersResponsible`; E2159 |
| Related CAR | 1:M to CAR_CARObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `RelatedCAR`; E2385 |
| Scope | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Scope`; E701 |

### 2.23 Preferences

**Internal name:** `CLF_PreferencesObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** 9f91762c-29b1-49d4-8f9b-580b73a7ff6d (E289). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_Preferences_Detail; 0115e12c-e65d-43b4-b947-b67bca0dd63f |
| DefaultInventoryView | CLF_Preferences_Inventory; 2139b754-a47f-470c-833d-74e106b5f31b |
| DisplayProperty | Name; f871df9a-c3cf-45cc-a6dc-db91d93e6a73 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `GridCustomCode`, `Name`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Grid Custom Code | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `GridCustomCode`; E1907 |
| Name | Text, maximum 20 | Y | None (no field override exported); calculation `"Preferences"` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `Name`; E776 |

### 2.24 Published Checklist

**Internal name:** `CLF_PubChecklistObject`. **Inheritance parent:** `CLF_CheckliAbstractObject`. **Configuration:** Reuse existing object.

**Object ID:** f0ba4595-963b-45fd-8b19-592ce53f7b3c (E475). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_PubChecklist_Detail; b588fbc8-f8a0-4d3b-b2bd-ec2987ae6aac |
| DefaultInventoryView | CLF_PubChecklist_Inventory; 3cc954e8-215a-4976-8a3a-062fe602fd43 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Active`, `Checklist`, `ChecklistRef`, `ChecklistType`, `IsActive`, `PubQuestions`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Active | Yes/No | N | None (no field override exported); calculation `Checklist.Active` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `Active`; E2253 |
| Checklist | M:1 to CLF_ChecklistObject; inverse PubChecklists | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `Checklist`; E682 |
| Checklist Code | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain source mapping in §7. **Retain**; internal `ChecklistRef`; E1070 |
| Checklist Type | M:1 to CLF_ChecklistTypeObject; inverse disabled | N | None (no field override exported); calculation `Checklist.ChecklistType` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `ChecklistType`; E1793 |
| Is Active | Yes/No | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `IsActive`; E2016 |
| Published Questions | M:N to CLF_PubQuestObject; inverse PubChecklists | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `PubQuestions`; E2011 |

### 2.25 Published Question

**Internal name:** `CLF_PubQuestObject`. **Inheritance parent:** `CLF_QuestAbstractObject`. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** 0e5d5f7f-2039-4194-8f37-86771b63e36f (E216). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_PubQuest_Detail; 6bf1c8e6-a7a4-4c9a-87a3-0d1a0e5541ab |
| DefaultInventoryView | CLF_PubQuest_Inventory; a09143de-e03d-4b9c-a17e-7510091dffa9 |
| DisplayProperty | QuestionRef; bb18c2b7-d1f2-4931-bbba-f8f6b50a1964 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `AbsoluteOrder`, `AnswerTypeCode`, `DependsOnPub`, `DependsOnPubId`, `Expression`, `HasCondDisplay`, `hCheckAnswer`, `hCheckAnswerId`, `Id`, `MaxPoints`, `PubChecklists`, `Question`, `QuestionRef`, `SectionName`, `SectionSort`, `VisDepNoAns`, `VisibleIfs`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Absolute Order | Float; preserve native numeric attributes | N | None (no field override exported); calculation `Question.ExistingSection.Sort*1000 +  Order` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Retain source mapping in §7. **Retain**; internal `AbsoluteOrder`; E269 |
| Answer Type Code | Text; preserve existing length (not exported) | N | None (no field override exported); calculation `AnswerType.Value` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `AnswerTypeCode`; E238 |
| Depends On Pub | M:1 to CLF_PubQuestObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `DependsOnPub`; E262 |
| Depends On Pub Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `DependsOnPubId`; E2144 |
| Visibility Expression | Text; preserve existing length (not exported) | N | None (no field override exported); calculation [E224-calculation](configuration-expressions.md#e224-calculation) (extracted) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `Expression`; E224 |
| Has Conditional Display | Yes/No | N | `Question.DependsOn <> NULL` (extracted; default) | Read only; preserve existing view/permission rules | Native extracted default retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `HasCondDisplay`; E267 |
| [Helper] Checklist Answer | M:1 to CLF_ChecklistAnswerObject; inverse disabled | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `hCheckAnswer`; E275 |
| [Helper] Checklist Answer Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `hCheckAnswerId`; E2018 |
| Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `Id`; E999 |
| Max Points | Float; preserve native numeric attributes; native IsRequired FALSE | N | None (no field override exported); calculation `ChoiceList.MaxPoints` (extracted; calculation) | Hide numeric-scoring presentation in Inspections; retain original field/calculation | Existing scoring implementation retained; not used for target categorical outcome; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Modify**; internal `MaxPoints`; E233; D01 |
| Published Checklists | M:N to CLF_PubChecklistObject; inverse PubQuestions | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `PubChecklists`; E258 |
| Question | M:1 to CLF_QuestObject; inverse PubQuestions | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `Question`; E243 |
| Question Code | Text, maximum 100 | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain source mapping in §7. **Retain**; internal `QuestionRef`; E247 |
| Section Name | Text; preserve existing length (not exported) | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.; publication: Retain source mapping in §7. **Retain**; internal `SectionName`; E256 |
| Section Sort | Number (Integer) | N | `Question.ExistingSection.Sort` (extracted; default) | Read only; preserve existing view/permission rules | Native extracted default retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `SectionSort`; E273 |
| Visible if Depends On is unanswered? | Yes/No | N | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Retain source mapping in §7. **Retain**; internal `VisDepNoAns`; E254 |
| Visible If | M:N to CLF_ChoiceObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain source mapping in §7. **Retain**; internal `VisibleIfs`; E249 |

### 2.26 Question Abstract

**Internal name:** `CLF_QuestAbstractObject`. **Inheritance parent:** None. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** 312a57bc-343e-4337-a251-91609c550820 (E93). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_QuestAbstract_Detail; b61ccba7-2d3e-40d1-8df0-1db4589fc853 |
| DefaultInventoryView | CLF_QuestAbstract_Inventory; 4cd43bc4-4e77-47f1-9538-02183898a77f |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `ActReqChoices`, `AllowNA`, `AnswerRequired`, `AnswerType`, `ChoiceList`, `ChoiceListId`, `ComReqChoices`, `ComReqIfNA`, `Content`, `DateCreated`, `DateModifiedHel`, `DefaultBool`, `DefaultChoice`, `DefaultChoices`, `FindReqChoices`, `Guideline`, `Order`, `Section`, `TriggerFindings`, `ValueChoiceList`, `Weight`, `ContributesToOutcome`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Action Required | M:N to CLF_ChoiceObject; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Question author selects choices from this question ChoiceList that require an action; keep visible for Choice/Choices in Inspection authoring; published selection read only | Reuse existing Action Required option and existing publication copy. H01 validates membership. R02 requires a distinct linked action if selected Choice or any selected Choices matches ActReqChoices, independently of IsNegative or ContributesToOutcome. An open or completed action satisfies existence; empty selection means no choice-triggered action requirement.; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Modify**; internal `ActReqChoices`; E642; R02 |
| Allow N/A | Yes/No | Y | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `AllowNA`; E520 |
| Required | Yes/No; native IsRequired TRUE | Y | TRUE in Inspections authoring | Hidden/enforced TRUE for Inspections; retain other applications’ metadata/defaults | H01/H08 enforce/copy; R02 excludes currently invisible dependent questions; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Modify**; internal `AnswerRequired`; E130; R02 |
| Answer Type | M:1 to CLF_AnswerTypeObject; inverse disabled | N | Fixed record 771916e1-5251-4658-add8-3091457e7295 (Choice) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `AnswerType`; E645 |
| Choice List | M:1 to CLF_ChoiceListObject; inverse ChoiceLists | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `ChoiceList`; E89 |
| Choice List Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `ChoiceListId`; E1173 |
| Comments Required | M:N to CLF_ChoiceObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `ComReqChoices`; E648 |
| Comment Required if NA | Yes/No; native IsRequired TRUE | Y | false | Author editable when AllowNA=TRUE; when FALSE hide and force FALSE; copied published value read only | Change E629 first condition so valid required N/A comments are retained; exact proposed condition in expressions register; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Modify**; internal `ComReqIfNA`; E640; R02 |
| Question | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `Content`; E603 |
| Date Created | Date/Time; timezone preserve native setting (not exported) | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `DateCreated`; E2420 |
| Date Modified Helper | Date/Time; timezone preserve native setting (not exported) | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `DateModifiedHel`; E1452 |
| Default | Yes/No | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `DefaultBool`; E638 |
| Default Choice | M:1 to CLF_ChoiceObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `DefaultChoice`; E635 |
| Default Choices | M:N to CLF_ChoiceObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `DefaultChoices`; E654 |
| Finding Required | M:N to CLF_ChoiceObject; inverse disabled; native IsRequired FALSE | N | None for new Inspections content | Hidden/empty for new Inspections questions; retain old/shared references | Formal Finding requirement is not evaluated for current Inspection submissions; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Modify**; internal `FindReqChoices`; E651; R02 |
| Guideline | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `Guideline`; E1337 |
| Order | Float; preserve native numeric attributes | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `Order`; E657 |
| Section | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `Section`; E1341 |
| Choices that Trigger Action Plans | M:N to CLF_ChoiceObject; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Hidden in target Inspection authoring; retain native metadata/history for other consumers | No automatic formal Finding creation or displayed numeric score. New direct action validation uses explicit fields, not legacy named trigger assumptions.; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Modify**; internal `TriggerFindings`; E1518; R02 |
| Default Value (Choice List) | M:1 to CLF_ChoiceObject; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Hidden in target Inspection authoring; retain native metadata/history for other consumers | No automatic formal Finding creation or displayed numeric score. New direct action validation uses explicit fields, not legacy named trigger assumptions.; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Modify**; internal `ValueChoiceList`; E1345; R02 |
| Weight | Float; preserve native numeric attributes; native IsRequired FALSE | N | 1 | Hidden in target Inspection authoring; retain native metadata/history for other consumers | No automatic formal Finding creation or displayed numeric score. New direct action validation uses explicit fields, not legacy named trigger assumptions.; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Modify**; internal `Weight`; E1343; R02 |
| Contributes to Outcome? | Yes/No; native IsRequired FALSE | N | FALSE for new records; legacy NULL treated as not contributing | Question author; TRUE only for Choice/Choices in this release; Published Question read only. Checkbox and other non-choice answers remain informational; use a Yes/No Choice list if a Boolean business answer must contribute. | H08 copies inherited value; H01 rejects contributing non-choice questions. Native IsRequired FALSE preserves legacy/shared records; publication: H08 copies same inherited field from Question to Published Question. **Add**; internal `ContributesToOutcome`; PF-055; R02, D01 |

### 2.27 Question Answer

**Internal name:** `CLF_QuestionAnswerObject`. **Inheritance parent:** None. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** 9083e2f5-2e24-4174-92db-75a61a217d0b (E208). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_QuestionAnswer_Detail; 579ead41-f49d-45b6-8080-32f1274aa321 |
| DefaultInventoryView | CLF_QuestionAnswer_Inventory; b06cd56d-6508-4d38-835a-3f5d7977fb29 |
| DisplayProperty | PubQuestion; cbf01deb-2a66-4943-b517-0d9852655cb0 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `AbsoluteOrder`, `ActionPlans`, `AnswerText`, `Checkbox`, `ChecklistAnswer`, `ChecklistAnswerId`, `Choice`, `ChoiceId`, `Choices`, `Comments`, `CrSectionAnswer`, `Date`, `Dependencies`, `DependsOn`, `Findings`, `Float`, `HelpQuestiText`, `InspActionPlans`, `IsActionMiss`, `IsAnswerMiss`, `IsApplicable`, `IsComMiss`, `IsFilled`, `IsFindingMiss`, `IsNA`, `IsSubmitReady`, `IsVisible`, `MassUpChoice`, `MassUpChoiceId`, `MaxPoints`, `NbActions`, `NbFindings`, `NumbofDocuments`, `PointsAwarded`, `PubQuestion`, `PubQuestionId`, `QuesSummaryText`, `QuestionRef`, `SectionAnswer`, `Text`, `TrDefaultAnswer`, `Attachments`, `ResponseOutcome`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Absolute Order | Float; preserve native numeric attributes | N | None (no field override exported); calculation `PubQuestion.AbsoluteOrder` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `AbsoluteOrder`; E890 |
| Actions | M:N to FragApplication_AbCorrectivActiObject; inverse RelatedQstions | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ActionPlans`; E707 |
| Answer Text | Text; preserve existing length (not exported) | N | None (no field override exported); calculation [E823-calculation](configuration-expressions.md#e823-calculation) (extracted) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `AnswerText`; E823 |
| Answer - Checkbox | Yes/No | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Checkbox`; E766 |
| Checklist Answer | M:1 to CLF_ChecklistAnswerObject; inverse QuestionAnswers | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ChecklistAnswer`; E678 |
| Checklist Answer Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ChecklistAnswerId`; E2146 |
| Answer - Choice | M:1 to CLF_ChoiceObject; inverse disabled | N | `PubQuestion.DefaultChoice` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Choice`; E743 |
| Answer - Choice Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ChoiceId`; E1258 |
| Answer - Choices | M:N to CLF_ChoiceObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Choices`; E885 |
| Comments | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Comments`; E816 |
| [Helper] Trigger Section Answer Creation and Default Values | Yes/No | N | false; calculation `ChecklistAnswer.oSectionAnswers` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `CrSectionAnswer`; E880 |
| Answer - Date | Date | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Date`; E564 |
| Dependent Question Answers | 1:M to CLF_QuestionAnswerObject; inverse DependsOn | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Dependencies`; E596 |
| Depends On | M:1 to CLF_QuestionAnswerObject; inverse Dependencies | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `DependsOn`; E757 |
| Findings | M:N to CLF_FindingObject; inverse QuestionAnswers; native IsRequired FALSE | N | None (no field override exported) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `Findings`; E545; R02 |
| Answer - Float | Float; preserve native numeric attributes | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Float`; E876 |
| [Helper] QuestionText | Text; preserve existing length (not exported) | N | None (no field override exported); calculation `IF(IsSubmitReady, NULL, PubQuestion.Content)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `HelpQuestiText`; E944 |
| Action Plans | M:N to CLF_InsActionPlanObject; inverse RelateQuestions | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `InspActionPlans`; E390 |
| Is Action Missing | Yes/No; native IsRequired FALSE | N | Scoped target rule: Selected Choice or any selected Choices matches PubQuestion.ActReqChoices: require at least one distinct linked action, independently of negative classification; open or complete counts. No matching choice means no choice-triggered action requirement. Preserve extracted calculation for other applications; executable changes supplied under G02. | Read only; H03/R02 evaluate after native typed-answer/visibility processing | H03 and I02/I03/I04 use R02; no new branch-clearing behavior. **Modify**; internal `IsActionMiss`; E802; R02 |
| Is Answer Missing | Yes/No; native IsRequired FALSE | N | Scoped target rule: Visible/applicable question requires typed answer or allowed explicit N/A. Preserve extracted calculation for other applications; executable changes supplied under G02. | Read only; H03/R02 evaluate after native typed-answer/visibility processing | H03 and I02/I03/I04 use R02; no new branch-clearing behavior. **Modify**; internal `IsAnswerMiss`; E948; R02 |
| Is Applicable | Number (Integer) | N | 1 | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `IsApplicable`; E878 |
| Is Comment Missing | Yes/No; native IsRequired FALSE | N | Scoped target rule: Negative answer requires comment; retain configured comment/N/A conditions. Preserve extracted calculation for other applications; executable changes supplied under G02. | Read only; H03/R02 evaluate after native typed-answer/visibility processing | H03 and I02/I03/I04 use R02; no new branch-clearing behavior. **Modify**; internal `IsComMiss`; E831; R02 |
| Is Filled | Number (Integer) | N | None (no field override exported); calculation [E746-calculation](configuration-expressions.md#e746-calculation) (extracted) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `IsFilled`; E746 |
| Is Finding Missing | Yes/No; native IsRequired FALSE | N | Scoped target rule: FALSE for the Inspection discriminator only. Preserve extracted calculation for other applications; executable changes supplied under G02. | Read only; H03/R02 evaluate after native typed-answer/visibility processing | H03 and I02/I03/I04 use R02; no new branch-clearing behavior. **Modify**; internal `IsFindingMiss`; E896; R02 |
| Not-Applicable | Yes/No | N | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `IsNA`; E933 |
| Is Submit Ready | Yes/No; native IsRequired FALSE | N | Scoped target rule: No applicable answer/comment/action condition is missing; ExternalInspectionReport is validated separately on Inspection under R01/I02. Preserve extracted calculation for other applications; executable changes supplied under G02. | Read only; H03/R02 evaluate after native typed-answer/visibility processing | H03 and I02/I03/I04 use R02; no new branch-clearing behavior. **Modify**; internal `IsSubmitReady`; E847; R02 |
| Is Visible | Yes/No | N | None (no field override exported); calculation [E735-calculation](configuration-expressions.md#e735-calculation) (extracted) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `IsVisible`; E735 |
| Choice (Mass Update) | M:1 to CLF_ChoiceObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `MassUpChoice`; E205 |
| Choice (Mass Update) Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `MassUpChoiceId`; E793 |
| Max Points | Float; preserve native numeric attributes; native IsRequired FALSE | N | None (no field override exported); calculation `IF(Choice.Value=NULL, NULL, IF(Choice.IsNA=TRUE, 0,  PubQuestion.MaxPoints*PubQuestion.Weight))` (extracted; calculation) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `MaxPoints`; E870; R02 |
| # Actions | Number (Integer); native IsRequired FALSE | N | Scoped target rule: Count distinct actions through retained native response links; do not count parallel display maps twice. Preserve extracted calculation for other applications; executable changes supplied under G02. | Read only; H03/R02 evaluate after native typed-answer/visibility processing | H03 and I02/I03/I04 use R02; no new branch-clearing behavior. **Modify**; internal `NbActions`; E839; R02 |
| # Findings | Number (Integer); native IsRequired FALSE | N | None (no field override exported); calculation `COUNT(Findings)` (extracted; calculation) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `NbFindings`; E542; R02 |
| # Docs | Number (Integer) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `NumbofDocuments`; E853 |
| Points Awarded | Float; preserve native numeric attributes; native IsRequired FALSE | N | None (no field override exported); calculation `IF(PubQuestion.AnswerTypeCode="Choice", Choice.Value*PubQuestion.Weight, IF(PubQuestion.AnswerTypeCode="Choices", MAX(Choices.Value)*PubQuestion.Weight, NULL))` (extracted; calculation) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `PointsAwarded`; E810; R02 |
| Published Question | M:1 to CLF_PubQuestObject; inverse disabled | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PubQuestion`; E588 |
| Published Question Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PubQuestionId`; E2142 |
| [Helper] Question Summary Text | Text; preserve existing length (not exported) | N | None (no field override exported); calculation [E818-calculation](configuration-expressions.md#e818-calculation) (extracted) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `QuesSummaryText`; E818 |
| Question Code | Text; preserve existing length (not exported) | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `QuestionRef`; E940 |
| Section Answer | M:1 to CLF_SectionAnswerObject; inverse QuestionAnswers | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `SectionAnswer`; E937 |
| Answer - Text | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Text`; E855 |
| [Helper] Trigger Default Answer | Yes/No | N | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `TrDefaultAnswer`; E888 |
| Attachments | Native attachment collection; native owner ID binding to Question Answer; native IsRequired Native panel; validate collection through R01/R02 | N | None | Native response attachments; inspector editable in In Progress/returned work, reviewer read only | Reuse native attachment collection; photographs supported; no universal mandatory-photo rule. **Add**; internal `Attachments`; PF-052; R02 |
| Response Outcome | M:1 to Insp_ResponseOutcomeObject; inverse disabled; native IsRequired FALSE | Conditional | NULL field default; H02/H03 sets UNANSWERED for new current Inspection answers then evaluates D01; other shared consumers remain NULL | Read only; current I02/R02 requires H03 evaluation; inverse disabled | H03 evaluates existing native fields. Native IsRequired FALSE avoids a mandatory change on unrelated or legacy answers. No new branch-confirmation control.. **Add**; internal `ResponseOutcome`; PF-054; D01 |

### 2.28 Question

**Internal name:** `CLF_QuestObject`. **Inheritance parent:** `CLF_QuestAbstractObject`. **Configuration:** Reuse existing object.

**Object ID:** 92628acf-dcc3-41c3-b23f-198d83cba0ef (E338). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_Quest_Detail; 7430f95c-185f-4f98-b493-f2672a01b99d |
| DefaultInventoryView | CLF_Quest_Inventory; f90ac76d-1588-48cd-abc3-9604cf59608f |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `AbsoluteOrder`, `Checklists`, `ChecklistType`, `DependsOn`, `ExistingSection`, `HasDependsOn`, `HelperChecklist`, `LastPublish`, `NbChecklists`, `PubQuestions`, `QuestionRef`, `References`, `TextReferences`, `UseExisting`, `UseReferences`, `VisDepNoAns`, `VisibleIfs`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Absolute Order | Float; preserve native numeric attributes | N | None (no field override exported); calculation `ExistingSection.Sort * 1000 + Order` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Copied by native mapping in §7. **Retain**; internal `AbsoluteOrder`; E1333 |
| Checklists | M:N to CLF_ChecklistObject; inverse Questions | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `Checklists`; E2417 |
| Checklist Type | M:1 to CLF_ChecklistTypeObject; inverse Questions | Y | `HelperChecklist.ChecklistType` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `ChecklistType`; E2603 |
| Depends On | M:1 to CLF_QuestObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `DependsOn`; E1479 |
| Existing Section | M:1 to CLF_SectionObject; inverse Questions | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `ExistingSection`; E332 |
| Has Depends On | Yes/No | N | None (no field override exported); calculation `DependsOn<>NULL` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `HasDependsOn`; E2942 |
| [Helper] Checklist | M:1 to CLF_ChecklistObject; inverse HelpeQuestions | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `HelperChecklist`; E1482 |
| Last Publish | Date/Time; timezone preserve native setting (not exported) | N | None (no field override exported); calculation `MAX(PubQuestions.DateCreated)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `LastPublish`; E2657 |
| # Checklists | Number (Integer) | N | None (no field override exported); calculation `COUNT(Checklists)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `NbChecklists`; E2931 |
| Published Questions | 1:M to CLF_PubQuestObject; inverse Question | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `PubQuestions`; E1966 |
| Question Code | Text, maximum 200 | Y | `CONCATENATE(ChecklistType.Reference, "q",  ChecklistType.NbQuestions+1)` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Copied by native mapping in §7. **Retain**; internal `QuestionRef`; E1326 |
| Tags | M:N to CLF_TagObject; inverse Questions | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `References`; E1743 |
| Text References | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `TextReferences`; E1177 |
| Use Existing Section? | Yes/No | N | true | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `UseExisting`; E1495 |
| Include References | Yes/No | N | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `UseReferences`; E1454 |
| Visible if no answer | Yes/No | Y | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Copied by native mapping in §7. **Retain**; internal `VisDepNoAns`; E1339 |
| Visible If | M:N to CLF_ChoiceObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Copied by native mapping in §7. **Retain**; internal `VisibleIfs`; E1328 |

### 2.29 Section Answer

**Internal name:** `CLF_SectionAnswerObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** b01defd7-dd92-4793-ab45-64a123159338 (E408). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_SectionAnswerObjectDetailView; 11307980-2e53-4b3a-9154-092219d3cc8a |
| DefaultInventoryView | CLF_SectionAnswerObjectInventoryView; e555f9a8-cd04-4490-a543-95100d702a0d |
| DisplayProperty | Section; 05a1e0c1-a568-4105-a03d-046579d262f7 |
| OrderProperty | Sort; 93f0dbeb-3165-41cd-95f7-3fbf28a52525 |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `CheckAnswerGUID`, `ChecklistAnswer`, `ChecklistAnswerId`, `QuestionAnswers`, `Section`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| [Helper] Checklist Answer GUID | GUID | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `CheckAnswerGUID`; E424 |
| Checklist Answer | M:1 to CLF_ChecklistAnswerObject; inverse SectAnswers | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `ChecklistAnswer`; E416 |
| Checklist Answer Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ChecklistAnswerId`; E580 |
| Question Answers | 1:M to CLF_QuestionAnswerObject; inverse SectionAnswer | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `QuestionAnswers`; E410 |
| Section | Text, maximum 255 | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `Section`; E422 |
| Sort | Float; preserve native numeric attributes | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `Sort`; E420 |

### 2.30 Section

**Internal name:** `CLF_SectionObject`. **Inheritance parent:** None. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** 6c774cf4-c380-4706-81ef-a656239fe8cf (E336). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_SectionObjectDetailView; e8a98d14-8761-44cd-ab0d-661f6d3b7e60 |
| DefaultInventoryView | CLF_SectionObjectInventoryView; 47cb253a-fcaa-40f9-ac44-7c16dd17cef7 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | Sort; 7f938904-382d-486b-9288-743eaf77c7a7 |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Checklist`, `Questions`, `SectionName`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Checklist | M:1 to CLF_ChecklistObject; inverse Sections | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Checklist`; E1489 |
| Questions | 1:M to CLF_QuestObject; inverse ExistingSection | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Questions`; E1072 |
| Section Name | Text, maximum 255; native IsRequired FALSE | Y | None (no field override exported) | Checklist author; at least one meaningful named section per checklist | Use existing Section and published SectionName/SectionSort mapping; no section-version redesign. **Modify**; internal `SectionName`; E1331; R02 |
| Sort | Float; preserve native numeric attributes | N | `INT(IFNULL(MAX(Checklist.Sections.Sort), 0)) + 1` (extracted; default) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `Sort`; E493 |

### 2.31 Single checklist

**Internal name:** `CLF_SinglechecklistObject`. **Inheritance parent:** `CLF_ChecklistAnswerObject`. **Configuration:** Reuse existing object.

**Object ID:** 3baadf79-b7a0-482b-8165-fa490a96bcae (E433). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_SingleChecklist_Detail; e95f18e6-5617-425b-b244-6919b1085ea2 |
| DefaultInventoryView | CLF_SingleChecklist_Inventory; ec9b769b-3057-46a5-968a-e07e72bc44f1 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.32 Sub-checklist

**Internal name:** `CLF_SubchecklistObject`. **Inheritance parent:** `CLF_ChecklistAnswerObject`. **Configuration:** Reuse existing object.

**Object ID:** 3f6970f2-408f-4bee-bdae-80f0db6ca83a (E450). **Abstract:** false. **Workflow:** true. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_Subchecklist_Detail; 2b2a1358-ced7-44da-b8a0-c8f8f29aa5c8 |
| DefaultInventoryView | CLF_Subchecklist_Inventory; bf3017fc-ec9f-48ea-83e4-2ab30360cb5d |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `StartCondition`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Start Condition | Yes/No | N | None (no field override exported); calculation `PersResponsibl<>NULL` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `StartCondition`; E2168 |

### 2.33 Tag

**Internal name:** `CLF_TagObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** 820903cc-cbc9-4198-834f-a80d2b78b20e (E1747). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_Tag_Detail; ebb8cd08-9901-401c-888a-7f20d2d0e1ba |
| DefaultInventoryView | CLF_Tag_Inventory; e60650ee-5b0d-4f22-9d6e-15f6d6c8ddbf |
| DisplayProperty | Name; a620a5c4-94ab-4a85-8866-661632e40602 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Name`, `Questions`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Name | Text, maximum 255 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E1901 |
| Questions | M:N to CLF_QuestObject; inverse References | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Questions`; E2111 |

### 2.34 CAR Abstract

**Internal name:** `ComplyFramework_CARAbstractObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** 9e02f3af-cb69-48f0-8206-dfbe8cb7d06c (E1064). **Abstract:** true. **Workflow:** false. **Location bound:** true. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Quality Comply Framework; 5d47f306-956a-4a9d-bdfd-fec0cedc6f12 |

**Directly declared fields:** None; declarations remain on the inheritance base.

### 2.35 Global App Settings

**Internal name:** `ConfgAppSetting_GlobAppSettingsObject`. **Inheritance parent:** `ConfgAppSetting_SpecAppSettingsObject`. **Configuration:** Reuse existing object.

**Object ID:** 73d6b091-b922-45ff-85ee-d92e8267971e (E1060). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | ConfgAppSetting_GlobAppSettingsObjectDetailView; 65a03240-b6dc-4335-ad17-5032d1387cbb |
| DefaultInventoryView | ConfgAppSetting_GlobAppSettingsObjectInventoryView; ac2b5cb6-526a-429a-988a-3563b39e7632 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Configuration Asset App Settings, By Summit EHSQ; 10ce06ca-c566-4fc4-b20b-ae21001df039 |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.36 Icon Asset

**Internal name:** `ConfgAppSetting_IconAssetObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** 51760767-f9a1-4930-a7d3-0580ea2f87fd (E300). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | ConfgAppSetting_IconAssetObjectDetailView; 60b2618d-53de-4c62-8f8e-e185babd0f5a |
| DefaultInventoryView | ConfgAppSetting_IconAssetObjectInventoryView; 5ce1df58-ee39-4f5a-b4f8-2c52ed962da8 |
| DisplayProperty | Name; a22cfea7-8790-4732-bf29-f00b5bb3986b |
| OrderProperty | Name; a22cfea7-8790-4732-bf29-f00b5bb3986b |
| Module | Configuration Asset App Settings, By Summit EHSQ; 10ce06ca-c566-4fc4-b20b-ae21001df039 |

**Directly declared fields:** `Code`, `Name`, `SVGCode`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, maximum 100 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Code`; E1971 |
| Name | Text, maximum 255 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E1142 |
| SVG Code | Text; preserve existing length (not exported) | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `SVGCode`; E1969 |

### 2.37 Instruction Text

**Internal name:** `ConfgAppSetting_InstructionTextObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** ccdcd5a5-82d8-4822-b2ac-703d41dc5d0d (E35). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | ConfgAppSetting_InstructionTextObjectDetailView; 47f7cd7b-914a-4408-bbba-45500cbe7307 |
| DefaultInventoryView | ConfgAppSetting_InstructionTextObjectInventoryView; 923204ab-cabb-4531-8913-02d01aacc3fc |
| DisplayProperty | DisplayField; 76d03708-d8ba-44a4-84f0-9775c3c222f1 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Configuration Asset App Settings, By Summit EHSQ; 10ce06ca-c566-4fc4-b20b-ae21001df039 |

**Directly declared fields:** `Application`, `DisplayField`, `Form`, `InstrTextHeader`, `InstructiText`, `InstruPanelCode`, `RecordNo`, `Stage`, `TemplaGenerator`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Application | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Application`; E2077 |
| Display Field | Text, maximum 250 | N | None (no field override exported); calculation `CONCATENATE("Instructional Text Panel - ", Application, " - ", Form, " - ", Stage)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `DisplayField`; E2070 |
| Form | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Form`; E346 |
| Instruction Text Header | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `InstrTextHeader`; E1673 |
| Instruction Text | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `InstructiText`; E1671 |
| Instruction Panel Code | Text; preserve existing length (not exported) | N | None (no field override exported); calculation `CONCATENATE(SUBSTITUTE(SUBSTITUTE(TemplaGenerator.HTMLTemplate,"HEADERTEXT",InstrTextHeader),"INSTRUCTIONTEXT",InstructiText), TemplaGenerator.CSSTemplate)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `InstruPanelCode`; E1661 |
| Record No. | AutoNumber | N | [Source E1115](../as-is/evidence.json); native value-generator XML retained | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `RecordNo`; E1115 |
| Stage | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Stage`; E2075 |
| Template Generator | M:1 to ConfgAppSetting_TPanelGeneratorObject; inverse InstructionPane | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `TemplaGenerator`; E1667 |

### 2.38 Person Responsible Option

**Internal name:** `ConfgAppSetting_PersRespOptionObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** b566862a-2640-4325-96ff-da5dc0ad6b68 (E1280). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | ConfgAppSetting_PersRespOptionObjectDetailView; 436b8228-f8ca-44c6-9a03-82b999ecd2ef |
| DefaultInventoryView | ConfgAppSetting_PersRespOptionObjectInventoryView; b1923e61-cf69-4e8b-9a42-4b4255fb92f9 |
| DisplayProperty | Name; 3d048eb1-a9fc-474a-b13e-d0b62b80643c |
| OrderProperty | Sort; f1354a4e-7e4d-43cd-ade1-773d4b4f87e7 |
| Module | Configuration Asset App Settings, By Summit EHSQ; 10ce06ca-c566-4fc4-b20b-ae21001df039 |

**Directly declared fields:** `Active`, `Name`, `RecordNo`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Active? | Yes/No | N | true | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Active`; E2352 |
| Name | Text, maximum 255 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E1245 |
| Record No. | AutoNumber | N | [Source E2025](../as-is/evidence.json); native value-generator XML retained | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `RecordNo`; E2025 |
| Sort | Number (Integer) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Sort`; E2273 |

### 2.39 Abstract Application Specific App Settings

**Internal name:** `ConfgAppSetting_SpecAppSettingsObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** 08f1bba7-28ca-461a-96d7-d2f0e2202128 (E298). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | ConfgAppSetting_SpecAppSettingsObjectDetailView; fae736f7-8f6a-4575-9cdb-4e2f6f216e7e |
| DefaultInventoryView | ConfgAppSetting_SpecAppSettingsObjectInventoryView; 49e6b03f-af08-4341-a794-d1f29b4cf785 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Configuration Asset App Settings, By Summit EHSQ; 10ce06ca-c566-4fc4-b20b-ae21001df039 |

**Directly declared fields:** `CalIconSel`, `ClocIconGeneral`, `ClockIcon`, `DueDateIcon`, `DueIconWorkflow`, `LoStructureIcon`, `Name`, `PerIconWorkflow`, `ResIconWorkflow`, `StaIconWorkflow`, `StruIconGeneral`, `WrkflowStaIcon`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Calendar Icon | M:1 to ConfgAppSetting_IconAssetObject; inverse disabled | N | Fixed record 523a9363-e8c8-44c6-b261-3a7888c62802 (label not exported; G03 if changed) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `CalIconSel`; E295 |
| Clock Icon - General | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ClocIconGeneral`; E2059 |
| Clock Icon | M:1 to ConfgAppSetting_IconAssetObject; inverse disabled | N | Fixed record 2a9224c2-99f4-45d0-baff-69027620cece (label not exported; G03 if changed) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `ClockIcon`; E797 |
| Due Date Icon | M:1 to ConfgAppSetting_IconAssetObject; inverse disabled | N | Fixed record 0ac12a83-4d68-4ae3-aa73-c749b8e5f60b (label not exported; G03 if changed) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `DueDateIcon`; E2063 |
| Due Date Icon - Workflow | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `DueIconWorkflow`; E1689 |
| Location Structure Icon | M:1 to ConfgAppSetting_IconAssetObject; inverse disabled | N | Fixed record ce452aee-3ce3-46f1-91ff-8859295f75d8 (label not exported; G03 if changed) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `LoStructureIcon`; E1705 |
| Name | Text, maximum 255 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E2066 |
| Person Responsible Icon - Workflow | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PerIconWorkflow`; E2057 |
| Person Responsible Icon - Workflow | M:1 to ConfgAppSetting_IconAssetObject; inverse disabled | N | Fixed record 02b89698-7bdf-46ce-8e4d-e3560e549d1d (label not exported; G03 if changed) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `ResIconWorkflow`; E2054 |
| Workflow Stage Icon - Workflow | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `StaIconWorkflow`; E1175 |
| Location Structure Icon - General | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `StruIconGeneral`; E2061 |
| Workflow Stage Icon - Workflow | M:1 to ConfgAppSetting_IconAssetObject; inverse disabled | N | Fixed record b7206439-2d5c-4ac9-977c-4f4765b12df4 (label not exported; G03 if changed) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `WrkflowStaIcon`; E2051 |

### 2.40 Instruction Text Panel Generator

**Internal name:** `ConfgAppSetting_TPanelGeneratorObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** 8884bd44-4951-4dbf-9c7f-d9b574946afd (E126). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | ConfgAppSetting_TPanelGeneratorObjectDetailView; 88ed49db-928b-4fe4-9bbb-c93bb373c0c3 |
| DefaultInventoryView | ConfgAppSetting_TPanelGeneratorObjectInventoryView; 561ae756-8332-4fb6-b270-0db132794b15 |
| DisplayProperty | TemplateName; 48f1894c-a7f7-496d-a298-b13c2c43b872 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Configuration Asset App Settings, By Summit EHSQ; 10ce06ca-c566-4fc4-b20b-ae21001df039 |

**Directly declared fields:** `CSSTemplate`, `HTMLTemplate`, `InstructionPane`, `RecordNo`, `TemplateName`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| CSS Template | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CSSTemplate`; E997 |
| HTML Template | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `HTMLTemplate`; E1291 |
| Instruction Panels | 1:M to ConfgAppSetting_InstructionTextObject; inverse TemplaGenerator | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `InstructionPane`; E2375 |
| Record No. | AutoNumber | N | [Source E1171](../as-is/evidence.json); native value-generator XML retained | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `RecordNo`; E1171 |
| Template Name | Text, maximum 250 | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `TemplateName`; E2569 |

### 2.41 Abstract Evidence

**Internal name:** `EventFwk_AbsEvidenceObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** 92a1b764-06f7-4556-8e6a-1f72be0b1c7c (E1808). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Event Framework; a6d611a6-86ad-4f84-b740-849b97cc1595 |

**Directly declared fields:** None; declarations remain on the inheritance base.

### 2.42 CAPA

**Internal name:** `EventFwk_CAPAObject`. **Inheritance parent:** `FragApplication_AbCorrectivActiObject`. **Configuration:** Reuse external interface.

**Object ID:** 11b88061-922a-4690-86df-61f1b766b34a (E138). **Abstract:** false. **Workflow:** true. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Event Framework; a6d611a6-86ad-4f84-b740-849b97cc1595 |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.43 Event Action Plan

**Internal name:** `EventFwk_EventActionPlanObject`. **Inheritance parent:** `ActionPlans_ActionPlanAbsObject`. **Configuration:** Reuse external interface.

**Object ID:** 684c77dc-7d3c-4387-98ca-d93cf8b6ae16 (E2129). **Abstract:** false. **Workflow:** true. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Event Framework; a6d611a6-86ad-4f84-b740-849b97cc1595 |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.44 Event Cost

**Internal name:** `EventFwk_EventCostObject`. **Inheritance parent:** `FragApplication_AbstractCostObject`. **Configuration:** Reuse external interface.

**Object ID:** b2ca1b26-74a4-4a99-aa8c-fac02454835b (E1552). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Event Framework; a6d611a6-86ad-4f84-b740-849b97cc1595 |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.45 Event

**Internal name:** `EventFwk_EventObject`. **Inheritance parent:** `EventFwk_EventScenarioObject`. **Configuration:** Reuse existing object.

**Object ID:** 3979d543-6df2-46a1-a26e-293cd7978bdc (E85). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | EventFwk_EventObjectDetailView; 6c0ed7d5-af51-4c48-bc52-07d6a53536c5 |
| DefaultInventoryView | EventFwk_EventObjectInventoryView; 2c223943-5e20-44ef-8797-01a4a32aafe2 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Event Framework; a6d611a6-86ad-4f84-b740-849b97cc1595 |

**Directly declared fields:** `AbsCorActPlan`, `AdditionalCost`, `CAPAs`, `CAREvent`, `CauseAnalysis`, `CorrectiActions`, `Costs`, `Date`, `DateApproved`, `DateOnly`, `DateReported`, `DateUserEntered`, `DatInvestigated`, `EndDate`, `EstimatedCost`, `EventActionPlan`, `EventType`, `Evidence`, `FinalAppNotes`, `FinalApprover`, `ImmediateAction`, `InvestDueDate`, `Investigator`, `InvestResults`, `LessonsLearned`, `NBCAPAs`, `NBOpenedCAPAs`, `ParentEvent`, `ReportedBy`, `ReviewNotes`, `Risk`, `RootCauses`, `Severity`, `Subs`, `Summary`, `SuspectedCause`, `TeamLeader`, `TeamMembers`, `TotalCost`, `TypeOfEvent`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Action Plan | 1:M to FragApplication_AbCorrectivActiObject; inverse EventRelated | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `AbsCorActPlan`; E732 |
| Additional Cost | Float; preserve native numeric attributes | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `AdditionalCost`; E1905 |
| CAPAs | 1:M to EventFwk_CAPAObject; inverse Event | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CAPAs`; E134 |
| CAREvent | M:N to ComplyFramework_CARAbstractObject; inverse RelatedEvents | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CAREvent`; E2632 |
| Cause Analysis | 1:M to CauseAnalysis_CauseAnalysisObject; inverse Event | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CauseAnalysis`; E2411 |
| Effectiveness of Corrective Actions | Text, maximum 1000 | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CorrectiActions`; E2354 |
| Costs | 1:M to EventFwk_EventCostObject; inverse Event | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Costs`; E1712 |
| Date | Date/Time; timezone enabled | Y | [Source E2434](../as-is/evidence.json); native value-generator XML retained | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Date`; E2434 |
| Date Approved | Date/Time; timezone preserve native setting (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `DateApproved`; E2653 |
| Date (only) | Date | N | None (no field override exported); calculation `IFERROR(DATE(YEAR(DateUserEntered),MONTH(DateUserEntered),DAY(DateUserEntered)), NULL)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `DateOnly`; E1508 |
| Date Reported | Date/Time; timezone disabled | N | `NOW` (extracted; default) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `DateReported`; E2639 |
| Date User Entered | Date/Time; timezone disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `DateUserEntered`; E1511 |
| Date Investigated | Date/Time; timezone disabled | N | `NOW()` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `DatInvestigated`; E280 |
| End Date | Date/Time; timezone preserve native setting (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `EndDate`; E83 |
| Estimated Cost | Float; preserve native numeric attributes | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `EstimatedCost`; E2277 |
| Event Action Plans | 1:M to EventFwk_EventActionPlanObject; inverse RelatedEvent | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `EventActionPlan`; E1716 |
| Event Type | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `EventType`; E122 |
| Evidence | 1:M to EventFwk_AbsEvidenceObject; inverse Event | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Evidence`; E1804 |
| Final Approver Notes | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `FinalAppNotes`; E2336 |
| Final Approver | M:1 to SysEmployeeEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `FinalApprover`; E2645 |
| Immediate Action | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ImmediateAction`; E2651 |
| Investigation Due Date | Date | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `InvestDueDate`; E518 |
| Investigator | M:1 to SysEmployeeEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Investigator`; E2648 |
| Investigation Results | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `InvestResults`; E348 |
| Lessons Learned | 1:M to EventFwk_LessonLearnedObject; inverse RelatedEvent | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `LessonsLearned`; E2396 |
| # CAPAs | Number (Integer) | N | None (no field override exported); calculation `COUNT(CAPAs)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NBCAPAs`; E202 |
| # Opened CAPAs | Number (Integer) | N | None (no field override exported); calculation `COUNT(FILTER(CAPAs.IsCompleted, "=", FALSE))` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NBOpenedCAPAs`; E1926 |
| Parent Event | M:1 to EventFwk_EventObject; inverse Subs | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ParentEvent`; E1530 |
| Reported By | M:1 to SysEmployeeEntity; inverse disabled | N | `CURRENTUSER()` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `ReportedBy`; E2636 |
| Review Notes | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ReviewNotes`; E2641 |
| Risk | M:1 to RiskFmk_OpRiskObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Risk`; E2598 |
| Root Causes | 1:M to CauseAnalysis_RootCauseObject; inverse Event | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `RootCauses`; E2338 |
| Severity | M:1 to EventFwk_SeverityObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Severity`; E1658 |
| Sub Events | 1:M to EventFwk_EventObject; inverse ParentEvent | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Subs`; E2608 |
| Summary | Text, maximum 1000 | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Summary`; E97 |
| Suspected Cause | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `SuspectedCause`; E2655 |
| Team Leader | M:1 to SysEmployeeEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `TeamLeader`; E1554 |
| Team Members | 1:M to EventFwk_TeamMemberObject; inverse Event | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `TeamMembers`; E1179 |
| Total Cost | Float; preserve native numeric attributes | N | None (no field override exported); calculation `SUM(Costs.ConvertedCost) + SUM(EventActionPlan.ToCostofActions)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `TotalCost`; E1708 |
| Event Type | M:1 to EventFwk_EventTypeObject; inverse disabled | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `TypeOfEvent`; E1144 |

### 2.46 Event Scenario

**Internal name:** `EventFwk_EventScenarioObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** c0d0d372-c03c-46cd-9f51-cdd28b620177 (E342). **Abstract:** false. **Workflow:** false. **Location bound:** true. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | EventFwk_EventScenarioObjectDetailView; 2d43aff4-a4e3-4b47-988c-411f2b2677a5 |
| DefaultInventoryView | EventFwk_EventScenarioObjectInventoryView; f71f6d6f-d631-46db-aa74-ac6da5e451ea |
| DisplayProperty | Name; 93ec7652-3348-4f98-b794-ac890ef7d602 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Event Framework; a6d611a6-86ad-4f84-b740-849b97cc1595 |

**Directly declared fields:** `Description`, `Location`, `Name`, `RecordNo`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Description | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Description`; E2486 |
| Location | M:1 to SysLocationEntity; inverse EventFwkEventScenarioObject | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Location`; E1890 |
| Name | Text, maximum 250 | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E987 |
| Record No. | AutoNumber | N | [Source E697](../as-is/evidence.json); native value-generator XML retained | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `RecordNo`; E697 |

### 2.47 Event Type

**Internal name:** `EventFwk_EventTypeObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** 33cdd92d-1fc4-4a8a-9cbe-48e6ffb26a13 (E553). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Event Framework; a6d611a6-86ad-4f84-b740-849b97cc1595 |

**Directly declared fields:** None; declarations remain on the inheritance base.

### 2.48 Lesson Learned

**Internal name:** `EventFwk_LessonLearnedObject`. **Inheritance parent:** `ActionPlans_GlobActPlanAbsObject`. **Configuration:** Reuse external interface.

**Object ID:** 63e2eb5b-3f7b-4dd3-a295-9f4f9f712cef (E1749). **Abstract:** false. **Workflow:** true. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Event Framework; a6d611a6-86ad-4f84-b740-849b97cc1595 |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.49 Nonconformance Abstract

**Internal name:** `EventFwk_NonConfAbstractObject`. **Inheritance parent:** `EventFwk_EventObject`. **Configuration:** Reuse external interface.

**Object ID:** ac4266ea-f1d6-4bb3-aca7-31e1585dd540 (E2162). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Event Framework; a6d611a6-86ad-4f84-b740-849b97cc1595 |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.50 Severity

**Internal name:** `EventFwk_SeverityObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** 412062e5-1181-47a1-83c0-91d0e52a2bd6 (E293). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Event Framework; a6d611a6-86ad-4f84-b740-849b97cc1595 |

**Directly declared fields:** None; declarations remain on the inheritance base.

### 2.51 Team Member

**Internal name:** `EventFwk_TeamMemberObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** 88f9a145-d866-4be9-961a-a741789ec394 (E212). **Abstract:** false. **Workflow:** false. **Location bound:** true. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Event Framework; a6d611a6-86ad-4f84-b740-849b97cc1595 |

**Directly declared fields:** None; declarations remain on the inheritance base.

### 2.52 VOC Abstract

**Internal name:** `EventFwk_VOCAbstractObject`. **Inheritance parent:** `EventFwk_EventObject`. **Configuration:** Reuse external interface.

**Object ID:** eb90c958-cbcf-4f4a-89ba-2e0bedea4770 (E1497). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Event Framework; a6d611a6-86ad-4f84-b740-849b97cc1595 |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.53 Abstract Corrective Action

**Internal name:** `FragApplication_AbCorrectivActiObject`. **Inheritance parent:** None. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** ffaeb11a-e798-47ed-a3fb-1336a82876dd (E185). **Abstract:** true. **Workflow:** false. **Location bound:** true. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | FragApplication_AbCorrectivActiObjectDetailView; 2836d9b8-1390-4aa5-a6d7-4f240b6cae5f |
| DefaultInventoryView | AbstractCorrectiveAction_Inventory; 64598cde-0b54-41c0-b84d-0204ab0eeb01 |
| DisplayProperty | CPARActionReq; aca0bcb5-e539-461c-ac74-12d92a944200 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Fragment Application; 1df3c2f1-8a0c-4ec6-80d7-15a291933dc9 |

**Directly declared fields:** `ActionNo`, `ActionPlanType`, `ActPlanSysType`, `ActualCost`, `CAR`, `CheckListAnsAct`, `CompletedBy`, `CompletionDate`, `CompletionNotes`, `Costs`, `CPARActionReq`, `CPARTypeID`, `DueDate`, `EventRelated`, `HelperQPType`, `HelpIsCompQP`, `IsCompleted`, `Location`, `ProgressNotes`, `ProjRevActionPlansId`, `ReactionPlan`, `RecoAction`, `RelatedQstions`, `ReportedBy`, `ReportedOn`, `SourceObject`, `SourceRecordId`, `ToCostofActions`, `Workflow`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Action No. | AutoNumber | N | None (no field override exported) | Read only; preserve existing view/permission rules | Native autonumber generation. **Retain**; internal `ActionNo`; E1077 |
| Action Plan Type | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ActionPlanType`; E1422 |
| Action Plan System Type | M:1 to MetObjectEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ActPlanSysType`; E1402 |
| Actual Cost | Float; preserve native numeric attributes | N | None (no field override exported); calculation `SUM(Costs.ConvertedCost)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `ActualCost`; E1384 |
| CAR Abstract | M:1 to ComplyFramework_CARAbstractObject; inverse ActionPlan | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CAR`; E1387 |
| Related to | M:1 to CLF_ChecklistAnswerObject; inverse ActionPlanAbst; native IsRequired FALSE | Conditional | `IFNULL(EventRelated:CLF_FindingObject.ChecklistAnswer, RelatedQstions.ChecklistAnswer)` (extracted; default) | Required saved Inspection source for this subtype; explicitly supplied on external-report action; read only after issue; other shared action consumers retain their original rules | Existing product supplies the inspection relationship from launch context and E2096/E2929 helper behavior; no source-link configuration is assigned. **Modify**; internal `CheckListAnsAct`; E549; R06 |
| Completed By | M:1 to SysEmployeeEntity; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required for immediate entry/completion; default current user only when empty; actual performer may be corrected before save; other shared action consumers retain their original rules | F05 TRUE branch defaults an empty CompletedBy to CURRENTUSER; E3088/E2518 check the resolved performer before completion. **Modify**; internal `CompletedBy`; E1424; R06 |
| Completion Date | Date; native IsRequired FALSE | Conditional | None (no field override exported) | Required for immediate entry/completion; default TODAY only when empty; no future date; other shared action consumers retain their original rules | F05 TRUE branch defaults an empty CompletionDate to TODAY; E3088/E2518 reject a future date before completion. **Modify**; internal `CompletionDate`; E800; R06 |
| Completion Notes | Text; preserve existing length (not exported); native IsRequired FALSE | Conditional | None (no field override exported) | Required nonblank for immediate entry and ordinary completion; other shared action consumers retain their original rules | The existing F05 TRUE branch already requires notes. E3088 adds a pre-completion nonblank check and E2518 moves/strengthens its existing check before completing. **Modify**; internal `CompletionNotes`; E1439; R06 |
| Costs | 1:M to FragApplication_ActionCostObject; inverse Action | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Costs`; E1097 |
| Action Required | Text, maximum 255; native IsRequired FALSE | Conditional | None (no field override exported) | Required for both Inspection Action Plan entry modes; author editable before issue; other shared action consumers retain their original rules | F05 modifies the existing E18 TRUE branch to show/require CPARActionReq and remove it from HideAction, SetNonMandatoryAction and ClearValueAction. **Modify**; internal `CPARActionReq`; E200; R06 |
| Type | M:1 to FragApplication_CorrectivePreveObject; inverse disabled; native IsRequired FALSE | Conditional | Fixed record d0de0e2b-dde6-4f41-914c-da08371636a0 (label not exported; G03 if changed) | Hidden/read only on Inspection Action Plan; fixed to actual G03 Corrective record; other shared action consumers retain their original rules | Retain existing default if already Corrective; subtype override only if needed. **Modify**; internal `CPARTypeID`; E1410; R06 |
| Due Date | Date; native IsRequired FALSE | Conditional | None (no field override exported) | Required for outstanding entry; hidden/nonmandatory for initial already-completed entry; other shared action consumers retain their original rules | Use native task due date; no requirement for inspection to stay open. **Modify**; internal `DueDate`; E1427; R06 |
| Related Event | M:1 to EventFwk_EventObject; inverse AbsCorActPlan | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `EventRelated`; E582 |
| [Helper] FMEA Type | Text; preserve existing length (not exported) | N | `IF(ReactionPlan<>NULL, "QP_ReactionPlanObject",(IF(RecoAction<>NULL,"QP_RecoActionObject","NULL")))` (extracted; default) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `HelperQPType`; E1418 |
| (Helper) Is Completed (FMEA) | Text; preserve existing length (not exported) | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `HelpIsCompQP`; E183 |
| Is Completed | Yes/No | N | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `IsCompleted`; E1382 |
| Location | M:1 to SysLocationEntity; inverse FragApplicationAbCorrectivActiObject | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Location`; E1973 |
| Progress Notes | 1:M to FragApplication_PrgressNotesObject; inverse AbCorrectivActi | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ProgressNotes`; E1396 |
| Project Revision Action Plans Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ProjRevActionPlansId`; E1985 |
| Reaction Plan | M:1 to QP_ReactionPlanObject; inverse ActionPlan | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ReactionPlan`; E1372 |
| Recommended Action | M:1 to QP_RecoActionObject; inverse ActionPlan | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `RecoAction`; E196 |
| Related Questions | M:N to CLF_QuestionAnswerObject; inverse ActionPlans; native IsRequired FALSE | Conditional | None (no field override exported) | Use existing native M:N response links; optional for external/general actions, required when launched from a response; selected answers must share inspection; other shared action consumers retain their original rules | Existing product supplies same-inspection response selection and E1319 synchronization; no response-link configuration is assigned. **Modify**; internal `RelatedQstions`; E719; R06 |
| Reported By | M:1 to SysEmployeeEntity; inverse disabled | N | `CreatedBy` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `ReportedBy`; E1436 |
| Reported On | Date | N | `DateCreated` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `ReportedOn`; E1267 |
| Source Object | M:1 to MetObjectEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `SourceObject`; E1413 |
| Source Record Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `SourceRecordId`; E1416 |
| Total Actual Cost | Float; preserve native numeric attributes | N | None (no field override exported); calculation `SUM(Costs.ConvertedCost)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `ToCostofActions`; E1369 |
| Workflow | M:1 to SysWorkflowInstanceEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Workflow`; E191 |

### 2.54 Abstract Cost

**Internal name:** `FragApplication_AbstractCostObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** b14ca608-e356-4b60-b9ec-3db8e6e208e0 (E728). **Abstract:** true. **Workflow:** false. **Location bound:** true. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Fragment Application; 1df3c2f1-8a0c-4ec6-80d7-15a291933dc9 |

**Directly declared fields:** `ConvertedCost`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Actual Cost (USD) | Float; preserve native numeric attributes | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `ConvertedCost`; E1720 |

### 2.55 Action Cost

**Internal name:** `FragApplication_ActionCostObject`. **Inheritance parent:** `FragApplication_AbstractCostObject`. **Configuration:** Reuse external interface.

**Object ID:** 9121f9af-5120-47d8-97e8-a04ea1ee6ce8 (E1101). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Fragment Application; 1df3c2f1-8a0c-4ec6-80d7-15a291933dc9 |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.56 Color

**Internal name:** `FragApplication_ColorObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** dc9d451a-c909-4a8d-8296-f0cf88971f06 (E1010). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | FragApplication_Color_Detail; 130c41d9-dbc5-43d9-9262-ac61f018edc5 |
| DefaultInventoryView | FragApplication_Color_Select; bea48268-3d0a-4c6b-a56d-f50d1feb5007 |
| DisplayProperty | Caption; 767028b1-5270-472d-a547-3a1f5d57fd3b |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Fragment Application; 1df3c2f1-8a0c-4ec6-80d7-15a291933dc9 |

**Directly declared fields:** `Caption`, `TextColor`, `Value`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Caption | Text, maximum 200 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Caption`; E1123 |
| Text Color | M:1 to FragApplication_ColorObject; inverse disabled | N | Fixed record 2917ee4e-4752-4062-9c5e-e7b6b8ab01ee (label not exported; G03 if changed) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `TextColor`; E1127 |
| Value | Text, maximum 20 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Value`; E1008 |

### 2.57 Abstract Corrective Action Corrective/Preventive

**Internal name:** `FragApplication_CorrectivePreveObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** 4ede3636-6468-4b3c-bbc7-c5a34250e6bd (E1916). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Fragment Application; 1df3c2f1-8a0c-4ec6-80d7-15a291933dc9 |

**Directly declared fields:** None; declarations remain on the inheritance base.

### 2.58 Equipment

**Internal name:** `FragApplication_EquipmentObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** d05bf7ff-7ab2-47f3-96d9-97a1a328d9ce (E143). **Abstract:** false. **Workflow:** false. **Location bound:** true. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Fragment Application; 1df3c2f1-8a0c-4ec6-80d7-15a291933dc9 |

**Directly declared fields:** `Name`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Equipment Name | Text, maximum 250 | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E2002 |

### 2.59 Progress Notes

**Internal name:** `FragApplication_PrgressNotesObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** 7d1fa155-4b0e-4552-9a6a-4e1c2b30e941 (E1838). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Fragment Application; 1df3c2f1-8a0c-4ec6-80d7-15a291933dc9 |

**Directly declared fields:** None; declarations remain on the inheritance base.

### 2.60 Inspection - Type of Review

**Internal name:** `Insp_ActTypeofReviewObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** 121d71e4-ed81-4f6e-8d36-c76d3aaf9f2d (E1844). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | Index; 79013a49-30ea-4162-98f5-23655edfedac |
| Module | Inspections; 552ac529-b2e5-4597-a16a-725c46ab992b |

**Directly declared fields:** `Caption`, `Index`, `Value`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Caption | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Caption`; E2320 |
| Index | Integer | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `Index`; E2125 |
| Value | Text; preserve existing length (not exported) | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Value`; E2346 |

### 2.61 Inspection

**Internal name:** `Insp_EquipInspectionObject`. **Inheritance parent:** `Insp_InspectionAbsObject`. **Configuration:** Reuse identity; configure listed fields/parameters.

**Object ID:** 4266a8f5-e53c-4b81-921c-540913945dfd (E37). **Abstract:** false. **Workflow:** true. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Object parameter | Target value |
| --- | --- |
| IsAuditEnabled | true |

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | Insp_EquipInspection_Detail; 3fc38fc7-e0df-4a6e-aeb1-97e890448c48 |
| DefaultInventoryView | Insp_EquipInspectionObjectInventoryView; 684af9b0-e14c-4c23-9677-4ba154ec0844 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Inspections; 552ac529-b2e5-4597-a16a-725c46ab992b |

**Directly declared fields:** `CommetoReviewer`, `CommtoReviewer2`, `CreateMode`, `Equipment`, `EquipmentTxt`, `FApprovalFields`, `HelpeIsComplete`, `HelperLocatio2`, `HelpErrorMes`, `Id`, `IPCreate`, `IPDraft`, `IPInProgress`, `IPReview`, `IPReview2`, `LNoticeonCreate`, `NotifiDate`, `ReleActionPlans`, `Reviewer`, `SApprovalFields`, `Scope`, `ExternalParty`, `PerformedOn`, `SubmittedAt`, `AcceptedAt`, `OverallOutcome`, `ActionClassification`, `OperationalResource`, `Attachments`, `ExternalInspectionReport`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Comments to Reviewer | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CommetoReviewer`; E2630 |
| Comments to Reviewer 2 | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CommtoReviewer2`; E1360 |
| CreateMode | Yes/No | N | true | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `CreateMode`; E365 |
| Equipment | M:1 to FragApplication_EquipmentObject; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required when TypeOfInspec.EquipmentList=TRUE and ELOptions=G03 Lookup record; active permitted inventory; hidden/null in Off/Text | H05 validates; G05 required before enabling inventory lookup. No equipment-mode copy.. **Modify**; internal `Equipment`; E1543; R05 |
| Equipment | Text; preserve existing length (not exported); native IsRequired FALSE | Conditional | None (no field override exported) | Required when EquipmentList=TRUE and ELOptions=G03 Text record; hidden/null in Off/Lookup | H05 validates exclusivity; no arbitrary new maximum or shared equipment integration. **Modify**; internal `EquipmentTxt`; E2913; R05 |
| [Helper] Show RO First Approval Fields | Number (Integer) | N | 0 | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `FApprovalFields`; E1302 |
| [Helper] Is Complete | Number (Integer) | N | None (no field override exported); calculation `IF(CompletedOn<>NULL, 1, 0)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `HelpeIsComplete`; E1039 |
| [Helper] Location | M:1 to SysLocationEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `HelperLocatio2`; E1260 |
| [Helper] Error Message | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `HelpErrorMes`; E1920 |
| Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Id`; E2014 |
| Instruction Panel - Create | M:1 to ConfgAppSetting_InstructionTextObject; inverse disabled | N | Fixed record f2fc8941-171e-448d-8bc3-95efcc02d037 (label not exported; G03 if changed) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `IPCreate`; E145 |
| Instruction Panel - Draft | M:1 to ConfgAppSetting_InstructionTextObject; inverse disabled | N | Fixed record ac515d70-e607-4cf2-bc42-eeb232e532e9 (label not exported; G03 if changed) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `IPDraft`; E2139 |
| Instruction Panel - In Progress | M:1 to ConfgAppSetting_InstructionTextObject; inverse disabled | N | Fixed record ec8f5d0f-3a55-406a-a0b2-7cfa4f833b02 (label not exported; G03 if changed) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `IPInProgress`; E1139 |
| Instruction Panel - Review | M:1 to ConfgAppSetting_InstructionTextObject; inverse disabled | N | Fixed record 01977bca-daf0-4a7b-8f9f-02da0b94083d (label not exported; G03 if changed) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `IPReview`; E2926 |
| Instruction Panel - Second Review | M:1 to ConfgAppSetting_InstructionTextObject; inverse disabled | N | Fixed record 976cb8d4-8e8e-4e9b-a335-7fadc1af3bd7 (label not exported; G03 if changed) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `IPReview2`; E32 |
| [Helper] Dist List Notice on Create | Text; preserve existing length (not exported) | N | Before adding users to the Distribution List of this Inspection, please click the Continue button. | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `LNoticeonCreate`; E2911 |
| [Helper] Target Date for Notifications | Date | N | None (no field override exported); calculation `Workflow.DueDate` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NotifiDate`; E1929 |
| [Helper] Release Action Plans | Yes/No; native IsRequired FALSE | N | false | Read only; no manual override | I02/I03/I04 set TRUE only on final acceptance, retaining the native release point for outstanding actions. **Modify**; internal `ReleActionPlans`; E1471; R06 |
| Reviewer | M:1 to SysEmployeeEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Reviewer`; E2300 |
| [Helper] Show RO Second Approval Fields | Number (Integer) | N | 0 | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `SApprovalFields`; E2131 |
| Scope | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Scope`; E780 |
| External Party | Text maximum 255; native IsRequired FALSE | Conditional | NULL | Inspector/record owner in Draft or In Progress; required at submission when TypeOfInspec.SourceMode.Code=EXTERNAL; hidden/null for INTERNAL | I02 validates; locks with accepted inspection. **Add**; internal `ExternalParty`; PF-042; R01, R04 |
| Performed On | Date; calendar date; no timezone conversion; native IsRequired FALSE | Conditional | NULL | Inspector/record owner; required at submission for INTERNAL and EXTERNAL; actual third-party date for EXTERNAL | I02 validates presence; Date field distinct from existing InspectionDate due date. **Add**; internal `PerformedOn`; PF-043; R01, R04 |
| Submitted At | Date/Time with timezone enabled; native IsRequired FALSE | N | NULL | Read only | I02 stamps server NOW after validation; earlier submission cycles retained in native workflow history. **Add**; internal `SubmittedAt`; PF-044; R01, R04 |
| Accepted At | Date/Time with timezone enabled; native IsRequired FALSE | N | NULL | Read only | I02/I03/I04 stamp server NOW immediately before successful final completion. **Add**; internal `AcceptedAt`; PF-045; R01, R04 |
| Overall Outcome | M:1 to Insp_OutcomeObject; inverse disabled; native IsRequired FALSE | Conditional | NOT_ASSESSED on new current-process inspections; legacy NULL retained | Read only; required when current I02/I03/I04 assigns result; inverse disabled | H03/I02/I03/I04 assign per D01; native IsRequired FALSE avoids blocking legacy records. No numeric score.. **Add**; internal `OverallOutcome`; PF-046; D01 |
| Inspection Classification | M:1 to Insp_ClassificationObject; inverse disabled; native IsRequired FALSE | Conditional | IN_PROGRESS on new current-process inspections; legacy NULL retained until H07 applies | Read only; H07 supplies the classification when current process operates; inverse disabled | H07 assigns D02; native IsRequired FALSE. No forced historic classification backfill.. **Add**; internal `ActionClassification`; PF-047; D02 |
| Operational Resource | M:1 to Shared_OperationalResource; inverse disabled; native IsRequired FALSE | N | NULL | Conditional scope G05: optional active resource for Location before evidence exists; hide if no approved enterprise binding | Use supplied shared authority; no local object and no historical label/technology copy. **Add**; internal `OperationalResource`; PF-048; R05 |
| Attachments | Native attachment collection; native storage/owner ID binding unresolved P-07; native IsRequired Native panel; validate collection through R01/R02 | Conditional | None | Optional native evidence collection; editable in Draft/In Progress, read only in review/after completion | General photographs/files use native attachment ownership under G07. This collection does not satisfy the ExternalInspectionReport requirement.. **Add**; internal `Attachments`; PF-051; R01 |
| External Inspection Report | File; single-value native File field (zero or one file); native IsRequired FALSE | Conditional | NULL | When TypeOfInspec.SourceMode.Code=EXTERNAL, display in the External Inspection Report section in place of the Question Answer grid. Inspector/record owner may upload or replace one file in Draft/InspectioninProgress, including returned work; reviewers/accepted records read only. INTERNAL or legacy NULL source: hide section/field and make nonmandatory; retain any already stored value. Native IsRequired FALSE allows incomplete ordinary Save. | R01/I02 requires this field to contain exactly one successfully uploaded, server-accessible file before any forward transition out of InspectioninProgress for EXTERNAL. Validate before timestamps, notices or stage/completion changes; pending/failed upload or another attachment does not satisfy it. Ordinary Draft/InProgress Save may omit it. I03/I04 recheck before approval. Native file type identity, owner/upload-completion, replacement and access/mobile settings are supplied through G07; no custom File object or report-designation relationship. Output uses this file as the externally provided report, separately from generated portable records.. **Add**; internal `ExternalInspectionReport`; USR-EXTERNAL-REPORT-FILE; R01 |

### 2.62 Equipment List Option

**Internal name:** `Insp_EquipListOptionObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** db312533-2245-4dab-9ffa-7c2d5c254d73 (E616). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | Insp_EquipListOptionObjectDetailView; 113c9105-3589-4a70-bd44-748648bb43b4 |
| DefaultInventoryView | Insp_EquipListOptionObjectInventoryView; 099e0577-49dd-4ecb-888e-537cd6a73552 |
| DisplayProperty | Name; 6f81610e-f34b-4f5e-ab19-e94823fd4987 |
| OrderProperty | Sort; 1334d5cc-ae35-47e4-95b9-b704fba57e25 |
| Module | Inspections; 552ac529-b2e5-4597-a16a-725c46ab992b |

**Directly declared fields:** `Active`, `Name`, `RecordNo`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Active? | Yes/No | N | true | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Active`; E1810 |
| Name | Text, maximum 255 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E2422 |
| Record No. | AutoNumber | N | [Source E2367](../as-is/evidence.json); native value-generator XML retained | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `RecordNo`; E2367 |
| Sort | Number (Integer) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Sort`; E2344 |

### 2.63 Inspection Abstract

**Internal name:** `Insp_InspectionAbsObject`. **Inheritance parent:** `CLF_ChecklistAnswerObject`. **Configuration:** Reuse identity; configure listed fields/parameters.

**Object ID:** 8c33cf5c-67fd-4cca-8703-96ec39efff81 (E106). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Object parameter | Target value |
| --- | --- |
| IsAuditEnabled | true |

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | Insp_InspectionAbs_Detail; 27c48574-7759-4996-b218-0a9cd20bcbe8 |
| DefaultInventoryView | Insp_InspectionAbs_Inventory; 5c23a7fd-2f23-4c2e-a3fb-5d56d606901c |
| DisplayProperty | InsDisplayField; 5ffb768d-9f3a-4717-b121-1f53166ba04c |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Inspections; 552ac529-b2e5-4597-a16a-725c46ab992b |

**Directly declared fields:** `CompletedBy`, `CompletedOn`, `DaofFirstReview`, `DistributioList`, `DofSecondReview`, `FirstReviewBy`, `HelperLocation`, `InsDisplayField`, `InspecChecklist`, `InspecChecklistId`, `InspectionDate`, `PersResponsible`, `PersResponsibleId`, `RevieweComment1`, `RevieweComments`, `RevieweDecisio1`, `RevieweDecision`, `SecondReviewBy`, `TypeOfInspec`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Completed By | M:1 to SysEmployeeEntity; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Read only in this pathway | I02 stamps field-work actor/date after valid submission; not final acceptance. **Modify**; internal `CompletedBy`; E2148; R04 |
| Completed On | Date; native IsRequired FALSE | N | None (no field override exported) | Read only in this pathway | I02 stamps field-work actor/date after valid submission; not final acceptance. **Modify**; internal `CompletedOn`; E1042; R04 |
| Date of Review | Date/Time; timezone disabled; native IsRequired FALSE | N | None (no field override exported) | Read only in this pathway | I03/I04 stamp corresponding reviewer actor/time after valid decision. Preserve existing date/time field attributes.. **Modify**; internal `DaofFirstReview`; E2992; R04 |
| Distribution List | M:N to SysEmployeeEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `DistributioList`; E688 |
| Date of Second Review | Date/Time; timezone disabled; native IsRequired FALSE | N | None (no field override exported) | Read only in this pathway | I03/I04 stamp corresponding reviewer actor/time after valid decision. Preserve existing date/time field attributes.. **Modify**; internal `DofSecondReview`; E2990; R04 |
| Review By | M:1 to SysEmployeeEntity; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Read only in this pathway | I03/I04 stamp corresponding reviewer actor/time after valid decision. Preserve existing date/time field attributes.. **Modify**; internal `FirstReviewBy`; E2984; R04 |
| [Helper] Location | M:1 to SysLocationEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `HelperLocation`; E1147 |
| [Helper] Inspection Description Display Field | Text; preserve existing length (not exported) | N | None (no field override exported); calculation `CONCATENATE("Inspection No. ", RecordNo, " - Inspection Type: ",  TypeOfInspec, " (", PubChecklist, ")")` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `InsDisplayField`; E2948 |
| Inspection Checklist | M:1 to CLF_PubChecklistObject; inverse disabled; native IsRequired FALSE | Conditional | None | Required before INTERNAL execution; current active published checklist of selected TypeOfInspec. EXTERNAL hidden/null. | H02 invokes existing native creation path only for INTERNAL. Retain existing publication/version-selection mechanism.. **Modify**; internal `InspecChecklist`; E1218; R01 |
| Inspection Checklist Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `InspecChecklistId`; E2009 |
| Inspection To Be Completed By | Date | N | [Source E1493](../as-is/evidence.json); native value-generator XML retained | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `InspectionDate`; E1493 |
| Inspector | M:1 to SysEmployeeEntity; inverse disabled | Y | `CURRENTUSER` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `PersResponsible`; E101 |
| Inspector Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PersResponsibleId`; E1726 |
| Second Reviewer Comments | Text; preserve existing length (not exported); native IsRequired FALSE | Conditional | None (no field override exported) | Eligible reviewer in corresponding stage; nonblank required when corresponding decision is G03 Rejected record | I03/I04 include comments in Return notification; prior attempts retained in native history. **Modify**; internal `RevieweComment1`; E3000; R04 |
| Reviewer Comments | Text; preserve existing length (not exported); native IsRequired FALSE | Conditional | None (no field override exported) | Eligible reviewer in corresponding stage; nonblank required when corresponding decision is G03 Rejected record | I03/I04 include comments in Return notification; prior attempts retained in native history. **Modify**; internal `RevieweComments`; E1525; R04 |
| Second Reviewer Decision | M:1 to Insp_IReviewDecisionObject; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Eligible current reviewer only in the corresponding stage; required to complete approval; choose G03 Approved/Rejected native record identity | I03/I04 validate decision before transition; no Code column added to existing decision catalogue. **Modify**; internal `RevieweDecisio1`; E2997; R04 |
| Reviewer Decision | M:1 to Insp_IReviewDecisionObject; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Eligible current reviewer only in the corresponding stage; required to complete approval; choose G03 Approved/Rejected native record identity | I03/I04 validate decision before transition; no Code column added to existing decision catalogue. **Modify**; internal `RevieweDecision`; E2611; R04 |
| Second Review By | M:1 to SysEmployeeEntity; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Read only in this pathway | I03/I04 stamp corresponding reviewer actor/time after valid decision. Preserve existing date/time field attributes.. **Modify**; internal `SecondReviewBy`; E2994; R04 |
| Type of Inspection | M:1 to Insp_TypeObject; inverse disabled | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `TypeOfInspec`; E2699 |

### 2.64 Inspection Role Option

**Internal name:** `Insp_InspRoleOptionObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** 538d6243-3abc-44e4-b059-9ba40076c922 (E350). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | Insp_InspRoleOptionObjectDetailView; dc754ab9-fb26-4aac-8a91-e61a856e43e7 |
| DefaultInventoryView | Insp_InspRoleOptionObjectInventoryView; c8494771-d45a-4fe7-a21e-94983d7a2507 |
| DisplayProperty | Name; f63bb41c-d53c-4695-8cf0-912152c93de2 |
| OrderProperty | Sort; 69cfe2cd-8f63-4bd4-a2b1-99d9a85cc0bb |
| Module | Inspections; 552ac529-b2e5-4597-a16a-725c46ab992b |

**Directly declared fields:** `Active`, `Name`, `RecordNo`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Active? | Yes/No | N | true | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Active`; E360 |
| Name | Text, maximum 255 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E358 |
| Record No. | AutoNumber | N | [Source E354](../as-is/evidence.json); native value-generator XML retained | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `RecordNo`; E354 |
| Sort | Number (Integer) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Sort`; E352 |

### 2.65 Inspection Review Decision

**Internal name:** `Insp_IReviewDecisionObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** e693fba5-fae3-4a4f-a89f-f797af1f16a8 (E770). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | Insp_IReviewDecisionObjectDetailView; 9b6f5fb4-f401-43e0-ac41-2c21cacdf522 |
| DefaultInventoryView | Insp_IReviewDecisionObjectInventoryView; b946d2a3-06a1-4138-8809-720239749e2e |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Inspections; 552ac529-b2e5-4597-a16a-725c46ab992b |

**Directly declared fields:** `Active`, `Name`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Active? | Yes/No | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Active`; E768 |
| Name | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E2030 |
| Sort | Number (Integer) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Sort`; E1304 |

### 2.66 Mobile Action

**Internal name:** `Insp_MobileActionObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** b75f1fef-ed47-4d29-8a11-fd7986ca1c9f (E377). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | Index; 0b2de75f-6181-40d2-9ccf-4fba3d6d39a2 |
| Module | Inspections; 552ac529-b2e5-4597-a16a-725c46ab992b |

**Directly declared fields:** `Caption`, `Index`, `Value`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Caption | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Caption`; E2157 |
| Index | Integer | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `Index`; E373 |
| Value | Text; preserve existing length (not exported) | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Value`; E717 |

Initial values:

Inherited columns are record values, not duplicate declarations. Proposed seeds have no invented record GUID.

| Basis | Id | Deleted | Value | Index | Caption |
| --- | --- | --- | --- | --- | --- |
| Extracted | fe5de6e7-9dd6-444b-a94a-850024839d8e | false | No Action | 0 | No Action |
| Extracted | c612f759-e731-4a1a-ae5d-6a83981ad94a | false | Success | 1 | Success |
| Extracted | ab354ce6-dc07-4b17-8ba9-b2455964bd43 | false | Fail | 2 | Fail |

### 2.67 Type of Inspection

**Internal name:** `Insp_TypeObject`. **Inheritance parent:** `CLF_ChecklistTypeObject`. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** c504f266-819b-47a2-84f2-0154fdcf19de (E165). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | Insp_Type_Detail; 38aa707d-811d-454b-9bbd-31c99b6da541 |
| DefaultInventoryView | Insp_Type_Inventory; 4027a1a0-a8a6-4c2e-8d55-33a3bf9025a7 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Inspections; 552ac529-b2e5-4597-a16a-725c46ab992b |

**Directly declared fields:** `Active`, `ComplValidation`, `DforFirstReview`, `ELOptions`, `EnabFirstReview`, `EnaSecondReview`, `EquipmentList`, `EquipmMandatory`, `Expression`, `Expression2`, `FindingTracking`, `FirstReviewer`, `forSecondReview`, `InspRoleOption`, `InspRoleOption2`, `InspRoleOptionId`, `PRMethod`, `PRMethodSndRev`, `Role`, `Role2`, `RoleName`, `RoleName2`, `SecondReviewer`, `SourceMode`, `OverallOutcomeRequired`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Active | Yes/No | Y | true | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Active`; E1610 |
| Enable Checklist Completion Validation? | Yes/No; native IsRequired FALSE | Y | TRUE | Hidden; TRUE enforced for current programs | H01 validates on type save; existing shared capability retained. **Modify**; internal `ComplValidation`; E1563; R01 |
| No. of Days for Review | Number (Integer); native IsRequired FALSE | Conditional | NULL until the actual period is supplied under G04 | Required positive integer when EnabFirstReview=TRUE; administrator editable. Hidden/retained when FALSE. No arbitrary maximum introduced. | Native stage-entry due-date calculation uses this value. **Modify**; internal `DforFirstReview`; E1603; R04 |
| Equipment List Options | M:1 to Insp_EquipListOptionObject; inverse disabled; native IsRequired FALSE | Conditional | None; reuse actual native Text/Lookup records from G03 | Required when EquipmentList=TRUE; active native option selection. Hidden/retained when FALSE. | F01/F02 and H05 use EquipmentList plus actual ELOptions record ID; no invented OFF record.. **Modify**; internal `ELOptions`; E1600; R05 |
| Enable Review? | Yes/No; native IsRequired FALSE | Y | TRUE for initial three programs (proposed initial value) | Program administrator; second review may be enabled only with first review and complete routing | Live configuration used by I02/I03/I04; no applied-setting fields. **Modify**; internal `EnabFirstReview`; E1191; R04 |
| Enable Second Review? | Yes/No; native IsRequired FALSE | Y | FALSE | Program administrator; second review may be enabled only with first review and complete routing | Live configuration used by I02/I03/I04; no applied-setting fields. **Modify**; internal `EnaSecondReview`; E1608; R04 |
| Enable Equipment List? | Yes/No; native IsRequired FALSE | N | FALSE for initial three programs | Program administrator; TRUE requires G03 Text/Lookup option | Live type equipment setting; no equipment-mode snapshot. **Modify**; internal `EquipmentList`; E1588; R05 |
| Make Equipment Mandatory? | Yes/No; native IsRequired FALSE | N | TRUE when EquipmentList=TRUE, otherwise FALSE | Hidden compatibility flag; H01 sets from EquipmentList | Equipment identification is mandatory for enabled equipment programs. **Modify**; internal `EquipmMandatory`; E163; R05 |
| Expression | Text; preserve existing length (not exported); native IsRequired FALSE | Conditional | None (no field override exported) | Required only for enabled EnabFirstReview with PRMethod=G03 Expression record. Technical administrator only; hidden/retained otherwise. | Existing executable recipient-expression field; G02 must supply validated XScript in the stage context.. **Modify**; internal `Expression`; E1068; R04 |
| Expression:2 | Text; preserve existing length (not exported); native IsRequired FALSE | Conditional | None (no field override exported) | Required only for enabled EnaSecondReview with PRMethodSndRev=G03 Expression record. Technical administrator only; hidden/retained otherwise. | Existing executable recipient-expression field; G02 must supply validated XScript in the stage context.. **Modify**; internal `Expression2`; E686; R04 |
| Utilize Finding Tracking | Yes/No; native IsRequired FALSE | Y | FALSE | Hidden; FALSE enforced for current programs | H01 validates on type save; existing shared capability retained. **Modify**; internal `FindingTracking`; E1103; R01 |
| Reviewer | M:1 to SysSubjectEntity; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required only when EnabFirstReview=TRUE and PRMethod is G03 Specific Person record; hidden/retained otherwise. Technical exception, not normal routing. | Use existing subject relationship and native recipient handling. **Modify**; internal `FirstReviewer`; E1612; R04 |
| No. of Days for Second Review | Number (Integer); native IsRequired FALSE | Conditional | NULL until the actual period is supplied under G04 | Required positive integer when EnaSecondReview=TRUE; administrator editable. Hidden/retained when FALSE. No arbitrary maximum introduced. | Native stage-entry due-date calculation uses this value. **Modify**; internal `forSecondReview`; E1596; R04 |
| New/Existing Role | M:1 to Insp_InspRoleOptionObject; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Hidden in routine program form; reuse installed metadata/history | H01 prevents new ad hoc roles through the Inspection program pathway. **Modify**; internal `InspRoleOption`; E591; R04 |
| New/Existing Role:2 | M:1 to Insp_InspRoleOptionObject; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Hidden in routine program form; reuse installed metadata/history | H01 prevents new ad hoc roles through the Inspection program pathway. **Modify**; internal `InspRoleOption2`; E989; R04 |
| New/Existing Role Id | GUID; native IsRequired FALSE | N | None (no field override exported) | Hidden in routine program form; reuse installed metadata/history | H01 prevents new ad hoc roles through the Inspection program pathway. **Modify**; internal `InspRoleOptionId`; E1238; R04 |
| Method to Determine Person Responsible | M:1 to ConfgAppSetting_PersRespOptionObject; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required when EnabFirstReview=TRUE; select existing active routing record by G03 identity; ordinary choices Role, Immediate Supervisor or Submitter. | Existing shared catalogue fields/types are retained; no new Code column. Routing method IDs supplied under G03/G04.. **Modify**; internal `PRMethod`; E1247; R04 |
| Method To Determine Person Responsible:2 | M:1 to ConfgAppSetting_PersRespOptionObject; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required when EnaSecondReview=TRUE; select existing active routing record by G03 identity; ordinary choices Role, Immediate Supervisor or Submitter. | Existing shared catalogue fields/types are retained; no new Code column. Routing method IDs supplied under G03/G04.. **Modify**; internal `PRMethodSndRev`; E1593; R04 |
| Role | M:1 to SysRoleEntity; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required when EnabFirstReview=TRUE and PRMethod is G03 Role record. Hidden/retained for other methods; choose maintained native role. | No automatic role creation. H04 resolves eligible responsibility in inspection Location.. **Modify**; internal `Role`; E1242; R04 |
| Role2 | M:1 to SysRoleEntity; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required when EnaSecondReview=TRUE and PRMethodSndRev is G03 Role record. Hidden/retained for other methods; choose maintained native role. | No automatic role creation. H04 resolves eligible responsibility in inspection Location.. **Modify**; internal `Role2`; E1590; R04 |
| Role Name | Text, maximum 100; native IsRequired FALSE | N | None (no field override exported) | Hidden in routine program form; reuse installed metadata/history | H01 prevents new ad hoc roles through the Inspection program pathway. **Modify**; internal `RoleName`; E1240; R04 |
| Role Name 2 | Text, maximum 100; native IsRequired FALSE | N | None (no field override exported) | Hidden in routine program form; reuse installed metadata/history | H01 prevents new ad hoc roles through the Inspection program pathway. **Modify**; internal `RoleName2`; E1598; R04 |
| Second Reviewer | M:1 to SysSubjectEntity; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required only when EnaSecondReview=TRUE and PRMethodSndRev is G03 Specific Person record; hidden/retained otherwise. Technical exception, not normal routing. | Use existing subject relationship and native recipient handling. **Modify**; internal `SecondReviewer`; E1605; R04 |
| Source Mode | M:1 to Insp_InspectionSourceObject; inverse disabled; native IsRequired FALSE | Conditional | INTERNAL catalogue record on new types; legacy NULL is interpreted as INTERNAL without backfill | Required for new/revised current program setup; program administrator selects active source value. Existing used types retain source mode. | Live type setting; no per-inspection copy. Change source mode only on a new/unused type. Native IsRequired FALSE; scoped save rule supplies effective requiredness.. **Add**; internal `SourceMode`; PF-025; R01 |
| Overall Outcome Required? | Yes/No; native IsRequired FALSE | Conditional | TRUE for new initial INTERNAL programs; FALSE forced for EXTERNAL; legacy NULL is not required | Required on current program setup; administrator editable for INTERNAL, hidden/forced FALSE for EXTERNAL | H03 uses live type value; native IsRequired FALSE to avoid retrospective mandatory-data conversion.. **Add**; internal `OverallOutcomeRequired`; PF-026; R03 |

Initial values:

Inherited columns are record values, not duplicate declarations. Proposed seeds have no invented record GUID.

| Basis | Code | Name | Active | SourceMode | EnabFirstReview | EnaSecondReview | EquipmentList | ComplValidation | FindingTracking | OverallOutcomeRequired |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Proposed configuration values; actual routing/days supplied in G01/G04 | HSE_PROJECT | Project health and safety | false | INTERNAL | true | false | false | true | false | true |
| Proposed configuration values; actual routing/days supplied in G01/G04 | ENV_PROJECT | Project environmental compliance | false | INTERNAL | true | false | false | true | false | true |
| Proposed configuration values; actual routing/days supplied in G01/G04 | OFFICE_EHS | Office EH&S | false | INTERNAL | true | false | false | true | false | true |

### 2.68 Object

**Internal name:** `MetObjectEntity`. **Inheritance parent:** `MetTypeEntity`. **Configuration:** Reuse external interface.

**Object ID:** 09300b47-1b32-4ea7-9dfc-be1fb427d12f (E1722). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | System Objects; fe0eb852-ece3-431a-8813-75d0633a2c64 |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

Initial values:

Inherited columns are record values, not duplicate declarations. Proposed seeds have no invented record GUID.

| Basis | OrderProperty | DescriptionProperty | CustomInventories | Permissions | Links | Filters | Reporting object | ValidationRules | Id | IsLocalizable | ShortName | Style | LocationFilter | MergeType | TableName | IsMessageEnabled | MobileFilter | MobileTabOrder | IsCreationFromMyTaskEnabled | ConcurrencyType | IsDocumentEnabled | IsBusinessHierarchyBound | IsMapEnabled | UseSoftDelete | IsSecurityEnabled | IsAbstract | IsDataImportEnabled | CheckChanges | IsAttachmentEnabled | IsMailMergeEnabled | TimeoutType | IsLocationBound | IsAuditEnabled | Timeout | HasWorkflow | Description | UseSystemViewSettings | IsSystem | InventoryDisplayAs | DetailEmptyText | InventoryEmptyText | Icon | IsStatic | DefaultValue | InventoryEditAs | Caption | DetailEditAs | Name | NetType | DetailDisplayAs | ActionHandlers | SuperType | Workflows | Notification Templates | Group | DisplayProperty |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | b714db5b-7015-4f4e-b05f-a9eb0e507d53 | false | InsActionPlan | NULL | 2 | NULL | cusCLF_InsActionPlan | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | true | false | NULL | false | false | NULL | true | NULL | true | false | NULL | NULL | NULL | Icons/new/48x48/check2.gif | false | NULL | NULL | Inspection Action Plan | NULL | CLF_InsActionPlanObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | ccdcd5a5-82d8-4822-b2ac-703d41dc5d0d | true | InstructionText | NULL | NULL | NULL | cusConfgAppSetting_InstructionText | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Instruction Text | NULL | ConfgAppSetting_InstructionTextObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 4266a8f5-e53c-4b81-921c-540913945dfd | false | EquipInspection | NULL | NULL | NULL | cusInsp_EquipInspection | false | NULL | 1 | false | NULL | false | false | false | false | false | false | false | false | true | true | NULL | false | false | NULL | true | NULL | true | false | NULL | NULL | NULL | Icons/new/48x48/wrench.gif | false | NULL | NULL | Inspection | NULL | Insp_EquipInspectionObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | edca9466-cdf8-4317-85c9-d3efb40373a2 | false | ActionPlanAbs | NULL | NULL | NULL | cusActionPlans_ActionPlanAbs | false | NULL | NULL | false | NULL | false | false | false | false | false | true | false | false | false | false | NULL | false | false | NULL | false | This object is a child of Abstract Corrective Action. This object captures the common elements of an action plan. | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Action Plan Abstract | NULL | ActionPlans_ActionPlanAbsObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 3557470f-8de9-461c-bdcb-9edf9cc2b6c6 | false | ChecklistAnswer | NULL | 2 | NULL | cusCLF_ChecklistAnswer | false | NULL | NULL | false | NULL | false | false | false | false | true | true | false | false | false | false | NULL | true | false | NULL | false |  | true | false | NULL | NULL | NULL | Icons/new/48x48/clipboard.gif | false | NULL | NULL | Checklist Answer | NULL | CLF_ChecklistAnswerObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 3979d543-6df2-46a1-a26e-293cd7978bdc | false | Event | NULL | NULL | NULL | cusEventFwk_Event | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Event | NULL | EventFwk_EventObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 312a57bc-343e-4337-a251-91609c550820 | true | QuestAbstract | NULL | 2 | NULL | cusCLF_QuestAbstract | false | NULL | NULL | false | NULL | false | false | false | false | true | true | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Question Abstract | NULL | CLF_QuestAbstractObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | b8491b3d-469a-4bdf-b9e1-ddcecf257422 | true | ChoiceList | NULL | NULL | NULL | cusCLF_ChoiceList | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Choice List | NULL | CLF_ChoiceListObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 6afb3ac6-96db-4072-9293-4d02699d1264 | true | Employee | NULL | 2 | NULL | sysEmployee | false | NULL | NULL | false | NULL | false | false | false | true | true | false | false | false | false | false | NULL | true | false | NULL | false | Employee Object | true | false | NULL | NULL | NULL | NULL | true | NULL | NULL | Employee | NULL | SysEmployeeEntity | Intelex.Entities.EntityClasses.SysEmployeeEntity, Intelex.Entities, Culture=neutral, PublicKeyToken=035b8d2ead3f9bb6 | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 8c33cf5c-67fd-4cca-8703-96ec39efff81 | false | InspectionAbs | NULL | NULL | NULL | cusInsp_InspectionAbs | false | NULL | NULL | false | NULL | false | false | false | false | false | true | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | Icons/new/48x48/wrench.gif | false | NULL | NULL | Inspection Abstract | NULL | Insp_InspectionAbsObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 50d7bbfc-a211-4703-90fa-7d12f7866f84 | false | WorkflowRecurringSeries | NULL | 2 | 0 | sysWorkflowRecurringSeries | false | NULL | NULL | false | 0 | false | false | false | false | false | false | false | false | false | false | 0 | false | false | NULL | false | Workflow Recurring Series Object | true | true | NULL | NULL | NULL | NULL | true | NULL | NULL | Workflow Recurring Series | NULL | SysWorkflowRecurringSeriesEntity | Intelex.Entities.EntityClasses.SysWorkflowRecurringSeriesEntity, Intelex.Entities, Culture=neutral, PublicKeyToken=035b8d2ead3f9bb6 | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 8884bd44-4951-4dbf-9c7f-d9b574946afd | false | TPanelGenerator | NULL | NULL | NULL | cusConfgAppSetting_TPanelGenerator | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Instruction Text Panel Generator | NULL | ConfgAppSetting_TPanelGeneratorObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 11b88061-922a-4690-86df-61f1b766b34a | false | CAPA | NULL | NULL | NULL | cusEventFwk_CAPA | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | true | false | NULL | false | false | NULL | true | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | CAPA | NULL | EventFwk_CAPAObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | d05bf7ff-7ab2-47f3-96d9-97a1a328d9ce | false | Equipment | NULL | 2 | NULL | cusFragApplication_Equipment | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | true | false | NULL | true | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Equipment | NULL | FragApplication_EquipmentObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | c504f266-819b-47a2-84f2-0154fdcf19de | false | Type | NULL | 2 | NULL | cusInsp_Type | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | Icons/new/48x48/index.gif | false | NULL | NULL | Type of Inspection | NULL | Insp_TypeObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 18bb2218-f236-4baf-ad0b-cc187222c8f2 | false | Finding | NULL | NULL | NULL | cusCLF_Finding | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | true | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Finding | NULL | CLF_FindingObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | cb8d3588-d610-4120-b084-f31276410731 | false | RootCause | NULL | 2 | NULL | cusCauseAnalysis_RootCause | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | true | false | NULL | false | false | NULL | false |  | true | false | NULL | NULL | NULL |  | false | NULL | NULL | Root Cause | NULL | CauseAnalysis_RootCauseObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | ffaeb11a-e798-47ed-a3fb-1336a82876dd | false | AbCorrectivActi | NULL | 2 | NULL | cusFragApplication_AbCorrectivActi | false | NULL | NULL | false | NULL | false | false | false | false | true | true | false | false | false | false | NULL | true | false | NULL | false | This is the abstract class for corrective action objects | true | false | NULL |  |  |  | false | NULL | NULL | Abstract Corrective Action | NULL | FragApplication_AbCorrectivActiObject |  | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 9083e2f5-2e24-4174-92db-75a61a217d0b | false | QuestionAnswer | NULL | NULL | NULL | cusCLF_QuestionAnswer | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | true | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | Icons/new/48x48/question_and_answer.gif | false | NULL | NULL | Question Answer | NULL | CLF_QuestionAnswerObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | d36a079a-12db-4b54-9c70-f80d146ff8ca | true | Choice | NULL | NULL | NULL | cusCLF_Choice | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Choice | NULL | CLF_ChoiceObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 88f9a145-d866-4be9-961a-a741789ec394 | false | TeamMember | NULL | 2 | NULL | cusEventFwk_TeamMember | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | true | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Team Member | NULL | EventFwk_TeamMemberObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 0e5d5f7f-2039-4194-8f37-86771b63e36f | false | PubQuest | NULL | 2 | NULL | cusCLF_PubQuest | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | Icons/new/48x48/help.gif | false | NULL | NULL | Published Question | NULL | CLF_PubQuestObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 9f91762c-29b1-49d4-8f9b-580b73a7ff6d | false | Preferences | NULL | NULL | NULL | cusCLF_Preferences | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | false | false | NULL | false | true | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Preferences | NULL | CLF_PreferencesObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 412062e5-1181-47a1-83c0-91d0e52a2bd6 | true | Severity | NULL | NULL | NULL | cusEventFwk_Severity | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | true | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Severity | NULL | EventFwk_SeverityObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 08f1bba7-28ca-461a-96d7-d2f0e2202128 | false | SpecAppSettings | NULL | NULL | NULL | cusConfgAppSetting_SpecAppSettings | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Abstract Application Specific App Settings | NULL | ConfgAppSetting_SpecAppSettingsObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 51760767-f9a1-4930-a7d3-0580ea2f87fd | false | IconAsset | NULL | NULL | NULL | cusConfgAppSetting_IconAsset | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Icon Asset | NULL | ConfgAppSetting_IconAssetObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 6c774cf4-c380-4706-81ef-a656239fe8cf | false | Section | NULL | NULL | NULL | cusCLF_Section | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Section | NULL | CLF_SectionObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 92628acf-dcc3-41c3-b23f-198d83cba0ef | false | Quest | NULL | 2 | NULL | cusCLF_Quest | false | NULL | NULL | false | NULL | true | false | false | false | false | false | false | false | true | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | Icons/new/48x48/help2.gif | false | NULL | NULL | Question | NULL | CLF_QuestObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | da1604a8-ddbd-463b-83c3-8b5240f9cbbe | false | Risk | NULL | NULL | NULL | cusRiskFmk_Risk | false | NULL | NULL | false | NULL | false | false | false | false | false | true | false | false | false | false | NULL | false | false | NULL | false |  | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Risk | NULL | RiskFmk_RiskObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | c0d0d372-c03c-46cd-9f51-cdd28b620177 | false | EventScenario | NULL | 2 | NULL | cusEventFwk_EventScenario | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | false | false | NULL | true | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Event Scenario | NULL | EventFwk_EventScenarioObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 538d6243-3abc-44e4-b059-9ba40076c922 | false | InspRoleOption | NULL | NULL | NULL | cusInsp_InspRoleOption | false | NULL | NULL | false | NULL | false | false | false | true | true | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Inspection Role Option | NULL | Insp_InspRoleOptionObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | c726d108-022c-4b4b-8928-5160ce43a535 | true | CheckliAbstract | NULL | 4 | NULL | cusCLF_CheckliAbstract | false | NULL | NULL | false | NULL | false | false | false | false | false | true | false | false | false | false | NULL | true | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Checklist Abstract | NULL | CLF_CheckliAbstractObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 13d4a5ac-9329-4eff-8221-1db8d857359c | false | RecoAction | NULL | NULL | NULL | cusQP_RecoAction | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false |  | true | false | NULL | NULL | NULL | Raven/Icons/BrightBlue_48/acceptance.png | false | NULL | NULL | Recommended Action | NULL | QP_RecoActionObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | ff5895e2-f1a0-4f19-83fc-417947fcef53 | false | WorkflowInstance | NULL | 2 | NULL | sysWorkflowInstance | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | Workflow Instance Object | true | true | NULL | NULL | NULL | NULL | true | NULL | NULL | Workflow Instance | NULL | SysWorkflowInstanceEntity | Intelex.Entities.EntityClasses.SysWorkflowInstanceEntity, Intelex.Entities, Culture=neutral, PublicKeyToken=035b8d2ead3f9bb6 | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 785124a0-20be-4606-8d25-56dd86248bbf | true | Subject | NULL | 2 | NULL | sysSubject | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | false | false | NULL | false | false | NULL | false | Subject Object | true | false | NULL | NULL | NULL | NULL | true | NULL | NULL | Subject | NULL | SysSubjectEntity | Intelex.Entities.EntityClasses.SysSubjectEntity, Intelex.Entities, Culture=neutral, PublicKeyToken=035b8d2ead3f9bb6 | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | b01defd7-dd92-4793-ab45-64a123159338 | false | SectionAnswer | NULL | NULL | NULL | cusCLF_SectionAnswer | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Section Answer | NULL | CLF_SectionAnswerObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 3baadf79-b7a0-482b-8165-fa490a96bcae | false | Singlechecklist | NULL | 2 | NULL | cusCLF_Singlechecklist | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | true | NULL | false | false | NULL | false |  | true | false | NULL |  |  | Icons/new/48x48/clipboard.gif | false | NULL | NULL | Single checklist | NULL | CLF_SinglechecklistObject |  | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 3f6970f2-408f-4bee-bdae-80f0db6ca83a | false | Subchecklist | NULL | NULL | NULL | cusCLF_Subchecklist | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | true | NULL | false | false | NULL | true |  | true | false | NULL |  |  |  | false | NULL | NULL | Sub-checklist | NULL | CLF_SubchecklistObject |  | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | ed20ee1a-4c61-40eb-969b-91ddd9fe19b7 | true | NodeAbstract | NULL | 2 | NULL | cusQP_NodeAbstract | false | NULL | NULL | false | NULL | false | false | false | false | true | true | false | false | false | false | NULL | true | false | NULL | false |  | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Node | NULL | QP_NodeAbstractObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 2c6e1a6e-253b-4275-9c0c-d9f4b64a8834 | false | FindingStatus | NULL | 2 | NULL | cusCLF_FindingStatus | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | Icons/new/48x48/flag_red.gif | false | NULL | NULL | Finding Status | NULL | CLF_FindingStatusObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | f0ba4595-963b-45fd-8b19-592ce53f7b3c | false | PubChecklist | NULL | 2 | NULL | cusCLF_PubChecklist | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | Icons/new/48x48/scroll_preferences.gif | false | NULL | NULL | Published Checklist | NULL | CLF_PubChecklistObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 6fe45655-67bc-4593-91e3-675ccc304fdc | false | Checklist | NULL | 2 | NULL | cusCLF_Checklist | false | NULL | 1 | false | NULL | false | false | false | false | false | false | false | false | true | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | Icons/new/48x48/scroll_refresh.gif | false | NULL | NULL | Checklist | NULL | CLF_ChecklistObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 33cdd92d-1fc4-4a8a-9cbe-48e6ffb26a13 | false | EventType | NULL | NULL | NULL | cusEventFwk_EventType | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | false | false | NULL | false | false | NULL | false |  | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Event Type | NULL | EventFwk_EventTypeObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 347a4ed1-ecdb-40b5-b8d8-9a258e9adb99 | false | ActivityAbs | NULL | NULL | NULL | cusActionPlans_ActivityAbs | false | NULL | NULL | false | NULL | false | false | false | false | false | true | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Activity Abstract | NULL | ActionPlans_ActivityAbsObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | a69a7f61-e713-41c0-96fa-1cf97a084f74 | true | Type | NULL | 2 | NULL | metType | false | NULL | NULL | false | NULL | false | false | false | false | true | true | false | false | false | false | NULL | false | false | NULL | false | Type Object | true | true | NULL | NULL | NULL | NULL | true | NULL | NULL | Type | NULL | MetTypeEntity | Intelex.Entities.EntityClasses.MetTypeEntity, Intelex.Entities, Culture=neutral, PublicKeyToken=035b8d2ead3f9bb6 | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | db312533-2245-4dab-9ffa-7c2d5c254d73 | false | EquipListOption | NULL | NULL | NULL | cusInsp_EquipListOption | false | NULL | NULL | false | NULL | false | false | false | true | true | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Equipment List Option | NULL | Insp_EquipListOptionObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 9731e3e6-7280-4553-8d65-3af2c60aaad9 | true | LocalizResource | NULL | NULL | NULL | cusCLF_LocalizResource | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Localizable Resource | NULL | CLF_LocalizResourceObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | d1173495-0379-44d4-851a-9cab62d3f144 | false | Multichecklists | NULL | NULL | NULL | cusCLF_Multichecklists | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | true | NULL | false | false | NULL | true | NULL | true | false | NULL |  |  | NULL | false | NULL | NULL | Audit (Multiple checklists) | NULL | CLF_MultichecklistsObject |  | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | f3ca6a8e-9736-4749-9c16-6c27e180b90e | true | WorkflowStage | NULL | 2 | NULL | SysWorkflowStage | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | Workflow Stage Object | true | true | NULL | NULL | NULL | NULL | true | NULL | NULL | Workflow Stage | NULL | SysWorkflowStageEntity | Intelex.Entities.EntityClasses.SysWorkflowStageEntity, Intelex.Entities, Culture=neutral, PublicKeyToken=035b8d2ead3f9bb6 | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | b14ca608-e356-4b60-b9ec-3db8e6e208e0 | false | AbstractCost | NULL | NULL | NULL | cusFragApplication_AbstractCost | false | NULL | NULL | false | NULL | false | false | false | false | true | true | false | false | true | false | NULL | true | false | NULL | false | This object is the base for Cost. | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Abstract Cost | NULL | FragApplication_AbstractCostObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | e693fba5-fae3-4a4f-a89f-f797af1f16a8 | false | IReviewDecision | NULL | NULL | NULL | cusInsp_IReviewDecision | false | NULL | NULL | false | NULL | false | false | false | true | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Inspection Review Decision | NULL | Insp_IReviewDecisionObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 0259a1d3-455a-4ba5-8c4b-dbd3f0be9ea7 | true | ChecklistType | NULL | 2 | NULL | cusCLF_ChecklistType | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | false | false | NULL | false | false | NULL | false | Checklist Type is meant to group all Questions of a same theme together.<br>Checklist are also attached to one Checklist Type.<br>By default, in a Checklist, it is only possible to select Question attached to the same Checklist Type than the Checklist.<br>This filter can be changed without any risks | true | false | NULL | NULL | NULL | Icons/new/48x48/clipboard_empty.gif | false | NULL | NULL | Checklist Type | NULL | CLF_ChecklistTypeObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | dc9d451a-c909-4a8d-8296-f0cf88971f06 | false | Color | NULL | NULL | NULL | cusFragApplication_Color | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | Icons/new/48x48/palette.gif | false | NULL | NULL | Color | NULL | FragApplication_ColorObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 73d6b091-b922-45ff-85ee-d92e8267971e | false | GlobAppSettings | NULL | NULL | NULL | cusConfgAppSetting_GlobAppSettings | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Global App Settings | NULL | ConfgAppSetting_GlobAppSettingsObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 9e02f3af-cb69-48f0-8206-dfbe8cb7d06c | false | CARAbstract | NULL | 5 | NULL | cusComplyFramework_CARAbstract | false | NULL | NULL | false | NULL | false | false | false | false | true | true | false | false | false | false | NULL | true | false | NULL | false |  | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | CAR Abstract | NULL | ComplyFramework_CARAbstractObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 9121f9af-5120-47d8-97e8-a04ea1ee6ce8 | false | ActionCost | NULL | NULL | NULL | cusFragApplication_ActionCost | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | true | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Action Cost | NULL | FragApplication_ActionCostObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | f5d5209b-0a7d-4858-a302-678fcc065dd2 | true | Location | NULL | NULL | NULL | sysLocation | false | NULL | NULL | false | NULL | false | false | false | true | true | false | false | false | true | false | NULL | false | false | NULL | false | Location Object | true | false | NULL | NULL | NULL | NULL | true | NULL | NULL | Location | NULL | SysLocationEntity | Intelex.Entities.EntityClasses.SysLocationEntity, Intelex.Entities, Culture=neutral, PublicKeyToken=035b8d2ead3f9bb6 | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | b566862a-2640-4325-96ff-da5dc0ad6b68 | false | PersRespOption | NULL | NULL | NULL | cusConfgAppSetting_PersRespOption | false | NULL | NULL | false | NULL | false | false | false | true | true | false | false | false | false | false | NULL | false | false | NULL | false | Defines Person Responsible Options | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Person Responsible Option | NULL | ConfgAppSetting_PersRespOptionObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | a631a825-2e5f-4fb7-ae45-6d084d8582d3 | false | CauseAnalysis | NULL | NULL | NULL | cusCauseAnalysis_CauseAnalysis | false | NULL | NULL | false | NULL | false | false | false | false | true | true | false | false | true | false | NULL | false | false | NULL | false |  | true | false | NULL | NULL | NULL |  | false | NULL | NULL | Cause Analysis | NULL | CauseAnalysis_CauseAnalysisObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | eb90c958-cbcf-4f4a-89ba-2e0bedea4770 | false | VOCAbstract | NULL | NULL | NULL | cusEventFwk_VOCAbstract | false | NULL | NULL | false | NULL | false | false | false | false | false | true | false | false | false | false | NULL | false | false | NULL | false | Voice of the Customer Abstract object. | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | VOC Abstract | NULL | EventFwk_VOCAbstractObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | b2ca1b26-74a4-4a99-aa8c-fac02454835b | false | EventCost | NULL | NULL | NULL | cusEventFwk_EventCost | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | true | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Event Cost | NULL | EventFwk_EventCostObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | dc95c2f3-4325-40d5-91af-046ef46fdfc4 | true | Group | NULL | NULL | NULL | sysGroup | false | NULL | NULL | false | NULL | false | false | false | false | true | true | false | false | false | false | NULL | false | false | NULL | false | Group Object | true | false | NULL | NULL | NULL | NULL | true | NULL | NULL | Group | NULL | SysGroupEntity | Intelex.Entities.EntityClasses.SysGroupEntity, Intelex.Entities, Culture=neutral, PublicKeyToken=035b8d2ead3f9bb6 | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 09300b47-1b32-4ea7-9dfc-be1fb427d12f | false | Object | NULL | 2 | NULL | metObject | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | false | false | NULL | false | false | NULL | false | Object Object | true | true | NULL | NULL | NULL | Icons/new/48x48/gears.gif | true | NULL | NULL | Object | NULL | MetObjectEntity | Intelex.Entities.EntityClasses.MetObjectEntity, Intelex.Entities, Culture=neutral, PublicKeyToken=035b8d2ead3f9bb6 | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 820903cc-cbc9-4198-834f-a80d2b78b20e | true | Tag | NULL | 2 | NULL | cusCLF_Tag | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL |  |  | Icons/new/48x48/book_green.gif | false | NULL | NULL | Tag | NULL | CLF_TagObject |  | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 63e2eb5b-3f7b-4dd3-a295-9f4f9f712cef | false | LessonLearned | NULL | NULL | NULL | cusEventFwk_LessonLearned | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | true | false | NULL | false | false | NULL | true |  | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Lesson Learned | NULL | EventFwk_LessonLearnedObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 2746e1f2-7359-4939-8476-0426fb8e5f3e | false | GlobActPlanAbs | NULL | NULL | NULL | cusActionPlans_GlobActPlanAbs | false | NULL | NULL | false | NULL | false | false | false | false | false | true | false | false | false | false | NULL | false | false | NULL | false | This object is a child of Abstract Correction Action. It captures the common elements of a global action plan. | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Global Action Plan Abstract | NULL | ActionPlans_GlobActPlanAbsObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 92a1b764-06f7-4556-8e6a-1f72be0b1c7c | false | AbsEvidence | NULL | 2 | NULL | cusEventFwk_AbsEvidence | false | NULL | NULL | false | NULL | false | false | false | false | true | true | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Abstract Evidence | NULL | EventFwk_AbsEvidenceObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 7d1fa155-4b0e-4552-9a6a-4e1c2b30e941 | false | PrgressNotes | NULL | NULL | NULL | cusFragApplication_PrgressNotes | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | true | false | NULL | false | false | NULL | false | Part of Abstract Corrective Action  Application | true | false | NULL |  |  | NULL | false | NULL | NULL | Progress Notes | NULL | FragApplication_PrgressNotesObject |  | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 5243c661-78da-4e1f-a764-850e3b8e89a1 | false | RiskAssessment | NULL | 2 | NULL | cusRiskFmk_RiskAssessment | false | NULL | NULL | false | NULL | false | false | false | false | true | true | false | false | false | false | NULL | true | false | NULL | false |  | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Risk Assessment Abstract | NULL | RiskFmk_RiskAssessmentObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 97529fd9-8002-44d3-a87b-d540f421c578 | true | Finding | NULL | NULL | NULL | cusCFW_Finding | false | NULL | NULL | false | NULL | false | false | false | false | false | true | false | false | false | false | NULL | false | false | NULL | false |  | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Finding (CFW) | NULL | CFW_FindingObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 3ede7c62-0206-4a39-b6ed-ba8c99b79f4c | false | OpRisk | NULL | NULL | NULL | cusRiskFmk_OpRisk | false | NULL | NULL | false | NULL | false | false | false | false | false | true | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Operational Risk Abstract | NULL | RiskFmk_OpRiskObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 1b44b982-2248-41c5-971e-dfa68eddb196 | true | Role | NULL | 2 | NULL | sysRole | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | false | false | NULL | false | false | NULL | false | Role Object | true | false | NULL | NULL | NULL | NULL | true | NULL | NULL | Role | NULL | SysRoleEntity | Intelex.Entities.EntityClasses.SysRoleEntity, Intelex.Entities, Culture=neutral, PublicKeyToken=035b8d2ead3f9bb6 | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 27120010-b7c8-4d71-a23a-d0970607efba | false | NCR | NULL | NULL | NULL | cusNCR_NCR | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | true | false | NULL | false | false | NULL | true | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | NCR | NULL | NCR_NCRObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 684c77dc-7d3c-4387-98ca-d93cf8b6ae16 | false | EventActionPlan | NULL | NULL | NULL | cusEventFwk_EventActionPlan | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | true | false | NULL | false | false | NULL | true | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Event Action Plan | NULL | EventFwk_EventActionPlanObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 8fcd293e-0288-4892-93e3-de6f418b89a7 | false | ReactionPlan | NULL | NULL | NULL | cusQP_ReactionPlan | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | false | false | NULL | false | false | NULL | false |  | true | false | NULL | NULL | NULL | Raven/Icons/BrightBlue_48/acceptance.png | false | NULL | NULL | Reaction Plan | NULL | QP_ReactionPlanObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | ac4266ea-f1d6-4bb3-aca7-31e1585dd540 | false | NonConfAbstract | NULL | 2 | NULL | cusEventFwk_NonConfAbstract | false | NULL | NULL | false | NULL | false | false | false | false | false | true | false | false | false | false | NULL | false | false | NULL | false | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Nonconformance Abstract | NULL | EventFwk_NonConfAbstractObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 5cb20c2b-6a4f-4402-a75d-5628ec4dd610 | false | PermitRecord | NULL | 2 | NULL | cusPTW_PermitRecord | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | true | true | NULL | true | false | NULL | true |  | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Permit Record | NULL | PTW_PermitRecordObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 589c9aa4-c12c-4247-80f4-eedba36fd75c | false | ActioPlanTem | NULL | NULL | NULL | cusActionPlans_ActioPlanTem | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | true | false | NULL | false | false | NULL | false | This object is used to create a template action plan. | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Action Plan Template | NULL | ActionPlans_ActioPlanTemObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 99e58a14-f67c-4cbc-b8f8-3dbc48177c6f | false | CAR | NULL | NULL | NULL | cusCAR_CAR | false | NULL | NULL | false | NULL | false | false | false | false | false | false | false | false | true | false | NULL | false | false | NULL | true | NULL | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | CAR | NULL | CAR_CARObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 7822ebd3-9ce6-494b-9ff6-88061b2bcd46 | false | AResultAbstract | NULL | NULL | NULL | cusRiskFmk_AResultAbstract | false | NULL | NULL | false | NULL | false | false | false | false | true | true | false | false | false | false | NULL | true | false | NULL | false |  | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Assessment Result Abstract | NULL | RiskFmk_AResultAbstractObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| Extracted | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | 440174ae-c4c9-4d86-ad7d-e72bbab69db4 | true | ProjRev | NULL | 0 | NULL | cusQP_ProjRev | false | NULL | NULL | false | NULL | false | false | false | false | true | false | false | false | false | true | NULL | true | false | NULL | true |  | true | false | NULL | NULL | NULL | NULL | false | NULL | NULL | Project Revision | NULL | QP_ProjRevObject | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |

### 2.69 Type

**Internal name:** `MetTypeEntity`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** a69a7f61-e713-41c0-96fa-1cf97a084f74 (E611). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | System Objects; fe0eb852-ece3-431a-8813-75d0633a2c64 |

**Directly declared fields:** None; declarations remain on the inheritance base.

### 2.70 NCR

**Internal name:** `NCR_NCRObject`. **Inheritance parent:** `EventFwk_NonConfAbstractObject`. **Configuration:** Reuse external interface.

**Object ID:** 27120010-b7c8-4d71-a23a-d0970607efba (E2118). **Abstract:** false. **Workflow:** true. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Nonconformance Reporting; 548e2216-7931-4c36-91ee-5aee70ca0c14 |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.71 Permit Record

**Internal name:** `PTW_PermitRecordObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** 5cb20c2b-6a4f-4402-a75d-5628ec4dd610 (E2309). **Abstract:** false. **Workflow:** true. **Location bound:** true. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Permit To Work; c17669f5-d3eb-410c-b4f9-669873247c60 |

**Directly declared fields:** None; declarations remain on the inheritance base.

### 2.72 Node

**Internal name:** `QP_NodeAbstractObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** ed20ee1a-4c61-40eb-969b-91ddd9fe19b7 (E454). **Abstract:** true. **Workflow:** false. **Location bound:** true. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | FMEA; 3658b007-86c3-42e2-95a8-75471b93e02c |

**Directly declared fields:** `ProjRev`, `ProjRevId`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Project Revision | M:1 to QP_ProjRevObject; inverse Nodes | Y | `Parent.ProjRev` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `ProjRev`; E1111 |
| Project Revision Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ProjRevId`; E1109 |

### 2.73 Project Revision

**Internal name:** `QP_ProjRevObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** 440174ae-c4c9-4d86-ad7d-e72bbab69db4 (E2618). **Abstract:** false. **Workflow:** true. **Location bound:** true. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | FMEA; 3658b007-86c3-42e2-95a8-75471b93e02c |

**Directly declared fields:** None; declarations remain on the inheritance base.

### 2.74 Reaction Plan

**Internal name:** `QP_ReactionPlanObject`. **Inheritance parent:** `QP_NodeAbstractObject`. **Configuration:** Reuse external interface.

**Object ID:** 8fcd293e-0288-4892-93e3-de6f418b89a7 (E2137). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | FMEA; 3658b007-86c3-42e2-95a8-75471b93e02c |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.75 Recommended Action

**Internal name:** `QP_RecoActionObject`. **Inheritance parent:** `QP_NodeAbstractObject`. **Configuration:** Reuse external interface.

**Object ID:** 13d4a5ac-9329-4eff-8221-1db8d857359c (E371). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | FMEA; 3658b007-86c3-42e2-95a8-75471b93e02c |

**Directly declared fields:** `ActionTaken`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Action Taken | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ActionTaken`; E194 |

### 2.76 Assessment Result Abstract

**Internal name:** `RiskFmk_AResultAbstractObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** 7822ebd3-9ce6-494b-9ff6-88061b2bcd46 (E2564). **Abstract:** true. **Workflow:** false. **Location bound:** true. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Risk Framework; 07a3548e-f2c9-4f6d-88b4-b6469f83864d |

**Directly declared fields:** `RiskAssessment`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Risk Assessment | M:1 to RiskFmk_RiskAssessmentObject; inverse AssessmeResults | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `RiskAssessment`; E61 |

### 2.77 Operational Risk Abstract

**Internal name:** `RiskFmk_OpRiskObject`. **Inheritance parent:** `RiskFmk_RiskObject`. **Configuration:** Reuse external interface.

**Object ID:** 3ede7c62-0206-4a39-b6ed-ba8c99b79f4c (E2086). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Risk Framework; 07a3548e-f2c9-4f6d-88b4-b6469f83864d |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.78 Risk Assessment Abstract

**Internal name:** `RiskFmk_RiskAssessmentObject`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** 5243c661-78da-4e1f-a764-850e3b8e89a1 (E1903). **Abstract:** true. **Workflow:** false. **Location bound:** true. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Risk Framework; 07a3548e-f2c9-4f6d-88b4-b6469f83864d |

**Directly declared fields:** `Risk`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Risk | M:1 to RiskFmk_RiskObject; inverse Assessments | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Risk`; E65 |

### 2.79 Risk

**Internal name:** `RiskFmk_RiskObject`. **Inheritance parent:** `EventFwk_EventScenarioObject`. **Configuration:** Reuse external interface.

**Object ID:** da1604a8-ddbd-463b-83c3-8b5240f9cbbe (E340). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Risk Framework; 07a3548e-f2c9-4f6d-88b4-b6469f83864d |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.80 Employee

**Internal name:** `SysEmployeeEntity`. **Inheritance parent:** `SysSubjectEntity`. **Configuration:** Reuse external interface.

**Object ID:** 6afb3ac6-96db-4072-9293-4d02699d1264 (E104). **Abstract:** false. **Workflow:** false. **Location bound:** true. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | System Objects; fe0eb852-ece3-431a-8813-75d0633a2c64 |

**Directly declared fields:** `Id`, `Supervisor`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Id`; E536 |
| Supervisor | M:1 to SysEmployeeEntity; inverse SupervisorOf | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Supervisor`; E538 |

### 2.81 Group

**Internal name:** `SysGroupEntity`. **Inheritance parent:** `SysSubjectEntity`. **Configuration:** Reuse external interface.

**Object ID:** dc95c2f3-4325-40d5-91af-046ef46fdfc4 (E1557). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | System Objects; fe0eb852-ece3-431a-8813-75d0633a2c64 |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.82 Location

**Internal name:** `SysLocationEntity`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** f5d5209b-0a7d-4858-a302-678fcc065dd2 (E1150). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | System Objects; fe0eb852-ece3-431a-8813-75d0633a2c64 |

**Directly declared fields:** `ChildLocations`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Child Locations | 1:M to SysLocationEntity; inverse ParentLocation | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ChildLocations`; E1263 |

### 2.83 Role

**Internal name:** `SysRoleEntity`. **Inheritance parent:** `SysGroupEntity`. **Configuration:** Reuse external interface.

**Object ID:** 1b44b982-2248-41c5-971e-dfa68eddb196 (E2092). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | System Objects; fe0eb852-ece3-431a-8813-75d0633a2c64 |

**Directly declared fields:** None; declarations remain on the inheritance base.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

### 2.84 Subject

**Internal name:** `SysSubjectEntity`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** 785124a0-20be-4606-8d25-56dd86248bbf (E406). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | System Objects; fe0eb852-ece3-431a-8813-75d0633a2c64 |

**Directly declared fields:** None; declarations remain on the inheritance base.

### 2.85 Workflow Instance

**Internal name:** `SysWorkflowInstanceEntity`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** ff5895e2-f1a0-4f19-83fc-417947fcef53 (E404). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | My Tasks Summary; 31a07fe7-8e4b-41bb-aa95-29bb9a7bb8a0 |

**Directly declared fields:** `CurrentStage`, `DateNotRequired`, `DueDate`, `PersonResponsible`, `PersonResponsibleId`, `RecurringSeries`, `WorkflowStatus`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Current Stage | M:1 to SysWorkflowStageEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CurrentStage`; E1790 |
| Date Not Required | Date | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `DateNotRequired`; E2164 |
| Due Date | Date/Time; timezone disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `DueDate`; E586 |
| Person Responsible | M:1 to SysSubjectEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PersonResponsible`; E401 |
| Person Responsible Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PersonResponsibleId`; E1250 |
| Recurring Series | M:1 to SysWorkflowRecurringSeriesEntity; inverse WorkflowInstances | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `RecurringSeries`; E2197 |
| Workflow Status | Workflow Status Type | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `WorkflowStatus`; E189 |

### 2.86 Workflow Recurring Series

**Internal name:** `SysWorkflowRecurringSeriesEntity`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** 50d7bbfc-a211-4703-90fa-7d12f7866f84 (E118). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | System Objects; fe0eb852-ece3-431a-8813-75d0633a2c64 |

**Directly declared fields:** `NextScheduledDate`, `StartDate`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Next Scheduled Date | Date/Time; timezone disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `NextScheduledDate`; E116 |
| Scheduled Date | Date/Time; timezone disabled | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `StartDate`; E695 |

### 2.87 Workflow Stage

**Internal name:** `SysWorkflowStageEntity`. **Inheritance parent:** None. **Configuration:** Reuse external interface.

**Object ID:** f3ca6a8e-9736-4749-9c16-6c27e180b90e (E705). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | System Objects; fe0eb852-ece3-431a-8813-75d0633a2c64 |

**Directly declared fields:** `SystemName`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| System Name | Text, maximum 250 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `SystemName`; E1856 |

### 2.88 Inspection Source

**Internal name:** `Insp_InspectionSourceObject`. **Inheritance parent:** None. **Configuration:** Add local catalogue.

**Object ID:** Unassigned — proposed local catalogue. **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Object parameter | Target value |
| --- | --- |
| Module | Inspections |
| IsLocalizable | true |
| IsAbstract | false |
| HasWorkflow | false |
| IsLocationBound | false |
| IsSecurityEnabled | true |
| IsAuditEnabled | false |
| IsAttachmentEnabled | false |
| DisplayProperty | Name |
| OrderProperty | Sort |
| DefaultDetailView | Native generated catalogue detail; no assigned GUID yet |
| DefaultInventoryView | Native generated catalogue inventory; no assigned GUID yet |

**Directly declared fields:** `Code`, `Name`, `Active`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, maximum 100; non-localizable; unique within this object; native IsRequired TRUE | Y | None | Program administrator; stable after first use | Rules use Code, never localized Name.. **Add**; internal `Code`; PF-001 |
| Name | Text, maximum 255; localizable; native IsRequired TRUE | Y | None | Program administrator; translation allowed | Display value only; no rule comparisons.. **Add**; internal `Name`; PF-002 |
| Active? | Yes/No; native IsRequired TRUE | Y | TRUE | Program administrator | FALSE prevents new user selection; existing references retained. Required system outcome values cannot be deactivated while used by automation.. **Add**; internal `Active`; PF-003 |
| Sort | Float; precision/scale to validate in tenant; native IsRequired FALSE | N | None | Program administrator | Presentation order only.. **Add**; internal `Sort`; PF-004 |

Initial values:

Inherited columns are record values, not duplicate declarations. Proposed seeds have no invented record GUID.

| Basis | Code | Name | Active? | Sort |
| --- | --- | --- | --- | --- |
| Proposed | INTERNAL | Internal | true | 10 |
| Proposed | EXTERNAL | External | true | 20 |

### 2.89 Inspection Outcome

**Internal name:** `Insp_OutcomeObject`. **Inheritance parent:** None. **Configuration:** Add local catalogue.

**Object ID:** Unassigned — proposed local catalogue. **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Object parameter | Target value |
| --- | --- |
| Module | Inspections |
| IsLocalizable | true |
| IsAbstract | false |
| HasWorkflow | false |
| IsLocationBound | false |
| IsSecurityEnabled | true |
| IsAuditEnabled | false |
| IsAttachmentEnabled | false |
| DisplayProperty | Name |
| OrderProperty | Sort |
| DefaultDetailView | Native generated catalogue detail; no assigned GUID yet |
| DefaultInventoryView | Native generated catalogue inventory; no assigned GUID yet |

**Directly declared fields:** `Code`, `Name`, `Active`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, maximum 100; non-localizable; unique within this object; native IsRequired TRUE | Y | None | Program administrator; stable after first use | Rules use Code, never localized Name.. **Add**; internal `Code`; PF-005 |
| Name | Text, maximum 255; localizable; native IsRequired TRUE | Y | None | Program administrator; translation allowed | Display value only; no rule comparisons.. **Add**; internal `Name`; PF-006 |
| Active? | Yes/No; native IsRequired TRUE | Y | TRUE | Program administrator | FALSE prevents new user selection; existing references retained. Required system outcome values cannot be deactivated while used by automation.. **Add**; internal `Active`; PF-007 |
| Sort | Float; precision/scale to validate in tenant; native IsRequired FALSE | N | None | Program administrator | Presentation order only.. **Add**; internal `Sort`; PF-008 |

Initial values:

Inherited columns are record values, not duplicate declarations. Proposed seeds have no invented record GUID.

| Basis | Code | Name | Active? | Sort |
| --- | --- | --- | --- | --- |
| Proposed | NOT_ASSESSED | Not assessed | true | 10 |
| Proposed | PASS | Pass | true | 20 |
| Proposed | NONCONFORMING | Nonconforming | true | 30 |
| Proposed | NOT_APPLICABLE | Not applicable | true | 40 |

### 2.90 Response Outcome

**Internal name:** `Insp_ResponseOutcomeObject`. **Inheritance parent:** None. **Configuration:** Add local catalogue.

**Object ID:** Unassigned — proposed local catalogue. **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Object parameter | Target value |
| --- | --- |
| Module | Inspections |
| IsLocalizable | true |
| IsAbstract | false |
| HasWorkflow | false |
| IsLocationBound | false |
| IsSecurityEnabled | true |
| IsAuditEnabled | false |
| IsAttachmentEnabled | false |
| DisplayProperty | Name |
| OrderProperty | Sort |
| DefaultDetailView | Native generated catalogue detail; no assigned GUID yet |
| DefaultInventoryView | Native generated catalogue inventory; no assigned GUID yet |

**Directly declared fields:** `Code`, `Name`, `Active`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, maximum 100; non-localizable; unique within this object; native IsRequired TRUE | Y | None | Program administrator; stable after first use | Rules use Code, never localized Name.. **Add**; internal `Code`; PF-009 |
| Name | Text, maximum 255; localizable; native IsRequired TRUE | Y | None | Program administrator; translation allowed | Display value only; no rule comparisons.. **Add**; internal `Name`; PF-010 |
| Active? | Yes/No; native IsRequired TRUE | Y | TRUE | Program administrator | FALSE prevents new user selection; existing references retained. Required system outcome values cannot be deactivated while used by automation.. **Add**; internal `Active`; PF-011 |
| Sort | Float; precision/scale to validate in tenant; native IsRequired FALSE | N | None | Program administrator | Presentation order only.. **Add**; internal `Sort`; PF-012 |

Initial values:

Inherited columns are record values, not duplicate declarations. Proposed seeds have no invented record GUID.

| Basis | Code | Name | Active? | Sort |
| --- | --- | --- | --- | --- |
| Proposed | UNANSWERED | Unanswered | true | 10 |
| Proposed | NOT_APPLICABLE | Not applicable | true | 20 |
| Proposed | INFORMATIONAL | Informational | true | 30 |
| Proposed | NEGATIVE | Negative | true | 40 |
| Proposed | POSITIVE | Positive | true | 50 |

### 2.91 Inspection Classification

**Internal name:** `Insp_ClassificationObject`. **Inheritance parent:** None. **Configuration:** Add local catalogue.

**Object ID:** Unassigned — proposed local catalogue. **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Object parameter | Target value |
| --- | --- |
| Module | Inspections |
| IsLocalizable | true |
| IsAbstract | false |
| HasWorkflow | false |
| IsLocationBound | false |
| IsSecurityEnabled | true |
| IsAuditEnabled | false |
| IsAttachmentEnabled | false |
| DisplayProperty | Name |
| OrderProperty | Sort |
| DefaultDetailView | Native generated catalogue detail; no assigned GUID yet |
| DefaultInventoryView | Native generated catalogue inventory; no assigned GUID yet |

**Directly declared fields:** `Code`, `Name`, `Active`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, maximum 100; non-localizable; unique within this object; native IsRequired TRUE | Y | None | Program administrator; stable after first use | Rules use Code, never localized Name.. **Add**; internal `Code`; PF-013 |
| Name | Text, maximum 255; localizable; native IsRequired TRUE | Y | None | Program administrator; translation allowed | Display value only; no rule comparisons.. **Add**; internal `Name`; PF-014 |
| Active? | Yes/No; native IsRequired TRUE | Y | TRUE | Program administrator | FALSE prevents new user selection; existing references retained. Required system outcome values cannot be deactivated while used by automation.. **Add**; internal `Active`; PF-015 |
| Sort | Float; precision/scale to validate in tenant; native IsRequired FALSE | N | None | Program administrator | Presentation order only.. **Add**; internal `Sort`; PF-016 |

Initial values:

Inherited columns are record values, not duplicate declarations. Proposed seeds have no invented record GUID.

| Basis | Code | Name | Active? | Sort |
| --- | --- | --- | --- | --- |
| Proposed | IN_PROGRESS | In progress | true | 10 |
| Proposed | COMPLETE_OPEN_ACTIONS | Complete with open actions | true | 20 |
| Proposed | COMPLETE_RESOLVED | Complete with all actions closed | true | 30 |

### 2.92 Operational Resource

**Internal name:** `Shared_OperationalResource`. **Inheritance parent:** Unresolved. **Configuration:** Conditional external binding; no local object creation.

**Object ID:** Unassigned — proposed external interface. **Abstract:** false. **Workflow:** false. **Location bound:** Unresolved. **Security:** Unresolved (preserve except §8 rules).

**Directly declared fields:** `Id`, `Name`, `Active`, `Establishment`, `TechnologyCode`.

G05 supplies this interface; it is not a local object-creation instruction. Physical identity, inheritance and field names remain unresolved.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Id | GUID; authoritative stable resource identity | Y | Assigned by enterprise authority | Read only in Inspections | External authority owns identity; no generated local substitute.. **External input**; internal `Id`; PF-017 |
| Name | Text maximum 255 (proposed interface constraint) | Y | Enterprise authority | Read only in Inspections | Display only; not a matching key.. **External input**; internal `Name`; PF-018 |
| Active? | Yes/No | Y | Enterprise authority | Read only in Inspections | Inactive prevents new selection; historical references remain.. **External input**; internal `Active`; PF-019 |
| Establishment | M:1 to SysLocationEntity; inverse disabled | Y | Enterprise authority | Read only in Inspections | Filter resources by inspection Location; security remains governed by native Location.. **External input**; internal `Establishment`; PF-020 |
| Technology Code | Text maximum 100; externally governed stable dimension, not a local selector | N | Enterprise authority or NULL | Read only in Inspections | Report only when authority supplies it; missing value remains unknown. No local inline choice list.. **External input**; internal `TechnologyCode`; PF-021 |

## 3. Publication and inputs

Use [technical specification §7](solution-specification.md#7-native-handlers-and-publication-copies) for the exact retained/new copy rows and §9 for the supplied configuration values. Retained fields keep their original native publication disposition; only ContributesToOutcome is added to E265; ActReqChoices retains its existing copy and IsNegative remains on shared Choice. Field lists use one row per direct declaration and do not duplicate inherited declarations.
