# Intelex Technical Implementation Planning Standard

## Contents

- Plan boundary
- External inputs and constraints
- Describe verified configuration changes
- Self-contained tasks and tangible work
- Executable content validation
- Business-consultant language
- Task consolidation and decomposition
- Strict technical dependencies
- Required task-summary table
- Required task record
- Role assignment rubric
- Reviewer and approver assignment
- Final quality checks

## Plan boundary

Include only in-scope technical configuration: applications, objects, fields, relationships, reference values, forms, workflows, permissions, formulas, automation, integrations and reports.

Exclude discovery, prototypes, tenant verification, migration/backfill, formal testing, deployment, documentation workstreams, training and project governance. Configuration acceptance checks may demonstrate the assigned item; they are not a separate formal-testing workstream. Do not publish estimates. Use the approximate eight-hour boundary only to judge whether an assignment is manageable.

Honor the user's project ownership boundaries. If initial data population or reviewer membership administration belongs to Data Migration or client administrators, record that ownership and any required inputs without assigning it as configuration work. Do not assume all reference-value setup is migration or all permissions are administration; follow the actual scope. Do not add architectural hardening merely to align an existing product with general best practices.

## External inputs and constraints

Missing native settings, supported expressions, identifiers, runtime-behavior results, approved values and policy decisions are supplied inputs. Identify the precise missing item, affected change and resulting blocker. Keep confirmed portions of the plan actionable; a missing export attribute does not require rebuilding an unchanged feature.

List these inputs after the summary table and before detailed tasks, without task numbers, categories, implementers, reviewers or acceptance criteria. Link affected tasks to them through Blocked status. Technical predecessor fields and Mermaid nodes contain only implementation tasks, not external discovery/verification work.

When source configuration is unavailable, label the current behavior unverified and block only the changes whose exact target or mechanism cannot be established. Do not disguise that gap with an invented existing check or generic new subsystem. Reading available artifacts is part of planning; requesting unavailable tenant-verification results does not create a discovery task.

## Describe verified configuration changes

1. **Establish existing behavior first.** Inspect available package metadata, fields, forms, view actions, handlers and workflows. Understand the paths relevant to the requirement before assigning work; distinguish package evidence from live tenant state.
2. **Identify the exact element.** Whenever an instruction/change table uses an evidence ID, include the actual configuration name beside it, as `Insp_Type_Detail (E1565)`. This applies to every occurrence, including current-state and source-reference cells; a name in another table or a glossary is insufficient. Resolve names from package evidence, never invent them. Name the object, field, screen, view action, Action Handler or workflow action, using its available locator/source evidence. Specification labels such as H06 or R06 are references, not proof that a named product component exists.
3. **State current behavior accurately.** Record the relevant setting, condition or step order with its evidence. Separate extracted facts, user-confirmed behavior, proposed changes and unresolved details. Do not infer defects or missing functionality from a target requirement alone.
4. **Prescribe the required difference.** Specify Add, Modify or Remove; identify the condition, affected controls/fields, exact settings and timing. For new elements, define the creation instruction explicitly without fabricating identifiers. A lifecycle change that uses an unchanged field is not automatically a field-property modification.
5. **Reuse functionality that meets the requirement.** Intelex automatically manages its own native processing context and permissions. Do not add tasks, rows, criteria or missing inputs to grant platform processing access or supply a system principal. Retain genuine application-user/role/record/file permissions and the behavior/target of automation; external integration credentials remain a separate requirement when applicable. Account for it in coverage/context, not as a standalone preservation task or unchanged row in a changes table. Include existing mechanisms in task instructions only where needed to locate or explain the actual difference. State intentional removals explicitly; never infer tenant deletion from a discarded design proposal.
6. **Translate requirements into configuration instructions.** State where and how enforcement is configured. For example, Require completion notes is incomplete until it identifies the existing form action, field rule or workflow action to change, or a justified new mechanism. Reuse known mandatory controls where they suffice. Check the required access paths; do not assume form enforcement also covers imports/APIs or add extra routes without a requirement.
7. **Place checks at the correct execution point.** Identify the trigger, branch and order of defaults, validation, updates, transitions and notices. Where validation must prevent completion or transition, run it before that operation. When legitimate empty-value defaults apply, specify their order and how actual entered values are treated.
8. **Give each change one owner.** Assign each configuration difference/check to one task and mechanism. Other tasks reference that owner. Related form requirements and workflow completion guards may serve different execution paths; state the distinction instead of repeating unspecified validation in both.
9. **Expose missing evidence.** Identify the actual unresolved target, native binding or behavior as an external input. Do not present pseudocode as executable syntax, invent a Save check, or leave a consultant to choose an unspecified new mechanism.
10. **Propagate revisions.** Reconcile the task records, specification references, acceptance criteria, dependencies, coverage and diagrams. If a specification labels an unchanged setting Modify, explain its actual disposition rather than assigning fictitious work. Update the specification when requested/authorized; otherwise identify the discrepancy.
11. **Verify the difference.** Acceptance criteria demonstrate the changed behavior at the specified execution point. Reconcile each in-scope element to implemented change, deliberate reuse, external ownership or explicit non-applicability; unchanged supporting settings are not additional deliverables.

Use an internal or published change inventory sufficient to trace each addition/modification/removal to its requirement, evidence/current behavior, desired behavior, actual mechanism and owning task. Do not add a duplicate document when task tables and coverage already provide this information.

For existing modifications, a useful detailed table is: **Existing element | Current behavior / evidence | Required change**. For additions, use one row per field/control or condition with its required configuration. A single short modification may be clear in prose. Either format must let the consultant identify and perform the change without inventing the implementation.

## Self-contained tasks and tangible work

1. **Assign a tangible difference.** Every assigned instruction must create, modify or remove a defined configuration element. Identify/record/resolve existing options, identifiers or behavior is preparation unless an exact configuration update consuming those values is prescribed. Remove preparation-only rows and their deliverables/criteria; put unresolved values under the affected consuming task’s missing inputs.
2. **Make the task independently implementable.** Include its required object/field names, parameters, types, lengths, defaults, exact entries, permission rules, conditions, execution points and outcomes. The assignee must not need to interpret a differently written specification to discover what to build.
3. **Put operative content in the task.** Replace Apply SEC-01, Implement R02 or Use the specification table with the actual permissions, conditions or complete values. A shared table within the same plan may provide navigation/context, but include the task-specific settings in the assignment itself.
4. **Use references for traceability only.** Keep numbered requirements, ADRs and source links in the separate Specification references field. Removing that field must leave the configuration instructions and acceptance criteria complete. Preserve actual Intelex component names, field paths, evidence locators and executable syntax where needed to locate/build the element.
5. **Describe predecessor outputs.** A predecessor ID may point to another task in the same plan, but also name the object, field, operation or configured behavior the successor consumes. Do not transfer the predecessor’s implementation work into the successor or duplicate ownership.
6. **Keep inputs local and narrow.** State the actual missing identifier, approved value, principal or supported native binding and precisely which instruction it blocks. Include the supplied value when known. Do not copy an unrelated global input description or assign the consultant a discovery/documentation exercise to obtain it. Missing values remain explicit blockers; never invent them to make a task appear complete.
7. **Keep one consultant-facing voice.** Translate the relevant technical content into the task’s business-focused configuration language without dropping precision. Concise repetition of essential settings is preferable to a cross-document dependency; reconcile repeated values with their authoritative source.
8. **Make criteria independent.** Describe observable differences using actual values and conditions, not Matches the specification or Complies with SEC-01. Existing context, evidence recording and administrative preparation are not deliverables.
9. **Apply an independence review.** Read the task with source references hidden. Resolve each remaining implementation question inline, identify an exact predecessor output, or record a precise missing input. A task can be self-contained about what is blocked without being ready for all configuration to proceed.

## Executable content validation

Apply [task-content-validation.md](task-content-validation.md). Maintain a structured task snapshot and a recorded semantic review for every changed task, then execute the bundled Node content gate against that snapshot and rendered Markdown. The gate checks for outsourced instructions, preparation presented as changes, stale/missing reviews and rendering discrepancies. It complements the graph/schema/source checks below; it does not independently prove semantic correctness or tenant behavior.

New plans/full redrafts require all active tasks to pass. A narrowly requested edit may use a task-scoped gate; report its exact scope and leave other tasks explicitly unreviewed. Never suppress findings, automatically approve the semantic review, omit changed tasks from the scope, or describe a scoped pass as full-plan compliance.

## Business-consultant language

Write for consultants who understand Intelex configuration and the business process, without requiring software-engineering vocabulary.

1. **Lead with the business outcome.** Explain what the configuration enables or requires, then the mechanics that produce it.
2. **Use recognizable labels first.** Use the displayed business name, followed by the exact internal name where it helps locate the setting. Preserve exact component names and supported formulas; do not rename an existing element to make the prose simpler.
3. **Use direct configuration verbs.** Add, change, show, hide, require, default, clear or remove a specific element. Start concise task names with Create, Configure, Update or Set Up.
4. **Make modifications explicit.** State current behavior, required difference, controlling value, affected screen/stage and execution timing. Distinguish hidden, read-only, nonmandatory, cleared and defaulted; hiding a control is not the same as making it read-only.
5. **Preserve technical precision.** Keep the exact object/field/action, value, condition and source/target needed to build the configuration. Use tables for field lists and conditional behavior. Necessary platform terms should explain their business effect on first use.
6. **Assign changes, not preservation instructions.** Omit standalone Keep existing or Do not change work. Put essential source context beside the real change or in coverage. A new restriction, such as protecting accepted evidence, is an actual behavior to configure and must remain explicit.
7. **Write observable criteria.** Describe what the configured application demonstrably does for the applicable conditions, including errors before a blocked operation. Criteria must cover the assigned difference rather than merely say Match the specification.
8. **Expose uncertainty in plain language.** Name the missing input and affected work. Avoid phrases such as Configure appropriate save checks that sound prescriptive while leaving the element and implementation undecided.

Examples below illustrate wording patterns, not assumed tenant behavior:

| Avoid | Prefer |
|---|---|
| Establish the approved application container | Create the Application |
| Create catalogue object shells | Create the Reference Lists |
| Configure the appropriate save checks | Name the verified existing operation, condition and check to add or modify |
| Require completion notes | When evidence shows the existing Complete action checks notes after completion, move that named check before completion |
| Keep Completed By read-only | Omit the instruction when its setting is unchanged; assign only any separately required workflow population change |
| schema | object and field configuration |
| runtime consumers | records that use the configuration |
| instantiate / upsert | create / create or update |
| idempotent retry | safe to run again without creating duplicates |
| reporting grain | reporting level |

Use the consultant role names from the rubric. Scope, deliverables, role rationale and criteria must be as readable as the title; avoid putting plain language only in the summary while leaving opaque detailed instructions.

## Task consolidation and decomposition

1. **Organize around a complete configuration outcome.** Group closely related fields, forms, defaults and ordinary validation when they support the same requirement and form one manageable, independently assignable deliverable.
2. **Use technical layers to describe work, not automatically split it.** Creating a field, placing its control and configuring its behavior can be one task. Existing object boundaries or different activity categories alone do not require separate assignments.
3. **Assign the role appropriate to the combined work.** A few routine changes may remain inside a Consultant-owned assignment when they directly support its more complex behavior. Different minimum roles alone do not justify fragmentation.
4. **Separate for a practical reason.** Substantial specialist complexity, an independent deliverable, different technical prerequisites or an output required earlier by other tasks may justify a split. Keep routine assignments near the one-day boundary. When complex work is not usefully divisible, explain why it stays together without publishing an estimate.
5. **Give each change one owner.** Consolidation removes repeated instructions, transfers complete scope and inputs, reconciles prerequisites and preserves a traceable task identifier. Record which old IDs were consolidated; retain remaining IDs where practical. When the user asks only for candidates, recommend them without applying unapproved merges.
6. **Respect workstream ownership.** Keep explicitly external data migration, client administration and other excluded activities with their owners. Specify the inputs the configuration consumes rather than recreating those activities as technical tasks.

Before confirming a grouping, check the complete resulting dependency graph, including paths through tasks outside the group. Union necessary external prerequisites/inputs, remove internal/self/duplicate edges, and redirect all downstream references. A field needed early for record generation may need a separate task from a calculation that depends on those generated records; simply merging both can create a cycle.

Consider these bounded groupings when the actual scope supports them: field settings with conditional form behavior; reference-list creation with its initial entries/basic permissions; a new question setting with its small publication copy; program fields with their setup screen and ordinary validation. These are candidates, not mandatory bundles.

Keep substantial native completion/event-order work, nuanced record security, integrations or multi-stage automation separate when they remain distinct specialist assignments. Do not use their presence elsewhere in the feature as a reason to fragment every routine field or control.

For new/changed workflow stages that other tasks need, expose the stage configuration output before dependent forms/full logic. A simple/full workflow split can serve that dependency for a large workflow. Stable existing stage/action identities are reused without a fictitious skeleton task; a bounded workflow change may be one assignment when no real dependency requires a split.

## Strict technical dependencies

An arrow means the successor needs configuration produced by the predecessor. Include only real technical prerequisites, such as:

- an application before objects within it;
- inheritance bases and relationship targets before configuration referring to them;
- new/changed fields before formulas, form actions, permissions, reports or workflow rules that require them;
- required new/changed stage identities before stage-aware forms;
- the source/target structure before automation that reads or creates related records;
- published configuration before generation that consumes it.

Existing product objects, fields, stage identities and reuse decisions are context, not fictitious prerequisite tasks. Missing supported expression/behavior results are external blockers, not graph nodes. Exclude preferred sequence, staffing, approval and deployment edges. Do not claim a critical path without authoritative duration/scheduling data.

After consolidation, validate unknown/retired IDs, self-dependencies, duplicate edges and cycles. Check that task predecessor lists and Mermaid edges match exactly and all affected references/coverage use the remaining IDs.

## Required task-summary table

Place one complete task-summary table after scope/planning basis and before external inputs and detailed tasks. Use exactly:

| Task Number | Task Category | Task Name | Objective and Detailed Scope | Recommended Implementer |
|---|---|---|---|---|

Copy the exact task ID, category, title and implementer from each detailed task. In the fourth cell include both canonical text values, labelled **Objective:** and **Detailed scope:**, separated by `<br><br>`. Escape literal pipes within cells. Do not shorten one of the copied values independently of its detailed record.

Every active task appears once, in the same order as the detailed records. External inputs and retired task IDs are excluded from this table. Supporting field/change tables expand the detailed instructions without replacing the required scope paragraph. Update the table whenever a task is created, consolidated, removed, renamed, rescoped, recategorized or reassigned.

## Required task record

Every active task contains:

- **Task ID**
- **Title**
- **Category**
- **Objective**
- **Detailed scope**, with concrete additions/modifications/removals, affected conditions and named mechanisms; supporting field/change tables where useful
- **Deliverable**
- **Strict technical prerequisites**, predecessor task IDs only, or None
- **Blocked status**, naming missing supplied inputs and/or technical predecessors; record unresolved details precisely
- **Recommended implementer role**
- **Recommended reviewer/approver role**
- **Role rationale**, applying the rubric to the complete assignment
- **Acceptance criteria**, observable and specific to the change
- **Specification references**, with section identifiers and relevant source locators when available
- **Assumptions and open questions**, or None

Keep current instructions separate from revision history and unchanged context. For removed/consolidated tasks, record their disposition outside the active task records. No active dependency, coverage assignment or task instruction may point to a retired ID.

## Role assignment rubric

Recommend the minimum role capable of completing the task successfully. Weight these factors most heavily:

1. technical complexity;
2. automation complexity;
3. consequence of failure, particularly substantial rework or implementation delay.

Also consider ambiguity, security sensitivity, integration impact, cross-application dependencies, and client-facing technical decisions when they materially increase complexity or failure risk.

### Associate Consultant

Use for bounded, established configuration patterns, including:

- application creation, object creation, and ordinary object parameters;
- field creation, defaults, display properties, and simple field calculations;
- a first-pass simple workflow with stages, statuses, straightforward person responsible, and basic transition actions;
- form fields, sections, subsections, layout, stage containers, and basic show, hide, clear, and set-mandatory actions;
- straightforward object permissions, particularly catalogue security.

Do not assign an Associate as the minimum owner for nuanced validation, material error handling, complex record automation, record-level or workflow-based security, or inherited security.

### Senior Associate Consultant

Use for the Associate scope with greater independence and judgment, plus:

- more complex formulas, including Get Data, Fetch Value, Get Related, and Reference patterns;
- final configuration of simple and medium workflows, including ordinary validation, error handling, calculated responsibility, and calculated due dates;
- permission inheritance when the model is understood and bounded;
- larger or more complex form layouts;
- simple CSS and limited form-level C#.

### Consultant

Use when a task introduces moderately complex automation or requires broader technical judgment, including:

- web-service automation;
- scheduled inputs or services;
- report-fed record selection;
- workflow actions that automatically create or publish records;
- cross-object configuration whose failure would cause material rework;
- cross-object technical interpretation within an implementation task.

### Senior Consultant

Use as the technical authority for:

- advanced or multi-stage automation;
- concurrency, idempotency, retry, atomicity, or reconciliation behaviour;
- sophisticated C#, HTML, CSS, or customized UI work;
- nuanced record, workflow, or cross-object security;
- high-consequence platform behaviour or designs spanning multiple technical subsystems.

### Principal Consultant

Use for highly nuanced, exceptional, or architectural configuration, including:

- bespoke user experiences;
- unusually complex security models;
- integrations with substantial architectural or operational consequences;
- the most complex workflow, business-logic, report-driven, and cross-system automation;
- decisions where platform-wide consequences or failure risk exceed the normal Senior Consultant authority.

Choose the minimum role capable of the complete assignment, independently of who designed it. Keep small routine field/form changes with related higher-skill work when that produces one manageable outcome. Split specialized portions when their substantial scope, expertise or technical sequencing makes them independently assignable; a role difference alone is not sufficient.

## Reviewer and approver assignment

Every task has a recommended reviewer/approver in addition to its implementer.

- Default to the product build manager, normally a Senior Consultant.
- A Consultant or Senior Associate Consultant may review appropriately bounded work when the plan defines that person as the build approver and the review is within their proficiency.
- Use a Principal Consultant for architectural, highly customized, or exceptionally consequential technical decisions.
- When the plan names an approver, use that authority rather than substituting the generic default.
- Reviewer assignment supplies support and acceptance; it does not automatically create a dependency edge between otherwise independent tasks.

## Final quality checks

Before delivering a plan, confirm:

- Every changed task includes its operative settings/values and can be understood without source references; numbered requirements remain traceability only.
- No assigned row or acceptance criterion is only identification, verification or recording of existing configuration; missing inputs are local to actual consuming changes.
- The executable content gate passed for the current rendered task snapshots, every changed task is covered, and untouched tasks are explicitly identified for a scoped revision.

- Each task assigns an actual addition, modification or removal, supported by requirements and available evidence/current behavior.
- No platform-managed processing context/permission setup or system-principal input has been assigned.
- Every e-ID in required-configuration and existing-change tables is paired locally with its verified element name.
- Every existing modification identifies the real element and exact required difference; specification rule labels are not presented as product component names.
- Added mechanisms are explicitly proposed and justified by a requirement gap; unresolved native targets/syntax are recorded as supplied inputs rather than invented.
- Defaults, checks, state changes and notices have an explicit order where material, and each check has one owning task/mechanism.
- Existing enforcement that meets the requirement is accounted for as reuse, with its required execution-path coverage understood.
- Unchanged field properties, native relationships and infrastructure are absent from assigned work and changes tables unless an actual difference is specified.
- Related routine configuration is grouped into complete outcomes; splits have a practical reason and specialist work remains manageable.
- Merged assignments carry all scope, criteria, references, prerequisites and inputs, with the correct combined implementer role.
- Scope follows the user's workstream ownership; no discovery, tenant-verification, migration, formal-testing, deployment, training or governance tasks have entered the plan.
- Business purpose, recognizable labels and direct configuration instructions are used throughout, preserving exact platform names, values, conditions and timing.
- Criteria demonstrate the required difference and its meaningful conditions, including failure before consequential operations where applicable.
- Every task has the complete record schema and both roles, using the plan-defined reviewer where supplied.
- The five-column summary precedes detailed tasks; every task appears once and its six copied values match in the same order.
- Every in-scope element is covered by a configuration task, deliberate reuse, explicit external ownership or non-applicability; reuse does not create fake work.
- Missing inputs block only affected tasks and appear outside the technical task graph.
- Predecessors represent actual required outputs, with no unknown/retired IDs, self-edges, duplicate edges or cycles, including after consolidation.
- Mermaid edges match task predecessor lists and preserve field/stage availability before dependent configuration.
- Revisions reconcile the specification when authorized, plan, coverage, acceptance criteria and diagrams; no contradictory active alternatives or duplicated change owners remain.
- No estimates are published and no live tenant implementation/verification is claimed without evidence.
