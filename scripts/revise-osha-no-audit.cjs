const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const dir='docs/phase 2/incident management/osha-establishment-analytics';
const read=n=>JSON.parse(fs.readFileSync(path.join(dir,n),'utf8'));
const write=(n,x)=>fs.writeFileSync(path.join(dir,n),JSON.stringify(x,null,2)+'\n');
for(const [folder,files]of [['history/v6',['technical-specification.md','target-model.json','external-input-resolution.json','revision-history.json','validation.json']],['history/implementation-v7',['implementation-plan.md','implementation-plan.json','implementation-content-review.json','implementation-plan-validation.json','implementation-content-validation.json']]]){
 fs.mkdirSync(path.join(dir,folder),{recursive:true});for(const n of files)if(!fs.existsSync(path.join(dir,folder,n)))fs.copyFileSync(path.join(dir,n),path.join(dir,folder,n));
}
const {wording,convert}=require('./osha-no-audit-policy.cjs');
const oldModel=read('history/v6/target-model.json'),m=convert(oldModel);
m.revision=7;m.previousTarget='history/v6/target-model.json';
m.auditPolicy={enabled:false,nativeSetting:'IsAuditEnabled=FALSE',scope:'All eight owned/new or modified Objects in this specification',decisionDate:'2026-11-20',decision:'User explicitly excludes Audit Trail from all functionality covered by this specification.',existingLocationSummary:'Retain existing IsAuditEnabled=FALSE; the proposed FALSE-to-TRUE change is withdrawn.',corrections:'Keep authorized corrections, saved annual details, ChangeReason, permissions and recalculation checks without relying on Audit Trail. No replacement audit/history Object is introduced.'};
for(const o of m.objects)o.isAuditEnabled=false;
let doc=fs.readFileSync(path.join(dir,'history/v6/technical-specification.md'),'utf8');
doc=wording(doc).replace('Revision 6. Status:','Revision 7. Status:').replace('[Revision 5](history/v5/technical-specification.md),','[Revision 6](history/v6/technical-specification.md), [revision 5](history/v5/technical-specification.md),');
doc=doc.replace('Date: November 12, 2026.','Date: November 20, 2026.');
doc=doc.replace('## 3 Proposed object model','### 2.9 Audit Trail excluded by user decision\n\nAudit Trail must be disabled (IsAuditEnabled=FALSE) on every new or modified Object covered by this specification, including abstract Objects and their concrete children. Do not enable Audit Trail for hours, headcounts, reporting relationships, master data or annual corrections. Retain the existing Location Hours and Headcount setting of FALSE; the earlier proposal to change it to TRUE is withdrawn.\n\nAuthorized corrections, saved annual reporting values, the existing Change Reason field, access rules, uniqueness and calculation/readiness checks remain required. They must work without Audit Trail. No replacement audit or history Object is added. Original package evidence and superseded document revisions remain historical evidence; their audit references are not current configuration instructions.\n\n## 3 Proposed object model');
doc=doc.replace('## 4 Field level implementation contract','Audit Trail setting for every Object above: **IsAuditEnabled=FALSE**. This applies to all seven new Objects and the existing Location Hours and Headcount Object.\n\n## 4 Field level implementation contract');
doc=doc.replace('| AT24 Annual snapshots |','| AT27 Audit Trail disabled | IsAuditEnabled=FALSE on all eight in-scope Objects; authorized corrections work without Audit Trail and existing Change Reason remains available. |\n| AT24 Annual snapshots |');
doc=doc.replace('Remaining inputs concern native field/default/identifier-key settings, user access,','Remaining inputs concern user access,');
doc=doc.replace('revision-5 specification','revision-7 specification');
fs.writeFileSync(path.join(dir,'technical-specification.md'),doc);write('target-model.json',m);
const resolution=read('history/v6/external-input-resolution.json');resolution.revision=7;resolution.auditPolicy=m.auditPolicy;write('external-input-resolution.json',resolution);
const history=read('history/v6/revision-history.json');history.currentRevision=7;history.previousTarget='history/v6/technical-specification.md';history.evidenceRevisionDecisions.push('User excludes Audit Trail from all eight in-scope Objects. Set IsAuditEnabled=FALSE, withdraw the location-summary audit enablement and remove audit-dependent correction requirements.');write('revision-history.json',history);
const prior=read('history/implementation-v7/implementation-plan.json'),p=convert(prior);
p.version=8;p.specificationRevision=7;p.previousPlan='history/implementation-v7/implementation-plan.md';p.targetModelSha256=crypto.createHash('sha256').update(fs.readFileSync(path.join(dir,'target-model.json'))).digest('hex');p.auditPolicy=m.auditPolicy;
const owned={
 'IMP-01':['OSHA Establishment'],
 'IMP-02':['Hours Worked','Establishment Hours and Headcount','Location Hours and Headcount'],
 'IMP-03':['Establishment Incident Rate Abstract','Establishment Incident Rate KPI'],
 'IMP-04':['Establishment OSHA Abstract'],
 'IMP-05':['Establishment OSHA Summary']
};
for(const t of p.tasks){
 t.refs=t.refs.map(s=>s.replaceAll('specification revision 6','specification revision 7').replaceAll('Specification revision 6','Specification revision 7'));
 if(t.id==='IMP-02')t.modifications=t.modifications.filter(v=>!v.change.includes('IsAuditEnabled from FALSE to TRUE'));
 if(owned[t.id]){
  t.objectSettings=owned[t.id].map(objectName=>({objectName,IsAuditEnabled:false}));
  t.accept.push('Audit Trail is disabled (IsAuditEnabled=FALSE) on '+owned[t.id].join(', ')+'.');
 }
 if(t.id==='IMP-02')t.steps[0]+=' Retain IsAuditEnabled=FALSE on the existing Location Hours and Headcount Object.';
 t.assumptions=t.assumptions==='None'?'Audit Trail is excluded; do not enable it for any functionality in this task.':t.assumptions+' Audit Trail is excluded; do not enable it for any functionality in this task.';
}
// Canonical field settings follow the revised lifecycle without changing their data definitions.
const {names,convert:businessNames}=require('./osha-plan-business-object-names.cjs');
for(const t of p.tasks)for(const s of t.fieldSettings||[]){const o=m.objects.find(o=>(names[o.internalName]||o.internalName)===(s.objectName||s.internalName)),f=o.fields.find(f=>f.name===s.name);s.canonicalContract=businessNames(f.contract);}
const audit=p.coverage.find(c=>c.element==='Location summary audit setting');Object.assign(audit,{action:'Reuse',owner:null,description:'Retain existing IsAuditEnabled=FALSE on Location Hours and Headcount. The earlier audit enablement is withdrawn.'});delete audit.blockedBy;
for(const [owner,objects]of Object.entries(owned))for(const object of objects.filter(n=>n!=='Location Hours and Headcount'))p.coverage.push({element:object+'.Audit Trail setting',action:'Add',owner,description:'Create the Object with Audit Trail disabled (IsAuditEnabled=FALSE).'});
p.expectedElements=p.coverage.map(c=>c.element);
p.revisionDecisions.push('Remove all Audit Trail enablement and audit-dependent correction requirements. Set IsAuditEnabled=FALSE on every in-scope Object; retain the existing location-summary FALSE setting. Preserve authorization, saved reporting details and calculation behavior.');
write('implementation-plan.json',p);fs.writeFileSync(path.join(dir,'implementation-plan.md'),require('./render-current-implementation-plan.cjs')(p));
console.log(JSON.stringify({specificationRevision:m.revision,planRevision:p.version,objects:m.objects.length,AuditTrailEnabled:false}));
require('./build-current-implementation-plan.cjs');
