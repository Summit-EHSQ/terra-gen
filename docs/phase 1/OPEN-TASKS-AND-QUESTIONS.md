# Open Tasks and Material Design Questions

Review date: 2026-09-18

This register retains the Phase 1 delivery backlog at its existing path and adds a separate Phase 2 section for material Incident Management work discovered in the repository-wide review. Phase 2 items are not Phase 1 commitments; their priorities apply within Phase 2. Shared foundations and the interim inspection-to-incident handoff remain Phase 1 concerns.

Evidence reviewed: 58 Phase 1 ADR files (57 active: 36 accepted and 21 proposed; one superseded), three Phase 2 ADRs (one accepted and two proposed), all repository and domain overviews, the phase change log, publication configuration, and the seven unique meeting transcripts represented by 19 files. SHA-256 comparison confirmed identical copies of each shared meeting; there were no conflicting transcript copies. Both supplied training ZIPs were inspected at the manifest level: each declares SCORM 1.2. Package contents and workshop demonstrations do not establish target-environment compatibility. No deployed configuration, integration contract, UAT results, or production migration evidence was found.

The list excludes ordinary build activity already determined by accepted decisions. An accepted ADR can still produce an open task where its detailed implementation, ownership, or operating rule has not been settled. A proposed ADR is included where approval or validation is still material.

Priority meanings:

* **P0 — design blocker:** resolves a shared data model, integration contract, security boundary, or core operating rule needed before dependent configuration can be finalized.
* **P1 — implementation-critical:** needed to build, validate, migrate, or operate an agreed solution safely.
* **P2 — governance/future boundary:** needed for sustainable operation or a deliberately deferred capability.

Sources below use repository-relative paths through reference links, resolved relative to this register. ADR citations refer to **Decision Outcome**, **Consequences**, and **More Information** unless a narrower section is stated. Current ADR metadata governs status; older change-log tables and transcript proposals do not override it. Explicit work is stated in the sources; derived work is the remaining design or validation needed to implement that direction. Detailed test scenarios are proposed completion evidence, not claims of newly approved requirements.

| Scope | P0 | P1 | P2 | Total |
| --- | ---: | ---: | ---: | ---: |
| Phase 1 and shared foundations | 15 | 24 | 4 | 43 |
| Phase 2 only | 2 | 2 | 0 | 4 |
| **Total** | **17** | **26** | **4** | **47** |

The broadest dependencies are the governed operational taxonomy, application access and master-data ownership, the employee integration contract, and the policy-backed course/qualification catalogues. Migration readiness depends on validating those foundations and the relevant product behavior.

## Cross-Domain and Platform Foundations

### P0 — Establish the governed site, resource, and asset taxonomy

**Open task:** Convene the deferred asset-hierarchy design workshop; inventory the relevant plants, projects, resources, substations, warehouses, administrative buildings, vehicles, and equipment; define atomic records, types, parent-child relationships, stable identifiers, source systems, ownership, and integration boundaries; and map existing inspection-program lists to the governed taxonomy.

**Unanswered questions:** What is the authoritative source for each class of operational record? What is the lowest atomic unit that must be selectable and reportable? Which records belong to one OSHA establishment, which groupings are only program or regulatory-plan collections, and which data should be integrated versus maintained in Intelex? How will changes be governed?

**Why material:** This controls incident attribution, inspection scope and frequency, regulatory roll-ups, technology reporting, equipment-specific inspection options, and future asset integration.

**Evidence:** Explicit remaining design or validation work in the cited ADRs; test scenarios and operational completion criteria are derived.

**Sources:** [Platform Administration ADR-001]; [Incident Management ADR-001]; [Inspections ADR-012], [Inspections ADR-016], and [Inspections ADR-017].

### P0 — Finalize application access and exceptional employee assignments

**Open task:** Approve or revise Platform Administration ADR-003 and document each Phase 1 application's permissions, establishment-based scope, home attribution, and exceptional login assignments or groups. Validate representative local, regional, central, supervisor, and matrix-role users, including removal of obsolete access after transfers. Use the accepted single establishment hierarchy; keep the asset taxonomy outside security.

**Unanswered questions:** Which roles need access across establishments and to which applications? Which exception grants survive a profile change, and who approves or removes them? How will positive and negative access tests demonstrate the agreed scope? A second hierarchy is a future adoption decision, not an unanswered initial-go-live choice; incident-specific privacy is tracked in Phase 2 below.

**Why material:** The answers determine provisioning fields, record visibility, test cases, exception groups, and privacy controls across the platform.

**Evidence:** Explicit remaining design or validation work in the cited ADRs; test scenarios and operational completion criteria are derived.

**Sources:** [Platform Administration ADR-001] and [Platform Administration ADR-003]; [Employee Management ADR-001]. [Platform Administration ADR-002] is superseded and is historical context only.

### P0 — Define operational ownership for Intelex master data and roles

**Open task:** Name the administrative owner and approvers for hierarchy nodes, stable identifiers, asset/reference data, position-to-profile mappings, location-scoped roles, and controlled exceptions. Define change control, effective dating, validation, and audit procedures before production data is loaded.

**Unanswered questions:** Who may create, rename, move, retire, or remap hierarchy and reference records? Who ensures that every applicable location has current workflow-role occupants? What is the fallback when a role is unpopulated?

**Why material:** Accepted designs depend on manually governed Intelex structures; missing ownership can break security, routing, reporting, and integrations.

**Evidence:** Derived operating or validation work needed to make the cited accepted direction usable; detailed controls and completion criteria still require agreement.

**Sources:** [Platform Administration ADR-004] and [Platform Administration ADR-005]; [Documentation portal], **Ownership and Review**.

### P1 — Complete the external-support access control design

**Open task:** Confirm provider controls for the separate support URL and document authorization, credential management, rotation, logging, periodic access review, and removal procedures.

**Unanswered questions:** Which provider and implementation roles are permitted, who approves access, what audit evidence is available, and how often is access reviewed?

**Evidence:** Derived operating or validation work needed to make the cited accepted direction usable; detailed controls and completion criteria still require agreement.

**Source:** [Platform Administration ADR-006].

## Employee Integration and Provisioning

### P0 — Validate the Paylocity Position Code contract

**Open task:** Validate that Boomi supplies the agreed Paylocity Position Code Text consistently, and verify that the configured Intelex lookup and uniqueness rules preserve exact, case-sensitive values through creation and update.

**Unanswered questions:** How are historical, merged, and retired codes represented by Paylocity? Does the Intelex uniqueness implementation distinguish case exactly as required under production collation behavior?

**Why material:** Initial Employee provisioning is blocked until the exact Position Code resolves to a successfully published configuration.

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Sources:** [Employee Management ADR-001]; [Paylocity integration requirements].

### P0 — Implement and validate Position Code publishing and provisioning rules

**Open task:** Configure the Position Code and Published Position Code objects, the Paylocity Employee Record's captured-version relation, single-stage publication workflow, first-publication backfill, filtered group grids, Role Assignment children, notification controls, publication gate, predecessor copying, and transactional replacement of the active master configuration. Do not provision Business Hierarchy assignments through the Position Code profile unless a later decision explicitly adds them.

**Unanswered questions:** Can the configured Action Handler transaction roll back scalar and relational copies together? Who owns publishing and setup-response service levels? How will overlapping workgroups produce one employee-course requirement? Paylocity prevailing-wage job codes are not the provisioning Position Code.

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Sources:** [Employee Management ADR-001]; [Training Management ADR-001]; [Paylocity integration requirements].

### P0 — Finalize employee deactivation and lifecycle semantics

**Open task:** Select and test how the daily population feed represents termination, inactive status, leave, omitted records, rehire, and future-dated changes. Define when Intelex employees are archived, when Entra access is disabled, and how downstream assignments and history respond.

**Unanswered questions:** Is deactivation driven by an explicit active flag, termination date, omission from a full population file, or a combination? How are delayed or corrected terminations handled? How is a rehire matched to the persistent employee identity rather than duplicated?

**Why material:** The integration is accepted, but the production contract is incomplete without deterministic deactivation behavior.

**Evidence:** Explicit remaining design or validation work in the cited ADRs; test scenarios and operational completion criteria are derived.

**Sources:** [Employee Management ADR-003]; [Training Management ADR-014].

### P0 — Build and validate the remote-employee establishment decision table

**Open task:** Convert the accepted methodology into testable Boomi rules covering California residents, employees tied to operating establishments, remote employees outside California, reporting chains, incomplete data, and approved overrides.

**Unanswered questions:** With work location already selected as the primary input, which residence, jurisdiction, and reporting-chain conditions override or transform it for remote employees? Who approves exceptions? How is an override stored so the next daily feed does not overwrite it? What happens when required inputs are missing?

**Evidence:** Explicit remaining design or validation work in the cited ADRs; test scenarios and operational completion criteria are derived.

**Source:** [Employee Management ADR-002].

### P1 — Finalize pre-start readiness and identity matching rules

**Open task:** Define the exact minimum fields and timing that make a pre-hire record safe to send, the exception path for incomplete onboarding data, and the later transition from employee record to active user.

**Unanswered questions:** Which downstream processes may run before email/SSO identity exists? What prevents duplicate user creation when email arrives later? Will the upstream process automatically populate the Entra email in Paylocity?

**Evidence:** Explicit remaining design or validation work in the cited ADRs; test scenarios and operational completion criteria are derived.

**Sources:** [Employee Management ADR-004] and [Employee Management ADR-006].

### P1 — Validate APIHub integration operations

**Open task:** Validate Boomi custom-object POST/PATCH behavior, Action Handler ordering, publication gating, the calculated long-text Groups payload, APIHub POST/PATCH selection, Employee relation establishment, error and retry behavior, reconciliation, monitoring, and production support ownership.

**Unanswered questions:** What constitutes successful end-to-end reconciliation? How are failed or timed-out requests replayed without duplicate Employees? How is a successful `EmployeeUserAccess` POST reconciled if the subsequent Employee-to-Paylocity relation handler fails?

**Evidence:** Explicit remaining design or validation work in the cited ADRs; test scenarios and operational completion criteria are derived.

**Sources:** [Employee Management ADR-003]; [Paylocity integration requirements].

### P1 — Implement the employee-integration correction process

**Open task:** Identify the administration team, recipients, queue or report, response service levels, correction ownership, retry procedure, and fallback workflow routing for the accepted daily error summary.

**Unanswered questions:** Which non-fatal errors are allowed to continue? When should a record be held instead? When can notification frequency be reduced, and who decides?

**Evidence:** Explicit remaining design or validation work in the cited ADRs; test scenarios and operational completion criteria are derived.

**Source:** [Employee Management ADR-005].

### P1 — Validate the SAML identifier and mobile/offline access behavior

**Open task:** Confirm whether email, UPN, or another immutable organizational identifier appears in the Entra SAML assertion and matches the username staged on the Paylocity Employee Record and sent to `EmployeeUserAccess`. Test browser login, account disablement, mobile authentication, PIN setup, offline access, timeout behavior, and device-user separation.

**Unanswered questions:** Is email sufficiently stable, or should UPN/another claim be used? What happens to cached mobile access after an account is disabled? What device-management rules apply to shared or replaced devices?

**Evidence:** Explicit remaining design or validation work in the cited ADRs; test scenarios and operational completion criteria are derived.

**Source:** [Employee Management ADR-006]; [Inspections ADR-001].

## Inspections

### P0 — Approve and parameterize inspection-frequency requirements

**Open task:** Obtain approval for Inspections ADR-008 and define effective-dated requirements for every initial program/resource combination, including quantity or interval, qualifying inspection criteria, reporting-period boundaries, late-treatment rules, reminders, escalation recipients, and reconciliation logic.

**Unanswered questions:** What exactly makes an inspection count toward a requirement? How are partial periods, newly added sites, late completions, reopened inspections, and failed inspections treated? When is a requirement yellow/at risk versus red/overdue?

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Source:** [Inspections ADR-008].

### P0 — Decide the SafetyCulture migration and cutover plan

**Open task:** Obtain approval for Inspections ADR-010 and inventory the three initial programs, templates, users, open actions, incomplete inspections, attachments, and history. Decide the migration scope, coexistence period, validation criteria, cutover ownership, rollback approach, and SafetyCulture decommissioning criteria.

**Unanswered questions:** Which historical records move versus remain accessible elsewhere? How are open actions carried forward? How long will both systems operate, and what proves each program is ready to retire in SafetyCulture?

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Source:** [Inspections ADR-010].

### P1 — Complete mobile/offline synchronization design and testing

**Open task:** Define and test draft/submitted boundaries, synchronization timing, conflict resolution, attachment size and type limits, interrupted uploads, device loss, offline duration, and user switching.

**Unanswered questions:** Which records and reference data are cached? What happens when configuration changes while an inspection is offline? How are simultaneous edits resolved? Is any shared-device mode required despite the selected user-specific model?

**Evidence:** Explicit remaining design or validation work in the cited ADRs; test scenarios and operational completion criteria are derived.

**Source:** [Inspections ADR-001].

### P1 — Finalize per-program inspection configuration

**Open task:** Approve a configuration catalogue for each initial program covering checklist sections, answer sets, restrained branching, required comments, action triggers, review periods and reminders, reviewer roles, resubmission, equipment/site selectors, and categorical outcomes. Retain the accepted complete sectioned checklists, hidden scores, direct actions, already-complete correction pathway, and independent inspection/action lifecycles. Validate the catalogue with representative inspections.

**Unanswered questions:** Which responses require a comment, an action, or both? Which reviews and due periods apply by program/site, and which roles receive reminders and escalations? What are the final outcome and open-action classification labels? Where is evidence beyond the accepted action-completion comment needed? A second review is a future option unless a specific requirement justifies it; photographs are not universally mandatory.

**Evidence:** Derived operating or validation work needed to make the cited accepted direction usable; detailed controls and completion criteria still require agreement.

**Sources:** [Inspections ADR-002], [Inspections ADR-003], [Inspections ADR-004], [Inspections ADR-005], [Inspections ADR-006], [Inspections ADR-011], [Inspections ADR-012], [Inspections ADR-013], [Inspections ADR-014], [Inspections ADR-015].

### P1 — Design the official inspection PDF and record controls

**Open task:** Obtain approval for Inspections ADR-007; prototype the Merge Template with child questions, conditional content, comments, actions, and photographs; then define storage, naming, draft/final watermarking, regeneration, retention, signatures, and version rules.

**Unanswered questions:** Can Merge Templates expose every required child and attachment relationship? Where is the generated file retained? Is an electronic signature legally or operationally required? What happens when a finalized inspection or related action changes after PDF generation?

**Evidence:** Explicit remaining design or validation work in the cited ADRs; test scenarios and operational completion criteria are derived.

**Source:** [Inspections ADR-007].

### P1 — Define external-inspection intake and actionable report context

**Open task:** Define the initial externally supplied inspection types, responsible internal intake roles, required party/date/report data, optional review routes, and action-entry standards. Validate that an assignee can understand and resolve a report-derived action without a structured checklist question, and that reporting distinguishes external reports from internal checklist inspections.

**Unanswered questions:** Which external programs enter the initial catalogue? Who translates report recommendations into assigned actions and checks completeness? What report page, recommendation identifier, description, and attachment access are needed to preserve source context? How are report revisions reconciled?

**Evidence:** Explicit accepted external-report pathway; derived ownership, context, and validation work. A general user-facing bulk action importer was not agreed.

**Sources:** [Inspections ADR-002], [Inspections ADR-005], [Inspections ADR-009], and [Inspections ADR-015]; [Day 2 afternoon transcript], 00:06:34–00:25:32.

### P1 — Define the interim near-miss handoff before Incident Management goes live

**Open task:** Approve operating guidance for observations that meet incident or near-miss criteria while Phase 1 Inspections is live and Phase 2 Incident Management is unavailable. Identify the interim system/process, reporting responsibility, escalation, and retained cross-reference; define the later handoff without assuming automated creation or linking.

**Unanswered questions:** Where must the event be reported during the phase gap, who confirms receipt, and how is duplicate action ownership avoided? What minimum reference will connect the inspection and event now and after Phase 2 cutover? Which later linking behavior is actually required?

**Evidence:** Derived delivery dependency from the accepted application boundary and explicit Phase 2 scope. The interim destination and automation are not yet selected.

**Sources:** [Inspections ADR-014]; [Phase 2 overview], **Phase Boundary**; [Incident Management overview], **Dependencies and Boundaries**.

### P1 — Approve the KPI catalogue and dashboard specifications

**Open task:** Obtain approval for Inspections ADR-009 and define formulas, dimensions, filters, targets, thresholds, audiences, refresh frequency, and drill-through for deficiencies, expected-versus-completed inspections, timeliness, repeat negatives, actions, and trends.

**Unanswered questions:** Which measures are authoritative? How are repeat failures matched across checklist revisions? For types requiring an overall outcome, how are the accepted negative-response failure rule, final label, and independently changing action classification represented? How are external reports without question-level responses counted without inventing pass/fail data? Which views use establishment, resource, asset, technology, supervisor, or program dimensions?

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Source:** [Inspections ADR-004], [Inspections ADR-009], and [Inspections ADR-015].

### P2 — Resolve the scope and rules for combined regulatory reporting

**Open task:** Validate the governing plans and approve or revise Inspections ADR-016, separating the atomic-record direction from the additional combined-output capability. Confirm whether any filing requires that output for the initial release; if so, elevate the dependent work before cutover. Otherwise retain it as deferred scope. For an authorized combined output, define record selection, date range, completeness, response combination, actions, approval, and format.

**Unanswered questions:** Will regulators accept a consolidated output built from separate atomic inspections? When responses differ, is the least-favorable answer always appropriate? Can a plan be filed with a missing site inspection or open action? Is the combined report in Phase 1 scope?

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Source:** [Inspections ADR-016].

### P2 — Define the boundary for future findings and formal audits

**Open task:** Record criteria for introducing a formal Finding record when a future audit program needs severity, classification, investigation, or root-cause workflow.

**Unanswered questions:** What business requirements would justify adding the Finding layer, and how would existing response-linked actions migrate or coexist?

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Source:** [Inspections ADR-005].

## Training and Competency Management

### P0 — Approve the proposed training and competency architecture

**Open task:** Obtain approval or revision of the nine proposed Training Management ADRs: ADR-003, ADR-004, ADR-005, ADR-007, ADR-008, ADR-009, ADR-012, ADR-013, and ADR-014. Resolve delivery equivalence, atomic courses, variants, attestation, policy-driven validity, TPC retirement, content versioning, and employment-status history within the accepted standalone qualification workflow and centralized evidence-completion model in ADR-006 and ADR-015.

**Unanswered questions:** Are any proposed directions contested by the business or constrained by licensing/product capability? Which parts are Phase 1 commitments versus later enhancements?

**Why material:** Nine proposals still affect the core model. The standalone qualification workflow and mandatory objective evidence are accepted; neither automatic Training Management completion of qualification steps nor a provisional-entry verification stage belongs in the initial design.

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Sources:** [Training Management ADR-003], [Training Management ADR-004], [Training Management ADR-005], [Training Management ADR-006], [Training Management ADR-007], [Training Management ADR-008], [Training Management ADR-009] and [Training Management ADR-012], [Training Management ADR-013], [Training Management ADR-014], [Training Management ADR-015].

### P0 — Build the governed course, workgroup, and requirement catalogue

**Open task:** Inventory current LMS/TPC content, monthly plans, onboarding items, documents, live sessions, quizzes, and practicals. Define the proposed atomic-course catalogue and roll-ups; map position codes to reusable workgroups; and specify audience, delivery equivalence, completion authority, assessment thresholds, retry rules, and multi-component satisfaction. Keep qualification-only activities in the standalone qualification catalogue rather than automatically creating courses for every activity.

**Unanswered questions:** Which topics are genuinely equivalent across live and self-service delivery? Which site-specific variants must remain separate? What exactly completes an orientation or monthly program roll-up? Which requirements contain multiple mandatory components rather than alternatives? Who owns ongoing catalogue maintenance?

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Sources:** [Training Management ADR-001], [Training Management ADR-002], [Training Management ADR-003], [Training Management ADR-004], [Training Management ADR-005].

### P0 — Derive qualification definitions and renewal rules from policy

**Open task:** Obtain the governing policies and assessment forms, approve qualification definitions, and validate initial certification first. Define activities, dependency order, pass/fail and attempt limits, completion windows, assessors, required evidence, verified effective date, and duration. Separately document policy-specific renewal, lapse, reinstatement, reminder, and escalation rules and a gate for implementing advanced behavior after initial certification is validated.

**Unanswered questions:** Which qualifications are one-time versus recurring? Which activities and attempts are required for each scope? Does policy make current supporting training a continuing condition, and how will an administrator verify it without direct Training Management status integration? Which steps differ at renewal, and what restores validity after lapse? How will verified activity dates and delayed evidence entry establish the effective date? Under proposed ADR-009, early renewal starts the next validity period from the newly verified completion date.

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Source:** [Training Management ADR-006], [Training Management ADR-007], [Training Management ADR-009], and [Training Management ADR-015].

### P0 — Design authorized competency attestation

**Open task:** Approve and detail qualification-specific attestation criteria, authorized attestors, evidence, fields, permissions, correction/revocation, and audit trail. Follow the accepted administrator-completion and mandatory-evidence controls. Under proposed ADR-008, attestation is an activity and grants qualification only when it completes the final required activity.

**Unanswered questions:** Who may attest for whom and for which criteria? What objective work-history or experience evidence supports the attestation, and how is attestor authority verified? Detailed digital assessment forms remain optional later scope and may require a change order; their absence does not remove the evidence requirement.

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Source:** [Training Management ADR-008] and [Training Management ADR-015].

### P1 — Validate initial qualification completion and evidence operations

**Open task:** Prototype and validate a representative sequenced qualification under ADR-006 and ADR-015. Name the responsible administrator role and substitutes; define evidence intake, queue monitoring, result/effective-date entry, correction history, and evidence access/retention. Demonstrate that each completed activity has objective evidence and that internal training evidence is verified just like external evidence before qualification status changes.

**Unanswered questions:** Who receives and processes certificates, sign-in sheets, and assessments? What processing target prevents delayed evidence from leaving progress stale? How are failed attempts, replacement evidence, mistaken completion, and administrator absence handled? What proves readiness to proceed to advanced renewal/lapse behavior?

**Evidence:** Explicit accepted workflow and mandatory evidence; derived operating controls and validation endpoint. There is no separate provisional-entry/verification stage, no direct Training Management status integration, and no approved evidence exception.

**Sources:** [Training Management ADR-006] and [Training Management ADR-015]; [Platform Administration ADR-005].

### P1 — Configure training activation windows and validate historical due-date seeding

**Open task:** Define the pre-due activation and notification window, recipients, and reminder behavior for recurring courses; specify and test the person-course completion-date mapping used to seed initial due dates from migration. Verify overlap deduplication, pre-start assignment, early/late completion, and the proposed live-session-to-self-service make-up sequence. The TPC migration task owns extraction, loading, and cutover.

**Unanswered questions:** What activation window applies to each course, and what happens when historical completion dates are missing, conflicting, or only available as aggregate program dates? Who resolves those exceptions? When does self-service become available after the final preferred live session, and how are remaining learners notified?

**Evidence:** Explicit remaining activation-window and historical-date work; derived reconciliation tests. The discussed 30–45 days is not finalized. Recurrence from actual completion and acceptance of pre-start overdue assignments are already settled; a general grace period is not reopened.

**Sources:** [Training Management ADR-001], [Training Management ADR-002], [Training Management ADR-003], and [Training Management ADR-005]; [Day 2 morning transcript], 00:38:17–00:51:25.

### P1 — Validate SCORM and custom learning-package compatibility

**Open task:** Test the supplied Incident Reporting and Fleet Safety packages in the target Intelex environment, confirm supported SCORM behavior, and retain launch, navigation, completion/result, retry, bookmarking, version-replacement, and applicable browser/mobile test results. Both repository manifests declare SCORM 1.2; obtaining these two samples is complete, but compatibility validation remains open.

**Unanswered questions:** Does the configured Intelex player correctly support the SCORM 1.2 data elements used by each package? Do both packages satisfy the intended requirement and report completion/results without repackaging? What remediation is needed if they fail?

**Evidence:** Explicit remaining design or validation work in the cited ADRs; test scenarios and operational completion criteria are derived.

**Source:** [Training Management ADR-010]; [training-prep transcript] at 53:16–54:38; [Day 3 morning transcript] at 00:00:30–00:03:39 (content demonstration, not a documented end-to-end acceptance test); [Incident Reporting sample] and [Fleet Safety sample], each `imsmanifest.xml` / `metadata/schemaversion`.

### P1 — Finalize the TPC retirement and content migration plan

**Open task:** Approve Training Management ADR-012; inventory content and completion history; decide which items are migrated, recreated, repackaged, archived, or retained externally; confirm SCORM authoring and Quiz Builder licensing; and define coexistence, cutover, validation, and decommissioning.

**Unanswered questions:** How much historical completion detail must move into Intelex? Can course and content versions be reconstructed? What third-party content rights survive the move? When can TPC be switched off?

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Source:** [Training Management ADR-012].

### P1 — Design exact training-content version traceability

**Open task:** Select and prototype the mechanism that binds a completion to the exact course, document, quiz, and SCORM version. Define the document-release training-impact assessment, version publication, retraining decision, historical preservation, and audit-report process.

**Unanswered questions:** Is version binding automatic at completion or an explicit course-version association? How are embedded links and replaced SCORM packages preserved? Which changes reschedule requirements, who decides, and how is that decision evidenced?

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Source:** [Training Management ADR-013].

### P1 — Establish the MARCOM content refresh operating model

**Open task:** Verify provider distribution capabilities; choose the feasible detection/delivery mechanism; and assign ownership, cadence, validation, replacement, rollback, and completion-history impact procedures. Evaluate the offered content-loading library without assuming production adoption.

**Unanswered questions:** Does the provider expose notifications, feeds, APIs, or only manual downloads? Can updates be automated? Does replacement create a new course/content version, and can it trigger retraining without damaging prior completion evidence?

**Evidence:** Explicit remaining design or validation work in the cited ADRs; test scenarios and operational completion criteria are derived.

**Source:** [Training Management ADR-011].

### P1 — Configure employment-status, rehire, and leave behavior for training

**Open task:** Define assignment inactivation/reactivation, new applicable-from dates, catch-up treatment, privacy filters, administrative visibility, and duplicate prevention for termination, rehire, job change, and leave.

**Unanswered questions:** Are due dates paused, preserved, or recalculated during leave? Which missed training is due immediately on return? Which audiences may see leave status? What happens when HR supplies a new identifier for a rehire?

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Source:** [Training Management ADR-014].

## Document Control

### P0 — Define the controlled-document taxonomy and administration model

**Open task:** Confirm the document-control administrators and site coordinators; define the initial folder classes, document types and subtypes, restricted folders, governing groups, ownership rules, and taxonomy-change process.

**Unanswered questions:** Which business domains are included at go-live? Which content requires exceptional security? Who approves new taxonomy values and ownership changes? How will applicability and restricted folders be governed using the accepted single establishment hierarchy?

**Evidence:** Derived operating or validation work needed to make the cited accepted direction usable; detailed controls and completion criteria still require agreement.

**Sources:** [Document Control ADR-002], [Document Control ADR-005], and [Document Control ADR-007]; [Platform Administration ADR-001].

### P0 — Finalize document lifecycle and approval controls

**Open task:** Approve or revise Document Control ADR-009 and ADR-010; define the numbering format, lifecycle set, periodic-review frequencies and ownership, permissible overrides, approval templates, mandatory domain routes, segregation of duties, role assignments, release service levels, rejection/resubmission, and obsolete-content handling. Validate these controls in the accepted ADR-012 pilot.

**Unanswered questions:** Which documents may use configurable approvals? Where are fixed routes mandatory? May an owner approve and release the same record? Which roles require substitutes? What differentiates an administrative revision from a material revision operationally?

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Sources:** [Document Control ADR-001], [Document Control ADR-009], [Document Control ADR-010], [Document Control ADR-011], and [Document Control ADR-012]; [Platform Administration ADR-005].

### P1 — Build the document migration inventory and cutover plan

**Open task:** Following pilot findings, inventory candidate policies, procedures, work instructions, forms, site plans, training sources, SCORM packages, and interim SDS files; approve production scope and sequencing by readiness; map legacy identifiers and historical release context; populate metadata and relationships; establish a controlled source-change window; and reconcile the production load. Define post-cutoff loading ownership and document-class formatting changes, including removal of static approval signatures where applicable. Corporate-first migration is no longer an architectural prerequisite.

**Unanswered questions:** Which document is authoritative where duplicates exist? Which legacy identifiers must remain visible? Which related-document notifications are required in each direction? How will documents managed outside Intelex during transition be reconciled?

**Evidence:** Explicit remaining design or validation work in the cited ADRs; test scenarios and operational completion criteria are derived.

**Sources:** [Document Control ADR-003], [Document Control ADR-004], [Document Control ADR-006], [Document Control ADR-008], [Document Control ADR-009], and [Document Control ADR-012].

### P1 — Complete the representative document migration pilot

**Open task:** Select approximately 20–30 representative corporate and site documents, upload them to staging with stable identifiers, populate and load the metadata workbook, and exercise revision, periodic review, approval, and change-request behavior. Record defects, configuration changes, acceptance results, and the decision to retain or discard pilot content before production loading.

**Unanswered questions:** Which document classes and applicability/security cases must the pilot cover? Who prepares and checks the metadata? What acceptance criteria authorize the production process, and how will test content be distinguished from authoritative production records?

**Evidence:** Explicit accepted pilot direction; derived acceptance and reconciliation controls. Its approval is not open, but completion evidence is absent. The transcript-reference limitation below must be repaired without silently reverting the accepted ADR.

**Sources:** [Document Control ADR-012]; [Document Control ADR-008], [Document Control ADR-009], [Document Control ADR-010], [Document Control ADR-011]; [Document Control overview], **Current Direction** and **Open Work**.

### P1 — Define acknowledgment, distribution, and training-impact rules

**Open task:** Define when a release is passive, notified, acknowledged, or assigned as training; approve global acknowledgment wording; identify recipient-selection rules; and design combined evidence reporting across Document Control and Training Management.

**Unanswered questions:** Who determines revision materiality? What evidence is required before acknowledgment? Which changes require retraining? How will users and auditors retrieve a complete history spanning acknowledgments and course completions?

**Evidence:** Derived operating or validation work needed to make the cited accepted direction usable; detailed controls and completion criteria still require agreement.

**Sources:** [Document Control ADR-011]; [Training Management ADR-004] and [Training Management ADR-013].

### P1 — Validate document search, file behavior, and restricted access

**Open task:** Test full-text indexing and latency for Word, PDF, and Excel; scanned-document behavior; browser viewing and downloads; Word-to-PDF rendition; fillable PDFs; shortcut visibility; restricted folders; controlled external links; and confirmation that the public portal is disabled.

**Unanswered questions:** Which file types require additional handling or OCR? Are print restrictions useful enough to configure given reader-dependent enforcement? What monitoring proves restricted content and shortcuts remain correctly scoped?

**Evidence:** Derived operating or validation work needed to make the cited accepted direction usable; detailed controls and completion criteria still require agreement.

**Sources:** [Document Control ADR-006], [Document Control ADR-007], and [Document Control ADR-008].

## Governance and Closure

### P2 — Define first-year platform change governance

**Open task:** Approve Platform Administration ADR-008 and define the intake channel, triage owner, participants, cadence, decision rights, security review, prioritization, implementation handoff, and roadmap reporting. Include Jeremiah Soto in defining the model as the ADR specifies. This operating-governance task does not block the accepted initial architecture; design-critical ownership remains tracked above.

**Unanswered questions:** Which changes can administrators approve directly? Which require business, security, or sponsor approval? How are urgent changes handled? Who owns the consolidated pipeline?

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Source:** [Platform Administration ADR-008].

### P1 — Specify shared task and management dashboards

**Open task:** Approve Platform Administration ADR-007; identify audiences and hierarchy depth; define task, overdue, near-term, person, workflow-type, and application filters; assign report authors; and govern scheduled distribution.

**Unanswered questions:** How many supervisor levels are required for each leadership audience? Which location-scoped task views are granted to general managers? When may a report be scheduled under another user's security context?

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Source:** [Platform Administration ADR-007].

### P1 — Establish an ADR approval and design-closure process

**Open task:** Assign domain approvers and review dates for all proposed ADRs; record approvals or revisions; and ensure dependent build work does not silently convert proposals into requirements.

**Unanswered questions:** Who has final authority in each domain? What evidence is required to accept an ADR? How will cross-domain conflicts be resolved and material changes communicated?

**Evidence:** Explicit proposal, deferral, or unresolved design detail in the cited sources; completion criteria are derived where the sources do not specify them.

**Source:** [Documentation portal], **Status Definitions** and **Ownership and Review**.

### P2 — Maintain a decision-to-delivery traceability matrix

**Open task:** Track each item in this backlog to its ADR, owner, target date, decision record, configuration or development artifact, validation evidence, and closure status.

**Unanswered questions:** Which project system will hold execution ownership and dates? What definition of done proves that a design question is closed rather than merely discussed?

**Evidence:** Derived governance work from repository traceability guidance; no execution system, owner, or delivery date is established.

**Source:** [Documentation portal], **Updating the Documentation** and **Source Artifacts and Traceability**.

## Phase 2 — Incident Management (Outside Phase 1 Delivery Scope)

### P0 — Finalize incident attribution against the shared taxonomy

**Open task:** Approve or revise Incident Management ADR-001 and document the incident establishment/resource contract using the governed taxonomy tracked above. Define eligible record types, establishment filtering, employee defaults, authorized overrides, validation, and audit behavior; validate representative cross-establishment events.

**Unanswered questions:** Which operational entities are selectable and how are invalid combinations prevented? Who can correct attribution, what reason is retained, and how do changes affect regulatory and operational reports?

**Evidence:** Explicit proposed direction and unresolved detailed model. This consumes the shared taxonomy rather than commissioning a second taxonomy.

**Sources:** [Incident Management ADR-001]; [Inspections ADR-017]; [Platform Administration ADR-001].

### P0 — Define and validate incident privacy and workflow-access rules

**Open task:** Name approved persistent-viewer groups and their membership owners, define temporary access for each workflow task, and validate access grant/removal, reassignment, completion, and reporting under representative personas. Include sensitive fields and attachments in the permission assessment.

**Unanswered questions:** Which EHS, investigator, senior-manager, and exception roles retain visibility? What access is necessary during each task and what survives task completion? What additional field or attachment controls are needed, and how is scheduled reporting prevented from exposing unauthorized records?

**Evidence:** Explicit accepted persistent-versus-temporary access boundary; derived permission matrix and negative tests. Filtered views are not security controls.

**Sources:** [Incident Management ADR-003]; [Platform Administration ADR-003] and [Platform Administration ADR-007].

### P1 — Approve contractor-event ownership and the external-system boundary

**Open task:** Approve or revise Incident Management ADR-002; define minimum contractor-event data, internal entry/investigation ownership, authoritative attachments, reconciliation, and contractor KPI ownership across Intelex and existing contractor platforms. Record the trigger for revisiting self-service, isolated security, and automated KPI ingestion after the internal workflow and system boundary are stable.

**Unanswered questions:** Which contractor records must be retained in Intelex and which remain external? Who enters and updates them, resolves duplicates, and owns KPI definitions? What evidence would justify extending contractor access later?

**Evidence:** Explicit unresolved boundary and proposed deferral. Contractor logins and automated KPI ingestion are not initial build requirements.

**Sources:** [Incident Management ADR-002]; [Incident Management overview], **Open Work**; [Day 1 morning transcript], 02:33:20–02:40:52.

### P1 — Establish the detailed Phase 2 incident workflow baseline

**Open task:** Conduct scoped incident discovery and produce reviewed decisions for intake, classification, investigation, regulatory reporting, corrective-action ownership, and inspection handoff, with a Phase 2 delivery boundary and validation criteria. Apply the accepted privacy design and the attribution and contractor decisions above.

**Unanswered questions:** Which incident processes and reporting outputs are in the initial Phase 2 release? What roles, stage transitions, required evidence, and escalation rules govern them? Which requirements need domain approval before implementation can be specified?

**Evidence:** Explicit missing design areas in the Phase 2 overview; derived discovery deliverable. This item does not assert any particular new workflow or delivery milestone.

**Sources:** [Phase 2 overview], **Scope**; [Incident Management overview], **Scope** and **Open Work**; [Inspections ADR-014].

## Reconciliation and Evidence Limitations

### Resolved or superseded portions removed from open work

* **Hierarchy choice:** Platform Administration ADR-001 is accepted; ADR-002 is superseded. Removed approval of the old universal intersection model and the initial second-hierarchy question. Application permissions and exceptions remain open.
* **Training architecture:** Training Management ADR-006 is accepted and replaces direct training-driven qualification status with a standalone workflow. ADR-015 accepts mandatory evidence and one administrator completion interaction. The approval item now covers nine proposals rather than ten; qualification policy, attestation, and operational details remain open.
* **Training samples:** Both requested ZIPs are present and declare SCORM 1.2. Removed sample acquisition; retained target-environment playback and completion validation.
* **Document migration:** Document Control ADR-012 is accepted and replaces corporate-first sequencing with a representative pilot followed by a metadata-driven production load. Removed its approval request and the fixed sequencing assumption; pilot and cutover work remain open.
* **Inspection behavior:** Inspections ADR-004 and ADR-015 already settle categorical negative-response outcomes and independent action closure. Removed the broad questions reopening those choices; retain labels, per-type semantics, measures, and escalation details.
* **Priorities:** First-year platform governance moves from P0 to P2 because it governs sustainable operation, while immediate master-data ownership stays P0. Combined regulatory output moves from P1 to P2 in line with ADR-016's unconfirmed, lower-priority scope, subject to elevation if a required initial filing depends on it.

No whole prior task is marked delivered solely because its architecture is accepted. All 38 prior task themes are retained with corrections; five Phase 1 items make previously missing or insufficiently separated work explicit, and four Phase 2 items extend coverage without changing phase commitments.

### Source conflicts and missing evidence

* **Stale change-log baseline:** [Phase 1 change log], **Current ADR Baseline** and **Documentation Totals**, still shows older training/platform statuses and titles and omits Training ADR-015. The active total of 57 happens to remain correct because one new ADR and one superseded ADR offset each other. This review uses current ADR files and the documentation portal, not those older tables.
* **Missing or ambiguous source references:** [Document Control ADR-012] cites “Latest workshop” 00:50:54–01:02:40, but the stored [Day 3 morning transcript] in that interval discusses classification, shortcuts, and administration rather than the 20–30 document pilot. [Training Management ADR-006] and [Training Management ADR-015] cite later qualification decisions without identifying a matching stored workshop; [Day 1 afternoon transcript] at 02:46:50–03:06:26 still discusses the earlier training-linked design, while Day 3 morning ends before the promised competency overflow. Locate and link the later source or recorded approval under the existing ADR closure/traceability work. Accepted ADR status is retained; the supporting transcript trail is incomplete.
* **Residual terminology:** Proposed Inspections ADR-007 and ADR-016 still mention “findings”; accepted ADR-005 removes the formal Finding layer from current inspections. Interpret report needs as response deficiencies or external-report context and direct actions, and reconcile the wording during those proposals' review rather than silently reintroducing a Finding object.
* **Unavailable validation and policy artifacts:** The repository contains design evidence and packaged-learning samples, but not production payload examples, completed acceptance tests, signed-off migration inventories, or the governing qualification policies/forms discussed in workshops. Package presence and narrated demonstrations are not proof of implementation closure. Obtain policy evidence through the qualification-definition task; do not infer regulatory requirements from workshop examples.
* **Publication coverage:** [GitBook configuration] does not currently expose Document Control or the phase-level register. This is a documentation-discoverability limitation, not a new architecture blocker; the repository remains authoritative.

## Recommended Resolution Sequence

1. Finalize the shared site/resource/asset taxonomy, application permissions and access exceptions, and named master-data/role ownership within the accepted single-establishment model.
2. Finalize the employee contract: stable position identifier, mappings, minimal-record behavior, lifecycle/deactivation, remote assignment, identity, transport, and reconciliation.
3. Resolve the remaining proposed domain decisions and obtain governing policies; define inspection programmes, course/workgroup catalogues, and initial qualification requirements without coupling qualification status directly to Training Management.
4. Validate product and integration dependencies: SAML/EDIS, mobile/offline, inspection PDFs, supplied SCORM packages, version traceability, recurrence seeding, and the initial evidence-based qualification workflow. Complete the document pilot before committing its production migration process.
5. Complete SafetyCulture, TPC, and document production migration plans; validate reports, operating ownership, and the interim near-miss handoff before relevant cutovers. Establish first-year governance in time for operational change intake.
6. Within Phase 2, resolve attribution and privacy controls, contractor-system boundaries, and detailed incident workflows. Revisit combined regulatory outputs, formal Findings, a second security hierarchy, digital assessment forms, and advanced qualification behavior only against their documented scope/validation gates.

[Document Control ADR-001]: <document control/ADRs/ADR-001-preserve-standard-document-control-configuration.md#decision-outcome>
[Document Control ADR-002]: <document control/ADRs/ADR-002-use-centralized-document-control-administration.md#decision-outcome>
[Document Control ADR-003]: <document control/ADRs/ADR-003-scope-document-control-by-governance-need.md#decision-outcome>
[Document Control ADR-004]: <document control/ADRs/ADR-004-register-supporting-files-as-related-controlled-documents.md#decision-outcome>
[Document Control ADR-005]: <document control/ADRs/ADR-005-classify-documents-with-independent-controlled-taxonomies.md#decision-outcome>
[Document Control ADR-006]: <document control/ADRs/ADR-006-use-location-placement-and-shortcuts-for-applicability.md#decision-outcome>
[Document Control ADR-007]: <document control/ADRs/ADR-007-apply-document-security-by-exception.md#decision-outcome>
[Document Control ADR-008]: <document control/ADRs/ADR-008-author-externally-and-control-release-candidates-in-intelex.md#decision-outcome>
[Document Control ADR-009]: <document control/ADRs/ADR-009-use-intelex-managed-document-numbering.md#decision-outcome>
[Document Control ADR-010]: <document control/ADRs/ADR-010-use-configurable-sequential-approval-processes.md#decision-outcome>
[Document Control ADR-011]: <document control/ADRs/ADR-011-require-deliberate-release-and-distribution.md#decision-outcome>
[Document Control ADR-012]: <document control/ADRs/ADR-012-migrate-corporate-documents-before-site-content.md#decision-outcome>
[Employee Management ADR-001]: <employee management/ADRs/ADR-001-use-position-codes-as-provisioning-profile-inputs.md#decision-outcome>
[Employee Management ADR-002]: <employee management/ADRs/ADR-002-automate-establishment-assignment-for-remote-employees.md#decision-outcome>
[Employee Management ADR-003]: <employee management/ADRs/ADR-003-integrate-employees-through-boomi-and-edis.md#decision-outcome>
[Employee Management ADR-004]: <employee management/ADRs/ADR-004-provision-employees-before-their-start-date.md#decision-outcome>
[Employee Management ADR-005]: <employee management/ADRs/ADR-005-monitor-employee-integration-errors-daily.md#decision-outcome>
[Employee Management ADR-006]: <employee management/ADRs/ADR-006-authenticate-through-microsoft-entra-id.md#decision-outcome>
[Inspections ADR-001]: <inspections/ADRs/ADR-001-support-mobile-and-offline-inspection-execution.md#decision-outcome>
[Inspections ADR-002]: <inspections/ADRs/ADR-002-configure-inspection-behavior-by-program.md#decision-outcome>
[Inspections ADR-003]: <inspections/ADRs/ADR-003-support-conditional-questions-and-branching.md#decision-outcome>
[Inspections ADR-004]: <inspections/ADRs/ADR-004-disable-numeric-scoring.md#decision-outcome>
[Inspections ADR-005]: <inspections/ADRs/ADR-005-use-responses-and-direct-actions-without-formal-findings.md#decision-outcome>
[Inspections ADR-006]: <inspections/ADRs/ADR-006-add-configurable-review-and-approval-workflow.md#decision-outcome>
[Inspections ADR-007]: <inspections/ADRs/ADR-007-generate-branded-portable-inspection-records.md#decision-outcome>
[Inspections ADR-008]: <inspections/ADRs/ADR-008-track-configurable-site-inspection-frequency.md#decision-outcome>
[Inspections ADR-009]: <inspections/ADRs/ADR-009-report-inspection-outcomes-and-trends.md#decision-outcome>
[Inspections ADR-010]: <inspections/ADRs/ADR-010-replace-safetyculture-incrementally.md#decision-outcome>
[Inspections ADR-011]: <inspections/ADRs/ADR-011-enforce-complete-sectioned-checklists.md#decision-outcome>
[Inspections ADR-012]: <inspections/ADRs/ADR-012-configure-equipment-references-by-program.md#decision-outcome>
[Inspections ADR-013]: <inspections/ADRs/ADR-013-record-immediate-corrections-as-completed-actions.md#decision-outcome>
[Inspections ADR-014]: <inspections/ADRs/ADR-014-route-near-misses-to-incident-management.md#decision-outcome>
[Inspections ADR-015]: <inspections/ADRs/ADR-015-separate-inspection-and-action-lifecycles.md#decision-outcome>
[Inspections ADR-016]: <inspections/ADRs/ADR-016-record-atomic-inspections-and-consolidate-regulatory-reporting.md#decision-outcome>
[Inspections ADR-017]: <inspections/ADRs/ADR-017-use-governed-site-and-asset-taxonomy.md#decision-outcome>
[Platform Administration ADR-001]: <platform administration/ADRs/ADR-001-use-complementary-location-and-business-hierarchies.md#decision-outcome>
[Platform Administration ADR-002]: <platform administration/ADRs/ADR-002-apply-intersection-based-record-visibility.md#decision-outcome>
[Platform Administration ADR-003]: <platform administration/ADRs/ADR-003-separate-employee-home-and-access-assignments.md#decision-outcome>
[Platform Administration ADR-004]: <platform administration/ADRs/ADR-004-maintain-the-organizational-hierarchy-in-intelex.md#decision-outcome>
[Platform Administration ADR-005]: <platform administration/ADRs/ADR-005-use-location-scoped-roles-for-workflow-routing.md#decision-outcome>
[Platform Administration ADR-006]: <platform administration/ADRs/ADR-006-provide-controlled-external-support-access.md#decision-outcome>
[Platform Administration ADR-007]: <platform administration/ADRs/ADR-007-use-shared-tasks-and-security-aware-reporting.md#decision-outcome>
[Platform Administration ADR-008]: <platform administration/ADRs/ADR-008-establish-first-year-platform-change-governance.md#decision-outcome>
[Training Management ADR-001]: <training management/ADRs/ADR-001-assign-training-requirements-through-job-code-mapped-workgroups.md#decision-outcome>
[Training Management ADR-002]: <training management/ADRs/ADR-002-use-individual-recurrence-for-self-service-training.md#decision-outcome>
[Training Management ADR-003]: <training management/ADRs/ADR-003-use-a-common-course-requirement-across-delivery-methods.md#decision-outcome>
[Training Management ADR-004]: <training management/ADRs/ADR-004-match-completion-authority-to-the-training-requirement.md#decision-outcome>
[Training Management ADR-005]: <training management/ADRs/ADR-005-model-independently-governed-training-topics-as-atomic-courses.md#decision-outcome>
[Training Management ADR-006]: <training management/ADRs/ADR-006-build-qualifications-as-a-separate-layer-over-training-management.md#decision-outcome>
[Training Management ADR-007]: <training management/ADRs/ADR-007-use-separate-qualification-definitions-for-materially-different-scopes.md#decision-outcome>
[Training Management ADR-008]: <training management/ADRs/ADR-008-support-authorized-competency-attestation.md#decision-outcome>
[Training Management ADR-009]: <training management/ADRs/ADR-009-define-qualification-validity-and-renewal-from-governing-policy.md#decision-outcome>
[Training Management ADR-010]: <training management/ADRs/ADR-010-validate-existing-custom-learning-packages-before-adoption.md#decision-outcome>
[Training Management ADR-011]: <training management/ADRs/ADR-011-establish-an-ongoing-marcom-content-refresh-process.md#decision-outcome>
[Training Management ADR-012]: <training management/ADRs/ADR-012-replace-tpc-with-intelex-training-management.md#decision-outcome>
[Training Management ADR-013]: <training management/ADRs/ADR-013-version-training-content-for-audit-traceability.md#decision-outcome>
[Training Management ADR-014]: <training management/ADRs/ADR-014-preserve-training-history-across-employment-status-changes.md#decision-outcome>
[Training Management ADR-015]: <training management/ADRs/ADR-015-require-objective-evidence-and-centralized-qualification-completion.md#decision-outcome>
[Incident Management ADR-001]: <../phase 2/incident management/ADRs/ADR-001-capture-establishment-and-operational-resource.md#decision-outcome>
[Incident Management ADR-002]: <../phase 2/incident management/ADRs/ADR-002-defer-contractor-self-service-and-isolated-security.md#decision-outcome>
[Incident Management ADR-003]: <../phase 2/incident management/ADRs/ADR-003-limit-persistent-incident-visibility-and-use-workflow-access.md#decision-outcome>

[Documentation portal]: <README.md>
[Phase 1 change log]: <CHANGELOG.md>
[Phase 2 overview]: <../phase 2/README.md>
[Incident Management overview]: <../phase 2/incident management/README.md>
[Document Control overview]: <document control/README.md>
[GitBook configuration]: <../../gitbook-docs.yaml>
[Day 1 morning transcript]: <employee management/raw artifacts/meeting_transcripts/2026-09-15-terra-gen-summit-ehsq-design-workshop-day-1-morning.md>
[Day 1 afternoon transcript]: <training management/raw artifacts/meeting_transcripts/2026-09-15-terra-gen-summit-ehsq-design-workshop-day-1-afternoon.md>
[Day 2 morning transcript]: <employee management/raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-morning.md>
[Day 2 afternoon transcript]: <employee management/raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-afternoon.md>
[Day 3 morning transcript]: <document control/raw artifacts/meeting_transcripts/2026-09-17-terra-gen-summit-ehsq-design-workshop-day-3-morning.md>
[Paylocity integration requirements]: <employee management/raw artifacts/2026-09-25-paylocity-employee-integration-technical-requirements.md>
[training-prep transcript]: <training management/raw artifacts/meeting_transcripts/2026-09-08-terra-gen-summit-ehsq-training-mgmt-design-prep.md>
[Incident Reporting sample]: <../../content/phase 1/training management/Terra Gen Incident Reporting.zip>
[Fleet Safety sample]: <../../content/phase 1/training management/Terra-Gen Fleet Safety Training (provided by Karla 062026).zip>
