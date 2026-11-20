// Full authored review of the user's explicit Audit Trail exclusion.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const dir='docs/phase 2/incident management/osha-establishment-analytics',sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const bytes=fs.readFileSync(path.join(dir,'implementation-plan.json')),md=fs.readFileSync(path.join(dir,'implementation-plan.md'),'utf8');
const planSha='36b3b63ff766b79a9c14f8f21c4505a811c55159a5b8a4c155c0bb5bcdd8ee85',markdownSha='91fb9d1391066741b83e2d3780fafecfcb204da5aa90e2fb0008cb254ef5d4ff';
if(sha(bytes)!==planSha||sha(md)!==markdownSha)throw Error('The reviewed no-audit artifacts changed; rereview them.');
const p=JSON.parse(bytes),old=JSON.parse(fs.readFileSync(path.join(dir,'history/implementation-v7/implementation-plan.json'),'utf8')),review=JSON.parse(fs.readFileSync(path.join(dir,'history/implementation-v7/implementation-content-review.json'),'utf8'));
const {wording,convert}=require('./osha-no-audit-policy.cjs'),gate=require(path.join(process.env.USERPROFILE,'.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs'));
const notes={
 'IMP-01':'OSHA Establishment is created with IsAuditEnabled=FALSE. The scope no longer includes change history. All sixteen fields, Code uniqueness, Name display, active selections and Type/Size lookup values remain unchanged. Creation and acceptance instructions explicitly disable Audit Trail.',
 'IMP-02':'Hours Worked and Establishment Hours and Headcount are created with Audit Trail disabled, and existing Location Hours and Headcount retains its exported FALSE setting. Removed the proposed FALSE-to-TRUE audit modification; the four actual field changes remain. Helper corrections no longer depend on history. Native sums, headcounts, typed links and saved summary identity are unchanged.',
 'IMP-03':'Both incident-rate abstract and concrete Objects explicitly use IsAuditEnabled=FALSE. The helper correction no longer requires change history. All twenty-nine fields, four targets, Date/establishment key, inherited declarations and monthly population ownership remain unchanged.',
 'IMP-04':'The annual abstract Object is created with Audit Trail disabled. Five copied text/header corrections remain authorized but have no history requirement. All thirty-five fields, January 1 rule, identifiers, source metadata and destination settings dependency are preserved.',
 'IMP-05':'The concrete annual summary explicitly disables Audit Trail. ChangeReason remains an existing editable explanation field and is not replaced during refresh; no audit mechanism is required. Seventeen fields, annual overrides, case navigation/privacy and case-print prerequisites remain unchanged.',
 'IMP-06':'Access controls remain governed by the deferred IN-04 decision. Audit Trail is explicitly excluded from this task, without changing group requirements, protected fields, inactive assignments or referenced-establishment Code/deletion guards. Removing history does not grant new editing permissions.',
 'IMP-07':'The native GETRELATED handler and its Create/Update watch list, matched Date/GUID values, NULL branches and relinking are unchanged. Audit Trail is excluded; the handler needs no history Object or audit-dependent source reconstruction.',
 'IMP-08':'All twenty monthly outputs, source OII grain, day/flag conversion, employee/contractor hours separation and flat Lo/Ru equality are unchanged. Audit Trail is excluded; IN-06/IN-09 still supply establishment selection and supported complete-result refresh behavior.',
 'IMP-09':'Correct Annual OSHA Header remains restricted to the approved regulatory-administrator group and seven protected fields. Removed the instruction and acceptance criterion requiring old/new/who history. Authorized correction still leaves master data unchanged and does not permit ordinary users to edit protected fields. Annual measures, workforce arithmetic, fifteen initial copies, ChangeReason and output checks remain intact.',
 'IMP-10':'The source update-chain IDs, ordering, headcount hooks and old/new period recovery are unchanged. Audit Trail is excluded and cannot be assumed as the recovery mechanism. IN-09 must still supply supported notifications and current-result status, including native calculated-field behavior.',
 'IMP-11':'Four OSHA/Cal case-log outputs, privacy, cases/no-cases templates and required-information/readiness checks are unchanged. The task explicitly excludes Audit Trail; form support remains an IN-08 input rather than an inferred history capability.',
 'IMP-12':'Both 300A outputs preserve saved annual headers, G–M measures and workforce fields. Audit Trail is excluded; maintaining saved annual values does not require enabling audit on the summary or master Objects. Template and merge-support gaps remain.',
 'IMP-13':'The report still reuses the supplied OOTB actual-rate formulas and target comparisons with establishment scope. Audit Trail is excluded; no new stored-rate field, scaling rule or history requirement is introduced. IN-05/IN-11 remain unresolved.',
 'IMP-14':'The electronic export retains one annual measure set, identifiers, classification consistency and file formatting inputs. Audit Trail is excluded and is not an export prerequisite. Existing source dashboard evidence and lack of a direct-submission service remain explicit.',
 'IMP-15':'Actual identified feeds still use stable SourceEntryID, normal Hours Worked saves, independent dimensions and separate headcount mappings. Audit Trail is excluded; retry/correction follows the stable key and native relationships rather than an audit ledger. The key-only initializer remains excluded and IN-10 still supplies real feed details.'
};
const overrides={
 'IMP-01':{'steps.0':['Create the independent establishment Object and administration screens with IsAbstract FALSE, IsLocationBound FALSE and IsAuditEnabled FALSE.','OSHA Establishment Object settings and detail/inventory screens']},
 'IMP-02':{'steps.0':['Create Hours Worked and Establishment Hours and Headcount with IsAuditEnabled FALSE and retain FALSE on existing Location Hours and Headcount. Keep independent binding, no workflow, and the four screens.','New hours/summary Object settings and reused existing location-summary audit setting']},
 'IMP-03':{'steps.0':['Create the independent abstract and concrete incident-rate Objects without location binding, workflow or Audit Trail; declare inherited fields once.','Establishment Incident Rate Abstract and KPI Object settings, IsAuditEnabled FALSE']},
 'IMP-04':{
  'steps.0':['Create the independent annual abstract Object with IsAbstract TRUE, IsLocationBound FALSE, IsAuditEnabled FALSE and no workflow.','Establishment OSHA Abstract Object settings'],
  'configurationRows.9':['Retain copied LocationStreet metadata, initial establishment street value and protected authorized correction, without Audit Trail.','Establishment OSHA Abstract.LocationStreet and Correct Annual OSHA Header'],
  'configurationRows.22':['Retain copied LocationState metadata, initial establishment state value and protected authorized correction, without Audit Trail.','Establishment OSHA Abstract.LocationState and Correct Annual OSHA Header'],
  'configurationRows.28':['Retain copied LocationName metadata, initial establishment display name and protected authorized correction, without Audit Trail.','Establishment OSHA Abstract.LocationName and Correct Annual OSHA Header']
 },
 'IMP-05':{'configurationRows.6':['Retain optional ChangeReason with its exact source text metadata and authorized editor. Preserve correction explanations on refresh; require no audit history.','Establishment OSHA Summary.ChangeReason native field and edit controls']},
 'IMP-09':{'steps.5':['Allow only the approved regulatory-administrator group to explicitly correct LocationName, LocationStreet, LocationCity, LocationState, LocationPostal, SICCode and NAICSCode. Ordinary refresh does not invoke this operation; no Audit Trail is required.','Correct Annual OSHA Header authorized correction process']}
};
const reviews=p.tasks.map(t=>{
 const before=old.tasks.find(v=>v.id===t.id),previous=review.tasks.find(v=>v.id===t.id),units=new Map(gate.units(before).map(u=>[u.path,u.text]));
 const instructions=gate.units(t).map(u=>{
  const authored=overrides[t.id]?.[u.path];if(authored)return {path:u.path,requiredChange:authored[0],mechanism:authored[1]};
  let previousPath=u.path;if(t.id==='IMP-02'&&u.path.startsWith('modifications.'))previousPath='modifications.'+(Number(u.path.split('.')[1])+1);
  if(u.text!==wording(units.get(previousPath)))throw Error('Unreviewed task instruction '+t.id+' '+u.path);
  const item=previous.instructions.find(i=>i.path===previousPath);if(!item)throw Error('Missing prior instruction review');return {...convert(item),path:u.path};
 });
 return {id:t.id,taskHash:gate.hash(t),renderedTaskHash:gate.renderedHash(md,t.id),checks:{...previous.checks},evidenceReview:notes[t.id],languageReview:notes[t.id],meaningReview:notes[t.id],instructions};
});
fs.writeFileSync(path.join(dir,'implementation-content-review.json'),JSON.stringify({version:1,planRevision:8,specificationRevision:7,scope:'Full comparative author review of all fifteen tasks for the explicit Audit Trail exclusion, including corrected field lifecycles, Object settings, acceptance criteria and coverage.',reviewType:'Author content review; not independent approval or live configuration testing',reviewedPlanSha256:planSha,reviewedMarkdownSha256:markdownSha,tasks:reviews},null,2)+'\n');
console.log('Bound the complete no-audit author review to plan revision 8.');
