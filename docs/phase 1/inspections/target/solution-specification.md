# Inspections Application — Technical Configuration Specification

Revision 2 · 28 October 2026 · Consultant configuration reference. Supersedes the revision 1 target design and its task scope; the as-is baseline remains unchanged.

## 1. Configuration scope and reading order

Configure the explicit Add/Modify items below; retain existing package configuration otherwise. Existing functionality is reused, not counted as a demonstrated defect or a mandatory rebuild. Accepted client requirements drive the core; features from proposed ADRs remain conditional. General architectural hardening is separated in [revision decisions](revision-decisions.md) and has no core task dependency.

New rule descriptions and placeholder identities are configuration instructions, not asserted executable Intelex expressions. Extracted expressions are identified separately in [the expression register](configuration-expressions.md). G02 blocks only the affected changed expressions/hooks; unchanged native calculations are reused.

| Authority | Use |
| --- | --- |
| This specification | Objects, direct fields, native workflow parameters, conditions, ordered actions and configurable outputs |
| [Complete field contract](field-contract.md) | All retained shared/dependency declarations as well as the core objects below |
| [As-is source evidence](../as-is/evidence.json) | Original stable IDs, metadata and expressions; sole authority for installed configuration |
| [Automation reconciliation](automation-reconciliation.md) | Each existing handler: retain or narrow client-required edit |
| [Implementation plan](implementation-plan.md) | Assignments for the current Add/Modify scope, with blocked technical inputs |
| [Scope/change decisions](revision-decisions.md) | Superseded proposals and previous task dispositions |

### 1.1 Baseline and application parameters

| Parameter | Value / instruction |
| --- | --- |
| Source package | Inspections + Checklist Framework Config Extract 1.0.0.0 |
| Package ID | 4a5350da-6975-407a-836b-0c5f15c666bc |
| Source SHA-256 | e8045aefb2a54503bfa59584b9eb9de137d9c4a7e959ff84acf35f65d07692ef |
| Platform | 6.6.29.0 |
| Application | Inspections; 552ac529-b2e5-4597-a16a-725c46ab992b |
| Application disabled | FALSE (retain) |
| Mobile / offline | TRUE / TRUE (retain existing flags; configure applicable forms only) |
| Shared Checklist Framework entry | Retain existing disabled application-entry flag; its shared objects remain in use |
| Inheritance / physical removals | No reparenting, object deletion or physical field deletion |
| Evidence and model | Logical Intelex object model; no physical database assumptions |
| Build scope | 4 new local catalogues; client-required fields/forms/rules; existing native publication/generation/workflow infrastructure retained |

### 1.2 Requirement implementation matrix

| Requirement / ADR | Recorded status | Configuration coverage |
| --- | --- | --- |
| INS-001 / [ADR-001](../ADRs/ADR-001-support-mobile-and-offline-inspection-execution.md) | accepted | R01/R02, F02/F03, native mobile/attachments |
| INS-002 / [ADR-002](../ADRs/ADR-002-configure-inspection-behavior-by-program.md) | accepted | Type of Inspection.SourceMode; R01; external path |
| INS-003 / [ADR-003](../ADRs/ADR-003-support-conditional-questions-and-branching.md) | accepted | Question semantics, native dependencies and R02 |
| INS-004 / [ADR-004](../ADRs/ADR-004-disable-numeric-scoring.md) | accepted | D01 categorical results; hide scoring |
| INS-005 / [ADR-005](../ADRs/ADR-005-use-responses-and-direct-actions-without-formal-findings.md) | accepted | R02/R06 direct response/inspection actions; no new formal Findings |
| INS-006 / [ADR-006](../ADRs/ADR-006-add-configurable-review-and-approval-workflow.md) | accepted | W01/S03/S04/I02–I04, H04, F04 |
| INS-007 / [ADR-007](../ADRs/ADR-007-generate-branded-portable-inspection-records.md) | proposed | OUT-01, conditional Merge Template configuration |
| INS-009 / [ADR-009](../ADRs/ADR-009-report-inspection-outcomes-and-trends.md) | proposed | REP-01–REP-06, conditional reporting configuration |
| INS-010 / [ADR-010](../ADRs/ADR-010-replace-safetyculture-incrementally.md) | proposed | Three type/checklist setup packages; no cutover work |
| INS-011 / [ADR-011](../ADRs/ADR-011-enforce-complete-sectioned-checklists.md) | accepted | Required named sections, forced completion and R02 |
| INS-012 / [ADR-012](../ADRs/ADR-012-configure-equipment-references-by-program.md) | accepted | R05, live type equipment controls |
| INS-013 / [ADR-013](../ADRs/ADR-013-record-immediate-corrections-as-completed-actions.md) | accepted | R06/H06/W02/I05, native already-completed route |
| INS-014 / [ADR-014](../ADRs/ADR-014-route-near-misses-to-incident-management.md) | accepted | Retain Incident Management manual process; no new integration |
| INS-015 / [ADR-015](../ADRs/ADR-015-separate-inspection-and-action-lifecycles.md) | accepted | D02/H07 and final inspection completion with open actions |
| INS-016 / [ADR-016](../ADRs/ADR-016-record-atomic-inspections-and-consolidate-regulatory-reporting.md) | proposed | Retain atomic context; combined regulatory output deferred |
| INS-017 / [ADR-017](../ADRs/ADR-017-use-governed-site-and-asset-taxonomy.md) | proposed | Conditional G05 shared resource binding only |

**Proposed initial values:** First review enabled, second review disabled and equipment disabled for the three initial internal programs. G01/G04 supply the actual checklist content, reviewers and review periods. No arbitrary reminder cadence or new self-approval prohibition is introduced. Existing program settings remain live native configuration; frozen create-time program/resource history is an optional proposal, not an implemented guarantee.

## 2. Object inventory and configuration instructions

Core objects have their own field tables in §3. Remaining shared/dependency objects are retained and individually documented in the complete field contract. Source ID evidence is preserved; proposed additions have no assigned GUID until configured.

| Object / internal name | Object ID / basis | Inheritance parent | Instruction | Direct fields |
| --- | --- | --- | --- | --- |
| Checklist Type / CLF_ChecklistTypeObject | 0259a1d3-455a-4ba5-8c4b-dbd3f0be9ea7 | None | Reuse existing object | 9 |
| Type of Inspection / Insp_TypeObject | c504f266-819b-47a2-84f2-0154fdcf19de | CLF_ChecklistTypeObject | Reuse identity; configure listed fields only | 25 |
| Checklist Abstract / CLF_CheckliAbstractObject | c726d108-022c-4b4b-8928-5160ce43a535 | None | Reuse existing object | 3 |
| Checklist / CLF_ChecklistObject | 6fe45655-67bc-4593-91e3-675ccc304fdc | CLF_CheckliAbstractObject | Reuse identity; configure listed fields only | 12 |
| Published Checklist / CLF_PubChecklistObject | f0ba4595-963b-45fd-8b19-592ce53f7b3c | CLF_CheckliAbstractObject | Reuse existing object | 6 |
| Section / CLF_SectionObject | 6c774cf4-c380-4706-81ef-a656239fe8cf | None | Reuse identity; configure listed fields only | 4 |
| Question Abstract / CLF_QuestAbstractObject | 312a57bc-343e-4337-a251-91609c550820 | None | Reuse identity; configure listed fields only | 22 |
| Question / CLF_QuestObject | 92628acf-dcc3-41c3-b23f-198d83cba0ef | CLF_QuestAbstractObject | Reuse existing object | 17 |
| Published Question / CLF_PubQuestObject | 0e5d5f7f-2039-4194-8f37-86771b63e36f | CLF_QuestAbstractObject | Reuse identity; configure listed fields only | 17 |
| Choice List / CLF_ChoiceListObject | b8491b3d-469a-4bdf-b9e1-ddcecf257422 | None | Reuse identity; configure listed fields only | 8 |
| Choice / CLF_ChoiceObject | d36a079a-12db-4b54-9c70-f80d146ff8ca | None | Reuse identity; configure listed fields only | 12 |
| CLF - Answer Type / CLF_AnswerTypeObject | 4b8c65a0-c069-4f9d-afb1-d4fc97140e41 | None | Reuse existing object | 3 |
| Checklist Answer / CLF_ChecklistAnswerObject | 3557470f-8de9-461c-bdcb-9edf9cc2b6c6 | None | Reuse identity; configure listed fields only | 32 |
| Inspection Abstract / Insp_InspectionAbsObject | 8c33cf5c-67fd-4cca-8703-96ec39efff81 | CLF_ChecklistAnswerObject | Reuse identity; configure listed fields/parameters | 19 |
| Inspection / Insp_EquipInspectionObject | 4266a8f5-e53c-4b81-921c-540913945dfd | Insp_InspectionAbsObject | Reuse identity; configure listed fields/parameters | 30 |
| Section Answer / CLF_SectionAnswerObject | b01defd7-dd92-4793-ab45-64a123159338 | None | Reuse existing object | 6 |
| Question Answer / CLF_QuestionAnswerObject | 9083e2f5-2e24-4174-92db-75a61a217d0b | None | Reuse identity; configure listed fields only | 43 |
| Abstract Corrective Action / FragApplication_AbCorrectivActiObject | ffaeb11a-e798-47ed-a3fb-1336a82876dd | None | Reuse identity; configure listed fields only | 29 |
| Action Plan Abstract / ActionPlans_ActionPlanAbsObject | edca9466-cdf8-4317-85c9-d3efb40373a2 | FragApplication_AbCorrectivActiObject | Reuse existing object | 23 |
| Inspection Action Plan / CLF_InsActionPlanObject | b714db5b-7015-4f4e-b05f-a9eb0e507d53 | ActionPlans_ActionPlanAbsObject | Reuse identity; configure listed fields only | 13 |
| Person Responsible Option / ConfgAppSetting_PersRespOptionObject | b566862a-2640-4325-96ff-da5dc0ad6b68 | None | Reuse existing object | 4 |
| Inspection Review Decision / Insp_IReviewDecisionObject | e693fba5-fae3-4a4f-a89f-f797af1f16a8 | None | Reuse existing object | 3 |
| Equipment List Option / Insp_EquipListOptionObject | db312533-2245-4dab-9ffa-7c2d5c254d73 | None | Reuse existing object | 4 |
| Inspection Source / Insp_InspectionSourceObject | Proposed; no GUID | None | Add local catalogue | 4 |
| Inspection Outcome / Insp_OutcomeObject | Proposed; no GUID | None | Add local catalogue | 4 |
| Response Outcome / Insp_ResponseOutcomeObject | Proposed; no GUID | None | Add local catalogue | 4 |
| Inspection Classification / Insp_ClassificationObject | Proposed; no GUID | None | Add local catalogue | 4 |
| Operational Resource / Shared_OperationalResource | Proposed; no GUID | Unresolved | Conditional external binding; no local object creation | 5 |

## 3. Field configuration by object

One exact field per row; inherited fields are declared only on their inheritance base. Req is effective requiredness: Conditional identifies the controlling source/answer/stage in that row and its R-rule. The Type column states native IsRequired separately for changed fields. New fields on existing shared/operational objects remain natively optional; H/R rules populate and require them in the current process without forcing unrelated or historic rows into a backfill. Legacy NULL SourceMode means INTERNAL; NULL ContributesToOutcome means not contributing; a NULL legacy overall-outcome requirement is not treated as TRUE. Native IsRequired must not remain unconditionally TRUE where the immediate/external path permits omission.

Retain means keep the actual installed property and mechanism. A missing exported length/precision/population value is not permission to choose a replacement: it is unchanged configuration, with a technical input only if a required change depends on it.

### 3.1 Checklist Type

**Internal name:** `CLF_ChecklistTypeObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** 0259a1d3-455a-4ba5-8c4b-dbd3f0be9ea7 (E966). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_ChecklistType_Detail; b2f05c74-d1bf-41be-be1a-397eed8976d2 |
| DefaultInventoryView | CLF_ChecklistType_Inventory; 536fad31-a0f8-44b0-a6c9-17f7c804e6fe |
| DisplayProperty | Name; a4dac596-3c7a-4401-aed4-b8700c486108 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Checklists`, `Description`, `MaxOrder`, `Name`, `NbChecklists`, `NbQuestions`, `QueAnswerObject`, `Questions`, `Reference`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Checklists | 1:M to CLF_ChecklistObject; inverse ChecklistType | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Checklists`; E968 |
| Description | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Description`; E1733 |
| Max Order | Float; preserve native numeric attributes | N | None (no field override exported); calculation `MAX(Questions.Order)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `MaxOrder`; E1735 |
| Name | Text, maximum 200 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E1561 |
| # Checklists | Number (Integer) | N | None (no field override exported); calculation `COUNT(Checklists)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbChecklists`; E963 |
| # Questions | Number (Integer) | N | None (no field override exported); calculation `COUNT(Questions)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbQuestions`; E1738 |
| Question Answer Object | Text, maximum 200 | Y | CLF_QuestionAnswerObject | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `QueAnswerObject`; E1741 |
| Questions | 1:M to CLF_QuestObject; inverse ChecklistType | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Questions`; E1135 |
| Code | Text, maximum 100 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Reference`; E1728 |

### 3.2 Type of Inspection

**Internal name:** `Insp_TypeObject`. **Inheritance parent:** `CLF_ChecklistTypeObject`. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** c504f266-819b-47a2-84f2-0154fdcf19de (E165). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | Insp_Type_Detail; 38aa707d-811d-454b-9bbd-31c99b6da541 |
| DefaultInventoryView | Insp_Type_Inventory; 4027a1a0-a8a6-4c2e-8d55-33a3bf9025a7 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Inspections; 552ac529-b2e5-4597-a16a-725c46ab992b |

**Directly declared fields:** `Active`, `ComplValidation`, `DforFirstReview`, `ELOptions`, `EnabFirstReview`, `EnaSecondReview`, `EquipmentList`, `EquipmMandatory`, `Expression`, `Expression2`, `FindingTracking`, `FirstReviewer`, `forSecondReview`, `InspRoleOption`, `InspRoleOption2`, `InspRoleOptionId`, `PRMethod`, `PRMethodSndRev`, `Role`, `Role2`, `RoleName`, `RoleName2`, `SecondReviewer`, `SourceMode`, `OverallOutcomeRequired`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Active | Yes/No | Y | true | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Active`; E1610 |
| Enable Checklist Completion Validation? | Yes/No; native IsRequired FALSE | Y | TRUE | Hidden; TRUE enforced for current programs | H01 validates on type save; existing shared capability retained. **Modify**; internal `ComplValidation`; E1563; R01 |
| No. of Days for Review | Number (Integer); native IsRequired FALSE | Conditional | NULL until the actual period is supplied under G04 | Required positive integer when EnabFirstReview=TRUE; administrator editable. Hidden/retained when FALSE. No arbitrary maximum introduced. | Native stage-entry due-date calculation uses this value. **Modify**; internal `DforFirstReview`; E1603; R04 |
| Equipment List Options | M:1 to Insp_EquipListOptionObject; inverse disabled; native IsRequired FALSE | Conditional | None; reuse actual native Text/Lookup records from G03 | Required when EquipmentList=TRUE; active native option selection. Hidden/retained when FALSE. | F01/F02 and H05 use EquipmentList plus actual ELOptions record ID; no invented OFF record.. **Modify**; internal `ELOptions`; E1600; R05 |
| Enable Review? | Yes/No; native IsRequired FALSE | Y | TRUE for initial three programs (proposed initial value) | Program administrator; second review may be enabled only with first review and complete routing | Live configuration used by I02/I03/I04; no applied-setting fields. **Modify**; internal `EnabFirstReview`; E1191; R04 |
| Enable Second Review? | Yes/No; native IsRequired FALSE | Y | FALSE | Program administrator; second review may be enabled only with first review and complete routing | Live configuration used by I02/I03/I04; no applied-setting fields. **Modify**; internal `EnaSecondReview`; E1608; R04 |
| Enable Equipment List? | Yes/No; native IsRequired FALSE | N | FALSE for initial three programs | Program administrator; TRUE requires G03 Text/Lookup option | Live type equipment setting; no equipment-mode snapshot. **Modify**; internal `EquipmentList`; E1588; R05 |
| Make Equipment Mandatory? | Yes/No; native IsRequired FALSE | N | TRUE when EquipmentList=TRUE, otherwise FALSE | Hidden compatibility flag; H01 sets from EquipmentList | Equipment identification is mandatory for enabled equipment programs. **Modify**; internal `EquipmMandatory`; E163; R05 |
| Expression | Text; preserve existing length (not exported); native IsRequired FALSE | Conditional | None (no field override exported) | Required only for enabled EnabFirstReview with PRMethod=G03 Expression record. Technical administrator only; hidden/retained otherwise. | Existing executable recipient-expression field; G02 must supply validated XScript in the stage context.. **Modify**; internal `Expression`; E1068; R04 |
| Expression:2 | Text; preserve existing length (not exported); native IsRequired FALSE | Conditional | None (no field override exported) | Required only for enabled EnaSecondReview with PRMethodSndRev=G03 Expression record. Technical administrator only; hidden/retained otherwise. | Existing executable recipient-expression field; G02 must supply validated XScript in the stage context.. **Modify**; internal `Expression2`; E686; R04 |
| Utilize Finding Tracking | Yes/No; native IsRequired FALSE | Y | FALSE | Hidden; FALSE enforced for current programs | H01 validates on type save; existing shared capability retained. **Modify**; internal `FindingTracking`; E1103; R01 |
| Reviewer | M:1 to SysSubjectEntity; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required only when EnabFirstReview=TRUE and PRMethod is G03 Specific Person record; hidden/retained otherwise. Technical exception, not normal routing. | Use existing subject relationship and native recipient handling. **Modify**; internal `FirstReviewer`; E1612; R04 |
| No. of Days for Second Review | Number (Integer); native IsRequired FALSE | Conditional | NULL until the actual period is supplied under G04 | Required positive integer when EnaSecondReview=TRUE; administrator editable. Hidden/retained when FALSE. No arbitrary maximum introduced. | Native stage-entry due-date calculation uses this value. **Modify**; internal `forSecondReview`; E1596; R04 |
| New/Existing Role | M:1 to Insp_InspRoleOptionObject; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Hidden in routine program form; reuse installed metadata/history | H01 prevents new ad hoc roles through the Inspection program pathway. **Modify**; internal `InspRoleOption`; E591; R04 |
| New/Existing Role:2 | M:1 to Insp_InspRoleOptionObject; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Hidden in routine program form; reuse installed metadata/history | H01 prevents new ad hoc roles through the Inspection program pathway. **Modify**; internal `InspRoleOption2`; E989; R04 |
| New/Existing Role Id | GUID; native IsRequired FALSE | N | None (no field override exported) | Hidden in routine program form; reuse installed metadata/history | H01 prevents new ad hoc roles through the Inspection program pathway. **Modify**; internal `InspRoleOptionId`; E1238; R04 |
| Method to Determine Person Responsible | M:1 to ConfgAppSetting_PersRespOptionObject; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required when EnabFirstReview=TRUE; select existing active routing record by G03 identity; ordinary choices Role, Immediate Supervisor or Submitter. | Existing shared catalogue fields/types are retained; no new Code column. Routing method IDs supplied under G03/G04.. **Modify**; internal `PRMethod`; E1247; R04 |
| Method To Determine Person Responsible:2 | M:1 to ConfgAppSetting_PersRespOptionObject; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required when EnaSecondReview=TRUE; select existing active routing record by G03 identity; ordinary choices Role, Immediate Supervisor or Submitter. | Existing shared catalogue fields/types are retained; no new Code column. Routing method IDs supplied under G03/G04.. **Modify**; internal `PRMethodSndRev`; E1593; R04 |
| Role | M:1 to SysRoleEntity; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required when EnabFirstReview=TRUE and PRMethod is G03 Role record. Hidden/retained for other methods; choose maintained native role. | No automatic role creation. H04 resolves eligible responsibility in inspection Location.. **Modify**; internal `Role`; E1242; R04 |
| Role2 | M:1 to SysRoleEntity; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required when EnaSecondReview=TRUE and PRMethodSndRev is G03 Role record. Hidden/retained for other methods; choose maintained native role. | No automatic role creation. H04 resolves eligible responsibility in inspection Location.. **Modify**; internal `Role2`; E1590; R04 |
| Role Name | Text, maximum 100; native IsRequired FALSE | N | None (no field override exported) | Hidden in routine program form; reuse installed metadata/history | H01 prevents new ad hoc roles through the Inspection program pathway. **Modify**; internal `RoleName`; E1240; R04 |
| Role Name 2 | Text, maximum 100; native IsRequired FALSE | N | None (no field override exported) | Hidden in routine program form; reuse installed metadata/history | H01 prevents new ad hoc roles through the Inspection program pathway. **Modify**; internal `RoleName2`; E1598; R04 |
| Second Reviewer | M:1 to SysSubjectEntity; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required only when EnaSecondReview=TRUE and PRMethodSndRev is G03 Specific Person record; hidden/retained otherwise. Technical exception, not normal routing. | Use existing subject relationship and native recipient handling. **Modify**; internal `SecondReviewer`; E1605; R04 |
| Source Mode | M:1 to Insp_InspectionSourceObject; inverse disabled; native IsRequired FALSE | Conditional | INTERNAL catalogue record on new types; legacy NULL is interpreted as INTERNAL without backfill | Required for new/revised current program setup; program administrator selects active source value. Existing used types retain source mode. | Live type setting; no per-inspection copy. Change source mode only on a new/unused type. Native IsRequired FALSE; scoped save rule supplies effective requiredness.. **Add**; internal `SourceMode`; PF-025; R01 |
| Overall Outcome Required? | Yes/No; native IsRequired FALSE | Conditional | TRUE for new initial INTERNAL programs; FALSE forced for EXTERNAL; legacy NULL is not required | Required on current program setup; administrator editable for INTERNAL, hidden/forced FALSE for EXTERNAL | H03 uses live type value; native IsRequired FALSE to avoid retrospective mandatory-data conversion.. **Add**; internal `OverallOutcomeRequired`; PF-026; R03 |

Initial values:

Inherited columns are record values, not duplicate declarations. Proposed seeds have no invented record GUID.

| Basis | Code | Name | Active | SourceMode | EnabFirstReview | EnaSecondReview | EquipmentList | ComplValidation | FindingTracking | OverallOutcomeRequired |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Proposed configuration values; actual routing/days supplied in G01/G04 | HSE_PROJECT | Project health and safety | false | INTERNAL | true | false | false | true | false | true |
| Proposed configuration values; actual routing/days supplied in G01/G04 | ENV_PROJECT | Project environmental compliance | false | INTERNAL | true | false | false | true | false | true |
| Proposed configuration values; actual routing/days supplied in G01/G04 | OFFICE_EHS | Office EH&S | false | INTERNAL | true | false | false | true | false | true |

### 3.3 Checklist Abstract

**Internal name:** `CLF_CheckliAbstractObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** c726d108-022c-4b4b-8928-5160ce43a535 (E369). **Abstract:** true. **Workflow:** false. **Location bound:** true. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_CheckliAbstract_Detail; 4c3b3ff4-d898-470d-a7df-d0505f826fe1 |
| DefaultInventoryView | CLF_CheckliAbstract_Inventory; 979476b6-e3a1-4120-a358-c4370f7c95c6 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Description`, `Location`, `Title`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Description | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain native inherited Checklist → Published Checklist business copy. **Retain**; internal `Description`; E1221 |
| Location | M:1 to SysLocationEntity; inverse CLFCheckliAbstractObject | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain native inherited Checklist → Published Checklist business copy. **Retain**; internal `Location`; E2330 |
| Title | Text, maximum 200 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain native inherited Checklist → Published Checklist business copy. **Retain**; internal `Title`; E1962 |

### 3.4 Checklist

**Internal name:** `CLF_ChecklistObject`. **Inheritance parent:** `CLF_CheckliAbstractObject`. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** 6fe45655-67bc-4593-91e3-675ccc304fdc (E514). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_Checklist_Detail; 9668bbf5-b9a1-4966-966c-9d81420b46c3 |
| DefaultInventoryView | CLF_Checklist_Inventory; e2b9b327-3a0d-4d6a-8ef4-99a907ea7020 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Active`, `AutoCode`, `ChecklistType`, `EnableScoring`, `EnableSections`, `HelpeQuestions`, `Id`, `NbQuestions`, `PubChecklists`, `Questions`, `Reference`, `Sections`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Active | Yes/No | Y | true | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `Active`; E691 |
| Autogenerate Checklist Code? | Yes/No | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `AutoCode`; E1786 |
| Checklist Type | M:1 to CLF_ChecklistTypeObject; inverse Checklists | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `ChecklistType`; E1770 |
| Enable Scoring? | Yes/No; native IsRequired FALSE | Y | FALSE for Inspections checklists | Hidden/enforced FALSE for these programs | H01 authoring validation; no removal of native capability; publication: Authoring/native publication management only; no additional target copy. **Modify**; internal `EnableScoring`; E1784; R02 |
| Enable Sections? | Yes/No; native IsRequired FALSE | Y | TRUE for Inspections checklists | Hidden/enforced TRUE for these programs | H01 authoring validation; no removal of native capability; publication: Authoring/native publication management only; no additional target copy. **Modify**; internal `EnableSections`; E1534; R02 |
| [Helper] Questions | 1:M to CLF_QuestObject; inverse HelperChecklist | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `HelpeQuestions`; E1776 |
| Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `Id`; E1456 |
| # Questions | Number (Integer) | N | None (no field override exported); calculation `COUNT(HelpeQuestions)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `NbQuestions`; E1760 |
| Published Checklists | 1:M to CLF_PubChecklistObject; inverse Checklist | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `PubChecklists`; E1767 |
| Questions | M:N to CLF_QuestObject; inverse Checklists | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `Questions`; E713 |
| Code | Text, maximum 100 | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Copied by native mapping in §7. **Retain**; internal `Reference`; E661 |
| Sections | 1:M to CLF_SectionObject; inverse Checklist | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `Sections`; E1781 |

### 3.5 Published Checklist

**Internal name:** `CLF_PubChecklistObject`. **Inheritance parent:** `CLF_CheckliAbstractObject`. **Configuration:** Reuse existing object.

**Object ID:** f0ba4595-963b-45fd-8b19-592ce53f7b3c (E475). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_PubChecklist_Detail; b588fbc8-f8a0-4d3b-b2bd-ec2987ae6aac |
| DefaultInventoryView | CLF_PubChecklist_Inventory; 3cc954e8-215a-4976-8a3a-062fe602fd43 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Active`, `Checklist`, `ChecklistRef`, `ChecklistType`, `IsActive`, `PubQuestions`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Active | Yes/No | N | None (no field override exported); calculation `Checklist.Active` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `Active`; E2253 |
| Checklist | M:1 to CLF_ChecklistObject; inverse PubChecklists | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `Checklist`; E682 |
| Checklist Code | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain source mapping in §7. **Retain**; internal `ChecklistRef`; E1070 |
| Checklist Type | M:1 to CLF_ChecklistTypeObject; inverse disabled | N | None (no field override exported); calculation `Checklist.ChecklistType` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `ChecklistType`; E1793 |
| Is Active | Yes/No | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `IsActive`; E2016 |
| Published Questions | M:N to CLF_PubQuestObject; inverse PubChecklists | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `PubQuestions`; E2011 |

### 3.6 Section

**Internal name:** `CLF_SectionObject`. **Inheritance parent:** None. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** 6c774cf4-c380-4706-81ef-a656239fe8cf (E336). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_SectionObjectDetailView; e8a98d14-8761-44cd-ab0d-661f6d3b7e60 |
| DefaultInventoryView | CLF_SectionObjectInventoryView; 47cb253a-fcaa-40f9-ac44-7c16dd17cef7 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | Sort; 7f938904-382d-486b-9288-743eaf77c7a7 |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Checklist`, `Questions`, `SectionName`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Checklist | M:1 to CLF_ChecklistObject; inverse Sections | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Checklist`; E1489 |
| Questions | 1:M to CLF_QuestObject; inverse ExistingSection | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Questions`; E1072 |
| Section Name | Text, maximum 255; native IsRequired FALSE | Y | None (no field override exported) | Checklist author; at least one meaningful named section per checklist | Use existing Section and published SectionName/SectionSort mapping; no section-version redesign. **Modify**; internal `SectionName`; E1331; R02 |
| Sort | Float; preserve native numeric attributes | N | `INT(IFNULL(MAX(Checklist.Sections.Sort), 0)) + 1` (extracted; default) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `Sort`; E493 |

### 3.7 Question Abstract

**Internal name:** `CLF_QuestAbstractObject`. **Inheritance parent:** None. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** 312a57bc-343e-4337-a251-91609c550820 (E93). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_QuestAbstract_Detail; b61ccba7-2d3e-40d1-8df0-1db4589fc853 |
| DefaultInventoryView | CLF_QuestAbstract_Inventory; 4cd43bc4-4e77-47f1-9538-02183898a77f |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `ActReqChoices`, `AllowNA`, `AnswerRequired`, `AnswerType`, `ChoiceList`, `ChoiceListId`, `ComReqChoices`, `ComReqIfNA`, `Content`, `DateCreated`, `DateModifiedHel`, `DefaultBool`, `DefaultChoice`, `DefaultChoices`, `FindReqChoices`, `Guideline`, `Order`, `Section`, `TriggerFindings`, `ValueChoiceList`, `Weight`, `ContributesToOutcome`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Action Required | M:N to CLF_ChoiceObject; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Question author selects choices from this question ChoiceList that require an action; keep visible for Choice/Choices in Inspection authoring; published selection read only | Reuse existing Action Required option and existing publication copy. H01 validates membership. R02 requires a distinct linked action if selected Choice or any selected Choices matches ActReqChoices, independently of IsNegative or ContributesToOutcome. An open or completed action satisfies existence; empty selection means no choice-triggered action requirement.; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Modify**; internal `ActReqChoices`; E642; R02 |
| Allow N/A | Yes/No | Y | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `AllowNA`; E520 |
| Required | Yes/No; native IsRequired TRUE | Y | TRUE in Inspections authoring | Hidden/enforced TRUE for Inspections; retain other applications’ metadata/defaults | H01/H08 enforce/copy; R02 excludes currently invisible dependent questions; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Modify**; internal `AnswerRequired`; E130; R02 |
| Answer Type | M:1 to CLF_AnswerTypeObject; inverse disabled | N | Fixed record 771916e1-5251-4658-add8-3091457e7295 (Choice) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `AnswerType`; E645 |
| Choice List | M:1 to CLF_ChoiceListObject; inverse ChoiceLists | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `ChoiceList`; E89 |
| Choice List Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `ChoiceListId`; E1173 |
| Comments Required | M:N to CLF_ChoiceObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `ComReqChoices`; E648 |
| Comment Required if NA | Yes/No; native IsRequired TRUE | Y | false | Author editable when AllowNA=TRUE; when FALSE hide and force FALSE; copied published value read only | Change E629 first condition so valid required N/A comments are retained; exact proposed condition in expressions register; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Modify**; internal `ComReqIfNA`; E640; R02 |
| Question | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `Content`; E603 |
| Date Created | Date/Time; timezone preserve native setting (not exported) | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `DateCreated`; E2420 |
| Date Modified Helper | Date/Time; timezone preserve native setting (not exported) | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `DateModifiedHel`; E1452 |
| Default | Yes/No | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `DefaultBool`; E638 |
| Default Choice | M:1 to CLF_ChoiceObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `DefaultChoice`; E635 |
| Default Choices | M:N to CLF_ChoiceObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `DefaultChoices`; E654 |
| Finding Required | M:N to CLF_ChoiceObject; inverse disabled; native IsRequired FALSE | N | None for new Inspections content | Hidden/empty for new Inspections questions; retain old/shared references | Formal Finding requirement is not evaluated for current Inspection submissions; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Modify**; internal `FindReqChoices`; E651; R02 |
| Guideline | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `Guideline`; E1337 |
| Order | Float; preserve native numeric attributes | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `Order`; E657 |
| Section | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Retain**; internal `Section`; E1341 |
| Choices that Trigger Action Plans | M:N to CLF_ChoiceObject; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Hidden in target Inspection authoring; retain native metadata/history for other consumers | No automatic formal Finding creation or displayed numeric score. New direct action validation uses explicit fields, not legacy named trigger assumptions.; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Modify**; internal `TriggerFindings`; E1518; R02 |
| Default Value (Choice List) | M:1 to CLF_ChoiceObject; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Hidden in target Inspection authoring; retain native metadata/history for other consumers | No automatic formal Finding creation or displayed numeric score. New direct action validation uses explicit fields, not legacy named trigger assumptions.; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Modify**; internal `ValueChoiceList`; E1345; R02 |
| Weight | Float; preserve native numeric attributes; native IsRequired FALSE | N | 1 | Hidden in target Inspection authoring; retain native metadata/history for other consumers | No automatic formal Finding creation or displayed numeric score. New direct action validation uses explicit fields, not legacy named trigger assumptions.; publication: Retain existing inherited publication disposition; native business copies enumerated in §7. **Modify**; internal `Weight`; E1343; R02 |
| Contributes to Outcome? | Yes/No; native IsRequired FALSE | N | FALSE for new records; legacy NULL treated as not contributing | Question author; TRUE only for Choice/Choices in this release; Published Question read only. Checkbox and other non-choice answers remain informational; use a Yes/No Choice list if a Boolean business answer must contribute. | H08 copies inherited value; H01 rejects contributing non-choice questions. Native IsRequired FALSE preserves legacy/shared records; publication: H08 copies same inherited field from Question to Published Question. **Add**; internal `ContributesToOutcome`; PF-055; R02, D01 |

### 3.8 Question

**Internal name:** `CLF_QuestObject`. **Inheritance parent:** `CLF_QuestAbstractObject`. **Configuration:** Reuse existing object.

**Object ID:** 92628acf-dcc3-41c3-b23f-198d83cba0ef (E338). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_Quest_Detail; 7430f95c-185f-4f98-b493-f2672a01b99d |
| DefaultInventoryView | CLF_Quest_Inventory; f90ac76d-1588-48cd-abc3-9604cf59608f |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `AbsoluteOrder`, `Checklists`, `ChecklistType`, `DependsOn`, `ExistingSection`, `HasDependsOn`, `HelperChecklist`, `LastPublish`, `NbChecklists`, `PubQuestions`, `QuestionRef`, `References`, `TextReferences`, `UseExisting`, `UseReferences`, `VisDepNoAns`, `VisibleIfs`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Absolute Order | Float; preserve native numeric attributes | N | None (no field override exported); calculation `ExistingSection.Sort * 1000 + Order` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Copied by native mapping in §7. **Retain**; internal `AbsoluteOrder`; E1333 |
| Checklists | M:N to CLF_ChecklistObject; inverse Questions | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `Checklists`; E2417 |
| Checklist Type | M:1 to CLF_ChecklistTypeObject; inverse Questions | Y | `HelperChecklist.ChecklistType` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `ChecklistType`; E2603 |
| Depends On | M:1 to CLF_QuestObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `DependsOn`; E1479 |
| Existing Section | M:1 to CLF_SectionObject; inverse Questions | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `ExistingSection`; E332 |
| Has Depends On | Yes/No | N | None (no field override exported); calculation `DependsOn<>NULL` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `HasDependsOn`; E2942 |
| [Helper] Checklist | M:1 to CLF_ChecklistObject; inverse HelpeQuestions | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `HelperChecklist`; E1482 |
| Last Publish | Date/Time; timezone preserve native setting (not exported) | N | None (no field override exported); calculation `MAX(PubQuestions.DateCreated)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `LastPublish`; E2657 |
| # Checklists | Number (Integer) | N | None (no field override exported); calculation `COUNT(Checklists)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `NbChecklists`; E2931 |
| Published Questions | 1:M to CLF_PubQuestObject; inverse Question | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `PubQuestions`; E1966 |
| Question Code | Text, maximum 200 | Y | `CONCATENATE(ChecklistType.Reference, "q",  ChecklistType.NbQuestions+1)` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Copied by native mapping in §7. **Retain**; internal `QuestionRef`; E1326 |
| Tags | M:N to CLF_TagObject; inverse Questions | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `References`; E1743 |
| Text References | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `TextReferences`; E1177 |
| Use Existing Section? | Yes/No | N | true | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `UseExisting`; E1495 |
| Include References | Yes/No | N | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Authoring/native publication management only; no additional target copy. **Retain**; internal `UseReferences`; E1454 |
| Visible if no answer | Yes/No | Y | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Copied by native mapping in §7. **Retain**; internal `VisDepNoAns`; E1339 |
| Visible If | M:N to CLF_ChoiceObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Copied by native mapping in §7. **Retain**; internal `VisibleIfs`; E1328 |

### 3.9 Published Question

**Internal name:** `CLF_PubQuestObject`. **Inheritance parent:** `CLF_QuestAbstractObject`. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** 0e5d5f7f-2039-4194-8f37-86771b63e36f (E216). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_PubQuest_Detail; 6bf1c8e6-a7a4-4c9a-87a3-0d1a0e5541ab |
| DefaultInventoryView | CLF_PubQuest_Inventory; a09143de-e03d-4b9c-a17e-7510091dffa9 |
| DisplayProperty | QuestionRef; bb18c2b7-d1f2-4931-bbba-f8f6b50a1964 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `AbsoluteOrder`, `AnswerTypeCode`, `DependsOnPub`, `DependsOnPubId`, `Expression`, `HasCondDisplay`, `hCheckAnswer`, `hCheckAnswerId`, `Id`, `MaxPoints`, `PubChecklists`, `Question`, `QuestionRef`, `SectionName`, `SectionSort`, `VisDepNoAns`, `VisibleIfs`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Absolute Order | Float; preserve native numeric attributes | N | None (no field override exported); calculation `Question.ExistingSection.Sort*1000 +  Order` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Retain source mapping in §7. **Retain**; internal `AbsoluteOrder`; E269 |
| Answer Type Code | Text; preserve existing length (not exported) | N | None (no field override exported); calculation `AnswerType.Value` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `AnswerTypeCode`; E238 |
| Depends On Pub | M:1 to CLF_PubQuestObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `DependsOnPub`; E262 |
| Depends On Pub Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `DependsOnPubId`; E2144 |
| Visibility Expression | Text; preserve existing length (not exported) | N | None (no field override exported); calculation [E224-calculation](configuration-expressions.md#e224-calculation) (extracted) | Read only; preserve existing view/permission rules | Native extracted calculation retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `Expression`; E224 |
| Has Conditional Display | Yes/No | N | `Question.DependsOn <> NULL` (extracted; default) | Read only; preserve existing view/permission rules | Native extracted default retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `HasCondDisplay`; E267 |
| [Helper] Checklist Answer | M:1 to CLF_ChecklistAnswerObject; inverse disabled | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `hCheckAnswer`; E275 |
| [Helper] Checklist Answer Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `hCheckAnswerId`; E2018 |
| Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `Id`; E999 |
| Max Points | Float; preserve native numeric attributes; native IsRequired FALSE | N | None (no field override exported); calculation `ChoiceList.MaxPoints` (extracted; calculation) | Hide numeric-scoring presentation in Inspections; retain original field/calculation | Existing scoring implementation retained; not used for target categorical outcome; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Modify**; internal `MaxPoints`; E233; D01 |
| Published Checklists | M:N to CLF_PubChecklistObject; inverse PubQuestions | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `PubChecklists`; E258 |
| Question | M:1 to CLF_QuestObject; inverse PubQuestions | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `Question`; E243 |
| Question Code | Text, maximum 100 | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain source mapping in §7. **Retain**; internal `QuestionRef`; E247 |
| Section Name | Text; preserve existing length (not exported) | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.; publication: Retain source mapping in §7. **Retain**; internal `SectionName`; E256 |
| Section Sort | Number (Integer) | N | `Question.ExistingSection.Sort` (extracted; default) | Read only; preserve existing view/permission rules | Native extracted default retained; publication: Retain extracted native default/calculation/map generation; no storage/type conversion. **Retain**; internal `SectionSort`; E273 |
| Visible if Depends On is unanswered? | Yes/No | N | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained; publication: Retain source mapping in §7. **Retain**; internal `VisDepNoAns`; E254 |
| Visible If | M:N to CLF_ChoiceObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained; publication: Retain source mapping in §7. **Retain**; internal `VisibleIfs`; E249 |

### 3.10 Choice List

**Internal name:** `CLF_ChoiceListObject`. **Inheritance parent:** None. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** b8491b3d-469a-4bdf-b9e1-ddcecf257422 (E95). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_ChoiceList_Detail; e18ca4b4-7d9c-4fdb-96fe-1497fccad9cd |
| DefaultInventoryView | CLF_ChoicesList_Inventory; d44fbc81-a83e-4b38-8382-ac0733d13bda |
| DisplayProperty | Name; f45a0af0-e631-4e97-a593-2405ea55c866 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `ChoiceLists`, `Choices`, `Description`, `Id`, `MaxPoints`, `Name`, `NbChoices`, `Reference`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Choice Lists | 1:M to CLF_QuestAbstractObject; inverse ChoiceList | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ChoiceLists`; E1913 |
| Choices | 1:M to CLF_ChoiceObject; inverse ChoiceList | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Choices`; E725 |
| Description | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Description`; E3082 |
| Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Id`; E631 |
| Max Points | Float; preserve native numeric attributes; native IsRequired FALSE | N | None (no field override exported); calculation `MAX(Choices.Value)` (extracted; calculation) | Hide numeric-scoring presentation in Inspections; retain original field/calculation | Existing scoring implementation retained; not used for target categorical outcome. **Modify**; internal `MaxPoints`; E722; D01 |
| Name | Text, maximum 200 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E1911 |
| # Choices | Number (Integer) | N | None (no field override exported); calculation `COUNT(Choices)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbChoices`; E2566 |
| Code | Text, maximum 100 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Reference`; E1937 |

### 3.11 Choice

**Internal name:** `CLF_ChoiceObject`. **Inheritance parent:** None. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** d36a079a-12db-4b54-9c70-f80d146ff8ca (E210). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_Choice_Detail; 4dcfce64-3982-4a17-a657-ca5c892e677b |
| DefaultInventoryView | CLF_Choice_Inventory; 835f675c-51cc-4444-a022-9729e5f5dfb8 |
| DisplayProperty | Name; f856ad02-7c5f-4d97-8b98-f778c0581c8b |
| OrderProperty | SortOrder; f054acbb-4e70-4abb-a6aa-90dc93ad0965 |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `BColor`, `ChoiceList`, `Css`, `Id`, `IsNA`, `MobileAction`, `Name`, `Reference`, `SortOrder`, `TColor`, `Value`, `IsNegative`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Background-color | M:1 to FragApplication_ColorObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `BColor`; E310 |
| Choice List | M:1 to CLF_ChoiceListObject; inverse Choices | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ChoiceList`; E302 |
| Css | Text; preserve existing length (not exported) | N | text-align:center;padding:8px 3px;border-radius:10px;border:1px dotted lightgrey; | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Css`; E327 |
| Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Id`; E755 |
| Is NA | Yes/No | N | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `IsNA`; E325 |
| Mobile Action | M:1 to Insp_MobileActionObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `MobileAction`; E320 |
| Name | Text, maximum 200 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E306 |
| Code | Text, maximum 100 | Y | `CONCATENATE(ChoiceList.Reference, ".",  ChoiceList.NbChoices+1)` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Reference`; E316 |
| Sort Order | Float; preserve native numeric attributes | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `SortOrder`; E308 |
| Text-color | M:1 to FragApplication_ColorObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `TColor`; E329 |
| Value | Float; preserve native numeric attributes; native IsRequired FALSE | N | None (no field override exported) | Hide numeric-scoring presentation in Inspections; retain original field/calculation | Existing scoring implementation retained; not used for target categorical outcome. **Modify**; internal `Value`; E323; D01 |
| Is Negative? | Yes/No; native IsRequired FALSE | N | FALSE for new Choice records; legacy NULL is treated as FALSE; no historical backfill | Choice administrator edits on Choice detail/toolbox/mass-update and applicable mobile profiles. Shared across every question using this Choice record; use separate Choice records when business meanings differ. | H03/D01 evaluates Choice.IsNegative or any selected Choices.IsNegative after visibility/N/A checks and only for contributing Choice/Choices questions. Choice-level value is live, not copied to Published Question. Explicit IsNA takes precedence. Do not infer polarity from name, translation or numeric Value. Reevaluate unaccepted answers on their next evaluation and always before submission/approval; leave accepted ResponseOutcome and OverallOutcome untouched.. **Add**; internal `IsNegative`; USR-CHOICE-NEGATIVE; R02, D01 |

### 3.12 CLF - Answer Type

**Internal name:** `CLF_AnswerTypeObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** 4b8c65a0-c069-4f9d-afb1-d4fc97140e41 (E795). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | No binding exported; preserve native configuration |
| DefaultInventoryView | No binding exported; preserve native configuration |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | Index; af2b2478-5c57-480a-9ddd-fefba5c89b53 |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `Caption`, `Index`, `Value`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Caption | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Caption`; E1006 |
| Index | Integer | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `Index`; E1348 |
| Value | Text; preserve existing length (not exported) | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Value`; E633 |

Initial values:

Inherited columns are record values, not duplicate declarations. Proposed seeds have no invented record GUID.

| Basis | Id | Deleted | Value | Index | Caption |
| --- | --- | --- | --- | --- | --- |
| Extracted | 93ab1484-09ce-4868-9618-bfa62ea0b01c | false | Choices | 5 | Choices |
| Extracted | 771916e1-5251-4658-add8-3091457e7295 | false | Choice | 0 | Choice |
| Extracted | c52ac043-81af-413a-a393-6490fec6b1aa | false | Text | 3 | Text |
| Extracted | 7580b590-07e8-4142-9059-3020a636d918 | false | Date | 4 | Date |
| Extracted | ed36fa47-3b62-4323-a2ca-a58c8fad2ac1 | false | Float | 2 | Float |
| Extracted | a6e3bb24-6722-4dd2-b7fd-02ae1a16debd | false | Checkbox | 1 | Checkbox |

### 3.13 Checklist Answer

**Internal name:** `CLF_ChecklistAnswerObject`. **Inheritance parent:** None. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** 3557470f-8de9-461c-bdcb-9edf9cc2b6c6 (E75). **Abstract:** true. **Workflow:** false. **Location bound:** true. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_ChecklistAnswer_Detail; 22e1d276-8cae-4a75-a42c-6ee07af95242 |
| DefaultInventoryView | CLF_ChecklistAnswer_Inventory; 916b3885-7512-47ff-b607-c66c1ee3d6bb |
| DisplayProperty | DisplayField; 45b27141-411b-47ac-8be4-6a200a7ba35b |
| OrderProperty | RecordNo; 9af1b94a-91f8-41b5-a41b-aaa63f8a4d96 |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `ActionPlanAbst`, `ActionPlans`, `ApplicQuestions`, `Comments`, `CreatedBy`, `DefPersRespFind`, `Depth`, `DisplayField`, `FilledQuestions`, `Findings`, `Id`, `Location`, `MasterChecklist`, `MaxPoints`, `Name`, `NbActions`, `NbFindings`, `NbSubChecklists`, `oSectionAnswers`, `Path`, `PersResponsibl`, `PointsAwarded`, `PrevChecklistId`, `Progress`, `PubChecklist`, `QuestionAnswers`, `RecordNo`, `Score`, `SectAnswers`, `SubChecklists`, `SysteTypeHelper`, `Workflow`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Action Plans | 1:M to FragApplication_AbCorrectivActiObject; inverse CheckListAnsAct | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ActionPlanAbst`; E2260 |
| Action Plans | 1:M to CLF_InsActionPlanObject; inverse ChecklistAnswer | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ActionPlans`; E2042 |
| # Questions | Number (Integer) | N | None (no field override exported); calculation `IF(COUNT(QuestionAnswers)=0, COUNT(PubChecklist.PubQuestions), COUNT(QuestionAnswers)) + SUM(SubChecklists.ApplicQuestions)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `ApplicQuestions`; E2104 |
| Comments | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Comments`; E2436 |
| Created By | M:1 to SysEmployeeEntity; inverse disabled | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CreatedBy`; E2020 |
| Action Owner | M:1 to SysEmployeeEntity; inverse disabled | N | `CURRENTUSER` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `DefPersRespFind`; E2382 |
| Depth | Number (Integer) | N | None (no field override exported); calculation `IF(MasterChecklist<>NULL, MasterChecklist.Depth+1, 1)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `Depth`; E2363 |
| Display Field | Text, maximum 50 | N | None (no field override exported); calculation `IF(LEN(Name)>50, CONCATENATE(LEFT(Name, 47), "..."), Name)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `DisplayField`; E2322 |
| # Filled Questions | Number (Integer) | N | None (no field override exported); calculation `SUM(QuestionAnswers.IsFilled) + SUM(SubChecklists.FilledQuestions)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `FilledQuestions`; E1800 |
| Findings | 1:M to CLF_FindingObject; inverse ChecklistAnswer; native IsRequired FALSE | N | None (no field override exported) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `Findings`; E2963; R02 |
| Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Id`; E760 |
| Location | M:1 to SysLocationEntity; inverse CLFChecklistAnswerObject | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Location`; E1886 |
| Audit | M:1 to CLF_ChecklistAnswerObject; inverse SubChecklists | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `MasterChecklist`; E762 |
| Max Points | Float; preserve native numeric attributes; native IsRequired FALSE | N | None (no field override exported); calculation `SUM(QuestionAnswers.MaxPoints) + SUM(SubChecklists.MaxPoints)` (extracted; calculation) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `MaxPoints`; E1193; R02 |
| Name | Text, maximum 255 | N | `CONCATENATE( "Inspection "," - ", DAY(NOW), "/", MONTH(NOW), "/", YEAR(NOW))` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Name`; E1964 |
| # Actions | Number (Integer) | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `NbActions`; E2269 |
| # Findings | Number (Integer); native IsRequired FALSE | N | None (no field override exported); calculation `COUNT(Findings) + SUM(SubChecklists.NbFindings)` (extracted; calculation) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `NbFindings`; E2972; R02 |
| # Sub-Checklists | Number (Integer) | N | None (no field override exported); calculation `COUNT(SubChecklists)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbSubChecklists`; E2945 |
| [Helper] Trigger Creation of Section Answers and Default Values | Yes/No | N | false | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `oSectionAnswers`; E1189 |
| Path | Text; preserve existing length (not exported) | N | None (no field override exported); calculation `IF(MasterChecklist<>NULL, CONCATENATE(MasterChecklist.Path, ".", RecordNo), RecordNo)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `Path`; E2079 |
| Person Responsible | M:1 to SysEmployeeEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PersResponsibl`; E2171 |
| Points Awarded | Float; preserve native numeric attributes; native IsRequired FALSE | N | None (no field override exported); calculation `SUM(QuestionAnswers.PointsAwarded) + SUM(SubChecklists.PointsAwarded)` (extracted; calculation) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `PointsAwarded`; E1981; R02 |
| Previous Checklist Id | Text; preserve existing length (not exported) | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `PrevChecklistId`; E2966 |
| Progress | Percent (native); precision 18, scale 0 | N | None (no field override exported); calculation `IFERROR(FilledQuestions / ApplicQuestions, 0)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `Progress`; E2100 |
| Checklist | M:1 to CLF_PubChecklistObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PubChecklist`; E1364 |
| Question Answers | 1:M to CLF_QuestionAnswerObject; inverse ChecklistAnswer | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `QuestionAnswers`; E1197 |
| Record No. | AutoNumber | N | None (no field override exported) | Read only; preserve existing view/permission rules | Native autonumber generation. **Retain**; internal `RecordNo`; E1169 |
| Score | Percent (native); precision 18, scale 2; native IsRequired FALSE | N | None (no field override exported); calculation `IFERROR(PointsAwarded/ MaxPoints, 0)` (extracted; calculation) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `Score`; E1977; R02 |
| Section Answers | 1:M to CLF_SectionAnswerObject; inverse ChecklistAnswer | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `SectAnswers`; E2960 |
| Sub Checklists | 1:M to CLF_ChecklistAnswerObject; inverse MasterChecklist | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `SubChecklists`; E1200 |
| System Type Helper | Text; preserve existing length (not exported); native IsRequired FALSE | N | Inspection create hook sets literal Insp_EquipInspectionObject; retain other native discriminator values | Hidden/read only | H02 sets before scoped question/readiness evaluation; no runtime TYPEOF function. **Modify**; internal `SysteTypeHelper`; E1023; R01, R02 |
| Workflow | M:1 to SysWorkflowInstanceEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Workflow`; E1932 |

### 3.14 Inspection Abstract

**Internal name:** `Insp_InspectionAbsObject`. **Inheritance parent:** `CLF_ChecklistAnswerObject`. **Configuration:** Reuse identity; configure listed fields/parameters.

**Object ID:** 8c33cf5c-67fd-4cca-8703-96ec39efff81 (E106). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Object parameter | Target value |
| --- | --- |
| IsAuditEnabled | true |

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | Insp_InspectionAbs_Detail; 27c48574-7759-4996-b218-0a9cd20bcbe8 |
| DefaultInventoryView | Insp_InspectionAbs_Inventory; 5c23a7fd-2f23-4c2e-a3fb-5d56d606901c |
| DisplayProperty | InsDisplayField; 5ffb768d-9f3a-4717-b121-1f53166ba04c |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Inspections; 552ac529-b2e5-4597-a16a-725c46ab992b |

**Directly declared fields:** `CompletedBy`, `CompletedOn`, `DaofFirstReview`, `DistributioList`, `DofSecondReview`, `FirstReviewBy`, `HelperLocation`, `InsDisplayField`, `InspecChecklist`, `InspecChecklistId`, `InspectionDate`, `PersResponsible`, `PersResponsibleId`, `RevieweComment1`, `RevieweComments`, `RevieweDecisio1`, `RevieweDecision`, `SecondReviewBy`, `TypeOfInspec`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Completed By | M:1 to SysEmployeeEntity; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Read only in this pathway | I02 stamps field-work actor/date after valid submission; not final acceptance. **Modify**; internal `CompletedBy`; E2148; R04 |
| Completed On | Date; native IsRequired FALSE | N | None (no field override exported) | Read only in this pathway | I02 stamps field-work actor/date after valid submission; not final acceptance. **Modify**; internal `CompletedOn`; E1042; R04 |
| Date of Review | Date/Time; timezone disabled; native IsRequired FALSE | N | None (no field override exported) | Read only in this pathway | I03/I04 stamp corresponding reviewer actor/time after valid decision. Preserve existing date/time field attributes.. **Modify**; internal `DaofFirstReview`; E2992; R04 |
| Distribution List | M:N to SysEmployeeEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `DistributioList`; E688 |
| Date of Second Review | Date/Time; timezone disabled; native IsRequired FALSE | N | None (no field override exported) | Read only in this pathway | I03/I04 stamp corresponding reviewer actor/time after valid decision. Preserve existing date/time field attributes.. **Modify**; internal `DofSecondReview`; E2990; R04 |
| Review By | M:1 to SysEmployeeEntity; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Read only in this pathway | I03/I04 stamp corresponding reviewer actor/time after valid decision. Preserve existing date/time field attributes.. **Modify**; internal `FirstReviewBy`; E2984; R04 |
| [Helper] Location | M:1 to SysLocationEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `HelperLocation`; E1147 |
| [Helper] Inspection Description Display Field | Text; preserve existing length (not exported) | N | None (no field override exported); calculation `CONCATENATE("Inspection No. ", RecordNo, " - Inspection Type: ",  TypeOfInspec, " (", PubChecklist, ")")` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `InsDisplayField`; E2948 |
| Inspection Checklist | M:1 to CLF_PubChecklistObject; inverse disabled; native IsRequired FALSE | Conditional | None | Required before INTERNAL execution; current active published checklist of selected TypeOfInspec. EXTERNAL hidden/null. | H02 invokes existing native creation path only for INTERNAL. Retain existing publication/version-selection mechanism.. **Modify**; internal `InspecChecklist`; E1218; R01 |
| Inspection Checklist Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `InspecChecklistId`; E2009 |
| Inspection To Be Completed By | Date | N | [Source E1493](../as-is/evidence.json); native value-generator XML retained | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `InspectionDate`; E1493 |
| Inspector | M:1 to SysEmployeeEntity; inverse disabled | Y | `CURRENTUSER` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `PersResponsible`; E101 |
| Inspector Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PersResponsibleId`; E1726 |
| Second Reviewer Comments | Text; preserve existing length (not exported); native IsRequired FALSE | Conditional | None (no field override exported) | Eligible reviewer in corresponding stage; nonblank required when corresponding decision is G03 Rejected record | I03/I04 include comments in Return notification; prior attempts retained in native history. **Modify**; internal `RevieweComment1`; E3000; R04 |
| Reviewer Comments | Text; preserve existing length (not exported); native IsRequired FALSE | Conditional | None (no field override exported) | Eligible reviewer in corresponding stage; nonblank required when corresponding decision is G03 Rejected record | I03/I04 include comments in Return notification; prior attempts retained in native history. **Modify**; internal `RevieweComments`; E1525; R04 |
| Second Reviewer Decision | M:1 to Insp_IReviewDecisionObject; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Eligible current reviewer only in the corresponding stage; required to complete approval; choose G03 Approved/Rejected native record identity | I03/I04 validate decision before transition; no Code column added to existing decision catalogue. **Modify**; internal `RevieweDecisio1`; E2997; R04 |
| Reviewer Decision | M:1 to Insp_IReviewDecisionObject; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Eligible current reviewer only in the corresponding stage; required to complete approval; choose G03 Approved/Rejected native record identity | I03/I04 validate decision before transition; no Code column added to existing decision catalogue. **Modify**; internal `RevieweDecision`; E2611; R04 |
| Second Review By | M:1 to SysEmployeeEntity; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Read only in this pathway | I03/I04 stamp corresponding reviewer actor/time after valid decision. Preserve existing date/time field attributes.. **Modify**; internal `SecondReviewBy`; E2994; R04 |
| Type of Inspection | M:1 to Insp_TypeObject; inverse disabled | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `TypeOfInspec`; E2699 |

### 3.15 Inspection

**Internal name:** `Insp_EquipInspectionObject`. **Inheritance parent:** `Insp_InspectionAbsObject`. **Configuration:** Reuse identity; configure listed fields/parameters.

**Object ID:** 4266a8f5-e53c-4b81-921c-540913945dfd (E37). **Abstract:** false. **Workflow:** true. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Object parameter | Target value |
| --- | --- |
| IsAuditEnabled | true |

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | Insp_EquipInspection_Detail; 3fc38fc7-e0df-4a6e-aeb1-97e890448c48 |
| DefaultInventoryView | Insp_EquipInspectionObjectInventoryView; 684af9b0-e14c-4c23-9677-4ba154ec0844 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Inspections; 552ac529-b2e5-4597-a16a-725c46ab992b |

**Directly declared fields:** `CommetoReviewer`, `CommtoReviewer2`, `CreateMode`, `Equipment`, `EquipmentTxt`, `FApprovalFields`, `HelpeIsComplete`, `HelperLocatio2`, `HelpErrorMes`, `Id`, `IPCreate`, `IPDraft`, `IPInProgress`, `IPReview`, `IPReview2`, `LNoticeonCreate`, `NotifiDate`, `ReleActionPlans`, `Reviewer`, `SApprovalFields`, `Scope`, `ExternalParty`, `PerformedOn`, `SubmittedAt`, `AcceptedAt`, `OverallOutcome`, `ActionClassification`, `OperationalResource`, `Attachments`, `ExternalInspectionReport`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Comments to Reviewer | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CommetoReviewer`; E2630 |
| Comments to Reviewer 2 | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CommtoReviewer2`; E1360 |
| CreateMode | Yes/No | N | true | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `CreateMode`; E365 |
| Equipment | M:1 to FragApplication_EquipmentObject; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required when TypeOfInspec.EquipmentList=TRUE and ELOptions=G03 Lookup record; active permitted inventory; hidden/null in Off/Text | H05 validates; G05 required before enabling inventory lookup. No equipment-mode copy.. **Modify**; internal `Equipment`; E1543; R05 |
| Equipment | Text; preserve existing length (not exported); native IsRequired FALSE | Conditional | None (no field override exported) | Required when EquipmentList=TRUE and ELOptions=G03 Text record; hidden/null in Off/Lookup | H05 validates exclusivity; no arbitrary new maximum or shared equipment integration. **Modify**; internal `EquipmentTxt`; E2913; R05 |
| [Helper] Show RO First Approval Fields | Number (Integer) | N | 0 | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `FApprovalFields`; E1302 |
| [Helper] Is Complete | Number (Integer) | N | None (no field override exported); calculation `IF(CompletedOn<>NULL, 1, 0)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `HelpeIsComplete`; E1039 |
| [Helper] Location | M:1 to SysLocationEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `HelperLocatio2`; E1260 |
| [Helper] Error Message | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `HelpErrorMes`; E1920 |
| Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Id`; E2014 |
| Instruction Panel - Create | M:1 to ConfgAppSetting_InstructionTextObject; inverse disabled | N | Fixed record f2fc8941-171e-448d-8bc3-95efcc02d037 (label not exported; G03 if changed) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `IPCreate`; E145 |
| Instruction Panel - Draft | M:1 to ConfgAppSetting_InstructionTextObject; inverse disabled | N | Fixed record ac515d70-e607-4cf2-bc42-eeb232e532e9 (label not exported; G03 if changed) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `IPDraft`; E2139 |
| Instruction Panel - In Progress | M:1 to ConfgAppSetting_InstructionTextObject; inverse disabled | N | Fixed record ec8f5d0f-3a55-406a-a0b2-7cfa4f833b02 (label not exported; G03 if changed) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `IPInProgress`; E1139 |
| Instruction Panel - Review | M:1 to ConfgAppSetting_InstructionTextObject; inverse disabled | N | Fixed record 01977bca-daf0-4a7b-8f9f-02da0b94083d (label not exported; G03 if changed) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `IPReview`; E2926 |
| Instruction Panel - Second Review | M:1 to ConfgAppSetting_InstructionTextObject; inverse disabled | N | Fixed record 976cb8d4-8e8e-4e9b-a335-7fadc1af3bd7 (label not exported; G03 if changed) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `IPReview2`; E32 |
| [Helper] Dist List Notice on Create | Text; preserve existing length (not exported) | N | Before adding users to the Distribution List of this Inspection, please click the Continue button. | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `LNoticeonCreate`; E2911 |
| [Helper] Target Date for Notifications | Date | N | None (no field override exported); calculation `Workflow.DueDate` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NotifiDate`; E1929 |
| [Helper] Release Action Plans | Yes/No; native IsRequired FALSE | N | false | Read only; no manual override | I02/I03/I04 set TRUE only on final acceptance, retaining the native release point for outstanding actions. **Modify**; internal `ReleActionPlans`; E1471; R06 |
| Reviewer | M:1 to SysEmployeeEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Reviewer`; E2300 |
| [Helper] Show RO Second Approval Fields | Number (Integer) | N | 0 | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `SApprovalFields`; E2131 |
| Scope | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Scope`; E780 |
| External Party | Text maximum 255; native IsRequired FALSE | Conditional | NULL | Inspector/record owner in Draft or In Progress; required at submission when TypeOfInspec.SourceMode.Code=EXTERNAL; hidden/null for INTERNAL | I02 validates; locks with accepted inspection. **Add**; internal `ExternalParty`; PF-042; R01, R04 |
| Performed On | Date; calendar date; no timezone conversion; native IsRequired FALSE | Conditional | NULL | Inspector/record owner; required at submission for INTERNAL and EXTERNAL; actual third-party date for EXTERNAL | I02 validates presence; Date field distinct from existing InspectionDate due date. **Add**; internal `PerformedOn`; PF-043; R01, R04 |
| Submitted At | Date/Time with timezone enabled; native IsRequired FALSE | N | NULL | Read only | I02 stamps server NOW after validation; earlier submission cycles retained in native workflow history. **Add**; internal `SubmittedAt`; PF-044; R01, R04 |
| Accepted At | Date/Time with timezone enabled; native IsRequired FALSE | N | NULL | Read only | I02/I03/I04 stamp server NOW immediately before successful final completion. **Add**; internal `AcceptedAt`; PF-045; R01, R04 |
| Overall Outcome | M:1 to Insp_OutcomeObject; inverse disabled; native IsRequired FALSE | Conditional | NOT_ASSESSED on new current-process inspections; legacy NULL retained | Read only; required when current I02/I03/I04 assigns result; inverse disabled | H03/I02/I03/I04 assign per D01; native IsRequired FALSE avoids blocking legacy records. No numeric score.. **Add**; internal `OverallOutcome`; PF-046; D01 |
| Inspection Classification | M:1 to Insp_ClassificationObject; inverse disabled; native IsRequired FALSE | Conditional | IN_PROGRESS on new current-process inspections; legacy NULL retained until H07 applies | Read only; H07 supplies the classification when current process operates; inverse disabled | H07 assigns D02; native IsRequired FALSE. No forced historic classification backfill.. **Add**; internal `ActionClassification`; PF-047; D02 |
| Operational Resource | M:1 to Shared_OperationalResource; inverse disabled; native IsRequired FALSE | N | NULL | Conditional scope G05: optional active resource for Location before evidence exists; hide if no approved enterprise binding | Use supplied shared authority; no local object and no historical label/technology copy. **Add**; internal `OperationalResource`; PF-048; R05 |
| Attachments | Native attachment collection; native storage/owner ID binding unresolved P-07; native IsRequired Native panel; validate collection through R01/R02 | Conditional | None | Optional native evidence collection; editable in Draft/In Progress, read only in review/after completion | General photographs/files use native attachment ownership under G07. This collection does not satisfy the ExternalInspectionReport requirement.. **Add**; internal `Attachments`; PF-051; R01 |
| External Inspection Report | File; single-value native File field (zero or one file); native IsRequired FALSE | Conditional | NULL | When TypeOfInspec.SourceMode.Code=EXTERNAL, display in the External Inspection Report section in place of the Question Answer grid. Inspector/record owner may upload or replace one file in Draft/InspectioninProgress, including returned work; reviewers/accepted records read only. INTERNAL or legacy NULL source: hide section/field and make nonmandatory; retain any already stored value. Native IsRequired FALSE allows incomplete ordinary Save. | R01/I02 requires this field to contain exactly one successfully uploaded, server-accessible file before any forward transition out of InspectioninProgress for EXTERNAL. Validate before timestamps, notices or stage/completion changes; pending/failed upload or another attachment does not satisfy it. Ordinary Draft/InProgress Save may omit it. I03/I04 recheck before approval. Native file type identity, owner/upload-completion, replacement and access/mobile settings are supplied through G07; no custom File object or report-designation relationship. Output uses this file as the externally provided report, separately from generated portable records.. **Add**; internal `ExternalInspectionReport`; USR-EXTERNAL-REPORT-FILE; R01 |

### 3.16 Section Answer

**Internal name:** `CLF_SectionAnswerObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** b01defd7-dd92-4793-ab45-64a123159338 (E408). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_SectionAnswerObjectDetailView; 11307980-2e53-4b3a-9154-092219d3cc8a |
| DefaultInventoryView | CLF_SectionAnswerObjectInventoryView; e555f9a8-cd04-4490-a543-95100d702a0d |
| DisplayProperty | Section; 05a1e0c1-a568-4105-a03d-046579d262f7 |
| OrderProperty | Sort; 93f0dbeb-3165-41cd-95f7-3fbf28a52525 |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `CheckAnswerGUID`, `ChecklistAnswer`, `ChecklistAnswerId`, `QuestionAnswers`, `Section`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| [Helper] Checklist Answer GUID | GUID | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `CheckAnswerGUID`; E424 |
| Checklist Answer | M:1 to CLF_ChecklistAnswerObject; inverse SectAnswers | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `ChecklistAnswer`; E416 |
| Checklist Answer Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ChecklistAnswerId`; E580 |
| Question Answers | 1:M to CLF_QuestionAnswerObject; inverse SectionAnswer | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `QuestionAnswers`; E410 |
| Section | Text, maximum 255 | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `Section`; E422 |
| Sort | Float; preserve native numeric attributes | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `Sort`; E420 |

### 3.17 Question Answer

**Internal name:** `CLF_QuestionAnswerObject`. **Inheritance parent:** None. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** 9083e2f5-2e24-4174-92db-75a61a217d0b (E208). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_QuestionAnswer_Detail; 579ead41-f49d-45b6-8080-32f1274aa321 |
| DefaultInventoryView | CLF_QuestionAnswer_Inventory; b06cd56d-6508-4d38-835a-3f5d7977fb29 |
| DisplayProperty | PubQuestion; cbf01deb-2a66-4943-b517-0d9852655cb0 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `AbsoluteOrder`, `ActionPlans`, `AnswerText`, `Checkbox`, `ChecklistAnswer`, `ChecklistAnswerId`, `Choice`, `ChoiceId`, `Choices`, `Comments`, `CrSectionAnswer`, `Date`, `Dependencies`, `DependsOn`, `Findings`, `Float`, `HelpQuestiText`, `InspActionPlans`, `IsActionMiss`, `IsAnswerMiss`, `IsApplicable`, `IsComMiss`, `IsFilled`, `IsFindingMiss`, `IsNA`, `IsSubmitReady`, `IsVisible`, `MassUpChoice`, `MassUpChoiceId`, `MaxPoints`, `NbActions`, `NbFindings`, `NumbofDocuments`, `PointsAwarded`, `PubQuestion`, `PubQuestionId`, `QuesSummaryText`, `QuestionRef`, `SectionAnswer`, `Text`, `TrDefaultAnswer`, `Attachments`, `ResponseOutcome`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Absolute Order | Float; preserve native numeric attributes | N | None (no field override exported); calculation `PubQuestion.AbsoluteOrder` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `AbsoluteOrder`; E890 |
| Actions | M:N to FragApplication_AbCorrectivActiObject; inverse RelatedQstions | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ActionPlans`; E707 |
| Answer Text | Text; preserve existing length (not exported) | N | None (no field override exported); calculation [E823-calculation](configuration-expressions.md#e823-calculation) (extracted) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `AnswerText`; E823 |
| Answer - Checkbox | Yes/No | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Checkbox`; E766 |
| Checklist Answer | M:1 to CLF_ChecklistAnswerObject; inverse QuestionAnswers | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ChecklistAnswer`; E678 |
| Checklist Answer Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ChecklistAnswerId`; E2146 |
| Answer - Choice | M:1 to CLF_ChoiceObject; inverse disabled | N | `PubQuestion.DefaultChoice` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Choice`; E743 |
| Answer - Choice Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ChoiceId`; E1258 |
| Answer - Choices | M:N to CLF_ChoiceObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Choices`; E885 |
| Comments | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Comments`; E816 |
| [Helper] Trigger Section Answer Creation and Default Values | Yes/No | N | false; calculation `ChecklistAnswer.oSectionAnswers` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `CrSectionAnswer`; E880 |
| Answer - Date | Date | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Date`; E564 |
| Dependent Question Answers | 1:M to CLF_QuestionAnswerObject; inverse DependsOn | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Dependencies`; E596 |
| Depends On | M:1 to CLF_QuestionAnswerObject; inverse Dependencies | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `DependsOn`; E757 |
| Findings | M:N to CLF_FindingObject; inverse QuestionAnswers; native IsRequired FALSE | N | None (no field override exported) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `Findings`; E545; R02 |
| Answer - Float | Float; preserve native numeric attributes | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Float`; E876 |
| [Helper] QuestionText | Text; preserve existing length (not exported) | N | None (no field override exported); calculation `IF(IsSubmitReady, NULL, PubQuestion.Content)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `HelpQuestiText`; E944 |
| Action Plans | M:N to CLF_InsActionPlanObject; inverse RelateQuestions | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `InspActionPlans`; E390 |
| Is Action Missing | Yes/No; native IsRequired FALSE | N | Scoped target rule: Selected Choice or any selected Choices matches PubQuestion.ActReqChoices: require at least one distinct linked action, independently of negative classification; open or complete counts. No matching choice means no choice-triggered action requirement. Preserve extracted calculation for other applications; executable changes supplied under G02. | Read only; H03/R02 evaluate after native typed-answer/visibility processing | H03 and I02/I03/I04 use R02; no new branch-clearing behavior. **Modify**; internal `IsActionMiss`; E802; R02 |
| Is Answer Missing | Yes/No; native IsRequired FALSE | N | Scoped target rule: Visible/applicable question requires typed answer or allowed explicit N/A. Preserve extracted calculation for other applications; executable changes supplied under G02. | Read only; H03/R02 evaluate after native typed-answer/visibility processing | H03 and I02/I03/I04 use R02; no new branch-clearing behavior. **Modify**; internal `IsAnswerMiss`; E948; R02 |
| Is Applicable | Number (Integer) | N | 1 | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `IsApplicable`; E878 |
| Is Comment Missing | Yes/No; native IsRequired FALSE | N | Scoped target rule: Negative answer requires comment; retain configured comment/N/A conditions. Preserve extracted calculation for other applications; executable changes supplied under G02. | Read only; H03/R02 evaluate after native typed-answer/visibility processing | H03 and I02/I03/I04 use R02; no new branch-clearing behavior. **Modify**; internal `IsComMiss`; E831; R02 |
| Is Filled | Number (Integer) | N | None (no field override exported); calculation [E746-calculation](configuration-expressions.md#e746-calculation) (extracted) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `IsFilled`; E746 |
| Is Finding Missing | Yes/No; native IsRequired FALSE | N | Scoped target rule: FALSE for the Inspection discriminator only. Preserve extracted calculation for other applications; executable changes supplied under G02. | Read only; H03/R02 evaluate after native typed-answer/visibility processing | H03 and I02/I03/I04 use R02; no new branch-clearing behavior. **Modify**; internal `IsFindingMiss`; E896; R02 |
| Not-Applicable | Yes/No | N | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `IsNA`; E933 |
| Is Submit Ready | Yes/No; native IsRequired FALSE | N | Scoped target rule: No applicable answer/comment/action condition is missing; ExternalInspectionReport is validated separately on Inspection under R01/I02. Preserve extracted calculation for other applications; executable changes supplied under G02. | Read only; H03/R02 evaluate after native typed-answer/visibility processing | H03 and I02/I03/I04 use R02; no new branch-clearing behavior. **Modify**; internal `IsSubmitReady`; E847; R02 |
| Is Visible | Yes/No | N | None (no field override exported); calculation [E735-calculation](configuration-expressions.md#e735-calculation) (extracted) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `IsVisible`; E735 |
| Choice (Mass Update) | M:1 to CLF_ChoiceObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `MassUpChoice`; E205 |
| Choice (Mass Update) Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `MassUpChoiceId`; E793 |
| Max Points | Float; preserve native numeric attributes; native IsRequired FALSE | N | None (no field override exported); calculation `IF(Choice.Value=NULL, NULL, IF(Choice.IsNA=TRUE, 0,  PubQuestion.MaxPoints*PubQuestion.Weight))` (extracted; calculation) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `MaxPoints`; E870; R02 |
| # Actions | Number (Integer); native IsRequired FALSE | N | Scoped target rule: Count distinct actions through retained native response links; do not count parallel display maps twice. Preserve extracted calculation for other applications; executable changes supplied under G02. | Read only; H03/R02 evaluate after native typed-answer/visibility processing | H03 and I02/I03/I04 use R02; no new branch-clearing behavior. **Modify**; internal `NbActions`; E839; R02 |
| # Findings | Number (Integer); native IsRequired FALSE | N | None (no field override exported); calculation `COUNT(Findings)` (extracted; calculation) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `NbFindings`; E542; R02 |
| # Docs | Number (Integer) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `NumbofDocuments`; E853 |
| Points Awarded | Float; preserve native numeric attributes; native IsRequired FALSE | N | None (no field override exported); calculation `IF(PubQuestion.AnswerTypeCode="Choice", Choice.Value*PubQuestion.Weight, IF(PubQuestion.AnswerTypeCode="Choices", MAX(Choices.Value)*PubQuestion.Weight, NULL))` (extracted; calculation) | Hide on current Inspection forms/mobile/standard outputs; retain existing storage and unrelated shared use | R02 does not require formal Finding closure or a numeric score. **Modify**; internal `PointsAwarded`; E810; R02 |
| Published Question | M:1 to CLF_PubQuestObject; inverse disabled | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PubQuestion`; E588 |
| Published Question Id | GUID | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PubQuestionId`; E2142 |
| [Helper] Question Summary Text | Text; preserve existing length (not exported) | N | None (no field override exported); calculation [E818-calculation](configuration-expressions.md#e818-calculation) (extracted) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `QuesSummaryText`; E818 |
| Question Code | Text; preserve existing length (not exported) | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `QuestionRef`; E940 |
| Section Answer | M:1 to CLF_SectionAnswerObject; inverse QuestionAnswers | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `SectionAnswer`; E937 |
| Answer - Text | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Text`; E855 |
| [Helper] Trigger Default Answer | Yes/No | N | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `TrDefaultAnswer`; E888 |
| Attachments | Native attachment collection; native owner ID binding to Question Answer; native IsRequired Native panel; validate collection through R01/R02 | N | None | Native response attachments; inspector editable in In Progress/returned work, reviewer read only | Reuse native attachment collection; photographs supported; no universal mandatory-photo rule. **Add**; internal `Attachments`; PF-052; R02 |
| Response Outcome | M:1 to Insp_ResponseOutcomeObject; inverse disabled; native IsRequired FALSE | Conditional | NULL field default; H02/H03 sets UNANSWERED for new current Inspection answers then evaluates D01; other shared consumers remain NULL | Read only; current I02/R02 requires H03 evaluation; inverse disabled | H03 evaluates existing native fields. Native IsRequired FALSE avoids a mandatory change on unrelated or legacy answers. No new branch-confirmation control.. **Add**; internal `ResponseOutcome`; PF-054; D01 |

### 3.18 Abstract Corrective Action

**Internal name:** `FragApplication_AbCorrectivActiObject`. **Inheritance parent:** None. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** ffaeb11a-e798-47ed-a3fb-1336a82876dd (E185). **Abstract:** true. **Workflow:** false. **Location bound:** true. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | FragApplication_AbCorrectivActiObjectDetailView; 2836d9b8-1390-4aa5-a6d7-4f240b6cae5f |
| DefaultInventoryView | AbstractCorrectiveAction_Inventory; 64598cde-0b54-41c0-b84d-0204ab0eeb01 |
| DisplayProperty | CPARActionReq; aca0bcb5-e539-461c-ac74-12d92a944200 |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Fragment Application; 1df3c2f1-8a0c-4ec6-80d7-15a291933dc9 |

**Directly declared fields:** `ActionNo`, `ActionPlanType`, `ActPlanSysType`, `ActualCost`, `CAR`, `CheckListAnsAct`, `CompletedBy`, `CompletionDate`, `CompletionNotes`, `Costs`, `CPARActionReq`, `CPARTypeID`, `DueDate`, `EventRelated`, `HelperQPType`, `HelpIsCompQP`, `IsCompleted`, `Location`, `ProgressNotes`, `ProjRevActionPlansId`, `ReactionPlan`, `RecoAction`, `RelatedQstions`, `ReportedBy`, `ReportedOn`, `SourceObject`, `SourceRecordId`, `ToCostofActions`, `Workflow`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Action No. | AutoNumber | N | None (no field override exported) | Read only; preserve existing view/permission rules | Native autonumber generation. **Retain**; internal `ActionNo`; E1077 |
| Action Plan Type | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ActionPlanType`; E1422 |
| Action Plan System Type | M:1 to MetObjectEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ActPlanSysType`; E1402 |
| Actual Cost | Float; preserve native numeric attributes | N | None (no field override exported); calculation `SUM(Costs.ConvertedCost)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `ActualCost`; E1384 |
| CAR Abstract | M:1 to ComplyFramework_CARAbstractObject; inverse ActionPlan | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CAR`; E1387 |
| Related to | M:1 to CLF_ChecklistAnswerObject; inverse ActionPlanAbst; native IsRequired FALSE | Conditional | `IFNULL(EventRelated:CLF_FindingObject.ChecklistAnswer, RelatedQstions.ChecklistAnswer)` (extracted; default) | Required saved Inspection source for this subtype; explicitly supplied on external-report action; read only after issue; other shared action consumers retain their original rules | Existing product supplies the inspection relationship from launch context and E2096/E2929 helper behavior; no source-link configuration is assigned. **Modify**; internal `CheckListAnsAct`; E549; R06 |
| Completed By | M:1 to SysEmployeeEntity; inverse disabled; native IsRequired FALSE | Conditional | None (no field override exported) | Required for immediate entry/completion; default current user only when empty; actual performer may be corrected before save; other shared action consumers retain their original rules | F05 TRUE branch defaults an empty CompletedBy to CURRENTUSER; E3088/E2518 check the resolved performer before completion. **Modify**; internal `CompletedBy`; E1424; R06 |
| Completion Date | Date; native IsRequired FALSE | Conditional | None (no field override exported) | Required for immediate entry/completion; default TODAY only when empty; no future date; other shared action consumers retain their original rules | F05 TRUE branch defaults an empty CompletionDate to TODAY; E3088/E2518 reject a future date before completion. **Modify**; internal `CompletionDate`; E800; R06 |
| Completion Notes | Text; preserve existing length (not exported); native IsRequired FALSE | Conditional | None (no field override exported) | Required nonblank for immediate entry and ordinary completion; other shared action consumers retain their original rules | The existing F05 TRUE branch already requires notes. E3088 adds a pre-completion nonblank check and E2518 moves/strengthens its existing check before completing. **Modify**; internal `CompletionNotes`; E1439; R06 |
| Costs | 1:M to FragApplication_ActionCostObject; inverse Action | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Costs`; E1097 |
| Action Required | Text, maximum 255; native IsRequired FALSE | Conditional | None (no field override exported) | Required for both Inspection Action Plan entry modes; author editable before issue; other shared action consumers retain their original rules | F05 modifies the existing E18 TRUE branch to show/require CPARActionReq and remove it from HideAction, SetNonMandatoryAction and ClearValueAction. **Modify**; internal `CPARActionReq`; E200; R06 |
| Type | M:1 to FragApplication_CorrectivePreveObject; inverse disabled; native IsRequired FALSE | Conditional | Fixed record d0de0e2b-dde6-4f41-914c-da08371636a0 (label not exported; G03 if changed) | Hidden/read only on Inspection Action Plan; fixed to actual G03 Corrective record; other shared action consumers retain their original rules | Retain existing default if already Corrective; subtype override only if needed. **Modify**; internal `CPARTypeID`; E1410; R06 |
| Due Date | Date; native IsRequired FALSE | Conditional | None (no field override exported) | Required for outstanding entry; hidden/nonmandatory for initial already-completed entry; other shared action consumers retain their original rules | Use native task due date; no requirement for inspection to stay open. **Modify**; internal `DueDate`; E1427; R06 |
| Related Event | M:1 to EventFwk_EventObject; inverse AbsCorActPlan | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `EventRelated`; E582 |
| [Helper] FMEA Type | Text; preserve existing length (not exported) | N | `IF(ReactionPlan<>NULL, "QP_ReactionPlanObject",(IF(RecoAction<>NULL,"QP_RecoActionObject","NULL")))` (extracted; default) | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `HelperQPType`; E1418 |
| (Helper) Is Completed (FMEA) | Text; preserve existing length (not exported) | N | None (no field override exported) | Read only; preserve existing view/permission rules | Retain existing population; source mechanism not exposed in export. No new write mechanism specified.. **Retain**; internal `HelpIsCompQP`; E183 |
| Is Completed | Yes/No | N | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `IsCompleted`; E1382 |
| Location | M:1 to SysLocationEntity; inverse FragApplicationAbCorrectivActiObject | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Location`; E1973 |
| Progress Notes | 1:M to FragApplication_PrgressNotesObject; inverse AbCorrectivActi | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ProgressNotes`; E1396 |
| Project Revision Action Plans Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ProjRevActionPlansId`; E1985 |
| Reaction Plan | M:1 to QP_ReactionPlanObject; inverse ActionPlan | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ReactionPlan`; E1372 |
| Recommended Action | M:1 to QP_RecoActionObject; inverse ActionPlan | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `RecoAction`; E196 |
| Related Questions | M:N to CLF_QuestionAnswerObject; inverse ActionPlans; native IsRequired FALSE | Conditional | None (no field override exported) | Use existing native M:N response links; optional for external/general actions, required when launched from a response; selected answers must share inspection; other shared action consumers retain their original rules | Existing product supplies same-inspection response selection and E1319 synchronization; no response-link configuration is assigned. **Modify**; internal `RelatedQstions`; E719; R06 |
| Reported By | M:1 to SysEmployeeEntity; inverse disabled | N | `CreatedBy` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `ReportedBy`; E1436 |
| Reported On | Date | N | `DateCreated` (extracted; default) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `ReportedOn`; E1267 |
| Source Object | M:1 to MetObjectEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `SourceObject`; E1413 |
| Source Record Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `SourceRecordId`; E1416 |
| Total Actual Cost | Float; preserve native numeric attributes | N | None (no field override exported); calculation `SUM(Costs.ConvertedCost)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `ToCostofActions`; E1369 |
| Workflow | M:1 to SysWorkflowInstanceEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Workflow`; E191 |

### 3.19 Action Plan Abstract

**Internal name:** `ActionPlans_ActionPlanAbsObject`. **Inheritance parent:** `FragApplication_AbCorrectivActiObject`. **Configuration:** Reuse existing object.

**Object ID:** edca9466-cdf8-4317-85c9-d3efb40373a2 (E42). **Abstract:** true. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | ActionPlans_ActionPlanAbs_Detail; 0069b4c9-eecc-451d-b5d5-a309c08dc4cd |
| DefaultInventoryView | CAR_ActionPlanAbs_Inventory; 95274b8e-5e73-4334-bfa2-5a5f309a45f4 |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Action Plans; 4ed20735-6d62-41a7-9b9b-2cd26bb2a9bf |

**Directly declared fields:** `Activites`, `ActivitiesStart`, `ActivitProgress`, `AssessResults`, `CFWFindings`, `MActivitesOrder`, `MaxTasksOrder`, `NbActivites`, `NbOpenActivit`, `NbOpened`, `NbTasks`, `NCR`, `PermitAbstract`, `PersonResp`, `ProvenEffective`, `ReviewerComment`, `ReviewType`, `RiskAbs`, `StartDate`, `Tasks`, `TasksProgress`, `Template`, `VOCAbstract`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Activities | 1:M to ActionPlans_ActivityAbsObject; inverse ActPlanAbstract | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Activites`; E1210 |
| Activities Can Start | Yes/No | N | false | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `ActivitiesStart`; E2271 |
| Activities Progress | Percent (native); precision 18, scale 2 | N | None (no field override exported); calculation `IFERROR((NbActivites-NbOpenActivit)/NbActivites, 0)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `ActivitProgress`; E1350 |
| Assessment Results | M:1 to RiskFmk_AResultAbstractObject; inverse ActionPlansAbs | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `AssessResults`; E69 |
| CFWFindings | M:N to CFW_FindingObject; inverse APs | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `CFWFindings`; E2036 |
| Max Activities Order | Float; preserve native numeric attributes | N | None (no field override exported); calculation `MAX(Activites.Order)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `MActivitesOrder`; E1205 |
| Max Tasks Order | Number (Integer) | N | None (no field override exported); calculation `MAX(Tasks.Order)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `MaxTasksOrder`; E2325 |
| # Activities | Number (Integer) | N | None (no field override exported); calculation `COUNT(Activites)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbActivites`; E1357 |
| # Opened Activities | Number (Integer) | N | None (no field override exported); calculation `COUNT(FILTER(Activites.IsCompleted, "=", FALSE))` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbOpenActivit`; E1354 |
| # Opened Tasks | Number (Integer) | N | None (no field override exported); calculation `COUNT(FILTER(Tasks.IsCompleted, "=", FALSE))` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbOpened`; E460 |
| # Tasks | Number (Integer) | N | None (no field override exported); calculation `COUNT(Tasks)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NbTasks`; E465 |
| NCR | M:1 to NCR_NCRObject; inverse ActionPlan | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `NCR`; E2114 |
| Permit Abstract | M:1 to PTW_PermitRecordObject; inverse ActionPlan | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PermitAbstract`; E2305 |
| Person Responsible | M:1 to SysEmployeeEntity; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `PersonResp`; E1540 |
| Implemented and Proven Effective? | Yes/No | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ProvenEffective`; E394 |
| Reviewer Comment | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `ReviewerComment`; E2303 |
| Type of Review | M:1 to ActionPlans_ActTypeofReviewObject; inverse disabled | N | Fixed record 5702e807-81f3-43ea-ab5a-a1b703747dfc (label not exported; G03 if changed) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `ReviewType`; E2174 |
| Risk Abstract | M:1 to RiskFmk_RiskObject; inverse ActionPlansAbs | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `RiskAbs`; E57 |
| Start Date | Date | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `StartDate`; E524 |
| Tasks | 1:M to ActionPlans_ActivityAbsObject; inverse ActionPlan | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Tasks`; E605 |
| Tasks Progress | Percent (native); precision 18, scale 2 | N | None (no field override exported); calculation `IFERROR((NbTasks - NbOpened)/NbOpened, 0)` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `TasksProgress`; E456 |
| Template | M:1 to ActionPlans_ActioPlanTemObject; inverse disabled | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Template`; E3079 |
| VOC Abstract | M:1 to EventFwk_VOCAbstractObject; inverse ActionPlans | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `VOCAbstract`; E2622 |

### 3.20 Inspection Action Plan

**Internal name:** `CLF_InsActionPlanObject`. **Inheritance parent:** `ActionPlans_ActionPlanAbsObject`. **Configuration:** Reuse identity; configure listed fields only.

**Object ID:** b714db5b-7015-4f4e-b05f-a9eb0e507d53 (E28). **Abstract:** false. **Workflow:** true. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | CLF_InsActionPlan_Detail; c485a139-be02-459f-b04a-24ca99a821fd |
| DefaultInventoryView | CLF_InsActionPlan_Inventory; f21b6ba9-b82d-47b2-9575-fce0e82cd2fe |
| DisplayProperty | RecordName; 7f006665-2bb0-41f3-a16a-82d3833c055a |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Checklist Framework; cb6277a9-6157-4149-bf7d-e44900119b0e |

**Directly declared fields:** `ActionOwner`, `AlBeenCorrected`, `ChecklistAnswer`, `Findings`, `HelperReleaseAP`, `hRelatedInsp`, `hRelatedInspId`, `NotifiDate`, `PlaDisplayField`, `QuestionAnswers`, `QuestionList`, `RecordName`, `RelateQuestions`.

Inherited fields are configured once on the named inheritance base. Effective subtype conditions in shared rows apply only to the named Inspection consumer.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Action Owner | M:1 to SysEmployeeEntity; inverse disabled; native IsRequired FALSE | Conditional | Existing default expression ChecklistAnswer.DefPersRespFind; no new global default | Required/editable for AlBeenCorrected=FALSE. Hidden/nonmandatory for TRUE. Native field cannot remain unconditionally required. | F05 existing Action Already Complete Show/Hide view action applies conditional mandatory rules; E3088 validates completed-entry evidence before native completion. **Modify**; internal `ActionOwner`; E1812; R06 |
| Has this action already been corrected? | Yes/No; native IsRequired FALSE | Y | FALSE | Action author on initial entry; saved outstanding actions use normal Complete action | F05 selects the form branch; existing E3088 DateNotRequired path records immediate completion after its new checks; G06 confirms task suppression. **Modify**; internal `AlBeenCorrected`; E534; R06 |
| [OLD] Related to | M:1 to CLF_ChecklistAnswerObject; inverse ActionPlans; native IsRequired FALSE | N | None (no field override exported) | Reuse installed helper/map behavior; expose only existing user-facing source/action controls | Existing product supplies matching inspection/response links and E1319/E2096/E2929 helper behavior; no new source initializer is specified.. **Modify**; internal `ChecklistAnswer`; E782; R06 |
| Related Findings | M:N to CLF_FindingObject; inverse ActionPlans | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Findings`; E2369 |
| [Helper] Release AP | Yes/No; native IsRequired FALSE | N | None (no field override exported); calculation `ChecklistAnswer:Insp_EquipInspectionObject.ReleActionPlans` (extracted; calculation) | Reuse installed helper/map behavior; expose only existing user-facing source/action controls | Retain extracted release calculation. Outstanding assignment remains at accepted-inspection release; H06 handles immediate path.. **Modify**; internal `HelperReleaseAP`; E490; R06 |
| [Helper] Related Inspection | M:1 to Insp_EquipInspectionObject; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Reuse installed helper/map behavior; expose only existing user-facing source/action controls | Existing product supplies matching inspection/response links and E1319/E2096/E2929 helper behavior; no new source initializer is specified.. **Modify**; internal `hRelatedInsp`; E154; R06 |
| [Helper] Related Inspection Id | GUID | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `hRelatedInspId`; E152 |
| [Helper] Target Date for Notifications | Date | N | None (no field override exported); calculation `Workflow.DueDate` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `NotifiDate`; E2120 |
| [Helper] Inspection Action Plan Display Field | Text, maximum 255 | N | None (no field override exported); calculation [E1897-calculation](configuration-expressions.md#e1897-calculation) (extracted) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `PlaDisplayField`; E1897 |
| Question Answers | M:N to CLF_QuestionAnswerObject; inverse disabled; native IsRequired FALSE | N | None (no field override exported) | Reuse installed helper/map behavior; expose only existing user-facing source/action controls | Existing product supplies matching inspection/response links and E1319/E2096/E2929 helper behavior; no new source initializer is specified.. **Modify**; internal `QuestionAnswers`; E1618; R06 |
| Question List | Text; preserve existing length (not exported) | N | None (no field override exported); calculation `JOIN(QuestionAnswers.QuesSummaryText,"<br/>")` (extracted; calculation) | Read only; preserve existing view/permission rules | Native extracted calculation retained. **Retain**; internal `QuestionList`; E1615 |
| Record Name | Text, maximum 255 | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `RecordName`; E2938 |
| [Helper] Related Questions | M:N to CLF_QuestionAnswerObject; inverse InspActionPlans; native IsRequired FALSE | N | None (no field override exported) | Reuse installed helper/map behavior; expose only existing user-facing source/action controls | Existing product supplies matching inspection/response links and E1319/E2096/E2929 helper behavior; no new source initializer is specified.. **Modify**; internal `RelateQuestions`; E1321; R06 |

### 3.21 Person Responsible Option

**Internal name:** `ConfgAppSetting_PersRespOptionObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** b566862a-2640-4325-96ff-da5dc0ad6b68 (E1280). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | ConfgAppSetting_PersRespOptionObjectDetailView; 436b8228-f8ca-44c6-9a03-82b999ecd2ef |
| DefaultInventoryView | ConfgAppSetting_PersRespOptionObjectInventoryView; b1923e61-cf69-4e8b-9a42-4b4255fb92f9 |
| DisplayProperty | Name; 3d048eb1-a9fc-474a-b13e-d0b62b80643c |
| OrderProperty | Sort; f1354a4e-7e4d-43cd-ade1-773d4b4f87e7 |
| Module | Configuration Asset App Settings, By Summit EHSQ; 10ce06ca-c566-4fc4-b20b-ae21001df039 |

**Directly declared fields:** `Active`, `Name`, `RecordNo`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Active? | Yes/No | N | true | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Active`; E2352 |
| Name | Text, maximum 255 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E1245 |
| Record No. | AutoNumber | N | [Source E2025](../as-is/evidence.json); native value-generator XML retained | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `RecordNo`; E2025 |
| Sort | Number (Integer) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Sort`; E2273 |

### 3.22 Inspection Review Decision

**Internal name:** `Insp_IReviewDecisionObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** e693fba5-fae3-4a4f-a89f-f797af1f16a8 (E770). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** false (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | Insp_IReviewDecisionObjectDetailView; 9b6f5fb4-f401-43e0-ac41-2c21cacdf522 |
| DefaultInventoryView | Insp_IReviewDecisionObjectInventoryView; b946d2a3-06a1-4138-8809-720239749e2e |
| DisplayProperty | No binding exported; preserve native configuration |
| OrderProperty | No binding exported; preserve native configuration |
| Module | Inspections; 552ac529-b2e5-4597-a16a-725c46ab992b |

**Directly declared fields:** `Active`, `Name`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Active? | Yes/No | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Active`; E768 |
| Name | Text; preserve existing length (not exported) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E2030 |
| Sort | Number (Integer) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Sort`; E1304 |

### 3.23 Equipment List Option

**Internal name:** `Insp_EquipListOptionObject`. **Inheritance parent:** None. **Configuration:** Reuse existing object.

**Object ID:** db312533-2245-4dab-9ffa-7c2d5c254d73 (E616). **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Existing object binding | Native record / instruction |
| --- | --- |
| DefaultDetailView | Insp_EquipListOptionObjectDetailView; 113c9105-3589-4a70-bd44-748648bb43b4 |
| DefaultInventoryView | Insp_EquipListOptionObjectInventoryView; 099e0577-49dd-4ecb-888e-537cd6a73552 |
| DisplayProperty | Name; 6f81610e-f34b-4f5e-ab19-e94823fd4987 |
| OrderProperty | Sort; 1334d5cc-ae35-47e4-95b9-b704fba57e25 |
| Module | Inspections; 552ac529-b2e5-4597-a16a-725c46ab992b |

**Directly declared fields:** `Active`, `Name`, `RecordNo`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Active? | Yes/No | N | true | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native extracted default retained. **Retain**; internal `Active`; E1810 |
| Name | Text, maximum 255 | Y | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Name`; E2422 |
| Record No. | AutoNumber | N | [Source E2367](../as-is/evidence.json); native value-generator XML retained | Read only; preserve existing view/permission rules | Native extracted default retained. **Retain**; internal `RecordNo`; E2367 |
| Sort | Number (Integer) | N | None (no field override exported) | Preserve existing editor/visibility rules unless a scoped form rule below applies | Native persistence retained. **Retain**; internal `Sort`; E2344 |

### 3.24 Inspection Source

**Internal name:** `Insp_InspectionSourceObject`. **Inheritance parent:** None. **Configuration:** Add local catalogue.

**Object ID:** Unassigned — proposed local catalogue. **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Object parameter | Target value |
| --- | --- |
| Module | Inspections |
| IsLocalizable | true |
| IsAbstract | false |
| HasWorkflow | false |
| IsLocationBound | false |
| IsSecurityEnabled | true |
| IsAuditEnabled | false |
| IsAttachmentEnabled | false |
| DisplayProperty | Name |
| OrderProperty | Sort |
| DefaultDetailView | Native generated catalogue detail; no assigned GUID yet |
| DefaultInventoryView | Native generated catalogue inventory; no assigned GUID yet |

**Directly declared fields:** `Code`, `Name`, `Active`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, maximum 100; non-localizable; unique within this object; native IsRequired TRUE | Y | None | Program administrator; stable after first use | Rules use Code, never localized Name.. **Add**; internal `Code`; PF-001 |
| Name | Text, maximum 255; localizable; native IsRequired TRUE | Y | None | Program administrator; translation allowed | Display value only; no rule comparisons.. **Add**; internal `Name`; PF-002 |
| Active? | Yes/No; native IsRequired TRUE | Y | TRUE | Program administrator | FALSE prevents new user selection; existing references retained. Required system outcome values cannot be deactivated while used by automation.. **Add**; internal `Active`; PF-003 |
| Sort | Float; precision/scale to validate in tenant; native IsRequired FALSE | N | None | Program administrator | Presentation order only.. **Add**; internal `Sort`; PF-004 |

Initial values:

Inherited columns are record values, not duplicate declarations. Proposed seeds have no invented record GUID.

| Basis | Code | Name | Active? | Sort |
| --- | --- | --- | --- | --- |
| Proposed | INTERNAL | Internal | true | 10 |
| Proposed | EXTERNAL | External | true | 20 |

### 3.25 Inspection Outcome

**Internal name:** `Insp_OutcomeObject`. **Inheritance parent:** None. **Configuration:** Add local catalogue.

**Object ID:** Unassigned — proposed local catalogue. **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Object parameter | Target value |
| --- | --- |
| Module | Inspections |
| IsLocalizable | true |
| IsAbstract | false |
| HasWorkflow | false |
| IsLocationBound | false |
| IsSecurityEnabled | true |
| IsAuditEnabled | false |
| IsAttachmentEnabled | false |
| DisplayProperty | Name |
| OrderProperty | Sort |
| DefaultDetailView | Native generated catalogue detail; no assigned GUID yet |
| DefaultInventoryView | Native generated catalogue inventory; no assigned GUID yet |

**Directly declared fields:** `Code`, `Name`, `Active`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, maximum 100; non-localizable; unique within this object; native IsRequired TRUE | Y | None | Program administrator; stable after first use | Rules use Code, never localized Name.. **Add**; internal `Code`; PF-005 |
| Name | Text, maximum 255; localizable; native IsRequired TRUE | Y | None | Program administrator; translation allowed | Display value only; no rule comparisons.. **Add**; internal `Name`; PF-006 |
| Active? | Yes/No; native IsRequired TRUE | Y | TRUE | Program administrator | FALSE prevents new user selection; existing references retained. Required system outcome values cannot be deactivated while used by automation.. **Add**; internal `Active`; PF-007 |
| Sort | Float; precision/scale to validate in tenant; native IsRequired FALSE | N | None | Program administrator | Presentation order only.. **Add**; internal `Sort`; PF-008 |

Initial values:

Inherited columns are record values, not duplicate declarations. Proposed seeds have no invented record GUID.

| Basis | Code | Name | Active? | Sort |
| --- | --- | --- | --- | --- |
| Proposed | NOT_ASSESSED | Not assessed | true | 10 |
| Proposed | PASS | Pass | true | 20 |
| Proposed | NONCONFORMING | Nonconforming | true | 30 |
| Proposed | NOT_APPLICABLE | Not applicable | true | 40 |

### 3.26 Response Outcome

**Internal name:** `Insp_ResponseOutcomeObject`. **Inheritance parent:** None. **Configuration:** Add local catalogue.

**Object ID:** Unassigned — proposed local catalogue. **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Object parameter | Target value |
| --- | --- |
| Module | Inspections |
| IsLocalizable | true |
| IsAbstract | false |
| HasWorkflow | false |
| IsLocationBound | false |
| IsSecurityEnabled | true |
| IsAuditEnabled | false |
| IsAttachmentEnabled | false |
| DisplayProperty | Name |
| OrderProperty | Sort |
| DefaultDetailView | Native generated catalogue detail; no assigned GUID yet |
| DefaultInventoryView | Native generated catalogue inventory; no assigned GUID yet |

**Directly declared fields:** `Code`, `Name`, `Active`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, maximum 100; non-localizable; unique within this object; native IsRequired TRUE | Y | None | Program administrator; stable after first use | Rules use Code, never localized Name.. **Add**; internal `Code`; PF-009 |
| Name | Text, maximum 255; localizable; native IsRequired TRUE | Y | None | Program administrator; translation allowed | Display value only; no rule comparisons.. **Add**; internal `Name`; PF-010 |
| Active? | Yes/No; native IsRequired TRUE | Y | TRUE | Program administrator | FALSE prevents new user selection; existing references retained. Required system outcome values cannot be deactivated while used by automation.. **Add**; internal `Active`; PF-011 |
| Sort | Float; precision/scale to validate in tenant; native IsRequired FALSE | N | None | Program administrator | Presentation order only.. **Add**; internal `Sort`; PF-012 |

Initial values:

Inherited columns are record values, not duplicate declarations. Proposed seeds have no invented record GUID.

| Basis | Code | Name | Active? | Sort |
| --- | --- | --- | --- | --- |
| Proposed | UNANSWERED | Unanswered | true | 10 |
| Proposed | NOT_APPLICABLE | Not applicable | true | 20 |
| Proposed | INFORMATIONAL | Informational | true | 30 |
| Proposed | NEGATIVE | Negative | true | 40 |
| Proposed | POSITIVE | Positive | true | 50 |

### 3.27 Inspection Classification

**Internal name:** `Insp_ClassificationObject`. **Inheritance parent:** None. **Configuration:** Add local catalogue.

**Object ID:** Unassigned — proposed local catalogue. **Abstract:** false. **Workflow:** false. **Location bound:** false. **Security:** true (preserve except §8 rules).

| Object parameter | Target value |
| --- | --- |
| Module | Inspections |
| IsLocalizable | true |
| IsAbstract | false |
| HasWorkflow | false |
| IsLocationBound | false |
| IsSecurityEnabled | true |
| IsAuditEnabled | false |
| IsAttachmentEnabled | false |
| DisplayProperty | Name |
| OrderProperty | Sort |
| DefaultDetailView | Native generated catalogue detail; no assigned GUID yet |
| DefaultInventoryView | Native generated catalogue inventory; no assigned GUID yet |

**Directly declared fields:** `Code`, `Name`, `Active`, `Sort`.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Code | Text, maximum 100; non-localizable; unique within this object; native IsRequired TRUE | Y | None | Program administrator; stable after first use | Rules use Code, never localized Name.. **Add**; internal `Code`; PF-013 |
| Name | Text, maximum 255; localizable; native IsRequired TRUE | Y | None | Program administrator; translation allowed | Display value only; no rule comparisons.. **Add**; internal `Name`; PF-014 |
| Active? | Yes/No; native IsRequired TRUE | Y | TRUE | Program administrator | FALSE prevents new user selection; existing references retained. Required system outcome values cannot be deactivated while used by automation.. **Add**; internal `Active`; PF-015 |
| Sort | Float; precision/scale to validate in tenant; native IsRequired FALSE | N | None | Program administrator | Presentation order only.. **Add**; internal `Sort`; PF-016 |

Initial values:

Inherited columns are record values, not duplicate declarations. Proposed seeds have no invented record GUID.

| Basis | Code | Name | Active? | Sort |
| --- | --- | --- | --- | --- |
| Proposed | IN_PROGRESS | In progress | true | 10 |
| Proposed | COMPLETE_OPEN_ACTIONS | Complete with open actions | true | 20 |
| Proposed | COMPLETE_RESOLVED | Complete with all actions closed | true | 30 |

### 3.28 Operational Resource

**Internal name:** `Shared_OperationalResource`. **Inheritance parent:** Unresolved. **Configuration:** Conditional external binding; no local object creation.

**Object ID:** Unassigned — proposed external interface. **Abstract:** false. **Workflow:** false. **Location bound:** Unresolved. **Security:** Unresolved (preserve except §8 rules).

**Directly declared fields:** `Id`, `Name`, `Active`, `Establishment`, `TechnologyCode`.

G05 supplies this interface; it is not a local object-creation instruction. Physical identity, inheritance and field names remain unresolved.

| Field | Type / relationship | Req | Default / calculation | Editability and visibility | Automation / lifecycle |
| --- | --- | --- | --- | --- | --- |
| Id | GUID; authoritative stable resource identity | Y | Assigned by enterprise authority | Read only in Inspections | External authority owns identity; no generated local substitute.. **External input**; internal `Id`; PF-017 |
| Name | Text maximum 255 (proposed interface constraint) | Y | Enterprise authority | Read only in Inspections | Display only; not a matching key.. **External input**; internal `Name`; PF-018 |
| Active? | Yes/No | Y | Enterprise authority | Read only in Inspections | Inactive prevents new selection; historical references remain.. **External input**; internal `Active`; PF-019 |
| Establishment | M:1 to SysLocationEntity; inverse disabled | Y | Enterprise authority | Read only in Inspections | Filter resources by inspection Location; security remains governed by native Location.. **External input**; internal `Establishment`; PF-020 |
| Technology Code | Text maximum 100; externally governed stable dimension, not a local selector | N | Enterprise authority or NULL | Read only in Inspections | Report only when authority supplies it; missing value remains unknown. No local inline choice list.. **External input**; internal `TechnologyCode`; PF-021 |

## 4. Inspection workflow configuration

### 4.1 Native schema parameters — W01

**Schema:** ced8b0af-3920-4fcc-9e75-e5fcca803f56; E2673. Modify existing stage status links and action flows below. Preserve schema ID; no additional Actions Pending stage.

| Native parameter | Extracted value / binding | Target setting |
| --- | --- | --- |
| DateNotRequiredFinalStatus | None | Retain |
| DateNotRequiredFinalView | None | Retain |
| DisableView | None | Retain |
| RecurrenceSettings | None | Retain |
| StartNotification | None | Retain |
| EnableActionsOnCreate | true | Retain |
| IsDeleted | false | System managed; no manual override |
| StartCondition | None | None (retain) |
| IsCommentsEnable | false | false |
| IsActive | true | Retain |
| LastPublishDate | 2026-10-28T15:24:17.017Z | System managed; no manual override |
| DisableCondition | None | Retain |
| Name | Inspection | Retain |
| IsRecurring | false | false |
| HasPendingChanges | false | System managed; no manual override |
| IsDateNotRequiredEnabled | false | false |
| EnableActionsOnEdit | true | Retain |
| FirstStage | Create/Draft; 4f8ec485-60e4-4d7f-b902-5a5b9d7d58a0 | Retain |

### 4.2 Stage parameters

Use these existing system names and record IDs in stage-aware forms. Raw enum flags retain their source values; no enum label is guessed. Bind both S03 (ActionsPending) and S04 (SecondReview) to the single existing Review status record 3fffb769-563b-4259-a75d-ed894416c2c0. Keep two distinct workflow stages, with their separate reviewers, due periods and actions. Use the current stage SystemName, not the shared Review status alone, to determine which review controls, permissions, routing and notices apply. Completed is a termination result, not another work stage.

#### S01 Create/Draft

| Parameter | Configuration |
| --- | --- |
| Stable stage ID / evidence | 4f8ec485-60e4-4d7f-b902-5a5b9d7d58a0; E2675 |
| SystemName | Draft (retain exactly) |
| Display Name | Create/Draft |
| Status target | Draft; 44c89be7-a3e0-4d83-8870-bc3cdffcdaf2 |
| Extracted status | Draft; 44c89be7-a3e0-4d83-8870-bc3cdffcdaf2 |
| Responsibility | Native CreatedBy property (retain RecipientType=3) |
| RecipientType (raw) | 3 |
| Due date | None; remove recurring-series date expression for this nonrecurring Draft path |
| IsStandardPermission / InheritedPermission | true / true; preserve except scoped SEC-02 |
| StayInEditMode / TaskType | false / 1 |
| Form contract | F02 |
| NextStage / StageAction | Retain None; transitions belong to configured actions |
| DueDateLengthValue / Type | None / None; use specified expression/property rather than a second duration rule |

#### S02 In Progress

| Parameter | Configuration |
| --- | --- |
| Stable stage ID / evidence | 12319bf2-611d-40e1-8842-02fc17ab27db; E2693 |
| SystemName | InspectioninProgress (retain exactly) |
| Display Name | In Progress |
| Status target | Inspection In Progress; df91f16c-fd08-4cc9-889c-8eeeceac05b1 |
| Extracted status | Inspection In Progress; df91f16c-fd08-4cc9-889c-8eeeceac05b1 |
| Responsibility | Native PersResponsible property (retain RecipientType=3) |
| RecipientType (raw) | 3 |
| Due date | Native InspectionDate property (retain) |
| IsStandardPermission / InheritedPermission | false / true; preserve except scoped SEC-02 |
| StayInEditMode / TaskType | false / 1 |
| Form contract | F02/F03 |
| NextStage / StageAction | Retain None; transitions belong to configured actions |
| DueDateLengthValue / Type | None / None; use specified expression/property rather than a second duration rule |

#### S03 Review

| Parameter | Configuration |
| --- | --- |
| Stable stage ID / evidence | e71ff544-8b8f-46b9-a555-d4c8ffe0a0c6; E2691 |
| SystemName | ActionsPending (retain exactly) |
| Display Name | Review |
| Status target | Review; 3fffb769-563b-4259-a75d-ed894416c2c0 |
| Extracted status | Inspection In Progress; df91f16c-fd08-4cc9-889c-8eeeceac05b1 |
| Responsibility | H04; native expression recipient (RecipientType=2). Existing initial expression retained only if G04 confirms correct site scope. |
| RecipientType (raw) | 2 |
| Due date | Retain DATEADD("d",TypeOfInspec.DforFirstReview,TODAY) |
| IsStandardPermission / InheritedPermission | false / true; preserve except scoped SEC-02 |
| StayInEditMode / TaskType | false / 1 |
| Form contract | F04 |
| NextStage / StageAction | Retain None; transitions belong to configured actions |
| DueDateLengthValue / Type | None / None; use specified expression/property rather than a second duration rule |

#### S04 Second Review

| Parameter | Configuration |
| --- | --- |
| Stable stage ID / evidence | 2685d986-cf85-4037-adc1-ed03ba1ff765; E2695 |
| SystemName | SecondReview (retain exactly) |
| Display Name | Second Review |
| Status target | Review; 3fffb769-563b-4259-a75d-ed894416c2c0 |
| Extracted status | Inspection In Progress; df91f16c-fd08-4cc9-889c-8eeeceac05b1 |
| Responsibility | H04; use PRMethodSndRev/Role2/SecondReviewer/Expression2 live settings. Stage disabled by program flag by default. |
| RecipientType (raw) | 2 |
| Due date | Retain DATEADD("d",TypeOfInspec.forSecondReview,TODAY) |
| IsStandardPermission / InheritedPermission | true / true; preserve except scoped SEC-02 |
| StayInEditMode / TaskType | false / 1 |
| Form contract | F04 |
| NextStage / StageAction | Retain None; transitions belong to configured actions |
| DueDateLengthValue / Type | None / None; use specified expression/property rather than a second duration rule |

### 4.3 Configured user actions

There are exactly four Inspection workflow actions below. Ordinary Save, background updates and report generation are not extra workflow actions. Reuse native action IDs, order, signature flags and navigation behavior unless explicitly changed. All errors are raised before the affected transition/completion.

#### I01 Continue — S01

| Parameter | Target / retained value |
| --- | --- |
| Action ID / evidence | 16716726-f88d-4ba5-a96f-3a362729b263; E2697 |
| SystemName | CC575A96D262438F98CC01C4CAEDC634 (retain) |
| Order | 1 |
| RequireSignature / UserActionsRequired | false / true (retain) |
| IsHidden / TriggerCondition | false / None (retain) |
| Actor | Creator/assigned inspector with existing create/edit rights |
| Validate first | R01 source/context; INTERNAL has compatible checklist/questions; EXTERNAL does not require questions |
| Result | In Progress, or existing Create/Draft continuation if needed by the native create path |
| NavigateBackEnabled / confirmation | false; None (retain) |

| Order | Configured behavior |
| --- | --- |
| 1 | Validate source/context and record permission. |
| 2 | INTERNAL: invoke existing generation/section initialization once through H02/native path. EXTERNAL: bypass question-count requirement and all answer generation. |
| 3 | Set existing CreateMode as required for the native two-pass draft path; transition to existing InspectioninProgress when creation inputs are complete. |
| 4 | Keep ordinary Save as persistence; do not create another workflow action. |

#### I02 Complete Inspection — S02

| Parameter | Target / retained value |
| --- | --- |
| Action ID / evidence | c5e8463b-e881-4650-bc58-4c6aca01c59a; E2704 |
| SystemName | A875A62438C7422589B99CB00458C4D7 (retain) |
| Order | 1 |
| RequireSignature / UserActionsRequired | false / true (retain) |
| IsHidden / TriggerCondition | false / None (retain) |
| Actor | Assigned inspector/internal accountable employee |
| Validate first | EXTERNAL: R01 ExternalInspectionReport contains one completed, server-accessible File upload; INTERNAL: R02 complete answers. R05; H04 route resolves when review enabled |
| Result | Review or Completed |
| NavigateBackEnabled / confirmation | true; Are you sure you are done with this Inspection? (retain) |

| Order | Configured behavior |
| --- | --- |
| 1 | Run permission and source-specific requiredness checks before changing state or stamping metadata. EXTERNAL: require ExternalInspectionReport to contain exactly one completed, server-accessible file; block every forward transition out of InspectioninProgress when empty, pending or failed. General Attachments do not satisfy this check. |
| 2 | Assign D01 outcome; stamp existing CompletedBy/CompletedOn as field-work completion and new SubmittedAt=NOW. |
| 3 | If EnabFirstReview=TRUE, resolve H04, clear pending first-review decision, transition to ActionsPending (display Review) and send one review-assignment notice. |
| 4 | Otherwise set AcceptedAt=NOW and ReleActionPlans=TRUE, complete using existing Completed result, refresh D02 and send one completion notice. |
| 5 | Remove the old open-Finding status check. Never require corrective action closure. |

#### I03 Complete Approval Stage — S03

| Parameter | Target / retained value |
| --- | --- |
| Action ID / evidence | ce882c91-e860-4bae-8853-bb826f56cbea; E2702 |
| SystemName | F2D8854402B84C434F73A125CF2 (retain) |
| Order | 1 |
| RequireSignature / UserActionsRequired | false / true (retain) |
| IsHidden / TriggerCondition | false / None (retain) |
| Actor | Current eligible first reviewer determined by H04 |
| Validate first | Decision required; Rejected requires nonblank RevieweComments; Approved reruns applicable submission checks |
| Result | In Progress, SecondReview stage (status Review), or Completed |
| NavigateBackEnabled / confirmation | true; None (retain) |

| Order | Configured behavior |
| --- | --- |
| 1 | Require G03 Approved/Rejected record and, for rejection, nonblank comment before any transition. |
| 2 | Stamp FirstReviewBy=current acting user and DaofFirstReview=NOW using existing fields; retain native actor/time history. |
| 3 | Rejected: transition to InspectioninProgress and notify inspector with reason; same inspection/answers remain. |
| 4 | Approved with EnaSecondReview=TRUE: resolve H04 second route, clear pending second decision, transition to SecondReview and notify its responsibility. |
| 5 | Approved without second review: set AcceptedAt=NOW and ReleActionPlans=TRUE, complete, refresh D02 and notify distribution list. |

#### I04 Complete Approval Stage — S04

| Parameter | Target / retained value |
| --- | --- |
| Action ID / evidence | 1c9791e1-7f56-4f56-a2ac-a9167e15539d; E2706 |
| SystemName | A48CEC40978B1DD737E05239BC (retain) |
| Order | 1 |
| RequireSignature / UserActionsRequired | false / true (retain) |
| IsHidden / TriggerCondition | false / None (retain) |
| Actor | Current eligible second reviewer determined by H04 |
| Validate first | Decision required; Rejected requires nonblank RevieweComment1; Approved reruns applicable checks |
| Result | Review or Completed |
| NavigateBackEnabled / confirmation | true; None (retain) |

| Order | Configured behavior |
| --- | --- |
| 1 | Validate decision/comment before updates. |
| 2 | Stamp SecondReviewBy and DofSecondReview using existing native fields. |
| 3 | Rejected: return to existing ActionsPending (Review) with reason notice; retain all prior evidence in native history. |
| 4 | Approved: set AcceptedAt=NOW and ReleActionPlans=TRUE, complete, refresh D02 and send completion notice. |

## 5. Inspection Action Plan workflow configuration

### 5.1 Native schema parameters — W02

**Schema:** c7f95fd5-34a5-45d5-9231-727910d22265; E2510. Outstanding actions keep the existing inspection-acceptance release point; already-completed creation is the explicit exception. Retain native DateNotRequired final Completed association.

| Native parameter | Extracted value / binding | Target setting |
| --- | --- | --- |
| DateNotRequiredFinalView | None | Retain |
| RecurrenceSettings | None | Retain |
| StartNotification | None | Retain |
| EnableActionsOnCreate | false | Retain |
| IsDeleted | false | System managed; no manual override |
| StartCondition | HelperReleaseAP; 7251cc5d-056c-4cac-a482-e72d6cb06d55 | Proposed XScript: OR(HelperReleaseAP=TRUE,AlBeenCorrected=TRUE). G06 must confirm the initial completed route before activation. |
| IsCommentsEnable | false | false |
| IsActive | true | Retain |
| LastPublishDate | 2026-10-28T18:33:06.86Z | System managed; no manual override |
| DisableCondition | None | Retain |
| Name | Inspection Action Plan | Retain |
| IsRecurring | false | false |
| HasPendingChanges | false | System managed; no manual override |
| IsDateNotRequiredEnabled | true | true |
| EnableActionsOnEdit | true | Retain |
| FirstStage | In Progress; 6ad61842-6918-437f-83fe-0c499a08bd20 | Retain |
| DateNotRequiredFinalStatus | Completed; d0186f2b-77e1-46d4-a2d0-e1e1866718ea | Retain |

### 5.2 Stage and Complete action

#### S05 In Progress

| Parameter | Configuration |
| --- | --- |
| Stable stage ID / evidence | 6ad61842-6918-437f-83fe-0c499a08bd20; E2514 |
| SystemName | InProgress (retain exactly) |
| Display Name | In Progress |
| Status target | In Progress; a3306f8e-36c7-4a19-b534-7385362b93f1 |
| Extracted status | In Progress; a3306f8e-36c7-4a19-b534-7385362b93f1 |
| Responsibility | Native ActionOwner property (retain RecipientType=3) |
| RecipientType (raw) | 3 |
| Due date | Native DueDate property (retain) |
| IsStandardPermission / InheritedPermission | true / true; preserve except scoped SEC-02 |
| StayInEditMode / TaskType | false / 1 |
| Form contract | F05 |
| NextStage / StageAction | Retain None; transitions belong to configured actions |
| DueDateLengthValue / Type | None / None; use specified expression/property rather than a second duration rule |

#### I05 Complete — S05

| Parameter | Target / retained value |
| --- | --- |
| Action ID / evidence | b736836e-f77d-4a45-967a-712179a2cf74; E2518 |
| SystemName | D8CF0D7E52EA402890D4AE5116EBEE89 (retain) |
| Order | 1 |
| RequireSignature / UserActionsRequired | false / true (retain) |
| IsHidden / TriggerCondition | false / None (retain) |
| Actor | Existing action owner/authorized action administrator |
| Validate first | Nonblank CompletionNotes; actual CompletedBy/CompletionDate; date not future |
| Result | Action Completed |
| NavigateBackEnabled / confirmation | true; None (retain) |

| Order | Configured behavior |
| --- | --- |
| 1 | Move the existing empty CompletionDate=TODAY and empty CompletedBy=CURRENTUSER steps before native completion; keep entered actual values. |
| 2 | Move the existing notes check before completion and require nonblank CompletionNotes; add checks for missing resolved CompletedBy/CompletionDate and CompletionDate later than TODAY. Raise errors before completing. |
| 3 | Invoke existing native Completed result; maintain IsCompleted consistently. |
| 4 | Stop native task reminders and call H07; do not reopen accepted inspection or change its original outcome. |

### 5.3 Initial already-completed behavior

AlBeenCorrected=TRUE on initial entry is not another workflow button. H06 must validate R06 first, supply Workflow.DateNotRequired using the supported G06 event order, and retain the native DateNotRequiredFinalStatus Completed binding. Configure the W02 start-condition exception only once G06 confirms no transient outstanding task or assignment notice. Outstanding actions otherwise keep HelperReleaseAP=TRUE as their start condition and are released on final inspection acceptance. This preserves current timing while meeting independent closure; it does not introduce assignment-on-save for outstanding actions.

## 6. Forms, validation and outcome rules

### 6.1 Form parameters

| Form ID | Definition scope | Editor | Fields/content | Visibility / behavior |
| --- | --- | --- | --- | --- |
| F01 | Type of Inspection / checklist authoring | Program administrator | SourceMode, review/equipment fields, overall outcome setting; ContributesToOutcome; existing ActReqChoices; Choice.IsNegative; named sections | Hide forced completion/sections/scoring/Finding flags and ad hoc role creation. Use actual native route/decision/equipment record IDs; no shared catalogue Code migration. |
| F02 | Inspection Create/Draft and In Progress | Creator/inspector | TypeOfInspec, Location, PersResponsible, PerformedOn; InspecChecklist OR ExternalParty/ExternalInspectionReport; Equipment/EquipmentTxt; result fields | Use live type settings. INTERNAL shows checklist/answers. EXTERNAL hides/nulls checklist and replaces the Question Answer grid with section External Inspection Report containing one File control, ExternalInspectionReport. Show ExternalParty/PerformedOn. Require the report when advancing from InspectioninProgress, not on ordinary Save. INTERNAL hides the report section. New result/date fields read only where system populated. |
| F03 | Question/Section Answer | Inspector in working/returned stage; reviewer read only | Published section/order/question; one matching typed answer; IsNA, Comments, attachments and existing action controls | Retain existing native branching and E842 clear-on-hide. No added confirmation step. Require comments/action by R02, not by hidden numeric score or formal Findings. |
| F04 | Inspection Review / Second Review | Current eligible corresponding reviewer | Read-only response/report context; matching RevieweDecision/RevieweComments OR RevieweDecisio1/RevieweComment1 | Editable review fields only in their own stage; mandatory return comments; preserve old attempts through native history. Use stage SystemName ActionsPending for first-review controls and SecondReview for second-review controls. Both stages have status Review; status alone cannot select the matching decision/comments or permissions. |
| F05 | Inspection Action Plan initial/InProgress/completed | Action author/owner | CPARActionReq, AlBeenCorrected, ActionOwner/DueDate OR CompletedBy/CompletionDate/CompletionNotes; existing source links | Modify E18 CLF_InsActionPlan_Detail / Action Already Complete Show/Hide. In its AlBeenCorrected TRUE branch remove CPARActionReq from HideAction, SetNonMandatoryAction and ClearValueAction; add it to ShowAction and SetMandatoryAction. Remove ActionOwner from ShowAction and add it to HideAction/SetNonMandatoryAction. Change create ActionOwner IsMandatory TRUE to FALSE. Add TRUE-branch defaults for empty CompletedBy=CURRENTUSER and CompletionDate=TODAY. Existing false-branch mandatory controls remain the enforcement for outstanding entry. CPARTypeID create control is already hidden; hide its InProgress/Completed controls and change the subtype default only if needed for the actual G03 Corrective record. E3088/I05 handle completion-specific checks. |
| F06 | Optional resource/lookup controls | Authorized inspector | OperationalResource and existing Equipment selector | Enable only with G05 authoritative binding; filter by Location and active availability; no new security grouping or historical snapshots. |

### 6.2 Conditional validation

#### R01 Source mode and external report

| Setting | Configuration |
| --- | --- |
| Controlling fields | Inspection.TypeOfInspec.SourceMode.Code; legacy NULL defaults to INTERNAL |
| Required behavior | INTERNAL: checklist required before Continue and native answer generation enabled. EXTERNAL: hide/null InspecChecklist and PubChecklist; do not generate Section/Question Answers; Replace the Question Answer grid with section External Inspection Report containing only Inspection.ExternalInspectionReport, a single-value File field. Require ExternalParty, PerformedOn and exactly one fully uploaded server-accessible ExternalInspectionReport before any forward transition from InspectioninProgress (I02 Complete Inspection). Check before timestamps/notifications/stage changes; another attachment cannot substitute. Hide the report section/field for INTERNAL and legacy NULL source. Inspector remains internal accountable employee. Incomplete Draft and InProgress ordinary Save may omit the report; it becomes mandatory when advancing out of InspectioninProgress. New shared fields are not globally mandatory on legacy/unrelated records. |
| Client basis | INS-002 |
| Error text | Please select an Inspection Checklist. / Please enter the external party and inspection date and upload the inspection report. / Upload the External Inspection Report before moving the inspection forward. |

#### R02 Response completion and direct actions

| Setting | Configuration |
| --- | --- |
| Controlling fields | QuestionAnswer.IsVisible, IsNA, published AnswerType, typed answer, Comments and existing direct action links |
| Required behavior | Every visible/applicable question needs an explicit typed response; FALSE and zero count as answered. Permitted N/A needs its configured comment. Negative answers need a comment. Require an action only when the selected Choice or any selected Choices belongs to PubQuestion.ActReqChoices, even if the response is positive or informational; empty ActReqChoices requires no action. Open/complete action both satisfy existence. Checkbox has no choice-triggered action requirement. Hidden dependent questions do not block. Formal Findings and their closure are excluded. Reuse E842 clearing-on-hide and E883 typed N/A clearing; no branch reconfirmation control. |
| Client basis | INS-003, INS-005, INS-011 |
| Error text | Complete the applicable questions and their required comments or action plans before submitting. |

#### R03 Categorical outcomes

| Setting | Configuration |
| --- | --- |
| Controlling fields | TypeOfInspec.OverallOutcomeRequired and D01 |
| Required behavior | No score/percentage is exposed. Live type rules, published ContributesToOutcome and shared Choice.IsNegative drive D01. A single applicable negative produces Nonconforming after readiness; all-informational content does not accidentally pass. |
| Client basis | INS-004 |
| Error text | None; result rule only |

#### R04 Review and Return

| Setting | Configuration |
| --- | --- |
| Controlling fields | TypeOfInspec.EnabFirstReview / EnaSecondReview / PRMethod / PRMethodSndRev; actual G03 decision identities |
| Required behavior | Both review stages bind to the existing Review status. Resolve first/second responsibility and decisions by stage SystemName ActionsPending/SecondReview, using live type and inspection Location. Normal routing is maintained role, supervisor or submitter; named/expression exceptional. Require decision; rejection requires nonblank corresponding comments before transition. Reuse same inspection/answers on Return. Due period is supplied, positive calendar days; overdue records stay actionable. Retain existing self-review policy until client specifies another. |
| Client basis | INS-006 |
| Error text | The review route is not configured for this inspection. / Please select a review decision. / Please enter the reason for returning this inspection. |

#### R05 Location and equipment

| Setting | Configuration |
| --- | --- |
| Controlling fields | TypeOfInspec.EquipmentList and actual G03 ELOptions record |
| Required behavior | EquipmentList FALSE: hide/clear both equipment inputs on unused draft. TRUE+Text: require EquipmentTxt, clear/hide Equipment. TRUE+Lookup: require permitted Equipment, clear/hide EquipmentTxt; enable only with G05 inventory mapping. Validate Location as supplied establishment; do not force a leaf RMD. Optional OperationalResource must match Location when binding approved. Reject source/context changes once related execution/action evidence exists. |
| Client basis | INS-012, INS-017 |
| Error text | Identify the equipment for this inspection. / Select a resource belonging to the chosen establishment. |

#### R06 Action entry and closure

| Setting | Configuration |
| --- | --- |
| Controlling fields | CLF_InsActionPlanObject.AlBeenCorrected and native workflow completion |
| Required behavior | Outstanding: require activity, owner and due date. Already completed: require activity, actual performer, actual completion date and notes; owner/due date not required. Corrective type hidden. The product supplies existing inspection/response links. Apply entry requirements through the existing E18 Action Already Complete Show/Hide view action. In its TRUE branch show/require the activity without clearing it and hide/make nonmandatory ActionOwner; set the create ActionOwner control IsMandatory FALSE. Add required-evidence/future-date checks to E3088 before Workflow.DateNotRequired and to E2518 before native completion. Outstanding actions retain release at inspection acceptance; initial completed route uses G06 native mechanism without transient task. |
| Client basis | INS-005, INS-013, INS-015 |
| Error text | Please enter the completed activity, performer, completion date and completion notes. / In order to proceed, please fill out Completion Notes. |

### 6.3 Outcome decision order

These are declarative handler branches, evaluated in the shown order within each group. Configure the output as the actual related catalogue record created from its own seed table; a Code literal is not a GUID. External/informational content never receives an inferred Pass. Accepted OverallOutcome remains unchanged when an action later closes; only D02 changes.

| Rule | Context | Output Code | Condition |
| --- | --- | --- | --- |
| D01.1 | Response | NOT_APPLICABLE | IsVisible is not TRUE, or permitted explicit IsNA is TRUE |
| D01.2 | Response | UNANSWERED | Visible/applicable question lacks the matching typed answer |
| D01.3 | Response | INFORMATIONAL | Answer exists and PubQuestion.ContributesToOutcome is not TRUE (FALSE or legacy NULL), or answer type is not Choice/Choices (including Checkbox) |
| D01.4 | Response | NEGATIVE | Contributing Choice has Choice.IsNegative=TRUE, or contributing Choices includes at least one choice with IsNegative=TRUE; NULL flags are not negative |
| D01.5 | Response | POSITIVE | Remaining answered, applicable, contributing response |
| D01.6 | Inspection | NOT_ASSESSED | EXTERNAL, OverallOutcomeRequired FALSE, or required submission conditions incomplete |
| D01.7 | Inspection | NONCONFORMING | Ready required-outcome INTERNAL inspection has at least one NEGATIVE response |
| D01.8 | Inspection | PASS | Ready inspection has no NEGATIVE and at least one POSITIVE response |
| D01.9 | Inspection | NOT_APPLICABLE | Ready required-outcome inspection has no contributing applicable response |
| D02.1 | Action classification | IN_PROGRESS | Native inspection workflow not Completed |
| D02.2 | Action classification | COMPLETE_OPEN_ACTIONS | Native inspection Completed and any distinct related Inspection Action Plan not completed |
| D02.3 | Action classification | COMPLETE_RESOLVED | Native inspection Completed and no open related action; zero actions also resolves |

Choice polarity and action requirements are independent. For contributing multiple-choice questions, one flagged selected choice is sufficient for NEGATIVE; a negative unselected choice has no effect. Empty or nonmatching ActReqChoices does not require an action. Any selected action-triggering choice requires an action even when the response is positive or informational. Explicit permitted N/A and hidden-question checks take precedence over both checks. Checkbox and other non-choice answers are informational; use a Yes/No Choice list where a binary answer must contribute or trigger an action.

## 7. Native handlers and publication copies

### 7.1 Handler contracts

Events are the logical configuration points to bind under G02; existing ActionType numeric codes in the source register are not treated as a verified enum dictionary. Shared behavior must be scoped to Inspection without altering unrelated action/checklist applications.

### H01 Configuration

| Parameter | Setting |
| --- | --- |
| Event / existing mechanism | Type/checklist/question authoring save; existing E629/E1236 and scoped validation |
| Watched / referenced fields | Type: SourceMode, OverallOutcomeRequired, ComplValidation, FindingTracking, EnabFirstReview, EnaSecondReview, DforFirstReview, forSecondReview, PRMethod, PRMethodSndRev, Role, Role2, FirstReviewer, SecondReviewer, Expression, Expression2, EquipmentList, ELOptions, EquipmMandatory. Checklist: EnableScoring, EnableSections. Question: AnswerType, ChoiceList, ActReqChoices, AnswerRequired, AllowNA, ComReqIfNA, ContributesToOutcome. Choice: IsNegative. |
| Ordered responsibility | Apply R01/R02/R04/R05 for Inspection content. Require ActReqChoices members to belong to Question.ChoiceList. Permit ContributesToOutcome TRUE only for Choice/Choices; Checkbox must remain noncontributing. Maintain IsNegative on shared Choice records and explain shared use; do not derive action requirements from that flag. Correct E629 N/A-comment condition; disable routine ad hoc role creation. Do not normalize shared catalogue types. |
| Rules | R01,R02,R04,R05 |

### H02 Configuration

| Parameter | Setting |
| --- | --- |
| Event / existing mechanism | Inspection Create; extend existing E2007 only as necessary |
| Watched / referenced fields | TypeOfInspec, SourceMode, InspecChecklist, PubChecklist, SysteTypeHelper |
| Ordered responsibility | Set SysteTypeHelper=Insp_EquipInspectionObject. INTERNAL: use extracted current native version selection and answer creation; initialize new response result when native creation bypasses ordinary create handlers. EXTERNAL: skip native generation. Existing compiled publisher/generator is reused, not rebuilt. |
| Rules | R01 |

### H03 Configuration

| Parameter | Setting |
| --- | --- |
| Event / existing mechanism | Existing Question Answer create/update and submission validation; E883/R02 extensions |
| Watched / referenced fields | Choice, Choices, Checkbox, Date, Float, Text, IsNA, IsVisible, Comments; evaluate referenced Choice.IsNegative, Choices.IsNegative, PubQuestion.ContributesToOutcome and PubQuestion.ActReqChoices; native attachment added/removed/upload-complete and related action created/completed events. |
| Ordered responsibility | On create or listed source change only, run D01 after native visibility/default processing; do not retrigger on result/helper-only writes. I02/I03/I04 also evaluate authoritative readiness/results. Read current shared Choice flags whenever D01 runs; always reevaluate on submission and approval so pre-acceptance flag changes are recognized without a new scheduler. Update ResponseOutcome and OverallOutcome only before native completion; later shared-choice edits do not rewrite accepted results. Preserve unrelated applications; E842 remains unchanged. |
| Rules | R02,R03,D01 |

### H04 Configuration

| Parameter | Setting |
| --- | --- |
| Event / existing mechanism | Review stage entry / native recipient expression |
| Watched / referenced fields | TypeOfInspec review flags/methods/roles/subjects/expressions/days; Location; PersResponsible |
| Ordered responsibility | Use actual G03 route identities and G04 supported native site-role binding. Native history stores actor/time. Due date uses existing DATEADD expressions. No applied-setting field creation or new self-approval ban. |
| Rules | R04 |

### H05 Configuration

| Parameter | Setting |
| --- | --- |
| Event / existing mechanism | Inspection save and controlled selector form actions |
| Watched / referenced fields | Location, Equipment, EquipmentTxt, TypeOfInspec equipment fields; optional OperationalResource |
| Ordered responsibility | Enforce R05 on form and save. Replace E2628 leaf restriction in this pathway with supplied establishment criteria. No historical resource-label copies or local taxonomy. |
| Rules | R05 |

### H06 Configuration

| Parameter | Setting |
| --- | --- |
| Event / existing mechanism | Existing Action Already Completed handler E3088; within AlBeenCorrected TRUE branch before Workflow.DateNotRequired |
| Watched / referenced fields | AlBeenCorrected, CPARActionReq, CompletedBy, CompletionDate, CompletionNotes |
| Ordered responsibility | Add missing/blank activity, missing performer/date, blank notes and future-date error checks before the existing Workflow.DateNotRequired assignment. Use G06 supported native completion order. F05 existing view action provides entry mandatory controls/defaults; this contract adds no unspecified general save-validation handler. Existing source-link/helper handlers remain native product behavior. |
| Rules | R06 |

### H07 Configuration

| Parameter | Setting |
| --- | --- |
| Event / existing mechanism | Final inspection completion and related Inspection Action Plan creation/completion/permitted reopen |
| Watched / referenced fields | Native inspection completion; distinct actions linked by CheckListAnsAct; native action completion |
| Ordered responsibility | Assign D02 through supplied native related-update hook. Permit only ActionClassification to change after acceptance; leave accepted responses/OverallOutcome untouched. No new work stage or scheduler. |
| Rules | D02 |

### H08 Configuration

| Parameter | Setting |
| --- | --- |
| Event / existing mechanism | Existing Publish copy handler E265 extension |
| Watched / referenced fields | Question.ContributesToOutcome; retain native Question.ActReqChoices mapping |
| Ordered responsibility | Add only the inherited ContributesToOutcome copy. IsNegative stays on the shared Choice record and is not copied. Retain the existing ActReqChoices mapping. Retain E2348 and native publishing, current-version selection, calculations, native maps and compiled generator. No atomic-publication-engine refactor. |
| Rules | R02,D01 |

### 7.2 Publication copy mapping

Use the existing native Publish action, E265/E2348 and compiled creation mechanisms. Add only the ContributesToOutcome copy; retain the existing ActReqChoices copy and all other mappings/calculations. Published questions and answers reference existing shared Choice records, whose IsNegative value is live. No new Choice snapshot or copy mapping is added. No conversion of all published fields, version engine rebuild, new lock service or custom publication transaction is part of the core scope.

| Handler | Destination field | Source field/expression | Instruction |
| --- | --- | --- | --- |
| E265 | QuestionRef | Question.QuestionRef | Reuse extracted mapping |
| E265 | Order | Question.Order | Reuse extracted mapping |
| E265 | Content | Question.Content | Reuse extracted mapping |
| E265 | Guideline | Question.Guideline | Reuse extracted mapping |
| E265 | SectionName | Question.ExistingSection.SectionName | Reuse extracted mapping |
| E265 | Section | SectionName | Reuse extracted mapping |
| E265 | AnswerType | Question.AnswerType | Reuse extracted mapping |
| E265 | ChoiceList | Question.ChoiceList | Reuse extracted mapping |
| E265 | DefaultChoice | Question.DefaultChoice | Reuse extracted mapping |
| E265 | DefaultChoices | Question.DefaultChoices | Reuse extracted mapping |
| E265 | DefaultBool | Question.DefaultBool | Reuse extracted mapping |
| E265 | AllowNA | Question.AllowNA | Reuse extracted mapping |
| E265 | ComReqIfNA | Question.ComReqIfNA | Reuse extracted mapping |
| E265 | FindReqChoices | Question.FindReqChoices | Reuse extracted mapping |
| E265 | ComReqChoices | Question.ComReqChoices | Reuse extracted mapping |
| E265 | ActReqChoices | Question.ActReqChoices | Reuse extracted mapping |
| E265 | VisDepNoAns | Question.VisDepNoAns | Reuse extracted mapping |
| E265 | VisibleIfs | Question.VisibleIfs | Reuse extracted mapping |
| E265 | AnswerRequired | Question.AnswerRequired | Reuse extracted mapping |
| E265 | Weight | Question.Weight | Reuse extracted mapping |
| E265 | ValueChoiceList | Question.ValueChoiceList | Reuse extracted mapping |
| E265 | AbsoluteOrder | Question.AbsoluteOrder | Reuse extracted mapping |
| E2348 | Description | Checklist.Description | Reuse extracted mapping |
| E2348 | ChecklistRef | Checklist.Reference | Reuse extracted mapping |
| E2348 | Location | Checklist.Location | Reuse extracted mapping |
| E265 extension / H08 | ContributesToOutcome | Question.ContributesToOutcome | Add only this semantic copy |

The new semantic fields are inherited from Question Abstract on both Question and Published Question. Configure each copy once on the published creation path. Existing source field declarations are not redeclared on descendants. Runtime hCheckAnswer helpers and existing map generation remain native. The baseline has live authoring-dependent published calculations; this revision documents their reuse and does not claim they have been hardened.

## 8. Security, notifications, mobile and outputs

| Contract | Configuration item | Parameters / behavior |
| --- | --- | --- |
| SEC-01 | New catalogue access | Program administrator edits Code/Name/Active/Sort; ordinary users read only; system can assign required outcome values. No catalogue consumer inverse. |
| SEC-02 | Inspection/action stage permissions | Inspector edits working/returned record; reviewer edits only corresponding review fields; action owner retains independent action task. Accepted inspection/answers read only except H07 classification. Apply existing Location scope to native files and source navigation. Set IsAuditEnabled TRUE on Inspection and Inspection Abstract to retain changing review decisions/comments/actors/dates with native workflow history; preserve unrelated shared-object audit flags. This scoped review evidence is required by ADR-006, not an application-wide audit retrofit. |
| NTF-01 | Assignment / Return / acceptance | Reuse existing templates and actual recipients. Review assignment follows I02/I03; Return includes comment; final acceptance notifies DistributioList. Keep E477 outstanding-action notice on release, excluding AlBeenCorrected=TRUE. Do not add a second task-entry notice. |
| REM-01 | Native reminders | Enable native review/action reminders with actual G04 cadence/recipients; no guessed daily/weekly policy. Overdue remains editable; native completion stops reminders; no new Event Service. |
| MOB-01 | Native mobile/offline | Retain application mobile/offline flags and same record identities. Configure F02/F03/F05 native download/queue/conflict UI under G07. Session starts online; no offline user switch; show the External Inspection Report section and single ExternalInspectionReport File field instead of the Question Answer grid for EXTERNAL. Enforce the same forward-transition check after upload reaches the server; offline/pending/failed uploads cannot advance InspectioninProgress. No custom sync status field or unsupported local callback. |
| REP-01 | Inspection / external inventory | One inspection row: program/source, Location/optional resource, inspector, PerformedOn, InspectionDate due date, SubmittedAt, AcceptedAt, native workflow status, OverallOutcome, ActionClassification and ExternalParty/ExternalInspectionReport file reference. Both review stages display Review as status. |
| REP-02 | Deficiencies | One negative response: stable authoring/published question identity, section, answer/comment/evidence, source inspection and distinct related actions. Preserve original response after action closure. |
| REP-03 | Action follow-up | One action: source inspection/answers, owner/due date, already-completed flag, performer/date/notes and native completion. Do not multiply totals through several existing maps. |
| REP-04 | Review timeliness | Native stage-entry/due/Return/approval history per cycle; separate inspection-level submission/acceptance totals. Exact native report/history bindings are G08. |
| REP-05 | Repeat-response trends | Stable authoring question plus its actual published wording, program, Location/optional context and period. No invented historic technology; no resource snapshots in core scope. |
| REP-06 | Security of outputs | Reuse authorized Location and attachment access on reports/exports; no action link implicitly grants inspection access. |
| OUT-01 | Proposed native Merge Template | G08-approved branded parent/child/photo/report/review/action sections. External report content uses the single Inspection.ExternalInspectionReport field. The uploaded input file and generated portable output have separate native storage roles; generated output does not populate the input field. Clearly identify Draft versus final accepted output and generation time. Use supplied native storage/versioning; exact retention/signature policy remains input. No new shadow inspection object or automatic external distribution. |
| INC-01 | Incident boundary | Use existing manual Incident Management record creation when criteria apply; no new incident fields, automatic creation or typed integration contract here. |

## 9. Configuration inputs and readiness

Only affected items are blocked on missing values. Unchanged retained metadata and existing native mechanisms are reused; absence of an export attribute does not create a blanket rebuild or a new verification assignment. No task to discover/prototype/verify the tenant is included in the implementation plan.

| Input | Technical value/result | Required content |
| --- | --- | --- |
| G01 | Approved program/checklist setup | Actual initial checklists, shared Choice.IsNegative values, per-question ActReqChoices and ContributesToOutcome, sections/response sets and first-review enablement/periods for HSE_PROJECT, ENV_PROJECT and OFFICE_EHS. Proposed ADR statuses remain visible. |
| G02 | Native expression/event bindings | Executable expressions, native save/attachment/related-record callbacks and concrete subtype scoping for changed R/H rules; missing source metadata only where an actual change depends on it. No new general publication/prototype programme is required. |
| G03 | Existing catalogue record identities | Actual IDs for Role/Supervisor/Submitter/Named/Expression route options, Approved/Rejected decisions, Text/Lookup equipment options and Corrective type. Existing labels/types/IDs are preserved; create only a missing approved functional option. |
| G04 | Reviewer assignments, establishments and reminders | Actual permitted establishment Location identities, maintained site/functional role membership and supported native location-aware recipient binding, positive review days, permission principals and reminder cadence/recipients. No new self-review prohibition or guessed reminder interval. |
| G05 | Conditional shared context | Physical enterprise resource/equipment object/field identities, establishment filters and existing access. Required only for optional shared-resource/lookup work; no local taxonomy build. |
| G06 | Initial completed-action mechanism | Supported native DateNotRequired/create-and-complete behavior allowing the I/H06 path to finish without an outstanding task or assignment notice, including start-condition/event order. |
| G07 | Native evidence/mobile metadata | Native File type identity and single-value control for Inspection.ExternalInspectionReport, completed/server-accessible upload and ownership checks, replacement/access rules, mobile queue/conflict controls and transition validation timing. General attachments remain optional evidence, not the required report. |
| G08 | Proposed report/output inputs | Approved report layouts/history access; ADR-007 branded template/child/photo/storage/retention/signature details. Regulatory consolidation remains deferred. |

The document is a configuration handoff with explicit technical inputs, not a claim that unresolved expressions, native role scoping or immediate-completion event order have already been validated. New timestamps use timezone-enabled Date/Time. Existing shared Date/Time attributes are retained; no implicit historic conversion or backfill.

## 10. Revision and validation disposition

Revision 1’s general hardening proposals are superseded for the current core build. [Revision decisions](revision-decisions.md) names the deferred work and task dispositions; the original artifacts are archived. New target fields absent from this revision were proposals only and are not physical tenant deletions. Existing baseline objects/fields, native publisher/generator, map synchronization and branch clearing are retained unless an explicit row changes them for a client requirement.

Validation checks object/field coverage, inheritance, relationship endpoints, seed ownership, workflow/action stable identities, source evidence integrity, current task mapping and technical dependency consistency. [Validation results](validation.md) distinguish those static checks from unresolved native behavior. Claims of frozen historic program settings, immutable native published calculations, atomic publication or changed branch-evidence retention are not made by the core scope.
