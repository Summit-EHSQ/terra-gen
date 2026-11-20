const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const dir='docs/phase 2/incident management/osha-establishment-analytics';
const plan=JSON.parse(fs.readFileSync(path.join(dir,'implementation-plan.json'),'utf8'));
const structural=JSON.parse(fs.readFileSync(path.join(dir,'implementation-plan-validation.json'),'utf8')),content=JSON.parse(fs.readFileSync(path.join(dir,'implementation-content-validation.json'),'utf8'));
if(plan.version!==7||!structural.passed||!content.passed||content.unreviewedTaskIds.length)throw Error('Import requires the current fully reviewed plan.');
const temp='tmp/forecast-p550-t26948-osha-plan-v7';fs.mkdirSync(temp,{recursive:true});
const html=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/\r?\n/g,'<br/>');
const section=(title,text)=>'<div><strong>'+html(title)+':</strong><br/>'+text+'</div><br/>';
const list=items=>items.map((s,i)=>html((i+1)+'. '+s)).join('<br/><br/>');
const manifest={projectId:605489,projectNumber:'P550',parentId:17053734,parentNumber:'T26948',planRevision:plan.version,specificationRevision:plan.specificationRevision,sourceSha256:crypto.createHash('sha256').update(fs.readFileSync(path.join(dir,'implementation-plan.json'))).digest('hex'),tasks:[]};
for(const t of plan.tasks){
 let description=section('Source',html(plan.title+' — plan revision '+plan.version+', specification revision '+plan.specificationRevision+'.'));
 description+=section('Source task',html('OSHA-ESTABLISHMENT-ANALYTICS:'+t.id));
 description+=section('Naming',html(plan.namingConvention));
 for(const [label,value]of [['Objective',t.objective],['Detailed scope',t.scope],['Deliverable',t.deliverable],['Category',t.category],['What is waiting',t.blockedStatus],['Recommended implementer role',t.implementer],['Recommended reviewer/approver role',t.reviewer],['Why this role is recommended',t.rationale]])description+=section(label,html(value));
 description+=section('Work needed first',t.prerequisites.length?t.predecessorOutputs.map(v=>html(v.id)+' ({{FORECAST:'+v.id+'}}) — '+html(v.description)).join('<br/><br/>'):'None');
 if(t.configurationRows.length)description+=section('Fields and features to set up',t.configurationRows.map(r=>'<strong>'+html(r[0])+':</strong><br/>'+html(r[1])).join('<br/><br/>'));
 if(t.modifications.length)description+=section('Changes to the existing setup',t.modifications.map(r=>'<strong>'+html(r.element)+':</strong><br/>'+html(r.change)).join('<br/><br/>'));
 if(t.steps.length)description+=section('Build instructions',list(t.steps));
 description+=section('How to check the result',list(t.accept));
 description+=section('Information needed for this task',t.suppliedInputDescriptions.length?t.suppliedInputDescriptions.map(i=>html(i.id+': '+i.description)).join('<br/><br/>'):'None');
 description+=section('Specification references',t.refs.map(html).join('<br/><br/>'));
 description+=section('Assumptions and open questions',html(t.assumptions));
 const filename=t.id+'.json';
 fs.writeFileSync(path.join(temp,filename),JSON.stringify({project_id:manifest.projectId,parent_task_id:manifest.parentId,title:t.id+' — '+t.title,description},null,2)+'\n');
 manifest.tasks.push({sourceId:t.id,title:t.id+' — '+t.title,payload:filename,marker:'OSHA-ESTABLISHMENT-ANALYTICS:'+t.id});
}
fs.writeFileSync(path.join(temp,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({project:manifest.projectNumber,parent:manifest.parentNumber,tasks:manifest.tasks.length,temporaryPayloadDirectory:temp}));
