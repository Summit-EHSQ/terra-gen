// Apply the user's IN-02 decisions; preserve the preceding reviewable artifacts.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const dir='docs/phase 2/incident management/osha-establishment-analytics';
const read=n=>JSON.parse(fs.readFileSync(path.join(dir,n),'utf8'));
const write=(n,x)=>fs.writeFileSync(path.join(dir,n),JSON.stringify(x,null,2)+'\n');
for(const [folder,files] of [['history/v5',['target-model.json','technical-specification.md','external-input-resolution.json','revision-history.json','validation.json','README.md']],['history/implementation-v4',['implementation-plan.json','implementation-plan.md','implementation-content-review.json','implementation-content-validation.json','implementation-plan-validation.json']]]){
 fs.mkdirSync(path.join(dir,folder),{recursive:true});for(const file of files){const dest=path.join(dir,folder,file);if(!fs.existsSync(dest))fs.copyFileSync(path.join(dir,file),dest);}
}
const m=read('history/v5/target-model.json'),p=read('history/implementation-v4/implementation-plan.json'),e=read('package-evidence.json'),r=read('history/v5/external-input-resolution.json');
let doc=fs.readFileSync(path.join(dir,'history/v5/technical-specification.md'),'utf8');
const esc=s=>String(s).replace(/\|/g,'&#124;').replace(/\r?\n/g,' '),row=c=>'| '+c.map(esc).join(' | ')+' |';
const props=['MaxLength','MinLength','Precision','Scale','IsLocalizable','IsLiveTranslatable','SpellCheck','TimeZoneCapture','MinValue','MaxValue','DetailDisplayFormat','DetailEditMask','InventoryDisplayFormat','InventoryEditMask'];
const changes=[];
for(const o of m.objects)for(const f of o.fields){
 const before=[...f.contract],source=e.fields.find(s=>s.recordId===f.sourceRecordId);
 if(source){
  f.sourceCharacteristics=Object.fromEntries(props.map(k=>[k,source[k]??null]));
  if(f.contract[1].startsWith('Text'))f.contract[1]='Text / nvarchar; MaxLength=NULL, MinLength=NULL (unset as in source); Precision=NULL, Scale=NULL; IsLocalizable='+source.IsLocalizable+'; IsLiveTranslatable='+source.IsLiveTranslatable+'; SpellCheck='+source.SpellCheck;
  if(f.name==='RecordNo'){
   f.contract[1]='AutoNumber, System.Int64';f.sourceAutoNumberDefault=source.DefaultValue;
   f.contract[3]=source.DefaultValue?(o.action==='Add'?'Copy the source AutoNumber generator settings (StartValue=1, IncrementStep=1); allocate a new target sequence':'Retain the existing AutoNumber generator and sequence; do not reset existing numbering'):'DefaultValue=NULL as in source; native AutoNumber field supplies the record number';
  }
 }
 if(o.internalName==='TG_HoursWorkedObject'&&f.name==='SourceEntryID'){
  f.contract[3]='NULL; no automatic value';
  f.contract[4]='User or import supplies before first save; read only after creation; configured record display value';
 }
 if(JSON.stringify(before)!==JSON.stringify(f.contract)){
  if(!doc.includes(row(before)))throw Error('Missing original field row '+o.internalName+'.'+f.name);
  doc=doc.replace(row(before),row(f.contract));changes.push({object:o.internalName,field:f.name,before,after:f.contract});
 }
}
m.revision=6;m.previousTarget='history/v5/target-model.json';
m.fieldSettingsDecision={input:'IN-02',date:'2026-11-12',classification:'User-confirmed configuration decisions',copyRule:'Replicated fields retain analogous OOTB characteristics. NULL scalar metadata remains unset; it does not imply unlimited length. Approved relationship, calculation, snapshot and edit-control changes remain in effect.',recordNumber:'AutoNumber',sourceEntryDefault:null,sourceEntryRequired:true,summaryIdentityEditing:'Dimension and Date editable only at creation',nativeIdentifierNames:'Set the actual corresponding relationship-ID names during IMP-07 configuration; retain matched GUID/Date types. No new external input.'};
m.nativeHoursDesign.identifierKeyEvidence+=' Set the actual names during IMP-07 configuration; IN-02 is answered.';
const in2=r.inputs.find(i=>i.id==='IN-02');in2.status='Answered by user-confirmed field settings';in2.answer='Keep the characteristics of each analogous OOTB field when copying it, including unset text lengths. Use AutoNumber for RecordNo. SourceEntryID starts blank (NULL). Keep monthly summary dimension and Date editable only when the summary is created. Set the actual corresponding relationship-ID names during configuration.';in2.remaining='No further information is required for IN-02. IMP-07 sets the native ID-key names while configuring the handler. The existing requirement to supply SourceEntryID before first save is retained; NULL is its starting value, not a generated identifier.';
r.revision=6;r.inputs.find(i=>i.id==='IN-01').remaining='No custom coordinated summary-write, Delete totals handler or transaction/locking subsystem is required. Native relationship-ID names are set during configuration; downstream refresh remains IN-09.';
for(const i of r.inputs){const old=read('history/v5/external-input-resolution.json').inputs.find(x=>x.id===i.id);if(JSON.stringify(old)!==JSON.stringify(i))doc=doc.replace('| '+[old.id+' — '+old.title,old.status,old.answer,old.remaining].map(esc).join(' | ')+' |','| '+[i.id+' — '+i.title,i.status,i.answer,i.remaining].map(esc).join(' | ')+' |');}
doc=doc.replace('Revision 5. Status:','Revision 6. Status:').replace('[Revision 4](history/v4/technical-specification.md),','[Revision 5](history/v5/technical-specification.md), [revision 4](history/v4/technical-specification.md),');
doc=doc.replace('Imports supply SourceEntryID; manual default/number settings remain a narrow IN-02 detail.','SourceEntryID starts NULL and must be supplied by the user or import before first save; no automatic key is generated.');
doc=doc.replace('Cloned Text capacity is unresolved where metadata is null; verify tenant capacities before loading master snapshots.','Cloned Text fields retain the analogous source MaxLength and MinLength settings, including NULL (unset).');
doc=doc.replaceAll('Text / nvarchar; maximum length unresolved in export','Text / nvarchar; maximum length unset as in source');
doc=doc.replace('## 3 Proposed object model','### 2.8 Confirmed field settings (IN-02)\n\nReplicated fields keep the characteristics of their analogous OOTB fields. For copied Text fields, MaxLength and MinLength are NULL in the package and remain unset; this is a supplied setting, not a missing limit or a claim of unlimited storage. Precision, scale, localization, spellcheck, timezone and display/mask settings are retained in each field’s sourceCharacteristics in the target model. Approved changes to relationships, calculations, annual snapshots and edit controls still apply. New register and source-entry fields retain their explicitly specified settings.\n\nRecordNo uses the native AutoNumber field type. Copy the source generator settings where present, using a new target sequence; leave DefaultValue unset where the source has no explicit default. SourceEntryID defaults to NULL with no automatic generation; its existing required and unique rules remain, so users or imports supply a value before the first save. Monthly summary dimension and Date remain editable only at creation. IMP-07 sets the corresponding native relationship-ID names during configuration and keeps the matched Date/GUID types. IN-02 is answered.\n\n## 3 Proposed object model');
write('target-model.json',m);write('external-input-resolution.json',r);fs.writeFileSync(path.join(dir,'technical-specification.md'),doc);
const h=read('history/v5/revision-history.json');h.currentRevision=6;h.previousTarget='history/v5/technical-specification.md';h.evidenceRevisionDecisions.push('Resolve IN-02 with source-matched field characteristics, AutoNumber RecordNo, NULL SourceEntryID default, retained creation-only summary identity editing and configuration-time native ID-key naming');write('revision-history.json',h);
// Reconcile task-local settings, ownership and waiting information.
p.version=5;p.specificationRevision=6;p.previousPlan='history/implementation-v4/implementation-plan.md';p.targetModelSha256=crypto.createHash('sha256').update(fs.readFileSync(path.join(dir,'target-model.json'))).digest('hex');p.nativeHoursDesign=m.nativeHoursDesign;
p.externalInputs=p.externalInputs.filter(i=>i.id!=='IN-02');p.resolvedInputs=p.resolvedInputs.map(i=>r.inputs.find(x=>x.id===i.id));p.resolvedInputs.push(in2);
const clean=s=>s.replaceAll('technical specification revision 5','technical specification revision 6').replaceAll('Technical specification revision 5','Technical specification revision 6')
 .replaceAll('confirm that key under IN-02 and substitute its actual spelling if different','set that key during this configuration task and substitute its actual spelling if different')
 .replaceAll('Confirm the generated native identifier-key spelling under IN-02','Set the generated native identifier-key spelling during this configuration task')
 .replaceAll('Source-key manual-default settings remain in IN-02;','SourceEntryID defaults to NULL and must be supplied before first save;')
 .replaceAll('copied text capacities, numbering and destination settings default wait for IN-02/IN-08','the destination settings default waits for IN-08')
 .replaceAll('the case list, case-print connection and copied text capacities wait for IN-02/IN-06/IN-08','the case list and case-print connection wait for IN-06/IN-08');
for(const t of p.tasks){
 t.inputs=t.inputs.filter(i=>i!=='IN-02');t.suppliedInputDescriptions=t.suppliedInputDescriptions.filter(i=>i.id!=='IN-02');
 for(const k of ['scope','blockedStatus','assumptions','deliverable'])t[k]=clean(t[k]);
 for(const k of ['steps','accept','refs'])t[k]=t[k].map(clean);
 t.configurationRows=t.configurationRows.map(a=>a.map(clean));
 for(const ch of changes){const o=m.objects.find(o=>o.internalName===ch.object),f=o.fields.find(f=>f.name===ch.field);const idx=t.configurationRows.findIndex(a=>a[1].includes('('+f.name+') on '+o.name+' ('+o.internalName+')'));
  if(idx>=0)t.configurationRows[idx][1]='Add '+f.caption+' ('+f.name+') on '+o.name+' ('+o.internalName+'). '+f.contract[1]+'. '+({Y:'Required.',N:'Optional.',Conditional:'Required when applicable.'}[f.contract[2]])+' Default: '+f.contract[3]+'. Editing: '+f.contract[4]+'. '+f.contract[5].replace(/\.$/,'')+'.'+(f.sourceRecordId?' Keep the analogous OOTB field characteristics; source field GUID '+f.sourceRecordId+'.':'');
 }
 for(const f of t.fieldSettings||[]){const target=m.objects.find(o=>o.internalName===f.internalName).fields.find(x=>x.name===f.name);Object.assign(f,{type:target.contract[1],required:target.contract[2],default:target.contract[3],editability:target.contract[4],canonicalContract:target.contract});if(target.sourceCharacteristics)f.sourceCharacteristics=target.sourceCharacteristics;}
 if(['IMP-02','IMP-03','IMP-07'].includes(t.id))t.blockedStatus='Ready when the earlier tasks listed above are complete. IN-02 is answered; field characteristics, defaults and creation-only editing are defined. Set corresponding native relationship-ID names during IMP-07 configuration.';
}
for(const c of p.coverage)if(c.blockedBy)c.blockedBy=c.blockedBy.filter(i=>i!=='IN-02');
p.revisionDecisions.push('Resolve IN-02: copy analogous OOTB field characteristics, use AutoNumber, start SourceEntryID NULL, retain creation-only summary identity editing and set native ID-key names during configuration.');
write('implementation-plan.json',p);write('field-settings-decisions.json',{revision:6,input:in2,changes});
fs.writeFileSync(path.join(dir,'implementation-plan.md'),require('./render-current-implementation-plan.cjs')(p));
let readme=fs.readFileSync(path.join(dir,'history/v5/README.md'),'utf8').replaceAll('revision 5','revision 6').replaceAll('plan revision 4','plan revision 5').replace('Exact native identifier-key names/default settings, downstream refresh','IN-02 field settings are answered. Native identifier-key names are set during IMP-07 configuration. Downstream refresh').replace('The current builder applies native-hours revision 6 to the preserved revision-4 target snapshot','The current builder applies field-settings revision 6 to the preserved revision-5 target snapshot').replace('with inferred native ID-key spellings awaiting confirmation','with native ID-key names set during IMP-07 configuration');
readme=readme.replace('history/implementation-v3/implementation-plan.md','history/implementation-v4/implementation-plan.md').replace('history/implementation-v2/implementation-plan.md','history/implementation-v4/implementation-plan.md');
readme+='\nIN-02 is resolved: copied fields retain OOTB characteristics, RecordNo uses AutoNumber, SourceEntryID defaults to NULL with its existing required-before-save rule, and monthly summary dimension/Date remain editable only at creation. [The previous specification](history/v5/technical-specification.md) and [field-setting decisions](field-settings-decisions.json) are retained.\n';
fs.writeFileSync(path.join(dir,'README.md'),readme);
console.log(JSON.stringify({revision:m.revision,planRevision:p.version,changedFields:changes.length,remainingInputs:p.externalInputs.map(i=>i.id)}));
