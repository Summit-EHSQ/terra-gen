/* Structural contract checks only. Business clarity, evidence truth and tenant capability need review. */
const fs=require('node:fs');
const HEADINGS=['Scope and planning basis','Task summary','External inputs and constraints','Detailed configuration tasks','Work that depends on earlier tasks','Who covers each part of the build'];
const LABELS={id:'Task ID',title:'Title',category:'Category',objective:'Objective',scope:'Detailed scope',deliverable:'Deliverable',prerequisites:'Work needed first',blockedStatus:'What is waiting',implementer:'Recommended implementer role',reviewer:'Recommended reviewer/approver role',rationale:'Why this role is recommended'};
const END_LABELS={accept:'How to check the result',suppliedInputDescriptions:'Information needed for this task',refs:'Specification references',assumptions:'Assumptions and open questions'};
const norm=s=>String(s??'').replace(/&#124;/g,'|').replace(/\s+/g,' ').trim();
const esc=s=>String(s).replace(/\|/g,'&#124;').replace(/\r?\n/g,' ');
const text=s=>typeof s==='string'&&s.trim().length>0;
const array=x=>Array.isArray(x)?x:[];
function headings(markdown){let fence=null;return markdown.split(/\r?\n/).flatMap((line,i)=>{const f=line.match(/^\s*(`{3,}|~{3,})/);if(f){if(!fence)fence=f[1][0];else if(fence===f[1][0])fence=null;return [];}return !fence&&/^## /.test(line)?[{name:line.slice(3).trim(),line:i}]:[];});}
function validate(plan,markdown){
 const errors=[],issue=(path,code,message)=>errors.push({path,code,message});
 const tasks=array(plan.tasks),ids=tasks.map(t=>t.id),byId=new Map(tasks.map(t=>[t.id,t]));
 if(plan.planContractVersion!==2)issue('planContractVersion','CONTRACT_VERSION','Use planContractVersion: 2, or an explicit lossless adapter for a legacy plan.');
 for(const key of ['title','date','scope'])if(!text(plan[key]))issue(key,'PLAN_VALUE','Supply '+key+'.');
 if(text(plan.date)&&(!/^\d{4}-\d{2}-\d{2}$/.test(plan.date)||Number.isNaN(Date.parse(plan.date))||new Date(plan.date).toISOString().slice(0,10)!==plan.date))issue('date','PLAN_DATE','Use a valid YYYY-MM-DD date.');
 if(!array(plan.basis).length)issue('basis','SOURCE_BASIS','Identify the governing sources and their evidence limitations.');
 if(!plan.evidenceNames||typeof plan.evidenceNames!=='object'||Array.isArray(plan.evidenceNames))issue('evidenceNames','EVIDENCE_REGISTRY','Supply a verified evidence-name mapping, including an empty object when no IDs are used.');
 if(!Array.isArray(plan.externalInputs))issue('externalInputs','INPUT_ARRAY','Use an array, including [] when no inputs are missing.');
 if(!tasks.length)issue('tasks','NO_TASKS','Supply at least one actual configuration assignment.');
 if(new Set(ids).size!==ids.length)issue('tasks','DUPLICATE_TASK','Active task IDs must be unique.');
 const h=headings(markdown);
 if(JSON.stringify(h.map(x=>x.name))!==JSON.stringify(HEADINGS))issue('markdown','SECTION_ORDER','Use exactly the six required H2 sections in contract order.');
 const h1=[...markdown.matchAll(/^# (.+)$/gm)];
 if(h1.length!==1||h1[0][1]!==plan.title)issue('title','DOCUMENT_TITLE','One H1 must match the canonical plan title.');
 const lines=markdown.split(/\r?\n/);
 const section=name=>{const i=h.findIndex(x=>x.name===name);return i<0?'':lines.slice(h[i].line+1,h[i+1]?.line).join('\n');};
 const inputs=array(plan.externalInputs),inputIds=inputs.map(x=>x.id);
 if(new Set(inputIds).size!==inputIds.length)issue('externalInputs','DUPLICATE_INPUT','Input IDs must be unique.');
 const inputBlock=norm(section(HEADINGS[2]));
 for(const [i,input]of inputs.entries()){
  if(!/^IN-\d{2,}$/.test(input.id??'')||!text(input.title)||!text(input.description))issue('externalInputs.'+i,'INPUT_RECORD','Each input needs an IN-01 style ID, business title and complete explanation.');
  if(!inputBlock.includes(norm(`- **${input.id} — ${input.title}:** ${input.description}`)))issue('externalInputs.'+i,'INPUT_RENDER','Global input title/description must be rendered exactly.');
 }
 const summary=section(HEADINGS[1]);
 const rows=summary.split(/\r?\n/).filter(l=>/^\|/.test(l));
 const header='| Task Number | Task Category | Task Name | Objective and Detailed Scope | Recommended Implementer |';
 if(rows[0]!==header||rows[1]!=='|---|---|---|---|---|')issue('summary','SUMMARY_COLUMNS','Use the required five-column header and separator.');
 const expectedRows=tasks.map(t=>`| ${t.id} | ${esc(t.category)} | ${esc(t.title)} | **Objective:** ${esc(t.objective)}<br><br>**Detailed scope:** ${esc(t.scope)} | ${esc(t.implementer)} |`);
 if(JSON.stringify(rows.slice(2))!==JSON.stringify(expectedRows))issue('summary','SUMMARY_DRIFT','Every task must occur once in order with exact canonical values, including unabridged objective/scope.');
 const detailed=section(HEADINGS[3]),matches=[...detailed.matchAll(/^### (IMP-\d{2,}) — (.+)$/gm)];
 if(JSON.stringify(matches.map(x=>x[1]))!==JSON.stringify(ids))issue('details','TASK_ORDER','Detailed task IDs must match the active snapshot order exactly.');
 for(const [i,t]of tasks.entries()){
  const p='tasks.'+i;
  if(!/^IMP-\d{2,}$/.test(t.id??''))issue(p+'.id','TASK_ID','Use stable IMP-01 style IDs.');
  for(const key of [...Object.keys(LABELS).filter(k=>k!=='prerequisites'),'assumptions'])if(!text(t[key]))issue(p+'.'+key,'TASK_VALUE','Supply '+key+', using None for absent assumptions.');
  for(const key of ['prerequisites','predecessorOutputs','inputs','suppliedInputDescriptions','configurationRows','modifications','steps','accept','refs'])if(!Array.isArray(t[key]))issue(p+'.'+key,'TASK_ARRAY','Supply '+key+' as an array.');
  if(!array(t.accept).length||!array(t.refs).length)issue(p,'TASK_CHECKS_SOURCES','Include observable result checks and traceability.');
  if(!array(t.steps).length&&!array(t.configurationRows).length&&!array(t.modifications).length)issue(p,'NO_CHANGES','Assign a tangible configuration difference.');
  for(const key of ['steps','accept','refs'])if(array(t[key]).some(x=>!text(x)))issue(p+'.'+key,'STRING_ITEMS','Use nonempty strings.');
  if(array(t.configurationRows).some(r=>!Array.isArray(r)||r.length!==2||!r.every(text)))issue(p+'.configurationRows','FIELD_ROWS','Use label/instruction pairs with no empty values.');
  if(array(t.modifications).some(r=>!text(r.element)||!text(r.change)))issue(p+'.modifications','CHANGE_ROWS','Each change needs its named existing element and required before/after difference.');
  const prereqs=array(t.prerequisites);
  if(new Set(prereqs).size!==prereqs.length||prereqs.some(id=>!byId.has(id)||id===t.id))issue(p+'.prerequisites','PREDECESSORS','Use unique active predecessor IDs, excluding self-dependencies.');
  const outputs=array(t.predecessorOutputs);
  if(outputs.length!==prereqs.length||prereqs.some(id=>outputs.filter(o=>o.id===id&&text(o.description)).length!==1))issue(p+'.predecessorOutputs','PREDECESSOR_OUTPUTS','Describe exactly one consumed configuration output per predecessor.');
  const localInputs=array(t.inputs),localDescriptions=array(t.suppliedInputDescriptions);
  if(new Set(localInputs).size!==localInputs.length||localInputs.some(id=>!inputIds.includes(id))||localDescriptions.length!==localInputs.length||localInputs.some(id=>localDescriptions.filter(x=>x.id===id&&text(x.description)).length!==1))issue(p+'.inputs','LOCAL_INPUTS','Each referenced global input needs one narrow local description; no unknown or duplicate IDs.');
  const match=matches.find(x=>x[1]===t.id),next=matches.find(x=>match&&x.index>match.index),block=match?detailed.slice(match.index,next?.index):'',flat=norm(block);
  if(!match||match[2]!==t.title)issue(p,'TASK_HEADING','Task heading/title must match the canonical record.');
  let previous=-1;
  for(const [key,label]of Object.entries(LABELS)){
   const value=key==='prerequisites'?(prereqs.length?prereqs.join(', '):'None'):t[key];
   const needle=`**${label}:** ${value}`,pos=block.indexOf(needle);
   if(pos<0||pos<previous)issue(p+'.'+key,'TASK_LABELS','Render the exact required metadata label/value in contract order: '+label);else previous=pos;
  }
  for(const output of outputs)if(!flat.includes(norm(output.description)))issue(p+'.predecessorOutputs','OUTPUT_RENDER','Render the named predecessor output inside the task.');
  if(outputs.length&&!block.includes('What the earlier tasks provide:'))issue(p,'OUTPUT_LABEL','Explain What the earlier tasks provide.');
  for(const row of array(t.configurationRows))if(Array.isArray(row)&&!row.every(x=>flat.includes(norm(x))))issue(p+'.configurationRows','INSTRUCTION_RENDER','A canonical field/feature row is missing from the task.');
  if(array(t.configurationRows).length&&!block.includes('| Field or feature | What to set up |'))issue(p,'FIELD_TABLE','Use the required field/feature table.');
  for(const change of array(t.modifications))if(!flat.includes(norm(change.element))||!flat.includes(norm(change.change)))issue(p+'.modifications','CHANGE_RENDER','A canonical existing change is missing from the task.');
  if(array(t.steps).length&&!block.includes('Build instructions:'))issue(p,'STEP_LABEL','Include Build instructions.');
  for(const [j,step]of array(t.steps).entries())if(!flat.includes(norm((j+1)+'. '+step)))issue(p+'.steps.'+j,'STEP_RENDER','Render every numbered build instruction in order.');
  for(const check of array(t.accept))if(!flat.includes(norm('- '+check)))issue(p+'.accept','CHECK_RENDER','Render every observable result check as a bullet.');
  previous=block.indexOf('**How to check the result:**');
  for(const [key,label]of Object.entries(END_LABELS)){
   const value=key==='accept'?null:key==='suppliedInputDescriptions'?(localDescriptions.length?localDescriptions.map(x=>x.id+': '+x.description).join(' '):'None'):key==='refs'?array(t.refs).join(' '):t[key];
   const needle=value===null?`**${label}:**`:`**${label}:** ${value}`,pos=block.indexOf(needle);
   if(pos<0||pos<previous)issue(p+'.'+key,'TASK_END_LABELS','Render the exact final label/value in contract order: '+label);else previous=pos;
  }
 }
 const visiting=new Set(),done=new Set();let cyclic=false;
 function visit(id){if(visiting.has(id)){cyclic=true;return;}if(done.has(id)||!byId.has(id))return;visiting.add(id);for(const prev of array(byId.get(id).prerequisites))visit(prev);visiting.delete(id);done.add(id);}ids.forEach(visit);
 if(cyclic)issue('prerequisites','DEPENDENCY_CYCLE','The implementation dependency graph contains a cycle.');
 const graphSection=section(HEADINGS[4]),graphs=[...graphSection.matchAll(/```mermaid\s*\n([\s\S]*?)```/g)];
 if(graphs.length!==1||!/^flowchart TD\b/.test(graphs[0]?.[1]??''))issue('dependencies','MERMAID_GRAPH','Use one fenced Mermaid flowchart TD in the dependency section.');
 const graph=graphs[0]?.[1]??'';
 if(graph.split(/\r?\n/).some(line=>line.trim()&&!/^flowchart TD\s*$/.test(line)&&!/^\s*IMP_\d{2,}\[".+?"\]\s*$/.test(line)&&!/^\s*IMP_\d{2,} --> IMP_\d{2,}\s*$/.test(line)))issue('dependencies','GRAPH_EXTRA_CONTENT','Only active task nodes and prerequisite edges belong in this graph.');
 const nodes=[...graph.matchAll(/^\s*(IMP_\d{2,})\["(.+?)"\]\s*$/gm)].map(x=>[x[1],x[2]]);
 const expectedNodes=tasks.map(t=>[t.id.replace('-','_'),t.id+' '+t.title]);
 if(JSON.stringify(nodes)!==JSON.stringify(expectedNodes))issue('dependencies','GRAPH_NODES','Render each active task once with its current ID/title and canonical order.');
 const edges=[...graph.matchAll(/^\s*(IMP_\d{2,}) --> (IMP_\d{2,})\s*$/gm)].map(x=>x[1]+' --> '+x[2]).sort();
 const expectedEdges=tasks.flatMap(t=>array(t.prerequisites).map(prev=>prev.replace('-','_')+' --> '+t.id.replace('-','_'))).sort();
 if(JSON.stringify(edges)!==JSON.stringify(expectedEdges))issue('dependencies','GRAPH_EDGES','Mermaid edges must match technical predecessors exactly.');
 if(!section(HEADINGS[5]).includes('| Part of the build | Responsible task | What happens |'))issue('coverage','COVERAGE_TABLE','Use the required business-facing coverage table.');
 const coverage=array(plan.coverage),actions=['Add','Modify','Remove','Reuse','External','Not applicable'];
 if(!coverage.length)issue('coverage','COVERAGE_REQUIRED','Supply reconciled coverage of changes, reuse and external ownership.');
 if(new Set(coverage.map(c=>c.element)).size!==coverage.length)issue('coverage','DUPLICATE_OWNER','Use one coverage record per actual configuration element/change; do not assign it twice.');
 for(const [i,c]of coverage.entries()){
  if(!text(c.element)||!actions.includes(c.action)||!text(c.description))issue('coverage.'+i,'COVERAGE_RECORD','Name the element, disposition and operative difference or reuse/exclusion reason.');
  if(['Add','Modify','Remove'].includes(c.action)?!byId.has(c.owner):c.owner!==null)issue('coverage.'+i,'COVERAGE_OWNER','Actual changes need one active owner; reuse/external/not-applicable entries have owner null.');
  if(c.blockedBy!==undefined&&(!Array.isArray(c.blockedBy)||c.blockedBy.some(id=>!inputIds.includes(id))))issue('coverage.'+i,'COVERAGE_INPUT','Only defined supplied inputs may block a covered change.');
 }
 if(Array.isArray(plan.expectedElements)){
  const expected=[...plan.expectedElements].sort(),actual=coverage.map(c=>c.element).sort();
  if(JSON.stringify(expected)!==JSON.stringify(actual))issue('coverage','COVERAGE_MISMATCH','Reconcile every supplied inventory element once; coverage differs from expectedElements.');
 }
 for(const retired of array(plan.retiredTaskIds))if(ids.includes(retired)||tasks.some(t=>array(t.prerequisites).includes(retired))||coverage.some(c=>c.owner===retired))issue('retiredTaskIds','RETIRED_REFERENCE','Retired IDs cannot remain in active tasks, dependencies or ownership.');
 return {planContractVersion:2,passed:errors.length===0,taskCount:tasks.length,coverageCount:coverage.length,errors,limits:'Deterministic structure, snapshot/rendering, input, graph and ownership checks. Not semantic, language-quality, source-completeness or live-tenant certification.'};
}
module.exports={validate,HEADINGS,LABELS,END_LABELS,esc};
if(require.main===module){try{const args=process.argv.slice(2),opt=n=>args[args.indexOf(n)+1];if(!args.includes('--plan')||!args.includes('--markdown'))throw Error('Usage: node validate-plan-output-contract.cjs --plan plan.json --markdown plan.md [--out validation.json]');const result=validate(JSON.parse(fs.readFileSync(opt('--plan'),'utf8')),fs.readFileSync(opt('--markdown'),'utf8'));if(args.includes('--out'))fs.writeFileSync(opt('--out'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));if(!result.passed)process.exitCode=1;}catch(error){console.error(error.message);process.exitCode=1;}}
