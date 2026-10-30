# ADR Reconciliation Plan

New evidence: [October 29 application/workflow/security/Audit Trail decisions](<raw artifacts/2026-10-29-employee-integration-manager-decisions.md>).

| Existing/Candidate ADR | Current status | New finding | Disposition | Target ADR | Evidence | Rationale |
|---|---|---|---|---|---|---|
| ADR-001, including the configuration-boundary clarification | Proposed | New named application, confirmed authoring workflow, Administrators-only visibility and no Audit Trail | revise draft | ADR-001 | User decisions and workflow confirmation | Keep the stable profile-governance decision ID; reconcile the proposed record with the current specification rather than retain obsolete draft-side workflow instructions |
| ADR-002 | Accepted | Establishment calculation unchanged | retain unchanged | ADR-002 | User decisions, application scope | New application boundary does not change the ordered Boomi calculation |
| ADR-003 | Accepted | New application contains configuration objects, not a new inbound staging boundary | retain unchanged | ADR-003, linked dated clarification | User decisions, applied scope | Preserve historical transport outcome/status; append compatible application-policy context. Previously outstanding direct-transport reconciliation remains separate |
| ADR-004 | Accepted | Pre-start timing/account policy unchanged | retain unchanged | ADR-004 | Workflow confirmation, applied scope | Position Code workflow confirmation does not change the Employee pre-start lifecycle |
| ADR-005 | Accepted | Audit Trail is not required; operational monitoring remains | retain unchanged | ADR-005, linked dated clarification | User decision on Audit Trail | Avoid confusing no Audit Trail with removal of the existing daily error-monitoring decision |
| ADR-006 | Accepted | Authentication unchanged | retain unchanged | ADR-006 | User decisions, applied scope | No SAML/identity change supplied |

## Change Summary

### Modified

Revise proposed ADR-001 to describe current Employee-based discovery/capture, authoring-side initial workflow, immutable publication and the confirmed configuration boundary. Add dated context links to accepted ADR-003 and ADR-005 without changing their historical accepted outcomes. Synchronize specification and implementation plan; withdraw Audit Trail setup rather than transferring it to another task.

### Unchanged

Retain ADR-002, ADR-004 and ADR-006. No ADR ID is added, reused, renumbered or superseded. Existing approval/status records are preserved; the new requirements are user-confirmed, not a claim that the revised ADR proposal has received formal approval.

## Traceability and Gaps

Application placement, Administrators-only application visibility, business workflow parameters and no Audit Trail are resolved. Native bindings, actual service execution context, protected record operations, publishing/membership/account feasibility and remaining source/business data remain open. Native Employee stays in its existing context. No tenant move, audit deactivation on existing objects, or application deployment has been performed.

ADR-001’s revised text is in its existing file; accepted ADR-003’s earlier transport choice and historical requirements still need formal reconciliation with direct delivery. That pre-existing issue is not silently superseded by this application-policy update.
