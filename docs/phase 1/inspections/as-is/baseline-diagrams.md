# Baseline logical object model

Source: supplied package only. Labels map stable internal Mermaid identifiers to exported display names. Dependencies can be incomplete. Inverse-only relationships whose declaring property is not exported are labelled inverse_1_to_M; they preserve known navigation without fabricating the missing declaration. Association multiplicity is omitted where the package does not establish it. Native map nodes are explicit exported map-name labels, not separately exported custom object definitions.

## Action Plans

```mermaid
classDiagram
direction LR
class ActionPlans_ActionPlanAbsObject["Action Plan Abstract"]
<<abstract>> ActionPlans_ActionPlanAbsObject
class ActionPlans_ActioPlanTemObject["Action Plan Template"]
class ActionPlans_ActivityAbsObject["Activity Abstract"]
<<abstract>> ActionPlans_ActivityAbsObject
class ActionPlans_ActTypeofReviewObject["Action - Type of Review"]
class ActionPlans_GlobActPlanAbsObject["Global Action Plan Abstract"]
<<abstract>> ActionPlans_GlobActPlanAbsObject
class FragApplication_AbCorrectivActiObject["Abstract Corrective Action"]
<<abstract>> FragApplication_AbCorrectivActiObject
class RiskFmk_RiskObject["Risk"]
<<abstract>> RiskFmk_RiskObject
class RiskFmk_AResultAbstractObject["Assessment Result Abstract"]
<<abstract>> RiskFmk_AResultAbstractObject
class SysEmployeeEntity["Employee"]
class CFW_FindingObject["Finding (CFW)"]
<<abstract>> CFW_FindingObject
class NCR_NCRObject["NCR"]
class PTW_PermitRecordObject["Permit Record"]
class EventFwk_VOCAbstractObject["VOC Abstract"]
<<abstract>> EventFwk_VOCAbstractObject
FragApplication_AbCorrectivActiObject <|-- ActionPlans_ActionPlanAbsObject : inherits
FragApplication_AbCorrectivActiObject <|-- ActionPlans_ActivityAbsObject : inherits
FragApplication_AbCorrectivActiObject <|-- ActionPlans_GlobActPlanAbsObject : inherits
ActionPlans_ActionPlanAbsObject --> "0..1" RiskFmk_RiskObject : RiskAbs
ActionPlans_ActionPlanAbsObject --> "0..1" RiskFmk_AResultAbstractObject : AssessResults
ActionPlans_ActionPlanAbsObject --> ActionPlans_ActivityAbsObject : Tasks_inverse_1_to_M
class Map_1021["ActionPlans_ActivityAbsPrereActivitiesToActionPlans_ActivityAbsMapObject"]
<<native_map>> Map_1021
ActionPlans_ActivityAbsObject --> Map_1021 : PrereActivities
Map_1021 --> ActionPlans_ActivityAbsObject : M_to_N
ActionPlans_ActionPlanAbsObject --> ActionPlans_ActivityAbsObject : Activites_inverse_1_to_M
ActionPlans_ActionPlanAbsObject --> "0..1" SysEmployeeEntity : PersonResp
class Map_2038["CFW_FindingAPsToActionPlans_ActionPlanAbsMapObject"]
<<native_map>> Map_2038
ActionPlans_ActionPlanAbsObject --> Map_2038 : CFWFindings
Map_2038 --> CFW_FindingObject : M_to_N
ActionPlans_ActionPlanAbsObject --> "0..1" NCR_NCRObject : NCR
ActionPlans_ActionPlanAbsObject --> "0..1" ActionPlans_ActTypeofReviewObject : ReviewType
ActionPlans_ActionPlanAbsObject --> "0..1" PTW_PermitRecordObject : PermitAbstract
ActionPlans_ActionPlanAbsObject --> "0..1" EventFwk_VOCAbstractObject : VOCAbstract
ActionPlans_ActionPlanAbsObject --> "0..1" ActionPlans_ActioPlanTemObject : Template
```

## Corrective Action Reporting

```mermaid
classDiagram
direction LR
class CAR_CARObject["CAR"]
class ComplyFramework_CARAbstractObject["CAR Abstract"]
<<abstract>> ComplyFramework_CARAbstractObject
ComplyFramework_CARAbstractObject <|-- CAR_CARObject : inherits
```

## Cause Analysis

```mermaid
classDiagram
direction LR
class CauseAnalysis_CauseAnalysisObject["Cause Analysis"]
<<abstract>> CauseAnalysis_CauseAnalysisObject
class CauseAnalysis_RootCauseObject["Root Cause"]
```

## Checklist Framework (v2)

```mermaid
classDiagram
direction LR
class CFW_FindingObject["Finding (CFW)"]
<<abstract>> CFW_FindingObject
class EventFwk_EventObject["Event"]
EventFwk_EventObject <|-- CFW_FindingObject : inherits
```

## Checklist Framework

```mermaid
classDiagram
direction LR
class CLF_AnswerTypeObject["CLF - Answer Type"]
class CLF_CheckliAbstractObject["Checklist Abstract"]
<<abstract>> CLF_CheckliAbstractObject
class CLF_ChecklistAnswerObject["Checklist Answer"]
<<abstract>> CLF_ChecklistAnswerObject
class CLF_ChecklistObject["Checklist"]
class CLF_ChecklistTypeObject["Checklist Type"]
class CLF_ChoiceListObject["Choice List"]
class CLF_ChoiceObject["Choice"]
class CLF_FindingDDObject["CLF - Finding Due Date"]
class CLF_FindingObject["Finding"]
class CLF_FindingStatusObject["Finding Status"]
class CLF_InsActionPlanObject["Inspection Action Plan"]
class CLF_LocalizResourceObject["Localizable Resource"]
class CLF_MultichecklistsObject["Audit (Multiple checklists)"]
class CLF_PreferencesObject["Preferences"]
class CLF_PubChecklistObject["Published Checklist"]
class CLF_PubQuestObject["Published Question"]
class CLF_QuestAbstractObject["Question Abstract"]
<<abstract>> CLF_QuestAbstractObject
class CLF_QuestionAnswerObject["Question Answer"]
class CLF_QuestObject["Question"]
class CLF_SectionAnswerObject["Section Answer"]
class CLF_SectionObject["Section"]
class CLF_SinglechecklistObject["Single checklist"]
class CLF_SubchecklistObject["Sub-checklist"]
class CLF_TagObject["Tag"]
class EventFwk_EventObject["Event"]
class ActionPlans_ActionPlanAbsObject["Action Plan Abstract"]
<<abstract>> ActionPlans_ActionPlanAbsObject
class Insp_EquipInspectionObject["Inspection"]
class FragApplication_ColorObject["Color"]
class Insp_MobileActionObject["Mobile Action"]
class SysEmployeeEntity["Employee"]
class SysLocationEntity["Location"]
class SysWorkflowInstanceEntity["Workflow Instance"]
class CAR_CARObject["CAR"]
CLF_CheckliAbstractObject <|-- CLF_ChecklistObject : inherits
EventFwk_EventObject <|-- CLF_FindingObject : inherits
ActionPlans_ActionPlanAbsObject <|-- CLF_InsActionPlanObject : inherits
CLF_ChecklistAnswerObject <|-- CLF_MultichecklistsObject : inherits
CLF_CheckliAbstractObject <|-- CLF_PubChecklistObject : inherits
CLF_QuestAbstractObject <|-- CLF_PubQuestObject : inherits
CLF_QuestAbstractObject <|-- CLF_QuestObject : inherits
CLF_ChecklistAnswerObject <|-- CLF_SinglechecklistObject : inherits
CLF_ChecklistAnswerObject <|-- CLF_SubchecklistObject : inherits
CLF_QuestAbstractObject --> "0..1" CLF_ChoiceListObject : ChoiceList
CLF_InsActionPlanObject --> "0..1" Insp_EquipInspectionObject : hRelatedInsp
CLF_FindingObject --> "0..1" CLF_FindingStatusObject : FindingStatus
CLF_QuestionAnswerObject --> "0..1" CLF_ChoiceObject : MassUpChoice
CLF_PubQuestObject --> "1" CLF_QuestObject : Question
class Map_250["CLF_PubQuestVisibleIfsToCLF_ChoiceMapObject"]
<<native_map>> Map_250
CLF_PubQuestObject --> Map_250 : VisibleIfs
Map_250 --> CLF_ChoiceObject : M_to_N
class Map_260["CLF_PubChecklistPubQuestionsToCLF_PubQuestMapObject"]
<<native_map>> Map_260
CLF_PubChecklistObject --> Map_260 : PubQuestions
Map_260 --> CLF_PubQuestObject : M_to_N
CLF_PubQuestObject --> "0..1" CLF_PubQuestObject : DependsOnPub
CLF_PubQuestObject --> "0..1" CLF_ChecklistAnswerObject : hCheckAnswer
CLF_ChoiceObject --> "1" CLF_ChoiceListObject : ChoiceList
CLF_ChoiceObject --> "0..1" FragApplication_ColorObject : BColor
CLF_ChoiceObject --> "0..1" Insp_MobileActionObject : MobileAction
CLF_ChoiceObject --> "0..1" FragApplication_ColorObject : TColor
CLF_QuestObject --> "0..1" CLF_SectionObject : ExistingSection
class Map_392["CLF_InsActionPlanRelateQuestionsToCLF_QuestionAnswerMapObject"]
<<native_map>> Map_392
CLF_InsActionPlanObject --> Map_392 : RelateQuestions
Map_392 --> CLF_QuestionAnswerObject : M_to_N
CLF_QuestionAnswerObject --> "0..1" CLF_SectionAnswerObject : SectionAnswer
CLF_SectionAnswerObject --> "0..1" CLF_ChecklistAnswerObject : ChecklistAnswer
class Map_547["CLF_QuestionAnswerFindingsToCLF_FindingMapObject"]
<<native_map>> Map_547
CLF_QuestionAnswerObject --> Map_547 : Findings
Map_547 --> CLF_FindingObject : M_to_N
class Map_568["CLF_InsActionPlanFindingsToCLF_FindingMapObject"]
<<native_map>> Map_568
CLF_InsActionPlanObject --> Map_568 : Findings
Map_568 --> CLF_FindingObject : M_to_N
CLF_QuestionAnswerObject --> "1" CLF_PubQuestObject : PubQuestion
CLF_QuestionAnswerObject --> "0..1" CLF_QuestionAnswerObject : DependsOn
CLF_QuestAbstractObject --> "0..1" CLF_ChoiceObject : DefaultChoice
class Map_643["CLF_QuestAbstractActReqChoicesToCLF_ChoiceMapObject"]
<<native_map>> Map_643
CLF_QuestAbstractObject --> Map_643 : ActReqChoices
Map_643 --> CLF_ChoiceObject : M_to_N
CLF_QuestAbstractObject --> "0..1" CLF_AnswerTypeObject : AnswerType
class Map_649["CLF_QuestAbstractComReqChoicesToCLF_ChoiceMapObject"]
<<native_map>> Map_649
CLF_QuestAbstractObject --> Map_649 : ComReqChoices
Map_649 --> CLF_ChoiceObject : M_to_N
class Map_652["CLF_QuestAbstractFindReqChoicesToCLF_ChoiceMapObject"]
<<native_map>> Map_652
CLF_QuestAbstractObject --> Map_652 : FindReqChoices
Map_652 --> CLF_ChoiceObject : M_to_N
class Map_655["CLF_QuestAbstractDefaultChoicesToCLF_ChoiceMapObject"]
<<native_map>> Map_655
CLF_QuestAbstractObject --> Map_655 : DefaultChoices
Map_655 --> CLF_ChoiceObject : M_to_N
CLF_QuestionAnswerObject --> "1" CLF_ChecklistAnswerObject : ChecklistAnswer
CLF_PubChecklistObject --> "1" CLF_ChecklistObject : Checklist
class Map_715["CLF_ChecklistQuestionsToCLF_QuestMapObject"]
<<native_map>> Map_715
CLF_ChecklistObject --> Map_715 : Questions
Map_715 --> CLF_QuestObject : M_to_N
CLF_QuestionAnswerObject --> "0..1" CLF_ChoiceObject : Choice
CLF_ChecklistAnswerObject --> "0..1" CLF_ChecklistAnswerObject : MasterChecklist
CLF_InsActionPlanObject --> "0..1" CLF_ChecklistAnswerObject : ChecklistAnswer
class Map_886["CLF_QuestionAnswerChoicesToCLF_ChoiceMapObject"]
<<native_map>> Map_886
CLF_QuestionAnswerObject --> Map_886 : Choices
Map_886 --> CLF_ChoiceObject : M_to_N
CLF_ChecklistObject --> "1" CLF_ChecklistTypeObject : ChecklistType
CLF_FindingStatusObject --> "0..1" FragApplication_ColorObject : BC
CLF_QuestObject --> "1" CLF_ChecklistTypeObject : ChecklistType
CLF_FindingObject --> "0..1" CLF_ChecklistAnswerObject : ChecklistAnswer
class Map_1329["CLF_QuestVisibleIfsToCLF_ChoiceMapObject"]
<<native_map>> Map_1329
CLF_QuestObject --> Map_1329 : VisibleIfs
Map_1329 --> CLF_ChoiceObject : M_to_N
CLF_QuestAbstractObject --> "0..1" CLF_ChoiceObject : ValueChoiceList
CLF_ChecklistAnswerObject --> "0..1" CLF_PubChecklistObject : PubChecklist
CLF_QuestObject --> "0..1" CLF_QuestObject : DependsOn
CLF_QuestObject --> "0..1" CLF_ChecklistObject : HelperChecklist
CLF_SectionObject --> "0..1" CLF_ChecklistObject : Checklist
class Map_1519["CLF_QuestAbstractTriggerFindingsToCLF_ChoiceMapObject"]
<<native_map>> Map_1519
CLF_QuestAbstractObject --> Map_1519 : TriggerFindings
Map_1519 --> CLF_ChoiceObject : M_to_N
class Map_1619["CLF_QuestionAnswerQuestionAnswersToCLF_InsActionPlanMapObject"]
<<native_map>> Map_1619
CLF_InsActionPlanObject --> Map_1619 : QuestionAnswers
Map_1619 --> CLF_QuestionAnswerObject : M_to_N
CLF_FindingStatusObject --> "0..1" FragApplication_ColorObject : TC
class Map_1745["CLF_QuestReferencesToCLF_TagMapObject"]
<<native_map>> Map_1745
CLF_QuestObject --> Map_1745 : References
Map_1745 --> CLF_TagObject : M_to_N
CLF_PubChecklistObject --> "0..1" CLF_ChecklistTypeObject : ChecklistType
CLF_FindingObject --> "1" SysEmployeeEntity : PersResponsible
CLF_InsActionPlanObject --> "1" SysEmployeeEntity : ActionOwner
CLF_FindingObject --> "1" CLF_FindingDDObject : DueIn
CLF_ChecklistAnswerObject --> "1" SysLocationEntity : Location
CLF_ChecklistAnswerObject --> "0..1" SysWorkflowInstanceEntity : Workflow
CLF_ChecklistAnswerObject --> "1" SysEmployeeEntity : CreatedBy
CLF_MultichecklistsObject --> "0..1" SysEmployeeEntity : PersResponsible
CLF_ChecklistAnswerObject --> "0..1" SysEmployeeEntity : PersResponsibl
CLF_CheckliAbstractObject --> "1" SysLocationEntity : Location
CLF_ChecklistAnswerObject --> "0..1" SysEmployeeEntity : DefPersRespFind
CLF_MultichecklistsObject --> CAR_CARObject : RelatedCAR_inverse_1_to_M
```

## Quality Comply Framework

```mermaid
classDiagram
direction LR
class ComplyFramework_CARAbstractObject["CAR Abstract"]
<<abstract>> ComplyFramework_CARAbstractObject
```

## Configuration Asset App Settings, By Summit EHSQ

```mermaid
classDiagram
direction LR
class ConfgAppSetting_GlobAppSettingsObject["Global App Settings"]
class ConfgAppSetting_IconAssetObject["Icon Asset"]
class ConfgAppSetting_InstructionTextObject["Instruction Text"]
class ConfgAppSetting_PersRespOptionObject["Person Responsible Option"]
class ConfgAppSetting_SpecAppSettingsObject["Abstract Application Specific App Settings"]
class ConfgAppSetting_TPanelGeneratorObject["Instruction Text Panel Generator"]
ConfgAppSetting_SpecAppSettingsObject <|-- ConfgAppSetting_GlobAppSettingsObject : inherits
ConfgAppSetting_SpecAppSettingsObject --> "0..1" ConfgAppSetting_IconAssetObject : CalIconSel
ConfgAppSetting_SpecAppSettingsObject --> "0..1" ConfgAppSetting_IconAssetObject : ClockIcon
ConfgAppSetting_InstructionTextObject --> "0..1" ConfgAppSetting_TPanelGeneratorObject : TemplaGenerator
ConfgAppSetting_SpecAppSettingsObject --> "0..1" ConfgAppSetting_IconAssetObject : LoStructureIcon
ConfgAppSetting_SpecAppSettingsObject --> "0..1" ConfgAppSetting_IconAssetObject : WrkflowStaIcon
ConfgAppSetting_SpecAppSettingsObject --> "0..1" ConfgAppSetting_IconAssetObject : ResIconWorkflow
ConfgAppSetting_SpecAppSettingsObject --> "0..1" ConfgAppSetting_IconAssetObject : DueDateIcon
```

## Event Framework

```mermaid
classDiagram
direction LR
class EventFwk_AbsEvidenceObject["Abstract Evidence"]
<<abstract>> EventFwk_AbsEvidenceObject
class EventFwk_CAPAObject["CAPA"]
class EventFwk_EventActionPlanObject["Event Action Plan"]
class EventFwk_EventCostObject["Event Cost"]
class EventFwk_EventObject["Event"]
class EventFwk_EventScenarioObject["Event Scenario"]
class EventFwk_EventTypeObject["Event Type"]
class EventFwk_LessonLearnedObject["Lesson Learned"]
class EventFwk_NonConfAbstractObject["Nonconformance Abstract"]
<<abstract>> EventFwk_NonConfAbstractObject
class EventFwk_SeverityObject["Severity"]
class EventFwk_TeamMemberObject["Team Member"]
class EventFwk_VOCAbstractObject["VOC Abstract"]
<<abstract>> EventFwk_VOCAbstractObject
class FragApplication_AbCorrectivActiObject["Abstract Corrective Action"]
<<abstract>> FragApplication_AbCorrectivActiObject
class ActionPlans_ActionPlanAbsObject["Action Plan Abstract"]
<<abstract>> ActionPlans_ActionPlanAbsObject
class FragApplication_AbstractCostObject["Abstract Cost"]
<<abstract>> FragApplication_AbstractCostObject
class ActionPlans_GlobActPlanAbsObject["Global Action Plan Abstract"]
<<abstract>> ActionPlans_GlobActPlanAbsObject
class SysEmployeeEntity["Employee"]
class SysLocationEntity["Location"]
class CauseAnalysis_RootCauseObject["Root Cause"]
class CauseAnalysis_CauseAnalysisObject["Cause Analysis"]
<<abstract>> CauseAnalysis_CauseAnalysisObject
class RiskFmk_OpRiskObject["Operational Risk Abstract"]
<<abstract>> RiskFmk_OpRiskObject
class ComplyFramework_CARAbstractObject["CAR Abstract"]
<<abstract>> ComplyFramework_CARAbstractObject
FragApplication_AbCorrectivActiObject <|-- EventFwk_CAPAObject : inherits
ActionPlans_ActionPlanAbsObject <|-- EventFwk_EventActionPlanObject : inherits
FragApplication_AbstractCostObject <|-- EventFwk_EventCostObject : inherits
EventFwk_EventScenarioObject <|-- EventFwk_EventObject : inherits
ActionPlans_GlobActPlanAbsObject <|-- EventFwk_LessonLearnedObject : inherits
EventFwk_EventObject <|-- EventFwk_NonConfAbstractObject : inherits
EventFwk_EventObject <|-- EventFwk_VOCAbstractObject : inherits
EventFwk_EventObject --> EventFwk_CAPAObject : CAPAs_inverse_1_to_M
EventFwk_EventObject --> "0..1" EventFwk_EventTypeObject : TypeOfEvent
EventFwk_EventObject --> EventFwk_TeamMemberObject : TeamMembers_inverse_1_to_M
EventFwk_EventObject --> "0..1" EventFwk_EventObject : ParentEvent
EventFwk_EventObject --> "0..1" SysEmployeeEntity : TeamLeader
EventFwk_EventObject --> "0..1" EventFwk_SeverityObject : Severity
EventFwk_EventObject --> EventFwk_EventCostObject : Costs_inverse_1_to_M
EventFwk_EventObject --> EventFwk_EventActionPlanObject : EventActionPlan_inverse_1_to_M
EventFwk_EventObject --> EventFwk_AbsEvidenceObject : Evidence_inverse_1_to_M
EventFwk_EventScenarioObject --> "1" SysLocationEntity : Location
EventFwk_EventObject --> CauseAnalysis_RootCauseObject : RootCauses_inverse_1_to_M
EventFwk_EventObject --> EventFwk_LessonLearnedObject : LessonsLearned_inverse_1_to_M
EventFwk_EventObject --> CauseAnalysis_CauseAnalysisObject : CauseAnalysis_inverse_1_to_M
EventFwk_EventObject --> "0..1" RiskFmk_OpRiskObject : Risk
class Map_2634["ComplyFramework_CARAbstractRelatedEventsToEventFwk_EventMapObject"]
<<native_map>> Map_2634
EventFwk_EventObject --> Map_2634 : CAREvent
Map_2634 --> ComplyFramework_CARAbstractObject : M_to_N
EventFwk_EventObject --> "0..1" SysEmployeeEntity : ReportedBy
EventFwk_EventObject --> "0..1" SysEmployeeEntity : FinalApprover
EventFwk_EventObject --> "0..1" SysEmployeeEntity : Investigator
```

## Fragment Application

```mermaid
classDiagram
direction LR
class FragApplication_AbCorrectivActiObject["Abstract Corrective Action"]
<<abstract>> FragApplication_AbCorrectivActiObject
class FragApplication_AbstractCostObject["Abstract Cost"]
<<abstract>> FragApplication_AbstractCostObject
class FragApplication_ActionCostObject["Action Cost"]
class FragApplication_ColorObject["Color"]
class FragApplication_CorrectivePreveObject["Abstract Corrective Action Corrective/Preventive"]
class FragApplication_EquipmentObject["Equipment"]
class FragApplication_PrgressNotesObject["Progress Notes"]
class SysWorkflowInstanceEntity["Workflow Instance"]
class QP_RecoActionObject["Recommended Action"]
class CLF_ChecklistAnswerObject["Checklist Answer"]
<<abstract>> CLF_ChecklistAnswerObject
class EventFwk_EventObject["Event"]
class CLF_QuestionAnswerObject["Question Answer"]
class QP_ReactionPlanObject["Reaction Plan"]
class ComplyFramework_CARAbstractObject["CAR Abstract"]
<<abstract>> ComplyFramework_CARAbstractObject
class MetObjectEntity["Object"]
class SysEmployeeEntity["Employee"]
class SysLocationEntity["Location"]
FragApplication_AbstractCostObject <|-- FragApplication_ActionCostObject : inherits
FragApplication_AbCorrectivActiObject --> "0..1" SysWorkflowInstanceEntity : Workflow
FragApplication_AbCorrectivActiObject --> "0..1" QP_RecoActionObject : RecoAction
FragApplication_AbCorrectivActiObject --> "0..1" CLF_ChecklistAnswerObject : CheckListAnsAct
FragApplication_AbCorrectivActiObject --> "0..1" EventFwk_EventObject : EventRelated
class Map_709["FragApplication_AbCorrectivActiRelatedQstionsToCLF_QuestionAnswerMapObject"]
<<native_map>> Map_709
FragApplication_AbCorrectivActiObject --> Map_709 : RelatedQstions
Map_709 --> CLF_QuestionAnswerObject : M_to_N
FragApplication_AbCorrectivActiObject --> FragApplication_ActionCostObject : Costs_inverse_1_to_M
FragApplication_ColorObject --> "0..1" FragApplication_ColorObject : TextColor
FragApplication_AbCorrectivActiObject --> "0..1" QP_ReactionPlanObject : ReactionPlan
FragApplication_AbCorrectivActiObject --> "0..1" ComplyFramework_CARAbstractObject : CAR
FragApplication_AbCorrectivActiObject --> FragApplication_PrgressNotesObject : ProgressNotes_inverse_1_to_M
FragApplication_AbCorrectivActiObject --> "0..1" MetObjectEntity : ActPlanSysType
FragApplication_AbCorrectivActiObject --> "0..1" FragApplication_CorrectivePreveObject : CPARTypeID
FragApplication_AbCorrectivActiObject --> "0..1" MetObjectEntity : SourceObject
FragApplication_AbCorrectivActiObject --> "0..1" SysEmployeeEntity : CompletedBy
FragApplication_AbCorrectivActiObject --> "0..1" SysEmployeeEntity : ReportedBy
FragApplication_AbCorrectivActiObject --> "1" SysLocationEntity : Location
```

## Inspections

```mermaid
classDiagram
direction LR
class Insp_ActTypeofReviewObject["Inspection - Type of Review"]
class Insp_EquipInspectionObject["Inspection"]
class Insp_EquipListOptionObject["Equipment List Option"]
class Insp_InspectionAbsObject["Inspection Abstract"]
<<abstract>> Insp_InspectionAbsObject
class Insp_InspRoleOptionObject["Inspection Role Option"]
class Insp_IReviewDecisionObject["Inspection Review Decision"]
class Insp_MobileActionObject["Mobile Action"]
class Insp_TypeObject["Type of Inspection"]
class CLF_ChecklistAnswerObject["Checklist Answer"]
<<abstract>> CLF_ChecklistAnswerObject
class CLF_ChecklistTypeObject["Checklist Type"]
class ConfgAppSetting_InstructionTextObject["Instruction Text"]
class SysEmployeeEntity["Employee"]
class SysLocationEntity["Location"]
class CLF_PubChecklistObject["Published Checklist"]
class SysRoleEntity["Role"]
class ConfgAppSetting_PersRespOptionObject["Person Responsible Option"]
class FragApplication_EquipmentObject["Equipment"]
class SysSubjectEntity["Subject"]
Insp_InspectionAbsObject <|-- Insp_EquipInspectionObject : inherits
CLF_ChecklistAnswerObject <|-- Insp_InspectionAbsObject : inherits
CLF_ChecklistTypeObject <|-- Insp_TypeObject : inherits
Insp_EquipInspectionObject --> "0..1" ConfgAppSetting_InstructionTextObject : IPReview2
Insp_InspectionAbsObject --> "1" SysEmployeeEntity : PersResponsible
Insp_EquipInspectionObject --> "0..1" ConfgAppSetting_InstructionTextObject : IPCreate
Insp_TypeObject --> "0..1" Insp_InspRoleOptionObject : InspRoleOption
class Map_689["Insp_InspectionAbsDistributioListToSetup_EmployeeMapObject"]
<<native_map>> Map_689
Insp_InspectionAbsObject --> Map_689 : DistributioList
Map_689 --> SysEmployeeEntity : M_to_N
Insp_TypeObject --> "0..1" Insp_InspRoleOptionObject : InspRoleOption2
Insp_EquipInspectionObject --> "0..1" ConfgAppSetting_InstructionTextObject : IPInProgress
Insp_InspectionAbsObject --> "0..1" SysLocationEntity : HelperLocation
Insp_InspectionAbsObject --> "0..1" CLF_PubChecklistObject : InspecChecklist
Insp_TypeObject --> "0..1" SysRoleEntity : Role
Insp_TypeObject --> "0..1" ConfgAppSetting_PersRespOptionObject : PRMethod
Insp_EquipInspectionObject --> "0..1" SysLocationEntity : HelperLocatio2
Insp_EquipInspectionObject --> "0..1" FragApplication_EquipmentObject : Equipment
Insp_TypeObject --> "0..1" SysRoleEntity : Role2
Insp_TypeObject --> "0..1" ConfgAppSetting_PersRespOptionObject : PRMethodSndRev
Insp_TypeObject --> "0..1" Insp_EquipListOptionObject : ELOptions
Insp_TypeObject --> "0..1" SysSubjectEntity : SecondReviewer
Insp_TypeObject --> "0..1" SysSubjectEntity : FirstReviewer
Insp_EquipInspectionObject --> "0..1" ConfgAppSetting_InstructionTextObject : IPDraft
Insp_InspectionAbsObject --> "0..1" SysEmployeeEntity : CompletedBy
Insp_EquipInspectionObject --> "0..1" SysEmployeeEntity : Reviewer
Insp_InspectionAbsObject --> "0..1" Insp_IReviewDecisionObject : RevieweDecision
Insp_InspectionAbsObject --> "1" Insp_TypeObject : TypeOfInspec
Insp_EquipInspectionObject --> "0..1" ConfgAppSetting_InstructionTextObject : IPReview
Insp_InspectionAbsObject --> "0..1" SysEmployeeEntity : FirstReviewBy
Insp_InspectionAbsObject --> "0..1" SysEmployeeEntity : SecondReviewBy
Insp_InspectionAbsObject --> "0..1" Insp_IReviewDecisionObject : RevieweDecisio1
```

## System Objects

```mermaid
classDiagram
direction LR
class MetObjectEntity["Object"]
class MetTypeEntity["Type"]
<<abstract>> MetTypeEntity
class SysEmployeeEntity["Employee"]
class SysGroupEntity["Group"]
<<abstract>> SysGroupEntity
class SysLocationEntity["Location"]
class SysRoleEntity["Role"]
class SysSubjectEntity["Subject"]
class SysWorkflowRecurringSeriesEntity["Workflow Recurring Series"]
class SysWorkflowStageEntity["Workflow Stage"]
MetTypeEntity <|-- MetObjectEntity : inherits
SysSubjectEntity <|-- SysEmployeeEntity : inherits
SysSubjectEntity <|-- SysGroupEntity : inherits
SysGroupEntity <|-- SysRoleEntity : inherits
SysEmployeeEntity --> "0..1" SysEmployeeEntity : Supervisor
SysLocationEntity --> SysLocationEntity : ChildLocations_inverse_1_to_M
```

## Nonconformance Reporting

```mermaid
classDiagram
direction LR
class NCR_NCRObject["NCR"]
class EventFwk_NonConfAbstractObject["Nonconformance Abstract"]
<<abstract>> EventFwk_NonConfAbstractObject
EventFwk_NonConfAbstractObject <|-- NCR_NCRObject : inherits
```

## Permit To Work

```mermaid
classDiagram
direction LR
class PTW_PermitRecordObject["Permit Record"]
```

## FMEA

```mermaid
classDiagram
direction LR
class QP_NodeAbstractObject["Node"]
<<abstract>> QP_NodeAbstractObject
class QP_ProjRevObject["Project Revision"]
class QP_ReactionPlanObject["Reaction Plan"]
class QP_RecoActionObject["Recommended Action"]
QP_NodeAbstractObject <|-- QP_ReactionPlanObject : inherits
QP_NodeAbstractObject <|-- QP_RecoActionObject : inherits
QP_NodeAbstractObject --> "1" QP_ProjRevObject : ProjRev
```

## Risk Framework

```mermaid
classDiagram
direction LR
class RiskFmk_AResultAbstractObject["Assessment Result Abstract"]
<<abstract>> RiskFmk_AResultAbstractObject
class RiskFmk_OpRiskObject["Operational Risk Abstract"]
<<abstract>> RiskFmk_OpRiskObject
class RiskFmk_RiskAssessmentObject["Risk Assessment Abstract"]
<<abstract>> RiskFmk_RiskAssessmentObject
class RiskFmk_RiskObject["Risk"]
<<abstract>> RiskFmk_RiskObject
class EventFwk_EventScenarioObject["Event Scenario"]
RiskFmk_RiskObject <|-- RiskFmk_OpRiskObject : inherits
EventFwk_EventScenarioObject <|-- RiskFmk_RiskObject : inherits
RiskFmk_AResultAbstractObject --> "0..1" RiskFmk_RiskAssessmentObject : RiskAssessment
RiskFmk_RiskAssessmentObject --> "0..1" RiskFmk_RiskObject : Risk
```

## My Tasks Summary

```mermaid
classDiagram
direction LR
class SysWorkflowInstanceEntity["Workflow Instance"]
class SysSubjectEntity["Subject"]
class SysWorkflowStageEntity["Workflow Stage"]
class SysWorkflowRecurringSeriesEntity["Workflow Recurring Series"]
SysWorkflowInstanceEntity --> "0..1" SysSubjectEntity : PersonResponsible
SysWorkflowInstanceEntity --> "0..1" SysWorkflowStageEntity : CurrentStage
SysWorkflowInstanceEntity --> "0..1" SysWorkflowRecurringSeriesEntity : RecurringSeries
```
