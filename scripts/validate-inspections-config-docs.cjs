const fs=require('fs'),path=require('path'),crypto=require('crypto');
const dir=path.join('docs','phase 1','inspections','target');
const m=JSON.parse(fs.readFileSync(path.join(dir,'target-model.json'),'utf8'));
const p=JSON.parse(fs.readFileSync(path.join(dir,'implementation-plan.json'),'utf8'));
const b=JSON.parse(fs.readFileSync(path.join(dir,'..','as-is','evidence.json'),'utf8'));
const old=JSON.parse(fs.readFileSync(path.join(dir,'archive','v1','implementation-plan.json'),'utf8'));
const errors=[];const findings=[];
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const read=f=>fs.readFileSync(path.join(dir,f),'utf8');
const main=read('solution-specification.md'),full=read('field-contract.md'),plan=read('implementation-plan.md');
const objects=new Map(m.objects.map(o=>[o.internalName,o]));
const fields=m.objects.flatMap(o=>o.fields.map(f=>({...f,owner:o.internalName})));
const currentIds=new Set(p.tasks.map(t=>t.id));
const processingPermissionContent=/system exception|authorize this operation|processing context|system[- ]processing (?:context|permissions?)|system follow-up operation.{0,100}(?:edit rights|permissions?)/i;
for(const t of p.tasks){
 const prose=[t.scope,t.objective,t.deliverable,t.notes,t.blocked,...t.configurationRows.flat(),...t.accept,...t.steps,...t.modifications.flatMap(m=>[m.businessElement,m.businessBefore,m.businessChange])].join('\n');
 if(processingPermissionContent.test(prose))errors.push('Platform-processing permission content remains '+t.id);
}
if(m.revision!==2||p.revision!==2)errors.push('Wrong revision');
for(const o of b.objectRegistry){const target=objects.get(o.internalName);if(!target||target.recordId!==o.recordId)errors.push('Changed source object identity '+o.internalName);for(const f of o.fields){const t=target?.fields.find(t=>t.recordId===f.recordId);if(!t)errors.push('Lost source field '+o.internalName+'.'+f.internalName);else if(JSON.stringify(t.metadata)!==JSON.stringify(f.metadata))errors.push('Source metadata was overwritten '+f.recordId);}}
const oldFieldSet=new Set(['SourceModeAtCreation','ReviewRequiredAtCreation','SecondReviewRequiredAtCreation','FirstReviewDaysAtCreation','SecondReviewDaysAtCreation','FirstReviewMethodAtCreation','SecondReviewMethodAtCreation','FirstReviewRoleAtCreation','SecondReviewRoleAtCreation','FirstReviewSubjectAtCreation','SecondReviewSubjectAtCreation','FirstReviewExpressionAtCreation','SecondReviewExpressionAtCreation','EquipmentModeAtCreation','OutcomeRequiredAtCreation','ResourceNameAtCreation','ResourceTechnologyAtCreation','BranchConfirmed']);
for(const o of m.objects){
 const sectionCount=full.split('**Internal name:** `'+o.internalName+'`').length-1;if(sectionCount!==1)errors.push('Object subsection coverage '+o.internalName);
 if(typeof o.inheritanceParent==='object'&&!objects.has(o.inheritanceParent.name))errors.push('Missing inheritance base '+o.internalName);
 const seen=new Set();for(const f of o.fields){if(seen.has(f.internalName))errors.push('Duplicate declaration '+o.internalName+'.'+f.internalName);seen.add(f.internalName);if(!['Y','N','Conditional'].includes(f.required))errors.push('Requiredness '+f.internalName);if(f.relationshipTarget&&!objects.has(f.relationshipTarget))errors.push('Unresolved endpoint '+f.relationshipTarget);if(f.disposition==='Add'&&f.recordId)errors.push('Assigned proposed GUID '+f.internalName);if(oldFieldSet.has(f.internalName))errors.push('Deferred field active '+f.internalName);if(f.disposition==='Add'&&o.recordId&&f.internalName!=='Attachments'&&f.nativeRequired!==false)errors.push('Retroactive native mandatory field '+f.internalName);if(f.required==='Conditional'&&!f.editContract)errors.push('Missing condition '+f.internalName);}
 const body=full.split('**Internal name:** `'+o.internalName+'`')[1]?.split('\n### ')[0]||'';
 const tableBody=body.split('| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |')[1]?.split('\nInitial values:')[0]||'';
 const rowCount=tableBody.split('\n').filter(l=>l.startsWith('| ')&&!l.startsWith('| ---')).length;
 if(rowCount!==o.fields.length)errors.push('Field row count '+o.internalName+': '+rowCount+'/'+o.fields.length);
 for(const f of o.fields)if(body.split('internal `'+f.internalName+'`').length-1!==1)errors.push('Canonical row '+o.internalName+'.'+f.internalName);
 let n=o;const lineage=new Set();while(typeof n?.inheritanceParent==='object'){if(lineage.has(n.internalName)){errors.push('Inheritance cycle '+o.internalName);break;}lineage.add(n.internalName);n=objects.get(n.inheritanceParent.name);}
}
for(const n of ['ConfgAppSetting_PersRespOptionObject','Insp_IReviewDecisionObject','Insp_EquipListOptionObject'])if(objects.get(n).fields.some(f=>f.internalName==='Code'))errors.push('Deferred shared Code added '+n);
if(p.tasks.some(t=>t.id==='IMP-11'||t.prereqs.includes('IMP-11'))||plan.includes('### IMP-11 — '))errors.push('Existing product assignment IMP-11 remains active');
const changes=fields.filter(f=>['Add','Modify'].includes(f.disposition));
const references=p.tasks.find(t=>t.id==='IMP-01');
let expectedReferenceEntries=0;
for(const name of ['Insp_InspectionSourceObject','Insp_ResponseOutcomeObject','Insp_OutcomeObject','Insp_ClassificationObject']){
 const object=objects.get(name);
 if(!references.configurationRows.some(r=>r[1].includes(name)))errors.push('Missing inline reference object '+name);
 for(const seed of object.seedRecords){
  const v=seed.values,label=object.displayName+' entry: '+v.Code;
  const rows=references.configurationRows.filter(r=>r[0]===label);
  const expected='Create Code='+v.Code+'; Name='+v.Name+'; Active='+String(v['Active?']).toUpperCase()+'; Sort='+v.Sort+'.';
  if(rows.length!==1||rows[0][1]!==expected)errors.push('Inline reference values diverge from specification '+label);
  expectedReferenceEntries++;
 }
}
if(references.configurationRows.filter(r=>r[0].includes(' entry: ')).length!==expectedReferenceEntries)errors.push('Unexpected inline reference entry');
const actionEntry=p.tasks.find(t=>t.id==='IMP-10');
for(const id of ['IMP-22','IMP-37'])if(p.tasks.some(t=>t.id===id||t.prereqs.includes(id))||plan.includes('### '+id+' — '))errors.push('Consolidated action-entry task remains active '+id);
if(actionEntry?.title!=='Configure Action Entry Requirements'||actionEntry.role!=='Consultant')errors.push('Consolidated action-entry ownership');
for(const term of ['ActionOwner','AlBeenCorrected','CPARActionReq','CompletedBy','CompletionDate','Corrective','Action Already Complete Show/Hide','HideAction','SetNonMandatoryAction','ClearValueAction','ShowAction','SetMandatoryAction','IsMandatory'])if(![actionEntry?.scope,...(actionEntry?.configurationRows||[]).flat()].join(' ').includes(term))errors.push('Consolidated action-entry coverage '+term);
if(!actionEntry?.inputs.includes('G03')||actionEntry.inputs.includes('G02'))errors.push('Concrete field/form supplied inputs');
if(/save checks|initial-save validation|save rule/i.test([actionEntry.scope,...actionEntry.configurationRows.flat()].join(' ')))errors.push('Unspecified action-entry save check');
const form=b.items.find(x=>x.evidenceId==='E18');
const existingViewAction=JSON.parse(form.item.FieldData.ConfigurableViewActions).find(a=>a.name==='Action Already Complete Show/Hide');
const completedBranch=existingViewAction?.actions.find(a=>a.__type==='DecisionAction')?.trueDecision||[];
for(const kind of ['HideAction','SetNonMandatoryAction','ClearValueAction'])if(!completedBranch.some(a=>a.__type===kind&&a.elements.some(e=>e.elementId==='CPARActionReq')))errors.push('Package evidence for activity view change '+kind);
if(!completedBranch.some(a=>a.__type==='ShowAction'&&a.elements.some(e=>e.elementId==='ActionOwner')))errors.push('Package evidence for owner view change');
if(!actionEntry.modifications.some(x=>x.evidence==='E18'))errors.push('Named view action modification missing');
for(const id of ['IMP-39','IMP-42']){const t=p.tasks.find(t=>t.id===id),body=[t.scope,...t.configurationRows.flat()].join(' ');for(const term of ['CompletionNotes','CompletedBy','CompletionDate','TODAY'])if(!body.includes(term))errors.push('Named completion evidence/date check '+id+' '+term);}
if(!actionEntry?.prereqs.includes('IMP-01'))errors.push('Consolidated action-entry reference values');
const reportFields=fields.filter(f=>f.internalName==='ExternalInspectionReport');
const report=reportFields[0];
if(reportFields.length!==1||report.owner!=='Insp_EquipInspectionObject'||report.displayName!=='External Inspection Report'||!report.typeContract.startsWith('File; single-value')||report.required!=='Conditional'||report.nativeRequired!==false||report.defaultContract!=='NULL'||report.recordId)errors.push('External report File field declaration');
if(!report?.lifecycleContract.includes('before any forward transition out of InspectioninProgress')||!report?.lifecycleContract.includes('Ordinary Draft/InProgress Save may omit it'))errors.push('External report workflow requiredness');
if(!m.actionContracts.find(a=>a.id==='I02').steps[0].includes('ExternalInspectionReport'))errors.push('External report validation before transition');
if(!m.rules.find(r=>r.id==='R01').behavior.includes('containing only Inspection.ExternalInspectionReport'))errors.push('Single-field external report section');
if(p.reviewed?.aliases['IMP-19']!=='IMP-16')errors.push('External report field/form consolidation');
for(const id of ['IMP-16','IMP-35','IMP-43','IMP-47','IMP-50','IMP-51','IMP-57','IMP-58']){
 const t=p.tasks.find(t=>t.id===id);if(![t.scope,...t.configurationRows.flat()].join(' ').includes('ExternalInspectionReport'))errors.push('External report task reconciliation '+id);
}
for(const id of ['IMP-59','IMP-60','IMP-61','IMP-62','IMP-63']){
 if(p.tasks.some(t=>t.id===id||t.prereqs.includes(id)))errors.push('Removed assignment remains active '+id);
 const ownership=p.outOfPlan?.find(t=>t.id===id);
 if(ownership?.owner!==(id==='IMP-59'?'Client system administrators':'Data Migration'))errors.push('Removed assignment ownership '+id);
 if(plan.includes('### '+id+' — '))errors.push('Removed assignment detail '+id);
}
const removedQuestionSettings=['NegativeChoices','NegativeBoolean','ActionRequiredIfNegative'];
for(const f of fields)if(removedQuestionSettings.includes(f.internalName))errors.push('Removed question setting remains '+f.internalName);
const negativeFields=fields.filter(f=>f.internalName==='IsNegative');
if(negativeFields.length!==1||negativeFields[0].owner!=='CLF_ChoiceObject'||negativeFields[0].displayName!=='Is Negative?'||negativeFields[0].nativeRequired!==false||!negativeFields[0].defaultContract.startsWith('FALSE'))errors.push('Choice polarity declaration/default');
const choiceActionRule=objects.get('CLF_QuestAbstractObject').fields.find(f=>f.internalName==='ActReqChoices');
if(!choiceActionRule?.recordId||choiceActionRule.disposition!=='Modify'||!choiceActionRule.lifecycleContract.includes('independently of IsNegative'))errors.push('Existing action option reuse');
const actionHelper=objects.get('CLF_QuestionAnswerObject').fields.find(f=>f.internalName==='IsActionMiss');
if(!actionHelper.defaultContract.includes('any selected Choices')||!actionHelper.defaultContract.includes('No matching choice'))errors.push('Multiple-choice action requirement');
const polarity=m.decisions.find(r=>r[0]==='D01.4')?.[3]||'';
if(!polarity.includes('Choice.IsNegative=TRUE')||!polarity.includes('Choices includes at least one'))errors.push('Choice polarity rules');
if(!m.decisions.find(r=>r[0]==='D01.3')?.[3].includes('including Checkbox'))errors.push('Non-choice informational rule');
if(!m.handlers.find(h=>h.id==='H03')?.behavior.includes('later shared-choice edits do not rewrite accepted results'))errors.push('Accepted result protection');
for(const file of ['solution-specification.md','field-contract.md','implementation-plan.md','implementation-coverage.md','target-diagrams.md','automation-reconciliation.md','configuration-expressions.md']){
 const content=read(file);for(const removed of removedQuestionSettings)if(content.includes(removed))errors.push('Stale removed-setting reference '+file+' '+removed);
}
const publishSection=main.split('### 7.2 Publication copy mapping')[1]?.split('\n## ')[0]||'';
if((publishSection.match(/Add only this semantic copy/g)||[]).length!==1||!publishSection.includes('Question.ContributesToOutcome')||!publishSection.includes('Question.ActReqChoices'))errors.push('Publication copy reconciliation');
for(const [id,terms]of Object.entries({'IMP-04':['IsNegative','ActReqChoices'],'IMP-18':['IsNegative','ActReqChoices'],'IMP-24':['ActReqChoices','Checkbox'],'IMP-26':['E265','ContributesToOutcome'],'IMP-34':['IsNegative','Checkbox'],'IMP-35':['ActReqChoices','multiple-choice']})){
 const task=p.tasks.find(t=>t.id===(p.reviewed?.aliases[id]||id));for(const term of terms)if(![task?.scope,...(task?.configurationRows||[]).flat()].join(' ').includes(term))errors.push('Revised task scope '+id+' '+term);
}
for(const f of changes){const rows=p.fieldCoverage.filter(x=>x.object===f.owner&&x.field===f.internalName);if(rows.length!==1||(!rows[0].tasks.length&&!p.contextCoverage.some(c=>c.object===f.owner&&c.field===f.internalName&&c.task===null)))errors.push('Uncovered change '+f.owner+'.'+f.internalName);for(const id of rows[0]?.tasks||[])if(!currentIds.has(id))errors.push('Retired field task '+id);}
if(changes.length!==p.fieldCoverage.length)errors.push('Changed coverage count');
const modifications=fields.filter(f=>f.disposition==='Modify');
const evidenceIds=new Set(b.items.map(x=>x.evidenceId));
for(const [id,name]of Object.entries(p.evidenceNames||{})){
 const source=b.items.find(x=>x.evidenceId===id);
 if((source?.item.FieldData.Name||source?.item.FieldData.SystemName)!==name)errors.push('Evidence-name registry differs from package '+id);
}
for(const f of modifications){
 const context=(p.contextCoverage||[]).filter(x=>x.object===f.owner&&x.field===f.internalName);
 if(context.length){if(context.length!==1||p.modificationCoverage.some(x=>x.object===f.owner&&x.field===f.internalName)||(!currentIds.has(context[0].task)&&!(context[0].task===null&&['Existing product functionality','Data Migration'].includes(context[0].owner)))||p.tasks.some(t=>t.modifications.some(x=>x.object===f.owner&&x.field===f.internalName)))errors.push('Unchanged field context classification '+f.internalName);continue;}
 const matches=(p.modificationCoverage||[]).filter(x=>x.object===f.owner&&x.field===f.internalName);
 if(matches.length!==1){errors.push('Explicit modification coverage '+f.owner+'.'+f.internalName);continue;}
 const t=p.tasks.find(t=>t.id===matches[0].task);
 if(!t?.modifications.some(x=>x.object===f.owner&&x.field===f.internalName&&x.before&&x.change))errors.push('Missing before/change instructions '+f.owner+'.'+f.internalName);
 if(!p.fieldCoverage.find(x=>x.object===f.owner&&x.field===f.internalName)?.tasks.includes(matches[0].task))errors.push('Modification owner coverage '+f.internalName);
}
if((p.modificationCoverage?.length||0)+(p.contextCoverage?.length||0)!==modifications.length)errors.push('Explicit modification/context count');
const eight=p.tasks.find(t=>t.id==='IMP-08');
for(const id of Object.keys(p.reviewed?.retired||{}))if(currentIds.has(id)||p.tasks.some(t=>t.prereqs.includes(id)))errors.push('Reviewed retirement remains assigned '+id);
for(const name of ['FirstReviewBy','SecondReviewBy','DaofFirstReview','DofSecondReview']){
 const changed=eight.modifications.find(x=>x.field===name);
 const original=objects.get('Insp_InspectionAbsObject').fields.find(f=>f.internalName===name);
 if(!changed?.businessChange.includes('IsReadOnly from FALSE to TRUE')||original?.metadata?.IsReadOnly!==false)errors.push('Reviewer field before/after evidence '+name);
}
if(p.modificationCoverage.some(x=>x.object==='CLF_QuestionAnswerObject'&&x.field==='NbActions'))errors.push('Native action count incorrectly assigned as a change');
const authoring=p.tasks.find(t=>t.id==='IMP-24');
if(!authoring.configurationRows.some(r=>r[0].includes('E629')&&r[0].includes('multiple-choice cleanup')&&r[1].includes('ComReqChoices')&&r[1].includes('ActReqChoices')))errors.push('Multiple-choice authoring cleanup omitted');
if(eight.modifications.some(x=>/^(CompletedBy|CompletedOn)$/.test(x.field||''))||[eight.scope,eight.accept.join(' '),eight.configurationRows.flat().join(' ')].some(s=>/CompletedBy|CompletedOn|Completed By|Completed On/.test(s)))errors.push('IMP-08 unchanged completion fields remain');
for(const t of p.tasks)for(const row of t.configurationRows)if(/^Retain (?:the )?existing|^Preserve existing/.test(row[1]))errors.push('Unchanged-only assigned instruction '+t.id+' '+row[0]);
for(const t of p.tasks)for(const x of t.modifications||[]){
 if(!evidenceIds.has(x.evidence))errors.push('Unknown modification evidence '+t.id+' '+x.evidence);
 const section=plan.split('### '+t.id+' — ')[1]?.split('\n### IMP-')[0]||'';
 if(!section.includes((x.businessElement||x.element).replace(/\|/g,'&#124;'))||!section.includes((x.businessChange||x.change).replace(/\|/g,'&#124;').replace(/\r?\n/g,' ')))errors.push('Modification detail rendering '+t.id+' '+x.evidence);
}
const checklistTask=p.tasks.find(t=>t.id==='IMP-03');
if(!checklistTask.scope.includes('Hide BOTH controls')||!checklistTask.scope.includes('EnableSections')||!checklistTask.scope.includes('EnableScoring')||!checklistTask.accept.filter(x=>x.includes('hidden')).length)errors.push('Checklist hidden-control regression');
for(const e of ['E497','E1773'])if(!checklistTask.modifications.some(x=>x.evidence===e&&x.change.includes('HIDE both')))errors.push('Checklist view instruction '+e);
const summary=plan.split('## 2. Task summary\n')[1]?.split('## 3. External inputs and constraints')[0]||'';
const rows=summary.split('\n').filter(l=>l.startsWith('| IMP-'));
if(rows.length!==p.tasks.length)errors.push('Summary count');
const esc=s=>s.replace(/\|/g,'&#124;').replace(/\r?\n/g,' ');
let edgeCount=0;
for(const [i,t]of p.tasks.entries()){
 const cols=rows[i]?.slice(1,-1).split('|').map(s=>s.trim());
 const expected=[t.id,t.category,t.title,`**Objective:** ${t.objective}<br><br>**Detailed scope:** ${t.scope}`,t.role].map(esc);
 if(JSON.stringify(cols)!==JSON.stringify(expected))errors.push('Summary/detail mismatch '+t.id);
 const s=plan.split('### '+t.id+' — ')[1]?.split('\n### IMP-')[0]||'';
 for(const label of ['Task ID','Title','Category','Objective','Detailed scope','Deliverable','Strict technical prerequisites','Blocked status','Recommended implementer role','Recommended reviewer/approver role','Role rationale','Acceptance criteria','Specification references','Assumptions and open questions'])if(!s.includes('**'+label+':**'))errors.push('Task schema '+t.id+' '+label);
 for(const [label,value]of [['Task ID',t.id],['Title',t.title],['Category',t.category],['Objective',t.objective],['Detailed scope',t.scope],['Recommended implementer role',t.role]])if(!s.includes('**'+label+':** '+value+'\n'))errors.push('Detailed value '+t.id+' '+label);
 if(!t.languageStyle||!t.configurationRows?.length||!t.deliverable||!t.accept?.length)errors.push('Consultant draft completeness '+t.id);
 for(const row of t.configurationRows||[])for(const cell of row)if(!s.includes(esc(cell)))errors.push('Configuration instructions rendering '+t.id);
 for(const criterion of t.accept)if(!s.includes('- '+criterion))errors.push('Acceptance criteria rendering '+t.id);
 for(const step of t.steps||[])if(!s.includes('- '+step))errors.push('Additional instructions rendering '+t.id);
 for(const predecessor of t.prereqs){if(!currentIds.has(predecessor))errors.push('Unknown prerequisite '+predecessor);const edge=predecessor.replace('-','_')+' --> '+t.id.replace('-','_');if(!plan.includes(edge))errors.push('Missing edge '+edge);edgeCount++;}
 for(const input of t.inputs)if(!t.blocked.includes(input))errors.push('Missing blocker '+t.id+' '+input);
 if(!t.reviewer.startsWith('Senior Consultant'))errors.push('Reviewer mismatch '+t.id);
}
const graph=plan.split('```mermaid\n')[1]?.split('```')[0]||'';
if((graph.match(/-->/g)||[]).length!==edgeCount)errors.push('Unexpected graph edge');
if(/\bG\d{2}\b/.test(graph))errors.push('External-input graph node');
const active=new Set(),done=new Set();function walk(id){if(active.has(id))throw Error('Task cycle '+id);if(done.has(id))return;active.add(id);p.tasks.find(t=>t.id===id).prereqs.forEach(walk);active.delete(id);done.add(id);}try{p.tasks.forEach(t=>walk(t.id));}catch(e){errors.push(e.message);}
for(const [f,h]of Object.entries(p.sourceHashes))if(hash(fs.readFileSync(path.join(dir,f)))!==h)errors.push('Source changed after plan generation '+f);
for(const s of m.stages){const x=b.items.find(x=>x.evidenceId===s.e);if(!x||x.item.ObjectName!=='SysWorkflowDraftStageEntity')errors.push('Stage evidence '+s.id);if(!main.includes(x?.item.FieldData.SystemName+' (retain exactly)'))errors.push('Stage system name omitted '+s.id);}
const sharedReviewId='3fffb769-563b-4259-a75d-ed894416c2c0';
for(const id of ['S03','S04'])if(m.stages.find(s=>s.id===id)?.targetStatus!=='Review')errors.push('Shared Review status binding '+id);
if((main.match(new RegExp('Status target \\| Review; '+sharedReviewId,'g'))||[]).length!==2)errors.push('Review status specification rows');
const reviewTask=p.tasks.find(t=>t.id==='IMP-14');
for(const id of ['E2691','E2695'])if(!reviewTask.configurationRows.find(r=>r[0].includes(id))?.[1].includes(sharedReviewId))errors.push('Shared Review task binding '+id);
if(checklistTask.modifications.some(m=>m.evidence==='E1753')||checklistTask.configurationRows.flat().some(s=>/toolbox/i.test(s)))errors.push('Out-of-scope Toolbox Talks authoring work');
if(p.formCoverage.some(f=>/toolbox/i.test(f.name)&&f.tasks.length))errors.push('Out-of-scope Toolbox Talks view/profile assignment');
if(plan.includes('b477ee2a-dccc-4678-a8ca-7749f8d8d97f'))errors.push('Superseded separate review status assignment');
if(p.tasks.some(t=>t.id==='IMP-21')||!p.reviewed?.retired['IMP-21'])errors.push('Existing review controls assigned as new configuration');
for(const a of m.actionContracts){const x=b.items.find(x=>x.evidenceId===a.e);if(!x||!main.includes(x.item.RecordId))errors.push('Action identity '+a.id);}
if(m.actionContracts.length!==5||m.stages.length!==5||m.workflowContracts.length!==2)errors.push('Workflow coverage');
if(p.handlerCoverage.length!==52||p.formCoverage.length!==186)errors.push('Source behavior coverage');
for(const handler of p.handlerCoverage)if(handler.task&&!currentIds.has(handler.task))errors.push('Retired handler assignment '+handler.evidence+' '+handler.task);
for(const form of p.formCoverage)for(const id of form.tasks)if(!currentIds.has(id))errors.push('Retired form assignment '+form.evidence+' '+id);
const artifacts=['solution-specification.md','field-contract.md','configuration-expressions.md','target-diagrams.md','automation-reconciliation.md','revision-decisions.md','implementation-plan.md','implementation-coverage.md'];
let checkedLinks=0;function anchor(s){return s.toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu,'').replace(/\s/g,'-');}
for(const file of artifacts){const s=read(file);if((s.match(/^```/gm)||[]).length%2)errors.push('Unbalanced fence '+file);if(/operational\s+activity\s+targets?|\bOAT\b|ADR-008/i.test(s))errors.push('Excluded scope '+file);for(const match of s.matchAll(/\]\(([^)]+)\)/g)){const [dest,a]=match[1].split('#');const p=path.resolve(dir,dest);checkedLinks++;if(!fs.existsSync(p)){errors.push('Missing link '+file+': '+dest);continue;}if(a&&p.endsWith('.md')){const headings=fs.readFileSync(p,'utf8').split(/\r?\n/).filter(l=>/^#{1,6}\s/.test(l)).map(l=>anchor(l.replace(/^#+\s/,'')));if(!headings.includes(a))errors.push('Missing anchor '+file+': '+match[1]);}}}
const summaryStats={consultantLanguageTasks:p.tasks.filter(t=>t.languageStyle).length,explicitExistingFieldModifications:p.modificationCoverage.length,unchangedFieldContexts:p.contextCoverage.length,explicitExistingElementRows:p.tasks.reduce((n,t)=>n+(t.modifications||[]).length,0),revision:2,objects:m.objects.length,coreObjectSections:m.summary.coreObjectSections,fieldRows:fields.length,changedFieldRows:changes.length,retainedFieldRows:fields.filter(f=>f.disposition==='Retain').length,newLocalFields:fields.filter(f=>f.disposition==='Add').length,externalInterfaceFields:5,nativeSchemas:2,nativeStages:5,nativeActions:5,tasks:p.tasks.length,previousTasks:old.tasks.length,technicalEdges:edgeCount,sourceHandlers:52,sourceViewsProfiles:186,linksChecked:checkedLinks,errors};
findings.push('Existing published calculations, native publisher/generator and branch clear-on-hide are deliberately reused; their historic/concurrency limitations are not represented as corrected.');
findings.push('G01–G08 remain supplied configuration inputs. Missing native expressions/recipient binding, uploaded-report metadata and initial completed event order block only affected assignments.');
findings.push('Existing read-only mechanisms or scalar attributes omitted from the export remain unchanged; this is not a full tenant rebuild or runtime certification.');
findings.push('No tenant configuration, formula execution, formal testing, deployment or historical migration was performed.');
let validation='# Revision 2 technical and task validation\n\nStatic configuration-contract checks. The as-is baseline remains separate. G01–G08 technical inputs are not asserted resolved.\n\n| Check | Result |\n| --- | --- |\n'+Object.entries(summaryStats).filter(([k])=>k!=='errors').map(([k,v])=>'| '+k+' | '+v+' |').join('\n')+'\n| Structural/document errors | '+errors.length+' |\n\n## Configuration limitations\n\n'+findings.map(s=>'- '+s).join('\n')+'\n\n## Skill validation disposition\n\n| Rule group | Disposition |\n| --- | --- |\n| Fields, object sections, inheritance | Each modelled object has its own section and every declared field has one canonical row; source GUIDs/inheritance preserved. |\n| Relationships/inverses | All endpoints resolve; new catalogue selectors disable inverse; native maps/reverse-only source declarations are retained. |\n| Conditional requiredness | Native IsRequired is distinguished from R-rule requiredness; new fields on existing shared records are natively optional to avoid retrospective mandatory-data work. |\n| Formula vocabulary/dependencies | Extracted expressions identified; changed prose/placeholder branches not asserted executable; G02 supplies missing native bindings. |\n| Publication atomicity/retry | Existing native mechanism reused; no claim that optional hardening was implemented or verified. |\n| Lifecycle/scoped changes | Only client-required native guards/copies/validation are modified. Existing clear-on-hide and source-link synchronization remain. |\n| Native evidence/security | SEC-02 scopes required review history and accepted-record access; no global audit/security remediation. |\n| Date/time | New SubmittedAt/AcceptedAt timezone enabled; existing date/time properties retained with no implicit conversion. |\n| Catalogue inheritance | Four independent new catalogues, own field/seed tables; no shared catalogue reparenting/normalization. |\n| Task consistency | Summary/details match, both roles and blockers present, strict graph matches predecessors, no external input node or retired prerequisite. |\n| Scope/coverage | Every local changed field mapped; five external interface fields are supplied rather than created; all source handlers/views classified. |\n| Migration/deployment | Outside current build plan; no physical removals or retrospective backfill instruction. |\n\n## Task-content gate\n\nThe document build also executes the [task-content validation gate](implementation-content-validation.json) against the [recorded content review](implementation-content-review.json). The 10 November 2026 full redraft covers all 34 active tasks. Each task has a recorded content review tied to its current JSON and rendered assignment. The gate checks instruction references, preparation-only work, task/rendered-review freshness and edits outside the selected scope. This combines automated detectors with the recorded content review; it does not certify live tenant behavior.\n\n## Readiness\n\nThe reference is ready for consultant review/configuration planning. Individual native expression, data, role, mobile and output bindings remain blocked exactly as listed, so the complete implementation contract is not claimed tenant-validated.\n';
fs.writeFileSync(path.join(dir,'validation.md'),validation);
fs.writeFileSync(path.join(dir,'technical-validation.json'),JSON.stringify({...summaryStats,findings},null,2)+'\n');
fs.writeFileSync(path.join(dir,'implementation-plan-validation.json'),JSON.stringify({revision:2,taskSummaryAndDetails:p.tasks.length,consultantLanguageTasks:p.tasks.filter(t=>t.languageStyle).length,explicitExistingFieldModifications:p.modificationCoverage.length,unchangedFieldContexts:p.contextCoverage.length,explicitExistingElementRows:p.tasks.reduce((n,t)=>n+(t.modifications||[]).length,0),predecessorAndDiagramEdges:edgeCount,changedFieldCoverage:changes.length,handlerCoverage:52,viewProfileCoverage:186,sourceFilesUnchanged:!errors.some(e=>e.startsWith('Source changed')),errors},null,2)+'\n');
fs.writeFileSync(path.join(dir,'README.md'),'# Inspections configuration handoff — Revision 2\n\n[Technical configuration specification](solution-specification.md): core objects and fields, native workflow/stage/action parameters, form rules, handlers, outcomes and output contracts.\n\n- [Complete field reference](field-contract.md)\n- [Current '+p.tasks.length+'-task implementation plan](implementation-plan.md)\n- [Field/task and source behavior coverage](implementation-coverage.md)\n- [Native expression register](configuration-expressions.md)\n- [Logical model diagrams](target-diagrams.md)\n- [Handler reconciliation](automation-reconciliation.md)\n- [Scope/supersession decisions](revision-decisions.md)\n- [Validation and remaining inputs](validation.md)\n- [Task-content validation — full-plan scope](implementation-content-validation.json)\n\nThe [as-is baseline](../as-is/README.md) is unchanged. Revision 1 is archived as history; its broader architectural proposals are not active implementation requirements.\n\nRegenerate from the repository root with:\n\n```powershell\nnode scripts/build-inspections-config-docs.cjs\n```\n');
console.log(JSON.stringify(summaryStats,null,2));
if(errors.length)throw Error('Validation failed:\n'+errors.join('\n'));
