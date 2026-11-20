// Bind the already authored native-design review to the exact files reread by the author.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const dir='docs/phase 2/incident management/osha-establishment-analytics';
const planBytes=fs.readFileSync(path.join(dir,'implementation-plan.json')),md=fs.readFileSync(path.join(dir,'implementation-plan.md'),'utf8');
const planSha='86abf1f4242bcc867afb34f7d8ce4096ea69c93bc4e56a796a0bbd3512a8450a',markdownSha='136261a2bfd8bf36699467988cfb6df28ae2d2026636df10877587aabc6e1352';
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
if(sha(planBytes)!==planSha||sha(md)!==markdownSha)throw Error('These review decisions apply only to the exact reread files. Rereview changed content; never renew hashes automatically.');
const p=JSON.parse(planBytes),old=JSON.parse(fs.readFileSync(path.join(dir,'history/implementation-v3/implementation-plan.json'),'utf8'));
const oldReview=JSON.parse(fs.readFileSync(path.join(dir,'history/implementation-v3/implementation-content-review.json'),'utf8'));
const decisions=require('./native-hours-plan-review-decisions.cjs'),gate=require(path.join(process.env.USERPROFILE,'.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs'));
const reviews=p.tasks.map(t=>{
 const decision=decisions.tasks[t.id];if(!decision)throw Error('Missing authored review '+t.id);
 const oldUnits=new Map(gate.units(old.tasks.find(x=>x.id===t.id)).map(u=>[u.path,u.text]));
 const retained=oldReview.tasks.find(x=>x.id===t.id).instructions;
 const instructions=gate.units(t).map(u=>{
  let authored=decisions.overrides[t.id]?.[u.path];
  if(!authored&&t.id==='IMP-08'&&u.path.startsWith('configurationRows.')){
   const name=t.configurationRows[Number(u.path.split('.')[1])][0].match(/\(([^()]*)\)$/)?.[1],meaning=decisions.monthlyOutputs[name];
   if(meaning)authored=['Populate '+name+': '+meaning+' Preserve the complete establishment/month population and targets. Consume native summary hours without manual summary writes; downstream execution/status belongs to IN-09.','Refresh Establishment Monthly Metrics '+name+' report-fed output and IN-09 result-status connection'];
  }
  if(authored)return {path:u.path,requiredChange:authored[0],mechanism:authored[1]};
  if(u.text===oldUnits.get(u.path)){const prior=retained.find(r=>r.path===u.path);if(!prior)throw Error('Missing retained instruction review');return prior;}
  throw Error('Changed instruction needs an explicit authored decision: '+t.id+' '+u.path);
 });
 return {id:t.id,taskHash:gate.hash(t),renderedTaskHash:gate.renderedHash(md,t.id),...decision,instructions};
});
fs.writeFileSync(path.join(dir,'implementation-content-review.json'),JSON.stringify({version:1,planRevision:4,specificationRevision:5,scope:'Full author review of all fifteen tasks, every operative row/step/change, exact formulas/types, user-confirmed behavior and remaining inputs.',reviewType:'Author content review, not independent consultant approval or live tenant testing',reviewedPlanSha256:planSha,reviewedMarkdownSha256:markdownSha,tasks:reviews},null,2)+'\n');
console.log('Bound the full native-hours author review to the exact fifteen task and rendered snapshots.');
