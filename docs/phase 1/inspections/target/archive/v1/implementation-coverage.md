# Inspections implementation scope coverage

Companion to [the draft implementation plan](implementation-plan.md). This inventory maps the target specification to configuration assignments and deliberate reuse. It does not broaden scope to owning external applications or perform migration/verification.

## 1. Object coverage

| Object | Target disposition | Implementation tasks or reuse |
| --- | --- | --- |
| ActionPlans_ActionPlanAbsObject | Retain | IMP-10, IMP-38 |
| ActionPlans_ActioPlanTemObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| ActionPlans_ActivityAbsObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| ActionPlans_ActTypeofReviewObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| ActionPlans_GlobActPlanAbsObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| CAR_CARObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| CauseAnalysis_CauseAnalysisObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| CauseAnalysis_RootCauseObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| CFW_FindingObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| CLF_AnswerTypeObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| CLF_CheckliAbstractObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| CLF_ChecklistAnswerObject | Retain | IMP-11, IMP-19, IMP-20, IMP-47, IMP-35, IMP-44, IMP-29 |
| CLF_ChecklistObject | Retain | IMP-03, IMP-24, IMP-18 |
| CLF_ChecklistTypeObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| CLF_ChoiceListObject | Retain | IMP-03, IMP-24, IMP-18 |
| CLF_ChoiceObject | Retain | IMP-03, IMP-24, IMP-18 |
| CLF_FindingDDObject | Compatibility only: no new Inspections pathway | Reuse existing object, inheritance and exported fields; no new configuration task |
| CLF_FindingObject | Compatibility only: no new Inspections pathway | Reuse existing object, inheritance and exported fields; no new configuration task |
| CLF_FindingStatusObject | Compatibility only: no new Inspections pathway | Reuse existing object, inheritance and exported fields; no new configuration task |
| CLF_InsActionPlanObject | Retain | IMP-10, IMP-37, IMP-22, IMP-11, IMP-38, IMP-42 |
| CLF_LocalizResourceObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| CLF_MultichecklistsObject | Compatibility only: no new Inspections pathway | Reuse existing object, inheritance and exported fields; no new configuration task |
| CLF_PreferencesObject | Compatibility only: no new Inspections pathway | Reuse existing object, inheritance and exported fields; no new configuration task |
| CLF_PubChecklistObject | Retain | IMP-13, IMP-26, IMP-27 |
| CLF_PubQuestObject | Retain | IMP-12, IMP-26, IMP-27 |
| CLF_QuestAbstractObject | Retain | IMP-04, IMP-24, IMP-26, IMP-18 |
| CLF_QuestionAnswerObject | Retain | IMP-11, IMP-38, IMP-33, IMP-34, IMP-20, IMP-47, IMP-35, IMP-16, IMP-09 |
| CLF_QuestObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| CLF_SectionAnswerObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| CLF_SectionObject | Retain | IMP-03, IMP-24 |
| CLF_SinglechecklistObject | Compatibility only: no new Inspections pathway | Reuse existing object, inheritance and exported fields; no new configuration task |
| CLF_SubchecklistObject | Compatibility only: no new Inspections pathway | Reuse existing object, inheritance and exported fields; no new configuration task |
| CLF_TagObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| ComplyFramework_CARAbstractObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| ConfgAppSetting_GlobAppSettingsObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| ConfgAppSetting_IconAssetObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| ConfgAppSetting_InstructionTextObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| ConfgAppSetting_PersRespOptionObject | Retain | IMP-02, IMP-23 |
| ConfgAppSetting_SpecAppSettingsObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| ConfgAppSetting_TPanelGeneratorObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| EventFwk_AbsEvidenceObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| EventFwk_CAPAObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| EventFwk_EventActionPlanObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| EventFwk_EventCostObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| EventFwk_EventObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| EventFwk_EventScenarioObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| EventFwk_EventTypeObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| EventFwk_LessonLearnedObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| EventFwk_NonConfAbstractObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| EventFwk_SeverityObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| EventFwk_TeamMemberObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| EventFwk_VOCAbstractObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| FragApplication_AbCorrectivActiObject | Retain | IMP-11, IMP-37, IMP-38, IMP-10, IMP-42 |
| FragApplication_AbstractCostObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| FragApplication_ActionCostObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| FragApplication_ColorObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| FragApplication_CorrectivePreveObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| FragApplication_EquipmentObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| FragApplication_PrgressNotesObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| Insp_ActTypeofReviewObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| Insp_EquipInspectionObject | Retain | IMP-08, IMP-30, IMP-31, IMP-19, IMP-36, IMP-43, IMP-42, IMP-07, IMP-29, IMP-06, IMP-09, IMP-44, IMP-48, IMP-32, IMP-16, IMP-47 |
| Insp_EquipListOptionObject | Retain | IMP-02, IMP-23 |
| Insp_InspectionAbsObject | Retain | IMP-08, IMP-21, IMP-40, IMP-43 |
| Insp_InspRoleOptionObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| Insp_IReviewDecisionObject | Retain | IMP-02, IMP-23 |
| Insp_MobileActionObject | Retain | Reuse existing object, inheritance and exported fields; no new configuration task |
| Insp_TypeObject | Retain | IMP-05, IMP-25, IMP-17 |
| MetObjectEntity | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| MetTypeEntity | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| NCR_NCRObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| PTW_PermitRecordObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| QP_NodeAbstractObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| QP_ProjRevObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| QP_ReactionPlanObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| QP_RecoActionObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| RiskFmk_AResultAbstractObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| RiskFmk_OpRiskObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| RiskFmk_RiskAssessmentObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| RiskFmk_RiskObject | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| SysEmployeeEntity | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| SysGroupEntity | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| SysLocationEntity | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| SysRoleEntity | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| SysSubjectEntity | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| SysWorkflowInstanceEntity | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| SysWorkflowRecurringSeriesEntity | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| SysWorkflowStageEntity | External dependency: partial exported interface | Reuse existing object, inheritance and exported fields; no new configuration task |
| Insp_InspectionSourceObject | Add | IMP-01, IMP-23 |
| Insp_OutcomeObject | Add | IMP-01, IMP-23 |
| Insp_ResponseOutcomeObject | Add | IMP-01, IMP-23 |
| Insp_ClassificationObject | Add | IMP-01, IMP-23 |
| Shared_OperationalResource | External binding: proposed logical interface, not a new local object | External interface supplied under X05; consumer relationship is configured separately |

## 2. Changed field declarations

One row per target Add/Modify field. Multiple assignments separate field definition, logic, form and publication responsibilities. Supplied external interface fields intentionally have no implementation task or external-work dependency edge.

| Declaring object | Field | Change / source | Assigned implementation work |
| --- | --- | --- | --- |
| ActionPlans_ActionPlanAbsObject | PersonResp | Modify; E1540 | IMP-10, IMP-38 |
| CLF_ChecklistAnswerObject | ActionPlanAbst | Modify; E2260 | IMP-11 |
| CLF_ChecklistAnswerObject | ActionPlans | Modify; E2042 | IMP-11 |
| CLF_ChecklistAnswerObject | Findings | Modify; E2963 | IMP-19, IMP-20, IMP-47 |
| CLF_ChecklistAnswerObject | MaxPoints | Modify; E1193 | IMP-19, IMP-20, IMP-47 |
| CLF_ChecklistAnswerObject | NbActions | Modify; E2269 | IMP-35, IMP-44 |
| CLF_ChecklistAnswerObject | NbFindings | Modify; E2972 | IMP-19, IMP-20, IMP-47 |
| CLF_ChecklistAnswerObject | PointsAwarded | Modify; E1981 | IMP-19, IMP-20, IMP-47 |
| CLF_ChecklistAnswerObject | Score | Modify; E1977 | IMP-19, IMP-20, IMP-47 |
| CLF_ChecklistAnswerObject | SysteTypeHelper | Modify; E1023 | IMP-29 |
| CLF_ChecklistObject | EnableScoring | Modify; E1784 | IMP-03, IMP-24, IMP-18 |
| CLF_ChecklistObject | EnableSections | Modify; E1534 | IMP-03, IMP-24, IMP-18 |
| CLF_ChoiceListObject | MaxPoints | Modify; E722 | IMP-03, IMP-24, IMP-18 |
| CLF_ChoiceListObject | Name | Modify; E1911 | IMP-03, IMP-24, IMP-18 |
| CLF_ChoiceListObject | Reference | Modify; E1937 | IMP-03, IMP-24, IMP-18 |
| CLF_ChoiceListObject | Active | Add; PF-060 | IMP-03, IMP-24, IMP-18 |
| CLF_ChoiceObject | ChoiceList | Modify; E302 | IMP-03, IMP-24, IMP-18 |
| CLF_ChoiceObject | IsNA | Modify; E325 | IMP-03, IMP-24, IMP-18 |
| CLF_ChoiceObject | Name | Modify; E306 | IMP-03, IMP-24, IMP-18 |
| CLF_ChoiceObject | Reference | Modify; E316 | IMP-03, IMP-24, IMP-18 |
| CLF_ChoiceObject | Value | Modify; E323 | IMP-03, IMP-24, IMP-18 |
| CLF_ChoiceObject | Active | Add; PF-059 | IMP-03, IMP-24, IMP-18 |
| CLF_InsActionPlanObject | ActionOwner | Modify; E1812 | IMP-10, IMP-37, IMP-22 |
| CLF_InsActionPlanObject | AlBeenCorrected | Modify; E534 | IMP-10, IMP-37, IMP-22 |
| CLF_InsActionPlanObject | ChecklistAnswer | Modify; E782 | IMP-11, IMP-38 |
| CLF_InsActionPlanObject | HelperReleaseAP | Modify; E490 | IMP-42, IMP-38 |
| CLF_InsActionPlanObject | hRelatedInsp | Modify; E154 | IMP-11, IMP-38 |
| CLF_InsActionPlanObject | QuestionAnswers | Modify; E1618 | IMP-11, IMP-38 |
| CLF_InsActionPlanObject | RelateQuestions | Modify; E1321 | IMP-11, IMP-38 |
| CLF_PubChecklistObject | Active | Modify; E2253 | IMP-13, IMP-26, IMP-27 |
| CLF_PubChecklistObject | Checklist | Modify; E682 | IMP-13, IMP-26, IMP-27 |
| CLF_PubChecklistObject | ChecklistRef | Modify; E1070 | IMP-13, IMP-26, IMP-27 |
| CLF_PubChecklistObject | ChecklistType | Modify; E1793 | IMP-13, IMP-26, IMP-27 |
| CLF_PubChecklistObject | IsActive | Modify; E2016 | IMP-13, IMP-26, IMP-27 |
| CLF_PubChecklistObject | PubQuestions | Modify; E2011 | IMP-13, IMP-26, IMP-27 |
| CLF_PubQuestObject | AbsoluteOrder | Modify; E269 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | AnswerTypeCode | Modify; E238 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | DependsOnPub | Modify; E262 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | DependsOnPubId | Modify; E2144 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | Expression | Modify; E224 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | HasCondDisplay | Modify; E267 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | hCheckAnswer | Modify; E275 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | hCheckAnswerId | Modify; E2018 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | Id | Modify; E999 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | MaxPoints | Modify; E233 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | PubChecklists | Modify; E258 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | Question | Modify; E243 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | QuestionRef | Modify; E247 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | SectionName | Modify; E256 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | SectionSort | Modify; E273 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | VisDepNoAns | Modify; E254 | IMP-12, IMP-26, IMP-27 |
| CLF_PubQuestObject | VisibleIfs | Modify; E249 | IMP-12, IMP-26, IMP-27 |
| CLF_QuestAbstractObject | AnswerRequired | Modify; E130 | IMP-04, IMP-24, IMP-26, IMP-18 |
| CLF_QuestAbstractObject | ComReqIfNA | Modify; E640 | IMP-04, IMP-24, IMP-26, IMP-18 |
| CLF_QuestAbstractObject | FindReqChoices | Modify; E651 | IMP-04, IMP-24, IMP-26, IMP-18 |
| CLF_QuestAbstractObject | TriggerFindings | Modify; E1518 | IMP-04, IMP-24, IMP-26, IMP-18 |
| CLF_QuestAbstractObject | ValueChoiceList | Modify; E1345 | IMP-04, IMP-24, IMP-26, IMP-18 |
| CLF_QuestAbstractObject | Weight | Modify; E1343 | IMP-04, IMP-24, IMP-26, IMP-18 |
| CLF_QuestAbstractObject | ContributesToOutcome | Add; PF-055 | IMP-04, IMP-24, IMP-26, IMP-18 |
| CLF_QuestAbstractObject | NegativeChoices | Add; PF-056 | IMP-04, IMP-24, IMP-26, IMP-18 |
| CLF_QuestAbstractObject | NegativeBoolean | Add; PF-057 | IMP-04, IMP-24, IMP-26, IMP-18 |
| CLF_QuestAbstractObject | ActionRequiredIfNegative | Add; PF-058 | IMP-04, IMP-24, IMP-26, IMP-18 |
| CLF_QuestionAnswerObject | ActionPlans | Modify; E707 | IMP-11, IMP-38 |
| CLF_QuestionAnswerObject | Checkbox | Modify; E766 | IMP-33, IMP-34, IMP-20 |
| CLF_QuestionAnswerObject | Choice | Modify; E743 | IMP-33, IMP-34, IMP-20 |
| CLF_QuestionAnswerObject | Choices | Modify; E885 | IMP-33, IMP-34, IMP-20 |
| CLF_QuestionAnswerObject | Comments | Modify; E816 | IMP-33, IMP-34, IMP-20 |
| CLF_QuestionAnswerObject | Date | Modify; E564 | IMP-33, IMP-34, IMP-20 |
| CLF_QuestionAnswerObject | Findings | Modify; E545 | IMP-20, IMP-47 |
| CLF_QuestionAnswerObject | Float | Modify; E876 | IMP-33, IMP-34, IMP-20 |
| CLF_QuestionAnswerObject | InspActionPlans | Modify; E390 | IMP-11, IMP-38 |
| CLF_QuestionAnswerObject | IsActionMiss | Modify; E802 | IMP-35 |
| CLF_QuestionAnswerObject | IsAnswerMiss | Modify; E948 | IMP-35 |
| CLF_QuestionAnswerObject | IsComMiss | Modify; E831 | IMP-35 |
| CLF_QuestionAnswerObject | IsFindingMiss | Modify; E896 | IMP-35 |
| CLF_QuestionAnswerObject | IsSubmitReady | Modify; E847 | IMP-35 |
| CLF_QuestionAnswerObject | IsVisible | Modify; E735 | IMP-33, IMP-34, IMP-20 |
| CLF_QuestionAnswerObject | MaxPoints | Modify; E870 | IMP-20, IMP-47 |
| CLF_QuestionAnswerObject | NbActions | Modify; E839 | IMP-35 |
| CLF_QuestionAnswerObject | NbFindings | Modify; E542 | IMP-20, IMP-47 |
| CLF_QuestionAnswerObject | PointsAwarded | Modify; E810 | IMP-20, IMP-47 |
| CLF_QuestionAnswerObject | Text | Modify; E855 | IMP-33, IMP-34, IMP-20 |
| CLF_QuestionAnswerObject | Attachments | Add; PF-052 | IMP-16, IMP-47 |
| CLF_QuestionAnswerObject | BranchConfirmed | Add; PF-053 | IMP-09, IMP-33, IMP-20 |
| CLF_QuestionAnswerObject | ResponseOutcome | Add; PF-054 | IMP-09, IMP-34 |
| CLF_SectionObject | SectionName | Modify; E1331 | IMP-03, IMP-24 |
| ConfgAppSetting_PersRespOptionObject | Name | Modify; E1245 | IMP-02, IMP-23 |
| ConfgAppSetting_PersRespOptionObject | Sort | Modify; E2273 | IMP-02, IMP-23 |
| ConfgAppSetting_PersRespOptionObject | Code | Add; PF-022 | IMP-02, IMP-23 |
| FragApplication_AbCorrectivActiObject | CheckListAnsAct | Modify; E549 | IMP-11, IMP-37, IMP-38 |
| FragApplication_AbCorrectivActiObject | CompletedBy | Modify; E1424 | IMP-10, IMP-37, IMP-42 |
| FragApplication_AbCorrectivActiObject | CompletionDate | Modify; E800 | IMP-10, IMP-37, IMP-42 |
| FragApplication_AbCorrectivActiObject | CompletionNotes | Modify; E1439 | IMP-10, IMP-37, IMP-42 |
| FragApplication_AbCorrectivActiObject | CPARActionReq | Modify; E200 | IMP-10, IMP-37, IMP-42 |
| FragApplication_AbCorrectivActiObject | CPARTypeID | Modify; E1410 | IMP-10, IMP-37, IMP-42 |
| FragApplication_AbCorrectivActiObject | DueDate | Modify; E1427 | IMP-10, IMP-37, IMP-42 |
| FragApplication_AbCorrectivActiObject | IsCompleted | Modify; E1382 | IMP-10, IMP-37, IMP-42 |
| FragApplication_AbCorrectivActiObject | RelatedQstions | Modify; E719 | IMP-11, IMP-37, IMP-38 |
| Insp_EquipInspectionObject | Equipment | Modify; E1543 | IMP-08, IMP-30, IMP-31, IMP-19 |
| Insp_EquipInspectionObject | EquipmentTxt | Modify; E2913 | IMP-08, IMP-30, IMP-31, IMP-19 |
| Insp_EquipInspectionObject | HelpeIsComplete | Modify; E1039 | IMP-36, IMP-43, IMP-42 |
| Insp_EquipInspectionObject | ReleActionPlans | Modify; E1471 | IMP-36, IMP-43, IMP-42 |
| Insp_EquipInspectionObject | SourceModeAtCreation | Add; PF-027 | IMP-07, IMP-29 |
| Insp_EquipInspectionObject | ReviewRequiredAtCreation | Add; PF-028 | IMP-06, IMP-29 |
| Insp_EquipInspectionObject | SecondReviewRequiredAtCreation | Add; PF-029 | IMP-06, IMP-29 |
| Insp_EquipInspectionObject | FirstReviewDaysAtCreation | Add; PF-030 | IMP-06, IMP-29 |
| Insp_EquipInspectionObject | SecondReviewDaysAtCreation | Add; PF-031 | IMP-06, IMP-29 |
| Insp_EquipInspectionObject | FirstReviewMethodAtCreation | Add; PF-032 | IMP-07, IMP-29 |
| Insp_EquipInspectionObject | SecondReviewMethodAtCreation | Add; PF-033 | IMP-07, IMP-29 |
| Insp_EquipInspectionObject | FirstReviewRoleAtCreation | Add; PF-034 | IMP-07, IMP-29 |
| Insp_EquipInspectionObject | SecondReviewRoleAtCreation | Add; PF-035 | IMP-07, IMP-29 |
| Insp_EquipInspectionObject | FirstReviewSubjectAtCreation | Add; PF-036 | IMP-07, IMP-29 |
| Insp_EquipInspectionObject | SecondReviewSubjectAtCreation | Add; PF-037 | IMP-07, IMP-29 |
| Insp_EquipInspectionObject | FirstReviewExpressionAtCreation | Add; PF-038 | IMP-06, IMP-29 |
| Insp_EquipInspectionObject | SecondReviewExpressionAtCreation | Add; PF-039 | IMP-06, IMP-29 |
| Insp_EquipInspectionObject | EquipmentModeAtCreation | Add; PF-040 | IMP-07, IMP-29 |
| Insp_EquipInspectionObject | OutcomeRequiredAtCreation | Add; PF-041 | IMP-06, IMP-29 |
| Insp_EquipInspectionObject | ExternalParty | Add; PF-042 | IMP-08, IMP-19, IMP-43 |
| Insp_EquipInspectionObject | PerformedOn | Add; PF-043 | IMP-08, IMP-19, IMP-43 |
| Insp_EquipInspectionObject | SubmittedAt | Add; PF-044 | IMP-08, IMP-19, IMP-43 |
| Insp_EquipInspectionObject | AcceptedAt | Add; PF-045 | IMP-08, IMP-19, IMP-43 |
| Insp_EquipInspectionObject | OverallOutcome | Add; PF-046 | IMP-09, IMP-36 |
| Insp_EquipInspectionObject | ActionClassification | Add; PF-047 | IMP-09, IMP-44 |
| Insp_EquipInspectionObject | OperationalResource | Add; PF-048 | IMP-31, IMP-48 |
| Insp_EquipInspectionObject | ResourceNameAtCreation | Add; PF-049 | IMP-08, IMP-32 |
| Insp_EquipInspectionObject | ResourceTechnologyAtCreation | Add; PF-050 | IMP-08, IMP-32 |
| Insp_EquipInspectionObject | Attachments | Add; PF-051 | IMP-16, IMP-47 |
| Insp_EquipListOptionObject | Name | Modify; E2422 | IMP-02, IMP-23 |
| Insp_EquipListOptionObject | Sort | Modify; E2344 | IMP-02, IMP-23 |
| Insp_EquipListOptionObject | Code | Add; PF-024 | IMP-02, IMP-23 |
| Insp_InspectionAbsObject | CompletedBy | Modify; E2148 | IMP-08, IMP-21, IMP-40, IMP-43 |
| Insp_InspectionAbsObject | CompletedOn | Modify; E1042 | IMP-08, IMP-21, IMP-40, IMP-43 |
| Insp_InspectionAbsObject | DaofFirstReview | Modify; E2992 | IMP-08, IMP-21, IMP-40, IMP-43 |
| Insp_InspectionAbsObject | DofSecondReview | Modify; E2990 | IMP-08, IMP-21, IMP-40, IMP-43 |
| Insp_InspectionAbsObject | FirstReviewBy | Modify; E2984 | IMP-08, IMP-21, IMP-40, IMP-43 |
| Insp_InspectionAbsObject | InspecChecklist | Modify; E1218 | IMP-08, IMP-21, IMP-40, IMP-43 |
| Insp_InspectionAbsObject | RevieweComment1 | Modify; E3000 | IMP-08, IMP-21, IMP-40, IMP-43 |
| Insp_InspectionAbsObject | RevieweComments | Modify; E1525 | IMP-08, IMP-21, IMP-40, IMP-43 |
| Insp_InspectionAbsObject | RevieweDecisio1 | Modify; E2997 | IMP-08, IMP-21, IMP-40, IMP-43 |
| Insp_InspectionAbsObject | RevieweDecision | Modify; E2611 | IMP-08, IMP-21, IMP-40, IMP-43 |
| Insp_InspectionAbsObject | SecondReviewBy | Modify; E2994 | IMP-08, IMP-21, IMP-40, IMP-43 |
| Insp_IReviewDecisionObject | Name | Modify; E2030 | IMP-02, IMP-23 |
| Insp_IReviewDecisionObject | Sort | Modify; E1304 | IMP-02, IMP-23 |
| Insp_IReviewDecisionObject | Code | Add; PF-023 | IMP-02, IMP-23 |
| Insp_TypeObject | ComplValidation | Modify; E1563 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | DforFirstReview | Modify; E1603 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | ELOptions | Modify; E1600 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | EnabFirstReview | Modify; E1191 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | EnaSecondReview | Modify; E1608 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | EquipmentList | Modify; E1588 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | EquipmMandatory | Modify; E163 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | Expression | Modify; E1068 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | Expression2 | Modify; E686 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | FindingTracking | Modify; E1103 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | FirstReviewer | Modify; E1612 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | forSecondReview | Modify; E1596 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | PRMethod | Modify; E1247 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | PRMethodSndRev | Modify; E1593 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | Role | Modify; E1242 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | Role2 | Modify; E1590 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | SecondReviewer | Modify; E1605 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | SourceMode | Add; PF-025 | IMP-05, IMP-25, IMP-17 |
| Insp_TypeObject | OverallOutcomeRequired | Add; PF-026 | IMP-05, IMP-25, IMP-17 |
| Insp_InspectionSourceObject | Code | Add; PF-001 | IMP-01, IMP-23 |
| Insp_InspectionSourceObject | Name | Add; PF-002 | IMP-01, IMP-23 |
| Insp_InspectionSourceObject | Active | Add; PF-003 | IMP-01, IMP-23 |
| Insp_InspectionSourceObject | Sort | Add; PF-004 | IMP-01, IMP-23 |
| Insp_OutcomeObject | Code | Add; PF-005 | IMP-01, IMP-23 |
| Insp_OutcomeObject | Name | Add; PF-006 | IMP-01, IMP-23 |
| Insp_OutcomeObject | Active | Add; PF-007 | IMP-01, IMP-23 |
| Insp_OutcomeObject | Sort | Add; PF-008 | IMP-01, IMP-23 |
| Insp_ResponseOutcomeObject | Code | Add; PF-009 | IMP-01, IMP-23 |
| Insp_ResponseOutcomeObject | Name | Add; PF-010 | IMP-01, IMP-23 |
| Insp_ResponseOutcomeObject | Active | Add; PF-011 | IMP-01, IMP-23 |
| Insp_ResponseOutcomeObject | Sort | Add; PF-012 | IMP-01, IMP-23 |
| Insp_ClassificationObject | Code | Add; PF-013 | IMP-01, IMP-23 |
| Insp_ClassificationObject | Name | Add; PF-014 | IMP-01, IMP-23 |
| Insp_ClassificationObject | Active | Add; PF-015 | IMP-01, IMP-23 |
| Insp_ClassificationObject | Sort | Add; PF-016 | IMP-01, IMP-23 |
| Shared_OperationalResource | Id | Add; PF-017 | External interface supplied under X05; no local creation task |
| Shared_OperationalResource | Name | Add; PF-018 | External interface supplied under X05; no local creation task |
| Shared_OperationalResource | Active | Add; PF-019 | External interface supplied under X05; no local creation task |
| Shared_OperationalResource | Establishment | Add; PF-020 | External interface supplied under X05; no local creation task |
| Shared_OperationalResource | TechnologyCode | Add; PF-021 | External interface supplied under X05; no local creation task |

## 3. Retained fields

The following fields have target disposition Retain and are deliberately reused under the source contract. Ordinary form/security restrictions in the applicable pathway still apply; this is not authorization to edit unrelated shared objects.

| Object | Retained directly declared fields |
| --- | --- |
| ActionPlans_ActionPlanAbsObject | Activites, ActivitiesStart, ActivitProgress, AssessResults, CFWFindings, MActivitesOrder, MaxTasksOrder, NbActivites, NbOpenActivit, NbOpened, NbTasks, NCR, PermitAbstract, ProvenEffective, ReviewerComment, ReviewType, RiskAbs, StartDate, Tasks, TasksProgress, Template, VOCAbstract |
| ActionPlans_ActivityAbsObject | CanStart, Order, PrereActivities |
| CLF_AnswerTypeObject | Caption, Index, Value |
| CLF_CheckliAbstractObject | Description, Location, Title |
| CLF_ChecklistAnswerObject | ApplicQuestions, Comments, CreatedBy, DefPersRespFind, Depth, DisplayField, FilledQuestions, Id, Location, MasterChecklist, Name, NbSubChecklists, oSectionAnswers, Path, PersResponsibl, PrevChecklistId, Progress, PubChecklist, QuestionAnswers, RecordNo, SectAnswers, SubChecklists, Workflow |
| CLF_ChecklistObject | Active, AutoCode, ChecklistType, HelpeQuestions, Id, NbQuestions, PubChecklists, Questions, Reference, Sections |
| CLF_ChecklistTypeObject | Checklists, Description, MaxOrder, Name, NbChecklists, NbQuestions, QueAnswerObject, Questions, Reference |
| CLF_ChoiceListObject | ChoiceLists, Choices, Description, Id, NbChoices |
| CLF_ChoiceObject | BColor, Css, Id, MobileAction, SortOrder, TColor |
| CLF_FindingDDObject | Caption, Index, Value |
| CLF_FindingObject | ActionPlans, ChecklistAnswer, DueIn, FindingStatus, HasActionPlans, IsOpen, ManCloseCom, ManualClose, NbAPs, NbOpAPs, PersResponsible, QuestionAnswers, ResponseDue |
| CLF_FindingStatusObject | BC, Code, Icon, Name, TC |
| CLF_InsActionPlanObject | Findings, hRelatedInspId, NotifiDate, PlaDisplayField, QuestionList, RecordName |
| CLF_LocalizResourceObject | Comments, Key, Value |
| CLF_MultichecklistsObject | Agenda, Objective, PersResponsible, RelatedCAR, Scope |
| CLF_PreferencesObject | GridCustomCode, Name |
| CLF_QuestAbstractObject | ActReqChoices, AllowNA, AnswerType, ChoiceList, ChoiceListId, ComReqChoices, Content, DateCreated, DateModifiedHel, DefaultBool, DefaultChoice, DefaultChoices, Guideline, Order, Section |
| CLF_QuestionAnswerObject | AbsoluteOrder, AnswerText, ChecklistAnswer, ChecklistAnswerId, ChoiceId, CrSectionAnswer, Dependencies, DependsOn, HelpQuestiText, IsApplicable, IsFilled, IsNA, MassUpChoice, MassUpChoiceId, NumbofDocuments, PubQuestion, PubQuestionId, QuesSummaryText, QuestionRef, SectionAnswer, TrDefaultAnswer |
| CLF_QuestObject | AbsoluteOrder, Checklists, ChecklistType, DependsOn, ExistingSection, HasDependsOn, HelperChecklist, LastPublish, NbChecklists, PubQuestions, QuestionRef, References, TextReferences, UseExisting, UseReferences, VisDepNoAns, VisibleIfs |
| CLF_SectionAnswerObject | CheckAnswerGUID, ChecklistAnswer, ChecklistAnswerId, QuestionAnswers, Section, Sort |
| CLF_SectionObject | Checklist, Questions, Sort |
| CLF_SubchecklistObject | StartCondition |
| CLF_TagObject | Name, Questions |
| ConfgAppSetting_IconAssetObject | Code, Name, SVGCode |
| ConfgAppSetting_InstructionTextObject | Application, DisplayField, Form, InstrTextHeader, InstructiText, InstruPanelCode, RecordNo, Stage, TemplaGenerator |
| ConfgAppSetting_PersRespOptionObject | Active, RecordNo |
| ConfgAppSetting_SpecAppSettingsObject | CalIconSel, ClocIconGeneral, ClockIcon, DueDateIcon, DueIconWorkflow, LoStructureIcon, Name, PerIconWorkflow, ResIconWorkflow, StaIconWorkflow, StruIconGeneral, WrkflowStaIcon |
| ConfgAppSetting_TPanelGeneratorObject | CSSTemplate, HTMLTemplate, InstructionPane, RecordNo, TemplateName |
| EventFwk_EventObject | AbsCorActPlan, AdditionalCost, CAPAs, CAREvent, CauseAnalysis, CorrectiActions, Costs, Date, DateApproved, DateOnly, DateReported, DateUserEntered, DatInvestigated, EndDate, EstimatedCost, EventActionPlan, EventType, Evidence, FinalAppNotes, FinalApprover, ImmediateAction, InvestDueDate, Investigator, InvestResults, LessonsLearned, NBCAPAs, NBOpenedCAPAs, ParentEvent, ReportedBy, ReviewNotes, Risk, RootCauses, Severity, Subs, Summary, SuspectedCause, TeamLeader, TeamMembers, TotalCost, TypeOfEvent |
| EventFwk_EventScenarioObject | Description, Location, Name, RecordNo |
| FragApplication_AbCorrectivActiObject | ActionNo, ActionPlanType, ActPlanSysType, ActualCost, CAR, Costs, EventRelated, HelperQPType, HelpIsCompQP, Location, ProgressNotes, ProjRevActionPlansId, ReactionPlan, RecoAction, ReportedBy, ReportedOn, SourceObject, SourceRecordId, ToCostofActions, Workflow |
| FragApplication_AbstractCostObject | ConvertedCost |
| FragApplication_ColorObject | Caption, TextColor, Value |
| FragApplication_EquipmentObject | Name |
| Insp_ActTypeofReviewObject | Caption, Index, Value |
| Insp_EquipInspectionObject | CommetoReviewer, CommtoReviewer2, CreateMode, FApprovalFields, HelperLocatio2, HelpErrorMes, Id, IPCreate, IPDraft, IPInProgress, IPReview, IPReview2, LNoticeonCreate, NotifiDate, Reviewer, SApprovalFields, Scope |
| Insp_EquipListOptionObject | Active, RecordNo |
| Insp_InspectionAbsObject | DistributioList, HelperLocation, InsDisplayField, InspecChecklistId, InspectionDate, PersResponsible, PersResponsibleId, TypeOfInspec |
| Insp_InspRoleOptionObject | Active, Name, RecordNo, Sort |
| Insp_IReviewDecisionObject | Active |
| Insp_MobileActionObject | Caption, Index, Value |
| Insp_TypeObject | Active, InspRoleOption, InspRoleOption2, InspRoleOptionId, RoleName, RoleName2 |
| QP_NodeAbstractObject | ProjRev, ProjRevId |
| QP_RecoActionObject | ActionTaken |
| RiskFmk_AResultAbstractObject | RiskAssessment |
| RiskFmk_RiskAssessmentObject | Risk |
| SysEmployeeEntity | Id, Supervisor |
| SysLocationEntity | ChildLocations |
| SysWorkflowInstanceEntity | CurrentStage, DateNotRequired, DueDate, PersonResponsible, PersonResponsibleId, RecurringSeries, WorkflowStatus |
| SysWorkflowRecurringSeriesEntity | NextScheduledDate, StartDate |
| SysWorkflowStageEntity | SystemName |

## 4. Existing handler coverage

| Source evidence | Existing handler | Configuration task or deliberate reuse |
| --- | --- | --- |
| E55 | Attach Risk if Assessment Results is not blank | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E187 | FMEA-Update Recommended Action Action Taken | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E241 | Actions on Update | IMP-28 |
| E265 | Copy Values from Question during Publish | IMP-26 |
| E429 | Relate to Checklist Answer | IMP-28 |
| E437 | Create Anwer Records | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E477 | Send Assignment Notification Upon Completion of Inspection | IMP-41 |
| E522 | Start Date must be on or after today. | IMP-37 |
| E629 | (0) Actions on Create & Update | IMP-24 |
| E842 | Clear Answer if not visible | IMP-33 |
| E883 | (2) Actions on Update | IMP-33 |
| E935 | (1) Actions on Create | IMP-28 |
| E942 | [DEPRECATED] Check Consistency on Points | IMP-20 |
| E952 | Create Section and Set Default Value | IMP-28 |
| E1075 | Clear Person Responsible and Due Date when workflow is Closed | IMP-42 |
| E1236 | Create Role | IMP-25 |
| E1319 | Sync RelatedQstions to RelateQuestions | IMP-38 |
| E1391 | Completion Date | IMP-37 |
| E1400 | Get Action Source | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E1420 | Due Date in future on creation | IMP-37 |
| E1429 | FMEA - Sync Project Revision Action Plans | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E1477 | Clear Conditional Display Fields if not dependent | IMP-24 |
| E1765 | Set Auto Checklist Code | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E1788 | Sync Location | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E1815 | Calc Due Date | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E1884 | Init Abstract Field Values on Create | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E1960 | On Create | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E2000 | Set Inspection Name | IMP-29 |
| E2007 | Create answers | IMP-28 |
| E2023 | Sync Inspector to Person Responsible | IMP-43 |
| E2096 | Set Location Field | IMP-38 |
| E2258 | Update Workflow Person Responsible | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E2283 | Notify Inspector if Created by Someone Else | IMP-41 |
| E2348 | Copy Values | IMP-26 |
| E2361 | Clear Person Responsible and Due Date when workflow is Closed | IMP-43 |
| E2390 | Section and Sort Order Management | IMP-24 |
| E2415 | Related to MM Checklist Grid | IMP-24 |
| E2571 | Set Record Name | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E2575 | Track Modified Changes | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E2594 | Set Action Owner | IMP-38 |
| E2601 | Update Status | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E2606 | Clean up Choice List Field | IMP-24 |
| E2628 | Throw Error if Saved at Location that Isn't Bottom | IMP-30 |
| E2669 | Update CreateMode Flag | IMP-43 |
| E2924 | Clear Completed information on Create | IMP-43 |
| E2929 | Set [Helper] Inspection Relation | IMP-38 |
| E2936 | Set Record Name | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E2976 | [INACTIVE] Set Field values on Abstract | IMP-38 |
| E2980 | Sync Person Responsible | IMP-38 |
| E3072 | Trigger Activities | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E3077 | [OBSOLETE] Init Values | Deliberately reuse unchanged shared/compatibility behavior; do not activate a new Inspections pathway |
| E3088 | Action Already Completed | IMP-39 |

## 5. View and profile coverage

Definitions are assigned using their exported Object and ConfigurableView graph relations. Assigned consultants update applicable Inspections branches/profiles only; external/shared variants remain intact. Layout work follows simple workflow stages where those containers use stage names.

| Evidence | View/profile | Owning object | Assignment or reuse |
| --- | --- | --- | --- |
| E18 | CLF_InsActionPlan_Detail (SysConfigurableViewEntity) | CLF_InsActionPlanObject | IMP-22 |
| E30 | CLF_InsActionPlan_Detail (SysConfigurableViewProfileEntity) | CLF_InsActionPlanObject | IMP-22 |
| E39 | ActionPlans_ActionPlanAbs_Detail (SysConfigurableViewEntity) | ActionPlans_ActionPlanAbsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E44 | Insp_EquipInspection_Frag_QuestionAnswer_ReadOnly (SysConfigurableViewProfileEntity) | Insp_EquipInspectionObject | IMP-19, IMP-21, IMP-16 |
| E46 | Insp_EquipInspection_Frag_QuestionAnswer_ReadOnly (SysConfigurableViewEntity) | Insp_EquipInspectionObject | IMP-19, IMP-21, IMP-16 |
| E79 | ConfgAppSetting_InstructionTextObjectInventoryView (SysConfigurableViewEntity) | ConfgAppSetting_InstructionTextObject | Reuse unchanged shared/dependency definition; no added pathway |
| E108 | Employee_AssignToPersonResponsible (SysConfigurableViewEntity) | SysEmployeeEntity | Reuse unchanged shared/dependency definition; no added pathway |
| E110 | CLF_Choice_Detail (SysConfigurableViewProfileEntity) | CLF_ChoiceObject | IMP-18 |
| E112 | CLF_Choice_Detail (SysConfigurableViewEntity) | CLF_ChoiceObject | IMP-18 |
| E124 | ConfgAppSetting_TPanelGeneratorObjectInventoryView (SysConfigurableViewEntity) | ConfgAppSetting_TPanelGeneratorObject | Reuse unchanged shared/dependency definition; no added pathway |
| E128 | ConfgAppSetting_TPanelGeneratorObjectInventoryView (SysConfigurableViewProfileEntity) | ConfgAppSetting_TPanelGeneratorObject | Reuse unchanged shared/dependency definition; no added pathway |
| E140 | FragApplication_Equipment_Inventory (SysConfigurableViewEntity) | FragApplication_EquipmentObject | Reuse unchanged shared/dependency definition; no added pathway |
| E148 | CLF_InsActionPlan_Detail_NoEdit (SysConfigurableViewEntity) | CLF_InsActionPlanObject | IMP-22 |
| E150 | CLF_InsActionPlan_Detail_NoEdit (SysConfigurableViewProfileEntity) | CLF_InsActionPlanObject | IMP-22 |
| E159 | Insp_InspRoleOptionObjectInventoryView (SysConfigurableViewProfileEntity) | Insp_InspRoleOptionObject | Reuse unchanged shared/dependency definition; no added pathway |
| E161 | Insp_InspRoleOptionObjectInventoryView (SysConfigurableViewEntity) | Insp_InspRoleOptionObject | Reuse unchanged shared/dependency definition; no added pathway |
| E218 | CLF_PubQuest_Inventory (SysConfigurableViewEntity) | CLF_PubQuestObject | IMP-18 |
| E220 | CLF_PubQuest_Detail (SysConfigurableViewEntity) | CLF_PubQuestObject | IMP-18 |
| E231 | Insp_PubQuestion_Select (SysConfigurableViewEntity) | CLF_PubQuestObject | IMP-18 |
| E278 | CLF_PubQuest_Detail (SysConfigurableViewProfileEntity) | CLF_PubQuestObject | IMP-18 |
| E284 | CLF_Preferences_Detail (SysConfigurableViewEntity) | CLF_PreferencesObject | Reuse unchanged shared/dependency definition; no added pathway |
| E291 | CLF_Preferences_Detail (SysConfigurableViewProfileEntity) | CLF_PreferencesObject | Reuse unchanged shared/dependency definition; no added pathway |
| E313 | CLF_Choice_Inventory (SysConfigurableViewEntity) | CLF_ChoiceObject | IMP-18 |
| E362 | Insp_InspRoleOptionObjectDetailView (SysConfigurableViewEntity) | Insp_InspRoleOptionObject | Reuse unchanged shared/dependency definition; no added pathway |
| E367 | CLF_CheckliAbstract_Inventory (SysConfigurableViewEntity) | CLF_CheckliAbstractObject | Reuse unchanged shared/dependency definition; no added pathway |
| E379 | Insp_InspectionAbs_Inventory (SysConfigurableViewProfileEntity) | Insp_InspectionAbsObject | IMP-19, IMP-21 |
| E381 | Insp_InspectionAbs_Inventory (SysConfigurableViewEntity) | Insp_InspectionAbsObject | IMP-19, IMP-21 |
| E396 | CLF_Quest_MassUpdate (SysConfigurableViewProfileEntity) | CLF_QuestObject | IMP-18 |
| E398 | CLF_Quest_MassUpdate (SysConfigurableViewEntity) | CLF_QuestObject | IMP-18 |
| E414 | CLF_SectionAnswerObjectInventoryView (SysConfigurableViewEntity) | CLF_SectionAnswerObject | IMP-20 |
| E426 | CLF_SectionAnswerObjectDetailView (SysConfigurableViewEntity) | CLF_SectionAnswerObject | IMP-20 |
| E435 | CLF_SingleChecklist_Inventory (SysConfigurableViewEntity) | CLF_SinglechecklistObject | Reuse unchanged shared/dependency definition; no added pathway |
| E439 | CLF_SingleChecklist_Detail (SysConfigurableViewEntity) | CLF_SinglechecklistObject | Reuse unchanged shared/dependency definition; no added pathway |
| E448 | CLF_Subchecklist_Inventory (SysConfigurableViewEntity) | CLF_SubchecklistObject | Reuse unchanged shared/dependency definition; no added pathway |
| E468 | ConfgAppSetting_InstructionTextObjectDetailView (SysConfigurableViewEntity) | ConfgAppSetting_InstructionTextObject | Reuse unchanged shared/dependency definition; no added pathway |
| E471 | ConfgAppSetting_InstructionTextObjectDetailView (SysConfigurableViewProfileEntity) | ConfgAppSetting_InstructionTextObject | Reuse unchanged shared/dependency definition; no added pathway |
| E497 | CLF_Checklist_Detail (SysConfigurableViewEntity) | CLF_ChecklistObject | IMP-18 |
| E516 | CLF_Checklist_Detail (SysConfigurableViewProfileEntity) | CLF_ChecklistObject | IMP-18 |
| E526 | ActionPlan_MyActionPlan_Inventory (SysConfigurableViewEntity) | FragApplication_AbCorrectivActiObject | Reuse unchanged shared/dependency definition; no added pathway |
| E530 | ActionPlan_MyActionPlan_Inventory (SysConfigurableViewProfileEntity) | FragApplication_AbCorrectivActiObject | Reuse unchanged shared/dependency definition; no added pathway |
| E570 | CLF_Finding_Docs (SysConfigurableViewEntity) | CLF_FindingObject | Reuse unchanged shared/dependency definition; no added pathway |
| E600 | CLF_Finding_CloseFinding (SysConfigurableViewEntity) | CLF_FindingObject | Reuse unchanged shared/dependency definition; no added pathway |
| E613 | Insp_EquipListOptionObjectDetailView (SysConfigurableViewEntity) | Insp_EquipListOptionObject | Reuse unchanged shared/dependency definition; no added pathway |
| E618 | Insp_EquipListOptionObjectDetailView (SysConfigurableViewProfileEntity) | Insp_EquipListOptionObject | Reuse unchanged shared/dependency definition; no added pathway |
| E620 | Insp_EquipListOptionObjectInventoryView (SysConfigurableViewEntity) | Insp_EquipListOptionObject | Reuse unchanged shared/dependency definition; no added pathway |
| E622 | Insp_EquipListOptionObjectInventoryView (SysConfigurableViewProfileEntity) | Insp_EquipListOptionObject | Reuse unchanged shared/dependency definition; no added pathway |
| E626 | CLF_Finding_Inventory (SysConfigurableViewEntity) | CLF_FindingObject | Reuse unchanged shared/dependency definition; no added pathway |
| E667 | CLF_LocalizResource_Detail (SysConfigurableViewEntity) | CLF_LocalizResourceObject | Reuse unchanged shared/dependency definition; no added pathway |
| E674 | CLF_LocalizResource_Inventory (SysConfigurableViewEntity) | CLF_LocalizResourceObject | Reuse unchanged shared/dependency definition; no added pathway |
| E786 | ConfgAppSetting_PersRespOptionObjectDetailView (SysConfigurableViewProfileEntity) | ConfgAppSetting_PersRespOptionObject | Reuse unchanged shared/dependency definition; no added pathway |
| E788 | ConfgAppSetting_PersRespOptionObjectDetailView (SysConfigurableViewEntity) | ConfgAppSetting_PersRespOptionObject | Reuse unchanged shared/dependency definition; no added pathway |
| E844 | CLF_QuestionAnswer_Inventory (SysConfigurableViewEntity) | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E857 | CLF_QuestionAnswer_MassUpdate (SysConfigurableViewEntity) | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E863 | CLF_QuestionAnswer_Docs (SysConfigurableViewEntity) | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E893 | CLF_QuestionAnswer_Findings (SysConfigurableViewEntity) | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E904 | CLF_QuestionAnswer_Detail (SysConfigurableViewEntity) | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E954 | CLF_QuestionAnswer_ActionPlans (SysConfigurableViewEntity) | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E957 | CLF_QuestionAnswer_Docs_Readonly (SysConfigurableViewEntity) | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E972 | CLF_Quest_Detail (SysConfigurableViewEntity) | CLF_QuestObject | IMP-18 |
| E983 | CLF_Quest_Detail (SysConfigurableViewProfileEntity) | CLF_QuestObject | IMP-18 |
| E985 | EventFwk_EventScenarioObjectInventoryView (SysConfigurableViewEntity) | EventFwk_EventScenarioObject | Reuse unchanged shared/dependency definition; no added pathway |
| E992 | ConfgAppSetting_IconAssetObjectDetailView (SysConfigurableViewProfileEntity) | ConfgAppSetting_IconAssetObject | Reuse unchanged shared/dependency definition; no added pathway |
| E994 | ConfgAppSetting_IconAssetObjectDetailView (SysConfigurableViewEntity) | ConfgAppSetting_IconAssetObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1001 | CLF_InsActionPlan_Inventory (SysConfigurableViewEntity) | CLF_InsActionPlanObject | IMP-22 |
| E1004 | CLF_InsActionPlan_Inventory (SysConfigurableViewProfileEntity) | CLF_InsActionPlanObject | IMP-22 |
| E1016 | CLF_ChecklistType_Inventory (SysConfigurableViewEntity) | CLF_ChecklistTypeObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1025 | CLF_Quest_ConditionalFormatting_MassUpdate (SysConfigurableViewProfileEntity) | CLF_QuestObject | IMP-18 |
| E1027 | CLF_Quest_ConditionalFormatting_MassUpdate (SysConfigurableViewEntity) | CLF_QuestObject | IMP-18 |
| E1030 | CLF_ChoicesList_Inventory (SysConfigurableViewEntity) | CLF_ChoiceListObject | IMP-18 |
| E1048 | CLF_CheckliAbstract_Detail (SysConfigurableViewEntity) | CLF_CheckliAbstractObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1051 | Insp_Type_Inventory (SysConfigurableViewEntity) | Insp_TypeObject | IMP-17 |
| E1056 | Insp_Type_Inventory (SysConfigurableViewProfileEntity) | Insp_TypeObject | IMP-17 |
| E1058 | ConfgAppSetting_GlobAppSettingsObjectInventoryView (SysConfigurableViewEntity) | ConfgAppSetting_GlobAppSettingsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1079 | EventFwk_EventObjectInventoryView (SysConfigurableViewEntity) | EventFwk_EventObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1081 | ConfgAppSetting_IconAssetObjectInventoryView (SysConfigurableViewEntity) | ConfgAppSetting_IconAssetObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1086 | ConfgAppSetting_IconAssetObjectInventoryView (SysConfigurableViewProfileEntity) | ConfgAppSetting_IconAssetObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1120 | FragApplication_Color_Detail (SysConfigurableViewEntity) | FragApplication_ColorObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1130 | FragApplication_Color_Select (SysConfigurableViewEntity) | FragApplication_ColorObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1133 | FragApplication_Color_Inventory (SysConfigurableViewEntity) | FragApplication_ColorObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1154 | CLF_Finding_Detail (SysConfigurableViewEntity) | CLF_FindingObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1167 | CLF_Finding_Detail (SysConfigurableViewProfileEntity) | CLF_FindingObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1183 | CLF_Finding_Inventory (SysConfigurableViewProfileEntity) | CLF_FindingObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1214 | CLF_Checklist_Inventory (SysConfigurableViewProfileEntity) | CLF_ChecklistObject | IMP-18 |
| E1216 | CLF_Checklist_Inventory (SysConfigurableViewEntity) | CLF_ChecklistObject | IMP-18 |
| E1226 | ConfgAppSetting_SpecAppSettingsObjectInventoryView (SysConfigurableViewProfileEntity) | ConfgAppSetting_SpecAppSettingsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1228 | ConfgAppSetting_SpecAppSettingsObjectInventoryView (SysConfigurableViewEntity) | ConfgAppSetting_SpecAppSettingsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1254 | _EmptyView (SysConfigurableViewEntity) | Unresolved external/shared association | Reuse unchanged shared/dependency definition; no added pathway |
| E1269 | CLF_Subchecklist_Detail (SysConfigurableViewEntity) | CLF_SubchecklistObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1278 | CLF_Subchecklist_Detail (SysConfigurableViewProfileEntity) | CLF_SubchecklistObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1306 | QP_AbCorrectivActi_Closed_Inventory (SysConfigurableViewProfileEntity) | FragApplication_AbCorrectivActiObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1308 | QP_AbCorrectivActi_Closed_Inventory (SysConfigurableViewEntity) | FragApplication_AbCorrectivActiObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1376 | Actions_AllActions_Inventory (SysConfigurableViewEntity) | FragApplication_AbCorrectivActiObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1393 | FragApplication_AbCorrectivActiObjectDetailView (SysConfigurableViewEntity) | FragApplication_AbCorrectivActiObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1405 | AbstractCorrectiveAction_Inventory (SysConfigurableViewEntity) | FragApplication_AbCorrectivActiObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1431 | CAR_AbsCorrectiveAction_Inventory (SysConfigurableViewEntity) | FragApplication_AbCorrectivActiObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1441 | QP_AbCorrectivActi_Open_Inventory (SysConfigurableViewEntity) | FragApplication_AbCorrectivActiObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1458 | FragApplication_Equipment_Select (SysConfigurableViewEntity) | FragApplication_EquipmentObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1460 | ActionPlans_ActionPlanAbs_NCR_Inventory (SysConfigurableViewEntity) | ActionPlans_ActionPlanAbsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1465 | CLF_Finding_Docs_Readonly (SysConfigurableViewEntity) | CLF_FindingObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1475 | CLF_QuestionAnswer_Inventory (SysConfigurableViewProfileEntity) | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E1486 | EventFwk_EventObjectDetailView (SysConfigurableViewEntity) | EventFwk_EventObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1513 | CLF_QuestAbstract_Detail (SysConfigurableViewEntity) | CLF_QuestAbstractObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1516 | CLF_QuestAbstract_Inventory (SysConfigurableViewEntity) | CLF_QuestAbstractObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1523 | CLF_LocalizResource_Inventory (SysConfigurableViewProfileEntity) | CLF_LocalizResourceObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1527 | EventFwk_EventScenarioObjectDetailView (SysConfigurableViewEntity) | EventFwk_EventScenarioObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1536 | ActionPlans_ActionPlanAbs_PHA_Inventory (SysConfigurableViewEntity) | ActionPlans_ActionPlanAbsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1559 | Insp_InspRoleOptionObjectDetailView (SysConfigurableViewProfileEntity) | Insp_InspRoleOptionObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1565 | Insp_Type_Detail (SysConfigurableViewEntity) | Insp_TypeObject | IMP-17 |
| E1621 | Insp_EquipInspection_Detail (SysConfigurableViewProfileEntity) | Insp_EquipInspectionObject | IMP-19, IMP-21, IMP-16 |
| E1623 | Insp_EquipInspection_Detail (SysConfigurableViewEntity) | Insp_EquipInspectionObject | IMP-19, IMP-21, IMP-16 |
| E1675 | CLF_Quest_Inventory (SysConfigurableViewProfileEntity) | CLF_QuestObject | IMP-18 |
| E1677 | CLF_Quest_Inventory (SysConfigurableViewEntity) | CLF_QuestObject | IMP-18 |
| E1684 | CC_AbsCorrectiveAction_Inventory (SysConfigurableViewEntity) | ActionPlans_ActionPlanAbsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1695 | CLF_FindingStatus_Inventory (SysConfigurableViewEntity) | CLF_FindingStatusObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1699 | CLF_FindingStatus_Detail (SysConfigurableViewEntity) | CLF_FindingStatusObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1730 | CLF_ChecklistType_Detail (SysConfigurableViewEntity) | CLF_ChecklistTypeObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1753 | CLF_Checklist_Toolbox_Detail (SysConfigurableViewEntity) | CLF_ChecklistObject | IMP-18 |
| E1773 | CLF_Checklist_MassUpdate (SysConfigurableViewEntity) | CLF_ChecklistObject | IMP-18 |
| E1779 | CLF_Checklist_Select (SysConfigurableViewEntity) | CLF_ChecklistObject | IMP-18 |
| E1824 | ConfgAppSetting_GlobAppSettingsObjectDetailView (SysConfigurableViewEntity) | ConfgAppSetting_GlobAppSettingsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1826 | Insp_IReviewDecisionObjectInventoryView (SysConfigurableViewEntity) | Insp_IReviewDecisionObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1854 | CLF_QuestionAnswer_Findings (SysConfigurableViewProfileEntity) | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E1860 | CLF_MulticheckList_Detail (SysConfigurableViewProfileEntity) | CLF_MultichecklistsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1862 | CLF_MulticheckList_Detail (SysConfigurableViewEntity) | CLF_MultichecklistsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1882 | CLF_PubQuest_Inventory (SysConfigurableViewProfileEntity) | CLF_PubQuestObject | IMP-18 |
| E1894 | CLF_ChecklistAnswer_Findings (SysConfigurableViewEntity) | CLF_ChecklistAnswerObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1922 | ConfgAppSetting_PersRespOptionObjectInventoryView (SysConfigurableViewProfileEntity) | ConfgAppSetting_PersRespOptionObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1924 | ConfgAppSetting_PersRespOptionObjectInventoryView (SysConfigurableViewEntity) | ConfgAppSetting_PersRespOptionObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1939 | CLF_Multichecklist_Inventory (SysConfigurableViewEntity) | CLF_MultichecklistsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1944 | CLF_Multichecklist_Inventory (SysConfigurableViewProfileEntity) | CLF_MultichecklistsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1946 | CLF_ChoiceList_Detail (SysConfigurableViewEntity) | CLF_ChoiceListObject | IMP-18 |
| E1952 | CLF_ChoiceList_Detail (SysConfigurableViewProfileEntity) | CLF_ChoiceListObject | IMP-18 |
| E1954 | CLF_Quest_Select (SysConfigurableViewEntity) | CLF_QuestObject | IMP-18 |
| E1956 | CLF_Quest_Select (SysConfigurableViewProfileEntity) | CLF_QuestObject | IMP-18 |
| E1987 | CLF_PubChecklist_Detail (SysConfigurableViewProfileEntity) | CLF_PubChecklistObject | IMP-18 |
| E1989 | CLF_PubChecklist_Detail (SysConfigurableViewEntity) | CLF_PubChecklistObject | IMP-18 |
| E1992 | CLF_Finding_Detail_Readonly (SysConfigurableViewProfileEntity) | CLF_FindingObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1994 | CLF_Finding_Detail_Readonly (SysConfigurableViewEntity) | CLF_FindingObject | Reuse unchanged shared/dependency definition; no added pathway |
| E1998 | QP_AbCorrectivActi_Open_Inventory (SysConfigurableViewProfileEntity) | FragApplication_AbCorrectivActiObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2027 | Insp_IReviewDecisionObjectDetailView (SysConfigurableViewEntity) | Insp_IReviewDecisionObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2045 | ConfgAppSetting_SpecAppSettingsObjectDetailView (SysConfigurableViewEntity) | ConfgAppSetting_SpecAppSettingsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2084 | CLF_QuestionAnswer_MassUpdate (SysConfigurableViewProfileEntity) | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E2088 | CLF_Finding_Select (SysConfigurableViewEntity) | CLF_FindingObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2090 | CLF_Finding_Select (SysConfigurableViewProfileEntity) | CLF_FindingObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2098 | AbstractCorrectiveAction_Inventory (SysConfigurableViewProfileEntity) | FragApplication_AbCorrectivActiObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2127 | Insp_Type_Detail (SysConfigurableViewProfileEntity) | Insp_TypeObject | IMP-17 |
| E2135 | CLF_QuestionAnswer_Detail (SysConfigurableViewProfileEntity) | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E2251 | CLF_QuestionAnswer_Docs_Readonly (SysConfigurableViewProfileEntity) | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E2256 | CLF_Checklist_Toolbox_Detail (SysConfigurableViewProfileEntity) | CLF_ChecklistObject | IMP-18 |
| E2265 | CLF_Preferences_Inventory (SysConfigurableViewEntity) | CLF_PreferencesObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2267 | CLF_Preferences_Inventory (SysConfigurableViewProfileEntity) | CLF_PreferencesObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2294 | CLF_Quest_ToolBox_Detail (SysConfigurableViewEntity) | CLF_QuestObject | IMP-18 |
| E2298 | CLF_Quest_ToolBox_Detail (SysConfigurableViewProfileEntity) | CLF_QuestObject | IMP-18 |
| E2328 | ConfgAppSetting_SpecAppSettingsObjectDetailView (SysConfigurableViewProfileEntity) | ConfgAppSetting_SpecAppSettingsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2350 | CLF_PubChecklist_Inventory (SysConfigurableViewEntity) | CLF_PubChecklistObject | IMP-18 |
| E2356 | ConfgAppSetting_TPanelGeneratorObjectDetailView (SysConfigurableViewProfileEntity) | ConfgAppSetting_TPanelGeneratorObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2358 | ConfgAppSetting_TPanelGeneratorObjectDetailView (SysConfigurableViewEntity) | ConfgAppSetting_TPanelGeneratorObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2372 | CLF_Tag_Detail (SysConfigurableViewEntity) | CLF_TagObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2378 | ActionPlans_ActionPlanTem_Select (SysConfigurableViewEntity) | ActionPlans_ActioPlanTemObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2392 | CLF_ChecklistAnswer_Inventory (SysConfigurableViewEntity) | CLF_ChecklistAnswerObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2424 | Fragment_Insp_EquipInspection_QuestionAnswer (SysConfigurableViewEntity) | Insp_EquipInspectionObject | IMP-19, IMP-21, IMP-16 |
| E2432 | Fragment_Insp_EquipInspection_QuestionAnswer (SysConfigurableViewProfileEntity) | Insp_EquipInspectionObject | IMP-19, IMP-21, IMP-16 |
| E2482 | CLF_QuestionAnswer_ActionPlans (SysConfigurableViewProfileEntity) | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E2494 | CLF_QuestAbstract_Detail (SysConfigurableViewProfileEntity) | CLF_QuestAbstractObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2496 | CLF_QuestionAnswer_Docs (SysConfigurableViewProfileEntity) | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E2498 | ActionPlans_ActionPlanAbs_Inventory (SysConfigurableViewEntity) | ActionPlans_ActionPlanAbsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2501 | Insp_EquipInspectionObjectInventoryView (SysConfigurableViewEntity) | Insp_EquipInspectionObject | IMP-19, IMP-21, IMP-16 |
| E2503 | CLF_SectionObjectDetailView (SysConfigurableViewEntity) | CLF_SectionObject | IMP-18 |
| E2506 | CLF_SectionObjectDetailView (SysConfigurableViewProfileEntity) | CLF_SectionObject | IMP-18 |
| E2577 | CLF_PubChecklist_Inventory (SysConfigurableViewProfileEntity) | CLF_PubChecklistObject | IMP-18 |
| E2579 | Insp_EquipInspection_Frag_QuestionAnswer (SysConfigurableViewEntity) | Insp_EquipInspectionObject | IMP-19, IMP-21, IMP-16 |
| E2587 | Insp_EquipInspection_Frag_QuestionAnswer (SysConfigurableViewProfileEntity) | Insp_EquipInspectionObject | IMP-19, IMP-21, IMP-16 |
| E2589 | CAR_ActionPlanAbs_Inventory (SysConfigurableViewEntity) | ActionPlans_ActionPlanAbsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2620 | ConfgAppSetting_InstructionTextObjectInventoryView (SysConfigurableViewProfileEntity) | ConfgAppSetting_InstructionTextObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2643 | EventFwk_Event_Select (SysConfigurableViewEntity) | EventFwk_EventObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2953 | AuditMgmt_ActionPlan_Select (SysConfigurableViewEntity) | ActionPlans_ActionPlanAbsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2958 | Insp_EquipInspectionObjectInventoryView (SysConfigurableViewProfileEntity) | Insp_EquipInspectionObject | IMP-19, IMP-21, IMP-16 |
| E2968 | CLF_ChecklistAnswer_Detail (SysConfigurableViewEntity) | CLF_ChecklistAnswerObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2978 | CLF_Checklist_Select (SysConfigurableViewProfileEntity) | CLF_ChecklistObject | IMP-18 |
| E2982 | CLF_LocalizResource_Detail (SysConfigurableViewProfileEntity) | CLF_LocalizResourceObject | Reuse unchanged shared/dependency definition; no added pathway |
| E2987 | Insp_InspectionAbs_Detail (SysConfigurableViewEntity) | Insp_InspectionAbsObject | IMP-19, IMP-21 |
| E3002 | Subject_Select (SysConfigurableViewEntity) | SysSubjectEntity | Reuse unchanged shared/dependency definition; no added pathway |
| E3068 | CLF_Tag_Inventory (SysConfigurableViewEntity) | CLF_TagObject | Reuse unchanged shared/dependency definition; no added pathway |
| E3070 | CLF_SectionObjectInventoryView (SysConfigurableViewEntity) | CLF_SectionObject | IMP-18 |
| E3074 | ActionPlans_ActionPlan_Select (SysConfigurableViewEntity) | ActionPlans_ActionPlanAbsObject | Reuse unchanged shared/dependency definition; no added pathway |
| E3084 | CLF_Question_References_Detail (SysConfigurableViewEntity) | CLF_QuestObject | IMP-18 |

## 6. Component and source boundary coverage

| Component | Disposition | Tasks |
| --- | --- | --- |
| Application/inheritance | Existing Inspections application and all 87 source object identities/inheritance are reused; no create-application, import-package, reparenting or extra workflow-store task. | IMP-50 |
| New governed domains | Four catalogue objects, sixteen fields and their individual seed records. | IMP-01, IMP-23, IMP-46 |
| Existing selection domains | Shared routing/decision/equipment Code/Name/Sort changes; no ownership/inheritance replacement. | IMP-02, IMP-23 |
| Program behavior | Source/outcome and review/equipment settings, enforced flags and type form. | IMP-05, IMP-25, IMP-17 |
| Authoring and vocabulary | Complete sections, choice vocabulary preservation and question-specific semantics. | IMP-03, IMP-04, IMP-18, IMP-24 |
| Published configuration | All existing publication mappings plus new semantic copies; fixed content and controlled current version. | IMP-12, IMP-13, IMP-26, IMP-27 |
| Inspection details/applied settings | Stored dates/context and all fifteen program settings; no continuing authoring-dependent values. | IMP-06, IMP-07, IMP-08, IMP-29 |
| Resources/equipment | External shared interface supplied, consumer binding and historical copies; no local taxonomy build. | IMP-30, IMP-31, IMP-32, IMP-48 |
| Native evidence | Inspection and question attachments/external report; no custom file store. | IMP-16 |
| Answer generation/branching | Unique response/section creation, retained branch evidence, N/A and confirmation. | IMP-28, IMP-33, IMP-20 |
| Outcomes/readiness | Question outcomes, categorical inspection result, direct-action existence and no score/Finding blocker. | IMP-09, IMP-34, IMP-35, IMP-36 |
| Inspection workflow | Simple stages first; then review routing, forms, four complete user actions and acceptance evidence. | IMP-14, IMP-40, IMP-19, IMP-21, IMP-43 |
| Action workflow/context | Simple native stage, canonical source/aliases, immediate correction and independent completion. | IMP-15, IMP-10, IMP-11, IMP-37, IMP-38, IMP-39, IMP-22, IMP-42 |
| Follow-up classification | Later actions update only the derived accepted-inspection classification. | IMP-44 |
| Notifications/reminders | One native dispatch path and due-date reminders; no invented scheduled service. | IMP-41, IMP-45 |
| Security/audit/mobile | Basic catalogue access, nuanced stage/record/attachment rules, native audit and supported offline profiles. | IMP-46, IMP-47, IMP-49, IMP-50 |
| Reporting | Inventory/external, deficiency, canonical actions, native review cycles and stable-question trends. | IMP-51, IMP-52, IMP-53, IMP-54, IMP-55 |
| Portable output | Proposed branded Merge Template, evidence content and native retained output. | IMP-56, IMP-57, IMP-58 |
| Initial configuration | Supplied reviewer roster, three inactive type records and bounded approved initial checklist packages. | IMP-59, IMP-60, IMP-61, IMP-62, IMP-63 |

The existing five workflow schemas are accounted for as follows: Inspection stage/action configuration is updated in the two inspection workflow tasks; Inspection Action Plan is updated in the two action workflow tasks plus the specialist creation operation; the two audit/multiple-checklist schemas and Sub-checklist schema retain their compatibility flags/pending drafts and receive no new workflow assignment. Native workflow history, reminders, audit, attachments and mobile services are reused; only their specified configuration changes are assigned. Proposed consolidated regulatory reporting is explicitly not applicable to this build.
