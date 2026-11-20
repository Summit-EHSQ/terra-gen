# Task-content validation contract

This is a delivery gate, in addition to the planning standard's schema, dependency, coverage and evidence checks. It targets two demonstrated failures: instructions that outsource operative content to another document, and preparation that produces no configuration difference.

## Required artifacts

Keep the artifacts beside the plan or in the repository's existing validation location:

- A JSON snapshot with a tasks array. Each task uses id, objective, scope, deliverable, configurationRows (pairs of label/instruction), steps, modifications (element/businessElement and change/businessChange), accept, refs, inputs and suppliedInputDescriptions (id/description pairs). Include the plan's other task metadata as appropriate. refs contains traceability only.
- An evidenceNames object on the plan JSON, mapping each referenced e-ID to its verified package configuration name. Use `Name (E123)` at every occurrence in instruction/change tables, including source-reference cells. Reconcile this registry against the original evidence; a correctly formatted invented name does not pass the content review.
- The rendered Markdown plan, with detailed headings in the form ### IMP-01 — Task title.
- A content-review JSON file, version 1, with one review per task in the delivery scope.
- The gate's JSON result, including passed, scope, unreviewedTaskIds and errors.

For a scoped revision, the review also records unchangedTaskHashes: an object mapping every untouched task ID to hash(task) at the start of the scoped edit. These hashes freeze the unreviewed baseline; they do not certify its content. New, edited or removed tasks outside the selected scope fail the gate. Expand the scope and review affected tasks rather than renewing baseline hashes to hide changes.

The snapshot must reflect the actual published task, not a sanitized version that excludes operative prose. Existing source inventories/revision history are not task instructions. An equivalent artifact format needs an adapter preserving all operative content; do not bypass the gate.

## Content review

Read each complete task with its source references hidden. Reconcile its instructions against the evidence and approved design. Write the review only after doing this work; do not generate approval flags or generic justifications automatically.

Each task review includes:

- id: the task ID.
- taskHash: SHA-256 of JSON.stringify(task), using hash exported by the validator. Any task edit invalidates this review.
- renderedTaskHash: use renderedHash(markdown, task.id), exported by the validator, to bind the review to the actual rendered detailed assignment. Extra instructions inserted only into Markdown must not escape review.
- evidenceReview: a specific account of the evidence reconciliation and unresolved native details.
- checks: standaloneInstructions, exactValuesIncluded, dependenciesDescribeOutputs, inputsAreLocalAndNarrow and acceptanceDescribesChanges, each true only after a successful review.
- instructions: one record for every operative scope, configuration row, additional step and modification. Each record contains path, requiredChange (the tangible difference) and mechanism (the actual/new implementing element). Use units(task), exported by the validator, to obtain the exact paths and text; scope, configurationRows.0, steps.0 and modifications.0 are examples.

Do not invent a change justification for an unchanged/preparation-only row. Remove or move it to context/inputs and rereview the task. Describe supplied identifiers in the input block of the task that actually assigns/rebinds the setting. Check criteria and deliverables as part of the independence review as well as the instruction-by-instruction review.

## Execute the gate

Run with Node.js; there are no package dependencies. Substitute the actual skill directory and artifact paths:

~~~powershell
node "<skill-directory>/scripts/validate-implementation-task-contract.cjs" --plan "implementation-plan.json" --markdown "implementation-plan.md" --review "implementation-content-review.json" --out "implementation-content-validation.json"
~~~

The default scope is every active task. For a narrowly requested edit, append --tasks IMP-01 (or a comma-separated list of every changed task). The result explicitly lists untouched tasks. A selected-task pass does not certify the rest of the plan. A new plan/full redraft must use full scope.

Exit code 1 blocks delivery for the selected scope. Fix every finding and rerun; do not add a skip flag, whitelist or blanket waiver. The gate also rejects native system-processing permission setup and e-IDs lacking their registered names in instruction/change tables. Native processing context and permissions are handled by Intelex; actual user permissions and required operation behavior remain configurable.

The gate rejects numbered requirements in operative prose, common directions to obtain settings from another specification, preparation-only identification wording, missing task-local input descriptions, absent/stale reviews, and reviewed instructions/criteria missing from rendered tasks. Requirement IDs may remain in refs for traceability. Predecessor task IDs, actual Intelex component names and source evidence locators remain valid when needed to identify the work.

Run the existing source/schema/coverage/summary/graph validations too. Where a build generator exists, invoke this gate after rendering and structural validation so future edits cannot silently bypass the recorded review.

## Limits and maintenance

Wording checks are intentionally limited detectors, not proof of meaning. A complete review can still be wrong; the agent must examine tangible differences, native mechanisms, precise values, responsibility boundaries and missing inputs. Do not claim independent semantic certification or live tenant testing. Include unresolved implementation inputs in the task even when this content gate passes.

When changing the gate, run:

~~~powershell
node "<skill-directory>/scripts/test-implementation-task-contract.cjs"
~~~

Regression checks cover actual configuration using an existing value, traceability-only references, outsourced settings/criteria, preparation-only work, stale/missing reviews, missing rendered instructions, incomplete input descriptions and scoped versus full-plan reporting and changes hidden outside the selected scope. The test helper creates synthetic reviews solely to exercise the gate; never use it to approve a production plan.
