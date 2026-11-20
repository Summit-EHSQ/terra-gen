const fs=require('fs'),path=require('path');
module.exports=function(tasks){
 const wording=JSON.parse(fs.readFileSync(path.join(__dirname,'shared-hours-plan-language.json'),'utf8'));
 const defaults={
  'None; unique, non-localizable':'Leave blank for entry. Require a unique value and do not translate it.',
  'None':'No default value.',
  'TRUE':'Start new records at TRUE (Yes).',
  'Import: caller supplies namespaced stable key; manual create: A0 supplies manual: followed by native record GUID using supported creation mechanism':'For imports, use a stable reference that identifies the source feed and entry. For manual entry, Synchronize Hours Worked supplies manual: followed by the record identifier before required-field checks, using the supplied supported method.',
  'Native MonthStartValueGenerator at creation':'Start with the first day of the current month, using MonthStartValueGenerator.',
  'NULL':'Start blank (NULL).',
  '0':'Start at 0.',
  'NULL until A0 resolves applicable summary within successful save':'Start blank (NULL); Synchronize Hours Worked fills the correct summary link before a successful save finishes.',
  'A0 copies Hours Worked.Month on generated creation; native MonthStartValueGenerator on headcount-only creation':'When creating the summary automatically, copy Hours Worked.Month. For headcount-only entry, use MonthStartValueGenerator to start at the first day of the current month.',
  '0 at creation; A0 replaces with sum of Hours Worked.Employee Hours matching OSHAEstablishment and Month = Date':'Start at 0. Synchronize Hours Worked replaces this with the total Employee Hours for the same establishment and Month = Date.',
  'None; A0 supplies scope, or headcount editor selects at summary creation':'No default. The hours-update process supplies the establishment, or an authorized headcount editor selects it when first creating the summary.',
  'None; populated from OSHA Establishment.Name':'Copy OSHA Establishment.Name when the responsible process creates the record.',
  'Native auto-number sequence (source generator exported)':'Use Intelex automatic numbering with a new sequence; the source package includes the number generator.',
  '0 at creation; A0 replaces with sum of Hours Worked.Contractor Hours matching OSHAEstablishment and Month = Date':'Start at 0. Synchronize Hours Worked replaces this with the total Contractor Hours for the same establishment and Month = Date.',
  'None in metadata; native AutoNumber population required':'Use Intelex automatic numbering (AutoNumber). Its default setting still needs to be supplied; do not assume the record number is manually entered.',
  'None; Refresh Establishment Monthly Metrics supplies the first day of the requested month':'No user-entered default. Refresh Establishment Monthly Metrics supplies the first day of the requested month.',
  'None; mandatory generation/import scope':'No default. Creating the record automatically or importing it must supply the establishment.',
  'None; native GUID of OSHA Establishment reference':'Save the selected establishment record identifier (GUID), filled by the responsible process.',
  'None; Refresh Establishment Annual OSHA supplies January 1 of the requested year':'No user-entered default. Refresh Establishment Annual OSHA supplies January 1 of the requested year.',
  'None; Refresh Establishment Annual OSHA stores the calendar year derived from Date; no continuing calculated expression is assigned':'Refresh Establishment Annual OSHA saves the calendar year from Date. Do not add a continuously recalculated expression.',
  'No portable record GUID available; defer destination default binding to the supplied OII Setting input, never hard-code the source record GUID':'Use the supplied OSHA settings record for the intended environment. This default is waiting for that information; do not copy the source environment record identifier.'
 };
 const behavior={
  'Administrator editable at creation and while unused; the later reference-dependent code guard is configured with the complete record-security outcome':'Administrators can enter or change it before the establishment is used. The user-access task adds the protection needed once linked records exist.',
  'Establishment administrator editable':'Establishment administrators may edit it.',
  'Administrator editable; required for report generation':'Administrators may edit it. It is required before generating a report, not before saving an incomplete master record.',
  'Administrator editable':'Administrators may edit it.',
  'Administrator editable; preserve referenced values; available-value filter unresolved because catalogue fields are not exported':'Administrators may select a value. Keep past selections if a choice later becomes inactive. The rule for limiting new choices is waiting for the supplied classification details.',
  'Required on import; read only after creation; configured record display value':'Imports must supply it. After creation it is read only and acts as the displayed record label.',
  'Hours editor editable; visible in all modes; reject dates other than first day of month':'Hours editors may edit it and always see it. Reject dates other than the first day of the month.',
  'Visible/editable in all modes; required when OSHA Establishment is NULL; new selections Deleted=FALSE and existing location permissions; no login/home-location default':'Always show it and allow editing. Require it when OSHA Establishment is blank (NULL). New selections require Deleted=FALSE and the user\'s existing location access. Do not default it from the login or home location.',
  'Visible/editable in all modes; required when Location is NULL; new selections Active?=TRUE; no default from Location; retain existing inactive references':'Always show it and allow editing. Require it when Location is blank (NULL). New selections require Active?=TRUE. Do not fill it from Location, and retain existing assignments to inactive establishments.',
  'Hours editor editable; visible in all modes; deliberate zero permitted; NULL rejected':'Hours editors may edit it and always see it. Allow an intentional zero, but reject a blank value (NULL).',
  'Read only; visible/required at completed save when Location is populated; NULL and hidden when Location is NULL':'Show it as read only when Location is selected, and require its correct value before the save finishes. Otherwise keep it blank (NULL) and hide it.',
  'Read only; visible/required at completed save when OSHA Establishment is populated; NULL and hidden when it is NULL':'Show it as read only when OSHA Establishment is selected, and require its correct value before the save finishes. Otherwise keep it blank (NULL) and hide it.',
  'Headcount editor selects at creation; read only after save':'A headcount editor selects it when creating the summary. Make it read only after the first save.',
  'Authorized headcount editor editable; API/import uses the same validation; retain source numeric type and default':'Authorized headcount editors may edit it. Apply the same checks through the API and imports, with the source numeric type and default.',
  'Read only to ordinary users/API/import clients; authorized processor writes only':'Show it as read only and prevent direct user, API or import edits. Only the authorized automatic calculation writes this total.',
  'Required at creation; new selections Active?=TRUE; read only after save; inactive historical references retained':'Require a selection when creating the summary, with Active?=TRUE for new ordinary selections. Make it read only after saving and retain historical inactive assignments.',
  'Read only; analytics users may view':'Analytics users may view it but cannot edit it.',
  'Read only; authorized hours/analytics users':'Authorized hours and analytics users may view the list but cannot edit links through it.',
  'Read only; retain location-scoped access; source access separately checked':'Show the list as read only under the existing location-access rules. Separately check access to each underlying hours entry.',
  'Read only; authorized analytics users':'Authorized analytics users may view the list but cannot edit links through it.',
  'Read only on generated forms; supplied by Refresh Establishment Monthly Metrics; historical inactive references retained':'Show it as read only on automatically created records. Refresh Establishment Monthly Metrics supplies it; keep historical inactive assignments.',
  'Read only; hidden on ordinary form':'Users cannot edit it; hide it on ordinary screens.',
  'Authorized analytics administrator editable':'Authorized analytics administrators may edit it.',
  'Read only on generated forms; supplied by Refresh Establishment Annual OSHA; historical inactive references retained':'Show it as read only on automatically created records. Refresh Establishment Annual OSHA supplies it; keep historical inactive assignments.',
  'Read only; hidden on ordinary summary form':'Users cannot edit it; hide it on ordinary summary screens.',
  'Regulatory administrator editable; preserve selected inactive/legacy values; active-selection filter unresolved in external catalogue export':'Regulatory administrators may edit it. Keep existing inactive or older selections. New-choice restrictions are waiting for the supplied classification details.',
  'Read only in target; authorized regulatory users; recordable-only log grid':'Authorized regulatory users may view this read-only list. The OSHA case list shows recordable cases only.',
  'Read only; authorized regulatory users':'Authorized regulatory users may view the list but cannot edit links through it.'
 };
 const targets={
  EHSIncidentMang_EstablishmeTypeObject:'OSHA Establishment Type (EHSIncidentMang_EstablishmeTypeObject)',
  EHSIncidentMang_EstablishmeSizeObject:'OSHA Establishment Size (EHSIncidentMang_EstablishmeSizeObject)',
  EHSIncidentMang_HasRecordaInjurObject:'Has OSHA Recordable Injuries (EHSIncidentMang_HasRecordaInjurObject)',
  EHSIncidentMang_OIISettingObject:'OII Setting (EHSIncidentMang_OIISettingObject)',
  SysLocationEntity:'Location (SysLocationEntity)'
 };
 function typeText(type){
  if(type.startsWith('Text, max '))return type.replace(/^Text, max (\d+)/,'Text, up to $1 characters').replace('; legal reporting label, non-localizable','; use the legal reporting name and do not translate it').replace('; unique within Hours Worked; non-localizable','; keep unique within Hours Worked and do not translate it')+'.';
  if(type==='Yes/No')return 'A Yes/No field.';
  if(type==='Number / bigint, System.Int64')return 'A whole-number field (bigint/System.Int64).';
  if(type==='GUID')return 'A unique record identifier (GUID).';
  if(type==='AutoNumber, System.Int64')return 'An automatically assigned record number (AutoNumber/System.Int64).';
  if(type.startsWith('Date;'))return 'A calendar date (Date), with time-zone capture turned off.';
  if(type.startsWith('Float, System.Double; unit hours'))return 'Hours as a number allowing decimals (Float/System.Double). Require a valid finite value of 0 or greater; no additional fixed precision or decimal-place limit is specified.';
  if(type==='Float, System.Double; precision/scale not constrained in export')return 'A number allowing decimals (Float/System.Double); the package sets no fixed precision or number of decimal places.';
  if(type==='Text / nvarchar; length not constrained in export')return 'A text field (nvarchar); its permitted length still needs to be supplied.';
  if(type.startsWith('M:1 to ')){
   const target=type.match(/^M:1 to ([^;,]+)/)[1];let s='Select one '+(targets[target]||target)+' (M:1). ';
   s+=type.includes('exactly 1')?'Each record requires one selection. ':'The link can hold zero or one record; the required-field rule below determines when it may be blank. ';
   if(type.includes('inverse disabled'))s+='Leave the reverse list disabled on the selected record (inverse relationship off).';
   else {const inverse=type.match(/; inverse (.*)$/)?.[1];if(!inverse)throw Error('No relationship-list description: '+type);s+='Show linked records through its '+inverse+' list, using this same link.';}
   return s;
  }
  if(type.startsWith('Inverse 1:M grid from '))return 'A read-only list of records linked through '+type.slice('Inverse 1:M grid from '.length)+'. Use that existing link; do not store a second relationship.';
  if(type==='Related Injury/Illness collection; 0..* results, storage cardinality/inverse unresolved in export')return 'A list of zero or more Injury/Illness cases. The exact stored relationship and return link are waiting for the separately supplied incident details.';
  throw Error('No reviewed plain-language field type: '+type);
 }
 for(const t of tasks){
  const w=wording[t.id];if(!w)throw Error('Missing task wording '+t.id);
  for(const key of ['title','category','objective','scope','deliverable','rationale','steps','accept'])t[key]=w[key];
  if(w.modifications){if(w.modifications.length!==t.modifications.length)throw Error('Modification count changed');t.modifications.forEach((m,i)=>m.change=w.modifications[i]);}
  t.fieldSettings=[];
  if(w.configurationRows){if(w.configurationRows.length!==t.configurationRows.length)throw Error('Output row count changed');t.configurationRows=w.configurationRows;}
  else t.configurationRows=t.configurationRows.map(row=>{
   const match=row[1].match(/^Add (.*?) \(([^()]*)\) on (.*?) \(([^()]*)\)\. Type\/relationship: (.*?)\. Required: (Y|N|Conditional)\. Default\/population setting: (.*?)\. Field\/control behavior: (.*)\.$/);
   if(!match)throw Error('Unexpected source field row '+row[0]);
   const [,caption,name,object,internalName,type,required,def,edit]=match;
   t.fieldSettings.push({caption,name,object,internalName,type,required,default:def,editability:edit});
   let defaultText=defaults[def];
   if(def.startsWith('At initial annual generation: OSHA Establishment.'))defaultText='When the annual record is first created, copy and save OSHA Establishment.'+def.slice('At initial annual generation: OSHA Establishment.'.length)+'. Later master changes must not automatically replace this saved value.';
   if(!defaultText||!behavior[edit])throw Error('Unreviewed field wording '+def+' / '+edit);
   const req={Y:'Require a value before a successful save finishes.',N:'The field is optional.',Conditional:'Require it only under the conditions below.'}[required];
   return [row[0],`Add ${caption} (${name}) on ${object} (${internalName}). ${typeText(type)} ${req} ${defaultText} ${behavior[edit]}`];
  });
 }
};
