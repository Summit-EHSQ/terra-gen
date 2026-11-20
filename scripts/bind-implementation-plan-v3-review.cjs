// Bind already authored review decisions to the exact reviewed files. Does not approve changes.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const dir='docs/phase 2/incident management/osha-establishment-analytics';
const planBytes=fs.readFileSync(path.join(dir,'implementation-plan.json')),md=fs.readFileSync(path.join(dir,'implementation-plan.md'),'utf8');
const approvedPlanSha256='1811861ff0ef92132079eb2674154f55c274cda8d273cfadb6ad33b431967dd9';
const approvedMarkdownSha256='0ed4058d8fa3082ac2ae92fe18e2e06c0c74ca58332ad13c8442a48dfea6b7b9';
const sha=value=>crypto.createHash('sha256').update(value).digest('hex');
if(sha(planBytes)!==approvedPlanSha256||sha(md)!==approvedMarkdownSha256)throw Error('Review decisions apply only to the exact files reread by the author. Rereview edited assignments; never renew these hashes automatically.');
const p=JSON.parse(planBytes),old=JSON.parse(fs.readFileSync(path.join(dir,'history/implementation-v2/implementation-plan.json'),'utf8'));
const priorReview=JSON.parse(fs.readFileSync(path.join(dir,'history/implementation-v2/implementation-content-review.json'),'utf8'));
const gate=require(path.join(process.env.USERPROFILE,'.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs'));
const decisions=require('./implementation-plan-v3-review-decisions.cjs');
const reviews=p.tasks.map(t=>{
 const decision=decisions.tasks[t.id];if(!decision)throw Error('No authored task review for '+t.id);
 const prior=old.tasks.find(x=>x.id===t.id),priorUnits=new Map(gate.units(prior).map(x=>[x.path,x.text]));
 const oldInstructions=priorReview.tasks.find(x=>x.id===t.id).instructions;
 const instructions=gate.units(t).map(u=>{
  let explicit=decisions.overrides[t.id]?.[u.path];
  if(!explicit&&u.path.startsWith('configurationRows.')&&['IMP-08','IMP-09'].includes(t.id)){
   const row=t.configurationRows[Number(u.path.split('.')[1])],name=row[0].match(/\(([^()]*)\)$/)?.[1];
   if(t.id==='IMP-08'&&decisions.monthlyOutputs[name])explicit=['Configure '+name+' population: '+decisions.monthlyOutputs[name]+' Use the same complete establishment/month for Lo/Ru and preserve targets.','Proposed Refresh Establishment Monthly Metrics report output '+name+' and protected write binding (IN-01)'];
   if(t.id==='IMP-09'&&decisions.annualOutputs[name])explicit=['Configure '+name+' population: '+decisions.annualOutputs[name]+' Keep matching Lo/Ru scope and source empty-value behavior.','Proposed Refresh Establishment Annual OSHA report output '+name+' and protected write binding (IN-01)'];
   if(t.id==='IMP-09'&&row[0].startsWith('Initial ')){
    const target=row[0].slice(8),source=decisions.initialCopies[target];
    if(source)explicit=['Copy master '+source+' to annual '+target+' once on creation; retain the saved value on metric refresh and preserve permitted annual correction.','Proposed annual creation branch: OSHAEstablishment.'+source+' to TG_EstOSHASummaryObject.'+target];
   }
  }
  if(explicit)return {path:u.path,requiredChange:explicit[0],mechanism:explicit[1]};
  if(u.path.startsWith('configurationRows.')&&decisions.creationPopulationReviews[t.id]){
   const row=t.configurationRows[Number(u.path.split('.')[1])],name=row[1].match(/\(([^()]*)\) on /)?.[1],clarification=decisions.creationPopulationReviews[t.id];
   if(clarification.fields.includes(name)){
    const retained=oldInstructions.find(x=>x.path===u.path);if(!retained)throw Error('Missing field-metadata review '+t.id+' '+name);
    return {path:u.path,requiredChange:retained.requiredChange+' '+clarification.requiredChange,mechanism:clarification.mechanism+'; '+name};
   }
  }
  if(u.text===priorUnits.get(u.path)){
   const retained=oldInstructions.find(x=>x.path===u.path);if(!retained)throw Error('Missing retained instruction decision '+t.id+' '+u.path);return retained;
  }
  throw Error('Changed instruction lacks an authored decision: '+t.id+' '+u.path);
 });
 return {id:t.id,taskHash:gate.hash(t),renderedTaskHash:gate.renderedHash(md,t.id),...decision,instructions};
});
const review={version:1,planRevision:3,specificationRevision:4,scope:'Full plan: all fifteen tasks and every operative scope/row/step/modification; language, exact technical meaning, ownership and result checks reread by the author.',reviewType:'Author content review; not independent consultant approval or live tenant verification',reviewedPlanSha256:approvedPlanSha256,reviewedMarkdownSha256:approvedMarkdownSha256,tasks:reviews};
fs.writeFileSync(path.join(dir,'implementation-content-review.json'),JSON.stringify(review,null,2)+'\n');
console.log('Bound fifteen already-authored review decisions to the exact reviewed task/rendered snapshots.');
