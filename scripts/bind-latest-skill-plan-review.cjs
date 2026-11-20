// Authored, full comparative review of plan revision 6. These decisions do not approve future edits.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const dir='docs/phase 2/incident management/osha-establishment-analytics';
const bytes=fs.readFileSync(path.join(dir,'implementation-plan.json')),md=fs.readFileSync(path.join(dir,'implementation-plan.md'),'utf8');
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const planSha='19a6735e792441c4deedec68329d60f94f64645a19febed84ccd2cf218b0b04d',markdownSha='d7bad9dc8522d73d9b8ad3fcf9ca2f935a3eaf23c5ae4830f2c9a33c2438411b';
if(sha(bytes)!==planSha||sha(md)!==markdownSha)throw Error('The reviewed files changed. Author a new review rather than renewing these hashes.');
const p=JSON.parse(bytes),old=JSON.parse(fs.readFileSync(path.join(dir,'history/implementation-v5/implementation-plan.json'),'utf8')),prior=JSON.parse(fs.readFileSync(path.join(dir,'history/implementation-v5/implementation-content-review.json'),'utf8'));
const gate=require(path.join(process.env.USERPROFILE,'.codex/skills/intelex-implementation-planner/scripts/validate-implementation-task-contract.cjs'));
// Manually approved after reading the assignments and comparing all changed text and field settings.
const taskReviews={
 'IMP-01':[
  'The sixteen new register fields and existing eight Type/Size choice values retain their specification-6 definitions. Source E36 remains Safety Metrics; selectors still use Deleted=FALSE and locally installed lookup Records.',
  'The register instructions start with the business result, then name its Object, screen and exact field settings. Object replaces the former base-record-type proxy; no new permissions policy is implied.',
  'Code 100, Name 255, Active TRUE, numeric NAICS/SIC, report-time address requirements, disabled catalogue inverses and absence of seed establishment Records remain unchanged. The related lists and used-code guards still have separate owners.'
 ],
 'IMP-02':[
  'Reconciled the eight entry fields, nine new establishment summary fields, both contribution grids and four actual existing field changes to specification 6 and original field GUIDs. Original EmployeeHrs/ContractrHrs are editable with Calculation=NULL; original Date/Location have IsReadOnly=FALSE. Audit FALSE to TRUE is an Object change.',
  'SourceEntryID still starts NULL and requires an entered value before first save. The copied helper row now explains unset length settings and the initial name copy in sentences. Four existing field changes have separate before/after rows, with no claim that the live Location editor was verified.',
  'Both native SUM expressions, zero after final deletion, MonthStartValueGenerator, Float types, source helper spelling, new AutoNumber sequence, independent headcounts, fixed saved summary identity and unchanged native GUIDs are preserved. Legacy-hours reconciliation remains externally owned.'
 ],
 'IMP-03':[
  'Compared all twenty-five base fields, four targets and establishment inverse list with the source mapping. The new independent abstract Object and direct concrete child reproduce the source fields without inheriting location binding.',
  'Abstract Object and concrete KPI Object now replace record-type terminology. The helper row explains copying the establishment name once, keeping it after deactivation and allowing authorized correction; period and target instructions remain direct.',
  'DAY(Date)=1, OSHAEstablishment+Date uniqueness, readonly twenty stored measures, hidden LocationIdHelp GUID, four editable Float targets and TargetDART caption Target DAIR are unchanged. Population remains IMP-08 and rate display IMP-13.'
 ],
 'IMP-04':[
  'Reviewed thirty-five annual base fields and their source mappings, including twenty-four G–M count/day fields, exact ReporLocationId spelling and destination OIISettings dependency. Five copied text fields retain their original source GUIDs and metadata.',
  'The instructions call the non-instantiable definition an abstract Object. Text rows explain unset bounds, translation/spellcheck settings and creation-only annual copies, while keeping explicit administrator correction distinct from ordinary viewing.',
  'January 1 validation, establishment/year uniqueness, Int64 totals, calendar Date without timezone capture, AutoNumber, hidden readonly settings and identifier, and initial annual header copies remain unchanged. IN-08 delays only the settings binding.'
 ],
 'IMP-05':[
  'Reconciled seventeen concrete summary fields, inherited annual fields, known Type/Size/recordability lookup Values, case grid paths and source OSHA case Object identity. IN-06 still supplies the new declaring relationship and IN-08 the case-print template.',
  'Annual summary Object replaces record-type wording. Seven copied text rows describe source settings and protected annual corrections in sentences. Case-list and printing instructions retain recognizable labels before internal paths.',
  'Readonly inverse case navigation, optional M:1 OII.OSHARecord, one displayed row per OSHA case, NameHidden privacy, case-level OSHA301 IDs and manually editable annual details survive unchanged. Existing location-summary links are not repointed.'
 ],
 'IMP-06':[
  'The six exported security settings inherit permissions and contain no explicit group rows. The user deferred this decision. Neither company-wide establishment access nor actual group names have been established; the specification requirements remain pending.',
  'The waiting and input blocks explicitly say that security is deferred and the recommendation is unapproved. Steps describe who may view/change Records and how used establishments are protected, while native enforcement remains a supplied technical setting.',
  'Dual-dimension authorization, readonly calculated totals/automatic links, immutable SourceEntryID, controlled inactive assignments, native case privacy and referenced-establishment Code/deletion guards remain the governing requirements. No new hierarchy, group assignments or processing-account permissions are invented.'
 ],
 'IMP-07':[
  'The user-confirmed GETRELATED signature and find-or-create behavior remain paired with actual source Location/Date names and proposed establishment/source names. Native ID-key spellings are set during configuration, not presented as extracted metadata.',
  'The handler description remains explicit about checking blank selections, finding the matching monthly summary and replacing or clearing the corresponding link. Object/Record terminology does not change the executable expressions.',
  'Create and Month/Location/OSHAEstablishment changes trigger linking; hour-only edits do not. Date-to-Date and GUID-to-GUID pairing, pre-lookup validation, NULL branches, no recursion, retained prior summaries/headcounts and downstream IN-09 ownership are preserved.'
 ],
 'IMP-08':[
  'Compared twenty output rows with source report 2737 and hours report 2612. The monthly population is OII rows by DateUserEntered-derived MonthYearHelp, with no added worker, workflow or recordability population filter.',
  'The task explains that results replace the monthly measures and preserve user targets. Object/Record wording remains consistent; exact flag conversions, raw-day arithmetic and hours fields are still stated in each relevant instruction.',
  'Sixteen incident measures and four employee/contractor hours outputs, flat Lo/Ru equality, empty-to-zero behavior, numeric conversion of Text incident totals, full-month recovery and complete-result retention are unchanged. IN-06 and IN-09 still block selection/execution completion.'
 ],
 'IMP-09':[
  'Compared all forty-three rows: twenty-four G–M outputs, four workforce outputs and fifteen initial copies. Recordable eligibility, YearHelp, capped annual days and source monthly-summary headcount counting remain grounded in the decoded reports.',
  'Annual refresh, header correction and output checks retain business explanations and named mechanisms. Record terminology preserves the difference between monthly summary Records, source entries and annual reporting history.',
  'Employee-only annual hours, SUM(EmployeeHCount)/COUNT(summary Id), zero fallback, 220/3 example, no invented rounding, fifteen creation-only copies, preserved overrides, five pre-output address/name requirements and authorized correction remain intact. No monthly-generation schedule or incident-side implementation is added.'
 ],
 'IMP-10':[
  'Rechecked the two existing Event Handler IDs, ordered KPI/OSHA imports, headcount hooks and 36-hour current-assignment selection limitation. Source ordering does not establish transactional or synchronous completion support.',
  'The task describes which results refresh after changes and why failures must remain visible. Existing process names stay exact; Object/Record terminology does not imply that a calculated change fires an Update event.',
  'Full previous/corrected period recovery, historical and empty scopes, distinct headcount hooks, duplicate-request handling, success/failure readiness and preservation of saved hours are unchanged. IN-09 and incident notices under IN-06 remain explicit blockers.'
 ],
 'IMP-11':[
  'Reviewed four print rows against extracted OSHA/Cal 300 link keys and the Combined Cal parameter discrepancy. Native custom-Object printing and templates remain unverified inputs under IN-08.',
  'The assignment explains four establishment case-log outcomes, cases/no-cases templates and privacy. It uses Object for the configured summary and does not imply a working printer from a copied URL.',
  'Selected establishment/year, protected case names, pre-output checks and result readiness remain required. Existing location links and IDs are reused, and no unsupported combined parameter is selected.'
 ],
 'IMP-12':[
  'Rechecked the two 300A form rows, saved header fields, twelve G–M measures and two workforce fields. Destination forms/settings and supported merge binding remain IN-08.',
  'The instructions explain which annual information fills the forms and why later master edits do not change historical reporting. Readonly stored annual values remain distinct from current master values.',
  'Both print options consume one Lo/Ru set, exact Year/header/workforce fields, shared validation and result readiness. Original location form links remain unchanged and no template reference is invented.'
 ],
 'IMP-13':[
  'The extract includes four target fields and preparation reports, but no actual-rate report/dashboard formulas. The recent conversation clarified that the required input is the existing OOTB configuration to reproduce for establishments.',
  'Scope, waiting, local inputs and four rate rows consistently request reuse of supplied OOTB formulas and presentation. They no longer ask the client to invent a new rate policy or treat the missing display as proof OOTB lacks one.',
  'TRIR uses recordable counts; DAIR uses days-away incident counts; LTIR uses positive combined-day incident counts; severity uses days. TargetDART remains labelled DAIR. Hours population, scaling, rounding, zero handling and multi-period rules remain unsupplied; no normalizer or stored-rate field is invented.'
 ],
 'IMP-14':[
  'Rechecked the electronic-submission dashboard locator, annual field list and known recordability Value 1/2 domain. The extract does not include the file definition or establish a direct-submission API.',
  'The task describes producing a file and connecting its columns. Missing file version, permitted values and output route remain named inputs; no generic technical proxy replaces Object/Record.',
  'Each establishment/year exports one complete Ru measure set, with identifiers and classification mapping, shared required-field checks and recordability consistency. Translated captions are not file codes; no credentials, transmission schedule or direct send is added.'
 ],
 'IMP-15':[
  'Rechecked the initializer Event Handler and scheduled-import IDs: it writes Location.Id and Date only, with no hour amount mapping. No actual payroll/API/hour writer is identified by the supplied package.',
  'The task describes changing only supplied real connections and explaining repeated references and corrections in plain language. Missing feed names/mappings remain an input, not a discovery assignment.',
  'Real feeds target normal Hours Worked saves, supply stable SourceEntryID and month-start Date, preserve independent dimensions and headcount mappings, replace corrections without duplicate hours and disable identified direct-hour writes. Historical migration and release remain outside scope.'
 ]
};
const editorial=s=>String(s).replace(/a shared base record type/g,'an inheritance base Object').replace(/shared base record type/g,'inheritance base Object').replace(/record type/g,'Object').replace(/type of record/g,'Object').replace(/\bobjects\b/g,'Objects').replace(/\bobject\b/g,'Object').replace(/\brecords\b/g,'Records').replace(/\brecord\b/g,'Record');
// Explicitly reviewed restatements of the same copied-text field settings and lifecycle.
const equivalent={
 'IMP-02':['configurationRows.12'],
 'IMP-03':['configurationRows.7'],
 'IMP-04':['configurationRows.9','configurationRows.18','configurationRows.19','configurationRows.22','configurationRows.28'],
 'IMP-05':['configurationRows.1','configurationRows.3','configurationRows.6','configurationRows.8','configurationRows.14','configurationRows.15','configurationRows.16']
};
const overrides={
 'IMP-02':{
  'modifications.1':['Replace existing EmployeeHrs direct input with readonly SUM(HoursWorkedEntries.EmployeeHours) after external cutover reconciliation; retain GUID and Float type.','SafetyMetrics_HrsandHeadcountObject.EmployeeHrs native calculation and SafetyMetrics_HrsandHeadcount_Detail control'],
  'modifications.2':['Replace existing ContractrHrs direct input with readonly SUM(HoursWorkedEntries.ContractorHours) after external cutover reconciliation; retain GUID and Float type.','SafetyMetrics_HrsandHeadcountObject.ContractrHrs native calculation and SafetyMetrics_HrsandHeadcount_Detail control'],
  'modifications.3':['Change the Date detail control from its exported ordinary editable setting to creation-only selection, preserving requiredness and MonthStartValueGenerator; enforce saved identity through the proposed check.','SafetyMetrics_HrsandHeadcount_Detail Date control and Protect Monthly Summary Identity'],
  'modifications.4':['Change Location control to creation-only selection while preserving the native relationship, requiredness and access; treat DisplayAs=String as source evidence rather than verified live editing.','SafetyMetrics_HrsandHeadcount_Detail Location control and Protect Monthly Summary Identity']
 },
 'IMP-03':{
  scope:['Create the independent incident-rate abstract and concrete KPI Objects, twenty saved measures, identity/helpers, four targets, screens and the establishment inverse list. Keep population and final rates with their separate owners.','TG_EstIncRateAbstractObject, TG_EstIncidentRateKPIObject and related screens/list'],
  'steps.0':['Create the non-instantiable abstract Object and its direct concrete KPI child, with no location binding, native audit and no workflow; declare inherited fields only once.','New incident-rate Object definitions and direct inheritance in Safety Metrics']
 },
 'IMP-04':{'steps.0':['Create an independent non-instantiable annual base Object with IsAbstract TRUE, IsLocationBound FALSE, native audit and no workflow.','TG_EstOSHAAbstractObject native Object settings in Safety Metrics']},
 'IMP-13':{
  scope:['Adapt the supplied existing OOTB actual-rate formulas and display to establishment monthly measures and period selection, retaining targets and readiness without stored-rate fields.','Proposed Establishment Incident Rates report/dashboard; supplied source formulas and display'],
  'configurationRows.0':['Calculate report TRIR from RuCtRecordable using the hours, scale, rounding and zero/missing rules in the supplied OOTB formula; compare TargetTRIR.','Establishment Incident Rates TRIR report expression and target comparison'],
  'configurationRows.1':['Calculate report DAIR from RuNumIncDayAway using supplied OOTB rules; compare TargetDART with displayed caption Target DAIR.','Establishment Incident Rates DAIR expression and target comparison'],
  'configurationRows.2':['Calculate LTIR from the incident flag count RuNumIncLostTim with supplied OOTB hours/scale/rounding/zero rules; compare TargetLTIR rather than using combined days as the numerator.','Establishment Incident Rates LTIR expression and target comparison'],
  'configurationRows.3':['Calculate severity from RuNumDaysAway plus RuNumTrnsfRstDy using supplied OOTB day, hours and scaling rules; compare TargetSeverRate.','Establishment Incident Rates severity expression and target comparison'],
  'steps.0':['Bind the report to establishment KPI Records and establishment/month or period selection. Reproduce supplied OOTB multi-month arithmetic without averaging monthly rates or combining employee/contractor or matching Lo/Ru totals.','Establishment Incident Rates data source, selectors and period calculation']
 }
};
const checks={standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true,businessLanguageThroughout:true,technicalMeaningPreserved:true,coverageOwnershipReviewed:true};
const reviews=p.tasks.map(t=>{
 const before=old.tasks.find(x=>x.id===t.id),priorReview=prior.tasks.find(x=>x.id===t.id),beforeUnits=new Map(gate.units(before).map(u=>[u.path,u.text]));
 if(!taskReviews[t.id])throw Error('Missing authored task review '+t.id);
 const instructions=gate.units(t).map(u=>{
  const explicit=overrides[t.id]?.[u.path];if(explicit)return {path:u.path,requiredChange:explicit[0],mechanism:explicit[1]};
  if(u.text===editorial(beforeUnits.get(u.path))||equivalent[t.id]?.includes(u.path)){
   const retained=priorReview.instructions.find(v=>v.path===u.path);if(!retained)throw Error('Missing prior specific review '+t.id+' '+u.path);return retained;
  }
  throw Error('An unreviewed change remains: '+t.id+' '+u.path);
 });
 const [evidenceReview,languageReview,meaningReview]=taskReviews[t.id];
 return {id:t.id,taskHash:gate.hash(t),renderedTaskHash:gate.renderedHash(md,t.id),evidenceReview,languageReview,meaningReview,checks:{...checks},instructions};
});
fs.writeFileSync(path.join(dir,'implementation-content-review.json'),JSON.stringify({version:1,planRevision:6,specificationRevision:6,scope:'Full author review of all fifteen active tasks, including task-local inputs, readiness, dependencies, coverage and exact operative text.',reviewType:'Comparative author content review; not independent approval or live tenant verification',reviewedPlanSha256:planSha,reviewedMarkdownSha256:markdownSha,tasks:reviews},null,2)+'\n');
console.log('Bound the full latest-skill author review to plan revision 6.');
