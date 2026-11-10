# Revision 2 implementation coverage

Current [technical specification](solution-specification.md) and [implementation plan](implementation-plan.md). This inventory distinguishes actual changes, explicit reuse and externally supplied interfaces. It does not revive archived architectural proposals.

## 1. Changed declarations

| Object | Field | Change / evidence | Requirements / rules | Current assignments |
| --- | --- | --- | --- | --- |
| CLF_ChecklistAnswerObject | Findings | Modify; E2963 | INS-004, INS-005 / R02 | IMP-16, IMP-20 |
| CLF_ChecklistAnswerObject | MaxPoints | Modify; E1193 | INS-004, INS-005 / R02 | IMP-16, IMP-20 |
| CLF_ChecklistAnswerObject | NbFindings | Modify; E2972 | INS-004, INS-005 / R02 | IMP-16, IMP-20 |
| CLF_ChecklistAnswerObject | PointsAwarded | Modify; E1981 | INS-004, INS-005 / R02 | IMP-16, IMP-20 |
| CLF_ChecklistAnswerObject | Score | Modify; E1977 | INS-004, INS-005 / R02 | IMP-16, IMP-20 |
| CLF_ChecklistAnswerObject | SysteTypeHelper | Modify; E1023 | INS-002 / R01, R02 | IMP-28 |
| CLF_ChecklistObject | EnableScoring | Modify; E1784 | INS-004, INS-011 / R02 | IMP-03, IMP-24 |
| CLF_ChecklistObject | EnableSections | Modify; E1534 | INS-004, INS-011 / R02 | IMP-03, IMP-24 |
| CLF_ChoiceListObject | MaxPoints | Modify; E722 | INS-004 / D01 | IMP-03 |
| CLF_ChoiceObject | Value | Modify; E323 | INS-004 / D01 | IMP-04, IMP-03, IMP-24 |
| CLF_ChoiceObject | IsNegative | Add; USR-CHOICE-NEGATIVE | INS-003, INS-004 / R02, D01 | IMP-04, IMP-03, IMP-24 |
| CLF_InsActionPlanObject | ActionOwner | Modify; E1812 | INS-013 / R06 | IMP-10, IMP-42 |
| CLF_InsActionPlanObject | AlBeenCorrected | Modify; E534 | INS-013 / R06 | IMP-10, IMP-42 |
| CLF_InsActionPlanObject | ChecklistAnswer | Modify; E782 | INS-002, INS-005 / R06 | Existing product functionality; no configuration task |
| CLF_InsActionPlanObject | HelperReleaseAP | Modify; E490 | INS-002, INS-005 / R06 | IMP-10, IMP-42 |
| CLF_InsActionPlanObject | hRelatedInsp | Modify; E154 | INS-002, INS-005 / R06 | Existing product functionality; no configuration task |
| CLF_InsActionPlanObject | QuestionAnswers | Modify; E1618 | INS-002, INS-005 / R06 | Existing product functionality; no configuration task |
| CLF_InsActionPlanObject | RelateQuestions | Modify; E1321 | INS-002, INS-005 / R06 | Existing product functionality; no configuration task |
| CLF_PubQuestObject | MaxPoints | Modify; E233 | INS-004 / D01 | IMP-03 |
| CLF_QuestAbstractObject | ActReqChoices | Modify; E642 | INS-003, INS-005 / R02 | IMP-04, IMP-03, IMP-24 |
| CLF_QuestAbstractObject | AnswerRequired | Modify; E130 | INS-011 / R02 | IMP-04, IMP-03, IMP-24 |
| CLF_QuestAbstractObject | ComReqIfNA | Modify; E640 | INS-003, INS-011 / R02 | IMP-04, IMP-03, IMP-24 |
| CLF_QuestAbstractObject | FindReqChoices | Modify; E651 | INS-005 / R02 | IMP-04, IMP-03, IMP-24 |
| CLF_QuestAbstractObject | TriggerFindings | Modify; E1518 | INS-004, INS-005 / R02 | IMP-04, IMP-03, IMP-24 |
| CLF_QuestAbstractObject | ValueChoiceList | Modify; E1345 | INS-004, INS-005 / R02 | IMP-04, IMP-03, IMP-24 |
| CLF_QuestAbstractObject | Weight | Modify; E1343 | INS-004, INS-005 / R02 | IMP-04, IMP-03, IMP-24 |
| CLF_QuestAbstractObject | ContributesToOutcome | Add; PF-055 | INS-003, INS-004 / R02, D01 | IMP-04, IMP-03, IMP-24 |
| CLF_QuestionAnswerObject | Findings | Modify; E545 | INS-004, INS-005 / R02 | IMP-20 |
| CLF_QuestionAnswerObject | IsActionMiss | Modify; E802 | INS-003, INS-005, INS-011 / R02 | IMP-35 |
| CLF_QuestionAnswerObject | IsAnswerMiss | Modify; E948 | INS-003, INS-005, INS-011 / R02 | IMP-35 |
| CLF_QuestionAnswerObject | IsComMiss | Modify; E831 | INS-003, INS-005, INS-011 / R02 | IMP-35 |
| CLF_QuestionAnswerObject | IsFindingMiss | Modify; E896 | INS-003, INS-005, INS-011 / R02 | IMP-35 |
| CLF_QuestionAnswerObject | IsSubmitReady | Modify; E847 | INS-003, INS-005, INS-011 / R02 | IMP-35 |
| CLF_QuestionAnswerObject | MaxPoints | Modify; E870 | INS-004, INS-005 / R02 | IMP-20 |
| CLF_QuestionAnswerObject | NbActions | Modify; E839 | INS-003, INS-005, INS-011 / R02 | Existing product functionality; no configuration task |
| CLF_QuestionAnswerObject | NbFindings | Modify; E542 | INS-004, INS-005 / R02 | IMP-20 |
| CLF_QuestionAnswerObject | PointsAwarded | Modify; E810 | INS-004, INS-005 / R02 | IMP-20 |
| CLF_QuestionAnswerObject | Attachments | Add; PF-052 | INS-001, INS-005 / R02 | IMP-16, IMP-47 |
| CLF_QuestionAnswerObject | ResponseOutcome | Add; PF-054 | INS-004, INS-005, INS-009 / D01 | IMP-09, IMP-34 |
| CLF_SectionObject | SectionName | Modify; E1331 | INS-011 / R02 | IMP-03, IMP-24 |
| FragApplication_AbCorrectivActiObject | CheckListAnsAct | Modify; E549 | INS-005, INS-013, INS-015 / R06 | Existing product functionality; no configuration task |
| FragApplication_AbCorrectivActiObject | CompletedBy | Modify; E1424 | INS-005, INS-013, INS-015 / R06 | IMP-10, IMP-42 |
| FragApplication_AbCorrectivActiObject | CompletionDate | Modify; E800 | INS-005, INS-013, INS-015 / R06 | IMP-10, IMP-42 |
| FragApplication_AbCorrectivActiObject | CompletionNotes | Modify; E1439 | INS-005, INS-013, INS-015 / R06 | IMP-10, IMP-42 |
| FragApplication_AbCorrectivActiObject | CPARActionReq | Modify; E200 | INS-005, INS-013, INS-015 / R06 | IMP-10, IMP-42 |
| FragApplication_AbCorrectivActiObject | CPARTypeID | Modify; E1410 | INS-005, INS-013, INS-015 / R06 | IMP-10, IMP-42 |
| FragApplication_AbCorrectivActiObject | DueDate | Modify; E1427 | INS-005, INS-013, INS-015 / R06 | IMP-10, IMP-42 |
| FragApplication_AbCorrectivActiObject | RelatedQstions | Modify; E719 | INS-005, INS-013, INS-015 / R06 | Existing product functionality; no configuration task |
| Insp_EquipInspectionObject | Equipment | Modify; E1543 | INS-012 / R05 | IMP-16, IMP-30, IMP-31 |
| Insp_EquipInspectionObject | EquipmentTxt | Modify; E2913 | INS-012 / R05 | IMP-16, IMP-30, IMP-31 |
| Insp_EquipInspectionObject | ReleActionPlans | Modify; E1471 | INS-015 / R06 | IMP-43, IMP-42 |
| Insp_EquipInspectionObject | ExternalParty | Add; PF-042 | INS-002, INS-006 / R01, R04 | IMP-08, IMP-16, IMP-43 |
| Insp_EquipInspectionObject | PerformedOn | Add; PF-043 | INS-002, INS-006 / R01, R04 | IMP-08, IMP-16, IMP-43 |
| Insp_EquipInspectionObject | SubmittedAt | Add; PF-044 | INS-002, INS-006 / R01, R04 | IMP-08, IMP-16, IMP-43 |
| Insp_EquipInspectionObject | AcceptedAt | Add; PF-045 | INS-002, INS-006 / R01, R04 | IMP-08, IMP-16, IMP-43 |
| Insp_EquipInspectionObject | OverallOutcome | Add; PF-046 | INS-004 / D01 | IMP-09, IMP-36 |
| Insp_EquipInspectionObject | ActionClassification | Add; PF-047 | INS-015 / D02 | IMP-09, IMP-44 |
| Insp_EquipInspectionObject | OperationalResource | Add; PF-048 | INS-017 / R05 | IMP-31 |
| Insp_EquipInspectionObject | Attachments | Add; PF-051 | INS-001 / R01 | IMP-16, IMP-47 |
| Insp_EquipInspectionObject | ExternalInspectionReport | Add; USR-EXTERNAL-REPORT-FILE | INS-001, INS-002 / R01 | IMP-16, IMP-35, IMP-43, IMP-47, IMP-50 |
| Insp_InspectionAbsObject | CompletedBy | Modify; E2148 | INS-006 / R04 | Existing product functionality; no configuration task |
| Insp_InspectionAbsObject | CompletedOn | Modify; E1042 | INS-006 / R04 | Existing product functionality; no configuration task |
| Insp_InspectionAbsObject | DaofFirstReview | Modify; E2992 | INS-006 / R04 | IMP-08, IMP-43 |
| Insp_InspectionAbsObject | DofSecondReview | Modify; E2990 | INS-006 / R04 | IMP-08, IMP-43 |
| Insp_InspectionAbsObject | FirstReviewBy | Modify; E2984 | INS-006 / R04 | IMP-08, IMP-43 |
| Insp_InspectionAbsObject | InspecChecklist | Modify; E1218 | INS-002 / R01 | IMP-16, IMP-40, IMP-43 |
| Insp_InspectionAbsObject | RevieweComment1 | Modify; E3000 | INS-006 / R04 | Existing product functionality; no configuration task |
| Insp_InspectionAbsObject | RevieweComments | Modify; E1525 | INS-006 / R04 | Existing product functionality; no configuration task |
| Insp_InspectionAbsObject | RevieweDecisio1 | Modify; E2997 | INS-006 / R04 | Existing product functionality; no configuration task |
| Insp_InspectionAbsObject | RevieweDecision | Modify; E2611 | INS-006 / R04 | Existing product functionality; no configuration task |
| Insp_InspectionAbsObject | SecondReviewBy | Modify; E2994 | INS-006 / R04 | IMP-08, IMP-43 |
| Insp_TypeObject | ComplValidation | Modify; E1563 | INS-002, INS-005, INS-011 / R01 | IMP-05 |
| Insp_TypeObject | DforFirstReview | Modify; E1603 | INS-006 / R04 | IMP-05 |
| Insp_TypeObject | ELOptions | Modify; E1600 | INS-012 / R05 | IMP-05 |
| Insp_TypeObject | EnabFirstReview | Modify; E1191 | INS-006 / R04 | Data Migration; no configuration task |
| Insp_TypeObject | EnaSecondReview | Modify; E1608 | INS-006 / R04 | Data Migration; no configuration task |
| Insp_TypeObject | EquipmentList | Modify; E1588 | INS-012 / R05 | Data Migration; no configuration task |
| Insp_TypeObject | EquipmMandatory | Modify; E163 | INS-012 / R05 | IMP-05 |
| Insp_TypeObject | Expression | Modify; E1068 | INS-006 / R04 | IMP-05 |
| Insp_TypeObject | Expression2 | Modify; E686 | INS-006 / R04 | IMP-05 |
| Insp_TypeObject | FindingTracking | Modify; E1103 | INS-002, INS-005, INS-011 / R01 | IMP-05 |
| Insp_TypeObject | FirstReviewer | Modify; E1612 | INS-006 / R04 | IMP-05 |
| Insp_TypeObject | forSecondReview | Modify; E1596 | INS-006 / R04 | IMP-05 |
| Insp_TypeObject | InspRoleOption | Modify; E591 | INS-006 / R04 | IMP-05 |
| Insp_TypeObject | InspRoleOption2 | Modify; E989 | INS-006 / R04 | IMP-05 |
| Insp_TypeObject | InspRoleOptionId | Modify; E1238 | INS-006 / R04 | IMP-05 |
| Insp_TypeObject | PRMethod | Modify; E1247 | INS-006 / R04 | IMP-05 |
| Insp_TypeObject | PRMethodSndRev | Modify; E1593 | INS-006 / R04 | IMP-05 |
| Insp_TypeObject | Role | Modify; E1242 | INS-006 / R04 | IMP-05 |
| Insp_TypeObject | Role2 | Modify; E1590 | INS-006 / R04 | IMP-05 |
| Insp_TypeObject | RoleName | Modify; E1240 | INS-006 / R04 | IMP-05 |
| Insp_TypeObject | RoleName2 | Modify; E1598 | INS-006 / R04 | IMP-05 |
| Insp_TypeObject | SecondReviewer | Modify; E1605 | INS-006 / R04 | IMP-05 |
| Insp_TypeObject | SourceMode | Add; PF-025 | INS-002 / R01 | IMP-05 |
| Insp_TypeObject | OverallOutcomeRequired | Add; PF-026 | INS-004 / R03 | IMP-05 |
| Insp_InspectionSourceObject | Code | Add; PF-001 | INS-002 /  | IMP-01 |
| Insp_InspectionSourceObject | Name | Add; PF-002 | INS-002 /  | IMP-01 |
| Insp_InspectionSourceObject | Active | Add; PF-003 | INS-002 /  | IMP-01 |
| Insp_InspectionSourceObject | Sort | Add; PF-004 | INS-002 /  | IMP-01 |
| Insp_OutcomeObject | Code | Add; PF-005 | INS-004, INS-009 /  | IMP-01 |
| Insp_OutcomeObject | Name | Add; PF-006 | INS-004, INS-009 /  | IMP-01 |
| Insp_OutcomeObject | Active | Add; PF-007 | INS-004, INS-009 /  | IMP-01 |
| Insp_OutcomeObject | Sort | Add; PF-008 | INS-004, INS-009 /  | IMP-01 |
| Insp_ResponseOutcomeObject | Code | Add; PF-009 | INS-004, INS-009 /  | IMP-01 |
| Insp_ResponseOutcomeObject | Name | Add; PF-010 | INS-004, INS-009 /  | IMP-01 |
| Insp_ResponseOutcomeObject | Active | Add; PF-011 | INS-004, INS-009 /  | IMP-01 |
| Insp_ResponseOutcomeObject | Sort | Add; PF-012 | INS-004, INS-009 /  | IMP-01 |
| Insp_ClassificationObject | Code | Add; PF-013 | INS-015 /  | IMP-01 |
| Insp_ClassificationObject | Name | Add; PF-014 | INS-015 /  | IMP-01 |
| Insp_ClassificationObject | Active | Add; PF-015 | INS-015 /  | IMP-01 |
| Insp_ClassificationObject | Sort | Add; PF-016 | INS-015 /  | IMP-01 |

## 2. Object and retained field coverage

| Object | Instruction | Assignments for changed declarations | Retained direct fields |
| --- | --- | --- | --- |
| ActionPlans_ActionPlanAbsObject | Reuse existing object | Reuse; no object rebuild | Activites, ActivitiesStart, ActivitProgress, AssessResults, CFWFindings, MActivitesOrder, MaxTasksOrder, NbActivites, NbOpenActivit, NbOpened, NbTasks, NCR, PermitAbstract, PersonResp, ProvenEffective, ReviewerComment, ReviewType, RiskAbs, StartDate, Tasks, TasksProgress, Template, VOCAbstract |
| ActionPlans_ActioPlanTemObject | Reuse external interface | Reuse; no object rebuild | None |
| ActionPlans_ActivityAbsObject | Reuse external interface | Reuse; no object rebuild | CanStart, Order, PrereActivities |
| ActionPlans_ActTypeofReviewObject | Reuse external interface | Reuse; no object rebuild | None |
| ActionPlans_GlobActPlanAbsObject | Reuse external interface | Reuse; no object rebuild | None |
| CAR_CARObject | Reuse external interface | Reuse; no object rebuild | None |
| CauseAnalysis_CauseAnalysisObject | Reuse external interface | Reuse; no object rebuild | None |
| CauseAnalysis_RootCauseObject | Reuse external interface | Reuse; no object rebuild | None |
| CFW_FindingObject | Reuse external interface | Reuse; no object rebuild | None |
| CLF_AnswerTypeObject | Reuse existing object | Reuse; no object rebuild | Caption, Index, Value |
| CLF_CheckliAbstractObject | Reuse existing object | Reuse; no object rebuild | Description, Location, Title |
| CLF_ChecklistAnswerObject | Reuse identity; configure listed fields only | IMP-16, IMP-20, IMP-28 | ActionPlanAbst, ActionPlans, ApplicQuestions, Comments, CreatedBy, DefPersRespFind, Depth, DisplayField, FilledQuestions, Id, Location, MasterChecklist, Name, NbActions, NbSubChecklists, oSectionAnswers, Path, PersResponsibl, PrevChecklistId, Progress, PubChecklist, QuestionAnswers, RecordNo, SectAnswers, SubChecklists, Workflow |
| CLF_ChecklistObject | Reuse identity; configure listed fields only | IMP-03, IMP-24 | Active, AutoCode, ChecklistType, HelpeQuestions, Id, NbQuestions, PubChecklists, Questions, Reference, Sections |
| CLF_ChecklistTypeObject | Reuse existing object | Reuse; no object rebuild | Checklists, Description, MaxOrder, Name, NbChecklists, NbQuestions, QueAnswerObject, Questions, Reference |
| CLF_ChoiceListObject | Reuse identity; configure listed fields only | IMP-03 | ChoiceLists, Choices, Description, Id, Name, NbChoices, Reference |
| CLF_ChoiceObject | Reuse identity; configure listed fields only | IMP-04, IMP-03, IMP-24 | BColor, ChoiceList, Css, Id, IsNA, MobileAction, Name, Reference, SortOrder, TColor |
| CLF_FindingDDObject | Reuse existing object | Reuse; no object rebuild | Caption, Index, Value |
| CLF_FindingObject | Reuse existing object | Reuse; no object rebuild | ActionPlans, ChecklistAnswer, DueIn, FindingStatus, HasActionPlans, IsOpen, ManCloseCom, ManualClose, NbAPs, NbOpAPs, PersResponsible, QuestionAnswers, ResponseDue |
| CLF_FindingStatusObject | Reuse existing object | Reuse; no object rebuild | BC, Code, Icon, Name, TC |
| CLF_InsActionPlanObject | Reuse identity; configure listed fields only | IMP-10, IMP-42 | Findings, hRelatedInspId, NotifiDate, PlaDisplayField, QuestionList, RecordName |
| CLF_LocalizResourceObject | Reuse existing object | Reuse; no object rebuild | Comments, Key, Value |
| CLF_MultichecklistsObject | Reuse existing object | Reuse; no object rebuild | Agenda, Objective, PersResponsible, RelatedCAR, Scope |
| CLF_PreferencesObject | Reuse existing object | Reuse; no object rebuild | GridCustomCode, Name |
| CLF_PubChecklistObject | Reuse existing object | Reuse; no object rebuild | Active, Checklist, ChecklistRef, ChecklistType, IsActive, PubQuestions |
| CLF_PubQuestObject | Reuse identity; configure listed fields only | IMP-03 | AbsoluteOrder, AnswerTypeCode, DependsOnPub, DependsOnPubId, Expression, HasCondDisplay, hCheckAnswer, hCheckAnswerId, Id, PubChecklists, Question, QuestionRef, SectionName, SectionSort, VisDepNoAns, VisibleIfs |
| CLF_QuestAbstractObject | Reuse identity; configure listed fields only | IMP-04, IMP-03, IMP-24 | AllowNA, AnswerType, ChoiceList, ChoiceListId, ComReqChoices, Content, DateCreated, DateModifiedHel, DefaultBool, DefaultChoice, DefaultChoices, Guideline, Order, Section |
| CLF_QuestionAnswerObject | Reuse identity; configure listed fields only | IMP-20, IMP-35, IMP-16, IMP-47, IMP-09, IMP-34 | AbsoluteOrder, ActionPlans, AnswerText, Checkbox, ChecklistAnswer, ChecklistAnswerId, Choice, ChoiceId, Choices, Comments, CrSectionAnswer, Date, Dependencies, DependsOn, Float, HelpQuestiText, InspActionPlans, IsApplicable, IsFilled, IsNA, IsVisible, MassUpChoice, MassUpChoiceId, NumbofDocuments, PubQuestion, PubQuestionId, QuesSummaryText, QuestionRef, SectionAnswer, Text, TrDefaultAnswer |
| CLF_QuestObject | Reuse existing object | Reuse; no object rebuild | AbsoluteOrder, Checklists, ChecklistType, DependsOn, ExistingSection, HasDependsOn, HelperChecklist, LastPublish, NbChecklists, PubQuestions, QuestionRef, References, TextReferences, UseExisting, UseReferences, VisDepNoAns, VisibleIfs |
| CLF_SectionAnswerObject | Reuse existing object | Reuse; no object rebuild | CheckAnswerGUID, ChecklistAnswer, ChecklistAnswerId, QuestionAnswers, Section, Sort |
| CLF_SectionObject | Reuse identity; configure listed fields only | IMP-03, IMP-24 | Checklist, Questions, Sort |
| CLF_SinglechecklistObject | Reuse existing object | Reuse; no object rebuild | None |
| CLF_SubchecklistObject | Reuse existing object | Reuse; no object rebuild | StartCondition |
| CLF_TagObject | Reuse existing object | Reuse; no object rebuild | Name, Questions |
| ComplyFramework_CARAbstractObject | Reuse external interface | Reuse; no object rebuild | None |
| ConfgAppSetting_GlobAppSettingsObject | Reuse existing object | Reuse; no object rebuild | None |
| ConfgAppSetting_IconAssetObject | Reuse existing object | Reuse; no object rebuild | Code, Name, SVGCode |
| ConfgAppSetting_InstructionTextObject | Reuse existing object | Reuse; no object rebuild | Application, DisplayField, Form, InstrTextHeader, InstructiText, InstruPanelCode, RecordNo, Stage, TemplaGenerator |
| ConfgAppSetting_PersRespOptionObject | Reuse existing object | Reuse; no object rebuild | Active, Name, RecordNo, Sort |
| ConfgAppSetting_SpecAppSettingsObject | Reuse existing object | Reuse; no object rebuild | CalIconSel, ClocIconGeneral, ClockIcon, DueDateIcon, DueIconWorkflow, LoStructureIcon, Name, PerIconWorkflow, ResIconWorkflow, StaIconWorkflow, StruIconGeneral, WrkflowStaIcon |
| ConfgAppSetting_TPanelGeneratorObject | Reuse existing object | Reuse; no object rebuild | CSSTemplate, HTMLTemplate, InstructionPane, RecordNo, TemplateName |
| EventFwk_AbsEvidenceObject | Reuse external interface | Reuse; no object rebuild | None |
| EventFwk_CAPAObject | Reuse external interface | Reuse; no object rebuild | None |
| EventFwk_EventActionPlanObject | Reuse external interface | Reuse; no object rebuild | None |
| EventFwk_EventCostObject | Reuse external interface | Reuse; no object rebuild | None |
| EventFwk_EventObject | Reuse existing object | Reuse; no object rebuild | AbsCorActPlan, AdditionalCost, CAPAs, CAREvent, CauseAnalysis, CorrectiActions, Costs, Date, DateApproved, DateOnly, DateReported, DateUserEntered, DatInvestigated, EndDate, EstimatedCost, EventActionPlan, EventType, Evidence, FinalAppNotes, FinalApprover, ImmediateAction, InvestDueDate, Investigator, InvestResults, LessonsLearned, NBCAPAs, NBOpenedCAPAs, ParentEvent, ReportedBy, ReviewNotes, Risk, RootCauses, Severity, Subs, Summary, SuspectedCause, TeamLeader, TeamMembers, TotalCost, TypeOfEvent |
| EventFwk_EventScenarioObject | Reuse existing object | Reuse; no object rebuild | Description, Location, Name, RecordNo |
| EventFwk_EventTypeObject | Reuse external interface | Reuse; no object rebuild | None |
| EventFwk_LessonLearnedObject | Reuse external interface | Reuse; no object rebuild | None |
| EventFwk_NonConfAbstractObject | Reuse external interface | Reuse; no object rebuild | None |
| EventFwk_SeverityObject | Reuse external interface | Reuse; no object rebuild | None |
| EventFwk_TeamMemberObject | Reuse external interface | Reuse; no object rebuild | None |
| EventFwk_VOCAbstractObject | Reuse external interface | Reuse; no object rebuild | None |
| FragApplication_AbCorrectivActiObject | Reuse identity; configure listed fields only | IMP-10, IMP-42 | ActionNo, ActionPlanType, ActPlanSysType, ActualCost, CAR, Costs, EventRelated, HelperQPType, HelpIsCompQP, IsCompleted, Location, ProgressNotes, ProjRevActionPlansId, ReactionPlan, RecoAction, ReportedBy, ReportedOn, SourceObject, SourceRecordId, ToCostofActions, Workflow |
| FragApplication_AbstractCostObject | Reuse external interface | Reuse; no object rebuild | ConvertedCost |
| FragApplication_ActionCostObject | Reuse external interface | Reuse; no object rebuild | None |
| FragApplication_ColorObject | Reuse existing object | Reuse; no object rebuild | Caption, TextColor, Value |
| FragApplication_CorrectivePreveObject | Reuse external interface | Reuse; no object rebuild | None |
| FragApplication_EquipmentObject | Reuse external interface | Reuse; no object rebuild | Name |
| FragApplication_PrgressNotesObject | Reuse external interface | Reuse; no object rebuild | None |
| Insp_ActTypeofReviewObject | Reuse existing object | Reuse; no object rebuild | Caption, Index, Value |
| Insp_EquipInspectionObject | Reuse identity; configure listed fields/parameters | IMP-16, IMP-30, IMP-31, IMP-43, IMP-42, IMP-08, IMP-09, IMP-36, IMP-44, IMP-47, IMP-35, IMP-50 | CommetoReviewer, CommtoReviewer2, CreateMode, FApprovalFields, HelpeIsComplete, HelperLocatio2, HelpErrorMes, Id, IPCreate, IPDraft, IPInProgress, IPReview, IPReview2, LNoticeonCreate, NotifiDate, Reviewer, SApprovalFields, Scope |
| Insp_EquipListOptionObject | Reuse existing object | Reuse; no object rebuild | Active, Name, RecordNo, Sort |
| Insp_InspectionAbsObject | Reuse identity; configure listed fields/parameters | IMP-08, IMP-43, IMP-16, IMP-40 | DistributioList, HelperLocation, InsDisplayField, InspecChecklistId, InspectionDate, PersResponsible, PersResponsibleId, TypeOfInspec |
| Insp_InspRoleOptionObject | Reuse existing object | Reuse; no object rebuild | Active, Name, RecordNo, Sort |
| Insp_IReviewDecisionObject | Reuse existing object | Reuse; no object rebuild | Active, Name, Sort |
| Insp_MobileActionObject | Reuse existing object | Reuse; no object rebuild | Caption, Index, Value |
| Insp_TypeObject | Reuse identity; configure listed fields only | IMP-05 | Active |
| MetObjectEntity | Reuse external interface | Reuse; no object rebuild | None |
| MetTypeEntity | Reuse external interface | Reuse; no object rebuild | None |
| NCR_NCRObject | Reuse external interface | Reuse; no object rebuild | None |
| PTW_PermitRecordObject | Reuse external interface | Reuse; no object rebuild | None |
| QP_NodeAbstractObject | Reuse external interface | Reuse; no object rebuild | ProjRev, ProjRevId |
| QP_ProjRevObject | Reuse external interface | Reuse; no object rebuild | None |
| QP_ReactionPlanObject | Reuse external interface | Reuse; no object rebuild | None |
| QP_RecoActionObject | Reuse external interface | Reuse; no object rebuild | ActionTaken |
| RiskFmk_AResultAbstractObject | Reuse external interface | Reuse; no object rebuild | RiskAssessment |
| RiskFmk_OpRiskObject | Reuse external interface | Reuse; no object rebuild | None |
| RiskFmk_RiskAssessmentObject | Reuse external interface | Reuse; no object rebuild | Risk |
| RiskFmk_RiskObject | Reuse external interface | Reuse; no object rebuild | None |
| SysEmployeeEntity | Reuse external interface | Reuse; no object rebuild | Id, Supervisor |
| SysGroupEntity | Reuse external interface | Reuse; no object rebuild | None |
| SysLocationEntity | Reuse external interface | Reuse; no object rebuild | ChildLocations |
| SysRoleEntity | Reuse external interface | Reuse; no object rebuild | None |
| SysSubjectEntity | Reuse external interface | Reuse; no object rebuild | None |
| SysWorkflowInstanceEntity | Reuse external interface | Reuse; no object rebuild | CurrentStage, DateNotRequired, DueDate, PersonResponsible, PersonResponsibleId, RecurringSeries, WorkflowStatus |
| SysWorkflowRecurringSeriesEntity | Reuse external interface | Reuse; no object rebuild | NextScheduledDate, StartDate |
| SysWorkflowStageEntity | Reuse external interface | Reuse; no object rebuild | SystemName |
| Insp_InspectionSourceObject | Add local catalogue | IMP-01 | None |
| Insp_OutcomeObject | Add local catalogue | IMP-01 | None |
| Insp_ResponseOutcomeObject | Add local catalogue | IMP-01 | None |
| Insp_ClassificationObject | Add local catalogue | IMP-01 | None |
| Shared_OperationalResource | Conditional external binding; no local object creation | G05 supplies interface; IMP-31 consumer binding only | None |

## 3. Existing handler coverage

| Evidence | Handler | Assignment or reuse |
| --- | --- | --- |
| E55 | Attach Risk if Assessment Results is not blank | Reuse existing native/shared behavior; no remediation task |
| E187 | FMEA-Update Recommended Action Action Taken | Reuse existing native/shared behavior; no remediation task |
| E241 | Actions on Update | Reuse existing native/shared behavior; no remediation task |
| E265 | Copy Values from Question during Publish | IMP-04 |
| E429 | Relate to Checklist Answer | Reuse existing native/shared behavior; no remediation task |
| E437 | Create Anwer Records | Reuse existing native/shared behavior; no remediation task |
| E477 | Send Assignment Notification Upon Completion of Inspection | IMP-41 |
| E522 | Start Date must be on or after today. | Reuse existing native/shared behavior; no remediation task |
| E629 | (0) Actions on Create & Update | IMP-24 |
| E842 | Clear Answer if not visible | Reuse existing native/shared behavior; no remediation task |
| E883 | (2) Actions on Update | Reuse existing native/shared behavior; no remediation task |
| E935 | (1) Actions on Create | Reuse existing native/shared behavior; no remediation task |
| E942 | [DEPRECATED] Check Consistency on Points | Reuse existing native/shared behavior; no remediation task |
| E952 | Create Section and Set Default Value | Reuse existing native/shared behavior; no remediation task |
| E1075 | Clear Person Responsible and Due Date when workflow is Closed | Reuse existing native/shared behavior; no remediation task |
| E1236 | Create Role | IMP-05 |
| E1319 | Sync RelatedQstions to RelateQuestions | Reuse existing native/shared behavior; no remediation task |
| E1391 | Completion Date | Reuse existing native/shared behavior; no remediation task |
| E1400 | Get Action Source | Reuse existing native/shared behavior; no remediation task |
| E1420 | Due Date in future on creation | Reuse existing native/shared behavior; no remediation task |
| E1429 | FMEA - Sync Project Revision Action Plans | Reuse existing native/shared behavior; no remediation task |
| E1477 | Clear Conditional Display Fields if not dependent | Reuse existing native/shared behavior; no remediation task |
| E1765 | Set Auto Checklist Code | Reuse existing native/shared behavior; no remediation task |
| E1788 | Sync Location | Reuse existing native/shared behavior; no remediation task |
| E1815 | Calc Due Date | Reuse existing native/shared behavior; no remediation task |
| E1884 | Init Abstract Field Values on Create | Reuse existing native/shared behavior; no remediation task |
| E1960 | On Create | Reuse existing native/shared behavior; no remediation task |
| E2000 | Set Inspection Name | Reuse existing native/shared behavior; no remediation task |
| E2007 | Create answers | IMP-28 |
| E2023 | Sync Inspector to Person Responsible | Reuse existing native/shared behavior; no remediation task |
| E2096 | Set Location Field | Reuse existing native/shared behavior; no remediation task |
| E2258 | Update Workflow Person Responsible | Reuse existing native/shared behavior; no remediation task |
| E2283 | Notify Inspector if Created by Someone Else | Reuse existing native/shared behavior; no remediation task |
| E2348 | Copy Values | Reuse existing native/shared behavior; no remediation task |
| E2361 | Clear Person Responsible and Due Date when workflow is Closed | Reuse existing native/shared behavior; no remediation task |
| E2390 | Section and Sort Order Management | Reuse existing native/shared behavior; no remediation task |
| E2415 | Related to MM Checklist Grid | Reuse existing native/shared behavior; no remediation task |
| E2571 | Set Record Name | Reuse existing native/shared behavior; no remediation task |
| E2575 | Track Modified Changes | Reuse existing native/shared behavior; no remediation task |
| E2594 | Set Action Owner | Reuse existing native/shared behavior; no remediation task |
| E2601 | Update Status | Reuse existing native/shared behavior; no remediation task |
| E2606 | Clean up Choice List Field | Reuse existing native/shared behavior; no remediation task |
| E2628 | Throw Error if Saved at Location that Isn't Bottom | IMP-30 |
| E2669 | Update CreateMode Flag | Reuse existing native/shared behavior; no remediation task |
| E2924 | Clear Completed information on Create | Reuse existing native/shared behavior; no remediation task |
| E2929 | Set [Helper] Inspection Relation | Reuse existing native/shared behavior; no remediation task |
| E2936 | Set Record Name | Reuse existing native/shared behavior; no remediation task |
| E2976 | [INACTIVE] Set Field values on Abstract | Reuse existing native/shared behavior; no remediation task |
| E2980 | Sync Person Responsible | Reuse existing native/shared behavior; no remediation task |
| E3072 | Trigger Activities | Reuse existing native/shared behavior; no remediation task |
| E3077 | [OBSOLETE] Init Values | Reuse existing native/shared behavior; no remediation task |
| E3088 | Action Already Completed | IMP-39 |

## 4. View/profile coverage

| Evidence | Definition | Owning object | Assignment or reuse |
| --- | --- | --- | --- |
| E18 | CLF_InsActionPlan_Detail | CLF_InsActionPlanObject | IMP-10 |
| E30 | CLF_InsActionPlan_Detail | CLF_InsActionPlanObject | IMP-10 |
| E39 | ActionPlans_ActionPlanAbs_Detail | ActionPlans_ActionPlanAbsObject | Reuse unchanged external/shared definition |
| E44 | Insp_EquipInspection_Frag_QuestionAnswer_ReadOnly | Insp_EquipInspectionObject | IMP-16 |
| E46 | Insp_EquipInspection_Frag_QuestionAnswer_ReadOnly | Insp_EquipInspectionObject | IMP-16 |
| E79 | ConfgAppSetting_InstructionTextObjectInventoryView | ConfgAppSetting_InstructionTextObject | Reuse unchanged external/shared definition |
| E108 | Employee_AssignToPersonResponsible | SysEmployeeEntity | Reuse unchanged external/shared definition |
| E110 | CLF_Choice_Detail | CLF_ChoiceObject | IMP-03 |
| E112 | CLF_Choice_Detail | CLF_ChoiceObject | IMP-03 |
| E124 | ConfgAppSetting_TPanelGeneratorObjectInventoryView | ConfgAppSetting_TPanelGeneratorObject | Reuse unchanged external/shared definition |
| E128 | ConfgAppSetting_TPanelGeneratorObjectInventoryView | ConfgAppSetting_TPanelGeneratorObject | Reuse unchanged external/shared definition |
| E140 | FragApplication_Equipment_Inventory | FragApplication_EquipmentObject | Reuse unchanged external/shared definition |
| E148 | CLF_InsActionPlan_Detail_NoEdit | CLF_InsActionPlanObject | IMP-10 |
| E150 | CLF_InsActionPlan_Detail_NoEdit | CLF_InsActionPlanObject | IMP-10 |
| E159 | Insp_InspRoleOptionObjectInventoryView | Insp_InspRoleOptionObject | Reuse unchanged external/shared definition |
| E161 | Insp_InspRoleOptionObjectInventoryView | Insp_InspRoleOptionObject | Reuse unchanged external/shared definition |
| E218 | CLF_PubQuest_Inventory | CLF_PubQuestObject | IMP-03 |
| E220 | CLF_PubQuest_Detail | CLF_PubQuestObject | IMP-03 |
| E231 | Insp_PubQuestion_Select | CLF_PubQuestObject | IMP-03 |
| E278 | CLF_PubQuest_Detail | CLF_PubQuestObject | IMP-03 |
| E284 | CLF_Preferences_Detail | CLF_PreferencesObject | Reuse unchanged external/shared definition |
| E291 | CLF_Preferences_Detail | CLF_PreferencesObject | Reuse unchanged external/shared definition |
| E313 | CLF_Choice_Inventory | CLF_ChoiceObject | IMP-03 |
| E362 | Insp_InspRoleOptionObjectDetailView | Insp_InspRoleOptionObject | Reuse unchanged external/shared definition |
| E367 | CLF_CheckliAbstract_Inventory | CLF_CheckliAbstractObject | Reuse unchanged external/shared definition |
| E379 | Insp_InspectionAbs_Inventory | Insp_InspectionAbsObject | IMP-16 |
| E381 | Insp_InspectionAbs_Inventory | Insp_InspectionAbsObject | IMP-16 |
| E396 | CLF_Quest_MassUpdate | CLF_QuestObject | IMP-03 |
| E398 | CLF_Quest_MassUpdate | CLF_QuestObject | IMP-03 |
| E414 | CLF_SectionAnswerObjectInventoryView | CLF_SectionAnswerObject | IMP-20 |
| E426 | CLF_SectionAnswerObjectDetailView | CLF_SectionAnswerObject | IMP-20 |
| E435 | CLF_SingleChecklist_Inventory | CLF_SinglechecklistObject | Reuse unchanged external/shared definition |
| E439 | CLF_SingleChecklist_Detail | CLF_SinglechecklistObject | Reuse unchanged external/shared definition |
| E448 | CLF_Subchecklist_Inventory | CLF_SubchecklistObject | Reuse unchanged external/shared definition |
| E468 | ConfgAppSetting_InstructionTextObjectDetailView | ConfgAppSetting_InstructionTextObject | Reuse unchanged external/shared definition |
| E471 | ConfgAppSetting_InstructionTextObjectDetailView | ConfgAppSetting_InstructionTextObject | Reuse unchanged external/shared definition |
| E497 | CLF_Checklist_Detail | CLF_ChecklistObject | IMP-03 |
| E516 | CLF_Checklist_Detail | CLF_ChecklistObject | IMP-03 |
| E526 | ActionPlan_MyActionPlan_Inventory | FragApplication_AbCorrectivActiObject | Reuse unchanged external/shared definition |
| E530 | ActionPlan_MyActionPlan_Inventory | FragApplication_AbCorrectivActiObject | Reuse unchanged external/shared definition |
| E570 | CLF_Finding_Docs | CLF_FindingObject | Reuse unchanged external/shared definition |
| E600 | CLF_Finding_CloseFinding | CLF_FindingObject | Reuse unchanged external/shared definition |
| E613 | Insp_EquipListOptionObjectDetailView | Insp_EquipListOptionObject | Reuse unchanged external/shared definition |
| E618 | Insp_EquipListOptionObjectDetailView | Insp_EquipListOptionObject | Reuse unchanged external/shared definition |
| E620 | Insp_EquipListOptionObjectInventoryView | Insp_EquipListOptionObject | Reuse unchanged external/shared definition |
| E622 | Insp_EquipListOptionObjectInventoryView | Insp_EquipListOptionObject | Reuse unchanged external/shared definition |
| E626 | CLF_Finding_Inventory | CLF_FindingObject | Reuse unchanged external/shared definition |
| E667 | CLF_LocalizResource_Detail | CLF_LocalizResourceObject | Reuse unchanged external/shared definition |
| E674 | CLF_LocalizResource_Inventory | CLF_LocalizResourceObject | Reuse unchanged external/shared definition |
| E786 | ConfgAppSetting_PersRespOptionObjectDetailView | ConfgAppSetting_PersRespOptionObject | Reuse unchanged external/shared definition |
| E788 | ConfgAppSetting_PersRespOptionObjectDetailView | ConfgAppSetting_PersRespOptionObject | Reuse unchanged external/shared definition |
| E844 | CLF_QuestionAnswer_Inventory | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E857 | CLF_QuestionAnswer_MassUpdate | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E863 | CLF_QuestionAnswer_Docs | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E893 | CLF_QuestionAnswer_Findings | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E904 | CLF_QuestionAnswer_Detail | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E954 | CLF_QuestionAnswer_ActionPlans | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E957 | CLF_QuestionAnswer_Docs_Readonly | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E972 | CLF_Quest_Detail | CLF_QuestObject | IMP-03 |
| E983 | CLF_Quest_Detail | CLF_QuestObject | IMP-03 |
| E985 | EventFwk_EventScenarioObjectInventoryView | EventFwk_EventScenarioObject | Reuse unchanged external/shared definition |
| E992 | ConfgAppSetting_IconAssetObjectDetailView | ConfgAppSetting_IconAssetObject | Reuse unchanged external/shared definition |
| E994 | ConfgAppSetting_IconAssetObjectDetailView | ConfgAppSetting_IconAssetObject | Reuse unchanged external/shared definition |
| E1001 | CLF_InsActionPlan_Inventory | CLF_InsActionPlanObject | IMP-10 |
| E1004 | CLF_InsActionPlan_Inventory | CLF_InsActionPlanObject | IMP-10 |
| E1016 | CLF_ChecklistType_Inventory | CLF_ChecklistTypeObject | Reuse unchanged external/shared definition |
| E1025 | CLF_Quest_ConditionalFormatting_MassUpdate | CLF_QuestObject | IMP-03 |
| E1027 | CLF_Quest_ConditionalFormatting_MassUpdate | CLF_QuestObject | IMP-03 |
| E1030 | CLF_ChoicesList_Inventory | CLF_ChoiceListObject | IMP-03 |
| E1048 | CLF_CheckliAbstract_Detail | CLF_CheckliAbstractObject | Reuse unchanged external/shared definition |
| E1051 | Insp_Type_Inventory | Insp_TypeObject | IMP-05 |
| E1056 | Insp_Type_Inventory | Insp_TypeObject | IMP-05 |
| E1058 | ConfgAppSetting_GlobAppSettingsObjectInventoryView | ConfgAppSetting_GlobAppSettingsObject | Reuse unchanged external/shared definition |
| E1079 | EventFwk_EventObjectInventoryView | EventFwk_EventObject | Reuse unchanged external/shared definition |
| E1081 | ConfgAppSetting_IconAssetObjectInventoryView | ConfgAppSetting_IconAssetObject | Reuse unchanged external/shared definition |
| E1086 | ConfgAppSetting_IconAssetObjectInventoryView | ConfgAppSetting_IconAssetObject | Reuse unchanged external/shared definition |
| E1120 | FragApplication_Color_Detail | FragApplication_ColorObject | Reuse unchanged external/shared definition |
| E1130 | FragApplication_Color_Select | FragApplication_ColorObject | Reuse unchanged external/shared definition |
| E1133 | FragApplication_Color_Inventory | FragApplication_ColorObject | Reuse unchanged external/shared definition |
| E1154 | CLF_Finding_Detail | CLF_FindingObject | Reuse unchanged external/shared definition |
| E1167 | CLF_Finding_Detail | CLF_FindingObject | Reuse unchanged external/shared definition |
| E1183 | CLF_Finding_Inventory | CLF_FindingObject | Reuse unchanged external/shared definition |
| E1214 | CLF_Checklist_Inventory | CLF_ChecklistObject | IMP-03 |
| E1216 | CLF_Checklist_Inventory | CLF_ChecklistObject | IMP-03 |
| E1226 | ConfgAppSetting_SpecAppSettingsObjectInventoryView | ConfgAppSetting_SpecAppSettingsObject | Reuse unchanged external/shared definition |
| E1228 | ConfgAppSetting_SpecAppSettingsObjectInventoryView | ConfgAppSetting_SpecAppSettingsObject | Reuse unchanged external/shared definition |
| E1254 | _EmptyView | Unresolved/shared interface | Reuse unchanged external/shared definition |
| E1269 | CLF_Subchecklist_Detail | CLF_SubchecklistObject | Reuse unchanged external/shared definition |
| E1278 | CLF_Subchecklist_Detail | CLF_SubchecklistObject | Reuse unchanged external/shared definition |
| E1306 | QP_AbCorrectivActi_Closed_Inventory | FragApplication_AbCorrectivActiObject | Reuse unchanged external/shared definition |
| E1308 | QP_AbCorrectivActi_Closed_Inventory | FragApplication_AbCorrectivActiObject | Reuse unchanged external/shared definition |
| E1376 | Actions_AllActions_Inventory | FragApplication_AbCorrectivActiObject | Reuse unchanged external/shared definition |
| E1393 | FragApplication_AbCorrectivActiObjectDetailView | FragApplication_AbCorrectivActiObject | Reuse unchanged external/shared definition |
| E1405 | AbstractCorrectiveAction_Inventory | FragApplication_AbCorrectivActiObject | Reuse unchanged external/shared definition |
| E1431 | CAR_AbsCorrectiveAction_Inventory | FragApplication_AbCorrectivActiObject | Reuse unchanged external/shared definition |
| E1441 | QP_AbCorrectivActi_Open_Inventory | FragApplication_AbCorrectivActiObject | Reuse unchanged external/shared definition |
| E1458 | FragApplication_Equipment_Select | FragApplication_EquipmentObject | Reuse unchanged external/shared definition |
| E1460 | ActionPlans_ActionPlanAbs_NCR_Inventory | ActionPlans_ActionPlanAbsObject | Reuse unchanged external/shared definition |
| E1465 | CLF_Finding_Docs_Readonly | CLF_FindingObject | Reuse unchanged external/shared definition |
| E1475 | CLF_QuestionAnswer_Inventory | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E1486 | EventFwk_EventObjectDetailView | EventFwk_EventObject | Reuse unchanged external/shared definition |
| E1513 | CLF_QuestAbstract_Detail | CLF_QuestAbstractObject | Reuse unchanged external/shared definition |
| E1516 | CLF_QuestAbstract_Inventory | CLF_QuestAbstractObject | Reuse unchanged external/shared definition |
| E1523 | CLF_LocalizResource_Inventory | CLF_LocalizResourceObject | Reuse unchanged external/shared definition |
| E1527 | EventFwk_EventScenarioObjectDetailView | EventFwk_EventScenarioObject | Reuse unchanged external/shared definition |
| E1536 | ActionPlans_ActionPlanAbs_PHA_Inventory | ActionPlans_ActionPlanAbsObject | Reuse unchanged external/shared definition |
| E1559 | Insp_InspRoleOptionObjectDetailView | Insp_InspRoleOptionObject | Reuse unchanged external/shared definition |
| E1565 | Insp_Type_Detail | Insp_TypeObject | IMP-05 |
| E1621 | Insp_EquipInspection_Detail | Insp_EquipInspectionObject | IMP-16 |
| E1623 | Insp_EquipInspection_Detail | Insp_EquipInspectionObject | IMP-16 |
| E1675 | CLF_Quest_Inventory | CLF_QuestObject | IMP-03 |
| E1677 | CLF_Quest_Inventory | CLF_QuestObject | IMP-03 |
| E1684 | CC_AbsCorrectiveAction_Inventory | ActionPlans_ActionPlanAbsObject | Reuse unchanged external/shared definition |
| E1695 | CLF_FindingStatus_Inventory | CLF_FindingStatusObject | Reuse unchanged external/shared definition |
| E1699 | CLF_FindingStatus_Detail | CLF_FindingStatusObject | Reuse unchanged external/shared definition |
| E1730 | CLF_ChecklistType_Detail | CLF_ChecklistTypeObject | Reuse unchanged external/shared definition |
| E1753 | CLF_Checklist_Toolbox_Detail | CLF_ChecklistObject | Toolbox Talks — out of project scope; no configuration work |
| E1773 | CLF_Checklist_MassUpdate | CLF_ChecklistObject | IMP-03 |
| E1779 | CLF_Checklist_Select | CLF_ChecklistObject | IMP-03 |
| E1824 | ConfgAppSetting_GlobAppSettingsObjectDetailView | ConfgAppSetting_GlobAppSettingsObject | Reuse unchanged external/shared definition |
| E1826 | Insp_IReviewDecisionObjectInventoryView | Insp_IReviewDecisionObject | Reuse unchanged external/shared definition |
| E1854 | CLF_QuestionAnswer_Findings | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E1860 | CLF_MulticheckList_Detail | CLF_MultichecklistsObject | Reuse unchanged external/shared definition |
| E1862 | CLF_MulticheckList_Detail | CLF_MultichecklistsObject | Reuse unchanged external/shared definition |
| E1882 | CLF_PubQuest_Inventory | CLF_PubQuestObject | IMP-03 |
| E1894 | CLF_ChecklistAnswer_Findings | CLF_ChecklistAnswerObject | Reuse unchanged external/shared definition |
| E1922 | ConfgAppSetting_PersRespOptionObjectInventoryView | ConfgAppSetting_PersRespOptionObject | Reuse unchanged external/shared definition |
| E1924 | ConfgAppSetting_PersRespOptionObjectInventoryView | ConfgAppSetting_PersRespOptionObject | Reuse unchanged external/shared definition |
| E1939 | CLF_Multichecklist_Inventory | CLF_MultichecklistsObject | Reuse unchanged external/shared definition |
| E1944 | CLF_Multichecklist_Inventory | CLF_MultichecklistsObject | Reuse unchanged external/shared definition |
| E1946 | CLF_ChoiceList_Detail | CLF_ChoiceListObject | IMP-03 |
| E1952 | CLF_ChoiceList_Detail | CLF_ChoiceListObject | IMP-03 |
| E1954 | CLF_Quest_Select | CLF_QuestObject | IMP-03 |
| E1956 | CLF_Quest_Select | CLF_QuestObject | IMP-03 |
| E1987 | CLF_PubChecklist_Detail | CLF_PubChecklistObject | IMP-03 |
| E1989 | CLF_PubChecklist_Detail | CLF_PubChecklistObject | IMP-03 |
| E1992 | CLF_Finding_Detail_Readonly | CLF_FindingObject | Reuse unchanged external/shared definition |
| E1994 | CLF_Finding_Detail_Readonly | CLF_FindingObject | Reuse unchanged external/shared definition |
| E1998 | QP_AbCorrectivActi_Open_Inventory | FragApplication_AbCorrectivActiObject | Reuse unchanged external/shared definition |
| E2027 | Insp_IReviewDecisionObjectDetailView | Insp_IReviewDecisionObject | Reuse unchanged external/shared definition |
| E2045 | ConfgAppSetting_SpecAppSettingsObjectDetailView | ConfgAppSetting_SpecAppSettingsObject | Reuse unchanged external/shared definition |
| E2084 | CLF_QuestionAnswer_MassUpdate | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E2088 | CLF_Finding_Select | CLF_FindingObject | Reuse unchanged external/shared definition |
| E2090 | CLF_Finding_Select | CLF_FindingObject | Reuse unchanged external/shared definition |
| E2098 | AbstractCorrectiveAction_Inventory | FragApplication_AbCorrectivActiObject | Reuse unchanged external/shared definition |
| E2127 | Insp_Type_Detail | Insp_TypeObject | IMP-05 |
| E2135 | CLF_QuestionAnswer_Detail | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E2251 | CLF_QuestionAnswer_Docs_Readonly | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E2256 | CLF_Checklist_Toolbox_Detail | CLF_ChecklistObject | Toolbox Talks — out of project scope; no configuration work |
| E2265 | CLF_Preferences_Inventory | CLF_PreferencesObject | Reuse unchanged external/shared definition |
| E2267 | CLF_Preferences_Inventory | CLF_PreferencesObject | Reuse unchanged external/shared definition |
| E2294 | CLF_Quest_ToolBox_Detail | CLF_QuestObject | Toolbox Talks — out of project scope; no configuration work |
| E2298 | CLF_Quest_ToolBox_Detail | CLF_QuestObject | Toolbox Talks — out of project scope; no configuration work |
| E2328 | ConfgAppSetting_SpecAppSettingsObjectDetailView | ConfgAppSetting_SpecAppSettingsObject | Reuse unchanged external/shared definition |
| E2350 | CLF_PubChecklist_Inventory | CLF_PubChecklistObject | IMP-03 |
| E2356 | ConfgAppSetting_TPanelGeneratorObjectDetailView | ConfgAppSetting_TPanelGeneratorObject | Reuse unchanged external/shared definition |
| E2358 | ConfgAppSetting_TPanelGeneratorObjectDetailView | ConfgAppSetting_TPanelGeneratorObject | Reuse unchanged external/shared definition |
| E2372 | CLF_Tag_Detail | CLF_TagObject | Reuse unchanged external/shared definition |
| E2378 | ActionPlans_ActionPlanTem_Select | ActionPlans_ActioPlanTemObject | Reuse unchanged external/shared definition |
| E2392 | CLF_ChecklistAnswer_Inventory | CLF_ChecklistAnswerObject | Reuse unchanged external/shared definition |
| E2424 | Fragment_Insp_EquipInspection_QuestionAnswer | Insp_EquipInspectionObject | IMP-16 |
| E2432 | Fragment_Insp_EquipInspection_QuestionAnswer | Insp_EquipInspectionObject | IMP-16 |
| E2482 | CLF_QuestionAnswer_ActionPlans | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E2494 | CLF_QuestAbstract_Detail | CLF_QuestAbstractObject | Reuse unchanged external/shared definition |
| E2496 | CLF_QuestionAnswer_Docs | CLF_QuestionAnswerObject | IMP-20, IMP-16 |
| E2498 | ActionPlans_ActionPlanAbs_Inventory | ActionPlans_ActionPlanAbsObject | Reuse unchanged external/shared definition |
| E2501 | Insp_EquipInspectionObjectInventoryView | Insp_EquipInspectionObject | IMP-16 |
| E2503 | CLF_SectionObjectDetailView | CLF_SectionObject | IMP-03 |
| E2506 | CLF_SectionObjectDetailView | CLF_SectionObject | IMP-03 |
| E2577 | CLF_PubChecklist_Inventory | CLF_PubChecklistObject | IMP-03 |
| E2579 | Insp_EquipInspection_Frag_QuestionAnswer | Insp_EquipInspectionObject | IMP-16 |
| E2587 | Insp_EquipInspection_Frag_QuestionAnswer | Insp_EquipInspectionObject | IMP-16 |
| E2589 | CAR_ActionPlanAbs_Inventory | ActionPlans_ActionPlanAbsObject | Reuse unchanged external/shared definition |
| E2620 | ConfgAppSetting_InstructionTextObjectInventoryView | ConfgAppSetting_InstructionTextObject | Reuse unchanged external/shared definition |
| E2643 | EventFwk_Event_Select | EventFwk_EventObject | Reuse unchanged external/shared definition |
| E2953 | AuditMgmt_ActionPlan_Select | ActionPlans_ActionPlanAbsObject | Reuse unchanged external/shared definition |
| E2958 | Insp_EquipInspectionObjectInventoryView | Insp_EquipInspectionObject | IMP-16 |
| E2968 | CLF_ChecklistAnswer_Detail | CLF_ChecklistAnswerObject | Reuse unchanged external/shared definition |
| E2978 | CLF_Checklist_Select | CLF_ChecklistObject | IMP-03 |
| E2982 | CLF_LocalizResource_Detail | CLF_LocalizResourceObject | Reuse unchanged external/shared definition |
| E2987 | Insp_InspectionAbs_Detail | Insp_InspectionAbsObject | IMP-16 |
| E3002 | Subject_Select | SysSubjectEntity | Reuse unchanged external/shared definition |
| E3068 | CLF_Tag_Inventory | CLF_TagObject | Reuse unchanged external/shared definition |
| E3070 | CLF_SectionObjectInventoryView | CLF_SectionObject | IMP-03 |
| E3074 | ActionPlans_ActionPlan_Select | ActionPlans_ActionPlanAbsObject | Reuse unchanged external/shared definition |
| E3084 | CLF_Question_References_Detail | CLF_QuestObject | IMP-03 |

## 5. Native workflow and component coverage

| Component | Instruction | Assignments |
| --- | --- | --- |
| Application and direct inheritance | Keep the 87 existing objects and their inheritance. Create the four new reference lists in their assigned task. | IMP-01 |
| Source/outcome/classification domains | Four reference lists, prescribed entries, three result fields and controlled maintenance access. | IMP-01, IMP-09 |
| Program settings | Current Type of Inspection settings for source, review, equipment and overall results, with the corresponding setup screen. | IMP-05 |
| Checklist/question authoring | Named sections, contributing questions, negative choices and existing Action Required selections, with the required screens and checks. | IMP-03, IMP-04, IMP-24 |
| Native publication/generation | Keep existing publication and response creation. Add the contributing-question copy and skip response creation for External inspections; retain existing action-choice copies and shared Choice records. | IMP-04, IMP-28 |
| Inspection field changes | External party, performance/submission/acceptance dates and calculated result fields. | IMP-08, IMP-09, IMP-16 |
| W01 inspection configuration | Existing Inspection workflow with corrected stage statuses, four updated actions and stage-appropriate review screens. | IMP-14, IMP-40, IMP-43 |
| W02 action configuration | Existing action stage and Complete action with separate outstanding/completed-entry requirements and checks before completion. | IMP-10, IMP-39, IMP-42 |
| Response requirements/results | Keep dependent-question and clearing behavior; update the required answer/evidence checks and categorical results. | IMP-20, IMP-34, IMP-35, IMP-36 |
| Final follow-up classification | Use existing source links and action completion to show open corrective work while protecting accepted inspection evidence. | IMP-44, IMP-47 |
| Native evidence/mobile | A single ExternalInspectionReport File field and External-only section, optional evidence files and native mobile upload handling. | IMP-16, IMP-50 |
| Required access/review history | Reference-list permissions and the specified inspection/review/action access and history settings. | IMP-01, IMP-47 |
| Optional shared resource/lookup | Use the existing shared resource/equipment configuration supplied through G05 for optional establishment-appropriate selections. | IMP-31 |
| Messages/reminders | Keep existing assignment-release timing and apply the supplied notification/reminder policy. | IMP-41, IMP-45 |
| Reports/portable output | Approved report and portable-record definitions, conditional on the supplied scope and native settings. | IMP-51, IMP-52, IMP-53, IMP-54, IMP-55, IMP-56, IMP-57, IMP-58 |
| Initial program and checklist data | Owned by Data Migration in the separate project-plan section; not assigned in this configuration plan. | Reuse/not applicable |
| Reviewer memberships | Maintained by the client’s system administrators as an administrative responsibility. | Reuse/not applicable |
| Incident boundary | Retain manual Incident Management process. No new object, integration or task.  | Reuse/not applicable |

W01 retains its schema/stage/action IDs and changes only listed parameter links/flows. W02/S05 identities are reused, with I05 validation ordering and immediate-entry path changes. The other three exported workflow schemas retain compatibility flags/pending drafts and receive no new task. Five external Shared Operational Resource declarations remain G05 input with no local creation assignment.

## 6. Explicit existing-field modifications

| Object | Existing field | Primary modification task | Source evidence |
| --- | --- | --- | --- |
| CLF_ChecklistAnswerObject | Findings | IMP-16 | E2963 |
| CLF_ChecklistAnswerObject | MaxPoints | IMP-16 | E1193 |
| CLF_ChecklistAnswerObject | NbFindings | IMP-16 | E2972 |
| CLF_ChecklistAnswerObject | PointsAwarded | IMP-16 | E1981 |
| CLF_ChecklistAnswerObject | Score | IMP-16 | E1977 |
| CLF_ChecklistAnswerObject | SysteTypeHelper | IMP-28 | E1023 |
| CLF_ChecklistObject | EnableScoring | IMP-03 | E1784 |
| CLF_ChecklistObject | EnableSections | IMP-03 | E1534 |
| CLF_ChoiceListObject | MaxPoints | IMP-03 | E722 |
| CLF_ChoiceObject | Value | IMP-03 | E323 |
| CLF_InsActionPlanObject | ActionOwner | IMP-10 | E1812 |
| CLF_InsActionPlanObject | AlBeenCorrected | IMP-10 | E534 |
| CLF_PubQuestObject | MaxPoints | IMP-03 | E233 |
| CLF_QuestAbstractObject | ActReqChoices | IMP-03 | E642 |
| CLF_QuestAbstractObject | AnswerRequired | IMP-03 | E130 |
| CLF_QuestAbstractObject | ComReqIfNA | IMP-24 | E640 |
| CLF_QuestAbstractObject | FindReqChoices | IMP-03 | E651 |
| CLF_QuestAbstractObject | TriggerFindings | IMP-03 | E1518 |
| CLF_QuestAbstractObject | ValueChoiceList | IMP-03 | E1345 |
| CLF_QuestAbstractObject | Weight | IMP-03 | E1343 |
| CLF_QuestionAnswerObject | Findings | IMP-20 | E545 |
| CLF_QuestionAnswerObject | IsActionMiss | IMP-35 | E802 |
| CLF_QuestionAnswerObject | IsAnswerMiss | IMP-35 | E948 |
| CLF_QuestionAnswerObject | IsComMiss | IMP-35 | E831 |
| CLF_QuestionAnswerObject | IsFindingMiss | IMP-35 | E896 |
| CLF_QuestionAnswerObject | IsSubmitReady | IMP-35 | E847 |
| CLF_QuestionAnswerObject | MaxPoints | IMP-20 | E870 |
| CLF_QuestionAnswerObject | NbFindings | IMP-20 | E542 |
| CLF_QuestionAnswerObject | PointsAwarded | IMP-20 | E810 |
| CLF_SectionObject | SectionName | IMP-03 | E1331 |
| FragApplication_AbCorrectivActiObject | CompletedBy | IMP-10 | E1424 |
| FragApplication_AbCorrectivActiObject | CompletionDate | IMP-10 | E800 |
| FragApplication_AbCorrectivActiObject | CPARActionReq | IMP-10 | E200 |
| FragApplication_AbCorrectivActiObject | CPARTypeID | IMP-10 | E1410 |
| Insp_EquipInspectionObject | Equipment | IMP-30 | E1543 |
| Insp_EquipInspectionObject | EquipmentTxt | IMP-30 | E2913 |
| Insp_EquipInspectionObject | ReleActionPlans | IMP-43 | E1471 |
| Insp_InspectionAbsObject | DaofFirstReview | IMP-08 | E2992 |
| Insp_InspectionAbsObject | DofSecondReview | IMP-08 | E2990 |
| Insp_InspectionAbsObject | FirstReviewBy | IMP-08 | E2984 |
| Insp_InspectionAbsObject | InspecChecklist | IMP-16 | E1218 |
| Insp_InspectionAbsObject | SecondReviewBy | IMP-08 | E2994 |
| Insp_TypeObject | ComplValidation | IMP-05 | E1563 |
| Insp_TypeObject | DforFirstReview | IMP-05 | E1603 |
| Insp_TypeObject | ELOptions | IMP-05 | E1600 |
| Insp_TypeObject | EquipmMandatory | IMP-05 | E163 |
| Insp_TypeObject | Expression | IMP-05 | E1068 |
| Insp_TypeObject | Expression2 | IMP-05 | E686 |
| Insp_TypeObject | FindingTracking | IMP-05 | E1103 |
| Insp_TypeObject | FirstReviewer | IMP-05 | E1612 |
| Insp_TypeObject | forSecondReview | IMP-05 | E1596 |
| Insp_TypeObject | InspRoleOption | IMP-05 | E591 |
| Insp_TypeObject | InspRoleOption2 | IMP-05 | E989 |
| Insp_TypeObject | InspRoleOptionId | IMP-05 | E1238 |
| Insp_TypeObject | PRMethod | IMP-05 | E1247 |
| Insp_TypeObject | PRMethodSndRev | IMP-05 | E1593 |
| Insp_TypeObject | Role | IMP-05 | E1242 |
| Insp_TypeObject | Role2 | IMP-05 | E1590 |
| Insp_TypeObject | RoleName | IMP-05 | E1240 |
| Insp_TypeObject | RoleName2 | IMP-05 | E1598 |
| Insp_TypeObject | SecondReviewer | IMP-05 | E1605 |

## 7. Existing field settings referenced by changed behavior

These fields require no field-setting change. Rows identify either an active change using an unchanged field, or existing product functionality confirmed by the user. They provide source traceability and are not assigned as configuration work.

| Object | Field | Related change task | Reason |
| --- | --- | --- | --- |
| Insp_InspectionAbsObject | CompletedBy | Existing product functionality | E2704 already stamps CompletedBy=CURRENTUSER and CompletedOn=NOW before routing/completion. No field-property or population change is assigned. |
| Insp_InspectionAbsObject | CompletedOn | Existing product functionality | E2704 already stamps CompletedBy=CURRENTUSER and CompletedOn=NOW before routing/completion. No field-property or population change is assigned. |
| CLF_InsActionPlanObject | hRelatedInsp | Existing product functionality | Existing inspection helper/source-link behavior is provided by the product, as confirmed by the user. No configuration change is assigned. |
| CLF_InsActionPlanObject | HelperReleaseAP | IMP-42 | Existing release-helper calculation is unchanged; IMP-42 modifies the workflow start condition and completion action. |
| CLF_InsActionPlanObject | ChecklistAnswer | Existing product functionality | User confirmed that inspection/action source linking and same-inspection response selection already exist. No configuration change is assigned. |
| CLF_InsActionPlanObject | QuestionAnswers | Existing product functionality | User confirmed that inspection/action source linking and same-inspection response selection already exist. No configuration change is assigned. |
| CLF_InsActionPlanObject | RelateQuestions | Existing product functionality | User confirmed that inspection/action source linking and same-inspection response selection already exist. No configuration change is assigned. |
| FragApplication_AbCorrectivActiObject | CheckListAnsAct | Existing product functionality | User confirmed that inspection/action source linking and same-inspection response selection already exist. No configuration change is assigned. |
| FragApplication_AbCorrectivActiObject | RelatedQstions | Existing product functionality | User confirmed that inspection/action source linking and same-inspection response selection already exist. No configuration change is assigned. |
| FragApplication_AbCorrectivActiObject | CompletionNotes | IMP-42 | The existing form already requires notes for completed entry. IMP-39 and IMP-42 modify the named completion operations; no CompletionNotes field-setting change is assigned. |
| FragApplication_AbCorrectivActiObject | DueDate | IMP-10 | The existing view action already requires a due date for outstanding entry and hides it for completed entry. No DueDate field-setting change is assigned. |
| Insp_InspectionAbsObject | RevieweComment1 | Existing product functionality | E1623 already provides the ActionsPending/SecondReview containers, matching editable decision/comment pairs, read-only other-stage controls, and First Reviewer Decision / Second Review Decision mandatory-comment view actions. G03 must confirm the selected decision record identity; no replacement form logic is assigned. |
| Insp_InspectionAbsObject | RevieweComments | Existing product functionality | E1623 already provides the ActionsPending/SecondReview containers, matching editable decision/comment pairs, read-only other-stage controls, and First Reviewer Decision / Second Review Decision mandatory-comment view actions. G03 must confirm the selected decision record identity; no replacement form logic is assigned. |
| Insp_InspectionAbsObject | RevieweDecisio1 | Existing product functionality | E1623 already provides the ActionsPending/SecondReview containers, matching editable decision/comment pairs, read-only other-stage controls, and First Reviewer Decision / Second Review Decision mandatory-comment view actions. G03 must confirm the selected decision record identity; no replacement form logic is assigned. |
| Insp_InspectionAbsObject | RevieweDecision | Existing product functionality | E1623 already provides the ActionsPending/SecondReview containers, matching editable decision/comment pairs, read-only other-stage controls, and First Reviewer Decision / Second Review Decision mandatory-comment view actions. G03 must confirm the selected decision record identity; no replacement form logic is assigned. |
| CLF_QuestionAnswerObject | NbActions | Existing product functionality | Source calculation COUNT(ActionPlans) already counts the native related-action collection. No new alias-count or deduplication calculation is required. |
| Insp_TypeObject | EnabFirstReview | Data Migration | The specified initial program record values are populated by Data Migration. The enable controls already exist; the changed dependent view actions and guard are separately specified in IMP-05. |
| Insp_TypeObject | EnaSecondReview | Data Migration | The specified initial program record values are populated by Data Migration. The enable controls already exist; the changed dependent view actions and guard are separately specified in IMP-05. |
| Insp_TypeObject | EquipmentList | Data Migration | The specified initial program record values are populated by Data Migration. The enable controls already exist; the changed dependent view actions and guard are separately specified in IMP-05. |
