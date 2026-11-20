// Presentation adapter: specification design locators are not assigned system names.
const names={TG_OSHAEstablishmentObject:'OSHA Establishment',TG_EstIncRateAbstractObject:'Establishment Incident Rate Abstract',TG_EstIncidentRateKPIObject:'Establishment Incident Rate KPI',TG_EstOSHAAbstractObject:'Establishment OSHA Abstract',TG_EstOSHASummaryObject:'Establishment OSHA Summary',TG_EstHrsHeadcountObject:'Establishment Hours and Headcount',TG_HoursWorkedObject:'Hours Worked'};
const screens={TG_OSHAEstablishment:'OSHA Establishment',TG_EstIncRateAbstract:'Establishment Incident Rate Abstract',TG_EstIncidentRateKPI:'Establishment Incident Rate KPI',TG_EstOSHAAbstract:'Establishment OSHA Abstract',TG_EstOSHASummary:'Establishment OSHA Summary',TG_EstHrsHeadcount:'Establishment Hours and Headcount',TG_HoursWorked:'Hours Worked'};
const lookup='GETRELATED("TG_EstHrsHeadcountObject", "Date", Month, "OSHAEstablishmentId", OSHAEstablishment.Id)';
function wording(s){
 s=s.replaceAll(lookup,'the GETRELATED result for the Establishment Hours and Headcount Object using its assigned system name, matching Date to Month and the establishment relationship-ID key to OSHAEstablishment.Id');
 for(const [key,name] of Object.entries(screens)){
  s=s.replaceAll(key+'_Detail/Inventory',name+' detail and inventory screens').replaceAll(key+'_Detail',name+' detail screen').replaceAll(key+'_Inventory',name+' inventory screen');
 }
 for(const [key,name]of Object.entries(names))s=s.replaceAll(name+' ('+key+')',name).replaceAll(key,name);
 return s;
}
function convert(x){
 if(typeof x==='string')return wording(x);
 if(Array.isArray(x))return x.map(convert);
 if(x&&typeof x==='object')return Object.fromEntries(Object.entries(x).map(([k,v])=>[k==='internalName'&&names[v]?'objectName':k,convert(v)]));
 return x;
}
module.exports={names,wording,convert};
