/* Dependency-free task-content gate. This checks structure and wording, not tenant behavior. */
const fs=require('node:fs'),crypto=require('node:crypto');
const hash=value=>crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
function units(task){
 return [
  {path:'scope',text:task.scope||''},
  ...(task.configurationRows||[]).map((r,i)=>({path:'configurationRows.'+i,text:r.join(': ')})),
  ...(task.steps||[]).map((text,i)=>({path:'steps.'+i,text})),
  ...(task.modifications||[]).map((m,i)=>({path:'modifications.'+i,text:(m.businessElement||m.element)+': '+(m.businessChange||m.change)}))
 ];
}
const externalId=/\b(?:SEC|REM|NTF|PF|R|H|D|F|I|W|S)[-–]?\d{2,}(?:\.\d+)?\b/g;
const outsourced=/\b(?:refer to|see (?:the )?(?:specification|requirement|external)|according to (?:the )?(?:referenced |technical )?(?:specification|tables?|rules?)|(?:as |from (?:its|the) )(?:specified|defined|described) in|from (?:its|the) specification|match(?:es)? (?:the )?specification)\b/i;
const preparation=/\b(?:identify|resolve|record|document|confirm|inventory)\b.{0,70}\b(?:existing|supporting)\b.{0,70}\b(?:options?|identit(?:y|ies)|identifiers?|entries|values)\b/i;
const platformSetup=/\b(?:grant|configure|provision|supply|create|set up)\b.{0,110}\b(?:system[- ]processing (?:context|principals?|permissions?)|system[- ](?:context|principal)|platform[- ]processing (?:context|permissions?))\b/i;
function unnamedEvidence(text,names={}){
 return [...String(text).matchAll(/\bE\d+\b/g)].filter(m=>!names[m[0]]||!text.slice(0,m.index).endsWith(names[m[0]]+' (')||text[m.index+m[0].length]!==')').map(m=>m[0]);
}
const normalize=s=>String(s).replace(/&#124;/g,'|').replace(/\s+/g,' ').trim();
function taskSection(markdown,id){
 const headings=[...markdown.matchAll(/^### (IMP-\d+) — .+$/gm)],matches=headings.filter(m=>m[1]===id);
 if(matches.length!==1)return null;
 const start=matches[0].index,end=headings.find(m=>m.index>start)?.index??markdown.indexOf('\n## ',start+1);
 return markdown.slice(start,end<0?undefined:end);
}
const renderedHash=(markdown,id)=>hash(normalize(taskSection(markdown,id)||''));
function validate(plan,markdown,review,selected){
 const errors=[],issue=(task,path,code,message)=>errors.push({task,path,code,message});
 const tasks=plan.tasks||[],ids=selected||tasks.map(t=>t.id);
 if(!ids.length)issue(null,'tasks','EMPTY_SCOPE','Select at least one implementation task.');
 if(new Set(ids).size!==ids.length)issue(null,'tasks','DUPLICATE_SCOPE','Selected task IDs must be unique.');
 if(review?.version!==1)issue(null,'review','REVIEW_VERSION','Provide a version 1 content-review record.');
 if(selected){
  for(const t of tasks.filter(t=>!ids.includes(t.id)))if(review?.unchangedTaskHashes?.[t.id]!==hash(t))issue(t.id,'scope','UNREVIEWED_CHANGE','A task outside the selected scope is new or changed. Expand the review scope; do not renew its baseline hash to conceal an edit.');
  for(const id of Object.keys(review?.unchangedTaskHashes||{}))if(!tasks.some(t=>t.id===id))issue(id,'scope','UNREVIEWED_REMOVAL','A task outside the recorded scope was removed; reconcile the review scope and plan before delivery.');
 }
 for(const id of ids){
  const found=tasks.filter(t=>t.id===id);if(found.length!==1){issue(id,'id','TASK_ID','Selected task must occur exactly once.');continue;}
  const t=found[0],u=units(t);
  if(!t.configurationRows?.length&&!t.steps?.length&&!t.modifications?.length)issue(id,'instructions','NO_CHANGES','No concrete configuration instructions are present.');
  const texts=[...u,{path:'objective',text:t.objective||''},{path:'deliverable',text:t.deliverable||''},...(t.accept||[]).map((text,i)=>({path:'accept.'+i,text}))];
  for(const x of texts){
   const matches=[...x.text.matchAll(externalId)].map(m=>m[0]);
   if(matches.length)issue(id,x.path,'EXTERNAL_REQUIREMENT_ID','Move numbered requirement references to traceability; include the actual instructions here: '+[...new Set(matches)].join(', '));
   if(outsourced.test(x.text))issue(id,x.path,'OUTSOURCED_CONTENT','Replace the direction to another specification/table with the required settings or values.');
   if(preparation.test(x.text)||(/^(?:Existing|Supporting) (?:options|entries|identities):/i.test(x.text)))issue(id,x.path,'PREPARATION_AS_WORK','Identifying or recording existing values is an input/context activity unless a specific configuration modification is assigned.');
   if(platformSetup.test(x.text))issue(id,x.path,'PLATFORM_PROCESSING_SETUP','Intelex manages its processing context and permissions; remove this platform-processing setup assignment. Actual user permissions and operation behavior remain in scope.');
   if(/^(configurationRows|modifications)\./.test(x.path)){
    const missing=unnamedEvidence(x.text,plan.evidenceNames);
    if(missing.length)issue(id,x.path,'UNNAMED_EVIDENCE','Pair each evidence ID with its verified configuration name as Name (E123): '+missing.join(', '));
   }
  }
  const rawSection=taskSection(markdown,id);
  if(rawSection===null)issue(id,'markdown','RENDERED_TASK','Rendered plan must contain this detailed task exactly once.');
  else{
   const section=normalize(rawSection);
   for(const [i,line]of rawSection.split(/\r?\n/).entries()){
    if(/^\*\*Specification references:\*\*/.test(line))continue;
    if([...line.matchAll(externalId)].length||outsourced.test(line)||preparation.test(line))issue(id,'markdown.line.'+(i+1),'RENDERED_CONTENT','Rendered task contains an external requirement/directive or preparation-only instruction outside traceability.');
    if(platformSetup.test(line))issue(id,'markdown.line.'+(i+1),'PLATFORM_PROCESSING_SETUP','Remove the platform-managed processing permission assignment.');
    if(line.startsWith('| ')&&unnamedEvidence(normalize(line),plan.evidenceNames).length)issue(id,'markdown.line.'+(i+1),'UNNAMED_EVIDENCE','Instruction/change table evidence IDs must include their verified names, including the source-reference column.');
   }
   const rendered=[{path:'scope',text:t.scope},...(t.configurationRows||[]).flatMap((r,i)=>r.map((text,j)=>({path:'configurationRows.'+i+'.'+j,text}))),...(t.steps||[]).map((text,i)=>({path:'steps.'+i,text})),...(t.accept||[]).map((text,i)=>({path:'accept.'+i,text}))];
   for(const x of rendered)if(!x.text||!section.includes(normalize(x.text)))issue(id,x.path,'RENDER_MISMATCH','Reviewed instruction/criterion is missing from the rendered detailed task.');
  }
  const reviews=(review?.tasks||[]).filter(r=>r.id===id),r=reviews[0];
  if(reviews.length!==1){issue(id,'review','MISSING_REVIEW','Provide exactly one task-specific semantic review.');continue;}
  if(r.taskHash!==hash(t))issue(id,'review','STALE_REVIEW','The task changed after the content review; reread and review its current content.');
  if(r.renderedTaskHash!==renderedHash(markdown,id))issue(id,'review','STALE_RENDERED_REVIEW','The rendered detailed task changed after review or lacks a rendered-task review hash.');
  for(const check of ['standaloneInstructions','exactValuesIncluded','dependenciesDescribeOutputs','inputsAreLocalAndNarrow','acceptanceDescribesChanges'])if(r.checks?.[check]!==true)issue(id,'review.'+check,'INDEPENDENCE_REVIEW','Complete the named content review; an unchecked or failed check blocks delivery.');
  if(typeof r.evidenceReview!=='string'||r.evidenceReview.trim().length<30)issue(id,'review.evidenceReview','EVIDENCE_REVIEW','Describe the evidence reconciliation and any unresolved native details.');
  for(const x of u){
   const entries=(r.instructions||[]).filter(a=>a.path===x.path),a=entries[0];
   if(entries.length!==1||typeof a?.requiredChange!=='string'||a.requiredChange.trim().length<20||typeof a?.mechanism!=='string'||a.mechanism.trim().length<8)issue(id,x.path,'CHANGE_REVIEW','Review the tangible configuration difference and implementing element for each instruction; preparation, preservation and unidentified work must be removed.');
  }
  for(const a of r.instructions||[])if(!u.some(x=>x.path===a.path))issue(id,a.path,'STALE_INSTRUCTION_REVIEW','Review refers to an instruction that no longer exists.');
  for(const input of t.inputs||[]){const descriptions=(t.suppliedInputDescriptions||[]).filter(i=>i.id===input);if(descriptions.length!==1||descriptions[0].description?.length<30)issue(id,'inputs.'+input,'LOCAL_INPUT','Include a precise task-local input description and the configuration it blocks.');}
 }
 return {contractVersion:1,passed:errors.length===0,scope:ids,unreviewedTaskIds:tasks.filter(t=>!ids.includes(t.id)).map(t=>t.id),errors,limits:'Automated wording, rendering and review-freshness checks plus recorded semantic review; not independent proof of configuration correctness or tenant verification.'};
}
module.exports={validate,hash,units,renderedHash};
if(require.main===module){
 try{
  const args=process.argv.slice(2),option=name=>{const i=args.indexOf(name);return i<0?undefined:args[i+1];};
  const planPath=option('--plan'),mdPath=option('--markdown'),reviewPath=option('--review');
  if(!planPath||!mdPath||!reviewPath)throw Error('Usage: node validate-implementation-task-contract.cjs --plan plan.json --markdown plan.md --review content-review.json [--tasks IMP-01,IMP-02] [--out validation.json]');
  const report=validate(JSON.parse(fs.readFileSync(planPath,'utf8')),fs.readFileSync(mdPath,'utf8'),JSON.parse(fs.readFileSync(reviewPath,'utf8')),option('--tasks')?.split(','));
  if(option('--out'))fs.writeFileSync(option('--out'),JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify(report,null,2));if(!report.passed)process.exitCode=1;
 }catch(e){console.error(e.message);process.exitCode=1;}
}
