// Comparative author review of the exact IN-02 revision, not an approval generator.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const dir='docs/phase 2/incident management/osha-establishment-analytics';
const bytes=fs.readFileSync(path.join(dir,'implementation-plan.json')),md=fs.readFileSync(path.join(dir,'implementation-plan.md'),'utf8');
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const planSha='48582f80639de927e2db8f7403d4a29e295c40495f68c700f04063e688b70a82',markdownSha='2e896af77299e1059523ac783889a0a578ca00c30343afc48d2188ab810523d1';
if(sha(bytes)!==planSha||sha(md)!==markdownSha)throw Error('Changed artifacts require a fresh author review; these decisions are pinned to the reviewed files.');
const p=JSON.parse(bytes),old=JSON.parse(fs.readFileSync(path.join(dir,'history/implementation-v4/implementation-plan.json'),'utf8')),review=JSON.parse(fs.readFileSync(path.join(dir,'history/implementation-v4/implementation-content-review.json'),'utf8'));
const gate=require(path.join(process.env.USERPROFILE,'.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs'));
const notes={
 'IMP-01':'All sixteen register fields, lookup settings, selectors and administration instructions are unchanged. Only the specification revision reference changes; existing new-register text sizes remain explicit design settings.',
 'IMP-02':'Reviewed NULL SourceEntryID default with required value before first save and no automatic generation. The copied helper keeps unset text bounds and false spellcheck. The new summary RecordNo copies the native generator with a new sequence. Existing location numbering is retained. IN-02 no longer blocks this task; earlier access dependencies still apply.',
 'IMP-03':'Reviewed the monthly base helper against its own source field GUID, with unset lengths and false spellcheck. RecordNo remains native AutoNumber with NULL explicit default. Twenty KPI values, inherited fields, targets and period controls retain their prior settings. Removed the answered capacity/numbering request.',
 'IMP-04':'Reviewed five copied annual text fields and their spellcheck values against the source. RecordNo stays AutoNumber with unset explicit default. Initial annual copies, readonly controls and correction behavior remain. Only destination settings under IN-08 still delay completion.',
 'IMP-05':'Reviewed all seven copied summary text fields: company, EIN, change reason, establishment name, OSHA300aID, EstablishmentID and industry description. Unset bounds and true spellcheck match each original GUID. Editable annual overrides remain protected from refresh. Case links/templates still need IN-06/IN-08.',
 'IMP-06':'User groups, dimension access and used-record protection remain waiting for IN-04. No permission or background-account requirement was added by the field-settings decision; only the specification reference changes.',
 'IMP-07':'Both exact GETRELATED expressions retain Date/GUID matching, null clearing and source-owned links. Corresponding native ID-key names are now set during this task rather than supplied externally. SourceEntryID starts NULL but must be supplied before first save. No hours-entry creation service, custom totals writer or transaction was introduced.',
 'IMP-08':'All twenty monthly measures and mappings are byte-identical to the preceding reviewed task. Native summary sums remain the hours source; establishment selection and downstream status still depend on IN-06/IN-09. Only the specification revision reference changes.',
 'IMP-09':'All forty-three annual rows, employee-only workforce arithmetic, fifteen initial copies and five output checks are unchanged. Missing-month/completeness, helper and downstream inputs remain. Only specification references change; text metadata does not change report arithmetic.',
 'IMP-10':'All seven dispatch/headcount/notification steps are unchanged, including the distinction between native calculated changes and Update/DateModified. IN-09 invocation and IN-06 correction notices remain necessary. Only the specification reference changes.',
 'IMP-11':'Four case-log options and their print conditions are unchanged. Regulatory templates and custom-object report support remain IN-08; resolving text settings supplies no print-template capability.',
 'IMP-12':'Both annual-form outputs, selected-summary connection and settings dependencies are unchanged. IN-08 still supplies the regulatory forms and supported custom-object merge route.',
 'IMP-13':'Four rates and target comparisons remain dependent on actual denominator, scale, rounding and report definitions. IN-05/IN-11 remain; copying field metadata supplies no missing rate formula.',
 'IMP-14':'Export setup and known internal classification checks are unchanged. IN-12 file layout/codes and IN-08 generation settings remain external inputs; no compliance or working-export claim is added.',
 'IMP-15':'Actual hours-feed mapping instructions are unchanged. IN-10 still identifies real writers and stable keys. The known Location/Date-only initializer remains excluded from synthetic hours creation; default NULL does not supply imported source keys.'
};
const overrides={
 'IMP-02':{
  'configurationRows.0':['Create SourceEntryID as required unique non-localizable text max 255, initially NULL. The user or import supplies it before first save; keep it immutable afterward and use it for the record label. Generate no manual GUID-based key.','TG_HoursWorkedObject.SourceEntryID native default, uniqueness and edit controls'],
  'configurationRows.12':['Copy the establishment monthly-summary helper from source 7d5c95fb-f74e-4ed3-82bc-719b34cb943a, preserving unset length/precision settings and false localization/spellcheck. Retain creation stamping and historical-label correction controls.','TG_EstHrsHeadcountObject.LocNameHelper field metadata and A1 creation stamp'],
  'configurationRows.14':['Create establishment summary RecordNo with the AutoNumber field type and source StartValue 1 / IncrementStep 1 generator settings; allocate its own new sequence and retain optional/readonly behavior.','TG_EstHrsHeadcountObject.RecordNo native AutoNumber field and generator']
 },
 'IMP-03':{
  'configurationRows.0':['Create required readonly RecordNo as AutoNumber Int64, retaining the source unset explicit default while native numbering supplies the value. New target identities and numbering remain distinct.','TG_EstIncRateAbstractObject.RecordNo native AutoNumber field'],
  'configurationRows.7':['Copy monthly incident-rate LocNameHelper with unset text bounds/precision, false localization and spellcheck. Retain A2 generation stamp, inactive-history label and authorized corrections.','TG_EstIncRateAbstractObject.LocNameHelper metadata and A2 stamp']
 },
 'IMP-04':{
  'configurationRows.9':['Copy LocationStreet text metadata with unset bounds/precision, false localization and true spellcheck. Retain initial establishment street snapshot, readonly access and explicit audited correction.','TG_EstOSHAAbstractObject.LocationStreet native field and A3 initial copy'],
  'configurationRows.18':['Copy LocationCity text metadata with unset bounds/precision, false localization and true spellcheck. Keep the initial establishment city snapshot and protected later correction.','TG_EstOSHAAbstractObject.LocationCity native field and A3 initial copy'],
  'configurationRows.19':['Copy LocationPostal text metadata with unset bounds/precision, false localization and true spellcheck. Preserve initial postal snapshot and avoid later master-edit cascades.','TG_EstOSHAAbstractObject.LocationPostal native field and A3 initial copy'],
  'configurationRows.22':['Copy LocationState text metadata with unset bounds/precision, false localization and true spellcheck. Keep initial establishment state snapshot and explicit audited correction.','TG_EstOSHAAbstractObject.LocationState native field and A3 initial copy'],
  'configurationRows.23':['Use required readonly AutoNumber Int64 for annual base RecordNo, keeping DefaultValue NULL as in source. Native numbering supplies new identities.','TG_EstOSHAAbstractObject.RecordNo native AutoNumber field'],
  'configurationRows.28':['Copy LocationName text metadata with unset bounds/precision, false localization and false spellcheck. Keep the initial establishment name snapshot and audited correction behavior.','TG_EstOSHAAbstractObject.LocationName native field and A3 initial copy']
 },
 'IMP-05':{
  'configurationRows.1':['Copy CompanyName with source unset text bounds/precision, false localization and true spellcheck. Keep initial company-name copy and administrator overrides preserved on refresh.','TG_EstOSHASummaryObject.CompanyName field and initial copy'],
  'configurationRows.3':['Copy EINNumber with unset text bounds/precision, false localization and true spellcheck. Keep initial EIN copy and authorized annual overrides.','TG_EstOSHASummaryObject.EINNumber field and initial copy'],
  'configurationRows.6':['Copy ChangeReason with unset text bounds/precision, false localization and true spellcheck. Preserve administrator-maintained correction reasons and native audit without refresh overwrites.','TG_EstOSHASummaryObject.ChangeReason native field and edit controls'],
  'configurationRows.8':['Copy EstablishmeName with unset text bounds/precision, false localization and true spellcheck. Keep original spelling, initial name copy and annual administrator overrides.','TG_EstOSHASummaryObject.EstablishmeName field and initial copy'],
  'configurationRows.14':['Copy OSHA300aID with unset text bounds/precision, false localization and true spellcheck. Preserve initial reporting-ID snapshot and authorized annual overrides.','TG_EstOSHASummaryObject.OSHA300aID field and initial copy'],
  'configurationRows.15':['Copy EstablishmentID with unset text bounds/precision, false localization and true spellcheck. Preserve initial establishment reporting-ID snapshot and annual overrides.','TG_EstOSHASummaryObject.EstablishmentID field and initial copy'],
  'configurationRows.16':['Copy InduDescription with unset text bounds/precision, false localization and true spellcheck. Retain the original internal name, initial industry copy and annual overrides.','TG_EstOSHASummaryObject.InduDescription field and initial copy']
 },
 'IMP-07':{
  'configurationRows.0':['Keep the location GETRELATED Date/Month and native ID/GUID pairs and NULL clear branch. Set the actual Location reference ID-key spelling during configuration; do not invent a custom GUID field or evaluate a blank dimension.','Hours Worked Create/Update Action Handler location-summary assignment'],
  'configurationRows.1':['Keep the establishment GETRELATED Date/Month and ID/GUID pairs and NULL clear branch. Set the actual generated establishment ID-key spelling during configuration without adding a duplicate identifier field.','Hours Worked Create/Update Action Handler establishment-summary assignment'],
  'steps.1':['Require access, month-start Date, one or both dimensions, nonnegative finite hours and unique immutable SourceEntryID. SourceEntryID begins NULL but is supplied before first save; the handler links existing entries rather than generating their source identity.','Hours Worked native validation/default and Create/Update preconditions']
 }
};
const tasks=p.tasks.map(t=>{
 const priorTask=old.tasks.find(x=>x.id===t.id),priorReview=review.tasks.find(x=>x.id===t.id),priorUnits=new Map(gate.units(priorTask).map(u=>[u.path,u.text]));
 const instructions=gate.units(t).map(u=>{
  const authored=overrides[t.id]?.[u.path];if(authored)return {path:u.path,requiredChange:authored[0],mechanism:authored[1]};
  if(priorUnits.get(u.path)!==u.text)throw Error('Unreviewed changed instruction '+t.id+' '+u.path);
  const retained=priorReview.instructions.find(x=>x.path===u.path);if(!retained)throw Error('Missing retained instruction review');return retained;
 });
 return {...priorReview,taskHash:gate.hash(t),renderedTaskHash:gate.renderedHash(md,t.id),evidenceReview:notes[t.id],languageReview:priorReview.languageReview+' Revision 6 review: answered field settings are stated directly; task waiting information keeps only unresolved inputs.',meaningReview:notes[t.id],instructions};
});
fs.writeFileSync(path.join(dir,'implementation-content-review.json'),JSON.stringify({version:1,planRevision:5,specificationRevision:6,scope:'Full comparative author review of all fifteen tasks; unchanged operative text retains its prior specific review, every changed instruction has an explicit decision above.',reviewType:'Author content review; not independent approval or live configuration testing',reviewedPlanSha256:planSha,reviewedMarkdownSha256:markdownSha,tasks},null,2)+'\n');
console.log('Bound the reviewed IN-02 field settings to the exact plan and rendered task snapshots.');
