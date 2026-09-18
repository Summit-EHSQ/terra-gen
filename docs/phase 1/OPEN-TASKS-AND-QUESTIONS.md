# Phase 1 Open Tasks and Material Design Questions

Review date: 2026-09-18

This backlog consolidates the open work and unanswered questions that materially affect the design or construction of the Phase 1 solutions. It is based on all 57 active Phase 1 ADRs, the phase change log, the repository guidance, and the available meeting transcripts. Repeated transcript copies were compared by SHA-256 and reviewed once where applicable.

The list excludes ordinary build activity already determined by accepted decisions. An accepted ADR can still produce an open task where its detailed implementation, ownership, or operating rule has not been settled. A proposed ADR is included where approval or validation is still material.

Priority meanings:

* **P0 — design blocker:** resolves a shared data model, integration contract, security boundary, or core operating rule needed before dependent configuration can be finalized.
* **P1 — implementation-critical:** needed to build, validate, migrate, or operate an agreed solution safely.
* **P2 — governance/future boundary:** needed for sustainable operation or a deliberately deferred capability.

## Cross-Domain and Platform Foundations

### P0 — Establish the governed site, resource, and asset taxonomy

**Open task:** Convene the deferred asset-hierarchy design workshop; inventory the relevant plants, projects, resources, substations, warehouses, administrative buildings, vehicles, and equipment; define atomic records, types, parent-child relationships, stable identifiers, source systems, ownership, and integration boundaries; and map existing inspection-program lists to the governed taxonomy.

**Unanswered questions:** What is the authoritative source for each class of operational record? What is the lowest atomic unit that must be selectable and reportable? Which records belong to one OSHA establishment, which groupings are only program or regulatory-plan collections, and which data should be integrated versus maintained in Intelex? How will changes be governed?

**Why material:** This controls incident attribution, inspection scope and frequency, regulatory roll-ups, technology reporting, equipment-specific inspection options, and future asset integration.

**Sources:** Platform Administration ADR-001; Incident Management ADR-001; Inspections ADR-012, ADR-016, and ADR-017.

### P0 — Approve the initial hierarchy and application security model

**Open task:** Obtain decision-maker approval for Platform Administration ADR-001 through ADR-003 and document the initial per-application visibility model, including Location Structure assignments, home versus login assignments, broad central roles, and controlled exceptions. Validate the design with representative local, regional, central, supervisor, and matrix-role users.

**Unanswered questions:** Is establishment-only visibility sufficient for every Phase 1 application? Which application, if any, requires a second hierarchy at go-live? What reliable source would populate that hierarchy? Which sensitive incident fields require protection beyond record-level visibility? How are stale access assignments removed after transfers?

**Why material:** The answers determine provisioning fields, record visibility, test cases, exception groups, and privacy controls across the platform.

**Sources:** Platform Administration ADR-001, ADR-002, and ADR-003; Employee Management ADR-001.

### P0 — Define operational ownership for Intelex master data and roles

**Open task:** Name the administrative owner and approvers for hierarchy nodes, stable identifiers, asset/reference data, position-to-profile mappings, location-scoped roles, and controlled exceptions. Define change control, effective dating, validation, and audit procedures before production data is loaded.

**Unanswered questions:** Who may create, rename, move, retire, or remap hierarchy and reference records? Who ensures that every applicable location has current workflow-role occupants? What is the fallback when a role is unpopulated?

**Why material:** Accepted designs depend on manually governed Intelex structures; missing ownership can break security, routing, reporting, and integrations.

**Sources:** Platform Administration ADR-004 and ADR-005; repository README ownership guidance.

### P1 — Complete the external-support access control design

**Open task:** Confirm provider controls for the separate support URL and document authorization, credential management, rotation, logging, periodic access review, and removal procedures.

**Unanswered questions:** Which provider and implementation roles are permitted, who approves access, what audit evidence is available, and how often is access reviewed?

**Source:** Platform Administration ADR-006.

## Employee Integration and Provisioning

### P0 — Confirm a stable Paylocity position-code identifier

**Open task:** Validate through the Paylocity API that a stable position-code identifier is available and include it in the Boomi-to-EDIS employee contract. Do not substitute mutable position descriptions without evidence.

**Unanswered questions:** Which source field is stable across description changes and reorganization? Are historical and newly created codes exposed consistently? What happens if a code is merged or retired?

**Why material:** Employee provisioning profiles and training workgroup assignment depend on this key; Employee Management ADR-001 cannot be accepted without it.

**Source:** Employee Management ADR-001.

### P0 — Design the provisioning-profile catalogue and exception rules

**Open task:** Define reusable profiles and map position codes to default Location/Business login assignments, application/security groups, and training workgroups. Establish mapping ownership, effective dates, approval, manual-exception precedence, and behavior for code changes.

**Unanswered questions:** Which defaults belong in one profile? Can one employee receive multiple profiles? Which manual exceptions survive an automated reassessment? How are removals distinguished from additions? What notification and service target apply when a new code appears?

**Source:** Employee Management ADR-001; Training Management ADR-001.

### P0 — Finalize employee deactivation and lifecycle semantics

**Open task:** Select and test how the daily population feed represents termination, inactive status, leave, omitted records, rehire, and future-dated changes. Define when Intelex employees are archived, when Entra access is disabled, and how downstream assignments and history respond.

**Unanswered questions:** Is deactivation driven by an explicit active flag, termination date, omission from a full population file, or a combination? How are delayed or corrected terminations handled? How is a rehire matched to the persistent employee identity rather than duplicated?

**Why material:** The integration is accepted, but the production contract is incomplete without deterministic deactivation behavior.

**Sources:** Employee Management ADR-003; Training Management ADR-014.

### P0 — Build and validate the remote-employee establishment decision table

**Open task:** Convert the accepted methodology into testable Boomi rules covering California residents, employees tied to operating establishments, remote employees outside California, reporting chains, incomplete data, and approved overrides.

**Unanswered questions:** What is the precedence among residence, work location, jurisdiction, and reporting chain? Who approves exceptions? How is an override stored so the next daily feed does not overwrite it? What happens when required inputs are missing?

**Source:** Employee Management ADR-002.

### P1 — Finalize pre-start readiness and identity matching rules

**Open task:** Define the exact minimum fields and timing that make a pre-hire record safe to send, the exception path for incomplete onboarding data, and the later transition from employee record to active user.

**Unanswered questions:** Which downstream processes may run before email/SSO identity exists? What prevents duplicate user creation when email arrives later? Will the upstream process automatically populate the Entra email in Paylocity?

**Sources:** Employee Management ADR-004 and ADR-006.

### P1 — Choose and validate the EDIS transport and integration operations

**Open task:** Complete IT/security review of SFTP versus REST, finalize the logical employee payload, error and retry behavior, reconciliation, monitoring, and production support ownership.

**Unanswered questions:** Is the initially scoped SFTP transport approved? What constitutes successful end-to-end reconciliation? How are partial failures replayed without duplicate side effects?

**Source:** Employee Management ADR-003.

### P1 — Implement the employee-integration correction process

**Open task:** Identify the administration team, recipients, queue or report, response service levels, correction ownership, retry procedure, and fallback workflow routing for the accepted daily error summary.

**Unanswered questions:** Which non-fatal errors are allowed to continue? When should a record be held instead? When can notification frequency be reduced, and who decides?

**Source:** Employee Management ADR-005.

### P1 — Validate the SAML identifier and mobile/offline access behavior

**Open task:** Confirm whether email, UPN, or another immutable organizational identifier appears in the Entra SAML assertion and matches the EDIS username. Test browser login, account disablement, mobile authentication, PIN setup, offline access, timeout behavior, and device-user separation.

**Unanswered questions:** Is email sufficiently stable, or should UPN/another claim be used? What happens to cached mobile access after an account is disabled? What device-management rules apply to shared or replaced devices?

**Source:** Employee Management ADR-006; Inspections ADR-001.

## Inspections

### P0 — Approve and parameterize inspection-frequency requirements

**Open task:** Obtain approval for Inspections ADR-008 and define effective-dated requirements for every initial program/resource combination, including quantity or interval, qualifying inspection criteria, reporting-period boundaries, late-treatment rules, reminders, escalation recipients, and reconciliation logic.

**Unanswered questions:** What exactly makes an inspection count toward a requirement? How are partial periods, newly added sites, late completions, reopened inspections, and failed inspections treated? When is a requirement yellow/at risk versus red/overdue?

**Source:** Inspections ADR-008.

### P0 — Decide the SafetyCulture migration and cutover plan

**Open task:** Obtain approval for Inspections ADR-010 and inventory the three initial programs, templates, users, open actions, incomplete inspections, attachments, and history. Decide the migration scope, coexistence period, validation criteria, cutover ownership, rollback approach, and SafetyCulture decommissioning criteria.

**Unanswered questions:** Which historical records move versus remain accessible elsewhere? How are open actions carried forward? How long will both systems operate, and what proves each program is ready to retire in SafetyCulture?

**Source:** Inspections ADR-010.

### P1 — Complete mobile/offline synchronization design and testing

**Open task:** Define and test draft/submitted boundaries, synchronization timing, conflict resolution, attachment size and type limits, interrupted uploads, device loss, offline duration, and user switching.

**Unanswered questions:** Which records and reference data are cached? What happens when configuration changes while an inspection is offline? How are simultaneous edits resolved? Is any shared-device mode required despite the selected user-specific model?

**Source:** Inspections ADR-001.

### P1 — Finalize per-program inspection configuration

**Open task:** For each initial program, define checklist sections, answer sets, conditional branches, required comments, action triggers, review steps, reviewer roles, resubmission rules, equipment/site selectors, and categorical outcomes. Include negative-response semantics and not-applicable controls.

**Unanswered questions:** Which responses require a comment, an action, or both? Which reviews are required by program and site? Are multiple approval levels needed anywhere? What evidence is mandatory for closure, and where are photographs optional versus required?

**Sources:** Inspections ADR-002 through ADR-006, ADR-011 through ADR-015.

### P1 — Design the official inspection PDF and record controls

**Open task:** Obtain approval for Inspections ADR-007; prototype the Merge Template with child questions, conditional content, comments, actions, and photographs; then define storage, naming, draft/final watermarking, regeneration, retention, signatures, and version rules.

**Unanswered questions:** Can Merge Templates expose every required child and attachment relationship? Where is the generated file retained? Is an electronic signature legally or operationally required? What happens when a finalized inspection or related action changes after PDF generation?

**Source:** Inspections ADR-007.

### P1 — Approve the KPI catalogue and dashboard specifications

**Open task:** Obtain approval for Inspections ADR-009 and define formulas, dimensions, filters, targets, thresholds, audiences, refresh frequency, and drill-through for deficiencies, expected-versus-completed inspections, timeliness, repeat negatives, actions, and trends.

**Unanswered questions:** Which measures are authoritative? How are repeat failures matched across checklist revisions? Should an inspection with any negative response be classified as failed, and does later action closure change that label? Which views are establishment-, resource-, asset-, technology-, supervisor-, or program-based?

**Source:** Inspections ADR-009 and ADR-015.

### P1 — Define combined regulatory reporting from atomic inspections

**Open task:** Validate the governing plans and approve or reject Inspections ADR-016. For every required combined filing, define the set-selection method, date range, completeness checks, response-combination rules, action presentation, approval, and output format.

**Unanswered questions:** Will regulators accept a consolidated output built from separate atomic inspections? When responses differ, is the least-favorable answer always appropriate? Can a plan be filed with a missing site inspection or open action? Is the combined report in Phase 1 scope?

**Source:** Inspections ADR-016.

### P2 — Define the boundary for future findings and formal audits

**Open task:** Record criteria for introducing a formal Finding record when a future audit program needs severity, classification, investigation, or root-cause workflow.

**Unanswered questions:** What business requirements would justify adding the Finding layer, and how would existing response-linked actions migrate or coexist?

**Source:** Inspections ADR-005.

## Training and Competency Management

### P0 — Approve the proposed training and competency architecture

**Open task:** Obtain decision-maker approval for Training Management ADR-003 through ADR-009 and ADR-012 through ADR-014, with particular attention to common requirements across delivery methods, atomic course boundaries, the separate qualification layer, qualification variants, attestation, policy-driven validity, TPC retirement, content versioning, and employment-status history.

**Unanswered questions:** Are any proposed directions contested by the business or constrained by licensing/product capability? Which parts are Phase 1 commitments versus later enhancements?

**Why material:** Ten proposed ADRs collectively define the core data and workflow model; treating them as approved would overstate the current baseline.

**Sources:** Training Management ADR-003 through ADR-009 and ADR-012 through ADR-014.

### P0 — Build the governed course, workgroup, and requirement catalogue

**Open task:** Inventory current LMS/TPC content, monthly plans, onboarding items, documents, live sessions, quizzes, and practicals. Split independently governed topics into atomic courses; define roll-ups; map job/position codes to reusable workgroups; and specify effective dates, recurrence, audience, delivery alternatives, completion authority, and satisfaction rules.

**Unanswered questions:** Which topics are genuinely equivalent across live and self-service delivery? Which site-specific variants must remain separate? What exactly completes an orientation or monthly program roll-up? Which requirements contain multiple mandatory components rather than alternatives? Who owns ongoing catalogue maintenance?

**Sources:** Training Management ADR-001 through ADR-005.

### P0 — Derive qualification definitions and renewal rules from policy

**Open task:** For each qualification, interpret the governing policy and configure the initial requirements, sequenced practical assessments, authorized assessors, evidence, effective date, duration, continuing training conditions, renewal-only requirements, reinstatement, grace period, notification, and escalation rules.

**Unanswered questions:** Which qualifications are one-time versus recurring? Does overdue supporting training suspend a qualification? Which initial steps are omitted at renewal? When does validity begin? What restores validity after lapse, and must work authorization be blocked meanwhile?

**Source:** Training Management ADR-006, ADR-007, and ADR-009.

### P0 — Design authorized competency attestation

**Open task:** Decide whether attestation directly grants a qualification or satisfies one requirement; define authorized roles, criteria, evidence, form fields, approval, permissions, revocation, and audit trail.

**Unanswered questions:** Who is allowed to attest for whom and for which qualification? What minimum work-history or experience evidence is retained? Is a digital assessment form required in Phase 1, or is confirmation plus attachment sufficient?

**Source:** Training Management ADR-008.

### P1 — Validate SCORM and custom learning-package compatibility

**Open task:** Obtain representative incident-management and fleet-safety packages, confirm the Intelex-supported SCORM specification, and test launch, navigation, completion, pass/fail/result reporting, retry, bookmarking, version replacement, and browser/mobile behavior.

**Unanswered questions:** Which SCORM versions and data elements are supported? Do both representative packages work without repackaging? What authoring or remediation capability is needed if they fail?

**Source:** Training Management ADR-010 and the 2026-09-08 training-prep transcript at 53:16–54:38.

### P1 — Finalize the TPC retirement and content migration plan

**Open task:** Approve Training Management ADR-012; inventory content and completion history; decide which items are migrated, recreated, repackaged, archived, or retained externally; confirm SCORM authoring and Quiz Builder licensing; and define coexistence, cutover, validation, and decommissioning.

**Unanswered questions:** How much historical completion detail must move into Intelex? Can course and content versions be reconstructed? What third-party content rights survive the move? When can TPC be switched off?

**Source:** Training Management ADR-012.

### P1 — Design exact training-content version traceability

**Open task:** Select and prototype the mechanism that binds a completion to the exact course, document, quiz, and SCORM version. Define the document-release training-impact assessment, version publication, retraining decision, historical preservation, and audit-report process.

**Unanswered questions:** Is version binding automatic at completion or an explicit course-version association? How are embedded links and replaced SCORM packages preserved? Which changes reschedule requirements, who decides, and how is that decision evidenced?

**Source:** Training Management ADR-013.

### P1 — Establish the MARCOM content refresh operating model

**Open task:** Verify provider distribution capabilities; choose the feasible detection/delivery mechanism; and assign ownership, cadence, validation, replacement, rollback, and completion-history impact procedures. Evaluate the offered content-loading library without assuming production adoption.

**Unanswered questions:** Does the provider expose notifications, feeds, APIs, or only manual downloads? Can updates be automated? Does replacement create a new course/content version, and can it trigger retraining without damaging prior completion evidence?

**Source:** Training Management ADR-011.

### P1 — Configure employment-status, rehire, and leave behavior for training

**Open task:** Define assignment inactivation/reactivation, new applicable-from dates, catch-up treatment, privacy filters, administrative visibility, and duplicate prevention for termination, rehire, job change, and leave.

**Unanswered questions:** Are due dates paused, preserved, or recalculated during leave? Which missed training is due immediately on return? Which audiences may see leave status? What happens when HR supplies a new identifier for a rehire?

**Source:** Training Management ADR-014.

## Document Control

### P0 — Define the controlled-document taxonomy and administration model

**Open task:** Confirm the document-control administrators and site coordinators; define the initial folder classes, document types and subtypes, restricted folders, governing groups, ownership rules, and taxonomy-change process.

**Unanswered questions:** Which business domains are included at go-live? Which content requires exceptional security? Who approves new taxonomy values and ownership changes? Will any second organizational hierarchy be available and supportable?

**Sources:** Document Control ADR-002, ADR-005, and ADR-007; Platform Administration ADR-001 and ADR-002.

### P0 — Finalize document lifecycle and approval controls

**Open task:** Approve Document Control ADR-009, ADR-010, and ADR-012; define the numbering format, lifecycle set, review frequencies, permissible overrides, approval templates, mandatory domain routes, segregation-of-duties rules, role assignments, release service levels, and rejection/resubmission behavior.

**Unanswered questions:** Which documents may use configurable approvals? Where are fixed routes mandatory? May an owner approve and release the same record? Which roles require substitutes? What differentiates an administrative revision from a material revision operationally?

**Sources:** Document Control ADR-001, ADR-009, ADR-010, and ADR-011; Platform Administration ADR-005.

### P1 — Build the document migration inventory and cutover plan

**Open task:** Inventory candidate policies, procedures, work instructions, forms, site plans, training source files, SCORM packages, and interim SDS files; select the initial corporate and site scope; map legacy numbers; populate metadata and relationships; set the bulk-load cutoff; and define validation and post-cutoff loading responsibilities.

**Unanswered questions:** Which document is authoritative where duplicates exist? Which legacy identifiers must remain visible? Which related-document notifications are required in each direction? How will documents managed outside Intelex during transition be reconciled?

**Sources:** Document Control ADR-003, ADR-004, ADR-006, ADR-009, and ADR-012.

### P1 — Define acknowledgment, distribution, and training-impact rules

**Open task:** Define when a release is passive, notified, acknowledged, or assigned as training; approve global acknowledgment wording; identify recipient-selection rules; and design combined evidence reporting across Document Control and Training Management.

**Unanswered questions:** Who determines revision materiality? What evidence is required before acknowledgment? Which changes require retraining? How will users and auditors retrieve a complete history spanning acknowledgments and course completions?

**Sources:** Document Control ADR-011; Training Management ADR-004 and ADR-013.

### P1 — Validate document search, file behavior, and restricted access

**Open task:** Test full-text indexing and latency for Word, PDF, and Excel; scanned-document behavior; browser viewing and downloads; Word-to-PDF rendition; fillable PDFs; shortcut visibility; restricted folders; controlled external links; and confirmation that the public portal is disabled.

**Unanswered questions:** Which file types require additional handling or OCR? Are print restrictions useful enough to configure given reader-dependent enforcement? What monitoring proves restricted content and shortcuts remain correctly scoped?

**Sources:** Document Control ADR-006, ADR-007, and ADR-008.

## Governance and Closure

### P0 — Define first-year platform change governance

**Open task:** Approve Platform Administration ADR-008 and define the intake channel, triage owner, participants, cadence, decision rights, security review, prioritization method, implementation handoff, and roadmap reporting.

**Unanswered questions:** Which changes can administrators approve directly? Which require business, security, or sponsor approval? How are urgent changes handled? Who owns the consolidated pipeline?

**Source:** Platform Administration ADR-008.

### P1 — Specify shared task and management dashboards

**Open task:** Approve Platform Administration ADR-007; identify audiences and hierarchy depth; define task, overdue, near-term, person, workflow-type, and application filters; assign report authors; and govern scheduled distribution.

**Unanswered questions:** How many supervisor levels are required for each leadership audience? Which location-scoped task views are granted to general managers? When may a report be scheduled under another user's security context?

**Source:** Platform Administration ADR-007.

### P1 — Establish an ADR approval and design-closure process

**Open task:** Assign domain approvers and review dates for all proposed ADRs; record approvals or revisions; and ensure dependent build work does not silently convert proposals into requirements.

**Unanswered questions:** Who has final authority in each domain? What evidence is required to accept an ADR? How will cross-domain conflicts be resolved and material changes communicated?

**Source:** Repository README status and ownership guidance.

### P2 — Maintain a decision-to-delivery traceability matrix

**Open task:** Track each item in this backlog to its ADR, owner, target date, decision record, configuration or development artifact, validation evidence, and closure status.

**Unanswered questions:** Which project system will hold execution ownership and dates? What definition of done proves that a design question is closed rather than merely discussed?

**Source:** Repository README update and traceability guidance.

## Recommended Resolution Sequence

1. Resolve the site/resource/asset taxonomy, hierarchy/security approvals, and master-data ownership.
2. Finalize the employee integration contract: position code, lifecycle/deactivation, remote assignment, identity, and exceptions.
3. Approve the proposed inspection, training, and competency ADRs that depend on those foundations.
4. Complete program-level configuration catalogues and policy interpretations.
5. Validate product and integration capabilities: mobile/offline, Merge Templates, SCORM, SAML, EDIS transport, and version traceability.
6. Decide migration/cutover for SafetyCulture and TPC, then define reporting, operational support, and governance controls.
