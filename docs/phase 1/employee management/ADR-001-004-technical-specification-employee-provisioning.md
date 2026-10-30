---
status: accepted
accepted_on: 2026-10-28
date: 2026-10-28
last_revised: 2026-10-29
revision_note: Employee Integration Manager application; Administrators-only visibility; workflow parameters confirmed; no Audit Trail requirement
component: Employee Management
phase: 1
related_adrs: [ADR-001, ADR-002, ADR-003, ADR-004]
---

# Employee Management Technical Specification

## 1 Outcome and scope

Create a new application named **Employee Integration Manager** for all six new custom objects. Application-object visibility is **Administrators only**. **Audit Trail is not required**: leave it disabled on the new objects, assign no audit-retention setup and make no Audit Trail change to existing native objects. The Position Code workflow business parameters are confirmed as documented in section 9. Native Employee remains in its current application.

Boomi calls EmployeeUserAccess directly to create and update Employees. The supported JobCode property carries Position Code and populates SysEmployeeEntity.JobCode. Native Employee processing uses FETCHVALUE to resolve it to the Position Code authoring record, captures its current published version in Employee.Position Code Version, and applies initial membership configuration.

The proposed implementation separates Employee creation, profile preparation and account activation. Boomi first creates Employee with IgnoreUserAccess=TRUE. An Employee Action Handler resolves/captures the profile. Native processing applies memberships after the inbound request commits. Boomi later requests access through EmployeeUserAccess PATCH after profile readiness and SSO prerequisites pass. This activation sequence is accepted as design intent; native EmployeeUserAccess behavior and transaction timing remain unverified.

An Employee can exist while its profile awaits publication. Profile preparation and account activation remain blocked. Later feed updates do not reapply profile memberships after initial preparation is complete.

This is a proposed target logical Intelex object model, not an implementation record. Position Code owns the initial-setup workflow and remains editable in Completed. Its Publish form link creates immutable Published Position Code records. Location-qualified Roles remain deferred. Native group operations, handler timing and later account creation must be prototyped before deployment.

## 2 Evidence and revision history

### 2.1 Sources and classification

- [ADR-001 Position Code profiles](ADRs/ADR-001-use-position-codes-as-provisioning-profile-inputs.md)
- [ADR-002 Remote establishment assignment](ADRs/ADR-002-automate-establishment-assignment-for-remote-employees.md)
- [ADR-003 Employee integration](ADRs/ADR-003-integrate-employees-through-boomi-and-edis.md)
- [ADR-004 Pre-start provisioning](ADRs/ADR-004-provision-employees-before-their-start-date.md)
- [Confirmed application/workflow/security/Audit Trail decisions, October 29, 2026](<raw artifacts/2026-10-29-employee-integration-manager-decisions.md>)
- [ADR reconciliation for the October 29 decisions](ADR-RECONCILIATION-2026-10-29-employee-integration-manager.md)
- [User-supplied establishment assignment flow, October 28, 2026](<raw artifacts/2026-10-28-establishment-assignment-flow.md>)
- [Historical technical requirements](<raw artifacts/2026-09-25-paylocity-employee-integration-technical-requirements.md>)
- [Extracted metadata](<raw artifacts/object-model/2026-10-28-employee-management-metadata.json>)
- [Official Intelex User Management API](https://developers.intelex.com/#user-management-api), consulted October 28, 2026.
- User-confirmed direct Boomi transport, JobCode input, native inheritance/membership, authoring workflow on Position Code, Publish link creating immutable versions, Employee FETCHVALUE/create sequence, Source Employees background grid backed by Employee.[Helper] Create New Position Code Relation, and Role deferral.

Extracted means returned by the API. Confirmed means supplied by the user. Proposed means target design. Unresolved means more evidence or a decision is needed. ADR statuses remain as recorded: ADR-001 proposed; ADRs 002–004 accepted. Refinements below do not silently change those statuses.

### 2.2 Superseded requirements and architecture

| Previous requirement or design | Current replacement | Basis |
|---|---|---|
| Workflow and editable Drafts on Published Position Code | Initial-setup workflow on Position Code; published versions are immutable from creation | User-confirmed |
| Publication copies version configuration back to master | Publish link copies saved authoring configuration into a new immutable version | User-confirmed |
| Repeated workflow/draft creation for changes | Edit Position Code in Completed and publish without reopening workflow | User-confirmed |
| GETRELATED used for initial record matching | FETCHVALUE record matching first; create/resolve via GETRELATED only if Position Code relation remains NULL | User-confirmed |
| Employee field named Published Position Code | Employee.Position Code Version targets Published Position Code | User-confirmed |
| Single Source Employee relationship and ordinary Employees grid used for initial release | Source Employees inverse grid from Employee.[Helper] Create New Position Code Relation; first workflow completion assigns current code and immutable version | User-confirmed |
| Custom Paylocity Employee Record inbound boundary | Direct EmployeeUserAccess creates Employee | User-confirmed |
| Separate Position Code Text input | EmployeeUserAccess.JobCode to Employee.JobCode | User-confirmed |
| APIHub and Trigger API Update | Direct Boomi calls and native Employee processing | Confirmed transport; native implementation Proposed |
| Source link and FETCHVALUE Employee linking | Native Employee Id and reconciliation by Number | Consequence of direct transport |
| Source settings snapshots through GETSETTING | Boomi owns supported request flags | Consequence of direct transport |
| Block Employee creation until published profile | Employee may exist; hold profile preparation/account activation | Proposed post-creation gate |
| Memberships supplied in initial Groups string | Native initial membership application; Boomi omits Groups | Proposed implementation |
| One combined Employee/account creation request | Employee-only POST, preparation, later access PATCH | Proposed activation policy |
| Custom source establishment override | Durable governed upstream correction applied by Boomi | Proposed correction authority; standard assignment branches supplied October 28 |

Earlier source/settings objects, payload snapshots, helper trigger, custom source link and APIHub dependencies are absent from this current target. They were proposed documentation, not verified deployed objects; no tenant deletion is authorized.

Proposed ADR-001 has been reconciled with this specification and the October 29 decisions. Accepted ADR-003 and the historical technical artifact still contain earlier transport details; formal transport reconciliation remains outstanding. This specification explicitly supersedes that transport direction; do not implement both architectures.

### 2.3 Baseline and limitations

Metadata came through SysModuleEntity.Objects with ObjectProperties.Type, declaring Object, ValidationRules and recursive SuperType. Direct MetObjectEntity collection retrieval returned 404. Five objects returned 287 properties: Subject 14, Group 7, Work Groups 5, Employee 55, Location 206. WorkGroups is the short name of FragApplication_WorkGroupsObject.

Types, requiredness and direct inheritance are extracted. Capacities, datetime timezone behavior, most native cardinalities/inverses, writable native mechanisms, execution order and actual configured identifiers remain unresolved. Repeated native Id metadata is retained, not recreated. IsAuditEnabled=FALSE was returned for all five definitions; separate native system history may exist.

### 2.4 Assumptions

- Employee.Number is stable and unique for Boomi; confirm rehire semantics.
- The Employee create handler can verify the allowlisted Boomi actor. Do not infer integration origin from JobCode alone.
- Capture the then-current publication during Employee creation handling. If absent, first Publish supplies the first version. Do not let a later arbitrary worker run choose a newer publication.
- Profile application is initial-only. Later JobCode changes can update Position Code navigation but never replace the captured version or replay memberships.
- A pre-completion JobCode mismatch with captured version holds review. Empty JobCode clears Position Code and retains capture.
- Initial Profile Applied On means memberships/login instruction are prepared, not that account activation occurred.
- Daily feed and seven-calendar-day pre-start window are proposed; timezone and catch-up bounds remain open.

## 3 Current requirements

| ID | Requirement | Revision |
|---|---|---|
| EM-001 | Check JobCode, FETCHVALUE authoring Position Code, create/resolve only on NULL result, initialize initial workflow; clear relation on empty code | Refined record matching and workflow owner |
| EM-002 | One setup message with linked Source Employees, sent after at least one helper relation is established | Refined source and notification ordering |
| EM-003 | One Groups relation per authoring record/version and three filtered views; separate Role rows | Retained |
| EM-004 | Publish link creates immutable scalar/Groups/Role graph, activates it and completes initial authoring workflow once; later publishes stay Completed | Refined publication direction |
| EM-005 | Employee.Position Code Version captures active publication; first workflow completion fills waiting empty references through Source Employees backed by [Helper] Create New Position Code Relation, assigning current Position Code as needed | Refined source population and release owner |
| EM-006 | Native post-commit initial membership/login preparation | Replaces staging/settings trigger |
| EM-007 | Direct Boomi POST/PATCH with JobCode and supported endpoint properties only | Replaces APIHub/Groups payload |
| EM-008 | Native Id and Number reconciliation before retry | Replaces source linking |
| EM-009 | Boomi ordered site, remote California/San Diego and remote job-function establishment rules; protected correction precedence | User-supplied assignment flow; correction authority unresolved |
| EM-010 | Pre-start Employee; proposed account gate on profile and SSO readiness | Refined gate |
| EM-011 | New Employee Integration Manager application; Administrators-only application-object visibility; no Audit Trail requirement; native operational evidence reuse | User-confirmed October 29 |
| EM-012 | Deferred location-qualified Role execution | Retained |

## 4 Baseline and target model

### 4.1 Baseline

~~~mermaid
classDiagram
direction LR
class SysGroupEntity {
  <<abstract>>
}
SysSubjectEntity <|-- SysGroupEntity
SysSubjectEntity <|-- SysEmployeeEntity
SysGroupEntity <|-- FragApplication_WorkGroupsObject
SysGroupEntity "0..*" --> "0..*" SysSubjectEntity : Members / MemberOf
SysEmployeeEntity --> SysLocationEntity : Location
SysLocationEntity --> SysLocationEntity : ParentLocation
~~~

Inheritance is extracted; M:N membership user-confirmed. Other baseline multiplicities remain unknown. ParentLocation is an exact association name, not inheritance.

### 4.2 Inventory

| Object / system name | Stable ID | Inheritance parent | Treatment and field section |
|---|---|---|---|
| Subject / SysSubjectEntity | 785124a0-20be-4606-8d25-56dd86248bbf | None | Unchanged; 13.1 |
| Group / SysGroupEntity | dc95c2f3-4325-40d5-91af-046ef46fdfc4 | SysSubjectEntity | Abstract; unchanged; 13.2 |
| Work Groups / FragApplication_WorkGroupsObject | 31de1112-a0b8-4ee8-9ec0-43d364499994 | SysGroupEntity | Unchanged; 13.3 |
| Employee / SysEmployeeEntity | 6afb3ac6-96db-4072-9293-4d02699d1264 | SysSubjectEntity | Add initial-profile fields; 13.4 |
| Location / SysLocationEntity | f5d5209b-0a7d-4858-a302-678fcc065dd2 | None | Unchanged; 13.5 |
| Position Code / TG_PositionCodeObject | Not allocated | None | Proposed editable authoring object; 7.1 |
| Published Position Code / TG_PublishedPositionCodeObject | Not allocated | None | Proposed immutable publication; 7.2 |
| Position Code Role Assignment / TG_PositionCodeRoleAssignmentObject | Not allocated | None | Proposed authoring Role association; 7.3 |
| Published Position Code Role Assignment / TG_PublishedPositionCodeRoleAssignmentObject | Not allocated | None | Proposed version association; 7.4 |
| Login Location Rule / TG_LoginLocationRuleObject | Not allocated | None | Proposed governed choices; 6.1 |
| Assignment Location Basis / TG_AssignmentLocationBasisObject | Not allocated | None | Proposed governed Role choices; 6.2 |

Baseline properties/identifiers are retained in section 13 and JSON. New names are proposed; check equivalents/collisions. No inheritance changes.

### 4.3 Target

Underscores map to spaces in display names; native system names remain exact. Target cardinalities are Proposed except native M:N membership. External Role is not a new object.

~~~mermaid
classDiagram
direction LR
class SysGroupEntity {
  <<abstract>>
}
SysSubjectEntity <|-- SysGroupEntity
SysSubjectEntity <|-- SysEmployeeEntity
SysGroupEntity <|-- FragApplication_WorkGroupsObject
SysGroupEntity "0..*" --> "0..*" SysSubjectEntity : native membership
SysEmployeeEntity "0..*" --> "0..1" Position_Code : Position Code
SysEmployeeEntity "0..*" --> "0..1" Published_Position_Code : Position Code Version
SysEmployeeEntity "0..*" --> "0..1" SysLocationEntity : Initial Login Location
SysEmployeeEntity "0..*" --> "0..1" SysLocationEntity : Initial Profile Home Location
SysEmployeeEntity "0..*" --> "0..1" Position_Code : [Helper] Create New Position Code Relation
Position_Code "0..*" --> "0..1" Published_Position_Code : Current Published Version
Published_Position_Code "0..*" --> "1" Position_Code : Position Code
Position_Code "0..*" --> "0..*" SysGroupEntity : Groups
Published_Position_Code "0..*" --> "0..*" SysGroupEntity : Groups
Position_Code "0..*" --> "0..1" Login_Location_Rule : Login Location Rule
Published_Position_Code "0..*" --> "1" Login_Location_Rule : Login Location Rule
Position_Code_Role_Assignment "0..*" --> "1" Position_Code : Position Code
Position_Code_Role_Assignment "0..*" --> "1" SysRoleEntity : Role
Position_Code_Role_Assignment "0..*" --> "1" Assignment_Location_Basis : Assignment Location Basis
Published_Position_Code_Role_Assignment "0..*" --> "1" Published_Position_Code : Published Position Code
Published_Position_Code_Role_Assignment "0..*" --> "1" SysRoleEntity : Role
Published_Position_Code_Role_Assignment "0..*" --> "1" Assignment_Location_Basis : Assignment Location Basis
~~~

Native membership remains storage authority. Profile Groups stores desired configuration; it does not duplicate Employee membership records.

## 5 Native capability and ownership

Create **Employee Integration Manager** as a new application before its objects. It contains the two catalogues and four profile objects listed below. Administrators are the only group with application-object visibility; all support work within the application is performed by Administrators.

| Object | Application / ownership |
|---|---|
| Login Location Rule | Employee Integration Manager |
| Assignment Location Basis | Employee Integration Manager |
| Position Code | Employee Integration Manager |
| Published Position Code | Employee Integration Manager |
| Position Code Role Assignment | Employee Integration Manager |
| Published Position Code Role Assignment | Employee Integration Manager |
| Native Employee and its seven new extensions | Existing native Employee application; no object move |
| Existing Subject, Group, Location, Work Groups, Role and security/document groups | Existing owning applications; reused |

Audit Trail is not required for Employee Integration Manager. Configure it disabled on the six new custom objects and assign no retention configuration. Do not enable or disable Audit Trail on existing native objects as part of this application. Reuse native workflow history, execution/error and notification diagnostics where needed; these are operational mechanisms, not a new Audit Trail requirement. No custom audit/log or workflow-state object is added.

Employee Management owns profiles and Employee extensions; Platform Administration owns access/hierarchy semantics; Training and Document Control own their groups. Boomi owns source mapping, supported flags, establishment rules and direct endpoint calls. Trusted native processing must use a supported effective security context consistent with Administrators-only application access; the specific execution binding remains to be verified.

## 6 Catalogue objects implemented first

All target rows are Proposed. Intelex automatically creates and manages record identities; native Id fields are omitted from all object tables and retained only in the extracted metadata. Tables contain one row per designed field/grid; inherited fields remain on their base. Proposed capacities and native operations require verification. Calculations are declarative until verified.

Create Employee Integration Manager first, then implement all catalogue objects in this section within it before the remaining custom objects and Employee extensions. Create their fields, load the initial values, and validate stable Code uniqueness, localization, Active? filtering and inverse-disabled selectors before configuring the consuming relationships. Login Location Rule and Assignment Location Basis are the complete catalogue set in this design.

### 6.1 Login Location Rule

**System name:** TG_LoginLocationRuleObject. **Inheritance parent:** None. **Directly declared fields:** All rows below. Localizable object and Name; Code non-localizable. Independent domains do not require an abstract catalogue family.


| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Code | Text, max 100 | Y | None; unique | Administrator; immutable after use | Stable conditions; do not compare localized Name |
| Name | Text, max 255; localizable | Y | None | Administrator editable | User-facing display |
| Active? | Yes/No | Y | TRUE | Administrator editable | FALSE prevents new selection; retain historical references; no clearing |
| Sort | Float | N | None | Administrator editable | Presentation order |


Initial values:

| Code | Name | Active? | Sort |
|---|---|---|---|
| SAME_HOME | Same as Home Location | TRUE | 10 |
| HOME_PARENT | Home Location's Parent | TRUE | 20 |


### 6.2 Assignment Location Basis

**System name:** TG_AssignmentLocationBasisObject. **Inheritance parent:** None. **Directly declared fields:** All rows below. Localizable object and Name; Code non-localizable. Independent domains do not require an abstract catalogue family.


| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Code | Text, max 100 | Y | None; unique | Administrator; immutable after use | Stable conditions; do not compare localized Name |
| Name | Text, max 255; localizable | Y | None | Administrator editable | User-facing display |
| Active? | Yes/No | Y | TRUE | Administrator editable | FALSE prevents new selection; retain historical references; no clearing |
| Sort | Float | N | None | Administrator editable | Presentation order |


Initial values:

| Code | Name | Active? | Sort |
|---|---|---|---|
| HOME | Home Location | TRUE | 10 |
| LOGIN | Login Location | TRUE | 20 |

## 7 Remaining profile object field contracts

Implement these objects after the section 6 catalogues. Create Position Code and Published Position Code before their Role Assignment objects; configure the mutually referencing profile fields after both object definitions exist. Then add the Employee extensions and enable handlers only after the remaining dependencies and validation checks are complete. Position Code is versioned provisioning configuration, not a simple value catalogue.

### 7.1 Position Code

**System name:** TG_PositionCodeObject. **Inheritance parent:** None. **Directly declared fields:** All rows below. This is the editable authoring object. Its initial workflow has proposed stage Initial Setup and terminal status Completed. Administrators continue editing it while Completed; there is no reopen or new authoring Draft. The Publish form link creates a new immutable version from the saved authoring configuration. Show clearly that working edits may differ from Current Published Version.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Code | Text, max 255 | Y | None; exact case-sensitive uniqueness | Entry on discovery/manual creation; immutable afterward; no trim/case-fold | Stable authoring identity; retained through Publish; version.Position Code identifies it |
| Login Location Rule | M:1 to Login Location Rule; 0..1; inverse disabled | Conditional | NULL on creation; no automatic fallback choice | Administrators editable in Initial Setup and Completed; required at Publish; filter Active?=TRUE; retain inactive references but reject inactive rule for new publication | Authoring value; Publish copies to new Published Position Code.Login Location Rule; edits do not change active version |
| Groups | M:N to SysGroupEntity; 0..* each side; inverse disabled | N | Empty on creation | Administrators editable in Initial Setup and Completed through three filtered grids; preserve other categories during filtered edits | Authoring membership configuration; Publish independently copies entire set to new version.Groups |
| Current Published Version | M:1 to Published Position Code; 0..1; inverse disabled | N | NULL until first successful Publish | Read only; same Position Code; immutable complete version only | Publish sets after complete graph validation; retains prior value on failure; never cleared by ordinary authoring edits |
| Published Versions | Inverse 1:M grid from Published Position Code.Position Code | N | None | Read-only history; no manual version/Draft creation | Publish link creates versions; navigation only, no duplicate relationship |
| Role Assignments | Inverse 1:M grid from Position Code Role Assignment.Position Code | N | None | Authoring rows editable by Administrators in Initial Setup/Completed when deferred Role design is completed | Publish copies independent rows into new version.Role Assignments; no copying back into authoring rows |
| Created by Paylocity Integration | Yes/No | Y | FALSE manually; TRUE when Employee discovery creates code | Read only after creation | Origin control only; not copied into version |
| Setup Notification Sent | Yes/No | Y | FALSE | Read only; TRUE only after successful setup delivery | Retained across authoring edits and publications; not version configuration |
| Source Employees | Inverse 1:M grid from Employee.[Helper] Create New Position Code Relation; inverse enabled on declaring M:1 | N | None; populated by Employee helper relationship assignments | Background read-only reference grid; available to Administrators performing support; multiple Employees may reference the same code | Authoritative source population for first workflow completion; not copied to version; navigation only, no separate stored source relationship |
| Employees | Inverse 1:M grid from Employee.Position Code | N | None | Read-only navigation for currently resolved Position Code associations | General usage navigation only; first-completion assignment uses Source Employees instead; no duplicate storage |

### 7.2 Published Position Code

**System name:** TG_PublishedPositionCodeObject. **Inheritance parent:** None. **Directly declared fields:** All rows below. Created only by successful publication; immutable from creation. No workflow, Draft stage, editing form, predecessor field or manually created versions. Configure native display from Position Code.Code and Version Number after syntax verification.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Position Code | M:1 to Position Code; exactly 1; inverse Published Versions enabled | Y | Publishing Position Code | Read only from creation; never reassign | Publication source; immutable version identifies authoring record |
| Version Number | Positive integer | Y | Maximum published Version Number for this code + 1; first 1 | Read only; allocate under per-code publication lock/uniqueness | Unique (Position Code, Version Number); failed graph not retained as published version |
| Login Location Rule | M:1 to Login Location Rule; exactly 1; inverse disabled | Y | Copy authoring Position Code.Login Location Rule at Publish | Read only from creation; authoring selector Active?=TRUE; later deactivation does not erase historical reference | Named publication copy; independent immutable value |
| Groups | M:N to SysGroupEntity; 0..* each side; inverse disabled | N | Copy full authoring Position Code.Groups at Publish | Read only from creation; no authoring edits on version form | Independent immutable set; later authoring membership changes cannot alter it |
| Role Assignments | Inverse 1:M grid from Published Position Code Role Assignment.Published Position Code | N | Generate new rows from each authoring Role Assignment | Read only from creation; Role execution deferred | Copy each source Role and Assignment Location Basis; complete graph published atomically |
| Employees | Inverse 1:M grid from Employee.Position Code Version | N | None | Administrators-only read-only navigation | Employees retaining this immutable version; no duplicate stored relation |

### 7.3 Position Code Role Assignment

**System name:** TG_PositionCodeRoleAssignmentObject. **Inheritance parent:** None. **Directly declared fields:** All rows below. No initial values. These rows are editable authoring configuration in Initial Setup and Completed; publication never replaces them. Location-qualified Role execution remains deferred.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Position Code | M:1 to Position Code; exactly 1; inverse Role Assignments enabled | Y | Selected authoring Position Code | Fixed after row creation | Unique owner plus Role; source for new immutable rows |
| Role | M:1 to external SysRoleEntity; exactly 1; inverse disabled | Y | None | Administrator editable while authoring; selector deferred | Publish maps to new Published Position Code Role Assignment.Role; no unqualified Role fallback |
| Assignment Location Basis | M:1 to Assignment Location Basis; exactly 1; inverse disabled | Y | None | Administrator editable while authoring; filter Active?=TRUE; preserve existing references but validate before Publish | Publish maps to new version row.Assignment Location Basis; execution deferred |

### 7.4 Published Position Code Role Assignment

**System name:** TG_PublishedPositionCodeRoleAssignmentObject. **Inheritance parent:** None. **Directly declared fields:** All rows below. No initial values. Publish creates independent immutable rows from authoring assignments. Location-qualified Role execution remains deferred.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Published Position Code | M:1 to Published Position Code; exactly 1; inverse Role Assignments enabled | Y | Publishing version | Fixed after row creation | Unique owner plus Role; created as part of version graph |
| Role | M:1 to external SysRoleEntity; exactly 1; inverse disabled | Y | Source Position Code Role Assignment.Role | Read only from creation | Publish copies exact Role from authoring row; no unqualified Role fallback |
| Assignment Location Basis | M:1 to Assignment Location Basis; exactly 1; inverse disabled | Y | Source Position Code Role Assignment.Assignment Location Basis | Read only from creation; historical references retained | Publish copies exact basis from authoring row; execution deferred |

### 7.5 External Role

**System name:** SysRoleEntity. **Stable ID:** 1b44b982-2248-41c5-971e-dfa68eddb196. **Inheritance parent:** Unresolved; descent from Group confirmed, not immediate base. **Directly declared fields:** No additions designed; full baseline not retrieved. No initial values. External reference authority, not a custom object to create.

Security Group (SysSecurityGroupEntity, c86fbee9-ab74-4634-be41-53c21dd6ea1b) and Document Distribution Group (DocCtrl_DistributiGroupObject, 2b58f9cd-73bf-4120-98e2-e55ffcd09f6f) are existing selector dependencies. Verify subtype filters; no structure changes proposed.

## 8 Employee processing

### 8.1 Direct creation and capture

Boomi creates Employee using supported fields including JobCode and IgnoreUserAccess=TRUE; omit Groups. The Employee create Action Handler verifies the allowlisted integration identity and marks Managed by Employee Integration?=TRUE. Creation alone is not profile completion.

Employee.Position Code is the current resolved business association. Employee.[Helper] Create New Position Code Relation is a separate M:1 association for participation in initial Position Code setup; its inverse is Position Code.Source Employees. An Employee has at most one helper target, but many Employees can reference the same new Position Code. Existing active codes do not require a new helper assignment.

| Step | Condition | Action | Result |
|---|---|---|---|
| 1 | JobCode empty on new Employee | Skip FETCHVALUE/create; leave current code, helper and version empty | Wait for required input |
| 2 | JobCode populated | FETCHVALUE Position Code by exact case-sensitive Code = JobCode; assign result to Employee.Position Code | Evaluate the relationship result; no normalization |
| 3 | Existing code has an active publication | Fill empty Position Code Version from that code.Current Published Version | Capture active immutable version; do not create workflow or enroll in a new source cohort |
| 4 | Existing code is in initial setup with no active publication | Set [Helper] Create New Position Code Relation to that same code; retain resolved Position Code and leave version empty | Employee joins Source Employees even though it did not create the code |
| 5 | FETCHVALUE returns no Position Code | GETRELATED create/resolve the authoring Position Code with Code and integration origin; initialize its initial workflow; set Employee.[Helper] Create New Position Code Relation to it | New Employee is retained in Source Employees; its ordinary Position Code may remain NULL until first workflow completion; version remains empty |
| 6 | Concurrent Employees introduce the same unknown code | On unique-code conflict, resolve the existing new code and point each Employee helper to that one record | One authoring record/workflow; multiple Source Employees |
| 7 | Helper assignment completes | Confirm inverse Source Employees association, then invoke guarded setup notification logic | Notification sees actual source Employees; no unlinked single Source Employee field |
| 8 | Creation/linking races initial Publish | Under per-code serialization recheck lifecycle/current version; if initial completion has committed, assign an eligible empty Position Code and Position Code Version from the helper target/committed publication | Employee is either included in first workflow completion or captures the committed active version; no lost source |

An ambiguous match or failed record search is an integration error, not a legitimate no-match. FETCHVALUE relation typing and GETRELATED create behavior require signature verification; these are declarative steps.

Before first publication, if JobCode clears or changes while Position Code Version is empty and the helper target remains in Initial Setup, clear or re-resolve the helper to the appropriate unpublished code. This removes stale participation from the old Source Employees inverse grid; the current helper inverse reflects the change; no Audit Trail capture is required. Do not queue an Employee for a code its JobCode no longer matches.

After successful initial version assignment retain the helper as origin evidence, even if the current Position Code later changes. Never replace a populated Position Code Version or replay initial memberships. A pre-preparation code/version mismatch holds review. Unrelated handler saves must not restart workflow or enroll an Employee again.

Creating Position Code creates no Published Position Code record. Initial workflow participation is stored only by the helper M:1; Source Employees is navigation, not a second stored list. Ordinary Position Code and its Employees inverse remain separate because current code assignment and initial workflow participation have different lifecycles.

Do not assume the inbound endpoint has finished its writes when assigning groups/user settings. Native events, helper-inverse updates, actor context and locks remain tenant-validation items.

### 8.2 Shared initial-profile routine

Use one routine for newly eligible Employees, first-publication release and retry. Creation handling resolves/captures; committed application uses a verified after-commit mechanism. A proposed native Event Service every five minutes supplies retryable continuation. Cadence is a proposal, not a platform default.

Eligible population: Managed by Employee Integration?=TRUE; Initial Profile Applied On=NULL; Employee not archived/deleted; current JobCode resolves; Position Code Version is populated and belongs to current resolved code; valid Employee.Location and LocationCode; no unresolved required Role behavior.

Under an Employee lock recheck eligibility and immutable capture. Read desired groups from Employee.Position Code Version.Groups. Add Employee to each native group only if absent, using the verified native membership relationship. Preserve all unrelated memberships. Never replace the entire MemberOf set. Empty profile categories mean unmanaged, not removal.

Compute Initial Login Location from Employee.Position Code Version.Login Location Rule: SAME_HOME uses Employee.Location; HOME_PARENT uses Employee.Location.ParentLocation, falling back to Employee.Location if null. Store Initial Profile Home Location as current Employee.Location and Initial Login Location as resolved location. Require valid nonempty codes. Stamp Initial Profile Applied On only after all required membership/reference operations succeed.

A partial failure leaves the timestamp empty and native error evidence visible. Successful membership additions can remain; retry adds only missing associations. No unrelated access is removed as compensation. This is idempotent convergence, not an asserted transaction across all assignments. The account gate stays closed.

The exact writable Members/MemberOf mechanism, employee-only support, event timing, permissions, locks and service error handling remain release blockers. User confirmation establishes association structure, not availability of any particular scripted setter. No executable function is invented.

### 8.3 Account activation

Boomi reads native/custom Employee readiness through Object Data API. Proposed field system names are in 13.4; verify actual configured names and returned paths. The User Management API still receives supported properties only.

Readiness requires nonnull Initial Profile Applied On, valid Position Code Version/login reference and Initial Profile Home Location equal to current Employee.Location. Home changes before activation hold reconciliation; do not automatically assume preparation remains current.

Once ready and SSO UserId is available, Boomi PATCHes EmployeeUserAccess by Employee Id with IgnoreUserAccess=FALSE, UserId, LicenseType and LoginLocationCode from Initial Login Location.LocationCode. Omit Groups. The timestamp is not proof a user account exists; use native access evidence and endpoint outcome.

Later ordinary feeds update intended employee/user attributes without Groups and without replaying initial profile login instructions. Preserve manual access exceptions unless separate approved access maintenance requires otherwise.

Prove access creation through PATCH on an Employee previously created without access, and membership continuity through that step. If native membership assignment requires an existing user, revise the proposed sequence with verified native gating; do not silently activate an incomplete account.

## 9 Workflow

### 9.1 Workflow stages

| Stage name | Status | Person Responsible | Due Date | Exit paths |
|---|---|---|---|---|
| Initial Setup | Active/nonterminal — confirmed | Administrators group — confirmed | None configured; no automatic due-date rule, calendar or escalation — confirmed | **Publish:** creates the first immutable version, assigns eligible Source Employees and completes the workflow. Validation/publication failure leaves the record in Initial Setup. No cancellation, rejection or return action is defined. |

Workflow business parameters are confirmed by the user on October 29, 2026. Native status/assignment/action identifiers are implementation bindings, not pending business-parameter decisions.

**Completed** is the terminal result, not another stage. Administrators may continue editing Position Code and use its Publish link without reopening or restarting the workflow. Published Position Code and its copied Role rows are immutable and have no workflow.

### 9.2 Workflow actions

#### Publish

- **Stage:** Initial Setup.
- **Action name:** Publish.
- **Visible to the user:** Yes, as a Publish link on the Position Code form for authorized Administrators.
- **Action order:** 1; this is the only workflow action.

**Logic, in execution order:**

1. **Check permission and record state.** Recheck that the user is an authorized Administrator, the record is in Initial Setup, Current Published Version is empty, and the authoring changes have been saved. Lock the Position Code and reject a stale revision or a duplicate/in-progress publication attempt. Use the error messages below.
2. **Validate configuration.** Require an active Login Location Rule; validate the complete Groups selection and any Role assignments. Each Role must be unique within the code and have a valid Assignment Location Basis. Block a profile that needs the deferred location-qualified Role behavior. Edits on Position Code do not affect the current published version until Publish succeeds.
3. **Create the immutable publication.** Create one Published Position Code record and independent copied Role rows, using these values:

   | Target | Set value |
   |---|---|
   | Published Position Code.Position Code | This authoring Position Code |
   | Published Position Code.Version Number | Highest published version number for this code + 1; first version is 1 |
   | Published Position Code.Login Location Rule | Authoring Position Code.Login Location Rule |
   | Published Position Code.Groups | Independent copy of the complete authoring Groups set |
   | Each new Published Position Code Role Assignment.Published Position Code | The new immutable version |
   | Each new version Role Assignment.Role | Corresponding authoring Role Assignment.Role |
   | Each new version Role Assignment.Assignment Location Basis | Corresponding authoring Role Assignment.Assignment Location Basis |

4. **Set the active version.** After the complete new publication validates, set Position Code.Current Published Version to it. Preserve authoring configuration, origin/notification controls and all earlier versions. Do not expose or activate a partially created publication.
5. **Assign waiting Source Employees.** Read Position Code.Source Employees, the inverse grid of Employee.[Helper] Create New Position Code Relation. Select integration-managed, onboarding-eligible Employees with an empty Position Code Version, empty Initial Profile Applied On, and JobCode exactly matching this Position Code.Code. Recheck each helper target. Set an empty Employee.Position Code to this code, retain an already matching code, and set the empty Employee.Position Code Version to the new publication. Hold conflicting current-code records for support review; never overwrite a populated version. Retain helper links. Do not use the ordinary Employees usage grid as this population.
6. **Complete the workflow.** Terminate Position Code in **Completed**. There is no transition to another ordinary stage and no cancellation. Complete the new version, current-version reference, eligible Employee assignments and workflow completion together.
7. **Continue Employee preparation after commit.** Invoke the existing preparation described in 8.2 only after publication succeeds. Employee membership preparation is not another Position Code workflow stage. Serialize Employee/helper arrivals against first publication so each Employee joins this release or captures the committed publication afterward.
8. **Handle failure.** Roll back all publication, activation, eligible Employee writeback and workflow-completion effects. Preserve saved authoring edits for correction, leave Position Code in Initial Setup and leave its current version empty. Do not create another version blindly if the previous attempt’s result is uncertain.

**Error messages — proposed wording:**

| Condition | Message |
|---|---|
| User not authorized | You are not authorized to publish this Position Code. |
| Missing/inactive Login Location Rule | Select an active Login Location Rule before publishing. |
| Unsaved/stale authoring revision | Save your changes and reload the latest Position Code before publishing. |
| Invalid groups, duplicate Role or invalid location basis | Review the group and Role selections before publishing. |
| Required deferred Role behavior | This profile requires Role setup that has not yet been completed. |
| Workflow status and current-version reference disagree | The Position Code status and published version do not agree. Contact support. |
| Publication or eligible Employee assignment fails | Publication could not be completed. The previous published setup remains unchanged. |
| Duplicate/in-progress attempt or uncertain prior outcome | A publication attempt is already being processed or needs its result checked. |

**Notifications:** Publish sends no additional custom completion notification. The one-time setup notification is the separate creation/helper-link automation in 9.4. Native default completion emails remain to be checked.

### 9.3 Publish link after completion

- **Record status:** Completed; no active workflow stage.
- **Link name:** Publish.
- **Visible to the user:** Yes, for authorized Administrators.
- **Logic:** Publish a saved authoring revision using the same permission checks, validation, immutable-copy rules, locking and error messages as the initial action. Require Completed and an existing Current Published Version. Create a new immutable version and update Current Published Version. Skip Source Employee writeback and workflow completion; stay in Completed without reopening or restarting workflow.
- **Failure:** Preserve the previous published version, Completed status and saved authoring edits.
- **Notifications:** No additional custom publication notification.
- **Existing Employees:** Never replace captured Position Code Version values or replay initial memberships.

This is a form-link operation, not a second workflow action. Ordinary Save, Employee handlers, background retries and catalogue maintenance are also not stage actions.

### 9.4 Related setup notification

This is automatic processing associated with initial record creation, not a user workflow action.

- **Trigger/decision:** An integration-created Position Code has Created by Paylocity Integration=TRUE, Setup Notification Sent=FALSE, and at least one Employee linked in Source Employees. Wait for Employee.[Helper] Create New Position Code Relation and its inverse to be established before sending.
- **Visible to the user:** No action/button; recipients receive the message.
- **Template:** Position Code Setup Required (proposed name; actual template ID TBD).
- **Recipients:** Current users in the Administrators group; exact native recipient expression TBD. No CC/BCC requirement supplied.
- **Content:** Position Code link, source Employees available at sending time, link to the live Source Employees grid, and instructions to configure the record and select Publish.
- **Set value:** Set Setup Notification Sent=TRUE only after successful delivery.
- **Failure/retry:** Retain FALSE and native failure evidence; retry with native delivery deduplication so a successful setup message is not duplicated.
- **Exclusions:** No message for manual code creation, later source arrivals after successful notification, or subsequent publication. No reminder or escalation is currently defined.

**Confirmed:** the documented stage/status, Administrators responsibility, no automatic Due Date/calendar/escalation, available exits, terminal editing/publication behavior and custom-notification policy. **Native implementation still requiring verification:** status/assignment/action identifiers, template/recipient and default-email bindings consistent with that policy, Completed edit/link execution, transaction/retry support and helper-link event timing. Confirmation of the business parameters does not claim verified deployed configuration. Section 11 supplies the Administrators-only application permission standard; its native enforcement remains an implementation matter. Requirements EM-001, EM-002, EM-004, EM-005, EM-011 and EM-012 govern this section; implementation closure remains in 12.4.

## 10 Boomi payload and establishment contract

| Input/control | Employee-only creation | Account activation | Later update |
|---|---|---|---|
| Endpoint | POST /api/v2/EmployeeUserAccess | PATCH /api/v2/EmployeeUserAccess({Employee.Id}) | PATCH same native Id |
| EmployeeNumber | Required; maps to Employee.Number | Verify identity | Stable key |
| JobCode | Required integration Position Code | Consistent current value if included | Source update without membership replay |
| FirstName / LastName | Required | Intended changes only | Intended changes only |
| HomeLocationCode | Required governed establishment | Must match preparation home snapshot | Approved establishment update |
| DateOfHire | Required onboarding; Employee.DateHired is Date | Omit unless changed | Confirm endpoint calendar-date format |
| IgnoreUserAccess | TRUE | FALSE after profile/SSO readiness | Governed behavior |
| UserId / LicenseType / LoginLocationCode | No account requested | Required; login code from Initial Login Location | Do not routinely overwrite manual login assignment |
| Groups | Omit | Omit | Omit |
| RemoveFromUnlistedGroups | FALSE | FALSE | FALSE |
| RemoveFromUnlistedBusinessHierarchies | FALSE | FALSE | FALSE |
| SendEmail | FALSE proposed for SSO | FALSE proposed for SSO | Governed behavior |
| Other flags | Boomi-controlled and validated | Same | Approved revoke/archive/PRL policy |
| Custom Employee fields | Never send to this endpoint | Read via Object Data API | Native handlers maintain |

The official API documents supported JobCode, required employee identity/location/name, employee-only creation through IgnoreUserAccess, required account fields when requesting access, Id in successful POST and 204 on PATCH. Those properties do not establish native event or membership-write behavior. See the [official reference](https://developers.intelex.com/#user-management-api).

Before retrying POST reconcile Employee.Number: zero matches permits create; one valid match resumes its Id; multiple matches hold. Timeout is unknown outcome. Serialize per EmployeeNumber. Never recreate Employee to recover native profile failure. Preserve Boomi/native correlation and error evidence.

Optional endpoint mappings require explicit Boomi allowlist, actual capacities/date formats and omission-versus-clear semantics. No staging copies or credential fields are created. Password properties are unnecessary for this SSO path. Business hierarchy input is excluded under current single-hierarchy direction.

### 10.1 Establishment assignment

Boomi resolves establishment before delivering HomeLocationCode. Recalculate for a new employee, relocation or job change using the [user-supplied establishment flow](<raw artifacts/2026-10-28-establishment-assignment-flow.md>). Apply the following table in order; the first matching branch ends the calculation.

| Order | Condition | Establishment result |
|---|---|---|
| 1 | Employee is assigned to, or works at, an established site | That established site |
| 2 | Branch 1 does not apply; remote employee is a California resident | San Diego site |
| 3 | Branches 1 and 2 do not apply; remote employee is not a California resident | Established site designated as the main location for the employee’s job function |

An employee assigned to an established site follows branch 1 even if resident in California. Residence determines branch 2 only after branch 1 is excluded. Reporting-chain traversal is not required by this supplied flow. Job function is a business input and must not be assumed to be JobCode/Position Code without an explicit source mapping.

The result supplies Employee Home Location through HomeLocationCode. It is separate from the Position Code Login Location Rule and does not reapply initial Position Code memberships when establishment changes. The supplied flow addresses employee hours and injury/illness accounting on OSHA Forms 300, 300A and 301; event-specific attribution and overrides remain governed by Incident Management.

| Remaining input or exception | Required closure or behavior |
|---|---|
| Assigned/actual established site | Supply source fields, established-site classification and valid source-site-to-LocationCode mapping |
| Conflicting assigned and actual sites, or multiple sites | Supply the resolution rule; hold affected delivery rather than select an arbitrary site |
| Remote California resident | Supply the residence-state field/value mapping and San Diego LocationCode |
| Remote outside California | Supply the job-function source field and job-function-to-main-established-site mapping, with a maintenance owner |
| Missing or conflicting required inputs/mappings | Hold affected inbound creation or establishment update; no guessed corporate/San Diego default. An unknown branch-1 condition or residence is not a No answer |
| Authorized correction | Durable governed upstream correction wins until explicitly cleared; authority and clear/precedence rules remain open |

Correction authority must be accessible to Boomi and retain actor/reason evidence. An Intelex Location edit alone must not be assumed to survive a feed. This specification does not invent a Boomi datastore or custom override input to EmployeeUserAccess; selecting durable correction storage remains open. Every mapped LocationCode must be nonempty/unambiguous although baseline requiredness is optional.

### 10.2 Pre-start

Proposed daily selection includes eligible hires about seven calendar days ahead, with timezone and catch-up/history bounds to be approved. Minimum inputs: unique EmployeeNumber, name, DateOfHire, JobCode and valid establishment. Publication no longer gates Employee existence; it gates preparation/account readiness.

Email/SSO identity can arrive later. Unknown codes remain visible through existing waiting Employees and setup notification. Employee existence alone does not prove training memberships have been assigned.

## 11 Permissions forms and evidence

| Principal | Permission |
|---|---|
| Boomi identity | Supported endpoint writes and restricted native Employee readiness reads; no separate non-Administrator visibility to Employee Integration Manager objects, publishing or checkpoint edits |
| Native handler/service | Required resolve/capture/publication/membership writes under a verified trusted effective context consistent with Administrators-only application-object access; no assumed security bypass |
| Administrators | Only group allowed to view Employee Integration Manager and its six custom objects; authoring edits in Initial Setup and Completed, Publish link, catalogues and controlled reconciliation; committed versions remain immutable |
| Support activity | Performed by Administrators for application profiles/source grids/error views and approved retry; no separate Support-group application visibility grant |
| Ordinary users | Existing native Employee access in its owning application; no Employee Integration Manager visibility or provisioning administration |

Position Code form shows editable working configuration, Current Published Version, read-only version history and the Publish link in both Initial Setup and Completed. Its three subtype-filtered authoring Groups grids share one relationship; exclude Roles. Maintain Source Employees as the background inverse of [Helper] Create New Position Code Relation, with Administrators-only visibility. Ordinary Employees remains a separate usage view over Employee.Position Code. Show the HOME_PARENT fallback hint and distinguish unpublished edits from active configuration. Published version forms are read only and offer no draft/edit/create actions. Verify native subtype filters; no invented TYPEOF expression.

No Audit Trail or audit-retention setup is required for this application, its mutable profiles/relationships or the Employee extension work. Leave Audit Trail disabled on new custom objects and make no native-object audit change. Published versions/children remain immutable through form, API/import and direct access. Enforce Administrators-only application visibility through direct URLs, API, imports, search, exports and relationship navigation. Existing native Employee access remains governed by its owning application; the new preparation section and application-object drill-through are restricted. Reuse native execution/error/notification logs for operational processing.

## 12 Changes and validation

### 12.1 Change summary and migration

| Change ID | Action | Element | Baseline / prior target | Current target | Requirement | Rationale | Confidence |
|---|---|---|---|---|---|---|---|
| CH-08 | Add | Employee Integration Manager application | Placement previously unresolved | Six new custom objects in a new Administrators-only application | EM-011 | User-confirmed application boundary | Confirmed October 29 |
| CH-09 | Remove from target | Audit Trail setup/retention | Earlier enablement proposal | Not required; disabled on new objects; native object audit unchanged | EM-011 | Explicit user decision | Confirmed October 29 |
| CH-01 | No structural change | Subject/Group/Location/Work Groups | Native structures | Reuse | EM-003, EM-011 | Preserve shared metadata | High |
| CH-02 | Modify | Employee | Native JobCode; prior source link proposal | Profile capture/completion extensions plus [Helper] Create New Position Code Relation | EM-001, EM-005–008 | Direct boundary | High design confidence |
| CH-03 | Modify target | Profiles/choices | Earlier version-side Draft workflow | Six custom objects: editable Position Code with initial-only workflow, Publish-created immutable versions and Employee.Position Code Version | EM-001–005, EM-012 | User-confirmed authoring direction | High design confidence |
| CH-07 | Replace | Single Source Employee and release population | Previous scalar source reference and ordinary usage grid | Source Employees inverse of the new Employee helper; first completion assigns both current code and immutable version | EM-001, EM-002, EM-005 | Track all Employees introducing an unpublished code | User-confirmed |
| CH-04 | Remove from target | Source/settings, source link, helper payload and APIHub trigger | Prior draft only | Absent from current field contract | EM-006–008 | Direct transport | Confirmed |
| CH-05 | Modify | Gate | Publication before Employee create | Proposed profile/account hold after create | EM-010 | No presumed interception | Requires prototype |
| CH-06 | Modify | Correction authority | Custom source override proposal | Upstream governed correction | EM-009 | Supported direct payload | Requires decision |

Keep baseline JSON unchanged. If old proposed staging was actually implemented, inventory records/dependencies and plan separate migration before deactivation. No deployed deletion follows from a documentation removal.

Do not bulk-enroll existing Employees. Reconcile identity and explicitly select migration population before enabling origin marking. Preserve existing memberships/manual exceptions. Implement and seed the section 6 catalogues first; configure the remaining object names and relationships, publish required profiles and prove native event behavior, first workflow completion, and republishing while Completed before activating the feed.

Rollback disables enrollment, continuation and account activation while preserving Employees/evidence. Reversing applied access requires explicit reconciliation, not automatic deletion/removal.

README reflects direct transport. ADR-001 is reconciled; accepted ADR-003 and the historical detailed source artifact still need formal transport reconciliation; section 2.2 explicitly supersedes obsolete implementation details. Training/Document Control must tolerate the interval from Employee creation to group application.

### 12.2 Traceability

| Requirement | Affected elements | Response | Status |
|---|---|---|---|
| EM-001 | JobCode, Employee.Position Code | Exact discovery/resolution | Requires confirmation |
| EM-002 | Origin/Source Employees helper grid | One notification after helper association; includes available source Employees | Requires confirmation of relationship event order/deduplication |
| EM-003 | Groups/Role rows | Shared ancestor; separate Roles | Partially satisfied; Roles deferred |
| EM-004 | Position Code workflow/link and immutable graph | Initial Publish completes workflow; later Publish remains Completed | Requires confirmation of native atomicity and terminal edit/link behavior |
| EM-005 | Employee helper, Source Employees, Position Code and Position Code Version | First workflow completion assigns code and immutable version to eligible source Employees; no recapture | Satisfied in proposed design |
| EM-006 | Native routine/checkpoint | Post-commit idempotent application | Requires confirmation |
| EM-007 | Direct Boomi endpoint | JobCode and supported properties | Requires confirmation of proposed account sequence |
| EM-008 | Id/Number | Retry reconciliation | Requires confirmation |
| EM-009 | Boomi rules | Deterministic correction precedence | Partially satisfied |
| EM-010 | Readiness/SSO | Employee first, account later | Requires confirmation of activation proposal |
| EM-011 | Application context/access/operational evidence | Employee Integration Manager; Administrators-only application visibility; no Audit Trail | Business policy confirmed October 29; native enforcement/context unverified |
| EM-012 | Role boundary | Explicit deferral | Satisfied as draft boundary |

### 12.3 Acceptance criteria

1. POST.JobCode populates Employee.JobCode with no custom endpoint properties.
2. Allowlisted integration creation enrolls once; manual creation is not enrolled merely by nonempty JobCode.
3. Case-distinct codes remain distinct; concurrent discovery creates one authoring Position Code with one initial workflow and a deduplicated setup message.
4. Creation checks JobCode then FETCHVALUE; a nonnull code captures its current version, while a null code triggers one authoring record/workflow; worker timing cannot substitute a later publication.
5. An existing unpublished code does not create a duplicate. Unknown/unpublished codes allow employee-only existence; first workflow Publish fills all eligible waiting Employees through Source Employees before Completed.
6. Native routine adds missing memberships once, preserves unrelated memberships and stamps completion last.
7. Assignment occurs after inbound writes; subsequent access PATCH preserves memberships.
8. Partial failure leaves checkpoint empty; retry converges without duplicate membership or Employee.
9. Every Boomi operation omits Groups and keeps both removal controls FALSE.
10. Later JobCode changes never replace capture, replay memberships or overwrite manual login exceptions.
11. HOME_PARENT fallback works; missing codes/changed preparation home location hold access.
12. First Publish creates immutable version/rows, assigns waiting Position Code Version values and terminates authoring workflow to Completed together; failure rolls all of those changes back while preserving authoring edits.
13. Profile and SSO/license/login readiness permit account PATCH against existing Employee; no earlier activation under proposed policy.
14. Timeout retry reconciles Number/Id without duplicate create.
15. Only Administrators can view Employee Integration Manager objects through API, forms, imports, URLs, exports, search and relationship navigation; immutable versions and Employee preparation fields remain protected.
16. Profiles needing deferred Roles remain incomplete.
17. Position Code stays editable in Completed; later Publish creates a new immutable snapshot without reopening workflow or changing existing Employee versions.
18. Editing authoring scalar/Groups/Role rows does not change any existing immutable version or active provisioning before Publish.
19. Employees racing first publication either join the initial release or capture the committed active version; none are lost from Source Employees.
20. Multiple Employees introducing the same unpublished code have distinct helper M:1 assignments to that one authoring record and appear together in Source Employees; first completion fills each eligible current code/version reference.
21. Ordinary Employees navigation is not used as the first-completion work population; changing a current Position Code later does not erase the retained helper origin evidence.
22. Notification waits for at least one source-helper link; later source Employees do not trigger another successful setup message.
23. Blank JobCode causes no record search or creation; ambiguous or failed FETCHVALUE does not create a new code; double-click/retry cannot publish duplicate versions.

24. The six custom objects belong to Employee Integration Manager with Audit Trail disabled; native Employee remains in its owning application and no native Audit Trail setting is changed.
25. Workflow uses confirmed Initial Setup, active/nonterminal status, Administrators responsibility, no automatic Due Date/calendar/escalation and Publish to terminal Completed; later Publish remains Completed.

### 12.4 Open decisions and implementation status

**Accepted design; external implementation constraints remain unresolved.** Acceptance records agreement with this specification, not completion of configuration or verification of native operations and integration timing.

| ID | Open item | Closure |
|---|---|---|
| OPEN-01 | Location-qualified Roles | Resume assignment design |
| OPEN-02 | Authoring Publish mechanism | Prove immutable graph/pointer/Employee/workflow atomicity, Completed editing/link execution and retry deduplication |
| OPEN-03 | Native operations | FETCHVALUE return, GETRELATED create, helper M:1 and Source Employees inverse events, notification-after-link ordering, workflow initialization, create/publish race, after-commit memberships and recursion |
| OPEN-04 | Account sequence feasibility | Supply verified employee-only POST then ready-profile access PATCH behavior with membership continuity |
| OPEN-05 | Establishment | Ordered rule supplied; source fields, site/California/job-function mappings, conflicting-site resolution and durable correction authority remain open |
| OPEN-06 | Lifecycle | Leave, termination, withdrawal, rehire, identity changes and PRL |
| OPEN-07 | Schedule | Feed/service cadence, timezone, catch-up and minimum data |
| OPEN-08 | Metadata/reads | Native capacities, actual allocated identifiers, Boomi read paths/effective permissions and endpoint formats; application name/placement is confirmed |
| OPEN-09 | Operational evidence | Native notification deduplication, execution/error read paths and Administrator support ownership; no Audit Trail/retention decision remains |
| OPEN-10 | Code/home mismatch | Approve hold/reconciliation without recapture |
| OPEN-11 | ADR reconciliation | ADR-001 revised; formally reconcile accepted ADR-003’s prior transport outcome and historical source requirements |

The prior version-owned workflow, Predecessor field, manual version Draft creation and copy-back publication model are absent from the current target field contracts. The singular Source Employee field is removed from the target; Source Employees is now the inverse of the dedicated Employee helper, not of Employee.Position Code. No native object is removed/reparented. Catalogue inverses are disabled. Each current object has a numbered field section; inherited fields remain declared once. Unknown settings are not promoted to verified values. No executable unverified formula or scripted native setter is fabricated.

## 13 Existing object field contracts

These preservation tables retain the returned baseline properties other than the automatically managed Id field; do not recreate them. The complete extracted metadata retains all 287 properties, including native Id fields. Native fields retain permissions, validation and lifecycle. Required audit/reference-ID properties are generated natively, not supplied by Boomi. Unknown capacities, timezone behavior and relationship settings remain unresolved.

### 13.1 Subject

**System name:** SysSubjectEntity. **Inheritance parent:** None. **Directly declared fields:** 13 properties are listed below from the returned declaring Object collection; inherited fields remain on their base object. Native Id is omitted and retained in metadata. **Initial values:** Existing records retained; no seeds.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Cascade Deleted (CascadeDeleted) | bit | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Created By (CreatedBy) | Relationship to SysEmployeeEntity; cardinality/inverse unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Created By Id (CreatedById) | uniqueidentifier | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Date Created (DateCreated) | datetime; timezone unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Date Modified (DateModified) | datetime; timezone unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Deleted (Deleted) | bit | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Is System (IsSystem) | bit | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Member Of (MemberOf) | M:N to SysGroupEntity; inverse Members; same native association, user-confirmed | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Modified By (ModifiedBy) | Relationship to SysEmployeeEntity; cardinality/inverse unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Modified By Id (ModifiedById) | uniqueidentifier | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Name (Name) | nvarchar; capacity unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Rights (Rights) | Relationship to SecRightEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Time Stamp (TimeStamp) | timestamp | Y | No configured default/calculation returned; retain native behavior | Read only; retain native population; mechanism unresolved unless stated | No structural change; retain native lifecycle |

### 13.2 Group

**System name:** SysGroupEntity. **Inheritance parent:** SysSubjectEntity. **Directly declared fields:** 6 properties are listed below from the returned declaring Object collection; inherited fields remain on their base object. Native Id is omitted and retained in metadata. **Initial values:** Existing records retained; no seeds.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Default Toolbar Id (DefaultToolbarId) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Description (Description) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Icon (Icon) | Icon | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Members (Members) | M:N to SysSubjectEntity; inverse MemberOf; same native association, user-confirmed | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Programs (Programs) | Relationship to ProgramFmk_ProgramAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Requirements Based on Group (ReqGenGroup) | Relationship to ProgramFmk_ReqGroupObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |

### 13.3 Work Groups

**System name:** FragApplication_WorkGroupsObject. **Inheritance parent:** SysGroupEntity. **Directly declared fields:** 4 properties are listed below from the returned declaring Object collection; inherited fields remain on their base object. Native Id is omitted and retained in metadata. **Initial values:** Existing records retained; no seeds.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Migration ID (MigrationID) | bigint | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Record No. (RecordNo) | AutoNumber | N | Sequence starts 1, increment 1 | Read only; retain native population; mechanism unresolved unless stated | No structural change; retain native lifecycle |
| Work Group Code (WorkGroupCode) | nvarchar; capacity unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Work Group Name (WorkGroupName) | nvarchar; capacity unresolved | N | Existing calculation: inherited Name | Read only; retain native population; mechanism unresolved unless stated | No structural change; retain native lifecycle |

### 13.4 Employee

**System name:** SysEmployeeEntity. **Inheritance parent:** SysSubjectEntity. **Directly declared fields:** 54 properties are listed below from the returned declaring Object collection; inherited fields remain on their base object. Native Id is omitted and retained in metadata. **Initial values:** Existing records retained; no seeds.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| CAR Abstracts (CARAbstracts) | Relationship to ComplyFramework_CARAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| City (City) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Company (Company) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Contract Expiry (ContractExpiry) | datetime; timezone unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Contractor Name (ContractorName) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Contractor Notes (ContractorNotes) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Date Hired (DateHired) | Date | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | Reuse for API DateOfHire; Date without timezone conversion |
| Date Of Birth (DateOfBirth) | Date | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Discipline (Discipline) | Relationship to ComplyFramework_DisciplineObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Email (Email) | EmailAddress; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Emergency Contact (EmergencyContact) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Emergency Phone (EmergencyPhone) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Employee Type (EmployeeType) | Relationship to SysEmployeeTypeEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Employee Type Id (EmployeeTypeId) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| First Name (FirstName) | nvarchar; capacity unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Full Name (FullName) | nvarchar; capacity unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Gender (Gender) | char; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Home Address (HomeAddress) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Hourly Wage (HourlyWage) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| IH Contexts (IHContexts) | Relationship to IH2_ContextObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| IH Sessions (IHSessions) | Relationship to IH2_SampleAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Insurance Expiry (InsuranceExpiry) | datetime; timezone unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Internal Technicians (InteTechnicians) | Relationship to RefManagementV2_QualifiedTechObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Is Contracted (IsContracted) | bit | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Is Supervisor (IsSupervisor) | bit | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Is System Employee (IsSystemEmployee) | bit | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Job Code (JobCode) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Populated through supported EmployeeUserAccess.JobCode input; profile handler reads it | Confirmed Position Code input; resolve exact value against Position Code.Code; no retype |
| Last Name (LastName) | nvarchar; capacity unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Location (Location) | Relationship to SysLocationEntity; cardinality/inverse unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Location Id (LocationId) | uniqueidentifier | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Middle Name (MiddleName) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Notes (Notes) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Number (Number) | nvarchar; capacity unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Occupational Health Record (HR) | Relationship to OH_HRObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Phone (Phone) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Position (Position) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Prefix (Prefix) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Qualification Programs (ProgStatuses) | Relationship to ProgramFmk_ProgramStatusObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Records (Records) | Relationship to ProgramFmk_RecordAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Requirement Based on Employee (ReqGenEmployee) | Relationship to ProgramFmk_ReqEmployeeObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Requirement Statuses (ReqStatuses) | Relationship to ProgramFmk_ReqStatusObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Responsibility (Responsibility) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Social Security (SocialSecurity) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| State (State) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Suffix (Suffix) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Supervisor (Supervisor) | Relationship to SysEmployeeEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Supervisor Id (SupervisorId) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Supervisor Of (SupervisorOf) | Relationship to SysEmployeeEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Training Location. (TraininLocation) | Relationship to SysLocationEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Read only; retain native population; mechanism unresolved unless stated | No structural change; retain native lifecycle |
| Training Location. Id (TraininLocationID) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Work Status (WorkStatus) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Workflow (Workflow) | Relationship to SysWorkflowInstanceEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Workflow Id (WorkflowId) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Zip Code (ZipCode) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |

**Proposed additional Employee fields:**

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| Managed by Employee Integration? | Yes/No; system name TGIntegrationManaged | Y | FALSE by default; TRUE on create by allowlisted Boomi identity | Read only; Administrators visible; manual/nonintegration creation stays FALSE | Employee create handler verifies actor context; no custom endpoint input; no automatic enrollment of existing Employees |
| Position Code | M:1 to Position Code; 0..1; inverse Employees enabled; TGPositionCode | Conditional | FETCHVALUE exact Code = native Employee.JobCode; first workflow completion also fills an eligible empty relation from helper target | Read only; required for preparation; empty JobCode clears current relation while preserving captured version/origin evidence after completion | Existing code matching resolves immediately; new-code branch may leave NULL while helper tracks origin; first Publish assigns this field before Position Code Version; ordinary Employees inverse is usage navigation |
| [Helper] Create New Position Code Relation | M:1 to Position Code; 0..1 per Employee; inverse Source Employees enabled (1:M); proposed system name TGHelperCreateNewPositionCodeRelation | N | NULL; Employee discovery handler assigns newly created or existing unpublished authoring Position Code | Handler-maintained/read only; used while awaiting initial publication; clear/re-resolve on pre-publication JobCode clear/change when no version is captured; retain after successful initial assignment as origin evidence | Distinct from current Employee.Position Code; records initial workflow participation, supports many originating Employees and first-completion assignment; never supplied as custom EmployeeUserAccess input |
| Position Code Version | M:1 to Published Position Code; 0..1; inverse Employees enabled; TGPositionCodeVersion | Conditional | On creation copy resolved Position Code.Current Published Version; otherwise NULL | Read only/write-once; required for initial profile application; retain on JobCode clear/change | Employee Action Handler captures existing active version; initial Position Code Publish selects Source Employees through [Helper] Create New Position Code Relation and fills only eligible empty captures; never recapture |
| Initial Login Location | M:1 to SysLocationEntity; 0..1; inverse disabled; TGInitialLoginLocation | Conditional | Captured Login Location Rule applied to Employee.Location | Read only; NULL until prepared; required with Initial Profile Applied On; retain afterward | Native routine assigns reference; Boomi later reads LocationCode for user-access PATCH |
| Initial Profile Home Location | M:1 to SysLocationEntity; 0..1; inverse disabled; TGInitialProfileHomeLocation | Conditional | Employee.Location at successful initial preparation | Read only; required with Initial Profile Applied On; retain afterward | Preparation snapshot; changed current Home Location before account creation holds activation for reconciliation |
| Initial Profile Applied On | Date/Time with timezone enabled; TGInitialProfileAppliedOn | N | NULL; native routine stamps server time after all membership/reference operations succeed | Read only; retained after completion; never cleared automatically by later feeds | Initial preparation checkpoint, not account-created marker or custom workflow state; set last under lock |


### 13.5 Location

**System name:** SysLocationEntity. **Inheritance parent:** None. **Directly declared fields:** 205 properties are listed below from the returned declaring Object collection; inherited fields remain on their base object. Native Id is omitted and retained in metadata. **Initial values:** Existing records retained; no seeds.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
|---|---|---|---|---|---|
| # Indicators (NbIndicators) | nvarchar; capacity unresolved | N | Existing calculation retained; see metadata | Read only; retain native population; mechanism unresolved unless stated | No structural change; retain native lifecycle |
| a type of Health Record (OHLogAbsObject) | Relationship to OH_LogAbsObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| a type of Medical Surveillance (OHTestAbsObject) | Relationship to OH_TestAbsObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Absence (ClaimsMgmtAbsenceObject) | Relationship to ClaimsMgmt_AbsenceObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Abstract Corrective Action (FragApplicationAbCorrectivActiObject) | Relationship to FragApplication_AbCorrectivActiObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Abstract Cost (FragApplicationAbstractCostObject) | Relationship to FragApplication_AbstractCostObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Abstract Incident Regulation (EHSIncidentMangAbstractIncRegObject) | Relationship to EHSIncidentMang_AbstractIncRegObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Abstract Province Claim (FragApplicationAbProvinceClaimObject) | Relationship to FragApplication_AbProvinceClaimObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Abstract Requirement (ComplianceFmkRequirementObject) | Relationship to ComplianceFmk_RequirementObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Access Groups (AccessGroups) | Relationship to FragApplication_LocAccessGroupObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Activity / Product / Service (EnvAspImpActivityPSObject) | Relationship to EnvAspImp_ActivityPSObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Approval (DocCtrlApprovalObject) | Relationship to DocCtrl_ApprovalObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Area (Area) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Assessment (CFW) (CFWAssessmentObject) | Relationship to CFW_AssessmentObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Assessment Context (CFWContextObject) | Relationship to CFW_ContextObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Assessment Result Abstract (RiskFmkAResultAbstractObject) | Relationship to RiskFmk_AResultAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Asset (FragApplicationAssetObject) | Relationship to FragApplication_AssetObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Asset Version (AssetManagerAssetVersionObject) | Relationship to AssetManager_AssetVersionObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Attendee (MeetManagementAttendeeObject) | Relationship to MeetManagement_AttendeeObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Audit Scheduler (AuditMgmtCorporateAuditObject) | Relationship to AuditMgmt_CorporateAuditObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Auditee Checklist Map (AFWAuditeeCLMapObject) | Relationship to AFW_AuditeeCLMapObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Auditor (AFW) (AFWAuditorObject) | Relationship to AFW_AuditorObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Business Hierarchies (BusinessHierarchies) | Relationship to SysBusinessHierarchyEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Business Units (BusinessUnits) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| CAR Abstract (ComplyFrameworkCARAbstractObject) | Relationship to ComplyFramework_CARAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Cascade Deleted (CascadeDeleted) | bit | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Case Abstract (OHCaseAbsObject) | Relationship to OH_CaseAbsObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Certification Requirement (SupplierMgmtCertRequirementObject) | Relationship to SupplierMgmt_CertRequirementObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Chain of Custody (IH2CoCObject) | Relationship to IH2_CoCObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Change Plan (DocCtrlChangePlanObject) | Relationship to DocCtrl_ChangePlanObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Change Request Abstract (DocCtrlChangeReqAbsObject) | Relationship to DocCtrl_ChangeReqAbsObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Checklist Abstract (CLFCheckliAbstractObject) | Relationship to CLF_CheckliAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Checklist Answer (CLFChecklistAnswerObject) | Relationship to CLF_ChecklistAnswerObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Child Locations (ChildLocations) | Relationship to SysLocationEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| City (City) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Claim (ClaimClaimObject) | Relationship to Claim_ClaimObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Claim (ClaimsMgmtClaimObject) | Relationship to ClaimsMgmt_ClaimObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Communication (ClaimsMgmtCommunicationObject) | Relationship to ClaimsMgmt_CommunicationObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Communication (Communicationv6CommunicationObject) | Relationship to Communicationv6_CommunicationObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Compliance Audit (ComplianceFmkComplianceAuditObject) | Relationship to ComplianceFmk_ComplianceAuditObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Compliance Dashboard (ComplianceFmkDashboardObject) | Relationship to ComplianceFmk_DashboardObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Compliance Task Definition (ComplianceFmkCompTaskDefObject) | Relationship to ComplianceFmk_CompTaskDefObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Container Type (WasteManagementContainerTypeObject) | Relationship to WasteManagement_ContainerTypeObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Country (Country) | Relationship to SysCountryEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Country Id (CountryId) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| County (County) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Created By (CreatedBy) | Relationship to SysEmployeeEntity; cardinality/inverse unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Created By Id (CreatedById) | uniqueidentifier | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Cylinder Movement (RefManagementV2CyclindMovementObject) | Relationship to RefManagementV2_CyclindMovementObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Data Entry Form (SPIDataSheetObject) | Relationship to SPI_DataSheetObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Data Library (SustainPerformDataLibraryObject) | Relationship to SustainPerform_DataLibraryObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Date Created (DateCreated) | datetime; timezone unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Date Modified (DateModified) | datetime; timezone unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Deleted (Deleted) | bit | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Depth (Depth) | bigint | N | Existing calculation retained; see metadata | Read only; retain native population; mechanism unresolved unless stated | No structural change; retain native lifecycle |
| Description (Description) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Dimension Assignment (ReportsDimenAssignmentObject) | Relationship to Reports_DimenAssignmentObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Disposal Abstract (WasteManagementDisposaAbstractObject) | Relationship to WasteManagement_DisposaAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Disposal Abstract (DispsalAbstract) | Relationship to WasteManagement_DisposaAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Distribution Configuration (DocCtrlDistribConfigObject) | Relationship to DocCtrl_DistribConfigObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Distribution History (DocCtrlDistribHistoryObject) | Relationship to DocCtrl_DistribHistoryObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| District (District) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Division (Division) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Document (QPDocObject) | Relationship to QP_DocObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Document Import Data Record (DocCtrlsummitDocImptObject) | Relationship to DocCtrl_summitDocImptObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Document Revision (QPDocRevObject) | Relationship to QP_DocRevObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Documentation Requirement (SupplierMgmtDocRequirementObject) | Relationship to SupplierMgmt_DocRequirementObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Early Access Distribution (DocCtrlEarlyAccessDistObject) | Relationship to DocCtrl_EarlyAccessDistObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Emergency Response Phone (EmResponsePhone) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Employees (Employees) | Relationship to SysEmployeeEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Enhesa Applicability Study (EnhesaApplicabilStudyObject) | Relationship to Enhesa_ApplicabilStudyObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Enhesa Applicability Study (ApplicabilStudy) | Relationship to Enhesa_ApplicabilStudyObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Enhesa Applicability Study Id (ApplicabilStudyID) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Equipment (FragApplicationEquipmentObject) | Relationship to FragApplication_EquipmentObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Event Scenario (EventFwkEventScenarioObject) | Relationship to EventFwk_EventScenarioObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Exposure Monitoring Context (IH2ContextObject) | Relationship to IH2_ContextObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Factor Region (EFRegion) | Relationship to SPI_EFRegionObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Factor Region Id (EFRegionId) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Fax (Fax) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Fiscal Years (FiscalYears) | Relationship to SysLocationFiscalYearEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Form Template (OHFormTemplateObject) | Relationship to OH_FormTemplateObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Generator Information (GeneInformation) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| GHG Region (GHGRegion) | Relationship to EFLibrary_GHGRegionObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| GHG Region Id (GHGRegionId) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Global Requirements (LocRequ) | Relationship to ComplianceFmk_LocRequirementsObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Governing Agency (GoverningAgencs) | Relationship to FragApplication_GoverningAgencyObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Governing Agency Id (GoverningAgencsID) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Hard-Copy Distribution (DocCtrlHardCopyDistObject) | Relationship to DocCtrl_HardCopyDistObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Hazop Control (PHAHazopControlObject) | Relationship to PHA_HazopControlObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Health Care Provider Abstract (HCPackHCProviderAbsObject) | Relationship to HCPack_HCProviderAbsObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Historical Data (SPIHistDataObject) | Relationship to SPI_HistDataObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Incident Management Behavior Profile (IMProfile) | Relationship to EHSIncidentMang_BehaviorProfileObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Incident Management Behavior Profile Id (IMProfileId) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Incident Rate Abstract (SafetyMetricsIncRateAbstractObject) | Relationship to SafetyMetrics_IncRateAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Indicator Set (FragApplicationAbsIndicatorSetObject) | Relationship to FragApplication_AbsIndicatorSetObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Indicator Set Assignment (SPILocalAssignmentObject) | Relationship to SPI_LocalAssignmentObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Indicator Value (SustainPerformIndicatorValueObject) | Relationship to SustainPerform_IndicatorValueObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Indicator Value [ESG] (SPIDataObject) | Relationship to SPI_DataObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Input Location (IsInput) | bit | N | Existing default retained; see metadata | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Inspection (RefManagementV2InspectionObject) | Relationship to RefManagementV2_InspectionObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Invoice (SPIInvoiceObject) | Relationship to SPI_InvoiceObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Item Revision (ProductMgmtItemRevisionObject) | Relationship to ProductMgmt_ItemRevisionObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Item Revision Approval (ProductMgmtItemRevApprovalObject) | Relationship to ProductMgmt_ItemRevApprovalObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Job Task (FragApplicationJobTaskObject) | Relationship to FragApplication_JobTaskObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Jurisdictions (Jurisdictions) | Relationship to ComplianceFmk_JurisdictionObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| License (License) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Local Factor Value (SPILEFObject) | Relationship to SPI_LEFObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Location /  Indicator (SustainPerformLocIndMapObject) | Relationship to SustainPerform_LocIndMapObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Location Attributes History (SPILocAttrHistObject) | Relationship to SPI_LocAttrHistObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Location Code (LocationCode) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | Validate integration mapping; no schema change |
| Location Hours and Headcount (SafetyMetricsHrsandHeadcountObject) | Relationship to SafetyMetrics_HrsandHeadcountObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Location Roles (LocationRoles) | Relationship to SysLocationRoleEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Location Screening (ComplianceFmkLocScreeningObject) | Relationship to ComplianceFmk_LocScreeningObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Maintenance Record (RefManagementV2MaintenanRecordObject) | Relationship to RefManagementV2_MaintenanRecordObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Material Item (MateriInventoryMaterialItemObject) | Relationship to MateriInventory_MaterialItemObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Material Key (MateriaDatabaseMaterialKeyObject) | Relationship to MateriaDatabase_MaterialKeyObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Medical Facility (HCPackMedicalFacilityObject) | Relationship to HCPack_MedicalFacilityObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Meeting (MeetManagementMeetingObject) | Relationship to MeetManagement_MeetingObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Message Abstract (OHMessageAbstractObject) | Relationship to OH_MessageAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| MOC (ManagemOfChangeMOCObject) | Relationship to ManagemOfChange_MOCObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| MOC Approval (ManagemOfChangeAbstMOCApprovalObject) | Relationship to ManagemOfChange_AbstMOCApprovalObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Modified By (ModifiedBy) | Relationship to SysEmployeeEntity; cardinality/inverse unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Modified By Id (ModifiedById) | uniqueidentifier | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Monitoring and Measurement (anMeasurementv6MandMeasurementObject) | Relationship to anMeasurementv6_MandMeasurementObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Monitoring and Measurement History (anMeasurementv6MeasuremHistoryObject) | Relationship to anMeasurementv6_MeasuremHistoryObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| NAICS Code (NAICSCode) | bigint | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Name (Name) | nvarchar; capacity unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Node (QPNodeAbstractObject) | Relationship to QP_NodeAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Objective Plan / Location (SPIObjPlanLocObject) | Relationship to SPI_ObjPlanLocObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Occupational Health Record (OHHRObject) | Relationship to OH_HRObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| OSHA Abstract (SafetyMetricsOSHAAbstractObject) | Relationship to SafetyMetrics_OSHAAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Overdue Setups (OverdueSetups) | Relationship to NtfOverdueSetupEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Parent Id (ParentId) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Parent Location (ParentLocation) | Relationship to SysLocationEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Path (Path) | nvarchar; capacity unresolved | Y | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Periodic Review (DocCtrlPeriodicReviewObject) | Relationship to DocCtrl_PeriodicReviewObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Permit (PermiManagementMasterPermitObject) | Relationship to PermiManagement_MasterPermitObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Permit Activity (PermiManagementPermitActivityObject) | Relationship to PermiManagement_PermitActivityObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Permit Record (PTWPermitRecordObject) | Relationship to PTW_PermitRecordObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Permit Version (PermiManagementPermitObject) | Relationship to PermiManagement_PermitObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Phone (Phone) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Plan (IH2PlanObject) | Relationship to IH2_PlanObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Product Abstract (FragApplicationProductObject) | Relationship to FragApplication_ProductObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Product Group (ProductGroup) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Profiles (Profiles) | Relationship to SPI_ProfileObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Program Status (ProgramFmkProgramStatusObject) | Relationship to ProgramFmk_ProgramStatusObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Project (QPProjectObject) | Relationship to QP_ProjectObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Project Abstract (ProjectFwkProjectAbstractObject) | Relationship to ProjectFwk_ProjectAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Project Revision (QPProjRevObject) | Relationship to QP_ProjRevObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Property (MateriaDatabasePropertyObject) | Relationship to MateriaDatabase_PropertyObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Public Profile (SupplierMgmtPublicProfileObject) | Relationship to SupplierMgmt_PublicProfileObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Qualified Technician (RefManagementV2QualifiedTechObject) | Relationship to RefManagementV2_QualifiedTechObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Qualified Technician (RefManagementV2QualiTechnicianObject) | Relationship to RefManagementV2_QualiTechnicianObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Questionnaire (CFW) (CFWQuestionnaireObject) | Relationship to CFW_QuestionnaireObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Questionnaire Template Abs (OHQNNTAbsObject) | Relationship to OH_QNNTAbsObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Raw Data Staging (SPIRawDataStagingObject) | Relationship to SPI_RawDataStagingObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Record Abstract (ProgramFmkRecordAbstractObject) | Relationship to ProgramFmk_RecordAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Region (Region) | Relationship to Setup_RegionObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Region Id (RegionId) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Requirement Assessment (ComplianceFmkRequiAssessmentObject) | Relationship to ComplianceFmk_RequiAssessmentObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Requirement Generator (ProgramFmkReqGeneratorObject) | Relationship to ProgramFmk_ReqGeneratorObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Requirement Profiles (ApplicaProfiles) | Relationship to ComplianceFmk_ApplicabProfileObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Requirement Request (ProgramFmkReqRequestObject) | Relationship to ProgramFmk_ReqRequestObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Requirement Status (ProgramFmkReqStatusObject) | Relationship to ProgramFmk_ReqStatusObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Requirements based on Location (ReqGenLocation) | Relationship to ProgramFmk_ReqLocationObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Review (DocCtrlReviewObject) | Relationship to DocCtrl_ReviewObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Risk Assessment Abstract (RiskFmkRiskAssessmentObject) | Relationship to RiskFmk_RiskAssessmentObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Sample Stressor Value (IH2StressorValueObject) | Relationship to IH2_StressorValueObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Secondary Hierarchy (SecondHierarchy) | Relationship to Setup_SecondHierarchyObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Secondary Hierarchy Id (SecondHierarchyId) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Select Medical Facility (EHSIncidentMangMedicalFacilityObject) | Relationship to EHSIncidentMang_MedicalFacilityObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Service Journal (RefManagementV2ServiceJournalObject) | Relationship to RefManagementV2_ServiceJournalObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Session / Sample Abstract (IH2SampleAbstractObject) | Relationship to IH2_SampleAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Session Abstract (TrainMgmtSessionAbstractObject) | Relationship to TrainMgmt_SessionAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Session Stressor (IH2SessionStressorObject) | Relationship to IH2_SessionStressorObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Setting Records (Settings) | Relationship to FragApplication_LocalSettingObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Shipment Abstract (ShipRecInspectShipmentAbstracObject) | Relationship to ShipRecInspect_ShipmentAbstracObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Shortcut (DocCtrlShortcutObject) | Relationship to DocCtrl_ShortcutObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| SIC Code (SICCode) | bigint | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Site Contact Name (SiteContactName) | Relationship to SysEmployeeEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Site Contact Name Id (SiteContactNameID) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Site ID Number (SiteIDNumber) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Specific Location (FragApplicationSpecificLocatinObject) | Relationship to FragApplication_SpecificLocatinObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| SPI Master Transaction (SustainPerformMastTransactionObject) | Relationship to SustainPerform_MastTransactionObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| State/Province (State) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Storage Area (MateriInventoryStorageAreaObject) | Relationship to MateriInventory_StorageAreaObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Street Address 1 (Address1) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Street Address 2 (Address2) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Sub-Category (CFW) (CFWSubCategoryCFWObject) | Relationship to CFW_SubCategoryCFWObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Supplier [ESG] (SPISupplierObject) | Relationship to SPI_SupplierObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Supplier Abstract (SupplierMgmtSupAbstractObject) | Relationship to SupplierMgmt_SupAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Supplier Item Revision (ProductMgmtSupItemRevisionObject) | Relationship to ProductMgmt_SupItemRevisionObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Target Plan / Location (SPITargPlanLocObject) | Relationship to SPI_TargPlanLocObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Team Member (EventFwkTeamMemberObject) | Relationship to EventFwk_TeamMemberObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Time Stamp (TimeStamp) | timestamp | Y | No configured default/calculation returned; retain native behavior | Read only; retain native population; mechanism unresolved unless stated | No structural change; retain native lifecycle |
| Time Zone (TimeZone) | Relationship to SysTimeZoneEntity; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Time Zone Id (TimeZoneId) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Travel (SPITravelObject) | Relationship to SPI_TravelObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| User License Code (UserLicenseCode) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Visit Abstract (OHVisitAbstractObject) | Relationship to OH_VisitAbstractObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Waste Container (WasteManagementWasteContainerObject) | Relationship to WasteManagement_WasteContainerObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Waste Generator (WasteGenerator) | bit | Y | Existing default retained; see metadata | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Waste Generator Size (WaGeneratorSize) | Relationship to WasteManagement_WaGeneratorSizeObject; cardinality/inverse unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Waste Generator Size Id (WaGeneratorSizeID) | uniqueidentifier | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
| Zip/Postal Code (PostalCode) | nvarchar; capacity unresolved | N | No configured default/calculation returned; retain native behavior | Retain native permissions/editability; not authorization for Boomi writes | No structural change; retain native lifecycle |
