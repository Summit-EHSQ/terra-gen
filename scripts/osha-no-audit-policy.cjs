function wording(s){
 return String(s)
  .replaceAll('unique establishment codes, change history and administration screens','unique establishment codes and administration screens')
  .replaceAll(', and enable its change history','')
  .replaceAll('enable Intelex change history','set IsAuditEnabled=FALSE')
  .replaceAll('Enable change history','Set IsAuditEnabled=FALSE')
  .replaceAll('enable change history','set IsAuditEnabled=FALSE')
  .replaceAll('with change history','without Audit Trail')
  .replaceAll('Keep change history, and never replace','Never replace')
  .replaceAll('Use Intelex change history to show the old and new values and who changed them. ','')
  .replaceAll('Authorized header correction appears in change history, leaves master data unchanged','Authorized header correction leaves master data unchanged')
  .replaceAll('Reuse native references, uniqueness and audit.','Reuse native references and uniqueness.')
  .replaceAll('Enable native audit on mutable business data and references;','Keep Audit Trail disabled (IsAuditEnabled=FALSE) on every in-scope Object;')
  .replaceAll('; native audit;',';').replaceAll('; native audit','')
  .replaceAll(' with native audit','').replaceAll(' and native audit','')
  .replaceAll('explicit audited correction allowed','explicit authorized correction allowed')
  .replaceAll('retain audit and prevent','prevent')
  .replaceAll(', and enable native audit on values, references, headcounts and processor writes','; keep Audit Trail disabled (IsAuditEnabled=FALSE) on all in-scope Objects');
}
function convert(x){
 if(typeof x==='string')return wording(x);
 if(Array.isArray(x))return x.map(convert);
 if(x&&typeof x==='object')return Object.fromEntries(Object.entries(x).map(([k,v])=>[k,convert(v)]));
 return x;
}
module.exports={wording,convert};
