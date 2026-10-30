/* Configuration-only revision 2 plan; task IDs remain traceable to revision 1. */
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const dir=path.join('docs','phase 1','inspections','target');
const model=JSON.parse(fs.readFileSync(path.join(dir,'target-model.json'),'utf8'));
if(model.revision!==2)throw Error('Generate revision 2 technical specification first.');
const old=JSON.parse(fs.readFileSync(path.join(dir,'archive','v1','implementation-plan.json'),'utf8'));
const baseline=JSON.parse(fs.readFileSync(path.join(dir,'..','as-is','evidence.json'),'utf8'));
const build=JSON.parse(fs.readFileSync(path.join(dir,'technical-build-input.json'),'utf8'));
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const sources=['solution-specification.md','field-contract.md','target-model.json','automation-reconciliation.md','revision-decisions.md'];
const sourceHashes=Object.fromEntries(sources.map(f=>[f,hash(fs.readFileSync(path.join(dir,f)))]));
const tasks=new Map();
const A='Associate Consultant',SA='Senior Associate Consultant',C='Consultant',SC='Senior Consultant';
function t(id,title,category,role,objective,scope,deps,inputs,accept,refs){const prev=old.tasks.find(t=>t.id===id);if(!prev)throw Error('Unknown retained ID '+id);tasks.set(id,{id,key:prev.key,title,category,role,objective,scope,prereqs:deps,inputs,accept,refs,notes:'None'});}
t('IMP-01','Create the Functional Catalogue Objects','Objects and fields',A,
 'Provide the source and categorical result values required by the application.',
 'Create the four local catalogue objects listed in technical specification §3: Inspection Source, Response Outcome, Inspection Outcome and Inspection Classification. Configure each Code/Name/Active/Sort row and object parameters exactly; no workflow, inheritance family or consumer inverse is added. Configure data records in IMP-23.',
 [],[],['Four objects and their sixteen fields match the individual object/field tables.','Native object parameters match the supplied technical specification; no missing GUID is invented.'],['§2–3: four catalogue objects','SEC-01']);
t('IMP-03','Configure Checklist Options','Objects and fields',A,
 'Keep checklist completion and sections consistent while hiding scoring.',
 'Configure the scoped Checklist.EnableSections TRUE, EnableScoring FALSE and required named Section.SectionName settings in §3. Reuse existing Choice/Choice List fields, types, records and native relationships. Do not add Active fields to those objects or freeze shared vocabulary.',
 [],[],['The required checklist/section properties are configured without new shared vocabulary fields.','Native scoring capability and existing shared records remain installed.'],['§3 Checklist/Section','R02']);
t('IMP-04','Configure Question Semantics Fields','Objects and fields',A,
 'Let authors identify negative and informational responses explicitly.',
 'Add Contributes to Outcome? (ContributesToOutcome) once to the shared question definition, inherited by Question and Published Question. Add Is Negative? (IsNegative) to the existing Choice object as optional Yes/No, default No; treat existing blanks as No. A Choice has the same negative meaning wherever it is reused. Keep existing Action Required (ActReqChoices) on the question; do not add another action-requirement setting. Checkbox answers remain informational; use a Yes/No Choice list for binary questions requiring an outcome.',
 [],[],['Working and published questions inherit ContributesToOutcome once; Choice has exactly one new IsNegative field.','Both new fields default FALSE, remain natively optional, and existing blank values are not backfilled. Existing ActReqChoices is retained.'],['§3 Question Abstract / Choice','R02/D01']);
t('IMP-05','Configure Inspection Program Fields','Objects and fields',A,
 'Keep client program settings on Type of Inspection.',
 'Add SourceMode and OverallOutcomeRequired and configure the retained review/equipment/universal-control field properties in the Type of Inspection table. Source Mode defaults to the actual INTERNAL record from IMP-23. Reuse existing routing/decision/equipment catalogues by G03 record identity; do not add Code fields, retype Sort or create program snapshots.',
 ['IMP-23'],['G03'],['New program fields and retained field settings match the table.','No applied-program field family or shared catalogue normalization is configured.'],['§3 Type of Inspection','R01/R03/R04/R05']);
t('IMP-08','Configure Inspection Dates and External Details','Objects and fields',A,
 'Record actual performance, submission and acceptance separately.',
 'Create ExternalParty, PerformedOn, SubmittedAt and AcceptedAt exactly as listed. Configure the specified effective read-only review/field-work actor/date controls without retyping existing shared Date/Time fields. Preserve EquipmentTxt length and all untouched native field attributes; population is assigned in workflow tasks.',
 [],[],['Four new fields have the declared types/defaults, including timezone-enabled new timestamps.','Existing completion/review dates are retained rather than converted or backfilled.'],['§3 Inspection / Inspection Abstract','I02–I04']);
t('IMP-09','Configure Categorical Result Fields','Objects and fields',A,
 'Provide read-only response, inspection and follow-up results.',
 'Create Question Answer.ResponseOutcome and Inspection.OverallOutcome/ActionClassification with the disabled inverses and real catalogue defaults specified in §3. Preserve all existing helper fields. Do not create BranchConfirmed or any replacement workflow-state field.',
 ['IMP-23'],[],['The three M:1 result fields reference their correct configured catalogues.','No branch reconfirmation field is created.'],['§3 Question Answer / Inspection','D01/D02']);
t('IMP-10','Configure Action Field Properties','Objects and fields',A,
 'Prepare conditional entry for outstanding and already-completed actions.',
 'Configure the effective ActionOwner and AlBeenCorrected field properties and retained inherited action/completion fields in §3. Remove unconditional concrete ActionOwner requiredness where it would prevent immediate completion; form/server rules in other tasks supply its conditional requirement. Preserve unrelated action subtypes and native data types.',
 [],[],['The immediate branch can omit an outstanding owner while normal entry remains subject to R06.','No global shared-base mandatory fields or date conversions are introduced.'],['§3 Inspection Action Plan / Abstract Corrective Action','R06']);
t('IMP-11','Configure Action Source Links','Relationships and form launch settings',C,
 'Let response and external-report actions retain their saved inspection context.',
 'Wire the existing action launch controls and saved-record context to CheckListAnsAct and the retained ChecklistAnswer reference. Use existing RelatedQstions/RelateQuestions maps and same-inspection selection restrictions. Reuse E1319/E2096/E2929/helper behavior; do not redesign canonical ownership or create a linking object.',
 [],['G02'],['External-report actions receive the saved inspection without a question or Finding fallback.','Response-linked actions select only answers from that inspection and retain existing native map IDs.'],['§3 action/answer relationships','H06/R06']);
t('IMP-14','Configure Inspection Workflow Parameters','Configure workflow — simple',A,
 'Set the existing inspection stage parameters used by the revised forms.',
 'Apply W01 and S01–S04 tables: preserve schema/stage/action IDs and SystemName values; bind Review/Second Review to their specified existing status records and remove the recurring Draft due-date expression from this nonrecurring path. Keep complex recipient logic and complete action flows for later tasks. Do not recreate stages already provided by the package.',
 [],[],['The target W01 stage/status/property bindings match the native parameter tables.','Forms can use the retained Draft, InspectioninProgress, ActionsPending and SecondReview system names.'],['§4.1–4.2 W01/S01–S04']);
t('IMP-16','Configure Native Evidence Controls','Fields and forms',C,
 'Capture photographs and external reports on the correct native records.',
 'Configure the Inspection and Question Answer native attachment rows/panels using G07 ownership, report designation and upload-state bindings. Apply F02/F03 editability and external-report requiredness; distinguish a required report from unrelated photos. Reuse the native file store/queue and do not add a custom evidence object.',
 ['IMP-05','IMP-08','IMP-14'],['G07'],['Attachments belong to the correct inspection/response and required external reports are identifiable.','Review/accepted evidence is read only through the configured controls.'],['§3 Inspection.ExternalInspectionReport and native Attachments','F02/F03/R01/I02/MOB-01']);
t('IMP-17','Configure the Program Form','Forms',SA,
 'Expose the selected program options without unused universal switches.',
 'Apply F01 to Type of Inspection: source, review methods/periods/roles and equipment controls use live native type fields. Hide forced completion/Finding/scoring controls, routine role-creation fields and technical route exceptions. Use actual G03 option identities; no new shared Code selectors or applied-setting controls are added.',
 ['IMP-05'],['G03'],['Only relevant source/review/equipment settings are editable by the program administrator.','Universal controls and ad hoc role creation are hidden as specified.'],['F01/R01/R04/R05']);
t('IMP-18','Configure Checklist Authoring Forms','Forms',SA,
 'Display section and question-specific response semantics to authors.',
 'Configure F01 checklist/question layouts for ContributesToOutcome, existing ActReqChoices and required named sections; add IsNegative to applicable Choice maintenance views. Hide native numeric score and formal Finding configuration in this pathway. Keep new semantic values read only on published-question forms; retain existing shared list controls and native publishing UI.',
 ['IMP-03','IMP-04'],[],['Authors can configure the target semantic fields with the intended conditional visibility.','Published semantic values are not ordinarily editable and no vocabulary-freeze mechanism is introduced.'],['F01/R02/D01','§3 question objects']);
t('IMP-19','Configure Inspection Entry Forms','Forms',SA,
 'Show the correct internal or external inspection entry fields.',
 'Apply F02 to existing Create/Draft and In Progress stage containers. Use TypeOfInspec.SourceMode and live equipment controls, not copied settings. Place ExternalParty/PerformedOn and read-only result/timestamp fields appropriately; INTERNAL shows checklist execution and EXTERNAL omits it. Hide scores/Findings; optional lookup/evidence controls are assigned separately.',
 ['IMP-05','IMP-08','IMP-09','IMP-14','IMP-16'],[],['Stage containers use the retained native system names and live type conditions.','Internal/external field visibility follows R01 with no applied-program or resource snapshot fields.'],['F02/R01/R05']);
t('IMP-20','Configure Section and Answer Forms','Forms',SA,
 'Keep long checklists, typed responses and direct action entry usable.',
 'Apply F03 for published section/order/question content, matching typed answer, explicit N/A, required comments, photographs and existing direct actions. Use current native visibility/clear-on-hide behavior and review-stage read-only controls. Display ResponseOutcome read only; add no reconfirmation step or branch history layout.',
 ['IMP-04','IMP-09','IMP-11','IMP-14','IMP-16'],[],['Applicable responses, comments, evidence and actions appear under the correct section.','Native branching remains intact without a new confirmation field/action.'],['F03/R02/D01']);
t('IMP-21','Configure Review Stage Forms','Forms',A,
 'Provide decision and comment controls for the current reviewer.',
 'Apply F04 to existing ActionsPending and SecondReview containers. Show inspection/report/answer context read only, the corresponding decision/comments editable and reviewer actor/time fields read only. Use G03 Approved/Rejected records; no new review object or catalogue Code column is introduced.',
 ['IMP-08','IMP-14'],['G03'],['Each stage exposes only its own editable review controls.','Return-comment requiredness and original inspector content presentation follow F04/R04.'],['F04/R04/S03/S04']);
t('IMP-22','Configure Action Entry Forms','Forms',SA,
 'Separate outstanding assignments from corrections completed immediately.',
 'Apply F05 to the existing native action InProgress/initial forms. Keep activity and source context visible; show owner/due date for outstanding work or actual performer/date/notes for AlBeenCorrected TRUE. Hide the type selector and unused helpers. Set correct form mandatory rules without requiring a photograph or changing source-map ownership.',
 ['IMP-10','IMP-11'],[],['Both entry modes require their specified information and preserve activity text.','Immediate correction does not require an outstanding owner/due date or a separate user closure step in the form.'],['F05/R06/S05']);
t('IMP-23','Configure Functional Selection Values','Initial configuration',A,
 'Populate the functional domains and bind actual native selection values.',
 'Create each new source/outcome/classification catalogue record under its own initial-values table. Bind actual G03 existing route/decision/equipment/Corrective IDs; create only a missing approved functional option such as Submitter if needed. Preserve existing shared labels/types/record IDs and do not perform a Code/Sort/Name normalization or operational backfill.',
 ['IMP-01'],['G03'],['All new functional codes resolve uniquely to the configured active records.','Existing options use their actual IDs without added shared fields or recreated history.'],['§3 individual initial values','G03']);
t('IMP-24','Configure Checklist Validation','Validation and business rules',SA,
 'Reject incomplete or contradictory authored inspection content.',
 'Configure R02 authoring checks for required applicable answers, named sections, valid same-checklist one-tier dependencies and semantic choice consistency. Extend H01 to preserve valid ComReqIfNA by correcting the E629 condition shown in the expression register. Do not add global vocabulary locks, Choice Active flags or native publication-engine repair.',
 ['IMP-03','IMP-04'],['G02'],['Invalid answer/section/dependency/negative-choice combinations are rejected with useful messages.','AllowNA TRUE can retain a required N/A comment, while unrelated shared behavior is preserved.'],['R02/H01','configuration-expressions.md: E629']);
t('IMP-25','Configure Program Behavior Rules','Validation and business rules',SA,
 'Enforce the client’s universal flags and coherent review/equipment options.',
 'Configure H01 rules for ComplValidation TRUE, FindingTracking FALSE and compatible review/equipment settings in R01/R04/R05. Keep second review disabled initially, require supplied positive review periods when enabled and prevent routine ad hoc role creation. Existing routing catalogue identities remain in use; do not copy program settings onto inspections.',
 ['IMP-05','IMP-23'],['G02','G03'],['Current Inspection programs cannot disable required completion or enable formal Findings through ordinary entry.','Invalid enabled-review/equipment combinations are rejected without changing unrelated applications.'],['R01/R04/R05/H01']);
t('IMP-26','Configure Semantic Publication Copies','Automation',SA,
 'Copy the new response semantics using the existing native publish handler.',
 'Extend E265/H08 with one new mapping: Published Question.ContributesToOutcome=Question.ContributesToOutcome. Retain the existing ActReqChoices copy and all native Choice links. IsNegative remains on shared Choice and receives no question copy. Reuse E2348, native maps and the compiled publisher.',
 ['IMP-04'],['G02'],['ContributesToOutcome is copied on publication, existing ActReqChoices is still copied, and IsNegative is read from shared Choice.','No wholesale materialization, lock service, atomic-publication refactor or shared field conversion is configured.'],['H08','§7.2 publication copies']);
t('IMP-28','Configure the Internal and External Creation Guard','Automation',C,
 'Use the existing generator for internal records and bypass it for external reports.',
 'Extend the existing Inspection create path H02/E2007 to set SysteTypeHelper to Insp_EquipInspectionObject and check live TypeOfInspec.SourceMode. INTERNAL retains the extracted current-version selection and native answer/section creation; EXTERNAL skips both generation and question-count assumptions. Initialize new outcome fields through the supported hook, including native creation that bypasses ordinary create handlers. Do not rebuild generation concurrency/retry handling.',
 ['IMP-04','IMP-05','IMP-09'],['G02'],['Internal creation still uses the installed native publisher/generator relationships.','External creation produces no question/section records and uses the correct source discriminator.'],['H02/R01','I01']);
t('IMP-30','Configure Location and Equipment Rules','Validation and business rules',SA,
 'Require the appropriate equipment input within permitted establishment context.',
 'Apply core H05/R05 using supplied Location criteria and live EquipmentList/ELOptions: disabled hides both inputs, Text requires EquipmentTxt and Lookup requires the permitted native Equipment reference when enabled. Replace E2628’s leaf-RMD restriction where it conflicts with the approved establishment context. Keep unbound lookup/resource extensions disabled; do not add snapshots or a local taxonomy.',
 ['IMP-05','IMP-23'],['G02','G03','G04'],['The permitted establishment path does not falsely reject a location solely because it has child resources.','Disabled/Text paths enforce the specified exclusive input, and unbound Lookup is not enabled.'],['R05/H05','F02']);
t('IMP-31','Configure Optional Resource and Equipment Lookups','Conditional relationships and forms',C,
 'Connect approved optional lookup controls to their shared authority.',
 'Apply F06/G05 only when the authoritative resource/equipment mapping is supplied. Bind OperationalResource to the actual external object, active/establishment fields and existing access; configure the native Equipment selector consistently. Preserve the existing Location boundary and inactive historical references. No local Shared_OperationalResource object, new security group boundary or historical copy fields are created.',
 ['IMP-19','IMP-30'],['G05','G04'],['Selectors use the supplied shared records and reject mismatched establishment values.','No duplicate taxonomy, resource snapshot or new security boundary is configured.'],['F06/R05','§3 conditional external interface']);
t('IMP-34','Configure Categorical Response Outcomes','Automation and calculations',C,
 'Classify responses using the question settings and selected choices.',
 'Configure H03/D01 response branches in their stated precedence using existing IsVisible/IsNA/typed fields and the new published semantics. Assign the actual ResponseOutcome record from IMP-23. Scope behavior through SysteTypeHelper and retain native E842/E883 clearing/default behavior; no BranchConfirmed dependency or new label-based meaning is introduced.',
 ['IMP-04','IMP-09','IMP-23','IMP-28'],['G02'],['Each typed/applicability condition produces the intended response catalogue value.','FALSE/zero, N/A and informational answers are distinguished without numeric scoring.'],['D01/H03/R02']);
t('IMP-35','Configure Submission Requiredness','Validation and calculations',SA,
 'Require complete applicable evidence without waiting for remediation closure.',
 'Configure the R01/R02 helper/validation changes for applicable typed answers, negative/N/A comments, distinct direct-action existence and uploaded external report. Scope existing IsAnswerMiss/IsComMiss/IsActionMiss/IsFindingMiss/IsSubmitReady and counts to Inspection only. Hidden branches and formal Finding status do not block; open and already-completed actions both satisfy configured action existence.',
 ['IMP-11','IMP-16','IMP-34'],['G02','G07'],['A missing applicable response/comment/action/report blocks the transition before state change.','Valid open actions and hidden branches are handled as specified without a branch-confirmation mechanism.'],['R01/R02/H03','I02–I04']);
t('IMP-36','Configure Overall Inspection Outcomes','Automation and calculations',C,
 'Summarize ready responses as a categorical inspection result.',
 'Configure the D01 inspection precedence through H03 and final workflow actions. Use the live type source/outcome setting; external/not-ready/not-required records remain Not Assessed, one applicable negative produces Nonconforming and informational-only content never falsely passes. Freeze the accepted result while later action changes affect D02 only. No applied-setting or vocabulary-version redesign is included.',
 ['IMP-08','IMP-09','IMP-14','IMP-23','IMP-35'],['G02'],['Required outcomes follow the specified Pass/Nonconforming/Not Applicable precedence.','Accepted outcome does not change when corrective actions later close.'],['D01/H03','I02–I04']);
t('IMP-37','Configure Action Entry Validation','Automation',C,
 'Validate immediate and outstanding action entry before native processing.',
 'Apply H06/R06 on Inspection Action Plan: saved inspection context and same-inspection answer links, actual Corrective type, required activity, outstanding owner/due date or completed performer/date/notes. Supply matching initial native source references and reuse E1319/E2096/E2929/E2594 as compatible. Do not create a new alias reconciliation subsystem or change unrelated action defaults.',
 ['IMP-10','IMP-11','IMP-23'],['G02','G03'],['External/general and response actions receive valid source context without needing a Finding.','Each entry mode enforces its own evidence before workflow processing.'],['H06/R06','F05']);
t('IMP-39','Configure Native Immediate Completion','Automation',SC,
 'Save an already-completed correction without creating an outstanding assignment.',
 'Configure the supplied G06 native DateNotRequired/create-and-complete event order for H06 using the existing action workflow/status identities. Validate evidence first, preserve actual performer/date/notes and suppress transient task/assignment creation. Limit the change to the immediate branch; outstanding release timing remains native. Keep the initial save/complete/task-suppression operation together because these actions share one outcome.',
 ['IMP-37'],['G06','G02'],['Initial already-completed entry finishes with the native Completed result and no outstanding task/notice.','An incomplete immediate entry fails before completion and preserves the prior record state.'],['W02/H06/R06','§5.3']);
t('IMP-40','Configure Review Responsibility and Due Dates','Workflow rules',C,
 'Resolve current site/functional reviewers and their configured review periods.',
 'Apply H04/S03/S04 from the live native type route, G03 identities and G04 supported Location-aware membership binding. Retain supplied named/expression exceptions and existing self-review policy. Reuse the exact extracted DATEADD due expressions and keep overdue work actionable. No copied settings, invented route function or new self-approval ban is configured.',
 ['IMP-05','IMP-14','IMP-23'],['G02','G03','G04'],['Enabled review routes resolve the configured current responsibility or raise the specified configuration error.','Stage due dates use actual supplied periods and overdue review remains editable.'],['S03/S04/R04/H04']);
t('IMP-41','Configure Workflow Notifications','Notifications',SA,
 'Notify the correct actor when assignment, Return or final acceptance occurs.',
 'Apply NTF-01 with retained templates and supplied recipients: review assignment, Return reason and final distribution notice. Retain E477’s outstanding action notice at inspection acceptance/release and exclude AlBeenCorrected TRUE; do not add a second assignment-on-save/task-entry notification. Place notices after validation and successful workflow operations using the existing native dispatch mechanism.',
 ['IMP-08','IMP-11','IMP-14'],['G03','G04'],['Messages distinguish inspection acceptance from action closure and include Return comments.','Outstanding assignment retains one release event; immediate correction issues no assignment notice.'],['NTF-01','I02–I05/H06']);
t('IMP-42','Configure the Full Action Workflow','Configure workflow — full',SA,
 'Complete actions independently using validated native paths.',
 'Apply W02/S05/I05 tables to the existing native workflow. Retain HelperReleaseAP for outstanding actions and configure the specified already-completed start exception with IMP-39. Move completion notes/person/date validation before native termination, maintain IsCompleted and stop native reminders. Do not move all outstanding assignment to initial save or recreate the existing workflow stage.',
 ['IMP-10','IMP-37','IMP-39','IMP-41'],['G02','G06'],['Normal Complete rejects missing notes before termination and updates native completion consistently.','Initial completed actions bypass outstanding work; ordinary actions retain accepted-inspection release timing.'],['W02/S05/I05','R06']);
t('IMP-43','Configure the Full Inspection Workflow','Configure workflow — full',C,
 'Support submission, Return, optional reviews and final acceptance on the same record.',
 'Apply exactly I01–I04 in the ordered tables. Connect source-specific requiredness/results/routing, extend native Continue for EXTERNAL, stamp submission/acceptance and existing review evidence, and set ReleActionPlans TRUE only on final completion. Remove open-Finding/action-closure blockers, preserve native history and reuse the same answers on resubmission. Use native completion rather than direct task-pointer substitutes.',
 ['IMP-14','IMP-28','IMP-30','IMP-35','IMP-36','IMP-40','IMP-41'],['G02','G04'],['All required no-review/first-review/second-review/Return paths preserve existing stage and action identities.','Valid final acceptance completes despite open corrective actions and records the correct dates/actors.'],['W01/S01–S04/I01–I04']);
t('IMP-44','Configure Action Follow-up Classification','Automation',SC,
 'Identify accepted inspections that still have open corrective work.',
 'Configure H07/D02 using existing CheckListAnsAct source links, distinct related Inspection Action Plans and native completion states. Use the supplied related-update hook on final inspection completion and action creation/completion/permitted reopening. Allow only ActionClassification to change on accepted inspections; use current committed action state to prevent an out-of-order update from leaving the wrong result.',
 ['IMP-08','IMP-09','IMP-11','IMP-23'],['G02'],['Native completed inspections resolve to the correct open-action or resolved value, including zero actions.','Later action changes do not reopen inspections or alter approved answers/OverallOutcome.'],['D02/H07']);
t('IMP-45','Configure Native Review and Action Reminders','Reminders',SA,
 'Keep overdue tasks visible according to the supplied client policy.',
 'Configure REM-01 using the native reminder engine, actual G04 cadence/recipients and retained native task due/completion state. Reuse specified templates and stage responsibility. Do not adopt revision 1’s unapproved interval, invent an escalation chain or create a custom reminder object/Event Service.',
 ['IMP-14','IMP-40','IMP-41'],['G04'],['The configured native reminders follow the supplied pattern and stop after completion.','Overdue status does not lock review/action work.'],['REM-01/R04']);
t('IMP-46','Configure New Catalogue Access','Security — basic',A,
 'Keep new functional values readable while restricting their maintenance.',
 'Apply SEC-01 and new catalogue object security parameters with actual G04 administrator/user/system principals. Allow ordinary read access, controlled administrator edits and required system result assignment. No new catalogue consumer inverse or broader shared-security retrofit is included.',
 ['IMP-01'],['G04'],['New catalogue permissions match their field/object tables.','System assignment of required outcomes works without ordinary user maintenance access.'],['SEC-01','§3 new catalogue objects']);
t('IMP-47','Configure Review and Action Access','Security — workflow and related records',SC,
 'Protect accepted evidence and keep action/reviewer rights appropriately separate.',
 'Apply SEC-02 to the changed inspection/answer/review/action controls, native files and Location-scoped source navigation. Permit only H07’s derived classification update after acceptance. Enable the specified native audit flags on Inspection/Inspection Abstract for review decision/comment/actor/date history, preserving unrelated shared audit settings. Use existing native roles/access rather than undertaking a product-wide remediation.',
 ['IMP-08','IMP-09','IMP-11','IMP-14','IMP-16'],['G02','G04','G07'],['Current reviewer and action-owner access follows the defined working/accepted boundaries, including related records/files.','Review attempts and changed review fields have the specified native audit/history evidence.'],['SEC-02/F04/H07','§3 object parameters']);
t('IMP-50','Configure Native Mobile Forms','Mobile configuration',C,
 'Use the same inspection and evidence records on desktop and mobile.',
 'Apply MOB-01 and supplied G07 native mobile/offline profiles to F02/F03/F05. Retain current authenticated-session and record identity model; configure native download, pending-upload/conflict presentation and required server submission checks. Reuse native clear-on-hide and queues; no custom BranchConfirmed, sync status or offline user-switch mechanism is added.',
 ['IMP-19','IMP-20','IMP-21','IMP-22','IMP-47'],['G07'],['Mobile uses the target forms and same native record/file identities.','Queue/conflict/upload requirements use the supplied native controls without a second data model.'],['MOB-01/R01/R02']);
t('IMP-51','Configure Inspection Inventory Reports','Reports',SA,
 'Show one record per inspection with clear internal/external context.',
 'Configure REP-01 with program/source, Location/conditional resource, inspector, actual/due/submitted/accepted dates, native workflow status and categorical result/follow-up classification. External rows include party/report and do not invent question data. Keep optional unbound resource dimensions absent rather than making core reporting wait for a new taxonomy.',
 ['IMP-05','IMP-08','IMP-09','IMP-14','IMP-16'],['G08'],['Each inspection appears once with distinct field-work and acceptance information.','External/not-assessed records are distinct from structured passing inspections.'],['REP-01']);
t('IMP-52','Configure the Deficiency Report','Reports',SA,
 'Report negative responses and their direct corrective actions.',
 'Configure REP-02 from ResponseOutcome and existing published question/section identities, answer/comment/files and distinct direct actions. Keep original negative responses visible after action closure; retain native published calculations and current clearing behavior rather than implying new historical snapshot guarantees.',
 ['IMP-09','IMP-11','IMP-16','IMP-04'],['G08'],['Each selected negative response identifies its source question/inspection and related actions without multiplied totals.','Action completion does not remove the original recorded deficiency.'],['REP-02/D01']);
t('IMP-53','Configure Action Follow-up Reports','Reports',SA,
 'Compare outstanding work and already-completed corrections consistently.',
 'Configure REP-03 with one row per action using existing inspection/response links, owner/due and actual completion details. Use native completion and AlBeenCorrected; do not independently count aliases or broaden source record access.',
 ['IMP-10','IMP-11'],['G08'],['Several linked responses do not multiply the action count.','Completed corrections retain performer/date/notes separately from outstanding assignment data.'],['REP-03/R06']);
t('IMP-54','Configure Review Timeliness Reports','Reports',C,
 'Report review cycles alongside final acceptance dates.',
 'Configure REP-04 using supplied native history bindings for stage entry/due, Return, resubmission and acting reviewer. Keep cycle-level rows separate from inspection-level SubmittedAt/AcceptedAt totals; add no custom review-history or applied-setting object.',
 ['IMP-08','IMP-14'],['G08'],['Review cycles retain their native event dates/actors without multiplying inspection totals.','Latest stored decision values are not presented as a complete prior-cycle history.'],['REP-04/R04']);
t('IMP-55','Configure Response Trend Reports','Reports',C,
 'Compare repeated negative responses by stable question and available context.',
 'Configure REP-05 with stable authoring/published question identity, program, Location and period under the supplied reporting definition. Include optional current resource attributes only when their G05 binding is available and label their meaning; do not invent historic technology values or require new snapshot fields.',
 ['IMP-04','IMP-05','IMP-08','IMP-09'],['G08'],['Trend grouping retains source question identity and available published context.','Missing historical dimensions remain unknown instead of being fabricated.'],['REP-05/D01']);
t('IMP-56','Configure the Branded Merge Template','Merge Templates',SA,
 'Provide the proposed native inspection record layout when its scope is approved.',
 'Apply OUT-01 parent layout using supplied G08 branding/bindings for program, source, context, dates and categorical result. Distinguish Draft from final accepted output. Use current specified fields; no removed applied-setting controls or custom snapshot payload are included.',
 ['IMP-05','IMP-08','IMP-09','IMP-14'],['G08'],['The approved layout shows correct performance/submission/acceptance dates and source mode.','Draft and accepted output are visibly distinguishable.'],['OUT-01']);
t('IMP-57','Configure Merge Template Evidence Sections','Merge Templates',SC,
 'Include the approved responses, review context, actions and photographs.',
 'Configure the supplied native OUT-01 child/history/photo bindings and conditional layout for internal questions/sections, comments/N/A/evidence, reviews, direct actions or external report context. Retain normal native hidden-branch behavior; do not add a bespoke branch history display or combined regulatory reporting mechanism.',
 ['IMP-04','IMP-11','IMP-16','IMP-56'],['G08'],['Approved child/evidence content renders through supported native bindings.','External output does not fabricate checklist responses and photographs remain readable.'],['OUT-01']);
t('IMP-58','Configure Native Portable Record Generation','Automation and native storage',C,
 'Generate the approved portable record using supplied native storage policy.',
 'Configure OUT-01 generation for an accepted inspection and the supplied G08 file/metadata/storage/versioning behavior. Retain source identity and generation time in native metadata; preserve existing final outputs according to the approved policy. Do not invent retention periods, signature rules, a new output-history object or automatic external distribution.',
 ['IMP-08','IMP-16','IMP-47','IMP-57'],['G08'],['Final output is generated only from accepted content and stored with the supplied native identity/metadata.','Regeneration follows the approved policy rather than silently overwriting an official record.'],['OUT-01']);
const outOfPlan=[
 {id:'IMP-59',owner:'Client system administrators',scope:'Maintain the approved reviewer role and establishment memberships as a client administrative responsibility.'},
 ...['IMP-60','IMP-61','IMP-62','IMP-63'].map(id=>({id,owner:'Data Migration',scope:'Populate the initial inspection programs and checklist content through the Data Migration section of the project plan.'}))
];
const outOfPlanById=new Map(outOfPlan.map(t=>[t.id,t]));
const modificationStats=require('./inspections-task-modifications.cjs')(tasks,model,baseline);
const ts=[...tasks.values()].sort((a,b)=>a.id.localeCompare(b.id));
const byId=new Map(ts.map(t=>[t.id,t]));
for(const x of ts)for(const p of x.prereqs)if(!byId.has(p))throw Error('Retired prerequisite '+x.id+' -> '+p);
function inherited(t,trail=new Set()){if(trail.has(t.id))throw Error('Cycle '+t.id);const next=new Set(trail).add(t.id);return [...new Set([...t.inputs,...t.prereqs.flatMap(p=>inherited(byId.get(p),next))])];}
const inputMap=new Map(model.inputs.map(x=>[x.id,x]));
const why={
 [A]:'Bounded ordinary field/object parameters, simple stage/form settings or basic permissions are specified explicitly; complex validation and automation are separate.',
 [SA]:'The task requires independent configuration judgment for larger forms, supplied expressions, medium workflow rules or bounded native configuration.',
 [C]:'The task connects related objects/native components or configures cross-record behavior whose incorrect interpretation would cause material rework.',
 [SC]:'The task involves a coordinated native completion/evidence operation, nuanced related-record security or safe updates to accepted records.'
};
for(const t of ts){t.reviewer='Senior Consultant — product build manager (separate qualified reviewer)';t.rationale=why[t.role]+' The plan-defined Senior Consultant reviews the output.';t.deliverable=t.title.replace(/^(Create|Configure|Update) /,'')+' saved according to the referenced technical tables/rules.';t.upstreamInputs=inherited(t).filter(i=>!t.inputs.includes(i));const b=[];if(t.inputs.length)b.push('Blocked by missing supplied input: '+t.inputs.map(i=>i+' — '+inputMap.get(i)?.description).join(' '));if(t.prereqs.length)b.push('Waiting for planned technical outputs '+t.prereqs.join(', ')+'. No predecessor is asserted complete.');if(t.upstreamInputs.length)b.push('Inherited external blockers: '+t.upstreamInputs.join(', ')+'.');t.blocked=b.join(' ')||'No missing external input or predecessor identified for this bounded configuration assignment; planned, not implemented.';}
const language=require('./inspections-consultant-language.cjs')(ts,model);
const actionScope=require('./inspections-action-scope.cjs')(ts);
const reviewed=require('./review-inspections-plan.cjs')(ts,model,baseline,actionScope.contextCoverage);
const reviewedAlias=id=>reviewed.aliases[id]||id;
language.inputDescriptions.G04+=' Supply actual localized notification bodies and approved content, the native reminder configuration binding, and current effective permission rule definitions/technical-administrator principals. Template names and incomplete exported permission metadata do not establish a required content/security change.';
for(const id of [...tasks.keys()])if(!ts.some(t=>t.id===id)){tasks.delete(id);byId.delete(id);}
// Source-linking is existing product functionality, confirmed by the user.
tasks.delete('IMP-11');byId.delete('IMP-11');tasks.delete('IMP-37');byId.delete('IMP-37');tasks.delete('IMP-22');byId.delete('IMP-22');language.draftedTasks=ts.length;
for(const t of ts){
 t.suppliedInputDescriptions=t.inputs.map(id=>({id,description:t.inputDescriptions?.[id]||language.inputDescriptions[id]}));
 t.upstreamInputs=inherited(t).filter(id=>!t.inputs.includes(id));
 const blocks=[];if(t.inputs.length)blocks.push('Waiting for supplied inputs: '+t.suppliedInputDescriptions.map(i=>i.id+' — '+i.description).join(' '));
 if(t.prereqs.length)blocks.push('Requires the configured outputs of '+t.prereqs.join(', ')+'.');
 if(t.upstreamInputs.length)blocks.push('Predecessors also depend on '+t.upstreamInputs.join(', ')+'.');
 t.blocked=blocks.join(' ')||'No missing supplied input or prerequisite is identified for this assignment. Task completion is not recorded by this plan.';
}

const contextKeys=new Set(actionScope.contextCoverage.map(f=>f.object+'.'+f.field));
modificationStats.modifiedFieldInstructions=modificationStats.modifiedFieldInstructions.map(f=>({...f,task:reviewed.fieldOwners[f.object+'.'+f.field]||reviewedAlias(['IMP-22','IMP-37'].includes(f.task)?'IMP-10':f.task)})).filter(f=>!contextKeys.has(f.object+'.'+f.field));
modificationStats.modificationRows=ts.reduce((n,t)=>n+t.modifications.length,0);
modificationStats.taskModificationCount=ts.filter(t=>t.modifications.length).length;
// Each current field delta has a named build assignment; external interface declarations remain input only.
const assignments=new Map();
function cover(obj,fields,ids){const o=model.objects.find(o=>o.internalName===obj);if(!o)throw Error('Object missing '+obj);for(const f of o.fields.filter(f=>['Add','Modify'].includes(f.disposition)&&(!fields||fields.includes(f.internalName))))assignments.set(obj+'.'+f.internalName,ids);}
for(const n of ['Insp_InspectionSourceObject','Insp_OutcomeObject','Insp_ResponseOutcomeObject','Insp_ClassificationObject'])cover(n,null,['IMP-01','IMP-23','IMP-46']);
cover('Insp_TypeObject',null,['IMP-05','IMP-17','IMP-25']);
cover('CLF_ChecklistObject',null,['IMP-03','IMP-18','IMP-24']);
cover('CLF_SectionObject',null,['IMP-03','IMP-24']);
cover('CLF_QuestAbstractObject',null,['IMP-04','IMP-18','IMP-24','IMP-26']);
cover('Insp_EquipInspectionObject',['ExternalParty','PerformedOn','SubmittedAt','AcceptedAt'],['IMP-08','IMP-19','IMP-43']);
cover('Insp_EquipInspectionObject',['OverallOutcome'],['IMP-09','IMP-36']);
cover('Insp_EquipInspectionObject',['ActionClassification'],['IMP-09','IMP-44']);
cover('Insp_EquipInspectionObject',['OperationalResource'],['IMP-31']);
cover('Insp_EquipInspectionObject',['Attachments'],['IMP-16','IMP-47']);
cover('Insp_EquipInspectionObject',['ExternalInspectionReport'],['IMP-16','IMP-19','IMP-35','IMP-43','IMP-47','IMP-50']);
cover('Insp_EquipInspectionObject',['Equipment','EquipmentTxt'],['IMP-19','IMP-30','IMP-31']);
cover('Insp_EquipInspectionObject',['ReleActionPlans'],['IMP-43','IMP-42']);
cover('Insp_InspectionAbsObject',null,['IMP-19','IMP-21','IMP-40','IMP-43']);
cover('Insp_InspectionAbsObject',['FirstReviewBy','SecondReviewBy','DaofFirstReview','DofSecondReview'],['IMP-08','IMP-21','IMP-43']);
cover('Insp_InspectionAbsObject',['CompletedBy','CompletedOn'],['IMP-43']);
cover('CLF_QuestionAnswerObject',['ResponseOutcome'],['IMP-09','IMP-34']);
cover('CLF_QuestionAnswerObject',['Attachments'],['IMP-16','IMP-47']);
cover('CLF_QuestionAnswerObject',['IsAnswerMiss','IsComMiss','IsActionMiss','IsFindingMiss','IsSubmitReady','NbActions'],['IMP-35']);
cover('CLF_QuestionAnswerObject',['Findings','NbFindings','MaxPoints','PointsAwarded'],['IMP-20']);
cover('CLF_ChecklistAnswerObject',['SysteTypeHelper'],['IMP-28']);
cover('CLF_ChecklistAnswerObject',['Findings','NbFindings','Score','MaxPoints','PointsAwarded'],['IMP-19','IMP-20']);
cover('CLF_ChoiceObject',null,['IMP-04','IMP-18','IMP-24']);cover('CLF_ChoiceListObject',null,['IMP-18']);cover('CLF_PubQuestObject',null,['IMP-18']);
cover('CLF_InsActionPlanObject',null,['IMP-10','IMP-11','IMP-22','IMP-37','IMP-42']);
cover('FragApplication_AbCorrectivActiObject',null,['IMP-10','IMP-11','IMP-37','IMP-42']);
for(const f of modificationStats.modifiedFieldInstructions){const key=f.object+'.'+f.field;const ids=assignments.get(key)||[];if(!ids.includes(f.task))ids.push(f.task);assignments.set(key,ids);}
for(const [key,ids]of assignments)assignments.set(key,[...new Set(ids.map(reviewedAlias).filter(id=>tasks.has(id)))]);
for(const f of actionScope.contextCoverage.filter(f=>f.task===null))assignments.set(f.object+'.'+f.field,[]);
const fields=model.changedFields.map(f=>({...f,tasks:assignments.get(f.object+'.'+f.field)}));
for(const f of fields)if(!f.tasks?.length&&!actionScope.contextCoverage.some(c=>c.object===f.object&&c.field===f.field&&c.task===null))throw Error('Uncovered change '+f.object+'.'+f.field);
const handlerTasks={E265:'IMP-26',E629:'IMP-24',E1236:'IMP-25',E2007:'IMP-28',E2628:'IMP-30',E3088:'IMP-39',E477:'IMP-41'};
const handlerCoverage=baseline.items.filter(x=>x.item.ObjectName==='MetObjectActionEntity').map(x=>({evidence:x.evidenceId,name:x.item.FieldData.Name,task:handlerTasks[x.evidenceId]?reviewedAlias(handlerTasks[x.evidenceId]):null,disposition:handlerTasks[x.evidenceId]?'Narrow client-required edit in H contracts':'Reuse existing native/shared behavior; no remediation task'}));
const allSrc=new Map(baseline.items.map(x=>[x.evidenceId,x]));
function target(e,key){const r=baseline.relations.find(r=>r.start===e&&r.source===key);return r?allSrc.get(r.end):null;}
const formsByObj={Insp_TypeObject:['IMP-17'],CLF_ChecklistObject:['IMP-18'],CLF_QuestObject:['IMP-18'],CLF_PubQuestObject:['IMP-18'],CLF_PubChecklistObject:['IMP-18'],CLF_ChoiceObject:['IMP-18'],CLF_ChoiceListObject:['IMP-18'],CLF_SectionObject:['IMP-18'],Insp_EquipInspectionObject:['IMP-19','IMP-21','IMP-16'],Insp_InspectionAbsObject:['IMP-19','IMP-21'],CLF_QuestionAnswerObject:['IMP-20','IMP-16'],CLF_SectionAnswerObject:['IMP-20'],CLF_InsActionPlanObject:['IMP-10']};
const formCoverage=baseline.items.filter(x=>['SysConfigurableViewEntity','SysConfigurableViewProfileEntity'].includes(x.item.ObjectName)).map(x=>{const view=x.item.ObjectName==='SysConfigurableViewProfileEntity'?target(x.evidenceId,'ConfigurableView'):x;const owner=view?target(view.evidenceId,'Object')?.item.FieldData.Name:null;return {evidence:x.evidenceId,name:x.item.FieldData.Name||view?.item.FieldData.Name||x.item.RecordId,owner:owner||'Unresolved/shared interface',tasks:[...new Set((formsByObj[owner]||[]).map(reviewedAlias).filter(id=>tasks.has(id)))],disposition:formsByObj[owner]?'Apply only F01–F06 scoped changes':'Reuse unchanged external/shared definition'};});
const components=[
 ['Application and direct inheritance','Keep the 87 existing objects and their inheritance. Create the four new reference lists in their assigned task.',['IMP-01']],
 ['Source/outcome/classification domains','Four reference lists, prescribed entries, three result fields and controlled maintenance access.',['IMP-01','IMP-09','IMP-23','IMP-46']],
 ['Program settings','Current Type of Inspection settings for source, review, equipment and overall results, with the corresponding setup screen.',['IMP-05','IMP-17','IMP-25']],
 ['Checklist/question authoring','Named sections, contributing questions, negative choices and existing Action Required selections, with the required screens and checks.',['IMP-03','IMP-04','IMP-18','IMP-24']],
 ['Native publication/generation','Keep existing publication and response creation. Add the contributing-question copy and skip response creation for External inspections; retain existing action-choice copies and shared Choice records.',['IMP-26','IMP-28']],
 ['Inspection field changes','External party, performance/submission/acceptance dates and calculated result fields.',['IMP-08','IMP-09','IMP-19']],
 ['W01 inspection configuration','Existing Inspection workflow with corrected stage statuses, four updated actions and stage-appropriate review screens.',['IMP-14','IMP-21','IMP-40','IMP-43']],
 ['W02 action configuration','Existing action stage and Complete action with separate outstanding/completed-entry requirements and checks before completion.',['IMP-10','IMP-11','IMP-22','IMP-37','IMP-39','IMP-42']],
 ['Response requirements/results','Keep dependent-question and clearing behavior; update the required answer/evidence checks and categorical results.',['IMP-20','IMP-34','IMP-35','IMP-36']],
 ['Final follow-up classification','Use existing source links and action completion to show open corrective work while protecting accepted inspection evidence.',['IMP-44','IMP-47']],
 ['Native evidence/mobile','A single ExternalInspectionReport File field and External-only section, optional evidence files and native mobile upload handling.',['IMP-16','IMP-50']],
 ['Required access/review history','Reference-list permissions and the specified inspection/review/action access and history settings.',['IMP-46','IMP-47']],
 ['Optional shared resource/lookup','Use the existing shared resource/equipment configuration supplied through G05 for optional establishment-appropriate selections.',['IMP-31']],
 ['Messages/reminders','Keep existing assignment-release timing and apply the supplied notification/reminder policy.',['IMP-41','IMP-45']],
 ['Reports/portable output','Approved report and portable-record definitions, conditional on the supplied scope and native settings.',['IMP-51','IMP-52','IMP-53','IMP-54','IMP-55','IMP-56','IMP-57','IMP-58']],
 ['Initial program and checklist data','Owned by Data Migration in the separate project-plan section; not assigned in this configuration plan.',[]],
 ['Reviewer memberships','Maintained by the client’s system administrators as an administrative responsibility.',[]],
 ['Incident boundary','Retain manual Incident Management process. No new object, integration or task. ',[]]
];
const safe=x=>String(x).replace(/\|/g,'&#124;').replace(/\r?\n/g,' ');
const table=(h,rows)=>'\n| '+h.join(' | ')+' |\n| '+h.map(()=> '---').join(' | ')+' |\n'+rows.map(r=>'| '+r.map(safe).join(' | ')+' |').join('\n')+'\n';
let plan='# Inspections — Draft Configuration Implementation Plan\n\nRevision 2 · Revised-planner review · 29 October 2026. Based on the current [technical specification](solution-specification.md).\n\n## 1. Scope and planning basis\n\nThis plan describes the configuration needed for the agreed Inspections design. Each task assigns additions, modifications or removals against verified existing behavior: name the actual object, field, view action, Action Handler or workflow action, state the current behavior and prescribe the required difference. A requirement alone is not an implementation task. Use existing native enforcement where it already meets the requirement, and assign new checks to a named operation before its consequential action. Unchanged settings are not assigned as work; supporting source context is recorded separately in the coverage inventory. Exact Intelex names and formulas are included where the consultant needs them to identify the configuration.\n\nThe plan contains '+ts.length+' active tasks using their existing identifiers. Gaps in the numbering reflect earlier tasks that were removed or combined; section 6 records their disposition. The current design includes '+model.summary.changedFields+' added or modified field declarations, four new reference lists, and the optional shared resource information supplied through G05. The [revision decisions](revision-decisions.md) explain the earlier design changes.\n\nUse existing Intelex objects, publication, response generation and workflows wherever the specification retains them. IMP-14 updates the workflow stages before work that depends on their statuses. Create referenced lists and entries before assigning their defaults. The optional resource configuration does not prevent core establishment, text-equipment or equipment-disabled behavior from being configured.\n\nTasks that change existing settings identify the element, the current package setting and the required modification. Current settings come from the supplied configuration package; they do not establish the state of a live tenant. The supporting [coverage inventory](implementation-coverage.md) retains the source references.\n\nEach task names its minimum recommended implementer and a separate **Senior Consultant product build manager** as reviewer. The plan keeps the existing task responsibilities and technical prerequisites. It records no completed tasks or estimates.\n\nRequired client decisions and native configuration details appear as G01–G08 inputs in section 3. Affected tasks identify what they are waiting for. Discovery, migration, formal testing, deployment, training and project administration are outside this configuration plan.\n\n## 2. Task summary\n';
plan+=table(['Task Number','Task Category','Task Name','Objective and Detailed Scope','Recommended Implementer'],ts.map(t=>[t.id,t.category,t.title,`**Objective:** ${t.objective}<br><br>**Detailed scope:** ${t.scope}`,t.role]));
plan+='\n## 3. External inputs and constraints\n\nThe following information must be supplied before the affected configuration can be completed. These are inputs to the plan, not additional implementation tasks. The table lists directly affected tasks; individual tasks also show inputs needed by their predecessors.\n';
plan+=table(['Input','Required supplied value/result','Directly blocked assignments'],model.inputs.map(i=>[i.id,language.inputDescriptions[i.id],ts.filter(t=>t.inputs.includes(i.id)).map(t=>t.id).join(', ')]));
plan+='\n## 4. Implementation assignments\n';
for(const t of ts)plan+=`\n### ${t.id} — ${t.title}\n\n**Task ID:** ${t.id}\n\n**Title:** ${t.title}\n\n**Category:** ${t.category}\n\n**Objective:** ${t.objective}\n\n**Detailed scope:** ${t.scope}\n${t.configurationRows.length?'\n**Required configuration:**\n'+table(['Element / condition','Required configuration'],t.configurationRows):''}${t.steps.length?'\n**Additional instructions:**\n\n'+t.steps.map(s=>'- '+s).join('\n')+'\n':''}${t.modifications.length?'\n**Changes to existing configuration:**\n'+table(['Existing element','Current package setting','Required modification','Source reference'],t.modifications.map(m=>[m.businessElement,m.businessBefore,m.businessChange,m.evidence])):''}\n**Deliverable:** ${t.deliverable}\n\n**Strict technical prerequisites:** ${t.prereqs.join(', ')||'None'}\n\n**Blocked status:** ${t.blocked}\n\n**Recommended implementer role:** ${t.role}\n\n**Recommended reviewer/approver role:** ${t.reviewer}\n\n**Role rationale:** ${t.rationale}\n\n**Acceptance criteria:**\n\n${t.accept.map(a=>'- '+a).join('\n')}\n\n**Specification references:** [Technical specification](solution-specification.md): ${t.refs.join('; ')}. Use the [field and source coverage inventory](implementation-coverage.md) to locate the corresponding package definitions.\n\n**Assumptions and open questions:** ${t.notes}\n`;
plan+='\n## 5. Strict technical dependencies\n\nAn arrow means the following task needs configuration produced by the preceding task. The diagram shows configuration prerequisites only. Supplied inputs G01–G08 are listed separately; staffing, review and deployment are not dependency arrows.\n\n```mermaid\nflowchart TD\n';
for(const t of ts)plan+=`  ${t.id.replace('-','_')}["${t.id}: ${t.title}"]\n`;
for(const t of ts)for(const p of t.prereqs)plan+=`  ${p.replace('-','_')} --> ${t.id.replace('-','_')}\n`;
plan+='```\n\n### Configuration coverage\n'+table(['Component','Required configuration or existing behavior retained','Tasks'],components.map(([n,d,ids])=>[n,d,[...new Set(ids.map(reviewedAlias).filter(id=>tasks.has(id)))].join(', ')||'No build task']));
plan+='\n## 6. Previous task dispositions\n\nInitial inspection programs and checklist content are owned by Data Migration in the separate project-plan section. The client’s system administrators own reviewer memberships. These assignments have been removed from the active configuration tasks; their former identifiers are retained here for traceability only.\n';
plan+=table(['Previous task','Previous title','Current disposition'],old.tasks.map(t=>[t.id,t.title,tasks.has(t.id)?'Retained; use the current assignment above':reviewed.retired[t.id]?reviewed.retired[t.id]:t.id==='IMP-11'?'Removed — existing product functionality, as confirmed by the user; no source-link configuration work is assigned.':['IMP-22','IMP-37'].includes(t.id)?'Consolidated into IMP-10 — Configure Action Entry Requirements, owned by a Consultant; named field/form changes only.':outOfPlanById.has(t.id)?'Removed from this plan — '+outOfPlanById.get(t.id).owner+'. '+outOfPlanById.get(t.id).scope:build.deferredIds.includes(t.id)?'Earlier optional design proposal; outside the current configuration plan':'Existing behavior retained or required work included in a current task; see revision decisions']));
plan+='\n## 7. Assumptions, exclusions and coverage\n\n- Proposed ADRs retain their existing status. Optional resource, report and portable-record work depends on its supplied details and approved scope.\n- The original configuration package and as-is baseline remain unchanged. Existing object identities, inheritance, publication, response generation, response-link synchronization and clearing of hidden answers are retained except where a task explicitly changes a setting.\n- The specified functional reference-list entries are configured in IMP-01. Initial inspection program records and checklist content are owned by the Data Migration section of the project plan. Historical data migration or mandatory updates to historical records are outside this configuration plan.\n- Client review periods, memberships, reminder frequency, file limits and output policies must use supplied values. Missing native expressions and processing settings remain listed inputs.\n- Reviewer role and establishment memberships are maintained by the client’s system administrators. This plan configures the application to use those supplied memberships but does not assign their maintenance.\n- Acceptance criteria confirm the assigned configuration. Discovery, prototypes, tenant verification, migration, formal testing, deployment, training, documentation and project governance are managed separately.\n- The existing manual Incident Management process remains. Access and audit changes cover the specified review/action evidence; the plan does not authorize wider application changes.\n- Current shared program and Choice settings remain live until accepted results are protected. The retained publication calculations keep their existing historical limitations. Additional historical snapshots or stronger publication guarantees require a separate scope decision.\n\nThe [coverage inventory](implementation-coverage.md) maps every changed field and all '+model.objects.length+' modelled objects, 52 existing Action Handlers and 186 views/profiles. Summary entries, detailed tasks and dependency arrows come from the same task records and are checked for consistency.\n';
plan+='\n## 8. Revised-planner review\n\nReviewed on 29 October 2026 against the revised skill. '+reviewed.previousTasks+' active tasks became '+ts.length+' after five consolidations and removal of existing review-form behavior. Each related change retains a current owner; specialist completion, record security, authoring guards and generation remain separate where their scope or prerequisite order warrants it.\n\n'+reviewed.findings.map(f=>'- '+f).join('\n')+'\n';
fs.writeFileSync(path.join(dir,'implementation-plan.md'),plan);
let coverage='# Revision 2 implementation coverage\n\nCurrent [technical specification](solution-specification.md) and [implementation plan](implementation-plan.md). This inventory distinguishes actual changes, explicit reuse and externally supplied interfaces. It does not revive archived architectural proposals.\n\n## 1. Changed declarations\n';
coverage+=table(['Object','Field','Change / evidence','Requirements / rules','Current assignments'],fields.map(f=>[f.object,f.field,f.disposition+'; '+f.evidence,(f.requirements||[]).join(', ')+' / '+(f.rules||[]).join(', '),f.tasks.join(', ')||(actionScope.contextCoverage.find(c=>c.object===f.object&&c.field===f.field)?.owner||'Existing product behavior')+'; no configuration task']));
coverage+='\n## 2. Object and retained field coverage\n';
coverage+=table(['Object','Instruction','Assignments for changed declarations','Retained direct fields'],model.objects.map(o=>[o.internalName,o.disposition,[...new Set(fields.filter(f=>f.object===o.internalName).flatMap(f=>f.tasks))].join(', ')||(o.internalName==='Shared_OperationalResource'?'G05 supplies interface; IMP-31 consumer binding only':'Reuse; no object rebuild'),o.fields.filter(f=>f.disposition==='Retain').map(f=>f.internalName).join(', ')||'None']));
coverage+='\n## 3. Existing handler coverage\n'+table(['Evidence','Handler','Assignment or reuse'],handlerCoverage.map(h=>[h.evidence,h.name,h.task||h.disposition]));
coverage+='\n## 4. View/profile coverage\n'+table(['Evidence','Definition','Owning object','Assignment or reuse'],formCoverage.map(f=>[f.evidence,f.name,f.owner,f.tasks.join(', ')||f.disposition]));
coverage+='\n## 5. Native workflow and component coverage\n'+table(['Component','Instruction','Assignments'],components.map(([n,d,ids])=>[n,d,[...new Set(ids.map(reviewedAlias).filter(id=>tasks.has(id)))].join(', ')||'Reuse/not applicable']));
coverage+='\nW01 retains its schema/stage/action IDs and changes only listed parameter links/flows. W02/S05 identities are reused, with I05 validation ordering and immediate-entry path changes. The other three exported workflow schemas retain compatibility flags/pending drafts and receive no new task. Five external Shared Operational Resource declarations remain G05 input with no local creation assignment.\n';
coverage+='\n## 6. Explicit existing-field modifications\n'+table(['Object','Existing field','Primary modification task','Source evidence'],modificationStats.modifiedFieldInstructions.map(f=>[f.object,f.field,f.task,f.evidence]));
coverage+='\n## 7. Existing field settings referenced by changed behavior\n\nThese fields require no field-setting change. Rows identify either an active change using an unchanged field, or existing product functionality confirmed by the user. They provide source traceability and are not assigned as configuration work.\n'+table(['Object','Field','Related change task','Reason'],actionScope.contextCoverage.map(f=>[f.object,f.field,f.task||f.owner,f.reason]));
fs.writeFileSync(path.join(dir,'implementation-coverage.md'),coverage);
const stats={revisedSkillTasks:ts.filter(t=>t.reviewedAgainstRevisedSkill).length,unchangedFieldContexts:actionScope.contextCoverage.length,externallyOwnedTasks:outOfPlan.length,consultantLanguageTasks:language.draftedTasks,tasksWithExplicitModifications:modificationStats.taskModificationCount,existingModificationRows:modificationStats.modificationRows,modifiedFieldInstructions:modificationStats.modifiedFieldInstructions.length,revision:2,tasks:ts.length,previousTasks:old.tasks.length,deferredArchitectureTasks:build.deferredIds.length,reusedOrFoldedTasks:build.reuseIds.length+3+Object.keys(reviewed.retired).length,dependencyEdges:ts.reduce((n,t)=>n+t.prereqs.length,0),objects:model.objects.length,changedFields:fields.length,retainedFields:model.summary.retainedFields,externalInterfaceFields:5,handlers:handlerCoverage.length,viewsProfiles:formCoverage.length};
fs.writeFileSync(path.join(dir,'implementation-plan.json'),JSON.stringify({revision:2,languageEdition:1,reviewedStandardDate:'2026-10-29',reviewed,stats,outOfPlan,sourceHashes,externalInputs:model.inputs.map(i=>({...i,description:language.inputDescriptions[i.id]})),tasks:ts,modificationCoverage:modificationStats.modifiedFieldInstructions,contextCoverage:actionScope.contextCoverage,fieldCoverage:fields,handlerCoverage,formCoverage},null,2)+'\n');
for(const f of sources)if(hash(fs.readFileSync(path.join(dir,f)))!==sourceHashes[f])throw Error('Specification changed during plan generation: '+f);
console.log(JSON.stringify(stats,null,2));
