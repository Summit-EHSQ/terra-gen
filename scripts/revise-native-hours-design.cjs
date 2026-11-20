const fs=require('node:fs'),path=require('node:path');
const dir='docs/phase 2/incident management/osha-establishment-analytics';
const archive=path.join(dir,'history/v4');fs.mkdirSync(archive,{recursive:true});
for(const name of ['technical-specification.md','target-model.json','validation.json','revision-history.json','external-input-resolution.json'])if(!fs.existsSync(path.join(archive,name)))fs.copyFileSync(path.join(dir,name),path.join(archive,name));
const planArchive=path.join(dir,'history/implementation-v3');fs.mkdirSync(planArchive,{recursive:true});
for(const name of ['implementation-plan.md','implementation-plan.json','implementation-content-review.json','implementation-plan-validation.json','implementation-content-validation.json'])if(!fs.existsSync(path.join(planArchive,name)))fs.copyFileSync(path.join(dir,name),path.join(planArchive,name));
const read=name=>JSON.parse(fs.readFileSync(path.join(archive,name),'utf8'));
const m=read('target-model.json'),resolution=read('external-input-resolution.json');
if(m.revision!==4)throw Error('Expected archived target revision 4.');
let doc=fs.readFileSync(path.join(archive,'technical-specification.md'),'utf8');
const esc=s=>String(s).replace(/\|/g,'&#124;').replace(/\r?\n/g,' ');
const replace=(a,b)=>{if(!doc.includes(a))throw Error('Missing revision anchor '+a.slice(0,80));doc=doc.replace(a,b);};
const section=(a,b,text)=>{const i=doc.indexOf(a),j=doc.indexOf(b,i+a.length);if(i<0||j<0)throw Error('Missing section '+a);doc=doc.slice(0,i)+text.trim()+'\n\n'+doc.slice(j);};
const obj=name=>m.objects.find(o=>o.internalName===name),field=(o,n)=>o.fields.find(f=>f.name===n);
const hours=obj('TG_HoursWorkedObject'),loc=obj('SafetyMetrics_HrsandHeadcountObject'),est=obj('TG_EstHrsHeadcountObject');
const formulas={location:'GETRELATED("SafetyMetrics_HrsandHeadcountObject", "Date", Month, "LocationId", Location.Id)',establishment:'GETRELATED("TG_EstHrsHeadcountObject", "Date", Month, "OSHAEstablishmentId", OSHAEstablishment.Id)',employee:'SUM(HoursWorkedEntries.EmployeeHours)',contractor:'SUM(HoursWorkedEntries.ContractorHours)'};
for(const o of m.objects)for(const f of o.fields){const prior=f.contract.map(esc).join(' | '),c=f.contract;
 if([loc,est].includes(o)){
  const dimension=o===loc?'Location':'OSHAEstablishment';
  if(['EmployeeHrs','ContractrHrs'].includes(f.name)){
   const expression=f.name==='EmployeeHrs'?formulas.employee:formulas.contractor;
   c[3]='Native calculated-field expression: '+expression+'; no independent stored-input default';
   c[4]='Read only to users/API/import clients; native calculated field, not an Action Handler-written total';
   c[5]='Native SUM over this summary\'s HoursWorkedEntries inverse of Hours Worked.'+(o===loc?'LocationHoursHeadcount':'EstablishmentHoursHeadcount')+'. Reflect related entry creation, hour edits, deletion and relinking; required empty-grid result 0. No custom totals writer, reconciliation processor or delete handler.';
   f.calculation={mechanism:'Native calculated field',expression,emptyGridExpected:0,evidence:'User-confirmed relationship/grid calculation design; SUM(collection.field) pattern extracted from OII source calculations'};
  }
  if(f.name==='Date')c[3]='GETRELATED matches Date to Hours Worked.Month on find/create; MonthStartValueGenerator remains the headcount-only creation default';
  if(f.name===dimension)c[3]='GETRELATED matches '+dimension+' identifier to the selected Hours Worked.'+dimension+'.Id; headcount editor selects at manual summary creation';
  if(f.name==='HoursWorkedEntries')c[5]='Inverse navigation over Hours Worked.'+(o===loc?'LocationHoursHeadcount':'EstablishmentHoursHeadcount')+'; native EmployeeHrs and ContractrHrs SUM calculations read this grid; no duplicate stored relationship';
  if(['EmployeeHCount','ContractrHCount'].includes(f.name))c[5]='Independent headcount maintenance; never sum headcounts from Hours Worked. A3/A4 refresh employment outputs after headcount changes through the separately supplied IN-09 route.';
 }
 if(o===hours){
  if(f.name==='SourceEntryID'){c[3]='Imports supply a stable namespaced key; manual-entry default is manual: plus native record GUID, configured with source-field defaults under IN-02';c[5]='Native unique constraint and immutable key; authorized updates reuse the key. No custom hours processor is needed for entry deduplication.';}
  if(f.name==='Month')c[5]='Link Hours Worked Summaries watches Month for relinking; require month-start Date and no timezone conversion. Native grid sums reflect changed membership.';
  if(['Location','OSHAEstablishment'].includes(f.name))c[5]='Link Hours Worked Summaries checks for NULL before GETRELATED. Populate/reassign only this dimension\'s monthly-summary link; clear that link when this dimension becomes NULL. At least one dimension remains required; historical references are retained.';
  if(['EmployeeHours','ContractorHours'].includes(f.name))c[5]='Native calculated SUM fields on each related summary read '+f.name+' through HoursWorkedEntries. Hour-only edits update those calculations without rerunning GETRELATED; reject negative/nonfinite/NULL input and keep worker categories separate.';
  if(['LocationHoursHeadcount','EstablishmentHoursHeadcount'].includes(f.name)){
   const isLoc=f.name==='LocationHoursHeadcount',dimension=isLoc?'Location':'OSHAEstablishment';
   c[3]='NULL until Link Hours Worked Summaries assigns GETRELATED result for populated '+dimension;
   c[5]='Create/Update Action Handler assigns '+(isLoc?formulas.location:formulas.establishment)+'. Check '+dimension+' for NULL first; if NULL clear this link. On Month/dimension correction replace the link. Native inverse membership drives both former/new summaries\' SUM fields; clients cannot write the link. Native target ID-key name requires the mapping check in 6.2.';
  }
 }
 // Other analytics remain report-fed stored values; only the four monthly summary hours become native calculations.
 c[5]=c[5].replaceAll('after A0 completes','after the saved links and native summary sums are current');
 if(prior!==c.map(esc).join(' | ')){replace('| '+prior+' |','| '+c.map(esc).join(' | ')+' |');f.evidence=(f.evidence||'Proposed target')+'; revision 5 user-confirmed GETRELATED/grid-SUM design';}
}
replace('Revision 4. Status:','Revision 5. Status:');
replace('[Revision 3](history/v3/technical-specification.md),','[Revision 4](history/v4/technical-specification.md), [revision 3](history/v3/technical-specification.md),');
replace('Actual rate calculations, print templates, electronic-export definitions and the new shared-hours transaction mechanism remain unresolved.','Actual rate calculations, print templates and electronic-export definitions remain unresolved. The user has confirmed native GETRELATED summary linking and grid-SUM hour calculations; the previous custom shared-hours transaction mechanism is superseded.');
replace('| R8 | Link each entry to applicable monthly summaries; populate each dimension once; safely correct/delete/retry. | Added. |','| R8 | Link entries through GETRELATED and calculate each summary\'s employee/contractor hours with native SUM over its own related-entry grid. | Refined in revision 5; custom source/summary totals synchronization is superseded. |');
replace('| R9 | Keep employee/contractor hours distinct, headcounts independent and one authoritative hours writer through migration. | Added. |','| R9 | Hours Worked remains the authoritative hours input; native summary calculations maintain totals, with separate headcounts and controlled legacy cutover. | Refined in revision 5; there is no custom summary-hour writer. |');
replace('## 3 Proposed object model',`### 2.7 User-confirmed native hours design

On November 12, 2026 the user confirmed that an Hours Worked Create/Update Action Handler uses GETRELATED to connect each populated dimension to its monthly summary, creating a matching summary when none exists. Each summary calculates its own employee and contractor hours through its Hours Worked Entries grid. Native relationship/calculation behavior accounts for entry creation, hour changes, deletion and relinking. This supersedes the agent-proposed custom synchronization processor, manual summary-hour writes and source/two-summary transaction/lock requirements. These are user-confirmed platform/design facts, not new package-extracted implementations.

The user supplied the signature GETRELATED("TargetObject", "TargetField1", SourceValue1, "TargetFieldN", SourceValueN), with matched target/source data types and a relationship's corresponding identifier field as the target search key. Their example object/field names were explicitly illustrative. Section 6.2 uses the actual extracted location-object/Date names and the proposed establishment/source names; corresponding native ID-key spellings are marked for metadata confirmation rather than presented as exported fields.

## 3 Proposed object model`);
replace('  +Reference OSHAEstablishment\n  +Date Date\n}\nclass Hours_Worked','  +Reference OSHAEstablishment\n  +Date Date\n  +Float EmployeeHrs calculated\n  +Float ContractrHrs calculated\n}\nclass Hours_Worked');
replace('class Location_Hours_and_Headcount\nclass OII_Setting','class Location_Hours_and_Headcount {\n  +Float EmployeeHrs calculated\n  +Float ContractrHrs calculated\n}\nclass OII_Setting');
section('### 5.4 Shared hours allocation and summary rules','### 6.3 Headcount and master lifecycle',`### 5.4 Shared hours allocation and summary rules

Each Hours Worked entry is a non-overlapping monthly contribution. Multiple entries may share a summary. SourceEntryID identifies an entry, not an establishment/month total. Source feeds must partition allocations rather than send the same full hours under different keys. The two dimensions are independent; neither defaults from the other.

| Location | OSHA Establishment | LocationHoursHeadcount | EstablishmentHoursHeadcount |
|---|---|---|---|
| Present | NULL | GETRELATED for Location.Id + Month | NULL |
| NULL | Present | NULL | GETRELATED for OSHAEstablishment.Id + Month |
| Present | Present | Matching location/month summary | Matching establishment/month summary |
| NULL | NULL | Reject invalid entry before either lookup | Reject invalid entry before either lookup |

Configure the same two native calculated-field expressions on both monthly summary objects:

| Summary field | Calculated expression | Relationship read |
|---|---|---|
| EmployeeHrs | \`SUM(HoursWorkedEntries.EmployeeHours)\` | That summary's own HoursWorkedEntries grid |
| ContractrHrs | \`SUM(HoursWorkedEntries.ContractorHours)\` | That summary's own HoursWorkedEntries grid |

These are proposed native calculated expressions using the extracted SUM(collection.field) pattern already present in OII calculations such as SUM(Days.DaysAway). They are not report aliases or custom total-writing code. The user confirmed this relationship/grid calculation model. The required result after the last contribution is removed is 0; demonstrate native empty-grid behavior when configuring the expressions, without inventing an unsupported null-wrapper function. Headcounts remain separate editable fields and are never calculated from the entry grid.

An entry with 1,200 employee hours and both dimensions appears once in each summary grid and contributes 1,200 to each independent reporting view. Editing it to 1,250 changes the native sums. Deleting it removes its contribution. Changing month or one dimension moves only the affected link; the old grid loses the contribution and the new grid gains it. Keep the former summary and its headcounts, including a zero-hours summary. A raw enterprise source-entry total counts the entry once. Never add independent dimensions or matching Lo/Ru values together. Calculated zero does not establish that all required hours/headcounts have been submitted.

## 6 Creation correction and refresh lifecycle

### 6.1 Mechanism ownership

| Responsibility | Mechanism | Ownership and trigger |
|---|---|---|
| A0 Link Hours Worked Summaries | Create/Update Action Handler on TG_HoursWorkedObject | On create and Month/Location/OSHAEstablishment changes, validate inputs, null-check each dimension, GETRELATED its matching monthly summary, and assign/clear that summary link. Does not write summary totals. |
| Native summary-hour calculation | Four native calculated fields | EmployeeHrs and ContractrHrs on each monthly summary SUM that summary's own HoursWorkedEntries grid; automatically reflect source create/edit/delete/relink. No custom Delete handler is needed for hours totals. |
| A1 Summary identity and headcounts | Existing/native requiredness, unique/date validators, initial defaults and authorized edits | Match scope plus month; keep saved identity fixed, initialize names/numbering/headcounts without resetting existing values, and retain independent headcount entry. |
| A2 Establishment monthly KPI refresh | Proposed report-fed monthly calculation | Read current calculated establishment summary hours and OII measures, write the twenty KPI outputs and preserve targets. Refresh invocation/status remains IN-09. |
| A3 Establishment annual OSHA refresh | Proposed annual report-fed calculation/correction | Read current summary hours, independent headcounts and recordable OII values; preserve initial snapshots and manual annual edits. |
| A4 Existing location analytics | Existing identified KPI/OSHA Event Handlers | Consume the location summary's calculated hours without rebuilding the source chains. Notification, old-scope recovery and completion/readiness remain IN-09. |

### 6.2 Exact GETRELATED structure and ordered relationship handling

The extracted location target is SafetyMetrics_HrsandHeadcountObject. Its calendar-period field is Date and its reference is Location. The proposed establishment target is TG_EstHrsHeadcountObject, with Date and OSHAEstablishment. The proposed source is TG_HoursWorkedObject with Month, Location and OSHAEstablishment. Keep these names; the user's HoursWorkedHeadCountObject/MonthDate/DateField examples do not rename them.

| Search pair | Target key | Source value | Type match and name evidence |
|---|---|---|---|
| Location period | Date | Month | Date ↔ Date, calendar dates with timezone capture disabled; extracted target/proposed source |
| Location identity | LocationId | Location.Id | GUID ↔ GUID; Location is extracted, corresponding native LocationId key spelling is inferred from the user-confirmed convention and must be checked in the target metadata |
| Establishment period | Date | Month | Date ↔ Date; both are proposed fields using the extracted Date type |
| Establishment identity | OSHAEstablishmentId | OSHAEstablishment.Id | GUID ↔ GUID; generated identifier-key spelling is proposed/inferred from the relationship name and must be confirmed after relationship creation |

Configure these target-key expressions after confirming the two corresponding native identifier names. If the platform exposes different identifier-key names, substitute only those keys; do not change their types, scope/month matching or add duplicate custom GUID fields.

LocationHoursHeadcount assignment when Location is not NULL:

\`GETRELATED("SafetyMetrics_HrsandHeadcountObject", "Date", Month, "LocationId", Location.Id)\`

EstablishmentHoursHeadcount assignment when OSHAEstablishment is not NULL:

\`GETRELATED("TG_EstHrsHeadcountObject", "Date", Month, "OSHAEstablishmentId", OSHAEstablishment.Id)\`

The variadic argument structure and find-or-create behavior are user-confirmed. Object/field naming classifications above remain explicit: these are target configuration expressions, not an assertion that the two native identifier keys were exported or that the proposed objects already exist.

1. Apply source/user access and required-field checks. Month must be populated and satisfy DAY(Month)=1; EmployeeHours and ContractorHours remain required, finite and nonnegative; at least one dimension is populated. Imports supply SourceEntryID; manual default/number settings remain a narrow IN-02 detail. Do not call GETRELATED for a blank dimension or invalid period.
2. On create, evaluate both dimension branches. On update, evaluate them when Month, Location or OSHAEstablishment changes. Hour-only changes need no relinking. Link-only handler assignments must not recursively rerun the handler.
3. If Location is populated, assign the first expression to LocationHoursHeadcount; otherwise set that link to NULL. If OSHAEstablishment is populated, assign the second expression to EstablishmentHoursHeadcount; otherwise set that link to NULL. GETRELATED reuses the match or creates the matching scope/Date summary. Do not pass the reference's display name or object value to a GUID target key.
4. A successful source save leaves each populated dimension linked to its matching summary and each absent dimension with a NULL link. A correction replaces the appropriate reference, so native inverse-grid membership and SUM calculations change on both former and new summaries. Do not write EmployeeHrs or ContractrHrs in this handler.
5. Native relationship removal on source deletion updates the grid calculations. There is no source Delete totals handler, manual recomputation, custom reconciliation process, manual original-value capture or custom cross-object lock/rollback subsystem for hours. Keep native scope/month uniqueness and ordinary platform validation/error behavior. Do not promise additional transaction semantics beyond the native handler/GETRELATED behavior.
6. Downstream KPI/annual refresh is separate. IN-09 must establish how native calculated-value changes, deletion and relinking notify or are selected by existing report-fed processes. Do not assume a calculated-field change fires a normal Update Action Handler or changes the summary DateModified. Any original-period recovery needed for downstream results belongs to that refresh contract, not the native hours calculation.

`);
replace('Authorized editors can create headcount-only summaries with a required dimension and month-start Date. A1 resolves uniqueness and initializes the summary; A0\'s scope-only rebuild branch recalculates hours from existing sources without creating or validating an artificial source row. There is no reverse synchronization from summaries to Hours Worked.','Authorized editors can create headcount-only summaries with a required dimension and month-start Date. A1 retains native uniqueness and initial defaults. The same native grid-SUM calculations provide their hours, with no artificial source entry or scope-rebuild processor. There is no reverse creation of Hours Worked records from summaries.');
section('### 6.4 Uniqueness and processor recursion','### 6.5 Confirmed source processing and safe reuse',`### 6.4 Native identity and recursion

| Record or behavior | Identity / rule | Consequence |
|---|---|---|
| Hours Worked | Unique immutable SourceEntryID | Source replay updates the same entry or leaves an identical entry unchanged; no duplicate economic contribution. |
| Location Hours and Headcount | Location + month-start Date | Retain existing unique/date validators; GETRELATED targets this exact pair. |
| Establishment Hours and Headcount | OSHAEstablishment + month-start Date | Configure the same native uniqueness/date pattern for the new summary. |
| Monthly KPI | OSHAEstablishment + month-start Date | One downstream result; preserve manual targets. |
| Annual OSHA Summary | OSHAEstablishment + January 1 Date | One downstream annual result; preserve reporting snapshots and overrides. |
| Link Action Handler | Create or dimension/Month change only | Prevent recursive link-only saves; do not watch hour fields to perform manual total writes. |

Native SUM maintains source-hour totals. Downstream report-fed writes still require the supplied IN-09 invocation, overlap/error and readiness behavior; that is separate from the removed source/two-summary transaction subsystem.
`);
replace('IN-01 still blocks the atomic source-and-two-summary mechanism; IN-09 retains supported invocation, historic-period coverage and result freshness/error signaling. Keep A0 synchronous safety requirements and the separate A2/A3/A4 refresh gate.','Revision 5 no longer uses imports to maintain monthly summary hours: GETRELATED links and native grid SUM replace that custom mechanism. IN-09 still covers supported invocation, historic-period recovery and result freshness/error signaling for downstream A2/A3/A4.');
replace('A0–A4 therefore retain their existing original/corrected-scope union and full recomputation contract.','For downstream A2/A3/A4, retain full original/corrected-period recovery under IN-09; native monthly summary SUM fields already reflect relationship changes.');
replace('Explicit reconciliation must recompute the complete affected period, including a former scope now having no contributions.','An explicit downstream analytics rebuild must cover the complete affected period, including a former scope now having no contributions. It is not a custom summary-hours reconciliation process.');
replace('| C6 | Add / integrate | A0/A1/A2/A3/A4 | Separate input paths | One writer, safe correction, summary refresh and retained downstream consumers | R1, R2, R8 | Runtime transaction/processor binding requires verification. |','| C6 | Refine | Hours relationships, native calculations and downstream consumers | Earlier custom source/summary processor proposal | GETRELATED link handler, four native grid-SUM fields, separate KPI/OSHA refresh | R1, R2, R8 | User-confirmed native design supersedes the custom hours processor; downstream IN-09 remains. |');
replace('revision 4 is not a new baseline','revision 5 is not a new baseline');
replace('archived under history/v1, history/v2 and history/v3.','archived under history/v1, history/v2, history/v3 and history/v4.');
section('### 10.1 Governed cutover','## 11 Requirement traceability and validation status',`### 10.1 Governed cutover

1. Preserve original package evidence and all target history. Configure the master, source relationships, matching summary identities and native grid calculations. Retain existing location-summary GUIDs, binding, headcounts, numbering and case/report infrastructure.
2. Separately inventory and stop legacy direct-hour writers at the agreed cutover boundary. Capture existing direct/local summary hours before enabling calculated-field expressions: those old manually maintained values are not calculated source contributions.
3. Where detailed source data is unavailable, the separately owned migration may create one location-only opening Hours Worked entry per approved direct/local location/month, using a stable legacy key. Do not seed hierarchy totals. Reconcile any establishment overlap and partition amounts before adding establishment attribution.
4. Link opening/current entries through the same null-checked GETRELATED handler. Enable native summary calculations after the approved source contributions exist, compare their results with agreed starting totals, and retain summary identities/headcounts. No migration or backfill is implemented by this configuration plan.
5. Enable the supplied downstream KPI/OSHA refresh and output-readiness path. Restrict direct summary-hour editing/imports, preserve headcount routes and native audit. No custom summary-hours writer or rebuild procedure remains active alongside native calculations.

### 10.2 Acceptance scenarios

| Check | Expected result |
|---|---|
| AT01 Location only | Populate only the matching location/month summary link; establishment link stays NULL. |
| AT02 Establishment only | Populate only the matching establishment/month summary link; no organizational fallback. |
| AT03 Both | Reuse/create both matching summaries; 1,200 source hours appears once in each independent grid sum and once in source-entry totals. |
| AT04 Neither/invalid period | Reject before either GETRELATED branch; no blank-dimension lookup. |
| AT05 Reuse and missing target | Existing matching key returns its summary; a missing scope/month is created with the correct reference and Date, without duplicate key records. |
| AT06 Type matching | Date target receives Month Date; native reference-ID keys receive GUID .Id values, never display text. Confirm actual native key names. |
| AT07 Corrections | Changing one dimension or Month replaces only the appropriate links; old/new native sums reflect moved membership. |
| AT08 Deletion | Native inverse removal decreases sums; removing the final entry yields 0 while retaining summary/headcounts; no Delete totals handler. |
| AT09 Hour-only edit | Changing 1,200 to 1,250 updates both relevant native SUM fields without relinking or manually writing totals. |
| AT10 Recursion/API integrity | Link-only saves do not recurse; direct user/import edits to calculated totals or system-managed summary links are rejected. |
| AT11 Numeric/date | Reject negative, nonfinite or NULL hours and non-month-start dates; permit zero/fractional hours. |
| AT12 Headcounts | Native hour changes never replace independent employee/contractor headcounts. |
| AT13 Historical masters | Retain authorized historical references and snapshots; new selections follow existing active/deleted access rules. |
| AT14 Location regression | Existing location KPI/OSHA consumers read the calculated summary fields; no ancestor source-hour duplication. |
| AT15 Analytics parity | Retain all 89 counterparts, source OII/day rules, flat Lo/Ru equality and four manual goals; actual-rate policy remains supplied. |
| AT16 Outputs | Regulatory templates/custom-object binding remain required; preserve case privacy and case-level 301 IDs. |
| AT17 User access | Both populated dimensions require their authorized access; grid navigation does not grant case/source access. |
| AT18 Cutover | Opening source contributions reconcile before calculations replace legacy direct-entry hours; no double counting. |
| AT19 Downstream readiness | Demonstrate how calculated-hour changes, deletion/relinking and headcounts lead to current KPI/annual results; do not assume calculated changes fire Update or alter DateModified. IN-09 remains. |
| AT20 Annual headcount | Preserve SUM(EmployeeHCount)/COUNT(existing monthly-summary Id), including zero records and supplied month-coverage/completeness policy. |
| AT21 Source monthly parity | Count OII rows by DateUserEntered month with source raw-day/flag rules; a recent-change selector is not the counted population. |
| AT22 Annual workforce | Employee-only hours; headcounts 100 and 120 average 110 across two records, and 220/3 when a third zero-headcount record exists. |
| AT23 Case correction | Separate incident design supplies safe case membership changes, original/corrected periods and recordability clearing. |
| AT24 Annual snapshots | Ordinary metric refresh retains fifteen initial copies and permitted annual corrections. |
| AT25 Source report closure | Retain all eight import roots, 27 report references and 75 mapped outputs; do not recreate source chains. |
| AT26 Historic analytics | Downstream recovery covers full original/corrected scopes even outside the 36-hour selector. |
`);
replace('| R8 | A0, links and inverses | Exact summary mapping, original/corrected scope refresh and retry safety | Satisfied |','| R8 | GETRELATED link handler, inverses and native calculated fields | Confirmed native find/create/link and grid-SUM lifecycle; identifier-key spelling remains a narrow mapping check | Satisfied |');
const gateStart=doc.indexOf('Remaining build gates:',doc.indexOf('## 11 Requirement'));
const gateEnd=doc.indexOf('\n',gateStart);
doc=doc.slice(0,gateStart)+'Remaining inputs concern native field/default/identifier-key settings, user access, downstream calculated-change notification and analytics invocation/status under IN-09, actual-rate displays, separate incident attribution, case-helper population, regulatory templates/export format and completeness policy. IN-01 is resolved by the user-confirmed GETRELATED/grid-SUM model; there is no custom source/summary transaction, manual summary-total writer or Delete totals handler to validate. Proposed formulas and type/name classifications are explicit; no tenant implementation is claimed.'+doc.slice(gateEnd);
resolution.revision=5;resolution.designConfirmation={source:'User messages on 2026-11-12',signature:'GETRELATED("TargetObject", "TargetField1", SourceValue1, "TargetFieldN", SourceValueN)',nativeFindCreate:true,matchingTypesRequired:true,exampleNamesNotAuthoritative:true};
const input=id=>resolution.inputs.find(i=>i.id===id);
input('IN-01').status='Answered by user-confirmed native design';input('IN-01').answer='Hours Worked Create/Update linking uses null-checked GETRELATED; matching summaries are found or created. Summary EmployeeHrs/ContractrHrs are native SUM calculations over their own Hours Worked Entries grids. The user supplied the variadic field/value syntax, reference-ID target convention and matched-type rule.';input('IN-01').remaining='No custom coordinated summary-write, Delete totals handler or transaction/locking subsystem is required. Confirm actual native ID-key spellings and remaining field defaults under IN-02; downstream refresh remains IN-09.';
input('IN-02').title='Field sizes, defaults and record-number settings';input('IN-02').remaining='Provide copied text capacities, native numbering/manual SourceEntryID defaults, summary-create defaults and creation-only field settings. Confirm the actual exposed identifier keys for Location and the proposed OSHAEstablishment reference before using the named GETRELATED expressions. Their required GUID types and Date/Month matching are already defined.';
input('IN-04').remaining+=' Supply the native configuration for the used-record code/deletion guards as part of these user-access restrictions.';
input('IN-09').remaining='Provide supported downstream refresh after native calculated hours change, source deletion/relinking and headcount changes. Confirm whether calculation changes trigger Update or change DateModified, or supply the supported selection/notification route. Retain full old/new-period recovery, immediate/historical invocation and success/failure/readiness behavior. Another copy of the 25 source reports is not needed.';
const inputStart=doc.indexOf('## 12 External inputs and constraints after package review');
doc=doc.slice(0,inputStart)+'## 12 External inputs and constraints after package review\n\nIN-01 is resolved on the user-confirmed native relationship/calculation design and supplied GETRELATED structure. The example names were not requirements: extracted/proposed names and corresponding native ID-key checks are recorded in 6.2. The implementation plan is now aligned with this revision-5 specification; its own author-review and validation artifacts apply to its assignments, not live tenant behavior. Other source answers and remaining inputs retain their IDs.\n\n| Input | Status | What is answered | Remaining setting or decision |\n|---|---|---|---|\n'+resolution.inputs.map(i=>'| '+i.id+' — '+i.title+' | '+i.status+' | '+esc(i.answer)+' | '+esc(i.remaining)+' |').join('\n')+'\n';
doc=doc.replace('A0 supplies monthly summary hours; A2/A3 read those summaries once.','Native grid-SUM fields calculate monthly summary hours; A2/A3 read those current calculated values once.');
doc=doc.replace('After successful synchronization','After successful relationship linking');
doc=doc.replace('after source create/change/delete/rebuild','after source create/edit/delete/relink');
doc=doc.replace('before A0 can replace legacy values','before native calculations replace the legacy manually maintained values');
doc=doc.replaceAll('summary after A0.','summary after link assignment and native calculation.');
doc=doc.replace('Verify supported cross-object synchronization','Configure the native summary link and grid calculation pattern');
doc+='\nRevision-5 supersession: the earlier Synchronize Hours Worked custom processor, manual summary-hour writes, source/two-summary atomic rollback/locks, Delete totals handler and custom hours rebuild are withdrawn. Native GETRELATED linking and SUM replace them. Native scope/month uniqueness, source-key deduplication, user access, headcounts and the separate downstream freshness contract remain. [Revision 4](history/v4/technical-specification.md) preserves the previous design.\n';
m.revision=5;m.previousTarget='history/v4/target-model.json';m.requirements.refined=[...new Set([...m.requirements.refined,'R8','R9'])];
m.requirements.superseded=[...m.requirements.superseded,'Custom synchronized source/two-summary hours-write processor and cross-object transaction/locks','Custom Delete totals handler and explicit source-hour summary-rebuild process'];
m.nativeHoursDesign={classification:'User-confirmed native mechanism; target expressions proposed against extracted/proposed names',confirmationDate:'2026-11-12',getRelatedSignature:resolution.designConfirmation.signature,formulas,sourceObject:hours.internalName,summaryObjects:[loc.internalName,est.internalName],targetKeyTypes:{Date:'Date',LocationId:'GUID',OSHAEstablishmentId:'GUID'},sourceValueTypes:{Month:'Date','Location.Id':'GUID','OSHAEstablishment.Id':'GUID'},identifierKeyEvidence:'Location/Date are extracted; native LocationId spelling inferred. Establishment object/reference are proposed; native OSHAEstablishmentId spelling inferred and must be confirmed. No extra custom GUID fields.',linkTrigger:'Create and changes to Month, Location or OSHAEstablishment only',deleteTotalsHandler:false,customSummaryTotalsWriter:false,customSourceSummaryTransaction:false,downstreamRefreshInput:'IN-09'};
fs.writeFileSync(path.join(dir,'technical-specification.md'),doc);fs.writeFileSync(path.join(dir,'target-model.json'),JSON.stringify(m,null,2)+'\n');fs.writeFileSync(path.join(dir,'external-input-resolution.json'),JSON.stringify(resolution,null,2)+'\n');
const history=read('revision-history.json');history.currentRevision=5;history.previousTarget='history/v4/technical-specification.md';history.refinedRequirements=m.requirements.refined;history.nativeHoursDesign=m.nativeHoursDesign;history.supersededDecisions=m.requirements.superseded;history.evidenceRevisionDecisions.push('Adopt user-confirmed GETRELATED relationship linking and four native grid-SUM fields','Preserve illustrative-name and matched-type distinctions; verify only native identifier-key spellings','Remove the custom source/two-summary processor and move downstream calculation notification questions to IN-09');fs.writeFileSync(path.join(dir,'revision-history.json'),JSON.stringify(history,null,2)+'\n');
console.log('Wrote specification revision 5: GETRELATED linking, four native SUM fields, unchanged 126 field/grid definitions.');
