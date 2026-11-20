const assert=require('node:assert/strict');
const {validate,HEADINGS,LABELS,esc}=require('./validate-plan-output-contract.cjs');
function fixture(){
 const task={id:'IMP-01',title:'Capture inspection results',category:'Objects and forms',objective:'Let inspectors record a result.',scope:'Add an optional result field to Inspection.',deliverable:'Inspection includes Result.',prerequisites:[],predecessorOutputs:[],blockedStatus:'Ready to configure.',implementer:'Associate',reviewer:'Senior Consultant',rationale:'This uses standard field configuration.',assumptions:'None',inputs:[],suppliedInputDescriptions:[],configurationRows:[['Result','Add an optional Text field with a 100-character maximum and no default.']],modifications:[],steps:['Place Result on the Inspection form.'],accept:['Inspectors can save a result of up to 100 characters.'],refs:['Approved specification: Inspection fields']};
 return {planContractVersion:2,title:'Inspection configuration implementation plan',date:'2026-11-12',scope:'Inspection results only.',basis:[{reference:'Approved specification',limitation:'No live tenant verification.'}],evidenceNames:{},externalInputs:[{id:'IN-01',title:'Names of the inspection screens',description:'Provide the existing screen names so the field can be placed on the right screen.'}],tasks:[task],coverage:[{element:'Inspection.Result',action:'Add',owner:'IMP-01',description:'Add the optional result field.'}]};
}
function render(p){
 const sections=[p.scope,'| Task Number | Task Category | Task Name | Objective and Detailed Scope | Recommended Implementer |\n|---|---|---|---|---|\n'+p.tasks.map(t=>`| ${t.id} | ${esc(t.category)} | ${esc(t.title)} | **Objective:** ${esc(t.objective)}<br><br>**Detailed scope:** ${esc(t.scope)} | ${esc(t.implementer)} |`).join('\n'),p.externalInputs.map(x=>`- **${x.id} — ${x.title}:** ${x.description}`).join('\n'),p.tasks.map(t=>{
 const metadata=Object.entries(LABELS).map(([key,label])=>`**${label}:** ${key==='prerequisites'?(t.prerequisites.join(', ')||'None'):t[key]}`).join('\n\n');
 return `### ${t.id} — ${t.title}\n\n${metadata}\n\nWhat the earlier tasks provide: ${t.predecessorOutputs.map(x=>x.description).join(' ')}\n\n`+(t.configurationRows.length?'Fields and features to set up:\n\n| Field or feature | What to set up |\n|---|---|\n'+t.configurationRows.map(r=>`| ${r[0]} | ${r[1]} |`).join('\n')+'\n\n':'')+t.modifications.map(x=>x.element+': '+x.change).join('\n')+'\n\nBuild instructions:\n\n'+t.steps.map((s,i)=>(i+1)+'. '+s).join('\n')+'\n\n**How to check the result:**\n\n'+t.accept.map(x=>'- '+x).join('\n')+'\n\n**Information needed for this task:** '+(t.suppliedInputDescriptions.map(x=>x.id+': '+x.description).join(' ')||'None')+'\n\n**Specification references:** '+t.refs.join(' ')+'\n\n**Assumptions and open questions:** '+t.assumptions;
 }).join('\n\n'),'```mermaid\nflowchart TD\n'+p.tasks.map(t=>`${t.id.replace('-','_')}["${t.id} ${t.title}"]`).join('\n')+'\n'+p.tasks.flatMap(t=>t.prerequisites.map(id=>id.replace('-','_')+' --> '+t.id.replace('-','_'))).join('\n')+'\n```','| Part of the build | Responsible task | What happens |\n|---|---|---|\n'+p.coverage.map(c=>`| ${c.element} | ${c.owner??c.action} | ${c.description} |`).join('\n')];
 return '# '+p.title+'\n\n'+HEADINGS.map((h,i)=>'## '+h+'\n\n'+sections[i]).join('\n\n')+'\n';
}
let count=0;function test(name,run){run();count++;console.log('PASS '+name);}
function rejects(name,change,code){test(name,()=>{const p=fixture();let md=render(p);const result=change(p,md);md=typeof result==='string'?result:render(p);const verdict=validate(p,md);assert(verdict.errors.some(e=>e.code===code),JSON.stringify(verdict));});}
test('complete canonical fixture passes',()=>{const p=fixture();assert.equal(validate(p,render(p)).passed,true);});
rejects('section omission fails',(p,m)=>m.replace('## Task summary','## Summary'),'SECTION_ORDER');
rejects('summary abridgment fails',(p,m)=>m.replace('**Detailed scope:** '+p.tasks[0].scope,'**Detailed scope:** Add field.'),'SUMMARY_DRIFT');
rejects('missing required task label fails',(p,m)=>m.replace('**What is waiting:**','**Status:**'),'TASK_LABELS');
rejects('duplicate global input fails',p=>p.externalInputs.push(p.externalInputs[0]),'DUPLICATE_INPUT');
rejects('input without business title fails',(p,m)=>m.replace('IN-01 — Names of the inspection screens','IN-01'),'INPUT_RENDER');
rejects('unknown local input fails',p=>{p.tasks[0].inputs=['IN-99'];},'LOCAL_INPUTS');
rejects('local input without explanation fails',p=>{p.tasks[0].inputs=['IN-01'];},'LOCAL_INPUTS');
rejects('unknown predecessor fails',p=>{p.tasks[0].prerequisites=['IMP-99'];},'PREDECESSORS');
rejects('missing predecessor output fails',p=>{p.tasks[0].prerequisites=['IMP-01'];},'PREDECESSOR_OUTPUTS');
rejects('self dependency fails',p=>{p.tasks[0].prerequisites=['IMP-01'];p.tasks[0].predecessorOutputs=[{id:'IMP-01',description:'Inspection Result exists.'}];},'DEPENDENCY_CYCLE');
rejects('invented dependency edge fails',(p,m)=>m.replace('flowchart TD','flowchart TD\nIMP_01 --> IMP_02'),'GRAPH_EDGES');
rejects('external input node fails',(p,m)=>m.replace('flowchart TD','flowchart TD\nIN_01["Screen names"]'),'GRAPH_EXTRA_CONTENT');
rejects('duplicate coverage owner fails',p=>p.coverage.push(p.coverage[0]),'DUPLICATE_OWNER');
rejects('undefined owner fails',p=>{p.coverage[0].owner='IMP-99';},'COVERAGE_OWNER');
rejects('supplied inventory omission fails',p=>{p.expectedElements=['Inspection.Result','Inspection.Form'];},'COVERAGE_MISMATCH');
rejects('unrendered field instructions fail',(p,m)=>m.replace(p.tasks[0].configurationRows[0][1],'Add Result.'),'INSTRUCTION_RENDER');
rejects('malformed row reports an error without crashing',p=>{p.tasks[0].configurationRows=[['Missing instruction']];},'FIELD_ROWS');
test('two-task prerequisite and narrow input pass',()=>{const p=fixture(),second=structuredClone(p.tasks[0]);second.id='IMP-02';second.title='Place the inspection result';second.prerequisites=['IMP-01'];second.predecessorOutputs=[{id:'IMP-01',description:'The optional Result field exists.'}];second.inputs=['IN-01'];second.suppliedInputDescriptions=[{id:'IN-01',description:'The name of the Inspection entry screen.'}];p.tasks.push(second);assert.equal(validate(p,render(p)).passed,true);});
console.log(count+' output-contract checks passed.');
module.exports={fixture,render};
