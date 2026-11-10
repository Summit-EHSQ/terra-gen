/* Evidence IDs are locators; the package's actual name remains the consultant's label. */
module.exports=function nameEvidence(tasks,baseline){
 const names=Object.fromEntries(baseline.items.map(x=>[x.evidenceId,x.item.FieldData.Name||x.item.FieldData.SystemName]).filter(([,name])=>name));
 const used={};
 function named(text){let result=String(text).replace(/\bE\d+\b/g,(id,offset,all)=>{
  const name=names[id];if(!name)throw Error('Missing package element name for '+id);
  used[id]=name;
  if(all.slice(0,offset).endsWith(name+' (')&&all[offset+id.length]===')')return id;
  return name+' ('+id+')';
 });for(const [id,name]of Object.entries(used)){
  const label=name+' ('+id+')';
  result=result.replaceAll(name+' '+label,label).replaceAll(label+', '+name,label).replaceAll(label+' '+name,label);
 }return result;}
 for(const t of tasks){
  for(const key of ['scope','objective','deliverable','notes'])t[key]=named(t[key]);
  for(const key of ['accept','steps','instructionMechanisms'])t[key]=t[key].map(named);
  t.configurationRows=t.configurationRows.map(r=>r.map(named));
  for(const m of t.modifications){for(const key of ['businessElement','businessBefore','businessChange','change'])m[key]=named(m[key]);m.evidenceName=names[m.evidence];used[m.evidence]=m.evidenceName;}
  for(const id of Object.keys(t.inputDescriptions||{}))t.inputDescriptions[id]=named(t.inputDescriptions[id]);
 }
 return used;
};
