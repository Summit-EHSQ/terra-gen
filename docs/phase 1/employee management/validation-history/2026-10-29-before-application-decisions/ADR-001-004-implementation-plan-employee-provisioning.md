---
status: draft
date: 2026-10-29
component: Employee Management
phase: 1
source_specification_status: accepted
---

# Employee Management Implementation Plan

## 1 Scope and planning basis

This October 29 revision applies the current Intelex Implementation Planner standard to the full Employee Management plan. The [accepted specification](ADR-001-004-technical-specification-employee-provisioning.md), including the October 28 establishment clarification, remains the design authority. Its acceptance does not verify tenant capabilities or approve unresolved values. Eighteen complete assignments replace the previous 29; stable surviving IDs are retained. The consolidation mapping below accounts for all 11 retired assignments.

**Catalogue-first implementation:** complete the catalogue choices, maintenance, basic rights and initial values before the remaining custom configuration. This is the user's required build order; graph edges represent actual technical prerequisites only. The separate four-object definition output is needed before mutually referencing fields. Role execution stays deferred; only its specified storage/copy structure and publication hold are included.

**Evidence/current state:** the October 28 [metadata snapshot](<raw artifacts/object-model/2026-10-28-employee-management-metadata.json>) contains five native object definitions and 287 properties. Native Employee JobCode, Number, DateHired and Location, Group membership and Location.ParentLocation are reused, not recreated. Immediate native inheritance is extracted; membership M:N and group descent are user-confirmed. No package defining custom profiles, forms, handlers, workflows or Boomi processes was supplied. Accordingly these are explicitly proposed additions, not verified missing tenant elements or invented modifications to named existing handlers. Final equivalence/name checks and native bindings are supplied inputs, not investigation assignments.

Change ownership is stated by each task's configuration instructions and the coverage table. New schema/forms/audit share their owning assignment; direct-access security, publication guards, initial preparation and delivery each have one owner. No native field-property change follows merely from a specification Modify label. The one verified audit baseline is SysEmployeeEntity.IsAuditEnabled=FALSE; only the supported extension-audit change is assigned. Prior source/settings/APIHub proposals were not proven deployed, so no removal or tenant deletion is assigned.

## 2 Task summary

| Task Number | Task Category | Task Name | Objective and Detailed Scope | Recommended Implementer |
|---|---|---|---|---|
| CFG-01 | Catalogues and initial configuration records | Configure the Catalogue Choices and Maintenance | **Objective:** Provide the two governed choice lists before configuring the remaining custom objects.<br><br>**Detailed scope:** Add Login Location Rule and Assignment Location Basis with their fields, initial values, maintenance forms, basic permissions and native audit. Configure stable Code values and prevent inactive choices from becoming new selections without erasing historical references. | Senior Associate Consultant |
| CFG-02 | Application and object configuration | Create the Four Profile Object Definitions | **Objective:** Provide the mutually referenced object definitions needed by the profile configuration.<br><br>**Detailed scope:** Add the four profile object definitions in the existing approved application. This early structure is needed before the authoring, published-version and Role relationships can be configured; it assigns no native-object reconstruction. | Associate Consultant |
| CFG-03 | Fields and relationships | Configure Position Code Authoring | **Objective:** Let Administrators maintain working Position Code settings during setup and after completion without changing published configuration.<br><br>**Detailed scope:** Add the authoring fields, initial workflow structure and authoring form, including three views of one Groups relationship, protected system controls and native audit. Reserve the Publish link for the separately configured publication operation. | Senior Associate Consultant |
| CFG-04 | Fields and relationships | Configure Published Position Code Records | **Objective:** Provide a read-only record of each published profile configuration.<br><br>**Detailed scope:** Add the published-version fields, its owner/history relationship, scoped version identity and review form. The publication operation creates values and independent copies; this assignment supplies their storage and presentation. | Senior Associate Consultant |
| CFG-05 | Fields and relationships | Configure the Authoring and Published Role Structures | **Objective:** Reserve separate authoring and immutable version storage for Role choices without enabling deferred Role execution.<br><br>**Detailed scope:** Add both three-field Role association structures, their inverse grids and bounded forms. Configure owner-scoped uniqueness and inactive-choice retention; keep the deferred authoring controls unavailable until Role use is approved. | Senior Associate Consultant |
| CFG-07 | Fields and relationships | Configure Employee Profile Fields and Support Display | **Objective:** Retain the current code, initial setup participation and captured preparation evidence on each Employee.<br><br>**Detailed scope:** Add the seven Employee extensions, their three declaring inverses and a restricted support display. Configure their defaults, field protection and supported native audit; native employee identity, JobCode and Location properties are reused. | Senior Associate Consultant |
| SEC-02 | Security | Configure Profile and Employee Access Controls | **Objective:** Permit governed authoring and automation while protecting published versions and Employee information on every required access path.<br><br>**Detailed scope:** Add the profile object permissions and record/field restrictions for Administrators, support, Boomi and trusted native processing. Enforce immutable publications and protected Employee fields through forms, direct URLs, API, imports, search and export. | Senior Consultant |
| AUT-01 | Automation and services | Configure Employee Position Code Resolution | **Objective:** Associate incoming Employees with the right profile and retain every Employee waiting for a new Position Code.<br><br>**Detailed scope:** Add the Employee Action Handler for integration-origin marking, exact code matching, first capture, missing-code creation and helper maintenance. Add the reusable initial login-location calculation used by preparation, without applying memberships inside the creation handler. | Senior Consultant |
| AUT-04 | Notifications and automation | Configure the One-Time Position Code Setup Message | **Objective:** Notify Administrators once when an integration-created Position Code has Employees waiting for setup.<br><br>**Detailed scope:** Add the Position Code Setup Required message template and guarded native delivery after a helper/source link exists. Set the sent flag only after delivery succeeds and use the supplied delivery deduplication mechanism for retry. | Senior Consultant |
| AUT-07 | Automation and services | Configure Initial and Subsequent Position Code Publication | **Objective:** Publish one complete immutable configuration and release waiting Employees only on the first successful publication.<br><br>**Detailed scope:** Add the common publication operation, independent version/Role copies, first-source writeback, workflow completion and both Publish bindings. Put all validation before consequential changes and keep version activation, initial Employee writeback and workflow completion in the supplied single controlled change. | Senior Consultant |
| AUT-08 | Automation and services | Configure Initial Employee Membership Preparation | **Objective:** Prepare the initial memberships and login instruction once without removing unrelated access.<br><br>**Detailed scope:** Add the shared native preparation routine for eligible integration-managed Employees. Under an Employee lock add only missing desired memberships, store the initial login/home references and stamp completion last; retry finishes incomplete work without replaying completed setup. | Senior Consultant |
| AUT-09 | Automation and services | Configure Employee Preparation Continuation | **Objective:** Run preparation only after the inbound Employee or publication changes have committed and resume incomplete eligible records.<br><br>**Detailed scope:** Add the native after-commit dispatch and scheduled Event Service that invoke the shared preparation routine. Apply explicit selection and execution controls without selecting a later profile version or resetting completed Employees. | Consultant |
| INT-01 | Integrations | Configure Establishment Assignment in Boomi | **Objective:** Deliver the correct Home Location for new employees, relocations and job changes while honoring authorized corrections.<br><br>**Detailed scope:** Add the supplied ordered establishment decision to the Boomi mapping: established work/assigned site first, otherwise San Diego for remote California residents, otherwise the job function’s designated main established site. Configure valid LocationCode mappings and hold incomplete or conflicting cases. | Consultant |
| INT-02 | Integrations | Configure Direct Employee Delivery in Boomi | **Objective:** Create pre-start Employees directly and update the same records through the supported EmployeeUserAccess contract.<br><br>**Detailed scope:** Add the direct Boomi POST/PATCH mapping and pre-start selection. Send Position Code through JobCode, establishment through HomeLocationCode and only supported properties; create Employee without user access and leave activation to the readiness-gated operation. | Consultant |
| INT-03 | Integrations | Configure Employee Delivery Reconciliation and Retry | **Objective:** Resume uncertain delivery against the correct Employee instead of creating a duplicate.<br><br>**Detailed scope:** Add per-EmployeeNumber serialization, native Number/Id reconciliation and bounded delivery retry around the direct Boomi request. Distinguish definite no-match, one valid match, ambiguous identity and unknown request outcome. | Senior Consultant |
| INT-04 | Integrations | Configure Readiness-Gated Account Activation | **Objective:** Enable access for the existing Employee only after profile preparation and organizational identity are ready.<br><br>**Detailed scope:** Add the Boomi readiness read and later EmployeeUserAccess PATCH. Require completed initial preparation, consistent home/login references and SSO/license inputs; preserve prepared memberships and manual login exceptions. | Senior Consultant |
| RPT-01 | Reports | Configure Employee Setup Support Views | **Objective:** Show authorized support which codes or Employees are waiting and which failures need action.<br><br>**Detailed scope:** Add bounded native support views over the existing profile/Employee fields and supplied native error sources. Separate source participation, current code use, captured preparation and actual account evidence. | Senior Associate Consultant |
| INIT-01 | Catalogues and initial configuration records | Configure the Initial Position Code Profiles | **Objective:** Make the supplied initial nondeferred Position Codes available for new Employee preparation.<br><br>**Detailed scope:** Create the supplied exact Position Code records with their login rules and security/training/document group choices, then publish them through the completed configured controls. This is initial configuration, not Employee migration or enrollment. | Senior Associate Consultant |

## 3 External inputs and constraints

Missing native results, exact values and approved policies belong to separate design/tenant-verification work. They have no task IDs, roles or dependency nodes. Each task below states precisely which input blocks which instruction; known portions can be configured without assuming the missing binding.

| Assignment | Supplied inputs and affected configuration |
|---|---|
| CFG-01 | placement: Approved existing application and final object/field names are required to create TG_LoginLocationRuleObject and TG_AssignmentLocationBasisObject; the displayed labels and proposed names below are the design basis.<br><br>catalogueControls: Supported unique-Code and used-Code immutability controls across form, API and import, plus audit capability/retention and the exact Administrators/support principals, are required for catalogue enforcement, permissions and audit. The target field capacities are 100 and 255; native supported capacities remain unverified. |
| CFG-02 | placement: Approved existing application, final names and absence/presence of equivalent custom definitions are required for the four proposed object additions. The available metadata covers native objects only, so these are proposed additions, not verified missing live objects. |
| CFG-03 | authoringControls: Final field names, exact case-sensitive unique-Code enforcement and Code-after-creation immutability bindings are required for authoring field controls. Code capacity 255 is the proposed target, not a verified native maximum.<br><br>workflow: Initial Setup and Publish system names, the actual active/nonterminal status label, Administrators responsibility/fallback binding and an explicit due-date/default-email decision are required to finish the initial workflow. Completed edit/link support must be supplied; no due-date value is authorized yet.<br><br>subtypes: Native selector predicates for SysSecurityGroupEntity, FragApplication_WorkGroupsObject and DocCtrl_DistributiGroupObject are required for the three filtered Groups grids. Role ancestry alone does not establish filter syntax.<br><br>audit: Supported native audit settings and retention for authoring scalar/relationship changes, and native field/form bindings for the protected controls, are required for audit and non-editable controls. |
| CFG-04 | versionIdentity: Supported positive-integer field configuration, unique (Position Code, Version Number) constraint and native display expression combining Position Code.Code with Version Number are required to finish version identity. Final custom field names remain supplied inputs.<br><br>versionForm: Approved review-form placement and support principal bindings are required for the new published-version screen; native data-access enforcement belongs to the record-security assignment. |
| CFG-05 | roleBindings: Final Role field names, native SysRoleEntity selector binding, owner-plus-Role uniqueness control, supported authoring audit and the binding that disables deferred Role entry are required for these storage/form changes. Role immediate inheritance and executable assignment semantics remain unverified and are not assigned here. |
| CFG-07 | employeeBindings: Approved final names for the seven proposed Employee extensions, actual Employee form/section target and supported relationship inverses are required for schema and support placement. Date/time timezone settings and write-once/read-only controls must be supplied for the captured version and checkpoint.<br><br>employeeAudit: The extracted SysEmployeeEntity definition returned IsAuditEnabled=FALSE. Supported native audit scope/retention for only the new fields and their relationships is needed before enabling the specified evidence capture; do not assume all native Employee field audit must change. |
| SEC-02 | security: Exact Administrators/support/Boomi/service principals and native object, field, record, terminal-state and read-path permission bindings are required for these grants/denials. Support retry authority, delete policy and personal-data search/export scope remain undecided; those permissions stay blocked rather than being broadly granted. |
| AUT-01 | event: Allowlisted Boomi actor identity, exact Employee creation/update/internal-save event bindings, FETCHVALUE relationship-return signature and case-sensitive comparison, GETRELATED create/resolve/workflow-start binding and recursive-save guard are required for handler execution. JobCode alone is not origin evidence.<br><br>transaction: Supported shared per-code serialization, exact-Code uniqueness recovery and initial-publication race binding are required to create one authoring record and capture the committed first release safely. The native operations are unverified; no custom locking store is authorized.<br><br>locationCalculation: Supported callable native relationship calculation and error/hold binding are required to return Employee.Location or ParentLocation as a valid Initial Login Location candidate without writing the preparation checkpoint. |
| AUT-04 | notification: Actual template identity, current-Administrators recipient expression, native delivery/deduplication operation and success evidence covering the send/flag failure window are required to bind safe delivery. Native default creation/completion email settings must be supplied to avoid unintended additional mail. |
| AUT-07 | publication: Supported operation binding, saved-revision check, per-code lock, version-number constraint, retry identity/reconciliation and atomic graph/pointer/Employee/workflow rollback must be supplied. These are unresolved native capabilities, not approved custom transaction syntax.<br><br>publishLink: Exact Initial Setup Publish workflow-action binding and Completed form-link mechanism, active status mapping, responsible-person/due-date/default-email decisions and after-commit handoff are required to bind execution. Authoring scaffolding supplies the fields, screen and stage identities.<br><br>publicationSelection: Supported group-type validation, active catalogue checks, Role uniqueness/basis checks and exact onboarding-eligible Employee status predicate are required for publication validation and source release. Profiles needing deferred location-qualified Roles must remain blocked. |
| AUT-08 | membership: Verified native Members/MemberOf add operation before user access exists, Employee lock, membership read/compare binding, native error evidence and transaction/timezone behavior are required for membership writes and checkpointing. User-confirmed M:N structure is not proof of a writable setter.<br><br>preparationEligibility: Exact non-archived/non-deleted/onboarding-eligible predicate, current-code/version comparison and deferred-Role hold binding are required for eligibility. The predecessor provides the reusable login-location result, not a membership operation. |
| AUT-09 | continuation: Verified after-commit invocation binding for Employee capture and successful initial publication, Event Service executable/callable binding, per-Employee exclusion and native failure/retry owner are required to wire the service.<br><br>cadence: Approved Event Service interval, timezone and retry/backoff limits are required for scheduling. Five minutes is the proposed cadence only, not an authorized fixed setting; the service must remain unscheduled until the value is supplied. |
| INT-01 | establishment: Exact Paylocity fields for assigned/actual site, established-site classification, residence state and job function; all site-to-LocationCode values including San Diego; job-function-to-main-site values and maintenance owner; and conflicting/multiple-site resolution are required to bind the decision. Job function is not assumed to equal JobCode.<br><br>correction: The approved durable upstream correction authority, actor/reason evidence fields, Boomi read binding and approver/clear/precedence values are required to implement protected corrections. No correction store or custom EmployeeUserAccess override field is authorized. |
| INT-02 | sourceMapping: Final Paylocity/source allowlist, actual source field paths, endpoint host, capacities, DateOfHire calendar-date format and optional omission-versus-clear rules are required for payload binding. EmployeeNumber/name/JobCode/date/establishment are the specified minimum; unsupported mappings must not be invented.<br><br>feed: Approved daily feed timing/timezone, seven-calendar-day pre-start window, catch-up/history bounds and source eligibility/status rules are required to enable feed selection; daily/seven days remains proposed until supplied.<br><br>flags: Approved SendEmail value (FALSE proposed for SSO), other supported processing flags, termination/leave/rehire/PRL policies and later user-attribute allowlist are required for those mappings. No default revoke/archive behavior is authorized. |
| INT-03 | identity: Supported Boomi per-EmployeeNumber serialization, exact Employee.Number read/match path and stable Id storage/reconciliation operation are required to wrap delivery. Rehire, changed-number and termination identity policy plus retry/backoff limits must be supplied before those branches are enabled.<br><br>evidence: Native Boomi correlation/outcome/error destination and administrator support owner are required for uncertain-outcome holds and retry evidence; no custom integration log object is authorized. |
| INT-04 | activation: Verified employee-only POST followed by existing-Employee access PATCH, membership continuity, actual Object Data API readiness paths and native account-existence read/outcome evidence are required for activation. If the sequence is infeasible, revised design is external rather than an invented workaround.<br><br>activationValues: Approved SAML UserId source, LicenseType values, LoginLocationCode read path, Boomi readiness-read principal, SendEmail/other account flag values and home-mismatch/manual-access reconciliation policy are required for gated access mapping. |
| RPT-01 | views: Actual native report/view definitions and query/filter bindings, archive/onboarding eligibility values, failed-execution source and ambiguous-identity source/read paths are required to bind the proposed views. Sensitive navigation and any retry command must use the supplied support security scope; create no custom error object. |
| INIT-01 | initial: Exact initial Code strings, each rule choice SAME_HOME or HOME_PARENT and actual security/training/document group identities are required to create the initial profiles. No seed codes were supplied; this population is wholly blocked until that list arrives. Profiles needing deferred location-qualified Roles remain excluded. |

## 4 Implementation tasks

### CFG-01 — Configure the Catalogue Choices and Maintenance

**Task ID:** CFG-01

**Title:** Configure the Catalogue Choices and Maintenance

**Category:** Catalogues and initial configuration records

**Objective:** Provide the two governed choice lists before configuring the remaining custom objects.

**Detailed scope:** Add Login Location Rule and Assignment Location Basis with their fields, initial values, maintenance forms, basic permissions and native audit. Configure stable Code values and prevent inactive choices from becoming new selections without erasing historical references.

**Configuration instructions:**

1. Create Login Location Rule (proposed TG_LoginLocationRuleObject) and Assignment Location Basis (proposed TG_AssignmentLocationBasisObject), with no inheritance parent. Make each object and its Name localizable; make Code non-localizable. These are ordinary catalogue objects, not Intelex Lookup Objects. Intelex supplies record identities automatically.

2. On each catalogue add Code: required text, maximum 100, unique, no default; Name: required localizable text, maximum 255, no default; Active?: required Yes/No, default TRUE; Sort: optional Float, no default. Protect Code from change once referenced. Configure inactive-value retention: Active?=FALSE prevents new selection and never clears an existing reference.

3. Add Login Location Rule records Code=SAME_HOME, Name=Same as Home Location, Active?=TRUE, Sort=10; and Code=HOME_PARENT, Name=Home Location's Parent, Active?=TRUE, Sort=20. Add Assignment Location Basis records Code=HOME, Name=Home Location, Active?=TRUE, Sort=10; and Code=LOGIN, Name=Login Location, Active?=TRUE, Sort=20.

4. Add a maintenance form for each catalogue showing Code, Name, Active? and Sort in that order. Allow Administrators to create and edit Name, Active? and Sort; show referenced Code read only. Expose no consumer inverse grids. Configure consumer selectors to display Name, order by Sort and compare stable Code; the consuming relationship tasks own their Active?=TRUE filters.

5. Grant Administrators catalogue creation/read/edit and support only the approved read access; deny ordinary users catalogue administration and Boomi catalogue writes. Use the supplied principal/control bindings. Enable native audit of mutable catalogue values and referenced-Code protection using the supplied audit settings. Missing delete/retention policy blocks those permissions rather than granting deletion by assumption.

**Deliverable:** the Catalogue Choices and Maintenance configured with the changes listed below.

**Strict technical prerequisites:** None

**Predecessor outputs consumed:** None; this assignment configures its own supplied source inputs.

**Blocked status:** Missing supplied inputs block the affected instructions: placement, catalogueControls.

**Task-local missing inputs:**

- **placement:** Approved existing application and final object/field names are required to create TG_LoginLocationRuleObject and TG_AssignmentLocationBasisObject; the displayed labels and proposed names below are the design basis.
- **catalogueControls:** Supported unique-Code and used-Code immutability controls across form, API and import, plus audit capability/retention and the exact Administrators/support principals, are required for catalogue enforcement, permissions and audit. The target field capacities are 100 and 255; native supported capacities remain unverified.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Role rationale:** Catalogue fields, forms and basic rights are one bounded outcome; used-Code protection and localization require Senior Associate judgment.

**Acceptance criteria:**

- Each catalogue contains Code, Name, Active? and Sort with the specified types, defaults and capacities, and exactly its two specified initial records.
- A referenced Code cannot be changed; an inactive record remains readable through historical references, while new consuming selections exclude it.
- Administrators can maintain the four-field forms; unauthorized catalogue writes are refused and enabled audit records the permitted changes.

**Specification references:** Specification 6.1–6.2 and 11; target additions, no catalogue package definition supplied.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### CFG-02 — Create the Four Profile Object Definitions

**Task ID:** CFG-02

**Title:** Create the Four Profile Object Definitions

**Category:** Application and object configuration

**Objective:** Provide the mutually referenced object definitions needed by the profile configuration.

**Detailed scope:** Add the four profile object definitions in the existing approved application. This early structure is needed before the authoring, published-version and Role relationships can be configured; it assigns no native-object reconstruction.

**Configuration instructions:**

1. Create Position Code (TG_PositionCodeObject), Published Position Code (TG_PublishedPositionCodeObject), Position Code Role Assignment (TG_PositionCodeRoleAssignmentObject) and Published Position Code Role Assignment (TG_PublishedPositionCodeRoleAssignmentObject), using the approved final names. Give all four no inheritance parent. Reuse the existing application; create no new application container.

2. Configure both published object definitions without workflows. The Position Code authoring configuration assignment adds the initial-only workflow; the Role storage assignment adds both Role-row structures. Automatic native identities need no added Id field.

**Deliverable:** the Four Profile Object Definitions configured with the changes listed below.

**Strict technical prerequisites:** None

**Predecessor outputs consumed:** None; this assignment configures its own supplied source inputs.

**Blocked status:** Missing supplied inputs block the affected instructions: placement.

**Task-local missing inputs:**

- **placement:** Approved existing application, final names and absence/presence of equivalent custom definitions are required for the four proposed object additions. The available metadata covers native objects only, so these are proposed additions, not verified missing live objects.

**Recommended implementer role:** Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Role rationale:** Routine object creation is isolated because these definitions must exist before mutually referencing field configurations.

**Acceptance criteria:**

- The four approved custom object definitions are available as relationship targets in the existing application.
- Neither published object has a workflow; native Subject, Group, Employee, Location and Work Groups inheritance is unchanged.

**Specification references:** Specification 4.2 and 7.1–7.4; native baseline JSON objects collection.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### CFG-03 — Configure Position Code Authoring

**Task ID:** CFG-03

**Title:** Configure Position Code Authoring

**Category:** Fields and relationships

**Objective:** Let Administrators maintain working Position Code settings during setup and after completion without changing published configuration.

**Detailed scope:** Add the authoring fields, initial workflow structure and authoring form, including three views of one Groups relationship, protected system controls and native audit. Reserve the Publish link for the separately configured publication operation.

**Configuration instructions:**

1. On Position Code add Code: required text, maximum 255, exact case-sensitive uniqueness, no trim/case-fold and immutable after creation; Login Location Rule: optional M:1 to Login Location Rule, inverse disabled, default NULL, editable by Administrators in Initial Setup and Completed, new selections Active?=TRUE; Groups: optional M:N to SysGroupEntity, inverse disabled, empty initially; Current Published Version: optional M:1 to Published Position Code, inverse disabled, default NULL, read only and restricted to a complete publication of this same code.

2. Add Created by Paylocity Integration: required Yes/No, default FALSE for manual creation, read only after creation; and Setup Notification Sent: required Yes/No, default FALSE, read only. Employee discovery sets integration origin and successful notification sets its sent flag; ordinary authoring saves do not reset either control. Publishing copies neither flag.

3. Create one initial-only workflow on Position Code with stage Initial Setup, active/nonterminal status using the supplied native label, Person Responsible=Administrators through the supplied binding, and terminal result Completed. Configure the supplied due-date/default-email decision without adding an assumed deadline, reminder or escalation. Add the Publish action identity but keep it unavailable for execution until the complete publication operation is bound. Add no cancellation, rejection, return or reopen action.

4. Add authoring form containers for Initial Setup and Completed. Show Code read only after creation, editable Login Location Rule, and three subtype-filtered grids named Security Groups, Training Workgroups and Document Distribution Groups over the single Groups relation. Each grid changes only its own subtype and preserves selections in the other two; exclude Roles. Show the hint: HOME_PARENT uses the Home Location parent and falls back to Home Location when no parent exists.

5. Show Current Published Version and the read-only Published Versions history from the published owner relation. Show the Role Assignments inverse through the supplied deferred-control binding; Role entry/execution remains disabled until the deferred feature is approved. Keep Source Employees, from the helper inverse, as a background read-only support grid and Employees, from the current-code inverse, as separate read-only usage navigation. Show that working edits may differ from Current Published Version. Place one Publish link in Initial Setup and Completed; the publication assignment owns its execution binding.

6. Enable supported native audit for mutable authoring values and associations. Form controls keep Current Published Version, origin, sent flag and source/history grids read only; the separate record-security assignment owns enforcement through API, imports and direct access. Completed remains editable for Administrators and Save never creates a version or restarts the workflow.

**Deliverable:** Position Code Authoring configured with the changes listed below.

**Strict technical prerequisites:** CFG-01, CFG-02, CFG-04, CFG-05, CFG-07

**Predecessor outputs consumed:** CFG-01 — Configure the Catalogue Choices and Maintenance; CFG-02 — Create the Four Profile Object Definitions; CFG-04 — Configure Published Position Code Records; CFG-05 — Configure the Authoring and Published Role Structures; CFG-07 — Configure Employee Profile Fields and Support Display

**Blocked status:** Missing supplied inputs block the affected instructions: authoringControls, workflow, subtypes, audit. The named predecessor configuration outputs must also exist before dependent steps.

**Task-local missing inputs:**

- **authoringControls:** Final field names, exact case-sensitive unique-Code enforcement and Code-after-creation immutability bindings are required for authoring field controls. Code capacity 255 is the proposed target, not a verified native maximum.
- **workflow:** Initial Setup and Publish system names, the actual active/nonterminal status label, Administrators responsibility/fallback binding and an explicit due-date/default-email decision are required to finish the initial workflow. Completed edit/link support must be supplied; no due-date value is authorized yet.
- **subtypes:** Native selector predicates for SysSecurityGroupEntity, FragApplication_WorkGroupsObject and DocCtrl_DistributiGroupObject are required for the three filtered Groups grids. Role ancestry alone does not establish filter syntax.
- **audit:** Supported native audit settings and retention for authoring scalar/relationship changes, and native field/form bindings for the protected controls, are required for audit and non-editable controls.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Role rationale:** Fields, stage-aware authoring and forms form one complete setup outcome. Subtype views and workflow binding require Senior Associate independence.

**Acceptance criteria:**

- Code is required, case sensitive and immutable after creation; new authoring records have no rule/current publication and both origin controls use their defined defaults.
- Initial Setup is the sole active stage and Completed is a terminal result; no incomplete Publish action is exposed for execution.
- Administrators can edit working rule/Groups in Initial Setup and Completed; editing one filtered Groups grid preserves the other categories and leaves all published records unchanged.
- The form separates working settings, published history, ordinary Employees and Source Employees; audit captures supported authoring changes.

**Specification references:** Specification 7.1, 9.1 and 11; native metadata does not contain these proposed forms or workflow.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### CFG-04 — Configure Published Position Code Records

**Task ID:** CFG-04

**Title:** Configure Published Position Code Records

**Category:** Fields and relationships

**Objective:** Provide a read-only record of each published profile configuration.

**Detailed scope:** Add the published-version fields, its owner/history relationship, scoped version identity and review form. The publication operation creates values and independent copies; this assignment supplies their storage and presentation.

**Configuration instructions:**

1. On Published Position Code add Position Code: required M:1 to Position Code, inverse Published Versions enabled, fixed after creation; Version Number: required positive integer, no static default, read only; Login Location Rule: required M:1 to Login Location Rule, inverse disabled, read only; Groups: optional M:N to SysGroupEntity, inverse disabled, read only. Enforce uniqueness of (Position Code, Version Number) using the supplied native constraint. The publication operation allocates first number 1 and subsequent maximum+1.

2. Configure the supplied native display expression to display the owning Position Code.Code and Version Number. Add a read-only Published Position Code form showing that identity, source Position Code, Login Location Rule, Groups, Role Assignments from the published child-owner inverse and Employees from Employee.Position Code Version. Configure the latter two controls only after their owning relationship outputs exist.

3. Remove manual create, edit and Draft commands from the proposed version screen and history controls. Add no workflow or Predecessor field. Retain historical catalogue references on display after a choice is deactivated. The record-security assignment provides immutability beyond the form; publication is the only configured creation path.

**Deliverable:** Published Position Code Records configured with the changes listed below.

**Strict technical prerequisites:** CFG-01, CFG-02, CFG-05, CFG-07

**Predecessor outputs consumed:** CFG-01 — Configure the Catalogue Choices and Maintenance; CFG-02 — Create the Four Profile Object Definitions; CFG-05 — Configure the Authoring and Published Role Structures; CFG-07 — Configure Employee Profile Fields and Support Display

**Blocked status:** Missing supplied inputs block the affected instructions: versionIdentity, versionForm. The named predecessor configuration outputs must also exist before dependent steps.

**Task-local missing inputs:**

- **versionIdentity:** Supported positive-integer field configuration, unique (Position Code, Version Number) constraint and native display expression combining Position Code.Code with Version Number are required to finish version identity. Final custom field names remain supplied inputs.
- **versionForm:** Approved review-form placement and support principal bindings are required for the new published-version screen; native data-access enforcement belongs to the record-security assignment.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Role rationale:** Version-scoped uniqueness and related-value display need Senior Associate judgment; transaction effects are owned separately.

**Acceptance criteria:**

- Position Code, Version Number and Login Location Rule are required; the complete version relation and Groups collection can be populated only through the approved publication path.
- Repeated version numbers for one code are refused; the same number can identify a version of a different code.
- Authorized review shows the captured scalar, group and child configuration without manual version/Draft creation or editing.

**Specification references:** Specification 7.2 and 11.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### CFG-05 — Configure the Authoring and Published Role Structures

**Task ID:** CFG-05

**Title:** Configure the Authoring and Published Role Structures

**Category:** Fields and relationships

**Objective:** Reserve separate authoring and immutable version storage for Role choices without enabling deferred Role execution.

**Detailed scope:** Add both three-field Role association structures, their inverse grids and bounded forms. Configure owner-scoped uniqueness and inactive-choice retention; keep the deferred authoring controls unavailable until Role use is approved.

**Configuration instructions:**

1. On Position Code Role Assignment add Position Code: required M:1 to Position Code, fixed after row creation, inverse Role Assignments enabled; Role: required M:1 to existing SysRoleEntity, inverse disabled, no default; Assignment Location Basis: required M:1 to Assignment Location Basis, inverse disabled, no default, new selections Active?=TRUE. Enforce one Role per Position Code. Configure Administrator authoring edit capability for Initial Setup and Completed behind the deferred-feature restriction.

2. On Published Position Code Role Assignment add Published Position Code: required M:1 to Published Position Code, fixed after creation, inverse Role Assignments enabled; Role: required M:1 to SysRoleEntity, inverse disabled, read only; Assignment Location Basis: required M:1 to Assignment Location Basis, inverse disabled, read only. Enforce one Role per Published Position Code. Publication supplies the copied values; retain historical inactive basis references.

3. Add a three-field authoring Role form and a read-only three-field published Role review form. Fix the owner after creation on both. Prevent manual creation/editing of published rows, and add no workflow. Enable supported native audit of mutable authoring Role values. Display/entry of authoring Role rows remains unavailable until the deferred design is completed; create no unqualified group-membership alternative.

**Deliverable:** the Authoring and Published Role Structures configured with the changes listed below.

**Strict technical prerequisites:** CFG-01, CFG-02

**Predecessor outputs consumed:** CFG-01 — Configure the Catalogue Choices and Maintenance; CFG-02 — Create the Four Profile Object Definitions

**Blocked status:** Missing supplied inputs block the affected instructions: roleBindings. The named predecessor configuration outputs must also exist before dependent steps.

**Task-local missing inputs:**

- **roleBindings:** Final Role field names, native SysRoleEntity selector binding, owner-plus-Role uniqueness control, supported authoring audit and the binding that disables deferred Role entry are required for these storage/form changes. Role immediate inheritance and executable assignment semantics remain unverified and are not assigned here.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Role rationale:** The two small association structures and forms are one bounded storage outcome, with owner-scoped rules and deferred-control handling.

**Acceptance criteria:**

- Both three-field structures expose their correct owner-side Role Assignments inverse; each owner can reference a Role only once.
- The published structure is read only and retains copied Role/basis references independently of authoring rows.
- Role storage is available to publication, but the deferred Role assignment feature cannot grant access or accept unauthorized authoring entries.

**Specification references:** Specification 7.3–7.5, 11 and Role deferral in 12.4.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### CFG-07 — Configure Employee Profile Fields and Support Display

**Task ID:** CFG-07

**Title:** Configure Employee Profile Fields and Support Display

**Category:** Fields and relationships

**Objective:** Retain the current code, initial setup participation and captured preparation evidence on each Employee.

**Detailed scope:** Add the seven Employee extensions, their three declaring inverses and a restricted support display. Configure their defaults, field protection and supported native audit; native employee identity, JobCode and Location properties are reused.

**Configuration instructions:**

1. On SysEmployeeEntity add Managed by Employee Integration? (TGIntegrationManaged): required Yes/No, default FALSE; Position Code (TGPositionCode): optional M:1 to Position Code, default NULL, inverse Employees enabled; [Helper] Create New Position Code Relation (TGHelperCreateNewPositionCodeRelation): optional M:1 to Position Code, default NULL, inverse Source Employees enabled. Each helper has at most one target; many Employees may reference the same Position Code. The current-code and helper relations are distinct stored fields.

2. Add Position Code Version (TGPositionCodeVersion): optional/write-once M:1 to Published Position Code, default NULL, inverse Employees enabled; Initial Login Location (TGInitialLoginLocation): optional M:1 to SysLocationEntity, inverse disabled, default NULL; Initial Profile Home Location (TGInitialProfileHomeLocation): optional M:1 to SysLocationEntity, inverse disabled, default NULL; Initial Profile Applied On (TGInitialProfileAppliedOn): optional Date/Time, timezone enabled, default NULL. Both location references become required when a checkpoint is written; code/version are required by preparation rather than by initial Employee save.

3. Configure all seven fields as maintained by trusted native automation and read only for ordinary edits. Current Position Code may change; a captured Position Code Version is never replaced automatically; helper remains as origin evidence after capture; preparation references and timestamp remain after completion. The actual record-matching and checkpoint writes belong to their automation assignments, not field defaults.

4. Add an authorized-support Employee form section showing all seven fields. Label Position Code as current association, Position Code Version as retained initial configuration, and the helper as initial workflow participation. Show Initial Login Location, Initial Profile Home Location and Initial Profile Applied On read only; explain that the timestamp means preparation completed, not account activation. Offer no manual ready/checkpoint reset. Enable the supplied native audit settings for these extension values and associations, including helper changes.

**Deliverable:** Employee Profile Fields and Support Display configured with the changes listed below.

**Strict technical prerequisites:** CFG-02

**Predecessor outputs consumed:** CFG-02 — Create the Four Profile Object Definitions

**Blocked status:** Missing supplied inputs block the affected instructions: employeeBindings, employeeAudit. The named predecessor configuration outputs must also exist before dependent steps.

**Task-local missing inputs:**

- **employeeBindings:** Approved final names for the seven proposed Employee extensions, actual Employee form/section target and supported relationship inverses are required for schema and support placement. Date/time timezone settings and write-once/read-only controls must be supplied for the captured version and checkpoint.
- **employeeAudit:** The extracted SysEmployeeEntity definition returned IsAuditEnabled=FALSE. Supported native audit scope/retention for only the new fields and their relationships is needed before enabling the specified evidence capture; do not assume all native Employee field audit must change.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Role rationale:** Seven native-object extensions, inverse ownership and their support display require Senior Associate care, with deeper direct-access security kept separate.

**Acceptance criteria:**

- A manually created Employee defaults Managed by Employee Integration? to FALSE and all six references/date values to NULL.
- Several Employees referencing one helper target appear in that code’s Source Employees grid; current-code Employees and captured-version Employees use their distinct inverses.
- Support can read the seven-field section under approved access; no form user can set a completion checkpoint or replace a captured version, and supported extension changes are audited.

**Specification references:** Specification 8.1–8.3, 11 and additional fields in 13.4; baseline Employee metadata IsAuditEnabled=FALSE.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### SEC-02 — Configure Profile and Employee Access Controls

**Task ID:** SEC-02

**Title:** Configure Profile and Employee Access Controls

**Category:** Security

**Objective:** Permit governed authoring and automation while protecting published versions and Employee information on every required access path.

**Detailed scope:** Add the profile object permissions and record/field restrictions for Administrators, support, Boomi and trusted native processing. Enforce immutable publications and protected Employee fields through forms, direct URLs, API, imports, search and export.

**Configuration instructions:**

1. Grant Administrators Position Code authoring create/read/edit in Initial Setup and Completed and execution of Publish, plus read access to Published Position Code and published Role rows. Grant no manual published-record or child creation/edit/delete. Keep authoring Code immutable after creation and Current Published Version, origin/sent controls, helper/history grids and all seven Employee extensions protected from ordinary direct writes. Authoring Role entry remains disabled while its feature is deferred.

2. Restrict Boomi to supported EmployeeUserAccess writes and approved Object Data API Employee readiness reads. Deny Boomi profile publication, custom checkpoint/capture writes and catalogue/profile maintenance. Grant the native handler/service context only the Employee relation, profile creation, publication-copy, first-release and membership writes needed by its declared operations. Trusted publication may construct its graph inside the controlled transaction; committed published records and children have no later edit path.

3. Grant support only approved read navigation to Employee/profile/native-error evidence and the supplied existing retry operation, not general publication or checkpoint editing. Ordinary users retain their existing Employee access and receive no provisioning-administration grant. Protect Source Employees, ordinary Employees and captured-version Employees drill-through using the supplied personal-data scope.

4. Apply the same restrictions to direct URL, API, import, search and export access as to the forms. Bind editable Completed authoring and Publish permissions to the supplied native terminal identity. Configure immutable-version/child controls and write-once Employee capture/checkpoint restrictions at the record/field layer, not merely by hiding form controls.

**Deliverable:** Profile and Employee Access Controls configured with the changes listed below.

**Strict technical prerequisites:** CFG-03, CFG-04, CFG-05, CFG-07

**Predecessor outputs consumed:** CFG-03 — Configure Position Code Authoring; CFG-04 — Configure Published Position Code Records; CFG-05 — Configure the Authoring and Published Role Structures; CFG-07 — Configure Employee Profile Fields and Support Display

**Blocked status:** Missing supplied inputs block the affected instructions: security. The named predecessor configuration outputs must also exist before dependent steps.

**Task-local missing inputs:**

- **security:** Exact Administrators/support/Boomi/service principals and native object, field, record, terminal-state and read-path permission bindings are required for these grants/denials. Support retry authority, delete policy and personal-data search/export scope remain undecided; those permissions stay blocked rather than being broadly granted.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Role rationale:** Cross-object, terminal and personal-data controls need Senior Consultant authority and Principal review.

**Acceptance criteria:**

- An authorized Administrator can edit and publish Position Code in Completed; an unauthorized user cannot execute Publish even through a direct request.
- Committed published fields, Groups and Role children refuse unauthorized changes through forms, API, imports and direct URLs.
- Boomi cannot set custom preparation/capture values; permitted readiness reads work and restricted Employee information remains unavailable through search, export or navigation outside its approved scope.

**Specification references:** Specification 11, field editability in 7 and 13.4, workflow access in 9.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### AUT-01 — Configure Employee Position Code Resolution

**Task ID:** AUT-01

**Title:** Configure Employee Position Code Resolution

**Category:** Automation and services

**Objective:** Associate incoming Employees with the right profile and retain every Employee waiting for a new Position Code.

**Detailed scope:** Add the Employee Action Handler for integration-origin marking, exact code matching, first capture, missing-code creation and helper maintenance. Add the reusable initial login-location calculation used by preparation, without applying memberships inside the creation handler.

**Configuration instructions:**

1. Add a proposed Employee create Action Handler that checks the supplied allowlisted integration actor and sets Managed by Employee Integration?=TRUE only for that authorized new Employee. Leave manual/nonintegration creation FALSE. Guard internal saves to prevent repeated origin enrollment or workflow initialization. Do not enroll existing Employees in bulk.

2. When JobCode is empty, skip FETCHVALUE and creation and leave/clear current Position Code. When populated, FETCHVALUE Position Code where Code equals JobCode exactly and case sensitively, without trimming or case folding, into Employee.Position Code. An ambiguous result or failed search is an error/hold, not a no-match. If the resolved code has Current Published Version and Employee.Position Code Version is empty, capture that publication at creation handling; do not leave the choice to a later scheduled worker.

3. If the resolved code is in Initial Setup with no publication, set Employee.[Helper] Create New Position Code Relation to it and leave version empty. Only on a genuine no-match, use the supplied GETRELATED create/resolve operation to create a Position Code with Code=JobCode, Created by Paylocity Integration=TRUE, Setup Notification Sent=FALSE, rule/current publication NULL and initial workflow started. Set the Employee helper to that code; current Position Code may remain NULL until first publication. Create no published version here.

4. Use exact-Code uniqueness and the supplied per-code serialization to recover concurrent creation by relating all Employees to the same new authoring record. After helper assignment, wait for its Source Employees inverse to be available and invoke the guarded setup notification. Recheck lifecycle/current version against first publication under the shared control: the Employee must either join the initial release or capture its committed active version into eligible empty current-code/version fields afterward.

5. For an integration-managed Employee whose JobCode changes or clears before any capture, clear/re-resolve the helper while its prior code remains in Initial Setup so the old Source Employees grid loses stale participation. After capture retain helper origin and the captured version even if JobCode changes/clears; update/clear only current Position Code navigation. A current-code/captured-version mismatch before preparation holds review. Unrelated handler saves never recapture, restart workflow or replay preparation.

6. Add one reusable location calculation: require a valid captured version and Employee.Location with nonempty LocationCode; compare Login Location Rule.Code. SAME_HOME returns Employee.Location. HOME_PARENT returns Employee.Location.ParentLocation or, when absent, Employee.Location. Require the returned location to have a valid nonempty code; hold missing/unknown rule or invalid location. Return the reference only. The membership preparation routine owns stored login/home snapshots and its final timestamp.

**Deliverable:** Employee Position Code Resolution configured with the changes listed below.

**Strict technical prerequisites:** CFG-01, CFG-03, CFG-04, CFG-05, CFG-07

**Predecessor outputs consumed:** CFG-01 — Configure the Catalogue Choices and Maintenance; CFG-03 — Configure Position Code Authoring; CFG-04 — Configure Published Position Code Records; CFG-05 — Configure the Authoring and Published Role Structures; CFG-07 — Configure Employee Profile Fields and Support Display

**Blocked status:** Missing supplied inputs block the affected instructions: event, transaction, locationCalculation. The named predecessor configuration outputs must also exist before dependent steps.

**Task-local missing inputs:**

- **event:** Allowlisted Boomi actor identity, exact Employee creation/update/internal-save event bindings, FETCHVALUE relationship-return signature and case-sensitive comparison, GETRELATED create/resolve/workflow-start binding and recursive-save guard are required for handler execution. JobCode alone is not origin evidence.
- **transaction:** Supported shared per-code serialization, exact-Code uniqueness recovery and initial-publication race binding are required to create one authoring record and capture the committed first release safely. The native operations are unverified; no custom locking store is authorized.
- **locationCalculation:** Supported callable native relationship calculation and error/hold binding are required to return Employee.Location or ParentLocation as a valid Initial Login Location candidate without writing the preparation checkpoint.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Role rationale:** Record discovery, workflow creation and publication races form the user-requested combined handler outcome; high-consequence concurrency requires Senior Consultant configuration.

**Acceptance criteria:**

- A nonempty JobCode on manual creation does not mark integration origin. Blank code does not search/create; ambiguous or failed search does not create a Position Code.
- Exact case-distinct codes remain distinct; simultaneous Employees with one new exact code share one authoring record/workflow and appear in its Source Employees grid.
- An existing active publication is captured once; an existing unpublished code joins the helper cohort without another code or workflow. A racing first publication leaves no eligible Employee without capture.
- Pre-capture code changes remove stale helper participation; post-capture code changes retain the original helper/version and never reapply memberships.
- SAME_HOME returns Home Location; HOME_PARENT returns the parent or Home Location fallback. Missing rule/location codes hold calculation and no checkpoint is written here.

**Specification references:** Specification 8.1–8.2, 7.1 and Employee extensions in 13.4.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### AUT-04 — Configure the One-Time Position Code Setup Message

**Task ID:** AUT-04

**Title:** Configure the One-Time Position Code Setup Message

**Category:** Notifications and automation

**Objective:** Notify Administrators once when an integration-created Position Code has Employees waiting for setup.

**Detailed scope:** Add the Position Code Setup Required message template and guarded native delivery after a helper/source link exists. Set the sent flag only after delivery succeeds and use the supplied delivery deduplication mechanism for retry.

**Configuration instructions:**

1. Create the proposed Position Code Setup Required template. Include the Position Code link, Employees available in Source Employees at send time, a link to the live Source Employees grid, and instructions to configure Login Location Rule and the security/training/document group selections, save the record and click Publish. Address current users in the Administrators group through the supplied recipient expression. Add no CC/BCC, reminder, escalation or publication-completion template.

2. Bind the native notification operation to the Employee handler’s completed helper/inverse handoff. Require Created by Paylocity Integration=TRUE, Setup Notification Sent=FALSE and at least one linked Source Employee before sending; otherwise send nothing. The association must exist before recipient content is evaluated.

3. Use the supplied native delivery deduplication key/operation; on successful delivery set Setup Notification Sent=TRUE. On failure leave FALSE and retain native failure evidence for retry. Close the successful-send/failed-flag window using that supplied native mechanism; do not add a custom message log. Manual codes, later source arrivals after success and subsequent publication send no additional setup message. Apply the supplied default-email disposition.

**Deliverable:** the One-Time Position Code Setup Message configured with the changes listed below.

**Strict technical prerequisites:** CFG-03, CFG-07, AUT-01

**Predecessor outputs consumed:** CFG-03 — Configure Position Code Authoring; CFG-07 — Configure Employee Profile Fields and Support Display; AUT-01 — Configure Employee Position Code Resolution

**Blocked status:** Missing supplied inputs block the affected instructions: notification. The named predecessor configuration outputs must also exist before dependent steps.

**Task-local missing inputs:**

- **notification:** Actual template identity, current-Administrators recipient expression, native delivery/deduplication operation and success evidence covering the send/flag failure window are required to bind safe delivery. Native default creation/completion email settings must be supplied to avoid unintended additional mail.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Role rationale:** Delivery ordering and safe retry require Senior Consultant judgment even though the template itself is routine.

**Acceptance criteria:**

- The message shows the code and live source-grid links and at least one actual source Employee before it is delivered to Administrators.
- Manual creation, an empty Source Employees grid and an already sent flag each suppress delivery.
- A failed send remains retryable; a successful send followed by retry produces one successful setup message and a TRUE sent flag.

**Specification references:** Specification 9.4 and 8.1 helper handoff.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### AUT-07 — Configure Initial and Subsequent Position Code Publication

**Task ID:** AUT-07

**Title:** Configure Initial and Subsequent Position Code Publication

**Category:** Automation and services

**Objective:** Publish one complete immutable configuration and release waiting Employees only on the first successful publication.

**Detailed scope:** Add the common publication operation, independent version/Role copies, first-source writeback, workflow completion and both Publish bindings. Put all validation before consequential changes and keep version activation, initial Employee writeback and workflow completion in the supplied single controlled change.

**Configuration instructions:**

1. Create one proposed publication operation shared by initial workflow Publish and the Completed form Publish link. Recheck authorized Administrator, saved latest authoring revision, per-code lock and attempt identity before copying. Initial publication requires Initial Setup and Current Published Version=NULL; later publication requires Completed and a nonnull Current Published Version. Reject stale/duplicate/uncertain attempts for reconciliation rather than create another version blindly.

2. Before changing any publication state require an active Login Location Rule, valid complete Groups selections excluding Role-as-group execution, unique Roles within the code and a valid active Assignment Location Basis on every Role row. Hold any profile needing the deferred location-qualified Role behavior. These publication guards own completion validation; form requiredness is only authoring assistance.

3. Within the supplied controlled change allocate Version Number=max published number for this Position Code+1, first 1. Create Published Position Code.Position Code=this code, Version Number=allocated value, Login Location Rule=authoring rule, and Groups=an independent complete copy of authoring Groups. For each authoring Role Assignment create an independent published child with Published Position Code=new version, Role=source Role, Assignment Location Basis=source basis. Copy neither origin/sent controls nor helper/source links. Do not alter authoring values or prior versions.

4. After the complete graph validates set Current Published Version to the new version. On first publication select Source Employees only through Employee.[Helper] Create New Position Code Relation. Recheck each helper target, Managed by Employee Integration?=TRUE, onboarding eligibility, exact JobCode=Code, Position Code Version=NULL and Initial Profile Applied On=NULL. Fill an empty Position Code with this code or retain a matching value; hold a conflicting current-code record for support, never overwrite it. Fill only an eligible empty Position Code Version with the new version. Retain helper links and never use the ordinary Employees grid as this work population.

5. On initial publication complete Initial Setup to terminal Completed together with the immutable graph, current pointer and eligible Employee assignments. Roll back all those required effects on failure while retaining saved authoring edits and Initial Setup. On later publication skip Source Employee writeback and workflow completion; retain Completed and all captured Employee versions. Failure preserves the previous current version and Completed. Serialize helper arrivals against first publication so each Employee is released here or captures the committed version afterward.

6. Bind the initial Publish action and form link to that common operation. Show it only to authorized Administrators, with the correct Initial Setup or Completed branch; recheck permission during execution. After successful commit hand eligible Employees to the configured preparation continuation, never inside the publication transaction. Add no cancellation/reopen path or custom completion notice. The continuation assignment owns the native dispatch binding.

7. Configure these proposed user messages for the named guards: unauthorized—You are not authorized to publish this Position Code.; missing/inactive rule—Select an active Login Location Rule before publishing.; unsaved/stale revision—Save your changes and reload the latest Position Code before publishing.; invalid groups/duplicate Role/basis—Review the group and Role selections before publishing.; deferred Role—This profile requires Role setup that has not yet been completed.; lifecycle/pointer mismatch—The Position Code status and published version do not agree. Contact support.; required publication/writeback failure—Publication could not be completed. The previous published setup remains unchanged.; duplicate/in-progress/uncertain attempt—A publication attempt is already being processed or needs its result checked.

**Deliverable:** Initial and Subsequent Position Code Publication configured with the changes listed below.

**Strict technical prerequisites:** CFG-03, CFG-04, CFG-05, CFG-07, SEC-02

**Predecessor outputs consumed:** CFG-03 — Configure Position Code Authoring; CFG-04 — Configure Published Position Code Records; CFG-05 — Configure the Authoring and Published Role Structures; CFG-07 — Configure Employee Profile Fields and Support Display; SEC-02 — Configure Profile and Employee Access Controls

**Blocked status:** Missing supplied inputs block the affected instructions: publication, publishLink, publicationSelection. The named predecessor configuration outputs must also exist before dependent steps.

**Task-local missing inputs:**

- **publication:** Supported operation binding, saved-revision check, per-code lock, version-number constraint, retry identity/reconciliation and atomic graph/pointer/Employee/workflow rollback must be supplied. These are unresolved native capabilities, not approved custom transaction syntax.
- **publishLink:** Exact Initial Setup Publish workflow-action binding and Completed form-link mechanism, active status mapping, responsible-person/due-date/default-email decisions and after-commit handoff are required to bind execution. Authoring scaffolding supplies the fields, screen and stage identities.
- **publicationSelection:** Supported group-type validation, active catalogue checks, Role uniqueness/basis checks and exact onboarding-eligible Employee status predicate are required for publication validation and source release. Profiles needing deferred location-qualified Roles must remain blocked.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Role rationale:** Copy, source writeback and completion are inseparable parts of one publication outcome and are kept together to preserve atomicity. Advanced concurrency and cross-object completion need Senior Consultant implementation and Principal review.

**Acceptance criteria:**

- The first Publish creates version 1 with independent rule/Groups/Role values, fills eligible source Employees and ends Initial Setup in Completed together; any required failure restores all those effects.
- A source Employee with a populated version is never overwritten; a mismatched helper/JobCode is not released; conflicting current-code records are held for review.
- Later Publish creates the next version while staying Completed and preserves all existing Employee captures and prior version graphs.
- Concurrent clicks, retries and helper arrivals use the supplied controlled outcome without duplicate versions or lost eligible source Employees.
- Each named guard produces its configured message before activation/completion; no custom completion notification is sent.

**Specification references:** Specification 7.2–7.4, 9.1–9.3 and publication requirements in 12.3.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### AUT-08 — Configure Initial Employee Membership Preparation

**Task ID:** AUT-08

**Title:** Configure Initial Employee Membership Preparation

**Category:** Automation and services

**Objective:** Prepare the initial memberships and login instruction once without removing unrelated access.

**Detailed scope:** Add the shared native preparation routine for eligible integration-managed Employees. Under an Employee lock add only missing desired memberships, store the initial login/home references and stamp completion last; retry finishes incomplete work without replaying completed setup.

**Configuration instructions:**

1. Add one proposed shared preparation routine for creation capture, first publication and retry callers. Under an Employee lock recheck Managed by Employee Integration?=TRUE, Initial Profile Applied On=NULL, Employee not archived/deleted, current JobCode resolves to current Position Code, populated Position Code Version belongs to that code, valid Employee.Location with nonempty LocationCode, and no unresolved required Role behavior. Hold invalid/mismatched records instead of changing capture.

2. Read desired Groups from the captured Employee.Position Code Version.Groups. Through the supplied native membership operation add the Employee only to groups where membership is absent. Preserve every unrelated membership; never replace MemberOf or remove unlisted groups. An empty profile category means unmanaged, not removal. Retry compares current membership and adds only remaining missing associations.

3. Invoke only the reusable location calculation: SAME_HOME returns Employee.Location; HOME_PARENT returns its ParentLocation or Employee.Location when no parent exists. Store Initial Profile Home Location=current Employee.Location and Initial Login Location=the valid returned location; require both codes to be nonempty. Write Initial Profile Applied On=server date/time with timezone support only after every required membership and reference write succeeds.

4. On partial failure retain successful memberships, leave Initial Profile Applied On empty and expose native failure evidence; account activation remains held. Retry safely completes missing writes. A populated timestamp makes subsequent calls a no-op and is never cleared by later feeds. Do not call the Employee discovery handler from this routine.

**Deliverable:** Initial Employee Membership Preparation configured with the changes listed below.

**Strict technical prerequisites:** CFG-07, AUT-01

**Predecessor outputs consumed:** CFG-07 — Configure Employee Profile Fields and Support Display; AUT-01 — Configure Employee Position Code Resolution

**Blocked status:** Missing supplied inputs block the affected instructions: membership, preparationEligibility. The named predecessor configuration outputs must also exist before dependent steps.

**Task-local missing inputs:**

- **membership:** Verified native Members/MemberOf add operation before user access exists, Employee lock, membership read/compare binding, native error evidence and transaction/timezone behavior are required for membership writes and checkpointing. User-confirmed M:N structure is not proof of a writable setter.
- **preparationEligibility:** Exact non-archived/non-deleted/onboarding-eligible predicate, current-code/version comparison and deferred-Role hold binding are required for eligibility. The predecessor provides the reusable login-location result, not a membership operation.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Role rationale:** Native membership-before-access behavior, locking and safe partial-failure recovery require Senior Consultant authority.

**Acceptance criteria:**

- Eligible Employees receive every desired missing group once while unrelated memberships remain unchanged.
- Partial failure leaves the checkpoint empty; retry completes the missing associations/references without duplication or removing successful access.
- The timestamp is written only after valid home/login snapshots and all required group writes; completed Employees and code/version mismatches do not receive replayed setup.

**Specification references:** Specification 8.2 and 13.4.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### AUT-09 — Configure Employee Preparation Continuation

**Task ID:** AUT-09

**Title:** Configure Employee Preparation Continuation

**Category:** Automation and services

**Objective:** Run preparation only after the inbound Employee or publication changes have committed and resume incomplete eligible records.

**Detailed scope:** Add the native after-commit dispatch and scheduled Event Service that invoke the shared preparation routine. Apply explicit selection and execution controls without selecting a later profile version or resetting completed Employees.

**Configuration instructions:**

1. Bind the completed Employee-capture event and successful first-publication handoff to invoke membership preparation after their transactions commit. Pass the eligible Employee identity only; consume its already captured Position Code Version. Never substitute the latest current publication during continuation.

2. Add a proposed native Event Service selecting Managed by Employee Integration?=TRUE, Initial Profile Applied On=NULL, not archived/deleted, populated Position Code Version belonging to the current resolved Position Code, valid current Home Location/code and no unresolved required Role. Invoke the shared preparation routine for each selected Employee under the supplied exclusion/retry controls; its lock rechecks eligibility before writes.

3. Configure the supplied interval/timezone/retry policy and existing native execution-error destination/owner. Failures remain retryable with an empty checkpoint and visible native error evidence. Completed Employees are excluded, and no continuation resets a checkpoint, starts a Position Code workflow or creates an Employee.

**Deliverable:** Employee Preparation Continuation configured with the changes listed below.

**Strict technical prerequisites:** AUT-01, AUT-07, AUT-08

**Predecessor outputs consumed:** AUT-01 — Configure Employee Position Code Resolution; AUT-07 — Configure Initial and Subsequent Position Code Publication; AUT-08 — Configure Initial Employee Membership Preparation

**Blocked status:** Missing supplied inputs block the affected instructions: continuation, cadence. The named predecessor configuration outputs must also exist before dependent steps.

**Task-local missing inputs:**

- **continuation:** Verified after-commit invocation binding for Employee capture and successful initial publication, Event Service executable/callable binding, per-Employee exclusion and native failure/retry owner are required to wire the service.
- **cadence:** Approved Event Service interval, timezone and retry/backoff limits are required for scheduling. Five minutes is the proposed cadence only, not an authorized fixed setting; the service must remain unscheduled until the value is supplied.

**Recommended implementer role:** Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Role rationale:** Binding native events, scheduled selection and a shared routine is moderately complex Consultant work once its native contracts are supplied.

**Acceptance criteria:**

- No membership preparation runs while Employee creation or first publication remains uncommitted.
- The configured service selects ready incomplete Employees and calls the shared routine using their captured version; completed or mismatched records are excluded.
- The approved schedule and native error destination are configured, and retry resumes partial preparation without another Employee or workflow.

**Specification references:** Specification 8.1–8.2 and 9.2 after-commit continuation.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### INT-01 — Configure Establishment Assignment in Boomi

**Task ID:** INT-01

**Title:** Configure Establishment Assignment in Boomi

**Category:** Integrations

**Objective:** Deliver the correct Home Location for new employees, relocations and job changes while honoring authorized corrections.

**Detailed scope:** Add the supplied ordered establishment decision to the Boomi mapping: established work/assigned site first, otherwise San Diego for remote California residents, otherwise the job function’s designated main established site. Configure valid LocationCode mappings and hold incomplete or conflicting cases.

**Configuration instructions:**

1. Add a proposed Boomi establishment mapping before HomeLocationCode delivery, triggered for new employees, relocation and job change. First determine whether the employee is assigned to or works at an established site. When yes map that site to its valid Intelex LocationCode and end this calculation, even for a California resident. An unknown site condition is not a No answer; hold it. Hold conflicting/multiple sites until the supplied resolution rule selects an unambiguous site.

2. Only when no established assigned/work site applies, treat the employee as remote. If residence state is California, map to the San Diego establishment’s supplied LocationCode. Otherwise map the employee’s job function to its designated main established site and then to LocationCode. Missing residence or missing/ambiguous applicable job-function/site mapping holds the affected creation/update; choose no corporate or San Diego default. No reporting-chain traversal is part of this decision.

3. Configure the supplied durable approved correction to override the calculated result until its explicit authorized clear condition. Preserve actor/reason and rule/version/input evidence through the existing supplied native support mechanism. An Intelex Location edit alone is not a durable correction. Deliver only a nonempty unambiguous HomeLocationCode. This Employee establishment mapping does not reapply Position Code memberships or define event-specific Incident Management attribution.

**Deliverable:** Establishment Assignment in Boomi configured with the changes listed below.

**Strict technical prerequisites:** None

**Predecessor outputs consumed:** None; this assignment configures its own supplied source inputs.

**Blocked status:** Missing supplied inputs block the affected instructions: establishment, correction.

**Task-local missing inputs:**

- **establishment:** Exact Paylocity fields for assigned/actual site, established-site classification, residence state and job function; all site-to-LocationCode values including San Diego; job-function-to-main-site values and maintenance owner; and conflicting/multiple-site resolution are required to bind the decision. Job function is not assumed to equal JobCode.
- **correction:** The approved durable upstream correction authority, actor/reason evidence fields, Boomi read binding and approver/clear/precedence values are required to implement protected corrections. No correction store or custom EmployeeUserAccess override field is authorized.

**Recommended implementer role:** Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Role rationale:** The supplied ordered mapping is moderate integration work; correction storage/authority design remains external.

**Acceptance criteria:**

- An established site assignment takes precedence over California residence.
- A remote California resident maps to San Diego; a remote non-California resident maps to the designated main site for their job function.
- Required unknown/conflicting values hold the affected delivery, and a valid approved correction survives later feeds until its authorized clear condition.

**Specification references:** Specification 10.1; user-supplied establishment flow dated 2026-10-28.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### INT-02 — Configure Direct Employee Delivery in Boomi

**Task ID:** INT-02

**Title:** Configure Direct Employee Delivery in Boomi

**Category:** Integrations

**Objective:** Create pre-start Employees directly and update the same records through the supported EmployeeUserAccess contract.

**Detailed scope:** Add the direct Boomi POST/PATCH mapping and pre-start selection. Send Position Code through JobCode, establishment through HomeLocationCode and only supported properties; create Employee without user access and leave activation to the readiness-gated operation.

**Configuration instructions:**

1. Add a proposed Boomi Employee delivery mapping to POST /api/v2/EmployeeUserAccess and PATCH /api/v2/EmployeeUserAccess({Employee.Id}) at the supplied tenant host. Map stable employee identifier to EmployeeNumber (native Employee.Number), Position Code to JobCode (native Employee.JobCode), FirstName/LastName, DateOfHire (native DateHired, Date type) and the establishment calculation result to HomeLocationCode. Require these values for selected pre-start creation.

2. For initial employee-only POST set IgnoreUserAccess=TRUE. Omit Groups, all seven custom Employee extensions, password properties and both business-hierarchy input properties. Set RemoveFromUnlistedGroups=FALSE and RemoveFromUnlistedBusinessHierarchies=FALSE on every operation. Apply the supplied SendEmail choice and supported flag values only. Do not request an account or calculate memberships in this mapping.

3. Configure the approved daily/pre-start selection using the supplied timezone, approximately seven-calendar-day window and catch-up bounds; email/SSO may arrive later. On successful POST retain returned native Id for later PATCH; on later employee updates use that same Id, supported changed fields and supplied omission/clear semantics. Do not routinely resend initial login instructions or reset manual login exceptions. The identity-retry operation controls serialization and uncertain delivery; account activation has its own gate.

**Deliverable:** Direct Employee Delivery in Boomi configured with the changes listed below.

**Strict technical prerequisites:** INT-01

**Predecessor outputs consumed:** INT-01 — Configure Establishment Assignment in Boomi

**Blocked status:** Missing supplied inputs block the affected instructions: sourceMapping, feed, flags. The named predecessor configuration outputs must also exist before dependent steps.

**Task-local missing inputs:**

- **sourceMapping:** Final Paylocity/source allowlist, actual source field paths, endpoint host, capacities, DateOfHire calendar-date format and optional omission-versus-clear rules are required for payload binding. EmployeeNumber/name/JobCode/date/establishment are the specified minimum; unsupported mappings must not be invented.
- **feed:** Approved daily feed timing/timezone, seven-calendar-day pre-start window, catch-up/history bounds and source eligibility/status rules are required to enable feed selection; daily/seven days remains proposed until supplied.
- **flags:** Approved SendEmail value (FALSE proposed for SSO), other supported processing flags, termination/leave/rehire/PRL policies and later user-attribute allowlist are required for those mappings. No default revoke/archive behavior is authorized.

**Recommended implementer role:** Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Role rationale:** Direct supported mapping and conditional feed selection are moderately complex Consultant configuration.

**Acceptance criteria:**

- The selected pre-start POST sends the supported minimum with JobCode carrying Position Code, valid HomeLocationCode and IgnoreUserAccess=TRUE.
- Groups, custom Employee fields, passwords and business-hierarchy inputs are absent; both removal controls are FALSE.
- Later intended updates target the retained Employee Id, preserve omission-versus-clear behavior and do not repeat initial membership/login setup.

**Specification references:** Specification 1, 8.1, 10 and 10.2; established EmployeeUserAccess property mapping, not new endpoint capability.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### INT-03 — Configure Employee Delivery Reconciliation and Retry

**Task ID:** INT-03

**Title:** Configure Employee Delivery Reconciliation and Retry

**Category:** Integrations

**Objective:** Resume uncertain delivery against the correct Employee instead of creating a duplicate.

**Detailed scope:** Add per-EmployeeNumber serialization, native Number/Id reconciliation and bounded delivery retry around the direct Boomi request. Distinguish definite no-match, one valid match, ambiguous identity and unknown request outcome.

**Configuration instructions:**

1. Wrap the direct Employee delivery with the supplied per-EmployeeNumber serialization. Before repeating POST reconcile native Employee.Number: zero definite matches permits creation; one valid identity match resumes that Employee.Id; multiple or conflicting matches hold for support. A failed search is not zero matches. Store/resume the supported native Id through the supplied Boomi mechanism.

2. Treat timeout or lost response as an unknown outcome, reconcile before another request and apply the supplied retry/backoff limits. A profile-preparation failure resumes native preparation for the same Employee and never creates another Employee. After known successful delivery retain correlation and endpoint outcome in the supplied native error/support mechanism.

3. Configure changed-number/rehire handling only using the supplied identity policy. Until supplied hold those exceptional records rather than invent a second identity or reuse a mismatched Employee. Route ambiguous/unknown outcomes to the supplied support owner with EmployeeNumber, known Id and request correlation.

**Deliverable:** Employee Delivery Reconciliation and Retry configured with the changes listed below.

**Strict technical prerequisites:** INT-02

**Predecessor outputs consumed:** INT-02 — Configure Direct Employee Delivery in Boomi

**Blocked status:** Missing supplied inputs block the affected instructions: identity, evidence. The named predecessor configuration outputs must also exist before dependent steps.

**Task-local missing inputs:**

- **identity:** Supported Boomi per-EmployeeNumber serialization, exact Employee.Number read/match path and stable Id storage/reconciliation operation are required to wrap delivery. Rehire, changed-number and termination identity policy plus retry/backoff limits must be supplied before those branches are enabled.
- **evidence:** Native Boomi correlation/outcome/error destination and administrator support owner are required for uncertain-outcome holds and retry evidence; no custom integration log object is authorized.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Role rationale:** Concurrency and unknown-outcome reconciliation need Senior Consultant judgment and Principal review.

**Acceptance criteria:**

- A POST timeout followed by one valid Number match resumes that Id without duplicate creation.
- Ambiguous/failed identity search holds delivery; a definite zero-match case alone permits POST.
- Preparation failure and rehire/identity exceptions cannot silently create another Employee; correlated outcomes are visible through the approved native support source.

**Specification references:** Specification 10 retry contract and lifecycle/identity open items in 12.4.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### INT-04 — Configure Readiness-Gated Account Activation

**Task ID:** INT-04

**Title:** Configure Readiness-Gated Account Activation

**Category:** Integrations

**Objective:** Enable access for the existing Employee only after profile preparation and organizational identity are ready.

**Detailed scope:** Add the Boomi readiness read and later EmployeeUserAccess PATCH. Require completed initial preparation, consistent home/login references and SSO/license inputs; preserve prepared memberships and manual login exceptions.

**Configuration instructions:**

1. Add Boomi readiness reads for the seven Employee extensions and current Employee.Location through the supplied restricted Object Data API paths. Require Initial Profile Applied On populated; valid Position Code Version and Initial Login Location; Initial Profile Home Location=current Employee.Location; valid nonempty location code; SSO UserId and approved LicenseType available. A changed home snapshot or incomplete readiness holds activation for approved reconciliation.

2. For eligible first access PATCH /api/v2/EmployeeUserAccess({Employee.Id}) using IgnoreUserAccess=FALSE, UserId=the SAML assertion identifier, LicenseType=approved value and LoginLocationCode=Initial Login Location.LocationCode. Omit Groups/custom fields and business-hierarchy inputs; keep RemoveFromUnlistedGroups=FALSE and RemoveFromUnlistedBusinessHierarchies=FALSE and apply the supplied SendEmail/account flags.

3. Use native account evidence and endpoint outcome to distinguish access activation from profile preparation. A nonnull preparation timestamp alone is not proof that an account exists. Route uncertain access outcomes through the configured delivery reconciliation; never recreate the Employee. Later ordinary updates omit initial login instructions unless separately approved access maintenance requires a change, preserving manual exceptions and captured profile/memberships.

**Deliverable:** Readiness-Gated Account Activation configured with the changes listed below.

**Strict technical prerequisites:** CFG-07, AUT-08, INT-02, INT-03

**Predecessor outputs consumed:** CFG-07 — Configure Employee Profile Fields and Support Display; AUT-08 — Configure Initial Employee Membership Preparation; INT-02 — Configure Direct Employee Delivery in Boomi; INT-03 — Configure Employee Delivery Reconciliation and Retry

**Blocked status:** Missing supplied inputs block the affected instructions: activation, activationValues. The named predecessor configuration outputs must also exist before dependent steps.

**Task-local missing inputs:**

- **activation:** Verified employee-only POST followed by existing-Employee access PATCH, membership continuity, actual Object Data API readiness paths and native account-existence read/outcome evidence are required for activation. If the sequence is infeasible, revised design is external rather than an invented workaround.
- **activationValues:** Approved SAML UserId source, LicenseType values, LoginLocationCode read path, Boomi readiness-read principal, SendEmail/other account flag values and home-mismatch/manual-access reconciliation policy are required for gated access mapping.

**Recommended implementer role:** Senior Consultant

**Recommended reviewer/approver role:** Principal Consultant

**Role rationale:** Cross-system readiness and access-before/after semantics have substantial consequences and require Senior Consultant implementation with Principal review.

**Acceptance criteria:**

- Missing checkpoint, SSO/license/login value or mismatched home snapshot prevents access PATCH.
- A ready Employee receives account access through PATCH on its existing Id, with the stored login code and FALSE removal controls.
- Access creation preserves existing native memberships; endpoint/native account evidence, rather than preparation time alone, establishes activation outcome.

**Specification references:** Specification 8.3 and 10; proposed account sequence remains unverified.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### RPT-01 — Configure Employee Setup Support Views

**Task ID:** RPT-01

**Title:** Configure Employee Setup Support Views

**Category:** Reports

**Objective:** Show authorized support which codes or Employees are waiting and which failures need action.

**Detailed scope:** Add bounded native support views over the existing profile/Employee fields and supplied native error sources. Separate source participation, current code use, captured preparation and actual account evidence.

**Configuration instructions:**

1. Add a proposed Position Codes Awaiting Publication view: Position Code.Current Published Version=NULL; columns Code, workflow status, Created by Paylocity Integration, Setup Notification Sent and Source Employees navigation. Add a Proposed Working Profile Review view showing authoring rule/Groups next to Current Published Version and Published Versions for comparison; no unverified automatic changed-since-publish flag is assumed.

2. Add Employees Awaiting a Captured Profile: Managed by Employee Integration?=TRUE, Position Code Version=NULL, not archived/deleted; columns Number, JobCode, Location, Position Code and [Helper] Create New Position Code Relation. Add Employees Awaiting Preparation: managed TRUE, version populated, Initial Profile Applied On=NULL, not archived/deleted; show Number, JobCode, current code, captured version, home and initial login/home snapshots.

3. Add Failed Employee Processing and Ambiguous Employee Identity views bound to the supplied native execution/identity sources. Show available EmployeeNumber, native Id, operation, correlation, failure/ambiguity and native time/evidence fields through their actual supplied bindings. Add permitted Employee/profile drill-through and only the approved existing retry command, if one is supplied; do not present a checkpoint as account-created evidence.

**Deliverable:** Employee Setup Support Views configured with the changes listed below.

**Strict technical prerequisites:** CFG-03, CFG-04, CFG-07, SEC-02

**Predecessor outputs consumed:** CFG-03 — Configure Position Code Authoring; CFG-04 — Configure Published Position Code Records; CFG-07 — Configure Employee Profile Fields and Support Display; SEC-02 — Configure Profile and Employee Access Controls

**Blocked status:** Missing supplied inputs block the affected instructions: views. The named predecessor configuration outputs must also exist before dependent steps.

**Task-local missing inputs:**

- **views:** Actual native report/view definitions and query/filter bindings, archive/onboarding eligibility values, failed-execution source and ambiguous-identity source/read paths are required to bind the proposed views. Sensitive navigation and any retry command must use the supplied support security scope; create no custom error object.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Role rationale:** Native filters and support views need Senior Associate judgment; unresolved source bindings remain local blockers.

**Acceptance criteria:**

- Waiting-code and waiting-Employee views distinguish no publication, no capture and incomplete preparation using their specified filters.
- Current-code navigation and helper/source participation remain visibly separate; profile review shows working and published settings without editing versions.
- Failure/identity views expose approved native evidence and permitted navigation only; unauthorized users cannot obtain Employee data through these views.

**Specification references:** Specification 8, 11, support-view coverage in the prior plan; no exported view definitions supplied.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

### INIT-01 — Configure the Initial Position Code Profiles

**Task ID:** INIT-01

**Title:** Configure the Initial Position Code Profiles

**Category:** Catalogues and initial configuration records

**Objective:** Make the supplied initial nondeferred Position Codes available for new Employee preparation.

**Detailed scope:** Create the supplied exact Position Code records with their login rules and security/training/document group choices, then publish them through the completed configured controls. This is initial configuration, not Employee migration or enrollment.

**Configuration instructions:**

1. For each supplied initial profile create Position Code.Code with the exact case-sensitive source string and Created by Paylocity Integration=FALSE; Setup Notification Sent defaults FALSE. Set Login Location Rule to the supplied SAME_HOME or HOME_PARENT record. Populate the one Groups relation through its three filtered grids with the supplied security, training and document group identities; empty categories remain unmanaged.

2. Save and use the configured initial Publish link to create immutable version 1, set Current Published Version and end Initial Setup in Completed. Do not publish any profile requiring the deferred Role feature. Configure only supplied profile records; enroll/backfill no existing Employee and create no invented default Position Code.

**Deliverable:** the Initial Position Code Profiles configured with the changes listed below.

**Strict technical prerequisites:** CFG-01, AUT-07

**Predecessor outputs consumed:** CFG-01 — Configure the Catalogue Choices and Maintenance; AUT-07 — Configure Initial and Subsequent Position Code Publication

**Blocked status:** Missing supplied inputs block the affected instructions: initial. The named predecessor configuration outputs must also exist before dependent steps.

**Task-local missing inputs:**

- **initial:** Exact initial Code strings, each rule choice SAME_HOME or HOME_PARENT and actual security/training/document group identities are required to create the initial profiles. No seed codes were supplied; this population is wholly blocked until that list arrives. Profiles needing deferred location-qualified Roles remain excluded.

**Recommended implementer role:** Senior Associate Consultant

**Recommended reviewer/approver role:** Senior Consultant

**Role rationale:** Using the configured publication flow for supplied profile values is bounded configuration that needs Senior Associate judgment.

**Acceptance criteria:**

- Every supplied eligible initial code has its exact rule and three-category group configuration, a complete immutable first version and Completed authoring status.
- No invented code, integration-origin flag, deferred Role execution or existing-Employee migration is introduced by initial configuration.

**Specification references:** Specification 6, 7.1, 9.2 and 12.1 initial configuration direction.

**Assumptions and open questions:** Proposed additions unless a verified before/after difference is stated. Supplied native results are prerequisites to the affected instructions, not assigned investigation.

## 5 Strict technical dependencies

Arrows mean the successor consumes a new configuration output, not preferred sequencing or approval. Catalogue-first order also applies where it is not a technical edge.

~~~mermaid
flowchart TD
    CFG_01["CFG-01: Configure the Catalogue Choices and Maintenance"]
    CFG_02["CFG-02: Create the Four Profile Object Definitions"]
    CFG_03["CFG-03: Configure Position Code Authoring"]
    CFG_04["CFG-04: Configure Published Position Code Records"]
    CFG_05["CFG-05: Configure the Authoring and Published Role Structures"]
    CFG_07["CFG-07: Configure Employee Profile Fields and Support Display"]
    SEC_02["SEC-02: Configure Profile and Employee Access Controls"]
    AUT_01["AUT-01: Configure Employee Position Code Resolution"]
    AUT_04["AUT-04: Configure the One-Time Position Code Setup Message"]
    AUT_07["AUT-07: Configure Initial and Subsequent Position Code Publication"]
    AUT_08["AUT-08: Configure Initial Employee Membership Preparation"]
    AUT_09["AUT-09: Configure Employee Preparation Continuation"]
    INT_01["INT-01: Configure Establishment Assignment in Boomi"]
    INT_02["INT-02: Configure Direct Employee Delivery in Boomi"]
    INT_03["INT-03: Configure Employee Delivery Reconciliation and Retry"]
    INT_04["INT-04: Configure Readiness-Gated Account Activation"]
    RPT_01["RPT-01: Configure Employee Setup Support Views"]
    INIT_01["INIT-01: Configure the Initial Position Code Profiles"]
    CFG_01 --> CFG_03
    CFG_02 --> CFG_03
    CFG_04 --> CFG_03
    CFG_05 --> CFG_03
    CFG_07 --> CFG_03
    CFG_01 --> CFG_04
    CFG_02 --> CFG_04
    CFG_05 --> CFG_04
    CFG_07 --> CFG_04
    CFG_01 --> CFG_05
    CFG_02 --> CFG_05
    CFG_02 --> CFG_07
    CFG_03 --> SEC_02
    CFG_04 --> SEC_02
    CFG_05 --> SEC_02
    CFG_07 --> SEC_02
    CFG_01 --> AUT_01
    CFG_03 --> AUT_01
    CFG_04 --> AUT_01
    CFG_05 --> AUT_01
    CFG_07 --> AUT_01
    CFG_03 --> AUT_04
    CFG_07 --> AUT_04
    AUT_01 --> AUT_04
    CFG_03 --> AUT_07
    CFG_04 --> AUT_07
    CFG_05 --> AUT_07
    CFG_07 --> AUT_07
    SEC_02 --> AUT_07
    CFG_07 --> AUT_08
    AUT_01 --> AUT_08
    AUT_01 --> AUT_09
    AUT_07 --> AUT_09
    AUT_08 --> AUT_09
    INT_01 --> INT_02
    INT_02 --> INT_03
    CFG_07 --> INT_04
    AUT_08 --> INT_04
    INT_02 --> INT_04
    INT_03 --> INT_04
    CFG_03 --> RPT_01
    CFG_04 --> RPT_01
    CFG_07 --> RPT_01
    SEC_02 --> RPT_01
    CFG_01 --> INIT_01
    AUT_07 --> INIT_01
~~~

## 6 Consolidation and scope disposition

| Retired assignment | Surviving owner(s) | Transferred work |
|---|---|---|
| UI-01 | CFG-01 | Catalogue forms and maintenance |
| WF-01 | CFG-03 | Initial Setup identities and safe scaffold |
| UI-02 | CFG-03 | Authoring screen and state containers |
| UI-03 | CFG-04, CFG-05 | Published review screen; published Role screen is included in CFG-05 |
| CFG-06 | CFG-05 | Published Role storage and child review form |
| UI-04 | CFG-07 | Employee support section |
| SEC-01 | CFG-01, SEC-02 | Catalogue rights to CFG-01; profile/Employee object grants to SEC-02 |
| SEC-03 | CFG-01, CFG-03, CFG-05, CFG-07 | Catalogue/authoring/Role/Employee audit to their field/form owners |
| AUT-05 | AUT-07 | Independent publication graph copies |
| AUT-06 | AUT-07 | First-source Employee writeback |
| WF-02 | AUT-07 | Initial action and Completed link bindings plus user errors |

Retired IDs are revision history only and are absent from active tasks, prerequisites and graph nodes. Forecast records are retained as consolidation references rather than deleted or treated as additional assigned work. Surviving IDs preserve traceability. The publication graph, source writeback and workflow completion remain one substantial assignment because splitting ownership across their atomic effect would obscure the required rollback. Native membership preparation, scheduled continuation, access control and integrations remain distinct specialist outcomes.

## 7 Coverage, reuse and exclusions

| In-scope element / evidence locator | Single configuration owner |
|---|---|
| Two catalogue fields, values, forms, basic rights and audit; 6.1–6.2 | CFG-01 |
| Four mutually referenced profile object definitions; 4.2, 7 | CFG-02 |
| Authoring fields, Initial Setup scaffold, form, filtered Groups, source/history navigation and audit; 7.1, 9.1, 11 | CFG-03 |
| Immutable version fields, scoped identity and review form; 7.2 | CFG-04 |
| Both Role child schemas, forms and authoring audit; 7.3–7.5 | CFG-05 |
| Seven Employee extensions, three declaring inverses, support display and extension audit; 13.4 | CFG-07 |
| Profile rights, immutable record enforcement, terminal permissions and personal-data access; 11 | SEC-02 |
| Exact code discovery, origin, capture, helper lifecycle, race and reusable login calculation; 8.1 | AUT-01 |
| Template, linked-source trigger, recipients, delivery and sent flag; 9.4 | AUT-04 |
| Immutable copy, active pointer, source release, atomic first completion, later Publish and all user errors; 9.2–9.3 | AUT-07 |
| Add-only native memberships, location snapshots and checkpoint; 8.2 | AUT-08 |
| After-commit dispatch, Event Service selection and approved cadence; 8.2 | AUT-09 |
| Ordered establishment and governed correction mapping; 10.1 | INT-01 |
| Direct supported payload, flags and pre-start feed; 10–10.2 | INT-02 |
| Id/Number reconciliation and uncertain outcome; 10 | INT-03 |
| SSO/profile readiness, existing-Employee access PATCH and native outcome; 8.3 | INT-04 |
| Waiting/failed support views and native evidence navigation; 11 | RPT-01 |
| Supplied initial profile values and publication; 12.1 | INIT-01 |

Native Subject/Group/Employee/Location/Work Groups definitions, automatic identities, existing Members/MemberOf storage, Role/security/document group identities, native execution/notification history and existing access not expressly changed above are deliberate reuse. No inheritance change, duplicate membership store, custom log, custom staging/APIHub flow, source scalar or version-owned workflow is assigned. Location-qualified Role execution is excluded; profiles requiring it remain held. Incident event attribution and Training/Document Control configuration stay with their own components.

Discovery, prototypes, native tenant verification, Employee migration/backfill, formal testing, deployment, training and documentation workstreams are excluded. Initial values cover the two catalogues and the explicitly supplied Position Code configuration only. Proposed daily/seven-day feed and five-minute service values remain unresolved supplied decisions; no estimates are published.

## 8 Validation and limitations

The structured snapshot, rendered task records, task-specific semantic review and bundled content-gate result are retained beside this plan. Full-plan schema, summary, ownership/coverage and dependency checks accompany the content gate. A deterministic validation adapter maps the existing stable IDs to the bundled gate's required IMP-number syntax; it preserves every task instruction and value and is checked against the source snapshot/rendered plan. This avoids renumbering live tasks solely for a validator format. Hashes bind the semantic reviews to that exact adapted snapshot and rendering.

A passing gate checks wording, rendered completeness and review freshness; it does not independently certify the review or demonstrate implementation/native behavior. Unresolved task-local inputs remain blockers even after the plan passes.
