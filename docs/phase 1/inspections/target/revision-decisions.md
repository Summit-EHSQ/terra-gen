# Revision 2 scope and supersession decisions

The user requested a consultant configuration handoff and an aligned task list after reviewing the architectural uplift in revision 1. Revision 2 makes client configuration the core scope and separates optional hardening. The [archived revision 1 task data](archive/v1/implementation-plan.json) is retained for traceability. The source package/as-is specification remain unchanged. These are changes to a proposed design, not claims of tenant field deletion.

## 1. Optional architectural changes removed from the core task list

| Previous task | Previous proposal | Current disposition / retained tradeoff |
| --- | --- | --- |
| IMP-02 | Update the Existing Selection Catalogues | Retain shared catalogue fields/types and use stable native record IDs; no new Code normalization. |
| IMP-06 | Create Applied Program Value Fields | No applied-program snapshots/initializer; live existing type configuration retained. Exact historic applied configuration is not guaranteed. |
| IMP-07 | Create Applied Program Relationships | No applied-program snapshots/initializer; live existing type configuration retained. Exact historic applied configuration is not guaranteed. |
| IMP-12 | Configure Stored Published Question Values | Retain native published calculations/engine. Only new semantic copies added; no claim of improved publication atomicity or immutable existing calculations. |
| IMP-13 | Configure Stored Published Checklist Values | Retain native published calculations/engine. Only new semantic copies added; no claim of improved publication atomicity or immutable existing calculations. |
| IMP-27 | Configure Controlled Checklist Publishing | Retain native published calculations/engine. Only new semantic copies added; no claim of improved publication atomicity or immutable existing calculations. |
| IMP-29 | Configure Applied Program Initialization | No applied-program snapshots/initializer; live existing type configuration retained. Exact historic applied configuration is not guaranteed. |
| IMP-32 | Configure Resource Context Copies | No historical resource-label/technology copy fields; no invented historic dimension. |
| IMP-33 | Configure Branch Evidence Handling | Retain native clear-on-hide; no BranchConfirmed field or new user confirmation step. |

## 2. Existing capability reuse and mixed-scope refinements

| Previous scope | Current instruction |
| --- | --- |
| IMP-15 action skeleton | Existing native action stage/status/Complete identity reused; changed W02 start/closure logic is in the full action workflow task. |
| IMP-38 compatibility update redesign | Existing E1319/E2096/E2929/native maps reused; populate required initial source context only; no alias ownership refactor. |
| IMP-48 resource security | Use the supplied native authority/access as part of conditional resource binding; no new security boundary. |
| IMP-49 broad audit coverage | Native review/answer correction evidence is part of scoped permissions/workflow work; no application-wide shared-object audit retrofit. |
| IMP-03/18/24 vocabulary changes | Keep complete sections/question semantics and needed validation; omit new Choice/Choice List Active flags, vocabulary freezes and shared type normalization. |
| IMP-09/20 branch confirmation | Keep outcome fields and normal conditional forms; remove new reconfirmation field/behavior. |
| IMP-23 catalogue data | Populate new functional domains and actual missing approved options only; no shared Code/Sort/Name normalization. |
| IMP-26/28 publishing/generation | Add ContributesToOutcome copy and external execution guard; existing engine/generator reused without general concurrency/retry rewrite. |
| IMP-47 access scope | Configure access needed for new review/action/result fields and accepted evidence, preserving current Location model; no general security remediation. |
| Unrequested policy defaults | No new fixed reminder cadence, self-approval prohibition, wholesale timestamp conversion or assignment-on-save for outstanding actions. Native release timing retained. |

Optional proposals require a separate explicit scope decision before adding tasks or dependencies. No optional field appears in the active target model. Proposed client ADRs retain their status; their conditional configuration items are distinguished from accepted client requirements. Exact requirement-to-configuration mapping is in main §1.2.

## 3. User refinement — choice polarity and action requirements

The user retained Response Outcome, removed the proposed question fields ActionRequiredIfNegative and NegativeBoolean, and replaced the proposed question selection NegativeChoices with Choice.IsNegative (Is Negative?). These fields were design proposals, not installed package fields; this revision instructs no tenant field deletion. Use existing Question.ActReqChoices for action requirements on both single and multiple selections, independently of polarity. Add only ContributesToOutcome to the publication copies.

Checkbox and other non-choice responses are informational because no Boolean polarity setting remains. Use a Yes/No Choice list for binary questions requiring a positive/negative outcome or choice-triggered action. IsNegative is shared wherever a Choice is used, with FALSE for new records and NULL interpreted as FALSE. Use separate choices when polarity differs by context. Shared values remain live until acceptance; submission and approval reevaluate them. Accepted response and inspection results are not rewritten. This refines the earlier four-field question design without changing the ADRs or the source baseline.

## 4. Shared Review status

The user refined IMP-14 so both existing review stages select the same existing Review status (3fffb769-563b-4259-a75d-ed894416c2c0). This supersedes the prior target that selected a separate Second Review status for S04. ActionsPending and SecondReview remain separate stage SystemNames; their routing, decisions, permissions, due periods, Return destinations and history continue to use stage identity. Inspection status stays Review when moving between them. This changes the target bindings, not the as-is package evidence, and does not instruct deletion of an existing status record.

## 5. Single externally provided report file

The user replaced the generic attachment-designation approach for External inspections with one native File field, Inspection.ExternalInspectionReport (External Inspection Report). The External Inspection Report form section replaces the Question Answer grid and contains that one upload field. Require a completed server-accessible upload before any forward transition out of InspectioninProgress; ordinary Save may remain incomplete. Internal inspections hide the section. Optional general attachments are separate evidence and cannot satisfy the report requirement. Review, mobile, permissions and output bindings use the named field. The File field is a proposed addition with no invented metadata identifier; G07 supplies native file/upload settings.

## 6. Action entry uses verified form and completion operations

Consolidate IMP-22 and the former IMP-37 into IMP-10. Replace generic save-check instructions with precise edits to E18 CLF_InsActionPlan_Detail / Action Already Complete Show/Hide, the ActionOwner field/control mandatory settings and the AlBeenCorrected default. Existing branch-specific required fields are product behavior, not a new general validation subsystem. IMP-39 adds explicit checks before E3088 sets Workflow.DateNotRequired; IMP-42 moves defaults/checks and adds the needed date/evidence checks before E2518 completes.

Planning rule: establish existing behavior first. Every assignment must identify the actual configuration element, state what it currently does and prescribe the required addition, modification or removal. Use native behavior that already meets the requirement; assign new enforcement to a named mechanism at the correct execution point. Consolidate closely related field/form changes under one owner, and give each check one explicit owner.
