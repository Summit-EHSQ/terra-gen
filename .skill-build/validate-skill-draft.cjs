const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const root=path.resolve('.skill-build/intelex-implementation-planner');
const files=[];function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);e.isDirectory()?walk(p):files.push(p);}}walk(root);
const source=fs.readFileSync(path.join(root,'SKILL.md'),'utf8').replace(/\r\n/g,'\n');
const front=source.match(/^---\n([\s\S]*?)\n---/);assert(front);
const data=Object.fromEntries(front[1].split('\n').map(l=>{const i=l.indexOf(':');return [l.slice(0,i),l.slice(i+1).trim()];}));
assert.deepEqual(Object.keys(data),['name','description']);assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.name));assert(data.name.length<=64);assert(data.description.length<=1024&&!/[<>]/.test(data.description));assert(!/^\[TODO:/m.test(source));
let links=0;for(const file of files.filter(x=>x.endsWith('.md'))){const text=fs.readFileSync(file,'utf8');for(const m of text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)){if(/^(https?:|#)/.test(m[1]))continue;assert(fs.existsSync(path.resolve(path.dirname(file),m[1].split('#')[0])),file+': '+m[1]);links++;}}
let checks=0;for(const script of ['test-plan-output-contract.cjs','test-implementation-task-contract.cjs']){const result=cp.execFileSync(process.execPath,[path.join(root,'scripts',script)],{encoding:'utf8'});checks+=(result.match(/^PASS /gm)||[]).length;}
const report={passed:true,regressionChecks:checks,relativeLinksChecked:links,frontmatter:'Equivalent name/description/allowed-key/placeholder checks passed in Node; official Python quick_validate unavailable in this environment.',approvedPlanFormatCheck:JSON.parse(fs.readFileSync('.skill-build/approved-plan-format-check.json','utf8')),installedSkillModified:false,limits:'Deterministic checks and author review; no fresh-agent plan-generation trial or live tenant validation.'};
fs.writeFileSync('.skill-build/intelex-implementation-planner-draft-validation.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
