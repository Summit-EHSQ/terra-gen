const html=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/\r?\n/g,'<br/>');
const section=(title,text)=>'<div><strong>'+html(title)+':</strong><br/>'+text+'</div><br/>';
const list=items=>items.map((s,i)=>html((i+1)+'. '+s)).join('<br/><br/>');
function description(plan,t,numbers){
 let body=section('Source',html(plan.title+' — plan revision '+plan.version+', specification revision '+plan.specificationRevision+'.'));
 body+=section('Source task',html('OSHA-ESTABLISHMENT-ANALYTICS:'+t.id));
 body+=section('Naming',html(plan.namingConvention));
 if(plan.auditPolicy?.enabled===false)body+=section('Audit Trail',html('Audit Trail is excluded from all functionality in this specification. Set IsAuditEnabled=FALSE on every new or modified Object; retain FALSE on existing Location Hours and Headcount. Do not enable auditing for corrections or add a replacement audit/history Object.'));
 for(const [label,value]of [['Objective',t.objective],['Detailed scope',t.scope],['Deliverable',t.deliverable],['Category',t.category],['What is waiting',t.blockedStatus],['Recommended implementer role',t.implementer],['Recommended reviewer/approver role',t.reviewer],['Why this role is recommended',t.rationale]])body+=section(label,html(value));
 body+=section('Work needed first',t.prerequisites.length?t.predecessorOutputs.map(v=>html(v.id)+' ('+html(numbers[v.id])+') — '+html(v.description)).join('<br/><br/>'):'None');
 if(t.configurationRows.length)body+=section('Fields and features to set up',t.configurationRows.map(r=>'<strong>'+html(r[0])+':</strong><br/>'+html(r[1])).join('<br/><br/>'));
 if(t.modifications.length)body+=section('Changes to the existing setup',t.modifications.map(r=>'<strong>'+html(r.element)+':</strong><br/>'+html(r.change)).join('<br/><br/>'));
 if(t.steps.length)body+=section('Build instructions',list(t.steps));
 body+=section('How to check the result',list(t.accept));
 body+=section('Information needed for this task',t.suppliedInputDescriptions.length?t.suppliedInputDescriptions.map(i=>html(i.id+': '+i.description)).join('<br/><br/>'):'None');
 body+=section('Specification references',t.refs.map(html).join('<br/><br/>'));
 body+=section('Assumptions and open questions',html(t.assumptions));
 return body;
}
module.exports={html,section,description};
