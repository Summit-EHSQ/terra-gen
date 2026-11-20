const fs=require('node:fs'),path=require('node:path');
const dir='docs/phase 2/incident management/osha-establishment-analytics';
const read=file=>JSON.parse(fs.readFileSync(path.join(dir,file),'utf8'));
const e=read('package-evidence-v1.0.2.0.json'),prior=read('report-definitions-v1.0.1.0.json'),reports=read('report-definitions-v1.0.2.0.json');
const config=new Map(e.configuration.map(c=>[c.graphId,c])),reportById=new Map(reports.map(r=>[r.recordId,r])),objects=new Map(e.objects.map(o=>[o.recordId,o]));
const unique=xs=>[...new Set(xs)];const issues=[];
const edges=reports.flatMap(r=>r.definition.dataSources.filter(s=>s.dataDefinitionId).map(s=>({report:r.recordId,source:s.dataDefinitionId,alias:s.alias})));
for(const edge of edges)if(!reportById.has(edge.source))issues.push({type:'Missing report',...edge});
for(const r of reports)for(const s of r.definition.dataSources.filter(s=>s.entityId))if(!objects.has(s.entityId))issues.push({type:'Missing report object',report:r.recordId,object:s.entityId});
const visiting=new Set(),done=new Set();function visit(id){if(visiting.has(id)){issues.push({type:'Report dependency cycle',id});return;}if(done.has(id))return;visiting.add(id);edges.filter(e=>e.report===id).forEach(e=>visit(e.source));visiting.delete(id);done.add(id);}reports.forEach(r=>visit(r.recordId));
function closure(id,result=new Set()){if(result.has(id))return result;result.add(id);edges.filter(e=>e.report===id).forEach(e=>closure(e.source,result));return result;}
const imports=e.configuration.filter(c=>c.type==='Scheduled Import').map(s=>{
 const wrapper=config.get(s.relations.find(r=>r.source==='Setting')?.targetId);
 const graph=e.graphs.find(g=>g.ownerItemId===wrapper?.graphId);
 const members=(graph?.itemIds||[]).map(id=>config.get(id)).filter(Boolean);
 const settings=members.find(c=>c.type==='Import'&&c.data);
 const source=config.get(settings?.relations.find(r=>r.source==='Source')?.targetId);
 const roots=unique((source?.relations||[]).filter(r=>r.source==='DataDefinition').map(r=>r.targetRecordId));
 if(!settings||roots.length!==1||!reportById.has(roots[0]))issues.push({type:'Unresolved import report binding',scheduledImport:s.recordId});
 const report=reportById.get(roots[0]);
 const mappings=members.filter(c=>c.type==='Field Mapping').map(c=>{
  const sf=config.get(c.relations.find(r=>r.source==='SourceField')?.targetId);
  const alias=sf?.data?.Name,projection=report?.definition.projections.find(p=>p.alias===alias);
  if(!projection)issues.push({type:'Missing mapped report output',mapping:c.recordId,sourceAlias:alias,report:roots[0]});
  return {recordId:c.recordId,path:c.data.RelatedPath,matchKey:c.data.PrimaryKey,sourceAlias:alias,sourceCaption:sf?.data?.Caption,projectionCaption:projection?.caption,mappingRule:c.data.MappingRule};
 });
 return {scheduledImport:s.recordId,name:s.data.Name,settingsId:settings?.recordId,sourceReportId:source?.recordId,reportId:roots[0],reportCaption:report?.caption,targetObject:settings?.relations.find(r=>r.source==='Object')?.target,transactional:settings?.data.IsTransactional,insert:settings?.data.InsertMode,update:settings?.data.UpdateMode,reportClosure:report?[...closure(report.recordId)]:[],mappings};
});
const flows=e.configuration.filter(c=>c.type==='Event Handler').map(c=>({recordId:c.recordId,name:c.data.Name,steps:JSON.parse(c.data.Flow).map((step,index)=>{const imp=imports.find(i=>i.scheduledImport===step.importId);if(!imp)issues.push({type:'Missing scheduled import',flow:c.recordId,importId:step.importId});return {order:index+1,scheduledImport:step.importId,name:imp?.name,reportId:imp?.reportId};})}));
const reached=unique(imports.flatMap(i=>i.reportClosure));
const folders=e.configuration.filter(c=>c.type==='Reporting').map(c=>({recordId:c.recordId,name:c.data.NameReporting,container:c.relations.find(r=>r.source==='ParentReporting')?.targetRecordId??null,order:c.data.Order}));
const reportFolders=reports.map(r=>({reportId:r.recordId,folderId:config.get(r.graphId).relations.find(x=>x.source==='Reporting')?.targetRecordId}));
for(const r of reportFolders)if(!folders.some(f=>f.recordId===r.folderId))issues.push({type:'Missing report folder',...r});
const result={version:'1.0.2.0',evidenceSha256:e.sha256,classification:'Extracted dependency and mapping evidence; runtime capability remains unresolved',counts:{reports:reports.length,reportReferences:edges.length,scheduledImports:imports.length,mappings:imports.reduce((n,i)=>n+i.mappings.length,0),eventHandlers:flows.length,folders:folders.length,reportsReached:reached.length},unchangedReportDefinitions:reports.every(r=>prior.find(p=>p.recordId===r.recordId)&&JSON.stringify(prior.find(p=>p.recordId===r.recordId).definition)===JSON.stringify(r.definition)),unreachedReports:reports.filter(r=>!reached.includes(r.recordId)).map(r=>r.recordId),issues,flows,imports,reportReferences:edges,folders,reportFolders};
fs.writeFileSync(path.join(dir,'report-lineage-v1.0.2.0.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({counts:result.counts,unchangedReportDefinitions:result.unchangedReportDefinitions,unreachedReports:result.unreachedReports,issues},null,2));
if(issues.length)process.exitCode=1;
