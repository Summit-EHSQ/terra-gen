// Manually authored review findings for the fixed October 29 snapshot below.
// This is not a generic approval generator: changed content requires a new review.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const dir=path.resolve(__dirname,'../docs/phase 1/employee management');
const stem='ADR-001-004-implementation-plan-employee-provisioning';
const expected={json:'b3d5a08b01b592c886e6fe638306a492c82a648813d7f2452c206d22fbb59e93',md:'69b3b508556b97be8135162194f9e741a3c70a6b1b29898b9667d79f55bde184'};
for(const [ext,digest]of Object.entries(expected))if(crypto.createHash('sha256').update(fs.readFileSync(path.join(dir,stem+'.'+ext))).digest('hex')!==digest)throw Error('Reviewed snapshot changed; reread and revise the findings, not just the hash.');
const gate=require(path.join(__dirname,'employee-implementation-task-contract.cjs'));
const plan=JSON.parse(fs.readFileSync(path.join(dir,stem+'-gate.json'),'utf8')),md=fs.readFileSync(path.join(dir,stem+'-gate.md'),'utf8');
const notes={
 'CFG-01':{evidence:'The complete four-field definitions and all four seed rows reconcile to specification 6.1–6.2. Forms/basic rights/audit transfer from the earlier small assignments. Used-Code enforcement and audit are not established by native metadata and remain named local inputs; no new tenant verification task is assigned.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add both governed catalogues as a complete maintenance outcome.','New catalogue objects, forms, permission grants and native audit.'],
 ['Create the two independent localized catalogue definitions.','Proposed TG_LoginLocationRuleObject and TG_AssignmentLocationBasisObject.'],
 ['Add four precisely typed fields and referenced-Code/inactive controls.','Catalogue Code/Name/Active?/Sort field settings and supplied protection binding.'],
 ['Create the four exact initial Code/Name/Active?/Sort combinations.','Two initial records per catalogue using stable Code values.'],
 ['Add four-field maintenance screens and displayed ordering.','Catalogue forms; consumer tasks own selector filtering.'],
 ['Apply Administrator/support grants and mutable-value audit.','Supplied principal/native audit bindings; undecided deletion remains blocked.'] ]},
 'CFG-02':{evidence:'Specification 4.2 and 7 define four proposed custom objects. The baseline contains native objects only, so the task labels additions as proposed and requires equivalent-definition/name inputs instead of declaring live absence. Early object definitions break field-target ordering without recreating native objects.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add the four shared profile relationship targets.','New object definitions in the supplied existing application.'],
 ['Create the named authoring/version/Role objects without inheritance.','Four proposed TG profile object definitions.'],
 ['Configure published objects with no workflow.','Published Position Code and published Role object parameters.'] ]},
 'CFG-03':{evidence:'Every authoring field in 7.1, the condensed 9.1 stage and 11 form behavior is included inline. History, Role and Employee inverses are consumed from their owning field tasks. Actual stage/status/person/date, subtype predicates and audit bindings remain precise inputs; no fabricated due date or unverified filter syntax is presented.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add complete working-authoring fields, screen and initial stage scaffold.','Position Code schema, initial workflow, form containers and native audit.'],
 ['Add Code, rule, Groups and current-version fields with exact settings.','Position Code field/relationship configuration and supplied case-sensitive controls.'],
 ['Add independent origin/sent controls with FALSE manual defaults.','Two read-only required Yes/No authoring fields.'],
 ['Create Initial Setup and Completed with a non-executable Publish scaffold.','New initial-only workflow identities and supplied responsibility/date bindings.'],
 ['Add working state containers and three subtype-specific Groups grids.','Authoring form using one Groups relation and the native subtype predicates.'],
 ['Add separate history/source/current navigation and the Publish position.','Authoring form controls over predecessor-created inverse relations.'],
 ['Enable supported authoring audit and protected form control behavior.','Native authoring audit and form read-only rules; direct-access enforcement has its own owner.'] ]},
 'CFG-04':{evidence:'The four stored publication fields and owner inverse reconcile to 7.2. The review form consumes Role and Employee inverses, now listed as explicit predecessors. Version numbering/display constraints remain native-input blockers. Transaction allocation/copy and non-form immutability are owned by publication and security, respectively.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add version storage, owner history and its read-only review screen.','Published Position Code fields, scoped constraint and form.'],
 ['Add required owner/positive number/rule and optional Groups storage.','Published Position Code field definitions and supplied composite uniqueness.'],
 ['Add the code-plus-number display and related review controls.','Native display expression and version form consuming Role/Employee inverses.'],
 ['Remove manual creation/edit/Draft commands from the proposed screen.','New published form and history-control command configuration.'] ]},
 'CFG-05':{evidence:'The six relationship fields, ownership and uniqueness reconcile to 7.3–7.4. Both simple Role forms are kept with their storage; UI-03 transfers its child screen here. The ordinary Role field may be configured but authoring entry/execution remains disabled as required by the current deferred boundary; selector/audit bindings stay unresolved.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add both Role storage structures, inverse grids and bounded forms.','Authoring and published Role association schema with deferred-entry control.'],
 ['Add authoring owner/Role/basis fields and owner-scoped uniqueness.','Position Code Role Assignment and its owner inverse/filter.'],
 ['Add immutable published owner/Role/basis fields and uniqueness.','Published Position Code Role Assignment and its owner inverse.'],
 ['Add separate authoring/review forms and audit without Role execution.','Role forms, native authoring audit and supplied deferred-control binding.'] ]},
 'CFG-07':{evidence:'All seven additions, proposed TG names, types/defaults and three enabled inverses reconcile to the additional-fields table in 13.4. Employee metadata supplies existing JobCode/Location and audit FALSE, not custom field/form bindings. The task changes extension audit only where supported and leaves its actual binding/target blocked.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add Employee capture/support structure and its native evidence controls.','Seven Employee extensions, inverse relations, support section and extension audit.'],
 ['Add integration origin, current Position Code and distinct source helper.','SysEmployeeEntity new Yes/No and two M:1 fields with named inverses.'],
 ['Add captured version, two initial location references and zoned timestamp.','Four new Employee preparation fields and conditional checkpoint requiredness.'],
 ['Configure form protection and retained/write-once field lifecycle.','Employee field/control protection; automation owns actual value writes.'],
 ['Add the authorized-support section and supported extension audit.','Existing Employee form supplied target plus native extension audit configuration.'] ]},
 'SEC-02':{evidence:'Specification 11 supplies principal responsibilities, immutable publications and protected Employee data. Exact principals and native route-specific controls are absent, so the task spells out the policy inline and blocks their bindings rather than inventing an existing permission matrix. Catalogue basic rights are owned separately; no broad new ordinary-user grant is added.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add profile/Employee grants and immutable-record restrictions.','Supplied object, record, field and access-route permission bindings.'],
 ['Grant governed Administrator authoring while protecting version/state writes.','Profile object grants and protected native/custom field restrictions.'],
 ['Restrict Boomi and trusted processing to their declared operations.','Integration readiness-read/endpoint grants and service-context permissions.'],
 ['Grant narrow support evidence/retry access and scoped Employee navigation.','Existing support principal grants and personal-data filter bindings.'],
 ['Enforce the same policy on direct/API/import/search/export routes.','Native record/field controls including terminal edit and immutable child protection.'] ]},
 'AUT-01':{evidence:'The complete 8.1 sequence is retained: actor-verified origin, FETCHVALUE first, GETRELATED only genuine no-match, existing-unpublished enrollment, helper lifecycle, concurrent discovery and first-release race. The user-required reusable login calculation is included with explicit SAME_HOME/HOME_PARENT fallback. Native signatures, actor/event/lock bindings are unresolved inputs, not executable invented formulas.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add integration discovery/capture and reusable initial location calculation.','Proposed Employee Action Handler plus callable native relationship calculation.'],
 ['Add allowlisted create-origin marking and internal-save guard.','Employee creation handler actor condition and recursion exclusion.'],
 ['Add blank/exact/ambiguous match branches and one-time active capture.','Employee JobCode FETCHVALUE relation step with empty-version guard.'],
 ['Add unpublished-code helper enrollment and genuine-new-code creation.','GETRELATED create/resolve, authoring initialization and helper relation write.'],
 ['Add shared-code conflict/race recovery and notification handoff.','Supplied per-code serialization and helper inverse event completion.'],
 ['Add pre-capture helper maintenance while retaining post-capture origin.','Employee code-change branches with write-once version and mismatch hold.'],
 ['Add precise SAME_HOME/HOME_PARENT reference selection and code checks.','Reusable native location calculation consumed by preparation only.'] ]},
 'AUT-04':{evidence:'The template, current Administrators recipients, content, three-part guard and success-only sent flag reconcile to 9.4. Event ordering comes from the completed helper handoff. No extra completion/escalation mail or custom log is assigned; delivery deduplication and the send/flag failure window remain explicit local native inputs.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add one source-linked message and safe delivery guard.','Position Code Setup Required template and guarded native notification.'],
 ['Create the complete setup message and Administrators recipient binding.','New native message template with code/source links and Publish instructions.'],
 ['Add integration-origin, unsent and linked-source delivery conditions.','Notification operation invoked after helper/inverse association.'],
 ['Add deduplicated delivery, success-only sent flag and retry behavior.','Supplied native delivery key/outcome and authoring sent-control update.'] ]},
 'AUT-07':{evidence:'The whole atomic publication sequence in 9.2–9.3 is now owned once, including prior copy, source-writeback and full workflow binding tasks. All eight proposed errors are inline, and first versus Completed behavior stays distinct. Atomic graph/pointer/Employee/workflow support and retry identity are not verified; their absence remains a blocker rather than a promise of native capability.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add one coherent atomic first/later publication outcome.','Common native publication operation plus workflow/form-link bindings.'],
 ['Add execution authorization, saved-revision and lifecycle/retry guards.','Common Publish entry operation under supplied per-code lock.'],
 ['Add active choice, complete group/Role and deferred-feature guards.','Publication validation before any version or activation state changes.'],
 ['Add independent version/Groups/Role graph construction and numbering.','Publication copy operations inside the supplied controlled change.'],
 ['Add active pointer and eligible first-source Employee writeback.','Current Published Version and helper-inverse source selection/write-once assignment.'],
 ['Add atomic initial completion and distinct later publish rollback.','Supplied transaction covering graph, pointer, source writes and workflow completion.'],
 ['Bind both Publish entry paths and emit only committed handoff.','Initial workflow Publish and Completed form-link execution with after-commit event.'],
 ['Add the eight exact proposed guard/error messages.','Publication decision/error branches before activation and completion.'] ]},
 'AUT-08':{evidence:'All 8.2 eligibility, add-only native memberships, snapshot values and checkpoint-last behavior are included without requiring the assignee to discover another routine. The reusable calculation predecessor is described by its returned location. Membership writes before account creation, lock and failure context remain local feasibility inputs; no unsupported setter is claimed.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add one repeat-safe initial membership/preparation routine.','Shared native Employee preparation operation with checkpoint guard.'],
 ['Add locked eligibility/current-code/captured-version checks.','Preparation entry conditions using actual Employee extension fields.'],
 ['Add only missing captured-profile memberships.','Supplied native group membership add/read mechanism; MemberOf replacement excluded.'],
 ['Add initial home/login snapshots and server-time checkpoint last.','Reusable calculation result, Employee reference writes and zoned timestamp.'],
 ['Add incomplete retry/no-op completion behavior without access removal.','Native preparation failure branch and populated-checkpoint exclusion.'] ]},
 'AUT-09':{evidence:'The service consumes resolved/captured Employees and the separate shared preparation routine. It does not assign a latest version, duplicate discovery or set timestamps itself. After-commit event/Service binding and five-minute versus approved cadence remain explicit local inputs; the predecessor list is task-only and acyclic.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add after-commit and scheduled continuation of incomplete preparation.','Native dispatch and proposed Event Service calling the shared routine.'],
 ['Bind committed Employee-capture and first-publication events.','Supplied after-commit native callable handoff using Employee identity.'],
 ['Add exact managed/incomplete/version/location eligible-record selection.','Event Service filter and supplied per-Employee exclusion binding.'],
 ['Configure approved schedule, retry and native error ownership.','Native Event Service cadence/timezone and existing execution-error destination.'] ]},
 'INT-01':{evidence:'The ordered branches reconcile to the actual supplied October 28 diagram, including assigned/work site priority over California, San Diego only for remote Californians, and job function for other remote workers. The task does not equate JobCode to job function. Site/source/code mappings and durable correction authority remain local missing inputs, with no reporting-chain or datastore invention.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add the supplied establishment rule and protected correction mapping.','Proposed Boomi establishment transformation before HomeLocationCode delivery.'],
 ['Add established assigned/actual site branch and conflict/unknown hold.','First Boomi decision and supplied site-to-LocationCode mapping.'],
 ['Add remote California/San Diego and other job-function branches.','Ordered residence/job-function Boomi decisions and mapping tables.'],
 ['Add durable approved correction precedence and valid-result delivery.','Supplied upstream correction read and native Boomi evidence binding.'] ]},
 'INT-02':{evidence:'The supported payload property mapping and omission/removal controls reconcile to section 10; no web verification is required for this documentation revision because the cited official contract content is already in the accepted specification. Proposed feed timing, optional mapping and SendEmail value are explicitly unresolved. The establishment predecessor supplies the HomeLocationCode result only.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add direct Employee delivery and pre-start selection.','Proposed Boomi POST/PATCH mapping and supplied feed schedule.'],
 ['Add exact identity/name/date/JobCode/HomeLocationCode mappings.','EmployeeUserAccess supported properties at the supplied tenant endpoint.'],
 ['Add employee-only creation and explicit omissions/removal controls.','IgnoreUserAccess=TRUE and FALSE removal flags in request mapping.'],
 ['Add approved pre-start selection and same-Id intended updates.','Boomi selection/timezone/null semantics and retained Employee Id mapping.'] ]},
 'INT-03':{evidence:'Section 10 requires serialization and Number/Id reconciliation before repeated POST. The task includes zero/one/multiple/failed-search behavior and unknown outcomes inline, and names its direct-delivery predecessor. Identity-change/rehire policy and native support/serialization bindings remain local inputs rather than proposed new storage.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add repeat-safe delivery around the configured direct request.','Boomi serialization, Number/Id reconciliation and bounded retry.'],
 ['Add zero/one/ambiguous identity decisions under EmployeeNumber control.','Supplied native Employee.Number read and same-Id resume operation.'],
 ['Add timeout reconciliation and same-Employee failure continuation.','Boomi unknown-outcome retry and existing native evidence destination.'],
 ['Add policy-bound exceptional identity handling and support hold.','Changed-number/rehire branches and correlation routing to supplied support owner.'] ]},
 'INT-04':{evidence:'The full 8.3 readiness gate, home snapshot consistency and supported access PATCH values are inline. The checkpoint is correctly distinguished from account existence. Read paths, SAML/license values and employee-only-to-access/membership-continuity behavior remain precise inputs; the task does not silently change the accepted architecture to make it feasible.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add preparation/identity-gated access for the same native Employee.','Boomi readiness read and EmployeeUserAccess access PATCH.'],
 ['Add checkpoint/version/login/home/SSO/license readiness conditions.','Restricted Object Data API field reads and home-mismatch hold.'],
 ['Add exact access PATCH values with protected group/hierarchy controls.','IgnoreUserAccess=FALSE and stored LoginLocationCode mapping.'],
 ['Add account-outcome reconciliation and protect later login exceptions.','Native account evidence/endpoint result and configured same-Id retry.'] ]},
 'RPT-01':{evidence:'The prior plan and specification require waiting/failed support views but provide no exported view objects. These are explicitly proposed screens with actual field filters and bounded columns, not fake modifications to existing named reports. Native error/identity source paths and permitted navigation are local blockers; no derived difference flag or new logging object is invented.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add bounded support views separating each readiness/failure condition.','Proposed native profile/Employee views and supplied native error-source views.'],
 ['Add no-publication and working-versus-published review views.','Position Code view filters and side-by-side configured field controls.'],
 ['Add no-capture and incomplete-preparation Employee filters/columns.','Employee extension-based support view definitions.'],
 ['Add failure/ambiguity evidence views with approved navigation.','Supplied native execution/identity queries and permitted retry command binding.'] ]},
 'INIT-01':{evidence:'Initial profile configuration is explicitly in specification 12.1 and the previous accepted planning scope; this is not migration. No actual initial code/group list was supplied, so that entire population remains blocked. The task includes exact flag/rule choices and consumes the completed Publish operation rather than assigning another publishing mechanism.',checks:{standaloneInstructions:true,exactValuesIncluded:true,dependenciesDescribeOutputs:true,inputsAreLocalAndNarrow:true,acceptanceDescribesChanges:true},units:[
 ['Add only the approved initial nondeferred profile configuration.','Position Code authoring records and the completed Publish operation.'],
 ['Create supplied case-exact code/rule/group values with manual origin.','Initial Position Code records and three filtered Groups grids.'],
 ['Publish each supplied eligible initial record to version 1 and Completed.','Configured first-publication link; no existing-Employee enrollment.'] ]}
};
require('./review-employee-application-decisions.cjs')(notes);
const reviews=plan.tasks.map(t=>{
 const stable=Object.entries(plan.adapter.idMapping).find(([,v])=>v===t.id)?.[0],n=notes[stable],u=gate.units(t);
 if(!n||n.units.length!==u.length)throw Error('Incomplete manual instruction findings '+stable);
 return {id:t.id,stableTaskId:stable,taskHash:gate.hash(t),renderedTaskHash:gate.renderedHash(md,t.id),evidenceReview:n.evidence,checks:n.checks,instructions:u.map((unit,i)=>({path:unit.path,requiredChange:n.units[i][0],mechanism:n.units[i][1]}))};
});
fs.writeFileSync(path.join(dir,stem+'-content-review.json'),JSON.stringify({version:1,reviewedOn:'2026-10-29',sourceSnapshotSha256:expected.json,sourceMarkdownSha256:expected.md,tasks:reviews},null,2)+'\n');
console.log('Recorded 18 snapshot-bound manual content reviews.');
