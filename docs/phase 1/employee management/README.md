# Employee Management

This component governs how employee identities and organizational attributes enter Intelex, drive provisioning, and remain operationally supportable throughout the employee lifecycle.

[Documentation portal](../README.md) · [Phase 1 change log](../CHANGELOG.md) · [Open tasks and questions](../OPEN-TASKS-AND-QUESTIONS.md)

## Scope

Employee Management covers the Paylocity-to-Boomi-to-Intelex integration, direct EmployeeUserAccess provisioning and native Employee profile processing, position-code-driven profiles, pre-start provisioning, establishment assignment for remote employees, daily integration monitoring, and Microsoft Entra ID authentication.

It supplies shared employee and identity data to other Phase 1 applications. It does not define application-specific training assignments, incident attribution, inspection permissions, or workflow behavior beyond providing the employee attributes those applications consume.

## Current Direction

- Resolve Employee JobCode through FETCHVALUE to the Position Code authoring record and capture its current immutable publication in Employee.Position Code Version. If no code is found, create the authoring record and start its initial workflow.
- Position Code remains editable in Completed after initial workflow completion. A Publish form link creates each immutable Published Position Code version; the first publication fills waiting Employee Position Code and Position Code Version references through Source Employees, the inverse grid of Employee.[Helper] Create New Position Code Relation.
- Assign remote employees to an establishment through governed, testable rules rather than manual convention alone.
- Use Boomi to call `EmployeeUserAccess` directly, with JobCode carrying the Position Code. The proposed activation sequence creates Employee first, prepares its profile natively, then enables account access.
- Provision employees before their start date when the minimum safe source data is available.
- Monitor integration errors daily and provide operational fallback routing.
- Authenticate employees through Microsoft Entra ID.

## Decision Register

| ADR | Status | Decision |
| --- | --- | --- |
| [ADR-001](ADRs/ADR-001-use-position-codes-as-provisioning-profile-inputs.md) | Proposed | Use Governed Position Codes as Provisioning Profile Inputs |
| [ADR-002](ADRs/ADR-002-automate-establishment-assignment-for-remote-employees.md) | Accepted | Automate Establishment Assignment for Remote Employees |
| [ADR-003](ADRs/ADR-003-integrate-employees-through-boomi-and-edis.md) | Accepted | Integrate Employees through Boomi and EmployeeUserAccess; earlier ADR transport requires reconciliation |
| [ADR-004](ADRs/ADR-004-provision-employees-before-their-start-date.md) | Accepted | Provision Employees before Their Start Date |
| [ADR-005](ADRs/ADR-005-monitor-employee-integration-errors-daily.md) | Accepted | Monitor Employee Integration Errors Daily |
| [ADR-006](ADRs/ADR-006-authenticate-through-microsoft-entra-id.md) | Accepted | Authenticate through Microsoft Entra ID |

## Dependencies and Boundaries

The [accepted technical specification for ADRs 001–004](ADR-001-004-technical-specification-employee-provisioning.md) defines the verified baseline, proposed object and field contracts, publishing, integration processing, and acceptance criteria. Location-qualified Role implementation remains deferred. The current design also places the initial workflow on editable Position Code and creates immutable versions through its Publish link. The direct Boomi route and authoring model supersede earlier descriptions; ADR-001 has been reconciled; accepted ADR-003 and the historical detailed requirements still need formal transport reconciliation.

- Platform Administration defines the hierarchy, home and login assignments, visibility model, and location-scoped roles populated from employee data.
- Training Management consumes position/profile mappings and must preserve history across termination, rehire, leave, and job changes.
- Incident Management depends on establishment and employee context but governs event-specific attribution and overrides.
- Inspections depends on identity, mobile authentication, role assignments, and site access.

The [implementation plan for ADRs 001–004](ADR-001-004-implementation-plan-employee-provisioning.md) contains 18 self-contained configuration assignments with implementer/reviewer roles, strict technical dependencies and task-local external-input blockers. The October 29 revision retires 11 earlier assignments through consolidation or withdrawal while preserving their ID mappings and includes a full-plan content review and passing validation gate. It uses the specification accepted on October 28, 2026; implementation and native-capability verification are not implied by acceptance.

Confirmed October 29: create **Employee Integration Manager** for all six new custom objects, restrict their visibility to **Administrators only**, use the documented workflow parameters, and configure **no Audit Trail or retention**. Native Employee stays in its existing application. See the [decision record](<raw artifacts/2026-10-29-employee-integration-manager-decisions.md>) and [ADR reconciliation](ADR-RECONCILIATION-2026-10-29-employee-integration-manager.md).

The [Workflow section](ADR-001-004-technical-specification-employee-provisioning.md#9-workflow) lists stage parameters and available exit paths, followed by workflow actions with ordered decisions, errors, set values, completion and notification logic. Subsequent publication while Completed is documented separately as a form-link operation.

## Source Evidence

- [Training Setup Q&A, October 28, 2026, 3:30 PM ET](<raw artifacts/meeting_transcripts/2026-10-28-terra-gen-training-setup-qa.md>) — identical source copy in Training Management. The [October 28 reconciliation](<../training management/ADR-RECONCILIATION-2026-10-28.md>) records assignment/location dependencies and outstanding formal reconciliation of Employee ADRs with the accepted specification; it does not change Employee ADR statuses.
- [Design Workshop Day 1 — Morning, September 15, 2026](<raw artifacts/meeting_transcripts/2026-09-15-terra-gen-summit-ehsq-design-workshop-day-1-morning.md>)
- [Design Workshop Day 2 — Morning, September 16, 2026](<raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-morning.md>)
- [Design Workshop Day 2 — Afternoon, September 16, 2026](<raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-afternoon.md>)
- [Paylocity Employee Integration Technical Requirements and Clarifications, September 25, 2026](<raw artifacts/2026-09-25-paylocity-employee-integration-technical-requirements.md>)

ADR **More Information** sections identify the relevant timestamps.

## Open Work

- Approve ADR-001 and validate exact, case-sensitive Position Code uniqueness in the configured Intelex object.
- Validate atomic Publish-link version creation, initial workflow completion, waiting-Employee version assignment and subsequent publication while Position Code remains Completed.
- Finalize termination, leave, omission, rehire, and deactivation semantics.
- Supply establishment source fields and site codes (including San Diego), job-function-to-main-site mappings, conflicting-site resolution and durable correction authority. The ordered assignment rules are captured in the [October 28 establishment flow](<raw artifacts/2026-10-28-establishment-assignment-flow.md>) and specification section 10.1.
- Define minimum pre-start data and identity-matching behavior.
- Validate native Employee handler/service timing, membership writes, direct Boomi retry/reconciliation, proposed account-readiness gate and support ownership.
- Validate SAML identifiers and mobile/offline account-disablement behavior.

Track these items in the [consolidated open-task register](../OPEN-TASKS-AND-QUESTIONS.md).

## Maintaining This Component

Keep integration contracts, provisioning rules, and employee lifecycle semantics aligned. When an employee attribute changes meaning or source, review dependent Platform Administration, Training Management, Incident Management, and Inspections ADRs before accepting the change.
