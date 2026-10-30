/* Keep assigned work separate from unchanged package settings used as context. */
module.exports=function actionScope(tasks){
 const byId=new Map(tasks.map(t=>[t.id,t]));
 const contextDefinitions=new Map([
  ['Insp_InspectionAbsObject.CompletedBy',{task:'IMP-43',reason:'Field settings are unchanged. The Complete Inspection action records the field-work actor; that workflow behavior is assigned in IMP-43.'}],
  ['Insp_InspectionAbsObject.CompletedOn',{task:'IMP-43',reason:'Field settings are unchanged. The Complete Inspection action records the field-work date; that workflow behavior is assigned in IMP-43.'}],
  ['CLF_InsActionPlanObject.hRelatedInsp',{task:'IMP-11',reason:'Existing E2929 inspection helper population is unchanged; IMP-11 changes the source references supplied when launching an action.'}],
  ['CLF_InsActionPlanObject.HelperReleaseAP',{task:'IMP-42',reason:'Existing release-helper calculation is unchanged; IMP-42 modifies the workflow start condition and completion action.'}]
 ]);
 const contextCoverage=[];
 for(const t of tasks)t.modifications=t.modifications.filter(m=>{
  const context=contextDefinitions.get(m.object+'.'+m.field);if(!context)return true;
  contextCoverage.push({object:m.object,field:m.field,evidence:m.evidence,...context,disposition:'Existing field settings unchanged; used by the named configuration change'});return false;
 });
 const removeRows={
  'IMP-03':['Shared framework'], 'IMP-05':['Existing records'],
  'IMP-10':['Shared fields'], 'IMP-11':['Existing synchronization'],
  'IMP-14':['Inspection work (InspectioninProgress)','Workflow identity'],
  'IMP-16':['Existing file handling'], 'IMP-26':['Existing action choices','Existing publication behavior'],
  'IMP-40':['First review due date','Second review due date'],
  'IMP-36':['Existing scoring'], 'IMP-42':['Native completion settings'],
  'IMP-50':['Record handling'], 'IMP-58':['Distribution/signatures']
 };
 for(const [id,labels]of Object.entries(removeRows))byId.get(id).configurationRows=byId.get(id).configurationRows.filter(([label])=>!labels.includes(label));
 const eight=byId.get('IMP-08');
 eight.objective='Add separate performance, submission and acceptance details and protect the reviewer evidence controls.';
 eight.scope='Add ExternalParty, PerformedOn, SubmittedAt and AcceptedAt to the existing Inspection record. Configure all four as optional at the underlying object level, with the specified conditional screen/submission requirements. Change FirstReviewBy, SecondReviewBy, DaofFirstReview and DofSecondReview controls to read-only on applicable inspection screens. IMP-43 configures automatic population of the new timestamps and review evidence.';
 eight.configurationRows=eight.configurationRows.map(([label,value])=>label==='Existing evidence'?['Reviewer controls','Change FirstReviewBy, SecondReviewBy, DaofFirstReview and DofSecondReview controls to read-only. IMP-43 records the actual reviewer and review date.']:[label,value]);
 eight.accept=eight.accept.filter(s=>!s.includes('CompletedBy/CompletedOn'));
 eight.deliverable='Four new inspection fields and read-only reviewer controls, ready for the conditional submission rules and automatic workflow updates.';
 // These replacements remove stand-alone preservation instructions, not new rules that
 // protect accepted evidence, constrain choices or reject an invalid transition.
 const replacements=[
  ['Keep catalogue relationship inverses disabled.','Configure catalogue relationship inverses as disabled.'],
  ['Preserve existing official records as required by the approved policy; do not silently overwrite them.','Configure regeneration to apply the approved versioning/retention policy to existing official records.'],
  ['Use the existing first/second review due-date expressions with the supplied positive day values. ',''],
  ['Keep the specified object security settings and catalogue relationship inverses disabled.',''],
  ['; keep existing mobile/offline settings and record identities.','.'],
  ['while retaining its record identity.','.'],
  ['and retain normal hidden-question behavior.','.'],
  ['Retain the current InspecChecklist selection, PubChecklist assignment, published-question hCheckAnswerId writes and native answer/section generation.','Place the existing InspecChecklist selection, PubChecklist assignment, hCheckAnswerId writes and native generation inside the Internal-only branch.'],
  ['Retain E2007 and the existing generator/version-selection behavior. E2697 Continue must apply the question-count check only to Internal inspections.','Update E2697 Continue in IMP-43 so its question-count check applies only to Internal inspections.'],
  ['Retain E842/E883 and existing numeric calculations; labels and scores do not define negativity.','Read negativity from Choice.IsNegative.'],
  ['Preserve other applications and existing role identities.','Apply this change to the Inspection branch.'],
  ['Preserve other action types.','Apply the effective default only to Inspection Action Plans.'],
  ['Retain E1319/E2096/E2929/E2594 behavior.',''],
  ['Keep the existing release-change condition and template, adding AlBeenCorrected=FALSE.','Add AlBeenCorrected=FALSE to the existing release-change condition.'],
  ['Due-date expressions retain the specified fields and overdue reviews remain actionable.','Overdue review actions are enabled.'],
  ['Existing blanks have their stated interpretation and existing review/equipment reference records are preserved.','The new program rules interpret existing blanks as specified.'],
  ['Each mode has explicit form/save requirements assigned to IMP-22/IMP-37, with other action types preserved.','Each entry mode has the specified conditional requirements in IMP-22/IMP-37.'],
  ['Apply these settings to inspection checklists while preserving other applications using the shared framework.','Scope these settings to inspection checklists.'],
  ['Keep the default Yes, require the value to remain Yes, and hide the control','Enforce Yes and hide the control'],
  ['Retain existing Action Required (ActReqChoices) on each question and its publication copy.','Use existing Action Required (ActReqChoices) to define the choices that require an action.'],
  ['Keep the existing ActReqChoices copy. ',''],
  ['Keep both optional at the underlying object level;','Configure both as optional at the underlying object level;'],
  ['Preserve existing review/equipment settings and reference records. ',''],
  [' Keep separate from the scheduled/due date.',' Record the actual performance date in this new field.'],
  ['Keep their relationship inverses disabled and preserve existing calculation-support fields.','Configure their relationship inverses as disabled.'],
  ['Keep all three optional at the underlying object level and read-only to users.','Configure all three as optional at the underlying object level and read-only to users.'],
  ['while preserving other action types.','for Inspection Action Plans.'],
  ['Update the existing Inspection workflow while keeping its stage/action identifiers and system names.','Update the existing Inspection workflow stages identified below.'],
  ['Keep sections enabled and scoring disabled as configured by IMP-03. ',''],
  ['Preserve the existing Publish screen and shared Choice/Choice List maintenance.',''],
  ['Keep the existing stage names and apply equipment conditions from IMP-30.','Apply equipment conditions from IMP-30.'],
  ['Preserve the existing dependent-question behavior, including clearing answers when questions become hidden.',''],
  ['Keep E842 clearing-on-hide and the existing dependency behavior.','Apply the new controls after the existing E842 visibility/clearing processing.'],
  ['Preserve existing shared names, field types and record identities.',''],
  ['Keep current shared Code/Name/Sort structures and historical references.',''],
  ['Apply these changes to Inspection content and preserve the shared framework behavior used elsewhere.','Apply the new checks to Inspection content.'],
  ['Retain the existing reference records. ',''],
  ['Retain the existing ActReqChoices copy and every other original copy step. ',''],
  ['Keep existing field types and identifiers; historical records need no mandatory update or duplicate inspection-level settings.',''],
  ['Preserve existing data types and prevent changes to Location/equipment context once execution or action evidence exists.','Reject changes to Location/equipment context once execution or action evidence exists.'],
  ['Keep existing Location access restrictions and historical references to inactive records.','Apply the existing Location access restriction to the new selection.'],
  ['Preserve the existing calculations for other applications and keep these result fields read-only.','Apply the revised calculations only to Inspection records.'],
  ['Keep the existing first/second review due-date expressions and use the actual positive day values.','Use the existing first/second review due-date expressions with the supplied positive day values.'],
  ['Retain the current self-review policy and allow overdue work to remain actionable.','Enable review actions when their due dates have passed.'],
  ['Keep IsDateNotRequiredEnabled TRUE and its existing Completed result binding.',''],
  ['Preserve the InProgress stage, owner/due settings and ordinary release timing. ',''],
  ['Keep existing mobile/offline settings and record identities.',''],
  ['Preserve the existing access restrictions on source inspections.','Apply the existing source-inspection access restrictions to the report.'],
  ['Keep current shared reference labels, field types and record identities.',''],
  ['Preserve unrelated object audit settings.',''],
  ['Keep read-only and preserve other applications.',''],
  ['Preserve other applications’ calculation and keep read-only.',''],
  ['Exclude hidden questions and preserve other applications’ calculation. Keep read-only.','Exclude hidden questions.'],
  ['Preserve other shared application values.',''],
  ['; preserve the calculation for other applications. Keep read-only.','.'],
  ['Keep read-only and retain outstanding-action release/notification timing; already-completed entry uses the native exception.','Use the native exception for already-completed entry.'],
  ['Preserve the existing field type and other action types.',''],
  ['Preserve unrelated action types.',''],
  ['Preserve native history and date types.',''],
  ['Keep read-only and preserve other applications.','']
 ];
 function clean(value){let s=value;for(const [a,b]of replacements)s=s.split(a).join(b);return s.replace(/\s{2,}/g,' ').trim();}
 const pureContextCriteria=[
  'Other applications retain their existing behavior and the original fields remain installed.',
  'Existing ActReqChoices and its publication copy are retained.',
  'Existing Location, inspection and response-link synchronization continues to work.',
  'Draft, InspectioninProgress, ActionsPending and SecondReview system names and original action identities are preserved.',
  'Files use existing native ownership and storage.',
  'Existing Choice records and native publication controls remain usable.',
  'Historical/shared reference records are preserved.',
  'E2348 and the existing publishing mechanism remain unchanged.',
  'Existing numeric field types and calculations remain installed.',
  'Desktop and mobile use the same native record and file identities.'
 ];
 for(const t of tasks){
  t.scope=clean(t.scope);t.objective=clean(t.objective);t.deliverable=clean(t.deliverable);
  t.configurationRows=t.configurationRows.map(([label,value])=>[label,clean(value)]).filter(([,value])=>value);
  t.steps=t.steps.map(clean).filter(Boolean);
  t.accept=t.accept.filter(s=>!pureContextCriteria.includes(s)).map(clean);
  for(const m of t.modifications)m.businessChange=clean(m.businessChange);
 }
 // Scope remains attached to the objects being changed; existing mechanisms are
 // identified as sources/targets only where needed to make those changes concrete.
 byId.get('IMP-11').accept=byId.get('IMP-11').accept.filter(s=>!s.includes('synchronization continues'));
 byId.get('IMP-14').configurationRows.push(['Workflow to update','Use existing Inspection workflow ced8b0af-3920-4fcc-9e75-e5fcca803f56 for the stage changes above.']);
 byId.get('IMP-26').accept=[
  'E265 contains the new ContributesToOutcome=Question.ContributesToOutcome assignment.',
  'A newly published question receives the authoring question’s ContributesToOutcome value.'
 ];
 byId.get('IMP-40').title='Update Review Assignments';
 byId.get('IMP-40').objective='Assign each enabled review to the correct current reviewer.';
 // User confirmation supersedes the proposed source-linking assignment: the
 // product already supplies this behavior. Do not move that work to another task.
 const existingLinks=byId.get('IMP-11');
 for(const m of existingLinks.modifications)contextCoverage.push({object:m.object,field:m.field,evidence:m.evidence,task:null,owner:'Existing product functionality',reason:'User confirmed that inspection/action source linking and same-inspection response selection already exist. No configuration change is assigned.',disposition:'Existing product behavior; no configuration task'});
 for(const c of contextCoverage)if(c.task==='IMP-11')Object.assign(c,{task:null,owner:'Existing product functionality',reason:'Existing inspection helper/source-link behavior is provided by the product, as confirmed by the user. No configuration change is assigned.',disposition:'Existing product behavior; no configuration task'});
 const entry=byId.get('IMP-37');
 entry.objective='Require the appropriate evidence before outstanding or completed actions enter the workflow.';
 entry.scope='Update Inspection Action Plan initial-save checks under H06/R06. Require an activity description in both modes. Validate the mode-specific assignment/completion evidence before workflow processing.';
 entry.configurationRows=entry.configurationRows.filter(([label])=>label!=='Response context').map(([label,value])=>label==='Both modes'?[label,'Require CPARActionReq to describe the activity.']:[label,value]);
 entry.accept=[
  'Each mode rejects a missing activity description before workflow processing.',
  'Outstanding work requires owner/due date; completed entry requires actual performer/date/notes and rejects future dates.',
  'Inspection Action Plans use the actual G03 Corrective type.'
 ];
 byId.get('IMP-22').configurationRows=byId.get('IMP-22').configurationRows.filter(([label])=>label!=='Source context');
 byId.get('IMP-22').scope=byId.get('IMP-22').scope.replace('Display the saved source inspection/response context and keep photographs optional.','').trim();
 tasks.splice(tasks.findIndex(t=>t.id==='IMP-11'),1);
 for(const t of tasks)t.prereqs=t.prereqs.filter(id=>id!=='IMP-11');
 // Consolidate field and form changes against the existing named view action.
 const actionEntry=byId.get('IMP-10'),actionForm=byId.get('IMP-22');
 actionEntry.title='Configure Action Entry Requirements';actionEntry.category='Fields and forms';actionEntry.role='Consultant';
 actionEntry.objective='Update the existing action entry fields and form rules so completed corrections retain their activity description without requiring an outstanding owner.';
 actionEntry.scope='Update ActionOwner and AlBeenCorrected on Inspection Action Plan, and the existing Action Already Complete Show/Hide view action on CLF_InsActionPlan_Detail (E18). Make the underlying ActionOwner field optional and default AlBeenCorrected to No. In the already-completed branch, show and require CPARActionReq instead of hiding and clearing it; hide ActionOwner and make it nonmandatory. Configure the completion defaults and Corrective type controls below. IMP-39 adds checks to E3088 before initial completion; IMP-42 adds or reorders checks in the existing Complete action E2518.';
 actionEntry.configurationRows=[
  ['ActionOwner field','Change the underlying IsRequired setting from TRUE to FALSE.'],
  ['AlBeenCorrected field','Set the new-record default to FALSE (No).'],
  ['ActionOwner create control','In StageContainer_Draft on CLF_InsActionPlan_Detail, change the ActionOwner control IsMandatory setting from TRUE to FALSE. The existing outstanding branch applies the conditional mandatory setting.'],
  ['Existing view action: completed branch','Edit Action Already Complete Show/Hide, condition AlBeenCorrected=TRUE. Remove CPARActionReq from HideAction, SetNonMandatoryAction and ClearValueAction. Add CPARActionReq to ShowAction and SetMandatoryAction.'],
  ['Existing view action: completed owner','In the same TRUE branch, remove ActionOwner from ShowAction and add it to HideAction and SetNonMandatoryAction.'],
  ['Completed-entry defaults','In the same TRUE branch, add conditional defaults: set an empty CompletedBy to CURRENTUSER and an empty CompletionDate to TODAY. Keep an entered actual performer/date as entered.'],
  ['Corrective type','For this subtype, change the CPARTypeID default to the actual G03 Corrective entry only if it differs. Hide the CPARTypeID controls in StageContainer_InProgress and StageContainer_Completed; the create control is already hidden.']
 ];
 actionEntry.steps=['Configure these additions/changes on the existing form and view action. Configure completion validation in the named E3088 and E2518 operations under IMP-39 and IMP-42.'];
 actionEntry.deliverable='Updated field defaults and existing view-action branches with an editable required activity description and a hidden, nonmandatory owner for already-completed entry.';
 actionEntry.accept=[
  'New records default AlBeenCorrected to No; the outstanding branch requires owner, activity description and due date despite the optional underlying ActionOwner setting.',
  'When AlBeenCorrected is Yes, the activity description is visible/mandatory and changing the flag does not clear it.',
  'When AlBeenCorrected is Yes, ActionOwner is hidden/nonmandatory; the existing completion controls require performer, date and notes.',
  'Empty completed-entry performer/date values receive their defaults without overwriting actual entered values.',
  'The applicable controls use the approved Corrective type and hide its selection as specified.'
 ];
 actionEntry.prereqs=[...new Set([...actionEntry.prereqs,...entry.prereqs,...actionForm.prereqs])].filter(id=>!['IMP-10','IMP-22','IMP-37'].includes(id));
 actionEntry.inputs=[...new Set([...actionEntry.inputs,...entry.inputs,...actionForm.inputs])].filter(id=>id!=='G02');
 actionEntry.refs=[...new Set([...actionEntry.refs,...entry.refs,...actionForm.refs])];
 actionEntry.modifications.push(...entry.modifications,...actionForm.modifications);
 actionEntry.rationale='A Consultant owns the coordinated field and conditional form changes, including the existing view action and completion defaults. A separate Senior Consultant product build manager reviews the result.';
 const changeContext=new Map([
  ['DueDate',{task:'IMP-10',reason:'The existing view action already requires a due date for outstanding entry and hides it for completed entry. No DueDate field-setting change is assigned.'}],
  ['CompletionNotes',{task:'IMP-42',reason:'The existing form already requires notes for completed entry. IMP-39 and IMP-42 modify the named completion operations; no CompletionNotes field-setting change is assigned.'}]
 ]);
 actionEntry.modifications=actionEntry.modifications.filter(m=>{
  const c=m.object==='FragApplication_AbCorrectivActiObject'?changeContext.get(m.field):null;if(!c)return true;
  contextCoverage.push({object:m.object,field:m.field,evidence:m.evidence,...c,disposition:'Existing field settings unchanged; referenced by the named form/completion change'});return false;
 });
 for(const m of actionEntry.modifications){
  if(m.field==='ActionOwner')m.businessChange='Change the underlying IsRequired setting from TRUE to FALSE. On E18, change the create control IsMandatory from TRUE to FALSE and make the existing TRUE view-action branch hide/make nonmandatory ActionOwner.';
  if(m.field==='AlBeenCorrected')m.businessChange='Set the new-record default to FALSE so the existing outstanding-entry branch is selected initially.';
  if(m.field==='CPARActionReq')m.businessChange='In E18 Action Already Complete Show/Hide, TRUE branch, remove CPARActionReq from HideAction, SetNonMandatoryAction and ClearValueAction; add it to ShowAction and SetMandatoryAction.';
  if(m.field==='CompletedBy')m.businessChange='Add a conditional default in the existing TRUE view-action branch: when CompletedBy is empty, populate CURRENTUSER; keep an entered actual performer.';
  if(m.field==='CompletionDate')m.businessChange='Add a conditional default in the existing TRUE view-action branch: when CompletionDate is empty, populate TODAY; keep an entered actual date. Date validation is assigned to the named completion operations in IMP-39/IMP-42.';
  if(m.field==='CPARTypeID')m.businessChange='Change the effective subtype default only if needed to select the actual G03 Corrective entry. Hide this control in the InProgress and Completed containers of E18.';
 }
 const viewBefore='E18 Action Already Complete Show/Hide TRUE branch hides, makes nonmandatory and clears CPARActionReq, while showing ActionOwner. The create ActionOwner control has IsMandatory TRUE.';
 const viewChange='Change the named TRUE branch and create control exactly as listed in this task: show/require the activity without clearing it, hide/make nonmandatory the owner, and add defaults only for empty performer/date values.';
 actionEntry.modifications.push({kind:'SysConfigurableViewEntity',element:'CLF_InsActionPlan_Detail / Action Already Complete Show/Hide',evidence:'E18',before:viewBefore,change:viewChange,basis:'Extracted named view action and create control; user-approved modification',businessElement:'CLF_InsActionPlan_Detail / Action Already Complete Show/Hide',businessBefore:viewBefore,businessChange:viewChange});
 for(const id of ['IMP-22','IMP-37'])tasks.splice(tasks.findIndex(t=>t.id===id),1);
 for(const t of tasks){
  t.prereqs=[...new Set(t.prereqs.map(id=>['IMP-22','IMP-37'].includes(id)?'IMP-10':id))];
  const replace=s=>s.replaceAll('IMP-37','IMP-10').replaceAll('IMP-22','IMP-10');
  t.scope=replace(t.scope);t.steps=t.steps.map(replace);t.accept=t.accept.map(replace);t.configurationRows=t.configurationRows.map(r=>r.map(replace));
  for(const m of t.modifications)m.businessChange=replace(m.businessChange);
 }
 return {contextCoverage};
};
