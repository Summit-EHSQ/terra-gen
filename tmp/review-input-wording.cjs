const fs=require('fs'),path=require('path');
const dir='docs/phase 2/incident management/osha-establishment-analytics';
const p=JSON.parse(fs.readFileSync(path.join(dir,'implementation-plan.json'),'utf8'));
const before=JSON.parse(fs.readFileSync('tmp/implementation-plan-before-input-wording.json','utf8'));
const review=JSON.parse(fs.readFileSync('tmp/implementation-content-review-before-input-wording.json','utf8'));
const md=fs.readFileSync(path.join(dir,'implementation-plan.md'),'utf8');
const v=require('C:/Users/DaveMcLean/.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs');
// Task-specific decisions after reading every rewritten global and local input description.
const notes={
 'IMP-01':'The revised text still asks only for the two existing classification lists, their codes and availability rules; it explicitly allows the other register work to continue.',
 'IMP-02':'Saved-summary protection and initial name copying remain separate from the shared synchronization assignment. The text-length and first-creation edit settings remain the only additional local details requested.',
 'IMP-03':'The plain-language description preserves the missing name-field length and automatic numbering details while allowing the remaining KPI setup. No calculation rule or field setting was added.',
 'IMP-04':'The two explanations retain copied name/address lengths, automatic numbering and the correct environment-specific OSHA settings reference. They do not imply the source reference is portable.',
 'IMP-05':'All four local needs remain distinct: text lengths, existing classification choices, case-record links/multiplicity and case-level 301/reporting requirements. Known individual fields can proceed and no incident-side work is assigned.',
 'IMP-06':'Business wording still requires actual user groups and record visibility/change rights, including historical correction. The in-use check still protects establishment codes and deletion only after references exist.',
 'IMP-07':'The rewritten explanation retains create/change/delete timing, original assignments, manual unique references, all-or-none saves, simultaneous update protection and authorized recalculation. It does not promise an unverified Intelex capability.',
 'IMP-08':'The text retains sixteen incident-derived measures versus four already-defined hour measures, establishment attribution/correction information and complete-result save behavior. Fields remain separate from automatic population work.',
 'IMP-09':'The wording preserves case links, annual policy, limits/averaging, environment settings, additional output requirements, annual/header correction and conflict-free complete saves. It still excludes incident-record changes.',
 'IMP-10':'Existing location process names/calling details and success/failure handling remain required. Incident notifications still supply both previous and corrected establishment/period, with no new incident automation assigned.',
 'IMP-11':'Templates with cases and with no cases remain required, without implying that cases must be completed. Combined Cal behavior and custom-establishment report compatibility remain explicit unresolved needs.',
 'IMP-12':'Both annual-form templates, their system references, supported population from the new summary and form-specific mandatory information remain requested in business language.',
 'IMP-13':'All denominator, scale, rounding, zero/missing-hours and multi-month decisions remain explicit, together with the working rate report and target comparison setup; no numerical value is invented.',
 'IMP-14':'File version/layout/format requirements, stable reference codes and environment-specific pre-export requirements remain separate needs. The wording does not introduce direct regulatory transmission.',
 'IMP-15':'The task remains unable to start until actual imports/connections and their source/target fields are supplied. The rewrite does not assert an existing integration or turn identification into assigned configuration work.'
};
const omit=t=>Object.fromEntries(Object.entries(t).filter(([k])=>!['suppliedInputDescriptions','blockedStatus'].includes(k)));
const changes=[];
for(const t of p.tasks){
 const old=before.tasks.find(x=>x.id===t.id),r=review.tasks.find(x=>x.id===t.id);
 if(!old||!r||r.taskHash!==v.hash(old))throw Error('Reviewed previous snapshot is not intact: '+t.id);
 if(JSON.stringify(omit(old))!==JSON.stringify(omit(t))||JSON.stringify(v.units(old))!==JSON.stringify(v.units(t)))throw Error('Operative content changed; full rereview required: '+t.id);
 if(!notes[t.id])throw Error('Missing language-review decision: '+t.id);
 r.taskHash=v.hash(t);r.renderedTaskHash=v.renderedHash(md,t.id);
 r.evidenceReview+=' Language-only revision review: '+notes[t.id];
 r.languageRevisionReview={scope:'External-input and readiness explanations only; all operative instructions, criteria, roles, prerequisites and input IDs compared unchanged.',decision:notes[t.id]};
 changes.push({id:t.id,changedFields:['suppliedInputDescriptions','blockedStatus'],operativeContentUnchanged:true});
}
review.reviewScope='All 15 tasks: original full operative review retained after exact comparison; rewritten task-local input/readiness explanations manually reviewed in full. All 12 global input explanations and external responsibility constraints reviewed in business language.';
fs.writeFileSync(path.join(dir,'implementation-content-review.json'),JSON.stringify(review,null,2));
fs.writeFileSync(path.join(dir,'implementation-input-language-review.json'),JSON.stringify({scope:'Business-language revision of external inputs and constraints',globalInputsReviewed:p.externalInputs.map(i=>i.id),taskChanges:changes,unchanged:'Task objectives, scopes, configuration rows, ordered steps, modifications, deliverables, acceptance criteria, roles, technical prerequisites, input IDs and field coverage',result:'Rewritten descriptions preserve the requested information, business purpose and affected work. No new implementation or approval requirement introduced.'},null,2));
console.log('Reviewed all 12 global inputs and the input/readiness wording for all 15 unchanged operative task records.');
