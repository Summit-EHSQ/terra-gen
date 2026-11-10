/* Apply the revised planning standard to the complete current plan. */
module.exports=function reviewPlan(tasks,model,baseline,contexts){
 const byId=new Map(tasks.map(t=>[t.id,t]));
 const aliases=new Map(),retired=new Map(),fieldOwners=new Map(),findings=[];
 function merge(head,ids,title,role){
  const target=byId.get(head),members=ids.map(id=>byId.get(id));
  for(const key of ['prereqs','inputs','refs','accept','steps'])target[key]=[...new Set(members.flatMap(t=>t[key]||[]))];
  target.configurationRows=members.flatMap(t=>t.configurationRows);
  target.modifications=members.flatMap(t=>t.modifications);
  target.title=title;target.role=role;
  target.rationale='One configuration owner completes the related field, control and ordinary rule changes. '+role+' is the minimum role for the complete assignment; a separate Senior Consultant product build manager reviews it.';
  for(const id of ids)if(id!==head){aliases.set(id,head);retired.set(id,'Consolidated into '+head+' — '+title+'.');tasks.splice(tasks.findIndex(t=>t.id===id),1);}
 }
 merge('IMP-01',['IMP-01','IMP-23','IMP-46'],'Configure Inspection Reference Lists','Associate Consultant');
 merge('IMP-04',['IMP-04','IMP-26'],'Configure Question Outcome Settings and Publication','Senior Associate Consultant');
 merge('IMP-05',['IMP-05','IMP-17','IMP-25'],'Configure Inspection Program Settings','Senior Associate Consultant');
 merge('IMP-03',['IMP-03','IMP-18'],'Configure Checklist and Question Authoring','Senior Associate Consultant');
 merge('IMP-16',['IMP-16','IMP-19'],'Configure Inspection Entry and External Report Upload','Consultant');
 function context(m,task,reason,owner){contexts.push({object:m.object,field:m.field,evidence:m.evidence,task,reason,owner,disposition:task?'Existing field settings; used by the named change':'Existing behavior/data ownership; no configuration task'});}
 const review=byId.get('IMP-21'),actors=new Set(['FirstReviewBy','SecondReviewBy','DaofFirstReview','DofSecondReview']);
 for(const m of review.modifications){
  if(m.kind!=='Field')continue;
  if(actors.has(m.field)){byId.get('IMP-08').modifications.push(m);fieldOwners.set(m.object+'.'+m.field,'IMP-08');}
  else context(m,null,'E1623 already provides the ActionsPending/SecondReview containers, matching editable decision/comment pairs, read-only other-stage controls, and First Reviewer Decision / Second Review Decision mandatory-comment view actions. G03 must confirm the selected decision record identity; no replacement form logic is assigned.','Existing product functionality');
 }
 retired.set('IMP-21','Removed as new configuration work — E1623 already supplies the stage-specific review form and comment-required view actions. Workflow rejection checks remain in IMP-43; stamp field properties belong to IMP-08.');
 tasks.splice(tasks.findIndex(t=>t.id==='IMP-21'),1);
 const qa=byId.get('IMP-35');
 qa.modifications=qa.modifications.filter(m=>{if(m.field!=='NbActions')return true;context(m,null,'Source calculation COUNT(ActionPlans) already counts the native related-action collection. No new alias-count or deduplication calculation is required.','Existing product functionality');return false;});
 const program=byId.get('IMP-05');
 program.modifications=program.modifications.filter(m=>{if(!['EnabFirstReview','EnaSecondReview','EquipmentList'].includes(m.field))return true;context(m,null,'The specified initial program record values are populated by Data Migration. The enable controls already exist; the changed dependent view actions and guard are separately specified in IMP-05.','Data Migration');return false;});
 for(const c of contexts)if(['CompletedBy','CompletedOn'].includes(c.field)&&c.object==='Insp_InspectionAbsObject')Object.assign(c,{task:null,owner:'Existing product functionality',reason:'E2704 already stamps CompletedBy=CURRENTUSER and CompletedOn=NOW before routing/completion. No field-property or population change is assigned.'});
 const one=byId.get('IMP-01');one.category='Reference lists and permissions';
 one.objective='Provide the approved inspection source, result and follow-up values with controlled maintenance access.';
 one.scope='Create Inspection Source, Response Outcome, Inspection Outcome and Inspection Classification in the Inspections module. Add Code, Name, Active? and Sort to each object; populate the fourteen entries listed in this task. Configure ordinary users to read the lists, authorized program administrators to maintain them and system processing to read and assign their values. The object names, settings, fields, entries and access rules are included below.';
 one.inputs=['G04'];
 one.inputDescriptions={G04:'Supply the actual authorized program-administrator groups and supported application system-processing security context for access to the four new reference lists. Only the permission bindings wait for these identities; object, field and entry creation can proceed.'};
 one.configurationRows=[
  ['Inspection Source','Create independent object Insp_InspectionSourceObject, display name Inspection Source, in Inspections; no inheritance.'],
  ['Response Outcome','Create independent object Insp_ResponseOutcomeObject, display name Response Outcome, in Inspections; no inheritance.'],
  ['Inspection Outcome','Create independent object Insp_OutcomeObject, display name Inspection Outcome, in Inspections; no inheritance.'],
  ['Inspection Classification','Create independent object Insp_ClassificationObject, display name Inspection Classification, in Inspections; no inheritance.'],
  ['Settings on all four objects','Set IsLocalizable=TRUE, IsAbstract=FALSE, HasWorkflow=FALSE, IsLocationBound=FALSE, IsSecurityEnabled=TRUE, IsAuditEnabled=FALSE and IsAttachmentEnabled=FALSE. Set DisplayProperty=Name and OrderProperty=Sort, ascending. Use native generated detail and inventory views.'],
  ['Code — add to each object','Internal name Code; mandatory Text, maximum 100 characters, non-localizable, no default, unique within its object. Codes are stable once used by application rules; translated display names do not change codes.'],
  ['Name — add to each object','Internal name Name; mandatory Text, maximum 255 characters, localizable, no default. Use as the displayed description.'],
  ['Active? — add to each object','Internal name Active; mandatory Yes/No, default TRUE. FALSE makes a value unavailable for new user selections while existing references remain valid. Values required by automation remain active while that automation uses them.'],
  ['Sort — add to each object','Internal name Sort; optional Float, no default. Use for ascending presentation order.'],
  ...[
   ['Inspection Source','INTERNAL','Internal',10],['Inspection Source','EXTERNAL','External',20],
   ['Response Outcome','UNANSWERED','Unanswered',10],['Response Outcome','NOT_APPLICABLE','Not applicable',20],['Response Outcome','INFORMATIONAL','Informational',30],['Response Outcome','NEGATIVE','Negative',40],['Response Outcome','POSITIVE','Positive',50],
   ['Inspection Outcome','NOT_ASSESSED','Not assessed',10],['Inspection Outcome','PASS','Pass',20],['Inspection Outcome','NONCONFORMING','Nonconforming',30],['Inspection Outcome','NOT_APPLICABLE','Not applicable',40],
   ['Inspection Classification','IN_PROGRESS','In progress',10],['Inspection Classification','COMPLETE_OPEN_ACTIONS','Complete with open actions',20],['Inspection Classification','COMPLETE_RESOLVED','Complete with all actions closed',30]
  ].map(([list,code,name,sort])=>[list+' entry: '+code,'Create Code='+code+'; Name='+name+'; Active=TRUE; Sort='+sort+'.']),
  ['Ordinary application users — all four lists','Grant read access to entries required by the application. Grant no ordinary permission to create, change or delete reference-list records.'],
  ['Authorized program administrators — all four lists','Grant maintenance access to Code, Name, Active? and Sort, subject to code stability and the active-value restrictions above. Bind this access to the supplied administrator groups.']
 ];
 one.accept=[
  'Four independent objects exist in Inspections with the exact internal/display names, common object settings and four fields listed in this task.',
  'Each of the fourteen listed entries exists once within its own list with the stated Code, Name, Active=TRUE and Sort value.',
  'Code is mandatory, non-localizable and unique within each list; Name is mandatory/localizable; Active defaults TRUE; Sort is optional Float with no default.',
  'The native list views display Name and order entries by Sort ascending.',
  'Ordinary application users can read entries and cannot create, change or delete them.',
  'The supplied authorized administrator groups can maintain the lists within the stated code and active-value restrictions.',
  'The supplied system-processing context can read and assign required reference entries.'
 ];
 one.steps=[];
 one.refs=['solution-specification.md — Inspection Source, Response Outcome, Inspection Outcome and Inspection Classification object tables and new reference-list access rules.'];
 one.notes='Missing administrator/system identities affect permission bindings only. Initial inspection program and checklist records are populated in Data Migration; they are not deliverables of this task.';
 one.deliverable='Four usable reference lists with their approved entries and permissions.';
 const four=byId.get('IMP-04');four.category='Fields and publication';four.inputs=[];
 four.objective='Define contributing questions and negative choices, and carry the question setting into the published version.';
 four.scope='Add ContributesToOutcome on CLF_QuestAbstractObject and IsNegative (Is Negative?) on CLF_ChoiceObject, both optional Yes/No fields defaulting FALSE; treat existing blanks as FALSE. In existing Published Question handler E265, Copy Values from Question during Publish, append ContributesToOutcome=Question.ContributesToOutcome. IsNegative stays on the shared Choice. Use existing ActReqChoices independently of negativity; Checkbox remains informational. IMP-03 places the controls; IMP-24 adjusts authoring cleanup and checks.';
 four.configurationRows=four.configurationRows.filter(([label])=>!['Existing action choices','Existing publication behavior'].includes(label));
 four.deliverable='The two outcome settings and the one additional native publication copy.';
 const three=byId.get('IMP-03');three.category='Authoring fields and forms';
 three.objective='Give authors the required section, question and negative-choice controls while hiding fixed and unused Inspection settings.';
 three.scope='Update the three existing checklist editors, CLF_Quest_Detail, CLF_Choice_Detail and CLF_PubQuest_Detail. Hide BOTH controls EnableSections and EnableScoring for Inspection authoring and enforce their effective TRUE/FALSE values through the new scoped view actions. Make SectionName mandatory in CLF_SectionObjectDetailView. Add ContributesToOutcome and IsNegative controls, and expose existing ActReqChoices for both Choice and Choices. Change the existing question view action that currently hides the requirement grid for Choices. IMP-24 owns the save/publication enforcement.';
 three.configurationRows.push(
  ['Checklist editors: E497/E1753/E1773','Create the proposed scoped view action Inspection Checklist Settings on CLF_Checklist_Detail, CLF_Checklist_Toolbox_Detail and CLF_Checklist_MassUpdate. Under G02’s Inspection-authoring condition, set EnableSections=TRUE and EnableScoring=FALSE and hide both controls.'],
  ['Section name: E2503','On CLF_SectionObjectDetailView, the SectionName control currently has no mandatory override. Add the proposed Inspection Section Name view action to make it mandatory for a Section whose Checklist meets the G02 Inspection-authoring condition.'],
  ['Multiple-choice requirements: E972','In Show/Hide Choice List, the Choices branch currently hides Choice_Requirement_Grid_NoFindings. For the Inspection scope, show this grid for both Choice and Choices so its existing ActReqChoices/ComReqChoices editors can be used. Hide it for other answer types.'],
  ['New outcome controls','Add ContributesToOutcome to CLF_Quest_Detail; show it only for Choice/Choices and set FALSE for non-choice types. Add IsNegative to CLF_Choice_Detail (E112) and applicable editors. Add a read-only ContributesToOutcome control to CLF_PubQuest_Detail (E220).']
 );
 three.deliverable='Inspection authoring controls configured, including the multiple-choice requirement grid and named-section requirement.';
 three.configurationRows=three.configurationRows.map(([n,v])=>n==='Formal Finding/scoring setup'?[n,'Hide existing FindReqChoices, TriggerFindings, Weight, ValueChoiceList and numeric score controls on the applicable Inspection-facing screens. E220 has no Published Question.MaxPoints control: create no control just to hide it. For compiled/profile screens whose controls are not exported, G07 supplies their actual bindings before assigning a screen change.']:[n,v]);
 program.category='Program fields, forms and rules';program.inputs=[...new Set([...program.inputs,'G04'])];
 program.objective='Configure inspection sources, results, review routes and equipment settings through one consistent program setup.';
 program.scope='Add SourceMode and OverallOutcomeRequired to Insp_TypeObject and update Insp_Type_Detail (E1565). Modify the existing hide/show First Reviewer, enabled hide/show Second Reviewer, New/Existing and show/hide equipment view actions as listed below. Replace the ad hoc role-creation behavior of existing Create Role handler E1236 with the scoped program settings/checks, using G02’s actual create/update binding. G03 supplies reference identities; G04 supplies technical-administrator permissions. Data Migration populates initial program records.';
 program.configurationRows.push(
  ['E1565 review actions','In hide/show First Reviewer and the enabled method-based hide/show Second Reviewer action, remove ClearValueAction for disabled review days/methods and route details where the specification requires hidden values to be retained. Keep mandatory settings conditional on the matching enabled method.'],
  ['E1565 maintained roles','Change the Role-method branches to show/require Role or Role2 directly. Disable the ordinary New/Existing role-choice branches and hide InspRoleOption/InspRoleOption2/InspRoleOptionId/RoleName/RoleName2. Add Specific Person branches only for the approved technical exception; restrict Expression/Expression2 and exceptional named routes with G04 permissions.'],
  ['E1565 equipment action','In show/hide equipment remove EquipmMandatory from user-editable/show controls; set it from EquipmentList. For disabled equipment remove clearing of ELOptions so its existing value is retained while hidden/nonmandatory, as required by the field contract.'],
  ['E1236 Create Role — replace its role-creation flow','On the existing Insp_TypeObject handler, remove GETRELATED role creation and role-name clearing. Rename it Validate Inspection Program Settings and add scoped enforcement of ComplValidation=TRUE, FindingTracking=FALSE and derived EquipmMandatory. Add explicit errors for second review without first, nonpositive enabled review periods and missing method-specific routing or enabled equipment options. Apply new/revised SourceMode and OverallOutcomeRequired rules under the G02 current-program scope; legacy blanks retain their specified meaning.']
 );
 program.deliverable='Program fields, named existing form actions and the repurposed program handler configured together.';
 const eight=byId.get('IMP-08');
 eight.scope='Add ExternalParty, PerformedOn, SubmittedAt and AcceptedAt to Inspection with the specified field types, defaults and conditional requirements. On the existing Insp_InspectionAbsObject fields FirstReviewBy, SecondReviewBy, DaofFirstReview and DofSecondReview, change native IsReadOnly from FALSE to TRUE. These fields currently have no corresponding actor/date controls in E1623; this task changes their field properties, rather than inventing existing controls to modify. IMP-43 adds the new timestamp assignments.';
 eight.configurationRows=eight.configurationRows.map(([n,v])=>n==='Reviewer controls'?[n,'Set native IsReadOnly=TRUE on FirstReviewBy, SecondReviewBy, DaofFirstReview and DofSecondReview on their declaring Inspection Abstract object. The exported package has only Inspection as its concrete child.']:[n,v]);
 for(const m of eight.modifications)if(actors.has(m.field)){m.businessChange='Change native IsReadOnly from FALSE to TRUE on the existing declaring field. Its existing workflow population is supporting product behavior, not new stamping work.';m.change=m.businessChange;}
 eight.deliverable='Four new inspection fields and four existing reviewer stamp fields made read-only.';
 const sixteen=byId.get('IMP-16');sixteen.category='Inspection fields and entry forms';
 sixteen.objective='Configure the complete Internal/External inspection entry screen and single report upload.';
 sixteen.scope='Add the single-value File field ExternalInspectionReport and new result/date controls to Insp_EquipInspection_Detail (E1623). Create the proposed Inspection Entry Source Mode view action: Internal shows checklist execution; External hides the Question Answer grid and shows section External Inspection Report containing only its File field. Update the existing Hide Checklist if Checklist Type is empty action so it cannot re-show InspecChecklist for External. Hide the specified Finding/scoring controls, and configure evidence editability by the existing stage containers. IMP-43 implements the forward-transition report check.';
 sixteen.configurationRows.push(
  ['Existing source selector: E1623','Modify Hide Checklist if Checklist Type is empty: show InspecChecklist only when a type is selected and its source is Internal or blank legacy Internal. Hide/nonrequire it for External.'],
  ['New source-mode view action','Create Inspection Entry Source Mode on E1623, evaluated on page load and TypeOfInspec change. Use existing stage containers Draft/InspectioninProgress/ActionsPending/SecondReview/Completed; hide QuestionAnswersGridSection_Config and any compiled question-answer presentation for External, replacing it with the single-file External Inspection Report section.'],
  ['File validation ownership','Set the control for editing during Draft/InspectioninProgress and read-only review/accepted display. Native upload/completion/access settings are G07 inputs. IMP-43 adds the server-side report gate in E2704 and the approval rechecks; the view does not make ordinary Save require the file.']
 );
 sixteen.deliverable='Complete inspection entry layout with source-dependent execution/report sections and evidence controls.';
 sixteen.accept=sixteen.accept.map(s=>s.startsWith('External advancement')?'The single-value File field exposes the uploaded file to the IMP-43 workflow checks; the transition-blocking behavior is owned by IMP-43.':s);
 const answerForm=byId.get('IMP-20');
 answerForm.scope='On CLF_QuestionAnswer_Detail (E904), hide the existing FindingsGridSection and add a read-only ResponseOutcome field control. Configure the proposed Inspection Response State view rule for typed answers, Comments and the existing Upload images attachment section to be read-only when the source Inspection is in either review stage or completed. G07 must supply the actual supported parent-stage/control-editability binding; IMP-47 owns record/file permissions. Existing Show/hide Answer Fields already chooses the matching typed answer and is reuse.';
 answerForm.configurationRows=[
  ['Existing Finding grid','Set FindingsGridSection visibility off for Inspection responses.'],
  ['New calculated result control','Add a field control for ResponseOutcome with Readonly=TRUE to the Answer Details section.'],
  ['Proposed Inspection Response State view rule','On E904 use the actual G07 ChecklistAnswer-to-Inspection stage binding to configure typed answer, Comments and existing Upload images control editability. Working/returned responses are editable and review/completed responses read-only. Do not invent a native SetReadOnly action class or assume a field path not supported by the supplied binding.'],
  ['Completion conditions','IMP-35 owns the changed calculated missing-answer/comment/action checks; IMP-43 consumes them before workflow advancement. This form task creates no duplicate save-validation operation.']
 ];answerForm.inputs=[...new Set([...answerForm.inputs,'G07'])];
 const validation=byId.get('IMP-24');validation.role='Consultant';
 validation.scope='Modify existing Question Abstract handler E629 and add the explicitly proposed Inspection authoring guards described below. Correct its N/A-comment condition and its single-choice-only cleanup of ActReqChoices and ComReqChoices. Create Validate Inspection Checklist for section/fixed-setting rules and Validate Inspection Question for contribution, dependency and choice-membership rules. Bind them to the specified authoring/save and pre-publication paths only through the actual supported G02 hooks. These proposed guards are additions, not product components called H01.';
 validation.configurationRows.push(
  ['E629 multiple-choice cleanup','The existing ActReqChoices and ComReqChoices clearing conditions use AnswerType.Value <> Choice. For Inspection questions, change the invalid-type test to AND(AnswerType.Value <> Choice, AnswerType.Value <> Choices), keeping each out-of-list test. A valid Choices question must retain its selections; unsupported types still clear them. Native formula syntax/scoping is supplied under G02.'],
  ['Proposed Validate Inspection Checklist','On CLF_ChecklistObject, configure the named scoped guard to enforce EnableSections TRUE/EnableScoring FALSE, at least one meaningful named section and the section/name requirements before publication. G02 must identify the actual supported create/update and pre-publish entry points; this is not a claimed existing handler.'],
  ['Proposed Validate Inspection Question','On CLF_QuestObject, configure the named guard for AnswerRequired TRUE, contribution only for Choice/Choices, same-list action/comment/visibility selections, and same-checklist one-level acyclic dependencies. Run membership/dependency checks before a cleanup would silently remove invalid selections. G02 supplies the actual create/update/pre-publish bindings and Inspection predicate.'],
  ['Event evidence','E629 is named Actions on Create & Update but exports raw ActionType=2. Its name does not prove create/publish coverage. Keep unresolved event mapping and pre-publish invocation explicit under G02 rather than assuming the existing handler covers every path.']
 );
 validation.rationale='This assignment combines two small existing-condition fixes with cross-record dependency/membership guards and supported pre-publication entry points. A Consultant owns this distinct authoring validation outcome; a separate Senior Consultant reviews it.';
 validation.accept.push('Saving a valid multiple-choice question retains its ActReqChoices and ComReqChoices selections; switching to an unsupported answer type clears them through the scoped cleanup.');
 const thirty=byId.get('IMP-30');
 thirty.scope='Modify E2628, Throw Error if Saved at Location that Isn’t Bottom, and the equipment conditions on E1623. Replace its COUNT(Location.ChildLocations)>0 rejection and RMD-only message with G04’s approved establishment rule. Add the proposed Inspection Equipment Entry view action and Validate Inspection Equipment guard on Insp_EquipInspectionObject for the specified disabled/Text/Lookup rules and context-change restriction. G02 supplies the supported save hook and current-record/prior-value binding; the guard is an explicit proposed addition.';
 thirty.configurationRows.push(['Proposed Inspection Equipment Entry / Validate Inspection Equipment','On E1623 show/require EquipmentTxt for enabled Text mode or Equipment for enabled Lookup; hide/clear the alternate field and both when disabled. On the named proposed save guard reject mismatched/missing enabled equipment and replacement of Location/equipment context once execution/action evidence exists. G02 supplies the native prior-value and guard-event binding; G05 is needed only before Lookup is enabled.']);
 const result=byId.get('IMP-34');
 result.scope='Create the proposed Classify Inspection Response Action Handler on CLF_QuestionAnswerObject to assign ResponseOutcome using the ordered D01 conditions. Limit it to ChecklistAnswer.SysteTypeHelper=Insp_EquipInspectionObject and run after existing E842/E883 visibility/default processing using G02’s supported create/update order. Watch Choice, Choices, Checkbox, Date, Float, Text, IsNA and IsVisible; result-only writes do not retrigger it. IMP-28 owns initialization during native generation and IMP-36 adds the overall-result integration after the response calculation exists.';
 result.configurationRows.push(['New named operation','Classify Inspection Response is a proposed Action Handler with no assigned GUID. Implement the existing five D01 branches and store the actual Response Outcome record, not its displayed name. G02 supplies expression/event ordering and generation callback support; E883 is an existing typed-answer handler, not an existing categorical-classification handler.']);
 result.inputs=['G02'];
 qa.scope='Modify the existing native calculations IsAnswerMiss, IsComMiss, IsActionMiss, IsFindingMiss and IsSubmitReady on CLF_QuestionAnswerObject for Inspection records only. Use ChecklistAnswer.SysteTypeHelper as the scope discriminator and the source expressions in the register as the fallback for other applications. The current IsAnswerMiss has no visibility/N/A exception, IsComMiss and IsActionMiss are single-choice-only, and IsSubmitReady includes IsFindingMiss. IMP-43 owns ExternalInspectionReport transition checks at Inspection level.';
 qa.configurationRows=qa.configurationRows.filter(([n])=>!['Number of Actions (NbActions)','External report transition check'].includes(n));
 qa.configurationRows.push(['Exact calculation edits','Wrap the changed branches in the Inspection discriminator. Exclude invisible/valid N/A from answer/action requirements; add negative and configured N/A comments; support selected Choices as well as Choice for ActReqChoices/ComReqChoices; return FALSE for IsFindingMiss and omit it from the Inspection readiness aggregate. COUNT(ActionPlans) remains the existing action count. Native expressions are G02 inputs.']);
 qa.configurationRows=qa.configurationRows.map(([n,v])=>n==='Is Submit Ready (IsSubmitReady)'?[n,'Aggregate only the applicable Inspection answer/comment/action checks. External report validation is assigned to the existing Inspection workflow actions in IMP-43.']:[n,v]);
 qa.prereqs=qa.prereqs.filter(id=>id!=='IMP-16');qa.inputs=qa.inputs.filter(id=>id!=='G07');
 qa.accept=qa.accept.map(s=>s.startsWith('A missing applicable')?'The Inspection readiness calculation reports missing applicable answers, comments and linked actions; IMP-43 uses that result before workflow state changes.':s);
 const overall=byId.get('IMP-36');
 overall.scope='Create the proposed Evaluate Inspection Overall Outcome operation on Insp_EquipInspectionObject using D01’s ordered conditions. After IMP-34 creates Classify Inspection Response, add the corresponding overall-result update step there; before final submission/approval IMP-43 invokes the same defined result logic. G02 must supply the native related-record write/invocation binding. Update only unaccepted inspections; the rule returns Not Assessed for External or not-required inspections and otherwise uses the completed response results.';
 overall.configurationRows.push(['Named implementation','Evaluate Inspection Overall Outcome is a proposed native handler/operation, not an exported existing component called H03. Configure the actual catalogue record assignments and bind its related-record update through the supported G02 mechanism. This task owns overall-result integration; IMP-34 owns response classification.']);
 const follow=byId.get('IMP-44');
 follow.scope='Create the proposed Refresh Inspection Action Classification operation on Insp_EquipInspectionObject, assigning D02 from native completion and the current distinct CheckListAnsAct-related actions. Add the required action-created/completed/permitted-reopen integration on CLF_InsActionPlanObject through G02’s supported related-record update mechanism. IMP-42 and IMP-43 call this operation after successful completion. Its native invocation/accepted-record write binding is unresolved under G02; no exported handler named H07 is claimed.';
 follow.configurationRows.push(['Named proposed operation','Refresh Inspection Action Classification updates only ActionClassification on an accepted inspection. G02 must supply the exact native related-update/authorization binding for action events; assign no new scheduler or event-store object.']);
 const notifications=byId.get('IMP-41');
 notifications.scope='Modify E477 Send Assignment Notification Upon Completion of Inspection by adding AlBeenCorrected=FALSE to its existing release-change condition. For Return messages, use the existing template [Summit] Inspection - Rejected (E2662) and the actual review-assignment/distribution templates referenced in E2704/E2702/E2706. Their message bodies are not exported: G04 must supply them and the approved text before a content difference is assigned. Existing notify steps already follow their transitions and use the native Person Responsible subject; do not assign a duplicate dispatch or timing change.';
 notifications.configurationRows=[
  ['E477 condition','Inside ISCHANGED(HelperReleaseAP) and HelperReleaseAP=TRUE, require AlBeenCorrected=FALSE before the existing notification step.'],
  ['E2662 Return template — content unresolved','The package exports the template identity but not its localized body. G04 supplies the actual body/definition and approved Return text. Update it only where needed to include the corresponding RevieweComments or RevieweComment1. Existing Return call sites are E2702/E2706; no absence of reason text is asserted from the missing body.'],
  ['Assignment/distribution template content — unresolved','E2704/E2702 use template E2313, INTELEX | Upcoming Task Reminder Notification; completion uses E1090, Inspection - Distribution List Notification. G04 supplies their actual bodies and approved messages. Configure only approved content/link differences; names alone do not prove that current messages are wrong.']
 ];
 const forty=byId.get('IMP-40');forty.scope=forty.scope.replace('Use the existing first/second review due-date expressions with the supplied positive day values. ','').replace('Enable review actions when their due dates have passed.','');
 forty.configurationRows=forty.configurationRows.filter(([n])=>!n.includes('due date'));
 forty.accept=forty.accept.filter(s=>!s.includes('Overdue review actions'));
 const reminders=byId.get('IMP-45');
 reminders.scope='Create the proposed native reminder configurations for Review stage E2691, Second Review stage E2695 and Action InProgress stage E2514 using G04’s actual cadence, recipients, native due/completion fields and supported reminder configuration binding. The export contains no reminder-rule records, so do not claim an existing rule to edit. No due-date lock was identified in the exported target operations; no speculative lock-removal step is assigned.';
 reminders.configurationRows=reminders.configurationRows.filter(([n])=>n!=='Overdue access');
 reminders.configurationRows.push(['Missing configuration binding','G04 supplies the supported native reminder definition/screen/record type, due/completion field bindings, cadence and recipients. Create the three task/stage configurations there, or update a same-purpose rule only if G04 actually identifies it. Native completion is the stop condition.']);
 const access=byId.get('IMP-47');
 access.configurationRows.push(['Current permission definitions — unresolved','The package exposes object audit flags and form restrictions but not a complete effective record/file permission matrix. G04/G07 must identify the actual native rule definitions and current rights on Inspection, Question Answer, Inspection Action Plan and ExternalInspectionReport. Apply only the SEC-02 differences to those identified rules. The two IsAuditEnabled FALSE-to-TRUE changes are independently verified.']);
 for(const id of ['IMP-42','IMP-43'])byId.get(id).prereqs.push('IMP-44');
 const workflow=byId.get('IMP-43');
 workflow.configurationRows=workflow.configurationRows.map(([n,v])=>[n,v.replace('then assign results and stamp SubmittedAt plus field-work CompletedBy/CompletedOn.','then apply the IMP-36 result logic and add SubmittedAt=NOW.').replace('Stamp FirstReviewBy/DaofFirstReview. ','').replace('Stamp SecondReviewBy/DofSecondReview. ','')]);
 workflow.configurationRows.push(['New report checks: E2704/E2702/E2706','In E2704 Complete Inspection add the ExternalInspectionReport completed/server-accessible upload check before any metadata/transition/complete step; bypass the internal Progress test for External. Add the same report-presence/accessibility recheck in the approved branches of E2702/E2706. Use G07’s actual File upload-state check. Ordinary Save and E2697 Draft continuation do not require the file.'],['Result/classification call ownership','Apply the result operation defined by IMP-36 before submission/final approval; call Refresh Inspection Action Classification from IMP-44 after successful completion. Add SubmittedAt in E2704 and AcceptedAt at each final-complete branch. Existing CompletedBy/CompletedOn and reviewer actor/date assignments already exist and are not new work.']);
 workflow.scope='Modify existing actions E2697, E2704, E2702 and E2706 for External continuation/report checks, new SubmittedAt/AcceptedAt assignments, IMP-36 categorical-result integration, nonblank rejection checks and removal of open-Finding closure blocking. Use the existing native complete step and remove its redundant direct workflow-pointer clearing. Invoke the classification operation defined by IMP-44 after completion. Existing field-work/reviewer stamping and stage-specific review form rules are reuse, not new configuration.';
 // Keep source evidence next to the newly identified existing-element edits.
 function native(id,e,element,before,change){
  const source=baseline.items.find(x=>x.evidenceId===e);if(!source)throw Error('Missing review evidence '+e);
  byId.get(id).modifications.push({kind:source.item.ObjectName,element,evidence:e,before,change,basis:'Package-backed revised-planner review',businessElement:element,businessBefore:before,businessChange:change});
 }
 native('IMP-03','E972','CLF_Quest_Detail / Show/Hide Choice List / Choices branch','The Choices branch hides Choice_Requirement_Grid_NoFindings, whose columns include ComReqChoices and ActReqChoices.','For the Inspection scope show this existing requirement grid for Choice and Choices; hide it for non-choice answers.');
 native('IMP-05','E1565','Insp_Type_Detail / reviewer and equipment view actions','Enabled reviewer actions route Role through New/Existing; disabled branches clear review/equipment option values.','Configure maintained-role routing and the precise hide/retain changes listed in the Required configuration table; remove ordinary ad hoc-role controls.');
 native('IMP-16','E1623','Insp_EquipInspection_Detail / Hide Checklist if Checklist Type is empty','The current view action shows InspecChecklist whenever TypeOfInspec is nonblank; it has no Internal/External condition.','Add the source condition so External never re-shows the checklist selector. Add the named External-only single-file section and source-mode view action.');
 // Remap every active reference, including merged field/form/copy assignments.
 const alias=id=>aliases.get(id)||id;
 function text(s){for(const [oldId,newId]of aliases)s=s.replaceAll(oldId,newId);return s.replace(/\s+\./g,'.').replace(/\s{2,}/g,' ').trim();}
 for(const t of tasks){
  t.prereqs=[...new Set(t.prereqs.filter(id=>id!=='IMP-21').map(alias))].filter(id=>id!==t.id);
  for(const key of ['scope','objective','deliverable','rationale','notes'])t[key]=text(t[key]);
  for(const key of ['steps','accept','refs'])t[key]=(t[key]||[]).map(text);
  t.configurationRows=t.configurationRows.map(r=>r.map(text));
  if(['IMP-42','IMP-47'].includes(t.id)){
   t.scope=t.scope.replaceAll('H07','Refresh Inspection Action Classification (IMP-44; H07 contract)');
   t.configurationRows=t.configurationRows.map(r=>r.map(s=>s.replaceAll('H07','Refresh Inspection Action Classification (IMP-44; H07 contract)')));
  }
  t.inputs=[...new Set(t.inputs)];
  for(const m of t.modifications){m.businessChange=text(m.businessChange);if(m.field==='IsSubmitReady')m.businessChange='Change the Inspection calculation to aggregate its scoped answer/comment/action checks and exclude IsFindingMiss. External report checks are owned by IMP-43 on Inspection, not Question Answer.';}
  t.reviewedAgainstRevisedSkill=true;
 }
 const incoming=new Set();for(const t of tasks)for(const id of t.prereqs){if(!tasks.some(t=>t.id===id))throw Error('Unknown reviewed prerequisite '+id);incoming.add(id);}
 const visiting=new Set(),done=new Set();function visit(id){if(visiting.has(id))throw Error('Reviewed task cycle '+id);if(done.has(id))return;visiting.add(id);tasks.find(t=>t.id===id).prereqs.forEach(visit);visiting.delete(id);done.add(id);}tasks.forEach(t=>visit(t.id));
 findings.push('E629 and the E972 requirement-grid visibility both require explicit multiple-choice edits; the prior plan covered response validation but missed authoring cleanup.');
 findings.push('E1623 already supplies review-stage controls/mandatory comments, native action counts already use COUNT(ActionPlans), and workflow actor/date stamps already exist. These are reuse.');
 findings.push('Program inputs, checklist inputs and client role memberships remain owned outside this plan; no data migration or administration tasks are restored.');
 findings.push('G02/G04/G07/G08 still block actual unsupported/native bindings, effective permission rules, missing template bodies and output definitions. New operations are labelled proposed; no tenant implementation is claimed.');
 return {aliases:Object.fromEntries(aliases),retired:Object.fromEntries(retired),fieldOwners:Object.fromEntries(fieldOwners),findings,previousTasks:42,tasks:tasks.length};
};
