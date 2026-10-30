const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const dir=path.resolve(__dirname,'../docs/phase 1/employee management'),stem='ADR-001-004-implementation-plan-employee-provisioning';
const plan=JSON.parse(fs.readFileSync(path.join(dir,stem+'.json'),'utf8')),md=fs.readFileSync(path.join(dir,stem+'.md'),'utf8');
const gatePlan=JSON.parse(fs.readFileSync(path.join(dir,stem+'-gate.json'),'utf8')),gateMd=fs.readFileSync(path.join(dir,stem+'-gate.md'),'utf8');
const review=JSON.parse(fs.readFileSync(path.join(dir,stem+'-content-review.json'),'utf8'));
const gate=require(path.join(__dirname,'employee-implementation-task-contract.cjs'));
const errors=[],check=(v,m)=>{if(!v)errors.push(m);};
const hashFile=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
check(gatePlan.adapter.sourceSnapshotSha256===hashFile(path.join(dir,stem+'.json')),'Adapter snapshot stale');
check(gatePlan.adapter.sourceMarkdownSha256===hashFile(path.join(dir,stem+'.md')),'Adapter rendering stale');
const mapText=s=>s.replace(/\b(?:CFG|WF|SEC|UI|AUT|INT|RPT|INIT)-\d+\b/g,id=>gatePlan.adapter.idMapping[id]||id);
function adapt(v){if(typeof v==='string')return mapText(v);if(Array.isArray(v))return v.map(adapt);if(v&&typeof v==='object')return Object.fromEntries(Object.entries(v).map(([k,x])=>[k,adapt(x)]));return v;}
check(gateMd===mapText(md),'Adapter dropped or changed Markdown content');
check(JSON.stringify(gatePlan.tasks)===JSON.stringify(adapt(plan.tasks)),'Adapter dropped or changed structured task content');
const esc=s=>s.replace(/\|/g,'&#124;'),ids=new Set(plan.tasks.map(t=>t.id));
check(ids.size===18&&Object.keys(plan.retired).length===11,'Expected 18 active and 11 retired assignments');
const summary=md.split('\n').filter(l=>/^\| (?:CFG|SEC|AUT|INT|RPT|INIT)-\d+ \|/.test(l)).slice(0,plan.tasks.length);
const headings=[...md.matchAll(/^### ([A-Z]+-\d+) — (.+)$/gm)];
const edges=[];
for(const [i,t]of plan.tasks.entries()){
 const row=`| ${t.id} | ${t.category} | ${t.title} | **Objective:** ${esc(t.objective)}<br><br>**Detailed scope:** ${esc(t.scope)} | ${t.implementer} |`;
 check(summary[i]===row,'Summary/detail mismatch '+t.id);check(headings[i]?.[1]===t.id&&headings[i]?.[2]===t.title,'Heading/order mismatch '+t.id);
 check(t.steps.length>0&&t.accept.length>0,'Missing instructions/acceptance '+t.id);
 const section=md.slice(headings[i].index,headings[i+1]?.index??md.indexOf('\n## 5',headings[i].index));
 for(const key of ['Task ID','Title','Category','Objective','Detailed scope','Deliverable','Strict technical prerequisites','Blocked status','Recommended implementer role','Recommended reviewer/approver role','Role rationale','Acceptance criteria','Specification references','Assumptions and open questions'])check(section.includes('**'+key+':**'),'Missing required field '+t.id+' '+key);
 for(const s of [t.objective,t.scope,...t.steps,...t.accept])check(section.includes(s),'Rendered operative content missing '+t.id);
 check(new Set(t.prerequisites).size===t.prerequisites.length,'Duplicate predecessor '+t.id);
 for(const p of t.prerequisites){check(ids.has(p)&&p!==t.id,'Unknown/self/retired predecessor '+t.id+' '+p);edges.push([p,t.id]);}
 for(const input of t.inputs)check(t.suppliedInputDescriptions.filter(x=>x.id===input&&x.description.length>30).length===1,'Missing local blocker '+t.id+' '+input);
}
const graph=[...md.matchAll(/^    ([A-Z]+_\d+) --> ([A-Z]+_\d+)$/gm)].map(m=>[m[1].replace('_','-'),m[2].replace('_','-')]);
check(JSON.stringify(graph.sort())===JSON.stringify(edges.sort()),'Graph/list edge mismatch');
const done=new Set(),open=new Set();function visit(id){if(open.has(id)){errors.push('Cycle '+id);return;}if(done.has(id))return;open.add(id);plan.tasks.find(t=>t.id===id).prerequisites.filter(p=>ids.has(p)).forEach(visit);open.delete(id);done.add(id);}plan.tasks.forEach(t=>visit(t.id));
for(const [id,owners]of Object.entries(plan.retired)){check(!ids.has(id),'Retired task still active '+id);check(owners.every(o=>ids.has(o)),'Invalid consolidation owner '+id);}
check(plan.coverage.every(r=>ids.has(r[1])),'Coverage has retired/unknown owner');check(plan.tasks.every(t=>plan.coverage.some(r=>r[1]===t.id)),'Task lacks coverage');
for(const m of md.matchAll(/\]\((?:<([^>]+)>|([^\s)]+))\)/g)){const link=m[1]||m[2];if(!/^(https?:|#)/.test(link))check(fs.existsSync(path.resolve(dir,decodeURIComponent(link.split('#')[0]))),'Missing local source link '+link);}
const content=gate.validate(gatePlan,gateMd,review);check(content.passed,'Bundled content gate failed: '+JSON.stringify(content.errors));
const result={passed:!errors.length,activeTasks:plan.tasks.length,retiredTasks:Object.keys(plan.retired).length,dependencyEdges:edges.length,summaryMatchesDetails:!errors.some(e=>e.includes('mismatch')),contentGatePassed:content.passed,allTasksReviewed:content.unreviewedTaskIds.length===0,adapterPreservesOperativeContent:!errors.some(e=>e.includes('Adapter')),errors,limits:'Recorded semantic review and document/graph consistency, not independent semantic certification or live tenant behavior.'};
fs.writeFileSync(path.join(dir,stem+'-structure-validation.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));if(errors.length)process.exitCode=1;
