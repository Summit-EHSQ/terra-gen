# Implementation-plan output contract

This is the default output format for new plans and full redrafts. Preserve an explicitly requested user/repository format; document its mapping to this contract and validate equivalent content rather than silently removing material. Examples do not prescribe project objects, task counts, staffing, field counts or architecture.

## 1 Artifact set and destination

Write beside the governing specification unless another established destination applies:

| File | Required content |
|---|---|
| `implementation-plan.md` | The complete business-friendly plan described below. |
| `implementation-plan.json` | The canonical task, input, coverage and evidence snapshot. Set `planContractVersion: 2`. |
| `implementation-content-review.json` | Manually recorded task-specific semantic, language and meaning review, bound to exact task/rendered hashes. |
| `implementation-plan-validation.json` | Result from the document/schema/summary/dependency/coverage gate. |
| `implementation-content-validation.json` | Result from the content/review-freshness gate. |

Do not add a separate spreadsheet, project schedule, presentation, implementation workstream or collection of duplicate inventories unless requested. Keep existing filenames and stable task IDs during a revision. Generators must render from the same canonical snapshot and run both gates; they must not manufacture reviews. A missing/stale/failed review stops delivery.

## 2 Document outline

Use one H1: `# <Solution name> implementation plan`. A short opening identifies the proposal/draft status, date, governing source links and whether the package or live tenant supports the findings. Do not imply configuration was performed. Do not invent dates, counts or tenant identities.

Use exactly these six H2 sections, in this order:

1. `## Scope and planning basis`
2. `## Task summary`
3. `## External inputs and constraints`
4. `## Detailed configuration tasks`
5. `## Work that depends on earlier tasks`
6. `## Who covers each part of the build`

Explain scope, exclusions and what is reused in the first section. Use the last section for coverage, external workstream ownership, assumptions applying across tasks and retired-ID mappings where relevant. Do not create an extra active task list in a later section. Headings above describe the layout the user approved; the surrounding prose follows the business-language contract.

## 3 Task summary

Use exactly five columns:

| Task Number | Task Category | Task Name | Objective and Detailed Scope | Recommended Implementer |
|---|---|---|---|---|

For every active task, copy `id`, `category`, `title` and `implementer` exactly. The fourth cell is `**Objective:** <objective><br><br>**Detailed scope:** <scope>`, with no independent abbreviation. Escape literal pipes as `&#124;`; paragraphs within cells use the supported `<br><br>` separator. Every task appears exactly once, in detailed-record order. External inputs and retired tasks do not appear.

## 4 External inputs and constraints

Introduce these as information supplied outside the build tasks, not discovery assignments. Use one item per input:

`- **IN-01 — <Short business title>:** <what is needed, why, and what waits>`

Use the same ID/title/description from JSON. Include release/data-migration/client-administration boundaries where the governing scope establishes them; do not add them as tasks. Technical settings whose values are already known belong in the task, not in a vague missing-input item.

## 5 Detailed task record

Each heading is exactly `### IMP-01 — <Task title>`. Use stable `IMP-` IDs with at least two digits for new plans; preserve existing IDs in revisions. Title text matches the summary and JSON.

Use the following metadata labels and order, with blank lines between records:

| Markdown label | JSON source |
|---|---|
| `**Task ID:**` | `id` |
| `**Title:**` | `title` |
| `**Category:**` | `category` |
| `**Objective:**` | `objective` |
| `**Detailed scope:**` | `scope` |
| `**Deliverable:**` | `deliverable` |
| `**Work needed first:**` | `prerequisites`, task IDs only, or `None` |
| `**What is waiting:**` | `blockedStatus`, in business language |
| `**Recommended implementer role:**` | `implementer` |
| `**Recommended reviewer/approver role:**` | `reviewer`; a separate person/authority |
| `**Why this role is recommended:**` | `rationale` |

When prerequisites exist, add a paragraph beginning `What the earlier tasks provide:` and state the named configuration outputs the task consumes. Use `predecessorOutputs`, one `{id, description}` per predecessor, for this paragraph. A task ID alone does not explain the output. No dependency is created only for a reviewer, staffing preference or preferred sequence.

Then include, when applicable:

**Fields and features to set up:**

| Field or feature | What to set up |
|---|---|

Render `configurationRows` as label/instruction pairs. Include one directly configured field/list/feature or independently configured condition per row, with its exact operative settings. Grouping a complete assignment does not permit combining independent fields in one row.

**Changes to the existing setup:**

| Existing field or screen | What needs to change |
|---|---|

Render `modifications` as named element/change pairs. Each change includes evidence-supported current behavior and the required difference. A single short change can be prose if it remains complete and present in the JSON snapshot. Do not put preservation-only settings in this table as assigned work.

**Build instructions:** a numbered list from `steps`. Use supported mechanism names or identify proposed mechanisms explicitly. Keep defaults/checks before consequential operations where their order matters.

**How to check the result:** a bullet list from `accept`. Each item describes an observable changed outcome or relevant rejection/failure, not a direction to another document.

End with these metadata blocks, in this order:

| Markdown label | JSON source |
|---|---|
| `**Information needed for this task:**` | Each `suppliedInputDescriptions` ID and task-specific explanation, or `None`. |
| `**Specification references:**` | `refs`, traceability only. |
| `**Assumptions and open questions:**` | `assumptions`, or `None`. |

Do not omit metadata blocks simply because their value is `None`. A task with no field additions may omit the fields table; one with no existing changes may omit the changes table. It must still assign a tangible configuration difference through its steps or other operative instructions. Do not add empty table scaffolds.

## 6 Dependencies

Explain that each arrow means the later task needs a configuration output from the earlier task. Render one fenced Mermaid `flowchart TD` with one node per active task and edges exactly matching `prerequisites`. Sanitize node IDs as `IMP_01`, while keeping the displayed stable ID/title: `IMP_01["IMP-01 Create the reference list"]`.

Unknown IDs, duplicate edges, self-dependencies and cycles fail. Missing external inputs have no nodes/edges. Do not infer a schedule, duration or critical path from the graph. Reconcile dependencies across the entire graph after consolidation or renaming.

## 7 Coverage and external ownership

Use this table:

| Part of the build | Responsible task | What happens |
|---|---|---|

Each proposed addition/modification/removal has exactly one owning task. Classify unchanged support as Reuse, excluded work as External, and explicitly irrelevant elements as Not applicable. An unresolved configuration change still has a proposed owner and its exact blocking inputs; it is not silently omitted. Do not turn reuse into preservation-only assignments.

Describe each task's responsibility separately from field population handled by another task. Coverage must identify the actual element and change, not merely repeat requirement IDs. Summarize counts only when reconciled to the source/target inventory. Field counts and task counts are derived, never copied from a previous project.

## 8 JSON snapshot

Required top-level fields:

- `planContractVersion`: `2`;
- `title`, `date` (`YYYY-MM-DD`), `scope`;
- `basis`: nonempty source references identifying source and evidence limitation; no need to duplicate source files;
- `evidenceNames`: mapping of every used `E123` identifier to its verified configuration name; empty object when no such IDs are used;
- `externalInputs`: array of `{id, title, description}`;
- `tasks`: array in canonical displayed order;
- `coverage`: array of `{element, action, owner, description}`; `action` is `Add`, `Modify`, `Remove`, `Reuse`, `External` or `Not applicable`; actual changes have one active `owner`, other dispositions use `null`;
- `coverage[].blockedBy`: optional input-ID array for unresolved actual changes;
- optional `retiredTaskIds` and a retired-to-active mapping when needed for revisions.

Each task contains:

- strings: `id`, `title`, `category`, `objective`, `scope`, `deliverable`, `blockedStatus`, `implementer`, `reviewer`, `rationale`, `assumptions`;
- `prerequisites`: active task IDs, or `[]`;
- `predecessorOutputs`: one `{id, description}` per prerequisite, or `[]`;
- `inputs`: external-input IDs, or `[]`;
- `suppliedInputDescriptions`: one `{id, description}` per task input, or `[]`;
- `configurationRows`: `[label, instruction]` pairs, or `[]`;
- `modifications`: `{element, change}` records, or `[]`;
- `steps`, `accept`, `refs`: arrays of strings. `accept` and source traceability must be nonempty; a task needs at least one operative row/change/step.

Field settings may also be represented structurally in `fieldSettings` to support editorial before/after checks, but they must not hide values omitted from the rendered assignment. Include every operative statement in these task fields or an explicit lossless adapter. Do not validate a shortened/sanitized snapshot while publishing additional unreviewed instructions.

## 9 Acceptance of a generated plan

Run structural validation and the separate task-content gate on the exact final artifacts. Both must pass; language and meaning checks also require recorded manual review. The structural gate can detect missing labels, summary drift, undefined inputs, mismatched graph edges and missing owners. It cannot decide that a task is sensibly grouped, an unknown platform method works, a business explanation is accurate or the tenant is configured. Keep those limits explicit.

For a new plan or full redraft, review every active task. A full-plan language rewrite is a full redraft for review purposes. Scoped revisions must include every changed task and freeze all unreviewed snapshots; neither a new hash nor a successful vocabulary replacement is a semantic approval.
