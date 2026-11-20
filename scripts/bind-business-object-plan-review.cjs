// Authored naming-only review: all fifteen tasks compared with the preceding reviewed plan.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const dir='docs/phase 2/incident management/osha-establishment-analytics';
const {convert,wording}=require('./osha-plan-business-object-names.cjs');
const bytes=fs.readFileSync(path.join(dir,'implementation-plan.json')),md=fs.readFileSync(path.join(dir,'implementation-plan.md'),'utf8');
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const planSha='6c6b6e0cc053f3691387aaa53f7c0eedd4eebea75d9f08cb7cddbd3e78e249b6',markdownSha='7dd9c6907f2945c511f2b1a8b84f314f3f6f3d310601b2dc1c9e0fe9500af7cf';
if(sha(bytes)!==planSha||sha(md)!==markdownSha)throw Error('The reviewed naming revision changed; rereview before binding.');
const p=JSON.parse(bytes),old=JSON.parse(fs.readFileSync(path.join(dir,'history/implementation-v6/implementation-plan.json'),'utf8')),review=JSON.parse(fs.readFileSync(path.join(dir,'history/implementation-v6/implementation-content-review.json'),'utf8'));
const gate=require(path.join(process.env.USERPROFILE,'.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs'));
const decisions={
 'IMP-01':'Reviewed OSHA Establishment creation, sixteen field rows and both administration screens using business names only. Safety Metrics and the existing lookup Object identifiers remain verified locators; unique Code, field settings and selection rules are unchanged.',
 'IMP-02':'Reviewed Hours Worked and Establishment Hours and Headcount creation, all source/summary field rows and both contribution grids. Business names replace proposed prefixes; the five existing change rows retain verified OOTB identifiers. Both SUM expressions, NULL SourceEntryID, creation-only summary identity and headcounts are unchanged.',
 'IMP-03':'Reviewed incident-rate abstract/concrete inheritance, all twenty-nine fields, four screens and establishment navigation by business Object name. Requiredness, monthly keys, stored values, targets and helper copying are unchanged.',
 'IMP-04':'Reviewed the independent Establishment OSHA Abstract Object and its detail/inventory screens without invented identifiers. All thirty-five field contracts, January 1 validation, saved header fields and destination settings dependency remain intact.',
 'IMP-05':'Reviewed Establishment OSHA Summary, its inheritance, seventeen fields, case list and detail/inventory screens by business name. Existing OII/OSHA case identifiers and template field paths remain verified references; incident privacy and case-print dependencies are unchanged.',
 'IMP-06':'The user-access task has no proposed Object system identifiers to replace. Rechecked its deferred status, both-dimension access requirement, historical corrections and used-establishment guards; the unapproved security recommendation remains excluded.',
 'IMP-07':'Reviewed both GETRELATED branches. The verified location expression remains exact. The new establishment branch now names the business Object and requires its assigned system name, Date/Month matching, matched GUID reference-ID keys and NULL clearing. It is a configuration instruction rather than a fabricated executable target identifier.',
 'IMP-08':'Reviewed the new monthly calculation target as Establishment Incident Rate KPI and hours source as Establishment Hours and Headcount. All twenty output instructions retain source OII counts, raw-day rules, employee/contractor separation, flat Lo/Ru equality, preserved targets and IN-06/IN-09 gaps.',
 'IMP-09':'Reviewed annual target and fifteen creation-copy source mappings using Establishment OSHA Summary and OSHA Establishment business names. All twenty-eight measures, initial-only copies, protected annual corrections, completeness gaps and full-year recovery rules are unchanged.',
 'IMP-10':'Refresh dispatch names, verified existing Event Handler/import IDs and the complete earlier-task outputs remain unchanged. Naming the new target Objects does not alter old/new-period recovery, native calculated-change caveats or failure/readiness handling.',
 'IMP-11':'All four OSHA/Cal case-log options remain unchanged. Rechecked that their new summary target is described by business name and that no fabricated Object identifier or unsupported print binding is introduced.',
 'IMP-12':'Both annual-form mappings retain their exact existing field paths, single Lo/Ru measure set and saved annual history. No invented Object or screen system identifier is present; templates and custom-Object support remain external inputs.',
 'IMP-13':'Reviewed the incident-rate report binding to the Establishment Incident Rate KPI business Object. Four rate measures, target fields, OOTB formula/display request and missing rate behavior remain unchanged; the naming change adds no calculation policy.',
 'IMP-14':'Reviewed the electronic-export link and data source against the Establishment OSHA Summary business Object. The existing dashboard locator remains verified evidence; file column requirements, classification mapping and output checks are unchanged.',
 'IMP-15':'Reviewed real-feed targets as Hours Worked.EmployeeHours and Hours Worked.ContractorHours rather than a prescribed new system Object name. Existing initializer IDs remain evidence, stable-key correction behavior and independent dimensions remain, and actual feed identification still blocks work.'
};
const reviews=p.tasks.map(t=>{
 const before=old.tasks.find(v=>v.id===t.id),previous=review.tasks.find(v=>v.id===t.id);
 if(JSON.stringify(t)!==JSON.stringify(convert(before)))throw Error('Unexpected non-naming task change '+t.id);
 const priorUnits=new Map(gate.units(before).map(u=>[u.path,u.text]));
 const instructions=gate.units(t).map(u=>{
  if(u.text!==wording(priorUnits.get(u.path)))throw Error('Unreviewed instruction '+t.id+' '+u.path);
  const item=previous.instructions.find(i=>i.path===u.path);if(!item)throw Error('Missing prior specific review');return convert(item);
 });
 return {...convert(previous),taskHash:gate.hash(t),renderedTaskHash:gate.renderedHash(md,t.id),evidenceReview:wording(previous.evidenceReview)+' Naming revision: '+decisions[t.id],languageReview:decisions[t.id],meaningReview:wording(previous.meaningReview)+' The explicit naming adapter preserves this behavior; system names for new Objects are assigned during configuration.',instructions};
});
fs.writeFileSync(path.join(dir,'implementation-content-review.json'),JSON.stringify({version:1,planRevision:7,specificationRevision:6,scope:'Full comparative author review of all fifteen tasks; every operative instruction is unchanged except the explicit business-name adapter and establishment lookup wording.',reviewType:'Author content review, not independent approval or live tenant testing',reviewedPlanSha256:planSha,reviewedMarkdownSha256:markdownSha,tasks:reviews},null,2)+'\n');
console.log('Bound the business-Object-name review to plan revision 7.');
