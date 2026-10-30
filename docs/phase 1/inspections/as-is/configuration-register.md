# Configuration behavior and form register

Companion to the [as-is Solution Specification](solution-specification.md). All expressions, flows, conditions and attributes below are **Extracted**, not generated instructions or newly validated executable code. Search an evidence key to locate exact behavior. Metadata nulls and raw enums are intentionally preserved.

## Action Handlers

### Handler E55

Attach Risk if Assessment Results is not blank — ActionPlans_ActionPlanAbsObject; enabled=true; ActionType=1.

Description: None exported.

Referenced fields: ActionPlans_ActionPlanAbsObject.RiskAbs (E57); RiskFmk_AResultAbstractObject.RiskAssessment (E61); RiskFmk_RiskAssessmentObject.Risk (E65); ActionPlans_ActionPlanAbsObject.AssessResults (E69).

### Handler E187

FMEA-Update Recommended Action Action Taken — FragApplication_AbCorrectivActiObject; enabled=true; ActionType=2.

Description: Update Recommended Action Action Taken
Updates Is Completed helper field.

Referenced fields: SysWorkflowInstanceEntity.WorkflowStatus (E189); FragApplication_AbCorrectivActiObject.Workflow (E191); QP_RecoActionObject.ActionTaken (E194); FragApplication_AbCorrectivActiObject.RecoAction (E196); FragApplication_AbCorrectivActiObject.CPARActionReq (E200).

### Handler E241

Actions on Update — CLF_PubQuestObject; enabled=true; ActionType=2.

Description: Trigger creation of Question Answer Record..

Referenced fields: CLF_PubQuestObject.Id (E999); CLF_PubQuestObject.hCheckAnswerId (E2018); CLF_ChecklistAnswerObject.QuestionAnswers (E1197); CLF_PubQuestObject.hCheckAnswer (E275).

### Handler E265

Copy Values from Question during Publish — CLF_PubQuestObject; enabled=true; ActionType=1.

Description: None exported.

Referenced fields: CLF_PubQuestObject.SectionName (E256); CLF_QuestObject.QuestionRef (E1326); CLF_QuestObject.VisibleIfs (E1328); CLF_SectionObject.SectionName (E1331); CLF_QuestAbstractObject.AllowNA (E520); CLF_PubQuestObject.VisibleIfs (E249); CLF_QuestObject.AbsoluteOrder (E1333); CLF_QuestAbstractObject.AnswerType (E645); CLF_QuestAbstractObject.AnswerRequired (E130); CLF_QuestAbstractObject.ComReqChoices (E648); CLF_QuestAbstractObject.Order (E657); CLF_QuestAbstractObject.DefaultChoices (E654); CLF_QuestAbstractObject.ChoiceList (E89); CLF_QuestAbstractObject.ActReqChoices (E642); CLF_QuestAbstractObject.FindReqChoices (E651); CLF_QuestAbstractObject.ComReqIfNA (E640); CLF_QuestAbstractObject.DefaultBool (E638); CLF_QuestObject.ExistingSection (E332); CLF_QuestAbstractObject.DefaultChoice (E635); CLF_QuestAbstractObject.Content (E603); CLF_PubQuestObject.QuestionRef (E247); CLF_QuestAbstractObject.Guideline (E1337); CLF_QuestObject.VisDepNoAns (E1339); CLF_PubQuestObject.Question (E243); CLF_QuestAbstractObject.Section (E1341); CLF_PubQuestObject.VisDepNoAns (E254); CLF_QuestAbstractObject.Weight (E1343); CLF_PubQuestObject.AbsoluteOrder (E269); CLF_QuestAbstractObject.ValueChoiceList (E1345).

### Handler E429

Relate to Checklist Answer — CLF_SectionAnswerObject; enabled=true; ActionType=3.

Description: None exported.

Referenced fields: CLF_SectionAnswerObject.ChecklistAnswerId (E580); CLF_SectionAnswerObject.CheckAnswerGUID (E424).

### Handler E437

Create Anwer Records — CLF_SinglechecklistObject; enabled=true; ActionType=1.

Description: None exported.

Referenced fields: None linked.

### Handler E477

Send Assignment Notification Upon Completion of Inspection — CLF_InsActionPlanObject; enabled=true; ActionType=2.

Description: None exported.

Referenced fields: CLF_InsActionPlanObject.HelperReleaseAP (E490).

### Handler E522

Start Date must be on or after today. — ActionPlans_ActionPlanAbsObject; enabled=true; ActionType=1.

Description: Start Date must be on or after today..

Referenced fields: ActionPlans_ActionPlanAbsObject.StartDate (E524).

### Handler E629

(0) Actions on Create & Update — CLF_QuestAbstractObject; enabled=true; ActionType=2.

Description: Maintain consistency based on AllowNA (clear Comment Required), AnswerType (clear related fields)..

Referenced fields: CLF_ChoiceListObject.Id (E631); CLF_AnswerTypeObject.Value (E633); CLF_QuestAbstractObject.DefaultChoice (E635); CLF_QuestAbstractObject.DefaultBool (E638); CLF_ChoiceObject.ChoiceList (E302); CLF_QuestAbstractObject.ComReqIfNA (E640); CLF_QuestAbstractObject.ActReqChoices (E642); CLF_QuestAbstractObject.AnswerType (E645); CLF_QuestAbstractObject.ComReqChoices (E648); CLF_QuestAbstractObject.AllowNA (E520); CLF_QuestAbstractObject.ChoiceList (E89); CLF_QuestAbstractObject.FindReqChoices (E651); CLF_QuestAbstractObject.DefaultChoices (E654).

### Handler E842

Clear Answer if not visible — CLF_QuestionAnswerObject; enabled=true; ActionType=2.

Description: Used with dependent questions.

Referenced fields: CLF_QuestionAnswerObject.Comments (E816); CLF_QuestionAnswerObject.Choices (E885); CLF_QuestionAnswerObject.Checkbox (E766); CLF_QuestionAnswerObject.Date (E564); CLF_QuestionAnswerObject.IsVisible (E735); CLF_QuestionAnswerObject.Text (E855); CLF_QuestionAnswerObject.Float (E876); CLF_QuestionAnswerObject.Choice (E743).

### Handler E883

(2) Actions on Update — CLF_QuestionAnswerObject; enabled=true; ActionType=2.

Description: - If Default Answers is triggered post-creation, default value, force recalculation of isFilled.
- Handle Mass-Update
- Clear values when not Applicable..

Referenced fields: CLF_QuestAbstractObject.ChoiceListId (E1173); CLF_QuestionAnswerObject.Date (E564); CLF_QuestAbstractObject.DefaultChoices (E654); CLF_QuestionAnswerObject.MassUpChoice (E205); CLF_QuestionAnswerObject.IsNA (E933); CLF_QuestionAnswerObject.Checkbox (E766); CLF_QuestAbstractObject.DefaultBool (E638); CLF_AnswerTypeObject.Value (E633); CLF_QuestionAnswerObject.TrDefaultAnswer (E888); CLF_QuestionAnswerObject.Choices (E885); CLF_ChoiceObject.Name (E306); CLF_QuestionAnswerObject.Float (E876); CLF_QuestAbstractObject.DefaultChoice (E635); CLF_QuestAbstractObject.AnswerType (E645); CLF_ChoiceObject.ChoiceList (E302); CLF_QuestAbstractObject.ChoiceList (E89); CLF_QuestionAnswerObject.Text (E855); CLF_QuestionAnswerObject.PubQuestion (E588); CLF_QuestionAnswerObject.IsFilled (E746); CLF_QuestionAnswerObject.MassUpChoiceId (E793); CLF_QuestionAnswerObject.Choice (E743).

### Handler E935

(1) Actions on Create — CLF_QuestionAnswerObject; enabled=true; ActionType=1.

Description: // If Question Answer records are created via the Custom Action, keep in mind that this Action Handler is not going to be triggered.

- Default Choices
- Set dependencies for conditional display.

Referenced fields: CLF_QuestionAnswerObject.Choices (E885); CLF_QuestionAnswerObject.PubQuestionId (E2142); CLF_QuestionAnswerObject.PubQuestion (E588); CLF_QuestionAnswerObject.ChecklistAnswer (E678); CLF_PubChecklistObject.PubQuestions (E2011); CLF_ChecklistAnswerObject.PubChecklist (E1364); CLF_QuestAbstractObject.DefaultChoices (E654); CLF_PubQuestObject.DependsOnPubId (E2144); CLF_QuestionAnswerObject.DependsOn (E757); CLF_QuestionAnswerObject.ChecklistAnswerId (E2146); CLF_PubQuestObject.Id (E999); CLF_PubQuestObject.HasCondDisplay (E267); CLF_QuestAbstractObject.AnswerType (E645); CLF_AnswerTypeObject.Value (E633).

### Handler E942

[DEPRECATED] Check Consistency on Points — CLF_QuestionAnswerObject; enabled=true; ActionType=16.

Description: This Action Handler can be deleted..

Referenced fields: CLF_QuestionAnswerObject.PubQuestion (E588); CLF_QuestionAnswerObject.MaxPoints (E870); CLF_PubQuestObject.MaxPoints (E233); CLF_QuestionAnswerObject.PointsAwarded (E810).

### Handler E952

Create Section and Set Default Value — CLF_QuestionAnswerObject; enabled=true; ActionType=2.

Description: None exported.

Referenced fields: CLF_QuestionAnswerObject.CrSectionAnswer (E880); CLF_ChecklistAnswerObject.Id (E760); CLF_QuestionAnswerObject.ChecklistAnswer (E678); CLF_SectionAnswerObject.Sort (E420); CLF_PubQuestObject.SectionName (E256); CLF_QuestionAnswerObject.SectionAnswer (E937); CLF_PubQuestObject.SectionSort (E273); CLF_QuestionAnswerObject.PubQuestion (E588).

### Handler E1075

Clear Person Responsible and Due Date when workflow is Closed — FragApplication_AbCorrectivActiObject; enabled=true; ActionType=16.

Description: None exported.

Referenced fields: FragApplication_AbCorrectivActiObject.Workflow (E191); SysWorkflowInstanceEntity.DueDate (E586); SysWorkflowInstanceEntity.PersonResponsible (E401); SysWorkflowInstanceEntity.WorkflowStatus (E189).

### Handler E1236

Create Role — Insp_TypeObject; enabled=true; ActionType=3.

Description: None exported.

Referenced fields: Insp_TypeObject.InspRoleOptionId (E1238); Insp_TypeObject.RoleName (E1240); Insp_TypeObject.InspRoleOption (E591); Insp_TypeObject.Role (E1242); Insp_InspRoleOptionObject.Name (E358); ConfgAppSetting_PersRespOptionObject.Name (E1245); Insp_TypeObject.PRMethod (E1247).

### Handler E1319

Sync RelatedQstions to RelateQuestions — CLF_InsActionPlanObject; enabled=true; ActionType=3.

Description: Syncs the RelateQuestions and RelatedQstions fields..

Referenced fields: CLF_InsActionPlanObject.RelateQuestions (E1321); FragApplication_AbCorrectivActiObject.RelatedQstions (E719).

### Handler E1391

Completion Date — FragApplication_AbCorrectivActiObject; enabled=true; ActionType=3.

Description: Completion Date Validation..

Referenced fields: FragApplication_AbCorrectivActiObject.CompletionDate (E800).

### Handler E1400

Get Action Source — FragApplication_AbCorrectivActiObject; enabled=true; ActionType=1.

Description: Finds where the Action plan is coming from..

Referenced fields: None linked.

### Handler E1420

Due Date in future on creation — FragApplication_AbCorrectivActiObject; enabled=true; ActionType=1.

Description: Due Date in future on creation.

Referenced fields: FragApplication_AbCorrectivActiObject.DueDate (E1427).

### Handler E1429

FMEA - Sync Project Revision Action Plans — FragApplication_AbCorrectivActiObject; enabled=true; ActionType=1.

Description: None exported.

Referenced fields: FragApplication_AbCorrectivActiObject.ReactionPlan (E1372); QP_NodeAbstractObject.ProjRevId (E1109); FragApplication_AbCorrectivActiObject.ProjRevActionPlansId (E1985); FragApplication_AbCorrectivActiObject.RecoAction (E196).

### Handler E1477

Clear Conditional Display Fields if not dependent — CLF_QuestObject; enabled=true; ActionType=2.

Description: None exported.

Referenced fields: CLF_QuestObject.VisibleIfs (E1328); CLF_QuestObject.DependsOn (E1479); CLF_QuestObject.VisDepNoAns (E1339).

### Handler E1765

Set Auto Checklist Code — CLF_ChecklistObject; enabled=true; ActionType=1.

Description: None exported.

Referenced fields: CLF_ChecklistObject.Reference (E661); CLF_ChecklistObject.AutoCode (E1786); CLF_ChecklistTypeObject.Reference (E1728); CLF_ChecklistTypeObject.NbChecklists (E963); CLF_ChecklistObject.ChecklistType (E1770).

### Handler E1788

Sync Location — CLF_ChecklistObject; enabled=true; ActionType=2.

Description: None exported.

Referenced fields: CLF_CheckliAbstractObject.Location (E2330); CLF_ChecklistObject.PubChecklists (E1767).

### Handler E1815

Calc Due Date — CLF_FindingObject; enabled=true; ActionType=1.

Description: TODAY +  DueIn.Value.

Referenced fields: CLF_FindingObject.DueIn (E1817); CLF_FindingObject.ResponseDue (E1820); CLF_FindingDDObject.Value (E1822).

### Handler E1884

Init Abstract Field Values on Create — CLF_FindingObject; enabled=true; ActionType=1.

Description: Location, Event Type.

Referenced fields: EventFwk_EventObject.EventType (E122); CLF_ChecklistAnswerObject.Location (E1886); EventFwk_EventScenarioObject.Location (E1890); CLF_FindingObject.ChecklistAnswer (E1185).

### Handler E1960

On Create — CLF_SubchecklistObject; enabled=true; ActionType=1.

Description: None exported.

Referenced fields: CLF_ChecklistAnswerObject.PubChecklist (E1364); CLF_ChecklistAnswerObject.MasterChecklist (E762); CLF_CheckliAbstractObject.Title (E1962); CLF_ChecklistAnswerObject.Name (E1964).

### Handler E2000

Set Inspection Name — Insp_EquipInspectionObject; enabled=true; ActionType=1.

Description: Sets Inspection Name value by concatenating (equipment name, " Inspection [#", Inspection record Number and "]"). For example: if the Equipment Name is Pump and Inspection record number is 12 then the Inspection Name will be Pump Inspection[#12]..

Referenced fields: FragApplication_EquipmentObject.Name (E2002); CLF_ChecklistAnswerObject.Name (E1964); CLF_ChecklistAnswerObject.RecordNo (E1169); Insp_EquipInspectionObject.Equipment (E1543).

### Handler E2007

Create answers — Insp_EquipInspectionObject; enabled=true; ActionType=1.

Description: This action handler triggers a Custom Action Handler that creates all Question Answer Records.

Referenced fields: Insp_InspectionAbsObject.InspecChecklist (E1218); CLF_ChecklistAnswerObject.PubChecklist (E1364); Insp_InspectionAbsObject.InspecChecklistId (E2009); CLF_PubChecklistObject.Checklist (E682); CLF_PubChecklistObject.PubQuestions (E2011); Insp_EquipInspectionObject.Id (E2014); CLF_PubChecklistObject.IsActive (E2016); CLF_ChecklistObject.Id (E1456); CLF_PubQuestObject.hCheckAnswerId (E2018).

### Handler E2023

Sync Inspector to Person Responsible — Insp_EquipInspectionObject; enabled=true; ActionType=2.

Description: None exported.

Referenced fields: SysWorkflowStageEntity.SystemName (E1856); Insp_InspectionAbsObject.PersResponsible (E101); CLF_ChecklistAnswerObject.Workflow (E1932); SysWorkflowInstanceEntity.PersonResponsibleId (E1250); Insp_InspectionAbsObject.PersResponsibleId (E1726); SysWorkflowInstanceEntity.CurrentStage (E1790).

### Handler E2096

Set Location Field — CLF_InsActionPlanObject; enabled=true; ActionType=1.

Description: None exported.

Referenced fields: CLF_ChecklistAnswerObject.Location (E1886); FragApplication_AbCorrectivActiObject.CheckListAnsAct (E549); FragApplication_AbCorrectivActiObject.Location (E1973).

### Handler E2258

Update Workflow Person Responsible — CLF_SubchecklistObject; enabled=true; ActionType=2.

Description: None exported.

Referenced fields: SysWorkflowInstanceEntity.PersonResponsibleId (E1250); CLF_ChecklistAnswerObject.PersResponsibl (E2171); SysEmployeeEntity.Id (E536); CLF_ChecklistAnswerObject.Workflow (E1932).

### Handler E2283

Notify Inspector if Created by Someone Else — Insp_EquipInspectionObject; enabled=true; ActionType=1.

Description: None exported.

Referenced fields: Insp_InspectionAbsObject.PersResponsible (E101).

### Handler E2348

Copy Values — CLF_PubChecklistObject; enabled=true; ActionType=1.

Description: This action handler is executed when a Checklist is published. As part of the configuration, if some fields needs to be added on Checklist in order to be defined and if these fields needs to be copied as part of the Publish mechanism, they need to be added below. The field "name" is copied by the Custom Action Handler.

Referenced fields: CLF_PubChecklistObject.Checklist (E682); CLF_PubChecklistObject.ChecklistRef (E1070); CLF_CheckliAbstractObject.Location (E2330); CLF_ChecklistObject.Reference (E661); CLF_CheckliAbstractObject.Description (E1221).

### Handler E2361

Clear Person Responsible and Due Date when workflow is Closed — Insp_InspectionAbsObject; enabled=true; ActionType=2.

Description: Clears the Person Responsible and Due Date values when the workflow status is 'Completed'..

Referenced fields: CLF_ChecklistAnswerObject.Workflow (E1932); SysWorkflowInstanceEntity.DueDate (E586); SysWorkflowInstanceEntity.PersonResponsible (E401); SysWorkflowInstanceEntity.WorkflowStatus (E189).

### Handler E2390

Section and Sort Order Management — CLF_QuestObject; enabled=true; ActionType=3.

Description: None exported.

Referenced fields: CLF_QuestObject.HelperChecklist (E1482); CLF_SectionObject.Checklist (E1489); CLF_QuestObject.ExistingSection (E332); CLF_ChecklistObject.Id (E1456); CLF_QuestObject.UseExisting (E1495); CLF_SectionObject.Questions (E1072); CLF_QuestAbstractObject.Order (E657); CLF_QuestAbstractObject.Section (E1341).

### Handler E2415

Related to MM Checklist Grid — CLF_QuestObject; enabled=true; ActionType=3.

Description: None exported.

Referenced fields: CLF_QuestObject.HelperChecklist (E1482); CLF_ChecklistObject.Id (E1456); CLF_QuestObject.Checklists (E2417).

### Handler E2571

Set Record Name — CLF_FindingObject; enabled=true; ActionType=3.

Description: CONCATENATE(LEFT(Description, 47), "...").

Referenced fields: EventFwk_EventScenarioObject.Description (E2486); EventFwk_EventScenarioObject.Name (E987).

### Handler E2575

Track Modified Changes — CLF_QuestObject; enabled=true; ActionType=2.

Description: Update Date Modified through custom action handler in order to know if a question needs to be republished..

Referenced fields: None linked.

### Handler E2594

Set Action Owner — CLF_InsActionPlanObject; enabled=true; ActionType=2.

Description: None exported.

Referenced fields: CLF_InsActionPlanObject.AlBeenCorrected (E534); CLF_InsActionPlanObject.ActionOwner (E1812); FragApplication_AbCorrectivActiObject.CompletedBy (E1424).

### Handler E2601

Update Status — CLF_FindingObject; enabled=true; ActionType=3.

Description: None exported.

Referenced fields: CLF_FindingObject.NbOpAPs (E2004); CLF_FindingObject.NbAPs (E1036); CLF_FindingObject.ManualClose (E1234); CLF_FindingObject.FindingStatus (E174).

### Handler E2606

Clean up Choice List Field — CLF_QuestObject; enabled=true; ActionType=3.

Description: If the Answer Type is different form Choice or Choices, the Choice List field needs to be empty.
Clean the Text Reference value if Use Reference is un-checked..

Referenced fields: CLF_QuestObject.TextReferences (E1177); CLF_QuestAbstractObject.ChoiceList (E89); CLF_QuestObject.UseReferences (E1454); CLF_QuestAbstractObject.AnswerType (E645); CLF_AnswerTypeObject.Value (E633).

### Handler E2628

Throw Error if Saved at Location that Isn't Bottom — Insp_EquipInspectionObject; enabled=true; ActionType=16.

Description: DISABLE FOR NOW.

Referenced fields: CLF_ChecklistAnswerObject.Location (E1886); SysLocationEntity.ChildLocations (E1263).

### Handler E2669

Update CreateMode Flag — Insp_EquipInspectionObject; enabled=true; ActionType=2.

Description: This flag is used in the workflow configuration..

Referenced fields: Insp_EquipInspectionObject.CreateMode (E365).

### Handler E2924

Clear Completed information on Create — Insp_EquipInspectionObject; enabled=true; ActionType=1.

Description: When WF duplicates records, these fields must be cleared..

Referenced fields: Insp_InspectionAbsObject.CompletedOn (E1042); Insp_InspectionAbsObject.CompletedBy (E2148).

### Handler E2929

Set [Helper] Inspection Relation — CLF_InsActionPlanObject; enabled=true; ActionType=1.

Description: None exported.

Referenced fields: FragApplication_AbCorrectivActiObject.CheckListAnsAct (E549); CLF_ChecklistAnswerObject.Id (E760); CLF_InsActionPlanObject.hRelatedInspId (E152).

### Handler E2936

Set Record Name — CLF_InsActionPlanObject; enabled=true; ActionType=3.

Description: None exported.

Referenced fields: FragApplication_AbCorrectivActiObject.CPARActionReq (E200); CLF_InsActionPlanObject.RecordName (E2938).

### Handler E2976

[INACTIVE] Set Field values on Abstract — CLF_InsActionPlanObject; enabled=true; ActionType=16.

Description: [ILX] Action handler has been replaced with a new one to set the value of the location based on the Checklist Answer location..

Referenced fields: FragApplication_AbCorrectivActiObject.Location (E1973); CLF_ChecklistAnswerObject.Location (E1886); CLF_InsActionPlanObject.ChecklistAnswer (E782).

### Handler E2980

Sync Person Responsible — CLF_InsActionPlanObject; enabled=true; ActionType=2.

Description: None exported.

Referenced fields: FragApplication_AbCorrectivActiObject.Workflow (E191); SysEmployeeEntity.Id (E536); ActionPlans_ActionPlanAbsObject.PersonResp (E1540); SysWorkflowInstanceEntity.PersonResponsibleId (E1250).

### Handler E3072

Trigger Activities — ActionPlans_ActionPlanAbsObject; enabled=true; ActionType=2.

Description: Trigger to start workflow for activity..

Referenced fields: ActionPlans_ActionPlanAbsObject.Activites (E1210); ActionPlans_ActionPlanAbsObject.ActivitiesStart (E2271); ActionPlans_ActivityAbsObject.CanStart (E1548).

### Handler E3077

[OBSOLETE] Init Values — CLF_QuestObject; enabled=false; ActionType=16.

Description: 2026-10-15: REMOVED - NOT NEEDED.

Referenced fields: CLF_ChecklistTypeObject.MaxOrder (E1735); CLF_QuestAbstractObject.Order (E657); CLF_QuestObject.ChecklistType (E2603).

### Handler E3088

Action Already Completed — CLF_InsActionPlanObject; enabled=true; ActionType=2.

Description: None exported.

Referenced fields: SysWorkflowInstanceEntity.DateNotRequired (E2164); CLF_InsActionPlanObject.AlBeenCorrected (E534); FragApplication_AbCorrectivActiObject.Workflow (E191).

## Forms and profiles

| Evidence | View / profile | Kind | Object / associated view | Configuration |
| --- | --- | --- | --- | --- |
| E18 | CLF_InsActionPlan_Detail | SysConfigurableViewEntity | CLF_InsActionPlanObject / Unresolved | [E18-ConfigurableViewActions](configuration-register.md#e18-configurableviewactions); [E18-Content](configuration-register.md#e18-content) |
| E39 | ActionPlans_ActionPlanAbs_Detail | SysConfigurableViewEntity | ActionPlans_ActionPlanAbsObject / Unresolved | [E39-ConfigurableViewActions](configuration-register.md#e39-configurableviewactions); [E39-Content](configuration-register.md#e39-content) |
| E46 | Insp_EquipInspection_Frag_QuestionAnswer_ReadOnly | SysConfigurableViewEntity | Insp_EquipInspectionObject / Unresolved | [E46-ConfigurableViewActions](configuration-register.md#e46-configurableviewactions); [E46-Content](configuration-register.md#e46-content) |
| E79 | ConfgAppSetting_InstructionTextObjectInventoryView | SysConfigurableViewEntity | ConfgAppSetting_InstructionTextObject / Unresolved | [E79-Content](configuration-register.md#e79-content) |
| E108 | Employee_AssignToPersonResponsible | SysConfigurableViewEntity | SysEmployeeEntity / Unresolved | [E108-Content](configuration-register.md#e108-content) |
| E112 | CLF_Choice_Detail | SysConfigurableViewEntity | CLF_ChoiceObject / Unresolved | [E112-ConfigurableViewActions](configuration-register.md#e112-configurableviewactions); [E112-Content](configuration-register.md#e112-content) |
| E124 | ConfgAppSetting_TPanelGeneratorObjectInventoryView | SysConfigurableViewEntity | ConfgAppSetting_TPanelGeneratorObject / Unresolved | [E124-Content](configuration-register.md#e124-content) |
| E140 | FragApplication_Equipment_Inventory | SysConfigurableViewEntity | FragApplication_EquipmentObject / Unresolved | [E140-Content](configuration-register.md#e140-content) |
| E148 | CLF_InsActionPlan_Detail_NoEdit | SysConfigurableViewEntity | CLF_InsActionPlanObject / Unresolved | [E148-ConfigurableViewActions](configuration-register.md#e148-configurableviewactions); [E148-Content](configuration-register.md#e148-content) |
| E161 | Insp_InspRoleOptionObjectInventoryView | SysConfigurableViewEntity | Insp_InspRoleOptionObject / Unresolved | [E161-Content](configuration-register.md#e161-content) |
| E218 | CLF_PubQuest_Inventory | SysConfigurableViewEntity | CLF_PubQuestObject / Unresolved | [E218-Content](configuration-register.md#e218-content) |
| E220 | CLF_PubQuest_Detail | SysConfigurableViewEntity | CLF_PubQuestObject / Unresolved | [E220-ConfigurableViewActions](configuration-register.md#e220-configurableviewactions); [E220-Content](configuration-register.md#e220-content) |
| E231 | Insp_PubQuestion_Select | SysConfigurableViewEntity | CLF_PubQuestObject / Unresolved | [E231-Content](configuration-register.md#e231-content) |
| E284 | CLF_Preferences_Detail | SysConfigurableViewEntity | CLF_PreferencesObject / Unresolved | [E284-ConfigurableViewActions](configuration-register.md#e284-configurableviewactions); [E284-Content](configuration-register.md#e284-content) |
| E313 | CLF_Choice_Inventory | SysConfigurableViewEntity | CLF_ChoiceObject / Unresolved | [E313-Content](configuration-register.md#e313-content) |
| E362 | Insp_InspRoleOptionObjectDetailView | SysConfigurableViewEntity | Insp_InspRoleOptionObject / Unresolved | [E362-ConfigurableViewActions](configuration-register.md#e362-configurableviewactions); [E362-Content](configuration-register.md#e362-content) |
| E367 | CLF_CheckliAbstract_Inventory | SysConfigurableViewEntity | CLF_CheckliAbstractObject / Unresolved | [E367-Content](configuration-register.md#e367-content) |
| E381 | Insp_InspectionAbs_Inventory | SysConfigurableViewEntity | Insp_InspectionAbsObject / Unresolved | [E381-Content](configuration-register.md#e381-content) |
| E398 | CLF_Quest_MassUpdate | SysConfigurableViewEntity | CLF_QuestObject / Unresolved | [E398-ConfigurableViewActions](configuration-register.md#e398-configurableviewactions); [E398-Content](configuration-register.md#e398-content) |
| E414 | CLF_SectionAnswerObjectInventoryView | SysConfigurableViewEntity | CLF_SectionAnswerObject / Unresolved | [E414-Content](configuration-register.md#e414-content) |
| E426 | CLF_SectionAnswerObjectDetailView | SysConfigurableViewEntity | CLF_SectionAnswerObject / Unresolved | [E426-Content](configuration-register.md#e426-content) |
| E435 | CLF_SingleChecklist_Inventory | SysConfigurableViewEntity | CLF_SinglechecklistObject / Unresolved | [E435-Content](configuration-register.md#e435-content) |
| E439 | CLF_SingleChecklist_Detail | SysConfigurableViewEntity | CLF_SinglechecklistObject / Unresolved | [E439-ConfigurableViewActions](configuration-register.md#e439-configurableviewactions); [E439-Content](configuration-register.md#e439-content) |
| E448 | CLF_Subchecklist_Inventory | SysConfigurableViewEntity | CLF_SubchecklistObject / Unresolved | [E448-Content](configuration-register.md#e448-content) |
| E468 | ConfgAppSetting_InstructionTextObjectDetailView | SysConfigurableViewEntity | ConfgAppSetting_InstructionTextObject / Unresolved | [E468-ConfigurableViewActions](configuration-register.md#e468-configurableviewactions); [E468-Content](configuration-register.md#e468-content) |
| E497 | CLF_Checklist_Detail | SysConfigurableViewEntity | CLF_ChecklistObject / Unresolved | [E497-ConfigurableViewActions](configuration-register.md#e497-configurableviewactions); [E497-Content](configuration-register.md#e497-content) |
| E526 | ActionPlan_MyActionPlan_Inventory | SysConfigurableViewEntity | FragApplication_AbCorrectivActiObject / Unresolved | [E526-Content](configuration-register.md#e526-content) |
| E570 | CLF_Finding_Docs | SysConfigurableViewEntity | CLF_FindingObject / Unresolved | [E570-Content](configuration-register.md#e570-content) |
| E600 | CLF_Finding_CloseFinding | SysConfigurableViewEntity | CLF_FindingObject / Unresolved | [E600-ConfigurableViewActions](configuration-register.md#e600-configurableviewactions); [E600-Content](configuration-register.md#e600-content) |
| E613 | Insp_EquipListOptionObjectDetailView | SysConfigurableViewEntity | Insp_EquipListOptionObject / Unresolved | [E613-ConfigurableViewActions](configuration-register.md#e613-configurableviewactions); [E613-Content](configuration-register.md#e613-content) |
| E620 | Insp_EquipListOptionObjectInventoryView | SysConfigurableViewEntity | Insp_EquipListOptionObject / Unresolved | [E620-Content](configuration-register.md#e620-content) |
| E626 | CLF_Finding_Inventory | SysConfigurableViewEntity | CLF_FindingObject / Unresolved | [E626-Content](configuration-register.md#e626-content) |
| E667 | CLF_LocalizResource_Detail | SysConfigurableViewEntity | CLF_LocalizResourceObject / Unresolved | [E667-ConfigurableViewActions](configuration-register.md#e667-configurableviewactions); [E667-Content](configuration-register.md#e667-content) |
| E674 | CLF_LocalizResource_Inventory | SysConfigurableViewEntity | CLF_LocalizResourceObject / Unresolved | [E674-Content](configuration-register.md#e674-content) |
| E788 | ConfgAppSetting_PersRespOptionObjectDetailView | SysConfigurableViewEntity | ConfgAppSetting_PersRespOptionObject / Unresolved | [E788-ConfigurableViewActions](configuration-register.md#e788-configurableviewactions); [E788-Content](configuration-register.md#e788-content) |
| E844 | CLF_QuestionAnswer_Inventory | SysConfigurableViewEntity | CLF_QuestionAnswerObject / Unresolved | [E844-Content](configuration-register.md#e844-content) |
| E857 | CLF_QuestionAnswer_MassUpdate | SysConfigurableViewEntity | CLF_QuestionAnswerObject / Unresolved | [E857-ConfigurableViewActions](configuration-register.md#e857-configurableviewactions); [E857-Content](configuration-register.md#e857-content) |
| E863 | CLF_QuestionAnswer_Docs | SysConfigurableViewEntity | CLF_QuestionAnswerObject / Unresolved | [E863-ConfigurableViewActions](configuration-register.md#e863-configurableviewactions); [E863-Content](configuration-register.md#e863-content) |
| E893 | CLF_QuestionAnswer_Findings | SysConfigurableViewEntity | CLF_QuestionAnswerObject / Unresolved | [E893-ConfigurableViewActions](configuration-register.md#e893-configurableviewactions); [E893-Content](configuration-register.md#e893-content) |
| E904 | CLF_QuestionAnswer_Detail | SysConfigurableViewEntity | CLF_QuestionAnswerObject / Unresolved | [E904-ConfigurableViewActions](configuration-register.md#e904-configurableviewactions); [E904-Content](configuration-register.md#e904-content) |
| E954 | CLF_QuestionAnswer_ActionPlans | SysConfigurableViewEntity | CLF_QuestionAnswerObject / Unresolved | [E954-ConfigurableViewActions](configuration-register.md#e954-configurableviewactions); [E954-Content](configuration-register.md#e954-content) |
| E957 | CLF_QuestionAnswer_Docs_Readonly | SysConfigurableViewEntity | CLF_QuestionAnswerObject / Unresolved | [E957-ConfigurableViewActions](configuration-register.md#e957-configurableviewactions); [E957-Content](configuration-register.md#e957-content) |
| E972 | CLF_Quest_Detail | SysConfigurableViewEntity | CLF_QuestObject / Unresolved | [E972-ConfigurableViewActions](configuration-register.md#e972-configurableviewactions); [E972-Content](configuration-register.md#e972-content) |
| E985 | EventFwk_EventScenarioObjectInventoryView | SysConfigurableViewEntity | EventFwk_EventScenarioObject / Unresolved | [E985-Content](configuration-register.md#e985-content) |
| E994 | ConfgAppSetting_IconAssetObjectDetailView | SysConfigurableViewEntity | ConfgAppSetting_IconAssetObject / Unresolved | [E994-ConfigurableViewActions](configuration-register.md#e994-configurableviewactions); [E994-Content](configuration-register.md#e994-content) |
| E1001 | CLF_InsActionPlan_Inventory | SysConfigurableViewEntity | CLF_InsActionPlanObject / Unresolved | [E1001-Content](configuration-register.md#e1001-content) |
| E1016 | CLF_ChecklistType_Inventory | SysConfigurableViewEntity | CLF_ChecklistTypeObject / Unresolved | [E1016-Content](configuration-register.md#e1016-content) |
| E1027 | CLF_Quest_ConditionalFormatting_MassUpdate | SysConfigurableViewEntity | CLF_QuestObject / Unresolved | [E1027-ConfigurableViewActions](configuration-register.md#e1027-configurableviewactions); [E1027-Content](configuration-register.md#e1027-content) |
| E1030 | CLF_ChoicesList_Inventory | SysConfigurableViewEntity | CLF_ChoiceListObject / Unresolved | [E1030-Content](configuration-register.md#e1030-content) |
| E1048 | CLF_CheckliAbstract_Detail | SysConfigurableViewEntity | CLF_CheckliAbstractObject / Unresolved | [E1048-ConfigurableViewActions](configuration-register.md#e1048-configurableviewactions); [E1048-Content](configuration-register.md#e1048-content) |
| E1051 | Insp_Type_Inventory | SysConfigurableViewEntity | Insp_TypeObject / Unresolved | [E1051-Content](configuration-register.md#e1051-content) |
| E1058 | ConfgAppSetting_GlobAppSettingsObjectInventoryView | SysConfigurableViewEntity | ConfgAppSetting_GlobAppSettingsObject / Unresolved | [E1058-Content](configuration-register.md#e1058-content) |
| E1079 | EventFwk_EventObjectInventoryView | SysConfigurableViewEntity | EventFwk_EventObject / Unresolved | [E1079-Content](configuration-register.md#e1079-content) |
| E1081 | ConfgAppSetting_IconAssetObjectInventoryView | SysConfigurableViewEntity | ConfgAppSetting_IconAssetObject / Unresolved | [E1081-Content](configuration-register.md#e1081-content) |
| E1120 | FragApplication_Color_Detail | SysConfigurableViewEntity | FragApplication_ColorObject / Unresolved | [E1120-ConfigurableViewActions](configuration-register.md#e1120-configurableviewactions); [E1120-Content](configuration-register.md#e1120-content) |
| E1130 | FragApplication_Color_Select | SysConfigurableViewEntity | FragApplication_ColorObject / Unresolved | [E1130-Content](configuration-register.md#e1130-content) |
| E1133 | FragApplication_Color_Inventory | SysConfigurableViewEntity | FragApplication_ColorObject / Unresolved | [E1133-Content](configuration-register.md#e1133-content) |
| E1154 | CLF_Finding_Detail | SysConfigurableViewEntity | CLF_FindingObject / Unresolved | [E1154-ConfigurableViewActions](configuration-register.md#e1154-configurableviewactions); [E1154-Content](configuration-register.md#e1154-content) |
| E1216 | CLF_Checklist_Inventory | SysConfigurableViewEntity | CLF_ChecklistObject / Unresolved | [E1216-Content](configuration-register.md#e1216-content) |
| E1228 | ConfgAppSetting_SpecAppSettingsObjectInventoryView | SysConfigurableViewEntity | ConfgAppSetting_SpecAppSettingsObject / Unresolved | [E1228-Content](configuration-register.md#e1228-content) |
| E1254 | _EmptyView | SysConfigurableViewEntity | Unresolved / Unresolved | [E1254-Content](configuration-register.md#e1254-content) |
| E1269 | CLF_Subchecklist_Detail | SysConfigurableViewEntity | CLF_SubchecklistObject / Unresolved | [E1269-ConfigurableViewActions](configuration-register.md#e1269-configurableviewactions); [E1269-Content](configuration-register.md#e1269-content) |
| E1308 | QP_AbCorrectivActi_Closed_Inventory | SysConfigurableViewEntity | FragApplication_AbCorrectivActiObject / Unresolved | [E1308-Content](configuration-register.md#e1308-content) |
| E1376 | Actions_AllActions_Inventory | SysConfigurableViewEntity | FragApplication_AbCorrectivActiObject / Unresolved | [E1376-Content](configuration-register.md#e1376-content) |
| E1393 | FragApplication_AbCorrectivActiObjectDetailView | SysConfigurableViewEntity | FragApplication_AbCorrectivActiObject / Unresolved | [E1393-Content](configuration-register.md#e1393-content) |
| E1405 | AbstractCorrectiveAction_Inventory | SysConfigurableViewEntity | FragApplication_AbCorrectivActiObject / Unresolved | [E1405-Content](configuration-register.md#e1405-content) |
| E1431 | CAR_AbsCorrectiveAction_Inventory | SysConfigurableViewEntity | FragApplication_AbCorrectivActiObject / Unresolved | [E1431-Content](configuration-register.md#e1431-content) |
| E1441 | QP_AbCorrectivActi_Open_Inventory | SysConfigurableViewEntity | FragApplication_AbCorrectivActiObject / Unresolved | [E1441-Content](configuration-register.md#e1441-content) |
| E1458 | FragApplication_Equipment_Select | SysConfigurableViewEntity | FragApplication_EquipmentObject / Unresolved | [E1458-Content](configuration-register.md#e1458-content) |
| E1460 | ActionPlans_ActionPlanAbs_NCR_Inventory | SysConfigurableViewEntity | ActionPlans_ActionPlanAbsObject / Unresolved | [E1460-Content](configuration-register.md#e1460-content) |
| E1465 | CLF_Finding_Docs_Readonly | SysConfigurableViewEntity | CLF_FindingObject / Unresolved | [E1465-ConfigurableViewActions](configuration-register.md#e1465-configurableviewactions); [E1465-Content](configuration-register.md#e1465-content) |
| E1486 | EventFwk_EventObjectDetailView | SysConfigurableViewEntity | EventFwk_EventObject / Unresolved | [E1486-Content](configuration-register.md#e1486-content) |
| E1513 | CLF_QuestAbstract_Detail | SysConfigurableViewEntity | CLF_QuestAbstractObject / Unresolved | [E1513-ConfigurableViewActions](configuration-register.md#e1513-configurableviewactions); [E1513-Content](configuration-register.md#e1513-content) |
| E1516 | CLF_QuestAbstract_Inventory | SysConfigurableViewEntity | CLF_QuestAbstractObject / Unresolved | [E1516-Content](configuration-register.md#e1516-content) |
| E1527 | EventFwk_EventScenarioObjectDetailView | SysConfigurableViewEntity | EventFwk_EventScenarioObject / Unresolved | [E1527-Content](configuration-register.md#e1527-content) |
| E1536 | ActionPlans_ActionPlanAbs_PHA_Inventory | SysConfigurableViewEntity | ActionPlans_ActionPlanAbsObject / Unresolved | [E1536-Content](configuration-register.md#e1536-content) |
| E1565 | Insp_Type_Detail | SysConfigurableViewEntity | Insp_TypeObject / Unresolved | [E1565-ConfigurableViewActions](configuration-register.md#e1565-configurableviewactions); [E1565-Content](configuration-register.md#e1565-content) |
| E1623 | Insp_EquipInspection_Detail | SysConfigurableViewEntity | Insp_EquipInspectionObject / Unresolved | [E1623-ConfigurableViewActions](configuration-register.md#e1623-configurableviewactions); [E1623-Content](configuration-register.md#e1623-content) |
| E1677 | CLF_Quest_Inventory | SysConfigurableViewEntity | CLF_QuestObject / Unresolved | [E1677-Content](configuration-register.md#e1677-content) |
| E1684 | CC_AbsCorrectiveAction_Inventory | SysConfigurableViewEntity | ActionPlans_ActionPlanAbsObject / Unresolved | [E1684-Content](configuration-register.md#e1684-content) |
| E1695 | CLF_FindingStatus_Inventory | SysConfigurableViewEntity | CLF_FindingStatusObject / Unresolved | [E1695-Content](configuration-register.md#e1695-content) |
| E1699 | CLF_FindingStatus_Detail | SysConfigurableViewEntity | CLF_FindingStatusObject / Unresolved | [E1699-ConfigurableViewActions](configuration-register.md#e1699-configurableviewactions); [E1699-Content](configuration-register.md#e1699-content) |
| E1730 | CLF_ChecklistType_Detail | SysConfigurableViewEntity | CLF_ChecklistTypeObject / Unresolved | [E1730-ConfigurableViewActions](configuration-register.md#e1730-configurableviewactions); [E1730-Content](configuration-register.md#e1730-content) |
| E1753 | CLF_Checklist_Toolbox_Detail | SysConfigurableViewEntity | CLF_ChecklistObject / Unresolved | [E1753-ConfigurableViewActions](configuration-register.md#e1753-configurableviewactions); [E1753-Content](configuration-register.md#e1753-content) |
| E1773 | CLF_Checklist_MassUpdate | SysConfigurableViewEntity | CLF_ChecklistObject / Unresolved | [E1773-ConfigurableViewActions](configuration-register.md#e1773-configurableviewactions); [E1773-Content](configuration-register.md#e1773-content) |
| E1779 | CLF_Checklist_Select | SysConfigurableViewEntity | CLF_ChecklistObject / Unresolved | [E1779-Content](configuration-register.md#e1779-content) |
| E1824 | ConfgAppSetting_GlobAppSettingsObjectDetailView | SysConfigurableViewEntity | ConfgAppSetting_GlobAppSettingsObject / Unresolved | [E1824-Content](configuration-register.md#e1824-content) |
| E1826 | Insp_IReviewDecisionObjectInventoryView | SysConfigurableViewEntity | Insp_IReviewDecisionObject / Unresolved | [E1826-Content](configuration-register.md#e1826-content) |
| E1862 | CLF_MulticheckList_Detail | SysConfigurableViewEntity | CLF_MultichecklistsObject / Unresolved | [E1862-ConfigurableViewActions](configuration-register.md#e1862-configurableviewactions); [E1862-Content](configuration-register.md#e1862-content) |
| E1894 | CLF_ChecklistAnswer_Findings | SysConfigurableViewEntity | CLF_ChecklistAnswerObject / Unresolved | [E1894-ConfigurableViewActions](configuration-register.md#e1894-configurableviewactions); [E1894-Content](configuration-register.md#e1894-content) |
| E1924 | ConfgAppSetting_PersRespOptionObjectInventoryView | SysConfigurableViewEntity | ConfgAppSetting_PersRespOptionObject / Unresolved | [E1924-Content](configuration-register.md#e1924-content) |
| E1939 | CLF_Multichecklist_Inventory | SysConfigurableViewEntity | CLF_MultichecklistsObject / Unresolved | [E1939-ConfigurableViewActions](configuration-register.md#e1939-configurableviewactions); [E1939-Content](configuration-register.md#e1939-content) |
| E1946 | CLF_ChoiceList_Detail | SysConfigurableViewEntity | CLF_ChoiceListObject / Unresolved | [E1946-ConfigurableViewActions](configuration-register.md#e1946-configurableviewactions); [E1946-Content](configuration-register.md#e1946-content) |
| E1954 | CLF_Quest_Select | SysConfigurableViewEntity | CLF_QuestObject / Unresolved | [E1954-Content](configuration-register.md#e1954-content) |
| E1989 | CLF_PubChecklist_Detail | SysConfigurableViewEntity | CLF_PubChecklistObject / Unresolved | [E1989-ConfigurableViewActions](configuration-register.md#e1989-configurableviewactions); [E1989-Content](configuration-register.md#e1989-content) |
| E1994 | CLF_Finding_Detail_Readonly | SysConfigurableViewEntity | CLF_FindingObject / Unresolved | [E1994-ConfigurableViewActions](configuration-register.md#e1994-configurableviewactions); [E1994-Content](configuration-register.md#e1994-content) |
| E2027 | Insp_IReviewDecisionObjectDetailView | SysConfigurableViewEntity | Insp_IReviewDecisionObject / Unresolved | [E2027-Content](configuration-register.md#e2027-content) |
| E2045 | ConfgAppSetting_SpecAppSettingsObjectDetailView | SysConfigurableViewEntity | ConfgAppSetting_SpecAppSettingsObject / Unresolved | [E2045-ConfigurableViewActions](configuration-register.md#e2045-configurableviewactions); [E2045-Content](configuration-register.md#e2045-content) |
| E2088 | CLF_Finding_Select | SysConfigurableViewEntity | CLF_FindingObject / Unresolved | [E2088-Content](configuration-register.md#e2088-content) |
| E2265 | CLF_Preferences_Inventory | SysConfigurableViewEntity | CLF_PreferencesObject / Unresolved | [E2265-Content](configuration-register.md#e2265-content) |
| E2294 | CLF_Quest_ToolBox_Detail | SysConfigurableViewEntity | CLF_QuestObject / Unresolved | [E2294-ConfigurableViewActions](configuration-register.md#e2294-configurableviewactions); [E2294-Content](configuration-register.md#e2294-content) |
| E2350 | CLF_PubChecklist_Inventory | SysConfigurableViewEntity | CLF_PubChecklistObject / Unresolved | [E2350-Content](configuration-register.md#e2350-content) |
| E2358 | ConfgAppSetting_TPanelGeneratorObjectDetailView | SysConfigurableViewEntity | ConfgAppSetting_TPanelGeneratorObject / Unresolved | [E2358-ConfigurableViewActions](configuration-register.md#e2358-configurableviewactions); [E2358-Content](configuration-register.md#e2358-content) |
| E2372 | CLF_Tag_Detail | SysConfigurableViewEntity | CLF_TagObject / Unresolved | [E2372-ConfigurableViewActions](configuration-register.md#e2372-configurableviewactions); [E2372-Content](configuration-register.md#e2372-content) |
| E2378 | ActionPlans_ActionPlanTem_Select | SysConfigurableViewEntity | ActionPlans_ActioPlanTemObject / Unresolved | [E2378-Content](configuration-register.md#e2378-content) |
| E2392 | CLF_ChecklistAnswer_Inventory | SysConfigurableViewEntity | CLF_ChecklistAnswerObject / Unresolved | [E2392-Content](configuration-register.md#e2392-content) |
| E2424 | Fragment_Insp_EquipInspection_QuestionAnswer | SysConfigurableViewEntity | Insp_EquipInspectionObject / Unresolved | [E2424-ConfigurableViewActions](configuration-register.md#e2424-configurableviewactions); [E2424-Content](configuration-register.md#e2424-content) |
| E2498 | ActionPlans_ActionPlanAbs_Inventory | SysConfigurableViewEntity | ActionPlans_ActionPlanAbsObject / Unresolved | [E2498-Content](configuration-register.md#e2498-content) |
| E2501 | Insp_EquipInspectionObjectInventoryView | SysConfigurableViewEntity | Insp_EquipInspectionObject / Unresolved | [E2501-Content](configuration-register.md#e2501-content) |
| E2503 | CLF_SectionObjectDetailView | SysConfigurableViewEntity | CLF_SectionObject / Unresolved | [E2503-ConfigurableViewActions](configuration-register.md#e2503-configurableviewactions); [E2503-Content](configuration-register.md#e2503-content) |
| E2579 | Insp_EquipInspection_Frag_QuestionAnswer | SysConfigurableViewEntity | Insp_EquipInspectionObject / Unresolved | [E2579-ConfigurableViewActions](configuration-register.md#e2579-configurableviewactions); [E2579-Content](configuration-register.md#e2579-content) |
| E2589 | CAR_ActionPlanAbs_Inventory | SysConfigurableViewEntity | ActionPlans_ActionPlanAbsObject / Unresolved | [E2589-Content](configuration-register.md#e2589-content) |
| E2643 | EventFwk_Event_Select | SysConfigurableViewEntity | EventFwk_EventObject / Unresolved | [E2643-Content](configuration-register.md#e2643-content) |
| E2953 | AuditMgmt_ActionPlan_Select | SysConfigurableViewEntity | ActionPlans_ActionPlanAbsObject / Unresolved | [E2953-Content](configuration-register.md#e2953-content) |
| E2968 | CLF_ChecklistAnswer_Detail | SysConfigurableViewEntity | CLF_ChecklistAnswerObject / Unresolved | [E2968-ConfigurableViewActions](configuration-register.md#e2968-configurableviewactions); [E2968-Content](configuration-register.md#e2968-content) |
| E2987 | Insp_InspectionAbs_Detail | SysConfigurableViewEntity | Insp_InspectionAbsObject / Unresolved | [E2987-Content](configuration-register.md#e2987-content) |
| E3002 | Subject_Select | SysConfigurableViewEntity | SysSubjectEntity / Unresolved | [E3002-Content](configuration-register.md#e3002-content) |
| E3068 | CLF_Tag_Inventory | SysConfigurableViewEntity | CLF_TagObject / Unresolved | [E3068-Content](configuration-register.md#e3068-content) |
| E3070 | CLF_SectionObjectInventoryView | SysConfigurableViewEntity | CLF_SectionObject / Unresolved | [E3070-Content](configuration-register.md#e3070-content) |
| E3074 | ActionPlans_ActionPlan_Select | SysConfigurableViewEntity | ActionPlans_ActionPlanAbsObject / Unresolved | [E3074-Content](configuration-register.md#e3074-content) |
| E3084 | CLF_Question_References_Detail | SysConfigurableViewEntity | CLF_QuestObject / Unresolved | [E3084-ConfigurableViewActions](configuration-register.md#e3084-configurableviewactions); [E3084-Content](configuration-register.md#e3084-content) |
| E30 | CLF_InsActionPlan_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_InsActionPlan_Detail | [E30-ConfigurableViewActions](configuration-register.md#e30-configurableviewactions); [E30-ViewDefinition](configuration-register.md#e30-viewdefinition); [E30-Content](configuration-register.md#e30-content) |
| E44 | Insp_EquipInspection_Frag_QuestionAnswer_ReadOnly (Mobile) | SysConfigurableViewProfileEntity | Unresolved / Insp_EquipInspection_Frag_QuestionAnswer_ReadOnly | [E44-ConfigurableViewActions](configuration-register.md#e44-configurableviewactions); [E44-ViewDefinition](configuration-register.md#e44-viewdefinition); [E44-Content](configuration-register.md#e44-content) |
| E110 | CLF_Choice_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Choice_Detail | [E110-ConfigurableViewActions](configuration-register.md#e110-configurableviewactions); [E110-ViewDefinition](configuration-register.md#e110-viewdefinition); [E110-Content](configuration-register.md#e110-content) |
| E128 | ConfgAppSetting_TPanelGeneratorObjectInventoryView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / ConfgAppSetting_TPanelGeneratorObjectInventoryView | [E128-ConfigurableViewActions](configuration-register.md#e128-configurableviewactions); [E128-ViewDefinition](configuration-register.md#e128-viewdefinition); [E128-Content](configuration-register.md#e128-content) |
| E150 | CLF_InsActionPlan_Detail_NoEdit (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_InsActionPlan_Detail_NoEdit | [E150-ConfigurableViewActions](configuration-register.md#e150-configurableviewactions); [E150-ViewDefinition](configuration-register.md#e150-viewdefinition); [E150-Content](configuration-register.md#e150-content) |
| E159 | Insp_InspRoleOptionObjectInventoryView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / Insp_InspRoleOptionObjectInventoryView | [E159-ConfigurableViewActions](configuration-register.md#e159-configurableviewactions); [E159-ViewDefinition](configuration-register.md#e159-viewdefinition); [E159-Content](configuration-register.md#e159-content) |
| E278 | CLF_PubQuest_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_PubQuest_Detail | [E278-ConfigurableViewActions](configuration-register.md#e278-configurableviewactions); [E278-ViewDefinition](configuration-register.md#e278-viewdefinition); [E278-Content](configuration-register.md#e278-content) |
| E291 | CLF_Preferences_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Preferences_Detail | [E291-ConfigurableViewActions](configuration-register.md#e291-configurableviewactions); [E291-ViewDefinition](configuration-register.md#e291-viewdefinition); [E291-Content](configuration-register.md#e291-content) |
| E379 | Insp_InspectionAbs_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / Insp_InspectionAbs_Inventory | [E379-ConfigurableViewActions](configuration-register.md#e379-configurableviewactions); [E379-ViewDefinition](configuration-register.md#e379-viewdefinition); [E379-Content](configuration-register.md#e379-content) |
| E396 | CLF_Quest_MassUpdate (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Quest_MassUpdate | [E396-ConfigurableViewActions](configuration-register.md#e396-configurableviewactions); [E396-ViewDefinition](configuration-register.md#e396-viewdefinition); [E396-Content](configuration-register.md#e396-content) |
| E471 | ConfgAppSetting_InstructionTextObjectDetailView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / ConfgAppSetting_InstructionTextObjectDetailView | [E471-ConfigurableViewActions](configuration-register.md#e471-configurableviewactions); [E471-ViewDefinition](configuration-register.md#e471-viewdefinition); [E471-Content](configuration-register.md#e471-content) |
| E516 | CLF_Checklist_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Checklist_Detail | [E516-ConfigurableViewActions](configuration-register.md#e516-configurableviewactions); [E516-ViewDefinition](configuration-register.md#e516-viewdefinition); [E516-Content](configuration-register.md#e516-content) |
| E530 | ActionPlan_MyActionPlan_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / ActionPlan_MyActionPlan_Inventory | [E530-ConfigurableViewActions](configuration-register.md#e530-configurableviewactions); [E530-ViewDefinition](configuration-register.md#e530-viewdefinition); [E530-Content](configuration-register.md#e530-content) |
| E618 | Insp_EquipListOptionObjectDetailView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / Insp_EquipListOptionObjectDetailView | [E618-ConfigurableViewActions](configuration-register.md#e618-configurableviewactions); [E618-ViewDefinition](configuration-register.md#e618-viewdefinition); [E618-Content](configuration-register.md#e618-content) |
| E622 | Insp_EquipListOptionObjectInventoryView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / Insp_EquipListOptionObjectInventoryView | [E622-ConfigurableViewActions](configuration-register.md#e622-configurableviewactions); [E622-ViewDefinition](configuration-register.md#e622-viewdefinition); [E622-Content](configuration-register.md#e622-content) |
| E786 | ConfgAppSetting_PersRespOptionObjectDetailView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / ConfgAppSetting_PersRespOptionObjectDetailView | [E786-ConfigurableViewActions](configuration-register.md#e786-configurableviewactions); [E786-ViewDefinition](configuration-register.md#e786-viewdefinition); [E786-Content](configuration-register.md#e786-content) |
| E983 | CLF_Quest_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Quest_Detail | [E983-ConfigurableViewActions](configuration-register.md#e983-configurableviewactions); [E983-ViewDefinition](configuration-register.md#e983-viewdefinition); [E983-Content](configuration-register.md#e983-content) |
| E992 | ConfgAppSetting_IconAssetObjectDetailView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / ConfgAppSetting_IconAssetObjectDetailView | [E992-ConfigurableViewActions](configuration-register.md#e992-configurableviewactions); [E992-ViewDefinition](configuration-register.md#e992-viewdefinition); [E992-Content](configuration-register.md#e992-content) |
| E1004 | CLF_InsActionPlan_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_InsActionPlan_Inventory | [E1004-ConfigurableViewActions](configuration-register.md#e1004-configurableviewactions); [E1004-ViewDefinition](configuration-register.md#e1004-viewdefinition); [E1004-Content](configuration-register.md#e1004-content) |
| E1025 | CLF_Quest_ConditionalFormatting_MassUpdate (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Quest_ConditionalFormatting_MassUpdate | [E1025-ConfigurableViewActions](configuration-register.md#e1025-configurableviewactions); [E1025-ViewDefinition](configuration-register.md#e1025-viewdefinition); [E1025-Content](configuration-register.md#e1025-content) |
| E1056 | Insp_Type_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / Insp_Type_Inventory | [E1056-ConfigurableViewActions](configuration-register.md#e1056-configurableviewactions); [E1056-ViewDefinition](configuration-register.md#e1056-viewdefinition); [E1056-Content](configuration-register.md#e1056-content) |
| E1086 | ConfgAppSetting_IconAssetObjectInventoryView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / ConfgAppSetting_IconAssetObjectInventoryView | [E1086-ConfigurableViewActions](configuration-register.md#e1086-configurableviewactions); [E1086-ViewDefinition](configuration-register.md#e1086-viewdefinition); [E1086-Content](configuration-register.md#e1086-content) |
| E1167 | CLF_Finding_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Finding_Detail | [E1167-ConfigurableViewActions](configuration-register.md#e1167-configurableviewactions); [E1167-ViewDefinition](configuration-register.md#e1167-viewdefinition); [E1167-Content](configuration-register.md#e1167-content) |
| E1183 | CLF_Finding_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Finding_Inventory | [E1183-ConfigurableViewActions](configuration-register.md#e1183-configurableviewactions); [E1183-ViewDefinition](configuration-register.md#e1183-viewdefinition); [E1183-Content](configuration-register.md#e1183-content) |
| E1214 | CLF_Checklist_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Checklist_Inventory | [E1214-ConfigurableViewActions](configuration-register.md#e1214-configurableviewactions); [E1214-ViewDefinition](configuration-register.md#e1214-viewdefinition); [E1214-Content](configuration-register.md#e1214-content) |
| E1226 | ConfgAppSetting_SpecAppSettingsObjectInventoryView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / ConfgAppSetting_SpecAppSettingsObjectInventoryView | [E1226-ConfigurableViewActions](configuration-register.md#e1226-configurableviewactions); [E1226-ViewDefinition](configuration-register.md#e1226-viewdefinition); [E1226-Content](configuration-register.md#e1226-content) |
| E1278 | CLF_Subchecklist_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Subchecklist_Detail | [E1278-ConfigurableViewActions](configuration-register.md#e1278-configurableviewactions); [E1278-ViewDefinition](configuration-register.md#e1278-viewdefinition); [E1278-Content](configuration-register.md#e1278-content) |
| E1306 | QP_AbCorrectivActi_Closed_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / QP_AbCorrectivActi_Closed_Inventory | [E1306-ConfigurableViewActions](configuration-register.md#e1306-configurableviewactions); [E1306-ViewDefinition](configuration-register.md#e1306-viewdefinition); [E1306-Content](configuration-register.md#e1306-content) |
| E1475 | CLF_QuestionAnswer_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_QuestionAnswer_Inventory | [E1475-ConfigurableViewActions](configuration-register.md#e1475-configurableviewactions); [E1475-ViewDefinition](configuration-register.md#e1475-viewdefinition); [E1475-Content](configuration-register.md#e1475-content) |
| E1523 | CLF_LocalizResource_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_LocalizResource_Inventory | [E1523-ConfigurableViewActions](configuration-register.md#e1523-configurableviewactions); [E1523-ViewDefinition](configuration-register.md#e1523-viewdefinition); [E1523-Content](configuration-register.md#e1523-content) |
| E1559 | Insp_InspRoleOptionObjectDetailView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / Insp_InspRoleOptionObjectDetailView | [E1559-ConfigurableViewActions](configuration-register.md#e1559-configurableviewactions); [E1559-ViewDefinition](configuration-register.md#e1559-viewdefinition); [E1559-Content](configuration-register.md#e1559-content) |
| E1621 | Insp_EquipInspection_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / Insp_EquipInspection_Detail | [E1621-ConfigurableViewActions](configuration-register.md#e1621-configurableviewactions); [E1621-ViewDefinition](configuration-register.md#e1621-viewdefinition); [E1621-Content](configuration-register.md#e1621-content) |
| E1675 | CLF_Quest_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Quest_Inventory | [E1675-ConfigurableViewActions](configuration-register.md#e1675-configurableviewactions); [E1675-ViewDefinition](configuration-register.md#e1675-viewdefinition); [E1675-Content](configuration-register.md#e1675-content) |
| E1854 | CLF_QuestionAnswer_Findings (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_QuestionAnswer_Findings | [E1854-ConfigurableViewActions](configuration-register.md#e1854-configurableviewactions); [E1854-ViewDefinition](configuration-register.md#e1854-viewdefinition); [E1854-Content](configuration-register.md#e1854-content) |
| E1860 | CLF_MulticheckList_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_MulticheckList_Detail | [E1860-ConfigurableViewActions](configuration-register.md#e1860-configurableviewactions); [E1860-ViewDefinition](configuration-register.md#e1860-viewdefinition); [E1860-Content](configuration-register.md#e1860-content) |
| E1882 | CLF_PubQuest_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_PubQuest_Inventory | [E1882-ConfigurableViewActions](configuration-register.md#e1882-configurableviewactions); [E1882-ViewDefinition](configuration-register.md#e1882-viewdefinition); [E1882-Content](configuration-register.md#e1882-content) |
| E1922 | ConfgAppSetting_PersRespOptionObjectInventoryView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / ConfgAppSetting_PersRespOptionObjectInventoryView | [E1922-ConfigurableViewActions](configuration-register.md#e1922-configurableviewactions); [E1922-ViewDefinition](configuration-register.md#e1922-viewdefinition); [E1922-Content](configuration-register.md#e1922-content) |
| E1944 | CLF_Multichecklist_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Multichecklist_Inventory | [E1944-ConfigurableViewActions](configuration-register.md#e1944-configurableviewactions); [E1944-ViewDefinition](configuration-register.md#e1944-viewdefinition); [E1944-Content](configuration-register.md#e1944-content) |
| E1952 | CLF_ChoiceList_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_ChoiceList_Detail | [E1952-ConfigurableViewActions](configuration-register.md#e1952-configurableviewactions); [E1952-ViewDefinition](configuration-register.md#e1952-viewdefinition); [E1952-Content](configuration-register.md#e1952-content) |
| E1956 | CLF_Quest_Select (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Quest_Select | [E1956-ConfigurableViewActions](configuration-register.md#e1956-configurableviewactions); [E1956-ViewDefinition](configuration-register.md#e1956-viewdefinition); [E1956-Content](configuration-register.md#e1956-content) |
| E1987 | CLF_PubChecklist_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_PubChecklist_Detail | [E1987-ConfigurableViewActions](configuration-register.md#e1987-configurableviewactions); [E1987-ViewDefinition](configuration-register.md#e1987-viewdefinition); [E1987-Content](configuration-register.md#e1987-content) |
| E1992 | CLF_Finding_Detail_Readonly (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Finding_Detail_Readonly | [E1992-ConfigurableViewActions](configuration-register.md#e1992-configurableviewactions); [E1992-ViewDefinition](configuration-register.md#e1992-viewdefinition); [E1992-Content](configuration-register.md#e1992-content) |
| E1998 | QP_AbCorrectivActi_Open_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / QP_AbCorrectivActi_Open_Inventory | [E1998-ConfigurableViewActions](configuration-register.md#e1998-configurableviewactions); [E1998-ViewDefinition](configuration-register.md#e1998-viewdefinition); [E1998-Content](configuration-register.md#e1998-content) |
| E2084 | CLF_QuestionAnswer_MassUpdate (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_QuestionAnswer_MassUpdate | [E2084-ConfigurableViewActions](configuration-register.md#e2084-configurableviewactions); [E2084-ViewDefinition](configuration-register.md#e2084-viewdefinition); [E2084-Content](configuration-register.md#e2084-content) |
| E2090 | CLF_Finding_Select (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Finding_Select | [E2090-ConfigurableViewActions](configuration-register.md#e2090-configurableviewactions); [E2090-ViewDefinition](configuration-register.md#e2090-viewdefinition); [E2090-Content](configuration-register.md#e2090-content) |
| E2098 | AbstractCorrectiveAction_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / AbstractCorrectiveAction_Inventory | [E2098-ConfigurableViewActions](configuration-register.md#e2098-configurableviewactions); [E2098-ViewDefinition](configuration-register.md#e2098-viewdefinition); [E2098-Content](configuration-register.md#e2098-content) |
| E2127 | Insp_Type_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / Insp_Type_Detail | [E2127-ConfigurableViewActions](configuration-register.md#e2127-configurableviewactions); [E2127-ViewDefinition](configuration-register.md#e2127-viewdefinition); [E2127-Content](configuration-register.md#e2127-content) |
| E2135 | CLF_QuestionAnswer_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_QuestionAnswer_Detail | [E2135-ConfigurableViewActions](configuration-register.md#e2135-configurableviewactions); [E2135-ViewDefinition](configuration-register.md#e2135-viewdefinition); [E2135-Content](configuration-register.md#e2135-content) |
| E2251 | CLF_QuestionAnswer_Docs_Readonly (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_QuestionAnswer_Docs_Readonly | [E2251-ConfigurableViewActions](configuration-register.md#e2251-configurableviewactions); [E2251-ViewDefinition](configuration-register.md#e2251-viewdefinition); [E2251-Content](configuration-register.md#e2251-content) |
| E2256 | CLF_Checklist_Toolbox_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Checklist_Toolbox_Detail | [E2256-ConfigurableViewActions](configuration-register.md#e2256-configurableviewactions); [E2256-ViewDefinition](configuration-register.md#e2256-viewdefinition); [E2256-Content](configuration-register.md#e2256-content) |
| E2267 | CLF_Preferences_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Preferences_Inventory | [E2267-ConfigurableViewActions](configuration-register.md#e2267-configurableviewactions); [E2267-ViewDefinition](configuration-register.md#e2267-viewdefinition); [E2267-Content](configuration-register.md#e2267-content) |
| E2298 | CLF_Quest_ToolBox_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Quest_ToolBox_Detail | [E2298-ConfigurableViewActions](configuration-register.md#e2298-configurableviewactions); [E2298-ViewDefinition](configuration-register.md#e2298-viewdefinition); [E2298-Content](configuration-register.md#e2298-content) |
| E2328 | ConfgAppSetting_SpecAppSettingsObjectDetailView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / ConfgAppSetting_SpecAppSettingsObjectDetailView | [E2328-ConfigurableViewActions](configuration-register.md#e2328-configurableviewactions); [E2328-ViewDefinition](configuration-register.md#e2328-viewdefinition); [E2328-Content](configuration-register.md#e2328-content) |
| E2356 | ConfgAppSetting_TPanelGeneratorObjectDetailView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / ConfgAppSetting_TPanelGeneratorObjectDetailView | [E2356-ConfigurableViewActions](configuration-register.md#e2356-configurableviewactions); [E2356-ViewDefinition](configuration-register.md#e2356-viewdefinition); [E2356-Content](configuration-register.md#e2356-content) |
| E2432 | Fragment_Insp_EquipInspection_QuestionAnswer (Mobile) | SysConfigurableViewProfileEntity | Unresolved / Fragment_Insp_EquipInspection_QuestionAnswer | [E2432-ConfigurableViewActions](configuration-register.md#e2432-configurableviewactions); [E2432-ViewDefinition](configuration-register.md#e2432-viewdefinition); [E2432-Content](configuration-register.md#e2432-content) |
| E2482 | CLF_QuestionAnswer_ActionPlans (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_QuestionAnswer_ActionPlans |  |
| E2494 | CLF_QuestAbstract_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_QuestAbstract_Detail | [E2494-ConfigurableViewActions](configuration-register.md#e2494-configurableviewactions); [E2494-ViewDefinition](configuration-register.md#e2494-viewdefinition); [E2494-Content](configuration-register.md#e2494-content) |
| E2496 | CLF_QuestionAnswer_Docs (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_QuestionAnswer_Docs | [E2496-ConfigurableViewActions](configuration-register.md#e2496-configurableviewactions); [E2496-ViewDefinition](configuration-register.md#e2496-viewdefinition); [E2496-Content](configuration-register.md#e2496-content) |
| E2506 | CLF_SectionObjectDetailView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_SectionObjectDetailView | [E2506-ConfigurableViewActions](configuration-register.md#e2506-configurableviewactions); [E2506-ViewDefinition](configuration-register.md#e2506-viewdefinition); [E2506-Content](configuration-register.md#e2506-content) |
| E2577 | CLF_PubChecklist_Inventory (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_PubChecklist_Inventory | [E2577-ConfigurableViewActions](configuration-register.md#e2577-configurableviewactions); [E2577-ViewDefinition](configuration-register.md#e2577-viewdefinition); [E2577-Content](configuration-register.md#e2577-content) |
| E2587 | Insp_EquipInspection_Frag_QuestionAnswer (Mobile) | SysConfigurableViewProfileEntity | Unresolved / Insp_EquipInspection_Frag_QuestionAnswer | [E2587-ConfigurableViewActions](configuration-register.md#e2587-configurableviewactions); [E2587-ViewDefinition](configuration-register.md#e2587-viewdefinition); [E2587-Content](configuration-register.md#e2587-content) |
| E2620 | ConfgAppSetting_InstructionTextObjectInventoryView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / ConfgAppSetting_InstructionTextObjectInventoryView | [E2620-ConfigurableViewActions](configuration-register.md#e2620-configurableviewactions); [E2620-ViewDefinition](configuration-register.md#e2620-viewdefinition); [E2620-Content](configuration-register.md#e2620-content) |
| E2958 | Insp_EquipInspectionObjectInventoryView (Mobile) | SysConfigurableViewProfileEntity | Unresolved / Insp_EquipInspectionObjectInventoryView | [E2958-ConfigurableViewActions](configuration-register.md#e2958-configurableviewactions); [E2958-ViewDefinition](configuration-register.md#e2958-viewdefinition); [E2958-Content](configuration-register.md#e2958-content) |
| E2978 | CLF_Checklist_Select (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_Checklist_Select | [E2978-ConfigurableViewActions](configuration-register.md#e2978-configurableviewactions); [E2978-ViewDefinition](configuration-register.md#e2978-viewdefinition); [E2978-Content](configuration-register.md#e2978-content) |
| E2982 | CLF_LocalizResource_Detail (Mobile) | SysConfigurableViewProfileEntity | Unresolved / CLF_LocalizResource_Detail | [E2982-ConfigurableViewActions](configuration-register.md#e2982-configurableviewactions); [E2982-ViewDefinition](configuration-register.md#e2982-viewdefinition); [E2982-Content](configuration-register.md#e2982-content) |

## Form field occurrences

One row per parsed Field/Grid node. Stage and collection context are retained so repeated field names do not imply duplicate model declarations. Attributes describe that occurrence, not effective platform security. Conditional actions in the blocks below may further show, hide, require, clear or set values.

| View / profile evidence | Stage | Grid context | Field path | Exact node attributes |
| --- | --- | --- | --- | --- |
| E18 | Draft | None | hRelatedInsp.TypeOfInspec.FindingTracking | {"__type":"ix:Field","For":"hRelatedInsp.TypeOfInspec.FindingTracking"} |
| E18 | Draft | None | ActionNo | {"__type":"ix:Field","DisplayMode":"View, Edit","For":"ActionNo"} |
| E18 | Draft | None | CheckListAnsAct | {"__type":"ix:Field","For":"CheckListAnsAct","Readonly":"true"} |
| E18 | Draft | None | AlBeenCorrected | {"__type":"ix:Field","For":"AlBeenCorrected","IsMandatory":"true"} |
| E18 | Draft | None | ActionOwner | {"__type":"ix:Field","For":"ActionOwner","IsMandatory":"true"} |
| E18 | Draft | None | CompletedBy | {"__type":"ix:Field","For":"CompletedBy"} |
| E18 | Draft | None | CompletionDate | {"__type":"ix:Field","For":"CompletionDate","SpellCheck":"false"} |
| E18 | Draft | None | CompletionNotes | {"__type":"ix:Field","For":"CompletionNotes","Span":"true","SpellCheck":"false"} |
| E18 | Draft | None | CPARTypeID | {"__type":"ix:Field","For":"CPARTypeID","IsMandatory":"false","IsVisible":"false","ReadOnly":"true"} |
| E18 | Draft | None | CPARActionReq | {"__type":"ix:Field","EditAs":"largetext","For":"CPARActionReq","IsMandatory":"false","Span":"true"} |
| E18 | Draft | None | DueDate | {"__type":"ix:Field","For":"DueDate","IsMandatory":"false","SpellCheck":"false"} |
| E18 | InProgress | None | hRelatedInsp.TypeOfInspec.FindingTracking | {"__type":"ix:Field","For":"hRelatedInsp.TypeOfInspec.FindingTracking"} |
| E18 | InProgress | None | ActionNo | {"__type":"ix:Field","DisplayMode":"View, Edit","For":"ActionNo"} |
| E18 | InProgress | None | CheckListAnsAct | {"__type":"ix:Field","For":"CheckListAnsAct","Readonly":"true"} |
| E18 | InProgress | None | CPARTypeID | {"__type":"ix:Field","For":"CPARTypeID","Readonly":"true"} |
| E18 | InProgress | None | CPARActionReq | {"__type":"ix:Field","For":"CPARActionReq","Readonly":"True"} |
| E18 | InProgress | None | ActionOwner | {"__type":"ix:Field","EditReadOnly":"true","For":"ActionOwner","Readonly":"True"} |
| E18 | InProgress | None | DueDate | {"__type":"ix:Field","EditReadOnly":"true","For":"DueDate","Readonly":"True","SpellCheck":"false"} |
| E18 | InProgress | None | CompletedBy | {"__type":"ix:Field","For":"CompletedBy"} |
| E18 | InProgress | None | CompletionDate | {"__type":"ix:Field","For":"CompletionDate","SpellCheck":"false"} |
| E18 | InProgress | None | CompletionNotes | {"__type":"ix:Field","For":"CompletionNotes","Span":"true","SpellCheck":"false"} |
| E18 | All / unspecified | None | hRelatedInsp.TypeOfInspec.FindingTracking | {"__type":"ix:Field","For":"hRelatedInsp.TypeOfInspec.FindingTracking"} |
| E18 | All / unspecified | None | ActionNo | {"__type":"ix:Field","DisplayMode":"View, Edit","For":"ActionNo"} |
| E18 | All / unspecified | None | CheckListAnsAct | {"__type":"ix:Field","For":"CheckListAnsAct","Readonly":"true"} |
| E18 | All / unspecified | None | CPARTypeID | {"__type":"ix:Field","For":"CPARTypeID","Readonly":"True"} |
| E18 | All / unspecified | None | CPARActionReq | {"__type":"ix:Field","For":"CPARActionReq","Readonly":"True","Span":"true","SpellCheck":"false"} |
| E18 | All / unspecified | None | ActionOwner | {"__type":"ix:Field","For":"ActionOwner","Readonly":"True"} |
| E18 | All / unspecified | None | DueDate | {"__type":"ix:Field","For":"DueDate","Readonly":"True"} |
| E18 | All / unspecified | None | CompletedBy | {"__type":"ix:Field","For":"CompletedBy","Readonly":"True"} |
| E18 | All / unspecified | None | CompletionDate | {"__type":"ix:Field","For":"CompletionDate","Readonly":"True"} |
| E18 | All / unspecified | None | CompletionNotes | {"__type":"ix:Field","For":"CompletionNotes","Readonly":"True","Span":"true"} |
| E18 | All / unspecified | None | RelatedQstions | {"__type":"ix:Field","For":"RelatedQstions","Span":"true"} |
| E39 | All / unspecified | None | Location | {"__type":"ix:Field","For":"Location"} |
| E39 | All / unspecified | None | ActionNo | {"__type":"ix:Field","For":"ActionNo"} |
| E39 | All / unspecified | None | CompletedBy | {"__type":"ix:Field","For":"CompletedBy"} |
| E39 | All / unspecified | None | CompletionDate | {"__type":"ix:Field","For":"CompletionDate"} |
| E39 | All / unspecified | None | CompletionNotes | {"__type":"ix:Field","For":"CompletionNotes"} |
| E39 | All / unspecified | None | CPARActionReq | {"__type":"ix:Field","For":"CPARActionReq"} |
| E39 | All / unspecified | None | CPARTypeID | {"__type":"ix:Field","For":"CPARTypeID"} |
| E39 | All / unspecified | None | DueDate | {"__type":"ix:Field","For":"DueDate"} |
| E39 | All / unspecified | None | ReportedBy | {"__type":"ix:Field","For":"ReportedBy"} |
| E39 | All / unspecified | None | ReportedOn | {"__type":"ix:Field","For":"ReportedOn"} |
| E39 | All / unspecified | None | PersonResp | {"__type":"ix:Field","For":"PersonResp"} |
| E39 | All / unspecified | None | NbActivites | {"__type":"ix:Field","For":"NbActivites"} |
| E39 | All / unspecified | None | MActivitesOrder | {"__type":"ix:Field","For":"MActivitesOrder"} |
| E39 | All / unspecified | None | Template | {"__type":"ix:Field","For":"Template"} |
| E39 | All / unspecified | None | NbOpenActivit | {"__type":"ix:Field","For":"NbOpenActivit"} |
| E39 | All / unspecified | None | ActivitProgress | {"__type":"ix:Field","For":"ActivitProgress"} |
| E39 | All / unspecified | None | ReviewerComment | {"__type":"ix:Field","For":"ReviewerComment"} |
| E39 | All / unspecified | None | ReviewType | {"__type":"ix:Field","For":"ReviewType"} |
| E39 | All / unspecified | None | ActivitiesStart | {"__type":"ix:Field","For":"ActivitiesStart"} |
| E39 | All / unspecified | None | StartDate | {"__type":"ix:Field","For":"StartDate"} |
| E39 | All / unspecified | None | NCR | {"__type":"ix:Field","For":"NCR"} |
| E39 | All / unspecified | None | ProvenEffective | {"__type":"ix:Field","For":"ProvenEffective"} |
| E39 | All / unspecified | None | VOCAbstract | {"__type":"ix:Field","For":"VOCAbstract"} |
| E39 | All / unspecified | None | RiskAbs | {"__type":"ix:Field","For":"RiskAbs"} |
| E39 | All / unspecified | None | AssessResults | {"__type":"ix:Field","For":"AssessResults"} |
| E46 | All / unspecified | None | PubChecklist.Checklist.Title | {"__type":"ix:Field","For":"PubChecklist.Checklist.Title"} |
| E46 | All / unspecified | None | CommtoReviewer2 | {"__type":"ix:Field","For":"CommtoReviewer2"} |
| E46 | All / unspecified | None | IPReview2 | {"__type":"ix:Field","For":"IPReview2"} |
| E112 | All / unspecified | None | ChoiceList | {"__type":"ix:Field","For":"ChoiceList","SpellCheck":"false"} |
| E112 | All / unspecified | None | Reference | {"__type":"ix:Field","For":"Reference"} |
| E112 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E112 | All / unspecified | None | Value | {"__type":"ix:Field","For":"Value"} |
| E112 | All / unspecified | None | IsNA | {"__type":"ix:Field","For":"IsNA"} |
| E112 | All / unspecified | None | BColor | {"__type":"ix:Field","For":"BColor"} |
| E112 | All / unspecified | None | TColor | {"__type":"ix:Field","For":"TColor"} |
| E112 | All / unspecified | None | Css | {"__type":"ix:Field","For":"Css","Span":"true","Visible":"false"} |
| E112 | All / unspecified | None | MobileAction | {"__type":"ix:Field","For":"MobileAction","Visible":"false"} |
| E148 | Draft | None | PlaDisplayField | {"__type":"ix:Field","For":"PlaDisplayField"} |
| E148 | Draft | None | ChecklistAnswer | {"__type":"ix:Field","Caption":"Inspection","For":"ChecklistAnswer","Readonly":"true","ResourceKey":"Field0","Span":"true","meta:resourcekey":"Field0"} |
| E148 | Draft | None | CPARTypeID | {"__type":"ix:Field","For":"CPARTypeID"} |
| E148 | Draft | None | CPARActionReq | {"__type":"ix:Field","For":"CPARActionReq","IsMandatory":"True","Span":"true"} |
| E148 | Draft | None | ActionOwner | {"__type":"ix:Field","For":"ActionOwner"} |
| E148 | Draft | None | DueDate | {"__type":"ix:Field","For":"DueDate","IsMandatory":"True","SpellCheck":"false"} |
| E148 | Draft | None | HelperReleaseAP | {"__type":"ix:Field","For":"HelperReleaseAP"} |
| E148 | Draft | None | QuestionList | {"__type":"ix:Field","For":"QuestionList"} |
| E148 | Draft | None | hRelatedInsp | {"__type":"ix:Field","For":"hRelatedInsp"} |
| E148 | Draft | None | AlBeenCorrected | {"__type":"ix:Field","For":"AlBeenCorrected"} |
| E148 | InProgress | None | ChecklistAnswer | {"__type":"ix:Field","Caption":"Inspection","For":"ChecklistAnswer","Readonly":"true","ResourceKey":"Field1","Span":"true","meta:resourcekey":"Field1"} |
| E148 | InProgress | None | CPARTypeID | {"__type":"ix:Field","For":"CPARTypeID","Readonly":"true"} |
| E148 | InProgress | None | CPARActionReq | {"__type":"ix:Field","For":"CPARActionReq","Readonly":"True","Span":"true","SpellCheck":"false"} |
| E148 | InProgress | None | CompletedBy | {"__type":"ix:Field","For":"CompletedBy"} |
| E148 | InProgress | None | CompletionDate | {"__type":"ix:Field","For":"CompletionDate"} |
| E148 | InProgress | None | CompletionNotes | {"__type":"ix:Field","For":"CompletionNotes","Span":"true","SpellCheck":"false"} |
| E148 | All / unspecified | None | ChecklistAnswer | {"__type":"ix:Field","Caption":"Inspection","For":"ChecklistAnswer","Readonly":"true","ResourceKey":"Field2","Span":"true","meta:resourcekey":"Field2"} |
| E148 | All / unspecified | None | CPARTypeID | {"__type":"ix:Field","For":"CPARTypeID","Readonly":"True"} |
| E148 | All / unspecified | None | CPARActionReq | {"__type":"ix:Field","For":"CPARActionReq","Readonly":"True","Span":"true","SpellCheck":"false"} |
| E148 | All / unspecified | None | ActionOwner | {"__type":"ix:Field","For":"ActionOwner","Readonly":"True"} |
| E148 | All / unspecified | None | DueDate | {"__type":"ix:Field","For":"DueDate","Readonly":"True"} |
| E148 | All / unspecified | None | CompletedBy | {"__type":"ix:Field","For":"CompletedBy","Readonly":"True"} |
| E148 | All / unspecified | None | CompletionDate | {"__type":"ix:Field","For":"CompletionDate","Readonly":"True"} |
| E148 | All / unspecified | None | CompletionNotes | {"__type":"ix:Field","For":"CompletionNotes","Readonly":"True","Span":"true"} |
| E220 | All / unspecified | None | QuestionRef | {"__type":"ix:Field","For":"QuestionRef"} |
| E220 | All / unspecified | None | Question | {"__type":"ix:Field","For":"Question"} |
| E220 | All / unspecified | None | Order | {"__type":"ix:Field","For":"Order"} |
| E220 | All / unspecified | None | Content | {"__type":"ix:Field","For":"Content","SpellCheck":"false"} |
| E220 | All / unspecified | None | Guideline | {"__type":"ix:Field","For":"Guideline"} |
| E220 | All / unspecified | None | Section | {"__type":"ix:Field","For":"Section"} |
| E220 | All / unspecified | None | AnswerType | {"__type":"ix:Field","For":"AnswerType"} |
| E220 | All / unspecified | None | ChoiceList | {"__type":"ix:Field","For":"ChoiceList"} |
| E220 | All / unspecified | None | AnswerRequired | {"__type":"ix:Field","For":"AnswerRequired"} |
| E220 | All / unspecified | None | AllowNA | {"__type":"ix:Field","For":"AllowNA"} |
| E220 | All / unspecified | None | ComReqIfNA | {"__type":"ix:Field","For":"ComReqIfNA"} |
| E220 | All / unspecified | None | ComReqChoices | {"__type":"ix:Field","For":"ComReqChoices"} |
| E220 | All / unspecified | None | FindReqChoices | {"__type":"ix:Field","For":"FindReqChoices"} |
| E220 | All / unspecified | None | ActReqChoices | {"__type":"ix:Field","For":"ActReqChoices"} |
| E284 | All / unspecified | None | GridCustomCode | {"__type":"ix:Field","For":"GridCustomCode","CaptionPosition":"top"} |
| E362 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E362 | All / unspecified | None | RecordNo | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"RecordNo"} |
| E362 | All / unspecified | None | Sort | {"__type":"ix:Field","For":"Sort"} |
| E362 | All / unspecified | None | Active | {"__type":"ix:Field","For":"Active"} |
| E398 | All / unspecified | None | ChecklistType | {"__type":"ix:Field","For":"ChecklistType"} |
| E398 | All / unspecified | None | Section | {"__type":"ix:Field","For":"Section"} |
| E398 | All / unspecified | None | AnswerType | {"__type":"ix:Field","For":"AnswerType"} |
| E398 | All / unspecified | None | ChoiceList | {"__type":"ix:Field","For":"ChoiceList"} |
| E398 | All / unspecified | None | UseExisting | {"__type":"ix:Field","For":"UseExisting"} |
| E398 | All / unspecified | None | HelperChecklist | {"__type":"ix:Field","For":"HelperChecklist"} |
| E398 | All / unspecified | None | ExistingSection | {"__type":"ix:Field","For":"ExistingSection"} |
| E398 | All / unspecified | None | AbsoluteOrder | {"__type":"ix:Field","For":"AbsoluteOrder"} |
| E426 | All / unspecified | None | Section | {"__type":"ix:Field","For":"Section"} |
| E426 | All / unspecified | None | ChecklistAnswer | {"__type":"ix:Field","For":"ChecklistAnswer"} |
| E426 | All / unspecified | None | Sort | {"__type":"ix:Field","For":"Sort"} |
| E426 | All / unspecified | None | CheckAnswerGUID | {"__type":"ix:Field","For":"CheckAnswerGUID"} |
| E439 | All / unspecified | None | Location | {"__type":"ix:Field","For":"Location","EditAs":"EntitySelector","DisplayMode":"Create"} |
| E439 | All / unspecified | None | Location | {"__type":"ix:Field","For":"Location","DisplayAs":"Label","DisplayMode":"View,Edit","Readonly":"true"} |
| E439 | All / unspecified | None | RecordNo | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"RecordNo"} |
| E439 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name","EditAs":"textbox","IsMandatory":"true"} |
| E439 | All / unspecified | None | Comments | {"__type":"ix:Field","For":"Comments"} |
| E439 | All / unspecified | None | PubChecklist | {"__type":"ix:Field","For":"PubChecklist","DisplayMode":"Create","IsMandatory":"true"} |
| E468 | All / unspecified | None | RecordNo | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"RecordNo"} |
| E468 | All / unspecified | None | TemplaGenerator | {"__type":"ix:Field","For":"TemplaGenerator"} |
| E468 | All / unspecified | None | Application | {"__type":"ix:Field","For":"Application"} |
| E468 | All / unspecified | None | Form | {"__type":"ix:Field","For":"Form"} |
| E468 | All / unspecified | None | Stage | {"__type":"ix:Field","For":"Stage"} |
| E468 | All / unspecified | None | Not exported | {"__type":"ix:Field"} |
| E468 | All / unspecified | None | InstrTextHeader | {"__type":"ix:Field","For":"InstrTextHeader"} |
| E468 | All / unspecified | None | InstructiText | {"__type":"ix:Field","For":"InstructiText"} |
| E468 | All / unspecified | None | Not exported | {"__type":"ix:Field"} |
| E468 | All / unspecified | None | InstruPanelCode | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"InstruPanelCode"} |
| E497 | All / unspecified | None | ChecklistType | {"__type":"ix:Field","For":"ChecklistType","Span":"true"} |
| E497 | All / unspecified | None | AutoCode | {"__type":"ix:Field","For":"AutoCode","DisplayMode":"Create"} |
| E497 | All / unspecified | None | AutoCode | {"__type":"ix:Field","For":"AutoCode","DisplayMode":"View,Edit","ReadOnly":"true"} |
| E497 | All / unspecified | None | Reference | {"__type":"ix:Field","For":"Reference"} |
| E497 | All / unspecified | None | Reference | {"__type":"ix:Field","For":"Reference","ID":"ReferenceAuto","ReadOnly":"true","DisplayMode":"View,Edit"} |
| E497 | All / unspecified | None | Location | {"__type":"ix:Field","For":"Location","EditAs":"EntitySelector","DisplayAs":"string"} |
| E497 | All / unspecified | None | Title | {"__type":"ix:Field","For":"Title","Span":"true"} |
| E497 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description","Span":"true"} |
| E497 | All / unspecified | None | EnableSections | {"__type":"ix:Field","For":"EnableSections","IsMandatory":"false"} |
| E497 | All / unspecified | None | EnableScoring | {"__type":"ix:Field","For":"EnableScoring","IsMandatory":"false"} |
| E497 | All / unspecified | None | Active | {"__type":"ix:Field","For":"Active"} |
| E600 | All / unspecified | None | ManualClose | {"__type":"ix:Field","For":"ManualClose","Span":"true","SpellCheck":"false"} |
| E600 | All / unspecified | None | ManCloseCom | {"__type":"ix:Field","For":"ManCloseCom","SpellCheck":"false"} |
| E600 | All / unspecified | None | ActionPlanCheck | {"__type":"ix:Field","For":"ActionPlanCheck"} |
| E613 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E613 | All / unspecified | None | RecordNo | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"RecordNo"} |
| E613 | All / unspecified | None | Sort | {"__type":"ix:Field","For":"Sort"} |
| E613 | All / unspecified | None | Active | {"__type":"ix:Field","For":"Active"} |
| E667 | All / unspecified | None | Key | {"__type":"ix:Field","For":"Key"} |
| E667 | All / unspecified | None | Comments | {"__type":"ix:Field","For":"Comments"} |
| E667 | All / unspecified | None | Value | {"__type":"ix:Field","For":"Value"} |
| E788 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E788 | All / unspecified | None | RecordNo | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"RecordNo"} |
| E788 | All / unspecified | None | Active | {"__type":"ix:Field","For":"Active"} |
| E788 | All / unspecified | None | Sort | {"__type":"ix:Field","For":"Sort"} |
| E857 | All / unspecified | None | MassUpChoice | {"__type":"ix:Field","Caption":"Answer","For":"MassUpChoice","ResourceKey":"Field0","SpellCheck":"false","meta:resourcekey":"Field0"} |
| E857 | All / unspecified | None | HelperFinding | {"__type":"ix:Field","For":"HelperFinding"} |
| E857 | All / unspecified | None | ActionPlanAdded | {"__type":"ix:Field","For":"ActionPlanAdded"} |
| E857 | All / unspecified | None | PlValidationMet | {"__type":"ix:Field","For":"PlValidationMet"} |
| E857 | All / unspecified | None | WarninIndicator | {"__type":"ix:Field","For":"WarninIndicator"} |
| E857 | All / unspecified | None | UpdatonCreation | {"__type":"ix:Field","For":"UpdatonCreation"} |
| E857 | All / unspecified | None | QuesSummaryText | {"__type":"ix:Field","For":"QuesSummaryText"} |
| E857 | All / unspecified | None | SectionAnswer | {"__type":"ix:Field","For":"SectionAnswer"} |
| E857 | All / unspecified | None | CrSectionAnswer | {"__type":"ix:Field","For":"CrSectionAnswer"} |
| E857 | All / unspecified | None | AbsoluteOrder | {"__type":"ix:Field","For":"AbsoluteOrder"} |
| E904 | All / unspecified | None | ChecklistAnswer | {"__type":"ix:Field","DisplayAs":"Link","DisplayMode":"View","For":"ChecklistAnswer","Span":"true"} |
| E904 | All / unspecified | None | PubQuestion.Section | {"__type":"ix:Field","For":"PubQuestion.Section","Span":"true"} |
| E904 | All / unspecified | None | PubQuestion.Content | {"__type":"ix:Field","DisplayAs":"html","For":"PubQuestion.Content","Span":"true"} |
| E904 | All / unspecified | None | PubQuestion.Guideline | {"__type":"ix:Field","For":"PubQuestion.Guideline","Span":"true"} |
| E904 | All / unspecified | None | PubQuestion.AnswerType | {"__type":"ix:Field","For":"PubQuestion.AnswerType","IsVisible":"false"} |
| E904 | All / unspecified | None | PubQuestion.Question.UseReferences | {"__type":"ix:Field","For":"PubQuestion.Question.UseReferences","IsVisible":"false"} |
| E904 | All / unspecified | None | HelperFinding | {"__type":"ix:Field","For":"HelperFinding","isVisible":"False"} |
| E904 | All / unspecified | None | ActionPlanAdded | {"__type":"ix:Field","For":"ActionPlanAdded"} |
| E904 | All / unspecified | None | PlValidationMet | {"__type":"ix:Field","For":"PlValidationMet"} |
| E904 | All / unspecified | None | WarninIndicator | {"__type":"ix:Field","For":"WarninIndicator"} |
| E904 | All / unspecified | None | UpdatonCreation | {"__type":"ix:Field","For":"UpdatonCreation"} |
| E904 | All / unspecified | None | QuesSummaryText | {"__type":"ix:Field","For":"QuesSummaryText"} |
| E904 | All / unspecified | None | SectionAnswer | {"__type":"ix:Field","For":"SectionAnswer"} |
| E904 | All / unspecified | None | CrSectionAnswer | {"__type":"ix:Field","For":"CrSectionAnswer"} |
| E904 | All / unspecified | None | AbsoluteOrder | {"__type":"ix:Field","For":"AbsoluteOrder"} |
| E904 | All / unspecified | None | PubQuestion.Question.References | {"__type":"ix:Field","CaptionPosition":"top","For":"PubQuestion.Question.References","Span":"true","SpellCheck":"false"} |
| E904 | All / unspecified | None | Choice | {"__type":"ix:Field","Caption":"Answer","For":"Choice","ResourceKey":"Field0","Span":"true","SpellCheck":"false","meta:resourcekey":"Field0"} |
| E904 | All / unspecified | None | Text | {"__type":"ix:Field","Caption":"Answer","For":"Text","ResourceKey":"Field1","Span":"true","SpellCheck":"false","meta:resourcekey":"Field1"} |
| E904 | All / unspecified | None | Float | {"__type":"ix:Field","Caption":"Answer","For":"Float","ResourceKey":"Field2","Span":"true","SpellCheck":"false","meta:resourcekey":"Field2"} |
| E904 | All / unspecified | None | Date | {"__type":"ix:Field","Caption":"Answer","For":"Date","ResourceKey":"Field3","Span":"true","SpellCheck":"false","meta:resourcekey":"Field3"} |
| E904 | All / unspecified | None | Checkbox | {"__type":"ix:Field","Caption":"Answer","For":"Checkbox","ResourceKey":"Field4","Span":"true","SpellCheck":"false","meta:resourcekey":"Field4"} |
| E904 | All / unspecified | None | Choices | {"__type":"ix:Field","Caption":"Answer","For":"Choices","ResourceKey":"Field5","Span":"true","SpellCheck":"false","meta:resourcekey":"Field5"} |
| E904 | All / unspecified | None | Comments | {"__type":"ix:Field","For":"Comments","Span":"true"} |
| E954 | All / unspecified | None | PubQuestion.Content | {"__type":"ix:Field","For":"PubQuestion.Content"} |
| E972 | All / unspecified | None | HelperChecklist.EnableSections | {"__type":"ix:Field","For":"HelperChecklist.EnableSections"} |
| E972 | All / unspecified | None | HelperChecklist.ChecklistType.FindingTracking | {"__type":"ix:Field","For":"HelperChecklist.ChecklistType.FindingTracking"} |
| E972 | All / unspecified | None | ChecklistType | {"__type":"ix:Field","For":"ChecklistType","ReadOnly":"true","SpellCheck":"false"} |
| E972 | All / unspecified | None | QuestionRef | {"__type":"ix:Field","For":"QuestionRef"} |
| E972 | All / unspecified | None | UseExisting | {"__type":"ix:Field","For":"UseExisting"} |
| E972 | All / unspecified | None | ExistingSection | {"__type":"ix:Field","For":"ExistingSection"} |
| E972 | All / unspecified | None | Section | {"__type":"ix:Field","EditAs":"SmallTextArea","For":"Section"} |
| E972 | All / unspecified | None | Order | {"__type":"ix:Field","For":"Order"} |
| E972 | All / unspecified | None | Content | {"__type":"ix:Field","EditAs":"SmallTextArea","For":"Content","IsMandatory":"True"} |
| E972 | All / unspecified | None | Guideline | {"__type":"ix:Field","EditAs":"SmallTextArea","For":"Guideline"} |
| E972 | All / unspecified | None | AnswerRequired | {"__type":"ix:Field","For":"AnswerRequired"} |
| E972 | All / unspecified | None | AnswerType | {"__type":"ix:Field","For":"AnswerType","IsMandatory":"True"} |
| E972 | All / unspecified | None | ChoiceList | {"__type":"ix:Field","For":"ChoiceList"} |
| E972 | All / unspecified | None | DefaultChoice | {"__type":"ix:Field","For":"DefaultChoice"} |
| E972 | All / unspecified | None | DefaultChoices | {"__type":"ix:Field","For":"DefaultChoices"} |
| E972 | All / unspecified | None | DefaultBool | {"__type":"ix:Field","For":"DefaultBool"} |
| E972 | All / unspecified | None | AllowNA | {"__type":"ix:Field","For":"AllowNA"} |
| E972 | All / unspecified | None | Not exported | {"__type":"ix:Field","Span":"true"} |
| E972 | All / unspecified | None | UseReferences | {"__type":"ix:Field","For":"UseReferences"} |
| E972 | All / unspecified | None | References | {"__type":"ix:Field","CaptionPosition":"top","For":"References"} |
| E994 | All / unspecified | None | Code | {"__type":"ix:Field","For":"Code"} |
| E994 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name","SpellCheck":"false"} |
| E994 | All / unspecified | None | SVGCode | {"__type":"ix:Field","For":"SVGCode"} |
| E1027 | All / unspecified | None | VisDepNoAns | {"__type":"ix:Field","For":"VisDepNoAns"} |
| E1048 | All / unspecified | None | Title | {"__type":"ix:Field","For":"Title"} |
| E1048 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description"} |
| E1120 | All / unspecified | None | Caption | {"__type":"ix:Field","For":"Caption","SpellCheck":"false"} |
| E1120 | All / unspecified | None | Value | {"__type":"ix:Field","For":"Value"} |
| E1154 | All / unspecified | None | ChecklistAnswer | {"__type":"ix:Field","For":"ChecklistAnswer","Readonly":"true","Span":"true"} |
| E1154 | All / unspecified | None | Severity | {"__type":"ix:Field","EditAs":"radiogroup","For":"Severity","Span":"true","Visible":"false"} |
| E1154 | All / unspecified | None | FindingStatus.Code | {"__type":"ix:Field","Caption":"Finding Status","For":"FindingStatus.Code","meta:resourcekey":"Field1","ResourceKey":"Field1"} |
| E1154 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description","IsMandatory":"True","Span":"true"} |
| E1154 | All / unspecified | None | ImmediateAction | {"__type":"ix:Field","Caption":"Suggested Action Plan","For":"ImmediateAction","Span":"true","meta:resourcekey":"Field2","ResourceKey":"Field2"} |
| E1154 | All / unspecified | None | DueIn | {"__type":"ix:Field","DisplayMode":"Create","For":"DueIn"} |
| E1154 | All / unspecified | None | ResponseDue | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"ResponseDue"} |
| E1154 | All / unspecified | None | ManualClose | {"__type":"ix:Field","For":"ManualClose"} |
| E1154 | All / unspecified | None | ManCloseCom | {"__type":"ix:Field","For":"ManCloseCom"} |
| E1154 | All / unspecified | None | QuestionAnswers | {"__type":"ix:Field","For":"QuestionAnswers","Span":"true"} |
| E1269 | All / unspecified | None | MasterChecklist | {"__type":"ix:Field","For":"MasterChecklist","IsMandatory":"True","SpellCheck":"false","DisplayAs":"Link"} |
| E1269 | All / unspecified | None | RecordNo | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"RecordNo"} |
| E1269 | All / unspecified | None | PubChecklist | {"__type":"ix:Field","DisplayMode":"Create","EditAs":"Dropdown","For":"PubChecklist","IsMandatory":"true"} |
| E1269 | All / unspecified | None | PubChecklist | {"__type":"ix:Field","Visible":"False","For":"PubChecklist","DisplayMode":"View,Edit"} |
| E1269 | All / unspecified | None | Comments | {"__type":"ix:Field","For":"Comments","Span":"true","SpellCheck":"false"} |
| E1393 | All / unspecified | None | Location | {"__type":"ix:Field","For":"Location"} |
| E1393 | All / unspecified | None | CPARActionReq | {"__type":"ix:Field","For":"CPARActionReq"} |
| E1393 | All / unspecified | None | ActionNo | {"__type":"ix:Field","For":"ActionNo"} |
| E1393 | All / unspecified | None | CPARTypeID | {"__type":"ix:Field","For":"CPARTypeID"} |
| E1393 | All / unspecified | None | CompletionDate | {"__type":"ix:Field","For":"CompletionDate"} |
| E1393 | All / unspecified | None | CompletedBy | {"__type":"ix:Field","For":"CompletedBy"} |
| E1393 | All / unspecified | None | DueDate | {"__type":"ix:Field","For":"DueDate"} |
| E1393 | All / unspecified | None | CompletionNotes | {"__type":"ix:Field","For":"CompletionNotes"} |
| E1393 | All / unspecified | None | ReportedBy | {"__type":"ix:Field","For":"ReportedBy"} |
| E1393 | All / unspecified | None | ReportedOn | {"__type":"ix:Field","For":"ReportedOn"} |
| E1393 | All / unspecified | None | IsCompleted | {"__type":"ix:Field","For":"IsCompleted"} |
| E1393 | All / unspecified | None | ToCostofActions | {"__type":"ix:Field","For":"ToCostofActions"} |
| E1393 | All / unspecified | None | ActualCost | {"__type":"ix:Field","For":"ActualCost"} |
| E1393 | All / unspecified | None | ASourceLocation | {"__type":"ix:Field","For":"ASourceLocation"} |
| E1393 | All / unspecified | None | ActioSourceType | {"__type":"ix:Field","For":"ActioSourceType"} |
| E1393 | All / unspecified | None | ActionPlanType | {"__type":"ix:Field","For":"ActionPlanType"} |
| E1486 | All / unspecified | None | Location | {"__type":"ix:Field","For":"Location"} |
| E1486 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description"} |
| E1486 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E1486 | All / unspecified | None | Date | {"__type":"ix:Field","For":"Date"} |
| E1486 | All / unspecified | None | EndDate | {"__type":"ix:Field","For":"EndDate"} |
| E1486 | All / unspecified | None | Severity | {"__type":"ix:Field","For":"Severity"} |
| E1486 | All / unspecified | None | SuspectedCause | {"__type":"ix:Field","For":"SuspectedCause"} |
| E1486 | All / unspecified | None | ImmediateAction | {"__type":"ix:Field","For":"ImmediateAction"} |
| E1486 | All / unspecified | None | DateReported | {"__type":"ix:Field","For":"DateReported"} |
| E1486 | All / unspecified | None | ReportedBy | {"__type":"ix:Field","For":"ReportedBy"} |
| E1486 | All / unspecified | None | EstimatedCost | {"__type":"ix:Field","For":"EstimatedCost"} |
| E1486 | All / unspecified | None | ParentEvent | {"__type":"ix:Field","For":"ParentEvent"} |
| E1486 | All / unspecified | None | Investigator | {"__type":"ix:Field","For":"Investigator"} |
| E1486 | All / unspecified | None | InvestDueDate | {"__type":"ix:Field","For":"InvestDueDate"} |
| E1486 | All / unspecified | None | FinalApprover | {"__type":"ix:Field","For":"FinalApprover"} |
| E1486 | All / unspecified | None | InvestResults | {"__type":"ix:Field","For":"InvestResults"} |
| E1486 | All / unspecified | None | FinalAppNotes | {"__type":"ix:Field","For":"FinalAppNotes"} |
| E1486 | All / unspecified | None | DateApproved | {"__type":"ix:Field","For":"DateApproved"} |
| E1486 | All / unspecified | None | DatInvestigated | {"__type":"ix:Field","For":"DatInvestigated"} |
| E1486 | All / unspecified | None | EventType | {"__type":"ix:Field","For":"EventType"} |
| E1486 | All / unspecified | None | NBCAPAs | {"__type":"ix:Field","For":"NBCAPAs"} |
| E1486 | All / unspecified | None | NBOpenedCAPAs | {"__type":"ix:Field","For":"NBOpenedCAPAs"} |
| E1486 | All / unspecified | None | TeamLeader | {"__type":"ix:Field","For":"TeamLeader"} |
| E1486 | All / unspecified | None | Summary | {"__type":"ix:Field","For":"Summary"} |
| E1486 | All / unspecified | None | TotalCost | {"__type":"ix:Field","For":"TotalCost"} |
| E1486 | All / unspecified | None | CorrectiActions | {"__type":"ix:Field","For":"CorrectiActions"} |
| E1513 | All / unspecified | None | Order | {"__type":"ix:Field","For":"Order"} |
| E1513 | All / unspecified | None | Content | {"__type":"ix:Field","For":"Content","SpellCheck":"false"} |
| E1513 | All / unspecified | None | Guideline | {"__type":"ix:Field","For":"Guideline"} |
| E1513 | All / unspecified | None | Section | {"__type":"ix:Field","For":"Section"} |
| E1513 | All / unspecified | None | AnswerType | {"__type":"ix:Field","For":"AnswerType"} |
| E1513 | All / unspecified | None | ChoiceList | {"__type":"ix:Field","For":"ChoiceList"} |
| E1513 | All / unspecified | None | Weight | {"__type":"ix:Field","For":"Weight"} |
| E1527 | All / unspecified | None | Location | {"__type":"ix:Field","For":"Location"} |
| E1527 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E1527 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description"} |
| E1527 | All / unspecified | None | RecordNo | {"__type":"ix:Field","For":"RecordNo"} |
| E1565 | All / unspecified | None | Reference | {"__type":"ix:Field","For":"Reference","Span":"true","SpellCheck":"false"} |
| E1565 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name","Span":"true","SpellCheck":"false"} |
| E1565 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description","Span":"true","SpellCheck":"false"} |
| E1565 | All / unspecified | None | Active | {"__type":"ix:Field","For":"Active","Span":"true","SpellCheck":"false"} |
| E1565 | All / unspecified | None | ComplValidation | {"__type":"ix:Field","For":"ComplValidation","Span":"true","SpellCheck":"false","isMandatory":"false"} |
| E1565 | All / unspecified | None | FindingTracking | {"__type":"ix:Field","For":"FindingTracking","isMandatory":"false"} |
| E1565 | All / unspecified | None | EquipmentList | {"__type":"ix:Field","For":"EquipmentList"} |
| E1565 | All / unspecified | None | EquipmMandatory | {"__type":"ix:Field","For":"EquipmMandatory"} |
| E1565 | All / unspecified | None | ELOptions | {"__type":"ix:Field","For":"ELOptions"} |
| E1565 | All / unspecified | None | EnabFirstReview | {"__type":"ix:Field","For":"EnabFirstReview","Span":"true","SpellCheck":"false"} |
| E1565 | All / unspecified | None | FirstReviewer | {"__type":"ix:Field","For":"FirstReviewer","Span":"true","SpellCheck":"false","Visible":"false"} |
| E1565 | All / unspecified | None | DforFirstReview | {"__type":"ix:Field","For":"DforFirstReview","Span":"true","SpellCheck":"false"} |
| E1565 | All / unspecified | None | PRMethod | {"__type":"ix:Field","For":"PRMethod"} |
| E1565 | All / unspecified | None | InspRoleOption | {"__type":"ix:Field","For":"InspRoleOption"} |
| E1565 | All / unspecified | None | Role | {"__type":"ix:Field","For":"Role"} |
| E1565 | All / unspecified | None | RoleName | {"__type":"ix:Field","For":"RoleName"} |
| E1565 | All / unspecified | None | Expression | {"__type":"ix:Field","For":"Expression"} |
| E1565 | All / unspecified | None | Not exported | {"__type":"ix:Field"} |
| E1565 | All / unspecified | None | EnaSecondReview | {"__type":"ix:Field","For":"EnaSecondReview"} |
| E1565 | All / unspecified | None | forSecondReview | {"__type":"ix:Field","Caption":"No. of Days for Second Review","For":"forSecondReview","meta:resourcekey":"Field0","ResourceKey":"Field0"} |
| E1565 | All / unspecified | None | PRMethodSndRev | {"__type":"ix:Field","Caption":"Method To Determine Person Responsible","For":"PRMethodSndRev","meta:resourcekey":"Field1","ResourceKey":"Field1"} |
| E1565 | All / unspecified | None | InspRoleOption2 | {"__type":"ix:Field","For":"InspRoleOption2","Caption":"New/Existing Role","meta:resourcekey":"Field5","ResourceKey":"Field5"} |
| E1565 | All / unspecified | None | Role2 | {"__type":"ix:Field","For":"Role2","Caption":"Role","meta:resourcekey":"Field3","ResourceKey":"Field3"} |
| E1565 | All / unspecified | None | RoleName2 | {"__type":"ix:Field","For":"RoleName2","Caption":"Role Name","meta:resourcekey":"Field4","ResourceKey":"Field4"} |
| E1565 | All / unspecified | None | Expression2 | {"__type":"ix:Field","Caption":"Expression","For":"Expression2","meta:resourcekey":"Field2","ResourceKey":"Field2"} |
| E1565 | All / unspecified | None | SecondReviewer | {"__type":"ix:Field","For":"SecondReviewer","IsVisible":"false"} |
| E1623 | All / unspecified | None | Workflow.CurrentStage.Name | {"__type":"ix:Field","For":"Workflow.CurrentStage.Name"} |
| E1623 | All / unspecified | None | Workflow.Status.Name | {"__type":"ix:Field","For":"Workflow.Status.Name"} |
| E1623 | All / unspecified | None | Workflow.WorkflowStatus | {"__type":"ix:Field","For":"Workflow.WorkflowStatus"} |
| E1623 | All / unspecified | None | HelperLocatio2 | {"__type":"ix:Field","For":"HelperLocatio2"} |
| E1623 | All / unspecified | None | FApprovalFields | {"__type":"ix:Field","For":"FApprovalFields"} |
| E1623 | All / unspecified | None | SApprovalFields | {"__type":"ix:Field","For":"SApprovalFields"} |
| E1623 | All / unspecified | None | ReleActionPlans | {"__type":"ix:Field","For":"ReleActionPlans"} |
| E1623 | All / unspecified | None | HelpeIsComplete | {"__type":"ix:Field","For":"HelpeIsComplete"} |
| E1623 | All / unspecified | None | IPCreate.InstruPanelCode | {"__type":"ix:Field","For":"IPCreate.InstruPanelCode"} |
| E1623 | All / unspecified | None | IPDraft.InstruPanelCode | {"__type":"ix:Field","For":"IPDraft.InstruPanelCode"} |
| E1623 | All / unspecified | None | IPInProgress.InstruPanelCode | {"__type":"ix:Field","For":"IPInProgress.InstruPanelCode"} |
| E1623 | All / unspecified | None | IPReview.InstruPanelCode | {"__type":"ix:Field","For":"IPReview.InstruPanelCode"} |
| E1623 | All / unspecified | None | TypeOfInspec.FindingTracking | {"__type":"ix:Field","For":"TypeOfInspec.FindingTracking"} |
| E1623 | All / unspecified | None | InspecChecklist.Checklist.EnableScoring | {"__type":"ix:Field","For":"InspecChecklist.Checklist.EnableScoring"} |
| E1623 | * | None | PointsAwarded | {"__type":"ix:Field","CaptionPosition":"Hidden","For":"PointsAwarded"} |
| E1623 | * | None | MaxPoints | {"__type":"ix:Field","CaptionPosition":"Hidden","For":"MaxPoints"} |
| E1623 | * | None | Score | {"__type":"ix:Field","CaptionPosition":"Hidden","For":"Score"} |
| E1623 | All / unspecified | None | RevieweDecision | {"__type":"ix:Field","For":"RevieweDecision","ReadOnly":"TRUE","Span":"true","SpellCheck":"false"} |
| E1623 | All / unspecified | None | RevieweComments | {"__type":"ix:Field","For":"RevieweComments","ReadOnly":"TRUE","Span":"true","SpellCheck":"false"} |
| E1623 | All / unspecified | None | CommetoReviewer | {"__type":"ix:Field","For":"CommetoReviewer"} |
| E1623 | All / unspecified | None | RevieweDecisio1 | {"__type":"ix:Field","For":"RevieweDecisio1","ReadOnly":"true","Span":"true","SpellCheck":"false"} |
| E1623 | All / unspecified | None | RevieweComment1 | {"__type":"ix:Field","For":"RevieweComment1","ReadOnly":"true","Span":"true","SpellCheck":"false"} |
| E1623 | All / unspecified | None | CommtoReviewer2 | {"__type":"ix:Field","For":"CommtoReviewer2","Caption":"Additional Comments to Reviewer","meta:resourcekey":"Field0","ResourceKey":"Field0"} |
| E1623 | All / unspecified | None | RecordNo | {"__type":"ix:Field","DisplayMode":"View, Edit","For":"RecordNo"} |
| E1623 | All / unspecified | None | Location | {"__type":"ix:Field","DisplayMode":"Create","EditAs":"EntitySelector","For":"Location","SpellCheck":"false"} |
| E1623 | All / unspecified | None | Location | {"__type":"ix:Field","DisplayAs":"Label","DisplayMode":"View, Edit","For":"Location","Readonly":"true"} |
| E1623 | All / unspecified | None | Name | {"__type":"ix:Field","DisplayMode":"Create","EditAs":"TextBox","For":"Name","SpellCheck":"false","ToolTipText":"will be automatically generated if left empty","Visible":"false","meta:resourcekey":"Field3","ResourceKey":"Field3"} |
| E1623 | All / unspecified | None | Name | {"__type":"ix:Field","DisplayMode":"View, Edit","EditAs":"TextBox","For":"Name","ID":"EditModeInspectionName1","IsMandatory":"true","SpellCheck":"false","Visible":"false"} |
| E1623 | All / unspecified | None | Name | {"__type":"ix:Field","DisplayMode":"View, Edit","EditAs":"TextBox","For":"Name","ID":"ReadOnlyInspectionName1","ReadOnly":"True","Visible":"false"} |
| E1623 | All / unspecified | None | Not exported | {"__type":"ix:Field","DisplayMode":"View,Edit","Span":"true"} |
| E1623 | All / unspecified | None | TypeOfInspec | {"__type":"ix:Field","DisplayMode":"Create","For":"TypeOfInspec","ID":"TypeOfInspecC","SpellCheck":"false"} |
| E1623 | All / unspecified | None | TypeOfInspec | {"__type":"ix:Field","DisplayMode":"View, Edit","For":"TypeOfInspec","ID":"TypeOfInspecE","Readonly":"True"} |
| E1623 | All / unspecified | None | Equipment | {"__type":"ix:Field","DisplayMode":"Create","For":"Equipment","ID":"EquipmentRelationC"} |
| E1623 | All / unspecified | None | EquipmentTxt | {"__type":"ix:Field","DisplayMode":"Create","For":"EquipmentTxt","ID":"EquipmentTextC"} |
| E1623 | All / unspecified | None | Equipment | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"Equipment","ID":"EquipmentRelationE"} |
| E1623 | All / unspecified | None | EquipmentTxt | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"EquipmentTxt","ID":"EquipmentTextE"} |
| E1623 | All / unspecified | None | InspecChecklist | {"__type":"ix:Field","DisplayMode":"Create","For":"InspecChecklist","isMandatory":"True"} |
| E1623 | All / unspecified | None | InspecChecklist | {"__type":"ix:Field","DisplayMode":"View, Edit","For":"InspecChecklist","ReadOnly":"true"} |
| E1623 | All / unspecified | None | Not exported | {"__type":"ix:Field","DisplayMode":"View,Edit","Span":"true"} |
| E1623 | All / unspecified | None | InspectionDate | {"__type":"ix:Field","For":"InspectionDate","ID":"EditModeStartDate1"} |
| E1623 | All / unspecified | None | InspectionDate | {"__type":"ix:Field","For":"InspectionDate","ID":"ReadOnlyStartDate1","ReadOnly":"true"} |
| E1623 | All / unspecified | None | PersResponsible | {"__type":"ix:Field","Caption":"Inspector","For":"PersResponsible","ID":"EditModePersonResponsible1","meta:resourcekey":"Field4","ResourceKey":"Field4"} |
| E1623 | All / unspecified | None | PersResponsible | {"__type":"ix:Field","Caption":"Inspector","For":"PersResponsible","ID":"ReadOnlyPersonResponsible1","ReadOnly":"true","meta:resourcekey":"Field5","ResourceKey":"Field5"} |
| E1623 | All / unspecified | None | Not exported | {"__type":"ix:Field","DisplayMode":"View,Edit","Span":"true"} |
| E1623 | All / unspecified | None | Workflow.RecurringSeries.Frequency | {"__type":"ix:Field","Caption":"Frequency","DisplayAs":"Recurrence","EditAs":"Recurrence","For":"Workflow.RecurringSeries.Frequency","ID":"EditModeRecurrence1","SpellCheck":"false","Visible":"false","meta:resourcekey":"Field1","ResourceKey":"Field1"} |
| E1623 | All / unspecified | None | Workflow.RecurringSeries.Frequency | {"__type":"ix:Field","Caption":"Frequency","DisplayAs":"Recurrence","For":"Workflow.RecurringSeries.Frequency","ID":"ReadOnlyRecurrence1","ReadOnly":"true","Visible":"false","meta:resourcekey":"Field2","ResourceKey":"Field2"} |
| E1623 | All / unspecified | None | Workflow.Status | {"__type":"ix:Field","For":"Workflow.Status","IsVisible":"false"} |
| E1623 | * | None | RecordNo | {"__type":"ix:Field","DisplayMode":"View, Edit","For":"RecordNo"} |
| E1623 | * | None | Location | {"__type":"ix:Field","DisplayMode":"Create","EditAs":"EntitySelector","For":"Location","SpellCheck":"false"} |
| E1623 | * | None | Location | {"__type":"ix:Field","DisplayAs":"Label","DisplayMode":"View, Edit","For":"Location","Readonly":"true"} |
| E1623 | * | None | Equipment | {"__type":"ix:Field","DisplayMode":"Create, Edit","For":"Equipment","IsMandatory":"true","SpellCheck":"false"} |
| E1623 | * | None | Equipment | {"__type":"ix:Field","DisplayMode":"View","For":"Equipment","IsMandatory":"true","ReadOnly":"true","SpellCheck":"false"} |
| E1623 | * | None | Equipment | {"__type":"ix:Field","DisplayMode":"Create, Edit","For":"Equipment","SpellCheck":"false"} |
| E1623 | * | None | Equipment | {"__type":"ix:Field","DisplayMode":"View","For":"Equipment","ReadOnly":"true","SpellCheck":"false"} |
| E1623 | * | None | EquipmentTxt | {"__type":"ix:Field","DisplayMode":"Create, Edit","For":"EquipmentTxt","IsMandatory":"true","SpellCheck":"false"} |
| E1623 | * | None | EquipmentTxt | {"__type":"ix:Field","DisplayMode":"View","For":"EquipmentTxt","IsMandatory":"true","ReadOnly":"true","SpellCheck":"false"} |
| E1623 | * | None | EquipmentTxt | {"__type":"ix:Field","DisplayMode":"Create, Edit","For":"EquipmentTxt","SpellCheck":"false"} |
| E1623 | * | None | EquipmentTxt | {"__type":"ix:Field","DisplayMode":"View","For":"EquipmentTxt","ReadOnly":"true","SpellCheck":"false"} |
| E1623 | * | None | Name | {"__type":"ix:Field","DisplayMode":"Create","EditAs":"TextBox","For":"Name","SpellCheck":"false","ToolTipText":"will be automatically generated if left empty","Visible":"false","meta:resourcekey":"Field3","ResourceKey":"Field3"} |
| E1623 | * | None | Name | {"__type":"ix:Field","DisplayMode":"View, Edit","EditAs":"TextBox","For":"Name","ID":"EditModeInspectionName2","IsMandatory":"true","SpellCheck":"false","Visible":"false"} |
| E1623 | * | None | Name | {"__type":"ix:Field","DisplayMode":"View, Edit","EditAs":"TextBox","For":"Name","ID":"ReadOnlyInspectionName2","ReadOnly":"True","Visible":"false"} |
| E1623 | * | None | TypeOfInspec | {"__type":"ix:Field","DisplayMode":"Create","For":"TypeOfInspec","SpellCheck":"false"} |
| E1623 | * | None | TypeOfInspec | {"__type":"ix:Field","DisplayMode":"View, Edit","For":"TypeOfInspec","Readonly":"True"} |
| E1623 | * | None | InspecChecklist | {"__type":"ix:Field","DisplayMode":"Create","For":"InspecChecklist","isMandatory":"True"} |
| E1623 | * | None | InspecChecklist | {"__type":"ix:Field","DisplayMode":"View, Edit","For":"InspecChecklist","ReadOnly":"true"} |
| E1623 | * | None | InspectionDate | {"__type":"ix:Field","For":"InspectionDate","ID":"EditModeStartDate"} |
| E1623 | * | None | PersResponsible | {"__type":"ix:Field","Caption":"Inspector","For":"PersResponsible","ID":"EditModePersonResponsible","meta:resourcekey":"Field4","ResourceKey":"Field4"} |
| E1623 | * | None | Workflow.RecurringSeries.Frequency | {"__type":"ix:Field","Caption":"Frequency","DisplayAs":"Recurrence","EditAs":"Recurrence","For":"Workflow.RecurringSeries.Frequency","ID":"EditModeRecurrence","SpellCheck":"false","Visible":"false","meta:resourcekey":"Field1","ResourceKey":"Field1"} |
| E1623 | * | None | Workflow.RecurringSeries.Frequency | {"__type":"ix:Field","Caption":"Frequency","DisplayAs":"Recurrence","For":"Workflow.RecurringSeries.Frequency","ID":"ReadOnlyRecurrence","ReadOnly":"true","Visible":"false","meta:resourcekey":"Field2","ResourceKey":"Field2"} |
| E1623 | * | None | Workflow.Status | {"__type":"ix:Field","For":"Workflow.Status","IsVisible":"false"} |
| E1623 | * | None | Reviewer | {"__type":"ix:Field","DisplayMode":"Create, Edit","For":"Reviewer","IsMandatory":"true"} |
| E1623 | * | None | Reviewer | {"__type":"ix:Field","DisplayMode":"View","For":"Reviewer","ReadOnly":"true"} |
| E1623 | ActionsPending | None | RevieweDecision | {"__type":"ix:Field","For":"RevieweDecision","IsMandatory":"TRUE","Span":"true","SpellCheck":"false"} |
| E1623 | ActionsPending | None | RevieweComments | {"__type":"ix:Field","For":"RevieweComments","Span":"true","SpellCheck":"false"} |
| E1623 | SecondReview | None | RevieweDecision | {"__type":"ix:Field","For":"RevieweDecision","ReadOnly":"true","Span":"true","SpellCheck":"false"} |
| E1623 | SecondReview | None | RevieweComments | {"__type":"ix:Field","For":"RevieweComments","ReadOnly":"true","Span":"true","SpellCheck":"false"} |
| E1623 | SecondReview | None | RevieweDecisio1 | {"__type":"ix:Field","For":"RevieweDecisio1","IsMandatory":"TRUE","Span":"true","SpellCheck":"false"} |
| E1623 | SecondReview | None | RevieweComment1 | {"__type":"ix:Field","For":"RevieweComment1","Span":"true","SpellCheck":"false"} |
| E1623 | All / unspecified | None | RevieweDecision | {"__type":"ix:Field","For":"RevieweDecision","ReadOnly":"TRUE","Span":"true","SpellCheck":"false"} |
| E1623 | All / unspecified | None | RevieweComments | {"__type":"ix:Field","For":"RevieweComments","ReadOnly":"TRUE","Span":"true","SpellCheck":"false"} |
| E1623 | All / unspecified | None | RevieweDecisio1 | {"__type":"ix:Field","For":"RevieweDecisio1","ReadOnly":"true","Span":"true","SpellCheck":"false"} |
| E1623 | All / unspecified | None | RevieweComment1 | {"__type":"ix:Field","For":"RevieweComment1","ReadOnly":"true","Span":"true","SpellCheck":"false"} |
| E1699 | All / unspecified | None | Code | {"__type":"ix:Field","For":"Code","Span":"true","SpellCheck":"false"} |
| E1699 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name","Span":"true","SpellCheck":"false"} |
| E1699 | All / unspecified | None | TC | {"__type":"ix:Field","For":"TC"} |
| E1699 | All / unspecified | None | BC | {"__type":"ix:Field","For":"BC"} |
| E1699 | All / unspecified | None | Icon | {"__type":"ix:Field","For":"Icon"} |
| E1730 | All / unspecified | None | Reference | {"__type":"ix:Field","For":"Reference"} |
| E1730 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name","SpellCheck":"false"} |
| E1730 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description"} |
| E1753 | All / unspecified | None | ChecklistType | {"__type":"ix:Field","For":"ChecklistType"} |
| E1753 | All / unspecified | None | Reference | {"__type":"ix:Field","For":"Reference"} |
| E1753 | All / unspecified | None | Title | {"__type":"ix:Field","For":"Title"} |
| E1753 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description"} |
| E1753 | All / unspecified | None | EnableSections | {"__type":"ix:Field","For":"EnableSections"} |
| E1753 | All / unspecified | None | EnableScoring | {"__type":"ix:Field","For":"EnableScoring"} |
| E1753 | All / unspecified | None | AutoCode | {"__type":"ix:Field","For":"AutoCode"} |
| E1773 | All / unspecified | None | ChecklistType | {"__type":"ix:Field","For":"ChecklistType"} |
| E1773 | All / unspecified | None | EnableSections | {"__type":"ix:Field","For":"EnableSections"} |
| E1773 | All / unspecified | None | EnableScoring | {"__type":"ix:Field","For":"EnableScoring"} |
| E1773 | All / unspecified | None | AutoCode | {"__type":"ix:Field","For":"AutoCode"} |
| E1824 | All / unspecified | None | CaleIconGeneral | {"__type":"ix:Field","For":"CaleIconGeneral"} |
| E1824 | All / unspecified | None | ClocIconGeneral | {"__type":"ix:Field","For":"ClocIconGeneral"} |
| E1824 | All / unspecified | None | DueIconWorkflow | {"__type":"ix:Field","For":"DueIconWorkflow"} |
| E1824 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E1824 | All / unspecified | None | PerIconWorkflow | {"__type":"ix:Field","For":"PerIconWorkflow"} |
| E1824 | All / unspecified | None | StaIconWorkflow | {"__type":"ix:Field","For":"StaIconWorkflow"} |
| E1824 | All / unspecified | None | StruIconGeneral | {"__type":"ix:Field","For":"StruIconGeneral"} |
| E1862 | All / unspecified | None | Location | {"__type":"ix:Field","For":"Location","DisplayAs":"String","EditAs":"EntitySelector"} |
| E1862 | All / unspecified | None | RecordNo | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"RecordNo"} |
| E1862 | All / unspecified | None | Name | {"__type":"ix:Field","EditAs":"TextBox","For":"Name","IsMandatory":"True"} |
| E1862 | All / unspecified | None | Scope | {"__type":"ix:Field","For":"Scope"} |
| E1862 | All / unspecified | None | Objective | {"__type":"ix:Field","For":"Objective"} |
| E1862 | All / unspecified | None | Agenda | {"__type":"ix:Field","For":"Agenda"} |
| E1862 | All / unspecified | None | PersResponsibl | {"__type":"ix:Field","For":"PersResponsibl","IsMandatory":"True"} |
| E1862 | All / unspecified | None | Workflow.RecurringSeries.StartDate | {"__type":"ix:Field","For":"Workflow.RecurringSeries.StartDate"} |
| E1862 | All / unspecified | None | Workflow.RecurringSeries.Frequency | {"__type":"ix:Field","For":"Workflow.RecurringSeries.Frequency"} |
| E1946 | All / unspecified | None | Reference | {"__type":"ix:Field","For":"Reference"} |
| E1946 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E1946 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description"} |
| E1946 | All / unspecified | None | MaxPoints | {"__type":"ix:Field","For":"MaxPoints","DisplayMode":"View, Edit"} |
| E1989 | All / unspecified | None | Location | {"__type":"ix:Field","For":"Location","ReadOnly":"True","DisplayAs":"string"} |
| E1989 | All / unspecified | None | Checklist | {"__type":"ix:Field","For":"Checklist"} |
| E1989 | All / unspecified | None | ChecklistRef | {"__type":"ix:Field","For":"ChecklistRef"} |
| E1989 | All / unspecified | None | Title | {"__type":"ix:Field","For":"Title"} |
| E1989 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description"} |
| E1989 | All / unspecified | None | ChecklistType | {"__type":"ix:Field","For":"ChecklistType"} |
| E1994 | All / unspecified | None | ChecklistAnswer | {"__type":"ix:Field","For":"ChecklistAnswer","Readonly":"true","SpellCheck":"false"} |
| E1994 | All / unspecified | None | FindingStatus.Code | {"__type":"ix:Field","Caption":"Finding Status","For":"FindingStatus.Code","meta:resourcekey":"Field0","ResourceKey":"Field0"} |
| E1994 | All / unspecified | None | Severity | {"__type":"ix:Field","EditAs":"radiogroup","For":"Severity","Visible":"false","Readonly":"True","SpellCheck":"false"} |
| E1994 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description","Readonly":"True","SpellCheck":"false"} |
| E1994 | All / unspecified | None | PersResponsible | {"__type":"ix:Field","For":"PersResponsible","Readonly":"True"} |
| E1994 | All / unspecified | None | DueIn | {"__type":"ix:Field","DisplayMode":"Create","For":"DueIn","Readonly":"True"} |
| E1994 | All / unspecified | None | ResponseDue | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"ResponseDue","Readonly":"True"} |
| E1994 | All / unspecified | None | ImmediateAction | {"__type":"ix:Field","Caption":"Suggested Action Plan","For":"ImmediateAction","Readonly":"True","SpellCheck":"false","meta:resourcekey":"Field1","ResourceKey":"Field1"} |
| E1994 | All / unspecified | None | ActionPlanCheck | {"__type":"ix:Field","For":"ActionPlanCheck","Visible":"false"} |
| E1994 | All / unspecified | None | ManualClose | {"__type":"ix:Field","For":"ManualClose"} |
| E1994 | All / unspecified | None | ManCloseCom | {"__type":"ix:Field","For":"ManCloseCom","SpellCheck":"false"} |
| E2027 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E2027 | All / unspecified | None | Active | {"__type":"ix:Field","For":"Active"} |
| E2027 | All / unspecified | None | Sort | {"__type":"ix:Field","For":"Sort"} |
| E2045 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E2045 | All / unspecified | None | DateModified | {"__type":"ix:Field","For":"DateModified","ReadOnly":"true"} |
| E2045 | All / unspecified | None | ModifiedBy | {"__type":"ix:Field","DisplayAs":"string","For":"ModifiedBy","ReadOnly":"true"} |
| E2045 | All / unspecified | None | DueDateIcon | {"__type":"ix:Field","For":"DueDateIcon"} |
| E2045 | All / unspecified | None | CalIconSel | {"__type":"ix:Field","DisplayMode":"Create,Edit","For":"CalIconSel"} |
| E2045 | All / unspecified | None | CalIconSel.SVGCode | {"__type":"ix:Field","DisplayMode":"View","For":"CalIconSel.SVGCode","IsMandatory":"true","Span":"true"} |
| E2045 | All / unspecified | None | ClockIcon | {"__type":"ix:Field","DisplayMode":"Create,Edit","For":"ClockIcon"} |
| E2045 | All / unspecified | None | ClockIcon.SVGCode | {"__type":"ix:Field","DisplayMode":"View","For":"ClockIcon.SVGCode","IsMandatory":"true","Span":"true"} |
| E2045 | All / unspecified | None | LoStructureIcon | {"__type":"ix:Field","DisplayMode":"Create,Edit","For":"LoStructureIcon"} |
| E2045 | All / unspecified | None | LoStructureIcon.SVGCode | {"__type":"ix:Field","DisplayMode":"View","For":"LoStructureIcon.SVGCode","IsMandatory":"true","Span":"true"} |
| E2045 | All / unspecified | None | WrkflowStaIcon | {"__type":"ix:Field","DisplayMode":"Create,Edit","For":"WrkflowStaIcon"} |
| E2045 | All / unspecified | None | WrkflowStaIcon.SVGCode | {"__type":"ix:Field","DisplayMode":"View","For":"WrkflowStaIcon.SVGCode","IsMandatory":"true","Span":"true"} |
| E2045 | All / unspecified | None | ResIconWorkflow | {"__type":"ix:Field","DisplayMode":"Create,Edit","For":"ResIconWorkflow"} |
| E2045 | All / unspecified | None | ResIconWorkflow.SVGCode | {"__type":"ix:Field","DisplayMode":"View","For":"ResIconWorkflow.SVGCode","IsMandatory":"true","Span":"true"} |
| E2045 | All / unspecified | None | DueIconWorkflow | {"__type":"ix:Field","For":"DueIconWorkflow","IsMandatory":"true","Span":"true"} |
| E2294 | All / unspecified | None | ChecklistType | {"__type":"ix:Field","For":"ChecklistType","ReadOnly":"true","SpellCheck":"false"} |
| E2294 | All / unspecified | None | QuestionRef | {"__type":"ix:Field","For":"QuestionRef"} |
| E2294 | All / unspecified | None | Order | {"__type":"ix:Field","For":"Order"} |
| E2294 | All / unspecified | None | Content | {"__type":"ix:Field","EditAs":"SmallTextArea","For":"Content","IsMandatory":"True"} |
| E2294 | All / unspecified | None | Guideline | {"__type":"ix:Field","EditAs":"SmallTextArea","For":"Guideline"} |
| E2294 | All / unspecified | None | Section | {"__type":"ix:Field","EditAs":"SmallTextArea","For":"Section"} |
| E2294 | All / unspecified | None | AnswerType | {"__type":"ix:Field","For":"AnswerType","IsMandatory":"True"} |
| E2294 | All / unspecified | None | ChoiceList | {"__type":"ix:Field","For":"ChoiceList"} |
| E2294 | All / unspecified | None | Not exported | {"__type":"ix:Field","Span":"true"} |
| E2294 | All / unspecified | None | UseExisting | {"__type":"ix:Field","For":"UseExisting"} |
| E2294 | All / unspecified | None | HelperChecklist | {"__type":"ix:Field","For":"HelperChecklist"} |
| E2294 | All / unspecified | None | ExistingSection | {"__type":"ix:Field","For":"ExistingSection"} |
| E2294 | All / unspecified | None | AbsoluteOrder | {"__type":"ix:Field","For":"AbsoluteOrder"} |
| E2358 | All / unspecified | None | TemplateName | {"__type":"ix:Field","For":"TemplateName"} |
| E2358 | All / unspecified | None | RecordNo | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"RecordNo"} |
| E2358 | All / unspecified | None | HTMLTemplate | {"__type":"ix:Field","For":"HTMLTemplate","SpellCheck":"false"} |
| E2358 | All / unspecified | None | CSSTemplate | {"__type":"ix:Field","For":"CSSTemplate"} |
| E2372 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E2424 | All / unspecified | None | PubChecklist.Checklist.Title | {"__type":"ix:Field","For":"PubChecklist.Checklist.Title"} |
| E2424 | All / unspecified | None | CommtoReviewer2 | {"__type":"ix:Field","For":"CommtoReviewer2"} |
| E2424 | All / unspecified | None | IPReview2 | {"__type":"ix:Field","For":"IPReview2"} |
| E2503 | All / unspecified | None | Checklist | {"__type":"ix:Field","For":"Checklist"} |
| E2503 | All / unspecified | None | SectionName | {"__type":"ix:Field","For":"SectionName"} |
| E2503 | All / unspecified | None | Sort | {"__type":"ix:Field","For":"Sort","DisplayMode":"Edit, View"} |
| E2579 | All / unspecified | None | PubChecklist.Checklist.Title | {"__type":"ix:Field","For":"PubChecklist.Checklist.Title"} |
| E2579 | All / unspecified | None | CommtoReviewer2 | {"__type":"ix:Field","For":"CommtoReviewer2"} |
| E2579 | All / unspecified | None | IPReview2 | {"__type":"ix:Field","For":"IPReview2"} |
| E2968 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E2968 | All / unspecified | None | PubChecklist | {"__type":"ix:Field","DisplayMode":"Edit,View","For":"PubChecklist","ReadOnly":"true"} |
| E2968 | All / unspecified | None | MasterChecklist | {"__type":"ix:Field","For":"MasterChecklist"} |
| E2968 | All / unspecified | None | RecordNo | {"__type":"ix:Field","DisplayMode":"Edit,View","For":"RecordNo"} |
| E2968 | All / unspecified | None | Location | {"__type":"ix:Field","DisplayAs":"String","For":"Location"} |
| E2968 | All / unspecified | None | PubChecklist | {"__type":"ix:Field","DisplayMode":"Create","For":"PubChecklist","IsMandatory":"true"} |
| E2968 | All / unspecified | None | Comments | {"__type":"ix:Field","For":"Comments"} |
| E2968 | All / unspecified | None | NbFindings | {"__type":"ix:Field","For":"NbFindings"} |
| E2968 | All / unspecified | None | PrevChecklistId | {"__type":"ix:Field","For":"PrevChecklistId"} |
| E2968 | All / unspecified | None | NbActions | {"__type":"ix:Field","For":"NbActions"} |
| E2968 | All / unspecified | None | SysteTypeHelper | {"__type":"ix:Field","For":"SysteTypeHelper"} |
| E2968 | All / unspecified | None | Depth | {"__type":"ix:Field","For":"Depth"} |
| E2968 | All / unspecified | None | NbSubChecklists | {"__type":"ix:Field","For":"NbSubChecklists"} |
| E2968 | All / unspecified | None | Path | {"__type":"ix:Field","For":"Path"} |
| E2968 | All / unspecified | None | DefPersRespFind | {"__type":"ix:Field","For":"DefPersRespFind"} |
| E2968 | All / unspecified | None | PersResponsibl | {"__type":"ix:Field","For":"PersResponsibl"} |
| E2968 | All / unspecified | None | PointsAwarded | {"__type":"ix:Field","For":"PointsAwarded"} |
| E2968 | All / unspecified | None | MaxPoints | {"__type":"ix:Field","For":"MaxPoints"} |
| E2968 | All / unspecified | None | FilledQuestions | {"__type":"ix:Field","For":"FilledQuestions"} |
| E2968 | All / unspecified | None | ApplicQuestions | {"__type":"ix:Field","For":"ApplicQuestions"} |
| E2968 | All / unspecified | None | Progress | {"__type":"ix:Field","For":"Progress"} |
| E2987 | All / unspecified | None | InsDisplayField | {"__type":"ix:Field","For":"InsDisplayField"} |
| E2987 | All / unspecified | None | Location | {"__type":"ix:Field","For":"Location"} |
| E2987 | All / unspecified | None | ApplicQuestions | {"__type":"ix:Field","For":"ApplicQuestions"} |
| E2987 | All / unspecified | None | Comments | {"__type":"ix:Field","For":"Comments"} |
| E2987 | All / unspecified | None | Depth | {"__type":"ix:Field","For":"Depth"} |
| E2987 | All / unspecified | None | FilledQuestions | {"__type":"ix:Field","For":"FilledQuestions"} |
| E2987 | All / unspecified | None | MasterChecklist | {"__type":"ix:Field","For":"MasterChecklist"} |
| E2987 | All / unspecified | None | MaxPoints | {"__type":"ix:Field","For":"MaxPoints"} |
| E2987 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E2987 | All / unspecified | None | NbActions | {"__type":"ix:Field","For":"NbActions"} |
| E2987 | All / unspecified | None | NbFindings | {"__type":"ix:Field","For":"NbFindings"} |
| E2987 | All / unspecified | None | NbSubChecklists | {"__type":"ix:Field","For":"NbSubChecklists"} |
| E2987 | All / unspecified | None | Path | {"__type":"ix:Field","For":"Path"} |
| E2987 | All / unspecified | None | PointsAwarded | {"__type":"ix:Field","For":"PointsAwarded"} |
| E2987 | All / unspecified | None | PrevChecklistId | {"__type":"ix:Field","For":"PrevChecklistId"} |
| E2987 | All / unspecified | None | Progress | {"__type":"ix:Field","For":"Progress"} |
| E2987 | All / unspecified | None | PubChecklist | {"__type":"ix:Field","For":"PubChecklist"} |
| E2987 | All / unspecified | None | RecordNo | {"__type":"ix:Field","For":"RecordNo"} |
| E2987 | All / unspecified | None | Score | {"__type":"ix:Field","For":"Score"} |
| E2987 | All / unspecified | None | SysteTypeHelper | {"__type":"ix:Field","For":"SysteTypeHelper"} |
| E2987 | All / unspecified | None | TypeOfInspec | {"__type":"ix:Field","For":"TypeOfInspec"} |
| E2987 | All / unspecified | None | InspecChecklist | {"__type":"ix:Field","For":"InspecChecklist"} |
| E2987 | All / unspecified | None | PersResponsible | {"__type":"ix:Field","For":"PersResponsible"} |
| E2987 | All / unspecified | None | InspectionDate | {"__type":"ix:Field","For":"InspectionDate"} |
| E2987 | All / unspecified | None | CompletedBy | {"__type":"ix:Field","For":"CompletedBy"} |
| E2987 | All / unspecified | None | CompletedOn | {"__type":"ix:Field","For":"CompletedOn"} |
| E2987 | All / unspecified | None | RevieweComments | {"__type":"ix:Field","For":"RevieweComments"} |
| E2987 | All / unspecified | None | FirstReviewBy | {"__type":"ix:Field","For":"FirstReviewBy"} |
| E2987 | All / unspecified | None | DaofFirstReview | {"__type":"ix:Field","For":"DaofFirstReview"} |
| E2987 | All / unspecified | None | RevieweComment1 | {"__type":"ix:Field","For":"RevieweComment1"} |
| E2987 | All / unspecified | None | SecondReviewBy | {"__type":"ix:Field","For":"SecondReviewBy"} |
| E2987 | All / unspecified | None | DofSecondReview | {"__type":"ix:Field","For":"DofSecondReview"} |
| E2987 | All / unspecified | None | RevieweDecision | {"__type":"ix:Field","For":"RevieweDecision"} |
| E2987 | All / unspecified | None | RevieweDecisio1 | {"__type":"ix:Field","For":"RevieweDecisio1"} |
| E2987 | All / unspecified | None | HelperLocation | {"__type":"ix:Field","For":"HelperLocation"} |
| E3084 | All / unspecified | None | References | {"__type":"ix:Field","CaptionPosition":"top","For":"References","Readonly":"true","Span":"true"} |
| E3084 | All / unspecified | None | UseExisting | {"__type":"ix:Field","For":"UseExisting"} |
| E3084 | All / unspecified | None | HelperChecklist | {"__type":"ix:Field","For":"HelperChecklist"} |
| E3084 | All / unspecified | None | ExistingSection | {"__type":"ix:Field","For":"ExistingSection"} |
| E3084 | All / unspecified | None | AbsoluteOrder | {"__type":"ix:Field","For":"AbsoluteOrder"} |
| E30 | Draft | None | ActionNo | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"ActionNo"} |
| E30 | Draft | None | RelatedQstions | {"__type":"ix:Field","For":"RelatedQstions"} |
| E30 | Draft | None | CheckListAnsAct | {"__type":"ix:Field","Caption":"Inspection","For":"CheckListAnsAct"} |
| E30 | Draft | None | EventRelated | {"__type":"ix:Field","Caption":"Related Finding","DisplayMode":"View,Edit","For":"EventRelated","ReadOnly":"true"} |
| E30 | Draft | None | CPARTypeID | {"__type":"ix:Field","For":"CPARTypeID"} |
| E30 | Draft | None | CPARActionReq | {"__type":"ix:Field","For":"CPARActionReq","IsMandatory":"True","Span":"true"} |
| E30 | Draft | None | ActionOwner | {"__type":"ix:Field","For":"ActionOwner","IsMandatory":"true"} |
| E30 | Draft | None | DueDate | {"__type":"ix:Field","For":"DueDate","IsMandatory":"True","SpellCheck":"false"} |
| E30 | InProgress | None | ActionNo | {"__type":"ix:Field","DisplayMode":"View, Edit","For":"ActionNo"} |
| E30 | InProgress | None | RelatedQstions | {"__type":"ix:Field","For":"RelatedQstions"} |
| E30 | InProgress | None | CheckListAnsAct | {"__type":"ix:Field","Caption":"Inspection","For":"CheckListAnsAct","Readonly":"true","Span":"true"} |
| E30 | InProgress | None | EventRelated | {"__type":"ix:Field","Caption":"Related Finding","DisplayMode":"View,Edit","For":"EventRelated","ReadOnly":"true"} |
| E30 | InProgress | None | CPARTypeID | {"__type":"ix:Field","For":"CPARTypeID","IsMandatory":"true"} |
| E30 | InProgress | None | CPARActionReq | {"__type":"ix:Field","For":"CPARActionReq","IsMandatory":"true"} |
| E30 | InProgress | None | ActionOwner | {"__type":"ix:Field","For":"ActionOwner","IsMandatory":"true"} |
| E30 | InProgress | None | DueDate | {"__type":"ix:Field","For":"DueDate","IsMandatory":"true"} |
| E44 | All / unspecified | None | Location | {"__type":"ix:Field","For":"Location"} |
| E44 | All / unspecified | None | ApplicQuestions | {"__type":"ix:Field","For":"ApplicQuestions"} |
| E44 | All / unspecified | None | Comments | {"__type":"ix:Field","For":"Comments"} |
| E44 | All / unspecified | None | CompletedBy | {"__type":"ix:Field","For":"CompletedBy"} |
| E44 | All / unspecified | None | CompletedOn | {"__type":"ix:Field","For":"CompletedOn"} |
| E44 | All / unspecified | None | CreateMode | {"__type":"ix:Field","For":"CreateMode"} |
| E44 | All / unspecified | None | DefPersRespFind | {"__type":"ix:Field","For":"DefPersRespFind"} |
| E44 | All / unspecified | None | Depth | {"__type":"ix:Field","For":"Depth"} |
| E44 | All / unspecified | None | DisplayField | {"__type":"ix:Field","For":"DisplayField"} |
| E44 | All / unspecified | None | FilledQuestions | {"__type":"ix:Field","For":"FilledQuestions"} |
| E44 | All / unspecified | None | HelpErrorMes | {"__type":"ix:Field","For":"HelpErrorMes"} |
| E44 | All / unspecified | None | InspecChecklist | {"__type":"ix:Field","For":"InspecChecklist"} |
| E44 | All / unspecified | None | InspectionDate | {"__type":"ix:Field","For":"InspectionDate"} |
| E44 | All / unspecified | None | MasterChecklist | {"__type":"ix:Field","For":"MasterChecklist"} |
| E44 | All / unspecified | None | MaxPoints | {"__type":"ix:Field","For":"MaxPoints"} |
| E44 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E44 | All / unspecified | None | NbActions | {"__type":"ix:Field","For":"NbActions"} |
| E44 | All / unspecified | None | NbFindings | {"__type":"ix:Field","For":"NbFindings"} |
| E44 | All / unspecified | None | NbSubChecklists | {"__type":"ix:Field","For":"NbSubChecklists"} |
| E44 | All / unspecified | None | Path | {"__type":"ix:Field","For":"Path"} |
| E44 | All / unspecified | None | PersResponsibl | {"__type":"ix:Field","For":"PersResponsibl"} |
| E44 | All / unspecified | None | PersResponsible | {"__type":"ix:Field","For":"PersResponsible"} |
| E44 | All / unspecified | None | PointsAwarded | {"__type":"ix:Field","For":"PointsAwarded"} |
| E44 | All / unspecified | None | PrevChecklistId | {"__type":"ix:Field","For":"PrevChecklistId"} |
| E44 | All / unspecified | None | Progress | {"__type":"ix:Field","For":"Progress"} |
| E44 | All / unspecified | None | PubChecklist | {"__type":"ix:Field","For":"PubChecklist"} |
| E44 | All / unspecified | None | RecordNo | {"__type":"ix:Field","For":"RecordNo"} |
| E44 | All / unspecified | None | Score | {"__type":"ix:Field","For":"Score"} |
| E44 | All / unspecified | None | SysteTypeHelper | {"__type":"ix:Field","For":"SysteTypeHelper"} |
| E44 | All / unspecified | None | TypeOfInspec | {"__type":"ix:Field","For":"TypeOfInspec"} |
| E150 | Draft | None | ChecklistAnswer | {"__type":"ix:Field","For":"ChecklistAnswer","Caption":"Inspection","Readonly":"true","Span":"true","meta:resourcekey":"Field0","ResourceKey":"Field0"} |
| E150 | Draft | None | CPARTypeID | {"__type":"ix:Field","For":"CPARTypeID"} |
| E150 | Draft | None | CPARActionReq | {"__type":"ix:Field","For":"CPARActionReq","IsMandatory":"True","Span":"true"} |
| E150 | Draft | None | ActionOwner | {"__type":"ix:Field","For":"ActionOwner"} |
| E150 | Draft | None | DueDate | {"__type":"ix:Field","For":"DueDate","IsMandatory":"True","SpellCheck":"false"} |
| E150 | InProgress | None | ChecklistAnswer | {"__type":"ix:Field","For":"ChecklistAnswer","Caption":"Inspection","Readonly":"true","Span":"true","meta:resourcekey":"Field1","ResourceKey":"Field1"} |
| E150 | InProgress | None | CPARTypeID | {"__type":"ix:Field","For":"CPARTypeID","Readonly":"true"} |
| E150 | InProgress | None | CPARActionReq | {"__type":"ix:Field","For":"CPARActionReq","Readonly":"True","Span":"true","SpellCheck":"false"} |
| E150 | InProgress | None | CompletedBy | {"__type":"ix:Field","For":"CompletedBy"} |
| E150 | InProgress | None | CompletionDate | {"__type":"ix:Field","For":"CompletionDate"} |
| E150 | InProgress | None | CompletionNotes | {"__type":"ix:Field","For":"CompletionNotes","Span":"true","SpellCheck":"false"} |
| E150 | All / unspecified | None | ChecklistAnswer | {"__type":"ix:Field","For":"ChecklistAnswer","Caption":"Inspection","Readonly":"true","Span":"true","meta:resourcekey":"Field2","ResourceKey":"Field2"} |
| E150 | All / unspecified | None | CPARTypeID | {"__type":"ix:Field","For":"CPARTypeID","Readonly":"True"} |
| E150 | All / unspecified | None | CPARActionReq | {"__type":"ix:Field","For":"CPARActionReq","Readonly":"True","Span":"true","SpellCheck":"false"} |
| E150 | All / unspecified | None | ActionOwner | {"__type":"ix:Field","For":"ActionOwner","Readonly":"True"} |
| E150 | All / unspecified | None | DueDate | {"__type":"ix:Field","For":"DueDate","Readonly":"True"} |
| E150 | All / unspecified | None | CompletedBy | {"__type":"ix:Field","For":"CompletedBy","Readonly":"True"} |
| E150 | All / unspecified | None | CompletionDate | {"__type":"ix:Field","For":"CompletionDate","Readonly":"True"} |
| E150 | All / unspecified | None | CompletionNotes | {"__type":"ix:Field","For":"CompletionNotes","Span":"true","Readonly":"True"} |
| E278 | All / unspecified | None | QuestionRef | {"__type":"ix:Field","For":"QuestionRef"} |
| E278 | All / unspecified | None | Question | {"__type":"ix:Field","For":"Question"} |
| E278 | All / unspecified | None | Order | {"__type":"ix:Field","For":"Order"} |
| E278 | All / unspecified | None | Content | {"__type":"ix:Field","For":"Content","SpellCheck":"false"} |
| E278 | All / unspecified | None | Guideline | {"__type":"ix:Field","For":"Guideline"} |
| E278 | All / unspecified | None | Section | {"__type":"ix:Field","For":"Section"} |
| E278 | All / unspecified | None | AnswerType | {"__type":"ix:Field","For":"AnswerType"} |
| E278 | All / unspecified | None | ChoiceList | {"__type":"ix:Field","For":"ChoiceList"} |
| E396 | All / unspecified | None | ChecklistType | {"__type":"ix:Field","For":"ChecklistType"} |
| E396 | All / unspecified | None | Section | {"__type":"ix:Field","For":"Section"} |
| E396 | All / unspecified | None | AnswerType | {"__type":"ix:Field","For":"AnswerType"} |
| E396 | All / unspecified | None | ChoiceList | {"__type":"ix:Field","For":"ChoiceList"} |
| E396 | All / unspecified | None | VisDepNoAns | {"__type":"ix:Field","For":"VisDepNoAns"} |
| E396 | All / unspecified | None | HasDependsOn | {"__type":"ix:Field","For":"HasDependsOn"} |
| E516 | All / unspecified | None | ChecklistType | {"__type":"ix:Field","For":"ChecklistType"} |
| E516 | All / unspecified | None | Reference | {"__type":"ix:Field","For":"Reference"} |
| E516 | All / unspecified | None | Title | {"__type":"ix:Field","For":"Title"} |
| E516 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description"} |
| E983 | All / unspecified | None | ChecklistType | {"__type":"ix:Field","For":"ChecklistType","ReadOnly":"true","SpellCheck":"false"} |
| E983 | All / unspecified | None | QuestionRef | {"__type":"ix:Field","For":"QuestionRef"} |
| E983 | All / unspecified | None | Order | {"__type":"ix:Field","For":"Order"} |
| E983 | All / unspecified | None | Content | {"__type":"ix:Field","EditAs":"SmallTextArea","For":"Content","IsMandatory":"True"} |
| E983 | All / unspecified | None | Guideline | {"__type":"ix:Field","EditAs":"SmallTextArea","For":"Guideline"} |
| E983 | All / unspecified | None | Section | {"__type":"ix:Field","EditAs":"SmallTextArea","For":"Section"} |
| E983 | All / unspecified | None | AnswerType | {"__type":"ix:Field","For":"AnswerType","IsMandatory":"True"} |
| E983 | All / unspecified | None | ChoiceList | {"__type":"ix:Field","For":"ChoiceList"} |
| E983 | All / unspecified | None | Not exported | {"__type":"ix:Field","Span":"true"} |
| E983 | All / unspecified | None | UseReferences | {"__type":"ix:Field","For":"UseReferences"} |
| E983 | All / unspecified | None | References | {"__type":"ix:Field","CaptionPosition":"top","For":"References"} |
| E992 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E992 | All / unspecified | None | Code | {"__type":"ix:Field","For":"Code"} |
| E992 | All / unspecified | None | SVGCode | {"__type":"ix:Field","For":"SVGCode"} |
| E1025 | All / unspecified | None | ChecklistType | {"__type":"ix:Field","For":"ChecklistType"} |
| E1025 | All / unspecified | None | Section | {"__type":"ix:Field","For":"Section"} |
| E1025 | All / unspecified | None | AnswerType | {"__type":"ix:Field","For":"AnswerType"} |
| E1025 | All / unspecified | None | ChoiceList | {"__type":"ix:Field","For":"ChoiceList"} |
| E1025 | All / unspecified | None | VisDepNoAns | {"__type":"ix:Field","For":"VisDepNoAns"} |
| E1025 | All / unspecified | None | HasDependsOn | {"__type":"ix:Field","For":"HasDependsOn"} |
| E1167 | All / unspecified | None | QuestionAnswers | {"__type":"ix:Field","For":"QuestionAnswers","DisplayMode":"Create","DisplayFields":"QuestionRef","Span":"true"} |
| E1167 | All / unspecified | None | ChecklistAnswer | {"__type":"ix:Field","For":"ChecklistAnswer","Id":"ChecklistAnswerCreate","DisplayMode":"Create","Readonly":"false","Caption":"Inspection Name","Span":"true","SpellCheck":"false"} |
| E1167 | All / unspecified | None | ChecklistAnswer | {"__type":"ix:Field","For":"ChecklistAnswer","Id":"ChecklistAnswerRO","DisplayMode":"View,Edit","Caption":"Inspection Name","Span":"true","ReadOnly":"true"} |
| E1167 | All / unspecified | None | FindingStatus.Code | {"__type":"ix:Field","For":"FindingStatus.Code","Caption":"Finding Status","DisplayMode":"View,Edit"} |
| E1167 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description","IsMandatory":"True","Span":"true","SpellCheck":"false"} |
| E1167 | All / unspecified | None | ImmediateAction | {"__type":"ix:Field","Caption":"Suggested Action Plan","For":"ImmediateAction","Span":"true","SpellCheck":"false"} |
| E1167 | All / unspecified | None | DueIn | {"__type":"ix:Field","DisplayMode":"Create","For":"DueIn"} |
| E1167 | All / unspecified | None | ResponseDue | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"ResponseDue"} |
| E1167 | All / unspecified | None | ManualClose | {"__type":"ix:Field","For":"ManualClose"} |
| E1167 | All / unspecified | None | ManCloseCom | {"__type":"ix:Field","For":"ManCloseCom","SpellCheck":"false"} |
| E1278 | All / unspecified | None | MasterChecklist | {"__type":"ix:Field","For":"MasterChecklist","IsMandatory":"True"} |
| E1278 | All / unspecified | None | RecordNo | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"RecordNo"} |
| E1278 | All / unspecified | None | PubChecklist | {"__type":"ix:Field","DisplayMode":"Create","EditAs":"Dropdown","For":"PubChecklist","IsMandatory":"true"} |
| E1278 | All / unspecified | None | Comments | {"__type":"ix:Field","For":"Comments"} |
| E1278 | All / unspecified | None | StartCondition | {"__type":"ix:Field","For":"StartCondition"} |
| E1621 | Create | None | Location | {"__type":"ix:Field","For":"Location"} |
| E1621 | Create | None | TypeOfInspec | {"__type":"ix:Field","Display":"inline","For":"TypeOfInspec"} |
| E1621 | Create | None | InspecChecklist | {"__type":"ix:Field","Display":"inline","For":"InspecChecklist","IsMandatory":"true"} |
| E1621 | Create | None | InspectionDate | {"__type":"ix:Field","For":"InspectionDate"} |
| E1621 | Create | None | PersResponsible | {"__type":"ix:Field","Caption":"Inspector","For":"PersResponsible"} |
| E1621 | Draft | None | RecordNo | {"__type":"ix:Field","For":"RecordNo","DisplayMode":"View,Edit"} |
| E1621 | Draft | None | Location | {"__type":"ix:Field","For":"Location","ReadOnly":"true"} |
| E1621 | Draft | None | InspectionDate | {"__type":"ix:Field","For":"InspectionDate","ReadOnly":"True"} |
| E1621 | Draft | None | TypeOfInspec | {"__type":"ix:Field","For":"TypeOfInspec","Readonly":"True"} |
| E1621 | Draft | None | Equipment | {"__type":"ix:Field","For":"Equipment","ID":"EquipmentRelation"} |
| E1621 | Draft | None | EquipmentTxt | {"__type":"ix:Field","For":"EquipmentTxt","ID":"EquipmentText"} |
| E1621 | Draft | None | InspecChecklist | {"__type":"ix:Field","For":"InspecChecklist","Readonly":"True"} |
| E1621 | Draft | None | TypeOfInspec.FindingTracking | {"__type":"ix:Field","For":"TypeOfInspec.FindingTracking"} |
| E1621 | Draft | None | InspecChecklist.Checklist.EnableScoring | {"__type":"ix:Field","For":"InspecChecklist.Checklist.EnableScoring"} |
| E1621 | Draft | None | MaxPoints | {"__type":"ix:Field","For":"MaxPoints"} |
| E1621 | Draft | None | PointsAwarded | {"__type":"ix:Field","For":"PointsAwarded"} |
| E1621 | Draft | None | Score | {"__type":"ix:Field","For":"Score"} |
| E1621 | InspectioninProgress | None | RecordNo | {"__type":"ix:Field","For":"RecordNo","DisplayMode":"View,Edit"} |
| E1621 | InspectioninProgress | None | Location | {"__type":"ix:Field","For":"Location","ReadOnly":"true"} |
| E1621 | InspectioninProgress | None | InspectionDate | {"__type":"ix:Field","For":"InspectionDate","ReadOnly":"True"} |
| E1621 | InspectioninProgress | None | TypeOfInspec | {"__type":"ix:Field","For":"TypeOfInspec","Readonly":"True"} |
| E1621 | InspectioninProgress | None | InspecChecklist | {"__type":"ix:Field","For":"InspecChecklist","Readonly":"True"} |
| E1621 | InspectioninProgress | None | TypeOfInspec.FindingTracking | {"__type":"ix:Field","For":"TypeOfInspec.FindingTracking"} |
| E1621 | InspectioninProgress | None | InspecChecklist.Checklist.EnableScoring | {"__type":"ix:Field","For":"InspecChecklist.Checklist.EnableScoring"} |
| E1621 | InspectioninProgress | None | MaxPoints | {"__type":"ix:Field","For":"MaxPoints"} |
| E1621 | InspectioninProgress | None | PointsAwarded | {"__type":"ix:Field","For":"PointsAwarded"} |
| E1621 | InspectioninProgress | None | Score | {"__type":"ix:Field","For":"Score"} |
| E1860 | All / unspecified | None | Location | {"__type":"ix:Field","For":"Location"} |
| E1860 | All / unspecified | None | RecordNo | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"RecordNo"} |
| E1860 | All / unspecified | None | Name | {"__type":"ix:Field","EditAs":"TextBox","For":"Name","IsMandatory":"True"} |
| E1860 | All / unspecified | None | Scope | {"__type":"ix:Field","For":"Scope"} |
| E1860 | All / unspecified | None | Objective | {"__type":"ix:Field","For":"Objective"} |
| E1860 | All / unspecified | None | Agenda | {"__type":"ix:Field","For":"Agenda"} |
| E1860 | All / unspecified | None | PersResponsible | {"__type":"ix:Field","For":"PersResponsible"} |
| E1860 | All / unspecified | None | Workflow.RecurringSeries.StartDate | {"__type":"ix:Field","For":"Workflow.RecurringSeries.StartDate"} |
| E1860 | All / unspecified | None | Workflow.RecurringSeries.Frequency | {"__type":"ix:Field","For":"Workflow.RecurringSeries.Frequency"} |
| E1952 | All / unspecified | None | Reference | {"__type":"ix:Field","For":"Reference"} |
| E1952 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E1952 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description"} |
| E1987 | All / unspecified | None | Checklist | {"__type":"ix:Field","For":"Checklist"} |
| E1987 | All / unspecified | None | ChecklistRef | {"__type":"ix:Field","For":"ChecklistRef"} |
| E1987 | All / unspecified | None | Title | {"__type":"ix:Field","For":"Title"} |
| E1987 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description"} |
| E1987 | All / unspecified | None | ChecklistType | {"__type":"ix:Field","For":"ChecklistType"} |
| E1992 | All / unspecified | None | ChecklistAnswer | {"__type":"ix:Field","For":"ChecklistAnswer","Readonly":"false","SpellCheck":"false"} |
| E1992 | All / unspecified | None | FindingStatus.Code | {"__type":"ix:Field","For":"FindingStatus.Code","Caption":"Finding Status"} |
| E1992 | All / unspecified | None | Severity | {"__type":"ix:Field","EditAs":"radiogroup","For":"Severity","Readonly":"True","SpellCheck":"false"} |
| E1992 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description","Readonly":"True","SpellCheck":"false"} |
| E1992 | All / unspecified | None | PersResponsible | {"__type":"ix:Field","For":"PersResponsible","Readonly":"True"} |
| E1992 | All / unspecified | None | DueIn | {"__type":"ix:Field","DisplayMode":"Create","For":"DueIn","Readonly":"True"} |
| E1992 | All / unspecified | None | ResponseDue | {"__type":"ix:Field","DisplayMode":"View,Edit","For":"ResponseDue","Readonly":"True"} |
| E1992 | All / unspecified | None | ImmediateAction | {"__type":"ix:Field","Caption":"Suggested Action Plan","For":"ImmediateAction","Readonly":"True","SpellCheck":"false"} |
| E1992 | All / unspecified | None | ManualClose | {"__type":"ix:Field","For":"ManualClose"} |
| E1992 | All / unspecified | None | ManCloseCom | {"__type":"ix:Field","For":"ManCloseCom","SpellCheck":"false"} |
| E2084 | All / unspecified | None | MassUpChoice | {"__type":"ix:Field","Caption":"Answer","For":"MassUpChoice","ResourceKey":"Field0","SpellCheck":"false","meta:resourcekey":"Field0"} |
| E2127 | All / unspecified | None | Reference | {"__type":"ix:Field","For":"Reference"} |
| E2127 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name","SpellCheck":"false"} |
| E2127 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description"} |
| E2127 | All / unspecified | None | Active | {"__type":"ix:Field","For":"Active"} |
| E2127 | All / unspecified | None | ComplValidation | {"__type":"ix:Field","For":"ComplValidation"} |
| E2127 | All / unspecified | None | EnabFirstReview | {"__type":"ix:Field","For":"EnabFirstReview"} |
| E2127 | All / unspecified | None | FirstReviewer | {"__type":"ix:Field","For":"FirstReviewer"} |
| E2127 | All / unspecified | None | DforFirstReview | {"__type":"ix:Field","For":"DforFirstReview"} |
| E2127 | All / unspecified | None | EnaSecondReview | {"__type":"ix:Field","For":"EnaSecondReview"} |
| E2127 | All / unspecified | None | SecondReviewer | {"__type":"ix:Field","For":"SecondReviewer"} |
| E2127 | All / unspecified | None | forSecondReview | {"__type":"ix:Field","For":"forSecondReview"} |
| E2135 | All / unspecified | None | ChecklistAnswer | {"__type":"ix:Field","DisplayAs":"Link","DisplayMode":"View","For":"ChecklistAnswer","Span":"true"} |
| E2135 | All / unspecified | None | PubQuestion.Section | {"__type":"ix:Field","For":"PubQuestion.Section","Span":"true"} |
| E2135 | All / unspecified | None | PubQuestion.Content | {"__type":"ix:Field","DisplayAs":"html","For":"PubQuestion.Content","Span":"true"} |
| E2135 | All / unspecified | None | PubQuestion.Guideline | {"__type":"ix:Field","For":"PubQuestion.Guideline","Span":"true"} |
| E2135 | All / unspecified | None | PubQuestion.AnswerType | {"__type":"ix:Field","For":"PubQuestion.AnswerType","IsVisible":"false"} |
| E2135 | All / unspecified | None | PubQuestion.Question.UseReferences | {"__type":"ix:Field","For":"PubQuestion.Question.UseReferences","IsVisible":"false"} |
| E2135 | All / unspecified | None | HelperFinding | {"__type":"ix:Field","For":"HelperFinding"} |
| E2135 | All / unspecified | None | PubQuestion.Question.References | {"__type":"ix:Field","CaptionPosition":"top","For":"PubQuestion.Question.References","Span":"true","SpellCheck":"false"} |
| E2135 | All / unspecified | None | Choice | {"__type":"ix:Field","Caption":"Answer","For":"Choice","ResourceKey":"Field0","Span":"true","SpellCheck":"false","meta:resourcekey":"Field0"} |
| E2135 | All / unspecified | None | Text | {"__type":"ix:Field","Caption":"Answer","For":"Text","ResourceKey":"Field1","Span":"true","SpellCheck":"false","meta:resourcekey":"Field1"} |
| E2135 | All / unspecified | None | Float | {"__type":"ix:Field","Caption":"Answer","For":"Float","ResourceKey":"Field2","Span":"true","SpellCheck":"false","meta:resourcekey":"Field2"} |
| E2135 | All / unspecified | None | Date | {"__type":"ix:Field","Caption":"Answer","For":"Date","ResourceKey":"Field3","Span":"true","SpellCheck":"false","meta:resourcekey":"Field3"} |
| E2135 | All / unspecified | None | Checkbox | {"__type":"ix:Field","Caption":"Answer","For":"Checkbox","ResourceKey":"Field4","Span":"true","SpellCheck":"false","meta:resourcekey":"Field4"} |
| E2135 | All / unspecified | None | Choices | {"__type":"ix:Field","Caption":"Answer","For":"Choices","ResourceKey":"Field5","Span":"true","SpellCheck":"false","meta:resourcekey":"Field5"} |
| E2135 | All / unspecified | None | Comments | {"__type":"ix:Field","For":"Comments","Span":"true"} |
| E2256 | All / unspecified | None | ChecklistType | {"__type":"ix:Field","For":"ChecklistType"} |
| E2256 | All / unspecified | None | Description | {"__type":"ix:Field","For":"Description"} |
| E2256 | All / unspecified | None | NbQuestions | {"__type":"ix:Field","For":"NbQuestions"} |
| E2256 | All / unspecified | None | Reference | {"__type":"ix:Field","For":"Reference"} |
| E2256 | All / unspecified | None | Title | {"__type":"ix:Field","For":"Title"} |
| E2298 | All / unspecified | None | AnswerOptions | {"__type":"ix:Field","For":"AnswerOptions"} |
| E2298 | All / unspecified | None | AttachmentObject | {"__type":"ix:Field","For":"AttachmentObject"} |
| E2298 | All / unspecified | None | DependentOnQuestion | {"__type":"ix:Field","For":"DependentOnQuestion"} |
| E2298 | All / unspecified | None | DependentOnQuestionValue | {"__type":"ix:Field","For":"DependentOnQuestionValue"} |
| E2298 | All / unspecified | None | EnableComment | {"__type":"ix:Field","For":"EnableComment"} |
| E2298 | All / unspecified | None | EnableDependency | {"__type":"ix:Field","For":"EnableDependency"} |
| E2298 | All / unspecified | None | EnableObjectAttachment | {"__type":"ix:Field","For":"EnableObjectAttachment"} |
| E2298 | All / unspecified | None | Guideline | {"__type":"ix:Field","For":"Guideline"} |
| E2298 | All / unspecified | None | Mandatory | {"__type":"ix:Field","For":"Mandatory"} |
| E2298 | All / unspecified | None | MandatoryAttachmentAnswers | {"__type":"ix:Field","For":"MandatoryAttachmentAnswers"} |
| E2298 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E2298 | All / unspecified | None | Order | {"__type":"ix:Field","For":"Order"} |
| E2298 | All / unspecified | None | PublishedQuestion | {"__type":"ix:Field","For":"PublishedQuestion"} |
| E2298 | All / unspecified | None | QuestionNumber | {"__type":"ix:Field","For":"QuestionNumber"} |
| E2298 | All / unspecified | None | QuestionSet | {"__type":"ix:Field","For":"QuestionSet"} |
| E2298 | All / unspecified | None | QuestionStyle | {"__type":"ix:Field","For":"QuestionStyle"} |
| E2298 | All / unspecified | None | QuestionText | {"__type":"ix:Field","For":"QuestionText"} |
| E2298 | All / unspecified | None | RecordNo | {"__type":"ix:Field","For":"RecordNo"} |
| E2298 | All / unspecified | None | Scores | {"__type":"ix:Field","For":"Scores"} |
| E2298 | All / unspecified | None | Section | {"__type":"ix:Field","For":"Section"} |
| E2432 | All / unspecified | None | Location | {"__type":"ix:Field","For":"Location"} |
| E2432 | All / unspecified | None | ApplicQuestions | {"__type":"ix:Field","For":"ApplicQuestions"} |
| E2432 | All / unspecified | None | Comments | {"__type":"ix:Field","For":"Comments"} |
| E2432 | All / unspecified | None | CommetoReviewer | {"__type":"ix:Field","For":"CommetoReviewer"} |
| E2432 | All / unspecified | None | CompletedBy | {"__type":"ix:Field","For":"CompletedBy"} |
| E2432 | All / unspecified | None | CompletedOn | {"__type":"ix:Field","For":"CompletedOn"} |
| E2432 | All / unspecified | None | CreateMode | {"__type":"ix:Field","For":"CreateMode"} |
| E2432 | All / unspecified | None | DaofFirstReview | {"__type":"ix:Field","For":"DaofFirstReview"} |
| E2432 | All / unspecified | None | DefPersRespFind | {"__type":"ix:Field","For":"DefPersRespFind"} |
| E2432 | All / unspecified | None | Depth | {"__type":"ix:Field","For":"Depth"} |
| E2432 | All / unspecified | None | DofSecondReview | {"__type":"ix:Field","For":"DofSecondReview"} |
| E2432 | All / unspecified | None | Equipment | {"__type":"ix:Field","For":"Equipment"} |
| E2432 | All / unspecified | None | EquipmentTxt | {"__type":"ix:Field","For":"EquipmentTxt"} |
| E2432 | All / unspecified | None | FApprovalFields | {"__type":"ix:Field","For":"FApprovalFields"} |
| E2432 | All / unspecified | None | FilledQuestions | {"__type":"ix:Field","For":"FilledQuestions"} |
| E2432 | All / unspecified | None | FirstReviewBy | {"__type":"ix:Field","For":"FirstReviewBy"} |
| E2432 | All / unspecified | None | HelpeIsComplete | {"__type":"ix:Field","For":"HelpeIsComplete"} |
| E2432 | All / unspecified | None | HelperLocatio2 | {"__type":"ix:Field","For":"HelperLocatio2"} |
| E2432 | All / unspecified | None | HelperLocation | {"__type":"ix:Field","For":"HelperLocation"} |
| E2432 | All / unspecified | None | InsDisplayField | {"__type":"ix:Field","For":"InsDisplayField"} |
| E2432 | All / unspecified | None | InspecChecklist | {"__type":"ix:Field","For":"InspecChecklist"} |
| E2432 | All / unspecified | None | InspectionDate | {"__type":"ix:Field","For":"InspectionDate"} |
| E2432 | All / unspecified | None | InstrInProgress | {"__type":"ix:Field","For":"InstrInProgress"} |
| E2432 | All / unspecified | None | InstructiCreate | {"__type":"ix:Field","For":"InstructiCreate"} |
| E2432 | All / unspecified | None | InstructioDraft | {"__type":"ix:Field","For":"InstructioDraft"} |
| E2432 | All / unspecified | None | InstructiReview | {"__type":"ix:Field","For":"InstructiReview"} |
| E2432 | All / unspecified | None | LNoticeonCreate | {"__type":"ix:Field","For":"LNoticeonCreate"} |
| E2432 | All / unspecified | None | MasterChecklist | {"__type":"ix:Field","For":"MasterChecklist"} |
| E2432 | All / unspecified | None | MaxPoints | {"__type":"ix:Field","For":"MaxPoints"} |
| E2432 | All / unspecified | None | Name | {"__type":"ix:Field","For":"Name"} |
| E2432 | All / unspecified | None | NbActions | {"__type":"ix:Field","For":"NbActions"} |
| E2432 | All / unspecified | None | NbFindings | {"__type":"ix:Field","For":"NbFindings"} |
| E2432 | All / unspecified | None | NbSubChecklists | {"__type":"ix:Field","For":"NbSubChecklists"} |
| E2432 | All / unspecified | None | NotifiDate | {"__type":"ix:Field","For":"NotifiDate"} |
| E2432 | All / unspecified | None | oSectionAnswers | {"__type":"ix:Field","For":"oSectionAnswers"} |
| E2432 | All / unspecified | None | Path | {"__type":"ix:Field","For":"Path"} |
| E2432 | All / unspecified | None | PersResponsibl | {"__type":"ix:Field","For":"PersResponsibl"} |
| E2432 | All / unspecified | None | PersResponsible | {"__type":"ix:Field","For":"PersResponsible"} |
| E2432 | All / unspecified | None | PointsAwarded | {"__type":"ix:Field","For":"PointsAwarded"} |
| E2432 | All / unspecified | None | PrevChecklistId | {"__type":"ix:Field","For":"PrevChecklistId"} |
| E2432 | All / unspecified | None | Progress | {"__type":"ix:Field","For":"Progress"} |
| E2432 | All / unspecified | None | PubChecklist | {"__type":"ix:Field","For":"PubChecklist"} |
| E2432 | All / unspecified | None | RecordNo | {"__type":"ix:Field","For":"RecordNo"} |
| E2432 | All / unspecified | None | ReleActionPlans | {"__type":"ix:Field","For":"ReleActionPlans"} |
| E2432 | All / unspecified | None | RevieweComment1 | {"__type":"ix:Field","For":"RevieweComment1"} |
| E2432 | All / unspecified | None | RevieweComments | {"__type":"ix:Field","For":"RevieweComments"} |
| E2432 | All / unspecified | None | RevieweDecisio1 | {"__type":"ix:Field","For":"RevieweDecisio1"} |
| E2432 | All / unspecified | None | RevieweDecision | {"__type":"ix:Field","For":"RevieweDecision"} |
| E2432 | All / unspecified | None | Reviewer | {"__type":"ix:Field","For":"Reviewer"} |
| E2432 | All / unspecified | None | SApprovalFields | {"__type":"ix:Field","For":"SApprovalFields"} |
| E2432 | All / unspecified | None | Scope | {"__type":"ix:Field","For":"Scope"} |
| E2432 | All / unspecified | None | Score | {"__type":"ix:Field","For":"Score"} |
| E2432 | All / unspecified | None | SecondReviewBy | {"__type":"ix:Field","For":"SecondReviewBy"} |
| E2432 | All / unspecified | None | SysteTypeHelper | {"__type":"ix:Field","For":"SysteTypeHelper"} |
| E2432 | All / unspecified | None | TypeOfInspec | {"__type":"ix:Field","For":"TypeOfInspec"} |
| E2494 | All / unspecified | None | Order | {"__type":"ix:Field","For":"Order"} |
| E2494 | All / unspecified | None | Content | {"__type":"ix:Field","For":"Content","SpellCheck":"false"} |
| E2494 | All / unspecified | None | Guideline | {"__type":"ix:Field","For":"Guideline"} |
| E2494 | All / unspecified | None | Section | {"__type":"ix:Field","For":"Section"} |
| E2494 | All / unspecified | None | AnswerType | {"__type":"ix:Field","For":"AnswerType"} |
| E2494 | All / unspecified | None | ChoiceList | {"__type":"ix:Field","For":"ChoiceList"} |
| E2506 | All / unspecified | None | SectionName | {"__type":"ix:Field","For":"SectionName"} |
| E2506 | All / unspecified | None | Checklist | {"__type":"ix:Field","For":"Checklist"} |
| E2506 | All / unspecified | None | Sort | {"__type":"ix:Field","For":"Sort"} |

## Exact expression and behavior blocks

Defaults are raw value-generator XML; formulas and filters retain source syntax. Flows are pretty-printed JSON without altering the parsed content. No runtime evaluation is implied.

### E2271-DefaultValue

ActionPlans_ActionPlanAbsObject.ActivitiesStart — DefaultValue; stable record ID 4e74e04e-e9b2-40d7-905f-054ddd7b576d. Source $.GraphData.Items[762].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E132-DefaultValue

Unresolved.bit — DefaultValue; stable record ID 1abe2709-e5f3-4668-8104-82a52bfd9c87. Source $.GraphData.Items[42].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value i:nil="true" /></ValueGenerator>
```

### E1350-Calculation

ActionPlans_ActionPlanAbsObject.ActivitProgress — Calculation; stable record ID 2e2617c2-ca5d-47de-878d-3ba2af1c3007. Source $.GraphData.Items[465].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IFERROR((NbActivites-NbOpenActivit)/NbActivites, 0)  </Expression></CalculationBase>
```

### E1205-Calculation

ActionPlans_ActionPlanAbsObject.MActivitesOrder — Calculation; stable record ID 15894350-8742-471a-a65d-d874605ab469. Source $.GraphData.Items[415].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>MAX(Activites.Order) </Expression></CalculationBase>
```

### E2325-Calculation

ActionPlans_ActionPlanAbsObject.MaxTasksOrder — Calculation; stable record ID db6dce47-1b4a-4786-80e4-88c696e20a6b. Source $.GraphData.Items[779].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>MAX(Tasks.Order)</Expression></CalculationBase>
```

### E1357-Calculation

ActionPlans_ActionPlanAbsObject.NbActivites — Calculation; stable record ID fe2c49a2-ee67-4f45-a726-5e270ebea456. Source $.GraphData.Items[467].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(Activites)</Expression></CalculationBase>
```

### E1354-Calculation

ActionPlans_ActionPlanAbsObject.NbOpenActivit — Calculation; stable record ID 39565eaf-1e08-426f-8f09-9b9d4f77d215. Source $.GraphData.Items[466].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(FILTER(Activites.IsCompleted, "=", FALSE)) </Expression></CalculationBase>
```

### E460-Calculation

ActionPlans_ActionPlanAbsObject.NbOpened — Calculation; stable record ID 97f5a3d7-e817-4d1a-b8c4-838f0e282135. Source $.GraphData.Items[172].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(FILTER(Tasks.IsCompleted, "=", FALSE))</Expression></CalculationBase>
```

### E465-Calculation

ActionPlans_ActionPlanAbsObject.NbTasks — Calculation; stable record ID 6e5bfd0d-cf5d-4e4e-be17-b07829b3b18a. Source $.GraphData.Items[174].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(Tasks)</Expression></CalculationBase>
```

### E2174-DefaultValue

ActionPlans_ActionPlanAbsObject.ReviewType — DefaultValue; stable record ID fe0e817a-bc7e-4287-93fd-e60a3aa72068. Source $.GraphData.Items[749].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfActionPlans_ActTypeofReviewObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>5702e807-81f3-43ea-ab5a-a1b703747dfc</Id></ValueGenerator>
```

### E456-Calculation

ActionPlans_ActionPlanAbsObject.TasksProgress — Calculation; stable record ID d12ef818-4240-48e2-9b78-f3a37ca23328. Source $.GraphData.Items[171].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IFERROR((NbTasks - NbOpened)/NbOpened, 0)</Expression></CalculationBase>
```

### E1548-Calculation

ActionPlans_ActivityAbsObject.CanStart — Calculation; stable record ID 049bf706-67a3-47f6-b53e-c69233eb692f. Source $.GraphData.Items[531].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>OR(
  COUNT(PrereActivities)=0
, 
  AND(
    COUNT(PrereActivities)&gt;0
  ,
    COUNT(FILTER(PrereActivities.IsCompleted, "=", FALSE))=0
  )
)</Expression></CalculationBase>
```

### E1208-DefaultValue

ActionPlans_ActivityAbsObject.Order — DefaultValue; stable record ID c82d81ba-1100-4cf6-8bee-18ab9e581763. Source $.GraphData.Items[416].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>ActPlanAbstract.MActivitesOrder+1</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E1019-FilterExpression

ActionPlans_ActivityAbsObject.PrereActivities — FilterExpression; stable record ID cef7f140-5142-4c46-855d-47a29fca8d69. Source $.GraphData.Items[349].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Dependent",
        "Parse": false,
        "FieldExpression": "ActPlanAbstract",
        "ID": null
      },
      "For": "ActPlanAbstract",
      "Negate": false
    },
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Dependent",
        "Parse": false,
        "FieldExpression": "ActionNo",
        "ID": null
      },
      "For": "ActionNo",
      "Negate": true
    }
  ]
}
```

### E2104-Calculation

CLF_ChecklistAnswerObject.ApplicQuestions — Calculation; stable record ID 071bf3da-d8a0-4b50-b638-81b8c2f5d484. Source $.GraphData.Items[720].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(COUNT(QuestionAnswers)=0, COUNT(PubChecklist.PubQuestions), COUNT(QuestionAnswers)) + SUM(SubChecklists.ApplicQuestions) </Expression></CalculationBase>
```

### E2382-DefaultValue

CLF_ChecklistAnswerObject.DefPersRespFind — DefaultValue; stable record ID c5d24b84-138c-4c83-b1c2-74da6a8873a4. Source $.GraphData.Items[802].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>CURRENTUSER</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E2363-Calculation

CLF_ChecklistAnswerObject.Depth — Calculation; stable record ID 3c17b069-7b8e-4bd7-9a7c-923143d5e919. Source $.GraphData.Items[795].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(MasterChecklist&lt;&gt;NULL, MasterChecklist.Depth+1, 1)</Expression></CalculationBase>
```

### E2322-Calculation

CLF_ChecklistAnswerObject.DisplayField — Calculation; stable record ID 45b27141-411b-47ac-8be4-6a200a7ba35b. Source $.GraphData.Items[778].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(LEN(Name)&gt;50, CONCATENATE(LEFT(Name, 47), "..."), Name)</Expression></CalculationBase>
```

### E1800-Calculation

CLF_ChecklistAnswerObject.FilledQuestions — Calculation; stable record ID 9eb5b820-84e7-459d-a736-062bf1637ac3. Source $.GraphData.Items[604].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>SUM(QuestionAnswers.IsFilled) + SUM(SubChecklists.FilledQuestions)</Expression></CalculationBase>
```

### E1193-Calculation

CLF_ChecklistAnswerObject.MaxPoints — Calculation; stable record ID 79aef9dd-9a4f-421e-915f-d7c30cef905c. Source $.GraphData.Items[411].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>SUM(QuestionAnswers.MaxPoints) + SUM(SubChecklists.MaxPoints)</Expression></CalculationBase>
```

### E1964-DefaultValue

CLF_ChecklistAnswerObject.Name — DefaultValue; stable record ID dbab4405-3e42-40be-97c6-b1ac86afcd03. Source $.GraphData.Items[665].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE( "Inspection "," - ", DAY(NOW), "/", MONTH(NOW), "/", YEAR(NOW))</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E2972-Calculation

CLF_ChecklistAnswerObject.NbFindings — Calculation; stable record ID 4c9646f8-b586-45c0-9107-b66971cc7223. Source $.GraphData.Items[898].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(Findings) + SUM(SubChecklists.NbFindings)</Expression></CalculationBase>
```

### E2945-Calculation

CLF_ChecklistAnswerObject.NbSubChecklists — Calculation; stable record ID 0655be39-410d-435c-a680-51b843ab6c52. Source $.GraphData.Items[890].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(SubChecklists)</Expression></CalculationBase>
```

### E1189-DefaultValue

CLF_ChecklistAnswerObject.oSectionAnswers — DefaultValue; stable record ID cb8d973b-1a5e-4bdf-90ab-3268310fcdd6. Source $.GraphData.Items[409].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E2079-Calculation

CLF_ChecklistAnswerObject.Path — Calculation; stable record ID 071a14bc-1d47-4277-a5c5-16b1ea4c487c. Source $.GraphData.Items[710].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(MasterChecklist&lt;&gt;NULL, CONCATENATE(MasterChecklist.Path, ".", RecordNo), RecordNo)</Expression></CalculationBase>
```

### E1981-Calculation

CLF_ChecklistAnswerObject.PointsAwarded — Calculation; stable record ID 56f4f2db-044f-4833-aad6-0d0f0ee84d85. Source $.GraphData.Items[671].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>SUM(QuestionAnswers.PointsAwarded) + SUM(SubChecklists.PointsAwarded)</Expression></CalculationBase>
```

### E2100-Calculation

CLF_ChecklistAnswerObject.Progress — Calculation; stable record ID 7ac79076-0202-4097-bac7-fad6c540e65b. Source $.GraphData.Items[719].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IFERROR(FilledQuestions / ApplicQuestions, 0)</Expression></CalculationBase>
```

### E699-DefaultValue

Unresolved.AutoNumber — DefaultValue; stable record ID cb606991-68b5-47b7-b726-98465df3953c. Source $.GraphData.Items[256].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="AutoNumberSequenceValueGeneratorOflong" xmlns="http://schemas.intelex.net"><IncrementStep>1</IncrementStep><StartValue>1</StartValue></ValueGenerator>
```

### E1977-Calculation

CLF_ChecklistAnswerObject.Score — Calculation; stable record ID b38a67c1-41b7-4534-b914-d7b6d1cbff55. Source $.GraphData.Items[670].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IFERROR(PointsAwarded/ MaxPoints, 0)</Expression></CalculationBase>
```

### E691-DefaultValue

CLF_ChecklistObject.Active — DefaultValue; stable record ID 9775d3c9-71a2-4e3a-9607-659e525261e1. Source $.GraphData.Items[252].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>true</Value></ValueGenerator>
```

### E1784-DefaultValue

CLF_ChecklistObject.EnableScoring — DefaultValue; stable record ID 98108ed5-efd6-4ab9-a120-8f9d86e067b3. Source $.GraphData.Items[598].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>true</Value></ValueGenerator>
```

### E1534-DefaultValue

CLF_ChecklistObject.EnableSections — DefaultValue; stable record ID 84da5b41-0827-4f32-b1f3-7e5904542d1a. Source $.GraphData.Items[526].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>true</Value></ValueGenerator>
```

### E1760-Calculation

CLF_ChecklistObject.NbQuestions — Calculation; stable record ID c209764b-a12f-4a31-aa65-91933fb938ea. Source $.GraphData.Items[589].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(HelpeQuestions)</Expression></CalculationBase>
```

### E713-FilterExpression

CLF_ChecklistObject.Questions — FilterExpression; stable record ID ad0459de-0804-4ff0-b296-da15d39e21a6. Source $.GraphData.Items[262].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Dependent",
        "Parse": false,
        "FieldExpression": "ChecklistType",
        "ID": null
      },
      "For": "ChecklistType",
      "Negate": false
    }
  ]
}
```

### E1735-Calculation

CLF_ChecklistTypeObject.MaxOrder — Calculation; stable record ID 645a536e-aa60-4c95-88bb-e43f8bf7812c. Source $.GraphData.Items[581].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>MAX(Questions.Order)</Expression></CalculationBase>
```

### E963-Calculation

CLF_ChecklistTypeObject.NbChecklists — Calculation; stable record ID eac1371d-cd62-41a0-9cb4-d9b8df09b5be. Source $.GraphData.Items[329].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(Checklists)</Expression></CalculationBase>
```

### E1738-Calculation

CLF_ChecklistTypeObject.NbQuestions — Calculation; stable record ID 7ef2fc23-54af-4dd1-aae1-4c945cd5cfc1. Source $.GraphData.Items[582].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(Questions)</Expression></CalculationBase>
```

### E1741-DefaultValue

CLF_ChecklistTypeObject.QueAnswerObject — DefaultValue; stable record ID 70d0d1df-7d5f-45ae-b01f-adf174f1cb94. Source $.GraphData.Items[583].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfstring" xmlns="http://schemas.intelex.net"><Value>CLF_QuestionAnswerObject</Value></ValueGenerator>
```

### E722-Calculation

CLF_ChoiceListObject.MaxPoints — Calculation; stable record ID 91e0613b-66fb-4cce-8158-de81572a4fa6. Source $.GraphData.Items[265].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>MAX(Choices.Value)</Expression></CalculationBase>
```

### E2566-Calculation

CLF_ChoiceListObject.NbChoices — Calculation; stable record ID afabde3b-355b-4536-86f0-797f937da850. Source $.GraphData.Items[836].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(Choices)</Expression></CalculationBase>
```

### E327-DefaultValue

CLF_ChoiceObject.Css — DefaultValue; stable record ID 9ad5d925-c26d-443b-9b47-148e1cc5f035. Source $.GraphData.Items[120].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfstring" xmlns="http://schemas.intelex.net"><Value>text-align:center;padding:8px 3px;border-radius:10px;border:1px dotted lightgrey;</Value></ValueGenerator>
```

### E325-DefaultValue

CLF_ChoiceObject.IsNA — DefaultValue; stable record ID f8c8f41f-e13d-4eb7-9927-f69d1350bf9f. Source $.GraphData.Items[119].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E316-DefaultValue

CLF_ChoiceObject.Reference — DefaultValue; stable record ID 4710a81a-c167-40c9-a6d9-66f4d7479342. Source $.GraphData.Items[115].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE(ChoiceList.Reference, ".",  ChoiceList.NbChoices+1)</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E566-FilterExpression

CLF_FindingObject.ActionPlans — FilterExpression; stable record ID 51155bb6-f0cc-41eb-a602-3b4d70980405. Source $.GraphData.Items[204].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Dependent",
        "Parse": false,
        "FieldExpression": "ChecklistAnswer",
        "ID": null
      },
      "For": "ChecklistAnswer",
      "Negate": false
    }
  ]
}
```

### E1817-DefaultValue

CLF_FindingObject.DueIn — DefaultValue; stable record ID 18423386-cbd4-412e-9e90-710173f24669. Source $.GraphData.Items[610].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfCLF_FindingDDObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>eb1f2003-c086-4224-aca9-a26c842f6442</Id></ValueGenerator>
```

### E174-DefaultValue

CLF_FindingObject.FindingStatus — DefaultValue; stable record ID de676db5-1ec1-48bf-b482-62bc76e930b1. Source $.GraphData.Items[60].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfCLF_FindingStatusObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>2ea0b4d2-ce73-4bd4-a837-5030d44e6e45</Id></ValueGenerator>
```

### E1033-Calculation

CLF_FindingObject.HasActionPlans — Calculation; stable record ID e4ec6661-51b4-4bcc-9a3d-ff1aff4f2c1d. Source $.GraphData.Items[354].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(NbAPs&gt;0, TRUE, FALSE)</Expression></CalculationBase>
```

### E167-Calculation

CLF_FindingObject.IsOpen — Calculation; stable record ID db85d606-b22d-4bfa-a34c-a6dea9e0f9ff. Source $.GraphData.Items[57].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(AND(FindingStatus.Code&lt;&gt;"Closed", FindingStatus.Code&lt;&gt;"Closed without Action"), 1, 0)</Expression></CalculationBase>
```

### E1234-DefaultValue

CLF_FindingObject.ManualClose — DefaultValue; stable record ID e8295e71-37e4-4a16-9475-70954d674bab. Source $.GraphData.Items[427].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E1036-Calculation

CLF_FindingObject.NbAPs — Calculation; stable record ID 990b34ac-0ccd-4636-a58f-b6b723cce8a8. Source $.GraphData.Items[355].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(AbsCorActPlan)</Expression></CalculationBase>
```

### E2004-Calculation

CLF_FindingObject.NbOpAPs — Calculation; stable record ID 8cdbcea5-e567-471c-a514-bc6f541a7b16. Source $.GraphData.Items[681].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(FILTER(ActionPlans.IsCompleted, "&lt;&gt;", TRUE)) </Expression></CalculationBase>
```

### E1797-DefaultValue

CLF_FindingObject.PersResponsible — DefaultValue; stable record ID f9df3607-ae7c-41f3-b5da-bc9d53598f4e. Source $.GraphData.Items[603].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>IF(ChecklistAnswer.DefPersRespFind=NULL, CreatedBy, ChecklistAnswer.DefPersRespFind)</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E1223-FilterExpression

CLF_FindingObject.QuestionAnswers — FilterExpression; stable record ID a69b116f-60c9-4ce2-80e5-9569d93baa68. Source $.GraphData.Items[422].FieldData.FilterExpression.

```json
{
  "__type": "AdvancedExpression",
  "Predicates": [
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": false,
      "ExpressionText": "ChecklistAnswer.QuestionAnswers",
      "BaseType": "CLF_FindingObject"
    },
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": false,
      "ExpressionText": "ChecklistAnswer.SubChecklists.QuestionAnswers",
      "BaseType": "CLF_FindingObject"
    }
  ],
  "AdvancedFilterFormula": "A or B",
  "AdvancedFilterFormulaEnabled": true
}
```

### E1697-DefaultValue

CLF_FindingStatusObject.Name — DefaultValue; stable record ID 0e1e53f2-fc07-4118-a04f-e73435763482. Source $.GraphData.Items[567].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>Code</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E1812-DefaultValue

CLF_InsActionPlanObject.ActionOwner — DefaultValue; stable record ID 0ff76b4f-ebf5-422c-8cb4-47e7e50b95dc. Source $.GraphData.Items[608].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>ChecklistAnswer.DefPersRespFind</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E2369-FilterExpression

CLF_InsActionPlanObject.Findings — FilterExpression; stable record ID 97215722-33de-4fb1-a078-e008c9657e7b. Source $.GraphData.Items[797].FieldData.FilterExpression.

```json
{
  "__type": "AdvancedExpression",
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Dependent",
        "Parse": false,
        "FieldExpression": "ChecklistAnswer",
        "ID": null
      },
      "For": "ChecklistAnswer",
      "Negate": false
    },
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Value",
        "Parse": false,
        "Text": "Open",
        "ID": null
      },
      "For": "FindingStatus",
      "Negate": false
    },
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Value",
        "Parse": false,
        "Text": "In Progress",
        "ID": null
      },
      "For": "FindingStatus",
      "Negate": false
    }
  ],
  "AdvancedFilterFormula": "A and (B or C)",
  "AdvancedFilterFormulaEnabled": true
}
```

### E490-Calculation

CLF_InsActionPlanObject.HelperReleaseAP — Calculation; stable record ID 7251cc5d-056c-4cac-a482-e72d6cb06d55. Source $.GraphData.Items[182].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>ChecklistAnswer:Insp_EquipInspectionObject.ReleActionPlans</Expression></CalculationBase>
```

### E2120-Calculation

CLF_InsActionPlanObject.NotifiDate — Calculation; stable record ID 8b390343-1dc2-4856-b449-917a8c643b29. Source $.GraphData.Items[725].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>Workflow.DueDate</Expression></CalculationBase>
```

### E1897-Calculation

CLF_InsActionPlanObject.PlaDisplayField — Calculation; stable record ID 0212ed12-7b46-4d0f-9c8f-84a8bf23f6a6. Source $.GraphData.Items[638].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(LEN(CONCATENATE("Action No. - ", ActionNo, " - ", CPARActionReq))&gt;255, CONCATENATE(LEFT( CONCATENATE("Action No. - ", ActionNo, " - ", CPARActionReq), 252), "..."), CONCATENATE("Action No. - ", ActionNo, " - ", CPARActionReq))</Expression></CalculationBase>
```

### E1615-Calculation

CLF_InsActionPlanObject.QuestionList — Calculation; stable record ID cd175eda-56f9-4e5e-b2d8-d182f0de74f0. Source $.GraphData.Items[550].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>JOIN(QuestionAnswers.QuesSummaryText,"&lt;br/&gt;")</Expression></CalculationBase>
```

### E776-Calculation

CLF_PreferencesObject.Name — Calculation; stable record ID f871df9a-c3cf-45cc-a6dc-db91d93e6a73. Source $.GraphData.Items[282].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>"Preferences"</Expression></CalculationBase>
```

### E2253-Calculation

CLF_PubChecklistObject.Active — Calculation; stable record ID 2dfd4a99-f09a-4093-ba31-149b21c7bd26. Source $.GraphData.Items[754].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>Checklist.Active</Expression></CalculationBase>
```

### E1793-Calculation

CLF_PubChecklistObject.ChecklistType — Calculation; stable record ID d39de5aa-36bf-4f11-9ffa-6d75f6952239. Source $.GraphData.Items[602].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>Checklist.ChecklistType</Expression></CalculationBase>
```

### E269-Calculation

CLF_PubQuestObject.AbsoluteOrder — Calculation; stable record ID 6b525b22-1d3c-42e4-aec0-c57b8246c1ff. Source $.GraphData.Items[97].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>Question.ExistingSection.Sort*1000 +  Order</Expression></CalculationBase>
```

### E238-Calculation

CLF_PubQuestObject.AnswerTypeCode — Calculation; stable record ID 3f34e5f3-b2a0-46ed-b808-26a7f0817273. Source $.GraphData.Items[85].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>AnswerType.Value</Expression></CalculationBase>
```

### E224-Calculation

CLF_PubQuestObject.Expression — Calculation; stable record ID 8872faad-ff11-46a6-a20e-be27d5dd3413. Source $.GraphData.Items[81].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(OR(DependsOnPub = NULL, COUNT(VisibleIfs) = 0),
	"TRUE"
,
	CONCATENATE(
		'OR("', 
		JOIN(
			VisibleIfs.Reference, 
			CONCATENATE('"=', DependsOnPub.QuestionRef, ',"')
		), 
		'"=', DependsOnPub.QuestionRef
		, 
		IF(VisDepNoAns, CONCATENATE(", ", DependsOnPub.QuestionRef, "=NULL"), "")
		,')'
	)

)
</Expression></CalculationBase>
```

### E267-DefaultValue

CLF_PubQuestObject.HasCondDisplay — DefaultValue; stable record ID 3f2f5628-dd32-4daf-aed3-4ae34db8cb7f. Source $.GraphData.Items[96].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>Question.DependsOn &lt;&gt; NULL</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E233-Calculation

CLF_PubQuestObject.MaxPoints — Calculation; stable record ID 0500b72d-388e-4883-9998-e75386a93c8d. Source $.GraphData.Items[83].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>ChoiceList.MaxPoints</Expression></CalculationBase>
```

### E273-DefaultValue

CLF_PubQuestObject.SectionSort — DefaultValue; stable record ID 0f9a1bfe-97a2-4b09-86bc-61c93bd479dc. Source $.GraphData.Items[98].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>Question.ExistingSection.Sort</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E254-DefaultValue

CLF_PubQuestObject.VisDepNoAns — DefaultValue; stable record ID 42e625fa-f17c-47e0-92c6-84376195f0af. Source $.GraphData.Items[91].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E249-FilterExpression

CLF_PubQuestObject.VisibleIfs — FilterExpression; stable record ID eb23a8ce-0446-471e-9833-427d688c52c4. Source $.GraphData.Items[89].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": false,
      "ExpressionText": "ChoiceList.Choices",
      "BaseType": "CLF_PubQuestObject"
    }
  ]
}
```

### E642-FilterExpression

CLF_QuestAbstractObject.ActReqChoices — FilterExpression; stable record ID a180f5b2-7b6b-4880-97ec-8d561d1aeb98. Source $.GraphData.Items[233].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Dependent",
        "Parse": false,
        "FieldExpression": "ChoiceList",
        "ID": null
      },
      "For": "ChoiceList",
      "Negate": false
    }
  ]
}
```

### E520-DefaultValue

CLF_QuestAbstractObject.AllowNA — DefaultValue; stable record ID c0dbedeb-56d9-4b4d-a014-7704dc2c9230. Source $.GraphData.Items[189].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E130-DefaultValue

CLF_QuestAbstractObject.AnswerRequired — DefaultValue; stable record ID 9671657b-a3b9-43f4-91bd-2e4d0bc68dbc. Source $.GraphData.Items[41].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>true</Value></ValueGenerator>
```

### E645-DefaultValue

CLF_QuestAbstractObject.AnswerType — DefaultValue; stable record ID ae6d1a33-3e2a-46dc-8786-84b48cf2c664. Source $.GraphData.Items[234].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfCLF_AnswerTypeObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>771916e1-5251-4658-add8-3091457e7295</Id></ValueGenerator>
```

### E648-FilterExpression

CLF_QuestAbstractObject.ComReqChoices — FilterExpression; stable record ID 891b6a1c-58d3-408f-a4b5-b0ca0c51cc15. Source $.GraphData.Items[235].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": false,
      "ExpressionText": "ChoiceList.Choices",
      "BaseType": "CLF_QuestAbstractObject"
    }
  ]
}
```

### E640-DefaultValue

CLF_QuestAbstractObject.ComReqIfNA — DefaultValue; stable record ID 19d3b511-56b0-4937-94a7-8f8dcaf368e3. Source $.GraphData.Items[232].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E635-FilterExpression

CLF_QuestAbstractObject.DefaultChoice — FilterExpression; stable record ID 11e97721-39e8-48e1-af03-fff139c1c76e. Source $.GraphData.Items[230].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Dependent",
        "Parse": false,
        "FieldExpression": "ChoiceList",
        "ID": null
      },
      "For": "ChoiceList",
      "Negate": false
    }
  ]
}
```

### E654-FilterExpression

CLF_QuestAbstractObject.DefaultChoices — FilterExpression; stable record ID ed2b0b87-ee47-41d6-a85a-c728fb76939b. Source $.GraphData.Items[237].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Dependent",
        "Parse": false,
        "FieldExpression": "ChoiceList",
        "ID": null
      },
      "For": "ChoiceList",
      "Negate": false
    }
  ]
}
```

### E651-FilterExpression

CLF_QuestAbstractObject.FindReqChoices — FilterExpression; stable record ID ae9c66b4-b98f-4325-a102-683a5a00b267. Source $.GraphData.Items[236].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Dependent",
        "Parse": false,
        "FieldExpression": "ChoiceList",
        "ID": null
      },
      "For": "ChoiceList",
      "Negate": false
    }
  ]
}
```

### E1518-FilterExpression

CLF_QuestAbstractObject.TriggerFindings — FilterExpression; stable record ID 3111fab2-61c7-4f49-961d-6bccae387b1a. Source $.GraphData.Items[520].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": false,
      "ExpressionText": "ChoiceList.Choices",
      "BaseType": "CLF_QuestAbstractObject"
    }
  ]
}
```

### E1345-FilterExpression

CLF_QuestAbstractObject.ValueChoiceList — FilterExpression; stable record ID 990c28ca-11c4-41a8-a89f-97614eb6babf. Source $.GraphData.Items[463].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": false,
      "ExpressionText": "ChoiceList.Choices",
      "BaseType": "CLF_QuestAbstractObject"
    }
  ]
}
```

### E1343-DefaultValue

CLF_QuestAbstractObject.Weight — DefaultValue; stable record ID 217b2fad-470a-4251-b592-7aed2a2aa370. Source $.GraphData.Items[462].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfdouble5F2dSckg" xmlns="http://schemas.intelex.net"><Value>1</Value></ValueGenerator>
```

### E890-Calculation

CLF_QuestionAnswerObject.AbsoluteOrder — Calculation; stable record ID 2b40dfe1-1bef-41aa-ac4a-57240278e90c. Source $.GraphData.Items[315].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>PubQuestion.AbsoluteOrder</Expression></CalculationBase>
```

### E707-FilterExpression

CLF_QuestionAnswerObject.ActionPlans — FilterExpression; stable record ID d46b2085-3f6a-4a5c-842f-0ee7ea274070. Source $.GraphData.Items[260].FieldData.FilterExpression.

```json
{
  "__type": "AdvancedExpression",
  "Predicates": [
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": false,
      "ExpressionText": "ChecklistAnswer.ActionPlanAbst",
      "BaseType": "CLF_QuestionAnswerObject"
    },
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": false,
      "ExpressionText": "ChecklistAnswer.MasterChecklist.ActionPlanAbst",
      "BaseType": "CLF_QuestionAnswerObject"
    }
  ],
  "AdvancedFilterFormula": "A OR B",
  "AdvancedFilterFormulaEnabled": true
}
```

### E823-Calculation

CLF_QuestionAnswerObject.AnswerText — Calculation; stable record ID 6ca75a85-7f52-42de-bba7-618af4e7f28a. Source $.GraphData.Items[297].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(PubQuestion.AnswerTypeCode="Choice", 
	Choice.Name
,
	IF(PubQuestion.AnswerTypeCode="Date",
		CONCATENATE(Date, "")
	,
		IF(PubQuestion.AnswerTypeCode="Float", 
			CONCATENATE(Float, "")
		,
			IF(PubQuestion.AnswerTypeCode="Text", 
				Text
			,
				IF(PubQuestion.AnswerTypeCode="Checkbox", 
					CONCATENATE(Checkbox, "")
				,
					""
				)
			)
		)
	)
)</Expression></CalculationBase>
```

### E743-DefaultValue

CLF_QuestionAnswerObject.Choice — DefaultValue; stable record ID 00b884fc-b74e-4f87-91cd-f0fcdea9fd59. Source $.GraphData.Items[271].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>PubQuestion.DefaultChoice</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E743-FilterExpression

CLF_QuestionAnswerObject.Choice — FilterExpression; stable record ID 00b884fc-b74e-4f87-91cd-f0fcdea9fd59. Source $.GraphData.Items[271].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": false,
      "ExpressionText": "PubQuestion.ChoiceList.Choices",
      "BaseType": "CLF_QuestionAnswerObject"
    }
  ]
}
```

### E885-FilterExpression

CLF_QuestionAnswerObject.Choices — FilterExpression; stable record ID 028137c1-e158-40b5-8df6-1d00430fe251. Source $.GraphData.Items[313].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": false,
      "ExpressionText": "PubQuestion.ChoiceList.Choices",
      "BaseType": "CLF_QuestionAnswerObject"
    }
  ]
}
```

### E880-DefaultValue

CLF_QuestionAnswerObject.CrSectionAnswer — DefaultValue; stable record ID d994ac94-82c8-457b-aa04-d2a9b4c85f95. Source $.GraphData.Items[311].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E880-Calculation

CLF_QuestionAnswerObject.CrSectionAnswer — Calculation; stable record ID d994ac94-82c8-457b-aa04-d2a9b4c85f95. Source $.GraphData.Items[311].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>ChecklistAnswer.oSectionAnswers</Expression></CalculationBase>
```

### E545-FilterExpression

CLF_QuestionAnswerObject.Findings — FilterExpression; stable record ID 8fea66f7-a0c8-4ca0-9e94-5ce6bc2cc591. Source $.GraphData.Items[199].FieldData.FilterExpression.

```json
{
  "__type": "AdvancedExpression",
  "Predicates": [
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": false,
      "ExpressionText": "ChecklistAnswer.Findings",
      "BaseType": "CLF_QuestionAnswerObject"
    },
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": false,
      "ExpressionText": "ChecklistAnswer.MasterChecklist.Findings",
      "BaseType": "CLF_QuestionAnswerObject"
    }
  ],
  "AdvancedFilterFormula": "A or B",
  "AdvancedFilterFormulaEnabled": true
}
```

### E944-Calculation

CLF_QuestionAnswerObject.HelpQuestiText — Calculation; stable record ID 0a6ba76a-d7df-4af0-a5f7-d70810ec28ba. Source $.GraphData.Items[324].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(IsSubmitReady, NULL, PubQuestion.Content)</Expression></CalculationBase>
```

### E802-Calculation

CLF_QuestionAnswerObject.IsActionMiss — Calculation; stable record ID bf3bc339-75d6-4e5f-969a-2f229d0076d6. Source $.GraphData.Items[293].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>AND(
	NOT(IFNULL(IsNA, FALSE)),
	PubQuestion.AnswerType.Value = "Choice", 
	Choice &lt;&gt; NULL,
	IFNULL(NbActions, 0) = 0,
	COUNT(FILTER(PubQuestion.ActReqChoices.Id, "=", ChoiceId)) &gt; 0
) </Expression></CalculationBase>
```

### E948-Calculation

CLF_QuestionAnswerObject.IsAnswerMiss — Calculation; stable record ID 0606d14e-29ff-444d-b541-bbcbbf0fb8ea. Source $.GraphData.Items[325].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>AND(
	IFNULL(PubQuestion.AnswerRequired, TRUE),
	IsFilled = 0
)</Expression></CalculationBase>
```

### E878-DefaultValue

CLF_QuestionAnswerObject.IsApplicable — DefaultValue; stable record ID 4431b722-2378-41fe-98d2-3a3b9927540a. Source $.GraphData.Items[310].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOflong5F2dSckg" xmlns="http://schemas.intelex.net"><Value>1</Value></ValueGenerator>
```

### E831-Calculation

CLF_QuestionAnswerObject.IsComMiss — Calculation; stable record ID df17d4ca-6fc5-4101-909e-ae765085b0c4. Source $.GraphData.Items[298].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>AND(
	NOT(IFNULL(IsNA, FALSE)),
	PubQuestion.AnswerType.Value = "Choice", 
	Choice &lt;&gt; NULL,
	Comments=NULL,
	COUNT(FILTER(PubQuestion.ComReqChoices.Id, "=", ChoiceId)) &gt; 0
)</Expression></CalculationBase>
```

### E746-Calculation

CLF_QuestionAnswerObject.IsFilled — Calculation; stable record ID 0b2e82a0-a21f-444c-9833-03201f261d45. Source $.GraphData.Items[272].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(OR(
	AND(PubQuestion.AnswerTypeCode="Choice", Choice&lt;&gt;NULL), 
	AND(PubQuestion.AnswerTypeCode="Choices", COUNT(Choices)&gt;0), 
	AND(PubQuestion.AnswerTypeCode="Date", Date&lt;&gt;NULL), 
	AND(PubQuestion.AnswerTypeCode="Float", Float&lt;&gt;NULL), 
	AND(PubQuestion.AnswerTypeCode="Text", Text&lt;&gt;NULL), 
	AND(PubQuestion.AnswerTypeCode="Checkbox", Checkbox&lt;&gt;NULL)
	),1,0)</Expression></CalculationBase>
```

### E896-Calculation

CLF_QuestionAnswerObject.IsFindingMiss — Calculation; stable record ID fd0cdfb2-97e7-4da0-94a1-3753644e3ec3. Source $.GraphData.Items[317].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>AND(
	NOT(IFNULL(IsNA, FALSE)),
	PubQuestion.AnswerType.Value = "Choice", 
	Choice &lt;&gt; NULL,
	IFNULL(NbFindings, 0) = 0,
	COUNT(FILTER(PubQuestion.FindReqChoices.Id, "=", ChoiceId)) &gt; 0
)</Expression></CalculationBase>
```

### E933-DefaultValue

CLF_QuestionAnswerObject.IsNA — DefaultValue; stable record ID 1e1f3b5d-d434-4a6f-944b-e0296f71b8cf. Source $.GraphData.Items[319].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E847-Calculation

CLF_QuestionAnswerObject.IsSubmitReady — Calculation; stable record ID 401a9681-188e-4062-9792-bda7b24d7090. Source $.GraphData.Items[302].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>NOT(
	OR(
		IsAnswerMiss,
		IsFindingMiss,
		IsActionMiss,
		IsComMiss
	)
)
		</Expression></CalculationBase>
```

### E735-Calculation

CLF_QuestionAnswerObject.IsVisible — Calculation; stable record ID e32ab1a7-2ad6-45d4-bfae-7636a15977db. Source $.GraphData.Items[270].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>OR(
	DependsOn = NULL
,
	AND(
		DependsOn.IsVisible
	,
		OR(
			COUNT(FILTER(PubQuestion.VisibleIfs.Id, "=", DependsOn.Choice.Id)) &gt; 0,
			AND(PubQuestion.VisDepNoAns, DependsOn.IsFilled = 0)
		)
	)
)</Expression></CalculationBase>
```

### E870-Calculation

CLF_QuestionAnswerObject.MaxPoints — Calculation; stable record ID 7a552bca-cb1a-4bd0-9610-2c6103fb3978. Source $.GraphData.Items[308].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(Choice.Value=NULL, NULL, IF(Choice.IsNA=TRUE, 0,  PubQuestion.MaxPoints*PubQuestion.Weight))

</Expression></CalculationBase>
```

### E839-Calculation

CLF_QuestionAnswerObject.NbActions — Calculation; stable record ID 4aaa1dc7-9163-4bc8-9893-cdaf2ea87ba1. Source $.GraphData.Items[299].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(ActionPlans)</Expression></CalculationBase>
```

### E542-Calculation

CLF_QuestionAnswerObject.NbFindings — Calculation; stable record ID 3339c315-5a31-4182-88fb-8ccdc11129b0. Source $.GraphData.Items[198].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(Findings)</Expression></CalculationBase>
```

### E810-Calculation

CLF_QuestionAnswerObject.PointsAwarded — Calculation; stable record ID 13f33185-7b90-4a4c-a6ae-23231f4d20ba. Source $.GraphData.Items[294].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(PubQuestion.AnswerTypeCode="Choice", Choice.Value*PubQuestion.Weight, IF(PubQuestion.AnswerTypeCode="Choices", MAX(Choices.Value)*PubQuestion.Weight, NULL))</Expression></CalculationBase>
```

### E588-FilterExpression

CLF_QuestionAnswerObject.PubQuestion — FilterExpression; stable record ID cbf01deb-2a66-4943-b517-0d9852655cb0. Source $.GraphData.Items[211].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": true,
      "ExpressionText": "ChecklistAnswer.QuestionAnswers.PubQuestion",
      "BaseType": "CLF_QuestionAnswerObject"
    }
  ]
}
```

### E818-Calculation

CLF_QuestionAnswerObject.QuesSummaryText — Calculation; stable record ID ae1c4134-4ff7-43b0-b2e6-0e740b3b3cfc. Source $.GraphData.Items[296].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE(PubQuestion.Content,
IF(AnswerText&lt;&gt;NULL, CONCATENATE(": &lt;b&gt;&lt;u&gt;", AnswerText, "&lt;/u&gt;&lt;/b&gt;"), NULL),
IF(Comments&lt;&gt;NULL, CONCATENATE(" &lt;i&gt;(", Comments, ")&lt;/i&gt;"), NULL)
)</Expression></CalculationBase>
```

### E888-DefaultValue

CLF_QuestionAnswerObject.TrDefaultAnswer — DefaultValue; stable record ID 0725440f-4b32-4e8f-b380-1c36c9ec995c. Source $.GraphData.Items[314].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E1333-Calculation

CLF_QuestObject.AbsoluteOrder — Calculation; stable record ID 9067bfb7-daf1-463d-b6ed-932f9bc2dd0d. Source $.GraphData.Items[458].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>ExistingSection.Sort * 1000 + Order</Expression></CalculationBase>
```

### E2417-FilterExpression

CLF_QuestObject.Checklists — FilterExpression; stable record ID fadf3603-b0a8-4375-aa03-c69c58375923. Source $.GraphData.Items[812].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Dependent",
        "Parse": false,
        "FieldExpression": "ChecklistType",
        "ID": null
      },
      "For": "ChecklistType",
      "Negate": false
    }
  ]
}
```

### E2603-DefaultValue

CLF_QuestObject.ChecklistType — DefaultValue; stable record ID 56ef9f9e-5084-4305-b54c-cc8179a3f627. Source $.GraphData.Items[849].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>HelperChecklist.ChecklistType</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E1479-FilterExpression

CLF_QuestObject.DependsOn — FilterExpression; stable record ID 526de59c-cac2-45c8-90f5-a582393ab747. Source $.GraphData.Items[508].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": false,
      "ExpressionText": "ChecklistType.Questions",
      "BaseType": "CLF_QuestObject"
    },
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Value",
        "Parse": false,
        "Text": "Choice",
        "ID": null
      },
      "For": "AnswerType.Value",
      "Negate": false
    }
  ]
}
```

### E332-FilterExpression

CLF_QuestObject.ExistingSection — FilterExpression; stable record ID de5df9ce-67aa-4328-8050-b5cc426c8f3b. Source $.GraphData.Items[122].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": false,
      "ExpressionText": "HelperChecklist.Sections",
      "BaseType": "CLF_QuestObject"
    }
  ]
}
```

### E2942-Calculation

CLF_QuestObject.HasDependsOn — Calculation; stable record ID 63274745-cd71-4d64-960f-c111cded7855. Source $.GraphData.Items[889].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>DependsOn&lt;&gt;NULL</Expression></CalculationBase>
```

### E2657-Calculation

CLF_QuestObject.LastPublish — Calculation; stable record ID e3a6ab98-6fc6-431f-af48-9d97a19e32cb. Source $.GraphData.Items[871].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>MAX(PubQuestions.DateCreated)</Expression></CalculationBase>
```

### E2931-Calculation

CLF_QuestObject.NbChecklists — Calculation; stable record ID 2cfbe2bb-b3ca-432e-8690-f67f6d8d42c3. Source $.GraphData.Items[883].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(Checklists)</Expression></CalculationBase>
```

### E1326-DefaultValue

CLF_QuestObject.QuestionRef — DefaultValue; stable record ID c5277595-969b-4857-98ae-ff9f1df39590. Source $.GraphData.Items[455].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE(ChecklistType.Reference, "q",  ChecklistType.NbQuestions+1)</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E1495-DefaultValue

CLF_QuestObject.UseExisting — DefaultValue; stable record ID 94d6f39e-b993-46c1-84c5-a47aab741d47. Source $.GraphData.Items[513].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>true</Value></ValueGenerator>
```

### E1454-DefaultValue

CLF_QuestObject.UseReferences — DefaultValue; stable record ID d19523f4-839a-424c-831a-866fdda10855. Source $.GraphData.Items[499].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E1339-DefaultValue

CLF_QuestObject.VisDepNoAns — DefaultValue; stable record ID e2c0b8c1-7226-4d31-a62a-48fe16acb5ad. Source $.GraphData.Items[460].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E1328-FilterExpression

CLF_QuestObject.VisibleIfs — FilterExpression; stable record ID 2b3d3024-6a6f-4cf7-8dd5-374619bb6b6c. Source $.GraphData.Items[456].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Reference",
      "For": "ID",
      "Negate": false,
      "ExpressionText": "DependsOn.ChoiceList.Choices",
      "BaseType": "CLF_QuestObject"
    }
  ]
}
```

### E493-DefaultValue

CLF_SectionObject.Sort — DefaultValue; stable record ID 7f938904-382d-486b-9288-743eaf77c7a7. Source $.GraphData.Items[183].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>INT(IFNULL(MAX(Checklist.Sections.Sort), 0)) + 1 </Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E2168-Calculation

CLF_SubchecklistObject.StartCondition — Calculation; stable record ID c1b5aaed-443d-42e0-bf21-667598aa5123. Source $.GraphData.Items[747].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>PersResponsibl&lt;&gt;NULL</Expression></CalculationBase>
```

### E2070-Calculation

ConfgAppSetting_InstructionTextObject.DisplayField — Calculation; stable record ID 76d03708-d8ba-44a4-84f0-9775c3c222f1. Source $.GraphData.Items[707].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE("Instructional Text Panel - ", Application, " - ", Form, " - ", Stage)</Expression></CalculationBase>
```

### E1661-Calculation

ConfgAppSetting_InstructionTextObject.InstruPanelCode — Calculation; stable record ID 1fecf7db-4021-4b11-9282-6fd67b30cecb. Source $.GraphData.Items[555].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE(SUBSTITUTE(SUBSTITUTE(TemplaGenerator.HTMLTemplate,"HEADERTEXT",InstrTextHeader),"INSTRUCTIONTEXT",InstructiText), TemplaGenerator.CSSTemplate)</Expression></CalculationBase>
```

### E1115-DefaultValue

ConfgAppSetting_InstructionTextObject.RecordNo — DefaultValue; stable record ID 57f45d84-ae76-475b-9a68-51d587a68be4. Source $.GraphData.Items[384].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="AutoNumberSequenceValueGeneratorOflong" xmlns="http://schemas.intelex.net"><IncrementStep>1</IncrementStep><StartValue>1</StartValue></ValueGenerator>
```

### E2352-DefaultValue

ConfgAppSetting_PersRespOptionObject.Active — DefaultValue; stable record ID 8e528cdd-c23c-4a0b-8826-51f887591a35. Source $.GraphData.Items[790].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>true</Value></ValueGenerator>
```

### E2025-DefaultValue

ConfgAppSetting_PersRespOptionObject.RecordNo — DefaultValue; stable record ID 561085df-a30f-4acd-a93c-ed20d037a88c. Source $.GraphData.Items[690].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="AutoNumberSequenceValueGeneratorOflong" xmlns="http://schemas.intelex.net"><IncrementStep>1</IncrementStep><StartValue>1</StartValue></ValueGenerator>
```

### E295-DefaultValue

ConfgAppSetting_SpecAppSettingsObject.CalIconSel — DefaultValue; stable record ID 6478b22e-2086-40a3-9942-ffea8a908cde. Source $.GraphData.Items[107].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfConfgAppSetting_IconAssetObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>523a9363-e8c8-44c6-b261-3a7888c62802</Id></ValueGenerator>
```

### E797-DefaultValue

ConfgAppSetting_SpecAppSettingsObject.ClockIcon — DefaultValue; stable record ID da5be0f0-1947-4c58-a451-0378b8e66a25. Source $.GraphData.Items[291].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfConfgAppSetting_IconAssetObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>2a9224c2-99f4-45d0-baff-69027620cece</Id></ValueGenerator>
```

### E2063-DefaultValue

ConfgAppSetting_SpecAppSettingsObject.DueDateIcon — DefaultValue; stable record ID ec3bee0d-c460-43a7-8560-517aa8f9c264. Source $.GraphData.Items[704].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfConfgAppSetting_IconAssetObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>0ac12a83-4d68-4ae3-aa73-c749b8e5f60b</Id></ValueGenerator>
```

### E1705-DefaultValue

ConfgAppSetting_SpecAppSettingsObject.LoStructureIcon — DefaultValue; stable record ID 3cc91d7d-a87e-4105-bc5f-45033e6545fb. Source $.GraphData.Items[570].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfConfgAppSetting_IconAssetObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>ce452aee-3ce3-46f1-91ff-8859295f75d8</Id></ValueGenerator>
```

### E2054-DefaultValue

ConfgAppSetting_SpecAppSettingsObject.ResIconWorkflow — DefaultValue; stable record ID c4c4371b-c1a3-465c-aca3-b8b62bc596dc. Source $.GraphData.Items[700].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfConfgAppSetting_IconAssetObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>02b89698-7bdf-46ce-8e4d-e3560e549d1d</Id></ValueGenerator>
```

### E2051-DefaultValue

ConfgAppSetting_SpecAppSettingsObject.WrkflowStaIcon — DefaultValue; stable record ID e21153b3-bc43-4c6b-acd2-0b05695a2b85. Source $.GraphData.Items[699].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfConfgAppSetting_IconAssetObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>b7206439-2d5c-4ac9-977c-4f4765b12df4</Id></ValueGenerator>
```

### E1171-DefaultValue

ConfgAppSetting_TPanelGeneratorObject.RecordNo — DefaultValue; stable record ID b141cbc6-d7a9-4e01-8df0-1a9bc291dbb0. Source $.GraphData.Items[402].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="AutoNumberSequenceValueGeneratorOflong" xmlns="http://schemas.intelex.net"><IncrementStep>1</IncrementStep><StartValue>1</StartValue></ValueGenerator>
```

### E2434-DefaultValue

EventFwk_EventObject.Date — DefaultValue; stable record ID 0c3dee6c-4c57-468b-93b4-bcefa53838ea. Source $.GraphData.Items[817].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="TodayValueGenerator" xmlns="http://schemas.intelex.net" />
```

### E1508-Calculation

EventFwk_EventObject.DateOnly — Calculation; stable record ID 5115ab78-7ac4-4656-b8fb-0e965a1894fe. Source $.GraphData.Items[516].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IFERROR(DATE(YEAR(DateUserEntered),MONTH(DateUserEntered),DAY(DateUserEntered)), NULL) </Expression></CalculationBase>
```

### E2639-DefaultValue

EventFwk_EventObject.DateReported — DefaultValue; stable record ID 760c52c0-2a61-4139-a0aa-a55022e38a3b. Source $.GraphData.Items[863].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>NOW</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E280-DefaultValue

EventFwk_EventObject.DatInvestigated — DefaultValue; stable record ID 1af36c43-8f16-4196-a359-06183b63327b. Source $.GraphData.Items[101].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>NOW()</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E202-Calculation

EventFwk_EventObject.NBCAPAs — Calculation; stable record ID a559ab46-261b-40a9-b6da-a02d5dc14cda. Source $.GraphData.Items[72].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(CAPAs)</Expression></CalculationBase>
```

### E1926-Calculation

EventFwk_EventObject.NBOpenedCAPAs — Calculation; stable record ID 7f67fdc1-cd8e-46f7-9db2-d98c76c4a3b2. Source $.GraphData.Items[651].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>COUNT(FILTER(CAPAs.IsCompleted, "=", FALSE))</Expression></CalculationBase>
```

### E2636-DefaultValue

EventFwk_EventObject.ReportedBy — DefaultValue; stable record ID 5453ca68-a7da-47d3-97a7-3d4fe3453480. Source $.GraphData.Items[862].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>CURRENTUSER()</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E1658-FilterExpression

EventFwk_EventObject.Severity — FilterExpression; stable record ID 9ae4fed4-f390-4652-a2a8-81d182f574b5. Source $.GraphData.Items[554].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Value",
        "Parse": false,
        "Text": "Yes",
        "ID": null
      },
      "For": "Active",
      "Negate": false
    }
  ]
}
```

### E1708-Calculation

EventFwk_EventObject.TotalCost — Calculation; stable record ID a24ac374-0c8b-4e97-bae8-172955ca1586. Source $.GraphData.Items[571].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>SUM(Costs.ConvertedCost) + SUM(EventActionPlan.ToCostofActions)</Expression></CalculationBase>
```

### E697-DefaultValue

EventFwk_EventScenarioObject.RecordNo — DefaultValue; stable record ID b0732ad6-0546-4bea-9f04-e99d1f89a1c1. Source $.GraphData.Items[255].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="AutoNumberSequenceValueGeneratorOflong" xmlns="http://schemas.intelex.net"><IncrementStep>1</IncrementStep><StartValue>1</StartValue></ValueGenerator>
```

### E1384-Calculation

FragApplication_AbCorrectivActiObject.ActualCost — Calculation; stable record ID 30b9dd80-625a-46ad-ba67-8b876ef0b7ef. Source $.GraphData.Items[477].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>SUM(Costs.ConvertedCost)</Expression></CalculationBase>
```

### E549-DefaultValue

FragApplication_AbCorrectivActiObject.CheckListAnsAct — DefaultValue; stable record ID c862069d-0eed-42a7-9f89-a1db6d63aafc. Source $.GraphData.Items[200].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>IFNULL(EventRelated:CLF_FindingObject.ChecklistAnswer, RelatedQstions.ChecklistAnswer)</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E1410-DefaultValue

FragApplication_AbCorrectivActiObject.CPARTypeID — DefaultValue; stable record ID 19f218b7-770b-480b-8dcd-b6423e365e32. Source $.GraphData.Items[485].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfFragApplication_CorrectivePreveObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>d0de0e2b-dde6-4f41-914c-da08371636a0</Id></ValueGenerator>
```

### E1418-DefaultValue

FragApplication_AbCorrectivActiObject.HelperQPType — DefaultValue; stable record ID 2f31ed13-8f3a-4c56-a71b-269ab09362a6. Source $.GraphData.Items[488].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>IF(ReactionPlan&lt;&gt;NULL, "QP_ReactionPlanObject",(IF(RecoAction&lt;&gt;NULL,"QP_RecoActionObject","NULL")))</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E1382-DefaultValue

FragApplication_AbCorrectivActiObject.IsCompleted — DefaultValue; stable record ID 84565854-3e9a-4898-aad8-0fc944032bc4. Source $.GraphData.Items[476].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E1436-DefaultValue

FragApplication_AbCorrectivActiObject.ReportedBy — DefaultValue; stable record ID 50a265fc-8379-40f9-8300-1912b9a41e03. Source $.GraphData.Items[495].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>CreatedBy</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E1267-DefaultValue

FragApplication_AbCorrectivActiObject.ReportedOn — DefaultValue; stable record ID ddba862e-0f31-43dd-a1f6-38d33e2e1f9e. Source $.GraphData.Items[441].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>DateCreated</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E1369-Calculation

FragApplication_AbCorrectivActiObject.ToCostofActions — Calculation; stable record ID 4722399e-aec9-439c-9811-cc65d737caf5. Source $.GraphData.Items[472].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>SUM(Costs.ConvertedCost)</Expression></CalculationBase>
```

### E1127-DefaultValue

FragApplication_ColorObject.TextColor — DefaultValue; stable record ID 30bd5f30-cc0b-44c9-95c3-6d17ff93e3af. Source $.GraphData.Items[389].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfFragApplication_ColorObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>2917ee4e-4752-4062-9c5e-e7b6b8ab01ee</Id></ValueGenerator>
```

### E365-DefaultValue

Insp_EquipInspectionObject.CreateMode — DefaultValue; stable record ID 50725df8-679c-4fd2-9095-62c5122b7ad6. Source $.GraphData.Items[137].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>true</Value></ValueGenerator>
```

### E1302-DefaultValue

Insp_EquipInspectionObject.FApprovalFields — DefaultValue; stable record ID d70ea2f0-12ed-4d92-a9b4-820ed07c54be. Source $.GraphData.Items[448].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOflong5F2dSckg" xmlns="http://schemas.intelex.net"><Value>0</Value></ValueGenerator>
```

### E1039-Calculation

Insp_EquipInspectionObject.HelpeIsComplete — Calculation; stable record ID 36a299a7-ebec-4c79-97e9-46fa669a1d9a. Source $.GraphData.Items[356].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>IF(CompletedOn&lt;&gt;NULL, 1, 0)</Expression></CalculationBase>
```

### E145-DefaultValue

Insp_EquipInspectionObject.IPCreate — DefaultValue; stable record ID 2643ed12-3064-457d-9543-510de5cdd047. Source $.GraphData.Items[47].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfConfgAppSetting_InstructionTextObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>f2fc8941-171e-448d-8bc3-95efcc02d037</Id></ValueGenerator>
```

### E2139-DefaultValue

Insp_EquipInspectionObject.IPDraft — DefaultValue; stable record ID d462ff30-a0b6-4295-99a5-f388518e58cf. Source $.GraphData.Items[734].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfConfgAppSetting_InstructionTextObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>ac515d70-e607-4cf2-bc42-eeb232e532e9</Id></ValueGenerator>
```

### E1139-DefaultValue

Insp_EquipInspectionObject.IPInProgress — DefaultValue; stable record ID 9b1cdb7b-02f4-43f5-9b70-8b851573f79e. Source $.GraphData.Items[393].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfConfgAppSetting_InstructionTextObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>ec8f5d0f-3a55-406a-a0b2-7cfa4f833b02</Id></ValueGenerator>
```

### E2926-DefaultValue

Insp_EquipInspectionObject.IPReview — DefaultValue; stable record ID 94ca1dd7-ed7b-4969-92f7-8e09d32bb6a0. Source $.GraphData.Items[881].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfConfgAppSetting_InstructionTextObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>01977bca-daf0-4a7b-8f9f-02da0b94083d</Id></ValueGenerator>
```

### E32-DefaultValue

Insp_EquipInspectionObject.IPReview2 — DefaultValue; stable record ID 2f1a33ea-4872-4162-8155-6f8b5f66d962. Source $.GraphData.Items[3].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="EntityValueGeneratorOfConfgAppSetting_InstructionTextObjectjuNyfaHs" xmlns="http://schemas.intelex.net"><Id>976cb8d4-8e8e-4e9b-a335-7fadc1af3bd7</Id></ValueGenerator>
```

### E2911-DefaultValue

Insp_EquipInspectionObject.LNoticeonCreate — DefaultValue; stable record ID 93e15099-4472-4c16-a4d3-63dc141822ae. Source $.GraphData.Items[877].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfstring" xmlns="http://schemas.intelex.net"><Value>Before adding users to the Distribution List of this Inspection, please click the Continue button.</Value></ValueGenerator>
```

### E1929-Calculation

Insp_EquipInspectionObject.NotifiDate — Calculation; stable record ID d758cbd9-6ee5-4322-9637-d5d65ff3ef73. Source $.GraphData.Items[652].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>Workflow.DueDate</Expression></CalculationBase>
```

### E1471-DefaultValue

Insp_EquipInspectionObject.ReleActionPlans — DefaultValue; stable record ID 70e6f8b9-7cac-4ed3-9b53-705c7b25a4b3. Source $.GraphData.Items[504].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E2131-DefaultValue

Insp_EquipInspectionObject.SApprovalFields — DefaultValue; stable record ID 9b12aa00-de98-41c7-9b59-e31a345653e7. Source $.GraphData.Items[730].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOflong5F2dSckg" xmlns="http://schemas.intelex.net"><Value>0</Value></ValueGenerator>
```

### E1810-DefaultValue

Insp_EquipListOptionObject.Active — DefaultValue; stable record ID e4421222-cb13-4c57-878b-64e4742b0c25. Source $.GraphData.Items[607].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>true</Value></ValueGenerator>
```

### E2367-DefaultValue

Insp_EquipListOptionObject.RecordNo — DefaultValue; stable record ID dab09e19-2bf8-486e-837d-aa9f86fcde46. Source $.GraphData.Items[796].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="AutoNumberSequenceValueGeneratorOflong" xmlns="http://schemas.intelex.net"><IncrementStep>1</IncrementStep><StartValue>1</StartValue></ValueGenerator>
```

### E688-FilterExpression

Insp_InspectionAbsObject.DistributioList — FilterExpression; stable record ID 5a07e7cd-ddc0-400a-9fa8-95e8d229ed9a. Source $.GraphData.Items[251].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "IsNull",
      "For": "Email",
      "Negate": true
    }
  ]
}
```

### E2948-Calculation

Insp_InspectionAbsObject.InsDisplayField — Calculation; stable record ID 5ffb768d-9f3a-4717-b121-1f53166ba04c. Source $.GraphData.Items[891].FieldData.Calculation.

```xml
<?xml version="1.0" encoding="utf-16"?><CalculationBase xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptExpressionCalculation" xmlns="http://schemas.intelex.net"><Expression>CONCATENATE("Inspection No. ", RecordNo, " - Inspection Type: ",  TypeOfInspec, " (", PubChecklist, ")")   </Expression></CalculationBase>
```

### E1218-FilterExpression

Insp_InspectionAbsObject.InspecChecklist — FilterExpression; stable record ID 38cf09f1-884b-4ff6-adbe-376e259934e1. Source $.GraphData.Items[420].FieldData.FilterExpression.

```json
{
  "__type": "AdvancedExpression",
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Dependent",
        "Parse": false,
        "FieldExpression": "TypeOfInspec",
        "ID": null
      },
      "For": "ChecklistType",
      "Negate": false
    },
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Value",
        "Parse": false,
        "Text": "TRUE",
        "ID": null
      },
      "For": "Active",
      "Negate": false
    },
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Value",
        "Parse": false,
        "Text": "TRUE",
        "ID": null
      },
      "For": "IsActive",
      "Negate": false
    }
  ],
  "AdvancedFilterFormula": "A and B and C",
  "AdvancedFilterFormulaEnabled": true
}
```

### E1493-DefaultValue

Insp_InspectionAbsObject.InspectionDate — DefaultValue; stable record ID cd430231-b284-4f17-89a4-ec4bb6c7afae. Source $.GraphData.Items[512].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="TodayValueGenerator" xmlns="http://schemas.intelex.net" />
```

### E101-DefaultValue

Insp_InspectionAbsObject.PersResponsible — DefaultValue; stable record ID 8512c9ba-2b69-4288-a5ac-babe743b902c. Source $.GraphData.Items[28].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>CURRENTUSER</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E2699-FilterExpression

Insp_InspectionAbsObject.TypeOfInspec — FilterExpression; stable record ID 41e9639a-c66f-4481-8f99-161e952de440. Source $.GraphData.Items[874].GraphData.Items[20].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Value",
        "Parse": false,
        "Text": "TRUE",
        "ID": null
      },
      "For": "Active",
      "Negate": false
    }
  ]
}
```

### E360-DefaultValue

Insp_InspRoleOptionObject.Active — DefaultValue; stable record ID 298ed853-e3e1-4bc7-81c0-8a2b00b8964c. Source $.GraphData.Items[135].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>true</Value></ValueGenerator>
```

### E354-DefaultValue

Insp_InspRoleOptionObject.RecordNo — DefaultValue; stable record ID 765117ea-c224-4b9f-8d8f-032f02174002. Source $.GraphData.Items[132].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="AutoNumberSequenceValueGeneratorOflong" xmlns="http://schemas.intelex.net"><IncrementStep>1</IncrementStep><StartValue>1</StartValue></ValueGenerator>
```

### E1610-DefaultValue

Insp_TypeObject.Active — DefaultValue; stable record ID 93228969-955c-46f2-8aee-e234232b11e8. Source $.GraphData.Items[548].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>true</Value></ValueGenerator>
```

### E1563-DefaultValue

Insp_TypeObject.ComplValidation — DefaultValue; stable record ID db0ba942-520a-490c-8afe-080faf3d146e. Source $.GraphData.Items[537].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>true</Value></ValueGenerator>
```

### E1600-FilterExpression

Insp_TypeObject.ELOptions — FilterExpression; stable record ID e63c75ff-4efa-4a39-990b-356be5084374. Source $.GraphData.Items[544].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Value",
        "Parse": false,
        "Text": "TRUE",
        "ID": null
      },
      "For": "Active",
      "Negate": false
    }
  ]
}
```

### E163-DefaultValue

Insp_TypeObject.EquipmMandatory — DefaultValue; stable record ID f747b310-6843-4778-8e8f-22e4fb5df5b4. Source $.GraphData.Items[55].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E1103-DefaultValue

Insp_TypeObject.FindingTracking — DefaultValue; stable record ID a1ab899a-9a59-4c86-9fe8-9219eef577db. Source $.GraphData.Items[379].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="StaticValueGeneratorOfNullableOfboolean5F2dSckg" xmlns="http://schemas.intelex.net"><Value>false</Value></ValueGenerator>
```

### E591-FilterExpression

Insp_TypeObject.InspRoleOption — FilterExpression; stable record ID 11f50da5-6ee5-4b16-9055-daf3f41317af. Source $.GraphData.Items[212].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Value",
        "Parse": false,
        "Text": "TRUE",
        "ID": null
      },
      "For": "Active",
      "Negate": false
    }
  ]
}
```

### E989-FilterExpression

Insp_TypeObject.InspRoleOption2 — FilterExpression; stable record ID c7ef42b3-ee18-457a-bca4-59d89515f989. Source $.GraphData.Items[336].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Value",
        "Parse": false,
        "Text": "TRUE",
        "ID": null
      },
      "For": "Active",
      "Negate": false
    }
  ]
}
```

### E1247-FilterExpression

Insp_TypeObject.PRMethod — FilterExpression; stable record ID 27d42e8f-434d-48f2-8779-e2c7ecb8906e. Source $.GraphData.Items[433].FieldData.FilterExpression.

```json
{
  "__type": "Expression",
  "Operator": 0,
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Value",
        "Parse": false,
        "Text": "TRUE",
        "ID": null
      },
      "For": "Active",
      "Negate": false
    },
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Value",
        "Parse": false,
        "Text": "Specific Person",
        "ID": null
      },
      "For": "Name",
      "Negate": true
    }
  ]
}
```

### E1593-FilterExpression

Insp_TypeObject.PRMethodSndRev — FilterExpression; stable record ID 5f249ea5-ace8-453c-926f-4554312c6d89. Source $.GraphData.Items[541].FieldData.FilterExpression.

```json
{
  "__type": "AdvancedExpression",
  "Predicates": [
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Value",
        "Parse": false,
        "Text": "TRUE",
        "ID": null
      },
      "For": "Active",
      "Negate": false
    },
    {
      "__type": "Common",
      "Type": 1,
      "Operand": {
        "__type": "Value",
        "Parse": false,
        "Text": "Specific Person",
        "ID": null
      },
      "For": "Name",
      "Negate": true
    }
  ],
  "AdvancedFilterFormula": "A AND B",
  "AdvancedFilterFormulaEnabled": true
}
```

### E1111-DefaultValue

QP_NodeAbstractObject.ProjRev — DefaultValue; stable record ID 6ac6161a-765e-4a77-af6a-e4d7ea0f631e. Source $.GraphData.Items[383].FieldData.DefaultValue.

```xml
<?xml version="1.0" encoding="utf-16"?><ValueGenerator xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValueGenerator" xmlns="http://schemas.intelex.net"><Expression>Parent.ProjRev</Expression><IsExpressionValid>true</IsExpressionValid></ValueGenerator>
```

### E2195-FlowDefinition

Unresolved.Schedule and Assign Audit — FlowDefinition; stable record ID f8f11755-4150-462c-b473-8d0599e613ae. Source $.GraphData.Items[751].GraphData.Items[10].FieldData.FlowDefinition.

```json
[
  {
    "__type": "transition",
    "name": null,
    "stage": "f3a3f352-57ea-4c1e-9e7d-130fa307c956"
  }
]
```

### E2201-FlowDefinition

Unresolved.Complete Audit — FlowDefinition; stable record ID 157d0372-8d98-4d54-b454-ba9e8f59791c. Source $.GraphData.Items[751].GraphData.Items[17].FieldData.FlowDefinition.

```json
[
  {
    "__type": "complete",
    "name": null,
    "status": "347a2c90-b45e-42be-a7c9-babcc7dcb767",
    "view": null
  }
]
```

### E2448-FlowDefinition

Unresolved.Submit and Close — FlowDefinition; stable record ID 05788d97-1ab0-4a4e-a908-7dd20b9eaf00. Source $.GraphData.Items[819].GraphData.Items[8].FieldData.FlowDefinition.

```json
[
  {
    "__type": "complete",
    "name": null,
    "status": "08e8915d-5bc4-47ea-8e7b-84b93789b35c",
    "view": null
  }
]
```

### E2518-FlowDefinition

Unresolved.Complete — FlowDefinition; stable record ID b736836e-f77d-4a45-967a-712179a2cf74. Source $.GraphData.Items[834].GraphData.Items[9].FieldData.FlowDefinition.

```json
[
  {
    "__type": "complete",
    "status": "d0186f2b-77e1-46d4-a2d0-e1e1866718ea",
    "view": null
  },
  {
    "__type": "setvalue",
    "field": "IsCompleted",
    "value": "TRUE"
  },
  {
    "__type": "if",
    "then": [
      {
        "__type": "setvalue",
        "field": "CompletionDate",
        "value": "TODAY"
      }
    ],
    "else": [],
    "condition": "CompletionDate=NULL"
  },
  {
    "__type": "if",
    "then": [
      {
        "__type": "setvalue",
        "field": "CompletedBy",
        "value": "CURRENTUSER"
      }
    ],
    "else": [],
    "condition": "CompletedBy=NULL"
  },
  {
    "__type": "if",
    "then": [
      {
        "__type": "error",
        "message": "In order to proceed, please fill out Completion Notes"
      }
    ],
    "else": [],
    "condition": "CompletionNotes=NULL"
  }
]
```

### E2697-FlowDefinition

Unresolved.Continue — FlowDefinition; stable record ID 16716726-f88d-4ba5-a96f-3a362729b263. Source $.GraphData.Items[874].GraphData.Items[17].FieldData.FlowDefinition.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "CreateMode",
    "else": [
      {
        "__type": "if",
        "name": null,
        "condition": "COUNT(QuestionAnswers)=0",
        "else": [
          {
            "__type": "transition",
            "name": null,
            "stage": "12319bf2-611d-40e1-8842-02fc17ab27db"
          },
          {
            "__type": "setvalue",
            "name": null,
            "field": "oSectionAnswers",
            "value": "TRUE"
          }
        ],
        "then": [
          {
            "__type": "error",
            "name": null,
            "message": "Please add at least one Question to the Checklist."
          }
        ]
      }
    ],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "CreateMode",
        "value": "FALSE"
      },
      {
        "__type": "if",
        "name": null,
        "condition": "InspecChecklist=NULL",
        "else": [
          {
            "__type": "transition",
            "name": null,
            "stage": "12319bf2-611d-40e1-8842-02fc17ab27db"
          },
          {
            "__type": "setvalue",
            "name": null,
            "field": "oSectionAnswers",
            "value": "TRUE "
          }
        ],
        "then": [
          {
            "__type": "transition",
            "name": null,
            "stage": "4f8ec485-60e4-4d7f-b902-5a5b9d7d58a0"
          }
        ]
      }
    ]
  }
]
```

### E2702-FlowDefinition

Unresolved.Complete Approval Stage — FlowDefinition; stable record ID ce882c91-e860-4bae-8853-bb826f56cbea. Source $.GraphData.Items[874].GraphData.Items[35].FieldData.FlowDefinition.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "RevieweDecision<>NULL",
    "else": [
      {
        "__type": "error",
        "name": null,
        "message": "Please fill out the First Reviewer Approval Decision section."
      }
    ],
    "then": [
      {
        "__type": "if",
        "name": null,
        "condition": "RevieweDecision.Name=\"Rejected\"",
        "else": [
          {
            "__type": "if",
            "name": null,
            "condition": "TypeOfInspec.ComplValidation",
            "else": [],
            "then": [
              {
                "__type": "if",
                "name": null,
                "condition": "Progress<1",
                "else": [],
                "then": [
                  {
                    "__type": "setvalue",
                    "name": null,
                    "field": "HelpErrorMes",
                    "value": "JOIN(FILTER(QuestionAnswers.HelpQuestiText, \"<>\", NULL), \", \")"
                  },
                  {
                    "__type": "if",
                    "name": null,
                    "condition": "TypeOfInspec.FindingTracking",
                    "else": [
                      {
                        "__type": "error",
                        "name": null,
                        "message": "The following Questions are not complete and require Answers, Comments, and/or Action Plans: {#HelpErrorMes}."
                      }
                    ],
                    "then": [
                      {
                        "__type": "error",
                        "name": null,
                        "message": "The following Questions are not complete and require Answers, Comments, and/or Findings: {#HelpErrorMes}."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "__type": "if",
            "name": null,
            "condition": "TypeOfInspec.FindingTracking",
            "else": [],
            "then": [
              {
                "__type": "if",
                "name": null,
                "condition": "SUM(Findings.IsOpen)>0",
                "else": [],
                "then": [
                  {
                    "__type": "error",
                    "name": null,
                    "message": "Please ensure that all Findings have a Status of \"Closed\" or \"Closed without Action\" before marking this Inspection as complete."
                  }
                ]
              }
            ]
          },
          {
            "__type": "setvalue",
            "name": null,
            "field": "FirstReviewBy",
            "value": "CURRENTUSER"
          },
          {
            "__type": "setvalue",
            "name": null,
            "field": "DaofFirstReview",
            "value": "NOW"
          },
          {
            "__type": "if",
            "name": null,
            "condition": "TypeOfInspec.EnaSecondReview=TRUE",
            "else": [
              {
                "__type": "setvalue",
                "name": null,
                "field": "ReleActionPlans",
                "value": "TRUE"
              },
              {
                "__type": "complete",
                "name": null,
                "status": "af76ff46-8925-49b1-ac08-fa9d856ed9f8",
                "view": null
              },
              {
                "__type": "notify",
                "name": null,
                "subjectfields": [
                  "DistributioList"
                ],
                "subjects": [],
                "template": "1af0e759-906f-4711-8d03-0ef894975f57"
              },
              {
                "__type": "setvalue",
                "name": null,
                "field": "Workflow.CurrentStage",
                "value": "NULL"
              },
              {
                "__type": "setvalue",
                "name": null,
                "field": "Workflow.PersonResponsible",
                "value": "NULL"
              }
            ],
            "then": [
              {
                "__type": "transition",
                "name": null,
                "stage": "2685d986-cf85-4037-adc1-ed03ba1ff765"
              },
              {
                "__type": "notify",
                "name": null,
                "subjectfields": [],
                "subjects": [
                  "320bc96e-5a2d-4ff6-b697-b916ae1eae29"
                ],
                "template": "c0968e63-8cc0-47c7-aa78-6136ff03c247"
              },
              {
                "__type": "setvalue",
                "name": null,
                "field": "RevieweDecisio1",
                "value": "NULL"
              },
              {
                "__type": "setvalue",
                "name": null,
                "field": "SApprovalFields",
                "value": "0"
              }
            ]
          }
        ],
        "then": [
          {
            "__type": "if",
            "name": null,
            "condition": "RevieweComments=0",
            "else": [
              {
                "__type": "transition",
                "name": null,
                "stage": "12319bf2-611d-40e1-8842-02fc17ab27db"
              },
              {
                "__type": "notify",
                "name": null,
                "subjectfields": [],
                "subjects": [
                  "320bc96e-5a2d-4ff6-b697-b916ae1eae29"
                ],
                "template": "56aee6b3-3dbc-4bb3-a0c7-f85817dc306a"
              },
              {
                "__type": "setvalue",
                "name": null,
                "field": "FApprovalFields",
                "value": "1"
              }
            ],
            "then": [
              {
                "__type": "error",
                "name": null,
                "message": "Please enter your comments first.\n"
              }
            ]
          }
        ]
      }
    ]
  }
]
```

### E2704-FlowDefinition

Unresolved.Complete Inspection — FlowDefinition; stable record ID c5e8463b-e881-4650-bc58-4c6aca01c59a. Source $.GraphData.Items[874].GraphData.Items[40].FieldData.FlowDefinition.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "TypeOfInspec.ComplValidation",
    "else": [],
    "then": [
      {
        "__type": "if",
        "name": null,
        "condition": "Progress<1",
        "else": [],
        "then": [
          {
            "__type": "setvalue",
            "name": null,
            "field": "HelpErrorMes",
            "value": "JOIN(FILTER(QuestionAnswers.HelpQuestiText, \"<>\", NULL), \", \")"
          },
          {
            "__type": "if",
            "name": null,
            "condition": "TypeOfInspec.FindingTracking",
            "else": [
              {
                "__type": "error",
                "name": null,
                "message": "The following Questions are not complete and require Answers, Comments, and/or Action Plans: {#HelpErrorMes}."
              }
            ],
            "then": [
              {
                "__type": "error",
                "name": null,
                "message": "The following Questions are not complete and require Answers, Comments, and/or Findings: {#HelpErrorMes}."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "__type": "if",
    "name": null,
    "condition": "TypeOfInspec.FindingTracking",
    "else": [],
    "then": [
      {
        "__type": "if",
        "name": null,
        "condition": "SUM(Findings.IsOpen)>0",
        "else": [],
        "then": [
          {
            "__type": "error",
            "name": null,
            "message": "Please ensure that all Findings have a Status of \"Closed\" or \"Closed without Action\" before marking this Inspection as complete."
          }
        ]
      }
    ]
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "CompletedBy",
    "value": "CURRENTUSER"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "CompletedOn",
    "value": "NOW"
  },
  {
    "__type": "if",
    "name": null,
    "condition": "TypeOfInspec.EnabFirstReview=TRUE",
    "else": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "ReleActionPlans",
        "value": "TRUE"
      },
      {
        "__type": "complete",
        "name": null,
        "status": "af76ff46-8925-49b1-ac08-fa9d856ed9f8",
        "view": null
      },
      {
        "__type": "notify",
        "name": null,
        "subjectfields": [
          "DistributioList"
        ],
        "subjects": [],
        "template": "1af0e759-906f-4711-8d03-0ef894975f57"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "Workflow.CurrentStage",
        "value": "NULL"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "Workflow.PersonResponsible",
        "value": "NULL"
      }
    ],
    "then": [
      {
        "__type": "if",
        "name": null,
        "condition": "(IF(TypeOfInspec.PRMethod.Name='Specific Person', Reviewer, IF(TypeOfInspec.PRMethod.Name='Role', TypeOfInspec.Role, IF(TypeOfInspec.PRMethod.Name='Immediate Supervisor', PersResponsible.Supervisor, IF(TypeOfInspec.PRMethod.Name='Expression', EVAL(TypeOfInspec.Expression), NULL)))) = NULL)",
        "else": [
          {
            "__type": "transition",
            "name": null,
            "stage": "e71ff544-8b8f-46b9-a555-d4c8ffe0a0c6"
          },
          {
            "__type": "notify",
            "name": null,
            "subjectfields": [],
            "subjects": [
              "320bc96e-5a2d-4ff6-b697-b916ae1eae29"
            ],
            "template": "c0968e63-8cc0-47c7-aa78-6136ff03c247"
          },
          {
            "__type": "setvalue",
            "name": null,
            "field": "RevieweDecision",
            "value": "NULL"
          },
          {
            "__type": "setvalue",
            "name": null,
            "field": "FApprovalFields",
            "value": "0"
          },
          {
            "__type": "setvalue",
            "name": null,
            "field": "SApprovalFields",
            "value": "0"
          }
        ],
        "then": [
          {
            "__type": "error",
            "name": null,
            "message": "The selected inspector does not have a reporting supervisor. Please select a different inspector or ask your administrator for further assistance."
          }
        ]
      }
    ]
  }
]
```

### E2706-FlowDefinition

Unresolved.Complete Approval Stage — FlowDefinition; stable record ID 1c9791e1-7f56-4f56-a2ac-a9167e15539d. Source $.GraphData.Items[874].GraphData.Items[43].FieldData.FlowDefinition.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "RevieweDecisio1<>NULL",
    "else": [
      {
        "__type": "error",
        "name": null,
        "message": "Please fill out the Second Reviewer Approval Decision section."
      }
    ],
    "then": [
      {
        "__type": "if",
        "name": null,
        "condition": " RevieweDecisio1.Name=\"Rejected\"",
        "else": [
          {
            "__type": "if",
            "name": null,
            "condition": "TypeOfInspec.ComplValidation",
            "else": [],
            "then": [
              {
                "__type": "if",
                "name": null,
                "condition": "Progress<1",
                "else": [],
                "then": [
                  {
                    "__type": "setvalue",
                    "name": null,
                    "field": "HelpErrorMes",
                    "value": "JOIN(FILTER(QuestionAnswers.HelpQuestiText, \"<>\", NULL), \", \")"
                  },
                  {
                    "__type": "if",
                    "name": null,
                    "condition": "TypeOfInspec.FindingTracking",
                    "else": [
                      {
                        "__type": "error",
                        "name": null,
                        "message": "The following Questions are not complete and require Answers, Comments, and/or Action Plans: {#HelpErrorMes}."
                      }
                    ],
                    "then": [
                      {
                        "__type": "error",
                        "name": null,
                        "message": "The following Questions are not complete and require Answers, Comments, and/or Findings: {#HelpErrorMes}."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "__type": "if",
            "name": null,
            "condition": "TypeOfInspec.FindingTracking",
            "else": [],
            "then": [
              {
                "__type": "if",
                "name": null,
                "condition": "SUM(Findings.IsOpen)>0",
                "else": [],
                "then": [
                  {
                    "__type": "error",
                    "name": null,
                    "message": "Please ensure that all Findings have a Status of \"Closed\" or \"Closed without Action\" before marking this Inspection as complete."
                  }
                ]
              }
            ]
          },
          {
            "__type": "setvalue",
            "name": null,
            "field": "SecondReviewBy",
            "value": "CURRENTUSER"
          },
          {
            "__type": "setvalue",
            "name": null,
            "field": "DofSecondReview",
            "value": "NOW"
          },
          {
            "__type": "setvalue",
            "name": null,
            "field": "ReleActionPlans",
            "value": "TRUE"
          },
          {
            "__type": "complete",
            "name": null,
            "status": "af76ff46-8925-49b1-ac08-fa9d856ed9f8",
            "view": null
          },
          {
            "__type": "notify",
            "name": null,
            "subjectfields": [
              "DistributioList"
            ],
            "subjects": [],
            "template": "1af0e759-906f-4711-8d03-0ef894975f57"
          },
          {
            "__type": "setvalue",
            "name": null,
            "field": "Workflow.CurrentStage",
            "value": "NULL"
          },
          {
            "__type": "setvalue",
            "name": null,
            "field": "Workflow.PersonResponsible",
            "value": "NULL"
          }
        ],
        "then": [
          {
            "__type": "if",
            "name": null,
            "condition": "RevieweComment1=0",
            "else": [
              {
                "__type": "transition",
                "name": null,
                "stage": "e71ff544-8b8f-46b9-a555-d4c8ffe0a0c6"
              },
              {
                "__type": "notify",
                "name": null,
                "subjectfields": [],
                "subjects": [
                  "320bc96e-5a2d-4ff6-b697-b916ae1eae29"
                ],
                "template": "56aee6b3-3dbc-4bb3-a0c7-f85817dc306a"
              },
              {
                "__type": "setvalue",
                "name": null,
                "field": "SApprovalFields",
                "value": "1"
              }
            ],
            "then": [
              {
                "__type": "error",
                "name": null,
                "message": "Please enter your comments first."
              }
            ]
          }
        ]
      }
    ]
  }
]
```

### E3018-FlowDefinition

Unresolved.Assign Audit — FlowDefinition; stable record ID d960811c-b58f-4147-99a8-3f638671e9a7. Source $.GraphData.Items[911].GraphData.Items[12].FieldData.FlowDefinition.

```json
[
  {
    "__type": "transition",
    "name": null,
    "stage": "06eb1559-18ce-432f-beca-29bd271577ae"
  }
]
```

### E3020-FlowDefinition

Unresolved.Close Audit — FlowDefinition; stable record ID 5d564abe-eb22-4fc0-9199-9e73c4c0cdb5. Source $.GraphData.Items[911].GraphData.Items[16].FieldData.FlowDefinition.

```json
[
  {
    "__type": "complete",
    "name": null,
    "status": "538f3b92-c20d-4676-a67e-5cd2658bb2f7",
    "view": null
  }
]
```

### E55-Flow

ActionPlans_ActionPlanAbsObject.Attach Risk if Assessment Results is not blank — Flow; stable record ID e81b321c-43f1-42cb-a8b0-59a13810bfcf. Source $.GraphData.Items[10].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "AssessResults<>NULL",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "RiskAbs",
        "value": "AssessResults.RiskAssessment.Risk"
      }
    ]
  }
]
```

### E187-Flow

FragApplication_AbCorrectivActiObject.FMEA-Update Recommended Action Action Taken — Flow; stable record ID d5dfcfa3-15ac-46fb-a953-84360e210904. Source $.GraphData.Items[66].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "AND(RecoAction <> NULL, Workflow.WorkflowStatus = \"Completed\")",
    "else": [],
    "then": [
      {
        "__type": "if",
        "name": null,
        "condition": "RecoAction.ActionTaken = NULL",
        "else": [
          {
            "__type": "setvalue",
            "name": null,
            "field": "RecoAction.ActionTaken",
            "value": "CONCATENATE(RecoAction.ActionTaken, \" /  \" ,CPARActionReq)"
          }
        ],
        "then": [
          {
            "__type": "setvalue",
            "name": null,
            "field": "RecoAction.ActionTaken",
            "value": "CPARActionReq"
          }
        ]
      }
    ]
  }
]
```

### E241-Flow

CLF_PubQuestObject.Actions on Update — Flow; stable record ID e380ddfc-c2bb-4928-bbaf-620266f232da. Source $.GraphData.Items[86].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "AND(ISCHANGED(hCheckAnswer), hCheckAnswer <> NULL)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "hCheckAnswer.QuestionAnswers",
        "value": "GETRELATED(\"CLF_QuestionAnswerObject\", \"ChecklistAnswerId\", hCheckAnswerId, \"PubQuestionId\", Id)"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "hCheckAnswer",
        "value": "NULL"
      }
    ]
  }
]
```

### E265-Flow

CLF_PubQuestObject.Copy Values from Question during Publish — Flow; stable record ID 2423e735-77e4-4fef-a298-75d196cfa945. Source $.GraphData.Items[95].FieldData.Flow.

```json
[
  {
    "__type": "setvalue",
    "name": null,
    "field": "QuestionRef",
    "value": "Question.QuestionRef"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "Order",
    "value": "Question.Order"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "Content",
    "value": "Question.Content"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "Guideline",
    "value": "Question.Guideline"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "SectionName",
    "value": "Question.ExistingSection.SectionName"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "Section",
    "value": "SectionName"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "AnswerType",
    "value": "Question.AnswerType"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "ChoiceList",
    "value": "Question.ChoiceList"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "DefaultChoice",
    "value": "Question.DefaultChoice"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "DefaultChoices",
    "value": "Question.DefaultChoices"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "DefaultBool",
    "value": "Question.DefaultBool"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "AllowNA",
    "value": "Question.AllowNA"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "ComReqIfNA",
    "value": "Question.ComReqIfNA"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "FindReqChoices",
    "value": "Question.FindReqChoices"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "ComReqChoices",
    "value": "Question.ComReqChoices"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "ActReqChoices",
    "value": "Question.ActReqChoices"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "VisDepNoAns",
    "value": "Question.VisDepNoAns"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "VisibleIfs",
    "value": "Question.VisibleIfs"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "AnswerRequired",
    "value": "Question.AnswerRequired"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "Weight",
    "value": "Question.Weight"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "ValueChoiceList",
    "value": "Question.ValueChoiceList"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "AbsoluteOrder",
    "value": "Question.AbsoluteOrder"
  }
]
```

### E429-Flow

CLF_SectionAnswerObject.Relate to Checklist Answer — Flow; stable record ID 6daa353b-8a44-40fc-9690-38b0dfda12e2. Source $.GraphData.Items[161].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "CheckAnswerGUID<>NULL",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "ChecklistAnswerId",
        "value": "CheckAnswerGUID"
      }
    ]
  }
]
```

### E437-Flow

CLF_SinglechecklistObject.Create Anwer Records — Flow; stable record ID 3959c807-2419-407d-9c28-c45fcc9b2f2b. Source $.GraphData.Items[165].FieldData.Flow.

```json
[
  {
    "__type": "advance",
    "name": null,
    "actionName": "CLF_ChecklistAnswerObject:CLF_SinglechecklistObject.CreateAnswers"
  }
]
```

### E477-Flow

CLF_InsActionPlanObject.Send Assignment Notification Upon Completion of Inspection — Flow; stable record ID 9fec82c9-b4ad-4d10-b7fd-8e2a78f96f39. Source $.GraphData.Items[179].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "ISCHANGED(HelperReleaseAP) ",
    "else": [],
    "then": [
      {
        "__type": "if",
        "name": null,
        "condition": "HelperReleaseAP=TRUE",
        "else": [],
        "then": [
          {
            "__type": "notify",
            "name": null,
            "subjectfields": [],
            "subjects": [
              "320bc96e-5a2d-4ff6-b697-b916ae1eae29"
            ],
            "template": "6d7d6bd1-822a-4dee-98d1-c394ee2ecaf3"
          }
        ]
      }
    ]
  }
]
```

### E522-Flow

ActionPlans_ActionPlanAbsObject.Start Date must be on or after today. — Flow; stable record ID ea65d403-a01e-4744-933b-0033b87ad15f. Source $.GraphData.Items[190].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "StartDate<TODAY",
    "else": [],
    "then": [
      {
        "__type": "error",
        "name": null,
        "message": "'Start Date' must be on or after Today."
      }
    ]
  }
]
```

### E629-Flow

CLF_QuestAbstractObject.(0) Actions on Create & Update — Flow; stable record ID e4435908-cc8f-40b4-85f5-b9c25a427938. Source $.GraphData.Items[227].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "AND(IFNULL(AllowNA, FALSE),  IFNULL(ComReqIfNA, FALSE))",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "ComReqIfNA",
        "value": "FALSE"
      }
    ]
  },
  {
    "__type": "if",
    "name": null,
    "condition": "AnswerType.Value <> \"Checkbox\"",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "DefaultBool",
        "value": "NULL"
      }
    ]
  },
  {
    "__type": "if",
    "name": null,
    "condition": "AND(\nAnswerType.Value <> \"Choice\",\nAnswerType.Value <> \"Choices\"\n)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "ChoiceList",
        "value": "NULL"
      }
    ]
  },
  {
    "__type": "if",
    "name": null,
    "condition": "OR(\nAnswerType.Value <> \"Choice\",\nDefaultChoice.ChoiceList <>  ChoiceList\n)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "DefaultChoice",
        "value": "NULL"
      }
    ]
  },
  {
    "__type": "if",
    "name": null,
    "condition": "OR(\nAnswerType.Value <> \"Choice\",\nCOUNT(FILTER(ComReqChoices.ChoiceList.Id, \"<>\",  ChoiceList.Id)) > 0\n)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "ComReqChoices",
        "value": "NULL"
      }
    ]
  },
  {
    "__type": "if",
    "name": null,
    "condition": "OR(\nAnswerType.Value <> \"Choice\",\nCOUNT(FILTER(FindReqChoices.ChoiceList.Id, \"<>\",  ChoiceList.Id)) > 0\n)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "FindReqChoices",
        "value": "NULL"
      }
    ]
  },
  {
    "__type": "if",
    "name": null,
    "condition": "OR(\nAnswerType.Value <> \"Choice\",\nCOUNT(FILTER(ActReqChoices.ChoiceList.Id, \"<>\",  ChoiceList.Id)) > 0\n)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "ActReqChoices",
        "value": "NULL"
      }
    ]
  },
  {
    "__type": "if",
    "name": null,
    "condition": "OR(\nAnswerType.Value <> \"Choices\",\nCOUNT(FILTER(DefaultChoices.ChoiceList.Id, \"<>\",  ChoiceList.Id)) > 0\n)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "DefaultChoices",
        "value": "NULL"
      }
    ]
  }
]
```

### E842-Flow

CLF_QuestionAnswerObject.Clear Answer if not visible — Flow; stable record ID 496c00ea-79ec-40f3-9173-2e465bd78b22. Source $.GraphData.Items[300].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "AND(ISCHANGED(IsVisible),IsVisible<>TRUE)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "Checkbox",
        "value": "NULL"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "Choice",
        "value": "NULL"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "Choices",
        "value": "NULL"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "Date",
        "value": "NULL"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "Float",
        "value": "NULL"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "Text",
        "value": "NULL"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "Comments",
        "value": "NULL"
      }
    ]
  }
]
```

### E883-Flow

CLF_QuestionAnswerObject.(2) Actions on Update — Flow; stable record ID e5c42452-1ce2-41f7-a61f-7f02479de807. Source $.GraphData.Items[312].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "AND(ISCHANGED(TrDefaultAnswer), IFNULL(TrDefaultAnswer, FALSE))",
    "else": [],
    "then": [
      {
        "__type": "if",
        "name": null,
        "condition": "AND(PubQuestion.AnswerType.Value = \"Choice\")",
        "else": [],
        "then": [
          {
            "__type": "setvalue",
            "name": null,
            "field": "Choice",
            "value": "IFNULL(Choice, PubQuestion.DefaultChoice)"
          }
        ]
      },
      {
        "__type": "if",
        "name": null,
        "condition": "AND(PubQuestion.AnswerType.Value = \"Choices\")",
        "else": [],
        "then": [
          {
            "__type": "setvalue",
            "name": null,
            "field": "Choices",
            "value": "IFNULL(Choices, PubQuestion.DefaultChoices)"
          }
        ]
      },
      {
        "__type": "if",
        "name": null,
        "condition": "AND(PubQuestion.AnswerType.Value = \"Checkbox\")",
        "else": [],
        "then": [
          {
            "__type": "setvalue",
            "name": null,
            "field": "Checkbox",
            "value": "IFNULL(Checkbox, PubQuestion.DefaultBool)"
          }
        ]
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "TrDefaultAnswer",
        "value": "FALSE"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "IsFilled",
        "value": "-42"
      }
    ]
  },
  {
    "__type": "if",
    "name": null,
    "condition": "AND(ISCHANGED(MassUpChoice), MassUpChoice <> NULL)",
    "else": [],
    "then": [
      {
        "__type": "if",
        "name": null,
        "condition": "PubQuestion.AnswerType.Value <> \"Choice\"",
        "else": [],
        "then": [
          {
            "__type": "error",
            "name": null,
            "message": "Question \"{#PubQuestion.QuestionRef}: {#PubQuestion.Content}\" cannot be answered via Mass Update."
          }
        ]
      },
      {
        "__type": "if",
        "name": null,
        "condition": "MassUpChoice.ChoiceList <> PubQuestion.ChoiceList",
        "else": [],
        "then": [
          {
            "__type": "setvalue",
            "name": null,
            "field": "MassUpChoiceId",
            "value": "FETCHVALUE(\"CLF_ChoiceObject\", \"Id\", \"Id Descending\", \"Name\", \"=\", MassUpChoice.Name, \"ChoiceListId\", \"=\", PubQuestion.ChoiceListId) "
          },
          {
            "__type": "if",
            "name": null,
            "condition": "MassUpChoiceId = NULL",
            "else": [],
            "then": [
              {
                "__type": "error",
                "name": null,
                "message": "The Answer selected is not an option for Question \"{#PubQuestion.QuestionRef}: {#PubQuestion.Content}\""
              }
            ]
          }
        ]
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "Choice",
        "value": "MassUpChoice"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "MassUpChoice",
        "value": "NULL"
      }
    ]
  },
  {
    "__type": "if",
    "name": null,
    "condition": "AND(ISCHANGED(IsNA), IFNULL(IsNA, FALSE))",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "Choice",
        "value": "NULL"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "Choices",
        "value": "NULL"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "Float",
        "value": "NULL"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "Text",
        "value": "NULL\n"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "Date",
        "value": "NULL"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "Checkbox",
        "value": "NULL"
      }
    ]
  }
]
```

### E935-Flow

CLF_QuestionAnswerObject.(1) Actions on Create — Flow; stable record ID 3f801a01-89d8-4b34-8906-d662536f41d2. Source $.GraphData.Items[320].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "AND(PubQuestion.AnswerType.Value = \"Choices\", COUNT(Choices) = 0)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "Choices",
        "value": "PubQuestion.DefaultChoices"
      }
    ]
  },
  {
    "__type": "if",
    "name": null,
    "condition": "IFNULL(PubQuestion.HasCondDisplay, FALSE)",
    "else": [],
    "then": [
      {
        "__type": "if",
        "name": null,
        "condition": "PubQuestion.DependsOnPubId = NULL\n",
        "else": [],
        "then": [
          {
            "__type": "setvalue",
            "name": null,
            "field": "PubQuestion.DependsOnPubId",
            "value": "GETREPORTVALUE(\"CLF_GET_DEPENDS_ON\", \"DependsOnId\", \"PubQuestionId\", \"=\", PubQuestionId)\n"
          }
        ]
      },
      {
        "__type": "if",
        "name": null,
        "condition": "AND(PubQuestion.DependsOnPubId <> NULL, COUNT(FILTER(ChecklistAnswer.PubChecklist.PubQuestions.Id, \"=\", PubQuestion.DependsOnPubId)) > 0)\n",
        "else": [],
        "then": [
          {
            "__type": "setvalue",
            "name": null,
            "field": "DependsOn",
            "value": "GETRELATED(\"CLF_QuestionAnswerObject\", \"ChecklistAnswerId\", ChecklistAnswerId, \"PubQuestionId\", PubQuestion.DependsOnPubId)\n"
          }
        ]
      }
    ]
  }
]
```

### E942-Flow

CLF_QuestionAnswerObject.[DEPRECATED] Check Consistency on Points — Flow; stable record ID ac3dd5a9-93d8-4c23-a1e1-51963cb2f876. Source $.GraphData.Items[323].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "MaxPoints <  PointsAwarded",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "PubQuestion.MaxPoints",
        "value": "NULL"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "MaxPoints",
        "value": "NULL"
      }
    ]
  }
]
```

### E952-Flow

CLF_QuestionAnswerObject.Create Section and Set Default Value — Flow; stable record ID 541c3d88-40d5-491a-b4a2-554ce2b86a5b. Source $.GraphData.Items[326].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "AND(ISCHANGED(CrSectionAnswer), CrSectionAnswer=TRUE)",
    "else": [],
    "then": [
      {
        "__type": "if",
        "name": null,
        "condition": "PubQuestion.SectionName<>NULL ",
        "else": [],
        "then": [
          {
            "__type": "setvalue",
            "name": null,
            "field": "SectionAnswer",
            "value": "GETRELATED(\"CLF_SectionAnswerObject\", \"CheckAnswerGUID\",  ChecklistAnswer.Id, \"Section\",  PubQuestion.SectionName)"
          },
          {
            "__type": "setvalue",
            "name": null,
            "field": "SectionAnswer.Sort",
            "value": "PubQuestion.SectionSort"
          }
        ]
      }
    ]
  }
]
```

### E1075-Flow

FragApplication_AbCorrectivActiObject.Clear Person Responsible and Due Date when workflow is Closed — Flow; stable record ID 5ea590ae-ce71-45d6-b91d-3ab017c20edd. Source $.GraphData.Items[371].FieldData.Flow.

```json
[
  {
    "__type": "try-catch",
    "name": null,
    "catch": [],
    "try": [
      {
        "__type": "if",
        "name": null,
        "condition": "Workflow.WorkflowStatus=\"Completed\"",
        "else": [],
        "then": [
          {
            "__type": "setvalue",
            "name": null,
            "field": "Workflow.PersonResponsible",
            "value": "NULL"
          },
          {
            "__type": "setvalue",
            "name": null,
            "field": "Workflow.DueDate",
            "value": "NULL"
          }
        ]
      }
    ]
  }
]
```

### E1236-Flow

Insp_TypeObject.Create Role — Flow; stable record ID b53786b4-3de7-4699-914a-acdcfadd13ce. Source $.GraphData.Items[428].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "AND(PRMethod.Name=\"Role\", InspRoleOption.Name=\"New\")",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "Role",
        "value": "GETRELATED(\"SysRoleEntity\", \"Name\", RoleName,\"AllowManySubjects\", TRUE, \"TrickleDown\", TRUE)"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "InspRoleOptionId",
        "value": "FETCHVALUE(\"Insp_InspRoleOptionObject\",\"Id\",\"Id Ascending\",\"Name\",\"=\",\"Existing\")"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "RoleName",
        "value": "NULL"
      }
    ]
  }
]
```

### E1319-Flow

CLF_InsActionPlanObject.Sync RelatedQstions to RelateQuestions — Flow; stable record ID 85d13af9-a00d-402e-b142-ff1ec362fa9b. Source $.GraphData.Items[452].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "ISCHANGED(RelateQuestions)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "RelatedQstions",
        "value": "RelateQuestions"
      }
    ]
  },
  {
    "__type": "if",
    "name": null,
    "condition": "ISCHANGED(RelatedQstions)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "RelateQuestions",
        "value": "RelatedQstions"
      }
    ]
  }
]
```

### E1391-Flow

FragApplication_AbCorrectivActiObject.Completion Date — Flow; stable record ID 88dc9e12-1dbe-488b-ab23-ccb27744aad3. Source $.GraphData.Items[479].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "CompletionDate > TODAY",
    "else": [],
    "then": [
      {
        "__type": "error",
        "name": null,
        "message": "'Completion Date' must be on or before Today."
      }
    ]
  }
]
```

### E1400-Flow

FragApplication_AbCorrectivActiObject.Get Action Source — Flow; stable record ID a2c77637-70cd-4fbc-8800-b3491818205e. Source $.GraphData.Items[482].FieldData.Flow.

```json
[
  {
    "__type": "advance",
    "actionName": "FragApplication_AbCorrectivActiObject:FragApplication_AbCorrectivActiObject.GetActionSource"
  }
]
```

### E1420-Flow

FragApplication_AbCorrectivActiObject.Due Date in future on creation — Flow; stable record ID 78b3e117-483e-4df9-8e50-b6ea75c956ce. Source $.GraphData.Items[489].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "DueDate<TODAY",
    "else": [],
    "then": [
      {
        "__type": "error",
        "name": null,
        "message": "'First Task Due Date' must be on or after Today."
      }
    ]
  }
]
```

### E1429-Flow

FragApplication_AbCorrectivActiObject.FMEA - Sync Project Revision Action Plans — Flow; stable record ID 518b5e15-3202-4bc1-9f1b-e9d9d681b17b. Source $.GraphData.Items[493].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "RecoAction <> NULL",
    "else": [
      {
        "__type": "if",
        "name": null,
        "condition": "ReactionPlan <> NULL",
        "else": [],
        "then": [
          {
            "__type": "setvalue",
            "name": null,
            "field": "ProjRevActionPlansId",
            "value": "ReactionPlan.ProjRevId"
          }
        ]
      }
    ],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "ProjRevActionPlansId",
        "value": "RecoAction.ProjRevId"
      }
    ]
  }
]
```

### E1477-Flow

CLF_QuestObject.Clear Conditional Display Fields if not dependent — Flow; stable record ID 0176c285-b988-4cf8-8ec5-aaeb0bd44e5b. Source $.GraphData.Items[507].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "AND(ISCHANGED(DependsOn),DependsOn=NULL)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "VisibleIfs",
        "value": "NULL"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "VisDepNoAns",
        "value": "FALSE"
      }
    ]
  }
]
```

### E1765-Flow

CLF_ChecklistObject.Set Auto Checklist Code — Flow; stable record ID ae17e460-2fe7-4134-bb1f-bd95c35e7264. Source $.GraphData.Items[591].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "AND(AutoCode=TRUE)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "Reference",
        "value": "CONCATENATE(ChecklistType.Reference, \".\",  ChecklistType.NbChecklists+1)"
      }
    ]
  }
]
```

### E1788-Flow

CLF_ChecklistObject.Sync Location — Flow; stable record ID 77773bc6-86b0-4b75-beea-6e3f8e5e0d66. Source $.GraphData.Items[600].FieldData.Flow.

```json
[
  {
    "__type": "setvalue",
    "name": null,
    "field": "PubChecklists.Location",
    "value": "Location"
  }
]
```

### E1815-Flow

CLF_FindingObject.Calc Due Date — Flow; stable record ID 8b21a817-47f1-4572-bc24-43e143c315a9. Source $.GraphData.Items[609].FieldData.Flow.

```json
[
  {
    "__type": "setvalue",
    "name": null,
    "field": "ResponseDue",
    "value": "TODAY +  DueIn.Value"
  }
]
```

### E1884-Flow

CLF_FindingObject.Init Abstract Field Values on Create — Flow; stable record ID 5fa8dfc8-7279-4025-bc21-54418178b6e8. Source $.GraphData.Items[634].FieldData.Flow.

```json
[
  {
    "__type": "setvalue",
    "name": null,
    "field": "Location",
    "value": "ChecklistAnswer.Location"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "EventType",
    "value": "\"Audit Finding\""
  }
]
```

### E1960-Flow

CLF_SubchecklistObject.On Create — Flow; stable record ID 69990af1-7f77-4564-ad82-88b993514121. Source $.GraphData.Items[663].FieldData.Flow.

```json
[
  {
    "__type": "setvalue",
    "name": null,
    "field": "Name",
    "value": "CONCATENATE(MasterChecklist.Name, \" - \",  PubChecklist.Title)"
  },
  {
    "__type": "advance",
    "name": null,
    "actionName": "CLF_ChecklistAnswerObject:CLF_SubchecklistObject.CreateAnswers"
  }
]
```

### E2000-Flow

Insp_EquipInspectionObject.Set Inspection Name — Flow; stable record ID 773ebcf7-ac22-4d05-828b-2547180fa943. Source $.GraphData.Items[679].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "Name=NULL",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "Name",
        "value": "CONCATENATE(Equipment.Name, \" Inspection [#\", RecordNo, \"]\")"
      }
    ]
  }
]
```

### E2007-Flow

Insp_EquipInspectionObject.Create answers — Flow; stable record ID 02253049-24f7-467d-aa2c-99bad11a1a27. Source $.GraphData.Items[682].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "NOT(InspecChecklist.IsActive)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "InspecChecklistId",
        "value": "FETCHVALUE(\"CLF_PubChecklistObject\",\"Id\",\"DateCreated Descending\",\"ChecklistId\",\"=\",InspecChecklist.Checklist.Id,\"IsActive\",\"=\",TRUE)"
      }
    ]
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "PubChecklist",
    "value": "InspecChecklist"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "PubChecklist.PubQuestions.hCheckAnswerId",
    "value": "Id"
  }
]
```

### E2023-Flow

Insp_EquipInspectionObject.Sync Inspector to Person Responsible — Flow; stable record ID 19c206a5-418f-4bda-89ba-681016183898. Source $.GraphData.Items[689].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "Workflow.CurrentStage.SystemName=\t\"InspectioninProgress\"",
    "else": [],
    "then": [
      {
        "__type": "if",
        "name": null,
        "condition": "ISCHANGED(PersResponsible)",
        "else": [],
        "then": [
          {
            "__type": "setvalue",
            "name": null,
            "field": "Workflow.PersonResponsibleId",
            "value": "PersResponsibleId"
          }
        ]
      }
    ]
  }
]
```

### E2096-Flow

CLF_InsActionPlanObject.Set Location Field — Flow; stable record ID 4878fda4-bfb5-4557-8f03-681f7698c750. Source $.GraphData.Items[717].FieldData.Flow.

```json
[
  {
    "__type": "setvalue",
    "name": null,
    "field": "Location",
    "value": "CheckListAnsAct.Location"
  }
]
```

### E2258-Flow

CLF_SubchecklistObject.Update Workflow Person Responsible — Flow; stable record ID 5aaefeec-bf05-4ff2-8c99-1e0e78af043c. Source $.GraphData.Items[756].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "ISCHANGED(PersResponsibl)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "Workflow.PersonResponsibleId",
        "value": "PersResponsibl.Id"
      }
    ]
  }
]
```

### E2283-Flow

Insp_EquipInspectionObject.Notify Inspector if Created by Someone Else — Flow; stable record ID afe01aa3-f5b1-4bec-a566-1acf31ce8096. Source $.GraphData.Items[768].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "CURRENTUSER()<>PersResponsible",
    "else": [],
    "then": [
      {
        "__type": "notify",
        "name": null,
        "subjectfields": [
          "PersResponsible"
        ],
        "subjects": [],
        "template": "9580f6e8-5d22-45a5-b0a2-0c9eb7d0ddbb"
      }
    ]
  }
]
```

### E2348-Flow

CLF_PubChecklistObject.Copy Values — Flow; stable record ID 4f0babb6-3f8a-4033-9a9b-eb9aaf19946e. Source $.GraphData.Items[788].FieldData.Flow.

```json
[
  {
    "__type": "setvalue",
    "name": null,
    "field": "Description",
    "value": "Checklist.Description"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "ChecklistRef",
    "value": "Checklist.Reference"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "Location",
    "value": "Checklist.Location"
  }
]
```

### E2361-Flow

Insp_InspectionAbsObject.Clear Person Responsible and Due Date when workflow is Closed — Flow; stable record ID 25c1d85d-15b1-4d75-b04b-eef02d64d341. Source $.GraphData.Items[794].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "Workflow.WorkflowStatus=\"Completed\"",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "Workflow.PersonResponsible",
        "value": "NULL"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "Workflow.DueDate",
        "value": "NULL"
      }
    ]
  }
]
```

### E2390-Flow

CLF_QuestObject.Section and Sort Order Management — Flow; stable record ID d4d0523d-a816-446a-a534-87c1e00b7704. Source $.GraphData.Items[805].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "OR(AND(ExistingSection<>NULL, HelperChecklist<> ExistingSection.Checklist), AND(ISCHANGED(Section),    Section<>NULL))\n",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "ExistingSection",
        "value": "NULL"
      }
    ]
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "Section",
    "value": "IFNULL(Section, \"Default Section Name\")\n"
  },
  {
    "__type": "if",
    "name": null,
    "condition": "ExistingSection=NULL",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "ExistingSection",
        "value": "GETRELATED(\"CLF_SectionObject\", \"ChecklistId\", HelperChecklist.Id, \"SectionName\", Section)"
      },
      {
        "__type": "setvalue",
        "name": null,
        "field": "UseExisting",
        "value": "TRUE"
      }
    ]
  },
  {
    "__type": "if",
    "name": null,
    "condition": "Order=NULL",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "Order",
        "value": "IFNULL(MAX(ExistingSection.Questions.Order), 0) + 1\n"
      }
    ]
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "Section",
    "value": "NULL"
  }
]
```

### E2415-Flow

CLF_QuestObject.Related to MM Checklist Grid — Flow; stable record ID b2efa73b-eb92-4773-8855-87d41732b390. Source $.GraphData.Items[811].FieldData.Flow.

```json
[
  {
    "__type": "setvalue",
    "name": null,
    "field": "Checklists",
    "value": "GETDATA(\"CLF_ChecklistObject\", \"*\",  \"Id\", \"=\",  HelperChecklist.Id)"
  }
]
```

### E2571-Flow

CLF_FindingObject.Set Record Name — Flow; stable record ID 5a9bf245-7ccd-4347-ac83-1e817981f6f7. Source $.GraphData.Items[838].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "LEN(Description)>50",
    "else": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "Name",
        "value": "Description"
      }
    ],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "Name",
        "value": "CONCATENATE(LEFT(Description, 47), \"...\")"
      }
    ]
  }
]
```

### E2575-Flow

CLF_QuestObject.Track Modified Changes — Flow; stable record ID fdc47b90-4340-4bc0-a5dc-91073878c5fe. Source $.GraphData.Items[840].FieldData.Flow.

```json
[
  {
    "__type": "advance",
    "name": null,
    "actionName": "CLF_QuestAbstractObject:CLF_QuestObject.UpdateQuestionDateModified"
  }
]
```

### E2594-Flow

CLF_InsActionPlanObject.Set Action Owner — Flow; stable record ID ace713d5-07b2-435c-99dc-2bc4d958400c. Source $.GraphData.Items[845].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "then": [
      {
        "__type": "setvalue",
        "field": "ActionOwner",
        "value": "CompletedBy"
      }
    ],
    "else": [],
    "condition": "AlBeenCorrected"
  }
]
```

### E2601-Flow

CLF_FindingObject.Update Status — Flow; stable record ID 1481a998-d1d2-4406-9242-c71a5b84c837. Source $.GraphData.Items[848].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "then": [
      {
        "__type": "if",
        "then": [
          {
            "__type": "setvalue",
            "field": "FindingStatus",
            "value": "GETRELATED(\"CLF_FindingStatusObject\", \"Code\", \"Closed\")"
          }
        ],
        "else": [
          {
            "__type": "setvalue",
            "field": "FindingStatus",
            "value": "GETRELATED(\"CLF_FindingStatusObject\", \"Code\", \"In Progress\")"
          }
        ],
        "condition": "NbOpAPs=0"
      }
    ],
    "else": [
      {
        "__type": "if",
        "then": [
          {
            "__type": "setvalue",
            "field": "FindingStatus",
            "value": "GETRELATED(\"CLF_FindingStatusObject\", \"Code\", \"Closed without Action\")"
          }
        ],
        "else": [
          {
            "__type": "setvalue",
            "field": "FindingStatus",
            "value": "GETRELATED(\"CLF_FindingStatusObject\", \"Code\", \"Open\")"
          }
        ],
        "condition": "ManualClose=TRUE"
      }
    ],
    "condition": "NbAPs>0"
  }
]
```

### E2606-Flow

CLF_QuestObject.Clean up Choice List Field — Flow; stable record ID 39a5f868-dfd3-46d0-80b5-5d5d46e629a4. Source $.GraphData.Items[850].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "AND(AnswerType.Value<>\"Choice\", AnswerType.Value<>\"Choices\") ",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "ChoiceList",
        "value": "NULL"
      }
    ]
  },
  {
    "__type": "if",
    "name": null,
    "condition": "UseReferences",
    "else": [
      {
        "__type": "if",
        "name": null,
        "condition": "TextReferences<>NULL",
        "else": [],
        "then": [
          {
            "__type": "setvalue",
            "name": null,
            "field": "TextReferences",
            "value": "NULL"
          }
        ]
      }
    ],
    "then": []
  }
]
```

### E2628-Flow

Insp_EquipInspectionObject.Throw Error if Saved at Location that Isn't Bottom — Flow; stable record ID b7fb0417-b82b-4bea-a5b2-e73292c1b4e9. Source $.GraphData.Items[859].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "COUNT(Location.ChildLocations)>0",
    "else": [],
    "then": [
      {
        "__type": "error",
        "name": null,
        "message": "The Location must be set to an RMD before you are allowed to Save this Inspection."
      }
    ]
  }
]
```

### E2669-Flow

Insp_EquipInspectionObject.Update CreateMode Flag — Flow; stable record ID 87d63d47-8e1d-4952-862b-82f6c981ab95. Source $.GraphData.Items[873].FieldData.Flow.

```json
[
  {
    "__type": "setvalue",
    "name": null,
    "field": "CreateMode",
    "value": "FALSE"
  }
]
```

### E2924-Flow

Insp_EquipInspectionObject.Clear Completed information on Create — Flow; stable record ID 9b887b19-0ed4-4d14-9d06-2668e374978e. Source $.GraphData.Items[880].FieldData.Flow.

```json
[
  {
    "__type": "setvalue",
    "name": null,
    "field": "CompletedBy",
    "value": "NULL"
  },
  {
    "__type": "setvalue",
    "name": null,
    "field": "CompletedOn",
    "value": "NULL"
  }
]
```

### E2929-Flow

CLF_InsActionPlanObject.Set [Helper] Inspection Relation — Flow; stable record ID dcd55c61-c709-4edc-8c6f-12fae242eec8. Source $.GraphData.Items[882].FieldData.Flow.

```json
[
  {
    "__type": "setvalue",
    "name": null,
    "field": "hRelatedInspId",
    "value": "CheckListAnsAct.Id"
  }
]
```

### E2936-Flow

CLF_InsActionPlanObject.Set Record Name — Flow; stable record ID 9963eeda-5d67-415b-bbce-2add56ec6d0f. Source $.GraphData.Items[885].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "LEN(CPARActionReq)>50",
    "else": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "RecordName",
        "value": "CPARActionReq"
      }
    ],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "RecordName",
        "value": "CONCATENATE(LEFT(CPARActionReq, 47), \"...\")"
      }
    ]
  }
]
```

### E2976-Flow

CLF_InsActionPlanObject.[INACTIVE] Set Field values on Abstract — Flow; stable record ID a5a0ee90-129b-494c-a4da-ecd5ca266705. Source $.GraphData.Items[899].FieldData.Flow.

```json
[
  {
    "__type": "setvalue",
    "name": null,
    "field": "Location",
    "value": "ChecklistAnswer.Location"
  }
]
```

### E2980-Flow

CLF_InsActionPlanObject.Sync Person Responsible — Flow; stable record ID 8e7f1166-aa81-4bd7-9b37-d1ee1ddf4b97. Source $.GraphData.Items[901].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "ISCHANGED(PersonResp)",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "Workflow.PersonResponsibleId",
        "value": "PersonResp.Id"
      }
    ]
  }
]
```

### E3072-Flow

ActionPlans_ActionPlanAbsObject.Trigger Activities — Flow; stable record ID 71270fe0-21f8-44d9-ae67-74ecce975f12. Source $.GraphData.Items[914].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "ActivitiesStart",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "Activites.CanStart",
        "value": "TRUE"
      }
    ]
  }
]
```

### E3077-Flow

CLF_QuestObject.[OBSOLETE] Init Values — Flow; stable record ID 643d5500-6424-44d9-9efc-e85caddd9045. Source $.GraphData.Items[916].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "name": null,
    "condition": "Order=NULL",
    "else": [],
    "then": [
      {
        "__type": "setvalue",
        "name": null,
        "field": "Order",
        "value": "ChecklistType.MaxOrder+1"
      }
    ]
  }
]
```

### E3088-Flow

CLF_InsActionPlanObject.Action Already Completed — Flow; stable record ID 9e9cf336-77de-42de-aa38-226e14303d68. Source $.GraphData.Items[920].FieldData.Flow.

```json
[
  {
    "__type": "if",
    "then": [
      {
        "__type": "setvalue",
        "field": "Workflow.DateNotRequired",
        "value": "TODAY"
      }
    ],
    "else": [],
    "condition": "AlBeenCorrected = \"TRUE\""
  }
]
```

### E318-ValidationRule

Unresolved.Set Unique Key (Reference) — ValidationRule; stable record ID 996937f8-da91-49dd-bb18-b8524229ff18. Source $.GraphData.Items[116].FieldData.ValidationRule.

```xml
<?xml version="1.0" encoding="utf-16"?><ValidationRule xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="UniqueIndexValidationRule" xmlns="http://schemas.intelex.net"><_localizedMessages xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays" /><Fields xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:string>Reference</d2p1:string></Fields></ValidationRule>
```

### E431-ValidationRule

Unresolved.UFS — ValidationRule; stable record ID 1f00cb39-ed6a-4e64-94a0-f8ed31b0c5fa. Source $.GraphData.Items[162].FieldData.ValidationRule.

```xml
<?xml version="1.0" encoding="utf-16"?><ValidationRule xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="UniqueIndexValidationRule" xmlns="http://schemas.intelex.net"><_localizedMessages xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:KeyValueOfstringstring><d2p1:Key>en-US</d2p1:Key><d2p1:Value></d2p1:Value></d2p1:KeyValueOfstringstring></_localizedMessages><Fields xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:string>CheckAnswerGUID</d2p1:string><d2p1:string>ChecklistAnswer</d2p1:string><d2p1:string>Section</d2p1:string><d2p1:string>Sort</d2p1:string></Fields></ValidationRule>
```

### E659-ValidationRule

Unresolved.Set Unique Key (Reference) — ValidationRule; stable record ID 955bb92d-da97-43c5-9077-e3724398b378. Source $.GraphData.Items[239].FieldData.ValidationRule.

```xml
<?xml version="1.0" encoding="utf-16"?><ValidationRule xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="UniqueIndexValidationRule" xmlns="http://schemas.intelex.net"><_localizedMessages xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays" /><Fields xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:string>Reference</d2p1:string></Fields></ValidationRule>
```

### E676-ValidationRule

Unresolved.UFS (Key) — ValidationRule; stable record ID 08ca7554-45cf-4a68-ba20-ae7346217c0b. Source $.GraphData.Items[247].FieldData.ValidationRule.

```xml
<?xml version="1.0" encoding="utf-16"?><ValidationRule xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="UniqueIndexValidationRule" xmlns="http://schemas.intelex.net"><_localizedMessages xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:KeyValueOfstringstring><d2p1:Key>en-US</d2p1:Key><d2p1:Value></d2p1:Value></d2p1:KeyValueOfstringstring></_localizedMessages><Fields xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:string>Key</d2p1:string></Fields></ValidationRule>
```

### E774-ValidationRule

Unresolved.UFS (Name) — ValidationRule; stable record ID 92149dfa-3525-43dc-9b8d-e19a18efebce. Source $.GraphData.Items[281].FieldData.ValidationRule.

```xml
<?xml version="1.0" encoding="utf-16"?><ValidationRule xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="UniqueIndexValidationRule" xmlns="http://schemas.intelex.net"><_localizedMessages xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:KeyValueOfstringstring><d2p1:Key>en-US</d2p1:Key><d2p1:Value></d2p1:Value></d2p1:KeyValueOfstringstring></_localizedMessages><Fields xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:string>Name</d2p1:string></Fields></ValidationRule>
```

### E861-ValidationRule

Unresolved.UFS — ValidationRule; stable record ID 7040fcdd-ccd8-4b65-bffb-a3ea7363c639. Source $.GraphData.Items[306].FieldData.ValidationRule.

```xml
<?xml version="1.0" encoding="utf-16"?><ValidationRule xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="UniqueIndexValidationRule" xmlns="http://schemas.intelex.net"><_localizedMessages xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:KeyValueOfstringstring><d2p1:Key>en-US</d2p1:Key><d2p1:Value></d2p1:Value></d2p1:KeyValueOfstringstring></_localizedMessages><Fields xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:string>ChecklistAnswer</d2p1:string><d2p1:string>PubQuestion</d2p1:string></Fields></ValidationRule>
```

### E1125-ValidationRule

Unresolved.Set Unique Key — ValidationRule; stable record ID 40f264b0-a9bc-4794-ada8-94ff594aee20. Source $.GraphData.Items[388].FieldData.ValidationRule.

```xml
<?xml version="1.0" encoding="utf-16"?><ValidationRule xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="UniqueIndexValidationRule" xmlns="http://schemas.intelex.net"><_localizedMessages xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays" /><Fields xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:string>Caption</d2p1:string></Fields></ValidationRule>
```

### E1230-ValidationRule

Unresolved.Make Manual Comment Required — ValidationRule; stable record ID 2b332530-e5a8-4a09-95d3-24a8ad5f79f4. Source $.GraphData.Items[425].FieldData.ValidationRule.

```xml
<?xml version="1.0" encoding="utf-16"?><ValidationRule xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="XScriptValidationRule" xmlns="http://schemas.intelex.net"><_localizedMessages xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:KeyValueOfstringstring><d2p1:Key>en-US</d2p1:Key><d2p1:Value>In order to close a Finding without Action you need to provide a Comment</d2p1:Value></d2p1:KeyValueOfstringstring><d2p1:KeyValueOfstringstring><d2p1:Key>de</d2p1:Key><d2p1:Value>Um eine Feststellung ohne Maßnahme abzuschließen, müssen Sie einen Kommentar abgeben.</d2p1:Value></d2p1:KeyValueOfstringstring><d2p1:KeyValueOfstringstring><d2p1:Key>es</d2p1:Key><d2p1:Value>Para cerrar un resultado sin acción necesita proporcionar un comentario</d2p1:Value></d2p1:KeyValueOfstringstring><d2p1:KeyValueOfstringstring><d2p1:Key>fr</d2p1:Key><d2p1:Value>Pour fermer une conclusion sans action, vous devez fournir un commentaire.</d2p1:Value></d2p1:KeyValueOfstringstring><d2p1:KeyValueOfstringstring><d2p1:Key>pt</d2p1:Key><d2p1:Value>Para fechar uma tarefa Encontrar sem ação, tem de fornecer um comentário</d2p1:Value></d2p1:KeyValueOfstringstring><d2p1:KeyValueOfstringstring><d2p1:Key>zh</d2p1:Key><d2p1:Value>为实现无行动关闭的调查发现，您需要提供注释</d2p1:Value></d2p1:KeyValueOfstringstring></_localizedMessages><Expression>NOT(AND(ManualClose,  ManCloseCom=NULL))</Expression></ValidationRule>
```

### E1691-ValidationRule

Unresolved.Set Unique Key — ValidationRule; stable record ID dbb40da0-d2ef-42da-8e5b-ca747bab871e. Source $.GraphData.Items[564].FieldData.ValidationRule.

```xml
<?xml version="1.0" encoding="utf-16"?><ValidationRule xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="UniqueIndexValidationRule" xmlns="http://schemas.intelex.net"><_localizedMessages xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays" /><Fields xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:string>Code</d2p1:string></Fields></ValidationRule>
```

### E1935-ValidationRule

Unresolved.Set Unique Key (Reference) — ValidationRule; stable record ID 0731cb53-db15-4f95-ab67-e1d87264c9e0. Source $.GraphData.Items[654].FieldData.ValidationRule.

```xml
<?xml version="1.0" encoding="utf-16"?><ValidationRule xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="UniqueIndexValidationRule" xmlns="http://schemas.intelex.net"><_localizedMessages xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays" /><Fields xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:string>Reference</d2p1:string></Fields></ValidationRule>
```

### E2275-ValidationRule

Unresolved.Can not be less than zero — ValidationRule; stable record ID 888ce2e8-e68c-45f3-b508-5a983db8f4a0. Source $.GraphData.Items[764].FieldData.ValidationRule.

```xml
<?xml version="1.0" encoding="utf-16"?><ValidationRule xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="MinNumberValidationRule" xmlns="http://schemas.intelex.net"><_localizedMessages xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:KeyValueOfstringstring><d2p1:Key>en-US</d2p1:Key><d2p1:Value>The value for {Field.Caption} should be more than {Rule.MinNumber}</d2p1:Value></d2p1:KeyValueOfstringstring><d2p1:KeyValueOfstringstring><d2p1:Key>pt</d2p1:Key><d2p1:Value>O valor para {Field.Caption} deve ser maior do que {Rule.MinNumber}</d2p1:Value></d2p1:KeyValueOfstringstring><d2p1:KeyValueOfstringstring><d2p1:Key>de</d2p1:Key><d2p1:Value>Der Wert für "{Field.Caption}" muss größer als {Rule.MinNumber} sein.</d2p1:Value></d2p1:KeyValueOfstringstring><d2p1:KeyValueOfstringstring><d2p1:Key>zh</d2p1:Key><d2p1:Value>{Field.Caption} 的值应大于 {Rule.MinNumber}</d2p1:Value></d2p1:KeyValueOfstringstring><d2p1:KeyValueOfstringstring><d2p1:Key>es</d2p1:Key><d2p1:Value>El valor de {Field.Caption} debe ser mayor que {Rule.MinNumber}</d2p1:Value></d2p1:KeyValueOfstringstring><d2p1:KeyValueOfstringstring><d2p1:Key>fr</d2p1:Key><d2p1:Value>La valeur de {Field.Caption} doit être supérieure à {Rule.MinNumber}.</d2p1:Value></d2p1:KeyValueOfstringstring></_localizedMessages><MinNumber>0</MinNumber></ValidationRule>
```

### E2934-ValidationRule

Unresolved.Set Unique Key (QuestionRef) — ValidationRule; stable record ID 69ef674d-3aeb-4711-b80f-a40f6ce43233. Source $.GraphData.Items[884].FieldData.ValidationRule.

```xml
<?xml version="1.0" encoding="utf-16"?><ValidationRule xmlns:i="http://www.w3.org/2001/XMLSchema-instance" i:type="UniqueIndexValidationRule" xmlns="http://schemas.intelex.net"><_localizedMessages xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays" /><Fields xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays"><d2p1:string>QuestionRef</d2p1:string></Fields></ValidationRule>
```

### E18-ConfigurableViewActions

CLF_InsActionPlanObject.CLF_InsActionPlan_Detail — ConfigurableViewActions; stable record ID c485a139-be02-459f-b04a-24ca99a821fd. Source $.GraphData.Items[0].FieldData.ConfigurableViewActions.

```json
[
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "H/S Grids",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "hRelatedInsp.TypeOfInspec.FindingTracking",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "true",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "QuestionsSection_Open",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "FindingsGridSection",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "QuestionsSection_Open",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "FindingsGridSection",
                "elementType": 0
              }
            ]
          }
        ]
      },
      {
        "__type": "HideAction",
        "elements": [
          {
            "elementId": "hRelatedInsp.TypeOfInspec.FindingTracking",
            "elementType": 0
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "hRelatedInsp.TypeOfInspec.FindingTracking"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Action Already Complete Show/Hide",
    "stageContainers": [
      "StageContainer_Draft"
    ],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "AlBeenCorrected",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "true",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ActionOwner",
                "elementType": 0
              },
              {
                "elementId": "CPARActionReq",
                "elementType": 0
              },
              {
                "elementId": "DueDate",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "ActionOwner",
                "elementType": 0
              },
              {
                "elementId": "CPARActionReq",
                "elementType": 0
              },
              {
                "elementId": "DueDate",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "CompletedBy",
                "elementType": 0
              },
              {
                "elementId": "CompletionDate",
                "elementType": 0
              },
              {
                "elementId": "CompletionNotes",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "CompletedBy",
                "elementType": 0
              },
              {
                "elementId": "CompletionDate",
                "elementType": 0
              },
              {
                "elementId": "CompletionNotes",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "CompletedBy",
                "elementType": 0
              },
              {
                "elementId": "CompletionDate",
                "elementType": 0
              },
              {
                "elementId": "CompletionNotes",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "CPARActionReq",
                "elementType": 0
              },
              {
                "elementId": "DueDate",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "CPARActionReq",
                "elementType": 0
              },
              {
                "elementId": "DueDate",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "ActionOwner",
                "elementType": 0
              },
              {
                "elementId": "CPARActionReq",
                "elementType": 0
              },
              {
                "elementId": "DueDate",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ActionOwner",
                "elementType": 0
              },
              {
                "elementId": "CompletedBy",
                "elementType": 0
              },
              {
                "elementId": "CompletionDate",
                "elementType": 0
              },
              {
                "elementId": "CompletionNotes",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "CompletedBy",
                "elementType": 0
              },
              {
                "elementId": "CompletionDate",
                "elementType": 0
              },
              {
                "elementId": "CompletionNotes",
                "elementType": 0
              }
            ]
          }
        ]
      },
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "AlBeenCorrected",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "IsNullOperator",
                "negate": false
              },
              "rightOperand": null
            }
          ]
        },
        "falseDecision": [],
        "trueDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ActionOwner",
                "elementType": 0
              },
              {
                "elementId": "CompletedBy",
                "elementType": 0
              },
              {
                "elementId": "CompletionDate",
                "elementType": 0
              },
              {
                "elementId": "CompletionNotes",
                "elementType": 0
              },
              {
                "elementId": "CPARActionReq",
                "elementType": 0
              },
              {
                "elementId": "DueDate",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "AlBeenCorrected"
      }
    ]
  }
]
```

### E18-Content

CLF_InsActionPlanObject.CLF_InsActionPlan_Detail — Content; stable record ID c485a139-be02-459f-b04a-24ca99a821fd. Source $.GraphData.Items[0].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar"><ix:CloneActionLink Override="true" Visible="False"/><ix:AddEntryActionLink Override="true" Visible="False"/><ix:SecurityActionLink Override="true" Visible="False"/></ix:DetailPageMenuBar><ix:StageContainer UseDefaultDuringCreate="True" VisibleFor="Draft" ID="StageContainer_Draft"><ix:DetailSection Title="Action Plan Details" ModernIcon="Raven/Icons/BrightBlue_48/acceptance.png" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="hRelatedInsp.TypeOfInspec.FindingTracking"/><ix:Field DisplayMode="View, Edit" For="ActionNo"/><ix:Field For="CheckListAnsAct" Readonly="true"/><ix:Field For="AlBeenCorrected" IsMandatory="true"/><ix:Field For="ActionOwner" IsMandatory="true"/><ix:Field For="CompletedBy"/><ix:Field For="CompletionDate" SpellCheck="false"/><ix:Field For="CompletionNotes" Span="true" SpellCheck="false"/><ix:Field For="CPARTypeID" IsMandatory="false" IsVisible="false" ReadOnly="true"/><ix:Field EditAs="largetext" For="CPARActionReq" IsMandatory="false" Span="true"/><ix:Field For="DueDate" IsMandatory="false" SpellCheck="false"/></ix:FieldArea></ix:DetailSection></ix:StageContainer><ix:StageContainer VisibleFor="InProgress" ID="StageContainer_InProgress"><ix:DetailSection Title="Action Plan Details" ModernIcon="Raven/Icons/BrightBlue_48/acceptance.png" meta:resourcekey="DetailSection1" ResourceKey="DetailSection1"><ix:FieldArea Span="true"><ix:Field For="hRelatedInsp.TypeOfInspec.FindingTracking"/><ix:Field DisplayMode="View, Edit" For="ActionNo"/><ix:Field For="CheckListAnsAct" Readonly="true"/><ix:Field For="CPARTypeID" Readonly="true"/><ix:Field For="CPARActionReq" Readonly="True"/><ix:Field EditReadOnly="true" For="ActionOwner" Readonly="True"/><ix:Field EditReadOnly="true" For="DueDate" Readonly="True" SpellCheck="false"/></ix:FieldArea></ix:DetailSection><ix:DetailSection Title="Completion" ModernIcon="Raven/Icons/BrightBlue_48/acceptance.png" ID="CompletionSection" meta:resourcekey="DetailSection2" ResourceKey="DetailSection2"><ix:FieldArea Span="true"><ix:Field For="CompletedBy"/><ix:Field For="CompletionDate" SpellCheck="false"/><ix:Field For="CompletionNotes" Span="true" SpellCheck="false"/></ix:FieldArea></ix:DetailSection></ix:StageContainer><ix:StageContainer UseDefaultWhenCompleted="True" ID="StageContainer_Completed"><ix:DetailSection Title="Action Plan" ModernIcon="Raven/Icons/BrightBlue_48/acceptance.png" meta:resourcekey="DetailSection3" ResourceKey="DetailSection3"><ix:FieldArea Span="true"><ix:Field For="hRelatedInsp.TypeOfInspec.FindingTracking"/><ix:Field DisplayMode="View, Edit" For="ActionNo"/><ix:Field For="CheckListAnsAct" Readonly="true"/><ix:Field For="CPARTypeID" Readonly="True"/><ix:Field For="CPARActionReq" Readonly="True" Span="true" SpellCheck="false"/><ix:Field For="ActionOwner" Readonly="True"/><ix:Field For="DueDate" Readonly="True"/></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:DetailSection Title="Completion" DisplayMode="View,Edit" ModernIcon="Raven/Icons/BrightBlue_48/acceptance.png" meta:resourcekey="DetailSection4" ResourceKey="DetailSection4"><ix:FieldArea Span="true"><ix:Field For="CompletedBy" Readonly="True"/><ix:Field For="CompletionDate" Readonly="True"/><ix:Field For="CompletionNotes" Readonly="True" Span="true"/></ix:FieldArea></ix:DetailSection></ix:StageContainer><ix:GridSection DisplayEditColumn="false" DisplayMode="View,Edit" For="EventRelated:CLF_FindingObject" ID="FindingsGridSection" IsCollapsed="True" ModernIcon="Raven/Icons/BrightBlue_48/flag31.png" Readonly="True" Title="Related Finding" meta:resourcekey="GridSection2" ResourceKey="GridSection2"><aliases><ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/><ix:Alias For="Severity.TextColor.Value" Name="TC"/><ix:Alias For="Severity.CSS" Name="CSS"/><ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/><ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/></aliases><Columns><ix:Column For="RecordNo"/><ix:Column DisplayAs="truncate" For="Description"/><ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center"><Template><div style="background-color:<%# Html.Encode(Container.ViewData.Eval("StatusBC")) %>;color:<%# Html.Encode(Container.ViewData.Eval("StatusTC")) %>"><%# Html.Encode(Container.ViewData.Eval("FindingStatus")) %></div></Template></ix:TemplateColumn></Columns></ix:GridSection><ix:GridSection DisplayEditColumn="false" For="RelatedQstions" ID="QuestionsSection_Open" DisplayMode="View,Edit" ReadOnly="true"><Columns><ix:Column For="PubQuestion.Content"/><ix:MergeColumn Caption="Answer" For="PubQuestion.AnswerType.Value" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0"><MappedColumns><ix:TemplateColumn MapValue="Choice_Disable" For="Choice"><Template><div style="color:<%# Container.ViewData.Eval("Choice.TColor.Value") %>;background-color:<%# Container.ViewData.Eval("Choice.BColor.Value") %>;<%# Container.ViewData.Eval("Choice.Css") %>"><%# Container.ViewData.Eval("Choice") %></div></Template></ix:TemplateColumn><ix:Column For="Choice" MapValue="Choice"/><ix:Column For="Date" Format="d" MapValue="Date"/><ix:Column DisplayAs="List" FetchAs="collection" For="Choices" MapValue="Choices"/><ix:Column For="Float" HorizontalAlign="right" MapValue="Float"/><ix:Column For="Text" MapValue="Text"/><ix:Column For="Checkbox" MapValue="Checkbox"/></MappedColumns></ix:MergeColumn></Columns></ix:GridSection><ix:DetailSection Title="Hidden Section - used to attach question during Action Plan creation" DisplayMode="Create" CSSClass="hiddenSection" meta:resourcekey="DetailSection5" ResourceKey="DetailSection5"><ix:FieldArea><ix:Field For="RelatedQstions" Span="true"/></ix:FieldArea></ix:DetailSection><ix:AttachmentSection ID="AttachmentFragmentGridSection" DisplayMode="edit,view"/></ix:DetailPage><style>.hiddenSection {
display:none;
}</style>
```

### E39-ConfigurableViewActions

ActionPlans_ActionPlanAbsObject.ActionPlans_ActionPlanAbs_Detail — ConfigurableViewActions; stable record ID 0069b4c9-eecc-451d-b5d5-a309c08dc4cd. Source $.GraphData.Items[6].FieldData.ConfigurableViewActions.

```json
[]
```

### E39-Content

ActionPlans_ActionPlanAbsObject.ActionPlans_ActionPlanAbs_Detail — Content; stable record ID 0069b4c9-eecc-451d-b5d5-a309c08dc4cd. Source $.GraphData.Items[6].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Fields" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea><ix:Field For="Location"/><ix:Field For="ActionNo"/><ix:Field For="CompletedBy"/><ix:Field For="CompletionDate"/><ix:Field For="CompletionNotes"/><ix:Field For="CPARActionReq"/><ix:Field For="CPARTypeID"/><ix:Field For="DueDate"/><ix:Field For="ReportedBy"/><ix:Field For="ReportedOn"/><ix:Field For="PersonResp"/><ix:Field For="NbActivites"/><ix:Field For="MActivitesOrder"/><ix:Field For="Template"/><ix:Field For="NbOpenActivit"/><ix:Field For="ActivitProgress"/><ix:Field For="ReviewerComment"/><ix:Field For="ReviewType"/><ix:Field For="ActivitiesStart"/><ix:Field For="StartDate"/><ix:Field For="NCR"/><ix:Field For="ProvenEffective"/><ix:Field For="VOCAbstract"/><ix:Field For="RiskAbs"/><ix:Field For="AssessResults"/></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:GridSection For="ProgressNotes" ID="ProgressNotesGridSection"><Columns><ix:Column For="ProgressNotes" LinkTo="default"/><ix:Column For="AbCorrectivActi"/><ix:Column For="complete"/><ix:Column For="Date"/><ix:Column For="EnteredBy"/></Columns></ix:GridSection><ix:WorkflowComments/><ix:WorkflowTracking/><ix:ESignatureHistorySection/><ix:GridSection For="Activites" ID="ActivitesGridSection"><Columns><ix:Column For="ActionNo" LinkTo="default"/><ix:Column For="ActualCost"/><ix:Column For="CompletedBy"/><ix:Column For="CompletionDate"/><ix:Column For="CompletionNotes"/></Columns></ix:GridSection></ix:DetailPage>
```

### E46-ConfigurableViewActions

Insp_EquipInspectionObject.Insp_EquipInspection_Frag_QuestionAnswer_ReadOnly — ConfigurableViewActions; stable record ID a28d5136-a7e2-4787-bc71-6be06db4a055. Source $.GraphData.Items[9].FieldData.ConfigurableViewActions.

```json
[]
```

### E46-Content

Insp_EquipInspectionObject.Insp_EquipInspection_Frag_QuestionAnswer_ReadOnly — Content; stable record ID a28d5136-a7e2-4787-bc71-6be06db4a055. Source $.GraphData.Items[9].FieldData.Content.

```xml
<ix:FieldArea visible="false"><ix:Field For="PubChecklist.Checklist.Title" /><ix:Field For="CommtoReviewer2" /><ix:Field For="IPReview2" /></ix:FieldArea><% if (Model.TypeOfInspec.FindingTracking == true) { %><ix:GridSection AllowSorting="false" DisplayEditColumn="false" EditLinkTarget="popup" For="QuestionAnswers" Title="{#PubChecklist.Checklist.Title}" HideGroupAddButton="true" ID="QuestionAnswersGridSection_PendingActions" IsCollapsed="false" ModernIcon="Raven/Icons/BrightBlue_48/note21.png" RefreshScope="Row" meta:resourcekey="GridSection3" ResourceKey="GridSection3"><menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></menu><Sorting><ix:Sort By="PubQuestion.Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="PubQuestion.Section"/></grouping><Filters><ix:Filter PredicateOperator="Or"><ix:CommonPredicate For="IsVisible" Type="Equal"><ix:Value>TRUE</ix:Value></ix:CommonPredicate><ix:IsNullPredicate For="IsVisible"/></ix:Filter></Filters><aliases><ix:Alias For="ChecklistAnswerId"/><ix:Alias For="PubQuestion.QuestionRef"/><ix:Alias For="PubQuestion.Guideline"/><ix:Alias For="PubQuestion.Id"/><ix:Alias For="Choice.BColor.Value"/><ix:Alias For="Choice.TColor.Value"/><ix:Alias For="Choice.Css"/><ix:Alias For="PubQuestion.Question.UseReferences" Name="DisplayRef"/><ix:Alias For="PubQuestion.Question.Id" Name="QuestionId"/><ix:Alias For="Id"/></aliases><Columns><ix:TemplateColumn For="PubQuestion.Content" Width="1"><Template><a title="Question References" class="openInPopup" style="float:right;display:<%# Html.Encode(Container.ViewData.Eval("DisplayRef")).ToString() == "True" ? "block" : "none" %>;" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Question_References_Detail/View?entityid=<%# Container.ViewData.Eval("QuestionId") %>"><img src="<%= ImageHelper.GetStaticPath("Icons/new/24x24/help2.gif") %>"/></a><span style="font-weight:bold;"><%# Html.Encode(Container.ViewData.Eval("PubQuestion.QuestionRef")) %> <%# Html.Encode(Container.ViewData.Eval("PubQuestion.Content")) %></span><div class="fieldHint"><%# Html.Encode(Container.ViewData.Eval("PubQuestion.Guideline")) %></div></Template></ix:TemplateColumn><ix:Column DisplayAs="List" FetchAs="Collection" For="PubQuestion.Question.References" Visible="false"/><ix:TemplateColumn Caption="Answer" For="Choice" EditMode="inline" RefreshScope="Row" Visible="false" meta:resourcekey="TemplateColumn2" ResourceKey="TemplateColumn2"><Template><div style="color:<%# Html.Encode(Container.ViewData.Eval("Choice.TColor.Value")) %>;background-color:<%# Html.Encode(Container.ViewData.Eval("Choice.BColor.Value")) %>;<%# Html.Encode(Container.ViewData.Eval("Choice.Css")) %>"><%# Html.Encode(Container.ViewData.Eval("Choice")) %></div></Template></ix:TemplateColumn><ix:MergeColumn For="PubQuestion.AllowNA" Caption="N/A" width="5px" Visible="true" HeaderTooltip="Flag the Question as Not-Applicable in this context." meta:resourcekey="MergeColumn8" ResourceKey="MergeColumn8"><MappedColumns><ix:Column For="IsNA" MapValue="True"/></MappedColumns></ix:MergeColumn><ix:MergeColumn Caption="Answer" For="PubQuestion.AnswerType.Value" Visible="true" meta:resourcekey="MergeColumn1" ResourceKey="MergeColumn1"><MappedColumns><ix:TemplateColumn MapValue="Choice_Disable" For="Choice"><Template><div style="color:<%# Html.Encode(Container.ViewData.Eval("Choice.TColor.Value")) %>;background-color:<%# Html.Encode(Container.ViewData.Eval("Choice.BColor.Value")) %>;<%# Html.Encode(Container.ViewData.Eval("Choice.Css")) %>"><%# Html.Encode(Container.ViewData.Eval("Choice")) %></div></Template></ix:TemplateColumn><ix:Column For="Choice" MapValue="Choice"/><ix:Column For="Date" Format="d" MapValue="Date"/><ix:Column DisplayAs="List" FetchAs="collection" For="Choices" MapValue="Choices"/><ix:Column For="Float" HorizontalAlign="right" MapValue="Float"/><ix:Column For="Text" MapValue="Text"/><ix:Column For="Checkbox" MapValue="Checkbox"/></MappedColumns></ix:MergeColumn><ix:Column For="Comments"/><ix:Column AllowFiltering="false" Caption="Documents" For="NumbofDocuments" HorizontalAlign="center" LinkTarget="popup" LinkTo="CLF_QuestionAnswer_Docs_Readonly/View?entityid={#id}" RefreshScope="Row" width="20px" meta:resourcekey="Column4" ResourceKey="Column4"/><ix:Column Caption="Attached Findings" DisplayAs="List" FetchAs="Collection" For="Findings" meta:resourcekey="Column3" ResourceKey="Column3"/><ix:Column Visible="False" Caption="Attached Action Plans" DisplayAs="List" FetchAs="Collection" For="ActionPlans" meta:resourcekey="Column5" ResourceKey="Column5"/></Columns></ix:GridSection><%   } %> 
<% if (Model.TypeOfInspec.FindingTracking != true) { %><ix:GridSection AllowSorting="false" DisplayEditColumn="false" EditLinkTarget="popup" For="QuestionAnswers" Title="{#PubChecklist.Checklist.Title}" HideGroupAddButton="true" ID="QuestionAnswersGridSection_PendingActions_NoFindings" IsCollapsed="false" ModernIcon="Raven/Icons/BrightBlue_48/note21.png" RefreshScope="Row" meta:resourcekey="GridSection3" ResourceKey="GridSection3"><menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></menu><Sorting><ix:Sort By="PubQuestion.Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="PubQuestion.Section"/></grouping><Filters><ix:Filter PredicateOperator="Or"><ix:CommonPredicate For="IsVisible" Type="Equal"><ix:Value>TRUE</ix:Value></ix:CommonPredicate><ix:IsNullPredicate For="IsVisible"/></ix:Filter></Filters><aliases><ix:Alias For="ChecklistAnswerId"/><ix:Alias For="PubQuestion.QuestionRef"/><ix:Alias For="PubQuestion.Guideline"/><ix:Alias For="PubQuestion.Id"/><ix:Alias For="Choice.BColor.Value"/><ix:Alias For="Choice.TColor.Value"/><ix:Alias For="Choice.Css"/><ix:Alias For="PubQuestion.Question.UseReferences" Name="DisplayRef"/><ix:Alias For="PubQuestion.Question.Id" Name="QuestionId"/><ix:Alias For="Id"/></aliases><Columns><ix:TemplateColumn For="PubQuestion.Content" Width="1"><Template><a title="Question References" class="openInPopup" style="float:right;display:<%# Html.Encode(Container.ViewData.Eval("DisplayRef")).ToString() == "True" ? "block" : "none" %>;" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Question_References_Detail/View?entityid=<%# Container.ViewData.Eval("QuestionId") %>"><img src="<%= ImageHelper.GetStaticPath("Icons/new/24x24/help2.gif") %>"/></a><span style="font-weight:bold;"><%# Html.Encode(Container.ViewData.Eval("PubQuestion.QuestionRef")) %> <%# Html.Encode(Container.ViewData.Eval("PubQuestion.Content")) %></span><div class="fieldHint"><%# Html.Encode(Container.ViewData.Eval("PubQuestion.Guideline")) %></div></Template></ix:TemplateColumn><ix:Column DisplayAs="List" FetchAs="Collection" For="PubQuestion.Question.References" Visible="false"/><ix:TemplateColumn Caption="Answer" For="Choice" EditMode="inline" RefreshScope="Row" Visible="false" meta:resourcekey="TemplateColumn2" ResourceKey="TemplateColumn2"><Template><div style="color:<%# Html.Encode(Container.ViewData.Eval("Choice.TColor.Value")) %>;background-color:<%# Html.Encode(Container.ViewData.Eval("Choice.BColor.Value")) %>;<%# Html.Encode(Container.ViewData.Eval("Choice.Css")) %>"><%# Html.Encode(Container.ViewData.Eval("Choice")) %></div></Template></ix:TemplateColumn><ix:MergeColumn For="PubQuestion.AllowNA" Caption="N/A" width="5px" Visible="true" HeaderTooltip="Flag the Question as Not-Applicable in this context." meta:resourcekey="MergeColumn8" ResourceKey="MergeColumn8"><MappedColumns><ix:Column For="IsNA" MapValue="True"/></MappedColumns></ix:MergeColumn><ix:MergeColumn Caption="Answer" For="PubQuestion.AnswerType.Value" Visible="true" meta:resourcekey="MergeColumn1" ResourceKey="MergeColumn1"><MappedColumns><ix:TemplateColumn MapValue="Choice_Disable" For="Choice"><Template><div style="color:<%# Html.Encode(Container.ViewData.Eval("Choice.TColor.Value")) %>;background-color:<%# Html.Encode(Container.ViewData.Eval("Choice.BColor.Value")) %>;<%# Html.Encode(Container.ViewData.Eval("Choice.Css")) %>"><%# Html.Encode(Container.ViewData.Eval("Choice")) %></div></Template></ix:TemplateColumn><ix:Column For="Choice" MapValue="Choice"/><ix:Column For="Date" Format="d" MapValue="Date"/><ix:Column DisplayAs="List" FetchAs="collection" For="Choices" MapValue="Choices"/><ix:Column For="Float" HorizontalAlign="right" MapValue="Float"/><ix:Column For="Text" MapValue="Text"/><ix:Column For="Checkbox" MapValue="Checkbox"/></MappedColumns></ix:MergeColumn><ix:Column For="Comments"/><ix:Column AllowFiltering="false" Caption="Documents" For="NumbofDocuments" HorizontalAlign="center" LinkTarget="popup" LinkTo="CLF_QuestionAnswer_Docs_Readonly/View?entityid={#id}" RefreshScope="Row" width="20px" meta:resourcekey="Column4" ResourceKey="Column4"/><ix:Column Visible="False" Caption="Attached Findings" DisplayAs="List" FetchAs="Collection" For="Findings" meta:resourcekey="Column3" ResourceKey="Column3"/><ix:Column Caption="Attached Action Plans" DisplayAs="List" FetchAs="Collection" For="ActionPlans" meta:resourcekey="Column5" ResourceKey="Column5"/></Columns></ix:GridSection><%   } %>
```

### E79-Content

ConfgAppSetting_InstructionTextObject.ConfgAppSetting_InstructionTextObjectInventoryView — Content; stable record ID 923204ab-cabb-4531-8913-02d01aacc3fc. Source $.GraphData.Items[18].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="ConfgAppSetting_InstructionTextObjectInventory"><ix:InventoryView ID="ConfgAppSetting_InstructionTextObjectInventoryView"><Columns><ix:Column For="DisplayField" LinkTo="default" Width="5px"/><ix:Column For="TemplaGenerator" EditMode="inline" RefreshScope="Row" Width="5px"/><ix:Column For="InstruPanelCode" DisplayAs="html"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E108-Content

SysEmployeeEntity.Employee_AssignToPersonResponsible — Content; stable record ID 295eb63a-d78d-4bd4-8524-464934d6b624. Source $.GraphData.Items[31].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="SysEmployeeEntityInventory"><ix:InventoryView ID="SysEmployeeEntityInventoryView" HideGroupAddButton="true" DisplayEditColumn="false"><Menu><ix:GridCreateActionLink Visible="false" Override="true"/><ix:GridArchiveActionLink Visible="false" Override="true"/><ix:GridDataImportActionLink Visible="false" Override="true"/></Menu><Columns><ix:Column For="Number" width="5px"/><ix:Column For="Location" DisplayAs="string"/><ix:Column For="FullName"/><ix:Column For="Position"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E112-ConfigurableViewActions

CLF_ChoiceObject.CLF_Choice_Detail — ConfigurableViewActions; stable record ID 4dcfce64-3982-4a17-a657-ca5c892e677b. Source $.GraphData.Items[33].FieldData.ConfigurableViewActions.

```json
[
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Hide Value if NA",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "IsNA",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "IsNullOperator",
                "negate": true
              },
              "rightOperand": null
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "Value",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "DecisionAction",
            "condition": {
              "__type": "ExpressionPredicate",
              "expression": null,
              "predicates": [
                {
                  "__type": "SimplePredicate",
                  "drilldown": false,
                  "leftOperand": {
                    "__type": "PropertyOperand",
                    "propertyName": "IsNA",
                    "aggregateFunction": 0,
                    "dataSourceAlias": null,
                    "propertyFunction": null,
                    "resolveDisplayProperty": false,
                    "uom": null
                  },
                  "operator": {
                    "__type": "ViewActionOperator",
                    "negate": false,
                    "type": 1
                  },
                  "rightOperand": {
                    "__type": "ValueOperand",
                    "value": "true",
                    "entityType": null,
                    "text": null
                  }
                }
              ]
            },
            "falseDecision": [
              {
                "__type": "ShowAction",
                "elements": [
                  {
                    "elementId": "Value",
                    "elementType": 0
                  }
                ]
              }
            ],
            "trueDecision": [
              {
                "__type": "HideAction",
                "elements": [
                  {
                    "elementId": "Value",
                    "elementType": 0
                  }
                ]
              },
              {
                "__type": "ClearValueAction",
                "elements": [
                  {
                    "elementId": "Value",
                    "elementType": 0
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "IsNA"
      }
    ]
  }
]
```

### E112-Content

CLF_ChoiceObject.CLF_Choice_Detail — Content; stable record ID 4dcfce64-3982-4a17-a657-ca5c892e677b. Source $.GraphData.Items[33].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Choice" Icon="Icons/new/48x48/index_add.gif" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea span="true"><ix:Field For="ChoiceList" SpellCheck="false"/><ix:Field For="Reference"/><ix:Field For="Name"/><ix:Field For="Value"/><ix:Field For="IsNA"/><ix:Field For="BColor"/><ix:Field For="TColor"/><ix:Field For="Css" Span="true" Visible="false"/><ix:Field For="MobileAction" Visible="false"/></ix:FieldArea></ix:DetailSection></ix:DetailPage><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E124-Content

ConfgAppSetting_TPanelGeneratorObject.ConfgAppSetting_TPanelGeneratorObjectInventoryView — Content; stable record ID 561ae756-8332-4fb6-b270-0db132794b15. Source $.GraphData.Items[38].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="ConfgAppSetting_TPanelGeneratorObjectInventory"><ix:InventoryView ID="ConfgAppSetting_TPanelGeneratorObjectInventoryView"><Columns><ix:Column For="TemplateName" LinkTo="default" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E140-Content

FragApplication_EquipmentObject.FragApplication_Equipment_Inventory — Content; stable record ID e8fe37ea-f029-4e26-a9ae-bc5efc8d48e8. Source $.GraphData.Items[45].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="FragApplication_Equipment_Inventory"><ix:InventoryView ID="FragApplication_Equipment_InventoryView"><Columns><ix:Column For="RecordNo" LinkTo="Default"/><ix:Column EditMode="inline" For="Name" RefreshScope="Row"/><ix:Column Caption="Type" FilterAS="dropdown" For="SystemType.Caption"/><ix:Column EditMode="inline" For="EquipmentNo" RefreshScope="Row"/><ix:Column DisplayAs="string" EditMode="inline" For="Location" RefreshScope="Row"/><ix:Column EditMode="inline" For="Model" RefreshScope="Row"/><ix:Column EditMode="inline" For="Manufacturer" RefreshScope="Row"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E148-ConfigurableViewActions

CLF_InsActionPlanObject.CLF_InsActionPlan_Detail_NoEdit — ConfigurableViewActions; stable record ID bd2330ab-913e-4bb6-b748-b629e7be26dd. Source $.GraphData.Items[48].FieldData.ConfigurableViewActions.

```json
[]
```

### E148-Content

CLF_InsActionPlanObject.CLF_InsActionPlan_Detail_NoEdit — Content; stable record ID bd2330ab-913e-4bb6-b748-b629e7be26dd. Source $.GraphData.Items[48].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar"><ix:CloneActionLink Override="true" Visible="False"/><ix:AddEntryActionLink Override="true" Visible="False"/><ix:SecurityActionLink Override="true" Visible="False"/><ix:DeleteActionLink Override="true" Visible="False"/><ix:SaveAddNewActionLink Override="true" Visible="False"/><ix:EditActionLink Override="true" Visible="False"/></ix:DetailPageMenuBar><ix:StageContainer UseDefaultDuringCreate="True" VisibleFor="Draft" ID="StageContainer_Draft"><ix:DetailSection Title="Action Plan" Icon="Icons/new/48x48/check2.gif" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="PlaDisplayField" /><ix:Field Caption="Inspection" For="ChecklistAnswer" Readonly="true" ResourceKey="Field0" Span="true" meta:resourcekey="Field0" /><ix:Field For="CPARTypeID" /><ix:Field For="CPARActionReq" IsMandatory="True" Span="true" /><ix:Field For="ActionOwner" /><ix:Field For="DueDate" IsMandatory="True" SpellCheck="false" /><ix:Field For="HelperReleaseAP" /><ix:Field For="QuestionList" /><ix:Field For="hRelatedInsp" /><ix:Field For="AlBeenCorrected" /></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View,Edit" For="Findings" ID="FindingsGridSection_Draft" IsCollapsed="True"><Menu><ix:GridAttachActionLink Override="true" LinkTo="CLF_Finding_Select/Index" Caption="Attach Findings" meta:resourcekey="GridAttachActionLink0" ResourceKey="GridAttachActionLink0"/><ix:GridDetachActionLink Override="true" Caption="Detach" meta:resourcekey="GridDetachActionLink0" ResourceKey="GridDetachActionLink0"/></Menu><aliases><ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/><ix:Alias For="Severity.TextColor.Value" Name="TC"/><ix:Alias For="Severity.CSS" Name="CSS"/><ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/><ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/></aliases><Columns><ix:Column For="RecordNo" LinkTo="CLF_Finding_Detail_Readonly/View?entityid={#Id}" /><ix:Column DisplayAs="truncate" For="Description" /><ix:TemplateColumn For="Severity" FilterAs="Dropdown"><template><div style="background-color:<%# Container.ViewData.Eval("BC") %>;color:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>"><%# Container.ViewData.Eval("Severity") %></div></template></ix:TemplateColumn><ix:Column Caption="Suggested Action Plan" For="ImmediateAction" ResourceKey="Column0" meta:resourcekey="Column0" /><ix:Column For="ResponseDue" Format="d" /><ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center"><Template><div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>"><%# Container.ViewData.Eval("FindingStatus") %></div></Template></ix:TemplateColumn></Columns></ix:GridSection></ix:StageContainer><ix:StageContainer VisibleFor="InProgress" ID="StageContainer_InProgress"><ix:DetailSection Title="Action Plan" Icon="Icons/new/48x48/check2.gif" meta:resourcekey="DetailSection1" ResourceKey="DetailSection1"><ix:FieldArea><ix:Field Caption="Inspection" For="ChecklistAnswer" Readonly="true" ResourceKey="Field1" Span="true" meta:resourcekey="Field1" /><ix:Field For="CPARTypeID" Readonly="true" /><ix:Field For="CPARActionReq" Readonly="True" Span="true" SpellCheck="false" /></ix:FieldArea></ix:DetailSection><ix:DetailSection Title="Completion" Icon="Icons/new/48x48/checks.gif" DisplayMode="View,Edit" meta:resourcekey="DetailSection2" ResourceKey="DetailSection2"><ix:FieldArea><ix:Field For="CompletedBy" /><ix:Field For="CompletionDate" /><ix:Field For="CompletionNotes" Span="true" SpellCheck="false" /></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View,Edit" For="Findings" ID="FindingsGridSection_Inprogress" IsCollapsed="True" Readonly="True"><aliases><ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/><ix:Alias For="Severity.TextColor.Value" Name="TC"/><ix:Alias For="Severity.CSS" Name="CSS"/><ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/><ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/></aliases><Columns><ix:Column For="RecordNo" /><ix:Column DisplayAs="truncate" For="Description" /><ix:TemplateColumn For="Severity" FilterAs="Dropdown"><template><div style="background-color:<%# Container.ViewData.Eval("BC") %>;color:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>"><%# Container.ViewData.Eval("Severity") %></div></template></ix:TemplateColumn><ix:Column Caption="Suggested Action Plan" For="ImmediateAction" ResourceKey="Column1" meta:resourcekey="Column1" /><ix:Column For="ResponseDue" Format="d" /><ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center"><Template><div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>"><%# Container.ViewData.Eval("FindingStatus") %></div></Template></ix:TemplateColumn></Columns></ix:GridSection></ix:StageContainer><ix:StageContainer UseDefaultWhenCompleted="True" ID="StageContainer_Completed"><ix:DetailSection Title="Action Plan" Icon="Icons/new/48x48/check2.gif" meta:resourcekey="DetailSection3" ResourceKey="DetailSection3"><ix:FieldArea><ix:Field Caption="Inspection" For="ChecklistAnswer" Readonly="true" ResourceKey="Field2" Span="true" meta:resourcekey="Field2" /><ix:Field For="CPARTypeID" Readonly="True" /><ix:Field For="CPARActionReq" Readonly="True" Span="true" SpellCheck="false" /><ix:Field For="ActionOwner" Readonly="True" /><ix:Field For="DueDate" Readonly="True" /></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:DetailSection Title="Completion" Icon="Icons/new/48x48/checks.gif" DisplayMode="View,Edit" meta:resourcekey="DetailSection4" ResourceKey="DetailSection4"><ix:FieldArea><ix:Field For="CompletedBy" Readonly="True" /><ix:Field For="CompletionDate" Readonly="True" /><ix:Field For="CompletionNotes" Readonly="True" Span="true" /></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View,Edit" For="Findings" ID="FindingsGridSection_Completed" IsCollapsed="True" Readonly="True"><aliases><ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/><ix:Alias For="Severity.TextColor.Value" Name="TC"/><ix:Alias For="Severity.CSS" Name="CSS"/><ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/><ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/></aliases><Columns><ix:Column For="RecordNo" /><ix:Column DisplayAs="truncate" For="Description" /><ix:TemplateColumn For="Severity" FilterAs="Dropdown"><template><div style="background-color:<%# Container.ViewData.Eval("BC") %>;color:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>"><%# Container.ViewData.Eval("Severity") %></div></template></ix:TemplateColumn><ix:Column Caption="Suggested Action Plan" For="ImmediateAction" ResourceKey="Column2" meta:resourcekey="Column2" /><ix:Column For="ResponseDue" Format="d" /><ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center"><Template><div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>"><%# Container.ViewData.Eval("FindingStatus") %></div></Template></ix:TemplateColumn></Columns></ix:GridSection></ix:StageContainer><ix:AttachmentSection ID="AttachmentFragmentGridSection" DisplayMode="edit,view"/><ix:WorkflowComments IsCollapsed="true"/><ix:ESignatureHistorySection DisplayMode="View" isCollapsed="True" UseCookies="false"/><ix:GridSection For="QuestionAnswers" ID="QuestionAnswersGridSection"><Columns><ix:Column For="AnswerText" LinkTo="default" /><ix:Column For="Checkbox" /><ix:Column For="ChecklistAnswer" /><ix:Column For="Choice" /><ix:Column For="Choices" /></Columns></ix:GridSection></ix:DetailPage><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E161-Content

Insp_InspRoleOptionObject.Insp_InspRoleOptionObjectInventoryView — Content; stable record ID c8494771-d45a-4fe7-a21e-94983d7a2507. Source $.GraphData.Items[54].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="Insp_InspRoleOptionObjectInventory"><ix:InventoryView ID="Insp_InspRoleOptionObjectInventoryView"><Columns><ix:Column For="Name" LinkTo="default" /><ix:Column For="Active" /><ix:Column For="Sort" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E218-Content

CLF_PubQuestObject.CLF_PubQuest_Inventory — Content; stable record ID a09143de-e03d-4b9c-a17e-7510091dffa9. Source $.GraphData.Items[79].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_PubQuest_Inventory"><ix:InventoryView ID="CLF_PubQuest_InventoryView"><Sorting><ix:Sort By="Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="QUestion.ChecklistType"/><ix:Group By="Section"/></grouping><Columns><ix:Column For="QuestionRef" LinkTo="default"/><ix:Column For="Content"/><ix:Column FilterAs="dropdown" For="QUestion.ChecklistType"/><ix:Column For="SectionName"/><ix:Column For="SectionSort"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E220-ConfigurableViewActions

CLF_PubQuestObject.CLF_PubQuest_Detail — ConfigurableViewActions; stable record ID 6bf1c8e6-a7a4-4c9a-87a3-0d1a0e5541ab. Source $.GraphData.Items[80].FieldData.ConfigurableViewActions.

```json
[]
```

### E220-Content

CLF_PubQuestObject.CLF_PubQuest_Detail — Content; stable record ID 6bf1c8e6-a7a4-4c9a-87a3-0d1a0e5541ab. Source $.GraphData.Items[80].FieldData.Content.

```xml
<ix:DetailPage Title="{#ObjectInfo.Caption}: {#QuestionRef}" ModernIcon="Raven/Icons/BrightBlue_48/clock164.png" meta:resourcekey="DetailPage0" ResourceKey="DetailPage0"><ix:DetailSection Title="Details" Icon="Raven/Icons/BrightBlue_48/information51.png" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="QuestionRef"/><ix:Field For="Question"/><ix:Field For="Order"/><ix:Field For="Content" SpellCheck="false"/><ix:Field For="Guideline"/><ix:Field For="Section"/><ix:Field For="AnswerType"/><ix:Field For="ChoiceList"/><ix:Field For="AnswerRequired"/><ix:Field For="AllowNA"/><ix:Field For="ComReqIfNA"/><ix:Field For="ComReqChoices"/><ix:Field For="FindReqChoices"/><ix:Field For="ActReqChoices"/></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayEditColumn="false" For="PubChecklists" ID="PubChecklistsGridSection" Readonly="True" RowSelectionMode="None"><Sorting><ix:Sort runat="server" By="DateCreated" Direction="Descending"/></Sorting><Columns><ix:Column For="ChecklistRef" LinkTo="default"/><ix:Column For="Title"/><ix:Column For="DateCreated" Format="d"/><ix:Column For="IsActive"/></Columns></ix:GridSection></ix:DetailPage>
```

### E231-Content

CLF_PubQuestObject.Insp_PubQuestion_Select — Content; stable record ID d42b7332-e01a-46cc-9bf8-93217f3861df. Source $.GraphData.Items[82].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="Insp_PubQuestion_Select"><ix:InventoryView ID="Insp_PubQuestion_SelectSelect" HideGroupAddButton="true"><filters><ix:Filter><ix:SubQueryPredicate For="Question.ChecklistType.Id" FromEntity="Insp_InspectionAbsObject" Type="In" EntityAlias="Inspection"><ix:Property Text="TypeOfInspec.Id"/><ix:Filter><ix:CommonPredicate For="[Inspection].Id" Type="Equal"><ix:Value Parse="true"><%=Request.QueryString["_DependsOn.Parent$"].Replace("ChecklistAnswer:", "") %></ix:Value></ix:CommonPredicate></ix:Filter></ix:SubQueryPredicate><ix:CommonPredicate For="DateCreated" Type="GreaterThanOrEqual"><ix:Property Text="Question.LastPublish"/></ix:CommonPredicate></ix:Filter></filters><Menu><ix:GridCreateActionLink Override="true" visible="false"/><ix:GridDeleteActionLink Override="true" visible="false"/></Menu><grouping><ix:Group By="Section"/></grouping><Sorting><ix:Sort By="Order" Direction="Ascending"/></Sorting><Columns><ix:Column For="QuestionRef"/><ix:Column DisplayAs="Truncate" For="Content"/><ix:Column DisplayAs="Truncate" For="Guideline"/><ix:Column For="SectionName"/><ix:Column For="SectionSort"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E284-ConfigurableViewActions

CLF_PreferencesObject.CLF_Preferences_Detail — ConfigurableViewActions; stable record ID 0115e12c-e65d-43b4-b947-b67bca0dd63f. Source $.GraphData.Items[103].FieldData.ConfigurableViewActions.

```json
[]
```

### E284-Content

CLF_PreferencesObject.CLF_Preferences_Detail — Content; stable record ID 0115e12c-e65d-43b4-b947-b67bca0dd63f. Source $.GraphData.Items[103].FieldData.Content.

```xml
<ix:DetailPage ModernIcon="Raven/Icons/BrightBlue_48/equalizer3.png" ResourceKey="DetailPage0" Title="{#ObjectInfo.Caption}" meta:resourcekey="DetailPage0"><ix:DetailSection Title="Details" Icon="Raven/Icons/BrightBlue_48/information51.png" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea><ix:Field For="GridCustomCode" CaptionPosition="top"/></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayEditColumn="false" Entity="CLF_LocalizResourceObject" HideGroupAddButton="true" Icon="Raven/Icons/BrightBlue_48/earth208.png" ResourceKey="GridSection0" Title="Localizable Resources" meta:resourcekey="GridSection0"><Menu><ix:GridCreateActionLink Override="true" openIn="popup"/></Menu><columns><ix:Column ColumnCSSClass="c-key" For="Key" width="5px"/><ix:Column EditMode="inline" For="Value"/><ix:Column EditMode="inline" For="Comments"/></columns></ix:GridSection></ix:DetailPage><style>#GridCustomCode {
    max-height: 400px;

    min-height: 400px;

}


div#GridCustomCode {
   
    overflow: auto;
    outline: 1px solid gray;
    padding: 5px;
    color: white;
    background-color: black;
}


div#GridCustomCode .hard-break {
    white-space: pre-wrap;
}

td.data-cell.c-key {
    font-weight: 600 !important;
    font-size: 13px !important;
}</style>
```

### E313-Content

CLF_ChoiceObject.CLF_Choice_Inventory — Content; stable record ID 835f675c-51cc-4444-a022-9729e5f5dfb8. Source $.GraphData.Items[114].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Choice_Inventory"><ix:InventoryView ID="CLF_Choice_InventoryView" Caption="Choices" meta:resourcekey="InventoryView0" ResourceKey="InventoryView0"><Columns><ix:Column For="Reference" LinkTo="default" /><ix:Column For="Name" /><ix:Column FilterAs="Dropdown" For="ChoiceList" /><ix:Column For="Value" /><ix:Column FilterAs="Dropdown" For="BColor" /><ix:Column FilterAs="Dropdown" For="TColor" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E362-ConfigurableViewActions

Insp_InspRoleOptionObject.Insp_InspRoleOptionObjectDetailView — ConfigurableViewActions; stable record ID dc754ab9-fb26-4aac-8a91-e61a856e43e7. Source $.GraphData.Items[136].FieldData.ConfigurableViewActions.

```json
[]
```

### E362-Content

Insp_InspRoleOptionObject.Insp_InspRoleOptionObjectDetailView — Content; stable record ID dc754ab9-fb26-4aac-8a91-e61a856e43e7. Source $.GraphData.Items[136].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Inspection Role Option Details" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Name" /><ix:Field DisplayMode="View,Edit" For="RecordNo" /><ix:Field For="Sort" /><ix:Field For="Active" /></ix:FieldArea></ix:DetailSection></ix:DetailPage>
```

### E367-Content

CLF_CheckliAbstractObject.CLF_CheckliAbstract_Inventory — Content; stable record ID 979476b6-e3a1-4120-a358-c4370f7c95c6. Source $.GraphData.Items[138].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_CheckliAbstractObjectInventory"><ix:InventoryView ID="CLF_CheckliAbstractObjectInventoryView"><Columns><ix:Column For="Title" LinkTo="default"/><ix:Column For="Description"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E381-Content

Insp_InspectionAbsObject.Insp_InspectionAbs_Inventory — Content; stable record ID 5c23a7fd-2f23-4c2e-a3fb-5d56d606901c. Source $.GraphData.Items[145].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="Insp_InspectionAbs_Inventory"><ix:InventorySearch Placeholder="Type and Press Enter" Fields="RecordNo,Location.Name,InspectionDate,TypeOfInspec,InspecChecklist,CompletedOn,PersResponsible.Name,Score,Workflow.WorkflowStatus,Workflow.Status.Name,Workflow.PersonResponsible.Name,Workflow.CurrentStage.Name,Workflow.DueDate"/><ix:InventoryView DisplayEditColumn="false" ID="Insp_InspectionAbs_InventoryView" Caption="Inspections List" PageSizeSelector="0,10,20,30,40,50,100,200,500, 1000" AllowFiltering="false" meta:resourcekey="InventoryView0" ResourceKey="InventoryView0"><Sorting><ix:Sort By="RecordNo" Direction="Descending"/></Sorting><Menu><ix:GridCreateActionLink Override="true" Caption="Add New Inspection" meta:resourcekey="GridCreateActionLink0" ResourceKey="GridCreateActionLink0"/></Menu><aliases><ix:alias For="Workflow.CurrentStage"/><ix:alias For="Workflow.CurrentStage.Name"/><ix:alias For="Workflow.Status"/><ix:alias For="Workflow.WorkflowStatus"/><ix:alias For="Workflow.DueDate"/><ix:alias For="Workflow.PersonResponsible"/><ix:alias For="Workflow.PersonResponsible.Name"/><ix:alias For="Location"/><ix:alias For="Location.Name"/><ix:alias For="InspectionDate"/><ix:alias For="RecordNo"/><ix:alias For="Id"/><ix:alias For="TypeOfInspec"/><ix:alias For="InspecChecklist"/></aliases><Columns><ix:TemplateColumn For="RecordNo" HorizontalAlign="center" Width="10px"><template><div style="display:flex;justify-content:center;"><a href="<%= HttpEnvironment.SystemApplicationPath %>/Application/Insp/Inspections/Forms/Insp_EquipInspection_Detail/Edit/<%# Container.ViewData.Eval("Id") %>"><div class="recordnoblock"><%# Container.ViewData.Eval("RecordNo") %></div></a></div></template></ix:TemplateColumn><ix:TemplateColumn Caption="Type of Inspection" Width="20%" Wrap="true" meta:resourcekey="TemplateColumn0" ResourceKey="TemplateColumn0"><Template><div class="Descriptor TypeofInspectionBlock"><%# Container.ViewData.Eval("TypeOfInspec") %></div><div class="ChevronImage"><img src="<%# ImageHelper.GetStaticPath("Raven/Icons/BrightBlue_48/")%>right218.png"/></div><div class="Descriptor ChecklistBlock"><%# Container.ViewData.Eval("InspecChecklist") %></div></Template></ix:TemplateColumn><ix:TemplateColumn Caption="When and Where?" Visible="true" Wrap="true" Width="20%" meta:resourcekey="TemplateColumn1" ResourceKey="TemplateColumn1"><Template><div><div class="stackeddetails stackedicons" style="display:flex"><%= ApplicationSettings.Get("ConfgAppSetting_SpecAppSettingsObject","CalIconSel.SVGCode","")  %><div class="stackeddetailsdescriptions"><%# String.Format("{0:MM/dd/yyyy}", Container.ViewData.Eval("InspectionDate")) %></div></div><div class="stackeddetails stackedicons" style="display:flex"><%= ApplicationSettings.Get("EHSIncidentMang_OIISettingObject","LoStructureIcon.SVGCode","")  %><div class="stackeddetailsdescriptions"><%# Container.ViewData.Eval("Location") %></div></div></div></Template></ix:TemplateColumn><ix:Column Caption="Inspector" DisplayAs="label" For="PersResponsible" meta:resourcekey="Column1" ResourceKey="Column1"/><ix:Column For="CompletedOn" Format="d" Width="5px"/><ix:Column For="Score" AllowFiltering="false"/><ix:TemplateColumn Caption="Workflow" meta:resourcekey="TemplateColumn2" ResourceKey="TemplateColumn2"><Template><div style="display:flex;align-items:center;"><div class="workflowiconcontainer"><div style="text-align:center;"><img class="workflowicons <%# Container.ViewData.Eval("Workflow.WorkflowStatus").ToString() == "1" ? "" : Container.ViewData.Eval("Workflow.WorkflowStatus").ToString() == "3" ? "tableiconsNegative" : "tableiconsPositive" %>" src="<%# ImageHelper.GetStaticPath("Raven/Icons/BrightBlue_48/")%>
<%# Container.ViewData.Eval("Workflow.WorkflowStatus").ToString() == "1" ? "contract11.png" : Container.ViewData.Eval("Workflow.WorkflowStatus").ToString() == "3" ? "close40.png" :"verification14.png" %>"/><div style="margin-top:10px;text-align:center"><Strong><%# Container.ViewData.Eval("Workflow.WorkflowStatus").ToString() == "1" ? Container.ViewData.Eval("Workflow.CurrentStage") : Container.ViewData.Eval("Workflow.WorkflowStatus").ToString() == "3" ? "Cancelled" : "Closed" %></Strong></div></div></div><div class="workflowdetailblock"><div><div class="workflowdetailrow" style="display:<%# Container.ViewData.Eval("Workflow.WorkflowStatus").ToString() == "1" ? "flex" : Container.ViewData.Eval("Workflow.WorkflowStatus").ToString() == "3" ? "none" : "none" %>;"><%= ApplicationSettings.Get("ConfgAppSetting_SpecAppSettingsObject","WrkflowStaIcon.SVGCode","")  %><div class="workflowdetailtext"><%# Container.ViewData.Eval("Workflow.CurrentStage") %></div></div><div class="workflowdetailrow" style="display:<%# Container.ViewData.Eval("Workflow.WorkflowStatus").ToString() == "1" ? "flex" : Container.ViewData.Eval("Workflow.WorkflowStatus").ToString() == "3" ? "none" : "none" %>;"><%= ApplicationSettings.Get("ConfgAppSetting_SpecAppSettingsObject","ResIconWorkflow.SVGCode","")  %><div class="workflowdetailtext"><%# Container.ViewData.Eval("Workflow.PersonResponsible") %></div></div><div class="workflowdetailrow" style="display:<%# Container.ViewData.Eval("Workflow.WorkflowStatus").ToString() == "1" ? "flex" : Container.ViewData.Eval("Workflow.WorkflowStatus").ToString() == "3" ? "none" : "none" %>;"><%= ApplicationSettings.Get("ConfgAppSetting_SpecAppSettingsObject","DueDateIcon.SVGCode","")  %><div class="workflowdetailtext"><%# String.Format("{0:MM/dd/yyyy}", Container.ViewData.Eval("Workflow.DueDate")) %></div></div></div></div></div></Template></ix:TemplateColumn></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage><style>.float-table {
  border-collapse:separate!important;
  border-spacing:0 15px!important;
  padding:0px 5px 0px 5px;
  }


.data_row td {
border-top:1px solid #cccccc!important;

border-bottom:1px solid #cccccc!important;
}

.data_row td:first-child {

 border-left:1px solid #cccccc!important;
    border-radius: 4px 0px 0px 4px;

}
 
 .data_row td:last-child {

 border-right:1px solid #cccccc!important;
     border-radius: 0px 4px 4px 0px;

}
 
 
 .data_row {
  background-color: #f2f8f9!important;

}
.data_row:hover {
    background-color: white!important;
    border: 1px solid #cccccc;
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
       
 }</style><style>.recordnoblock {
font-size:24px;
border:lightgray solid;
background-color:lightgray;
padding:5px 10px 5px 10px;
color:slategray;
text-align:center;
     border-radius: 4px 4px 4px 4px;

}
.recordnoblock:hover {
    transition: all 0.2s ease-out;
padding:10px 20px 10px 20px;
border:#0076bd solid;
color:white;
     border-radius: 8px 8px 8px 8px;

background-color:#0076bd;

}</style><style>.RecordCard {
 
  display:flex;

  }
  
  .EventTypeBlock {
  flex:3 0 0;
  display:flex;
  }</style><style>.stackeddetails {
display:flex;
align-items:center;
margin:5px 0px 5px 0px;
}                            
.stackedicons > svg{
font-size:14px;
width:24px!important;
height:24px!important;
vertical-align:middle;
}
.stackeddetailsdescriptions {
vertical-align:middle;
padding:0px 0px 0px 5px;
}

.downloadbuttonlink{
border: #34A2B6 1px dotted;
border-radius:5px;
background-color:#003E53!important;
color:white!important;
text-decoration:none!
width:max-content;
font-weight:600!important;
font-family: "Open Sans",sans-serif!important;
font-size:14px!important;
padding:5px 10px 5px 10px;
transition:background-color 0.5s, color 0.5s;
                            }
                            
.downloadbuttonlink:hover {
border:#34A2B6 1px dotted;
background-color:white!important;
color:#003E53!important;
text-decoration:none;
                            }</style><style>.eventtypeheader {
font-size:large;
margin:5px 0px 5px 10px;

}   
.eventtypeicon {
display:flex;
align-items:center;
}                       
.eventtypedetails {
display:flex;
align-items:center;
margin:5px 0px 5px 10px;
}                            
.eventtypeiconsmall > svg{
font-size:14px;
width:18px!important;
height:18px!important;
vertical-align:middle;
}
.CAtextdescriptions{
vertical-align:middle;
padding:0px 0px 0px 5px;
                              }
                              .CAtypetextdescriptions {
                             font-style:italic;
 
                              }
                              
     .eventtypeicon> svg {
     width:60px!important;
     height:60px!important;
     }</style><style>.workflowicons {
width:48px !important; 
height:48px !important;
}                              
.workflowiconcontainer {
padding: 0 10pt 0 10pt;
width:100px;
inline-size:100px!important;
white-space:pre-wrap;
}
.workflowdetailblock {
display: flex;  justify-content: center;  align-items: center; 
padding:5pt 15pt 5pt 15pt;
border-left: lightgray solid 3px;
}
.workflowdetailrow {
display:flex;
align-items: center; 
padding:2pt 0 2pt 0pt;

}
.workflowdetailrow > svg{
font-size:14px;
width:24px!important;
height:24px!important;
vertical-align:middle;
}
.workflowdetailtext {
padding:0 5pt 0 5pt;
font-weight:700;
                                }</style><style>.stackeddetails {
display:flex;
align-items:center;
margin:5px 0px 5px 0px;
}                            
.stackedicons > svg{
font-size:14px;
width:24px!important;
height:24px!important;
vertical-align:middle;
}
.stackeddetailsdescriptions {
vertical-align:middle;
padding:0px 0px 0px 5px;
}</style><style>.Descriptor{
border-radius:4px;
padding:5px;
text-align:center;
font-weight:bold;
border:1px solid #d7dcde;
box-shadow:0px 1px 4px rgba(38, 38, 38, 0.2);
}

.TypeofInspectionBlock {
background-color:rgb(0, 118, 189);
color:white;
}
.ChecklistBlock{
background-color:#90FCF9;
color:black;
}
.ChevronImage {
text-align:center;
padding:1px;
  transform: rotate(90deg);

}</style>
```

### E398-ConfigurableViewActions

CLF_QuestObject.CLF_Quest_MassUpdate — ConfigurableViewActions; stable record ID a7639696-7840-48f8-97b9-de8fa270531e. Source $.GraphData.Items[149].FieldData.ConfigurableViewActions.

```json
[]
```

### E398-Content

CLF_QuestObject.CLF_Quest_MassUpdate — Content; stable record ID a7639696-7840-48f8-97b9-de8fa270531e. Source $.GraphData.Items[149].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Fields" ShowHeader="false" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="ChecklistType"/><ix:Field For="Section"/><ix:Field For="AnswerType"/><ix:Field For="ChoiceList"/><ix:Field For="UseExisting"/><ix:Field For="HelperChecklist"/><ix:Field For="ExistingSection"/><ix:Field For="AbsoluteOrder"/></ix:FieldArea></ix:DetailSection></ix:DetailPage><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E414-Content

CLF_SectionAnswerObject.CLF_SectionAnswerObjectInventoryView — Content; stable record ID e555f9a8-cd04-4490-a543-95100d702a0d. Source $.GraphData.Items[155].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_SectionAnswerObjectInventory"><ix:InventoryView ID="CLF_SectionAnswerObjectInventoryView"><Columns><ix:Column For="Section" LinkTo="default"/><ix:Column For="ChecklistAnswer"/><ix:Column For="Sort"/><ix:Column For="CheckAnswerGUID"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E426-Content

CLF_SectionAnswerObject.CLF_SectionAnswerObjectDetailView — Content; stable record ID 11307980-2e53-4b3a-9154-092219d3cc8a. Source $.GraphData.Items[160].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Fields"><ix:FieldArea><ix:Field For="Section"/><ix:Field For="ChecklistAnswer"/><ix:Field For="Sort"/><ix:Field For="CheckAnswerGUID"/></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:WorkflowComments/><ix:WorkflowTracking/><ix:ESignatureHistorySection/><ix:GridSection For="QuestionAnswers" ID="QuestionAnswersGridSection"><Columns><ix:Column For="ActionPlanAdded" LinkTo="default"/><ix:Column For="ActionPlans"/><ix:Column For="AnswerText"/><ix:Column For="Checkbox"/><ix:Column For="ChecklistAnswer"/></Columns></ix:GridSection></ix:DetailPage>
```

### E435-Content

CLF_SinglechecklistObject.CLF_SingleChecklist_Inventory — Content; stable record ID ec9b769b-3057-46a5-968a-e07e72bc44f1. Source $.GraphData.Items[164].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_SingleChecklist_Inventory"><ix:InventoryView ID="CLF_SingleChecklist_InventoryView"><Columns><ix:Column For="Name" LinkTo="default"/><ix:Column For="ApplicQuestions"/><ix:Column For="Comments"/><ix:Column For="Date"/><ix:Column For="FilledQuestions"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E439-ConfigurableViewActions

CLF_SinglechecklistObject.CLF_SingleChecklist_Detail — ConfigurableViewActions; stable record ID e95f18e6-5617-425b-b244-6919b1085ea2. Source $.GraphData.Items[166].FieldData.ConfigurableViewActions.

```json
[]
```

### E439-Content

CLF_SinglechecklistObject.CLF_SingleChecklist_Detail — Content; stable record ID e95f18e6-5617-425b-b244-6919b1085ea2. Source $.GraphData.Items[166].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Audit (Single Checklist)" Icon="Icons/new/48x48/clipboard_empty.gif" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Location" EditAs="EntitySelector" DisplayMode="Create"/><ix:Field For="Location" DisplayAs="Label" DisplayMode="View,Edit" Readonly="true"/><ix:Field DisplayMode="View,Edit" For="RecordNo"/><ix:Field For="Name" EditAs="textbox" IsMandatory="true"/><ix:Field For="Comments"/><ix:Field For="PubChecklist" DisplayMode="Create" IsMandatory="true"/></ix:FieldArea></ix:DetailSection><ix:GridSection ID="QuestionAnswersGridSection" For="QuestionAnswers" DisplayMode="Edit,View" EditLinkTarget="popup" RefreshScope="Row" HideGroupAddButton="true" Title="{#PubChecklist}" AllowSorting="false" meta:resourcekey="GridSection0" ResourceKey="GridSection0"><Actions><ix:MassUpdateAction ViewName="CLF_QuestionAnswer_MassUpdate"/></Actions><menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></menu><Sorting><ix:Sort By="PubQuestion.Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="PubQuestion.Section"/></grouping><aliases><ix:Alias For="PubQuestion.QuestionRef"/><ix:Alias For="PubQuestion.Guideline"/><ix:Alias For="PubQuestion.Id"/><ix:Alias For="ChecklistAnswerId"/><ix:Alias For="Choice.BColor.Value"/><ix:Alias For="Choice.TColor.Value"/><ix:Alias For="Id"/></aliases><Columns><ix:TemplateColumn For="PubQuestion.Content" Width="1"><Template><span style="font-weight:bold;"><%# Container.ViewData.Eval("PubQuestion.QuestionRef") %> <%# Container.ViewData.Eval("PubQuestion.Content") %></span><div class="fieldHint"><%# Container.ViewData.Eval("PubQuestion.Guideline") %></div></Template></ix:TemplateColumn><ix:Column For="PubQuestion.Question.References" FetchAs="Collection" DisplayAs="List" Visible="false"/><ix:MergeColumn Caption="Answer" For="PubQuestion.AnswerType.Value" EditMode="popup" RefreshScope="Row" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0"><MappedColumns><ix:TemplateColumn MapValue="Choice_Disable" For="Choice" EditMode="inline"><Template><div style="color:<%# Container.ViewData.Eval("Choice.TColor.Value") %>;background-color:<%# Container.ViewData.Eval("Choice.BColor.Value") %>;<%# Container.ViewData.Eval("Choice.Css") %>"><%# Container.ViewData.Eval("Choice") %></div></Template></ix:TemplateColumn><ix:Column MapValue="Choice" For="Choice" EditMode="inline"/><ix:Column MapValue="Date" For="Date" EditMode="inline" Format="d"/><ix:Column MapValue="Choices" For="Choices" FetchAs="collection" DisplayAs="List" EditMode="popup"/><ix:Column MapValue="Float" For="Float" EditMode="inline" HorizontalAlign="right"/><ix:Column MapValue="Text" For="Text" EditMode="popup"/><ix:Column MapValue="Checkbox" For="Checkbox" EditMode="inline"/></MappedColumns></ix:MergeColumn><ix:Column For="Comments" EditMode="popup" RefreshScope="Row"/><ix:Column For="NumbofDocuments" LinkTo="CLF_QuestionAnswer_Docs/View?entityid={#id}" LinkTarget="popup" RefreshScope="Row" Caption="#Docs" HorizontalAlign="center" meta:resourcekey="Column0" ResourceKey="Column0"/><ix:TemplateColumn For="NbFindings" Caption="Add" HorizontalAlign="center" width="20px" AllowFiltering="false" AllowSorting="false" meta:resourcekey="TemplateColumn0" ResourceKey="TemplateColumn0"><Template><a title="Create &amp; Attach a new Finding" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Finding_Detail/Create?ChecklistAnswer=<%# Container.ViewData.Eval("ChecklistAnswerId") %>&amp;RelatedId=<%# Container.ViewData.Eval("Id") %>&amp;RelatedPath=CLF_QuestionAnswerObject.Findings"><img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/></a></Template></ix:TemplateColumn><ix:Column Caption="Attached Findings" DisplayAs="List" EditMode="popup" FetchAs="Collection" For="Findings" RefreshScope="row" meta:resourcekey="Column1" ResourceKey="Column1"/></Columns></ix:GridSection><ix:GridSection ID="FindingsGridSection" For="Findings" DisplayMode="Edit,View" EditLinkTarget="popup" RefreshScope="Row" Title="Finding Summary" meta:resourcekey="GridSection1" ResourceKey="GridSection1"><menu><ix:GridCreateActionLink Override="true" Visible="true" OpenIn="popup"/></menu><Sorting><ix:Sort By="RecordNo" Direction="Ascending"/></Sorting><aliases><ix:Alias For="Id"/></aliases><Columns><ix:Column For="RecordNo" LinkTo="default"/><ix:Column For="Description" Truncate="true"/><ix:Column For="ResponseDue" Format="d"/></Columns></ix:GridSection><ix:WorkflowComments DisplayMode="View" IsCollapsed="true"/><ix:WorkflowTracking DisplayMode="View" IsCollapsed="true"/><ix:ESignatureHistorySection DisplayMode="View" IsCollapsed="true"/><ix:MailMergeTemplates ID="MailMergeFragmentGridSection" DisplayMode="View" IsCollapsed="true"/></ix:DetailPage><style>.data_row td.wrap {
    white-space: normal !important;
}</style>
```

### E448-Content

CLF_SubchecklistObject.CLF_Subchecklist_Inventory — Content; stable record ID bf3017fc-ec9f-48ea-83e4-2ab30360cb5d. Source $.GraphData.Items[167].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Subchecklist_Inventory"><ix:InventoryView ID="CLF_Subchecklist_InventoryView"><Columns><ix:Column For="Name" LinkTo="default"/><ix:Column For="ApplicQuestions"/><ix:Column For="Comments"/><ix:Column For="Date"/><ix:Column For="FilledQuestions"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E468-ConfigurableViewActions

ConfgAppSetting_InstructionTextObject.ConfgAppSetting_InstructionTextObjectDetailView — ConfigurableViewActions; stable record ID 47f7cd7b-914a-4408-bbba-45500cbe7307. Source $.GraphData.Items[175].FieldData.ConfigurableViewActions.

```json
[]
```

### E468-Content

ConfgAppSetting_InstructionTextObject.ConfgAppSetting_InstructionTextObjectDetailView — Content; stable record ID 47f7cd7b-914a-4408-bbba-45500cbe7307. Source $.GraphData.Items[175].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Instruction Text Details" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field DisplayMode="View,Edit" For="RecordNo" /><ix:Field For="TemplaGenerator" /><ix:Field For="Application" /><ix:Field For="Form" /><ix:Field For="Stage" /><ix:Field /><ix:Field For="InstrTextHeader" /><ix:Field For="InstructiText" /><ix:Field /><ix:Field DisplayMode="View,Edit" For="InstruPanelCode" /></ix:FieldArea><%= Model.InstruPanelCode %></ix:DetailSection></ix:DetailPage>
```

### E497-ConfigurableViewActions

CLF_ChecklistObject.CLF_Checklist_Detail — ConfigurableViewActions; stable record ID 9668bbf5-b9a1-4966-966c-9d81420b46c3. Source $.GraphData.Items[185].FieldData.ConfigurableViewActions.

```json
[
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Hide/Show Code",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "AutoCode",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "false",
                "entityType": null,
                "text": null
              }
            },
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "Reference",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "IsNullOperator",
                "negate": false
              },
              "rightOperand": null
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "Reference",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "Reference",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ReferenceAuto",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "Reference",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "Reference",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ReferenceAuto",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "AutoCode"
      }
    ]
  }
]
```

### E497-Content

CLF_ChecklistObject.CLF_Checklist_Detail — Content; stable record ID 9668bbf5-b9a1-4966-966c-9d81420b46c3. Source $.GraphData.Items[185].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Checklist Definition" Icon="Icons/new/48x48/scroll_refresh.gif" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="ChecklistType" Span="true"/><ix:Field For="AutoCode" DisplayMode="Create"/><ix:Field For="AutoCode" DisplayMode="View,Edit" ReadOnly="true"/><ix:Field For="Reference"/><ix:Field For="Reference" ID="ReferenceAuto" ReadOnly="true" DisplayMode="View,Edit"/><ix:Field For="Location" EditAs="EntitySelector" DisplayAs="string"/><ix:Field For="Title" Span="true"/><ix:Field For="Description" Span="true"/><ix:Field For="EnableSections" IsMandatory="false"/><ix:Field For="EnableScoring" IsMandatory="false"/><ix:Field For="Active"/></ix:FieldArea></ix:DetailSection><% if (Convert.ToBoolean(ViewData.Eval("EnableSections"))) { %><ix:TabsSection Title="Checklist Content" DisplayMode="View,Edit" meta:resourcekey="TabsSection0" ResourceKey="TabsSection0"><ix:Tab Caption="Questions" meta:resourcekey="Tab1" ResourceKey="Tab1"><ix:GridPanel DisplayMode="View,Edit" EditLinkTarget="popup" For="HelpeQuestions" HideGroupAddButton="true" ID="QuestionsGridSection"><Actions><ix:MassUpdateAction ViewName="CLF_QuestObjectDetailView_MassUpdate"/></Actions><grouping><ix:Group By="ExistingSection" HeaderCaption="Section"/></grouping><Menu><ix:GridCreateActionLink Override="true" OpenIn="popup" Visible="true" Caption="Create New Question" meta:resourcekey="GridCreateActionLink0" ResourceKey="GridCreateActionLink0"/></Menu><Sorting><ix:Sort runat="server" By="Order" Direction="Ascending"/></Sorting><Columns><ix:Column For="Order" width="5px" EditMode="inline"/><ix:Column For="QuestionRef" LinkTo="default" width="5px"/><ix:Column EditMode="inline" For="Content"/><ix:Column For="AnswerRequired" Span="true" EditMode="inline" width="5px"/><ix:Column EditMode="inline" For="AllowNA" width="5px"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="AnswerType" width="5px"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="ChoiceList" width="5px"/><%------------------------------Configuration for Default Answers------------------------------%><ix:MergeColumn For="AnswerType.Value" Caption="Default Answer" width="5px" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0"><MappedColumns><ix:Column EditMode="inline" For="DefaultChoice" MapValue="Choice"/><ix:Column DisplayAs="Collection" EditMode="popup" FetchAs="Collection" For="DefaultChoices" MapValue="Choices"/><ix:Column EditMode="inline" For="DefaultBool" MapValue="Checkbox"/><ix:Column For="Field" MapValue="Value"/></MappedColumns></ix:MergeColumn></Columns></ix:GridPanel></ix:Tab><ix:Tab Caption="Sections" meta:resourcekey="Tab0" ResourceKey="Tab0"><ix:GridPanel For="Sections" DisplayMode="View,Edit" ID="SectionsGridSection" EditLinkTarget="popup"><Menu><ix:GridCreateActionLink Override="true" OpenIn="popup" Visible="true" Caption="Create New Section" meta:resourcekey="GridCreateActionLink1" ResourceKey="GridCreateActionLink1"/></Menu><Columns><ix:Column For="SectionName" LinkTarget="popup" LinkTo="default"/><ix:Column EditMode="inline" For="Sort"/></Columns></ix:GridPanel></ix:Tab><ix:Tab Caption="Conditional Display" meta:resourcekey="Tab2" ResourceKey="Tab2"><ix:GridSection DisplayMode="Edit,View" DisplayEditColumn="false" For="Questions" ShowHeader="false" ID="ConditionalFormattingGridSection" RefreshScope="Row" HideGroupAddButton="True"><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/><ix:GridAttachActionLink Override="true" Visible="false"/><ix:GridDetachActionLink Override="true" Visible="false"/></Menu><Sorting><ix:Sort By="Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="ExistingSection" HeaderCaption="Section"/></grouping><Columns><ix:Column For="QuestionRef" width="5px"/><ix:Column DisplayAs="Truncate" For="Content"/><ix:Column FilterAs="Dropdown" For="ChoiceList" width="5px"/><ix:Column EditMode="inline" For="DependsOn" width="5px"/><ix:MergeColumn Caption="Visible If" For="HasDependsOn" HeaderToolTip="The question will be displayed if the Depends On question is answered with this selection." width="5px" meta:resourcekey="MergeColumn4" ResourceKey="MergeColumn4"><MappedColumns><ix:Column MapValue="True" EditMode="inline" For="VisibleIfs" FetchAs="Collection" DisplayAs="List" width="5px"/></MappedColumns></ix:MergeColumn><ix:MergeColumn Caption="Visible if no answer" For="HasDependsOn" HeaderToolTip="If YES the question will be visible when the Depends On question is not yet answered." width="5px" meta:resourcekey="MergeColumn5" ResourceKey="MergeColumn5"><MappedColumns><ix:Column MapValue="True" EditMode="inline" For="VisDepNoAns" width="5px"/></MappedColumns></ix:MergeColumn></Columns></ix:GridSection></ix:Tab></ix:TabsSection><% } else { %><ix:TabsSection Title="Checklist Content" DisplayMode="View,Edit" meta:resourcekey="TabsSection0" ResourceKey="TabsSection0"><ix:Tab Caption="Questions" meta:resourcekey="Tab1" ResourceKey="Tab1"><ix:GridPanel DisplayMode="View,Edit" EditLinkTarget="popup" For="HelpeQuestions" HideGroupAddButton="true" ID="QuestionsGridSection2"><Actions><ix:MassUpdateAction ViewName="CLF_QuestObjectDetailView_MassUpdate"/></Actions><Menu><ix:GridCreateActionLink Override="true" OpenIn="popup" Visible="true" Caption="Create New Question" meta:resourcekey="GridCreateActionLink0" ResourceKey="GridCreateActionLink0"/></Menu><Sorting><ix:Sort runat="server" By="Order" Direction="Ascending"/></Sorting><Columns><ix:Column For="QuestionRef" LinkTarget="popup" LinkTo="default"/><ix:Column DisplayAs="Truncate" EditMode="inline" For="Content"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="AnswerType" RefreshScope="Row"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="ChoiceList" RefreshScope="Row"/><ix:Column EditMode="inline" For="Order"/></Columns></ix:GridPanel></ix:Tab></ix:TabsSection><% } %><ix:GridSection DisplayEditColumn="false" DisplayMode="View,Edit" For="PubChecklists" ID="PubChecklistsGridSection" Title="Checklist Version History" meta:resourcekey="GridSection0" ResourceKey="GridSection0"><Menu><ix:GridCreateActionLink Override="true" Visible="False"/></Menu><Sorting><ix:Sort runat="server" By="DateCreated" Direction="Descending"/></Sorting><Columns><ix:Column For="ChecklistRef" LinkTarget="popup" LinkTo="default"/><ix:Column For="Title"/><ix:Column DisplayAs="Truncate" For="Description"/><ix:Column For="DateCreated" Format="d"/><ix:Column EditMode="inline" For="IsActive"/></Columns></ix:GridSection><ix:AttachmentSection ID="AttachmentFragmentGridSection" DisplayMode="edit,view"/></ix:DetailPage><style type="text/css">.inline-edit, .popup-edit {
background-color: #e2f3fa;
border: 1px dotted #58c3f0 !important;
}</style><style>td.data-cell.depends-on-check {
        font-size: 0!important;
        text-align: center;
}

td.data-cell.depends-on-check.good::before {
        font-family: 'FontAwesome';
        content: "\f058"; 
        font-size: 24px;
        color: green;
    }
td.data-cell.depends-on-check.bad::before {
        font-family: 'FontAwesome';
        content: "\f057";
        font-size: 24px;
        color: rgb(179 3 3);
    }
    
    td.data-cell.depends-on.question-missing {
    text-decoration: line-through;
}</style><ix:JavaScript Scope="OnReady"><script>$("body").on("gridAfterLoaded", function(event, data) {
		checkDependencies();
	});

	checkDependencies();

	function checkDependencies() {

		$("td.depends-on-check").each(function () {
			
			const $td = $(this);

			const tdContent = $td.text().trim();

			

			const $dependsOn = $td.closest("tr").find("td.depends-on");

			const dependsOnContent = $dependsOn.text().trim();

			//if dependsOnContent is empty, exit
			if (!dependsOnContent) return;

			const gridEntities = $td.closest("div.grid_container").data("entities");


			//from gridEntities, get the GUID (bde7e206-1371-474a-b676-a010e3f891ef in the example above)
			var relatedId = gridEntities[0].value.Url.split("relatedId=")[1].split("&")[0];

			//is  relatedId in the dependsOnContent?
			if (tdContent.indexOf(relatedId) === -1) {
				
				//if not, add a link to the related object
				$td.addClass("bad").attr("title", "The Dependent Question is NOT in the Checklist");
				$dependsOn.addClass("question-missing");
				
			} else {
				//if yes, just add the text
				$td.addClass("good").attr("title", "The Dependent Question is in the Checklist");
			}
		})
	}</script></ix:JavaScript>
```

### E526-Content

FragApplication_AbCorrectivActiObject.ActionPlan_MyActionPlan_Inventory — Content; stable record ID 194c3f62-57c1-46bc-a804-64fe969134b0. Source $.GraphData.Items[192].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory Id="AbstractCorrectiveAction_Inventory_Mobile_Test"><ix:InventoryView ID="AbstractCorrectiveAction_InventoryView_Mobile_Test"><Entities><ix:ExcludeEntity name="ActionPlans_ActionPlanWActObject"/><ix:ExcludeEntity name="ActionPlans_ActivitySequenObject"/><ix:ExcludeEntity name="ActionPlans_GlobActionPlanObject"/><ix:IncludeEntity name="ActionPlans_LocalActionPlanObject"/></Entities><Menu><ix:GridDeleteActionLink runat="server" Override="true" Visible="false"/><ix:GridArchiveActionLink runat="server" Override="true" Visible="false"/><ix:GridCreateActionLink runat="server" Override="true" Visible="false"/></Menu><Aliases><ix:alias For="SourceObject.Name" Name="SourceName"/><ix:alias For="SourceObject.Caption" Name="SourceCaption"/><ix:alias For="SourceRecordId" Name="SourceRecordId"/></Aliases><Sorting><ix:Sort By="ActionNo" Direction="Descending"/></Sorting><Filters><ix:Filter PredicateOperator="And"><ix:IsNullPredicate For=":ActionPlans_ActionPlanWActObject.id" runat="server"/><ix:IsNullPredicate For=":ActionPlans_ActivitySequenObject.id" runat="server"/><ix:IsNullPredicate For=":ActionPlans_GlobActionPlanObject.id" runat="server"/><ix:IsNullPredicate For=":ActionPlans_LocalActionPlanObject.id" runat="server"/><ix:CommonPredicate For="Workflow.WorkflowStatus" Type="Equal" runat="server"><ix:Value Parse="true">1</ix:Value></ix:CommonPredicate><ix:CommonPredicate For="Workflow.PersonResponsible.Id" Type="Equal" runat="server"><ix:Value Parse="true" runat="server"><%= SystemSession.Current.User.Id %></ix:Value></ix:CommonPredicate></ix:Filter></Filters><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column Caption="Action Plan Type" For="SystemType.Caption" ResourceKey="Column0" meta:resourcekey="Column0" /><ix:TemplateColumn For="SourceObject" Caption="Actual Related Source" meta:resourcekey="TemplateColumn0" ResourceKey="TemplateColumn0"><Template><a href="<%=HttpEnvironment.SystemApplicationPath %>/DefaultView/<%# Html.Encode(Container.ViewData.Eval("SourceName")) %>/View?entityId=<%# Container.ViewData.Eval("SourceRecordId") %>" target="_blank"><%# Html.Encode(Container.ViewData.Eval("SourceCaption")) %></a></Template></ix:TemplateColumn><ix:Column For="CPARActionReq" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E570-Content

CLF_FindingObject.CLF_Finding_Docs — Content; stable record ID 45796bc6-8214-48c4-a5d2-e1b722df08dd. Source $.GraphData.Items[205].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar" runat="server"><ix:EditActionLink Override="true" Visible="false"/><ix:SaveActionLink Override="true" Visible="false"/><ix:SaveExitActionLink Override="true" Visible="false"/><ix:AddEntryActionLink Override="true" Visible="false"/><ix:CloneActionLink Override="true" Visible="false"/><ix:DeleteActionLink Override="true" Visible="false"/><ix:SaveAddNewActionLink Override="true" Visible="false"/></ix:DetailPageMenuBar><ix:TabsSection Title="Evidence" ShowHeader="true" Icon="Icons/new/48x48/folder_up.gif" meta:resourcekey="TabsSection0" ResourceKey="TabsSection0"><ix:Tab Caption="Upload" meta:resourcekey="Tab0" ResourceKey="Tab0"><ix:AttachmentSection ID="AttachmentFragmentGridSection" Title="Upload images" CssClass="HideBorders" isCollapsed="false" UseCookies="false" meta:resourcekey="AttachmentSection0" ResourceKey="AttachmentSection0"/></ix:Tab><ix:Tab Caption="Image Preview" DisplayMode="View,Edit" meta:resourcekey="Tab1" ResourceKey="Tab1"><ix:GridPanel Entity="DocDocumentAttachmentsEntity" isCollapsed="false" UseCookies="false" ShowColumnCaptions="false" AllowPaging="false" AllowFiltering="false" AllowSorting="false" RowSelectionMode="None" Readonly="True" DisplayMode="View,Edit" DisplayEditColumn="false" CssClass="HideBorders"><Filters><ix:Filter><ix:CommonPredicate For="ObjectRecordId" Type="Equal"><ix:Value Parse="True"><%= Model.Id %></ix:Value></ix:CommonPredicate></ix:Filter><ix:Filter PredicateOperator="or"><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.png</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.jpg</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.gif</ix:Value></ix:LikePredicate></ix:Filter></Filters><aliases><ix:Alias For="Id"/><ix:Alias For="AttachmentName"/></aliases><columns><ix:TemplateColumn><template><div class="imagepreview" title="<%# Container.ViewData.Eval("AttachmentName") %>" style="background-image:url('<%= HttpEnvironment.SystemApplicationPath %>/intelexforms/attachmentsection/downloadfile?recordid=<%# Container.ViewData.Eval("Id") %>')"/></template></ix:TemplateColumn></columns></ix:GridPanel></ix:Tab></ix:TabsSection></ix:DetailPage><style>.HideBorders > .header {
    display: none;
}

.HideBorders > .footer {
    display: none;
}

.HideBorders > .content {
    border: medium none;
    padding: 0;
}

.imagepreview {
background-repeat:no-repeat;
max-width:500px;
min-height:300px;
background-size:contain;
}</style>
```

### E600-ConfigurableViewActions

CLF_FindingObject.CLF_Finding_CloseFinding — ConfigurableViewActions; stable record ID e591376b-7495-406f-87a9-9fdc0affb2ce. Source $.GraphData.Items[215].FieldData.ConfigurableViewActions.

```json
[
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "(no name)",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "ManualClose",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "true",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "ManualClose"
      }
    ]
  }
]
```

### E600-Content

CLF_FindingObject.CLF_Finding_CloseFinding — Content; stable record ID e591376b-7495-406f-87a9-9fdc0affb2ce. Source $.GraphData.Items[215].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar"><ix:AddEntryActionLink Override="true" Visible="false"/><ix:DeleteActionLink Override="true" Visible="false"/><ix:CloneActionLink Override="true" Visible="false"/><ix:SecurityActionLink Override="true" Visible="false"/><ix:SaveActionLink Override="true" Visible="false"/><ix:SaveAddNewActionLink Override="true" Visible="false"/><ix:SpellCheckActionLink Override="true" Visible="false"/></ix:DetailPageMenuBar><ix:DetailSection Title="Close Finding" ModernIcon="Raven/Icons/BrightBlue_48/cancel29.png"><ix:FieldArea Span="true"><ix:Field For="ManualClose" Span="true" SpellCheck="false"/><ix:Field For="ManCloseCom" SpellCheck="false"/><ix:Field For="ActionPlanCheck"/></ix:FieldArea></ix:DetailSection></ix:DetailPage><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E613-ConfigurableViewActions

Insp_EquipListOptionObject.Insp_EquipListOptionObjectDetailView — ConfigurableViewActions; stable record ID 113c9105-3589-4a70-bd44-748648bb43b4. Source $.GraphData.Items[220].FieldData.ConfigurableViewActions.

```json
[]
```

### E613-Content

Insp_EquipListOptionObject.Insp_EquipListOptionObjectDetailView — Content; stable record ID 113c9105-3589-4a70-bd44-748648bb43b4. Source $.GraphData.Items[220].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Equipment List Option Details" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Name" /><ix:Field DisplayMode="View,Edit" For="RecordNo" /><ix:Field For="Sort" /><ix:Field For="Active" /></ix:FieldArea></ix:DetailSection></ix:DetailPage>
```

### E620-Content

Insp_EquipListOptionObject.Insp_EquipListOptionObjectInventoryView — Content; stable record ID 099e0577-49dd-4ecb-888e-537cd6a73552. Source $.GraphData.Items[223].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="Insp_EquipListOptionObjectInventory"><ix:InventoryView ID="Insp_EquipListOptionObjectInventoryView"><Columns><ix:Column For="Name" LinkTo="default" /><ix:Column For="Active" /><ix:Column For="Sort" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E626-Content

CLF_FindingObject.CLF_Finding_Inventory — Content; stable record ID eed81059-db2d-40f0-b529-447a9139ae40. Source $.GraphData.Items[226].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Finding_Inventory"><ix:InventoryView ID="CLF_Finding_InventoryView" DisplayEditColumn="false"><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="False"/></Menu><aliases><ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/><ix:Alias For="Severity.TextColor.Value" Name="TC"/><ix:Alias For="Severity.CSS" Name="CSS"/><ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/><ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/></aliases><Columns><ix:Column For="RecordNo" LinKTo="CLF_Finding_Detail_Readonly/View?entityId={#id}"/><ix:Column DisplayAs="Label" For="Location"/><ix:Column DisplayAs="Truncate" For="Description"/><ix:Column For="ChecklistAnswer"/><ix:TemplateColumn For="Severity" FilterAs="Dropdown"><template><div style="background-color:<%# Container.ViewData.Eval("BC") %>;color:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>"><%# Container.ViewData.Eval("Severity") %></div></template></ix:TemplateColumn><ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center"><Template><div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>"><%# Container.ViewData.Eval("FindingStatus") %></div></Template></ix:TemplateColumn></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E667-ConfigurableViewActions

CLF_LocalizResourceObject.CLF_LocalizResource_Detail — ConfigurableViewActions; stable record ID 0f66bbd4-3585-4bee-8128-5c695ed01865. Source $.GraphData.Items[243].FieldData.ConfigurableViewActions.

```json
[]
```

### E667-Content

CLF_LocalizResourceObject.CLF_LocalizResource_Detail — Content; stable record ID 0f66bbd4-3585-4bee-8128-5c695ed01865. Source $.GraphData.Items[243].FieldData.Content.

```xml
<ix:DetailPage ModernIcon="Raven/Icons/BrightBlue_48/earth208.png" ResourceKey="DetailPage0" Title="{#ObjectInfo.Caption}: {#Key}" meta:resourcekey="DetailPage0"><ix:FieldArea span="true"><ix:Field For="Key"/><ix:Field For="Comments"/></ix:FieldArea><hr/><ix:FieldArea><ix:Field For="Value"/></ix:FieldArea></ix:DetailPage>
```

### E674-Content

CLF_LocalizResourceObject.CLF_LocalizResource_Inventory — Content; stable record ID 6ce0f7a0-51fd-4e26-83b7-3db277da787d. Source $.GraphData.Items[246].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_LocalizResource_Inventory"><ix:InventoryView ID="CLF_LocalizResource_InventoryView" HideGroupAddButton="true" DisplayEditColumn="false"><Columns><ix:Column For="Key" LinkTo="default" width="5px"/><ix:Column EditMode="inline" For="Value" width="5px"/><ix:Column EditMode="inline" For="Comments"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E788-ConfigurableViewActions

ConfgAppSetting_PersRespOptionObject.ConfgAppSetting_PersRespOptionObjectDetailView — ConfigurableViewActions; stable record ID 436b8228-f8ca-44c6-9a03-82b999ecd2ef. Source $.GraphData.Items[287].FieldData.ConfigurableViewActions.

```json
[]
```

### E788-Content

ConfgAppSetting_PersRespOptionObject.ConfgAppSetting_PersRespOptionObjectDetailView — Content; stable record ID 436b8228-f8ca-44c6-9a03-82b999ecd2ef. Source $.GraphData.Items[287].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Person Responsible Option Details" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Name" /><ix:Field DisplayMode="View,Edit" For="RecordNo" /><ix:Field For="Active" /><ix:Field For="Sort" /></ix:FieldArea></ix:DetailSection></ix:DetailPage>
```

### E844-Content

CLF_QuestionAnswerObject.CLF_QuestionAnswer_Inventory — Content; stable record ID b06cd56d-6508-4d38-835a-3f5d7977fb29. Source $.GraphData.Items[301].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_QuestionAnswer_Inventory"><ix:InventoryView ID="CLF_QuestionAnswer_InventoryView" DisplayEditColumn="false" HideGroupAddButton="true"><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></Menu><Sorting><ix:Sort By="PubQuestion.Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="PubQuestion.Section"/></grouping><aliases><ix:Alias For="ChecklistAnswerId"/><ix:Alias For="PubQuestion.Guideline"/><ix:Alias For="PubQuestion.Id"/><ix:Alias For="Choice.BColor.Value"/><ix:Alias For="Choice.TColor.Value"/><ix:Alias For="Choice.Css"/></aliases><Columns><ix:TemplateColumn For="PubQuestion.Content"><Template><span style="font-weight:bold;"><%# Container.ViewData.Eval("PubQuestion.QuestionRef") %> <%# Container.ViewData.Eval("PubQuestion.Content") %></span><div class="fieldHint"><%# Container.ViewData.Eval("PubQuestion.Guideline") %></div></Template></ix:TemplateColumn><ix:MergeColumn Caption="Answer" For="PubQuestion.AnswerType.Value" ResourceKey="MergeColumn0" meta:resourcekey="MergeColumn0"><MappedColumns><ix:TemplateColumn MapValue="Choice_Disable" For="Choice"><Template><div style="color:<%# Container.ViewData.Eval("Choice.TColor.Value") %>;background-color:<%# Container.ViewData.Eval("Choice.BColor.Value") %>;<%# Container.ViewData.Eval("Choice.Css") %>"><%# Container.ViewData.Eval("Choice") %></div></Template></ix:TemplateColumn><ix:Column For="Choice" MapValue="Choice"/><ix:Column For="Date" Format="d" MapValue="Date"/><ix:Column DisplayAs="List" FetchAs="collection" For="Choices" MapValue="Choices"/><ix:Column For="Float" HorizontalAlign="right" MapValue="Float"/><ix:Column For="Text" MapValue="Text"/><ix:Column For="Checkbox" MapValue="Checkbox"/></MappedColumns></ix:MergeColumn><ix:Column For="Comments" LinkTo="default"/><ix:Column For="MaxPoints"/><ix:Column For="PointsAwarded"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage><style>.data_row td.wrap {
    white-space: normal !important;
}</style>
```

### E857-ConfigurableViewActions

CLF_QuestionAnswerObject.CLF_QuestionAnswer_MassUpdate — ConfigurableViewActions; stable record ID 0693bed5-8cb1-42aa-b5d2-749aadc1a698. Source $.GraphData.Items[305].FieldData.ConfigurableViewActions.

```json
[]
```

### E857-Content

CLF_QuestionAnswerObject.CLF_QuestionAnswer_MassUpdate — Content; stable record ID 0693bed5-8cb1-42aa-b5d2-749aadc1a698. Source $.GraphData.Items[305].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Mass Update" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea span="true"><ix:Field Caption="Answer" For="MassUpChoice" ResourceKey="Field0" SpellCheck="false" meta:resourcekey="Field0"/><ix:Field For="HelperFinding"/><ix:Field For="ActionPlanAdded"/><ix:Field For="PlValidationMet"/><ix:Field For="WarninIndicator"/><ix:Field For="UpdatonCreation"/><ix:Field For="QuesSummaryText"/><ix:Field For="SectionAnswer"/><ix:Field For="CrSectionAnswer"/><ix:Field For="AbsoluteOrder"/></ix:FieldArea></ix:DetailSection><ix:GridSection For="ActionPlans" ID="ActionPlansGridSection"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="ActionOwner" /><ix:Column For="Activites" /><ix:Column For="ActivitiesStart" /><ix:Column For="ActivitProgress" /></Columns></ix:GridSection></ix:DetailPage><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E863-ConfigurableViewActions

CLF_QuestionAnswerObject.CLF_QuestionAnswer_Docs — ConfigurableViewActions; stable record ID bf127e4c-520e-4818-9e2c-c051a79ef6e8. Source $.GraphData.Items[307].FieldData.ConfigurableViewActions.

```json
[]
```

### E863-Content

CLF_QuestionAnswerObject.CLF_QuestionAnswer_Docs — Content; stable record ID bf127e4c-520e-4818-9e2c-c051a79ef6e8. Source $.GraphData.Items[307].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar" runat="server"><ix:EditActionLink Override="true" Visible="false"/><ix:AddEntryActionLink Override="true" Visible="false"/><ix:SaveActionLink Override="true" Visible="false"/><ix:SaveExitActionLink Override="true" Visible="false"/><ix:CloneActionLink Override="true" Visible="false"/><ix:DeleteActionLink Override="true" Visible="false"/><ix:SaveAddNewActionLink Override="true" Visible="false"/></ix:DetailPageMenuBar><ix:TabsSection Title="Private Document Attachment" ShowHeader="true" Icon="Icons/new/48x48/folder_up.gif" ModernIcon="Raven/Icons/BrightBlue_48/folder232.png" meta:resourcekey="TabsSection0" ResourceKey="TabsSection0"><ix:Tab Caption="Upload" meta:resourcekey="Tab0" ResourceKey="Tab0"><ix:AttachmentSection ID="AttachmentFragmentGridSection" Title="Upload images" CssClass="HideBorders" isCollapsed="false" UseCookies="false" meta:resourcekey="AttachmentSection0" ResourceKey="AttachmentSection0"/></ix:Tab><ix:Tab Caption="Image Preview" DisplayMode="View,Edit" meta:resourcekey="Tab1" ResourceKey="Tab1"><ix:GridPanel Entity="DocDocumentAttachmentsEntity" isCollapsed="false" UseCookies="false" ShowColumnCaptions="false" AllowPaging="false" AllowFiltering="false" AllowSorting="false" RowSelectionMode="None" Readonly="True" DisplayMode="View,Edit" DisplayEditColumn="false" CssClass="HideBorders"><Filters><ix:Filter><ix:CommonPredicate For="ObjectRecordId" Type="Equal"><ix:Value Parse="True"><%= Model.Id %></ix:Value></ix:CommonPredicate></ix:Filter><ix:Filter PredicateOperator="or"><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.png</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.jpg</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.gif</ix:Value></ix:LikePredicate></ix:Filter></Filters><aliases><ix:Alias For="Id"/><ix:Alias For="AttachmentName"/></aliases><columns><ix:TemplateColumn><template><div class="imagepreview" title="<%# Container.ViewData.Eval("AttachmentName") %>" style="background-image:url('<%= HttpEnvironment.SystemApplicationPath %>/intelexforms/attachmentsection/downloadfile?recordid=<%# Container.ViewData.Eval("Id") %>')"/></template></ix:TemplateColumn></columns></ix:GridPanel></ix:Tab></ix:TabsSection><ix:GridSection For="ActionPlans" ID="ActionPlansGridSection" visible="false"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="ActionOwner" /><ix:Column For="Activites" /><ix:Column For="ActivitiesStart" /><ix:Column For="ActivitProgress" /></Columns></ix:GridSection></ix:DetailPage><style>.HideBorders > .header {
    display: none;
}

.HideBorders > .footer {
    display: none;
}

.HideBorders > .content {
    border: medium none;
    padding: 0;
}

.imagepreview {
background-repeat:no-repeat;
max-width:500px;
min-height:300px;
background-size:contain;
}</style><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E893-ConfigurableViewActions

CLF_QuestionAnswerObject.CLF_QuestionAnswer_Findings — ConfigurableViewActions; stable record ID f62e39d1-021b-4281-b2ec-ba2f072ff70a. Source $.GraphData.Items[316].FieldData.ConfigurableViewActions.

```json
[]
```

### E893-Content

CLF_QuestionAnswerObject.CLF_QuestionAnswer_Findings — Content; stable record ID f62e39d1-021b-4281-b2ec-ba2f072ff70a. Source $.GraphData.Items[316].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar"><ix:EditActionLink Override="true" Visible="false"/><ix:AddEntryActionLink Override="true" Visible="false"/><ix:CloneActionLink Override="true" Visible="false"/><ix:DeleteActionLink Override="true" Visible="false"/></ix:DetailPageMenuBar><ix:GridSection For="Findings" ID="FindingsGridSection"><Columns><ix:Column For="RecordNo" LinkTo="default" /><ix:Column For="Description" Truncate="true" /><ix:Column For="ResponseDue" Format="d" /><ix:Column For="ActionPlans" /><ix:Column For="FindingStatus" /></Columns></ix:GridSection><ix:GridSection For="ActionPlans" ID="ActionPlansGridSection"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="ActionOwner" /><ix:Column For="Activites" /><ix:Column For="ActivitiesStart" /><ix:Column For="ActivitProgress" /></Columns></ix:GridSection></ix:DetailPage><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E904-ConfigurableViewActions

CLF_QuestionAnswerObject.CLF_QuestionAnswer_Detail — ConfigurableViewActions; stable record ID 579ead41-f49d-45b6-8080-32f1274aa321. Source $.GraphData.Items[318].FieldData.ConfigurableViewActions.

```json
[
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Show/hide Answer Fields",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "PubQuestion.AnswerType",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "771916e1-5251-4658-add8-3091457e7295",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "Choice",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "Choice",
                "elementType": 0
              }
            ]
          }
        ]
      },
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "PubQuestion.AnswerType",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "a6e3bb24-6722-4dd2-b7fd-02ae1a16debd",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "Checkbox",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "Checkbox",
                "elementType": 0
              }
            ]
          }
        ]
      },
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "PubQuestion.AnswerType",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "ed36fa47-3b62-4323-a2ca-a58c8fad2ac1",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "Float",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "Float",
                "elementType": 0
              }
            ]
          }
        ]
      },
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "PubQuestion.AnswerType",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "c52ac043-81af-413a-a393-6490fec6b1aa",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "Text",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "Text",
                "elementType": 0
              }
            ]
          }
        ]
      },
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "PubQuestion.AnswerType",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "7580b590-07e8-4142-9059-3020a636d918",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "Date",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "Date",
                "elementType": 0
              }
            ]
          }
        ]
      },
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "PubQuestion.AnswerType",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "93ab1484-09ce-4868-9618-bfa62ea0b01c",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "Choices",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "Choices",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "PubQuestion.AnswerType"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Show / Hide References",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "PubQuestion.Question.UseReferences",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "true",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "QuestionReferencesSection",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "QuestionReferencesSection",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "PubQuestion.Question.UseReferences"
      }
    ]
  }
]
```

### E904-Content

CLF_QuestionAnswerObject.CLF_QuestionAnswer_Detail — Content; stable record ID 579ead41-f49d-45b6-8080-32f1274aa321. Source $.GraphData.Items[318].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar"><ix:AddEntryActionLink Override="true" Visible="false"/><ix:CloneActionLink Override="true" Visible="false"/><ix:SaveActionLink Override="true" Visible="false"/><ix:DeleteActionLink Override="true" Visible="false"/><ix:SaveAddNewActionLink Override="true" Visible="false"/></ix:DetailPageMenuBar><ix:DetailSection Title="Question Details" ModernIcon="Raven/Icons/BrightBlue_48/questions5.png" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea><ix:Field DisplayAs="Link" DisplayMode="View" For="ChecklistAnswer" Span="true"/><ix:Field For="PubQuestion.Section" Span="true"/><ix:Field DisplayAs="html" For="PubQuestion.Content" Span="true"/><ix:Field For="PubQuestion.Guideline" Span="true"/><ix:Field For="PubQuestion.AnswerType" IsVisible="false"/><ix:Field For="PubQuestion.Question.UseReferences" IsVisible="false"/><ix:Field For="HelperFinding" isVisible="False"/><ix:Field For="ActionPlanAdded"/><ix:Field For="PlValidationMet"/><ix:Field For="WarninIndicator"/><ix:Field For="UpdatonCreation"/><ix:Field For="QuesSummaryText"/><ix:Field For="SectionAnswer"/><ix:Field For="CrSectionAnswer"/><ix:Field For="AbsoluteOrder"/></ix:FieldArea></ix:DetailSection><ix:DetailSection Title="References" Id="QuestionReferencesSection" IsCollapsed="True" ModernIcon="Raven/Icons/BrightBlue_48/links9.png" meta:resourcekey="DetailSection3" ResourceKey="DetailSection3"><ix:DetailSection Title="Text References" ModernIcon="Raven/Icons/BrightBlue_48/note32.png" meta:resourcekey="DetailSection1" ResourceKey="DetailSection1"><ix:FieldValue DisplayAs="html" For="PubQuestion.Question.TextReferences"/></ix:DetailSection><ix:DetailSection Title="Tags" ModernIcon="Raven/Icons/BrightBlue_48/seo14.png" meta:resourcekey="DetailSection2" ResourceKey="DetailSection2"><ix:FieldArea><ix:Field CaptionPosition="top" For="PubQuestion.Question.References" Span="true" SpellCheck="false"/></ix:FieldArea></ix:DetailSection><ix:AttachmentSection For="PubQuestion.Question" ID="Question_AttachmentFragmentGridSection"/></ix:DetailSection><ix:GridSection AllowFiltering="false" AllowSorting="false" DisplayEditColumn="false" DisplayMode="View,edit" Entity="CLF_QuestionAnswerObject" ID="PreviousdGridSection" ModernIcon="Raven/Icons/BrightBlue_48/clock164.png" PageSize="5" PageSizeSelector="0,5,10,20,30,40,50,100,200,500" Readonly="True" ResourceKey="GridSection0" RowSelectionMode="None" Title="Previous Assessment of this Question" Visible="false" meta:resourcekey="GridSection0"><Sorting><ix:Sort runat="server" By="DateModified" Direction="Descending"/></Sorting><Filters><ix:Filter><ix:CommonPredicate For="ChecklistAnswer.LocationId" Type="Equal"><ix:Value Parse="True"><%= Model.ChecklistAnswer.LocationId%></ix:Value></ix:CommonPredicate><ix:CommonPredicate For="PubQuestion.QuestionId" Type="Equal"><ix:Value Parse="True"><%= Model.PubQuestion.QuestionId%></ix:Value></ix:CommonPredicate><ix:CommonPredicate For="Id" Type="Equal" Negate="true"><ix:Value Parse="True"><%= Model.Id%></ix:Value></ix:CommonPredicate></ix:Filter></Filters><aliases><ix:Alias For="Choice.BColor.Value"/><ix:Alias For="Choice.TColor.Value"/><ix:Alias For="Choice.Css"/></aliases><Columns><ix:Column Caption="Audit" DisplayAs="Label" For="ChecklistAnswer" ResourceKey="Column0" meta:resourcekey="Column0" /><ix:Column Caption="Assess by" DisplayAs="Label" For="ModifiedBy" ResourceKey="Column1" meta:resourcekey="Column1" /><ix:Column Caption="Assess on" For="DateModified" Format="d" ResourceKey="Column2" meta:resourcekey="Column2" /><ix:MergeColumn Caption="Answer" For="PubQuestion.AnswerType.Value" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0"><MappedColumns><ix:TemplateColumn MapValue="Choice" For="Choice"><Template><div style="color:<%# Container.ViewData.Eval("Choice.TColor.Value") %>;background-color:<%# Container.ViewData.Eval("Choice.BColor.Value") %>;<%# Container.ViewData.Eval("Choice.Css") %>"><%# Container.ViewData.Eval("Choice") %></div></Template></ix:TemplateColumn><ix:Column For="Date" Format="d" MapValue="Date" /><ix:Column DisplayAs="List" FetchAs="collection" For="Choices" MapValue="Choices" /><ix:Column For="Float" HorizontalAlign="right" MapValue="Float" /><ix:Column For="Text" MapValue="Text" /><ix:Column For="Checkbox" MapValue="Checkbox" /></MappedColumns></ix:MergeColumn><ix:Column For="Comments" /></Columns></ix:GridSection><ix:DetailSection Title="Answer Details" ModernIcon="Raven/Icons/BrightBlue_48/chat94.png" meta:resourcekey="DetailSection4" ResourceKey="DetailSection4"><ix:FieldArea><ix:Field Caption="Answer" For="Choice" ResourceKey="Field0" Span="true" SpellCheck="false" meta:resourcekey="Field0"/><ix:Field Caption="Answer" For="Text" ResourceKey="Field1" Span="true" SpellCheck="false" meta:resourcekey="Field1"/><ix:Field Caption="Answer" For="Float" ResourceKey="Field2" Span="true" SpellCheck="false" meta:resourcekey="Field2"/><ix:Field Caption="Answer" For="Date" ResourceKey="Field3" Span="true" SpellCheck="false" meta:resourcekey="Field3"/><ix:Field Caption="Answer" For="Checkbox" ResourceKey="Field4" Span="true" SpellCheck="false" meta:resourcekey="Field4"/><ix:Field Caption="Answer" For="Choices" ResourceKey="Field5" Span="true" SpellCheck="false" meta:resourcekey="Field5"/><ix:Field For="Comments" Span="true"/></ix:FieldArea></ix:DetailSection><ix:TabsSection Title="Private Document Attachment" ShowHeader="true" ModernIcon="Raven/Icons/BrightBlue_48/folder232.png" meta:resourcekey="TabsSection0" ResourceKey="TabsSection0"><ix:Tab Caption="Upload" meta:resourcekey="Tab0" ResourceKey="Tab0"><ix:AttachmentSection ID="AttachmentFragmentGridSection" Title="Upload images" CssClass="HideBorders" isCollapsed="false" UseCookies="false" meta:resourcekey="AttachmentSection0" ResourceKey="AttachmentSection0"/></ix:Tab><ix:Tab Caption="Image Preview" DisplayMode="View,Edit" meta:resourcekey="Tab1" ResourceKey="Tab1"><ix:GridPanel Entity="DocDocumentAttachmentsEntity" isCollapsed="false" UseCookies="false" ShowColumnCaptions="false" AllowPaging="false" AllowFiltering="false" AllowSorting="false" RowSelectionMode="None" Readonly="True" DisplayMode="View,Edit" DisplayEditColumn="false" CssClass="HideBorders"><Filters><ix:Filter><ix:CommonPredicate For="ObjectRecordId" Type="Equal"><ix:Value Parse="True"><%= Model.Id %></ix:Value></ix:CommonPredicate></ix:Filter><ix:Filter PredicateOperator="or"><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.png</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.jpg</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.gif</ix:Value></ix:LikePredicate></ix:Filter></Filters><aliases><ix:Alias For="Id"/><ix:Alias For="AttachmentName"/></aliases><columns><ix:TemplateColumn><template><div class="imagepreview" title="<%# Container.ViewData.Eval("AttachmentName") %>" style="background-image:url('<%= HttpEnvironment.SystemApplicationPath %>/intelexforms/attachmentsection/downloadfile?recordid=<%# Container.ViewData.Eval("Id") %>')"/></template></ix:TemplateColumn></columns></ix:GridPanel></ix:Tab></ix:TabsSection><ix:GridSection DisplayMode="View,Edit" For="Findings" ID="FindingsGridSection" ModernIcon="Raven/Icons/BrightBlue_48/flag31.png"><aliases><ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/><ix:Alias For="Severity.TextColor.Value" Name="TC"/><ix:Alias For="Severity.CSS" Name="CSS"/><ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/><ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/></aliases><Columns><ix:Column For="RecordNo" LinkTo="default" /><ix:Column DisplayAs="truncate" For="Description" /><ix:TemplateColumn For="Severity" FilterAs="Dropdown"><template><div style="background-color:<%# Container.ViewData.Eval("BC") %>;text:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>"><%# Container.ViewData.Eval("Severity") %></div></template></ix:TemplateColumn><ix:Column For="ResponseDue" Format="d" /><ix:Column For="PersResponsible" /><ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center"><Template><div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>"><%# Container.ViewData.Eval("FindingStatus") %></div></Template></ix:TemplateColumn><ix:TemplateColumn For="NbAPs" Caption="Add Action Plans" HorizontalAlign="center" width="20px" AllowFiltering="false" AllowSorting="false" meta:resourcekey="TemplateColumn0" ResourceKey="TemplateColumn0"><Template><a title="Create &amp; Attach a new Action Plan" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_InsActionPlan_Detail/Create?RelatedId=<%# Model.ChecklistAnswerId %>&amp;RelatedId=<%# Container.ViewData.Eval("Id") %>&amp;RelatedPath=CLF_FindingObject.ActionPlans"><img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/></a></Template></ix:TemplateColumn><ix:Column Caption="Attached Action Plans" DisplayAs="List" EditMode="popup" FetchAs="Collection" For="ActionPlans" RefreshScope="row" ResourceKey="Column3" meta:resourcekey="Column3" /></Columns></ix:GridSection><ix:GridSection For="ActionPlans" ID="ActionPlansGridSection"><Menu><ix:GridCreateActionLink Override="true" Visible="true"/></Menu><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="ActionOwner" /><ix:Column For="Activites" /><ix:Column For="ActivitiesStart" /><ix:Column For="ActivitProgress" /></Columns></ix:GridSection></ix:DetailPage><style>.HideBorders > .header {
    display: none;
}

.HideBorders > .footer {
    display: none;
}

.HideBorders > .content {
    border: medium none;
    padding: 0;
}

.imagepreview {
background-repeat:no-repeat;
max-width:500px;
min-height:300px;
background-size:contain;
}</style><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E954-ConfigurableViewActions

CLF_QuestionAnswerObject.CLF_QuestionAnswer_ActionPlans — ConfigurableViewActions; stable record ID 28627d56-f47c-4b91-8fac-7f3d2f591e8c. Source $.GraphData.Items[327].FieldData.ConfigurableViewActions.

```json
[]
```

### E954-Content

CLF_QuestionAnswerObject.CLF_QuestionAnswer_ActionPlans — Content; stable record ID 28627d56-f47c-4b91-8fac-7f3d2f591e8c. Source $.GraphData.Items[327].FieldData.Content.

```xml
<ix:DetailPage ModernIcon="Raven/Icons/BrightBlue_48/questions5.png" ResourceKey="DetailPage0" Title="Question: {#PubQuestion.Content}" meta:resourcekey="DetailPage0"><ix:DetailPageMenuBar DisplaySystemButtons="false"><ix:ExitActionLink Override="false"/></ix:DetailPageMenuBar><ix:FieldArea visible="false"><ix:Field For="PubQuestion.Content"/></ix:FieldArea><ix:GridSection For="ActionPlans" ID="ActionPlans_Grid" Icon="Raven/Icons/BrightBlue_48/acceptance.png"><Columns><ix:Column For="ActionNo" LinkTo="default" width="5px" /><ix:Column For="CPARActionReq" wrap="true" /><ix:Column For="CPARTypeID" width="5px" /><ix:Column For="DueDate" Format="d" width="5px" /></Columns></ix:GridSection></ix:DetailPage>
```

### E957-ConfigurableViewActions

CLF_QuestionAnswerObject.CLF_QuestionAnswer_Docs_Readonly — ConfigurableViewActions; stable record ID eeb5055e-816f-44a7-b817-70ceb747e233. Source $.GraphData.Items[328].FieldData.ConfigurableViewActions.

```json
[]
```

### E957-Content

CLF_QuestionAnswerObject.CLF_QuestionAnswer_Docs_Readonly — Content; stable record ID eeb5055e-816f-44a7-b817-70ceb747e233. Source $.GraphData.Items[328].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar" runat="server"><ix:EditActionLink Override="true" Visible="false"/><ix:SaveActionLink Override="true" Visible="false"/><ix:SaveExitActionLink Override="true" Visible="false"/><ix:AddEntryActionLink Override="true" Visible="false"/><ix:CloneActionLink Override="true" Visible="false"/><ix:DeleteActionLink Override="true" Visible="false"/><ix:SaveAddNewActionLink Override="true" Visible="false"/></ix:DetailPageMenuBar><ix:TabsSection Title="Private Document Attachment" ShowHeader="true" Icon="Icons/new/48x48/folder_up.gif" ModernIcon="Raven/Icons/BrightBlue_48/folder232.png" meta:resourcekey="TabsSection0" ResourceKey="TabsSection0"><ix:Tab Caption="Upload" meta:resourcekey="Tab0" ResourceKey="Tab0"><ix:AttachmentSection ID="AttachmentFragmentGridSection" Title="Upload images" CssClass="HideBorders" isCollapsed="false" UseCookies="false" Readonly="true" meta:resourcekey="AttachmentSection0" ResourceKey="AttachmentSection0"/></ix:Tab><ix:Tab Caption="Image Preview" DisplayMode="View,Edit" meta:resourcekey="Tab1" ResourceKey="Tab1"><ix:GridPanel Entity="DocDocumentAttachmentsEntity" isCollapsed="false" UseCookies="false" ShowColumnCaptions="false" AllowPaging="false" AllowFiltering="false" AllowSorting="false" RowSelectionMode="None" Readonly="True" DisplayMode="View,Edit" DisplayEditColumn="false" CssClass="HideBorders"><Filters><ix:Filter><ix:CommonPredicate For="ObjectRecordId" Type="Equal"><ix:Value Parse="True"><%= Model.Id %></ix:Value></ix:CommonPredicate></ix:Filter><ix:Filter PredicateOperator="or"><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.png</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.jpg</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.gif</ix:Value></ix:LikePredicate></ix:Filter></Filters><aliases><ix:Alias For="Id"/><ix:Alias For="AttachmentName"/></aliases><columns><ix:TemplateColumn><template><div class="imagepreview" title="<%# Container.ViewData.Eval("AttachmentName") %>" style="background-image:url('<%= HttpEnvironment.SystemApplicationPath %>/intelexforms/attachmentsection/downloadfile?recordid=<%# Container.ViewData.Eval("Id") %>')"/></template></ix:TemplateColumn></columns></ix:GridPanel></ix:Tab></ix:TabsSection></ix:DetailPage><style>.HideBorders > .header {
    display: none;
}

.HideBorders > .footer {
    display: none;
}

.HideBorders > .content {
    border: medium none;
    padding: 0;
}

.imagepreview {
background-repeat:no-repeat;
max-width:500px;
min-height:300px;
background-size:contain;
}</style><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E972-ConfigurableViewActions

CLF_QuestObject.CLF_Quest_Detail — ConfigurableViewActions; stable record ID 7430f95c-185f-4f98-b493-f2672a01b99d. Source $.GraphData.Items[332].FieldData.ConfigurableViewActions.

```json
[
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Show/Hide Choice List",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": "A OR B",
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "AnswerType",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "771916e1-5251-4658-add8-3091457e7295",
                "entityType": null,
                "text": "Choice"
              }
            },
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "AnswerType",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "93ab1484-09ce-4868-9618-bfa62ea0b01c",
                "entityType": null,
                "text": "Choices"
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ChoiceList",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "ChoiceList",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ChoiceList",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "ChoiceList",
                "elementType": 0
              }
            ]
          }
        ]
      },
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "AnswerType",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "771916e1-5251-4658-add8-3091457e7295",
                "entityType": null,
                "text": "Choice"
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "DefaultChoice",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "DefaultChoice",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "DefaultChoice",
                "elementType": 0
              }
            ]
          }
        ]
      },
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "AnswerType",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "a6e3bb24-6722-4dd2-b7fd-02ae1a16debd",
                "entityType": null,
                "text": "Checkbox"
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "DefaultBool",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "DefaultBool",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "DefaultBool",
                "elementType": 0
              }
            ]
          }
        ]
      },
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "AnswerType",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "93ab1484-09ce-4868-9618-bfa62ea0b01c",
                "entityType": null,
                "text": "Choices"
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "DefaultChoices",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "DefaultChoices",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "Choice_Requirement_Grid_Findings",
                "elementType": 0
              },
              {
                "elementId": "Choice_Requirement_Grid_NoFindings",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "DefaultChoices",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "Choice_Requirement_Grid_Findings",
                "elementType": 0
              },
              {
                "elementId": "Choice_Requirement_Grid_NoFindings",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "AnswerType"
      },
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "ChoiceList"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "SHow/Hide References Section",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "UseReferences",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "true",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ReferencesSection",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "References",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ReferencesSection",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "UseReferences"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Show/Hide Sections",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "UseExisting",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": true,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "true",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ExistingSection",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "ExistingSection",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "Section",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "Section",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "Section",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "Section",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "Section",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ExistingSection",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "ExistingSection",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "ExistingSection",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "UseExisting"
      }
    ]
  }
]
```

### E972-Content

CLF_QuestObject.CLF_Quest_Detail — Content; stable record ID 7430f95c-185f-4f98-b493-f2672a01b99d. Source $.GraphData.Items[332].FieldData.Content.

```xml
<ix:DetailPage Title="{#ObjectInfo.Caption}: {#QuestionRef}" ModernIcon="Raven/Icons/BrightBlue_48/questions5.png" meta:resourcekey="DetailPage0" ResourceKey="DetailPage0"><ix:FieldArea Visible="false"><ix:Field For="HelperChecklist.EnableSections"/><ix:Field For="HelperChecklist.ChecklistType.FindingTracking"/></ix:FieldArea><ix:DetailSection Title="Question Details" Icon="Icons/new/48x48/help2.gif" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="ChecklistType" ReadOnly="true" SpellCheck="false"/><ix:Field For="QuestionRef"/></ix:FieldArea><% if (Convert.ToBoolean(ViewData.Eval("HelperChecklist.EnableSections"))) { %><ix:FieldArea Span="true"><ix:Field For="UseExisting"/><ix:Field For="ExistingSection"/><ix:Field EditAs="SmallTextArea" For="Section"/></ix:FieldArea><%   } %><hr/><ix:FieldArea Span="true"><ix:Field For="Order"/><ix:Field EditAs="SmallTextArea" For="Content" IsMandatory="True"/><ix:Field EditAs="SmallTextArea" For="Guideline"/><ix:Field For="AnswerRequired"/></ix:FieldArea></ix:DetailSection><ix:DetailSection Title="Answer Details" meta:resourcekey="DetailSection4" ResourceKey="DetailSection4"><ix:FieldArea Span="true"><ix:Field For="AnswerType" IsMandatory="True"/><ix:Field For="ChoiceList"/><ix:Field For="DefaultChoice"/><ix:Field For="DefaultChoices"/><ix:Field For="DefaultBool"/><ix:Field For="AllowNA"/><ix:Field Span="true"/><ix:Field For="UseReferences"/></ix:FieldArea><% if (Convert.ToBoolean(ViewData.Eval("HelperChecklist.ChecklistType.FindingTracking"))) { %><ix:GridPanel DisplayMode="View" HideGroupAddButton="true" DisplayEditColumn="false" Id="Choice_Requirement_Grid_Findings" Title="Requirements based on Selected Choice" AllowPaging="false" AllowFiltering="false" AllowSorting="false" RowSelectionMode="None" Icon="Raven/Icons/BrightBlue_48/web64.png"><menu DisplaySystemButtons="false"><ix:GridListAllActionLink Override="false" Caption="Refresh" meta:resourcekey="GridListAllActionLink0" ResourceKey="GridListAllActionLink0"/></menu><filters><ix:Filter><ix:CommonPredicate For="Id" Type="Equal"><ix:Value Parse="true"><%= Model.Id %></ix:Value></ix:CommonPredicate></ix:Filter></filters><columns><ix:Column EditMode="inline" For="ComReqChoices" FetchAs="Collection" DIsplayAs="List" wrap="true"/><ix:Column EditMode="inline" For="FindReqChoices" FetchAs="Collection" DIsplayAs="List" wrap="true"/></columns></ix:GridPanel><% } else { %><ix:GridPanel DisplayMode="View" HideGroupAddButton="true" DisplayEditColumn="false" Id="Choice_Requirement_Grid_NoFindings" Title="Requirements based on Selected Choice" AllowPaging="false" AllowFiltering="false" AllowSorting="false" RowSelectionMode="None" Icon="Raven/Icons/BrightBlue_48/web64.png"><menu DisplaySystemButtons="false"><ix:GridListAllActionLink Override="false" Caption="Refresh" meta:resourcekey="GridListAllActionLink0" ResourceKey="GridListAllActionLink0"/></menu><filters><ix:Filter><ix:CommonPredicate For="Id" Type="Equal"><ix:Value Parse="true"><%= Model.Id %></ix:Value></ix:CommonPredicate></ix:Filter></filters><columns><ix:Column EditMode="inline" For="ComReqChoices" FetchAs="Collection" DIsplayAs="List" wrap="true"/><ix:Column EditMode="inline" For="ActReqChoices" FetchAs="Collection" DIsplayAs="List" wrap="true"/></columns></ix:GridPanel><% } %></ix:DetailSection><ix:DetailSection Title="References" Icon="Icons/new/48x48/book_open.gif" DisplayMode="View,Edit" Id="ReferencesSection" meta:resourcekey="DetailSection3" ResourceKey="DetailSection3"><ix:DetailSection Title="Text References" Icon="Icons/new/48x48/edit.gif" meta:resourcekey="DetailSection1" ResourceKey="DetailSection1"><ix:FieldValue DisplayAs="html" For="TextReferences"/></ix:DetailSection><ix:DetailSection Title="Tags" Visible="false" Icon="Icons/new/48x48/index_add.gif" meta:resourcekey="DetailSection2" ResourceKey="DetailSection2"><ix:FieldArea Span="true"><ix:Field CaptionPosition="top" For="References"/></ix:FieldArea></ix:DetailSection><ix:AttachmentSection ID="AttachmentFragmentGridSection"/></ix:DetailSection><ix:GridSection DisplayMode="View" For="Checklists" IsColllapsed="True" Title="Part of following Checklists:" meta:resourcekey="GridSection0" ResourceKey="GridSection0"><Menu><ix:GridAttachActionLink Override="true" Visible="False" LinkTo="CLF_Checklist_Select/Index"/><ix:GridDetachActionLink Override="true" Visible="False"/><ix:GridExecuteActionLink Override="true" Name="Publish" Visible="false"/></Menu><Columns><ix:Column For="Reference" LinkTo="default"/><ix:Column For="Title"/><ix:Column For="Description"/><ix:Column For="NbQuestions"/></Columns></ix:GridSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View" For="PubQuestions" ID="PubQuestionsGridSection" IsColllapsed="True" ReadOnly="true" RowSelectionMode="None" Title="Question Version History" meta:resourcekey="GridSection1" ResourceKey="GridSection1"><Sorting><ix:Sort runat="server" By="DateCreated" Direction="Descending"/></Sorting><Columns><ix:Column For="QuestionRef" LinkTo="Default"/><ix:Column DisplayAs="html" For="Content" Width="1"/><ix:Column For="ChoiceList"/><ix:Column For="DateCreated" Format="g"/></Columns></ix:GridSection></ix:DetailPage><style>#TextReferences {
background-color: white;
border: 1px solid #DDDDDD;
padding: 5px;
}
.inline-edit, .popup-edit {
background-color: #e2f3fa;
border: 1px dotted #58c3f0 !important;
}</style>
```

### E985-Content

EventFwk_EventScenarioObject.EventFwk_EventScenarioObjectInventoryView — Content; stable record ID f71f6d6f-d631-46db-aa74-ac6da5e451ea. Source $.GraphData.Items[334].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="EventFwk_EventScenarioObjectInventory"><ix:InventoryView ID="EventFwk_EventScenarioObjectInventoryView"><Columns><ix:Column For="Name" LinkTo="default"/><ix:Column For="Description"/><ix:Column For="RecordNo"/><ix:Column For="Location"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E994-ConfigurableViewActions

ConfgAppSetting_IconAssetObject.ConfgAppSetting_IconAssetObjectDetailView — ConfigurableViewActions; stable record ID 60b2618d-53de-4c62-8f8e-e185babd0f5a. Source $.GraphData.Items[338].FieldData.ConfigurableViewActions.

```json
[]
```

### E994-Content

ConfgAppSetting_IconAssetObject.ConfgAppSetting_IconAssetObjectDetailView — Content; stable record ID 60b2618d-53de-4c62-8f8e-e185babd0f5a. Source $.GraphData.Items[338].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Icon Asset Details" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Code"/><ix:Field For="Name" SpellCheck="false"/><ix:Field For="SVGCode"/></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:WorkflowComments/><ix:WorkflowTracking/><ix:ESignatureHistorySection/></ix:DetailPage>
```

### E1001-Content

CLF_InsActionPlanObject.CLF_InsActionPlan_Inventory — Content; stable record ID f21b6ba9-b82d-47b2-9575-fce0e82cd2fe. Source $.GraphData.Items[341].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_InsActionPlan_Inventory"><ix:InventoryView ID="CLF_InsActionPlan_InventoryView"><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></Menu><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column DisplayAs="label" For="Location" /><ix:Column DisplayAs="Truncate" For="CPARActionReq" /><ix:Column FilterAs="Dropdown" For="CPARTypeID" /><ix:Column DisplayAs="Label" For="Workflow.PersonResponsible" /><ix:Column FOrmat="d" For="Workflow.DueDate" /><ix:Column DisplayAs="label" For="Workflow.Currentstage.name" caption="Workflow Stage" /><ix:Column DisplayAs="label" For="Workflow.Workflowstatus" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1016-Content

CLF_ChecklistTypeObject.CLF_ChecklistType_Inventory — Content; stable record ID 536fad31-a0f8-44b0-a6c9-17f7c804e6fe. Source $.GraphData.Items[348].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_ChecklistType_Inventory"><ix:InventoryView ID="CLF_ChecklistType_InventoryView"><Columns><ix:Column For="Reference" LinkTo="default"/><ix:Column For="Name"/><ix:Column For="SystemType.Caption" Caption="Type" FilterAs="Dropdown" meta:resourcekey="Column0" ResourceKey="Column0"/><ix:Column For="Description" DisplayAs="Truncate"/><ix:Column For="NbChecklists" HorizontalAlign="center"/><ix:Column For="NbQuestions" HorizontalAlign="center"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1027-ConfigurableViewActions

CLF_QuestObject.CLF_Quest_ConditionalFormatting_MassUpdate — ConfigurableViewActions; stable record ID 00902c05-aba6-41cb-b8e7-d38339eb1544. Source $.GraphData.Items[352].FieldData.ConfigurableViewActions.

```json
[]
```

### E1027-Content

CLF_QuestObject.CLF_Quest_ConditionalFormatting_MassUpdate — Content; stable record ID 00902c05-aba6-41cb-b8e7-d38339eb1544. Source $.GraphData.Items[352].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Fields" ShowHeader="false" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="VisDepNoAns"/></ix:FieldArea></ix:DetailSection></ix:DetailPage>
```

### E1030-Content

CLF_ChoiceListObject.CLF_ChoicesList_Inventory — Content; stable record ID d44fbc81-a83e-4b38-8382-ac0733d13bda. Source $.GraphData.Items[353].FieldData.Content.

```xml
<ix:InventoryPage>
  <ix:Inventory ID="CLF_ChoicesList_Inventory">
    <ix:InventoryView ID="CLF_ChoicesList_InventoryView" Caption="Choice List">
      <Columns>
<ix:Column For="Reference" LinkTo="default"/>
<ix:Column For="Name"/>
<ix:Column For="Description" Width="1"/>
<ix:Column For="NbChoices" Caption="# Of Choices"/>
      </Columns>
    </ix:InventoryView>
  </ix:Inventory>
</ix:InventoryPage>
```

### E1048-ConfigurableViewActions

CLF_CheckliAbstractObject.CLF_CheckliAbstract_Detail — ConfigurableViewActions; stable record ID 4c3b3ff4-d898-470d-a7df-d0505f826fe1. Source $.GraphData.Items[360].FieldData.ConfigurableViewActions.

```json
[]
```

### E1048-Content

CLF_CheckliAbstractObject.CLF_CheckliAbstract_Detail — Content; stable record ID 4c3b3ff4-d898-470d-a7df-d0505f826fe1. Source $.GraphData.Items[360].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Checklist Definition" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Title"/><ix:Field For="Description"/></ix:FieldArea></ix:DetailSection></ix:DetailPage>
```

### E1051-Content

Insp_TypeObject.Insp_Type_Inventory — Content; stable record ID 4027a1a0-a8a6-4c2e-8d55-33a3bf9025a7. Source $.GraphData.Items[361].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="Insp_Type_Inventory"><ix:InventoryView ID="Insp_Type_InventoryView"><Columns><ix:Column For="Reference" LinkTo="default" /><ix:Column Caption="Inspection Type" For="Name" ResourceKey="Column0" meta:resourcekey="Column0" /><ix:Column DisplayAs="Truncate" For="Description" /><ix:Column Caption="Checklists" For="NbChecklists" HorizontalAlign="center" ResourceKey="Column1" meta:resourcekey="Column1" /><ix:Column Caption="Questions" For="NbQuestions" HorizontalAlign="center" ResourceKey="Column2" meta:resourcekey="Column2" /><ix:Column EditMode="Inline" For="Active" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage><style type="text/css">.inline-edit, .popup-edit {
background-color: #e2f3fa;
border: 1px dotted #58c3f0 !important;
}</style>
```

### E1058-Content

ConfgAppSetting_GlobAppSettingsObject.ConfgAppSetting_GlobAppSettingsObjectInventoryView — Content; stable record ID ac2b5cb6-526a-429a-988a-3563b39e7632. Source $.GraphData.Items[363].FieldData.Content.

```xml
<ix:InventoryPage>
<ix:Inventory ID='ConfgAppSetting_GlobAppSettingsObjectInventory'>
<ix:InventoryView ID='ConfgAppSetting_GlobAppSettingsObjectInventoryView'>
<Columns>
<ix:Column For='Name' LinkTo='default'/>
<ix:Column For='CaleIconGeneral'/>
<ix:Column For='ClocIconGeneral'/>
<ix:Column For='DueIconWorkflow'/>
<ix:Column For='PerIconWorkflow'/>
</Columns>
</ix:InventoryView>
</ix:Inventory>
</ix:InventoryPage>
```

### E1079-Content

EventFwk_EventObject.EventFwk_EventObjectInventoryView — Content; stable record ID 2c223943-5e20-44ef-8797-01a4a32aafe2. Source $.GraphData.Items[373].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="EventFwk_EventObjectInventory"><ix:InventoryView ID="EventFwk_EventObjectInventoryView"><Columns><ix:Column For="Name" LinkTo="default"/><ix:Column For="Description"/><ix:Column For="Location"/><ix:Column For="Date"/><ix:Column For="Severity"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1081-Content

ConfgAppSetting_IconAssetObject.ConfgAppSetting_IconAssetObjectInventoryView — Content; stable record ID 5ce1df58-ee39-4f5a-b4f8-2c52ed962da8. Source $.GraphData.Items[374].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="ConfgAppSetting_IconAssetObjectInventory"><ix:InventoryView ID="ConfgAppSetting_IconAssetObjectInventoryView"><Columns><ix:Column Caption="Code" For="Code" LinkTo="default" Width="10px" meta:resourcekey="Column0" ResourceKey="Column0"/><ix:Column Caption="Name" For="Name" meta:resourcekey="Column1" ResourceKey="Column1"/><ix:Column Caption="SVG Code" For="SVGCode" DisplayAs="html" EditMode="popup" meta:resourcekey="Column2" ResourceKey="Column2"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage><style>.data-cell > svg {
width:50px;
height:50px;
}</style>
```

### E1120-ConfigurableViewActions

FragApplication_ColorObject.FragApplication_Color_Detail — ConfigurableViewActions; stable record ID 130c41d9-dbc5-43d9-9262-ac61f018edc5. Source $.GraphData.Items[386].FieldData.ConfigurableViewActions.

```json
[]
```

### E1120-Content

FragApplication_ColorObject.FragApplication_Color_Detail — Content; stable record ID 130c41d9-dbc5-43d9-9262-ac61f018edc5. Source $.GraphData.Items[386].FieldData.Content.

```xml
<ix:DetailPage>
  <ix:DetailSection Title="Color" Icon="Icons/new/48x48/palette.gif">
    <ix:FieldArea Span="true">
<ix:Field For="Caption" SpellCheck="false"/>
<ix:Field For="Value"/>
    </ix:FieldArea>
  </ix:DetailSection>
</ix:DetailPage>
```

### E1130-Content

FragApplication_ColorObject.FragApplication_Color_Select — Content; stable record ID bea48268-3d0a-4c6b-a56d-f50d1feb5007. Source $.GraphData.Items[390].FieldData.Content.

```xml
<ix:InventoryPage>
  <ix:Inventory ID="FragApplication_Color_Select">
    <ix:InventoryView ID="FragApplication_Color_SelectView" HideGroupAddButton="true" DisplayEditColumn="false" PageSize="50">
      <Menu>
<ix:GridCreateActionLink Override="true" Visible="false"/>
<ix:GridDeleteActionLink Override="true" Visible="false"/>
      </Menu>
      <aliases>
<ix:Alias For="Value"/>
      </aliases>
      <Columns>
        <ix:TemplateColumn For="Caption" Caption="Color" horizontalAlign="center" meta:resourcekey="TemplateColumn0" ResourceKey="TemplateColumn0">
          <template>
            <div style="background-color:<%# Container.ViewData.Eval("Value") %>;padding:3px;">
              <span style="color:<%# Container.ViewData.Eval("Value") %>;filter:invert(100%);-webkit-filter: invert(100%);">
<%# Container.ViewData.Eval("Caption") %>
              </span>
            </div>
          </template>
        </ix:TemplateColumn>
      </Columns>
    </ix:InventoryView>
  </ix:Inventory>
</ix:InventoryPage>
```

### E1133-Content

FragApplication_ColorObject.FragApplication_Color_Inventory — Content; stable record ID bd54907b-2bc0-4c6c-9834-232df5063c13. Source $.GraphData.Items[391].FieldData.Content.

```xml
<ix:InventoryPage>
  <ix:Inventory ID="FragApplication_ColorObjectInventory">
    <ix:InventoryView ID="FragApplication_ColorObjectInventoryView" DisplayEditColumn="false">
      <Menu>
<ix:GridCreateActionLink Override="true" OpenIn="popup"/>
      </Menu>
      <Columns>

<ix:Column EditMode="inline" For="Caption"/>
        <ix:TemplateColumn For="Value" EditMode="inline" horizontalalign="center">
          <template>
            <div style="background-color:<%# Container.ViewData.Eval("Value") %>;padding:3px;">
              <span style="color:<%# Container.ViewData.Eval("Value") %>;filter:invert(100%);-webkit-filter: invert(100%);">
<%# Container.ViewData.Eval("Value") %>
              </span>
            </div>
          </template>
        </ix:TemplateColumn>
      </Columns>
    </ix:InventoryView>
  </ix:Inventory>
</ix:InventoryPage>
```

### E1154-ConfigurableViewActions

CLF_FindingObject.CLF_Finding_Detail — ConfigurableViewActions; stable record ID dfd08cc7-bda9-41a7-9f25-a5d38f9e814e. Source $.GraphData.Items[399].FieldData.ConfigurableViewActions.

```json
[
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Show Manual Close Comment",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "ManualClose",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "true",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ActionPlansGridSection",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ActionPlansGridSection",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "ManualClose"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Show / Hide Stuff depending on Status",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": "A or B",
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "FindingStatus.Code",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "Open",
                "entityType": null,
                "text": null
              }
            },
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "FindingStatus.Code",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "Closed without Action",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ManualCloseSection",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ManualCloseSection",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "FindingStatus.Code"
      }
    ]
  }
]
```

### E1154-Content

CLF_FindingObject.CLF_Finding_Detail — Content; stable record ID dfd08cc7-bda9-41a7-9f25-a5d38f9e814e. Source $.GraphData.Items[399].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Finding Details" ModernIcon="Raven/Icons/BrightBlue_48/flag31.png" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea><ix:Field For="ChecklistAnswer" Readonly="true" Span="true"/><ix:Field EditAs="radiogroup" For="Severity" Span="true" Visible="false"/><ix:Field Caption="Finding Status" For="FindingStatus.Code" meta:resourcekey="Field1" ResourceKey="Field1"/><ix:Field For="Description" IsMandatory="True" Span="true"/><ix:Field Caption="Suggested Action Plan" For="ImmediateAction" Span="true" meta:resourcekey="Field2" ResourceKey="Field2"/><ix:Field DisplayMode="Create" For="DueIn"/><ix:Field DisplayMode="View,Edit" For="ResponseDue"/></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View,Edit" For="QuestionAnswers" HideGroupAddButton="true" ID="QuestionAnswersGridSection" IsCollapsed="true" ModernIcon="Raven/Icons/BrightBlue_48/questions5.png" UseCookies="false"><Sorting><ix:Sort By="PubQuestion.Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="PubQuestion.Section"/></grouping><aliases><ix:Alias For="ChecklistAnswerId"/><ix:Alias For="PubQuestion.Guideline"/><ix:Alias For="PubQuestion.Id"/><ix:Alias For="Choice.BColor.Value"/><ix:Alias For="Choice.TColor.Value"/><ix:Alias For="Choice.Css"/></aliases><Columns><ix:TemplateColumn For="PubQuestion.Content" Width="1"><Template><span style="font-weight:bold;"><%# Container.ViewData.Eval("PubQuestion.QuestionRef") %> <%# Container.ViewData.Eval("PubQuestion.Content") %></span><div class="fieldHint"><%# Container.ViewData.Eval("PubQuestion.Guideline") %></div></Template></ix:TemplateColumn><ix:MergeColumn Caption="Answer" For="PubQuestion.AnswerType.Value" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0"><MappedColumns><ix:TemplateColumn MapValue="Choice_Disable" For="Choice"><Template><div style="color:<%# Container.ViewData.Eval("Choice.TColor.Value") %>;background-color:<%# Container.ViewData.Eval("Choice.BColor.Value") %>;<%# Container.ViewData.Eval("Choice.Css") %>"><%# Container.ViewData.Eval("Choice") %></div></Template></ix:TemplateColumn><ix:Column For="Choice" MapValue="Choice" /><ix:Column For="Date" Format="d" MapValue="Date" /><ix:Column DisplayAs="List" FetchAs="collection" For="Choices" MapValue="Choices" /><ix:Column For="Float" HorizontalAlign="right" MapValue="Float" /><ix:Column For="Text" MapValue="Text" /><ix:Column For="Checkbox" MapValue="Checkbox" /></MappedColumns></ix:MergeColumn><ix:Column For="Comments" /><ix:Column Caption="#Docs" For="NumbofDocuments" HorizontalAlign="center" LinkTarget="popup" LinkTo="CLF_QuestionAnswer_Docs_Readonly/View?entityid={#id}" ResourceKey="Column0" meta:resourcekey="Column0" width="5px" /></Columns></ix:GridSection><ix:TabsSection Title="Evidence" ShowHeader="true" DisplayMode="View,Edit" ModernIcon="Raven/Icons/BrightBlue_48/folder232.png" meta:resourcekey="TabsSection0" ResourceKey="TabsSection0"><ix:Tab Caption="Upload" meta:resourcekey="Tab0" ResourceKey="Tab0"><ix:AttachmentSection ID="AttachmentFragmentGridSection" Title="Upload images" CssClass="HideBorders" isCollapsed="false" UseCookies="false" meta:resourcekey="AttachmentSection0" ResourceKey="AttachmentSection0"/></ix:Tab><ix:Tab Caption="Image Preview" DisplayMode="View,Edit" meta:resourcekey="Tab1" ResourceKey="Tab1"><ix:GridPanel Entity="DocDocumentAttachmentsEntity" isCollapsed="false" UseCookies="false" ShowColumnCaptions="false" AllowPaging="false" AllowFiltering="false" AllowSorting="false" RowSelectionMode="None" Readonly="True" DisplayMode="View,Edit" DisplayEditColumn="false" CssClass="HideBorders"><Filters><ix:Filter><ix:CommonPredicate For="ObjectRecordId" Type="Equal"><ix:Value Parse="True"><%= Model.Id %></ix:Value></ix:CommonPredicate></ix:Filter><ix:Filter PredicateOperator="or"><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.png</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.jpg</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.gif</ix:Value></ix:LikePredicate></ix:Filter></Filters><aliases><ix:Alias For="Id"/><ix:Alias For="AttachmentName"/></aliases><columns><ix:TemplateColumn><template><div class="imagepreview" title="<%# Container.ViewData.Eval("AttachmentName") %>" style="background-image:url('<%= HttpEnvironment.SystemApplicationPath %>/intelexforms/attachmentsection/downloadfile?recordid=<%# Container.ViewData.Eval("Id") %>')"/></template></ix:TemplateColumn></columns></ix:GridPanel></ix:Tab></ix:TabsSection><ix:DetailSection Title="Close Finding" Id="ManualCloseSection" DisplayMode="View,Edit" ModernIcon="Raven/Icons/BrightBlue_48/cancel29.png" meta:resourcekey="DetailSection1" ResourceKey="DetailSection1"><ix:FieldArea Span="true"><ix:Field For="ManualClose"/><ix:Field For="ManCloseCom"/></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayMode="View" For="AbsCorActPlan:CLF_InsActionPlanObject" ID="ActionPlansGridSection" ModernIcon="Raven/Icons/BrightBlue_48/acceptance.png"><Menu><ix:GridCreateActionLink Override="true" OpenIn="popup"/></Menu><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column DisplayAs="Truncate" For="CPARActionReq" /><ix:Column DisplayAs="Label" For="Workflow.PersonResponsible" /><ix:Column FOrmat="d" For="Workflow.DueDate" /><ix:Column For="CompletedBy" /><ix:Column FOrmat="d" For="CompletionDate" /><ix:Column For="Workflow.WorkflowStatus" /></Columns></ix:GridSection><ix:DetailSection Title="Hidden Section - used to attach question during finding creation" DisplayMode="Create" CSSClass="hiddenSection" meta:resourcekey="DetailSection2" ResourceKey="DetailSection2"><ix:FieldArea><ix:Field For="QuestionAnswers" Span="true"/></ix:FieldArea></ix:DetailSection></ix:DetailPage><style>.data_row td.wrap {
    white-space: normal !important;
}

.one-column .group-item {
clear: none !important;
}
.group-item {
float: left;
width: auto!important;
padding-right:10px;
}

.group {
border:none!important;
}
.HideBorders > .header {
    display: none;
}

.HideBorders > .footer {
    display: none;
}

.HideBorders > .content {
    border: medium none;
    padding: 0;
}

.imagepreview {
background-repeat:no-repeat;
max-width:500px;
min-height:300px;
background-size:contain;
}

.hiddenSection {
display:none;
}</style>
```

### E1216-Content

CLF_ChecklistObject.CLF_Checklist_Inventory — Content; stable record ID e2b9b327-3a0d-4d6a-8ef4-99a907ea7020. Source $.GraphData.Items[419].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Checklist_Inventory"><ix:InventoryView ID="CLF_Checklist_InventoryView"><Actions><ix:MassUpdateAction ViewName="CLF_Checklist_MassUpdate"/></Actions><grouping><ix:Group By="ChecklistType"/></grouping><Columns><ix:Column For="Reference" LinkTo="default"/><ix:Column For="Title"/><ix:Column For="NbQuestions" HorizontalAlign="center"/><ix:Column FilterAs="dropdown" For="ChecklistType"/><ix:Column For="EnableSections"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1228-Content

ConfgAppSetting_SpecAppSettingsObject.ConfgAppSetting_SpecAppSettingsObjectInventoryView — Content; stable record ID 49e6b03f-af08-4341-a794-d1f29b4cf785. Source $.GraphData.Items[424].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="ConfgAppSetting_SpecAppSettingsObjectInventory"><ix:InventoryView ID="ConfgAppSetting_SpecAppSettingsObjectInventoryView"><Columns><ix:Column For="Name" Linkto="Default" /><ix:Column Caption="Calendar Icon" For="CalIconSel" /><ix:Column Caption="Clock Icon" For="ClockIcon" /><ix:Column Caption="Location Structure Icon" For="LoStructureIcon" /><ix:Column Caption="Workflow Stage Icon - Workflow" For="WrkflowStaIcon" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1254-Content

Unresolved._EmptyView — Content; stable record ID 77b54ebf-5c19-4689-b806-180e25718198. Source $.GraphData.Items[436].FieldData.Content.

```text
&nbsp;
```

### E1269-ConfigurableViewActions

CLF_SubchecklistObject.CLF_Subchecklist_Detail — ConfigurableViewActions; stable record ID 2b2a1358-ced7-44da-b8a0-c8f8f29aa5c8. Source $.GraphData.Items[442].FieldData.ConfigurableViewActions.

```json
[]
```

### E1269-Content

CLF_SubchecklistObject.CLF_Subchecklist_Detail — Content; stable record ID 2b2a1358-ced7-44da-b8a0-c8f8f29aa5c8. Source $.GraphData.Items[442].FieldData.Content.

```xml
<ix:DetailPage>
  <ix:DetailSection Title="Audit Checklist Details"  ModernIcon="Raven/Icons/BrightBlue_48/note16.png">
    <ix:FieldArea>
<ix:Field For="MasterChecklist" IsMandatory="True" SpellCheck="false" DisplayAs="Link"/>
<ix:Field DisplayMode="View,Edit" For="RecordNo"/>
<ix:Field DisplayMode="Create" EditAs="Dropdown" For="PubChecklist" IsMandatory="true"/>
<ix:Field Visible="False" For="PubChecklist" DisplayMode="View,Edit"/>
<ix:Field For="Comments" Span="true" SpellCheck="false"/>
    </ix:FieldArea>
  </ix:DetailSection>
  <ix:GridSection ID="QuestionAnswersGridSection" For="QuestionAnswers" DisplayMode="Edit,View" EditLinkTarget="popup" RefreshScope="Row" HideGroupAddButton="true" Title="Checklist: {#PubChecklist}" AllowSorting="false" meta:resourcekey="GridSection2" ResourceKey="GridSection2" ModernIcon="Raven/Icons/BrightBlue_48/questions5.png">
    <Actions>
<ix:MassUpdateAction ViewName="CLF_QuestionAnswer_MassUpdate"/>
    </Actions>
    <menu>
<ix:GridCreateActionLink Override="true" Visible="false"/>
<ix:GridDeleteActionLink Override="true" Visible="false"/>
    </menu>
    <Sorting>
<ix:Sort By="PubQuestion.Order" Direction="Ascending"/>
    </Sorting>
    <grouping>
<ix:Group By="PubQuestion.Section"/>
    </grouping>
    <aliases>
<ix:Alias For="PubQuestion.QuestionRef"/>
<ix:Alias For="PubQuestion.Guideline"/>
<ix:Alias For="PubQuestion.Id"/>
<ix:Alias For="ChecklistAnswer.MasterChecklist.Id" Name="AuditId"/>
<ix:Alias For="Choice.BColor.Value"/>
<ix:Alias For="Choice.TColor.Value"/>
<ix:Alias For="Choice.Css"/>
<ix:Alias For="Id"/>
    </aliases>
    <Columns>
      <ix:TemplateColumn For="PubQuestion.Content" Width="1">
        <Template>
          <span style="font-weight:bold;">
<%# Container.ViewData.Eval("PubQuestion.QuestionRef") %> <%# Container.ViewData.Eval("PubQuestion.Content") %>
          </span>
          <div class="fieldHint">
<%# Container.ViewData.Eval("PubQuestion.Guideline") %>
          </div>
        </Template>
      </ix:TemplateColumn>
<ix:Column For="PubQuestion.Question.References" FetchAs="Collection" DisplayAs="List" Visible="false"/>
      <ix:MergeColumn Caption="Answer" For="PubQuestion.AnswerType.Value" RefreshScope="Row" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0">
        <MappedColumns>
          <ix:TemplateColumn MapValue="Choice_disable" For="Choice" EditMode="inline">
            <Template>
              <div style="color:<%# Container.ViewData.Eval("Choice.TColor.Value") %>;background-color:<%# Container.ViewData.Eval("Choice.BColor.Value") %>;<%# Container.ViewData.Eval("Choice.Css") %>">
<%# Container.ViewData.Eval("Choice") %>
              </div>
            </Template>
          </ix:TemplateColumn>
<ix:Column MapValue="Choice" For="Choice" EditMode="inline"/>
<ix:Column MapValue="Date" For="Date" EditMode="inline" Format="d"/>
<ix:Column MapValue="Choices" For="Choices" FetchAs="collection" DisplayAs="List" EditMode="popup"/>
<ix:Column MapValue="Float" For="Float" EditMode="inline" HorizontalAlign="right"/>
<ix:Column MapValue="Text" For="Text" EditMode="popup"/>
<ix:Column MapValue="Checkbox" For="Checkbox" EditMode="inline"/>
        </MappedColumns>
      </ix:MergeColumn>
<ix:Column For="Comments" EditMode="popup" RefreshScope="Row"/>
<ix:Column For="NumbofDocuments" LinkTo="CLF_QuestionAnswer_Docs/View?entityid={#id}" LinkTarget="popup" RefreshScope="Row" Caption="#Docs" HorizontalAlign="center" width="5px"/>
      <ix:TemplateColumn For="NbFindings" Caption="Add" HorizontalAlign="center" AllowFiltering="false" AllowSorting="false" width="5px">
        <Template>
          <a title="Create &amp; Attach a new Finding" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/DefaultView/CLF_FindingObject/Create?QuestionAnswers=<%# Container.ViewData.Eval("Id") %>&amp;RelatedId=<%# Container.ViewData.Eval("AuditId") %>&amp;RelatedPath=CLF_MultichecklistsObject.Findings">
            <img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/>
            </a>
          </Template>
        </ix:TemplateColumn>
<ix:Column Caption="Attached Findings" DisplayAs="List" EditMode="popup" FetchAs="Collection" For="Findings" RefreshScope="row" meta:resourcekey="Column1" ResourceKey="Column1"/>
      </Columns>
    </ix:GridSection>
<ix:WorkflowComments DisplayMode="View"/>
<ix:WorkflowTracking DisplayMode="View"/>
<ix:ESignatureHistorySection DisplayMode="View"/>
<ix:MailMergeTemplates ID="MailMergeFragmentGridSection" DisplayMode="View"/>
  </ix:DetailPage>
  <style>
<%= ApplicationSettings.Get("Setup_PreferencesObject","CustomCSS","")  %>
          

		.three-column .group-item , .two-column .group-item {
			width: 100% !important;
		}

		.group-item {
			padding: 3px;
		}

		.data_row.alternate {
			background:none !important;
		}
  </style>
```

### E1308-Content

FragApplication_AbCorrectivActiObject.QP_AbCorrectivActi_Closed_Inventory — Content; stable record ID 89b079bd-e484-453b-b900-108c11deaa75. Source $.GraphData.Items[451].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="QP_AbCorrectivActi_Closed_Inventory"><ix:InventoryView ID="QP_AbCorrectivActi_Closed_InventoryView"><Filters><ix:Filter PredicateOperator="Or"><ix:IsNullPredicate For="ReactionPlan.Id" Negate="True"/><ix:IsNullPredicate For="RecoAction.Id" Negate="True"/></ix:Filter></Filters><Filters><ix:Filter><ix:CommonPredicate For="workflow.workflowstatus" Type="Equal" Negate="false"><ix:Value>Completed</ix:Value></ix:CommonPredicate></ix:Filter></Filters><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/><ix:GridHierarchyTreeLink Override="true" Visible="false"/></Menu><Sorting><ix:Sort By="ActionNo" Direction="ascending"/></Sorting><Aliases><ix:Alias For="RecoAction.Id" Name="RecoActionId"/><ix:Alias For="RecoAction.ProjRevId" Name="RecoActionProjRevId"/><ix:Alias For="RecoAction.ProjRev.RevisionNo" Name="RecoActionProjRevNo"/><ix:Alias For="RecoAction.ProjRev.Project" Name="RecoActionProject"/><ix:Alias For="RecoAction.ProjRev.ProjectId" Name="RecoActionProjectId"/><ix:Alias For="RecoAction.ProcCtrlId" Name="ControlId"/><ix:Alias For="ReactionPlan.Id" Name="ReactionPlanId"/><ix:Alias For="ReactionPlan.ProjRevId" Name="ReactionProjRevId"/><ix:Alias For="ReactionPlan.ProjRev.RevisionNo" Name="ReactionProjRevNo"/><ix:Alias For="ReactionPlan.ProjRev.Project" Name="ReactionProject"/><ix:Alias For="ReactionPlan.ProjRev.ProjectId" Name="ReactionProjectId"/><ix:Alias For="ReactionPlan.MethodId" Name="MethodId"/></Aliases><Columns><ix:Column For="ActionNo" LinkTarget="popup" LinkTo="default" width="5%" /><ix:Column Caption="Required Action" DisplayAs="Truncate" For="CPARActionReq" ResourceKey="Column0" meta:resourcekey="Column0" wrap="true" /><ix:MergeColumn Caption="Project" For="HelperQPType" DisplayAs="Truncate" wrap="true" meta:resourcekey="MergeColumn1" ResourceKey="MergeColumn1"><MappedColumns><ix:TemplateColumn For="RecoActionProject" MapValue="QP_RecoActionObject" Caption="Project" width="30%" LinkTarget="Popup" meta:resourcekey="TemplateColumn0" ResourceKey="TemplateColumn0"><Template><div align="left"><%# (Container.ViewData.Eval("RecoActionId").ToString() != "" )?   Container.ViewData.Eval("RecoActionProject").ToString() :  "" %></div></Template></ix:TemplateColumn><ix:TemplateColumn For="ReactionProject" Caption="Project" MapValue="QP_ReactionPlanObject" width="30%" LinkTarget="Popup" meta:resourcekey="TemplateColumn1" ResourceKey="TemplateColumn1"><Template><div align="left"><%# (Container.ViewData.Eval("ReactionPlanId").ToString() != "" )?   Container.ViewData.Eval("ReactionProject").ToString() :  "" %></div></Template></ix:TemplateColumn></MappedColumns></ix:MergeColumn><ix:MergeColumn Caption="Revision" For="HelperQPType" DisplayAs="Truncate" wrap="true" meta:resourcekey="MergeColumn2" ResourceKey="MergeColumn2"><MappedColumns><ix:TemplateColumn For="RecoActionProjRevNo" MapValue="QP_RecoActionObject" Caption="Revision" width="10%" LinkTarget="Popup" meta:resourcekey="TemplateColumn2" ResourceKey="TemplateColumn2"><Template><div align="left" style="font-weight: bold;"><a class="openInPopup" style="white-space: pre-wrap;display:<%# Container.ViewData.Eval("RecoActionId").ToString() == "" ? "none" : "" %>" href="<%# Container.ViewData.Eval("RecoActionId").ToString() != "" ? HttpEnvironment.SystemApplicationPath + "/Application/QP/Actions/Forms/QP_ProjRev_Detail/View/" + Container.ViewData.Eval("RecoActionProjRevId").ToString() :  "" %>"><%# (Container.ViewData.Eval("RecoActionId").ToString() != "" )?  "Rev. " + Container.ViewData.Eval("RecoActionProjRevNo").ToString() :  "" %></a></div></Template></ix:TemplateColumn><ix:TemplateColumn For="ReactionProjRevNo" Caption="Revision" MapValue="QP_ReactionPlanObject" width="10%" LinkTarget="Popup" meta:resourcekey="TemplateColumn3" ResourceKey="TemplateColumn3"><Template><div align="left" style="font-weight: bold;"><a class="openInPopup" style="white-space: pre-wrap;display:<%# Container.ViewData.Eval("ReactionPlanId").ToString() == "" ? "none" : "" %>" href="<%# Container.ViewData.Eval("ReactionPlanId").ToString() != "" ? HttpEnvironment.SystemApplicationPath + "/Application/QP/Actions/Forms/QP_ProjRev_Detail/View/" + Container.ViewData.Eval("ReactionProjRevId").ToString() :  "" %>"><%# (Container.ViewData.Eval("ReactionPlanId").ToString() != "" )?  "Rev. " + Container.ViewData.Eval("ReactionProjRevNo").ToString() :  "" %></a></div></Template></ix:TemplateColumn></MappedColumns></ix:MergeColumn><ix:MergeColumn Caption="Related Action" For="HelperQPType" DisplayAs="Truncate" wrap="true" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0"><MappedColumns><ix:TemplateColumn For="RecoAction" MapValue="QP_RecoActionObject"><Template><div class="prettyCell" style="background-color:lightGrey;color:Black;"><div>Recommended Action:</div><a class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Application/QP/Actions/Forms/QP_RecoAction_Detail_Completed/View/<%# Container.ViewData.Eval("RecoActionId") %>?relatedId=<%# Container.ViewData.Eval("ControlId").ToString() %>&amp;relatedPath=QP_ProcCtrlObject.Children"><%# Container.ViewData.Eval("RecoAction") %></a></div></Template></ix:TemplateColumn><ix:TemplateColumn For="ReactionPlan" MapValue="QP_ReactionPlanObject"><Template><div class="prettyCell" style="background-color:lightGrey;color:Black;"><div>Reaction Plan:</div><a class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Application/QP/Actions/Forms/QP_ReactionPlan_Detail_Completed/View/<%# Container.ViewData.Eval("ReactionPlanId") %>?relatedId=<%# Container.ViewData.Eval("MethodId").ToString() %>&amp;relatedPath=QP_MethodObject.Children"><%# Container.ViewData.Eval("ReactionPlan") %></a></div></Template></ix:TemplateColumn></MappedColumns></ix:MergeColumn><ix:Column DisplayAs="label" For="Location" /><ix:Column For="CompletedBy" /><ix:Column Caption="Date Completed" For="CompletionDate" ResourceKey="Column3" format="d" meta:resourcekey="Column3" /><ix:Column For="Workflow.Status" Visible="false" /></Columns></ix:InventoryView></ix:Inventory><style><%= ApplicationSettings.Get("QP_PreferencesObject","CustomCSS","")  %></style></ix:InventoryPage>
```

### E1376-Content

FragApplication_AbCorrectivActiObject.Actions_AllActions_Inventory — Content; stable record ID bc2462b4-1e89-4db4-a6ef-113834c00a0a. Source $.GraphData.Items[474].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="FragApplication_AbCorrectivActiObjectInventory"><ix:InventoryView ID="FragApplication_AbCorrectivActiObjectInventoryView" Caption="All Actions" meta:resourcekey="InventoryView0" ResourceKey="InventoryView0"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column DisplayAs="label" For="Location" /><ix:Column DisplayAs="Truncate" For="CPARActionReq" /><ix:Column Caption="System Type" FilterAs="Dropdown" For="SystemType.Caption" ResourceKey="Column0" meta:resourcekey="Column0" /><ix:Column FilterAs="dropdown" For="CPARTypeID" HorizontalAlign="center" /><ix:Column DisplayAs="label" For="Workflow.PersonResponsible" /><ix:Column For="Workflow.DueDate" Format="d" HorizontalAlign="center" /><ix:Column For="Workflow.WorkflowStatus" HorizontalAlign="center" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1393-Content

FragApplication_AbCorrectivActiObject.FragApplication_AbCorrectivActiObjectDetailView — Content; stable record ID 2836d9b8-1390-4aa5-a6d7-4f240b6cae5f. Source $.GraphData.Items[480].FieldData.Content.

```xml
<ix:DetailPage Icon=""><ix:DetailSection Title="Fields"><ix:FieldArea><ix:Field For="Location" /><ix:Field For="CPARActionReq" /><ix:Field For="ActionNo" /><ix:Field For="CPARTypeID" /><ix:Field For="CompletionDate" /><ix:Field For="CompletedBy" /><ix:Field For="DueDate" /><ix:Field For="CompletionNotes" /><ix:Field For="ReportedBy" /><ix:Field For="ReportedOn" /><ix:Field For="IsCompleted" /><ix:Field For="ToCostofActions" /><ix:Field For="ActualCost" /><ix:Field For="ASourceLocation" /><ix:Field For="ActioSourceType" /><ix:Field For="ActionPlanType" /></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:WorkflowComments/><ix:WorkflowTracking/><ix:GridSection For="ProgressNotes" ID="ProgressNotesGridSection"><Columns><ix:Column For="complete" LinkTo="default" /><ix:Column For="Date" /><ix:Column For="EnteredBy" /><ix:Column For="ProgressNotes" /></Columns></ix:GridSection><ix:ESignatureHistorySection/><ix:GridSection For="Costs" ID="CostsGridSection"><Columns><ix:Column For="Category" LinkTo="default" /><ix:Column For="ConvertedCost" /><ix:Column For="Cost" /><ix:Column For="CostType" /><ix:Column For="Currency" /></Columns></ix:GridSection></ix:DetailPage>
```

### E1405-Content

FragApplication_AbCorrectivActiObject.AbstractCorrectiveAction_Inventory — Content; stable record ID 64598cde-0b54-41c0-b84d-0204ab0eeb01. Source $.GraphData.Items[484].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory Id="AbstractCorrectiveAction_Inventory"><ix:InventoryView ID="AbstractCorrectiveAction_InventoryView"><Entities><ix:ExcludeEntity name="ActionPlans_ActionPlanWActObject"/><ix:ExcludeEntity name="ActionPlans_ActivitySequenObject"/><ix:ExcludeEntity name="ActionPlans_GlobActionPlanObject"/><ix:IncludeEntity name="ActionPlans_LocalActionPlanObject"/></Entities><Menu><ix:GridDeleteActionLink runat="server" Override="true" Visible="false"/><ix:GridArchiveActionLink runat="server" Override="true" Visible="false"/><ix:GridCreateActionLink runat="server" Override="true" Visible="false"/></Menu><Aliases><ix:alias For="SourceObject.Name" Name="SourceName"/><ix:alias For="SourceObject.Caption" Name="SourceCaption"/><ix:alias For="SourceRecordId" Name="SourceRecordId"/></Aliases><Sorting><ix:Sort By="ActionNo" Direction="Descending"/></Sorting><Filters><ix:Filter PredicateOperator="And"><ix:IsNullPredicate For=":ActionPlans_ActionPlanWActObject.id" runat="server"/><ix:IsNullPredicate For=":ActionPlans_ActivitySequenObject.id" runat="server"/><ix:IsNullPredicate For=":ActionPlans_GlobActionPlanObject.id" runat="server"/><ix:IsNullPredicate For=":ActionPlans_LocalActionPlanObject.id" runat="server"/></ix:Filter></Filters><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column DisplayAs="String" For="Location" /><ix:Column Caption="Action Plan Type" For="SystemType.Caption" ResourceKey="Column0" meta:resourcekey="Column0" /><ix:TemplateColumn For="SourceObject" Caption="Actual Related Source" meta:resourcekey="TemplateColumn0" ResourceKey="TemplateColumn0"><Template><a href="<%=HttpEnvironment.SystemApplicationPath %>/DefaultView/<%# Html.Encode(Container.ViewData.Eval("SourceName")) %>/View?entityId=<%# Container.ViewData.Eval("SourceRecordId") %>" target="_blank"><%# Html.Encode(Container.ViewData.Eval("SourceCaption")) %></a></Template></ix:TemplateColumn><ix:Column For="CPARActionReq" /><ix:Column DisplayAs="String" For="Workflow.PersonResponsible" /><ix:Column For="DueDate" Format="d" caption="Target Date" /><ix:Column For="Workflow.Status" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1431-Content

FragApplication_AbCorrectivActiObject.CAR_AbsCorrectiveAction_Inventory — Content; stable record ID d837281b-a744-44ac-b3be-cf6aaed830ff. Source $.GraphData.Items[494].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CAR_AbsCorrectiveAction_Inventory"><ix:InventoryView ID="CAR_AbsCorrectiveAction_InventoryView" DisplayEditColumn="False" HideGroupAddButton="True"><Menu><ix:GridCreateActionLink Visible="false" Override="true"/><ix:GridArchiveActionLink Visible="false" Override="true"/><ix:GridDeleteActionLink Visible="false" Override="true"/><ix:GridHierarchyTreeLink Override="true" Visible="false" runat="server"/></Menu><Filters><ix:Filter><ix:CommonPredicate For="Workflow.Status" Negate="true" Type="Equal"><ix:Value>Closed</ix:Value></ix:CommonPredicate></ix:Filter><ix:Filter><ix:IsNullPredicate For="CAR" Negate="True"/></ix:Filter></Filters><Sorting><ix:Sort By="ActionNo" Direction="Descending"/></Sorting><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column DisplayAs="text" For="Location" runat="server" /><ix:Column Caption="Description" For="CPARActionReq" ResourceKey="Column0" meta:resourcekey="Column0" /><ix:Column Caption="CAR" For="CAR" ResourceKey="Column1" meta:resourcekey="Column1" /><ix:Column DisplayAs="String" For="Workflow.PersonResponsible" /><ix:Column For="Workflow.DueDate" Format="d" /><ix:MergeColumn Caption="Progress" For="SystemType.Name" RefreshScope="Row" HorizontalAlign="Center" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0"><MappedColumns><ix:Column For=":ActionPlans_ActionPlanAbsObject.ActivitProgress" MapValue="ActionPlans_ActionPlanWActObject" /><ix:Column For="CAR.HelpActPlanProg" MapValue="ActionPlans_ActionPlanObject" /><ix:Column For="CAR.HelpActPlanProg" MapValue="ActionPlans_GlobActionPlanObject" /></MappedColumns></ix:MergeColumn><ix:Column For="Workflow.Status" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1441-Content

FragApplication_AbCorrectivActiObject.QP_AbCorrectivActi_Open_Inventory — Content; stable record ID 9e0750a9-fe2b-4e7d-9129-c2d70c4724bd. Source $.GraphData.Items[497].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="QP_AbCorrectivActi_Open_Inventory"><ix:InventoryView ID="QP_AbCorrectivActi_Open_InventoryView"><Filters><ix:Filter PredicateOperator="Or"><ix:IsNullPredicate For="ReactionPlan.Id" Negate="True"/><ix:IsNullPredicate For="RecoAction.Id" Negate="True"/></ix:Filter></Filters><Filters><ix:Filter><ix:CommonPredicate For="workflow.workflowstatus" Type="Equal" Negate="True"><ix:Value>Completed</ix:Value></ix:CommonPredicate></ix:Filter></Filters><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/><ix:GridHierarchyTreeLink Override="true" Visible="false"/></Menu><Sorting><ix:Sort By="Workflow.DueDate" Direction="ascending"/></Sorting><Aliases><ix:Alias For="RecoAction.Id" Name="RecoActionId"/><ix:Alias For="RecoAction.ProjRevId" Name="RecoActionProjRevId"/><ix:Alias For="RecoAction.ProjRev.RevisionNo" Name="RecoActionProjRevNo"/><ix:Alias For="RecoAction.ProjRev.Project" Name="RecoActionProject"/><ix:Alias For="RecoAction.ProjRev.ProjectId" Name="RecoActionProjectId"/><ix:Alias For="RecoAction.ProcCtrlId" Name="ControlId"/><ix:Alias For="ReactionPlan.Id" Name="ReactionPlanId"/><ix:Alias For="ReactionPlan.ProjRevId" Name="ReactionProjRevId"/><ix:Alias For="ReactionPlan.ProjRev.RevisionNo" Name="ReactionProjRevNo"/><ix:Alias For="ReactionPlan.ProjRev.Project" Name="ReactionProject"/><ix:Alias For="ReactionPlan.ProjRev.ProjectId" Name="ReactionProjectId"/><ix:Alias For="ReactionPlan.MethodId" Name="MethodId"/><ix:Alias For="QP_PotCauseFailObject.Occurrence.Color.Value" Name="Occurrence_BC"/></Aliases><Columns><ix:Column For="ActionNo" LinkTarget="popup" LinkTo="default" width="5%" /><ix:Column Caption="Required Action" DisplayAs="Truncate" For="CPARActionReq" ResourceKey="Column0" meta:resourcekey="Column0" wrap="true" /><ix:MergeColumn Caption="Project" For="HelperQPType" DisplayAs="Truncate" wrap="true" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0"><MappedColumns><ix:TemplateColumn For="RecoActionProject" MapValue="QP_RecoActionObject" Caption="Project" width="10%" LinkTarget="Popup" meta:resourcekey="TemplateColumn1" ResourceKey="TemplateColumn1"><Template><div align="left"><%# (Container.ViewData.Eval("RecoActionId").ToString() != "" )?   Container.ViewData.Eval("RecoActionProject").ToString() :  "" %></div></Template></ix:TemplateColumn><ix:TemplateColumn For="ReactionProject" Caption="Project" MapValue="QP_ReactionPlanObject" width="10%" LinkTarget="Popup" meta:resourcekey="TemplateColumn2" ResourceKey="TemplateColumn2"><Template><div align="left"><%# (Container.ViewData.Eval("ReactionPlanId").ToString() != "" )?   Container.ViewData.Eval("ReactionProject").ToString() :  "" %></div></Template></ix:TemplateColumn></MappedColumns></ix:MergeColumn><ix:MergeColumn Caption="Revision" For="HelperQPType" DisplayAs="Truncate" wrap="true" meta:resourcekey="MergeColumn2" ResourceKey="MergeColumn2"><MappedColumns><ix:TemplateColumn For="RecoActionProjRevNo" MapValue="QP_RecoActionObject" Caption="Revision" width="10%" LinkTarget="Popup" meta:resourcekey="TemplateColumn3" ResourceKey="TemplateColumn3"><Template><div align="left" style="font-weight: bold;"><a class="openInPopup" style="white-space: pre-wrap;display:<%# Container.ViewData.Eval("RecoActionId").ToString() == "" ? "none" : "" %>" href="<%# Container.ViewData.Eval("RecoActionId").ToString() != "" ? HttpEnvironment.SystemApplicationPath + "/Application/QP/Actions/Forms/QP_ProjRev_Detail/View/" + Container.ViewData.Eval("RecoActionProjRevId").ToString() :  "" %>"><%# (Container.ViewData.Eval("RecoActionId").ToString() != "" )?  "Rev. " + Container.ViewData.Eval("RecoActionProjRevNo").ToString() :  "" %></a></div></Template></ix:TemplateColumn><ix:TemplateColumn For="ReactionProjRevNo" Caption="Revision" MapValue="QP_ReactionPlanObject" width="10%" LinkTarget="Popup" meta:resourcekey="TemplateColumn4" ResourceKey="TemplateColumn4"><Template><div align="left" style="font-weight: bold;"><a class="openInPopup" style="white-space: pre-wrap;display:<%# Container.ViewData.Eval("ReactionPlanId").ToString() == "" ? "none" : "" %>" href="<%# Container.ViewData.Eval("ReactionPlanId").ToString() != "" ? HttpEnvironment.SystemApplicationPath + "/Application/QP/Actions/Forms/QP_ProjRev_Detail/View/" + Container.ViewData.Eval("ReactionProjRevId").ToString() :  "" %>"><%# (Container.ViewData.Eval("ReactionPlanId").ToString() != "" )?  "Rev. " + Container.ViewData.Eval("ReactionProjRevNo").ToString() :  "" %></a></div></Template></ix:TemplateColumn></MappedColumns></ix:MergeColumn><ix:MergeColumn Caption="Related Action" For="HelperQPType" DisplayAs="Truncate" wrap="true" meta:resourcekey="MergeColumn1" ResourceKey="MergeColumn1"><MappedColumns><ix:TemplateColumn For="RecoAction" MapValue="QP_RecoActionObject"><Template><div class="prettyCell" style="background-color: lightGrey;color:Black;"><div>Recommended Action:</div><a class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Application/QP/Actions/Forms/QP_RecoAction_Detail/View/<%# Container.ViewData.Eval("RecoActionId") %>?relatedId=<%# Container.ViewData.Eval("ControlId").ToString() %>&amp;relatedPath=QP_ProcCtrlObject.Children"><%# Container.ViewData.Eval("RecoAction") %></a></div></Template></ix:TemplateColumn><ix:TemplateColumn For="ReactionPlan" MapValue="QP_ReactionPlanObject"><Template><div class="prettyCell" style="background-color: lightGrey;color:Black;"><div>Reaction Plan:</div><a class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Application/QP/Actions/Forms/QP_ReactionPlan_Detail/View/<%# Container.ViewData.Eval("ReactionPlanId") %>?relatedId=<%# Container.ViewData.Eval("MethodId").ToString() %>&amp;relatedPath=QP_MethodObject.Children"><%# Container.ViewData.Eval("ReactionPlan") %></a></div></Template></ix:TemplateColumn></MappedColumns></ix:MergeColumn><ix:Column DisplayAs="label" For="Location" /><ix:Column DisplayAs="label" For="Workflow.PersonResponsible" /><ix:TemplateColumn For="Workflow.DueDate" format="d" Caption="Target Due Date" Visible="true" HorizontalAlign="center" meta:resourcekey="TemplateColumn0" ResourceKey="TemplateColumn0"><template><div class="<%# Container.ViewData.Eval("Workflow.DueDate").ToString() != "" ? 
(DateTime) Container.ViewData.Eval("Workflow.DueDate") < DateTime.Today ?"redDiv":
(DateTime) Container.ViewData.Eval("Workflow.DueDate") <= DateTime.Today.AddDays(Convert.ToInt32(ApplicationSettings.Get("QP_PreferencesObject","ActionCautionQP"))) ?"yellowDiv":
(DateTime) Container.ViewData.Eval("Workflow.DueDate") > DateTime.Today.AddDays(Convert.ToInt32(ApplicationSettings.Get("QP_PreferencesObject","ActionCautionQP"))) ?"greenDiv ": "" : "inlineDiv" %>"><%# Container.ViewData.Eval("Workflow.DueDate").ToString() != "" ? String.Format("{0:MM/dd/yyyy}",  Container.ViewData.Eval("Workflow.DueDate")) : "" %></div></template></ix:TemplateColumn></Columns></ix:InventoryView></ix:Inventory><style><%= ApplicationSettings.Get("QP_PreferencesObject","CustomCSS","")  %></style></ix:InventoryPage>
```

### E1458-Content

FragApplication_EquipmentObject.FragApplication_Equipment_Select — Content; stable record ID 33a21475-9b0f-4f7d-a97c-5933f2492d6e. Source $.GraphData.Items[501].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="FragApplication_Equipment_Select"><ix:InventoryView ID="FragApplication_Equipment_SelectView"><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></Menu><filters><ix:Filter><ix:SubQueryPredicate For="LocationId" FromEntity="SysLocationTreeStructureEntity" Type="In" EntityAlias="LocationTreeStructure"><ix:Property Text="LocationId"/><ix:Filter><ix:CommonPredicate For="[LocationTreeStructure].ParentId" Type="Equal"><ix:Value Parse="true"><%=Request.QueryString["_DependsOn.Location"] %></ix:Value></ix:CommonPredicate></ix:Filter></ix:SubQueryPredicate></ix:Filter></filters><Columns><ix:Column For="RecordNo" LinkTo="Default"/><ix:Column DisplayAs="string" For="Location"/><ix:Column For="EquipmentNo"/><ix:Column For="Name"/><ix:Column For="Model"/><ix:Column For="Manufacturer"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1460-Content

ActionPlans_ActionPlanAbsObject.ActionPlans_ActionPlanAbs_NCR_Inventory — Content; stable record ID 9db1dc10-34d6-4f01-ab9a-e3b7b3651508. Source $.GraphData.Items[502].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="ActionPlans_ActionPlanAbsObjectInventory"><ix:InventoryView ID="ActionPlans_ActionPlanAbsObjectInventoryView" HideGroupAddButton="True"><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/><ix:GridHierarchyTreeLink Override="true" Visible="false" runat="server"/></Menu><Hierarchies><ix:GridHierarchyTree For="ActionPlanType" visible="false" EnableContextMenu="false" ShowTitle="false" EnableDragAndDrop="false"/></Hierarchies><aliases><ix:Alias for="NCRActionPlanID"/><ix:Alias for="NCR.HelpActPlanProg"/></aliases><Filters><ix:Filter><ix:CommonPredicate For="Workflow.Status" Negate="true" Type="Equal"><ix:Value>Closed</ix:Value></ix:CommonPredicate></ix:Filter><ix:Filter><ix:IsNullPredicate For="NCRActionPlanID" negate="true"/></ix:Filter></Filters><Sorting><ix:Sort By="ActionNo" Direction="Descending"/></Sorting><Columns><ix:Column For="ActionNo" LinkTarget="Popup" LinkTo="Default"/><ix:Column For="Location" DisplayAs="text"/><ix:Column For="CPARActionReq" Caption="Description" meta:resourcekey="Column0" ResourceKey="Column0"/><ix:Column For="NCR" Caption="NCR" meta:resourcekey="Column1" ResourceKey="Column1"/><ix:Column For="Workflow.PersonResponsible" DisplayAs="String"/><ix:Column For="Workflow.DueDate" Format="d"/><ix:MergeColumn Caption="Progress" For="SystemType.Name" HorizontalAlign="Center" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0"><MappedColumns><ix:Column For="ActivitProgress" MapValue="ActionPlans_ActionPlanWActObject"/><ix:Column For="NCR.HelpActPlanProg" MapValue="ActionPlans_ActionPlanObject"/></MappedColumns></ix:MergeColumn><ix:Column For="Workflow.Status"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1465-ConfigurableViewActions

CLF_FindingObject.CLF_Finding_Docs_Readonly — ConfigurableViewActions; stable record ID aa360451-9d81-41a9-95c2-e847dad40c20. Source $.GraphData.Items[503].FieldData.ConfigurableViewActions.

```json
[]
```

### E1465-Content

CLF_FindingObject.CLF_Finding_Docs_Readonly — Content; stable record ID aa360451-9d81-41a9-95c2-e847dad40c20. Source $.GraphData.Items[503].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar" runat="server"><ix:EditActionLink Override="true" Visible="false"/><ix:SaveActionLink Override="true" Visible="false"/><ix:SaveExitActionLink Override="true" Visible="false"/><ix:AddEntryActionLink Override="true" Visible="false"/><ix:CloneActionLink Override="true" Visible="false"/><ix:DeleteActionLink Override="true" Visible="false"/><ix:SaveAddNewActionLink Override="true" Visible="false"/></ix:DetailPageMenuBar><ix:TabsSection Title="Evidence" ShowHeader="true" Icon="Icons/new/48x48/folder_up.gif" meta:resourcekey="TabsSection0" ResourceKey="TabsSection0"><ix:Tab Caption="Upload" meta:resourcekey="Tab0" ResourceKey="Tab0"><ix:AttachmentSection ID="AttachmentFragmentGridSection" Title="Upload images" CssClass="HideBorders" isCollapsed="false" UseCookies="false" meta:resourcekey="AttachmentSection0" ResourceKey="AttachmentSection0"/></ix:Tab><ix:Tab Caption="Image Preview" DisplayMode="View,Edit" meta:resourcekey="Tab1" ResourceKey="Tab1"><ix:GridPanel Entity="DocDocumentAttachmentsEntity" isCollapsed="false" UseCookies="false" ShowColumnCaptions="false" AllowPaging="false" AllowFiltering="false" AllowSorting="false" RowSelectionMode="None" Readonly="True" DisplayMode="View,Edit" DisplayEditColumn="false" CssClass="HideBorders"><Filters><ix:Filter><ix:CommonPredicate For="ObjectRecordId" Type="Equal"><ix:Value Parse="True"><%= Model.Id %></ix:Value></ix:CommonPredicate></ix:Filter><ix:Filter PredicateOperator="or"><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.png</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.jpg</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.gif</ix:Value></ix:LikePredicate></ix:Filter></Filters><aliases><ix:Alias For="Id"/><ix:Alias For="AttachmentName"/></aliases><columns><ix:TemplateColumn><template><div class="imagepreview" title="<%# Container.ViewData.Eval("AttachmentName") %>" style="background-image:url('<%= HttpEnvironment.SystemApplicationPath %>/intelexforms/attachmentsection/downloadfile?recordid=<%# Container.ViewData.Eval("Id") %>')"/></template></ix:TemplateColumn></columns></ix:GridPanel></ix:Tab></ix:TabsSection></ix:DetailPage><style>.HideBorders > .header {
    display: none;
}

.HideBorders > .footer {
    display: none;
}

.HideBorders > .content {
    border: medium none;
    padding: 0;
}

.imagepreview {
background-repeat:no-repeat;
max-width:500px;
min-height:300px;
background-size:contain;
}

.links_container {
display:none;
}</style>
```

### E1486-Content

EventFwk_EventObject.EventFwk_EventObjectDetailView — Content; stable record ID 6c0ed7d5-af51-4c48-bc52-07d6a53536c5. Source $.GraphData.Items[510].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Fields" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea><ix:Field For="Location"/><ix:Field For="Description"/><ix:Field For="Name"/><ix:Field For="Date"/><ix:Field For="EndDate"/><ix:Field For="Severity"/><ix:Field For="SuspectedCause"/><ix:Field For="ImmediateAction"/><ix:Field For="DateReported"/><ix:Field For="ReportedBy"/><ix:Field For="EstimatedCost"/><ix:Field For="ParentEvent"/><ix:Field For="Investigator"/><ix:Field For="InvestDueDate"/><ix:Field For="FinalApprover"/><ix:Field For="InvestResults"/><ix:Field For="FinalAppNotes"/><ix:Field For="DateApproved"/><ix:Field For="DatInvestigated"/><ix:Field For="EventType"/><ix:Field For="NBCAPAs"/><ix:Field For="NBOpenedCAPAs"/><ix:Field For="TeamLeader"/><ix:Field For="Summary"/><ix:Field For="TotalCost"/><ix:Field For="CorrectiActions"/></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:WorkflowComments/><ix:WorkflowTracking/><ix:ESignatureHistorySection/><ix:GridSection For="Subs" ID="SubsGridSection"><Columns><ix:Column For="Date" LinkTo="default" /><ix:Column For="DateReported" /><ix:Column For="Description" /><ix:Column For="EndDate" /></Columns></ix:GridSection><ix:GridSection For="CAPAs" ID="CAPAsGridSection"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="CompletedBy" /><ix:Column For="CompletionDate" /><ix:Column For="CompletionNotes" /><ix:Column For="CPARActionReq" /></Columns></ix:GridSection><ix:GridSection For="CauseAnalysis" ID="CauseAnalysisGridSection"><Columns><ix:Column For="AttachedCauses" LinkTo="default" /><ix:Column For="Date" /><ix:Column For="IdentifieCauses" /><ix:Column For="Incident" /><ix:Column For="MaxOrder" /></Columns></ix:GridSection><ix:GridSection For="LessonsLearned" ID="LessonsLearnedGridSection"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="Category" /><ix:Column For="CompletedBy" /><ix:Column For="CompletionDate" /><ix:Column For="CompletionNotes" /></Columns></ix:GridSection><ix:GridSection For="TeamMembers" ID="TeamMembersGridSection"><Columns><ix:Column For="Discipline" LinkTo="default" /><ix:Column For="Name" /></Columns></ix:GridSection><ix:GridSection For="EventActionPlan" ID="EventActionPlanGridSection"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="CompletedBy" /><ix:Column For="CompletionDate" /><ix:Column For="CompletionNotes" /><ix:Column For="Costs" /></Columns></ix:GridSection><ix:GridSection For="Costs" ID="CostsGridSection"><Columns><ix:Column For="Category" LinkTo="default" /><ix:Column For="ConvertedCost" /><ix:Column For="Cost" /><ix:Column For="Currency" /><ix:Column For="Date" /></Columns></ix:GridSection></ix:DetailPage>
```

### E1513-ConfigurableViewActions

CLF_QuestAbstractObject.CLF_QuestAbstract_Detail — ConfigurableViewActions; stable record ID b61ccba7-2d3e-40d1-8df0-1db4589fc853. Source $.GraphData.Items[518].FieldData.ConfigurableViewActions.

```json
[]
```

### E1513-Content

CLF_QuestAbstractObject.CLF_QuestAbstract_Detail — Content; stable record ID b61ccba7-2d3e-40d1-8df0-1db4589fc853. Source $.GraphData.Items[518].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Question" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Order"/><ix:Field For="Content" SpellCheck="false"/><ix:Field For="Guideline"/><ix:Field For="Section"/><ix:Field For="AnswerType"/><ix:Field For="ChoiceList"/><ix:Field For="Weight"/></ix:FieldArea></ix:DetailSection><ix:GridSection For="TriggerFindings" ID="TriggerFindingsGridSection"><Columns><ix:Column For="BColor" LinkTo="default"/><ix:Column For="ChoiceList"/><ix:Column For="Css"/><ix:Column For="MobileAction"/><ix:Column For="Name"/></Columns></ix:GridSection></ix:DetailPage><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E1516-Content

CLF_QuestAbstractObject.CLF_QuestAbstract_Inventory — Content; stable record ID 4cd43bc4-4e77-47f1-9538-02183898a77f. Source $.GraphData.Items[519].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_QuestAbstract_Inventory"><ix:InventoryView ID="CLF_QuestAbstract_InventoryView"><Columns><ix:Column For="Content" LinkTo="default"/><ix:Column For="Section"/><ix:Column For="Order"/><ix:Column For="ChoiceList"/><ix:Column For="DateModifiedHel"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1527-Content

EventFwk_EventScenarioObject.EventFwk_EventScenarioObjectDetailView — Content; stable record ID 2d43aff4-a4e3-4b47-988c-411f2b2677a5. Source $.GraphData.Items[524].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Fields" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea><ix:Field For="Location"/><ix:Field For="Name"/><ix:Field For="Description"/><ix:Field For="RecordNo"/></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:WorkflowComments/><ix:WorkflowTracking/><ix:ESignatureHistorySection/></ix:DetailPage>
```

### E1536-Content

ActionPlans_ActionPlanAbsObject.ActionPlans_ActionPlanAbs_PHA_Inventory — Content; stable record ID fe21901b-325e-4f7c-8334-ae4fa018e653. Source $.GraphData.Items[527].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="ActionPlans_ActionPlanAbsObjectInventory"><ix:InventoryView ID="ActionPlans_ActionPlanAbsObjectInventoryView" HideGroupAddButton="True"><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/><ix:GridHierarchyTreeLink Override="true" Visible="false" runat="server"/></Menu><Hierarchies><ix:GridHierarchyTree For="ActionPlanType" visible="false" EnableContextMenu="false" ShowTitle="false" EnableDragAndDrop="false"/></Hierarchies><aliases><ix:Alias for="RiskAbs:PHA_PHAObject.ID"/></aliases><Filters><ix:Filter><ix:IsNullPredicate For="RiskAbs:PHA_PHAObject.ID" negate="true"/></ix:Filter></Filters><Sorting><ix:Sort By="ActionNo" Direction="Descending"/></Sorting><Columns><ix:Column For="ActionNo" LinkTarget="Popup" LinkTo="Default"/><ix:Column DisplayAs="text" For="Location"/><ix:Column Caption="Description" For="CPARActionReq" meta:resourcekey="Column0" ResourceKey="Column0"/><ix:Column Caption="PHA" For="RiskAbs" displayas="string" meta:resourcekey="Column1" ResourceKey="Column1"/><ix:Column DisplayAs="String" For="Workflow.PersonResponsible"/><ix:Column For="Workflow.DueDate" Format="d"/><ix:Column For="Workflow.Status"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1565-ConfigurableViewActions

Insp_TypeObject.Insp_Type_Detail — ConfigurableViewActions; stable record ID 38aa707d-811d-454b-9bbd-31c99b6da541. Source $.GraphData.Items[538].FieldData.ConfigurableViewActions.

```json
[
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "hide/show First Reviewer",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "EnabFirstReview",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "true",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "DforFirstReview",
                "elementType": 0
              },
              {
                "elementId": "PRMethod",
                "elementType": 0
              },
              {
                "elementId": "InspRoleOption",
                "elementType": 0
              },
              {
                "elementId": "Role",
                "elementType": 0
              },
              {
                "elementId": "RoleName",
                "elementType": 0
              },
              {
                "elementId": "Expression",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "DforFirstReview",
                "elementType": 0
              },
              {
                "elementId": "PRMethod",
                "elementType": 0
              },
              {
                "elementId": "InspRoleOption",
                "elementType": 0
              },
              {
                "elementId": "Role",
                "elementType": 0
              },
              {
                "elementId": "RoleName",
                "elementType": 0
              },
              {
                "elementId": "Expression",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "DforFirstReview",
                "elementType": 0
              },
              {
                "elementId": "PRMethod",
                "elementType": 0
              },
              {
                "elementId": "InspRoleOption",
                "elementType": 0
              },
              {
                "elementId": "Role",
                "elementType": 0
              },
              {
                "elementId": "RoleName",
                "elementType": 0
              },
              {
                "elementId": "Expression",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "DforFirstReview",
                "elementType": 0
              },
              {
                "elementId": "PRMethod",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "DforFirstReview",
                "elementType": 0
              },
              {
                "elementId": "PRMethod",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "DecisionAction",
            "condition": {
              "__type": "ExpressionPredicate",
              "expression": null,
              "predicates": [
                {
                  "__type": "SimplePredicate",
                  "drilldown": false,
                  "leftOperand": {
                    "__type": "PropertyOperand",
                    "propertyName": "PRMethod",
                    "aggregateFunction": 0,
                    "dataSourceAlias": null,
                    "propertyFunction": null,
                    "resolveDisplayProperty": false,
                    "uom": null
                  },
                  "operator": {
                    "__type": "IsNullOperator",
                    "negate": true
                  },
                  "rightOperand": null
                }
              ]
            },
            "falseDecision": [
              {
                "__type": "HideAction",
                "elements": [
                  {
                    "elementId": "Role",
                    "elementType": 0
                  },
                  {
                    "elementId": "Expression",
                    "elementType": 0
                  }
                ]
              },
              {
                "__type": "SetNonMandatoryAction",
                "elements": [
                  {
                    "elementId": "Role",
                    "elementType": 0
                  },
                  {
                    "elementId": "Expression",
                    "elementType": 0
                  }
                ]
              },
              {
                "__type": "ClearValueAction",
                "elements": [
                  {
                    "elementId": "Role",
                    "elementType": 0
                  },
                  {
                    "elementId": "Expression",
                    "elementType": 0
                  }
                ]
              }
            ],
            "trueDecision": [
              {
                "__type": "DecisionAction",
                "condition": {
                  "__type": "ExpressionPredicate",
                  "expression": null,
                  "predicates": [
                    {
                      "__type": "SimplePredicate",
                      "drilldown": false,
                      "leftOperand": {
                        "__type": "PropertyOperand",
                        "propertyName": "PRMethod",
                        "aggregateFunction": 0,
                        "dataSourceAlias": null,
                        "propertyFunction": null,
                        "resolveDisplayProperty": false,
                        "uom": null
                      },
                      "operator": {
                        "__type": "ViewActionOperator",
                        "negate": false,
                        "type": 1
                      },
                      "rightOperand": {
                        "__type": "ValueOperand",
                        "value": "707963a4-910f-46de-b3d1-b1b81c8a2101",
                        "entityType": "ConfgAppSetting_PersRespOptionObject",
                        "text": null
                      }
                    }
                  ]
                },
                "falseDecision": [
                  {
                    "__type": "ClearValueAction",
                    "elements": [
                      {
                        "elementId": "InspRoleOption",
                        "elementType": 0
                      }
                    ]
                  },
                  {
                    "__type": "HideAction",
                    "elements": [
                      {
                        "elementId": "InspRoleOption",
                        "elementType": 0
                      }
                    ]
                  },
                  {
                    "__type": "SetNonMandatoryAction",
                    "elements": [
                      {
                        "elementId": "InspRoleOption",
                        "elementType": 0
                      }
                    ]
                  }
                ],
                "trueDecision": [
                  {
                    "__type": "ShowAction",
                    "elements": [
                      {
                        "elementId": "InspRoleOption",
                        "elementType": 0
                      }
                    ]
                  },
                  {
                    "__type": "SetMandatoryAction",
                    "elements": [
                      {
                        "elementId": "InspRoleOption",
                        "elementType": 0
                      }
                    ]
                  }
                ]
              },
              {
                "__type": "DecisionAction",
                "condition": {
                  "__type": "ExpressionPredicate",
                  "expression": null,
                  "predicates": [
                    {
                      "__type": "SimplePredicate",
                      "drilldown": false,
                      "leftOperand": {
                        "__type": "PropertyOperand",
                        "propertyName": "PRMethod",
                        "aggregateFunction": 0,
                        "dataSourceAlias": null,
                        "propertyFunction": null,
                        "resolveDisplayProperty": false,
                        "uom": null
                      },
                      "operator": {
                        "__type": "ViewActionOperator",
                        "negate": false,
                        "type": 1
                      },
                      "rightOperand": {
                        "__type": "ValueOperand",
                        "value": "e9fbb234-9003-4642-9cca-5fe46b32d814",
                        "entityType": "ConfgAppSetting_PersRespOptionObject",
                        "text": null
                      }
                    }
                  ]
                },
                "falseDecision": [
                  {
                    "__type": "HideAction",
                    "elements": [
                      {
                        "elementId": "Expression",
                        "elementType": 0
                      }
                    ]
                  },
                  {
                    "__type": "SetNonMandatoryAction",
                    "elements": [
                      {
                        "elementId": "Expression",
                        "elementType": 0
                      }
                    ]
                  },
                  {
                    "__type": "ClearValueAction",
                    "elements": [
                      {
                        "elementId": "Expression",
                        "elementType": 0
                      }
                    ]
                  }
                ],
                "trueDecision": [
                  {
                    "__type": "ShowAction",
                    "elements": [
                      {
                        "elementId": "Expression",
                        "elementType": 0
                      }
                    ]
                  },
                  {
                    "__type": "SetMandatoryAction",
                    "elements": [
                      {
                        "elementId": "Expression",
                        "elementType": 0
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "EnabFirstReview"
      },
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "PRMethod"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "hide/show Second Reviewer",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "EnaSecondReview",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "true",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "forSecondReview",
                "elementType": 0
              },
              {
                "elementId": "PRMethodSndRev",
                "elementType": 0
              },
              {
                "elementId": "InspRoleOption2",
                "elementType": 0
              },
              {
                "elementId": "Role2",
                "elementType": 0
              },
              {
                "elementId": "RoleName2",
                "elementType": 0
              },
              {
                "elementId": "Expression2",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "forSecondReview",
                "elementType": 0
              },
              {
                "elementId": "PRMethodSndRev",
                "elementType": 0
              },
              {
                "elementId": "Role2",
                "elementType": 0
              },
              {
                "elementId": "Expression2",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "forSecondReview",
                "elementType": 0
              },
              {
                "elementId": "PRMethodSndRev",
                "elementType": 0
              },
              {
                "elementId": "Role2",
                "elementType": 0
              },
              {
                "elementId": "Expression2",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "forSecondReview",
                "elementType": 0
              },
              {
                "elementId": "PRMethodSndRev",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "forSecondReview",
                "elementType": 0
              },
              {
                "elementId": "PRMethodSndRev",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "DecisionAction",
            "condition": {
              "__type": "ExpressionPredicate",
              "expression": null,
              "predicates": [
                {
                  "__type": "SimplePredicate",
                  "drilldown": false,
                  "leftOperand": {
                    "__type": "PropertyOperand",
                    "propertyName": "PRMethodSndRev",
                    "aggregateFunction": 0,
                    "dataSourceAlias": null,
                    "propertyFunction": null,
                    "resolveDisplayProperty": false,
                    "uom": null
                  },
                  "operator": {
                    "__type": "IsNullOperator",
                    "negate": true
                  },
                  "rightOperand": null
                }
              ]
            },
            "falseDecision": [
              {
                "__type": "HideAction",
                "elements": [
                  {
                    "elementId": "InspRoleOption2",
                    "elementType": 0
                  },
                  {
                    "elementId": "Role2",
                    "elementType": 0
                  },
                  {
                    "elementId": "RoleName2",
                    "elementType": 0
                  },
                  {
                    "elementId": "Expression2",
                    "elementType": 0
                  }
                ]
              },
              {
                "__type": "SetNonMandatoryAction",
                "elements": [
                  {
                    "elementId": "Role2",
                    "elementType": 0
                  },
                  {
                    "elementId": "RoleName2",
                    "elementType": 0
                  },
                  {
                    "elementId": "Expression2",
                    "elementType": 0
                  }
                ]
              },
              {
                "__type": "ClearValueAction",
                "elements": [
                  {
                    "elementId": "InspRoleOption2",
                    "elementType": 0
                  },
                  {
                    "elementId": "Role2",
                    "elementType": 0
                  },
                  {
                    "elementId": "RoleName2",
                    "elementType": 0
                  },
                  {
                    "elementId": "Expression2",
                    "elementType": 0
                  }
                ]
              }
            ],
            "trueDecision": [
              {
                "__type": "DecisionAction",
                "condition": {
                  "__type": "ExpressionPredicate",
                  "expression": null,
                  "predicates": [
                    {
                      "__type": "SimplePredicate",
                      "drilldown": false,
                      "leftOperand": {
                        "__type": "PropertyOperand",
                        "propertyName": "PRMethodSndRev",
                        "aggregateFunction": 0,
                        "dataSourceAlias": null,
                        "propertyFunction": null,
                        "resolveDisplayProperty": false,
                        "uom": null
                      },
                      "operator": {
                        "__type": "ViewActionOperator",
                        "negate": false,
                        "type": 1
                      },
                      "rightOperand": {
                        "__type": "ValueOperand",
                        "value": "707963a4-910f-46de-b3d1-b1b81c8a2101",
                        "entityType": "ConfgAppSetting_PersRespOptionObject",
                        "text": null
                      }
                    }
                  ]
                },
                "falseDecision": [
                  {
                    "__type": "ClearValueAction",
                    "elements": [
                      {
                        "elementId": "InspRoleOption2",
                        "elementType": 0
                      }
                    ]
                  },
                  {
                    "__type": "HideAction",
                    "elements": [
                      {
                        "elementId": "InspRoleOption2",
                        "elementType": 0
                      }
                    ]
                  },
                  {
                    "__type": "SetNonMandatoryAction",
                    "elements": [
                      {
                        "elementId": "InspRoleOption2",
                        "elementType": 0
                      }
                    ]
                  }
                ],
                "trueDecision": [
                  {
                    "__type": "ShowAction",
                    "elements": [
                      {
                        "elementId": "InspRoleOption2",
                        "elementType": 0
                      }
                    ]
                  },
                  {
                    "__type": "SetMandatoryAction",
                    "elements": [
                      {
                        "elementId": "InspRoleOption2",
                        "elementType": 0
                      }
                    ]
                  }
                ]
              },
              {
                "__type": "DecisionAction",
                "condition": {
                  "__type": "ExpressionPredicate",
                  "expression": null,
                  "predicates": [
                    {
                      "__type": "SimplePredicate",
                      "drilldown": false,
                      "leftOperand": {
                        "__type": "PropertyOperand",
                        "propertyName": "PRMethodSndRev",
                        "aggregateFunction": 0,
                        "dataSourceAlias": null,
                        "propertyFunction": null,
                        "resolveDisplayProperty": false,
                        "uom": null
                      },
                      "operator": {
                        "__type": "ViewActionOperator",
                        "negate": false,
                        "type": 1
                      },
                      "rightOperand": {
                        "__type": "ValueOperand",
                        "value": "e9fbb234-9003-4642-9cca-5fe46b32d814",
                        "entityType": "ConfgAppSetting_PersRespOptionObject",
                        "text": null
                      }
                    }
                  ]
                },
                "falseDecision": [
                  {
                    "__type": "HideAction",
                    "elements": [
                      {
                        "elementId": "Expression2",
                        "elementType": 0
                      }
                    ]
                  },
                  {
                    "__type": "SetNonMandatoryAction",
                    "elements": [
                      {
                        "elementId": "Expression2",
                        "elementType": 0
                      }
                    ]
                  },
                  {
                    "__type": "ClearValueAction",
                    "elements": [
                      {
                        "elementId": "Expression2",
                        "elementType": 0
                      }
                    ]
                  }
                ],
                "trueDecision": [
                  {
                    "__type": "ShowAction",
                    "elements": [
                      {
                        "elementId": "Expression2",
                        "elementType": 0
                      }
                    ]
                  },
                  {
                    "__type": "SetMandatoryAction",
                    "elements": [
                      {
                        "elementId": "Expression2",
                        "elementType": 0
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "EnaSecondReview"
      },
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "PRMethodSndRev"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "New/Existing",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "InspRoleOption",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "cfb8cb5f-8a88-4da4-bd5c-d07602f69e0e",
                "entityType": "Insp_InspRoleOptionObject",
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "RoleName",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "RoleName",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "RoleName",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "RoleName",
                "elementType": 0
              }
            ]
          }
        ]
      },
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "InspRoleOption",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "4298e236-b18a-4cfe-90c0-ac1e6906504f",
                "entityType": "Insp_InspRoleOptionObject",
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "Role",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "Role",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "Role",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "Role",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "EnabFirstReview"
      },
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "PRMethod"
      },
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "InspRoleOption"
      }
    ]
  },
  {
    "__type": "AdvancedViewAction",
    "enabled": true,
    "name": "New/Existing Role: Second Review",
    "stageContainers": [],
    "content": "{\n        onPageLoad: true,\n        triggers: ['EnaSecondReview', 'PRMethodSndRev', 'InspRoleOption2'],\n        actions: [{\n                __type: 'decision',\n                condition: function () {\n                        return Intelex.DetailPage.getField('InspRoleOption2').value.eq('cfb8cb5f-8a88-4da4-bd5c-d07602f69e0e');\n                },\n                trueDecision: [{\n                        __type: 'show',\n                        elements: ['RoleName2']\n                }, {\n                        __type: 'setMandatory',\n                        elements: ['RoleName2']\n                }],\n                falseDecision: [{\n                        __type: 'hide',\n                        elements: ['RoleName2']\n                }, {\n                        __type: 'setNonMandatory',\n                        elements: ['RoleName2']\n                }]\n        }, {\n                __type: 'decision',\n                condition: function () {\n                        return Intelex.DetailPage.getField('InspRoleOption2').value.eq('4298e236-b18a-4cfe-90c0-ac1e6906504f');\n                },\n                trueDecision: [{\n                        __type: 'show',\n                        elements: ['Role2']\n                }, {\n                        __type: 'setMandatory',\n                        elements: ['Role2']\n                }],\n                falseDecision: [{\n                        __type: 'hide',\n                        elements: ['Role2']\n                }, {\n                        __type: 'setNonMandatory',\n                        elements: ['Role2']\n                }]\n        }]\n}"
  },
  {
    "__type": "ViewAction",
    "enabled": false,
    "name": "hide/show Second Reviewer",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "EnabFirstReview",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "true",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "EnaSecondReview",
                "elementType": 0
              },
              {
                "elementId": "forSecondReview",
                "elementType": 0
              },
              {
                "elementId": "SecondReviewer",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "EnaSecondReview",
                "elementType": 0
              },
              {
                "elementId": "forSecondReview",
                "elementType": 0
              },
              {
                "elementId": "SecondReviewer",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "EnaSecondReview",
                "elementType": 0
              },
              {
                "elementId": "forSecondReview",
                "elementType": 0
              },
              {
                "elementId": "SecondReviewer",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "EnaSecondReview",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "DecisionAction",
            "condition": {
              "__type": "ExpressionPredicate",
              "expression": null,
              "predicates": [
                {
                  "__type": "SimplePredicate",
                  "drilldown": false,
                  "leftOperand": {
                    "__type": "PropertyOperand",
                    "propertyName": "EnaSecondReview",
                    "aggregateFunction": 0,
                    "dataSourceAlias": null,
                    "propertyFunction": null,
                    "resolveDisplayProperty": false,
                    "uom": null
                  },
                  "operator": {
                    "__type": "ViewActionOperator",
                    "negate": false,
                    "type": 1
                  },
                  "rightOperand": {
                    "__type": "ValueOperand",
                    "value": "true",
                    "entityType": null,
                    "text": null
                  }
                }
              ]
            },
            "falseDecision": [
              {
                "__type": "HideAction",
                "elements": [
                  {
                    "elementId": "forSecondReview",
                    "elementType": 0
                  },
                  {
                    "elementId": "SecondReviewer",
                    "elementType": 0
                  }
                ]
              },
              {
                "__type": "SetNonMandatoryAction",
                "elements": [
                  {
                    "elementId": "forSecondReview",
                    "elementType": 0
                  },
                  {
                    "elementId": "SecondReviewer",
                    "elementType": 0
                  }
                ]
              },
              {
                "__type": "ClearValueAction",
                "elements": [
                  {
                    "elementId": "forSecondReview",
                    "elementType": 0
                  },
                  {
                    "elementId": "SecondReviewer",
                    "elementType": 0
                  }
                ]
              }
            ],
            "trueDecision": [
              {
                "__type": "ShowAction",
                "elements": [
                  {
                    "elementId": "forSecondReview",
                    "elementType": 0
                  },
                  {
                    "elementId": "SecondReviewer",
                    "elementType": 0
                  }
                ]
              },
              {
                "__type": "SetMandatoryAction",
                "elements": [
                  {
                    "elementId": "forSecondReview",
                    "elementType": 0
                  },
                  {
                    "elementId": "SecondReviewer",
                    "elementType": 0
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "EnabFirstReview"
      },
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "EnaSecondReview"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "show/hide equipment",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "EquipmentList",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "IsNullOperator",
                "negate": true
              },
              "rightOperand": null
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "EquipmMandatory",
                "elementType": 0
              },
              {
                "elementId": "ELOptions",
                "elementType": 0
              },
              {
                "elementId": "EquipmentGridSection",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "EquipmMandatory",
                "elementType": 0
              },
              {
                "elementId": "ELOptions",
                "elementType": 0
              },
              {
                "elementId": "EquipmentGridSection",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "EquipmMandatory",
                "elementType": 0
              },
              {
                "elementId": "ELOptions",
                "elementType": 0
              },
              {
                "elementId": "EquipmentGridSection",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "DecisionAction",
            "condition": {
              "__type": "ExpressionPredicate",
              "expression": null,
              "predicates": [
                {
                  "__type": "SimplePredicate",
                  "drilldown": false,
                  "leftOperand": {
                    "__type": "PropertyOperand",
                    "propertyName": "EquipmentList",
                    "aggregateFunction": 0,
                    "dataSourceAlias": null,
                    "propertyFunction": null,
                    "resolveDisplayProperty": false,
                    "uom": null
                  },
                  "operator": {
                    "__type": "ViewActionOperator",
                    "negate": false,
                    "type": 1
                  },
                  "rightOperand": {
                    "__type": "ValueOperand",
                    "value": "true",
                    "entityType": null,
                    "text": null
                  }
                }
              ]
            },
            "falseDecision": [
              {
                "__type": "HideAction",
                "elements": [
                  {
                    "elementId": "EquipmMandatory",
                    "elementType": 0
                  },
                  {
                    "elementId": "ELOptions",
                    "elementType": 0
                  },
                  {
                    "elementId": "EquipmentGridSection",
                    "elementType": 0
                  }
                ]
              },
              {
                "__type": "SetNonMandatoryAction",
                "elements": [
                  {
                    "elementId": "EquipmMandatory",
                    "elementType": 0
                  },
                  {
                    "elementId": "ELOptions",
                    "elementType": 0
                  },
                  {
                    "elementId": "EquipmentGridSection",
                    "elementType": 0
                  }
                ]
              },
              {
                "__type": "ClearValueAction",
                "elements": [
                  {
                    "elementId": "EquipmMandatory",
                    "elementType": 0
                  },
                  {
                    "elementId": "ELOptions",
                    "elementType": 0
                  },
                  {
                    "elementId": "EquipmentGridSection",
                    "elementType": 0
                  }
                ]
              }
            ],
            "trueDecision": [
              {
                "__type": "ShowAction",
                "elements": [
                  {
                    "elementId": "EquipmMandatory",
                    "elementType": 0
                  },
                  {
                    "elementId": "ELOptions",
                    "elementType": 0
                  }
                ]
              },
              {
                "__type": "SetMandatoryAction",
                "elements": [
                  {
                    "elementId": "ELOptions",
                    "elementType": 0
                  }
                ]
              },
              {
                "__type": "DecisionAction",
                "condition": {
                  "__type": "ExpressionPredicate",
                  "expression": null,
                  "predicates": [
                    {
                      "__type": "SimplePredicate",
                      "drilldown": false,
                      "leftOperand": {
                        "__type": "PropertyOperand",
                        "propertyName": "ELOptions",
                        "aggregateFunction": 0,
                        "dataSourceAlias": null,
                        "propertyFunction": null,
                        "resolveDisplayProperty": false,
                        "uom": null
                      },
                      "operator": {
                        "__type": "ViewActionOperator",
                        "negate": false,
                        "type": 1
                      },
                      "rightOperand": {
                        "__type": "ValueOperand",
                        "value": "e5fa5985-2fba-4a6b-a855-5c8aff1d3477",
                        "entityType": "Insp_EquipListOptionObject",
                        "text": null
                      }
                    }
                  ]
                },
                "falseDecision": [
                  {
                    "__type": "HideAction",
                    "elements": [
                      {
                        "elementId": "EquipmentGridSection",
                        "elementType": 0
                      }
                    ]
                  }
                ],
                "trueDecision": [
                  {
                    "__type": "ShowAction",
                    "elements": [
                      {
                        "elementId": "EquipmentGridSection",
                        "elementType": 0
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "EquipmentList"
      },
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "ELOptions"
      }
    ]
  }
]
```

### E1565-Content

Insp_TypeObject.Insp_Type_Detail — Content; stable record ID 38aa707d-811d-454b-9bbd-31c99b6da541. Source $.GraphData.Items[538].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Type of Inspection" Icon="Icons/new/48x48/clipboard_empty.gif" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Reference" Span="true" SpellCheck="false"/><ix:Field For="Name" Span="true" SpellCheck="false"/><ix:Field For="Description" Span="true" SpellCheck="false"/><ix:Field For="Active" Span="true" SpellCheck="false"/><ix:Field For="ComplValidation" Span="true" SpellCheck="false" isMandatory="false"/><ix:Field For="FindingTracking" isMandatory="false"/><ix:Field For="EquipmentList"/><ix:Field For="EquipmMandatory"/><ix:Field For="ELOptions"/></ix:FieldArea><ix:GridPanel Entity="FragApplication_EquipmentObject" ID="EquipmentGridSection" Title="Add Equipment" EditLinkTarget="popup"><Menu><ix:GridCreateActionLink Override="true" Visible="true" runat="server" OpenIn="Popup"/></Menu><Entities><ix:ExcludeEntity name="RefManagementV2_CylinderV2Object"/><ix:ExcludeEntity name="WasteManagement_OnDispSystemObject"/><ix:ExcludeEntity name="WasteManagement_PointGenEquipObject"/><ix:ExcludeEntity name="RefManagementV2_RecoEquipmentV2Object"/><ix:ExcludeEntity name="RefManagementV2_ApplianceV2Object"/></Entities><Columns><ix:Column For="Name" LinkTarget="popup" LinkTo="default"/></Columns></ix:GridPanel><ix:Panel Title="Review Rules" meta:resourcekey="Panel0" ResourceKey="Panel0"><ix:FieldArea Span="true"><ix:Field For="EnabFirstReview" Span="true" SpellCheck="false"/><ix:Field For="FirstReviewer" Span="true" SpellCheck="false" Visible="false"/><ix:Field For="DforFirstReview" Span="true" SpellCheck="false"/><ix:Field For="PRMethod"/><ix:Field For="InspRoleOption"/><ix:Field For="Role"/><ix:Field For="RoleName"/><ix:Field For="Expression"/><ix:Field/><ix:Field For="EnaSecondReview"/><ix:Field Caption="No. of Days for Second Review" For="forSecondReview" meta:resourcekey="Field0" ResourceKey="Field0"/><ix:Field Caption="Method To Determine Person Responsible" For="PRMethodSndRev" meta:resourcekey="Field1" ResourceKey="Field1"/><ix:Field For="InspRoleOption2" Caption="New/Existing Role" meta:resourcekey="Field5" ResourceKey="Field5"/><ix:Field For="Role2" Caption="Role" meta:resourcekey="Field3" ResourceKey="Field3"/><ix:Field For="RoleName2" Caption="Role Name" meta:resourcekey="Field4" ResourceKey="Field4"/><ix:Field Caption="Expression" For="Expression2" meta:resourcekey="Field2" ResourceKey="Field2"/><ix:Field For="SecondReviewer" IsVisible="false"/></ix:FieldArea></ix:Panel></ix:DetailSection><ix:GridSection DisplayMode="Edit,View" For="Checklists" ID="ChecklistsGridSection" RefreshScope="Row"><Sorting><ix:Sort By="Reference" Direction="Ascending"/></Sorting><Columns><ix:Column For="Reference" LinkTo="default"/><ix:Column EditMode="inline" For="Title" RefreshScope="Row"/><ix:Column DisplayAs="Truncate" EditMode="inline" For="Description" RefreshScope="Row"/><ix:Column For="NbQuestions" HorizontalAlign="center"/><ix:Column For="Active" EditMode="Inline"/></Columns></ix:GridSection><ix:TabsSection Title="Questions" Visible="False" Icon="Raven/Icons/BrightBlue_48/questions5.png" DisplayMode="View,Edit" meta:resourcekey="TabsSection0" ResourceKey="TabsSection0"><ix:Tab Caption="Questions" meta:resourcekey="Tab0" ResourceKey="Tab0"><ix:GridSection DisplayMode="Edit,View" EditLinkTarget="popup" For="Questions" ShowHeader="false" ID="QuestionsGridSection" AllowSorting="false"><Menu><ix:GridCreateActionLink Override="true" OpenIn="popup"/></Menu><Actions><ix:MassUpdateAction ViewName="CLF_Quest_MassUpdate"/></Actions><Sorting><ix:Group By="Section"/><ix:Sort By="Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="Section"/></grouping><Columns><ix:Column For="QuestionRef" LinkTo="default" width="5px"/><ix:Column EditMode="inline" For="Content" wrap="true"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="AnswerType" width="5px"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="ChoiceList" width="5px" wrap="true"/><ix:MergeColumn For="AnswerType.Value" Caption="Default Answer" width="5px" meta:resourcekey="MergeColumn2" ResourceKey="MergeColumn2"><MappedColumns><ix:Column MapValue="Choice" For="DefaultChoice" EditMode="inline"/><ix:Column MapValue="Choices" For="DefaultChoices" EditMode="inline"/><ix:Column MapValue="Checkbox" For="DefaultBool" EditMode="inline"/><ix:Column MapValue="Value" For="Field"/></MappedColumns></ix:MergeColumn><ix:Column EditMode="inline" For="ComReqChoices" Caption="Comments Required" FetchAs="Collection" DIsplayAs="Collection" wrap="true" width="5px" meta:resourcekey="Column0" ResourceKey="Column0"/><ix:Column EditMode="inline" For="FindReqChoices" Caption="Finding Required" FetchAs="Collection" DIsplayAs="Collection" wrap="true" width="5px" meta:resourcekey="Column1" ResourceKey="Column1"/><ix:Column EditMode="inline" For="ActReqChoices" Caption="Action Required" FetchAs="Collection" DIsplayAs="Collection" wrap="true" width="5px" meta:resourcekey="Column2" ResourceKey="Column2"/><ix:Column For="AllowNA" DisplayAs="truefalseicon" EditMode="inline" width="5px"/><ix:Column EditMode="inline" For="Order" width="5px"/></Columns></ix:GridSection></ix:Tab><ix:Tab Caption="Conditional Display" meta:resourcekey="Tab1" ResourceKey="Tab1"><ix:Notice Title="Information" Message="Any dependencies set here will apply to all checklists containing the question. Conditional display rules are set on the question itself, not to individual checklists." DisplayMode="Edit,View" meta:resourcekey="Notice0" ResourceKey="Notice0"/><ix:GridSection DisplayMode="Edit,View" DisplayEditColumn="false" For="Questions" ShowHeader="false" ID="ConditionalDisplayGridSection"><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></Menu><Actions><ix:MassUpdateAction ViewName="CLF_Quest_MassUpdate"/></Actions><Sorting><ix:Sort By="Order" Direction="Ascending"/></Sorting><Columns><ix:Column For="QuestionRef" width="5px"/><ix:Column DisplayAs="Truncate" For="Content"/><ix:Column FilterAs="Dropdown" For="ChoiceList" width="5px"/><ix:Column EditMode="inline" For="DependsOn" width="5px"/><ix:MergeColumn Caption="Visible If" For="HasDependsOn" HeaderToolTip="The question will be displayed if the Depends On question is answered with this selection." width="5px" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0"><MappedColumns><ix:Column MapValue="True" EditMode="inline" For="VisibleIfs" FetchAs="Collection" DisplayAs="List" width="5px"/></MappedColumns></ix:MergeColumn><ix:MergeColumn Caption="Visible if no answer" For="HasDependsOn" HeaderToolTip="If YES the question will be visible when the Depends On question is not yet answered." width="5px" meta:resourcekey="MergeColumn1" ResourceKey="MergeColumn1"><MappedColumns><ix:Column MapValue="True" EditMode="inline" For="VisDepNoAns" width="5px"/></MappedColumns></ix:MergeColumn></Columns></ix:GridSection></ix:Tab></ix:TabsSection></ix:DetailPage><style type="text/css">.inline-edit, .popup-edit {
  background-color: #e2f3fa;
  border: 1px dotted #58c3f0 !important;
  }</style>
```

### E1623-ConfigurableViewActions

Insp_EquipInspectionObject.Insp_EquipInspection_Detail — ConfigurableViewActions; stable record ID 3fc38fc7-e0df-4a6e-aeb1-97e890448c48. Source $.GraphData.Items[553].FieldData.ConfigurableViewActions.

```json
[
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Hide Checklist if Checklist Type is empty",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "TypeOfInspec",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "IsNullOperator",
                "negate": false
              },
              "rightOperand": null
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "InspecChecklist",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "InspecChecklist",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "TypeOfInspec"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "show / hide edit mode fields",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "Workflow.Status",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "852639b3-0e97-49e3-a49e-e59bf1d72a44",
                "entityType": "SysWorkflowStatusEntity",
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ReadOnlyInspectionName1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyStartDate1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyPersonResponsible1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyRecurrence1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyInspectionName",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyStartDate",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyPersonResponsible",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyRecurrence",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "EditModeInspectionName1",
                "elementType": 0
              },
              {
                "elementId": "EditModeStartDate1",
                "elementType": 0
              },
              {
                "elementId": "EditModePersonResponsible1",
                "elementType": 0
              },
              {
                "elementId": "EditModeRecurrence1",
                "elementType": 0
              },
              {
                "elementId": "EditModeInspectionName",
                "elementType": 0
              },
              {
                "elementId": "EditModeStartDate",
                "elementType": 0
              },
              {
                "elementId": "EditModePersonResponsible",
                "elementType": 0
              },
              {
                "elementId": "EditModeRecurrence",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ReadOnlyInspectionName1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyStartDate1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyPersonResponsible1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyRecurrence1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyInspectionName",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyStartDate",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyPersonResponsible",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyRecurrence",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "EditModeInspectionName1",
                "elementType": 0
              },
              {
                "elementId": "EditModeStartDate1",
                "elementType": 0
              },
              {
                "elementId": "EditModePersonResponsible1",
                "elementType": 0
              },
              {
                "elementId": "EditModeRecurrence1",
                "elementType": 0
              },
              {
                "elementId": "EditModeInspectionName",
                "elementType": 0
              },
              {
                "elementId": "EditModeStartDate",
                "elementType": 0
              },
              {
                "elementId": "EditModePersonResponsible",
                "elementType": 0
              },
              {
                "elementId": "EditModeRecurrence",
                "elementType": 0
              }
            ]
          }
        ]
      },
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": "A OR B OR C",
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "Workflow.Status",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "3f68fca2-8b89-4583-aa4a-8723be6a96da",
                "entityType": "SysWorkflowStatusEntity",
                "text": null
              }
            },
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "Workflow.Status",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "ec66c7cd-4f0c-472c-b803-afd9e043cf70",
                "entityType": "SysWorkflowStatusEntity",
                "text": null
              }
            },
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "Workflow.Status",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "a5043a84-ecea-4095-8ec1-e592f23960d6",
                "entityType": "SysWorkflowStatusEntity",
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "EditModeInspectionName1",
                "elementType": 0
              },
              {
                "elementId": "EditModeStartDate1",
                "elementType": 0
              },
              {
                "elementId": "EditModePersonResponsible1",
                "elementType": 0
              },
              {
                "elementId": "EditModeRecurrence1",
                "elementType": 0
              },
              {
                "elementId": "EditModeInspectionName",
                "elementType": 0
              },
              {
                "elementId": "EditModeStartDate",
                "elementType": 0
              },
              {
                "elementId": "EditModePersonResponsible",
                "elementType": 0
              },
              {
                "elementId": "EditModeRecurrence",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ReadOnlyInspectionName1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyStartDate1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyPersonResponsible1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyRecurrence1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyInspectionName",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyStartDate",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyPersonResponsible",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyRecurrence",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ReadOnlyInspectionName1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyStartDate1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyPersonResponsible1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyRecurrence1",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyInspectionName",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyStartDate",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyPersonResponsible",
                "elementType": 0
              },
              {
                "elementId": "ReadOnlyRecurrence",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "EditModeInspectionName1",
                "elementType": 0
              },
              {
                "elementId": "EditModeStartDate1",
                "elementType": 0
              },
              {
                "elementId": "EditModePersonResponsible1",
                "elementType": 0
              },
              {
                "elementId": "EditModeRecurrence1",
                "elementType": 0
              },
              {
                "elementId": "EditModeInspectionName",
                "elementType": 0
              },
              {
                "elementId": "EditModeStartDate",
                "elementType": 0
              },
              {
                "elementId": "EditModePersonResponsible",
                "elementType": 0
              },
              {
                "elementId": "EditModeRecurrence",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": []
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "First Reviewer Decision",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "RevieweDecision",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "3e9b4f0b-211a-4c7f-8a05-edb9aa8af8ba",
                "entityType": "Insp_IReviewDecisionObject",
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "RevieweComments",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "RevieweComments",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "RevieweComments",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "RevieweDecision"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Second Review Decision",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "RevieweDecisio1",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "3e9b4f0b-211a-4c7f-8a05-edb9aa8af8ba",
                "entityType": "Insp_IReviewDecisionObject",
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "RevieweComment1",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "RevieweComment1",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "RevieweComment1",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "RevieweDecisio1"
      }
    ]
  }
]
```

### E1623-Content

Insp_EquipInspectionObject.Insp_EquipInspection_Detail — Content; stable record ID 3fc38fc7-e0df-4a6e-aeb1-97e890448c48. Source $.GraphData.Items[553].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar"><ix:SaveAddNewActionLink Override="true" Visible="false"/><ix:SaveAddNewActionLink Override="true" Visible="false"/><ix:SaveActionLink Override="true" DisplayMode="Edit"/><ix:SaveExitActionLink Override="true" Visible="false"/><ix:CancelActionLink Override="true" DisplayMode="Edit"/><ix:CancelActionLink Override="false" DisplayMode="create"/><ix:SpellCheckActionLink Override="true" Visible="false"/><ix:CloneActionLink Override="true" Visible="false"/><ix:DeleteActionLink Override="true" Visible="false"/><ix:AddEntryActionLink Override="true" Visible="false"/></ix:DetailPageMenuBar><ix:DetailSection Title="Hidden Fields" Visible="false" meta:resourcekey="DetailSection3" ResourceKey="DetailSection3"><ix:FieldArea><ix:Field For="Workflow.CurrentStage.Name"/><ix:Field For="Workflow.Status.Name"/><ix:Field For="Workflow.WorkflowStatus"/><ix:Field For="HelperLocatio2"/><ix:Field For="FApprovalFields"/><ix:Field For="SApprovalFields"/><ix:Field For="ReleActionPlans"/><ix:Field For="HelpeIsComplete"/><ix:Field For="IPCreate.InstruPanelCode"/><ix:Field For="IPDraft.InstruPanelCode"/><ix:Field For="IPInProgress.InstruPanelCode"/><ix:Field For="IPReview.InstruPanelCode"/><ix:Field For="TypeOfInspec.FindingTracking"/><ix:Field For="InspecChecklist.Checklist.EnableScoring"/></ix:FieldArea></ix:DetailSection><ix:StageContainer UseDefaultDuringCreate="true" ID="StageContainer_452ae9"><%= Model.IPCreate != null ? Model.IPCreate.InstruPanelCode : "" %></ix:StageContainer><ix:StageContainer VisibleFor="Draft" ID="StageContainer_7e9c25"><%= Model.IPDraft != null ? Model.IPDraft.InstruPanelCode : "" %></ix:StageContainer><ix:StageContainer VisibleFor="InspectioninProgress" ID="StageContainer_da4ecf"><%= Model.IPInProgress != null ? Model.IPInProgress.InstruPanelCode : "" %></ix:StageContainer><ix:StageContainer VisibleFor="ActionsPending" ID="StageContainer_da4ece"><%= Model.IPReview != null ? Model.IPReview.InstruPanelCode : "" %></ix:StageContainer><ix:StageContainer VisibleFor="SecondReview" ID="StageContainer_da4ecg"><%= Model.IPReview2 != null ? Model.IPReview2.InstruPanelCode : "" %></ix:StageContainer><ix:StageContainer UseDefaultDuringCreate="false" UseDefaultWhenCompleted="True" VisibleFor="*" ID="StageContainer_452ae0"><% if (Model.InspecChecklist.Checklist.EnableScoring == true) { %><ix:DetailSection Title="Inspection Summary" CSSClass="InspectionScoreSection" DisplayMode="View,Edit" Icon="Raven/Icons/BrightBlue_48/clipboard45.png" meta:resourcekey="DetailSection4" ResourceKey="DetailSection4"><ix:FieldArea Span="true"><ix:Field CaptionPosition="Hidden" For="PointsAwarded"><DisplayTemplate><div class="score-card score-card--points"><div class="score-card__value"><%# ViewData.Eval("PointsAwarded") %></div><div class="score-card__caption">Points Awarded</div></div></DisplayTemplate></ix:Field><ix:Field CaptionPosition="Hidden" For="MaxPoints"><DisplayTemplate><div class="score-card score-card--maximum"><div class="score-card__value"><%# ViewData.Eval("MaxPoints") %></div><div class="score-card__caption">Maximum Points</div></div></DisplayTemplate></ix:Field><ix:Field CaptionPosition="Hidden" For="Score"><DisplayTemplate><div class="score-card score-card--score"><div class="score-card__value"><%# String.Format("{0:P0}", ViewData.Eval("Score")) %></div><div class="score-card__caption">Inspection Score</div></div></DisplayTemplate></ix:Field></ix:FieldArea><style>.InspectionScoreSection .field-area {
      display: flex;
      gap: 16px;
      align-items: stretch;
    }

    .InspectionScoreSection .fieldarea-row {
      flex: 1 1 0;
      width: auto !important;
      margin: 0 !important;
    }

    .InspectionScoreSection .fieldarea-field {
      width: 100% !important;
      height: 100%;
    }
    .InspectionScoreSection .content {
      padding: 0px!important;
    }
    .InspectionScoreSection .header {
      display:none;
    }
    .score-card {
      box-sizing: border-box;
      height: 100%;
      min-height: 125px;
      padding: 22px 16px;

      background: #fff;
      border: 1px solid #d9e1e8;
      border-top: 5px solid #64748b;
      border-radius: 6px;

      text-align: center;
      box-shadow: 0 2px 5px rgba(30, 50, 70, 0.08);
    }

    .score-card--points {
      border-top-color: #2583c5;
    }

    .score-card--maximum {
      border-top-color: #64748b;
    }

    .score-card--score {
      color: #fff;
      background: #176fa8;
      border-color: #176fa8;
      border-top-color: #0f4f7b;
    }

    .score-card__value {
      font-size: 34px;
      font-weight: 700;
      line-height: 1.1;
    }

    .score-card__caption {
      margin-top: 8px;
      color: #64748b;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .score-card--score .score-card__caption {
      color: #e6f4ff;
    }

@media (max-width: 700px) {
  .InspectionScoreSection .field-area {
    flex-direction: column;
    gap: 2px !important;
  }

  .InspectionScoreSection .fieldarea-row {
    flex: 0 0 auto;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    height:44px!important;
  }

  .InspectionScoreSection .fieldarea-field {
    height: auto !important;
    min-height: 0 !important;
    margin: 0 !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .score-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: auto;
    min-height: 0;
    margin: 0;
    padding: 8px 12px;

    border-top-width: 1px;
    border-left-width: 5px;
    border-radius: 3px;
    box-shadow: none;
  }

  .score-card--points {
    border-left-color: #2583c5;
  }

  .score-card--maximum {
    border-left-color: #64748b;
  }

  .score-card--score {
    border-left-color: #0f4f7b;
  }

  .score-card__value {
    flex: 0 0 auto;
    font-size: 24px;
    line-height: 1;
  }

  .score-card__caption {
    margin: 0 0 0 12px;
    font-size: 11px;
    line-height: 1.2;
    text-align: right;
  }
        }</style></ix:DetailSection><%}%></ix:StageContainer><%------------------------------------------------------------------------------------------------%>
    <%------------------------Stage Container: Review Decisions---------------------------------------%>
    <%------------------------------------------------------------------------------------------------%>
<% if (ViewData.Eval("FApprovalFields").ToString().Equals("1")) { %><ix:DetailSection Title="Reviewer Comments" CSSClass="ReviewerCommentsSection" meta:resourcekey="DetailSection6" ResourceKey="DetailSection6"><ix:FieldArea><ix:Field For="RevieweDecision" ReadOnly="TRUE" Span="true" SpellCheck="false"/><ix:Field For="RevieweComments" ReadOnly="TRUE" Span="true" SpellCheck="false"/></ix:FieldArea><ix:FieldArea Span="true"><ix:Field For="CommetoReviewer"/></ix:FieldArea></ix:DetailSection><%   } %>
      <% if (ViewData.Eval("SApprovalFields").ToString().Equals("1")) { %><ix:DetailSection Title="Second Reviewer Comments" CSSClass="ReviewerCommentsSection" meta:resourcekey="DetailSection9" ResourceKey="DetailSection9"><ix:FieldArea><ix:Field For="RevieweDecisio1" ReadOnly="true" Span="true" SpellCheck="false"/><ix:Field For="RevieweComment1" ReadOnly="true" Span="true" SpellCheck="false"/></ix:FieldArea><ix:FieldArea Span="true"><ix:Field For="CommtoReviewer2" Caption="Additional Comments to Reviewer" meta:resourcekey="Field0" ResourceKey="Field0"/></ix:FieldArea></ix:DetailSection><%   } %><style>.ReviewerCommentsSection * {
  background-color:#ffc9c9!important;

  }
  .ReviewerCommentsSection {
    border: 1px solid #ff8282;
  box-sizing:border-box;
  border-left-width:6px;
  border-left-color:#7c0101;
  border-radius:4px;
  padding-left:6px;
  padding-right:6px;
    background-color:#ffc9c9!important;

  }
   .ReviewerCommentsSection .footer {
   display:none;
   }
  .panel-wrapper .header  {
  width:calc(100% - 30px)!important;
  }
  
  #CommetoReviewer {
  background-color:white!important;
      }</style><%------------------------------------------------------------------------------------------------%>
    <%----------------------------Stage Container: Create---------------------------------------------%>
    <%------------------------------------------------------------------------------------------------%><ix:StageContainer UseDefaultDuringCreate="true" ID="StageContainer_4c6e6d"><ix:DetailSection Title="Inspection" CSSClass="Draft" Icon="Icons/new/48x48/clipboard_empty.gif" ModernIcon="Raven/Icons/BrightBlue_48/magnifying-glass32.png" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field DisplayMode="View, Edit" For="RecordNo"/><ix:Field DisplayMode="Create" EditAs="EntitySelector" For="Location" SpellCheck="false"/><ix:Field DisplayAs="Label" DisplayMode="View, Edit" For="Location" Readonly="true"/></ix:FieldArea><ix:FieldArea Span="true"><ix:Field DisplayMode="Create" EditAs="TextBox" For="Name" SpellCheck="false" ToolTipText="will be automatically generated if left empty" Visible="false" meta:resourcekey="Field3" ResourceKey="Field3"/><ix:Field DisplayMode="View, Edit" EditAs="TextBox" For="Name" ID="EditModeInspectionName1" IsMandatory="true" SpellCheck="false" Visible="false"/><ix:Field DisplayMode="View, Edit" EditAs="TextBox" For="Name" ID="ReadOnlyInspectionName1" ReadOnly="True" Visible="false"/><ix:Field DisplayMode="View,Edit" Span="true"/><ix:Field DisplayMode="Create" For="TypeOfInspec" ID="TypeOfInspecC" SpellCheck="false"/><ix:Field DisplayMode="View, Edit" For="TypeOfInspec" ID="TypeOfInspecE" Readonly="True"/><ix:Field DisplayMode="Create" For="Equipment" ID="EquipmentRelationC"/><ix:Field DisplayMode="Create" For="EquipmentTxt" ID="EquipmentTextC"/><ix:Field DisplayMode="View,Edit" For="Equipment" ID="EquipmentRelationE"/><ix:Field DisplayMode="View,Edit" For="EquipmentTxt" ID="EquipmentTextE"/><ix:Field DisplayMode="Create" For="InspecChecklist" isMandatory="True"/><ix:Field DisplayMode="View, Edit" For="InspecChecklist" ReadOnly="true"/><ix:Field DisplayMode="View,Edit" Span="true"/><ix:Field For="InspectionDate" ID="EditModeStartDate1"/><ix:Field For="InspectionDate" ID="ReadOnlyStartDate1" ReadOnly="true"/><ix:Field Caption="Inspector" For="PersResponsible" ID="EditModePersonResponsible1" meta:resourcekey="Field4" ResourceKey="Field4"/><ix:Field Caption="Inspector" For="PersResponsible" ID="ReadOnlyPersonResponsible1" ReadOnly="true" meta:resourcekey="Field5" ResourceKey="Field5"/><ix:Field DisplayMode="View,Edit" Span="true"/><ix:Field Caption="Frequency" DisplayAs="Recurrence" EditAs="Recurrence" For="Workflow.RecurringSeries.Frequency" ID="EditModeRecurrence1" SpellCheck="false" Visible="false" meta:resourcekey="Field1" ResourceKey="Field1"/><ix:Field Caption="Frequency" DisplayAs="Recurrence" For="Workflow.RecurringSeries.Frequency" ID="ReadOnlyRecurrence1" ReadOnly="true" Visible="false" meta:resourcekey="Field2" ResourceKey="Field2"/><ix:Field For="Workflow.Status" IsVisible="false"/></ix:FieldArea></ix:DetailSection></ix:StageContainer><%------------------------------------------------------------------------------------------------%>
    <%-----------------------------Stage Container: All Stages----------------------------------------%>
    <%------------------------------------------------------------------------------------------------%><ix:StageContainer VisibleFor="*" UseDefaultWhenCompleted="true" ID="StageContainer_InProgress1"><ix:DetailSection Title="Inspection" CSSClass="Draft" Icon="Icons/new/48x48/clipboard_empty.gif" ModernIcon="Raven/Icons/BrightBlue_48/magnifying-glass32.png" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field DisplayMode="View, Edit" For="RecordNo"/><ix:Field DisplayMode="Create" EditAs="EntitySelector" For="Location" SpellCheck="false"/><ix:Field DisplayAs="Label" DisplayMode="View, Edit" For="Location" Readonly="true"/></ix:FieldArea><% if(ApplicationSettings.Get<string>("Insp_TypeObject", "ELOptions.Name", "default") == "Library") { %>
        <% if(ApplicationSettings.Get<bool>("Insp_TypeObject", "EquipmMandatory", false)) { %><ix:FieldArea><ix:Field DisplayMode="Create, Edit" For="Equipment" IsMandatory="true" SpellCheck="false"/><ix:Field DisplayMode="View" For="Equipment" IsMandatory="true" ReadOnly="true" SpellCheck="false"/></ix:FieldArea><% } %>
        <% else {%><ix:FieldArea><ix:Field DisplayMode="Create, Edit" For="Equipment" SpellCheck="false"/><ix:Field DisplayMode="View" For="Equipment" ReadOnly="true" SpellCheck="false"/></ix:FieldArea><% } %>
        <% } %>
        <% if(ApplicationSettings.Get<string>("Insp_TypeObject", "ELOptions.Name", "default") == "Text") { %>
        <% if(ApplicationSettings.Get<bool>("Insp_TypeObject", "EquipmMandatory", false)) { %><ix:FieldArea><ix:Field DisplayMode="Create, Edit" For="EquipmentTxt" IsMandatory="true" SpellCheck="false"/><ix:Field DisplayMode="View" For="EquipmentTxt" IsMandatory="true" ReadOnly="true" SpellCheck="false"/></ix:FieldArea><% } %>
        <% else {%><ix:FieldArea><ix:Field DisplayMode="Create, Edit" For="EquipmentTxt" SpellCheck="false"/><ix:Field DisplayMode="View" For="EquipmentTxt" ReadOnly="true" SpellCheck="false"/></ix:FieldArea><% } %>
        <% } %><ix:FieldArea><ix:Field DisplayMode="Create" EditAs="TextBox" For="Name" SpellCheck="false" ToolTipText="will be automatically generated if left empty" Visible="false" meta:resourcekey="Field3" ResourceKey="Field3"/><ix:Field DisplayMode="View, Edit" EditAs="TextBox" For="Name" ID="EditModeInspectionName2" IsMandatory="true" SpellCheck="false" Visible="false"/><ix:Field DisplayMode="View, Edit" EditAs="TextBox" For="Name" ID="ReadOnlyInspectionName2" ReadOnly="True" Visible="false"/><ix:Field DisplayMode="Create" For="TypeOfInspec" SpellCheck="false"/><ix:Field DisplayMode="View, Edit" For="TypeOfInspec" Readonly="True"/><ix:Field DisplayMode="Create" For="InspecChecklist" isMandatory="True"/><ix:Field DisplayMode="View, Edit" For="InspecChecklist" ReadOnly="true"/><ix:Field For="InspectionDate" ID="EditModeStartDate"/><ix:Field Caption="Inspector" For="PersResponsible" ID="EditModePersonResponsible" meta:resourcekey="Field4" ResourceKey="Field4"/><ix:Field Caption="Frequency" DisplayAs="Recurrence" EditAs="Recurrence" For="Workflow.RecurringSeries.Frequency" ID="EditModeRecurrence" SpellCheck="false" Visible="false" meta:resourcekey="Field1" ResourceKey="Field1"/><ix:Field Caption="Frequency" DisplayAs="Recurrence" For="Workflow.RecurringSeries.Frequency" ID="ReadOnlyRecurrence" ReadOnly="true" Visible="false" meta:resourcekey="Field2" ResourceKey="Field2"/><ix:Field For="Workflow.Status" IsVisible="false"/></ix:FieldArea><% if(ApplicationSettings.Get<string>("Insp_TypeObject", "MethodPR.Name", "default") == "Specific Person") { %><ix:FieldArea><ix:Field DisplayMode="Create, Edit" For="Reviewer" IsMandatory="true"/><ix:Field DisplayMode="View" For="Reviewer" ReadOnly="true"/></ix:FieldArea><% } %><style>.<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .content {
          background-color: none !important;
          border: none !important;
          background: none !important;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .main {
          margin: 0 0 !important;
          border: none !important;
          background: none !important;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .left {
          display: none;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .right {
          display: none;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  {
          background-color: #C1ECFA !important;
          border-color: #719CAA;
          border-width: 1px;
          border-style: solid;
          border-radius: 1px;
          padding-left: 5px;
          padding-right: 5px;
          padding-bottom: 10px;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  .datagrid_footer {
          background-color: #C1ECFA !important;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  .header {
          background-color: #C1ECFA !important;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  .header-filter {
          background-color: #C1ECFA !important;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  .links_container {
          background-color: #C1ECFA !important;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  .filterBox {
          background-color: #C1ECFA !important;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  .textarea {
          background-color: #C1ECFA !important;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  .data_row {
          background-color: #C1ECFA !important;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> textarea {
          background-color: #C1ECFA !important;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .medium-textbox{
          background-color: #C1ECFA !important;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .datePickerControl{
          background-color: #C1ECFA !important;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .time-picker-TextBox{
          background-color: #C1ECFA !important;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .entityselector-value{
          background-color: #C1ECFA !important;
          }
          .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> input[type=radio]{
          background-color: #C1ECFA !important;
            }</style></ix:DetailSection></ix:StageContainer><%------------------------------------------------------------------------------------------------%>
    <%--------------------------------Stage Container: Draft------------------------------------------%>
    <%------------------------------------------------------------------------------------------------%><ix:StageContainer VisibleFor="Draft" ID="StageContainer_Draft"><ix:GridSection AllowSorting="false" DisplayEditColumn="false" For="QuestionAnswers" HideGroupAddButton="true" ID="QuestionAnswersGridSection_Config" ModernIcon="Raven/Icons/BrightBlue_48/hammer47.png" Title="Checklist Configuration" meta:resourcekey="GridSection1" ResourceKey="GridSection1"><menu><ix:GridCreateActionLink Override="true" For="PubQuestion" Caption="Select Questions" LinkTo="Insp_PubQuestion_Select/Index" DefaultPageSize="300" meta:resourcekey="GridCreateActionLink0" ResourceKey="GridCreateActionLink0"/></menu><Sorting><ix:Sort By="SectionAnswer.Sort" Direction="Ascending"/><ix:Sort By="PubQuestion.AbsoluteOrder" Direction="Ascending"/></Sorting><grouping><ix:Group By="PubQuestion.Section" HeaderCaption="Section"/></grouping><aliases><ix:Alias For="PubQuestion.QuestionRef"/><ix:Alias For="PubQuestion.Guideline"/></aliases><Columns><ix:TemplateColumn For="PubQuestion.Content" Width="1"><Template><span style="font-weight:normal;"><%# Container.ViewData.Eval("PubQuestion.Content") %></span><div class="fieldHint"><%# Container.ViewData.Eval("PubQuestion.Guideline") %></div></Template></ix:TemplateColumn><ix:Column DisplayAs="List" FetchAs="Collection" For="PubQuestion.Question.References" Visible="false"/></Columns></ix:GridSection></ix:StageContainer><%-- 
	Stage Container: InspectioninProgress 

--%>
    <%------------------------------------------------------------------------------------------------%>
    <%-----------------------------Stage Container: In Progress---------------------------------------%>
    <%------------------------------------------------------------------------------------------------%><ix:StageContainer VisibleFor="InspectioninProgress" ID="StageContainer_InProgress"><ix:Fragment Name="Insp_EquipInspection_Frag_QuestionAnswer"/><% if ((bool)ViewData.Eval("TypeOfInspec.FindingTracking")) { %>
      <%----------------------------FINDINGS SOLO GRID---------------------------------------%><ix:GridSection EditLinkTarget="popup" For="Findings" ID="FindingsGridSection_InProgess" ModernIcon="Raven/Icons/BrightBlue_48/alert.png" RefreshScope="Row" Title="Finding Summary" meta:resourcekey="GridSection2" ResourceKey="GridSection2"><menu><ix:GridCreateActionLink Override="true" Visible="true" OpenIn="popup"/><ix:GridListAllActionLink Override="true" Caption="Refresh" meta:resourcekey="GridListAllActionLink0" ResourceKey="GridListAllActionLink0"/></menu><Sorting><ix:Sort By="RecordNo" Direction="Ascending"/></Sorting><aliases><ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/><ix:Alias For="Severity.TextColor.Value" Name="TC"/><ix:Alias For="Severity.CSS" Name="CSS"/><ix:Alias For="FindingStatus"/><ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/><ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/></aliases><Columns><ix:Column For="RecordNo" LinkTo="default"/><ix:Column DisplayAs="Truncate" EditMode="popup" For="Description" RefreshScope="Row"/><ix:TemplateColumn For="Severity" Visible="false" FilterAs="Dropdown" EditMode="inline" RefreshScope="Row"><template><div style="background-color:<%# Container.ViewData.Eval("BC") %>;color:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>"><%# Container.ViewData.Eval("Severity") %></div></template></ix:TemplateColumn><ix:Column Caption="Suggested Action Plan" EditMode="inline" For="ImmediateAction" RefreshScope="Row" meta:resourcekey="Column2" ResourceKey="Column2"/><ix:Column EditMode="inline" For="ResponseDue" Format="d" RefreshScope="Row"/><ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center"><Template><div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>"><%# Container.ViewData.Eval("FindingStatus") %></div></Template></ix:TemplateColumn><ix:MergeColumn Caption="Add Actions" For="FindingStatus.Code" HorizontalAlign="center" meta:resourcekey="MergeColumn2" ResourceKey="MergeColumn2"><MappedColumns><ix:TemplateColumn For="NbAPs" MapValue="Open"><Template><a style="text-decoration:none;" title="Close Finding without Action Plan" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Finding_CloseFinding/Edit/<%# Container.ViewData.Eval("Id") %>"><img src="<%= ImageHelper.GetStaticPath("Icons/new/48x48/error.gif") %>"/></a><a title="Create &amp; Attach a new Action" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_InsActionPlan_Detail/Create?RelatedEvent=<%# Model.Id %>&amp;RelatedId=<%# Container.ViewData.Eval("Id") %>&amp;RelatedPath=CLF_FindingObject.AbsCorActPlan"><img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/></a></Template></ix:TemplateColumn><ix:TemplateColumn For="NbAPs" MapValue="In Progress"><Template><a title="Create &amp; Attach a new Action" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_InsActionPlan_Detail/Create?RelatedEvent=<%# Model.Id %>&amp;RelatedId=<%# Container.ViewData.Eval("Id") %>&amp;RelatedPath=CLF_FindingObject.AbsCorActPlan"><img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/></a></Template></ix:TemplateColumn><ix:TemplateColumn For="NbAPs" MapValue="Closed without Action"><Template><a title="Re-open Finding" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Finding_CloseFinding/Edit/<%# Container.ViewData.Eval("Id") %>"><img src="<%= ImageHelper.GetStaticPath("Icons/new/48x48/error.gif") %>"/></a></Template></ix:TemplateColumn></MappedColumns></ix:MergeColumn><ix:MergeColumn Caption="Actions" For="FindingStatus.Code" meta:resourcekey="MergeColumn3" ResourceKey="MergeColumn3"><MappedColumns><ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="AbsCorActPlan" MapValue="In Progress"/><ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="AbsCorActPlan" MapValue="Closed"/><ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="AbsCorActPlan" MapValue="Open"/><ix:Column EditMode="popup" For="ManCloseCom" MapValue="Closed without Action"/></MappedColumns></ix:MergeColumn></Columns></ix:GridSection><%}%>
      <% if (true) { %>
      <%----------------------------ACTION PLANS SOLO GRID---------------------------------------%><ix:GridSection For="ActionPlanAbst" ID="ActionPlansGridSection_InProgess" ModernIcon="Raven/Icons/BrightBlue_48/fast44.png" RefreshScope="Row" Title="Action Plan Summary" Visible="true" meta:resourcekey="GridSection5" ResourceKey="GridSection5"><Entities><ix:IncludeEntity name="CLF_InsActionPlanObject"/></Entities><menu><ix:GridListAllActionLink Override="true" Caption="Refresh" meta:resourcekey="GridListAllActionLink1" ResourceKey="GridListAllActionLink1"/></menu><Sorting><ix:Sort By="ActionNo" Direction="Ascending"/></Sorting><Columns><ix:Column For="ActionNo" LinkTo="default"/><ix:Column DisplayAs="Truncate" For="CPARActionReq"/><ix:Column For="CPARTypeID"/><ix:Column DisplayAs="Label" For="Workflow.PersonResponsible"/><ix:Column For="Workflow.DueDate" Format="d"/><ix:Column For="CompletedBy"/><ix:Column FOrmat="d" For="CompletionDate"/><ix:Column For="Workflow.Status"/></Columns></ix:GridSection><%}%></ix:StageContainer><%------------------------------------------------------------------------------------------------%>
    <%-----------------------------Stage Container: First Review--------------------------------------%>
    <%------------------------------------------------------------------------------------------------%><ix:StageContainer VisibleFor="ActionsPending" ID="StageContainer_PendingActions"><%-----------------------------GRID WITH FINDINGS---------------------------------------%><ix:Fragment Name="Insp_EquipInspection_Frag_QuestionAnswer"/><% if ((bool)ViewData.Eval("TypeOfInspec.FindingTracking")) { %>
        <%-----------------------------FINDINGS SOLO GRID---------------------------------------%><ix:GridSection DisplayEditColumn="false" For="Findings" ID="FindingsGridSection_PendingActions" ModernIcon="Raven/Icons/BrightBlue_48/alert.png" Title="Finding Summary" Visible="true" meta:resourcekey="GridSection4" ResourceKey="GridSection4"><menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></menu><Sorting><ix:Sort By="RecordNo" Direction="Ascending"/></Sorting><aliases><ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/><ix:Alias For="Severity.TextColor.Value" Name="TC"/><ix:Alias For="Severity.CSS" Name="CSS"/><ix:Alias For="FindingStatus"/><ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/><ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/></aliases><Columns><ix:Column For="RecordNo" LinkTarget="popup" LinkTo="CLF_Finding_Detail_Readonly/View?entityId={#id}"/><ix:Column DisplayAs="Truncate" For="Description"/><ix:TemplateColumn For="Severity" Visible="false" FilterAs="Dropdown"><template><div style="background-color:<%# Container.ViewData.Eval("BC") %>;color:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>"><%# Container.ViewData.Eval("Severity") %></div></template></ix:TemplateColumn><ix:Column Caption="Suggested Action Plan" For="ImmediateAction" meta:resourcekey="Column5" ResourceKey="Column5"/><ix:Column For="ResponseDue" Format="d"/><ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center" MapValue="True"><Template><div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>"><%# Container.ViewData.Eval("FindingStatus") %></div></Template></ix:TemplateColumn><ix:MergeColumn Caption="Add Actions" For="FindingStatus.Code" HorizontalAlign="center" meta:resourcekey="MergeColumn4" ResourceKey="MergeColumn4"><MappedColumns><ix:TemplateColumn For="NbAPs" MapValue="Open"><Template><a style="text-decoration:none;" title="Close Finding without Action Plan" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Finding_CloseFinding/Edit/<%# Container.ViewData.Eval("Id") %>"><img src="<%= ImageHelper.GetStaticPath("Icons/new/48x48/error.gif") %>"/></a><a title="Create &amp; Attach a new Action" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_InsActionPlan_Detail/Create?RelatedEvent=<%# Model.Id %>&amp;RelatedId=<%# Container.ViewData.Eval("Id") %>&amp;RelatedPath=CLF_FindingObject.AbsCorActPlan"><img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/></a></Template></ix:TemplateColumn><ix:TemplateColumn For="NbAPs" MapValue="In Progress"><Template><a title="Create &amp; Attach a new Action" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_InsActionPlan_Detail/Create?RelatedEvent=<%# Model.Id %>&amp;RelatedId=<%# Container.ViewData.Eval("Id") %>&amp;RelatedPath=CLF_FindingObject.AbsCorActPlan"><img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/></a></Template></ix:TemplateColumn><ix:TemplateColumn For="NbAPs" MapValue="Closed without Action"><Template><a title="Re-open Finding" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Finding_CloseFinding/Edit/<%# Container.ViewData.Eval("Id") %>"><img src="<%= ImageHelper.GetStaticPath("Icons/new/48x48/error.gif") %>"/></a></Template></ix:TemplateColumn></MappedColumns></ix:MergeColumn><ix:MergeColumn Caption="Actions" For="FindingStatus.Code" meta:resourcekey="MergeColumn5" ResourceKey="MergeColumn5"><MappedColumns><ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="AbsCorActPlan" MapValue="In Progress"/><ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="AbsCorActPlan" MapValue="Closed"/><ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="AbsCorActPlan" MapValue="Open"/><ix:Column EditMode="popup" For="ManCloseCom" MapValue="Closed without Action"/></MappedColumns></ix:MergeColumn></Columns></ix:GridSection><%}%>
      <% if (true) { %>
        <%-----------------------------ACTION PLAN SOLO GRID---------------------------------------%><ix:GridSection For="ActionPlanAbst" ID="ActionPlansGridSection_PendingActions" ModernIcon="Raven/Icons/BrightBlue_48/fast44.png" RefreshScope="Row" Title="Action Plan Summary" meta:resourcekey="GridSection6" ResourceKey="GridSection6"><Entities><ix:IncludeEntity name="CLF_InsActionPlanObject"/></Entities><menu><ix:GridCreateActionLink Override="true" OpenIn="popup"/><ix:GridListAllActionLink Override="true" Caption="Refresh" meta:resourcekey="GridListAllActionLink2" ResourceKey="GridListAllActionLink2"/></menu><Sorting><ix:Sort By="ActionNo" Direction="Ascending"/></Sorting><Columns><ix:Column For="ActionNo" LinkTo="default"/><ix:Column DisplayAs="Truncate" For="CPARActionReq"/><ix:Column FilterAs="dropdown" For="CPARTypeID"/><ix:Column DisplayAs="Label" For="Workflow.PersonResponsible"/><ix:Column FOrmat="d" For="Workflow.DueDate"/><ix:Column For="CompletedBy"/><ix:Column FOrmat="d" For="CompletionDate"/><ix:Column For="Workflow.Status"/></Columns></ix:GridSection><%}%>
        <%-----------------------------REVIEW DECISION---------------------------------------%><ix:DetailSection Title="Reviewer Decision" CSSClass="ActionsPending" meta:resourcekey="DetailSection1" ResourceKey="DetailSection1"><ix:FieldArea><ix:Field For="RevieweDecision" IsMandatory="TRUE" Span="true" SpellCheck="false"/><ix:Field For="RevieweComments" Span="true" SpellCheck="false"/></ix:FieldArea></ix:DetailSection></ix:StageContainer><%-- 
	Stage Container: "SecondReview"

--%>
      <%------------------------------------------------------------------------------------------------%>
      <%-----------------------------Stage Container: Second Review---------------------------------------%>
      <%------------------------------------------------------------------------------------------------%><ix:StageContainer VisibleFor="SecondReview" ID="StageContainer_SecondReview"><ix:Fragment Name="Insp_EquipInspection_Frag_QuestionAnswer"/><% if ((bool)ViewData.Eval("TypeOfInspec.FindingTracking")) { %>
        <%-----------------------------FINDINGS SOLO GRID---------------------------------------%><ix:GridSection DisplayEditColumn="false" For="Findings" ID="FindingsGridSection_PendingAction2" ModernIcon="Raven/Icons/BrightBlue_48/alert.png" Title="Finding Summary" Visible="false" meta:resourcekey="GridSection4" ResourceKey="GridSection4"><menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></menu><Sorting><ix:Sort By="RecordNo" Direction="Ascending"/></Sorting><aliases><ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/><ix:Alias For="Severity.TextColor.Value" Name="TC"/><ix:Alias For="Severity.CSS" Name="CSS"/><ix:Alias For="FindingStatus"/><ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/><ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/></aliases><Columns><ix:Column For="RecordNo" LinkTarget="popup" LinkTo="CLF_Finding_Detail_Readonly/View?entityId={#id}"/><ix:Column DisplayAs="Truncate" For="Description"/><ix:TemplateColumn For="Severity" FilterAs="Dropdown"><template><div style="background-color:<%# Container.ViewData.Eval("BC") %>;color:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>"><%# Container.ViewData.Eval("Severity") %></div></template></ix:TemplateColumn><ix:Column Caption="Suggested Action Plan" For="ImmediateAction" meta:resourcekey="Column5" ResourceKey="Column5"/><ix:Column For="ResponseDue" Format="d"/><ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center" MapValue="True"><Template><div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>"><%# Container.ViewData.Eval("FindingStatus") %></div></Template></ix:TemplateColumn><ix:MergeColumn Caption="Add Actions" For="FindingStatus.Code" HorizontalAlign="center" meta:resourcekey="MergeColumn4" ResourceKey="MergeColumn4"><MappedColumns><ix:TemplateColumn For="NbAPs" MapValue="Open"><Template><a style="text-decoration:none;" title="Close Finding without Action Plan" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Finding_CloseFinding/Edit/<%# Container.ViewData.Eval("Id") %>"><img src="<%= ImageHelper.GetStaticPath("Icons/new/48x48/error.gif") %>"/></a><a title="Create &amp; Attach a new Action" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_InsActionPlan_Detail/Create?RelatedEvent=<%# Model.Id %>&amp;RelatedId=<%# Container.ViewData.Eval("Id") %>&amp;RelatedPath=CLF_FindingObject.AbsCorActPlan"><img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/></a></Template></ix:TemplateColumn><ix:TemplateColumn For="NbAPs" MapValue="In Progress"><Template><a title="Create &amp; Attach a new Action" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_InsActionPlan_Detail/Create?RelatedEvent=<%# Model.Id %>&amp;RelatedId=<%# Container.ViewData.Eval("Id") %>&amp;RelatedPath=CLF_FindingObject.AbsCorActPlan"><img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/></a></Template></ix:TemplateColumn><ix:TemplateColumn For="NbAPs" MapValue="Closed without Action"><Template><a title="Re-open Finding" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Finding_CloseFinding/Edit/<%# Container.ViewData.Eval("Id") %>"><img src="<%= ImageHelper.GetStaticPath("Icons/new/48x48/error.gif") %>"/></a></Template></ix:TemplateColumn></MappedColumns></ix:MergeColumn><ix:MergeColumn Caption="Actions" For="FindingStatus.Code" meta:resourcekey="MergeColumn5" ResourceKey="MergeColumn5"><MappedColumns><ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="AbsCorActPlan" MapValue="In Progress"/><ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="AbsCorActPlan" MapValue="Closed"/><ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="AbsCorActPlan" MapValue="Open"/><ix:Column EditMode="popup" For="ManCloseCom" MapValue="Closed without Action"/></MappedColumns></ix:MergeColumn></Columns></ix:GridSection><%}%>
      <% if (true) { %>
        <%-----------------------------ACTION PLAN SOLO GRID---------------------------------------%><ix:GridSection For="ActionPlanAbst" ID="ActionPlansGridSection_PendingAction2" ModernIcon="Raven/Icons/BrightBlue_48/fast44.png" RefreshScope="Row" Title="Action Plan Summary" meta:resourcekey="GridSection6" ResourceKey="GridSection6"><Entities><ix:IncludeEntity name="CLF_InsActionPlanObject"/></Entities><menu><ix:GridCreateActionLink Override="true" OpenIn="popup"/><ix:GridListAllActionLink Override="true" Caption="Refresh" meta:resourcekey="GridListAllActionLink2" ResourceKey="GridListAllActionLink2"/></menu><Sorting><ix:Sort By="ActionNo" Direction="Ascending"/></Sorting><Columns><ix:Column For="ActionNo" LinkTo="default"/><ix:Column DisplayAs="Truncate" For="CPARActionReq"/><ix:Column FilterAs="dropdown" For="CPARTypeID"/><ix:Column DisplayAs="Label" For="Workflow.PersonResponsible"/><ix:Column FOrmat="d" For="Workflow.DueDate"/><ix:Column For="CompletedBy"/><ix:Column FOrmat="d" For="CompletionDate"/><ix:Column For="Workflow.Status"/></Columns></ix:GridSection><%}%><ix:DetailSection Title="Reviewer Decision" meta:resourcekey="DetailSection8" ResourceKey="DetailSection8"><ix:FieldArea><ix:Field For="RevieweDecision" ReadOnly="true" Span="true" SpellCheck="false"/><ix:Field For="RevieweComments" ReadOnly="true" Span="true" SpellCheck="false"/></ix:FieldArea></ix:DetailSection><ix:DetailSection Title="Second Reviewer Approval Decision" Visible="true" CSSClass="SecondReview" meta:resourcekey="DetailSection2" ResourceKey="DetailSection2"><ix:FieldArea><ix:Field For="RevieweDecisio1" IsMandatory="TRUE" Span="true" SpellCheck="false"/><ix:Field For="RevieweComment1" Span="true" SpellCheck="false"/></ix:FieldArea></ix:DetailSection></ix:StageContainer><%-- 
	Stage Container: "Completed"

--%>
      <%------------------------------------------------------------------------------------------------%>
      <%-------------------------------Stage Container: Completed---------------------------------------%>
      <%------------------------------------------------------------------------------------------------%><ix:StageContainer UseDefaultWhenCompleted="True" ID="StageContainer_Completed"><%-----------------------------GRID WITH FINDINGS---------------------------------------%><ix:Fragment Name="Insp_EquipInspection_Frag_QuestionAnswer"/><% if ((bool)ViewData.Eval("TypeOfInspec.FindingTracking")) { %>
          <%-----------------------------FINDINGS SOLO GRID---------------------------------------%><ix:GridSection DisplayEditColumn="false" For="Findings" ID="FindingsGridSection_CLOSED" ModernIcon="Raven/Icons/BrightBlue_48/alert.png" Title="Finding Summary" Visible="true" meta:resourcekey="GridSection4" ResourceKey="GridSection4"><menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></menu><Sorting><ix:Sort By="RecordNo" Direction="Ascending"/></Sorting><aliases><ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/><ix:Alias For="Severity.TextColor.Value" Name="TC"/><ix:Alias For="Severity.CSS" Name="CSS"/><ix:Alias For="FindingStatus"/><ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/><ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/></aliases><Columns><ix:Column For="RecordNo" LinkTarget="popup" LinkTo="CLF_Finding_Detail_Readonly/View?entityId={#id}"/><ix:Column DisplayAs="Truncate" For="Description"/><ix:TemplateColumn For="Severity" Visible="false" FilterAs="Dropdown"><template><div style="background-color:<%# Container.ViewData.Eval("BC") %>;color:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>"><%# Container.ViewData.Eval("Severity") %></div></template></ix:TemplateColumn><ix:Column Caption="Suggested Action Plan" For="ImmediateAction" meta:resourcekey="Column5" ResourceKey="Column5"/><ix:Column For="ResponseDue" Format="d"/><ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center" MapValue="True"><Template><div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>"><%# Container.ViewData.Eval("FindingStatus") %></div></Template></ix:TemplateColumn><ix:MergeColumn Caption="Add Actions" For="FindingStatus.Code" HorizontalAlign="center" meta:resourcekey="MergeColumn4" ResourceKey="MergeColumn4"><MappedColumns><ix:TemplateColumn For="NbAPs" MapValue="Open"><Template><a style="text-decoration:none;" title="Close Finding without Action Plan" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Finding_CloseFinding/Edit/<%# Container.ViewData.Eval("Id") %>"><img src="<%= ImageHelper.GetStaticPath("Icons/new/48x48/error.gif") %>"/></a><a title="Create &amp; Attach a new Action" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_InsActionPlan_Detail/Create?RelatedEvent=<%# Model.Id %>&amp;RelatedId=<%# Container.ViewData.Eval("Id") %>&amp;RelatedPath=CLF_FindingObject.AbsCorActPlan"><img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/></a></Template></ix:TemplateColumn><ix:TemplateColumn For="NbAPs" MapValue="In Progress"><Template><a title="Create &amp; Attach a new Action" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_InsActionPlan_Detail/Create?RelatedEvent=<%# Model.Id %>&amp;RelatedId=<%# Container.ViewData.Eval("Id") %>&amp;RelatedPath=CLF_FindingObject.AbsCorActPlan"><img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/></a></Template></ix:TemplateColumn><ix:TemplateColumn For="NbAPs" MapValue="Closed without Action"><Template><a title="Re-open Finding" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Finding_CloseFinding/Edit/<%# Container.ViewData.Eval("Id") %>"><img src="<%= ImageHelper.GetStaticPath("Icons/new/48x48/error.gif") %>"/></a></Template></ix:TemplateColumn></MappedColumns></ix:MergeColumn><ix:MergeColumn Caption="Actions" For="FindingStatus.Code" meta:resourcekey="MergeColumn5" ResourceKey="MergeColumn5"><MappedColumns><ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="AbsCorActPlan" MapValue="In Progress"/><ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="AbsCorActPlan" MapValue="Closed"/><ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="AbsCorActPlan" MapValue="Open"/><ix:Column EditMode="popup" For="ManCloseCom" MapValue="Closed without Action"/></MappedColumns></ix:MergeColumn></Columns></ix:GridSection><%}%>
                <% if (true) { %>
          <%-----------------------------ACTION PLAN SOLO GRID---------------------------------------%><ix:GridSection DisplayEditColumn="false" For="ActionPlanAbst" ID="ActionPlansGridSection_CLOSED" ModernIcon="Raven/Icons/BrightBlue_48/fast44.png" RefreshScope="Row" Title="Action Plan Summary" meta:resourcekey="GridSection7" ResourceKey="GridSection7"><menu><ix:GridCreateActionLink Override="true" OpenIn="popup"/><ix:GridListAllActionLink Override="true" Caption="Refresh" meta:resourcekey="GridListAllActionLink3" ResourceKey="GridListAllActionLink3"/></menu><Sorting><ix:Sort By="ActionNo" Direction="Ascending"/></Sorting><Columns><ix:Column For="ActionNo" LinkTo="default"/><ix:Column DisplayAs="Truncate" For="CPARActionReq"/><ix:Column FilterAs="dropdown" For="CPARTypeID"/><ix:Column DisplayAs="Label" For="Workflow.PersonResponsible"/><ix:Column FOrmat="d" For="Workflow.DueDate"/><ix:Column For="CompletedBy"/><ix:Column FOrmat="d" For="CompletionDate"/><ix:Column For="Workflow.Status"/></Columns></ix:GridSection><%}%>
          <%-----------------------------REVIEW DECISION---------------------------------------%><ix:DetailSection Title="Reviewer Decision" ID="FirstReviewComment_inprogressClosed" meta:resourcekey="DetailSection7" ResourceKey="DetailSection7"><ix:FieldArea><ix:Field For="RevieweDecision" ReadOnly="TRUE" Span="true" SpellCheck="false"/><ix:Field For="RevieweComments" ReadOnly="TRUE" Span="true" SpellCheck="false"/></ix:FieldArea></ix:DetailSection><ix:DetailSection Title="Second Reviewer Approval Decision" Visible="false" ID="SecondReviewComment_actionspendingClosed" meta:resourcekey="DetailSection5" ResourceKey="DetailSection5"><ix:FieldArea><ix:Field For="RevieweDecisio1" ReadOnly="true" Span="true" SpellCheck="false"/><ix:Field For="RevieweComment1" ReadOnly="true" Span="true" SpellCheck="false"/></ix:FieldArea></ix:DetailSection></ix:StageContainer><script type="text/javascript">(function () {

  var DEBUG = false;   // set to false when everything works

  var OBJECT_NAME = "Insp_TypeObject";
  var BASE = "<%=HttpEnvironment.SystemApplicationPath %>";

  var ID = {
    type:     ["TypeOfInspecC", "TypeOfInspecE"],
    text:     ["EquipmentTextC", "EquipmentTextE"],
    relation: ["EquipmentRelationC", "EquipmentRelationE"]
  };

  function find(ids) {
    var found = null;
    ids.forEach(function (id) {
      if (!found) { found = document.getElementById(id); }
    });
    return found;
  }

  function typeId() {
    var el = find(ID.type);
    if (!el) { return ""; }
    var sel = el.tagName === "SELECT" ? el : (el.querySelector ? el.querySelector("select") : null);
    if (sel) { return (sel.value || "").trim(); }
    var inp = el.querySelector ? el.querySelector("input") : null;
    if (inp) { return (inp.value || "").trim(); }
    return (el.value || "").trim();
  }

  function rowOf(el) {
    return el.closest("tr, .field-container, .ix-field, .fieldarea-row") || el;
  }

  function show(ids, visible) {
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { rowOf(el).style.display = visible ? "" : "none"; }
    });
  }

  function debug(msg) {
    if (!DEBUG) { return; }
    var box = document.getElementById("equipDebug");
    if (!box) {
      box = document.createElement("div");
      box.id = "equipDebug";
      box.style.cssText = "position:fixed;bottom:10px;right:10px;max-width:420px;max-height:300px;overflow:auto;background:#ffc;border:1px solid #999;padding:8px;z-index:99999;font:12px monospace";
      document.body.appendChild(box);
    }
    box.textContent = msg;
  }

  var lastId = null;

  function loadType(id) {
    var url = BASE + "/api/v2/object/" + OBJECT_NAME + "(" + id + ")?$expand=ELOptions";
    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error(response.status + " " + response.statusText);
        }
        return response.json();
      })
      .then(function (data) {
        if (id !== lastId) { return; }   // user already picked another type

        var enabledRaw = data.EquipmentList;
        var enabled = (enabledRaw === true) || /^(true|yes|1)$/i.test(String(enabledRaw));

        var opt = data.ELOptions;
        var optName = "";
        if (opt) {
          optName = (typeof opt === "object") ? String(opt.Name || opt.Caption || "") : String(opt);
        }

        debug("EquipmentList=" + enabledRaw +
              " | option name='" + optName + "'" +
              " | option record=" + JSON.stringify(opt));

        var isText = false;
        var isRelation = false;
        if (enabled && optName) {
          isText = /text/i.test(optName);
          isRelation = /relation|library/i.test(optName);
        }
        show(ID.text, isText);
        show(ID.relation, isRelation);
      })
      .catch(function (error) {
        debug("API error for id=" + id + ": " + error.message);
        show(ID.text, false);
        show(ID.relation, false);
      });
  }

  function check() {
    var id = typeId();
    if (id === lastId) { return; }
    lastId = id;
    if (!id) {
      debug("No type selected (or the type ID could not be read)");
      show(ID.text, false);
      show(ID.relation, false);
      return;
    }
    debug("Type id=" + id + " - loading settings...");
    loadType(id);
  }

  function init() {
    show(ID.text, false);
    show(ID.relation, false);
    check();
    setInterval(check, 500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();</script><ix:AttachmentSection ID="AttachmentFragmentGridSection" isCollapsed="True"/><ix:WorkflowComments IsCollapsed="true"/><ix:ESignatureHistorySection DisplayMode="View" isCollapsed="True" UseCookies="false"/><ix:MailMergeTemplates ID="MailMergeFragmentGridSection" DisplayMode="View,edit" isCollapsed="True" UseCookies="false" Visible="false"/></ix:DetailPage><style>.data_row td.wrap {
        white-space: normal !important;
        }
        .three-column .group-item , .two-column .group-item {
        width: 100% !important;
        }
        .group-item {
        padding: 3px;
        }
        .data-cell {
        border-left: 1px solid #DDDDDD;
        }
        .alerticon {
        height:30px!important;
        width:30px!important;
        float:right!important;
        }
        .data_row.alternate {
        background:none !important;
        }
        .inline-edit, .popup-edit {
        background-color:lightyellow!important;
        border: 1px dotted orange !important;
        }
        <%= ApplicationSettings.Get("AuditMgmt_PreferencesObject","CustomCSS","")  %>
        <%= ApplicationSettings.Get("CFW_PreferencesObject","CustomCSS","")  %>
        .wfDiagram
        {
        width:100%;
        text-align:center;
        }
        .wfDiagram > div {
        display: inline-block;
        margin-bottom: 5px;
        padding-left: 24px;
        background-image: url('<%= ImageHelper.GetStaticPath("Icons/new/24x24/navigate_right.gif") %>');
        background-repeat: no-repeat;
        background-position: left center;
        }
        .wfDiagram > div:first-child {
        padding-left: 0;
        background-image: none;
        position: relative;
        }
        .wfDiagram > div:last-child {
        margin-bottom: 5px;
        padding-left: 24px;
        background-image: url('<%= ImageHelper.GetStaticPath("Icons/new/24x24/navigate_right.gif") %>');
        position: relative;
        background-repeat: no-repeat;
        background-position: left center;
        }
        .wfDiagram > div > div {
        width: 180px;
        text-align: center;
        padding: 6px 2px;
        font-weight: bold;
        border-radius: 8px;
        border: 2px solid #6CC0FF;
        background-color: #FFFFFF;
        color: #3F3F3F;
        }
        .wfDiagram > div > div[selected='blue'] {
        border: 2px solid #0070C0;
        background-color: #0070C0;
        color: #FFFFFF;
        }
        .wfDiagram > div > div[selected='red'] {
        border: 2px solid red;
        background-color: red;
        color: #FFFFFF;
        }
        .wfDiagram > div > div[selected='green']
        {
        border: 2px solid green;
        background-color: green;
        color: #FFFFFF;
        }
        .GreySection  {
        background-color: #E8E8E8	!important;
        border-color: #808080	!important;
        border-width: 1px	!important;
        border-style: solid 	!important;
        }
        .GreySection .content {
        background-color: none !important;
        border: none !important;
        background: none !important;
        }
        .GreySection .main {
        margin: 0 0 !important;
        border: none !important;
        background: none !important;
        }
        .GreySection .left {
        display: none;
        }
        .GreySection .right {
        display: none;
        }
        .GreySection .datagrid_footer {
        background-color: #E8E8E8 !important;
        }
        .GreySection .header {
        background-color: #E8E8E8!important;
        }
        .GreySection .header-filter {
        background-color: #E8E8E8 !important;
        }
        .GreySection.links_container {
        background-color: #E8E8E8!important;
        }
        .GreySection .filterBox {
        background-color: #E8E8E8!important;
        }
        .GreySection  .textarea {
        background-color: #E8E8E8!important;
        }
        .GreySection .data_row {
        background-color: #E8E8E8!important;
        }
        .GreySection .textarea {
        background-color: #E8E8E8!important;
        }
        .GreySection .medium-textbox{
        background-color: #E8E8E8 !important;
        }
        .GreySection .datePickerControl{
        background-color: #E8E8E8!important;
        }
        .GreySection .time-picker-TextBox{
        background-color: #E8E8E8!important;
        }
        .GreySection.entityselector-value{
        background-color: #E8E8E8!important;
        }
        .GreySection  input[type=radio]{
        background-color: #E8E8E8!important;
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .content {
        background-color: none !important;
        border: none !important;
        background: none !important;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .main {
        margin: 0 0 !important;
        border: none !important;
        background: none !important;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .left {
        display: none;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .right {
        display: none;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  {
        background-color: #C1ECFA !important;
        border-color: #719CAA;
        border-width: 1px;
        border-style: solid;
        border-radius: 1px;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 10px;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  .datagrid_footer {
        background-color: #C1ECFA !important;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  .header {
        background-color: #C1ECFA !important;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  .header-filter {
        background-color: #C1ECFA !important;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  .links_container {
        background-color: #C1ECFA !important;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  .filterBox {
        background-color: #C1ECFA !important;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  .textarea {
        background-color: #C1ECFA !important;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %>  .data_row {
        background-color: #C1ECFA !important;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> textarea {
        background-color: #C1ECFA !important;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .medium-textbox{
        background-color: #C1ECFA !important;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .datePickerControl{
        background-color: #C1ECFA !important;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .time-picker-TextBox{
        background-color: #C1ECFA !important;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> .entityselector-value{
        background-color: #C1ECFA !important;
        }
        .<%= ViewData.Eval("Workflow.CurrentStage.Name") == null ? "Draft" : ViewData.Eval("Workflow.CurrentStage.SystemName") %> input[type=radio]{
        background-color: #C1ECFA !important;
        }
        .TrueWarning {
        background-repeat:no-repeat;
        padding-right:20px;
        background-position:right center;
        background-image:url('<%= ImageHelper.GetStaticPath("Icons/new/16x16/warning.gif") %>');
        }
        .td_edit_link {
        display:none;
                                          }</style>
```

### E1677-Content

CLF_QuestObject.CLF_Quest_Inventory — Content; stable record ID f90ac76d-1588-48cd-abc3-9604cf59608f. Source $.GraphData.Items[560].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Quest_Inventory"><ix:InventoryView ID="CLF_Quest_InventoryView"><Menu><ix:GridCreateActionLink Override="true" Visible="true" OpenIn="popup"/></Menu><Actions><ix:MassUpdateAction ViewName="CLF_Quest_MassUpdate"/></Actions><grouping><ix:Group By="ChecklistType"/><ix:Group By="Section"/></grouping><Sorting><ix:Sort By="Order" Direction="Ascending"/></Sorting><Columns><ix:Column For="QuestionRef" LinkTo="default"/><ix:Column DisplayAs="html" For="Content"/><ix:Column FilterAs="dropdown" For="AnswerType"/><ix:Column FilterAs="dropdown" For="ChoiceList"/><ix:Column For="Order"/><ix:Column FilterAs="dropdown" For="ChecklistType"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1684-Content

ActionPlans_ActionPlanAbsObject.CC_AbsCorrectiveAction_Inventory — Content; stable record ID 6f854a2f-4606-48b2-b66b-dba0bf6dae9e. Source $.GraphData.Items[562].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory><ix:InventoryView HideGroupAddButton="true"><Menu><ix:GridCreateActionLink Override="true" Visible="false" OpenIn="popup"/><ix:GridDeleteActionLink Override="true" Visible="false" OpenIn="popup"/><ix:GridHierarchyTreeLink Override="true" Visible="false" runat="server"/></Menu><Hierarchies><ix:GridHierarchyTree For="ActionPlanType" visible="false" EnableContextMenu="false" ShowTitle="false" EnableDragAndDrop="false"/></Hierarchies><aliases><ix:Alias for="VOCAbstract"/><ix:Alias for="VOCAbstract.Id"/><ix:Alias for="VOCAbstract.HelpActPlanProg"/></aliases><Filters><ix:Filter><ix:CommonPredicate For="Workflow.Status" Negate="true" Type="Equal"><ix:Value>Closed</ix:Value></ix:CommonPredicate></ix:Filter><ix:Filter><ix:IsNullPredicate For="VOCAbstract" negate="true"/></ix:Filter></Filters><Sorting><ix:Sort By="ActionNo" Direction="Descending"/></Sorting><Columns><ix:Column For="ActionNo" LinkTarget="Popup" LinkTo="Default"/><ix:Column DisplayAs="text" For="Location" runat="server"/><ix:Column Caption="Description" For="CPARActionReq" meta:resourcekey="Column0" ResourceKey="Column0"/><ix:Column Caption="Complaint" For="VOCAbstract:CustComplaints_CustComplaintObject.DisplayField" LinkTo="CustComplaints_CustComplaint_Detail/View?entityid={#VOCAbstract.Id}" meta:resourcekey="Column1" ResourceKey="Column1"/><ix:Column DisplayAs="String" For="Workflow.PersonResponsible"/><ix:Column For="Workflow.DueDate" Format="d"/><ix:MergeColumn Caption="Progress" For="SystemType.Name" HorizontalAlign="center" RefreshScope="Row" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0"><MappedColumns><ix:Column For="ActivitProgress" MapValue="ActionPlans_ActionPlanWActObject"/><ix:Column For="VOCAbstract.HelpActPlanProg" MapValue="ActionPlans_ActionPlanObject"/></MappedColumns></ix:MergeColumn><ix:Column For="Workflow.Status"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1695-Content

CLF_FindingStatusObject.CLF_FindingStatus_Inventory — Content; stable record ID 6bf816b7-8770-4b28-8969-41d966d5ddeb. Source $.GraphData.Items[566].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_FindingStatus_Inventory"><ix:InventoryView ID="CLF_FindingStatus_InventoryView"><Columns><ix:Column For="Code" LinkTo="default"/><ix:Column For="Name"/><ix:Column FilterAs="dropdown" For="TC"/><ix:Column FilterAs="dropdown" For="BC"/><ix:Column For="Icon" EditMode="Inline" DisplayAs="Icon"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1699-ConfigurableViewActions

CLF_FindingStatusObject.CLF_FindingStatus_Detail — ConfigurableViewActions; stable record ID a55b727c-ab52-4e8e-9596-4a0e98525c80. Source $.GraphData.Items[568].FieldData.ConfigurableViewActions.

```json
[]
```

### E1699-Content

CLF_FindingStatusObject.CLF_FindingStatus_Detail — Content; stable record ID a55b727c-ab52-4e8e-9596-4a0e98525c80. Source $.GraphData.Items[568].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Finding Status" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea><ix:Field For="Code" Span="true" SpellCheck="false"/><ix:Field For="Name" Span="true" SpellCheck="false"/><ix:Field For="TC"/><ix:Field For="BC"/><ix:Field For="Icon"/></ix:FieldArea></ix:DetailSection></ix:DetailPage>
```

### E1730-ConfigurableViewActions

CLF_ChecklistTypeObject.CLF_ChecklistType_Detail — ConfigurableViewActions; stable record ID b2f05c74-d1bf-41be-be1a-397eed8976d2. Source $.GraphData.Items[579].FieldData.ConfigurableViewActions.

```json
[]
```

### E1730-Content

CLF_ChecklistTypeObject.CLF_ChecklistType_Detail — Content; stable record ID b2f05c74-d1bf-41be-be1a-397eed8976d2. Source $.GraphData.Items[579].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Checklist Type Definition" Icon="Icons/new/48x48/clipboard_empty.gif" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Reference"/><ix:Field For="Name" SpellCheck="false"/><ix:Field For="Description"/></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayMode="Edit,View" EditLinkTarget="popup" For="Checklists" ID="ChecklistsGridSection" RefreshScope="Row"><Menu><ix:GridCreateActionLink runat="server" Override="true" OpenIn="popup"/></Menu><Actions><ix:MassUpdateAction ViewName="CLF_Checklist_MassUpdate"/></Actions><Columns><ix:Column EditMode="inline" For="Reference" LinkTo="default" RefreshScope="Row"/><ix:Column EditMode="inline" For="Title" RefreshScope="Row"/><ix:Column DisplayAs="Truncate" EditMode="inline" For="Description" RefreshScope="Row"/><ix:Column For="NbQuestions" HorizontalAlign="center"/></Columns></ix:GridSection><ix:GridSection DisplayMode="Edit,View" EditLinkTarget="popup" For="Questions" ID="QuestionsGridSection" RefreshScope="Row"><Menu><ix:GridCreateActionLink runat="server" Override="true" OpenIn="popup"/></Menu><Actions><ix:MassUpdateAction ViewName="CLF_Quest_MassUpdate"/></Actions><Sorting><ix:Sort runat="server" By="Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="Section"/></grouping><Columns><ix:Column EditMode="inline" For="QuestionRef" LinkTo="default" RefreshScope="Row"/><ix:Column DisplayAs="Truncate" EditMode="inline" For="Content" RefreshScope="Row"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="AnswerType" RefreshScope="Row"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="ChoiceList" RefreshScope="Row"/><ix:Column EditMode="inline" For="Order"/></Columns></ix:GridSection></ix:DetailPage>
```

### E1753-ConfigurableViewActions

CLF_ChecklistObject.CLF_Checklist_Toolbox_Detail — ConfigurableViewActions; stable record ID 6bf6ee2a-9a5c-4586-a089-f0dab10467b6. Source $.GraphData.Items[588].FieldData.ConfigurableViewActions.

```json
[]
```

### E1753-Content

CLF_ChecklistObject.CLF_Checklist_Toolbox_Detail — Content; stable record ID 6bf6ee2a-9a5c-4586-a089-f0dab10467b6. Source $.GraphData.Items[588].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Checklist Definition" Icon="Icons/new/48x48/scroll_refresh.gif"><ix:FieldArea Span="true"><ix:Field For="ChecklistType"/><ix:Field For="Reference"/><ix:Field For="Title"/><ix:Field For="Description"/><ix:Field For="EnableSections"/><ix:Field For="EnableScoring"/><ix:Field For="AutoCode"/></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayMode="View,Edit" EditLinkTarget="popup" For="Questions" HideGroupAddButton="true" ID="QuestionsGridSection" LinkToEditColumn="CLF_Quest_ToolBox_Detail/Edit?entityid={#id}"><Actions><ix:MassUpdateAction ViewName="CLF_Quest_MassUpdate"/></Actions><grouping><ix:Group By="Section"/></grouping><Menu><ix:GridAttachActionLink Override="true" Visible="true" Caption="Attach an existing Question" LinkTo="CLF_Quest_Select/Index"/><ix:GridDetachActionLink Override="true" Visible="false"/><ix:GridListAllActionLink Override="true" Visible="false"/><ix:GridCreateActionLink Override="false" OpenIn="popup" Visible="true" Caption="Create &amp; Attach a new Question" LinkTo="CLF_Quest_ToolBox_Detail/Create?ChecklistType={#ChecklistTypeId}"/><ix:GridDetachActionLink Override="false" Caption="Detach Question(s)"/><ix:GridListAllActionLink Override="false" Visible="false"/></Menu><Sorting><ix:Sort runat="server" By="Order" Direction="Ascending"/></Sorting><Columns><ix:Column For="QuestionRef" LinkTo="CLF_Quest_ToolBox_Detail/View?entityid={#id}"/><ix:Column DisplayAs="Truncate" EditMode="inline" For="Content"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="AnswerType" RefreshScope="Row"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="ChoiceList" RefreshScope="Row"/><ix:Column EditMode="inline" For="Order"/></Columns></ix:GridSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View,Edit" For="PubChecklists" ID="PubChecklistsGridSection" Title="Checklist Version History"><Menu><ix:GridCreateActionLink Override="true" Visible="False"/></Menu><Sorting><ix:Sort runat="server" By="DateCreated" Direction="Descending"/></Sorting><Columns><ix:Column For="ChecklistRef" LinkTo="default"/><ix:Column For="Title"/><ix:Column DisplayAs="Truncate" For="Description"/><ix:Column For="DateCreated" Format="d"/><ix:Column EditMode="inline" For="IsActive"/></Columns></ix:GridSection><ix:GridSection For="Sections" ID="SectionsGridSection"><Columns><ix:Column For="SectionName" LinkTo="default"/></Columns></ix:GridSection><ix:GridSection For="HelpeQuestions" ID="HelpeQuestionsGridSection"><Columns><ix:Column For="AnswerType" LinkTo="default"/><ix:Column For="ChecklistType"/><ix:Column For="ChoiceList"/><ix:Column For="Content"/><ix:Column For="DateModifiedHel"/></Columns></ix:GridSection></ix:DetailPage><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E1773-ConfigurableViewActions

CLF_ChecklistObject.CLF_Checklist_MassUpdate — ConfigurableViewActions; stable record ID 4eb40ada-8474-4cea-85e8-deb8430ca038. Source $.GraphData.Items[594].FieldData.ConfigurableViewActions.

```json
[]
```

### E1773-Content

CLF_ChecklistObject.CLF_Checklist_MassUpdate — Content; stable record ID 4eb40ada-8474-4cea-85e8-deb8430ca038. Source $.GraphData.Items[594].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Fields" ShowHeader="false" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="ChecklistType"/><ix:Field For="EnableSections"/><ix:Field For="EnableScoring"/><ix:Field For="AutoCode"/></ix:FieldArea></ix:DetailSection><ix:GridSection For="Sections" ID="SectionsGridSection"><Columns><ix:Column For="SectionName" LinkTo="default"/></Columns></ix:GridSection><ix:GridSection For="HelpeQuestions" ID="HelpeQuestionsGridSection"><Columns><ix:Column For="AnswerType" LinkTo="default"/><ix:Column For="ChecklistType"/><ix:Column For="ChoiceList"/><ix:Column For="Content"/><ix:Column For="DateModifiedHel"/></Columns></ix:GridSection></ix:DetailPage><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E1779-Content

CLF_ChecklistObject.CLF_Checklist_Select — Content; stable record ID 09235b45-de8b-4293-ae5d-ab79dc4ce25e. Source $.GraphData.Items[596].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Checklist_Select"><ix:InventoryView ID="CLF_Checklist_SelectView" DisplayEditColumn="false" HideGroupAddButton="true"><Menu><ix:GridCreateActionLink Override="true" visible="false"/><ix:GridDeleteActionLink Override="true" visible="false"/><ix:GridExecuteActionLink Override="true" Name="Publish" Visible="false"/></Menu><grouping><ix:Group By="ChecklistType"/></grouping><Columns><ix:Column For="Reference"/><ix:Column For="Title"/><ix:Column For="NbQuestions" HorizontalAlign="center"/><ix:Column FilterAs="dropdown" For="ChecklistType"/><ix:Column For="EnableSections"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1824-Content

ConfgAppSetting_GlobAppSettingsObject.ConfgAppSetting_GlobAppSettingsObjectDetailView — Content; stable record ID 65a03240-b6dc-4335-ad17-5032d1387cbb. Source $.GraphData.Items[613].FieldData.Content.

```xml
<ix:DetailPage>
<ix:DetailSection Title='Fields'>
<ix:FieldArea>
<ix:Field For='CaleIconGeneral'/>
<ix:Field For='ClocIconGeneral'/>
<ix:Field For='DueIconWorkflow'/>
<ix:Field For='Name'/>
<ix:Field For='PerIconWorkflow'/>
<ix:Field For='StaIconWorkflow'/>
<ix:Field For='StruIconGeneral'/>
</ix:FieldArea>
<ix:WorkflowFields/>
</ix:DetailSection>
<ix:WorkflowComments/>
<ix:WorkflowTracking/>
<ix:ESignatureHistorySection/>
</ix:DetailPage>
```

### E1826-Content

Insp_IReviewDecisionObject.Insp_IReviewDecisionObjectInventoryView — Content; stable record ID b946d2a3-06a1-4138-8809-720239749e2e. Source $.GraphData.Items[614].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="Insp_IReviewDecisionObjectInventory"><ix:InventoryView ID="Insp_IReviewDecisionObjectInventoryView"><Columns><ix:Column For="Name"/><ix:Column For="Active"/><ix:Column For="Sort"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1862-ConfigurableViewActions

CLF_MultichecklistsObject.CLF_MulticheckList_Detail — ConfigurableViewActions; stable record ID 72f933b2-1ade-4926-8197-ae09e70fd8ee. Source $.GraphData.Items[632].FieldData.ConfigurableViewActions.

```json
[]
```

### E1862-Content

CLF_MultichecklistsObject.CLF_MulticheckList_Detail — Content; stable record ID 72f933b2-1ade-4926-8197-ae09e70fd8ee. Source $.GraphData.Items[632].FieldData.Content.

```xml
<ix:DetailPage>
  <ix:DetailPageMenuBar ID="DetailPageMenuBar">
<ix:SaveAddNewActionLink Override="true" DisplayMode="Edit"/>
<ix:SaveActionLink Override="true" DisplayMode="Edit"/>
<ix:SaveExitActionLink Override="true" DisplayMode="Edit"/>
<ix:CancelActionLink Override="true" DisplayMode="Edit"/>
<ix:SpellCheckActionLink Override="true" DisplayMode="Edit"/>
<ix:SaveActionLink Override="false" DisplayMode="Create" Caption="Continue and Add Checklists" meta:resourcekey="SaveActionLink0" ResourceKey="SaveActionLink0"/>
<ix:SpellCheckActionLink Override="false" DisplayMode="Create"/>
<ix:CancelActionLink Override="false" DisplayMode="Create"/>
  </ix:DetailPageMenuBar>
  <ix:DetailSection Title="Audit Details" Icon="Icons/new/48x48/clipboard_empty.gif" ModernIcon="Raven/Icons/BrightBlue_48/note32.png" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0">
    <ix:FieldArea Span="true">
<ix:Field For="Location" DisplayAs="String" EditAs="EntitySelector"/>
<ix:Field DisplayMode="View,Edit" For="RecordNo"/>
<ix:Field EditAs="TextBox" For="Name" IsMandatory="True"/>
<ix:Field For="Scope"/>
<ix:Field For="Objective"/>
<ix:Field For="Agenda"/>
<ix:Field For="PersResponsibl" IsMandatory="True"/>
<ix:Field For="Workflow.RecurringSeries.StartDate"/>
<ix:Field For="Workflow.RecurringSeries.Frequency"/>
    </ix:FieldArea>
  </ix:DetailSection>
  <ix:GridSection EditLinkTarget="popup" DisplayMode="Edit,View" For="SubChecklists:CLF_SubchecklistObject" ID="SubChecklistsGridSection" ModernIcon="Raven/Icons/BrightBlue_48/silhouette107.png" RefreshScope="Row" Title="Required Checklists" HideGroupAddButton="true" DisplayEditColumn="false">
    <Menu>
<ix:GridCreateActionLink Override="true" For="PubChecklist" Caption="Select Checklists" CSSClass="gridCreateLink"/>
    </Menu>
    <Sorting>
<ix:Sort By="RecordNo" Direction="Ascending"/>
    </Sorting>
    <Columns>
<ix:Column For="RecordNo" LinkTo="default" width="5px"/>
<ix:Column For="PubChecklist"/>
<ix:Column For="PersResponsibl" EditMode="inline"/>
<ix:Column AllowFiltering="false" Caption="Status" For="Workflow.WorkflowStatus" meta:resourcekey="Column1" ResourceKey="Column1" width="5px"/>
<ix:Column For="Progress" width="5px"/>
<ix:Column For="NbFindings" width="5px" Caption="#F" LinkTo="CLF_ChecklistAnswer_Findings/View?entityid={#id}" LinkTarget="popup" HorizontalAlign="center" meta:resourcekey="Column0" ResourceKey="Column0"/>
    </Columns>
  </ix:GridSection>
  <ix:GridSection AllowSorting="false" DisplayMode="Edit,View" EditLinkTarget="popup" For="SubChecklists.QuestionAnswers" HideGroupAddButton="true" ID="AnswerSummarySection" ModernIcon="Raven/Icons/BrightBlue_48/checkmark21.png" RefreshScope="Row" Title="{#PubChecklist}" meta:resourcekey="GridSection2" ResourceKey="GridSection2">
    <Actions>
<ix:MassUpdateAction ViewName="CLF_QuestionAnswer_MassUpdate"/>
    </Actions>
    <menu>
<ix:GridCreateActionLink Override="true" Visible="false"/>
<ix:GridDeleteActionLink Override="true" Visible="false"/>
    </menu>
    <Sorting>
<ix:Sort By="PubQuestion.Order" Direction="Ascending"/>
    </Sorting>
    <grouping>
<ix:Group By="ChecklistAnswer.Name" HeaderCaption="Checklist"/>
<ix:Group By="PubQuestion.Section"/>
    </grouping>
    <aliases>
<ix:Alias For="PubQuestion.QuestionRef"/>
<ix:Alias For="PubQuestion.Guideline"/>
<ix:Alias For="PubQuestion.Id"/>
<ix:Alias For="ChecklistAnswer.MasterChecklist.Id" Name="AuditId"/>
<ix:Alias For="Choice.BColor.Value"/>
<ix:Alias For="Choice.TColor.Value"/>
<ix:Alias For="Choice.Css"/>
<ix:Alias For="Id"/>
    </aliases>
    <Columns>
      <ix:TemplateColumn For="PubQuestion.Content" Width="1">
        <Template>
          <span style="font-weight:bold;">
<%# Container.ViewData.Eval("PubQuestion.QuestionRef") %> <%# Container.ViewData.Eval("PubQuestion.Content") %>
          </span>
          <div class="fieldHint">
<%# Container.ViewData.Eval("PubQuestion.Guideline") %>
          </div>
        </Template>
      </ix:TemplateColumn>
<ix:Column For="PubQuestion.Question.References" FetchAs="Collection" DisplayAs="List" Visible="false"/>
      <ix:MergeColumn Caption="Answer" For="PubQuestion.AnswerType.Value" RefreshScope="Row" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0">
        <MappedColumns>
          <ix:TemplateColumn MapValue="Choice" For="Choice" EditMode="inline">
            <Template>
              <div style="color:<%# Container.ViewData.Eval("Choice.TColor.Value") %>;background-color:<%# Container.ViewData.Eval("Choice.BColor.Value") %>;<%# Container.ViewData.Eval("Choice.Css") %>">
<%# Container.ViewData.Eval("Choice") %>
              </div>
            </Template>
          </ix:TemplateColumn>
<ix:Column MapValue="Choice" For="Choice" EditMode="inline"/>
<ix:Column MapValue="Date" For="Date" EditMode="inline" Format="d"/>
<ix:Column MapValue="Choices" For="Choices" FetchAs="collection" DisplayAs="List" EditMode="popup"/>
<ix:Column MapValue="Float" For="Float" EditMode="inline" HorizontalAlign="right"/>
<ix:Column MapValue="Text" For="Text" EditMode="popup"/>
<ix:Column MapValue="Checkbox" For="Checkbox" EditMode="inline"/>
        </MappedColumns>
      </ix:MergeColumn>
<ix:Column For="Comments" EditMode="popup" RefreshScope="Row"/>
<ix:Column For="NumbofDocuments" LinkTo="CLF_QuestionAnswer_Docs/View?entityid={#id}" LinkTarget="popup" RefreshScope="Row" Caption="#Docs" HorizontalAlign="center" meta:resourcekey="Column2" ResourceKey="Column2" Width="5px"/>
      <ix:TemplateColumn For="NbFindings" Caption="Add" HorizontalAlign="center" width="20px" AllowFiltering="false" AllowSorting="false" meta:resourcekey="TemplateColumn0" ResourceKey="TemplateColumn0">
        <Template>
          <a title="Create &amp; Attach a new Finding" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/DefaultView/CLF_FindingObject/Create?QuestionAnswers=<%# Container.ViewData.Eval("Id") %>&amp;RelatedId=<%# Container.ViewData.Eval("AuditId") %>&amp;RelatedPath=CLF_ChecklistAnswerObject.Findings">
           <img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/>
            </a>
          </Template>
        </ix:TemplateColumn>
<ix:Column Caption="Attached Findings" DisplayAs="List" EditMode="popup" FetchAs="Collection" For="Findings" RefreshScope="row" meta:resourcekey="Column3" ResourceKey="Column3"/>
      </Columns>
    </ix:GridSection>
    <ix:GridSection EditLinkTarget="popup" DisplayMode="Edit,View" For="Findings" HideGroupAddButton="true" ID="FindingsGridSection" ModernIcon="Raven/Icons/BrightBlue_48/magnifying-glass32.png" RefreshScope="Row" Title="Finding Summary" meta:resourcekey="GridSection1" ResourceKey="GridSection1">
      <Sorting>
<ix:Sort runat="server" By="RecordNo" Direction="Ascending"/>
      </Sorting>
      <aliases>
<ix:Alias runat="server" For="Id"/>
<ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/>
<ix:Alias For="Severity.TextColor.Value" Name="TC"/>
<ix:Alias For="Severity.CSS" Name="CSS"/>
<ix:Alias For="FindingStatus"/>
<ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/>
<ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/>
<ix:Alias For="ChecklistAnswerId"/>
      </aliases>
      <Columns>
<ix:Column For="RecordNo" LinkTo="default"/>
<ix:Column For="Description" Truncate="True"/>
        <ix:TemplateColumn For="Severity" FilterAs="Dropdown">
          <template>
            <div style="background-color:<%# Container.ViewData.Eval("BC") %>;color:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>">
<%# Container.ViewData.Eval("Severity") %>
            </div>
          </template>
        </ix:TemplateColumn>
<ix:Column For="ResponseDue" Format="d" HorizontalAlign="center"/>
        <ix:MergeColumn For="FindingStatus.Code" Caption="Add Actions" HorizontalAlign="center" meta:resourcekey="MergeColumn1" ResourceKey="MergeColumn1">
          <MappedColumns>
            <ix:TemplateColumn MapValue="Open" For="NbAPs">
              <Template>
                <a style="text-decoration:none;" title="Close Finding without Action Plan" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Finding_CloseFinding/Edit/<%# Container.ViewData.Eval("Id") %>">
                  <img src="<%= ImageHelper.GetStaticPath("Raven/Icons/BrightBlue_48/forbidden15.png") %>"/>
                  </a>
                  <a title="Create &amp; Attach a new Action" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_InsActionPlan_Detail/Create?ChecklistAnswer=<%# Container.ViewData.Eval("ChecklistAnswerId") %>&amp;RelatedId=<%# Container.ViewData.Eval("Id") %>&amp;RelatedPath=CLF_FindingObject.ActionPlans">
                     <img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/>
                    </a>
                  </Template>
                </ix:TemplateColumn>
                <ix:TemplateColumn MapValue="In Progress" For="NbAPs">
                  <Template>
                    <a title="Create &amp; Attach a new Action" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_InsActionPlan_Detail/Create?ChecklistAnswer=<%# Container.ViewData.Eval("ChecklistAnswerId") %>&amp;RelatedId=<%# Container.ViewData.Eval("Id") %>&amp;RelatedPath=CLF_FindingObject.ActionPlans">
                        <img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/>
                      </a>
                    </Template>
                  </ix:TemplateColumn>
                  <ix:TemplateColumn MapValue="Closed without Action" For="NbAPs">
                    <Template>
                      <a title="Re-open Finding" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Finding_CloseFinding/Edit/<%# Container.ViewData.Eval("Id") %>">
                        <img src="<%= ImageHelper.GetStaticPath("Raven/Icons/BrightBlue_48/back57.png") %>"/>
                        </a>
                      </Template>
                    </ix:TemplateColumn>
                  </MappedColumns>
                </ix:MergeColumn>
<ix:Column For="ActionPlans" Fetchas="collection" Displayas="list" EditMode="popup"/>
              </Columns>
            </ix:GridSection>
            <ix:GridSection For="ActionPlans" ID="ActionPlansGridSection" RefreshScope="Row" Title="Action Plan Summary" ModernIcon="Raven/Icons/BrightBlue_48/fast44.png" DisplayMode="Edit,View" meta:resourcekey="GridSection3" ResourceKey="GridSection3">
              <menu>
<ix:GridCreateActionLink Override="true" OpenIn="popup"/>
<ix:GridListAllActionLink Override="true" Caption="Refresh" meta:resourcekey="GridListAllActionLink0" ResourceKey="GridListAllActionLink0"/>
              </menu>
              <Sorting>
<ix:Sort By="ActionNo" Direction="Ascending"/>
              </Sorting>
              <Columns>
<ix:Column For="ActionNo" LinkTo="default" width="5px"/>
<ix:Column For="CPARActionReq" DisplayAs="Truncate"/>
<ix:Column For="CPARTypeID" FilterAs="dropdown" width="5px"/>
<ix:Column For="Workflow.PersonResponsible" DisplayAs="Label"/>
<ix:Column For="Workflow.DueDate" FOrmat="d" width="5px"/>
<ix:Column For="CompletedBy"/>
<ix:Column For="CompletionDate" FOrmat="d" width="5px"/>
<ix:Column For="Workflow.Status" width="5px"/>
              </Columns>
            </ix:GridSection>
            <ix:GridSection For="RelatedCAR" ID="RelatedCARGridSection" DisplayMode="Edit,View" ModernIcon="Raven/Icons/BrightBlue_48/check49.png">
              <menu>
<ix:GridCreateActionLink Override="true" OpenIn="popup"/>
<ix:GridListAllActionLink Override="true" Caption="Refresh" meta:resourcekey="GridListAllActionLink1" ResourceKey="GridListAllActionLink1"/>
              </menu>
              <Columns>
<ix:Column For="RecordNo" LinkTo="default"/>
<ix:Column For="IssuDescription"/>
<ix:Column For="Severity"/>
<ix:Column For="DateCreated"/>
<ix:Column For="Workflow.DueDate" Caption="Due Date" meta:resourcekey="Column4" ResourceKey="Column4"/>
              </Columns>
            </ix:GridSection>
<ix:MailMergeTemplates DisplayMode="View" ID="MailMergeFragmentGridSection" Title="Audit Print Out" meta:resourcekey="MailMergeTemplates0" ResourceKey="MailMergeTemplates0"/>
<ix:DocumentSection DisplayMode="View, Edit"/>
          </ix:DetailPage>
          <style>
<%= ApplicationSettings.Get("Setup_PreferencesObject","CustomCSS","")  %>
          

		.three-column .group-item , .two-column .group-item {
			width: 100% !important;
		}

		.group-item {
			padding: 3px;
		}

		.data_row.alternate {
			background:none !important;
		}
          </style>
```

### E1894-ConfigurableViewActions

CLF_ChecklistAnswerObject.CLF_ChecklistAnswer_Findings — ConfigurableViewActions; stable record ID ff597a8e-7eb8-47f4-9cc8-fdc9352ef3bc. Source $.GraphData.Items[637].FieldData.ConfigurableViewActions.

```json
[]
```

### E1894-Content

CLF_ChecklistAnswerObject.CLF_ChecklistAnswer_Findings — Content; stable record ID ff597a8e-7eb8-47f4-9cc8-fdc9352ef3bc. Source $.GraphData.Items[637].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar"><ix:EditActionLink Override="true" Visible="false"/><ix:AddEntryActionLink Override="true" Visible="false"/><ix:CloneActionLink Override="true" Visible="false"/><ix:DeleteActionLink Override="true" Visible="false"/></ix:DetailPageMenuBar><ix:GridSection Entity="CLF_FindingObject" HideGroupAddButton="true" Icon="Icons/new/48x48/flag_red.gif" ResourceKey="GridSection0" Title="Findings" meta:resourcekey="GridSection0"><Filters><ix:Filter runat="server" PredicateOperator="Or"><ix:CommonPredicate For="ChecklistAnswer.RecordNo" Type="Equal" runat="server"><ix:Value runat="server" Parse="True"><%= Model.RecordNo %></ix:Value></ix:CommonPredicate><ix:CommonPredicate For="ChecklistAnswer.MasterChecklist.RecordNo" Type="Equal" runat="server"><ix:Value runat="server" Parse="True"><%= Model.RecordNo %></ix:Value></ix:CommonPredicate></ix:Filter></Filters><Menu><ix:GridCreateActionLink Override="true" Visible="False"/></Menu><grouping><ix:Group By="Location"/></grouping><Sorting><ix:Sort runat="server" By="RecordNo" Direction="Ascending"/></Sorting><Columns><ix:Column For="RecordNo" LinkTo="default" /><ix:Column For="Description" truncate="true" /><ix:Column For="ResponseDue" Format="d" /></Columns></ix:GridSection><ix:GridSection For="ActionPlans" ID="ActionPlansGridSection"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="Activites" /><ix:Column For="ActivitiesStart" /><ix:Column For="ActivitProgress" /><ix:Column For="ActualCost" /></Columns></ix:GridSection></ix:DetailPage>
```

### E1924-Content

ConfgAppSetting_PersRespOptionObject.ConfgAppSetting_PersRespOptionObjectInventoryView — Content; stable record ID b1923e61-cf69-4e8b-9a42-4b4255fb92f9. Source $.GraphData.Items[650].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="ConfgAppSetting_PersRespOptionObjectInventory"><ix:InventoryView ID="ConfgAppSetting_PersRespOptionObjectInventoryView"><Sorting><ix:Sort By="Name" Direction="Ascending"/></Sorting><Columns><ix:Column For="Name" LinkTo="default" /><ix:Column For="Active" /><ix:Column For="Sort" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1939-ConfigurableViewActions

CLF_MultichecklistsObject.CLF_Multichecklist_Inventory — ConfigurableViewActions; stable record ID e77ff084-5ca2-4593-9acf-98996c6c9242. Source $.GraphData.Items[656].FieldData.ConfigurableViewActions.

```json
[]
```

### E1939-Content

CLF_MultichecklistsObject.CLF_Multichecklist_Inventory — Content; stable record ID e77ff084-5ca2-4593-9acf-98996c6c9242. Source $.GraphData.Items[656].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Multichecklist_Inventory"><ix:InventoryView ID="CLF_Multichecklist_InventoryView"><Columns><ix:Column For="RecordNo" Linkto="default"/><ix:Column For="Name" LinkTo="default"/><ix:Column For="PersResponsible"/><ix:Column For="SubChecklists.PubChecklist" FetchAs="Collection" DIsplayAs="List" Caption="Audit Areas" meta:resourcekey="Column0" ResourceKey="Column0"/><ix:Column For="Workflow.RecurringSeries.StartDate"/><ix:Column For="ApplicQuestions" Caption="# of Questions Assigned" meta:resourcekey="Column1" ResourceKey="Column1"/><ix:Column For="FilledQuestions" Caption="# of Questions Answered" meta:resourcekey="Column2" ResourceKey="Column2"/><ix:Column For="Score"/><ix:Column For="Progress"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1946-ConfigurableViewActions

CLF_ChoiceListObject.CLF_ChoiceList_Detail — ConfigurableViewActions; stable record ID e18ca4b4-7d9c-4fdb-96fe-1497fccad9cd. Source $.GraphData.Items[658].FieldData.ConfigurableViewActions.

```json
[]
```

### E1946-Content

CLF_ChoiceListObject.CLF_ChoiceList_Detail — Content; stable record ID e18ca4b4-7d9c-4fdb-96fe-1497fccad9cd. Source $.GraphData.Items[658].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Choice List" Icon="Icons/new/48x48/index.gif" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Reference"/><ix:Field For="Name"/><ix:Field For="Description"/><ix:Field For="MaxPoints" DisplayMode="View, Edit"/></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayMode="View,Edit" EditLinkTarget="popup" For="Choices" ID="ChoicesGridSection"><Menu><ix:GridCreateActionLink Override="true" OpenIn="popup"/></Menu><Sorting><ix:Sort runat="server" By="Name" Direction="Ascending"/></Sorting><aliases><ix:Alias For="TColor.Value"/><ix:Alias For="BColor.Value"/></aliases><Columns><ix:Column EditMode="Inline" For="Reference" LinkTo="default" RefreshScope="Row"/><ix:TemplateColumn For="Name" EditMode="inline" RefreshScope="Row"><Template><div style="color:<%# Container.ViewData.Eval("TColor.Value") %>;background-color:<%# Container.ViewData.Eval("BColor.Value") %>;<%# Container.ViewData.Eval("Css") %>"><%# Container.ViewData.Eval("Name") %></div></Template></ix:TemplateColumn><ix:Column EditMode="Inline" For="Value" RefreshScope="Row"/><ix:Column For="SortOrder" EditMode="Inline"/><ix:Column EditMode="Inline" FilterAs="dropdown" For="IsNA" RefreshScope="Row"/><ix:Column EditMode="Inline" FilterAs="dropdown" For="BColor" RefreshScope="Row"/><ix:Column EditMode="Inline" FilterAs="dropdown" For="TColor" RefreshScope="Row"/><ix:Column For="Css" RefreshScope="Row" ReadOnly="false" EditMode="Inline"/><ix:Column EditMode="Inline" ReadOnly="true" For="MobileAction" RefreshScope="Row" Visible="false"/></Columns></ix:GridSection></ix:DetailPage><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E1954-Content

CLF_QuestObject.CLF_Quest_Select — Content; stable record ID d12fe8b5-ba10-420f-aa3d-74ea78dec094. Source $.GraphData.Items[660].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Quest_Select"><ix:InventoryView ID="CLF_Quest_SelectView"><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></Menu><Columns><ix:Column For="QuestionRef"/><ix:Column For="Content"/><ix:Column FilterAs="dropdown" For="ChecklistType"/><ix:Column FilterAs="dropdown" For="ChoiceList"/><ix:Column For="UseExisting"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1989-ConfigurableViewActions

CLF_PubChecklistObject.CLF_PubChecklist_Detail — ConfigurableViewActions; stable record ID b588fbc8-f8a0-4d3b-b2bd-ec2987ae6aac. Source $.GraphData.Items[674].FieldData.ConfigurableViewActions.

```json
[]
```

### E1989-Content

CLF_PubChecklistObject.CLF_PubChecklist_Detail — Content; stable record ID b588fbc8-f8a0-4d3b-b2bd-ec2987ae6aac. Source $.GraphData.Items[674].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Published Checklist" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Location" ReadOnly="True" DisplayAs="string"/><ix:Field For="Checklist"/><ix:Field For="ChecklistRef"/><ix:Field For="Title"/><ix:Field For="Description"/><ix:Field For="ChecklistType"/></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View" For="PubQuestions" HideGroupAddButton="true" ID="PubQuestionsGridSection" Readonly="true" RowSelectionMode="None"><grouping><ix:Group By="Section"/></grouping><Sorting><ix:Sort runat="server" By="Order" Direction="Ascending"/></Sorting><Columns><ix:Column For="QuestionRef" LinkTo="default"/><ix:Column DisplayAs="Truncate" For="Content"/><ix:Column FilterAs="Dropdown" For="AnswerType"/><ix:Column FilterAs="Dropdown" For="ChoiceList"/><ix:Column For="DateCreated" Format="d"/></Columns></ix:GridSection></ix:DetailPage>
```

### E1994-ConfigurableViewActions

CLF_FindingObject.CLF_Finding_Detail_Readonly — ConfigurableViewActions; stable record ID c5de9527-0aed-4c33-b4c8-fe049a8ac0e9. Source $.GraphData.Items[676].FieldData.ConfigurableViewActions.

```json
[
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Show Manual Close Comment",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "ManualClose",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "true",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ActionPlanGridSection",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ActionPlanGridSection",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "ManualClose"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Show / Hide Stuff depending on Status",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": "A OR B",
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "FindingStatus.Code",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "Open",
                "entityType": null,
                "text": null
              }
            },
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "FindingStatus.Code",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "Closed without Action",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ManualCloseSection",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ManualCloseSection",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "FindingStatus.Code"
      }
    ]
  }
]
```

### E1994-Content

CLF_FindingObject.CLF_Finding_Detail_Readonly — Content; stable record ID c5de9527-0aed-4c33-b4c8-fe049a8ac0e9. Source $.GraphData.Items[676].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar"><ix:CloneActionLink Override="true" Visible="False"/><ix:AddEntryActionLink Override="true" Visible="False"/><ix:SecurityActionLink Override="true" Visible="False"/><ix:DeleteActionLink Override="true" Visible="False"/><ix:SaveAddNewActionLink Override="true" Visible="False"/><ix:EditActionLink Override="true" Visible="False"/></ix:DetailPageMenuBar><ix:DetailSection Title="Finding Details" ModernIcon="Raven/Icons/BrightBlue_48/flag31.png" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="ChecklistAnswer" Readonly="true" SpellCheck="false"/><ix:Field Caption="Finding Status" For="FindingStatus.Code" meta:resourcekey="Field0" ResourceKey="Field0"/><ix:Field EditAs="radiogroup" For="Severity" Visible="false" Readonly="True" SpellCheck="false"/><ix:Field For="Description" Readonly="True" SpellCheck="false"/><ix:Field For="PersResponsible" Readonly="True"/><ix:Field DisplayMode="Create" For="DueIn" Readonly="True"/><ix:Field DisplayMode="View,Edit" For="ResponseDue" Readonly="True"/><ix:Field Caption="Suggested Action Plan" For="ImmediateAction" Readonly="True" SpellCheck="false" meta:resourcekey="Field1" ResourceKey="Field1"/><ix:Field For="ActionPlanCheck" Visible="false"/></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View,Edit" For="QuestionAnswers" HideGroupAddButton="true" ID="QuestionAnswersGridSection" IsCollapsed="True" ModernIcon="Raven/Icons/BrightBlue_48/questions5.png" RowSelectionMode="None" UseCookies="false"><Menu><ix:GridAttachActionLink Override="true" Visible="False"/><ix:GridDetachActionLink Override="true" Visible="False"/></Menu><Sorting><ix:Sort By="PubQuestion.Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="PubQuestion.Section"/></grouping><aliases><ix:Alias For="ChecklistAnswerId"/><ix:Alias For="PubQuestion.Guideline"/><ix:Alias For="PubQuestion.Id"/><ix:Alias For="Choice.BColor.Value"/><ix:Alias For="Choice.TColor.Value"/><ix:Alias For="Choice.Css"/></aliases><Columns><ix:TemplateColumn For="PubQuestion.Content" Width="1"><Template><span style="font-weight:bold;"><%# Container.ViewData.Eval("PubQuestion.QuestionRef") %> <%# Container.ViewData.Eval("PubQuestion.Content") %></span><div class="fieldHint"><%# Container.ViewData.Eval("PubQuestion.Guideline") %></div></Template></ix:TemplateColumn><ix:MergeColumn Caption="Answer" For="PubQuestion.AnswerType.Value" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0"><MappedColumns><ix:TemplateColumn MapValue="Choice_Disable" For="Choice"><Template><div style="color:<%# Container.ViewData.Eval("Choice.TColor.Value") %>;background-color:<%# Container.ViewData.Eval("Choice.BColor.Value") %>;<%# Container.ViewData.Eval("Choice.Css") %>"><%# Container.ViewData.Eval("Choice") %></div></Template></ix:TemplateColumn><ix:Column For="Choice" MapValue="Choice" /><ix:Column For="Date" Format="d" MapValue="Date" /><ix:Column DisplayAs="List" FetchAs="collection" For="Choices" MapValue="Choices" /><ix:Column For="Float" HorizontalAlign="right" MapValue="Float" /><ix:Column For="Text" MapValue="Text" /><ix:Column For="Checkbox" MapValue="Checkbox" /></MappedColumns></ix:MergeColumn><ix:Column For="Comments" /><ix:Column Caption="#Docs" For="NumbofDocuments" HorizontalAlign="center" LinkTarget="popup" LinkTo="CLF_QuestionAnswer_Docs_Readonly/View?entityid={#id}" ResourceKey="Column0" meta:resourcekey="Column0" width="5px" /></Columns></ix:GridSection><ix:TabsSection Title="Evidence" ShowHeader="true" ModernIcon="Raven/Icons/BrightBlue_48/folder232.png" meta:resourcekey="TabsSection0" ResourceKey="TabsSection0"><ix:Tab Caption="Upload" meta:resourcekey="Tab0" ResourceKey="Tab0"><ix:AttachmentSection ID="AttachmentFragmentGridSection" Title="Upload images" CssClass="HideBorders" isCollapsed="false" UseCookies="false" Readonly="true" meta:resourcekey="AttachmentSection0" ResourceKey="AttachmentSection0"/></ix:Tab><ix:Tab Caption="Image Preview" DisplayMode="View,Edit" meta:resourcekey="Tab1" ResourceKey="Tab1"><ix:GridPanel Entity="DocDocumentAttachmentsEntity" isCollapsed="false" UseCookies="false" ShowColumnCaptions="false" AllowPaging="false" AllowFiltering="false" AllowSorting="false" RowSelectionMode="None" Readonly="True" DisplayMode="View,Edit" DisplayEditColumn="false" CssClass="HideBorders"><Filters><ix:Filter><ix:CommonPredicate For="ObjectRecordId" Type="Equal"><ix:Value Parse="True">393ae517-3ae2-43db-b379-cce30d4eed0e</ix:Value></ix:CommonPredicate></ix:Filter><ix:Filter PredicateOperator="or"><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.png</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.jpg</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>.gif</ix:Value></ix:LikePredicate></ix:Filter></Filters><aliases><ix:Alias For="Id"/><ix:Alias For="AttachmentName"/></aliases><columns><ix:TemplateColumn><template><div class="imagepreview" title="895cb0b6-1b10-4e16-8fb6-758d3c72f4b3" style="background-image:url('ae537e49-2ee4-4958-ae39-f7f8e666b043/intelexforms/attachmentsection/downloadfile?recordid=fe0f7cf7-43d0-4dca-87ed-14b8a1086c36')"/></template></ix:TemplateColumn></columns></ix:GridPanel></ix:Tab></ix:TabsSection><ix:DetailSection Title="Close Finding" Id="ManualCloseSection" ModernIcon="Raven/Icons/BrightBlue_48/cancel29.png" meta:resourcekey="DetailSection1" ResourceKey="DetailSection1"><ix:FieldArea Span="true"><ix:Field For="ManualClose"/><ix:Field For="ManCloseCom" SpellCheck="false"/></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View" For="AbsCorActPlan:CLF_InsActionPlanObject" Id="ActionPlanGridSection" ModernIcon="Raven/Icons/BrightBlue_48/acceptance.png" ResourceKey="GridSection0" Title="Action Plan Summary" meta:resourcekey="GridSection0"><Sorting><ix:Sort By="ActionNo" Direction="Ascending"/></Sorting><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column DisplayAs="Truncate" For="CPARActionReq" /><ix:Column DisplayAs="Label" For="Workflow.PersonResponsible" /><ix:Column FOrmat="d" For="Workflow.DueDate" /><ix:Column For="CompletedBy" /><ix:Column FOrmat="d" For="CompletionDate" /><ix:Column For="Workflow.WorkflowStatus" /></Columns></ix:GridSection></ix:DetailPage><style>.data_row td.wrap {
    white-space: normal !important;
}

.one-column .group-item {
clear: none !important;
}
.group-item {
float: left;
width: auto!important;
padding-right:10px;
}

.group {
border:none!important;
}

.HideBorders > .header {
    display: none;
}

.HideBorders > .footer {
    display: none;
}

.HideBorders > .content {
    border: medium none;
    padding: 0;
}

.imagepreview {
background-repeat:no-repeat;
max-width:500px;
min-height:300px;
background-size:contain;
}</style><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E2027-Content

Insp_IReviewDecisionObject.Insp_IReviewDecisionObjectDetailView — Content; stable record ID 9b6f5fb4-f401-43e0-ac41-2c21cacdf522. Source $.GraphData.Items[691].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Fields"><ix:FieldArea><ix:Field For="Name"/><ix:Field For="Active"/><ix:Field For="Sort"/></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:WorkflowComments/><ix:WorkflowTracking/><ix:ESignatureHistorySection/></ix:DetailPage><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E2045-ConfigurableViewActions

ConfgAppSetting_SpecAppSettingsObject.ConfgAppSetting_SpecAppSettingsObjectDetailView — ConfigurableViewActions; stable record ID fae736f7-8f6a-4575-9cdb-4e2f6f216e7e. Source $.GraphData.Items[698].FieldData.ConfigurableViewActions.

```json
[]
```

### E2045-Content

ConfgAppSetting_SpecAppSettingsObject.ConfgAppSetting_SpecAppSettingsObjectDetailView — Content; stable record ID fae736f7-8f6a-4575-9cdb-4e2f6f216e7e. Source $.GraphData.Items[698].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Specific App Settings Details" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Name" /><ix:Field For="DateModified" ReadOnly="true" /><ix:Field DisplayAs="string" For="ModifiedBy" ReadOnly="true" /><ix:Field For="DueDateIcon" /></ix:FieldArea></ix:DetailSection><ix:DetailSection Title="Icons" meta:resourcekey="DetailSection1" ResourceKey="DetailSection1"><ix:Panel Title="General" meta:resourcekey="Panel0" ResourceKey="Panel0"><ix:FieldArea Span="true"><ix:Field DisplayMode="Create,Edit" For="CalIconSel" /><ix:Field DisplayMode="View" For="CalIconSel.SVGCode" IsMandatory="true" Span="true"><DisplayTemplate><div class="IconPreview"><%= (ViewData.Eval("CalIconSel.SVGCode")) %></div></DisplayTemplate></ix:Field><ix:Field DisplayMode="Create,Edit" For="ClockIcon" /><ix:Field DisplayMode="View" For="ClockIcon.SVGCode" IsMandatory="true" Span="true"><DisplayTemplate><div class="IconPreview"><%= (ViewData.Eval("ClockIcon.SVGCode")) %></div></DisplayTemplate></ix:Field><ix:Field DisplayMode="Create,Edit" For="LoStructureIcon" /><ix:Field DisplayMode="View" For="LoStructureIcon.SVGCode" IsMandatory="true" Span="true"><DisplayTemplate><div class="IconPreview"><%= (ViewData.Eval("LoStructureIcon.SVGCode")) %></div></DisplayTemplate></ix:Field></ix:FieldArea></ix:Panel><ix:Panel Title="Workflow" meta:resourcekey="Panel1" ResourceKey="Panel1"><ix:FieldArea Span="true"><ix:Field DisplayMode="Create,Edit" For="WrkflowStaIcon" /><ix:Field DisplayMode="View" For="WrkflowStaIcon.SVGCode" IsMandatory="true" Span="true"><DisplayTemplate><div class="IconPreview"><%= (ViewData.Eval("WrkflowStaIcon.SVGCode")) %></div></DisplayTemplate></ix:Field><ix:Field DisplayMode="Create,Edit" For="ResIconWorkflow" /><ix:Field DisplayMode="View" For="ResIconWorkflow.SVGCode" IsMandatory="true" Span="true"><DisplayTemplate><div class="IconPreview"><%= (ViewData.Eval("ResIconWorkflow.SVGCode")) %></div></DisplayTemplate></ix:Field><ix:Field For="DueIconWorkflow" IsMandatory="true" Span="true"><DisplayTemplate><div class="IconPreview"><%= (ViewData.Eval("DueIconWorkflow")) %></div></DisplayTemplate></ix:Field></ix:FieldArea></ix:Panel></ix:DetailSection></ix:DetailPage><style>.IconPreview > svg {
width:50px;
height:50px;
}</style>
```

### E2088-Content

CLF_FindingObject.CLF_Finding_Select — Content; stable record ID 0eb680ee-1916-4c97-ad35-9fc9972c7822. Source $.GraphData.Items[713].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Finding_Select"><ix:InventoryView ID="CLF_Finding_SelectView"><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></Menu><aliases><ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/><ix:Alias For="Severity.TextColor.Value" Name="TC"/><ix:Alias For="Severity.CSS" Name="CSS"/><ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/><ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/></aliases><Columns><ix:Column For="RecordNo"/><ix:Column DisplayAs="Truncate" For="Description"/><ix:TemplateColumn For="Severity" FilterAs="Dropdown"><template><div style="background-color:<%# Container.ViewData.Eval("BC") %>;color:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>"><%# Container.ViewData.Eval("Severity") %></div></template></ix:TemplateColumn><ix:Column For="ResponseDue" Format="d"/><ix:Column For="PersResponsible"/><ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center"><Template><div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>"><%# Container.ViewData.Eval("FindingStatus") %></div></Template></ix:TemplateColumn><ix:Column DisplayAs="List" FetchAs="Collection" For="ActionPlans"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E2265-Content

CLF_PreferencesObject.CLF_Preferences_Inventory — Content; stable record ID 2139b754-a47f-470c-833d-74e106b5f31b. Source $.GraphData.Items[759].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_PreferencesObjectInventory"><ix:InventoryView ID="CLF_PreferencesObjectInventoryView" AllowSorting="false" RowSelectionMode="None"><Menu><ix:GridCreateActionLink Override="true" Visible="false" runat="server"/><ix:GridDeleteActionLink Override="true" Visible="false" runat="server"/></Menu><Columns><ix:Column For="Name" LinkTo="default" AllowSorting="false"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E2294-ConfigurableViewActions

CLF_QuestObject.CLF_Quest_ToolBox_Detail — ConfigurableViewActions; stable record ID 38b68d38-d451-48aa-8735-b97e1ae22049. Source $.GraphData.Items[770].FieldData.ConfigurableViewActions.

```json
[
  {
    "__type": "AdvancedViewAction",
    "enabled": true,
    "name": "Show/Hide Choice List",
    "stageContainers": [],
    "content": "{\n        onPageLoad: true,\n        triggers: ['AnswerType'],\n        actions: [{\n                __type: 'decision',\n                condition: function () {\n                        return (Intelex.DetailPage.getField('AnswerType').value.eq('771916e1-5251-4658-add8-3091457e7295') || Intelex.DetailPage.getField('AnswerType').value.eq('93ab1484-09ce-4868-9618-bfa62ea0b01c'));\n                },\n                trueDecision: [{\n                        __type: 'show',\n                        elements: ['ChoiceList']\n                }, {\n                        __type: 'setMandatory',\n                        elements: ['ChoiceList']\n                }],\n                falseDecision: [{\n                        __type: 'hide',\n                        elements: ['ChoiceList']\n                }, {\n                        __type: 'setNonMandatory',\n                        elements: ['ChoiceList']\n                }]\n        }]\n}"
  }
]
```

### E2294-Content

CLF_QuestObject.CLF_Quest_ToolBox_Detail — Content; stable record ID 38b68d38-d451-48aa-8735-b97e1ae22049. Source $.GraphData.Items[770].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Question" Icon="Icons/new/48x48/help2.gif"><ix:FieldArea Span="true"><ix:Field For="ChecklistType" ReadOnly="true" SpellCheck="false"/><ix:Field For="QuestionRef"/><ix:Field For="Order"/><ix:Field EditAs="SmallTextArea" For="Content" IsMandatory="True"/><ix:Field EditAs="SmallTextArea" For="Guideline"/><ix:Field EditAs="SmallTextArea" For="Section"/><ix:Field For="AnswerType" IsMandatory="True"/><ix:Field For="ChoiceList"/><ix:Field Span="true"/><ix:Field For="UseExisting"/><ix:Field For="HelperChecklist"/><ix:Field For="ExistingSection"/><ix:Field For="AbsoluteOrder"/></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View" For="PubQuestions" ID="PubQuestionsGridSection" IsColllapsed="True" ReadOnly="true" RowSelectionMode="None" Title="Question Version History"><Sorting><ix:Sort runat="server" By="DateCreated" Direction="Descending"/></Sorting><Columns><ix:Column For="QuestionRef" LinkTo="Default"/><ix:Column DisplayAs="html" For="Content" Width="1"/><ix:Column For="ChoiceList"/><ix:Column For="DateCreated" Format="g"/></Columns></ix:GridSection></ix:DetailPage><style>#TextReferences {
background-color: white;
border: 1px solid #DDDDDD;
padding: 5px;
}</style><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E2350-Content

CLF_PubChecklistObject.CLF_PubChecklist_Inventory — Content; stable record ID 3cc954e8-215a-4976-8a3a-062fe602fd43. Source $.GraphData.Items[789].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_PubChecklist_Inventory"><ix:InventoryView ID="CLF_PubChecklist_InventoryView" HideGroupAddButton="true" PageSize="50"><Grouping><ix:Group by="Checklist.ChecklistType"/></Grouping><Menu><ix:GridCreateActionLink runat="server" Override="true" visible="false"/><ix:GridDeleteActionLink runat="server" Override="true" visible="false"/></Menu><Columns><ix:Column For="ChecklistRef" width="5px"/><ix:Column For="Title"/><ix:Column For="Description"/><ix:Column For="Location" DisplayAs="String" wrap="true"/><ix:Column FilterAs="dropdown" For="Checklist.ChecklistType"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E2358-ConfigurableViewActions

ConfgAppSetting_TPanelGeneratorObject.ConfgAppSetting_TPanelGeneratorObjectDetailView — ConfigurableViewActions; stable record ID 88ed49db-928b-4fe4-9bbb-c93bb373c0c3. Source $.GraphData.Items[793].FieldData.ConfigurableViewActions.

```json
[]
```

### E2358-Content

ConfgAppSetting_TPanelGeneratorObject.ConfgAppSetting_TPanelGeneratorObjectDetailView — Content; stable record ID 88ed49db-928b-4fe4-9bbb-c93bb373c0c3. Source $.GraphData.Items[793].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Instruction Text Panel Generator Details" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="TemplateName" /><ix:Field DisplayMode="View,Edit" For="RecordNo" /><ix:Field For="HTMLTemplate" SpellCheck="false" /><ix:Field For="CSSTemplate" /></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:WorkflowComments/><ix:WorkflowTracking/><ix:ESignatureHistorySection/><ix:GridSection For="InstructionPane" ID="InstructionPaneGridSection"><Columns><ix:Column For="Application" LinkTo="default"/><ix:Column For="Form"/><ix:Column For="Stage"/><ix:Column For="InstrTextHeader"/><ix:Column For="InstructiText"/></Columns></ix:GridSection></ix:DetailPage>
```

### E2372-ConfigurableViewActions

CLF_TagObject.CLF_Tag_Detail — ConfigurableViewActions; stable record ID ebb8cd08-9901-401c-888a-7f20d2d0e1ba. Source $.GraphData.Items[798].FieldData.ConfigurableViewActions.

```json
[]
```

### E2372-Content

CLF_TagObject.CLF_Tag_Detail — Content; stable record ID ebb8cd08-9901-401c-888a-7f20d2d0e1ba. Source $.GraphData.Items[798].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Tag" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Name"/></ix:FieldArea></ix:DetailSection></ix:DetailPage>
```

### E2378-Content

ActionPlans_ActioPlanTemObject.ActionPlans_ActionPlanTem_Select — Content; stable record ID 980204a7-e683-44c3-851f-597e30f75135. Source $.GraphData.Items[800].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="FragApplication_ActionTemplate_Select"><ix:InventoryView ID="FragApplication_ActionTemplate_SelectView" HideGroupAddButton="true" DisplayEditColumn="false" RowSelectionMode="None"><Grouping><ix:Group by="Category"/></Grouping><aliases><ix:Alias For="TypeofActivity.Value"/></aliases><Filters><ix:Filter><ix:CommonPredicate For="TypeofActivity.Value" Type="equal" runat="server"><ix:Value Parse="true" runat="server">ActionPlans_ActivitySequenObject</ix:Value></ix:CommonPredicate></ix:Filter></Filters><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></Menu><Columns><ix:Column For="RecordNo"/><ix:Column For="Name"/><ix:Column For="Description" DisplayAs="Truncate"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E2392-Content

CLF_ChecklistAnswerObject.CLF_ChecklistAnswer_Inventory — Content; stable record ID 916b3885-7512-47ff-b607-c66c1ee3d6bb. Source $.GraphData.Items[806].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_ChecklistAnswer_Inventory"><ix:InventoryView ID="CLF_ChecklistAnswer_InventoryView"><Entities><ix:ExcludeEntity name="CLF_SubchecklistObject"/></Entities><Sorting><ix:Sort runat="server" By="Path" Direction="Ascending"/></Sorting><Columns><ix:Column For="Path" LinkTo="default"/><ix:Column Caption="Type" FilterAs="dropdown" For="SystemType.Caption" meta:resourcekey="Column0" ResourceKey="Column0"/><ix:Column For="Name"/><ix:Column DisplayAs="label" For="Location"/><ix:Column For="Progress" HorizontalAlign="center"/><ix:Column Caption="#F" For="NbFindings" HorizontalAlign="center" LinkTarget="popup" LinkTo="CLF_ChecklistAnswer_Findings/View?entityid={#id}" meta:resourcekey="Column1" ResourceKey="Column1"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E2424-ConfigurableViewActions

Insp_EquipInspectionObject.Fragment_Insp_EquipInspection_QuestionAnswer — ConfigurableViewActions; stable record ID a309f597-f51d-4bcc-8dd8-acb624ed0450. Source $.GraphData.Items[815].FieldData.ConfigurableViewActions.

```json
[]
```

### E2424-Content

Insp_EquipInspectionObject.Fragment_Insp_EquipInspection_QuestionAnswer — Content; stable record ID a309f597-f51d-4bcc-8dd8-acb624ed0450. Source $.GraphData.Items[815].FieldData.Content.

```xml
<ix:FieldArea visible="false"><ix:Field For="PubChecklist.Checklist.Title" /><ix:Field For="CommtoReviewer2" /><ix:Field For="IPReview2" /></ix:FieldArea>
<% if (Model.TypeOfInspec.SpeWorkflowRule.FindingTracking == true) { %>
<ix:GridSection Id="QuestionAnswers_Grid_Findings" For="QuestionAnswers" Title="{#PubChecklist.Checklist.Title}" AllowSorting="false" HideGroupAddButton="true" ModernIcon="Raven/Icons/BrightBlue_48/note21.png" meta:resourcekey="GridSection0" ResourceKey="GridSection0">
  <Menu DisplaySystemButtons="true">
    <ix:GridCreateActionLink Override="true" Visible="false"/>
    <ix:GridDeleteActionLink Override="true" Visible="false"/>
    <ix:GridListAllActionLink Override="true" openIn="popup" comments="leave this, needed for custom URLs to open in popup"/>
  </Menu>
  <Sorting>
    <ix:Sort By="SectionAnswer.Sort" Direction="Ascending"/>
    <ix:Sort By="PubQuestion.AbsoluteOrder" Direction="Ascending"/>
  </Sorting>
  <grouping>
    <ix:Group By="SectionAnswer" HeaderCaption="Section"/>
  </grouping>
  <aliases>
    <ix:Alias For="PubQuestion.QuestionRef"/>
    <ix:Alias For="PubQuestion.Guideline"/>
    <ix:Alias For="PubQuestion.Question.UseReferences" Name="DisplayRef"/>
    <ix:Alias For="PubQuestion.Question.Id" Name="QuestionId"/>
  </aliases>
  <Columns>
    <ix:TemplateColumn For="IsSubmitReady" width="5px" Caption="Ready?" visible="true" meta:resourcekey="TemplateColumn0" ResourceKey="TemplateColumn0">
      <template>
        <clfIsSubmitReady/>
      </template>
    </ix:TemplateColumn>
    <ix:TemplateColumn For="PubQuestion.Content" Width="1">
      <Template>
        <div class="clf-question-container">
          <div class="clf-question-row">
            <div class="clf-question-content"><%# Html.Encode(Container.ViewData.Eval("PubQuestion.Content")) %>
            </div>
            <div class="clf-question-code">[<%# Html.Encode(Container.ViewData.Eval("PubQuestion.QuestionRef")) %>]
            </div>
            <div class="clf-question-info" style="display:<%# Html.Encode(Container.ViewData.Eval("DisplayRef")).ToString() == "True" ? "block" : "none" %>;">
              <a title="Question References" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Question_References_Detail/View?entityid=<%# Container.ViewData.Eval("QuestionId") %>">
                <img src="<%= ImageHelper.GetStaticPath("Icons/new/24x24/help2.gif") %>"/>
              </a>
            </div>
          </div>
          <div class="clf-question-guideline"><%# Html.Encode(Container.ViewData.Eval("PubQuestion.Guideline")) %>
          </div>
        </div>
      </Template>
    </ix:TemplateColumn>
    <ix:TemplateColumn For="AnswerText" Caption="Answer" meta:resourcekey="TemplateColumn1" ResourceKey="TemplateColumn1">
      <template>
        <div class="answer-container">
          <clfIsNA/>
          <clfAnswer DisplayAs="buttons"/>
        </div>
      </template>
    </ix:TemplateColumn>
    <ix:TemplateColumn For="PubQuestion.Section" Caption="Comments" HeaderFilterCssClass="section-filter" meta:resourcekey="TemplateColumn4" ResourceKey="TemplateColumn4">
      <template>
        <div class="answer-container">
          <clfComments/>
          <clfDocsButton/>
        </div>
      </template>
    </ix:TemplateColumn>
    <ix:TemplateColumn For="IsFindingMiss" HorizontalAlign="center" width="5px" Caption="# Findings" meta:resourcekey="TemplateColumn2" ResourceKey="TemplateColumn2">
      <template>
        <clfFindingsButton/>
      </template>
    </ix:TemplateColumn>
    <ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="Findings" wrap="true"/>
  </Columns>
</ix:GridSection>
<%   } %> 
<% if (Model.TypeOfInspec.SpeWorkflowRule.FindingTracking != true) { %>
<ix:GridSection Id="QuestionAnswers_Grid_NoFindings" For="QuestionAnswers" Title="{#PubChecklist.Checklist.Title}" AllowSorting="false" HideGroupAddButton="true" ModernIcon="Raven/Icons/BrightBlue_48/note21.png" meta:resourcekey="GridSection0" ResourceKey="GridSection0">
  <Menu DisplaySystemButtons="true">
    <ix:GridCreateActionLink Override="true" Visible="false"/>
    <ix:GridDeleteActionLink Override="true" Visible="false"/>
    <ix:GridListAllActionLink Override="true" openIn="popup" comments="leave this, needed for custom URLs to open in popup"/>
  </Menu>
  <Sorting>
    <ix:Sort By="SectionAnswer.Sort" Direction="Ascending"/>
    <ix:Sort By="PubQuestion.AbsoluteOrder" Direction="Ascending"/>
  </Sorting>
  <grouping>
    <ix:Group By="SectionAnswer" HeaderCaption="Section"/>
  </grouping>
  <aliases>
    <ix:Alias For="PubQuestion.QuestionRef"/>
    <ix:Alias For="PubQuestion.Guideline"/>
    <ix:Alias For="PubQuestion.Question.UseReferences" Name="DisplayRef"/>
    <ix:Alias For="PubQuestion.Question.Id" Name="QuestionId"/>
  </aliases>
  <Columns>
    <ix:TemplateColumn For="IsSubmitReady" width="5px" Caption="Ready?" visible="true" meta:resourcekey="TemplateColumn0" ResourceKey="TemplateColumn0">
      <template>
        <clfIsSubmitReady/>
      </template>
    </ix:TemplateColumn>
    <ix:TemplateColumn For="PubQuestion.Content" Width="1">
      <Template>
        <div class="clf-question-container">
          <div class="clf-question-row">
            <div class="clf-question-content"><%# Html.Encode(Container.ViewData.Eval("PubQuestion.Content")) %>
            </div>
            <div class="clf-question-code">[<%# Html.Encode(Container.ViewData.Eval("PubQuestion.QuestionRef")) %>]
            </div>
            <div class="clf-question-info" style="display:<%# Html.Encode(Container.ViewData.Eval("DisplayRef")).ToString() == "True" ? "block" : "none" %>;">
              <a title="Question References" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Question_References_Detail/View?entityid=<%# Container.ViewData.Eval("QuestionId") %>">
                <img src="<%= ImageHelper.GetStaticPath("Icons/new/24x24/help2.gif") %>"/>
              </a>
            </div>
          </div>
          <div class="clf-question-guideline"><%# Html.Encode(Container.ViewData.Eval("PubQuestion.Guideline")) %>
          </div>
        </div>
      </Template>
    </ix:TemplateColumn>
    <ix:TemplateColumn For="AnswerText" Caption="Answer" meta:resourcekey="TemplateColumn1" ResourceKey="TemplateColumn1">
      <template>
        <div class="answer-container">
          <clfIsNA/>
          <clfAnswer DisplayAs="buttons"/>
        </div>
      </template>
    </ix:TemplateColumn>
    <ix:TemplateColumn For="PubQuestion.Section" Caption="Comments" HeaderFilterCssClass="section-filter" meta:resourcekey="TemplateColumn4" ResourceKey="TemplateColumn4">
      <template>
        <div class="answer-container">
          <clfComments/>
          <clfDocsButton/>
        </div>
      </template>
    </ix:TemplateColumn>
    <ix:TemplateColumn For="IsActionMiss" HorizontalAlign="center" width="5px" Caption="# Actions" meta:resourcekey="TemplateColumn3" ResourceKey="TemplateColumn3">
      <template>
        <clfActionPlansButton/>
      </template>
    </ix:TemplateColumn>
    <ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="ActionPlans" wrap="true"/>
  </Columns>
</ix:GridSection>
<%   } %> 
<%= ApplicationSettings.Get("ImplemenManager_SettingsObject","IGridCustomCodeIGridCustomCode","")  %>
```

### E2498-Content

ActionPlans_ActionPlanAbsObject.ActionPlans_ActionPlanAbs_Inventory — Content; stable record ID 3e06ea44-fd66-4a82-bfeb-0b4783ce03bf. Source $.GraphData.Items[830].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="Actions_ActionAbs_Inventory"><ix:InventoryView ID="Actions_ActionAbs_InventoryView" Caption="Action Plans" meta:resourcekey="InventoryView0" ResourceKey="InventoryView0"><Columns><ix:Column For="ActionNo" LinkTo="default"/><ix:Column DisplayAs="label" For="Location"/><ix:Column DisplayAs="Truncate" For="CPARActionReq"/><ix:Column FilterAs="dropdown" For="CPARTypeID" HorizontalAlign="center"/><ix:Column DisplayAs="label" For="Workflow.PersonResponsible"/><ix:Column For="Workflow.DueDate" Format="d" HorizontalAlign="center"/><ix:Column For="Workflow.WorkflowStatus" HorizontalAlign="center"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E2501-Content

Insp_EquipInspectionObject.Insp_EquipInspectionObjectInventoryView — Content; stable record ID 684af9b0-e14c-4c23-9677-4ba154ec0844. Source $.GraphData.Items[831].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="Insp_EquipInspectionObjectInventory"><ix:InventoryView ID="Insp_EquipInspectionObjectInventoryView"><Columns><ix:Column For="Name" LinkTo="default" /><ix:Column For="ApplicQuestions" /><ix:Column For="Comments" /><ix:Column For="Depth" /><ix:Column For="FilledQuestions" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E2503-ConfigurableViewActions

CLF_SectionObject.CLF_SectionObjectDetailView — ConfigurableViewActions; stable record ID e8a98d14-8761-44cd-ab0d-661f6d3b7e60. Source $.GraphData.Items[832].FieldData.ConfigurableViewActions.

```json
[]
```

### E2503-Content

CLF_SectionObject.CLF_SectionObjectDetailView — Content; stable record ID e8a98d14-8761-44cd-ab0d-661f6d3b7e60. Source $.GraphData.Items[832].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Checklist Section Details" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Checklist"/><ix:Field For="SectionName"/><ix:Field For="Sort" DisplayMode="Edit, View"/></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:WorkflowComments/><ix:WorkflowTracking/><ix:ESignatureHistorySection/><ix:GridSection For="Questions" ID="QuestionsGridSection" DisplayMode="Edit, View"><Menu><ix:GridCreateActionLink Override="true" Visible="false" runat="server"/><ix:GridDeleteActionLink Override="true" Visible="false" runat="server"/></Menu><Columns><ix:Column For="QuestionRef" LinkTo="default"/><ix:Column DisplayAs="Truncate" EditMode="inline" For="Content"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="AnswerType" RefreshScope="Row"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="ChoiceList" RefreshScope="Row"/><ix:Column EditMode="inline" For="Order"/></Columns></ix:GridSection></ix:DetailPage><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E2579-ConfigurableViewActions

Insp_EquipInspectionObject.Insp_EquipInspection_Frag_QuestionAnswer — ConfigurableViewActions; stable record ID e8de38f0-d7e6-45d7-ad7d-2ce24edc9975. Source $.GraphData.Items[842].FieldData.ConfigurableViewActions.

```json
[]
```

### E2579-Content

Insp_EquipInspectionObject.Insp_EquipInspection_Frag_QuestionAnswer — Content; stable record ID e8de38f0-d7e6-45d7-ad7d-2ce24edc9975. Source $.GraphData.Items[842].FieldData.Content.

```xml
<ix:FieldArea visible="false"><ix:Field For="PubChecklist.Checklist.Title" /><ix:Field For="CommtoReviewer2" /><ix:Field For="IPReview2" /></ix:FieldArea><% if (Model.TypeOfInspec.FindingTracking == true) { %><ix:GridSection Id="QuestionAnswers_Grid_Findings" For="QuestionAnswers" Title="{#PubChecklist.Checklist.Title}" AllowSorting="false" HideGroupAddButton="true" ModernIcon="Raven/Icons/BrightBlue_48/note21.png" meta:resourcekey="GridSection0" ResourceKey="GridSection0"><Menu DisplaySystemButtons="true"><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/><ix:GridListAllActionLink Override="true" openIn="popup" comments="leave this, needed for custom URLs to open in popup"/></Menu><Sorting><ix:Sort By="PubQuestion.Section" Direction="Ascending"/><ix:Sort By="PubQuestion.Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="PubQuestion.Section" HeaderCaption="Section"/></grouping><Filters><ix:Filter PredicateOperator="Or"><ix:CommonPredicate For="IsVisible" Type="Equal"><ix:Value>TRUE</ix:Value></ix:CommonPredicate><ix:IsNullPredicate For="IsVisible"/></ix:Filter></Filters><aliases><ix:Alias For="PubQuestion.QuestionRef"/><ix:Alias For="PubQuestion.Guideline"/><ix:Alias For="PubQuestion.Question.UseReferences" Name="DisplayRef"/><ix:Alias For="PubQuestion.Question.Id" Name="QuestionId"/></aliases><Columns><ix:TemplateColumn For="IsSubmitReady" width="5px" Caption="Ready?" visible="true" meta:resourcekey="TemplateColumn0" ResourceKey="TemplateColumn0"><template><clfIsSubmitReady/></template></ix:TemplateColumn><ix:TemplateColumn For="PubQuestion.Content" Width="1" visible="true"><Template><div class="clf-question-container"><div class="clf-question-row"><div class="clf-question-content"><%# Html.Encode(Container.ViewData.Eval("PubQuestion.Content")) %></div><div class="clf-question-code"><%# Html.Encode(Container.ViewData.Eval("PubQuestion.QuestionRef")) %></div><div class="clf-question-info" style="display:<%# ((Convert.ToBoolean(Container.ViewData.Eval("DisplayRef")) ? "block" : "none")) %>;"><a title="Question References" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Question_References_Detail/View?entityid=<%# Container.ViewData.Eval("QuestionId") %>"><img src="<%= ImageHelper.GetStaticPath("Icons/new/24x24/help2.gif") %>"/></a></div></div><div class="clf-question-guideline"><%# Html.Encode(Container.ViewData.Eval("PubQuestion.Guideline")) %></div></div></Template></ix:TemplateColumn><ix:TemplateColumn For="AnswerText" Caption="Answer" meta:resourcekey="TemplateColumn1" ResourceKey="TemplateColumn1"><template><div class="answer-container"><clfIsNA>.</clfIsNA><clfAnswer DisplayAs="buttons">.</clfAnswer></div></template></ix:TemplateColumn><ix:TemplateColumn For="PubQuestion.Section" Caption="Comments" HeaderFilterCssClass="section-filter" meta:resourcekey="TemplateColumn4" ResourceKey="TemplateColumn4"><template><div class="answer-container"><clfComments>.</clfComments><clfDocsButton>.</clfDocsButton></div></template></ix:TemplateColumn><ix:TemplateColumn For="IsFindingMiss" HorizontalAlign="center" width="5px" Caption="# Findings" meta:resourcekey="TemplateColumn2" ResourceKey="TemplateColumn2"><template><clfFindingsButton>.</clfFindingsButton></template></ix:TemplateColumn><ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="Findings" wrap="true"/><ix:TemplateColumn Visible="False" For="IsActionMiss" HorizontalAlign="center" width="5px" Caption="# Actions" meta:resourcekey="TemplateColumn3" ResourceKey="TemplateColumn3"><template><clfActionPlansButton>.</clfActionPlansButton></template></ix:TemplateColumn><ix:Column Visible="False" DisplayAs="List" EditMode="popup" FetchAs="Collection" For="ActionPlans" wrap="true"/></Columns></ix:GridSection><%   } %> 
<% if (Model.TypeOfInspec.FindingTracking != true) { %><ix:GridSection Id="QuestionAnswers_Grid_NoFindings" For="QuestionAnswers" Title="{#PubChecklist.Checklist.Title}" AllowSorting="false" HideGroupAddButton="true" ModernIcon="Raven/Icons/BrightBlue_48/note21.png" meta:resourcekey="GridSection0" ResourceKey="GridSection0"><Menu DisplaySystemButtons="true"><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/><ix:GridListAllActionLink Override="true" openIn="popup" comments="leave this, needed for custom URLs to open in popup"/></Menu><Sorting><ix:Sort By="PubQuestion.Section" Direction="Ascending"/><ix:Sort By="PubQuestion.Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="PubQuestion.Section" HeaderCaption="Section"/></grouping><Filters><ix:Filter PredicateOperator="Or"><ix:CommonPredicate For="IsVisible" Type="Equal"><ix:Value>TRUE</ix:Value></ix:CommonPredicate><ix:IsNullPredicate For="IsVisible"/></ix:Filter></Filters><aliases><ix:Alias For="PubQuestion.QuestionRef"/><ix:Alias For="PubQuestion.Guideline"/><ix:Alias For="PubQuestion.Question.UseReferences" Name="DisplayRef"/><ix:Alias For="PubQuestion.Question.Id" Name="QuestionId"/></aliases><Columns><ix:TemplateColumn For="IsSubmitReady" width="5px" Caption="Ready?" visible="true" meta:resourcekey="TemplateColumn0" ResourceKey="TemplateColumn0"><template><clfIsSubmitReady/></template></ix:TemplateColumn><ix:TemplateColumn For="PubQuestion.Content" Width="1" visible="true"><Template><div class="clf-question-container"><div class="clf-question-row"><div class="clf-question-content"><%# Html.Encode(Container.ViewData.Eval("PubQuestion.Content")) %></div><div class="clf-question-code"><%# Html.Encode(Container.ViewData.Eval("PubQuestion.QuestionRef")) %></div><div class="clf-question-info" style="display:<%# ((Convert.ToBoolean(Container.ViewData.Eval("DisplayRef")) ? "block" : "none")) %>;"><a title="Question References" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Question_References_Detail/View?entityid=<%# Container.ViewData.Eval("QuestionId") %>"><img src="<%= ImageHelper.GetStaticPath("Icons/new/24x24/help2.gif") %>"/></a></div></div><div class="clf-question-guideline"><%# Html.Encode(Container.ViewData.Eval("PubQuestion.Guideline")) %></div></div></Template></ix:TemplateColumn><ix:TemplateColumn For="AnswerText" Caption="Answer" meta:resourcekey="TemplateColumn1" ResourceKey="TemplateColumn1"><template><div class="answer-container"><clfIsNA>.</clfIsNA><clfAnswer DisplayAs="buttons">.</clfAnswer></div></template></ix:TemplateColumn><ix:TemplateColumn For="PubQuestion.Section" Caption="Comments" HeaderFilterCssClass="section-filter" meta:resourcekey="TemplateColumn4" ResourceKey="TemplateColumn4"><template><div class="answer-container"><clfComments>.</clfComments><clfDocsButton>.</clfDocsButton></div></template></ix:TemplateColumn><ix:TemplateColumn Visible="False" For="IsFindingMiss" HorizontalAlign="center" width="5px" Caption="# Findings" meta:resourcekey="TemplateColumn2" ResourceKey="TemplateColumn2"><template><clfFindingsButton>.</clfFindingsButton></template></ix:TemplateColumn><ix:Column Visible="False" DisplayAs="List" EditMode="popup" FetchAs="Collection" For="Findings" wrap="true"/><ix:TemplateColumn For="IsActionMiss" HorizontalAlign="center" width="5px" Caption="# Actions" meta:resourcekey="TemplateColumn3" ResourceKey="TemplateColumn3"><template><clfActionPlansButton>.</clfActionPlansButton></template></ix:TemplateColumn><ix:Column DisplayAs="List" EditMode="popup" FetchAs="Collection" For="ActionPlans" wrap="true"/></Columns></ix:GridSection><%   } %> 
<%= ApplicationSettings.Get("CLF_PreferencesObject","GridCustomCode","")  %><style>#QuestionAnswers_Grid_NoFindings .td_edit_link, #QuestionAnswers_Grid_Findings .td_edit_link {
display:none!important;
}</style>
```

### E2589-Content

ActionPlans_ActionPlanAbsObject.CAR_ActionPlanAbs_Inventory — Content; stable record ID 95274b8e-5e73-4334-bfa2-5a5f309a45f4. Source $.GraphData.Items[844].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CAR_ActionPlanAbs_Inventory"><ix:InventoryView ID="CAR_ActionPlanAbs_InventoryView" DisplayEditColumn="False" HideGroupAddButton="True" RowSelectionMode="none"><Menu><ix:GridCreateActionLink Visible="false" Override="true"/><ix:GridArchiveActionLink Visible="false" Override="true"/><ix:GridDeleteActionLink Visible="false" Override="true"/></Menu><Filters><ix:Filter><ix:CommonPredicate For="Workflow.Status" Negate="true" Type="Equal"><ix:Value>Closed</ix:Value></ix:CommonPredicate></ix:Filter><ix:Filter><ix:IsNullPredicate For="CAR" Negate="True"/></ix:Filter></Filters><Sorting><ix:Sort By="ActionNo" Direction="Descending"/></Sorting><Columns><ix:Column For="ActionNo" LinkTo="default"/><ix:Column DisplayAs="text" For="Location" runat="server"/><ix:Column Caption="Description" For="CPARActionReq" meta:resourcekey="Column0" ResourceKey="Column0"/><ix:MergeColumn Caption="Progress" For="SystemType.Name" RefreshScope="Row" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0"><MappedColumns><ix:Column For="ActivitProgress" MapValue="ActionPlans_ActionPlanWActObject"/></MappedColumns></ix:MergeColumn><ix:Column Caption="Activities" DisplayAs="List" FetchAs="Collection" For="Activites.CPARActionReq" meta:resourcekey="Column1" ResourceKey="Column1"/><ix:Column DisplayAs="String" For="Workflow.PersonResponsible"/><ix:Column For="Workflow.DueDate" Format="d"/><ix:Column For="Workflow.Status"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E2643-Content

EventFwk_EventObject.EventFwk_Event_Select — Content; stable record ID 1579f092-54c1-4b9f-9b1d-f56a6a0e0947. Source $.GraphData.Items[865].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="EventFwk_Event_Select"><ix:InventoryView ID="EventFwk_Event_SelectView"><Menu><ix:GridCreateActionLink runat="server" Visible="false" Override="true"/><ix:GridDeleteActionLink runat="server" Visible="false" Override="true"/></Menu><Columns><ix:Column For="RecordNo"/><ix:Column DisplayAs="String" For="Location"/><ix:Column For="Description"/><ix:Column For="TypeOfEvent"/><ix:Column For="DateReported" Format="d"/><ix:Column For="ReportedBy"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E2953-Content

ActionPlans_ActionPlanAbsObject.AuditMgmt_ActionPlan_Select — Content; stable record ID b8235ce5-8133-408d-8f26-66863d0de209. Source $.GraphData.Items[892].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="ActionPlans_ActionPlanAbsObjectInventory"><ix:InventoryView ID="ActionPlans_ActionPlanAbsObjectInventoryView" HideGroupAddButton="True"><Entities><ix:IncludeEntity name="ActionPlans_ActionPlanObject"/><ix:IncludeEntity name="ActionPlans_ActionPlanWActObject"/><ix:ExcludeEntity name="I9001Compliance_QMSActionsObject"/></Entities><Menu><ix:GridCreateActionLink Override="true" visible="false"/><ix:GridDeleteActionLink Override="true" visible="false"/><ix:GridHierarchyTreeLink Override="true" visible="false"/></Menu><aliases><ix:Alias for="NCRActionPlanID"/><ix:Alias for="NCR.HelpActPlanProg"/></aliases><Filters><ix:Filter><ix:SubQueryPredicate EntityAlias="FindingAPMap" For="Id" FromEntity="CFW_FindingAPsToActionPlans_ActionPlanAbsMapObject" Type="In"><ix:Property Text="ActionPlanAbs.Id"/><ix:Filter><ix:IsNullPredicate For="[FindingAPMap].Finding.Id" Negate="true"/></ix:Filter></ix:SubQueryPredicate></ix:Filter></Filters><grouping><ix:Group By="SystemType.Caption" HeaderCaption="Type"/></grouping><Columns><ix:Column For="ActionNo" LinkTarget="Popup" LinkTo="Default"/><ix:Column Caption="Description" For="CPARActionReq" meta:resourcekey="Column0" ResourceKey="Column0"/><ix:MergeColumn Caption="Progress" For="SystemType.Name" RefreshScope="Row" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0"><MappedColumns><ix:Column For="ActivitProgress" MapValue="ActionPlans_ActionPlanWActObject"/><ix:TemplateColumn MapValue="ActionPlans_ActionPlanObject"><Template><div style="display:<%# Container.ViewData.Eval("NCR.HelpActPlanProg").ToString() != "" ? Container.ViewData.Eval("NCR.HelpActPlanProg") : "" %>">N/A</div></Template></ix:TemplateColumn></MappedColumns></ix:MergeColumn><ix:MergeColumn Caption="Activities" For="SystemType.Name" RefreshScope="Row" width="200px" meta:resourcekey="MergeColumn1" ResourceKey="MergeColumn1"><MappedColumns><ix:Column DisplayAs="List" FetchAs="Collection" For="Activites.CPARActionReq" MapValue="ActionPlans_ActionPlanWActObject" Width="10%"/><ix:Column For="NCR.HelpActPlanProg" MapValue="ActionPlans_ActionPlanObject"/></MappedColumns></ix:MergeColumn><ix:Column DisplayAs="String" For="Workflow.PersonResponsible"/><ix:Column For="Workflow.DueDate" Format="d"/><ix:Column For="CompletionDate" Format="d"/><ix:Column For="Workflow.Status"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E2968-ConfigurableViewActions

CLF_ChecklistAnswerObject.CLF_ChecklistAnswer_Detail — ConfigurableViewActions; stable record ID 22e1d276-8cae-4a75-a42c-6ee07af95242. Source $.GraphData.Items[897].FieldData.ConfigurableViewActions.

```json
[]
```

### E2968-Content

CLF_ChecklistAnswerObject.CLF_ChecklistAnswer_Detail — Content; stable record ID 22e1d276-8cae-4a75-a42c-6ee07af95242. Source $.GraphData.Items[897].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Checklist Answer" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Name"/><ix:Field DisplayMode="Edit,View" For="PubChecklist" ReadOnly="true"/><ix:Field For="MasterChecklist"/><ix:Field DisplayMode="Edit,View" For="RecordNo"/><ix:Field DisplayAs="String" For="Location"/><ix:Field DisplayMode="Create" For="PubChecklist" IsMandatory="true"/><ix:Field For="Comments"/><ix:Field For="NbFindings"/><ix:Field For="PrevChecklistId"/><ix:Field For="NbActions"/><ix:Field For="SysteTypeHelper"/><ix:Field For="Depth"/><ix:Field For="NbSubChecklists"/><ix:Field For="Path"/><ix:Field For="DefPersRespFind"/><ix:Field For="PersResponsibl"/></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:DetailSection Title="Checklist Progress &amp; Scoring" DisplayMode="Edit,View" meta:resourcekey="DetailSection1" ResourceKey="DetailSection1"><ix:FieldArea><ix:Field For="PointsAwarded"/><ix:Field For="MaxPoints"/><ix:Field For="FilledQuestions"/><ix:Field For="ApplicQuestions"/><ix:Field For="Progress"/></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayMode="Edit,View" For="QuestionAnswers" HideGroupAddButton="true" ID="QuestionAnswersGridSection"><grouping><ix:Group By="PubQuestion.Section"/></grouping><menu><ix:GridCreateActionLink runat="server" Override="true" Visible="false"/><ix:GridDeleteActionLink runat="server" Override="true" Visible="false"/></menu><Sorting><ix:Sort runat="server" By="PubQuestion.Order" Direction="Ascending"/></Sorting><aliases><ix:Alias runat="server" For="Choice.BColor.Value"/><ix:Alias runat="server" For="Choice.TColor.Value"/></aliases><Columns><ix:Column DisplayAs="html" For="PubQuestion.Content" /><ix:TemplateColumn runat="server" For="Choice" EditMode="inline" RefreshScope="Row"><Template><div style="text-align:center;color:<%# Container.ViewData.Eval("Choice.TColor.Value") %>;background-color:<%# Container.ViewData.Eval("Choice.BColor.Value") %>;"><%# Container.ViewData.Eval("Choice") %></div></Template></ix:TemplateColumn><ix:Column EditMode="inline" For="Comments" RefreshScope="Row" /></Columns></ix:GridSection><ix:GridSection DisplayMode="Edit,View" For="SubChecklists" ID="SubChecklistsGridSection"><aliases><ix:Alias runat="server" For="PointsAwarded"/><ix:Alias runat="server" For="MaxPoints"/></aliases><Columns><ix:Column For="PubChecklist" LinkTo="default" /><ix:Column For="Comments" /><ix:Column For="FilledQuestions" /><ix:Column For="ApplicQuestions" /><ix:Column For="Progress" /><ix:TemplateColumn runat="server" For="Score"><Template><center><%# Container.ViewData.Eval("PointsAwarded") %> / <%# Container.ViewData.Eval("MaxPoints") %></center></Template></ix:TemplateColumn></Columns></ix:GridSection><ix:GridSection For="Findings" ID="FindingsGridSection"><Columns><ix:Column For="Description" LinkTo="default" /><ix:Column For="Name" /><ix:Column For="QuestionAnswer" /><ix:Column For="RecordNo" /></Columns></ix:GridSection><ix:WorkflowComments/><ix:WorkflowTracking/><ix:ESignatureHistorySection/><ix:GridSection For="ActionPlans" ID="ActionPlansGridSection"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="Activites" /><ix:Column For="ActivitiesStart" /><ix:Column For="ActivitProgress" /><ix:Column For="ActualCost" /></Columns></ix:GridSection></ix:DetailPage>
```

### E2987-Content

Insp_InspectionAbsObject.Insp_InspectionAbs_Detail — Content; stable record ID 27c48574-7759-4996-b218-0a9cd20bcbe8. Source $.GraphData.Items[904].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Fields" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea><ix:Field For="InsDisplayField"/><ix:Field For="Location"/><ix:Field For="ApplicQuestions"/><ix:Field For="Comments"/><ix:Field For="Depth"/><ix:Field For="FilledQuestions"/><ix:Field For="MasterChecklist"/><ix:Field For="MaxPoints"/><ix:Field For="Name"/><ix:Field For="NbActions"/><ix:Field For="NbFindings"/><ix:Field For="NbSubChecklists"/><ix:Field For="Path"/><ix:Field For="PointsAwarded"/><ix:Field For="PrevChecklistId"/><ix:Field For="Progress"/><ix:Field For="PubChecklist"/><ix:Field For="RecordNo"/><ix:Field For="Score"/><ix:Field For="SysteTypeHelper"/><ix:Field For="TypeOfInspec"/><ix:Field For="InspecChecklist"/><ix:Field For="PersResponsible"/><ix:Field For="InspectionDate"/><ix:Field For="CompletedBy"/><ix:Field For="CompletedOn"/><ix:Field For="RevieweComments"/><ix:Field For="FirstReviewBy"/><ix:Field For="DaofFirstReview"/><ix:Field For="RevieweComment1"/><ix:Field For="SecondReviewBy"/><ix:Field For="DofSecondReview"/><ix:Field For="RevieweDecision"/><ix:Field For="RevieweDecisio1"/><ix:Field For="HelperLocation"/></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:GridSection For="Actions" ID="ActionsGridSection"><Columns><ix:Column For="CPARActionReq" LinkTo="default" /><ix:Column For="ActionNo" /><ix:Column For="ActualCost" /><ix:Column For="ChecklistAnswer" /><ix:Column For="CompletedBy" /></Columns></ix:GridSection><ix:GridSection For="Findings" ID="FindingsGridSection"><Columns><ix:Column For="Name" LinkTo="default" /><ix:Column For="AdditionalCost" /><ix:Column For="ChecklistAnswer" /><ix:Column For="Comments" /><ix:Column For="CorrectiActions" /></Columns></ix:GridSection><ix:GridSection For="QuestionAnswers" ID="QuestionAnswersGridSection"><Columns><ix:Column For="PubQuestion" LinkTo="default" /><ix:Column For="Checkbox" /><ix:Column For="ChecklistAnswer" /><ix:Column For="Choice" /><ix:Column For="Comments" /></Columns></ix:GridSection><ix:GridSection For="SubChecklists" ID="SubChecklistsGridSection"><Columns><ix:Column For="Name" LinkTo="default" /><ix:Column For="ApplicQuestions" /><ix:Column For="Comments" /><ix:Column For="Depth" /><ix:Column For="FilledQuestions" /></Columns></ix:GridSection><ix:WorkflowComments/><ix:WorkflowTracking/><ix:ESignatureHistorySection/><ix:GridSection For="DistributioList" ID="DistributioListGridSection"><Columns><ix:Column For="CARAbstracts" LinkTo="default" /><ix:Column For="City" /><ix:Column For="Company" /><ix:Column For="CompByEmp" /><ix:Column For="ContractExpiry" /></Columns></ix:GridSection></ix:DetailPage><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E3002-Content

SysSubjectEntity.Subject_Select — Content; stable record ID 2661c9c7-8d95-4b45-ac29-7f5fbe2dd0bb. Source $.GraphData.Items[910].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="Subject_Select"><ix:InventoryView ID="Subject_SelectView"><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/><ix:GridArchiveActionLink Override="true" Visible="false"/><ix:GridDataImportActionLink Override="true" Visible="false"/></Menu><Columns><ix:Column For="Name"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E3068-Content

CLF_TagObject.CLF_Tag_Inventory — Content; stable record ID e60650ee-5b0d-4f22-9d6e-15f6d6c8ddbf. Source $.GraphData.Items[912].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Tag_Inventory"><ix:InventoryView ID="CLF_Tag_InventoryView"><Columns><ix:Column For="Name" LinkTo="default"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E3070-Content

CLF_SectionObject.CLF_SectionObjectInventoryView — Content; stable record ID 47cb253a-fcaa-40f9-ac44-7c16dd17cef7. Source $.GraphData.Items[913].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_SectionObjectInventory"><ix:InventoryView ID="CLF_SectionObjectInventoryView"><Columns><ix:Column For="SectionName" LinkTo="default"/><ix:Column For="Checklist"/><ix:Column For="Sort"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E3074-Content

ActionPlans_ActionPlanAbsObject.ActionPlans_ActionPlan_Select — Content; stable record ID 5ab8d86c-64e9-4fed-ab49-9d873b73ad88. Source $.GraphData.Items[915].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="Actions_Action_Inventory"><ix:InventoryView ID="Actions_Action_InventoryView"><Menu><ix:GridCreateActionLink Override="true" visible="false"/><ix:GridDeleteActionLink Override="true" visible="false"/></Menu><Sorting><ix:Sort By="DateCreated" Direction="Descending"/></Sorting><Columns><ix:Column For="ActionNo" LinkTo="default"/><ix:Column DisplayAs="label" For="Location"/><ix:Column DisplayAs="Truncate" For="CPARActionReq"/><ix:Column DisplayAs="label" For="Workflow.PersonResponsible"/><ix:Column Caption="Target Date" For="Workflow.DueDate" format="d" meta:resourcekey="Column0" ResourceKey="Column0"/><ix:Column For="CompletionDate" format="d"/><ix:Column For="CompletedBy"/><ix:Column For="Workflow.Status"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E3084-ConfigurableViewActions

CLF_QuestObject.CLF_Question_References_Detail — ConfigurableViewActions; stable record ID 6aff2100-27ad-4381-8edf-2894a458bd15. Source $.GraphData.Items[919].FieldData.ConfigurableViewActions.

```json
[]
```

### E3084-Content

CLF_QuestObject.CLF_Question_References_Detail — Content; stable record ID 6aff2100-27ad-4381-8edf-2894a458bd15. Source $.GraphData.Items[919].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar><ix:EditActionLink Override="true" Visible="false"/><ix:AddEntryActionLink Override="true" Visible="false"/><ix:HardDeleteActionLink Override="true" Visible="false"/><ix:DeleteActionLink Override="true" Visible="false"/><ix:CloneActionLink Override="true" Visible="false"/><ix:SecurityActionLink Override="true" Visible="false"/><ix:SaveActionLink Override="true" Visible="false"/><ix:SaveExitActionLink Override="true" Visible="false"/><ix:SaveAddNewActionLink Override="true" Visible="false"/><ix:SpellCheckActionLink Override="true" Visible="false"/></ix:DetailPageMenuBar><ix:DetailSection Title="Text References" Icon="Icons/new/48x48/edit.gif" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldValue DisplayAs="html" For="TextReferences" Readonly="true"/></ix:DetailSection><ix:DetailSection Title="Tags" Icon="Icons/new/48x48/index_add.gif" meta:resourcekey="DetailSection1" ResourceKey="DetailSection1"><ix:FieldArea><ix:Field CaptionPosition="top" For="References" Readonly="true" Span="true"/><ix:Field For="UseExisting"/><ix:Field For="HelperChecklist"/><ix:Field For="ExistingSection"/><ix:Field For="AbsoluteOrder"/></ix:FieldArea></ix:DetailSection><ix:AttachmentSection ID="AttachmentFragmentGridSection"/><ix:DocumentSection ID="DocumentFragmentGridSection"/></ix:DetailPage><style>.links {
display:none;
}</style><%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E30-ConfigurableViewActions

Unresolved.CLF_InsActionPlan_Detail (Mobile) — ConfigurableViewActions; stable record ID 82d703fa-a4cd-4107-976c-c832ccd9e0dd. Source $.GraphData.Items[2].FieldData.ConfigurableViewActions.

```json
[
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Hide Questions Field",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "CheckListAnsAct",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "IsNullOperator",
                "negate": false
              },
              "rightOperand": null
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "RelatedQstions",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "RelatedQstions",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "CheckListAnsAct"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Hide/Show Related Finding",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "EventRelated",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "IsNullOperator",
                "negate": true
              },
              "rightOperand": null
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "EventRelated",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "EventRelated",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "EventRelated"
      }
    ]
  }
]
```

### E30-ViewDefinition

Unresolved.CLF_InsActionPlan_Detail (Mobile) — ViewDefinition; stable record ID 82d703fa-a4cd-4107-976c-c832ccd9e0dd. Source $.GraphData.Items[2].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "ActionNo",
    "RelatedQstions",
    "CheckListAnsAct",
    "EventRelated",
    "CPARTypeID",
    "CPARActionReq",
    "ActionOwner",
    "DueDate"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E30-Content

Unresolved.CLF_InsActionPlan_Detail (Mobile) — Content; stable record ID 82d703fa-a4cd-4107-976c-c832ccd9e0dd. Source $.GraphData.Items[2].FieldData.Content.

```xml
<ix:DetailPage><ix:AttachmentSection ID="AttachmentFragmentGridSection"/><ix:StageContainer UseDefaultDuringCreate="True" VisibleFor="Draft" ID="StageContainer_Draft"><ix:DetailSection Title="Action Plan" Icon="Icons/new/48x48/check2.gif"><ix:FieldArea Span="true"><ix:Field DisplayMode="View,Edit" For="ActionNo" /><ix:Field For="RelatedQstions" /><ix:Field Caption="Inspection" For="CheckListAnsAct" /><ix:Field Caption="Related Finding" DisplayMode="View,Edit" For="EventRelated" ReadOnly="true" /><ix:Field For="CPARTypeID" /><ix:Field For="CPARActionReq" IsMandatory="True" Span="true" /><ix:Field For="ActionOwner" IsMandatory="true" /><ix:Field For="DueDate" IsMandatory="True" SpellCheck="false" /></ix:FieldArea></ix:DetailSection></ix:StageContainer><ix:StageContainer VisibleFor="InProgress" ID="StageContainer_InProgress"><ix:DetailSection Title="Action Plan" Icon="Icons/new/48x48/check2.gif"><ix:FieldArea Span="true"><ix:Field DisplayMode="View, Edit" For="ActionNo" /><ix:Field For="RelatedQstions" /><ix:Field Caption="Inspection" For="CheckListAnsAct" Readonly="true" Span="true" /><ix:Field Caption="Related Finding" DisplayMode="View,Edit" For="EventRelated" ReadOnly="true" /><ix:Field For="CPARTypeID" IsMandatory="true" /><ix:Field For="CPARActionReq" IsMandatory="true" /><ix:Field For="ActionOwner" IsMandatory="true" /><ix:Field For="DueDate" IsMandatory="true" /></ix:FieldArea></ix:DetailSection></ix:StageContainer></ix:DetailPage>
```

### E44-ConfigurableViewActions

Unresolved.Insp_EquipInspection_Frag_QuestionAnswer_ReadOnly (Mobile) — ConfigurableViewActions; stable record ID 8b9812d6-031b-4dd7-a10a-75b0618a1519. Source $.GraphData.Items[8].FieldData.ConfigurableViewActions.

```json
[]
```

### E44-ViewDefinition

Unresolved.Insp_EquipInspection_Frag_QuestionAnswer_ReadOnly (Mobile) — ViewDefinition; stable record ID 8b9812d6-031b-4dd7-a10a-75b0618a1519. Source $.GraphData.Items[8].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Location",
    "ApplicQuestions",
    "Comments",
    "CompletedBy",
    "CompletedOn",
    "CreateMode",
    "DefPersRespFind",
    "Depth",
    "DisplayField",
    "FilledQuestions",
    "HelpErrorMes",
    "InspecChecklist",
    "InspectionDate",
    "MasterChecklist",
    "MaxPoints",
    "Name",
    "NbActions",
    "NbFindings",
    "NbSubChecklists",
    "Path",
    "PersResponsibl",
    "PersResponsible",
    "PointsAwarded",
    "PrevChecklistId",
    "Progress",
    "PubChecklist",
    "RecordNo",
    "Score",
    "SysteTypeHelper",
    "TypeOfInspec",
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries"
  ],
  "GridProperties": {
    "ActionPlanAbst": [
      "CPARActionReq",
      "ActionNo",
      "ActionPlanType",
      "ActPlanSysType",
      "ActualCost"
    ],
    "ActionPlans": [
      "RecordName",
      "ActionNo",
      "ActionOwner",
      "ActionPlanType",
      "ActivitiesStart"
    ],
    "Findings": [
      "Name",
      "AdditionalCost",
      "ChecklistAnswer",
      "CorrectiActions",
      "Date"
    ],
    "QuestionAnswers": [
      "PubQuestion",
      "AnswerText",
      "Checkbox",
      "ChecklistAnswer",
      "Choice"
    ],
    "SubChecklists": [
      "DisplayField",
      "ApplicQuestions",
      "Comments",
      "DefPersRespFind",
      "Depth"
    ]
  },
  "ChecklistGrids": {}
}
```

### E44-Content

Unresolved.Insp_EquipInspection_Frag_QuestionAnswer_ReadOnly (Mobile) — Content; stable record ID 8b9812d6-031b-4dd7-a10a-75b0618a1519. Source $.GraphData.Items[8].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Fields"><ix:FieldArea><ix:Field For="Location" /><ix:Field For="ApplicQuestions" /><ix:Field For="Comments" /><ix:Field For="CompletedBy" /><ix:Field For="CompletedOn" /><ix:Field For="CreateMode" /><ix:Field For="DefPersRespFind" /><ix:Field For="Depth" /><ix:Field For="DisplayField" /><ix:Field For="FilledQuestions" /><ix:Field For="HelpErrorMes" /><ix:Field For="InspecChecklist" /><ix:Field For="InspectionDate" /><ix:Field For="MasterChecklist" /><ix:Field For="MaxPoints" /><ix:Field For="Name" /><ix:Field For="NbActions" /><ix:Field For="NbFindings" /><ix:Field For="NbSubChecklists" /><ix:Field For="Path" /><ix:Field For="PersResponsibl" /><ix:Field For="PersResponsible" /><ix:Field For="PointsAwarded" /><ix:Field For="PrevChecklistId" /><ix:Field For="Progress" /><ix:Field For="PubChecklist" /><ix:Field For="RecordNo" /><ix:Field For="Score" /><ix:Field For="SysteTypeHelper" /><ix:Field For="TypeOfInspec" /></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:GridSection ID="ActionPlanAbstGridSection" For="ActionPlanAbst"><Columns><ix:Column For="CPARActionReq" LinkTo="default"/><ix:Column For="ActionNo"/><ix:Column For="ActionPlanType"/><ix:Column For="ActPlanSysType"/><ix:Column For="ActualCost"/></Columns></ix:GridSection><ix:GridSection ID="ActionPlansGridSection" For="ActionPlans"><Columns><ix:Column For="RecordName" LinkTo="default"/><ix:Column For="ActionNo"/><ix:Column For="ActionOwner"/><ix:Column For="ActionPlanType"/><ix:Column For="ActivitiesStart"/></Columns></ix:GridSection><ix:GridSection ID="FindingsGridSection" For="Findings"><Columns><ix:Column For="Name" LinkTo="default"/><ix:Column For="AdditionalCost"/><ix:Column For="ChecklistAnswer"/><ix:Column For="CorrectiActions"/><ix:Column For="Date"/></Columns></ix:GridSection><ix:GridSection ID="QuestionAnswersGridSection" For="QuestionAnswers"><Columns><ix:Column For="PubQuestion" LinkTo="default"/><ix:Column For="AnswerText"/><ix:Column For="Checkbox"/><ix:Column For="ChecklistAnswer"/><ix:Column For="Choice"/></Columns></ix:GridSection><ix:GridSection ID="SubChecklistsGridSection" For="SubChecklists"><Columns><ix:Column For="DisplayField" LinkTo="default"/><ix:Column For="ApplicQuestions"/><ix:Column For="Comments"/><ix:Column For="DefPersRespFind"/><ix:Column For="Depth"/></Columns></ix:GridSection><ix:WorkflowComments/><ix:WorkflowTracking/><ix:ESignatureHistorySection/><ix:AttachmentSection ID="AttachmentFragmentGridSection"/><ix:MailMergeTemplates ID="MailMergeFragmentGridSection"/></ix:DetailPage>
```

### E110-ConfigurableViewActions

Unresolved.CLF_Choice_Detail (Mobile) — ConfigurableViewActions; stable record ID 3134a81c-dcea-4702-9264-5b0e3fc62548. Source $.GraphData.Items[32].FieldData.ConfigurableViewActions.

```json
[]
```

### E110-ViewDefinition

Unresolved.CLF_Choice_Detail (Mobile) — ViewDefinition; stable record ID 3134a81c-dcea-4702-9264-5b0e3fc62548. Source $.GraphData.Items[32].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "ChoiceList",
    "Reference",
    "Name",
    "Value",
    "Css",
    "BColor",
    "TColor",
    "MobileAction",
    "IsNA"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E110-Content

Unresolved.CLF_Choice_Detail (Mobile) — Content; stable record ID 3134a81c-dcea-4702-9264-5b0e3fc62548. Source $.GraphData.Items[32].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Choice" Icon="Icons/new/48x48/index_add.gif"><ix:FieldArea><ix:Field For="ChoiceList" SpellCheck="false" /><ix:Field For="Reference" /><ix:Field For="Name" /><ix:Field For="Value" /><ix:Field For="Css" Span="true" /><ix:Field For="BColor" /><ix:Field For="TColor" /><ix:Field For="MobileAction" /><ix:Field For="IsNA" /></ix:FieldArea></ix:DetailSection></ix:DetailPage> <%= ApplicationSettings.Get("DeploymeUtility_SettingsObject","InitializScript","")  %>
```

### E128-ConfigurableViewActions

Unresolved.ConfgAppSetting_TPanelGeneratorObjectInventoryView (Mobile) — ConfigurableViewActions; stable record ID 3113cd92-5657-446e-903d-40e69e299061. Source $.GraphData.Items[40].FieldData.ConfigurableViewActions.

```json
[]
```

### E128-ViewDefinition

Unresolved.ConfgAppSetting_TPanelGeneratorObjectInventoryView (Mobile) — ViewDefinition; stable record ID 3113cd92-5657-446e-903d-40e69e299061. Source $.GraphData.Items[40].FieldData.ViewDefinition.

```json
{
  "Properties": [],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E128-Content

Unresolved.ConfgAppSetting_TPanelGeneratorObjectInventoryView (Mobile) — Content; stable record ID 3113cd92-5657-446e-903d-40e69e299061. Source $.GraphData.Items[40].FieldData.Content.

```xml
<ix:InventoryPage>
<ix:Inventory ID='ConfgAppSetting_TPanelGeneratorObjectInventory'>
<ix:InventoryView ID='ConfgAppSetting_TPanelGeneratorObjectInventoryView'>
<Columns>
</Columns>
</ix:InventoryView>
</ix:Inventory>
</ix:InventoryPage>
```

### E150-ConfigurableViewActions

Unresolved.CLF_InsActionPlan_Detail_NoEdit (Mobile) — ConfigurableViewActions; stable record ID 64250ecb-d2a3-4a27-81f2-25dc724b521e. Source $.GraphData.Items[49].FieldData.ConfigurableViewActions.

```json
[]
```

### E150-ViewDefinition

Unresolved.CLF_InsActionPlan_Detail_NoEdit (Mobile) — ViewDefinition; stable record ID 64250ecb-d2a3-4a27-81f2-25dc724b521e. Source $.GraphData.Items[49].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "ChecklistAnswer",
    "CPARTypeID",
    "CPARActionReq",
    "ActionOwner",
    "DueDate",
    "CompletedBy",
    "CompletionDate",
    "CompletionNotes",
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries"
  ],
  "GridProperties": {
    "Findings": [
      "RecordNo",
      "Description",
      "ImmediateAction",
      "ResponseDue"
    ]
  },
  "ChecklistGrids": {}
}
```

### E150-Content

Unresolved.CLF_InsActionPlan_Detail_NoEdit (Mobile) — Content; stable record ID 64250ecb-d2a3-4a27-81f2-25dc724b521e. Source $.GraphData.Items[49].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar"><ix:CloneActionLink Override="true" Visible="False"/><ix:AddEntryActionLink Override="true" Visible="False"/><ix:SecurityActionLink Override="true" Visible="False"/><ix:DeleteActionLink Override="true" Visible="False"/><ix:SaveAddNewActionLink Override="true" Visible="False"/><ix:EditActionLink Override="true" Visible="False"/></ix:DetailPageMenuBar><ix:StageContainer UseDefaultDuringCreate="True" VisibleFor="Draft" ID="StageContainer_Draft"><ix:DetailSection Title="Action Plan" Icon="Icons/new/48x48/check2.gif" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field Caption="Inspection" For="ChecklistAnswer" Readonly="true" ResourceKey="Field0" Span="true" meta:resourcekey="Field0" /><ix:Field For="CPARTypeID" /><ix:Field For="CPARActionReq" IsMandatory="True" Span="true" /><ix:Field For="ActionOwner" /><ix:Field For="DueDate" IsMandatory="True" SpellCheck="false" /></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View,Edit" For="Findings" ID="FindingsGridSection_Draft" IsCollapsed="True"><Menu><ix:GridAttachActionLink Override="true" LinkTo="CLF_Finding_Select/Index" Caption="Attach Findings" meta:resourcekey="GridAttachActionLink0" ResourceKey="GridAttachActionLink0"/><ix:GridDetachActionLink Override="true" Caption="Detach" meta:resourcekey="GridDetachActionLink0" ResourceKey="GridDetachActionLink0"/></Menu><aliases><ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/><ix:Alias For="Severity.TextColor.Value" Name="TC"/><ix:Alias For="Severity.CSS" Name="CSS"/><ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/><ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/></aliases><Columns><ix:Column For="RecordNo" LinkTo="CLF_Finding_Detail_Readonly/View?entityid={#Id}"/><ix:Column DisplayAs="truncate" For="Description"/><ix:TemplateColumn For="Severity" FilterAs="Dropdown"><template><div style="background-color:<%# Container.ViewData.Eval("BC") %>;color:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>"><%# Container.ViewData.Eval("Severity") %></div></template></ix:TemplateColumn><ix:Column Caption="Suggested Action Plan" For="ImmediateAction" meta:resourcekey="Column0" ResourceKey="Column0"/><ix:Column For="ResponseDue" Format="d"/><ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center"><Template><div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>"><%# Container.ViewData.Eval("FindingStatus") %></div></Template></ix:TemplateColumn></Columns></ix:GridSection></ix:StageContainer><ix:StageContainer VisibleFor="InProgress" ID="StageContainer_InProgress"><ix:DetailSection Title="Action Plan" Icon="Icons/new/48x48/check2.gif" meta:resourcekey="DetailSection1" ResourceKey="DetailSection1"><ix:FieldArea><ix:Field Caption="Inspection" For="ChecklistAnswer" Readonly="true" ResourceKey="Field1" Span="true" meta:resourcekey="Field1" /><ix:Field For="CPARTypeID" Readonly="true" /><ix:Field For="CPARActionReq" Readonly="True" Span="true" SpellCheck="false" /></ix:FieldArea></ix:DetailSection><ix:DetailSection Title="Completion" Icon="Icons/new/48x48/checks.gif" DisplayMode="View,Edit" meta:resourcekey="DetailSection2" ResourceKey="DetailSection2"><ix:FieldArea><ix:Field For="CompletedBy" /><ix:Field For="CompletionDate" /><ix:Field For="CompletionNotes" Span="true" SpellCheck="false" /></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View,Edit" For="Findings" ID="FindingsGridSection_Inprogress" IsCollapsed="True" Readonly="True"><aliases><ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/><ix:Alias For="Severity.TextColor.Value" Name="TC"/><ix:Alias For="Severity.CSS" Name="CSS"/><ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/><ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/></aliases><Columns><ix:Column For="RecordNo"/><ix:Column DisplayAs="truncate" For="Description"/><ix:TemplateColumn For="Severity" FilterAs="Dropdown"><template><div style="background-color:<%# Container.ViewData.Eval("BC") %>;color:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>"><%# Container.ViewData.Eval("Severity") %></div></template></ix:TemplateColumn><ix:Column Caption="Suggested Action Plan" For="ImmediateAction" meta:resourcekey="Column1" ResourceKey="Column1"/><ix:Column For="ResponseDue" Format="d"/><ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center"><Template><div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>"><%# Container.ViewData.Eval("FindingStatus") %></div></Template></ix:TemplateColumn></Columns></ix:GridSection></ix:StageContainer><ix:StageContainer UseDefaultWhenCompleted="True" ID="StageContainer_Completed"><ix:DetailSection Title="Action Plan" Icon="Icons/new/48x48/check2.gif" meta:resourcekey="DetailSection3" ResourceKey="DetailSection3"><ix:FieldArea><ix:Field Caption="Inspection" For="ChecklistAnswer" Readonly="true" ResourceKey="Field2" Span="true" meta:resourcekey="Field2" /><ix:Field For="CPARTypeID" Readonly="True" /><ix:Field For="CPARActionReq" Readonly="True" Span="true" SpellCheck="false" /><ix:Field For="ActionOwner" Readonly="True" /><ix:Field For="DueDate" Readonly="True" /></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:DetailSection Title="Completion" Icon="Icons/new/48x48/checks.gif" DisplayMode="View,Edit" meta:resourcekey="DetailSection4" ResourceKey="DetailSection4"><ix:FieldArea><ix:Field For="CompletedBy" Readonly="True" /><ix:Field For="CompletionDate" Readonly="True" /><ix:Field For="CompletionNotes" Readonly="True" Span="true" /></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View,Edit" For="Findings" ID="FindingsGridSection_Completed" IsCollapsed="True" Readonly="True"><aliases><ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/><ix:Alias For="Severity.TextColor.Value" Name="TC"/><ix:Alias For="Severity.CSS" Name="CSS"/><ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/><ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/></aliases><Columns><ix:Column For="RecordNo"/><ix:Column DisplayAs="truncate" For="Description"/><ix:TemplateColumn For="Severity" FilterAs="Dropdown"><template><div style="background-color:<%# Container.ViewData.Eval("BC") %>;color:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>"><%# Container.ViewData.Eval("Severity") %></div></template></ix:TemplateColumn><ix:Column Caption="Suggested Action Plan" For="ImmediateAction" meta:resourcekey="Column2" ResourceKey="Column2"/><ix:Column For="ResponseDue" Format="d"/><ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center"><Template><div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>"><%# Container.ViewData.Eval("FindingStatus") %></div></Template></ix:TemplateColumn></Columns></ix:GridSection></ix:StageContainer><ix:AttachmentSection ID="AttachmentFragmentGridSection" DisplayMode="edit,view"/><ix:WorkflowComments IsCollapsed="true"/><ix:ESignatureHistorySection DisplayMode="View" isCollapsed="True" UseCookies="false"/></ix:DetailPage>
```

### E159-ConfigurableViewActions

Unresolved.Insp_InspRoleOptionObjectInventoryView (Mobile) — ConfigurableViewActions; stable record ID 7f12ab54-1651-45b4-b024-4b358d512017. Source $.GraphData.Items[53].FieldData.ConfigurableViewActions.

```json
[]
```

### E159-ViewDefinition

Unresolved.Insp_InspRoleOptionObjectInventoryView (Mobile) — ViewDefinition; stable record ID 7f12ab54-1651-45b4-b024-4b358d512017. Source $.GraphData.Items[53].FieldData.ViewDefinition.

```json
{
  "Properties": [],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E159-Content

Unresolved.Insp_InspRoleOptionObjectInventoryView (Mobile) — Content; stable record ID 7f12ab54-1651-45b4-b024-4b358d512017. Source $.GraphData.Items[53].FieldData.Content.

```xml
<ix:InventoryPage>
<ix:Inventory ID='Insp_InspRoleOptionObjectInventory'>
<ix:InventoryView ID='Insp_InspRoleOptionObjectInventoryView'>
<Columns>
</Columns>
</ix:InventoryView>
</ix:Inventory>
</ix:InventoryPage>
```

### E278-ConfigurableViewActions

Unresolved.CLF_PubQuest_Detail (Mobile) — ConfigurableViewActions; stable record ID 72bc1f50-1208-4c83-8afd-35b513a639e1. Source $.GraphData.Items[100].FieldData.ConfigurableViewActions.

```json
[]
```

### E278-ViewDefinition

Unresolved.CLF_PubQuest_Detail (Mobile) — ViewDefinition; stable record ID 72bc1f50-1208-4c83-8afd-35b513a639e1. Source $.GraphData.Items[100].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "QuestionRef",
    "Question",
    "Order",
    "Content",
    "Guideline",
    "Section",
    "AnswerType",
    "ChoiceList"
  ],
  "GridProperties": {
    "PubChecklists": [
      "ChecklistRef",
      "Title",
      "DateCreated",
      "IsActive",
      "ChecklistType"
    ]
  },
  "ChecklistGrids": {}
}
```

### E278-Content

Unresolved.CLF_PubQuest_Detail (Mobile) — Content; stable record ID 72bc1f50-1208-4c83-8afd-35b513a639e1. Source $.GraphData.Items[100].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Published Question" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="QuestionRef" /><ix:Field For="Question" /><ix:Field For="Order" /><ix:Field For="Content" SpellCheck="false" /><ix:Field For="Guideline" /><ix:Field For="Section" /><ix:Field For="AnswerType" /><ix:Field For="ChoiceList" /></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayEditColumn="false" For="PubChecklists" ID="PubChecklistsGridSection" Readonly="True" RowSelectionMode="None"><Sorting><ix:Sort runat="server" By="DateCreated" Direction="Descending"/></Sorting><Columns><ix:Column For="ChecklistRef" LinkTo="default" /><ix:Column For="Title" /><ix:Column For="DateCreated" Format="d" /><ix:Column For="IsActive" /><ix:Column For="ChecklistType" /></Columns></ix:GridSection></ix:DetailPage>
```

### E291-ConfigurableViewActions

Unresolved.CLF_Preferences_Detail (Mobile) — ConfigurableViewActions; stable record ID bda39128-95a2-4c45-b264-d452d0a48ad8. Source $.GraphData.Items[105].FieldData.ConfigurableViewActions.

```json
[]
```

### E291-ViewDefinition

Unresolved.CLF_Preferences_Detail (Mobile) — ViewDefinition; stable record ID bda39128-95a2-4c45-b264-d452d0a48ad8. Source $.GraphData.Items[105].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E291-Content

Unresolved.CLF_Preferences_Detail (Mobile) — Content; stable record ID bda39128-95a2-4c45-b264-d452d0a48ad8. Source $.GraphData.Items[105].FieldData.Content.

```xml
<ix:DetailPage>
<ix:DetailSection Title='Fields'>
<ix:FieldArea></ix:FieldArea>
<ix:WorkflowFields/>
</ix:DetailSection>
<ix:WorkflowComments/>
<ix:WorkflowTracking/>
<ix:ESignatureHistorySection/>
</ix:DetailPage>
```

### E379-ConfigurableViewActions

Unresolved.Insp_InspectionAbs_Inventory (Mobile) — ConfigurableViewActions; stable record ID 3c8fc97d-9959-4311-a398-a679b999c715. Source $.GraphData.Items[144].FieldData.ConfigurableViewActions.

```json
[]
```

### E379-ViewDefinition

Unresolved.Insp_InspectionAbs_Inventory (Mobile) — ViewDefinition; stable record ID 3c8fc97d-9959-4311-a398-a679b999c715. Source $.GraphData.Items[144].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "RecordNo",
    "Location",
    "TypeOfInspec",
    "Name",
    "Progress",
    "Workflow.PersonResponsible",
    "Workflow.DueDate",
    "CompletedBy",
    "CompletedOn",
    "Workflow.Status"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E379-Content

Unresolved.Insp_InspectionAbs_Inventory (Mobile) — Content; stable record ID 3c8fc97d-9959-4311-a398-a679b999c715. Source $.GraphData.Items[144].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="Insp_InspectionAbs_Inventory"><ix:InventoryView ID="Insp_InspectionAbs_InventoryView" Caption="Inspections List" meta:resourcekey="InventoryView0" ResourceKey="InventoryView0"><Sorting><ix:Sort By="RecordNo" Direction="Descending"/></Sorting><Columns><ix:Column Caption="Record No." For="RecordNo" LinkTo="default" ResourceKey="Column0" meta:resourcekey="Column0" /><ix:Column DisplayAs="label" For="Location" /><ix:Column FilterAs="dropdown" For="TypeOfInspec" /><ix:Column For="Name" /><ix:Column For="Progress" /><ix:Column DisplayAs="label" For="Workflow.PersonResponsible" /><ix:Column For="Workflow.DueDate" Format="d" /><ix:Column For="CompletedBy" /><ix:Column For="CompletedOn" Format="d" /><ix:Column For="Workflow.Status" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E396-ConfigurableViewActions

Unresolved.CLF_Quest_MassUpdate (Mobile) — ConfigurableViewActions; stable record ID dbd81b29-208f-41b8-b618-074c159693f0. Source $.GraphData.Items[148].FieldData.ConfigurableViewActions.

```json
[]
```

### E396-ViewDefinition

Unresolved.CLF_Quest_MassUpdate (Mobile) — ViewDefinition; stable record ID dbd81b29-208f-41b8-b618-074c159693f0. Source $.GraphData.Items[148].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "ChecklistType",
    "Section",
    "AnswerType",
    "ChoiceList",
    "VisDepNoAns",
    "HasDependsOn"
  ],
  "GridProperties": {
    "VisibleIfs": [
      "BColor",
      "ChoiceList",
      "Css",
      "MobileAction",
      "Name"
    ]
  },
  "ChecklistGrids": {}
}
```

### E396-Content

Unresolved.CLF_Quest_MassUpdate (Mobile) — Content; stable record ID dbd81b29-208f-41b8-b618-074c159693f0. Source $.GraphData.Items[148].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Fields" ShowHeader="false" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="ChecklistType" /><ix:Field For="Section" /><ix:Field For="AnswerType" /><ix:Field For="ChoiceList" /><ix:Field For="VisDepNoAns" /><ix:Field For="HasDependsOn" /></ix:FieldArea></ix:DetailSection><ix:GridSection For="VisibleIfs" ID="VisibleIfsGridSection"><Columns><ix:Column For="BColor" LinkTo="default" /><ix:Column For="ChoiceList" /><ix:Column For="Css" /><ix:Column For="MobileAction" /><ix:Column For="Name" /></Columns></ix:GridSection></ix:DetailPage>
```

### E471-ConfigurableViewActions

Unresolved.ConfgAppSetting_InstructionTextObjectDetailView (Mobile) — ConfigurableViewActions; stable record ID 7b1f3c2d-bca7-486f-b264-7510ed40a3e3. Source $.GraphData.Items[176].FieldData.ConfigurableViewActions.

```json
[]
```

### E471-ViewDefinition

Unresolved.ConfgAppSetting_InstructionTextObjectDetailView (Mobile) — ViewDefinition; stable record ID 7b1f3c2d-bca7-486f-b264-7510ed40a3e3. Source $.GraphData.Items[176].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E471-Content

Unresolved.ConfgAppSetting_InstructionTextObjectDetailView (Mobile) — Content; stable record ID 7b1f3c2d-bca7-486f-b264-7510ed40a3e3. Source $.GraphData.Items[176].FieldData.Content.

```xml
<ix:DetailPage>
<ix:DetailSection Title='Fields'>
<ix:FieldArea>
</ix:FieldArea>
<ix:WorkflowFields/>
</ix:DetailSection>
<ix:WorkflowComments/>
<ix:WorkflowTracking/>
<ix:ESignatureHistorySection/>
</ix:DetailPage>
```

### E516-ConfigurableViewActions

Unresolved.CLF_Checklist_Detail (Mobile) — ConfigurableViewActions; stable record ID 1ff482cf-ca40-4cf0-bd67-9329834ab50c. Source $.GraphData.Items[187].FieldData.ConfigurableViewActions.

```json
[]
```

### E516-ViewDefinition

Unresolved.CLF_Checklist_Detail (Mobile) — ViewDefinition; stable record ID 1ff482cf-ca40-4cf0-bd67-9329834ab50c. Source $.GraphData.Items[187].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "ChecklistType",
    "Reference",
    "Title",
    "Description"
  ],
  "GridProperties": {
    "Questions": [
      "QuestionRef",
      "Content",
      "AnswerType",
      "ChoiceList",
      "Order",
      "Section"
    ],
    "PubChecklists": [
      "ChecklistRef",
      "Title",
      "Description",
      "DateCreated",
      "IsActive"
    ]
  },
  "ChecklistGrids": {}
}
```

### E516-Content

Unresolved.CLF_Checklist_Detail (Mobile) — Content; stable record ID 1ff482cf-ca40-4cf0-bd67-9329834ab50c. Source $.GraphData.Items[187].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Checklist Definition" Icon="Icons/new/48x48/scroll_refresh.gif" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="ChecklistType"/><ix:Field For="Reference"/><ix:Field For="Title"/><ix:Field For="Description"/></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayMode="View,Edit" EditLinkTarget="popup" For="Questions" HideGroupAddButton="true" ID="QuestionsGridSection"><Actions><ix:MassUpdateAction ViewName="CLF_QuestObjectDetailView_MassUpdate"/></Actions><grouping><ix:Group By="Section"/></grouping><Menu><ix:GridAttachActionLink Override="true" Visible="true" Caption="Attach an existing Question" LinkTo="CLF_Quest_Select/Index" meta:resourcekey="GridAttachActionLink0" ResourceKey="GridAttachActionLink0"/><ix:GridDetachActionLink Override="true" Visible="false"/><ix:GridListAllActionLink Override="true" Visible="false"/><ix:GridCreateActionLink Override="false" OpenIn="popup" Visible="true" Caption="Create &amp; Attach a new Question" LinkTo="CLF_Quest_Detail/Create?ChecklistType={#ChecklistTypeId}" meta:resourcekey="GridCreateActionLink0" ResourceKey="GridCreateActionLink0"/><ix:GridDetachActionLink Override="false" Caption="Detach Question(s)" meta:resourcekey="GridDetachActionLink0" ResourceKey="GridDetachActionLink0"/><ix:GridListAllActionLink Override="false" Visible="false"/></Menu><Sorting><ix:Sort runat="server" By="Order" Direction="Ascending"/></Sorting><Columns><ix:Column For="QuestionRef" LinkTo="default"/><ix:Column DisplayAs="Truncate" EditMode="inline" For="Content"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="AnswerType" RefreshScope="Row"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="ChoiceList" RefreshScope="Row"/><ix:Column EditMode="inline" For="Order"/></Columns></ix:GridSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View,Edit" For="PubChecklists" ID="PubChecklistsGridSection" Title="Checklist Version History" meta:resourcekey="GridSection0" ResourceKey="GridSection0"><Menu><ix:GridCreateActionLink Override="true" Visible="False"/></Menu><Sorting><ix:Sort runat="server" By="DateCreated" Direction="Descending"/></Sorting><Columns><ix:Column For="ChecklistRef" LinkTo="default"/><ix:Column For="Title"/><ix:Column DisplayAs="Truncate" For="Description"/><ix:Column For="DateCreated" Format="d"/><ix:Column EditMode="inline" For="IsActive"/></Columns></ix:GridSection><ix:AttachmentSection ID="AttachmentFragmentGridSection" DisplayMode="edit,view"/></ix:DetailPage>
```

### E530-ConfigurableViewActions

Unresolved.ActionPlan_MyActionPlan_Inventory (Mobile) — ConfigurableViewActions; stable record ID a174f5fd-984f-48d4-abb9-2a04568a5f03. Source $.GraphData.Items[193].FieldData.ConfigurableViewActions.

```json
[]
```

### E530-ViewDefinition

Unresolved.ActionPlan_MyActionPlan_Inventory (Mobile) — ViewDefinition; stable record ID a174f5fd-984f-48d4-abb9-2a04568a5f03. Source $.GraphData.Items[193].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "CPARActionReq",
    "ActionNo",
    "SystemType.Caption",
    "SourceObject",
    "DueDate",
    "Workflow.WorkflowStatus",
    "Workflow.PersonResponsible.Id"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E530-Content

Unresolved.ActionPlan_MyActionPlan_Inventory (Mobile) — Content; stable record ID a174f5fd-984f-48d4-abb9-2a04568a5f03. Source $.GraphData.Items[193].FieldData.Content.

```xml
<ix:InventoryPage>
  <ix:Inventory Id="ActionPlan_MyActionPlan_Inventory">
    <ix:InventoryView ID="ActionPlan_MyActionPlan_Inventory">
      <Entities>
<ix:ExcludeEntity name="ActionPlans_ActionPlanWActObject"/>
<ix:ExcludeEntity name="ActionPlans_ActivitySequenObject"/>
<ix:ExcludeEntity name="ActionPlans_GlobActionPlanObject"/>
<ix:IncludeEntity name="ActionPlans_LocalActionPlanObject"/>
      </Entities>
      <Menu>
<ix:GridDeleteActionLink runat="server" Override="true" Visible="false"/>
<ix:GridArchiveActionLink runat="server" Override="true" Visible="false"/>
<ix:GridCreateActionLink runat="server" Override="true" Visible="false"/>
      </Menu>
      <Aliases>
<ix:alias For="SourceObject.Name" Name="SourceName"/>
<ix:alias For="SourceObject.Caption" Name="SourceCaption"/>
<ix:alias For="SourceRecordId" Name="SourceRecordId"/>
      </Aliases>
      <Sorting>
<ix:Sort By="ActionNo" Direction="Descending"/>
      </Sorting>
      <Filters>
        <ix:Filter PredicateOperator="And">
<ix:IsNullPredicate For=":ActionPlans_ActionPlanWActObject.id" runat="server"/>
<ix:IsNullPredicate For=":ActionPlans_ActivitySequenObject.id" runat="server"/>
<ix:IsNullPredicate For=":ActionPlans_GlobActionPlanObject.id" runat="server"/>
<ix:IsNullPredicate For=":ActionPlans_LocalActionPlanObject.id" runat="server"/>
           <ix:CommonPredicate For="Workflow.WorkflowStatus" Type="Equal" runat="server">
            <ix:Value Parse="true">1</ix:Value>
          </ix:CommonPredicate>
          <ix:CommonPredicate For="Workflow.PersonResponsible.Id" Type="Equal" runat="server">
            <ix:Value Parse="true" runat="server">
<%= SystemSession.Current.User.Id %>
            </ix:Value>
          </ix:CommonPredicate>
        </ix:Filter>
      </Filters>
      <Columns><ix:Column For="CPARActionReq" /><ix:Column For="ActionNo" /><ix:Column For="SystemType.Caption" /><ix:Column For="SourceObject" /><ix:Column For="DueDate" Format="d" caption="Target Date" /></Columns>
    </ix:InventoryView>
  </ix:Inventory>
</ix:InventoryPage>
```

### E618-ConfigurableViewActions

Unresolved.Insp_EquipListOptionObjectDetailView (Mobile) — ConfigurableViewActions; stable record ID fe4f16f1-17ac-4791-a2d6-db5f89d48fe6. Source $.GraphData.Items[222].FieldData.ConfigurableViewActions.

```json
[]
```

### E618-ViewDefinition

Unresolved.Insp_EquipListOptionObjectDetailView (Mobile) — ViewDefinition; stable record ID fe4f16f1-17ac-4791-a2d6-db5f89d48fe6. Source $.GraphData.Items[222].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E618-Content

Unresolved.Insp_EquipListOptionObjectDetailView (Mobile) — Content; stable record ID fe4f16f1-17ac-4791-a2d6-db5f89d48fe6. Source $.GraphData.Items[222].FieldData.Content.

```xml
<ix:DetailPage>
<ix:DetailSection Title='Fields'>
<ix:FieldArea>
</ix:FieldArea>
<ix:WorkflowFields/>
</ix:DetailSection>
<ix:WorkflowComments/>
<ix:WorkflowTracking/>
<ix:ESignatureHistorySection/>
</ix:DetailPage>
```

### E622-ConfigurableViewActions

Unresolved.Insp_EquipListOptionObjectInventoryView (Mobile) — ConfigurableViewActions; stable record ID 36febb64-c018-465d-8ee9-1200489c0885. Source $.GraphData.Items[224].FieldData.ConfigurableViewActions.

```json
[]
```

### E622-ViewDefinition

Unresolved.Insp_EquipListOptionObjectInventoryView (Mobile) — ViewDefinition; stable record ID 36febb64-c018-465d-8ee9-1200489c0885. Source $.GraphData.Items[224].FieldData.ViewDefinition.

```json
{
  "Properties": [],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E622-Content

Unresolved.Insp_EquipListOptionObjectInventoryView (Mobile) — Content; stable record ID 36febb64-c018-465d-8ee9-1200489c0885. Source $.GraphData.Items[224].FieldData.Content.

```xml
<ix:InventoryPage>
<ix:Inventory ID='Insp_EquipListOptionObjectInventory'>
<ix:InventoryView ID='Insp_EquipListOptionObjectInventoryView'>
<Columns>
</Columns>
</ix:InventoryView>
</ix:Inventory>
</ix:InventoryPage>
```

### E786-ConfigurableViewActions

Unresolved.ConfgAppSetting_PersRespOptionObjectDetailView (Mobile) — ConfigurableViewActions; stable record ID ac462955-c11d-4c38-93bc-109781922c6d. Source $.GraphData.Items[286].FieldData.ConfigurableViewActions.

```json
[]
```

### E786-ViewDefinition

Unresolved.ConfgAppSetting_PersRespOptionObjectDetailView (Mobile) — ViewDefinition; stable record ID ac462955-c11d-4c38-93bc-109781922c6d. Source $.GraphData.Items[286].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E786-Content

Unresolved.ConfgAppSetting_PersRespOptionObjectDetailView (Mobile) — Content; stable record ID ac462955-c11d-4c38-93bc-109781922c6d. Source $.GraphData.Items[286].FieldData.Content.

```xml
<ix:DetailPage>
<ix:DetailSection Title='Fields'>
<ix:FieldArea>
</ix:FieldArea>
<ix:WorkflowFields/>
</ix:DetailSection>
<ix:WorkflowComments/>
<ix:WorkflowTracking/>
<ix:ESignatureHistorySection/>
</ix:DetailPage>
```

### E983-ConfigurableViewActions

Unresolved.CLF_Quest_Detail (Mobile) — ConfigurableViewActions; stable record ID e3b974a9-da55-4eea-bfe8-e9737d021de4. Source $.GraphData.Items[333].FieldData.ConfigurableViewActions.

```json
[]
```

### E983-ViewDefinition

Unresolved.CLF_Quest_Detail (Mobile) — ViewDefinition; stable record ID e3b974a9-da55-4eea-bfe8-e9737d021de4. Source $.GraphData.Items[333].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "ChecklistType",
    "QuestionRef",
    "Order",
    "Content",
    "Guideline",
    "Section",
    "AnswerType",
    "ChoiceList",
    "UseReferences",
    "References"
  ],
  "GridProperties": {
    "Checklists": [
      "Reference",
      "Title",
      "Description",
      "NbQuestions"
    ],
    "PubQuestions": [
      "QuestionRef",
      "Content",
      "ChoiceList",
      "DateCreated"
    ],
    "FindingTriggers": [
      "BColor",
      "ChoiceList",
      "Css",
      "MobileAction",
      "Name"
    ]
  },
  "ChecklistGrids": {}
}
```

### E983-Content

Unresolved.CLF_Quest_Detail (Mobile) — Content; stable record ID e3b974a9-da55-4eea-bfe8-e9737d021de4. Source $.GraphData.Items[333].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Question" Icon="Icons/new/48x48/help2.gif" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="ChecklistType" ReadOnly="true" SpellCheck="false" /><ix:Field For="QuestionRef" /><ix:Field For="Order" /><ix:Field EditAs="SmallTextArea" For="Content" IsMandatory="True" /><ix:Field EditAs="SmallTextArea" For="Guideline" /><ix:Field EditAs="SmallTextArea" For="Section" /><ix:Field For="AnswerType" IsMandatory="True" /><ix:Field For="ChoiceList" /><ix:Field Span="true" /><ix:Field For="UseReferences" /></ix:FieldArea></ix:DetailSection><ix:DetailSection Title="References" Icon="Icons/new/48x48/book_open.gif" DisplayMode="View,Edit" Id="ReferencesSection" meta:resourcekey="DetailSection3" ResourceKey="DetailSection3"><ix:DetailSection Title="Text References" Icon="Icons/new/48x48/edit.gif" meta:resourcekey="DetailSection1" ResourceKey="DetailSection1"><ix:FieldValue DisplayAs="html" For="TextReferences" /></ix:DetailSection><ix:DetailSection Title="Tags" Icon="Icons/new/48x48/index_add.gif" meta:resourcekey="DetailSection2" ResourceKey="DetailSection2"><ix:FieldArea Span="true"><ix:Field CaptionPosition="top" For="References" /></ix:FieldArea></ix:DetailSection><ix:DocumentSection ID="DocumentFragmentGridSection"/><ix:AttachmentSection ID="AttachmentFragmentGridSection"/></ix:DetailSection><ix:GridSection DisplayMode="View" For="Checklists" IsColllapsed="True" ResourceKey="GridSection0" Title="Part of following Checklists:" meta:resourcekey="GridSection0"><Menu><ix:GridAttachActionLink Override="true" LinkTo="CLF_Checklist_Select/Index"/><ix:GridExecuteActionLink Override="true" Name="Publish" Visible="false"/></Menu><Columns><ix:Column For="Reference" LinkTo="default"/><ix:Column For="Title"/><ix:Column For="Description"/><ix:Column For="NbQuestions"/></Columns></ix:GridSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View" For="PubQuestions" ID="PubQuestionsGridSection" IsColllapsed="True" ReadOnly="true" ResourceKey="GridSection1" RowSelectionMode="None" Title="Question Version History" meta:resourcekey="GridSection1"><Sorting><ix:Sort runat="server" By="DateCreated" Direction="Descending"/></Sorting><Columns><ix:Column For="QuestionRef" LinkTo="Default"/><ix:Column DisplayAs="html" For="Content" Width="1"/><ix:Column For="ChoiceList"/><ix:Column For="DateCreated" Format="g"/></Columns></ix:GridSection><ix:GridSection For="FindingTriggers" ID="FindingTriggersGridSection"><Columns><ix:Column For="BColor" LinkTo="default" /><ix:Column For="ChoiceList" /><ix:Column For="Css" /><ix:Column For="MobileAction" /><ix:Column For="Name" /></Columns></ix:GridSection></ix:DetailPage><style>#TextReferences {
background-color: white;
border: 1px solid #DDDDDD;
padding: 5px;
}</style>
```

### E992-ConfigurableViewActions

Unresolved.ConfgAppSetting_IconAssetObjectDetailView (Mobile) — ConfigurableViewActions; stable record ID d11d0cd5-439e-4070-afa8-e51eb177543d. Source $.GraphData.Items[337].FieldData.ConfigurableViewActions.

```json
[]
```

### E992-ViewDefinition

Unresolved.ConfgAppSetting_IconAssetObjectDetailView (Mobile) — ViewDefinition; stable record ID d11d0cd5-439e-4070-afa8-e51eb177543d. Source $.GraphData.Items[337].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Name",
    "Code",
    "SVGCode",
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E992-Content

Unresolved.ConfgAppSetting_IconAssetObjectDetailView (Mobile) — Content; stable record ID d11d0cd5-439e-4070-afa8-e51eb177543d. Source $.GraphData.Items[337].FieldData.Content.

```xml
<ix:DetailPage>
<ix:DetailSection Title='Fields'>
<ix:FieldArea><ix:Field For="Name" /><ix:Field For="Code" /><ix:Field For="SVGCode" /></ix:FieldArea>
<ix:WorkflowFields/>
</ix:DetailSection>
<ix:WorkflowComments/>
<ix:WorkflowTracking/>
<ix:ESignatureHistorySection/>
</ix:DetailPage>
```

### E1004-ConfigurableViewActions

Unresolved.CLF_InsActionPlan_Inventory (Mobile) — ConfigurableViewActions; stable record ID 4df2b992-da74-498d-bad7-71d3f0269847. Source $.GraphData.Items[342].FieldData.ConfigurableViewActions.

```json
[]
```

### E1004-ViewDefinition

Unresolved.CLF_InsActionPlan_Inventory (Mobile) — ViewDefinition; stable record ID 4df2b992-da74-498d-bad7-71d3f0269847. Source $.GraphData.Items[342].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "ActionNo",
    "Location",
    "CPARActionReq",
    "CPARTypeID",
    "ChecklistAnswer",
    "Workflow.PersonResponsible",
    "Workflow.DueDate",
    "CompletedBy",
    "CompletionDate",
    "Workflow.WorkflowStatus"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1004-Content

Unresolved.CLF_InsActionPlan_Inventory (Mobile) — Content; stable record ID 4df2b992-da74-498d-bad7-71d3f0269847. Source $.GraphData.Items[342].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_InsActionPlan_Inventory"><ix:InventoryView ID="CLF_InsActionPlan_InventoryView"><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></Menu><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column DisplayAs="label" For="Location" /><ix:Column DisplayAs="Truncate" For="CPARActionReq" /><ix:Column FilterAs="Dropdown" For="CPARTypeID" /><ix:Column Caption="Inspection" For="ChecklistAnswer" ResourceKey="Column0" meta:resourcekey="Column0" /><ix:Column DisplayAs="Label" For="Workflow.PersonResponsible" /><ix:Column FOrmat="d" For="Workflow.DueDate" /><ix:Column For="CompletedBy" /><ix:Column FOrmat="d" For="CompletionDate" /><ix:Column For="Workflow.WorkflowStatus" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1025-ConfigurableViewActions

Unresolved.CLF_Quest_ConditionalFormatting_MassUpdate (Mobile) — ConfigurableViewActions; stable record ID 0ad312c4-37d4-4a01-979a-abae7878ac55. Source $.GraphData.Items[351].FieldData.ConfigurableViewActions.

```json
[]
```

### E1025-ViewDefinition

Unresolved.CLF_Quest_ConditionalFormatting_MassUpdate (Mobile) — ViewDefinition; stable record ID 0ad312c4-37d4-4a01-979a-abae7878ac55. Source $.GraphData.Items[351].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "ChecklistType",
    "Section",
    "AnswerType",
    "ChoiceList",
    "VisDepNoAns",
    "HasDependsOn"
  ],
  "GridProperties": {
    "VisibleIfs": [
      "BColor",
      "ChoiceList",
      "Css",
      "MobileAction",
      "Name"
    ]
  },
  "ChecklistGrids": {}
}
```

### E1025-Content

Unresolved.CLF_Quest_ConditionalFormatting_MassUpdate (Mobile) — Content; stable record ID 0ad312c4-37d4-4a01-979a-abae7878ac55. Source $.GraphData.Items[351].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Fields" ShowHeader="false" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="ChecklistType" /><ix:Field For="Section" /><ix:Field For="AnswerType" /><ix:Field For="ChoiceList" /><ix:Field For="VisDepNoAns" /><ix:Field For="HasDependsOn" /></ix:FieldArea></ix:DetailSection><ix:GridSection For="VisibleIfs" ID="VisibleIfsGridSection"><Columns><ix:Column For="BColor" LinkTo="default" /><ix:Column For="ChoiceList" /><ix:Column For="Css" /><ix:Column For="MobileAction" /><ix:Column For="Name" /></Columns></ix:GridSection></ix:DetailPage>
```

### E1056-ConfigurableViewActions

Unresolved.Insp_Type_Inventory (Mobile) — ConfigurableViewActions; stable record ID 08210b63-d2ec-4308-8b44-4928af4b6da3. Source $.GraphData.Items[362].FieldData.ConfigurableViewActions.

```json
[]
```

### E1056-ViewDefinition

Unresolved.Insp_Type_Inventory (Mobile) — ViewDefinition; stable record ID 08210b63-d2ec-4308-8b44-4928af4b6da3. Source $.GraphData.Items[362].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Reference",
    "Name",
    "Description",
    "NbChecklists",
    "NbQuestions",
    "Active"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1056-Content

Unresolved.Insp_Type_Inventory (Mobile) — Content; stable record ID 08210b63-d2ec-4308-8b44-4928af4b6da3. Source $.GraphData.Items[362].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="Insp_Type_Inventory"><ix:InventoryView ID="Insp_Type_InventoryView"><Columns><ix:Column For="Reference" LinkTo="default" /><ix:Column Caption="Inspection Type" For="Name" ResourceKey="Column0" meta:resourcekey="Column0" /><ix:Column DisplayAs="Truncate" For="Description" /><ix:Column Caption="Checklists" For="NbChecklists" HorizontalAlign="center" ResourceKey="Column1" meta:resourcekey="Column1" /><ix:Column Caption="Questions" For="NbQuestions" HorizontalAlign="center" ResourceKey="Column2" meta:resourcekey="Column2" /><ix:Column EditMode="Inline" For="Active" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage><style type="text/css">.inline-edit, .popup-edit {
background-color: #e2f3fa;
border: 1px dotted #58c3f0 !important;
}</style>
```

### E1086-ConfigurableViewActions

Unresolved.ConfgAppSetting_IconAssetObjectInventoryView (Mobile) — ConfigurableViewActions; stable record ID d3d8f611-cd35-4873-921d-a7158d62e7b1. Source $.GraphData.Items[375].FieldData.ConfigurableViewActions.

```json
[]
```

### E1086-ViewDefinition

Unresolved.ConfgAppSetting_IconAssetObjectInventoryView (Mobile) — ViewDefinition; stable record ID d3d8f611-cd35-4873-921d-a7158d62e7b1. Source $.GraphData.Items[375].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Code",
    "Name",
    "SVGCode"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1086-Content

Unresolved.ConfgAppSetting_IconAssetObjectInventoryView (Mobile) — Content; stable record ID d3d8f611-cd35-4873-921d-a7158d62e7b1. Source $.GraphData.Items[375].FieldData.Content.

```xml
<ix:InventoryPage>
<ix:Inventory ID='ConfgAppSetting_IconAssetObjectInventory'>
<ix:InventoryView ID='ConfgAppSetting_IconAssetObjectInventoryView'>
<Columns><ix:Column Caption="Code" For="Code" LinkTo="default" /><ix:Column Caption="Name" For="Name" /><ix:Column Caption="SVG Code" For="SVGCode" /></Columns>
</ix:InventoryView>
</ix:Inventory>
</ix:InventoryPage>
```

### E1167-ConfigurableViewActions

Unresolved.CLF_Finding_Detail (Mobile) — ConfigurableViewActions; stable record ID 12b8b712-b34a-4f71-9abf-d18638dd5669. Source $.GraphData.Items[400].FieldData.ConfigurableViewActions.

```json
[
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Show Manual Close Comment",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "ManualClose",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "true",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetNonMandatoryAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ClearValueAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ActionPlansGridSection",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "SetMandatoryAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ActionPlansGridSection",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "ManualClose"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Show / Hide Stuff depending on Status",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "FindingStatus.Code",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "Open",
                "entityType": null,
                "text": null
              }
            },
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "FindingStatus.Code",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "Closed without Action",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "ManCloseCom",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "FindingStatus.Code"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Hide hiddenSection",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "ChecklistAnswer",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "IsNullOperator",
                "negate": true
              },
              "rightOperand": null
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "QuestionAnswers",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "QuestionAnswers",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "ChecklistAnswer"
      }
    ]
  }
]
```

### E1167-ViewDefinition

Unresolved.CLF_Finding_Detail (Mobile) — ViewDefinition; stable record ID 12b8b712-b34a-4f71-9abf-d18638dd5669. Source $.GraphData.Items[400].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "QuestionAnswers",
    "ChecklistAnswer",
    "FindingStatus.Code",
    "Description",
    "ImmediateAction",
    "DueIn",
    "ResponseDue",
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries",
    "ManualClose",
    "ManCloseCom",
    "QuestionAnswers.QuestionRef"
  ],
  "GridProperties": {
    "AbsCorActPlan": [
      "CPARActionReq",
      "CheckListAnsAct"
    ]
  },
  "ChecklistGrids": {}
}
```

### E1167-Content

Unresolved.CLF_Finding_Detail (Mobile) — Content; stable record ID 12b8b712-b34a-4f71-9abf-d18638dd5669. Source $.GraphData.Items[400].FieldData.Content.

```xml
<ix:DetailPage><ix:AttachmentSection/><ix:DetailSection Title="Finding" Icon="Icons/new/48x48/flag_red.gif"><ix:FieldArea><ix:Field For="QuestionAnswers" DisplayMode="Create" DisplayFields="QuestionRef" Span="true"/><ix:Field For="ChecklistAnswer" Id="ChecklistAnswerCreate" DisplayMode="Create" Readonly="false" Caption="Inspection Name" Span="true" SpellCheck="false"/><ix:Field For="ChecklistAnswer" Id="ChecklistAnswerRO" DisplayMode="View,Edit" Caption="Inspection Name" Span="true" ReadOnly="true"/><ix:Field For="FindingStatus.Code" Caption="Finding Status" DisplayMode="View,Edit"/><ix:Field For="Description" IsMandatory="True" Span="true" SpellCheck="false"/><ix:Field Caption="Suggested Action Plan" For="ImmediateAction" Span="true" SpellCheck="false"/><ix:Field DisplayMode="Create" For="DueIn"/><ix:Field DisplayMode="View,Edit" For="ResponseDue"/></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:DetailSection Title="Close Finding" Icon="Icons/new/48x48/error.gif" Id="ManualCloseSection"><ix:FieldArea Span="true"><ix:Field For="ManualClose"/><ix:Field For="ManCloseCom" SpellCheck="false"/></ix:FieldArea></ix:DetailSection><ix:GridSection For="AbsCorActPlan" ID="ActionPlansGridSection" ModernIcon="Raven/Icons/BrightBlue_48/acceptance.png"><Entities><ix:IncludeEntity name="CLF_InsActionPlanObject"/></Entities><Parameters><ix:Parameter For="CheckListAnsAct"><ix:Property Text="ChecklistAnswer"/></ix:Parameter></Parameters><Columns><ix:Column For="CPARActionReq"/></Columns></ix:GridSection></ix:DetailPage>
```

### E1183-ConfigurableViewActions

Unresolved.CLF_Finding_Inventory (Mobile) — ConfigurableViewActions; stable record ID 3c945bee-fc95-445d-be91-f7fb615c4f2a. Source $.GraphData.Items[407].FieldData.ConfigurableViewActions.

```json
[]
```

### E1183-ViewDefinition

Unresolved.CLF_Finding_Inventory (Mobile) — ViewDefinition; stable record ID 3c945bee-fc95-445d-be91-f7fb615c4f2a. Source $.GraphData.Items[407].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "RecordNo",
    "Location",
    "Description",
    "ChecklistAnswer",
    "ResponseDue"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1183-Content

Unresolved.CLF_Finding_Inventory (Mobile) — Content; stable record ID 3c945bee-fc95-445d-be91-f7fb615c4f2a. Source $.GraphData.Items[407].FieldData.Content.

```xml
<ix:InventoryPage>
  <ix:Inventory ID="CLF_Finding_Inventory">
    <ix:InventoryView ID="CLF_Finding_InventoryView" DisplayEditColumn="false">
      <Menu>
<ix:GridCreateActionLink Override="true" Visible="False"/>
<ix:GridDeleteActionLink Override="true" Visible="False"/>
      </Menu>
      <aliases>
<ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/>
<ix:Alias For="Severity.TextColor.Value" Name="TC"/>
<ix:Alias For="Severity.CSS" Name="CSS"/>
<ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/>
<ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/>
      </aliases>
      <Columns><ix:Column For="RecordNo" LinKTo="CLF_Finding_Detail_Readonly/View?entityId={#id}" /><ix:Column DisplayAs="Label" For="Location" /><ix:Column DisplayAs="Truncate" For="Description" /><ix:Column For="ChecklistAnswer" /><ix:Column For="ResponseDue" Format="d" />
        <ix:TemplateColumn For="Severity" FilterAs="Dropdown">
          <template>
            <div style="background-color:<%# Container.ViewData.Eval("BC") %>;color:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>">
<%# Container.ViewData.Eval("Severity") %>
            </div>
          </template>
        </ix:TemplateColumn>
        <ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center">
          <Template>
            <div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>">
<%# Container.ViewData.Eval("FindingStatus") %>
            </div>
          </Template>
        </ix:TemplateColumn>
      </Columns>
    </ix:InventoryView>
  </ix:Inventory>
</ix:InventoryPage>
```

### E1214-ConfigurableViewActions

Unresolved.CLF_Checklist_Inventory (Mobile) — ConfigurableViewActions; stable record ID 994f6be1-97d8-4b82-9d7c-7dc991a64aee. Source $.GraphData.Items[418].FieldData.ConfigurableViewActions.

```json
[]
```

### E1214-ViewDefinition

Unresolved.CLF_Checklist_Inventory (Mobile) — ViewDefinition; stable record ID 994f6be1-97d8-4b82-9d7c-7dc991a64aee. Source $.GraphData.Items[418].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Reference",
    "Title",
    "NbQuestions",
    "ChecklistType"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1214-Content

Unresolved.CLF_Checklist_Inventory (Mobile) — Content; stable record ID 994f6be1-97d8-4b82-9d7c-7dc991a64aee. Source $.GraphData.Items[418].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Checklist_Inventory"><ix:InventoryView ID="CLF_Checklist_InventoryView"><Actions><ix:MassUpdateAction ViewName="CLF_Checklist_MassUpdate"/></Actions><grouping><ix:Group By="ChecklistType"/></grouping><Columns><ix:Column For="Reference" LinkTo="default"/><ix:Column For="Title"/><ix:Column For="NbQuestions" HorizontalAlign="center"/><ix:Column For="ChecklistType" FilterAs="dropdown"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1226-ConfigurableViewActions

Unresolved.ConfgAppSetting_SpecAppSettingsObjectInventoryView (Mobile) — ConfigurableViewActions; stable record ID 7f08f787-a93a-4306-93eb-7b3f3ba553d2. Source $.GraphData.Items[423].FieldData.ConfigurableViewActions.

```json
[]
```

### E1226-ViewDefinition

Unresolved.ConfgAppSetting_SpecAppSettingsObjectInventoryView (Mobile) — ViewDefinition; stable record ID 7f08f787-a93a-4306-93eb-7b3f3ba553d2. Source $.GraphData.Items[423].FieldData.ViewDefinition.

```json
{
  "Properties": [],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1226-Content

Unresolved.ConfgAppSetting_SpecAppSettingsObjectInventoryView (Mobile) — Content; stable record ID 7f08f787-a93a-4306-93eb-7b3f3ba553d2. Source $.GraphData.Items[423].FieldData.Content.

```xml
<ix:InventoryPage>
<ix:Inventory ID='ConfgAppSetting_SpecAppSettingsObjectInventory'>
<ix:InventoryView ID='ConfgAppSetting_SpecAppSettingsObjectInventoryView'>
<Columns></Columns>
</ix:InventoryView>
</ix:Inventory>
</ix:InventoryPage>
```

### E1278-ConfigurableViewActions

Unresolved.CLF_Subchecklist_Detail (Mobile) — ConfigurableViewActions; stable record ID 4e213e4a-ccd0-44eb-a513-fd9c0fd35b06. Source $.GraphData.Items[443].FieldData.ConfigurableViewActions.

```json
[]
```

### E1278-ViewDefinition

Unresolved.CLF_Subchecklist_Detail (Mobile) — ViewDefinition; stable record ID 4e213e4a-ccd0-44eb-a513-fd9c0fd35b06. Source $.GraphData.Items[443].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "MasterChecklist",
    "RecordNo",
    "PubChecklist",
    "Comments",
    "StartCondition"
  ],
  "GridProperties": {
    "QuestionAnswers": [
      "PubQuestion.Question.References",
      "Choice",
      "Date",
      "Choices",
      "Float",
      "Text",
      "Checkbox",
      "Comments",
      "NumbofDocuments",
      "Findings",
      "PubQuestion.AnswerType.Value",
      "PubQuestion.Order",
      "PubQuestion.Section"
    ],
    "Findings": [
      "RecordNo",
      "Description",
      "ResponseDue"
    ]
  },
  "ChecklistGrids": {}
}
```

### E1278-Content

Unresolved.CLF_Subchecklist_Detail (Mobile) — Content; stable record ID 4e213e4a-ccd0-44eb-a513-fd9c0fd35b06. Source $.GraphData.Items[443].FieldData.Content.

```xml
<ix:DetailPage>
  <ix:DetailSection Title="Sub-Checklist" Icon="Icons/new/48x48/clipboard.gif" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0">
    <ix:FieldArea Span="true"><ix:Field For="MasterChecklist" IsMandatory="True" /><ix:Field DisplayMode="View,Edit" For="RecordNo" /><ix:Field DisplayMode="Create" EditAs="Dropdown" For="PubChecklist" IsMandatory="true" /><ix:Field For="Comments" /><ix:Field For="StartCondition" /></ix:FieldArea>
  </ix:DetailSection>
  <ix:GridSection ID="QuestionAnswersGridSection" For="QuestionAnswers" DisplayMode="Edit,View" EditLinkTarget="popup" RefreshScope="Row" HideGroupAddButton="true" Title="Checklist: {#PubChecklist}" AllowSorting="false" meta:resourcekey="GridSection2" ResourceKey="GridSection2">
    <Actions>
<ix:MassUpdateAction ViewName="CLF_QuestionAnswer_MassUpdate"/>
    </Actions>
    <menu>
<ix:GridCreateActionLink Override="true" Visible="false"/>
<ix:GridDeleteActionLink Override="true" Visible="false"/>
    </menu>
    <Sorting>
<ix:Sort By="PubQuestion.Order" Direction="Ascending"/>
    </Sorting>
    <grouping>
<ix:Group By="PubQuestion.Section"/>
    </grouping>
    <aliases>
<ix:Alias For="PubQuestion.QuestionRef"/>
<ix:Alias For="PubQuestion.Guideline"/>
<ix:Alias For="PubQuestion.Id"/>
<ix:Alias For="ChecklistAnswerId"/>
<ix:Alias For="Choice.BColor.Value"/>
<ix:Alias For="Choice.TColor.Value"/>
<ix:Alias For="Choice.Css"/>
<ix:Alias For="Id"/>
    </aliases>
    <Columns>
      <ix:TemplateColumn For="PubQuestion.Content" Width="1">
        <Template>
          <span style="font-weight:bold;">
<%# Container.ViewData.Eval("PubQuestion.QuestionRef") %> <%# Container.ViewData.Eval("PubQuestion.Content") %>
          </span>
          <div class="fieldHint">
<%# Container.ViewData.Eval("PubQuestion.Guideline") %>
          </div>
        </Template>
      </ix:TemplateColumn>
<ix:Column For="PubQuestion.Question.References" FetchAs="Collection" DisplayAs="List" Visible="false"/>
      <ix:MergeColumn Caption="Answer" For="PubQuestion.AnswerType.Value" RefreshScope="Row" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0">
        <MappedColumns>
          <ix:TemplateColumn MapValue="Choice_disable" For="Choice" EditMode="inline">
            <Template>
              <div style="color:<%# Container.ViewData.Eval("Choice.TColor.Value") %>;background-color:<%# Container.ViewData.Eval("Choice.BColor.Value") %>;<%# Container.ViewData.Eval("Choice.Css") %>">
<%# Container.ViewData.Eval("Choice") %>
              </div>
            </Template>
          </ix:TemplateColumn>
<ix:Column MapValue="Choice" For="Choice" EditMode="inline"/>
<ix:Column MapValue="Date" For="Date" EditMode="inline" Format="d"/>
<ix:Column MapValue="Choices" For="Choices" FetchAs="collection" DisplayAs="List" EditMode="popup"/>
<ix:Column MapValue="Float" For="Float" EditMode="inline" HorizontalAlign="right"/>
<ix:Column MapValue="Text" For="Text" EditMode="popup"/>
<ix:Column MapValue="Checkbox" For="Checkbox" EditMode="inline"/>
        </MappedColumns>
      </ix:MergeColumn>
<ix:Column For="Comments" EditMode="popup" RefreshScope="Row"/>
<ix:Column For="NumbofDocuments" LinkTo="CLF_QuestionAnswer_Docs/View?entityid={#id}" LinkTarget="popup" RefreshScope="Row" Caption="#Docs" HorizontalAlign="center" meta:resourcekey="Column0" ResourceKey="Column0"/>
      <ix:TemplateColumn For="NbFindings" Caption="Add" HorizontalAlign="center" width="20px" AllowFiltering="false" AllowSorting="false">
        <Template>
          <a title="Create &amp; Attach a new Finding" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Finding_Detail/Create?ChecklistAnswer=<%# Container.ViewData.Eval("ChecklistAnswerId") %>&amp;RelatedId=<%# Container.ViewData.Eval("Id") %>&amp;RelatedPath=CLF_QuestionAnswerObject.Findings">
            <img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/>
            </a>
          </Template>
        </ix:TemplateColumn>
        
<ix:Column Caption="Attached Findings" DisplayAs="List" EditMode="popup" FetchAs="Collection" For="Findings" RefreshScope="row"/>

      </Columns>
    </ix:GridSection>
    <ix:GridSection ID="FindingsGridSection" For="Findings" DisplayMode="Edit,View" EditLinkTarget="popup" RefreshScope="Row" Title="Finding Summary" meta:resourcekey="GridSection0" ResourceKey="GridSection0">
      <menu>
<ix:GridCreateActionLink Override="true" Visible="true" OpenIn="popup"/>
      </menu>
      <Sorting>
<ix:Sort By="RecordNo" Direction="Ascending"/>
      </Sorting>
      <aliases>
<ix:Alias For="Id"/>
      </aliases>
      <Columns>
<ix:Column For="RecordNo" LinkTo="default"/>
<ix:Column For="Description" Truncate="true"/>
<ix:Column For="ResponseDue" Format="d"/>
      </Columns>
    </ix:GridSection>
<ix:WorkflowComments DisplayMode="View"/>
<ix:WorkflowTracking DisplayMode="View"/>
<ix:ESignatureHistorySection DisplayMode="View"/>
<ix:MailMergeTemplates ID="MailMergeFragmentGridSection" DisplayMode="View"/>
  </ix:DetailPage>
  <style>
.data_row td.wrap {
    white-space: normal !important;
}
  </style>
```

### E1306-ConfigurableViewActions

Unresolved.QP_AbCorrectivActi_Closed_Inventory (Mobile) — ConfigurableViewActions; stable record ID 07eb3dca-71a9-44d5-8f8a-3295cd756729. Source $.GraphData.Items[450].FieldData.ConfigurableViewActions.

```json
[]
```

### E1306-ViewDefinition

Unresolved.QP_AbCorrectivActi_Closed_Inventory (Mobile) — ViewDefinition; stable record ID 07eb3dca-71a9-44d5-8f8a-3295cd756729. Source $.GraphData.Items[450].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "CPARActionReq",
    "ActionNo",
    "ActualCost",
    "CAR",
    "CompletedBy"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1306-Content

Unresolved.QP_AbCorrectivActi_Closed_Inventory (Mobile) — Content; stable record ID 07eb3dca-71a9-44d5-8f8a-3295cd756729. Source $.GraphData.Items[450].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="FragApplication_AbCorrectivActiObjectInventory"><ix:InventoryView ID="FragApplication_AbCorrectivActiObjectInventoryView"><Columns><ix:Column For="CPARActionReq" LinkTo="default" /><ix:Column For="ActionNo" /><ix:Column For="ActualCost" /><ix:Column For="CAR" /><ix:Column For="CompletedBy" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1475-ConfigurableViewActions

Unresolved.CLF_QuestionAnswer_Inventory (Mobile) — ConfigurableViewActions; stable record ID a6811fd8-34c6-4688-be37-1ccd101602a4. Source $.GraphData.Items[506].FieldData.ConfigurableViewActions.

```json
[]
```

### E1475-ViewDefinition

Unresolved.CLF_QuestionAnswer_Inventory (Mobile) — ViewDefinition; stable record ID a6811fd8-34c6-4688-be37-1ccd101602a4. Source $.GraphData.Items[506].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Choice",
    "Date",
    "Choices",
    "Float",
    "Text",
    "Checkbox",
    "PubQuestion.AnswerType.Value",
    "Comments",
    "HelperFinding"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1475-Content

Unresolved.CLF_QuestionAnswer_Inventory (Mobile) — Content; stable record ID a6811fd8-34c6-4688-be37-1ccd101602a4. Source $.GraphData.Items[506].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_QuestionAnswer_Inventory"><ix:InventoryView ID="CLF_QuestionAnswer_InventoryView" DisplayEditColumn="false" HideGroupAddButton="true"><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></Menu><Sorting><ix:Sort By="PubQuestion.Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="PubQuestion.Section"/></grouping><aliases><ix:Alias For="ChecklistAnswerId"/><ix:Alias For="PubQuestion.Guideline"/><ix:Alias For="PubQuestion.Id"/><ix:Alias For="Choice.BColor.Value"/><ix:Alias For="Choice.TColor.Value"/><ix:Alias For="Choice.Css"/></aliases><Columns><ix:TemplateColumn For="PubQuestion.Content"><Template><span style="font-weight:bold;"><%# Container.ViewData.Eval("PubQuestion.QuestionRef") %> <%# Container.ViewData.Eval("PubQuestion.Content") %></span><div class="fieldHint"><%# Container.ViewData.Eval("PubQuestion.Guideline") %></div></Template></ix:TemplateColumn><ix:MergeColumn Caption="Answer" For="PubQuestion.AnswerType.Value" ResourceKey="MergeColumn0" meta:resourcekey="MergeColumn0"><MappedColumns><ix:TemplateColumn MapValue="Choice_Disable" For="Choice"><Template><div style="color:<%# Container.ViewData.Eval("Choice.TColor.Value") %>;background-color:<%# Container.ViewData.Eval("Choice.BColor.Value") %>;<%# Container.ViewData.Eval("Choice.Css") %>"><%# Container.ViewData.Eval("Choice") %></div></Template></ix:TemplateColumn><ix:Column For="Choice" MapValue="Choice" /><ix:Column For="Date" Format="d" MapValue="Date" /><ix:Column DisplayAs="List" FetchAs="collection" For="Choices" MapValue="Choices" /><ix:Column For="Float" HorizontalAlign="right" MapValue="Float" /><ix:Column For="Text" MapValue="Text" /><ix:Column For="Checkbox" MapValue="Checkbox" /></MappedColumns></ix:MergeColumn><ix:Column For="Comments" /><ix:Column For="HelperFinding" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage><style>.data_row td.wrap {
    white-space: normal !important;
}</style>
```

### E1523-ConfigurableViewActions

Unresolved.CLF_LocalizResource_Inventory (Mobile) — ConfigurableViewActions; stable record ID 3c48fe73-f143-440c-b4d6-9d5cf164b124. Source $.GraphData.Items[522].FieldData.ConfigurableViewActions.

```json
[]
```

### E1523-ViewDefinition

Unresolved.CLF_LocalizResource_Inventory (Mobile) — ViewDefinition; stable record ID 3c48fe73-f143-440c-b4d6-9d5cf164b124. Source $.GraphData.Items[522].FieldData.ViewDefinition.

```json
{
  "Properties": [],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1523-Content

Unresolved.CLF_LocalizResource_Inventory (Mobile) — Content; stable record ID 3c48fe73-f143-440c-b4d6-9d5cf164b124. Source $.GraphData.Items[522].FieldData.Content.

```xml
<ix:InventoryPage>
<ix:Inventory ID='CLF_LocalizResourceObjectInventory'>
<ix:InventoryView ID='CLF_LocalizResourceObjectInventoryView'>
<Columns>
</Columns>
</ix:InventoryView>
</ix:Inventory>
</ix:InventoryPage>
```

### E1559-ConfigurableViewActions

Unresolved.Insp_InspRoleOptionObjectDetailView (Mobile) — ConfigurableViewActions; stable record ID b811eace-d97e-4a19-aeb3-377a99d002c8. Source $.GraphData.Items[535].FieldData.ConfigurableViewActions.

```json
[]
```

### E1559-ViewDefinition

Unresolved.Insp_InspRoleOptionObjectDetailView (Mobile) — ViewDefinition; stable record ID b811eace-d97e-4a19-aeb3-377a99d002c8. Source $.GraphData.Items[535].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1559-Content

Unresolved.Insp_InspRoleOptionObjectDetailView (Mobile) — Content; stable record ID b811eace-d97e-4a19-aeb3-377a99d002c8. Source $.GraphData.Items[535].FieldData.Content.

```xml
<ix:DetailPage>
<ix:DetailSection Title='Fields'>
<ix:FieldArea>
</ix:FieldArea>
<ix:WorkflowFields/>
</ix:DetailSection>
<ix:WorkflowComments/>
<ix:WorkflowTracking/>
<ix:ESignatureHistorySection/>
</ix:DetailPage>
```

### E1621-ConfigurableViewActions

Unresolved.Insp_EquipInspection_Detail (Mobile) — ConfigurableViewActions; stable record ID 37fd6d14-6091-43ae-8438-193d5c4fc702. Source $.GraphData.Items[552].FieldData.ConfigurableViewActions.

```json
[
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Hide/Show Checklist Grid",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "TypeOfInspec.FindingTracking",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "true",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "QuestionAnswerNoFindings",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "QuestionAnswerFindings",
                "elementType": 0
              },
              {
                "elementId": "FindingsGridSection",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "QuestionAnswerFindings",
                "elementType": 0
              },
              {
                "elementId": "FindingsGridSection",
                "elementType": 0
              }
            ]
          },
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "QuestionAnswerNoFindings",
                "elementType": 0
              }
            ]
          }
        ]
      },
      {
        "__type": "HideAction",
        "elements": [
          {
            "elementId": "TypeOfInspec.FindingTracking",
            "elementType": 0
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "TypeOfInspec.FindingTracking"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Hide/Show Scoring",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "InspecChecklist.Checklist.EnableScoring",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "true",
                "entityType": null,
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "MaxPoints",
                "elementType": 0
              },
              {
                "elementId": "PointsAwarded",
                "elementType": 0
              },
              {
                "elementId": "Score",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "MaxPoints",
                "elementType": 0
              },
              {
                "elementId": "PointsAwarded",
                "elementType": 0
              },
              {
                "elementId": "Score",
                "elementType": 0
              }
            ]
          }
        ]
      },
      {
        "__type": "HideAction",
        "elements": [
          {
            "elementId": "InspecChecklist.Checklist.EnableScoring",
            "elementType": 0
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "InspecChecklist.Checklist.EnableScoring"
      }
    ]
  },
  {
    "__type": "ViewAction",
    "enabled": true,
    "name": "Hide/Show Equipment Field",
    "stageContainers": [],
    "actions": [
      {
        "__type": "DecisionAction",
        "condition": {
          "__type": "ExpressionPredicate",
          "expression": null,
          "predicates": [
            {
              "__type": "SimplePredicate",
              "drilldown": false,
              "leftOperand": {
                "__type": "PropertyOperand",
                "propertyName": "TypeOfInspec",
                "aggregateFunction": 0,
                "dataSourceAlias": null,
                "propertyFunction": null,
                "resolveDisplayProperty": false,
                "uom": null
              },
              "operator": {
                "__type": "ViewActionOperator",
                "negate": false,
                "type": 1
              },
              "rightOperand": {
                "__type": "ValueOperand",
                "value": "51053d80-904d-4f52-bea8-673a7b8ad9de",
                "entityType": "Insp_TypeObject",
                "text": null
              }
            }
          ]
        },
        "falseDecision": [
          {
            "__type": "HideAction",
            "elements": [
              {
                "elementId": "EquipmentText",
                "elementType": 0
              }
            ]
          }
        ],
        "trueDecision": [
          {
            "__type": "ShowAction",
            "elements": [
              {
                "elementId": "EquipmentText",
                "elementType": 0
              }
            ]
          }
        ]
      }
    ],
    "onPageLoad": true,
    "triggers": [
      {
        "__type": "FieldTrigger",
        "event": 0,
        "fieldName": "TypeOfInspec"
      }
    ]
  }
]
```

### E1621-ViewDefinition

Unresolved.Insp_EquipInspection_Detail (Mobile) — ViewDefinition; stable record ID 37fd6d14-6091-43ae-8438-193d5c4fc702. Source $.GraphData.Items[552].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Location",
    "TypeOfInspec",
    "InspecChecklist",
    "InspectionDate",
    "PersResponsible",
    "RecordNo",
    "Equipment",
    "EquipmentTxt",
    "TypeOfInspec.FindingTracking",
    "InspecChecklist.Checklist.EnableScoring",
    "MaxPoints",
    "PointsAwarded",
    "Score"
  ],
  "GridProperties": {
    "Findings": [
      "Description",
      "FindingStatus",
      "RecordNo"
    ],
    "ActionPlanAbst": [
      "ActionNo",
      "CPARActionReq",
      "CPARTypeID",
      "Workflow.PersonResponsible",
      "Workflow.DueDate",
      "CompletedBy",
      "CompletionDate",
      "Workflow.Status"
    ]
  },
  "ChecklistGrids": {
    "QuestionAnswers": {
      "Properties": [
        "PubQuestion.Content",
        "Choice",
        "Date",
        "DateTime",
        "Choices",
        "Float",
        "Text",
        "Checkbox",
        "Choice.MobileAction.Value",
        "PubQuestion.AnswerType.Value",
        "PubQuestion.Section",
        "PubQuestion.Order",
        "ChecklistAnswer",
        "Id"
      ],
      "GridTabs": {
        "Findings": [
          "Description",
          "ChecklistAnswer",
          "QuestionAnswers"
        ],
        "InspActionPlans": [
          "CPARActionReq",
          "CheckListAnsAct",
          "RelatedQstions",
          "ChecklistAnswer"
        ]
      },
      "FieldTabs": [
        "Comments"
      ]
    }
  }
}
```

### E1621-Content

Unresolved.Insp_EquipInspection_Detail (Mobile) — Content; stable record ID 37fd6d14-6091-43ae-8438-193d5c4fc702. Source $.GraphData.Items[552].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar><ix:SaveActionLink Override="true" DisplayMode="Edit"/></ix:DetailPageMenuBar><ix:StageContainer UseDefaultDuringCreate="true" VisibleFor="Create" ID="StageContainer_Create"><ix:MobileSection Title="Inspection Details"><ix:DetailSection Title="Inspection"><ix:FieldArea Span="true"><ix:Field For="Location"/><ix:Field Display="inline" For="TypeOfInspec"/><ix:Field Display="inline" For="InspecChecklist" IsMandatory="true"/><ix:Field For="InspectionDate"/><ix:Field Caption="Inspector" For="PersResponsible"/></ix:FieldArea></ix:DetailSection></ix:MobileSection></ix:StageContainer><ix:StageContainer UseDefaultDuringCreate="false" VisibleFor="Draft" ID="StageContainer_Draft"><ix:MobileSection Title="Inspection Details"><ix:DetailSection Title="Inspection"><ix:FieldArea Span="true"><ix:Field For="RecordNo" DisplayMode="View,Edit"/><ix:Field For="Location" ReadOnly="true"/><ix:Field For="InspectionDate" ReadOnly="True"/><ix:Field For="TypeOfInspec" Readonly="True"/><ix:Field For="Equipment" ID="EquipmentRelation"/><ix:Field For="EquipmentTxt" ID="EquipmentText"/><ix:Field For="InspecChecklist" Readonly="True"/><ix:Field For="TypeOfInspec.FindingTracking"/><ix:Field For="InspecChecklist.Checklist.EnableScoring"/><ix:Field For="MaxPoints"/><ix:Field For="PointsAwarded"/><ix:Field For="Score"/></ix:FieldArea></ix:DetailSection></ix:MobileSection></ix:StageContainer><ix:StageContainer UseDefaultDuringCreate="false" VisibleFor="InspectioninProgress" ID="StageContainer_Progress">
<%------------------------------Questions - With Findings------------------------------%>
<ix:MobileSection Title="Questions" ID="QuestionAnswerFindings"><ix:ChecklistGridSection For="QuestionAnswers" ID="QuestionAnswersGridSection_InProgress_MOBILE_Findings" Title="Questions" VisibilityExpression="PubQuestion.Expression" QuestionCode="PubQuestion.QuestionRef" AnswerCode="Choice.Reference"><Sorting><ix:Sort By="PubQuestion.Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="PubQuestion.Section"/></grouping><Tabs><ix:DocumentTab/><ix:FieldTab For="Comments"/><ix:GridTab For="Findings"><ix:Column For="Description"/><Parameters><ix:Parameter For="ChecklistAnswer"><ix:Property Text="ChecklistAnswer"/></ix:Parameter><ix:Parameter For="QuestionAnswers"><ix:Property Text="Id"/></ix:Parameter></Parameters></ix:GridTab></Tabs><Columns><ix:Column For="PubQuestion.Content" IsQuestion="True"/><ix:MergeColumn For="PubQuestion.AnswerType.Value" IsAnswer="True"><MappedColumns><ix:Column For="Choice" MapValue="Choice"/><ix:Column For="Date" MapValue="Date"/><ix:Column For="DateTime" MapValue="DateTime"/><ix:Column For="Choices" MapValue="Choices"/><ix:Column For="Float" MapValue="Float"/><ix:Column For="Text" MapValue="Text"/><ix:Column For="Checkbox" MapValue="Checkbox"/></MappedColumns></ix:MergeColumn><ix:Column For="Choice.MobileAction.Value"/></Columns></ix:ChecklistGridSection></ix:MobileSection>
<%------------------------------Questions - No Findings ------------------------------%>
<ix:MobileSection Title="Questions" ID="QuestionAnswerNoFindings"><ix:ChecklistGridSection For="QuestionAnswers" ID="QuestionAnswersGridSection_InProgress_MOBILE_NoFindings" Title="Questions" VisibilityExpression="PubQuestion.Expression" QuestionCode="PubQuestion.QuestionRef" AnswerCode="Choice.Reference"><Sorting><ix:Sort By="PubQuestion.Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="PubQuestion.Section"/></grouping><Tabs><ix:DocumentTab/><ix:FieldTab For="Comments"/><ix:GridTab For="InspActionPlans"><ix:Column For="CPARActionReq"/><Parameters><ix:Parameter For="CheckListAnsAct"><ix:Property Text="ChecklistAnswer"/></ix:Parameter><ix:Parameter For="RelatedQstions"><ix:Property Text="Id"/></ix:Parameter><ix:Parameter For="ChecklistAnswer"><ix:Property Text="ChecklistAnswer"/></ix:Parameter></Parameters></ix:GridTab></Tabs><Columns><ix:Column For="PubQuestion.Content" IsQuestion="True"/><ix:MergeColumn For="PubQuestion.AnswerType.Value" IsAnswer="True"><MappedColumns><ix:Column For="Choice" MapValue="Choice"/><ix:Column For="Date" MapValue="Date"/><ix:Column For="DateTime" MapValue="DateTime"/><ix:Column For="Choices" MapValue="Choices"/><ix:Column For="Float" MapValue="Float"/><ix:Column For="Text" MapValue="Text"/><ix:Column For="Checkbox" MapValue="Checkbox"/></MappedColumns></ix:MergeColumn><ix:Column For="Choice.MobileAction.Value"/></Columns></ix:ChecklistGridSection></ix:MobileSection>
<%------------------------------Findings Summary------------------------------%>
<ix:MobileSection Title="Findings Summary" ID="FindingsGridSection"><ix:GridSection Readonly="false" For="Findings" ID="FindingsGridSection_InProgress_MOBILE" Title="Findings Summary"><Sorting><ix:Sort By="RecordNo" Direction="Ascending"/></Sorting><menu><ix:GridCreateActionLink Override="true" Visible="true"/></menu><Columns><ix:Column For="Description" LinkTo="default"/><ix:Column For="FindingStatus"/></Columns></ix:GridSection></ix:MobileSection>
<%------------------------------Action Plan Summary------------------------------%>
<ix:MobileSection Title="Action Plan Summary" ID="ActionPlansGridSection"><ix:GridSection Readonly="true" For="ActionPlanAbst" ID="ActionPlansGridSection_InProgess_MOBILE" Title="Action Plan Summary"><Entities><ix:IncludeEntity name="CLF_InsActionPlanObject"/></Entities><menu><ix:GridCreateActionLink Override="true" Visible="true"/><ix:GridListAllActionLink Override="true" Caption="Refresh" meta:resourcekey="GridListAllActionLink1" ResourceKey="GridListAllActionLink1"/></menu><Sorting><ix:Sort By="ActionNo" Direction="Ascending"/></Sorting><Columns><ix:Column For="ActionNo" LinkTo="default"/><ix:Column DisplayAs="Truncate" EditMode="popup" For="CPARActionReq" RefreshScope="Row"/><ix:Column EditMode="inline" FilterAs="dropdown" For="CPARTypeID" RefreshScope="Row"/><ix:Column DisplayAs="Label" For="Workflow.PersonResponsible"/><ix:Column FOrmat="d" For="Workflow.DueDate"/><ix:Column For="CompletedBy"/><ix:Column FOrmat="d" For="CompletionDate"/><ix:Column For="Workflow.Status"/></Columns></ix:GridSection></ix:MobileSection><ix:MobileSection Title="Inspection Details"><ix:AttachmentSection ID="AttachmentFragmentGridSection"/><ix:DetailSection Title="Inspection"><ix:FieldArea Span="true"><ix:Field For="RecordNo" DisplayMode="View,Edit"/><ix:Field For="Location" ReadOnly="true"/><ix:Field For="InspectionDate" ReadOnly="True"/><ix:Field For="TypeOfInspec" Readonly="True"/><ix:Field For="InspecChecklist" Readonly="True"/><ix:Field For="TypeOfInspec.FindingTracking"/><ix:Field For="InspecChecklist.Checklist.EnableScoring"/><ix:Field For="MaxPoints"/><ix:Field For="PointsAwarded"/><ix:Field For="Score"/></ix:FieldArea></ix:DetailSection></ix:MobileSection></ix:StageContainer></ix:DetailPage>
```

### E1675-ConfigurableViewActions

Unresolved.CLF_Quest_Inventory (Mobile) — ConfigurableViewActions; stable record ID 0380d5a8-1eb9-4b25-9cff-15a1525f0768. Source $.GraphData.Items[559].FieldData.ConfigurableViewActions.

```json
[]
```

### E1675-ViewDefinition

Unresolved.CLF_Quest_Inventory (Mobile) — ViewDefinition; stable record ID 0380d5a8-1eb9-4b25-9cff-15a1525f0768. Source $.GraphData.Items[559].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "QuestionRef",
    "Content",
    "AnswerType",
    "ChoiceList",
    "Order",
    "ChecklistType"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1675-Content

Unresolved.CLF_Quest_Inventory (Mobile) — Content; stable record ID 0380d5a8-1eb9-4b25-9cff-15a1525f0768. Source $.GraphData.Items[559].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Quest_Inventory"><ix:InventoryView ID="CLF_Quest_InventoryView"><Menu><ix:GridCreateActionLink Override="true" Visible="true" OpenIn="popup"/></Menu><Actions><ix:MassUpdateAction ViewName="CLF_Quest_MassUpdate"/></Actions><grouping><ix:Group By="ChecklistType"/><ix:Group By="Section"/></grouping><Sorting><ix:Sort By="Order" Direction="Ascending"/></Sorting><Columns><ix:Column For="QuestionRef" LinkTo="default" /><ix:Column DisplayAs="html" For="Content" /><ix:Column FilterAs="dropdown" For="AnswerType" /><ix:Column FilterAs="dropdown" For="ChoiceList" /><ix:Column For="Order" /><ix:Column FilterAs="dropdown" For="ChecklistType" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1854-ConfigurableViewActions

Unresolved.CLF_QuestionAnswer_Findings (Mobile) — ConfigurableViewActions; stable record ID 81e596a2-9f94-46b1-a528-efb1344007c8. Source $.GraphData.Items[628].FieldData.ConfigurableViewActions.

```json
[]
```

### E1854-ViewDefinition

Unresolved.CLF_QuestionAnswer_Findings (Mobile) — ViewDefinition; stable record ID 81e596a2-9f94-46b1-a528-efb1344007c8. Source $.GraphData.Items[628].FieldData.ViewDefinition.

```json
{
  "Properties": [],
  "GridProperties": {
    "Findings": [
      "RecordNo",
      "Description",
      "ResponseDue",
      "ActionPlans",
      "FindingStatus"
    ],
    "InspActionPlans": [
      "ActionNo",
      "ActionOwner",
      "ActionPlanType",
      "Activites",
      "ActivitiesStart"
    ],
    "ActionPlans": [
      "ActionNo",
      "ActionPlanType",
      "ActPlanSysType",
      "ActualCost",
      "CAR"
    ]
  },
  "ChecklistGrids": {}
}
```

### E1854-Content

Unresolved.CLF_QuestionAnswer_Findings (Mobile) — Content; stable record ID 81e596a2-9f94-46b1-a528-efb1344007c8. Source $.GraphData.Items[628].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar"><ix:EditActionLink Override="true" Visible="false"/><ix:AddEntryActionLink Override="true" Visible="false"/><ix:CloneActionLink Override="true" Visible="false"/><ix:DeleteActionLink Override="true" Visible="false"/></ix:DetailPageMenuBar><ix:GridSection For="Findings" ID="FindingsGridSection"><Columns><ix:Column For="RecordNo" LinkTo="default" /><ix:Column For="Description" Truncate="true" /><ix:Column For="ResponseDue" Format="d" /><ix:Column For="ActionPlans" /><ix:Column For="FindingStatus" /></Columns></ix:GridSection><ix:GridSection For="InspActionPlans" ID="InspActionPlansGridSection"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="ActionOwner" /><ix:Column For="ActionPlanType" /><ix:Column For="Activites" /><ix:Column For="ActivitiesStart" /></Columns></ix:GridSection><ix:GridSection For="ActionPlans" ID="ActionPlansGridSection"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="ActionPlanType" /><ix:Column For="ActPlanSysType" /><ix:Column For="ActualCost" /><ix:Column For="CAR" /></Columns></ix:GridSection></ix:DetailPage>
```

### E1860-ConfigurableViewActions

Unresolved.CLF_MulticheckList_Detail (Mobile) — ConfigurableViewActions; stable record ID 8c75e3a7-004a-4faa-89b9-39c42861d864. Source $.GraphData.Items[631].FieldData.ConfigurableViewActions.

```json
[]
```

### E1860-ViewDefinition

Unresolved.CLF_MulticheckList_Detail (Mobile) — ViewDefinition; stable record ID 8c75e3a7-004a-4faa-89b9-39c42861d864. Source $.GraphData.Items[631].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Location",
    "RecordNo",
    "Name",
    "Scope",
    "Objective",
    "Agenda",
    "PersResponsible",
    "Workflow.RecurringSeries.StartDate",
    "Workflow.RecurringSeries.Frequency"
  ],
  "GridProperties": {
    "SubChecklists": [
      "RecordNo",
      "PubChecklist",
      "Progress",
      "NbFindings"
    ],
    "SubChecklists.QuestionAnswers": [
      "PubQuestion.Question.References",
      "Choice",
      "Date",
      "Choices",
      "Float",
      "Text",
      "Checkbox",
      "Comments",
      "NumbofDocuments",
      "Findings",
      "PubQuestion.AnswerType.Value",
      "PubQuestion.Order",
      "ChecklistAnswer.Name",
      "PubQuestion.Section"
    ],
    "SubChecklists.Findings": [
      "RecordNo",
      "Description",
      "ResponseDue"
    ]
  },
  "ChecklistGrids": {}
}
```

### E1860-Content

Unresolved.CLF_MulticheckList_Detail (Mobile) — Content; stable record ID 8c75e3a7-004a-4faa-89b9-39c42861d864. Source $.GraphData.Items[631].FieldData.Content.

```xml
<ix:DetailPage>
  <ix:DetailPageMenuBar ID="DetailPageMenuBar">
<ix:SaveAddNewActionLink Override="true" DisplayMode="Edit"/>
<ix:SaveActionLink Override="true" DisplayMode="Edit"/>
<ix:SaveExitActionLink Override="true" DisplayMode="Edit"/>
<ix:CancelActionLink Override="true" DisplayMode="Edit"/>
<ix:SpellCheckActionLink Override="true" DisplayMode="Edit"/>
<ix:SaveActionLink Override="false" DisplayMode="Create" Caption="Continue and Add Checklists"/>
<ix:SpellCheckActionLink Override="false" DisplayMode="Create"/>
<ix:CancelActionLink Override="false" DisplayMode="Create"/>
  </ix:DetailPageMenuBar>
  <ix:DetailSection Title="Audit Details" Icon="Icons/new/48x48/clipboard_empty.gif" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0" ModernIcon="Raven/Icons/BrightBlue_48/note32.png">
    <ix:FieldArea Span="true">
<ix:Field For="Location"/>
<ix:Field DisplayMode="View,Edit" For="RecordNo"/>
<ix:Field EditAs="TextBox" For="Name" IsMandatory="True"/>
<ix:Field For="Scope"/>
<ix:Field For="Objective"/>
<ix:Field For="Agenda"/>
<ix:Field For="PersResponsible"/>
<ix:Field For="Workflow.RecurringSeries.StartDate"/>
<ix:Field For="Workflow.RecurringSeries.Frequency"/>
    </ix:FieldArea>
  </ix:DetailSection>
  <ix:GridSection ID="SubChecklistsGridSection" For="SubChecklists" DisplayMode="View" EditLinkTarget="popup" RefreshScope="Row" Title="Required Checklists" meta:resourcekey="GridSection0" ResourceKey="GridSection0" ModernIcon="Raven/Icons/BrightBlue_48/silhouette107.png">
    <Entities>
<ix:IncludeEntity name="CLF_SubchecklistObject"/>
    </Entities>
    <Menu>
<ix:GridCreateActionLink runat="server" Override="true" For="PubChecklist" Caption="Select Checklists" meta:resourcekey="GridCreateActionLink0" ResourceKey="GridCreateActionLink0"/>
<ix:GridCreateActionLink runat="server" Override="false" OpenIn="popup"/>
    </Menu>
    <Sorting>
<ix:Sort runat="server" By="RecordNo" Direction="Ascending"/>
    </Sorting>
    <Columns>
<ix:Column For="RecordNo" LinkTo="default"/>
<ix:Column For="PubChecklist"/>
<ix:Column For="Progress"/>
<ix:Column For="NbFindings" Caption="#F" LinkTo="CLF_ChecklistAnswer_Findings/View?entityid={#id}" LinkTarget="popup" HorizontalAlign="center" meta:resourcekey="Column0" ResourceKey="Column0"/>
    </Columns>
  </ix:GridSection>
  <ix:GridSection ID="AnswerSummarySection" For="SubChecklists.QuestionAnswers" DisplayMode="Edit,View" EditLinkTarget="popup" RefreshScope="Row" HideGroupAddButton="true" Title="{#PubChecklist}" AllowSorting="false" ModernIcon="Raven/Icons/BrightBlue_48/checkmark21.png">
    <Actions>
<ix:MassUpdateAction ViewName="CLF_QuestionAnswer_MassUpdate"/>
    </Actions>
    <menu>
<ix:GridCreateActionLink Override="true" Visible="false"/>
<ix:GridDeleteActionLink Override="true" Visible="false"/>
    </menu>
    <Sorting>
<ix:Sort By="PubQuestion.Order" Direction="Ascending"/>
    </Sorting>
    <grouping>
<ix:Group By="ChecklistAnswer.Name" HeaderCaption="Checklist"/>
<ix:Group By="PubQuestion.Section"/>
    </grouping>
    <aliases>
<ix:Alias For="PubQuestion.QuestionRef"/>
<ix:Alias For="PubQuestion.Guideline"/>
<ix:Alias For="PubQuestion.Id"/>
<ix:Alias For="ChecklistAnswerId"/>
<ix:Alias For="Choice.BColor.Value"/>
<ix:Alias For="Choice.TColor.Value"/>
<ix:Alias For="Choice.Css"/>
<ix:Alias For="Id"/>
    </aliases>
    <Columns>
      <ix:TemplateColumn For="PubQuestion.Content" Width="1">
        <Template>
          <span style="font-weight:bold;">
<%# Container.ViewData.Eval("PubQuestion.QuestionRef") %> <%# Container.ViewData.Eval("PubQuestion.Content") %>
          </span>
          <div class="fieldHint">
<%# Container.ViewData.Eval("PubQuestion.Guideline") %>
          </div>
        </Template>
      </ix:TemplateColumn>
<ix:Column For="PubQuestion.Question.References" FetchAs="Collection" DisplayAs="List" Visible="false"/>
      <ix:MergeColumn Caption="Answer" For="PubQuestion.AnswerType.Value" RefreshScope="Row">
        <MappedColumns>
          <ix:TemplateColumn MapValue="Choice_Disable" For="Choice" EditMode="inline">
            <Template>
              <div style="color:<%# Container.ViewData.Eval("Choice.TColor.Value") %>;background-color:<%# Container.ViewData.Eval("Choice.BColor.Value") %>;<%# Container.ViewData.Eval("Choice.Css") %>">
<%# Container.ViewData.Eval("Choice") %>
              </div>
            </Template>
          </ix:TemplateColumn>
<ix:Column MapValue="Choice" For="Choice" EditMode="inline"/>
<ix:Column MapValue="Date" For="Date" EditMode="inline" Format="d"/>
<ix:Column MapValue="Choices" For="Choices" FetchAs="collection" DisplayAs="List" EditMode="popup"/>
<ix:Column MapValue="Float" For="Float" EditMode="inline" HorizontalAlign="right"/>
<ix:Column MapValue="Text" For="Text" EditMode="popup"/>
<ix:Column MapValue="Checkbox" For="Checkbox" EditMode="inline"/>
        </MappedColumns>
      </ix:MergeColumn>
<ix:Column For="Comments" EditMode="popup" RefreshScope="Row"/>
<ix:Column For="NumbofDocuments" LinkTo="CLF_QuestionAnswer_Docs/View?entityid={#id}" LinkTarget="popup" RefreshScope="Row" Caption="#Docs" HorizontalAlign="center"/>
      <ix:TemplateColumn For="NbFindings" Caption="Add" HorizontalAlign="center" width="20px" AllowFiltering="false" AllowSorting="false">
        <Template>
          <a title="Create &amp; Attach a new Finding" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_Finding_Detail/Create?ChecklistAnswer=<%# Container.ViewData.Eval("ChecklistAnswerId") %>&amp;RelatedId=<%# Container.ViewData.Eval("Id") %>&amp;RelatedPath=CLF_QuestionAnswerObject.Findings">
            <img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/>
            </a>
          </Template>
        </ix:TemplateColumn>
<ix:Column Caption="Attached Findings" DisplayAs="List" EditMode="popup" FetchAs="Collection" For="Findings" RefreshScope="row"/>
      </Columns>
    </ix:GridSection>
    <ix:GridSection For="SubChecklists.Findings" ID="FindingsGridSection" DisplayMode="View" EditLinkTarget="popup" RefreshScope="Row" Title="Finding Summary" HideGroupAddButton="true" meta:resourcekey="GridSection1" ResourceKey="GridSection1" ModernIcon="Raven/Icons/BrightBlue_48/magnifying-glass32.png">
      <Sorting>
<ix:Sort runat="server" By="RecordNo" Direction="Ascending"/>
      </Sorting>
      <aliases>
<ix:Alias runat="server" For="Id"/>
      </aliases>
      <Columns>
<ix:Column For="RecordNo" LinkTo="default"/>
<ix:Column For="Description" Truncate="True"/>
<ix:Column For="ResponseDue" Format="d"/>
      </Columns>
    </ix:GridSection>
<ix:MailMergeTemplates DisplayMode="View" ID="MailMergeFragmentGridSection"/>
<ix:DocumentSection DisplayMode="View, Edit"/>
  </ix:DetailPage>
  <style>
.data_row td.wrap {
    white-space: normal !important;
}
  </style>
```

### E1882-ConfigurableViewActions

Unresolved.CLF_PubQuest_Inventory (Mobile) — ConfigurableViewActions; stable record ID 8a586610-97ac-4401-bbf7-275b33abf3dd. Source $.GraphData.Items[633].FieldData.ConfigurableViewActions.

```json
[]
```

### E1882-ViewDefinition

Unresolved.CLF_PubQuest_Inventory (Mobile) — ViewDefinition; stable record ID 8a586610-97ac-4401-bbf7-275b33abf3dd. Source $.GraphData.Items[633].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "QuestionRef",
    "Content",
    "QUestion.ChecklistType"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1882-Content

Unresolved.CLF_PubQuest_Inventory (Mobile) — Content; stable record ID 8a586610-97ac-4401-bbf7-275b33abf3dd. Source $.GraphData.Items[633].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_PubQuest_Inventory"><ix:InventoryView ID="CLF_PubQuest_InventoryView"><Sorting><ix:Sort By="Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="QUestion.ChecklistType"/><ix:Group By="Section"/></grouping><Columns><ix:Column For="QuestionRef" LinkTo="default" /><ix:Column For="Content" /><ix:Column FilterAs="dropdown" For="QUestion.ChecklistType" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1922-ConfigurableViewActions

Unresolved.ConfgAppSetting_PersRespOptionObjectInventoryView (Mobile) — ConfigurableViewActions; stable record ID 16d22860-1bb7-4ff2-855c-ae42ae335615. Source $.GraphData.Items[649].FieldData.ConfigurableViewActions.

```json
[]
```

### E1922-ViewDefinition

Unresolved.ConfgAppSetting_PersRespOptionObjectInventoryView (Mobile) — ViewDefinition; stable record ID 16d22860-1bb7-4ff2-855c-ae42ae335615. Source $.GraphData.Items[649].FieldData.ViewDefinition.

```json
{
  "Properties": [],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1922-Content

Unresolved.ConfgAppSetting_PersRespOptionObjectInventoryView (Mobile) — Content; stable record ID 16d22860-1bb7-4ff2-855c-ae42ae335615. Source $.GraphData.Items[649].FieldData.Content.

```xml
<ix:InventoryPage>
<ix:Inventory ID='ConfgAppSetting_PersRespOptionObjectInventory'>
<ix:InventoryView ID='ConfgAppSetting_PersRespOptionObjectInventoryView'>
<Columns>
</Columns>
</ix:InventoryView>
</ix:Inventory>
</ix:InventoryPage>
```

### E1944-ConfigurableViewActions

Unresolved.CLF_Multichecklist_Inventory (Mobile) — ConfigurableViewActions; stable record ID 1e3305d2-2397-4a17-b659-547745787d8f. Source $.GraphData.Items[657].FieldData.ConfigurableViewActions.

```json
[]
```

### E1944-ViewDefinition

Unresolved.CLF_Multichecklist_Inventory (Mobile) — ViewDefinition; stable record ID 1e3305d2-2397-4a17-b659-547745787d8f. Source $.GraphData.Items[657].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Name",
    "ApplicQuestions",
    "Comments",
    "Date",
    "FilledQuestions"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1944-Content

Unresolved.CLF_Multichecklist_Inventory (Mobile) — Content; stable record ID 1e3305d2-2397-4a17-b659-547745787d8f. Source $.GraphData.Items[657].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Multichecklist_Inventory"><ix:InventoryView ID="CLF_Multichecklist_InventoryView"><Columns><ix:Column For="Name" LinkTo="default" /><ix:Column For="ApplicQuestions" /><ix:Column For="Comments" /><ix:Column For="Date" /><ix:Column For="FilledQuestions" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1952-ConfigurableViewActions

Unresolved.CLF_ChoiceList_Detail (Mobile) — ConfigurableViewActions; stable record ID e9c2685c-1307-44da-8d96-9adfcb0e275b. Source $.GraphData.Items[659].FieldData.ConfigurableViewActions.

```json
[]
```

### E1952-ViewDefinition

Unresolved.CLF_ChoiceList_Detail (Mobile) — ViewDefinition; stable record ID e9c2685c-1307-44da-8d96-9adfcb0e275b. Source $.GraphData.Items[659].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Reference",
    "Name",
    "Description"
  ],
  "GridProperties": {
    "Choices": [
      "Reference",
      "Value",
      "BColor",
      "TColor",
      "Css",
      "Name"
    ]
  },
  "ChecklistGrids": {}
}
```

### E1952-Content

Unresolved.CLF_ChoiceList_Detail (Mobile) — Content; stable record ID e9c2685c-1307-44da-8d96-9adfcb0e275b. Source $.GraphData.Items[659].FieldData.Content.

```xml
<ix:DetailPage>
  <ix:DetailSection Title="Choice List" Icon="Icons/new/48x48/index.gif">
    <ix:FieldArea Span="true">
<ix:Field For="Reference"/>
<ix:Field For="Name"/>
<ix:Field For="Description"/>
    </ix:FieldArea>
  </ix:DetailSection>
  <ix:GridSection DisplayMode="View,Edit" EditLinkTarget="popup" For="Choices" ID="ChoicesGridSection">
    <Menu>
<ix:GridCreateActionLink Override="true" OpenIn="popup"/>
    </Menu>
    <Sorting>
<ix:Sort runat="server" By="Name" Direction="Ascending"/>
    </Sorting>
    <aliases>
<ix:Alias For="TColor.Value"/>
<ix:Alias For="BColor.Value"/>
    </aliases>
    <Columns><ix:Column EditMode="Inline" For="Reference" LinkTo="default" RefreshScope="Row" />
      <ix:TemplateColumn For="Name" EditMode="inline" RefreshScope="Row">
        <Template>
          <div style="color:<%# Container.ViewData.Eval("TColor.Value") %>;background-color:<%# Container.ViewData.Eval("BColor.Value") %>;<%# Container.ViewData.Eval("Css") %>">
<%# Container.ViewData.Eval("Name") %>
          </div>
        </Template>
      </ix:TemplateColumn>
<ix:Column EditMode="Inline" For="Value" RefreshScope="Row" /><ix:Column EditMode="Inline" FilterAs="dropdown" For="BColor" RefreshScope="Row" /><ix:Column EditMode="Inline" FilterAs="dropdown" For="TColor" RefreshScope="Row" /><ix:Column EditMode="Inline" For="Css" RefreshScope="Row" /></Columns></ix:GridSection></ix:DetailPage>
```

### E1956-ConfigurableViewActions

Unresolved.CLF_Quest_Select (Mobile) — ConfigurableViewActions; stable record ID 24e8f3c3-34b5-4fc1-bbd9-031dc28099ee. Source $.GraphData.Items[661].FieldData.ConfigurableViewActions.

```json
[]
```

### E1956-ViewDefinition

Unresolved.CLF_Quest_Select (Mobile) — ViewDefinition; stable record ID 24e8f3c3-34b5-4fc1-bbd9-031dc28099ee. Source $.GraphData.Items[661].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "QuestionRef",
    "Content",
    "ChecklistType",
    "ChoiceList"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1956-Content

Unresolved.CLF_Quest_Select (Mobile) — Content; stable record ID 24e8f3c3-34b5-4fc1-bbd9-031dc28099ee. Source $.GraphData.Items[661].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Quest_Select"><ix:InventoryView ID="CLF_Quest_SelectView"><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></Menu><Columns><ix:Column For="QuestionRef" /><ix:Column For="Content" /><ix:Column FilterAs="dropdown" For="ChecklistType" /><ix:Column FilterAs="dropdown" For="ChoiceList" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E1987-ConfigurableViewActions

Unresolved.CLF_PubChecklist_Detail (Mobile) — ConfigurableViewActions; stable record ID fe8df18d-8a15-434a-9232-7428917dda05. Source $.GraphData.Items[673].FieldData.ConfigurableViewActions.

```json
[]
```

### E1987-ViewDefinition

Unresolved.CLF_PubChecklist_Detail (Mobile) — ViewDefinition; stable record ID fe8df18d-8a15-434a-9232-7428917dda05. Source $.GraphData.Items[673].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Checklist",
    "ChecklistRef",
    "Title",
    "Description",
    "ChecklistType"
  ],
  "GridProperties": {
    "PubQuestions": [
      "QuestionRef",
      "Content",
      "AnswerType",
      "ChoiceList",
      "DateCreated",
      "Order",
      "Section"
    ]
  },
  "ChecklistGrids": {}
}
```

### E1987-Content

Unresolved.CLF_PubChecklist_Detail (Mobile) — Content; stable record ID fe8df18d-8a15-434a-9232-7428917dda05. Source $.GraphData.Items[673].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Published Checklist" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Checklist"/><ix:Field For="ChecklistRef"/><ix:Field For="Title"/><ix:Field For="Description"/><ix:Field For="ChecklistType"/></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View" For="PubQuestions" HideGroupAddButton="true" ID="PubQuestionsGridSection" Readonly="true" RowSelectionMode="None"><grouping><ix:Group By="Section"/></grouping><Sorting><ix:Sort runat="server" By="Order" Direction="Ascending"/></Sorting><Columns><ix:Column For="QuestionRef" LinkTo="default"/><ix:Column DisplayAs="Truncate" For="Content"/><ix:Column FilterAs="Dropdown" For="AnswerType"/><ix:Column FilterAs="Dropdown" For="ChoiceList"/><ix:Column For="DateCreated" Format="d"/></Columns></ix:GridSection></ix:DetailPage>
```

### E1992-ConfigurableViewActions

Unresolved.CLF_Finding_Detail_Readonly (Mobile) — ConfigurableViewActions; stable record ID c94b3fa4-64ae-4170-b3e2-ac9442cc1fec. Source $.GraphData.Items[675].FieldData.ConfigurableViewActions.

```json
[]
```

### E1992-ViewDefinition

Unresolved.CLF_Finding_Detail_Readonly (Mobile) — ViewDefinition; stable record ID c94b3fa4-64ae-4170-b3e2-ac9442cc1fec. Source $.GraphData.Items[675].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "ChecklistAnswer",
    "FindingStatus.Code",
    "Severity",
    "Description",
    "PersResponsible",
    "DueIn",
    "ResponseDue",
    "ImmediateAction",
    "ManualClose",
    "ManCloseCom",
    "ObjectRecordId"
  ],
  "GridProperties": {
    "QuestionAnswers": [
      "Choice",
      "Date",
      "Choices",
      "Float",
      "Text",
      "Checkbox",
      "Comments",
      "NumbofDocuments",
      "PubQuestion.AnswerType.Value",
      "PubQuestion.Order",
      "PubQuestion.Section"
    ]
  },
  "ChecklistGrids": {}
}
```

### E1992-Content

Unresolved.CLF_Finding_Detail_Readonly (Mobile) — Content; stable record ID c94b3fa4-64ae-4170-b3e2-ac9442cc1fec. Source $.GraphData.Items[675].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar"><ix:CloneActionLink Override="true" Visible="False"/><ix:AddEntryActionLink Override="true" Visible="False"/><ix:SecurityActionLink Override="true" Visible="False"/><ix:DeleteActionLink Override="true" Visible="False"/><ix:SaveAddNewActionLink Override="true" Visible="False"/><ix:EditActionLink Override="true" Visible="False"/></ix:DetailPageMenuBar><ix:DetailSection Title="Finding Details" Icon="Icons/new/48x48/flag_red.gif"><ix:FieldArea Span="true"><ix:Field For="ChecklistAnswer" Readonly="false" SpellCheck="false"/><ix:Field For="FindingStatus.Code" Caption="Finding Status"/><ix:Field EditAs="radiogroup" For="Severity" Readonly="True" SpellCheck="false"/><ix:Field For="Description" Readonly="True" SpellCheck="false"/><ix:Field For="PersResponsible" Readonly="True"/><ix:Field DisplayMode="Create" For="DueIn" Readonly="True"/><ix:Field DisplayMode="View,Edit" For="ResponseDue" Readonly="True"/><ix:Field Caption="Suggested Action Plan" For="ImmediateAction" Readonly="True" SpellCheck="false"/></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayEditColumn="false" DisplayMode="View,Edit" For="QuestionAnswers" HideGroupAddButton="true" ID="QuestionAnswersGridSection" IsCollapsed="True" RowSelectionMode="None" UseCookies="false"><Menu><ix:GridAttachActionLink Override="true" Visible="False"/><ix:GridDetachActionLink Override="true" Visible="False"/></Menu><Sorting><ix:Sort By="PubQuestion.Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="PubQuestion.Section"/></grouping><aliases><ix:Alias For="ChecklistAnswerId"/><ix:Alias For="PubQuestion.Guideline"/><ix:Alias For="PubQuestion.Id"/><ix:Alias For="Choice.BColor.Value"/><ix:Alias For="Choice.TColor.Value"/><ix:Alias For="Choice.Css"/></aliases><Columns><ix:TemplateColumn For="PubQuestion.Content" Width="1"><Template><span style="font-weight:bold;">
<%# Container.ViewData.Eval("PubQuestion.QuestionRef") %> <%# Container.ViewData.Eval("PubQuestion.Content") %>
</span><div class="fieldHint">
<%# Container.ViewData.Eval("PubQuestion.Guideline") %>
</div></Template></ix:TemplateColumn><ix:MergeColumn Caption="Answer" For="PubQuestion.AnswerType.Value"><MappedColumns><ix:TemplateColumn MapValue="Choice_Disable" For="Choice"><Template><div style="color:<%# Container.ViewData.Eval("Choice.TColor.Value") %>;background-color:<%# Container.ViewData.Eval("Choice.BColor.Value") %>;<%# Container.ViewData.Eval("Choice.Css") %>">
<%# Container.ViewData.Eval("Choice") %>
</div></Template></ix:TemplateColumn><ix:Column For="Choice" MapValue="Choice"/><ix:Column For="Date" Format="d" MapValue="Date"/><ix:Column DisplayAs="List" FetchAs="collection" For="Choices" MapValue="Choices"/><ix:Column For="Float" HorizontalAlign="right" MapValue="Float"/><ix:Column For="Text" MapValue="Text"/><ix:Column For="Checkbox" MapValue="Checkbox"/></MappedColumns></ix:MergeColumn><ix:Column For="Comments"/><ix:Column Caption="#Docs" For="NumbofDocuments" HorizontalAlign="center" LinkTarget="popup" LinkTo="CLF_QuestionAnswer_Docs_Readonly/View?entityid={#id}"/></Columns></ix:GridSection><ix:TabsSection Title="Evidence" ShowHeader="true" Icon="Icons/new/48x48/folder_up.gif"><ix:Tab Caption="Upload"><ix:AttachmentSection ID="AttachmentFragmentGridSection" Title="Upload images" CssClass="HideBorders" isCollapsed="false" UseCookies="false" Readonly="true"/></ix:Tab><ix:Tab Caption="Image Preview" DisplayMode="View,Edit"><ix:GridPanel Entity="DocDocumentAttachmentsEntity" isCollapsed="false" UseCookies="false" ShowColumnCaptions="false" AllowPaging="false" AllowFiltering="false" AllowSorting="false" RowSelectionMode="None" Readonly="True" DisplayMode="View,Edit" DisplayEditColumn="false" CssClass="HideBorders"><Filters><ix:Filter><ix:CommonPredicate For="ObjectRecordId" Type="Equal"><ix:Value Parse="True">
393ae517-3ae2-43db-b379-cce30d4eed0e
</ix:Value></ix:CommonPredicate></ix:Filter><ix:Filter PredicateOperator="or"><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>
.png
</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>
.jpg
</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>
.gif
</ix:Value></ix:LikePredicate></ix:Filter></Filters><aliases><ix:Alias For="Id"/><ix:Alias For="AttachmentName"/></aliases><columns><ix:TemplateColumn><template><div class="imagepreview" title="895cb0b6-1b10-4e16-8fb6-758d3c72f4b3" style="background-image:url(&apos;ae537e49-2ee4-4958-ae39-f7f8e666b043/intelexforms/attachmentsection/downloadfile?recordid=fe0f7cf7-43d0-4dca-87ed-14b8a1086c36&apos;)"/></template></ix:TemplateColumn></columns></ix:GridPanel></ix:Tab></ix:TabsSection><ix:DetailSection Title="Close Finding" Icon="Icons/new/48x48/error.gif" Id="ManualCloseSection"><ix:FieldArea Span="true"><ix:Field For="ManualClose"/><ix:Field For="ManCloseCom" SpellCheck="false"/></ix:FieldArea></ix:DetailSection><ix:WorkflowComments DisplayMode="View" IsCollapsed="True" UseCookies="false"/><ix:WorkflowTracking DisplayMode="View" IsCollapsed="True" UseCookies="false"/><ix:ESignatureHistorySection DisplayMode="View" IsCollapsed="True" UseCookies="false"/></ix:DetailPage><style>
.data_row td.wrap {
    white-space: normal !important;
}

.one-column .group-item {
clear: none !important;
}
.group-item {
float: left;
width: auto!important;
padding-right:10px;
}

.group {
border:none!important;
}

.HideBorders > .header {
    display: none;
}

.HideBorders > .footer {
    display: none;
}

.HideBorders > .content {
    border: medium none;
    padding: 0;
}

.imagepreview {
background-repeat:no-repeat;
max-width:500px;
min-height:300px;
background-size:contain;
}
</style>
```

### E1998-ConfigurableViewActions

Unresolved.QP_AbCorrectivActi_Open_Inventory (Mobile) — ConfigurableViewActions; stable record ID 8c7b3a4e-b2ea-4207-add2-99dea822e2ce. Source $.GraphData.Items[678].FieldData.ConfigurableViewActions.

```json
[]
```

### E1998-ViewDefinition

Unresolved.QP_AbCorrectivActi_Open_Inventory (Mobile) — ViewDefinition; stable record ID 8c7b3a4e-b2ea-4207-add2-99dea822e2ce. Source $.GraphData.Items[678].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "CPARActionReq",
    "ActionNo",
    "ActualCost",
    "CAR",
    "CompletedBy"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E1998-Content

Unresolved.QP_AbCorrectivActi_Open_Inventory (Mobile) — Content; stable record ID 8c7b3a4e-b2ea-4207-add2-99dea822e2ce. Source $.GraphData.Items[678].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="FragApplication_AbCorrectivActiObjectInventory"><ix:InventoryView ID="FragApplication_AbCorrectivActiObjectInventoryView"><Columns><ix:Column For="CPARActionReq" LinkTo="default" /><ix:Column For="ActionNo" /><ix:Column For="ActualCost" /><ix:Column For="CAR" /><ix:Column For="CompletedBy" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E2084-ConfigurableViewActions

Unresolved.CLF_QuestionAnswer_MassUpdate (Mobile) — ConfigurableViewActions; stable record ID 74e379c8-0f8e-48cc-8cae-1b78cc1104fd. Source $.GraphData.Items[711].FieldData.ConfigurableViewActions.

```json
[]
```

### E2084-ViewDefinition

Unresolved.CLF_QuestionAnswer_MassUpdate (Mobile) — ViewDefinition; stable record ID 74e379c8-0f8e-48cc-8cae-1b78cc1104fd. Source $.GraphData.Items[711].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "MassUpChoice"
  ],
  "GridProperties": {
    "InspActionPlans": [
      "ActionNo",
      "ActionOwner",
      "ActionPlanType",
      "Activites",
      "ActivitiesStart"
    ],
    "ActionPlans": [
      "ActionNo",
      "ActionPlanType",
      "ActPlanSysType",
      "ActualCost",
      "CAR"
    ]
  },
  "ChecklistGrids": {}
}
```

### E2084-Content

Unresolved.CLF_QuestionAnswer_MassUpdate (Mobile) — Content; stable record ID 74e379c8-0f8e-48cc-8cae-1b78cc1104fd. Source $.GraphData.Items[711].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Mass Update" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea span="true"><ix:Field Caption="Answer" For="MassUpChoice" ResourceKey="Field0" SpellCheck="false" meta:resourcekey="Field0" /></ix:FieldArea></ix:DetailSection><ix:GridSection For="InspActionPlans" ID="InspActionPlansGridSection"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="ActionOwner" /><ix:Column For="ActionPlanType" /><ix:Column For="Activites" /><ix:Column For="ActivitiesStart" /></Columns></ix:GridSection><ix:GridSection For="ActionPlans" ID="ActionPlansGridSection"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="ActionPlanType" /><ix:Column For="ActPlanSysType" /><ix:Column For="ActualCost" /><ix:Column For="CAR" /></Columns></ix:GridSection></ix:DetailPage>
```

### E2090-ConfigurableViewActions

Unresolved.CLF_Finding_Select (Mobile) — ConfigurableViewActions; stable record ID d071681e-7664-4ac0-8e44-dfe40804e10f. Source $.GraphData.Items[714].FieldData.ConfigurableViewActions.

```json
[]
```

### E2090-ViewDefinition

Unresolved.CLF_Finding_Select (Mobile) — ViewDefinition; stable record ID d071681e-7664-4ac0-8e44-dfe40804e10f. Source $.GraphData.Items[714].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "RecordNo",
    "Description",
    "ResponseDue",
    "PersResponsible",
    "ActionPlans"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E2090-Content

Unresolved.CLF_Finding_Select (Mobile) — Content; stable record ID d071681e-7664-4ac0-8e44-dfe40804e10f. Source $.GraphData.Items[714].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Finding_Select"><ix:InventoryView ID="CLF_Finding_SelectView"><Menu><ix:GridCreateActionLink Override="true" Visible="false"/><ix:GridDeleteActionLink Override="true" Visible="false"/></Menu><aliases><ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/><ix:Alias For="Severity.TextColor.Value" Name="TC"/><ix:Alias For="Severity.CSS" Name="CSS"/><ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/><ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/></aliases><Columns><ix:Column For="RecordNo"/><ix:Column DisplayAs="Truncate" For="Description"/><ix:TemplateColumn For="Severity" FilterAs="Dropdown"><template><div style="background-color:<%# Container.ViewData.Eval("BC") %>;color:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>"><%# Container.ViewData.Eval("Severity") %></div></template></ix:TemplateColumn><ix:Column For="ResponseDue" Format="d"/><ix:Column For="PersResponsible"/><ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center"><Template><div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>"><%# Container.ViewData.Eval("FindingStatus") %></div></Template></ix:TemplateColumn><ix:Column DisplayAs="List" FetchAs="Collection" For="ActionPlans"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E2098-ConfigurableViewActions

Unresolved.AbstractCorrectiveAction_Inventory (Mobile) — ConfigurableViewActions; stable record ID b19f0768-acfe-42a6-a0c0-c7e98cdac66a. Source $.GraphData.Items[718].FieldData.ConfigurableViewActions.

```json
[]
```

### E2098-ViewDefinition

Unresolved.AbstractCorrectiveAction_Inventory (Mobile) — ViewDefinition; stable record ID b19f0768-acfe-42a6-a0c0-c7e98cdac66a. Source $.GraphData.Items[718].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "ActionNo",
    "ActioSourceType",
    "Location",
    "CPARActionReq",
    "Workflow.PersonResponsible",
    "DueDate",
    "CompletionDate"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E2098-Content

Unresolved.AbstractCorrectiveAction_Inventory (Mobile) — Content; stable record ID b19f0768-acfe-42a6-a0c0-c7e98cdac66a. Source $.GraphData.Items[718].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory Id="AbstractCorrectiveAction_Inventory"><ix:InventoryView ID="AbstractCorrectiveAction_InventoryView"><Entities><ix:ExcludeEntity name="ActionPlans_ActionPlanWActObject"/><ix:ExcludeEntity name="ActionPlans_ActivitySequenObject"/><ix:ExcludeEntity name="ActionPlans_GlobActionPlanObject"/><ix:IncludeEntity name="ActionPlans_LocalActionPlanObject"/></Entities><Menu><ix:GridDeleteActionLink runat="server" Override="true" Visible="false"/><ix:GridArchiveActionLink runat="server" Override="true" Visible="false"/><ix:GridCreateActionLink runat="server" Override="true" Visible="false"/></Menu><Filters><ix:Filter PredicateOperator="And"><ix:IsNullPredicate For=":ActionPlans_ActionPlanWActObject.id" runat="server"/><ix:IsNullPredicate For=":ActionPlans_ActivitySequenObject.id" runat="server"/><ix:IsNullPredicate For=":ActionPlans_GlobActionPlanObject.id" runat="server"/><ix:IsNullPredicate For=":ActionPlans_LocalActionPlanObject.id" runat="server"/></ix:Filter></Filters><Aliases><ix:Alias For="SourcRecordLink"/><ix:Alias For="ActionPlanType"/></Aliases><Sorting><ix:Sort By="ActionNo" Direction="Descending"/></Sorting><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:TemplateColumn Caption="Related Event" For="SourRecordTitle" meta:resourcekey="TemplateColumn1" ResourceKey="TemplateColumn1"><Template><a href="<%=HttpEnvironment.SystemApplicationPath %><%# Html.Encode(Container.ViewData.Eval("SourcRecordLink"))%>"><%# Html.Encode(Container.ViewData.Eval("SourRecordTitle")) %></a></Template></ix:TemplateColumn><ix:Column For="ActioSourceType" caption="Action Plan Type" /><ix:Column DisplayAs="String" For="Location" /><ix:Column Caption="Action Plan Description" For="CPARActionReq" ResourceKey="Column0" meta:resourcekey="Column0" /><ix:Column DisplayAs="String" For="Workflow.PersonResponsible" /><ix:Column For="DueDate" Format="d" caption="Target Date" /><ix:Column For="CompletionDate" Format="d" caption="Date Completed" /></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E2127-ConfigurableViewActions

Unresolved.Insp_Type_Detail (Mobile) — ConfigurableViewActions; stable record ID 563bde13-d350-4a6b-8674-4ce1ca19672a. Source $.GraphData.Items[728].FieldData.ConfigurableViewActions.

```json
[]
```

### E2127-ViewDefinition

Unresolved.Insp_Type_Detail (Mobile) — ViewDefinition; stable record ID 563bde13-d350-4a6b-8674-4ce1ca19672a. Source $.GraphData.Items[728].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Reference",
    "Name",
    "Description",
    "Active",
    "ComplValidation",
    "EnabFirstReview",
    "FirstReviewer",
    "DforFirstReview",
    "EnaSecondReview",
    "SecondReviewer",
    "forSecondReview"
  ],
  "GridProperties": {
    "Checklists": [
      "Reference",
      "Title",
      "Description",
      "NbQuestions",
      "Active"
    ],
    "Questions": [
      "QuestionRef",
      "Content",
      "AnswerType",
      "ChoiceList",
      "Order",
      "Section"
    ]
  },
  "ChecklistGrids": {}
}
```

### E2127-Content

Unresolved.Insp_Type_Detail (Mobile) — Content; stable record ID 563bde13-d350-4a6b-8674-4ce1ca19672a. Source $.GraphData.Items[728].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Type of Inspection" Icon="Icons/new/48x48/clipboard_empty.gif" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Reference" /><ix:Field For="Name" SpellCheck="false" /><ix:Field For="Description" /><ix:Field For="Active" /><ix:Field For="ComplValidation" /><ix:Field For="EnabFirstReview" /><ix:Field For="FirstReviewer" /><ix:Field For="DforFirstReview" /><ix:Field For="EnaSecondReview" /><ix:Field For="SecondReviewer" /><ix:Field For="forSecondReview" /></ix:FieldArea></ix:DetailSection><ix:GridSection DisplayMode="Edit,View" For="Checklists" ID="ChecklistsGridSection" RefreshScope="Row"><Sorting><ix:Sort By="Reference" Direction="Ascending"/></Sorting><Columns><ix:Column For="Reference" LinkTo="default"/><ix:Column EditMode="inline" For="Title" RefreshScope="Row"/><ix:Column DisplayAs="Truncate" EditMode="inline" For="Description" RefreshScope="Row"/><ix:Column For="NbQuestions" HorizontalAlign="center"/><ix:Column For="Active" EditMode="Inline"/></Columns></ix:GridSection><ix:GridSection DisplayMode="Edit,View" EditLinkTarget="popup" For="Questions" ID="QuestionsGridSection" RefreshScope="Row"><Menu><ix:GridCreateActionLink Override="true" OpenIn="popup"/></Menu><Actions><ix:MassUpdateAction ViewName="CLF_Quest_MassUpdate"/></Actions><Sorting><ix:Sort By="Order" Direction="Ascending"/></Sorting><grouping><ix:Group By="Section"/></grouping><Columns><ix:Column For="QuestionRef" LinkTo="default"/><ix:Column DisplayAs="Truncate" EditMode="inline" For="Content" RefreshScope="Row"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="AnswerType" RefreshScope="Row"/><ix:Column EditMode="inline" FilterAs="Dropdown" For="ChoiceList" RefreshScope="Row"/><ix:Column EditMode="inline" For="Order"/></Columns></ix:GridSection></ix:DetailPage><style type="text/css">.inline-edit, .popup-edit {
background-color: #e2f3fa;
border: 1px dotted #58c3f0 !important;
}</style>
```

### E2135-ConfigurableViewActions

Unresolved.CLF_QuestionAnswer_Detail (Mobile) — ConfigurableViewActions; stable record ID 692c5608-b849-4ab2-9aa0-6c94a412fa17. Source $.GraphData.Items[732].FieldData.ConfigurableViewActions.

```json
[]
```

### E2135-ViewDefinition

Unresolved.CLF_QuestionAnswer_Detail (Mobile) — ViewDefinition; stable record ID 692c5608-b849-4ab2-9aa0-6c94a412fa17. Source $.GraphData.Items[732].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "ChecklistAnswer",
    "PubQuestion.Section",
    "PubQuestion.Content",
    "PubQuestion.Guideline",
    "PubQuestion.AnswerType",
    "PubQuestion.Question.UseReferences",
    "HelperFinding",
    "PubQuestion.Question.References",
    "PubQuestion.Question",
    "Choice",
    "Text",
    "Float",
    "Date",
    "Checkbox",
    "Choices",
    "Comments",
    "ChecklistAnswer.LocationId",
    "PubQuestion.QuestionId",
    "Id",
    "ObjectRecordId"
  ],
  "GridProperties": {
    "Findings": [
      "RecordNo",
      "Description",
      "ResponseDue",
      "PersResponsible",
      "ActionPlans"
    ],
    "ActionPlans": [
      "ActionNo",
      "ActionOwner",
      "Activites",
      "ActivitiesStart",
      "ActivitProgress"
    ]
  },
  "ChecklistGrids": {}
}
```

### E2135-Content

Unresolved.CLF_QuestionAnswer_Detail (Mobile) — Content; stable record ID 692c5608-b849-4ab2-9aa0-6c94a412fa17. Source $.GraphData.Items[732].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar">
<ix:AddEntryActionLink Override="true" Visible="false"/>
<ix:CloneActionLink Override="true" Visible="false"/>
<ix:SaveActionLink Override="true" Visible="false"/>
<ix:DeleteActionLink Override="true" Visible="false"/>
<ix:SaveAddNewActionLink Override="true" Visible="false"/>
  </ix:DetailPageMenuBar>
  <ix:DetailSection Title="Question Details" ModernIcon="Raven/Icons/BrightBlue_48/questions5.png">
    <ix:FieldArea><ix:Field DisplayAs="Link" DisplayMode="View" For="ChecklistAnswer" Span="true" /><ix:Field For="PubQuestion.Section" Span="true" /><ix:Field DisplayAs="html" For="PubQuestion.Content" Span="true" /><ix:Field For="PubQuestion.Guideline" Span="true" /><ix:Field For="PubQuestion.AnswerType" IsVisible="false" /><ix:Field For="PubQuestion.Question.UseReferences" IsVisible="false" /><ix:Field For="HelperFinding" /></ix:FieldArea>
  </ix:DetailSection>
  <ix:DetailSection Title="References" Id="QuestionReferencesSection" IsCollapsed="True" ModernIcon="Raven/Icons/BrightBlue_48/links9.png">
    <ix:DetailSection Title="Text References" ModernIcon="Raven/Icons/BrightBlue_48/note32.png">
<ix:FieldValue DisplayAs="html" For="PubQuestion.Question.TextReferences" />
    </ix:DetailSection>
    <ix:DetailSection Title="Tags" ModernIcon="Raven/Icons/BrightBlue_48/seo14.png">
      <ix:FieldArea><ix:Field CaptionPosition="top" For="PubQuestion.Question.References" Span="true" SpellCheck="false" /></ix:FieldArea>
    </ix:DetailSection>
<ix:AttachmentSection For="PubQuestion.Question" ID="Question_AttachmentFragmentGridSection"/>
  </ix:DetailSection>
  <ix:GridSection AllowFiltering="false" AllowSorting="false" DisplayEditColumn="false" DisplayMode="View,edit" Entity="CLF_QuestionAnswerObject" ID="PreviousdGridSection" ModernIcon="Raven/Icons/BrightBlue_48/clock164.png" PageSize="5" PageSizeSelector="0,5,10,20,30,40,50,100,200,500" Readonly="True" ResourceKey="GridSection0" RowSelectionMode="None" Title="Previous Assessment of this Question" Visible="false" meta:resourcekey="GridSection0">
    <Sorting>
<ix:Sort runat="server" By="DateModified" Direction="Descending"/>
    </Sorting>
    <Filters>
      <ix:Filter>
        <ix:CommonPredicate For="ChecklistAnswer.LocationId" Type="Equal">
          <ix:Value Parse="True">
<%= Model.ChecklistAnswer.LocationId%>
          </ix:Value>
        </ix:CommonPredicate>
        <ix:CommonPredicate For="PubQuestion.QuestionId" Type="Equal">
          <ix:Value Parse="True">
<%= Model.PubQuestion.QuestionId%>
          </ix:Value>
        </ix:CommonPredicate>
        <ix:CommonPredicate For="Id" Type="Equal" Negate="true">
          <ix:Value Parse="True">
<%= Model.Id%>
          </ix:Value>
        </ix:CommonPredicate>
      </ix:Filter>
    </Filters>
    <aliases>
<ix:Alias For="Choice.BColor.Value"/>
<ix:Alias For="Choice.TColor.Value"/>
<ix:Alias For="Choice.Css"/>
    </aliases>
    <Columns><ix:Column Caption="Audit" DisplayAs="Label" For="ChecklistAnswer" ResourceKey="Column0" meta:resourcekey="Column0" /><ix:Column Caption="Assess by" DisplayAs="Label" For="ModifiedBy" ResourceKey="Column1" meta:resourcekey="Column1" /><ix:Column Caption="Assess on" For="DateModified" Format="d" ResourceKey="Column2" meta:resourcekey="Column2" />
      <ix:MergeColumn Caption="Answer" For="PubQuestion.AnswerType.Value" meta:resourcekey="MergeColumn0" ResourceKey="MergeColumn0">
        <MappedColumns>
          <ix:TemplateColumn MapValue="Choice" For="Choice">
            <Template>
              <div style="color:<%# Container.ViewData.Eval("Choice.TColor.Value") %>;background-color:<%# Container.ViewData.Eval("Choice.BColor.Value") %>;<%# Container.ViewData.Eval("Choice.Css") %>">
<%# Container.ViewData.Eval("Choice") %>
              </div>
            </Template>
          </ix:TemplateColumn>
<ix:Column For="Date" Format="d" MapValue="Date" /><ix:Column DisplayAs="List" FetchAs="collection" For="Choices" MapValue="Choices" /><ix:Column For="Float" HorizontalAlign="right" MapValue="Float" /><ix:Column For="Text" MapValue="Text" /><ix:Column For="Checkbox" MapValue="Checkbox" />
        </MappedColumns>
      </ix:MergeColumn>
<ix:Column For="Comments" /></Columns></ix:GridSection>
  <ix:DetailSection Title="Answer Details" ModernIcon="Raven/Icons/BrightBlue_48/chat94.png">
    <ix:FieldArea><ix:Field Caption="Answer" For="Choice" ResourceKey="Field0" Span="true" SpellCheck="false" meta:resourcekey="Field0" /><ix:Field Caption="Answer" For="Text" ResourceKey="Field1" Span="true" SpellCheck="false" meta:resourcekey="Field1" /><ix:Field Caption="Answer" For="Float" ResourceKey="Field2" Span="true" SpellCheck="false" meta:resourcekey="Field2" /><ix:Field Caption="Answer" For="Date" ResourceKey="Field3" Span="true" SpellCheck="false" meta:resourcekey="Field3" /><ix:Field Caption="Answer" For="Checkbox" ResourceKey="Field4" Span="true" SpellCheck="false" meta:resourcekey="Field4" /><ix:Field Caption="Answer" For="Choices" ResourceKey="Field5" Span="true" SpellCheck="false" meta:resourcekey="Field5" /><ix:Field For="Comments" Span="true" /></ix:FieldArea>
  </ix:DetailSection>
  <ix:TabsSection Title="Private Document Attachment" ShowHeader="true" ModernIcon="Raven/Icons/BrightBlue_48/folder232.png">
    <ix:Tab Caption="Upload" meta:resourcekey="Tab0" ResourceKey="Tab0">
<ix:AttachmentSection ID="AttachmentFragmentGridSection" Title="Upload images" CssClass="HideBorders" isCollapsed="false" UseCookies="false" meta:resourcekey="AttachmentSection0" ResourceKey="AttachmentSection0"/>
    </ix:Tab>
    <ix:Tab Caption="Image Preview" DisplayMode="View,Edit" meta:resourcekey="Tab1" ResourceKey="Tab1">
      <ix:GridPanel Entity="DocDocumentAttachmentsEntity" isCollapsed="false" UseCookies="false" ShowColumnCaptions="false" AllowPaging="false" AllowFiltering="false" AllowSorting="false" RowSelectionMode="None" Readonly="True" DisplayMode="View,Edit" DisplayEditColumn="false" CssClass="HideBorders">
        <Filters>
          <ix:Filter>
            <ix:CommonPredicate For="ObjectRecordId" Type="Equal">
              <ix:Value Parse="True">
<%= Model.Id %>
              </ix:Value>
            </ix:CommonPredicate>
          </ix:Filter>
          <ix:Filter PredicateOperator="or">
            <ix:LikePredicate For="AttachmentName" Type="EndsWith">
              <ix:Value>
.png
              </ix:Value>
            </ix:LikePredicate>
            <ix:LikePredicate For="AttachmentName" Type="EndsWith">
              <ix:Value>
.jpg
              </ix:Value>
            </ix:LikePredicate>
            <ix:LikePredicate For="AttachmentName" Type="EndsWith">
              <ix:Value>
.gif
              </ix:Value>
            </ix:LikePredicate>
          </ix:Filter>
        </Filters>
        <aliases>
<ix:Alias For="Id"/>
<ix:Alias For="AttachmentName"/>
        </aliases>
        <columns>
          <ix:TemplateColumn>
            <template>
              <div class="imagepreview" title="<%# Container.ViewData.Eval("AttachmentName") %>" style="background-image:url(&apos;<%= HttpEnvironment.SystemApplicationPath %>/intelexforms/attachmentsection/downloadfile?recordid=<%# Container.ViewData.Eval("Id") %>&apos;)"/>
              </template>
            </ix:TemplateColumn>
          </columns>
        </ix:GridPanel>
      </ix:Tab>
    </ix:TabsSection>
    <ix:GridSection DisplayMode="View,Edit" For="Findings" ID="FindingsGridSection" ModernIcon="Raven/Icons/BrightBlue_48/flag31.png">

      <aliases>
<ix:Alias For="Severity.BackgroundColor.Value" Name="BC"/>
<ix:Alias For="Severity.TextColor.Value" Name="TC"/>
<ix:Alias For="Severity.CSS" Name="CSS"/>
<ix:Alias For="FindingStatus.TC.Value" Name="StatusTC"/>
<ix:Alias For="FindingStatus.BC.Value" Name="StatusBC"/>
      </aliases>
      <Columns><ix:Column For="RecordNo" LinkTo="default" /><ix:Column DisplayAs="truncate" For="Description" />
        <ix:TemplateColumn For="Severity" FilterAs="Dropdown">
          <template>
            <div style="background-color:<%# Container.ViewData.Eval("BC") %>;text:<%# Container.ViewData.Eval("TC") %>;<%# Container.ViewData.Eval("CSS") %>">
<%# Container.ViewData.Eval("Severity") %>
            </div>
          </template>
        </ix:TemplateColumn>
<ix:Column For="ResponseDue" Format="d" /><ix:Column For="PersResponsible" />
        <ix:TemplateColumn For="FindingStatus" FilterAs="dropdown" HorizontalAlign="center">
          <Template>
            <div style="background-color:<%# Container.ViewData.Eval("StatusBC") %>;color:<%# Container.ViewData.Eval("StatusTC") %>">
<%# Container.ViewData.Eval("FindingStatus") %>
            </div>
          </Template>
        </ix:TemplateColumn>
        <ix:TemplateColumn For="NbAPs" Caption="Add Action Plans" HorizontalAlign="center" width="20px" AllowFiltering="false" AllowSorting="false" meta:resourcekey="TemplateColumn0" ResourceKey="TemplateColumn0">
          <Template>
            <a title="Create &amp; Attach a new Action Plan" class="openInPopup" href="<%= HttpEnvironment.SystemApplicationPath %>/Forms/CLF_InsActionPlan_Detail/Create?ChecklistAnswer=<%# Model.ChecklistAnswerId %>&amp;RelatedId=<%# Container.ViewData.Eval("Id") %>&amp;RelatedPath=CLF_FindingObject.ActionPlans">
              <img src="<%= ImageHelper.GetVersionedPath("Grid/add.png") %>"/>
              </a>
            </Template>
          </ix:TemplateColumn>
<ix:Column Caption="Attached Action Plans" DisplayAs="List" EditMode="popup" FetchAs="Collection" For="ActionPlans" RefreshScope="row" ResourceKey="Column3" meta:resourcekey="Column3" /></Columns></ix:GridSection><ix:GridSection For="ActionPlans" ID="ActionPlansGridSection"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="ActionOwner" /><ix:Column For="Activites" /><ix:Column For="ActivitiesStart" /><ix:Column For="ActivitProgress" /></Columns></ix:GridSection></ix:DetailPage>
    <style>
.HideBorders > .header {
    display: none;
}

.HideBorders > .footer {
    display: none;
}

.HideBorders > .content {
    border: medium none;
    padding: 0;
}

.imagepreview {
background-repeat:no-repeat;
max-width:500px;
min-height:300px;
background-size:contain;
}
    </style>
```

### E2251-ConfigurableViewActions

Unresolved.CLF_QuestionAnswer_Docs_Readonly (Mobile) — ConfigurableViewActions; stable record ID 77c7ea16-11a7-48ad-a9bd-d1cf35cff16e. Source $.GraphData.Items[753].FieldData.ConfigurableViewActions.

```json
[]
```

### E2251-ViewDefinition

Unresolved.CLF_QuestionAnswer_Docs_Readonly (Mobile) — ViewDefinition; stable record ID 77c7ea16-11a7-48ad-a9bd-d1cf35cff16e. Source $.GraphData.Items[753].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "ObjectRecordId"
  ],
  "GridProperties": {
    "ActionPlans": [
      "ActionNo",
      "ActionOwner",
      "Activites",
      "ActivitiesStart",
      "ActivitProgress"
    ]
  },
  "ChecklistGrids": {}
}
```

### E2251-Content

Unresolved.CLF_QuestionAnswer_Docs_Readonly (Mobile) — Content; stable record ID 77c7ea16-11a7-48ad-a9bd-d1cf35cff16e. Source $.GraphData.Items[753].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar" runat="server"><ix:EditActionLink Override="true" Visible="false"/><ix:SaveActionLink Override="true" Visible="false"/><ix:SaveExitActionLink Override="true" Visible="false"/><ix:AddEntryActionLink Override="true" Visible="false"/><ix:CloneActionLink Override="true" Visible="false"/><ix:DeleteActionLink Override="true" Visible="false"/><ix:SaveAddNewActionLink Override="true" Visible="false"/></ix:DetailPageMenuBar><ix:TabsSection Title="Private Document Attachment" ShowHeader="true" Icon="Icons/new/48x48/folder_up.gif" meta:resourcekey="TabsSection0" ResourceKey="TabsSection0" ModernIcon="Raven/Icons/BrightBlue_48/folder232.png"><ix:Tab Caption="Upload" meta:resourcekey="Tab0" ResourceKey="Tab0"><ix:AttachmentSection ID="AttachmentFragmentGridSection" Title="Upload images" CssClass="HideBorders" isCollapsed="false" UseCookies="false" Readonly="true" meta:resourcekey="AttachmentSection0" ResourceKey="AttachmentSection0"/></ix:Tab><ix:Tab Caption="Image Preview" DisplayMode="View,Edit" meta:resourcekey="Tab1" ResourceKey="Tab1"><ix:GridPanel Entity="DocDocumentAttachmentsEntity" isCollapsed="false" UseCookies="false" ShowColumnCaptions="false" AllowPaging="false" AllowFiltering="false" AllowSorting="false" RowSelectionMode="None" Readonly="True" DisplayMode="View,Edit" DisplayEditColumn="false" CssClass="HideBorders"><Filters><ix:Filter><ix:CommonPredicate For="ObjectRecordId" Type="Equal"><ix:Value Parse="True">
<%= Model.Id %>
</ix:Value></ix:CommonPredicate></ix:Filter><ix:Filter PredicateOperator="or"><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>
.png
</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>
.jpg
</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>
.gif
</ix:Value></ix:LikePredicate></ix:Filter></Filters><aliases><ix:Alias For="Id"/><ix:Alias For="AttachmentName"/></aliases><columns><ix:TemplateColumn><template><div class="imagepreview" title="<%# Container.ViewData.Eval("AttachmentName") %>" style="background-image:url(&apos;<%= HttpEnvironment.SystemApplicationPath %>/intelexforms/attachmentsection/downloadfile?recordid=<%# Container.ViewData.Eval("Id") %>&apos;)"/></template></ix:TemplateColumn></columns></ix:GridPanel></ix:Tab></ix:TabsSection><ix:GridSection For="ActionPlans" ID="ActionPlansGridSection"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="ActionOwner" /><ix:Column For="Activites" /><ix:Column For="ActivitiesStart" /><ix:Column For="ActivitProgress" /></Columns></ix:GridSection></ix:DetailPage><style>
.HideBorders > .header {
    display: none;
}

.HideBorders > .footer {
    display: none;
}

.HideBorders > .content {
    border: medium none;
    padding: 0;
}

.imagepreview {
background-repeat:no-repeat;
max-width:500px;
min-height:300px;
background-size:contain;
}
</style>
```

### E2256-ConfigurableViewActions

Unresolved.CLF_Checklist_Toolbox_Detail (Mobile) — ConfigurableViewActions; stable record ID 82a4cb09-2491-4844-bb80-7e990c1956db. Source $.GraphData.Items[755].FieldData.ConfigurableViewActions.

```json
[]
```

### E2256-ViewDefinition

Unresolved.CLF_Checklist_Toolbox_Detail (Mobile) — ViewDefinition; stable record ID 82a4cb09-2491-4844-bb80-7e990c1956db. Source $.GraphData.Items[755].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "ChecklistType",
    "Description",
    "NbQuestions",
    "Reference",
    "Title",
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries"
  ],
  "GridProperties": {
    "PubChecklists": [
      "Title",
      "Checklist",
      "ChecklistRef",
      "ChecklistType",
      "Description"
    ],
    "Questions": [
      "QuestionRef",
      "AnswerType",
      "ChecklistType",
      "ChoiceList",
      "Content"
    ]
  },
  "ChecklistGrids": {}
}
```

### E2256-Content

Unresolved.CLF_Checklist_Toolbox_Detail (Mobile) — Content; stable record ID 82a4cb09-2491-4844-bb80-7e990c1956db. Source $.GraphData.Items[755].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Fields"><ix:FieldArea><ix:Field For="ChecklistType"/><ix:Field For="Description"/><ix:Field For="NbQuestions"/><ix:Field For="Reference"/><ix:Field For="Title"/></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:GridSection ID="PubChecklistsGridSection" For="PubChecklists"><Columns><ix:Column For="Title" LinkTo="default"/><ix:Column For="Checklist"/><ix:Column For="ChecklistRef"/><ix:Column For="ChecklistType"/><ix:Column For="Description"/></Columns></ix:GridSection><ix:GridSection ID="QuestionsGridSection" For="Questions"><Columns><ix:Column For="QuestionRef" LinkTo="default"/><ix:Column For="AnswerType"/><ix:Column For="ChecklistType"/><ix:Column For="ChoiceList"/><ix:Column For="Content"/></Columns></ix:GridSection><ix:WorkflowComments/><ix:WorkflowTracking/><ix:ESignatureHistorySection/><ix:AttachmentSection ID="AttachmentFragmentGridSection"/></ix:DetailPage>
```

### E2267-ConfigurableViewActions

Unresolved.CLF_Preferences_Inventory (Mobile) — ConfigurableViewActions; stable record ID 6d66e032-3b12-4c84-9b25-28d871f87ee0. Source $.GraphData.Items[760].FieldData.ConfigurableViewActions.

```json
[]
```

### E2267-ViewDefinition

Unresolved.CLF_Preferences_Inventory (Mobile) — ViewDefinition; stable record ID 6d66e032-3b12-4c84-9b25-28d871f87ee0. Source $.GraphData.Items[760].FieldData.ViewDefinition.

```json
{
  "Properties": [],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E2267-Content

Unresolved.CLF_Preferences_Inventory (Mobile) — Content; stable record ID 6d66e032-3b12-4c84-9b25-28d871f87ee0. Source $.GraphData.Items[760].FieldData.Content.

```xml
<ix:InventoryPage>
<ix:Inventory ID='CLF_PreferencesObjectInventory'>
<ix:InventoryView ID='CLF_PreferencesObjectInventoryView'>
<Columns></Columns>
</ix:InventoryView>
</ix:Inventory>
</ix:InventoryPage>
```

### E2298-ConfigurableViewActions

Unresolved.CLF_Quest_ToolBox_Detail (Mobile) — ConfigurableViewActions; stable record ID a6250fdd-86c2-4e81-b247-0ac984bc59cb. Source $.GraphData.Items[771].FieldData.ConfigurableViewActions.

```json
[]
```

### E2298-ViewDefinition

Unresolved.CLF_Quest_ToolBox_Detail (Mobile) — ViewDefinition; stable record ID a6250fdd-86c2-4e81-b247-0ac984bc59cb. Source $.GraphData.Items[771].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "AnswerOptions",
    "AttachmentObject",
    "DependentOnQuestion",
    "DependentOnQuestionValue",
    "EnableComment",
    "EnableDependency",
    "EnableObjectAttachment",
    "Guideline",
    "Mandatory",
    "MandatoryAttachmentAnswers",
    "Name",
    "Order",
    "PublishedQuestion",
    "QuestionNumber",
    "QuestionSet",
    "QuestionStyle",
    "QuestionText",
    "RecordNo",
    "Scores",
    "Section",
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries"
  ],
  "GridProperties": {
    "CustomFields": [
      "Caption",
      "Calculation",
      "Category",
      "DefaultUnitOfMeasure",
      "DefaultUnitOfMeasureValueProperty"
    ],
    "DependentQuestions": [
      "QuestionText",
      "AnswerOptions",
      "AttachmentObject",
      "DependentOnQuestion",
      "DependentOnQuestionValue"
    ],
    "PublishedQuestions": [
      "Caption",
      "AttachmentObject",
      "CommentProperty",
      "DependentOnQuestion",
      "DependentOnQuestionValue"
    ]
  },
  "ChecklistGrids": {}
}
```

### E2298-Content

Unresolved.CLF_Quest_ToolBox_Detail (Mobile) — Content; stable record ID a6250fdd-86c2-4e81-b247-0ac984bc59cb. Source $.GraphData.Items[771].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Fields"><ix:FieldArea><ix:Field For="AnswerOptions" /><ix:Field For="AttachmentObject" /><ix:Field For="DependentOnQuestion" /><ix:Field For="DependentOnQuestionValue" /><ix:Field For="EnableComment" /><ix:Field For="EnableDependency" /><ix:Field For="EnableObjectAttachment" /><ix:Field For="Guideline" /><ix:Field For="Mandatory" /><ix:Field For="MandatoryAttachmentAnswers" /><ix:Field For="Name" /><ix:Field For="Order" /><ix:Field For="PublishedQuestion" /><ix:Field For="QuestionNumber" /><ix:Field For="QuestionSet" /><ix:Field For="QuestionStyle" /><ix:Field For="QuestionText" /><ix:Field For="RecordNo" /><ix:Field For="Scores" /><ix:Field For="Section" /></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:GridSection ID="CustomFieldsGridSection" For="CustomFields"><Columns><ix:Column For="Caption" LinkTo="default"/><ix:Column For="Calculation"/><ix:Column For="Category"/><ix:Column For="DefaultUnitOfMeasure"/><ix:Column For="DefaultUnitOfMeasureValueProperty"/></Columns></ix:GridSection><ix:GridSection ID="DependentQuestionsGridSection" For="DependentQuestions"><Columns><ix:Column For="QuestionText" LinkTo="default"/><ix:Column For="AnswerOptions"/><ix:Column For="AttachmentObject"/><ix:Column For="DependentOnQuestion"/><ix:Column For="DependentOnQuestionValue"/></Columns></ix:GridSection><ix:GridSection ID="PublishedQuestionsGridSection" For="PublishedQuestions"><Columns><ix:Column For="Caption" LinkTo="default"/><ix:Column For="AttachmentObject"/><ix:Column For="CommentProperty"/><ix:Column For="DependentOnQuestion"/><ix:Column For="DependentOnQuestionValue"/></Columns></ix:GridSection><ix:WorkflowComments/><ix:WorkflowTracking/><ix:ESignatureHistorySection/></ix:DetailPage>
```

### E2328-ConfigurableViewActions

Unresolved.ConfgAppSetting_SpecAppSettingsObjectDetailView (Mobile) — ConfigurableViewActions; stable record ID d1a2a8b8-6c8f-411c-bfed-dee1a365299b. Source $.GraphData.Items[780].FieldData.ConfigurableViewActions.

```json
[]
```

### E2328-ViewDefinition

Unresolved.ConfgAppSetting_SpecAppSettingsObjectDetailView (Mobile) — ViewDefinition; stable record ID d1a2a8b8-6c8f-411c-bfed-dee1a365299b. Source $.GraphData.Items[780].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E2328-Content

Unresolved.ConfgAppSetting_SpecAppSettingsObjectDetailView (Mobile) — Content; stable record ID d1a2a8b8-6c8f-411c-bfed-dee1a365299b. Source $.GraphData.Items[780].FieldData.Content.

```xml
<ix:DetailPage>
<ix:DetailSection Title='Fields'>
<ix:FieldArea></ix:FieldArea>
<ix:WorkflowFields/>
</ix:DetailSection>
<ix:WorkflowComments/>
<ix:WorkflowTracking/>
<ix:ESignatureHistorySection/>
</ix:DetailPage>
```

### E2356-ConfigurableViewActions

Unresolved.ConfgAppSetting_TPanelGeneratorObjectDetailView (Mobile) — ConfigurableViewActions; stable record ID 404c4ab7-6594-40a3-aae0-314b372002a6. Source $.GraphData.Items[792].FieldData.ConfigurableViewActions.

```json
[]
```

### E2356-ViewDefinition

Unresolved.ConfgAppSetting_TPanelGeneratorObjectDetailView (Mobile) — ViewDefinition; stable record ID 404c4ab7-6594-40a3-aae0-314b372002a6. Source $.GraphData.Items[792].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries"
  ],
  "GridProperties": {
    "InstructionPane": [
      "Application",
      "Form",
      "InstrTextHeader",
      "InstructiText",
      "Stage"
    ]
  },
  "ChecklistGrids": {}
}
```

### E2356-Content

Unresolved.ConfgAppSetting_TPanelGeneratorObjectDetailView (Mobile) — Content; stable record ID 404c4ab7-6594-40a3-aae0-314b372002a6. Source $.GraphData.Items[792].FieldData.Content.

```xml
<ix:DetailPage>
<ix:DetailSection Title='Fields'>
<ix:FieldArea>
</ix:FieldArea>
<ix:WorkflowFields/>
</ix:DetailSection>
<ix:WorkflowComments/>
<ix:WorkflowTracking/>
<ix:ESignatureHistorySection/>
<ix:GridSection For="InstructionPane" ID="InstructionPaneGridSection"><Columns><ix:Column For="Application" LinkTo="default" /><ix:Column For="Form" /><ix:Column For="InstrTextHeader" /><ix:Column For="InstructiText" /><ix:Column For="Stage" /></Columns></ix:GridSection></ix:DetailPage>
```

### E2432-ConfigurableViewActions

Unresolved.Fragment_Insp_EquipInspection_QuestionAnswer (Mobile) — ConfigurableViewActions; stable record ID 6dc34485-1f9c-483c-a5fc-d913fb9bc1fc. Source $.GraphData.Items[816].FieldData.ConfigurableViewActions.

```json
[]
```

### E2432-ViewDefinition

Unresolved.Fragment_Insp_EquipInspection_QuestionAnswer (Mobile) — ViewDefinition; stable record ID 6dc34485-1f9c-483c-a5fc-d913fb9bc1fc. Source $.GraphData.Items[816].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Location",
    "ApplicQuestions",
    "Comments",
    "CommetoReviewer",
    "CompletedBy",
    "CompletedOn",
    "CreateMode",
    "DaofFirstReview",
    "DefPersRespFind",
    "Depth",
    "DofSecondReview",
    "Equipment",
    "EquipmentTxt",
    "FApprovalFields",
    "FilledQuestions",
    "FirstReviewBy",
    "HelpeIsComplete",
    "HelperLocatio2",
    "HelperLocation",
    "InsDisplayField",
    "InspecChecklist",
    "InspectionDate",
    "InstrInProgress",
    "InstructiCreate",
    "InstructioDraft",
    "InstructiReview",
    "LNoticeonCreate",
    "MasterChecklist",
    "MaxPoints",
    "Name",
    "NbActions",
    "NbFindings",
    "NbSubChecklists",
    "NotifiDate",
    "oSectionAnswers",
    "Path",
    "PersResponsibl",
    "PersResponsible",
    "PointsAwarded",
    "PrevChecklistId",
    "Progress",
    "PubChecklist",
    "RecordNo",
    "ReleActionPlans",
    "RevieweComment1",
    "RevieweComments",
    "RevieweDecisio1",
    "RevieweDecision",
    "Reviewer",
    "SApprovalFields",
    "Scope",
    "Score",
    "SecondReviewBy",
    "SysteTypeHelper",
    "TypeOfInspec",
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries"
  ],
  "GridProperties": {
    "ActionPlans": [
      "PlaDisplayField",
      "ActionNo",
      "ActionOwner",
      "ActionPlanType",
      "ActivitiesStart"
    ],
    "DistributioList": [
      "FullName",
      "City",
      "Company",
      "ContractExpiry",
      "ContractorName"
    ],
    "Findings": [
      "Name",
      "ActionPlanCheck",
      "AdditionalCost",
      "ChecklistAnswer",
      "CorrectiActions"
    ],
    "QuestionAnswers": [
      "PubQuestion",
      "AbsoluteOrder",
      "ActionPlanAdded",
      "AnswerText",
      "Checkbox"
    ],
    "SectAnswers": [
      "Section",
      "CheckAnswerGUID",
      "ChecklistAnswer",
      "Sort"
    ],
    "SubChecklists": [
      "Name",
      "ApplicQuestions",
      "Comments",
      "DefPersRespFind",
      "Depth"
    ]
  },
  "ChecklistGrids": {}
}
```

### E2432-Content

Unresolved.Fragment_Insp_EquipInspection_QuestionAnswer (Mobile) — Content; stable record ID 6dc34485-1f9c-483c-a5fc-d913fb9bc1fc. Source $.GraphData.Items[816].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Fields"><ix:FieldArea><ix:Field For="Location"/><ix:Field For="ApplicQuestions"/><ix:Field For="Comments"/><ix:Field For="CommetoReviewer"/><ix:Field For="CompletedBy"/><ix:Field For="CompletedOn"/><ix:Field For="CreateMode"/><ix:Field For="DaofFirstReview"/><ix:Field For="DefPersRespFind"/><ix:Field For="Depth"/><ix:Field For="DofSecondReview"/><ix:Field For="Equipment"/><ix:Field For="EquipmentTxt"/><ix:Field For="FApprovalFields"/><ix:Field For="FilledQuestions"/><ix:Field For="FirstReviewBy"/><ix:Field For="HelpeIsComplete"/><ix:Field For="HelperLocatio2"/><ix:Field For="HelperLocation"/><ix:Field For="InsDisplayField"/><ix:Field For="InspecChecklist"/><ix:Field For="InspectionDate"/><ix:Field For="InstrInProgress"/><ix:Field For="InstructiCreate"/><ix:Field For="InstructioDraft"/><ix:Field For="InstructiReview"/><ix:Field For="LNoticeonCreate"/><ix:Field For="MasterChecklist"/><ix:Field For="MaxPoints"/><ix:Field For="Name"/><ix:Field For="NbActions"/><ix:Field For="NbFindings"/><ix:Field For="NbSubChecklists"/><ix:Field For="NotifiDate"/><ix:Field For="oSectionAnswers"/><ix:Field For="Path"/><ix:Field For="PersResponsibl"/><ix:Field For="PersResponsible"/><ix:Field For="PointsAwarded"/><ix:Field For="PrevChecklistId"/><ix:Field For="Progress"/><ix:Field For="PubChecklist"/><ix:Field For="RecordNo"/><ix:Field For="ReleActionPlans"/><ix:Field For="RevieweComment1"/><ix:Field For="RevieweComments"/><ix:Field For="RevieweDecisio1"/><ix:Field For="RevieweDecision"/><ix:Field For="Reviewer"/><ix:Field For="SApprovalFields"/><ix:Field For="Scope"/><ix:Field For="Score"/><ix:Field For="SecondReviewBy"/><ix:Field For="SysteTypeHelper"/><ix:Field For="TypeOfInspec"/></ix:FieldArea><ix:WorkflowFields/></ix:DetailSection><ix:GridSection ID="ActionPlansGridSection" For="ActionPlans"><Columns><ix:Column For="PlaDisplayField" LinkTo="default"/><ix:Column For="ActionNo"/><ix:Column For="ActionOwner"/><ix:Column For="ActionPlanType"/><ix:Column For="ActivitiesStart"/></Columns></ix:GridSection><ix:GridSection ID="DistributioListGridSection" For="DistributioList"><Columns><ix:Column For="FullName" LinkTo="default"/><ix:Column For="City"/><ix:Column For="Company"/><ix:Column For="ContractExpiry"/><ix:Column For="ContractorName"/></Columns></ix:GridSection><ix:GridSection ID="FindingsGridSection" For="Findings"><Columns><ix:Column For="Name" LinkTo="default"/><ix:Column For="ActionPlanCheck"/><ix:Column For="AdditionalCost"/><ix:Column For="ChecklistAnswer"/><ix:Column For="CorrectiActions"/></Columns></ix:GridSection><ix:GridSection ID="QuestionAnswersGridSection" For="QuestionAnswers"><Columns><ix:Column For="PubQuestion" LinkTo="default"/><ix:Column For="AbsoluteOrder"/><ix:Column For="ActionPlanAdded"/><ix:Column For="AnswerText"/><ix:Column For="Checkbox"/></Columns></ix:GridSection><ix:GridSection ID="SectAnswersGridSection" For="SectAnswers"><Columns><ix:Column For="Section" LinkTo="default"/><ix:Column For="CheckAnswerGUID"/><ix:Column For="ChecklistAnswer"/><ix:Column For="Sort"/></Columns></ix:GridSection><ix:GridSection ID="SubChecklistsGridSection" For="SubChecklists"><Columns><ix:Column For="Name" LinkTo="default"/><ix:Column For="ApplicQuestions"/><ix:Column For="Comments"/><ix:Column For="DefPersRespFind"/><ix:Column For="Depth"/></Columns></ix:GridSection><ix:WorkflowComments/><ix:WorkflowTracking/><ix:ESignatureHistorySection/><ix:AttachmentSection ID="AttachmentFragmentGridSection"/><ix:MailMergeTemplates ID="MailMergeFragmentGridSection"/></ix:DetailPage>
```

### E2494-ConfigurableViewActions

Unresolved.CLF_QuestAbstract_Detail (Mobile) — ConfigurableViewActions; stable record ID 1f0abcc8-84da-4931-97ba-abe8a0855d51. Source $.GraphData.Items[828].FieldData.ConfigurableViewActions.

```json
[]
```

### E2494-ViewDefinition

Unresolved.CLF_QuestAbstract_Detail (Mobile) — ViewDefinition; stable record ID 1f0abcc8-84da-4931-97ba-abe8a0855d51. Source $.GraphData.Items[828].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Order",
    "Content",
    "Guideline",
    "Section",
    "AnswerType",
    "ChoiceList"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E2494-Content

Unresolved.CLF_QuestAbstract_Detail (Mobile) — Content; stable record ID 1f0abcc8-84da-4931-97ba-abe8a0855d51. Source $.GraphData.Items[828].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailSection Title="Question" meta:resourcekey="DetailSection0" ResourceKey="DetailSection0"><ix:FieldArea Span="true"><ix:Field For="Order" /><ix:Field For="Content" SpellCheck="false" /><ix:Field For="Guideline" /><ix:Field For="Section" /><ix:Field For="AnswerType" /><ix:Field For="ChoiceList" /></ix:FieldArea></ix:DetailSection></ix:DetailPage>
```

### E2496-ConfigurableViewActions

Unresolved.CLF_QuestionAnswer_Docs (Mobile) — ConfigurableViewActions; stable record ID 0ac91486-b483-4a20-abc8-edf7e5b36bee. Source $.GraphData.Items[829].FieldData.ConfigurableViewActions.

```json
[]
```

### E2496-ViewDefinition

Unresolved.CLF_QuestionAnswer_Docs (Mobile) — ViewDefinition; stable record ID 0ac91486-b483-4a20-abc8-edf7e5b36bee. Source $.GraphData.Items[829].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "ObjectRecordId"
  ],
  "GridProperties": {
    "ActionPlans": [
      "ActionNo",
      "ActionOwner",
      "Activites",
      "ActivitiesStart",
      "ActivitProgress"
    ]
  },
  "ChecklistGrids": {}
}
```

### E2496-Content

Unresolved.CLF_QuestionAnswer_Docs (Mobile) — Content; stable record ID 0ac91486-b483-4a20-abc8-edf7e5b36bee. Source $.GraphData.Items[829].FieldData.Content.

```xml
<ix:DetailPage><ix:DetailPageMenuBar ID="DetailPageMenuBar" runat="server"><ix:EditActionLink Override="true" Visible="false"/><ix:AddEntryActionLink Override="true" Visible="false"/><ix:SaveActionLink Override="true" Visible="false"/><ix:SaveExitActionLink Override="true" Visible="false"/><ix:CloneActionLink Override="true" Visible="false"/><ix:DeleteActionLink Override="true" Visible="false"/><ix:SaveAddNewActionLink Override="true" Visible="false"/></ix:DetailPageMenuBar><ix:TabsSection Title="Private Document Attachment" ShowHeader="true" Icon="Icons/new/48x48/folder_up.gif" meta:resourcekey="TabsSection0" ResourceKey="TabsSection0" ModernIcon="Raven/Icons/BrightBlue_48/folder232.png"><ix:Tab Caption="Upload" meta:resourcekey="Tab0" ResourceKey="Tab0"><ix:AttachmentSection ID="AttachmentFragmentGridSection" Title="Upload images" CssClass="HideBorders" isCollapsed="false" UseCookies="false" meta:resourcekey="AttachmentSection0" ResourceKey="AttachmentSection0"/></ix:Tab><ix:Tab Caption="Image Preview" DisplayMode="View,Edit" meta:resourcekey="Tab1" ResourceKey="Tab1"><ix:GridPanel Entity="DocDocumentAttachmentsEntity" isCollapsed="false" UseCookies="false" ShowColumnCaptions="false" AllowPaging="false" AllowFiltering="false" AllowSorting="false" RowSelectionMode="None" Readonly="True" DisplayMode="View,Edit" DisplayEditColumn="false" CssClass="HideBorders"><Filters><ix:Filter><ix:CommonPredicate For="ObjectRecordId" Type="Equal"><ix:Value Parse="True">
<%= Model.Id %>
</ix:Value></ix:CommonPredicate></ix:Filter><ix:Filter PredicateOperator="or"><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>
.png
</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>
.jpg
</ix:Value></ix:LikePredicate><ix:LikePredicate For="AttachmentName" Type="EndsWith"><ix:Value>
.gif
</ix:Value></ix:LikePredicate></ix:Filter></Filters><aliases><ix:Alias For="Id"/><ix:Alias For="AttachmentName"/></aliases><columns><ix:TemplateColumn><template><div class="imagepreview" title="<%# Container.ViewData.Eval("AttachmentName") %>" style="background-image:url(&apos;<%= HttpEnvironment.SystemApplicationPath %>/intelexforms/attachmentsection/downloadfile?recordid=<%# Container.ViewData.Eval("Id") %>&apos;)"/></template></ix:TemplateColumn></columns></ix:GridPanel></ix:Tab></ix:TabsSection><ix:GridSection For="ActionPlans" ID="ActionPlansGridSection"><Columns><ix:Column For="ActionNo" LinkTo="default" /><ix:Column For="ActionOwner" /><ix:Column For="Activites" /><ix:Column For="ActivitiesStart" /><ix:Column For="ActivitProgress" /></Columns></ix:GridSection></ix:DetailPage><style>
.HideBorders > .header {
    display: none;
}

.HideBorders > .footer {
    display: none;
}

.HideBorders > .content {
    border: medium none;
    padding: 0;
}

.imagepreview {
background-repeat:no-repeat;
max-width:500px;
min-height:300px;
background-size:contain;
}
</style>
```

### E2506-ConfigurableViewActions

Unresolved.CLF_SectionObjectDetailView (Mobile) — ConfigurableViewActions; stable record ID 84d11b8b-3252-427b-abad-2e40517726b5. Source $.GraphData.Items[833].FieldData.ConfigurableViewActions.

```json
[]
```

### E2506-ViewDefinition

Unresolved.CLF_SectionObjectDetailView (Mobile) — ViewDefinition; stable record ID 84d11b8b-3252-427b-abad-2e40517726b5. Source $.GraphData.Items[833].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "SectionName",
    "Checklist",
    "Sort",
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries"
  ],
  "GridProperties": {
    "Questions": [
      "AnswerType",
      "Checklists",
      "ChecklistType",
      "ChoiceList",
      "Content"
    ]
  },
  "ChecklistGrids": {}
}
```

### E2506-Content

Unresolved.CLF_SectionObjectDetailView (Mobile) — Content; stable record ID 84d11b8b-3252-427b-abad-2e40517726b5. Source $.GraphData.Items[833].FieldData.Content.

```xml
<ix:DetailPage>
<ix:DetailSection Title='Fields'>
<ix:FieldArea><ix:Field For="SectionName" /><ix:Field For="Checklist" /><ix:Field For="Sort" /></ix:FieldArea>
<ix:WorkflowFields/>
</ix:DetailSection>
<ix:WorkflowComments/>
<ix:WorkflowTracking/>
<ix:ESignatureHistorySection/>
<ix:GridSection For="Questions" ID="QuestionsGridSection"><Columns><ix:Column For="AnswerType" LinkTo="default" /><ix:Column For="Checklists" /><ix:Column For="ChecklistType" /><ix:Column For="ChoiceList" /><ix:Column For="Content" /></Columns></ix:GridSection></ix:DetailPage>
```

### E2577-ConfigurableViewActions

Unresolved.CLF_PubChecklist_Inventory (Mobile) — ConfigurableViewActions; stable record ID 4c5ea05a-1bdc-4a8f-82fb-5ab3ccf57887. Source $.GraphData.Items[841].FieldData.ConfigurableViewActions.

```json
[]
```

### E2577-ViewDefinition

Unresolved.CLF_PubChecklist_Inventory (Mobile) — ViewDefinition; stable record ID 4c5ea05a-1bdc-4a8f-82fb-5ab3ccf57887. Source $.GraphData.Items[841].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "ChecklistRef",
    "Title",
    "Checklist.ChecklistType",
    "ChecklistType"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E2577-Content

Unresolved.CLF_PubChecklist_Inventory (Mobile) — Content; stable record ID 4c5ea05a-1bdc-4a8f-82fb-5ab3ccf57887. Source $.GraphData.Items[841].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_PubChecklist_Inventory"><ix:InventoryView ID="CLF_PubChecklist_InventoryView" HideGroupAddButton="true" PageSize="50"><Grouping><ix:Group by="Checklist.ChecklistType"/></Grouping><Menu><ix:GridCreateActionLink runat="server" Override="true" visible="false"/><ix:GridDeleteActionLink runat="server" Override="true" visible="false"/></Menu><Columns><ix:Column For="ChecklistRef"/><ix:Column For="Title"/><ix:Column FilterAs="dropdown" For="Checklist.ChecklistType"/><ix:Column For="ChecklistType"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E2587-ConfigurableViewActions

Unresolved.Insp_EquipInspection_Frag_QuestionAnswer (Mobile) — ConfigurableViewActions; stable record ID 9e51ed97-a708-44e9-930e-6a41f578aec7. Source $.GraphData.Items[843].FieldData.ConfigurableViewActions.

```json
[]
```

### E2587-ViewDefinition

Unresolved.Insp_EquipInspection_Frag_QuestionAnswer (Mobile) — ViewDefinition; stable record ID 9e51ed97-a708-44e9-930e-6a41f578aec7. Source $.GraphData.Items[843].FieldData.ViewDefinition.

```json
{
  "Properties": [],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E2587-Content

Unresolved.Insp_EquipInspection_Frag_QuestionAnswer (Mobile) — Content; stable record ID 9e51ed97-a708-44e9-930e-6a41f578aec7. Source $.GraphData.Items[843].FieldData.Content.

```xml
<ix:DetailPage/>
```

### E2620-ConfigurableViewActions

Unresolved.ConfgAppSetting_InstructionTextObjectInventoryView (Mobile) — ConfigurableViewActions; stable record ID b8d13ce3-9786-412f-b492-d05366733380. Source $.GraphData.Items[856].FieldData.ConfigurableViewActions.

```json
[]
```

### E2620-ViewDefinition

Unresolved.ConfgAppSetting_InstructionTextObjectInventoryView (Mobile) — ViewDefinition; stable record ID b8d13ce3-9786-412f-b492-d05366733380. Source $.GraphData.Items[856].FieldData.ViewDefinition.

```json
{
  "Properties": [],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E2620-Content

Unresolved.ConfgAppSetting_InstructionTextObjectInventoryView (Mobile) — Content; stable record ID b8d13ce3-9786-412f-b492-d05366733380. Source $.GraphData.Items[856].FieldData.Content.

```xml
<ix:InventoryPage>
<ix:Inventory ID='ConfgAppSetting_InstructionTextObjectInventory'>
<ix:InventoryView ID='ConfgAppSetting_InstructionTextObjectInventoryView'>
<Columns>
</Columns>
</ix:InventoryView>
</ix:Inventory>
</ix:InventoryPage>
```

### E2958-ConfigurableViewActions

Unresolved.Insp_EquipInspectionObjectInventoryView (Mobile) — ConfigurableViewActions; stable record ID a77602e3-e4f7-4e3d-befe-d29f0dfa20e1. Source $.GraphData.Items[893].FieldData.ConfigurableViewActions.

```json
[]
```

### E2958-ViewDefinition

Unresolved.Insp_EquipInspectionObjectInventoryView (Mobile) — ViewDefinition; stable record ID a77602e3-e4f7-4e3d-befe-d29f0dfa20e1. Source $.GraphData.Items[893].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Name",
    "TypeOfInspec",
    "InspecChecklist",
    "PersResponsible.Id",
    "Workflow.CurrentStage.Name"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E2958-Content

Unresolved.Insp_EquipInspectionObjectInventoryView (Mobile) — Content; stable record ID a77602e3-e4f7-4e3d-befe-d29f0dfa20e1. Source $.GraphData.Items[893].FieldData.Content.

```xml
<ix:InventoryPage>
  <ix:Inventory ID="Insp_EquipInspectionObjectInventory">
    <ix:InventoryView ID="Insp_EquipInspectionObjectInventoryView" Caption="Inspections List">
      <Filters>
        <ix:Filter>
          <ix:CommonPredicate For="PersResponsible.Id" Type="Equal">
            <ix:Value runat="server" Parse="true">
<%= SystemSession.Current.User.Id %>
            </ix:Value>
          </ix:CommonPredicate>
        </ix:Filter>
        <ix:Filter PredicateOperator="Or">
          <ix:CommonPredicate For="Workflow.CurrentStage.Name" Type="Equal">
            <ix:Value runat="server" Parse="true">
Create/Draft
            </ix:Value>
          </ix:CommonPredicate>
          <ix:CommonPredicate For="Workflow.CurrentStage.Name" Type="Equal">
            <ix:Value runat="server" Parse="true">
In Progress
            </ix:Value>
          </ix:CommonPredicate>
        </ix:Filter>
      </Filters>
      <Sorting>
<ix:Sort By="RecordNo" Direction="Descending"/>
      </Sorting>
      <Columns>
<ix:Column For="Name"/>
<ix:Column For="TypeOfInspec"/>
<ix:Column For="InspecChecklist"/>
      </Columns>
    </ix:InventoryView>
  </ix:Inventory>
</ix:InventoryPage>
```

### E2978-ConfigurableViewActions

Unresolved.CLF_Checklist_Select (Mobile) — ConfigurableViewActions; stable record ID 1c19c63d-239d-48df-a1af-1e34e3c2d7ec. Source $.GraphData.Items[900].FieldData.ConfigurableViewActions.

```json
[]
```

### E2978-ViewDefinition

Unresolved.CLF_Checklist_Select (Mobile) — ViewDefinition; stable record ID 1c19c63d-239d-48df-a1af-1e34e3c2d7ec. Source $.GraphData.Items[900].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Reference",
    "Title",
    "NbQuestions",
    "ChecklistType"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E2978-Content

Unresolved.CLF_Checklist_Select (Mobile) — Content; stable record ID 1c19c63d-239d-48df-a1af-1e34e3c2d7ec. Source $.GraphData.Items[900].FieldData.Content.

```xml
<ix:InventoryPage><ix:Inventory ID="CLF_Checklist_Select"><ix:InventoryView ID="CLF_Checklist_SelectView" DisplayEditColumn="false" HideGroupAddButton="true"><Menu><ix:GridCreateActionLink Override="true" visible="false"/><ix:GridDeleteActionLink Override="true" visible="false"/><ix:GridExecuteActionLink Override="true" Name="Publish" Visible="false"/></Menu><grouping><ix:Group By="ChecklistType"/></grouping><Columns><ix:Column For="Reference"/><ix:Column For="Title"/><ix:Column For="NbQuestions" HorizontalAlign="center"/><ix:Column For="ChecklistType" FilterAs="dropdown"/></Columns></ix:InventoryView></ix:Inventory></ix:InventoryPage>
```

### E2982-ConfigurableViewActions

Unresolved.CLF_LocalizResource_Detail (Mobile) — ConfigurableViewActions; stable record ID c80bb779-7af0-48a8-a947-9f74d3013cc9. Source $.GraphData.Items[902].FieldData.ConfigurableViewActions.

```json
[]
```

### E2982-ViewDefinition

Unresolved.CLF_LocalizResource_Detail (Mobile) — ViewDefinition; stable record ID c80bb779-7af0-48a8-a947-9f74d3013cc9. Source $.GraphData.Items[902].FieldData.ViewDefinition.

```json
{
  "Properties": [
    "Workflow",
    "Workflow.PersonResponsible",
    "Workflow.RecurringSeries"
  ],
  "GridProperties": {},
  "ChecklistGrids": {}
}
```

### E2982-Content

Unresolved.CLF_LocalizResource_Detail (Mobile) — Content; stable record ID c80bb779-7af0-48a8-a947-9f74d3013cc9. Source $.GraphData.Items[902].FieldData.Content.

```xml
<ix:DetailPage>
<ix:DetailSection Title='Fields'>
<ix:FieldArea>
</ix:FieldArea>
<ix:WorkflowFields/>
</ix:DetailSection>
<ix:WorkflowComments/>
<ix:WorkflowTracking/>
<ix:ESignatureHistorySection/>
</ix:DetailPage>
```
