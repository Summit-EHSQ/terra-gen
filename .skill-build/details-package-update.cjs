const e=require('../docs/phase 2/incident management/osha-establishment-analytics/package-evidence-v1.0.1.0.json');
for(const id of ['872','2266','2751','874','2264','2527']){const c=e.configuration.find(x=>x.graphId===id);console.log(JSON.stringify(c,null,2));}
for(const c of e.configuration.filter(x=>x.type==='Report').slice(0,2))console.log(JSON.stringify(c.data,null,2));
console.log('INPUTS '+JSON.stringify(require('../docs/phase 2/incident management/osha-establishment-analytics/implementation-plan.json').externalInputs,null,2));
