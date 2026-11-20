const e=require('../docs/phase 2/incident management/osha-establishment-analytics/package-evidence-v1.0.1.0.json');
for(const type of ['Report','Source Report','Scheduled Import','Object Action Handler','Event Handler','Schedule','Import','Security Settings']){
 console.log('\n'+type);
 for(const c of e.configuration.filter(x=>x.type===type))console.log(JSON.stringify({id:c.graphId,recordId:c.recordId,name:c.data?.Name||c.caption,keys:Object.keys(c.data||c.specialData||{}),relations:c.relations.filter(r=>['Object','Import','Report','Schedule','ActionHandler','SourceReport','Parent'].includes(r.source))}));
}
