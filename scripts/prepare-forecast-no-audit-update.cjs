const fs=require('node:fs'),path=require('node:path');
const dir='docs/phase 2/incident management/osha-establishment-analytics',temp='tmp/forecast-p550-no-audit';
const read=n=>JSON.parse(fs.readFileSync(n,'utf8').replace(/^\uFEFF/,''));
const old=read(path.join(dir,'history/implementation-v7/implementation-plan.json')),current=read(path.join(dir,'implementation-plan.json')),actual=read(path.join(temp,'current-tasks.json'));
const {description}=require('./osha-forecast-description.cjs');
const numbers=Object.fromEntries(actual.map(t=>[t.sourceId,t.taskNumber]));
const manifest={projectId:605489,parentId:17053734,planRevision:current.version,specificationRevision:current.specificationRevision,updates:[]};
for(const task of actual){
 const before=description(old,old.tasks.find(t=>t.id===task.sourceId),numbers),after=description(current,current.tasks.find(t=>t.id===task.sourceId),numbers);
 // Forecast currently preserves the imported HTML exactly. Refuse replacement if a user changed it.
 if(task.description!==before)throw Error('Forecast content changed since import: '+task.taskNumber+'. Preserve and merge those edits before updating.');
 const filename=task.sourceId+'-update.json';fs.writeFileSync(path.join(temp,filename),JSON.stringify({description:after},null,2)+'\n');
 manifest.updates.push({sourceId:task.sourceId,taskNumber:task.taskNumber,id:task.id,title:task.title,payload:filename});
}
fs.writeFileSync(path.join(temp,'update-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({tasks:manifest.updates.length,laterUserEditsDetected:false,fieldsToUpdate:['description'],project:'P550',parent:'T26948'}));
