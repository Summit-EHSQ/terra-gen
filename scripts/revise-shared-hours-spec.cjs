const fs=require('fs');
const path=require('path');
const dir='docs/phase 2/incident management/osha-establishment-analytics';
const e=JSON.parse(fs.readFileSync(path.join(dir,'package-evidence.json'),'utf8'));
const modelPath=path.join(dir,'target-model.json');
const docPath=path.join(dir,'technical-specification.md');
const m=JSON.parse(fs.readFileSync(modelPath,'utf8'));
let doc=fs.readFileSync(docPath,'utf8');
const oldDoc=doc;
const owner=f=>f.relations.find(r=>r.source==='Object')?.target;
const sourceType=f=>f.relations.find(r=>r.source==='Type')?.target;
const f=(name,caption,type,req,def,edit,life)=>({name,caption,evidence:'Proposed revision 2',contract:[caption,type,req,def,edit,life]});
const set=(o,n,i,v)=>{o.fields.find(x=>x.name===n).contract[i]=v;};
for(const o of m.objects){o.action='Add';o.isLocationBound=false;}
const est=m.objects.find(o=>o.internalName==='TG_EstHrsHeadcountObject');
set(est,'OSHAEstablishment',3,'None; A0 supplies scope, or headcount editor selects at summary creation');
set(est,'OSHAEstablishment',4,'Required at creation; new selections Active?=TRUE; read only after save; inactive historical references retained');
set(est,'OSHAEstablishment',5,'A1 validates unique monthly identity; correct contribution attribution on Hours Worked, not by reassigning this summary');
set(est,'Date',3,'A0 copies Hours Worked.Month on generated creation; native MonthStartValueGenerator on headcount-only creation');
set(est,'Date',4,'Headcount editor selects at creation; read only after save');
set(est,'Date',5,'A1 validates DAY(Date)=1; unique OSHAEstablishment + Date; monthly-summary identity fixed after creation');
set(est,'LocNameHelper',5,'A1 stamps OSHA Establishment.Name at summary creation; preserve historical label on master rename/deactivation; explicit audited correction allowed');
for(const [n,col] of [['EmployeeHrs','Employee Hours'],['ContractrHrs','Contractor Hours']]){
 set(est,n,3,'0 at creation; A0 replaces with sum of Hours Worked.'+col+' matching OSHAEstablishment and Month = Date');
 set(est,n,4,'Read only to ordinary users/API/import clients; authorized processor writes only');
 set(est,n,5,'A0 fully recomputes after source create/change/delete/rebuild; zero for empty set after successful refresh; no manual override');
}
for(const n of ['EmployeeHCount','ContractrHCount']){
 set(est,n,4,'Authorized headcount editor editable; API/import uses the same validation; retain source numeric type and default');
 set(est,n,5,'A1 preserves independent headcount maintenance; never sum from Hours Worked entries; A3 refreshes employment values after changes');
}
est.fields.push(f('HoursWorkedEntries','Hours Worked Entries','Inverse 1:M grid from Hours Worked.Establishment Hours and Headcount','N','None','Read only; authorized hours/analytics users','Navigation over Hours Worked.EstablishmentHoursHeadcount; no duplicate relationship storage'));
const original=e.objects.find(o=>o.Name==='SafetyMetrics_HrsandHeadcountObject');
const location={name:'Location Hours and Headcount',internalName:original.Name,source:original.Name,sourceRecordId:original.recordId,action:'Modify',abstract:false,inheritanceParent:null,isLocationBound:true,fields:e.fields.filter(x=>owner(x)===original.Name).map(x=>{
 const types={Float:'Float, System.Double; precision/scale not constrained in export',nvarchar:'Text / nvarchar; maximum length unresolved in export',AutoNumber:'AutoNumber, System.Int64',Date:'Date; calendar date; timezone capture disabled'};
 const c=[x.Caption,types[sourceType(x)]||'M:1 to SysLocationEntity; exactly 1 target; preserve existing inverse configuration (not exported)',x.IsRequired?'Y':'N',x.DefaultValue?.match(/<Value>(.*?)<\/Value>/)?.[1]??'None',x.IsReadOnly?'Read only; authorized analytics users':'Authorized headcount editor editable','Retain source behavior except the changes specified here'];
 if(x.Name==='RecordNo') {c[3]='Existing native AutoNumber sequence';c[5]='Retain native AutoNumber; preserve existing record identities';}
 if(x.Name==='Location'){c[3]='None; A0 supplies scope, or headcount editor selects at creation';c[4]='Required at creation; new selections Deleted=FALSE and existing location permissions; read only after save; historical references retained';c[5]='A1 retains required scope and unique Location + Date; preserve system relationship and inverse; correct attribution through Hours Worked';}
 if(x.Name==='Date'){c[3]='A0 copies Hours Worked.Month on generated creation; existing MonthStartValueGenerator on headcount-only creation';c[4]='Headcount editor selects at creation; read only after save';c[5]='A1 retains DAY(Date)=1 and unique Location + Date; fixed monthly-summary identity after creation';}
 if(['EmployeeHrs','ContractrHrs'].includes(x.Name)){c[3]='0 at creation; A0 replaces with sum of Hours Worked.'+(x.Name==='EmployeeHrs'?'Employee Hours':'Contractor Hours')+' matching Location and Month = Date';c[4]='Read only to users/API/import clients after governed cutover; authorized processor writes only';c[5]='A0 fully recomputes direct/local source contributions; never fan out input to ancestors; zero for empty set after successful refresh';}
 if(['EmployeeHCount','ContractrHCount'].includes(x.Name)){c[4]='Authorized headcount editor editable; retain existing numeric type/default, permissions and headcount imports';c[5]='A1 preserves independent headcount maintenance; never sum from Hours Worked; A4 refreshes downstream employment values';}
 if(x.Name==='LocNameHelper'){c[3]='Existing helper population from Location.Name';c[5]='Retain source handler graphId 247 subject to creation-event verification; A1 initializes on processor-created summary; preserve archived-location label';}
 return {name:x.Name,caption:x.Caption,sourceName:x.Name,sourceRecordId:x.recordId,sourceGraphId:x.graphId,evidence:'Extracted field; modified lifecycle is Proposed revision 2',contract:c};
})};
location.fields.push(f('HoursWorkedEntries','Hours Worked Entries','Inverse 1:M grid from Hours Worked.Location Hours and Headcount','N','None','Read only; retain location-scoped access; source access separately checked','Navigation over Hours Worked.LocationHoursHeadcount; no duplicate relationship storage'));
m.objects.push(location);
const hours={name:'Hours Worked',internalName:'TG_HoursWorkedObject',action:'Add',abstract:false,inheritanceParent:null,isLocationBound:false,fields:[
 f('SourceEntryID','Source Entry ID','Text, max 255; unique within Hours Worked; non-localizable','Y','Import: caller supplies namespaced stable key; manual create: A0 supplies manual: followed by native record GUID using supported creation mechanism','Required on import; read only after creation; configured record display value','A0 enforces unique create; updates reuse stable key; generation timing must be verified; no reinsertion on retry'),
 f('Month','Month','Date; calendar date; timezone capture disabled','Y','Native MonthStartValueGenerator at creation','Hours editor editable; visible in all modes; reject dates other than first day of month','A0 watches Month; correction refreshes/relinks original and corrected periods; scope [Month, next month start)'),
 f('Location','Location','M:1 to SysLocationEntity; 0..1 target; inverse disabled on this new dimension reference','Conditional','NULL','Visible/editable in all modes; required when OSHA Establishment is NULL; new selections Deleted=FALSE and existing location permissions; no login/home-location default','A0 enforces at least one dimension; clearing permitted only if OSHA Establishment remains populated; clear LocationHoursHeadcount and refresh original scope; retain existing archived references'),
 f('OSHAEstablishment','OSHA Establishment','M:1 to OSHA Establishment; 0..1 target; inverse disabled on this dimension reference','Conditional','NULL','Visible/editable in all modes; required when Location is NULL; new selections Active?=TRUE; no default from Location; retain existing inactive references','A0 enforces at least one dimension; clearing permitted only if Location remains populated; clear EstablishmentHoursHeadcount and refresh original scope; Location changes never force/clear this reference'),
 f('EmployeeHours','Employee Hours','Float, System.Double; unit hours; finite and >= 0; no further precision/scale constraint','Y','0','Hours editor editable; visible in all modes; deliberate zero permitted; NULL rejected','A0 watches EmployeeHours; contributes once per selected dimension; full recomputation on correction'),
 f('ContractorHours','Contractor Hours','Float, System.Double; unit hours; finite and >= 0; no further precision/scale constraint','Y','0','Hours editor editable; visible in all modes; deliberate zero permitted; NULL rejected','A0 watches ContractorHours; preserve contractor population separately; negative adjustments rejected, correct original source entry instead'),
 f('LocationHoursHeadcount','Location Hours and Headcount','M:1 to Location Hours and Headcount; 0..1 target; inverse Hours Worked Entries','Conditional','NULL until A0 resolves applicable summary within successful save','Read only; visible/required at completed save when Location is populated; NULL and hidden when Location is NULL','A0 assigns unique summary with Location = this Location and Date = Month; relink/clear on dimension/Month correction; reject client-supplied links'),
 f('EstablishmentHoursHeadcount','Establishment Hours and Headcount','M:1 to Establishment Hours and Headcount; 0..1 target; inverse Hours Worked Entries','Conditional','NULL until A0 resolves applicable summary within successful save','Read only; visible/required at completed save when OSHA Establishment is populated; NULL and hidden when it is NULL','A0 assigns unique summary with OSHAEstablishment = this OSHAEstablishment and Date = Month; relink/clear on dimension/Month correction; reject client-supplied links')
]};
m.objects.push(hours);
const monthly=m.objects.find(o=>o.internalName==='TG_EstIncRateAbstractObject');
for(const [n,col] of [['LoEmplWrkdHours','EmployeeHrs'],['RuEmplWrkdHours','EmployeeHrs'],['LoCntrctWrkdHrs','ContractrHrs'],['RuCntrctWrkdHrs','ContractrHrs']])set(monthly,n,5,'A2 reads Establishment Hours and Headcount.'+col+' for matching OSHAEstablishment + Date after A0 completes; Lo/Ru use identical flat scope');
m.revision=2;m.previousTarget='history/v1/target-model.json';m.baselineSha256=e.sha256;
m.requirements={refined:['R1','R2'],added:['R7','R8','R9'],superseded:['Separate direct-hour entry on the two monthly summary families','No change to original Location Hours and Headcount hour-entry behavior']};
const escape=s=>String(s).replace(/\|/g,'&#124;').replace(/\r?\n/g,' ');
const table=rows=>'| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |\n|---|---|---:|---|---|---|\n'+rows.map(r=>'| '+r.map(escape).join(' | ')+' |').join('\n')+'\n';
const replaceSection=(start,end,text)=>{const a=doc.indexOf(start),b=end?doc.indexOf(end,a+start.length):doc.length;if(a<0||b<0)throw Error('Missing section '+start);doc=doc.slice(0,a)+text+'\n\n'+doc.slice(b);};
replaceSection('# OSHA Establishment analytics technical specification','## 2 Package inspection and baseline',`# Shared Hours Worked and OSHA Establishment analytics technical specification

Revision 2. Status: proposed target design for review. Date: November 12, 2026. No tenant configuration has been changed. This is the proposed authority for Hours Worked, OSHA Establishment, its five parallel analytics objects and the specifically modified Location Hours and Headcount contract. The package baseline is unchanged; [revision 1](history/v1/technical-specification.md) is retained as superseded target history.

Use one Hours Worked object as the entry point for monthly employee/contractor hours. Each entry supplies Location, OSHA Establishment, or both and links to its corresponding monthly Hours and Headcount summaries. The summaries hold calculated hours and separately maintained headcounts. Existing location-based incident analytics/reports continue; establishment analytics/OSHA outputs use the parallel family. All 89 exported analytics fields retain their establishment counterparts; the existing location summary retains its eight fields with the revised ownership below.

The extract does not include metric processors, complete incident relationships or report templates. Field coverage and proposed processing are specified, while runtime and report parity remain verification gates. Incident linkage remains a dependency only; no incident-side fields, defaults, handlers or workflow are designed.

## 1 Requirements and revision decisions

| Requirement | Current contract | Revision disposition |
|---|---|---|
| R1 | Retain original location analytics/report bindings; modify Location Hours and Headcount for shared-hour ownership, fixed summary identity and contribution navigation. | Refined; v1 unchanged direct-hour entry is superseded. |
| R2 | Preserve all 89 counterpart fields, metrics and reporting semantics; summary hours become calculated outputs. | Refined; separate direct-hour entry is superseded. |
| R3 | New establishment analytics/logs are independent of Location Structure. | Retained; Hours Worked is the deliberate dimension-neutral input bridge. |
| R4 | Define establishment master fields inferred from existing reporting metadata. | Retained. |
| R5 | Account for incident attribution without specifying the incident-side design. | Retained. |
| R6 | Preserve OSHA/Cal 300/300A, combined outputs, electronic export and case-level 301 navigation. | Retained; runtime binding unresolved. |
| R7 | Shared Hours Worked accepts Location only, OSHA Establishment only, or both; reject neither. | Added from the user-approved shared-input direction. |
| R8 | Link each entry to applicable monthly summaries; populate each dimension once; safely correct/delete/retry. | Added. |
| R9 | Keep employee/contractor hours distinct, headcounts independent and one authoritative hours writer through migration. | Added. |

Extracted means directly supported by metadata; Inferred means indirectly supported; Proposed means introduced by the target; Unresolved means insufficient evidence. All revision-2 fields, constraints and automation are Proposed unless identified as Extracted. New identifiers are assigned at implementation; exported TableName values do not establish a physical database model.

Establishments remain flat. Preserve Lo/Ru metric fields; matching establishment pairs use the same population and are equal. The original location family retains its verified hierarchy behavior. Never add Lo and Ru together or combine location and establishment totals. Both references on one hours row describe the same quantity under two dimensions. Neither reference defaults from the other; changing one never silently forces or clears the other.

Hours Worked is a source business record required by R7, not a duplicate audit/event object. One existing summary cannot represent all three modes without changing its scope contract. Reuse native references, uniqueness and audit. Do not add an allocation/junction object, mode catalogue, workflow, audit ledger or scheduler; the optional references express mode directly.`);
// Rebuild the target inventory and enrich the existing structural diagram without touching baseline section 2.
replaceSection('All six objects use new configuration identities.','```mermaid',`Seven objects are new: OSHA Establishment, five establishment analytics objects and Hours Worked. One existing object, Location Hours and Headcount, is modified while retaining its object/field GUIDs and location binding. All other owned objects are not location-bound. The new abstract bases do not inherit the source location-bound bases. Enable native audit on mutable business data and references; no new workflows are added.

| Object | Internal name | Action | Stable ID | Inheritance parent | Kind and binding | Direct fields/grids |
|---|---|---|---|---|---|---:|
${m.objects.map(o=>`| ${o.name} | \`${o.internalName}\` | ${o.action} | ${o.sourceRecordId||'New GUID at configuration'} | ${o.inheritanceParent||'None'} | ${o.abstract?'Abstract':'Concrete'}; ${o.isLocationBound?'location-bound':'not location-bound'} | ${o.fields.length} |`).join('\n')}`);
const targetStart=doc.indexOf('## 3 Proposed object model');
const targetEnd=doc.indexOf('## 4 Field level implementation contract');
let targetDiagram=doc.slice(targetStart,targetEnd);
targetDiagram=targetDiagram.replace('class OII_Setting',`class Hours_Worked {
  +Text SourceEntryID
  +Date Month
  +Float EmployeeHours
  +Float ContractorHours
}
class Location
class Location_Hours_and_Headcount
class OII_Setting`);
targetDiagram=targetDiagram.replace('Establishment_Incident_Rate_Abstract <|--',`Hours_Worked "0..*" --> "0..1" Location : Location
Hours_Worked "0..*" --> "0..1" OSHA_Establishment : OSHAEstablishment
Hours_Worked "0..*" --> "0..1" Location_Hours_and_Headcount : LocationHoursHeadcount
Hours_Worked "0..*" --> "0..1" Establishment_Hours_and_Headcount : EstablishmentHoursHeadcount
Location_Hours_and_Headcount "0..*" --> "1" Location : Location
Establishment_Incident_Rate_Abstract <|--`);
targetDiagram=targetDiagram.replace('The last five classes are unchanged external dependencies, not new objects.','OII Setting, OSHA Establishment Type, OSHA Establishment Size, Has OSHA Recordable Injuries, Injury/Illness and Location are unchanged external dependencies. Each is identified separately in section 4.9.');
targetDiagram+=`\nHours Worked requires at least one dimension and, at completed save, a matching summary link for each populated dimension. The absent dimension has a NULL summary link. The source-side link owns each relationship; Hours Worked Entries on each summary is its readonly inverse, not a second stored relationship. No new Hours Worked inverse is added on either dimension master. Mermaid identifiers replace spaces/punctuation in display names.\n\n`;
doc=doc.slice(0,targetStart)+targetDiagram+doc.slice(targetEnd);
const external=oldDoc.slice(oldDoc.indexOf('### 4.7 External dependency contracts'),oldDoc.indexOf('## 5 Calculation and KPI parity')).replaceAll('4.7','4.9');
let fields=`## 4 Field level implementation contract

One row defines one directly declared field or designed inverse grid. Inherited fields are declared once on the base. Default zero does not prove calculation or input completeness. Field mappings preserve exact source names and stable identifiers. Cloned Text capacity is unresolved where metadata is null; verify tenant capacities before loading master snapshots. Float retains System.Double. Date is calendar-based with timezone capture disabled; imports must not shift month/year through UTC conversion. Master text limits must fit summary destinations. No published-version objects or publish-copy lifecycle are needed.
`;
for(const [i,o] of m.objects.entries()){
 fields+=`\n### 4.${i+1} ${o.name}\n\n**Inheritance parent:** ${o.inheritanceParent||'None'}. ${o.abstract?'Abstract and non-instantiable.':'Concrete object.'}\n\n**Directly declared fields:** ${o.fields.length}. `;
 if(o.inheritanceParent)fields+='All fields on '+m.objects.find(t=>t.internalName===o.inheritanceParent).name+' are inherited and not redeclared. ';
 fields+='\n\n'+table(o.fields.map(x=>x.contract));
 fields+='\nField mapping:\n\n| Field display name | Internal name | Source evidence |\n|---|---|---|\n'+o.fields.map(x=>`| ${x.caption} | \`${x.name}\` | ${x.sourceRecordId?`\`${x.sourceName}\`; graphId ${x.sourceGraphId}; GUID \`${x.sourceRecordId}\``:'Proposed; new native GUID at implementation'} |`).join('\n')+'\n\n';
 fields+='Initial values: '+(o.abstract?'None; direct records prohibited.':o.name==='OSHA Establishment'?'No establishment records inferred or seeded; load the governed register.':o.action==='Modify'?'Retain existing records, GUIDs and headcounts; reconcile hours through section 10 before A0 can replace legacy values.':'No operational records seeded; use section 6 creation and maintenance rules.')+'\n';
}
fields+='\n'+external+`\n#### 4.9.6 Location

**Inheritance parent:** None in exported graph. **Directly declared fields:** Name and Deleted are exported; retained metadata is in package-evidence.json. No field/inverse is added or modified on Location. Existing hierarchy/access rules and the current location-summary inverse remain authoritative. Hours Worked.Location has inverse disabled. This unchanged external dependency is not a new owned master.
`;
replaceSection('## 4 Field level implementation contract','## 5 Calculation and KPI parity',fields);
doc=doc.replace('EmployeeHrs, EmployeeHCount, ContractrHrs and ContractrHCount are separate monthly inputs.','Hours Worked is the sole hours-input authority. EmployeeHours and ContractorHours populate EmployeeHrs and ContractrHrs on each applicable monthly summary. EmployeeHCount and ContractrHCount remain independent summary inputs, never summed from hours entries.');
doc=doc.replace('Sum eligible monthly hours for annual hours using the verified source inclusion policy.','A2/A3 consume establishment summaries, while A4 preserves the existing processors consuming location summaries. No processor adds raw Hours Worked values to already-populated summary hours. Sum eligible monthly summary hours for annual hours using the verified source inclusion policy.');
const copy=oldDoc.slice(oldDoc.indexOf('A3 initial-copy mapping is exhaustive:'),oldDoc.indexOf('Refresh requests must retain'));
replaceSection('## 6 Creation and refresh lifecycle','## 7 OSHA logs and output bindings',`### 5.4 Shared hours allocation and summary rules

Each Hours Worked row is one non-overlapping contribution for one month. Multiple rows can contribute to the same summary; uniqueness is SourceEntryID, not scope/month. An integration splitting hours across combinations issues distinct allocation-line IDs and partitioned amounts. It does not repeat full hours on every line.

| Location | OSHA Establishment | Location summary link | Establishment summary link | Result |
|---|---|---|---|---|
| Present | NULL | Required; matching Location + Month | NULL | Location only |
| NULL | Present | NULL | Required; matching establishment + Month | Establishment only |
| Present | Present | Required | Required | Same hours once per independent dimension |
| NULL | NULL | None | None | Reject before commit |

| Target field | Declarative aggregation rule |
|---|---|
| Location Hours and Headcount.EmployeeHrs | Sum EmployeeHours once per committed source row with matching Location and Month = summary Date. |
| Location Hours and Headcount.ContractrHrs | Same location/month selection; sum ContractorHours once per source row. |
| Establishment Hours and Headcount.EmployeeHrs | Sum EmployeeHours once per committed source row with matching OSHAEstablishment and Month = summary Date. |
| Establishment Hours and Headcount.ContractrHrs | Same establishment/month selection; sum ContractorHours once per source row. |

These rules are not executable Intelex aggregate expressions. Link targets must match dimension/date selections exactly; reconciliation verifies both. Never aggregate the dimension-reference and summary-link paths as separate contributions. Employee/contractor populations remain separate downstream.

An entry for November with 1,200 employee hours, Location Operations West and Establishment Mojave contributes 1,200 to each matching summary. A raw-input enterprise total counts the entry once. Never add the independent dimensional reports into 2,400. Editing it to 1,250 replaces its contribution through full recomputation, rather than adding another 1,250. A location-only entry has no establishment effect and vice versa. Selecting both does not require a location-to-establishment mapping.

Dimension totals may legitimately differ where input coverage differs. A deliberate zero entry is permitted. With no contributing rows, a successfully refreshed sum is zero, but that does not prove complete hours submission. Missing-input/headcount completeness remains a reporting governance check. Stable keys prevent replay, not economic overlap submitted under different keys; reconcile overlap in source feeds.

## 6 Creation correction and refresh lifecycle

### 6.1 Mechanism ownership

These are Proposed Action Handler/processor responsibilities, not exported implementations. Verify executable flows, supported create/update/delete events, original-value access, cross-object transaction/locking and processor interfaces in the destination. No new workflow actions, custom run/audit ledger or scheduled Event Service is added. Reuse native audit, unique validation and execution evidence.

| Procedure | Intended mechanism and trigger | Watched fields and responsibility |
|---|---|---|
| A0 Shared hours synchronization | Hours Worked Create/Update/Delete Action Handlers invoke one supported processor; explicit authorized reconciliation uses the same processor. | At creation validate SourceEntryID; on update watch Month, Location, OSHAEstablishment, EmployeeHours, ContractorHours. Resolve summary links, ensure applicable summaries, and replace summary hours. Link-only processor writes do not retrigger A0. Delete captures original scopes before removal. |
| A1 Summary validation and headcount maintenance | Validation/Create/Update handlers on both monthly summary objects; retain/reconcile original helper handler graphId 247. | Validate required scope, first-of-month Date, fixed identity and uniqueness. Initialize helper name and native RecordNo. Watch EmployeeHCount/ContractrHCount for employment refresh. Processor hour changes never create source entries or invoke A0 recursively. |
| A2 Establishment monthly KPI refresh | After successful A0 for affected establishment/month; explicit rebuild; incident-correction dependency. | Recompute 20 monthly aggregates; four hour aggregates read matching establishment summary. Upsert by establishment + month-start Date; preserve four manual targets and initialize helpers. |
| A3 Establishment annual OSHA refresh | After A0 establishment changes, A1 establishment headcount changes, explicit refresh and incident notifications. | Recompute 24 base case/day values plus four employment aggregates for affected establishment/year. Upsert by establishment + January 1; preserve editable annual metadata and resolve AssociatedOIIs through the separate incident contract. |
| A4 Existing location processor integration | After A0 location-summary changes and A1 location headcount changes. | Invoke verified existing location KPI/annual processors for affected month/year and required hierarchy roll-ups. Actual hooks/service names are unresolved. Preserve source incident filters, classifications and output bindings. |

### 6.2 A0 ordered processing

1. Recheck editor/import authorization for the source and every selected dimension. Initialize a manual entry's SourceEntryID through the supported create-time default before required-value validation; imports supply their stable key. Validate SourceEntryID, first-of-month Month, finite nonnegative hours and at least one dimension. Reject client-written summary links. Neither dimension defaults from the other or from organizational login location.
2. Capture original dimensions, Month and summary links before update/delete. Build the union of original and corrected location/month and establishment/month scopes. Insert has corrected scopes only; delete has original scopes only. A key is immutable after creation. Same-key same-payload retry is a no-op; changed payload is accepted only as an authorized update, never a second create.
3. Lock the source and affected scopes in a deterministic order (object kind, scope GUID, month). Reuse or create exactly one applicable summary per scope/month under unique-index enforcement. Initialize newly generated scope, Date, native RecordNo, helper name, default headcounts and initial hours. Never reset existing headcounts or sequence values.
4. Persist the source change and assign the two summary links from exact dimension/date matches. Clear a link when its dimension is NULL. A successful save cannot retain a populated dimension with a missing or mismatched summary link. Changing either dimension leaves the other intact unless explicitly edited.
5. Recompute EmployeeHrs and ContractrHrs together from the resulting source population for every affected scope. Include current rows once; exclude removed/reassigned rows. Empty sets become zero. Preserve headcounts, summary GUIDs and other business values. Users/imports cannot move a summary by changing its identity; correct the source contribution instead.
6. Commit source, required summaries, links and hours as one logical atomic operation, or retain all prior values. Cross-object transaction and locking support is a build gate; independent saves that silently diverge are unacceptable. Concurrent unique-summary conflicts reread the existing record and retry. Native execution evidence identifies failures/scope/owner; the analytics administrator owns reconciliation. No custom run object is introduced.
7. After successful synchronization request/coalesce A2/A3 for every affected establishment month/year and A4 for every affected location scope, including original scopes across year changes. Downstream failure leaves source/summary sync consistent, surfaces a native error and prevents affected outputs being represented as current until refresh succeeds. The native completion/error gate is part of binding verification. Retrying fully recomputes current data; never increments stored totals or overwrites newer results with a stale concurrent read.

Monthly summaries are shared aggregates of many independent sources. Correct an entry by relinking under A0 and recalculating both scopes; preserve old summaries and headcounts even when the last entry is removed. Block summary deletion while referenced. Empty unreferenced-period cleanup requires governed review of headcount/report dependencies.

### 6.3 Headcount and master lifecycle

Authorized editors can create headcount-only summaries with a required dimension and month-start Date. A1 resolves uniqueness and initializes the summary; A0's scope-only rebuild branch recalculates hours from existing sources without creating or validating an artificial source row. There is no reverse synchronization from summaries to Hours Worked. After creation, summary dimension and Date are read only. An incorrect headcount-only identity requires governed correction/recreation; retain audit and prevent duplicate scope/month records.

Headcount changes never change source hours. Employee/contractor headcounts remain independent in each dimension; never infer them from source-row counts or organizational-location sums. Annual averaging/worker-population policy remains the original verified policy, unresolved in the extract. Distinguish default headcount zero from confirmed inputs during completeness checks.

New Location selections require Deleted=FALSE and existing location permissions; new establishment selections require Active?=TRUE. Preserve existing inactive/archived references on historical source entries, including hours/month-only corrections. Ordinary users cannot newly select a different inactive scope; an authorized administrator historical-correction path may do so. Deactivation blocks new ordinary allocations/period generation, while historical recalculation and output reproduction remain available. Master renames do not rewrite annual snapshots; hard deletion is restricted while referenced.

${copy}
### 6.4 Uniqueness and processor recursion

| Record/process | Key | Behavior |
|---|---|---|
| Hours Worked | SourceEntryID, namespaced by feed/manual origin and allocation line | Unique create; corrections address same record; no retry insert. |
| Location Hours and Headcount | Existing Location + Date, validator graphId 183 | Preserve existing GUID/headcount; reuse shared summary under concurrent generation. |
| Establishment Hours and Headcount | OSHAEstablishment + Date | One monthly summary, not one per source row. |
| Establishment Incident Rate KPI | OSHAEstablishment + Date | One concrete monthly result; preserve targets. |
| Establishment OSHA Summary | OSHAEstablishment + January 1 Date | One annual result; preserve reporting metadata. |
| A0/A2/A3/A4 work | Procedure + dimension kind + scope GUID + period | Serialize overlapping writes; recompute current data; no stale or additive overwrite. |

Processor writes to summary hours or source links must be excluded from initiating hooks. A1 observes headcount changes only for downstream employment refresh. Reconciliation can rebuild a month from source records and detect mismatched links/totals without adding audit/reconciliation objects.`);
doc=doc.replace('Existing links remain untouched.','Existing location-family links retain their IDs/bindings; hours flow through the controlled summary cutover.');
doc=doc.replace('No target query may fall back to Location descendants.','No establishment-family query may fall back to Location descendants; existing location-family roll-ups retain source behavior. Add a Hours Worked entry/detail inventory with readonly links, plus the two contribution grids. Summary forms disable hour editing while retaining headcount entry; server/API restrictions enforce the same rule.');
const boundaryExtra=`Hours Worked is not location-bound, because establishment-only records are valid. Apply explicit object/record security. An editor must be authorized for every populated dimension, including both on dual-scope entries; recheck on save/import. A summary grid/link does not grant access to its source entry or the other dimension. Preserve native location-summary security, authorize establishment summaries independently, and enable native audit on values, references, headcounts and processor writes. Restrict computed summary-hour fields and source links at server/API level. No workflow or approval object is added.\n\n`;
doc=doc.replace('## 9 Change summary and repository impacts',boundaryExtra+'## 9 Change summary and repository impacts');
replaceSection('## 9 Change summary and repository impacts',null,`## 9 Change summary and repository impacts

| Change ID | Action | Element | Baseline or prior target | Current target | Requirement | Rationale / confidence |
|---|---|---|---|---|---|---|
| C1 | Add | OSHA Establishment | No independent master in extract | Flat governed master and reporting metadata | R3, R4 | Inferred from reporting needs; Proposed fields. |
| C2 | Add | Five establishment analytics objects | Original location family | Five counterparts preserving 89 fields | R2, R3 | Extracted coverage; runtime parity unresolved. |
| C3 | Add | Hours Worked | No shared input in extract/v1 | Eight fields with optional dimensions and two summary links | R7, R8 | Approved shared-input direction; detailed rules Proposed. |
| C4 | Modify | Location Hours and Headcount | Direct hours/headcount entry | Readonly calculated hours, independent headcounts, fixed identity and contribution inverse | R1, R8, R9 | Explicit exception to v1 unchanged-original behavior; retain IDs/binding. |
| C5 | Refine | Establishment Hours and Headcount | Direct summary entry in v1 | Same calculated-hour/independent-headcount split and contribution inverse | R2, R8, R9 | Direct-hour entry and prior A1 scope superseded. |
| C6 | Add / integrate | A0/A1/A2/A3/A4 | Separate input paths | One writer, safe correction, summary refresh and retained downstream consumers | R1, R2, R8 | Runtime transaction/processor binding requires verification. |
| C7 | Modify | Forms/imports/cutover | Two potential manual hour writers | Hours Worked entry and readonly summary hours | R9 | Prevent double entry and competing sources. |
| C8 | No structural change | Incident/employee/asset objects | Existing separate specifications | Dependency boundary only | R5 | Incident-side design remains excluded. |

The package evidence and original model remain the baseline; revision 2 is not a new baseline. The previous target/model/validation are archived under history/v1. R1/R2 are refined, and both separate direct-hour entry and v1's assumption of an unchanged location-hours interface are explicitly superseded. Other location analytics object definitions, incident filters, report object IDs and the organizational hierarchy remain intact.

Cross-specification search found the employee provisioning specification's Location-to-Location Hours and Headcount relationship. Its target/native inverse is retained, so that consumer row needs no structural rewrite and grants no new Boomi write permission. Any actual import/integration that writes EmployeeHrs/ContractrHrs must move to Hours Worked before cutover; no such writer is identified by this extract. The existing employee HomeLocationCode/establishment conflict, inspections defaults and Phase 2 incident binding remain separate consumer-design dependencies. No ADR status or employee/asset/incident schema has been changed.

Related evidence: [Platform ADR-009](<../../../phase 1/platform administration/ADRs/ADR-009-separate-reporting-locations-from-osha-establishments.md>), [reporting-location confirmation](<../../../phase 1/platform administration/raw artifacts/2026-11-10-reporting-location-establishment-confirmations.md>), [Incident ADR-001](<../ADRs/ADR-001-capture-establishment-and-operational-resource.md>), [accepted incident privacy](<../ADRs/ADR-003-limit-persistent-incident-visibility-and-use-workflow-access.md>), [employee provisioning consumer](<../../../phase 1/employee management/ADR-001-004-technical-specification-employee-provisioning.md>).

## 10 Transition and acceptance

### 10.1 Governed cutover

1. Retain package evidence and v1 history. Configure master, shared source and parallel family; retain original location-summary object/field GUIDs, native location binding, references and headcounts. Verify supported cross-object synchronization and downstream bindings before activation.
2. Inventory manual/API/import hour writers and source/report processors. Establish a cutover boundary; stop legacy hour writes and restrict summary-hour fields server-side for migrated periods. Do not activate A0 production overwrites before writer inventory/reconciliation. Headcount editing remains independent.
3. Prefer authoritative detailed source hours. Otherwise convert each direct/local location/month summary's hours into one location-only opening Hours Worked entry, SourceEntryID legacy-location:<summary GUID>. Copy Date to Month, Location and the two hour amounts. Preserve summary/headcount identities. Never seed hierarchy roll-up values. Resolve NULL, negative, invalid-date or duplicate legacy inputs explicitly; do not silently replace them with zero.
4. If v1 establishment summaries actually exist, reconcile economic overlap before converting their hours. Where the contribution and attribution are proven, enrich an existing opening entry with establishment or split into non-overlapping allocation lines. Do not additionally create an establishment-only copy of the same hours. If only independent totals are known, obtain an approved source allocation/reconciliation before claiming one canonical source population. Matching names or location placement do not establish attribution.
5. Load/opening entries using stable keys and rebuild all affected scopes, including scopes ending with no contributions. Compare each dimension's hours with approved legacy totals. Preserve headcounts outside Hours Worked. Repeated migration uses the same keys and adds no duplicates.
6. Refresh A2/A3/A4, validate denominators, permissions and output bindings, then enable the shared entry route as the sole hours writer. Disable legacy direct-hour mappings; retain original records/native audit. Resolve input completeness and failures before representing outputs as current. A rollback uses reconciliation/native audit to restore approved hours and disable the new writer; never operate both writers together.

No employee or incident establishment backfill is implemented by this migration; those remain separately designed.

### 10.2 Acceptance scenarios

| Check | Expected result |
|---|---|
| AT01 Location only | One correct location/month summary; establishment/link NULL; no establishment contribution. |
| AT02 Establishment only | One correct establishment/month summary; location/link NULL; no organizational fallback. |
| AT03 Both | One row links to both summaries; 1,200 hours appears once in each dimensional view and once in raw-source enterprise totals. |
| AT04 Neither | Reject before source/summary creation. |
| AT05 Multiple entries | Distinct non-overlapping IDs sum once into one shared summary, not separate summaries per row. |
| AT06 Duplicate/replay | Same-key create rejected/recognized as identical retry; authorized update replaces source; migration replay adds nothing. |
| AT07 Corrections | Edit hours, either dimension or month across years; clear one dimension; links/totals refresh for all original/corrected scopes without changing the other dimension implicitly. |
| AT08 Deletion | Recompute remaining values, then zero after last contribution; preserve summary IDs/headcounts. |
| AT09 Concurrency/rollback | Forced failure or simultaneous creates/updates cannot leave orphan links, duplicate summaries or only one dimension updated. |
| AT10 Recursion/API integrity | Processor writes do not create another source or trigger A0 recursively; reject direct summary-hour and source-link writes. |
| AT11 Numeric/date | Reject NULL/negative/non-finite hours and non-month-start dates; permit zero/fractional hours; retain worker-population separation. |
| AT12 Headcount | Hours rebuild preserves all headcounts; headcount changes refresh employment outputs without changing source hours. |
| AT13 Historical masters | Preserve archived/inactive references/snapshots; block new ordinary allocations; allow authorized historical correction/recalculation. |
| AT14 Location regression | Direct local hours enter once; existing processor rolls up without ancestor input duplication or changed incident/report binding. |
| AT15 Establishment parity | All 89 counterpart fields retained, Lo/Ru pairs equal, four actual rates/manual targets follow verified source policy. |
| AT16 Outputs | Verify populated/empty OSHA/Cal 300/300A, combined variants, 301 links and electronic export against source; custom-object support must pass. |
| AT17 Security | Every dimension checked on dual-scope save/import; navigation does not bypass source/incident privacy; no inferred access from establishment. |
| AT18 Cutover | Opening totals reconcile by dimension; no economic duplicate, hierarchy-input duplicate or competing legacy hour writer. |
| AT19 Downstream failure | Source/summary sync consistent; native error/completion gate prevents affected outputs represented as current; retry rebuilds current values. |
| AT20 Completeness | Missing input/headcount differs operationally from confirmed zero; annual averaging/eligibility/rounding follow verified source policy. |

## 11 Requirement traceability and validation status

| Requirement | Affected elements | Design response | Status |
|---|---|---|---|
| R1 | Original location summary/processors | Retain identities/binding; controlled hour-ownership change and regression contract | Satisfied |
| R2 | Five counterparts and metric contracts | All 89 fields mapped; source calculation parity unresolved | Partially satisfied |
| R3 | Establishment analytics/shared optional dimensions | No organizational fallback; flat establishment population | Satisfied |
| R4 | Establishment master | Sixteen data fields and three navigation grids | Satisfied |
| R5 | Incident dependency boundary | No incident-side design | Satisfied |
| R6 | Templates/links/dashboard | All capabilities accounted for; runtime/custom-object support unverified | Requires confirmation |
| R7 | Hours Worked | Three valid modes and rejection of neither | Satisfied |
| R8 | A0, links and inverses | Exact summary mapping, original/corrected scope refresh and retry safety | Satisfied |
| R9 | Summaries/imports/migration | One hour writer, separate headcounts and overlap reconciliation | Satisfied |

Satisfied means specified at design level, not deployed/runtime-tested. The target contains eight owned/modified object sections and 126 direct field/grid rows: 89 establishment counterparts, eight existing location-summary fields, 19 master fields/grids, eight Hours Worked fields and two new contribution inverses. Inherited fields are declared once on their new base. Package evidence remains unchanged. Structural checks are in [validation.json](validation.json).

Remaining build gates: supported source/summary transaction/locking and Delete-event original-scope access; manual source-key generation timing; current writer inventory; server/import authorization; existing location-processor integration and native completion/error gate; metric/rate definitions; AssociatedOIIs/incident schema; settings/templates/dashboard and custom-object report support; tenant text capacity and completeness policy. No new catalogue needs seed data or catalogue inheritance. Existing external catalogue metadata remains unresolved where not exported. No executable aggregation syntax, service API, custom ledger or queue is invented. This is a reviewable revised specification, not an implemented or runtime-validated solution.`);
fs.writeFileSync(modelPath,JSON.stringify(m,null,2));
doc=doc.replace(/[ \t]+$/gm,'').replace(/\n{3,}/g,'\n\n');
fs.writeFileSync(docPath,doc);
fs.writeFileSync(path.join(dir,'revision-history.json'),JSON.stringify({currentRevision:2,baselineSha256:e.sha256,previousTarget:'history/v1/technical-specification.md',refinedRequirements:['R1','R2'],newRequirements:['R7','R8','R9'],supersededDecisions:m.requirements.superseded,incidentDesign:'Excluded; dependency contract retained'},null,2));
console.log('Applied shared-hours revision 2:',m.objects.length,'objects;',m.objects.reduce((n,o)=>n+o.fields.length,0),'direct field/grid rows.');
