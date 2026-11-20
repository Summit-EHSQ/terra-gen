const fs=require('fs');const p=JSON.parse(fs.readFileSync('docs/phase 2/incident management/osha-establishment-analytics/implementation-plan.json','utf8'));
console.log('PLAN KEYS',Object.keys(p));
for(const t of p.tasks.slice(0,5)){console.log('\n'+JSON.stringify({...t,configurationRows:t.configurationRows.map(r=>r[0]),fieldSettings:undefined},null,2));}
