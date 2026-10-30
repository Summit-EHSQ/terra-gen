# Inspections configuration handoff — Revision 2

[Technical configuration specification](solution-specification.md): core objects and fields, native workflow/stage/action parameters, form rules, handlers, outcomes and output contracts.

- [Complete field reference](field-contract.md)
- [Current 34-task implementation plan](implementation-plan.md)
- [Field/task and source behavior coverage](implementation-coverage.md)
- [Native expression register](configuration-expressions.md)
- [Logical model diagrams](target-diagrams.md)
- [Handler reconciliation](automation-reconciliation.md)
- [Scope/supersession decisions](revision-decisions.md)
- [Validation and remaining inputs](validation.md)
- [Task-content validation — IMP-01 scope](implementation-content-validation.json)

The [as-is baseline](../as-is/README.md) is unchanged. Revision 1 is archived as history; its broader architectural proposals are not active implementation requirements.

Regenerate from the repository root with:

```powershell
node scripts/build-inspections-config-docs.cjs
```
