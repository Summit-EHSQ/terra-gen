# Employee Management

This component governs how employee identities and organizational attributes enter Intelex, drive provisioning, and remain operationally supportable throughout the employee lifecycle.

[Documentation portal](../README.md) · [Phase 1 change log](../CHANGELOG.md) · [Open tasks and questions](../OPEN-TASKS-AND-QUESTIONS.md)

## Scope

Employee Management covers the Paylocity-to-Boomi-to-Intelex integration, custom employee staging, APIHub provisioning, position-code-driven profiles, pre-start provisioning, establishment assignment for remote employees, daily integration monitoring, and Microsoft Entra ID authentication.

It supplies shared employee and identity data to other Phase 1 applications. It does not define application-specific training assignments, incident attribution, inspection permissions, or workflow behavior beyond providing the employee attributes those applications consume.

## Current Direction

- Proposed: resolve exact Paylocity Position Codes to governed, versioned provisioning profiles and block initial Employee creation until the configuration has been published.
- Assign remote employees to an establishment through governed, testable rules rather than manual convention alone.
- Use Boomi to maintain Paylocity Employee Records and APIHub to create or update employees through `EmployeeUserAccess`.
- Provision employees before their start date when the minimum safe source data is available.
- Monitor integration errors daily and provide operational fallback routing.
- Authenticate employees through Microsoft Entra ID.

## Decision Register

| ADR | Status | Decision |
| --- | --- | --- |
| [ADR-001](ADRs/ADR-001-use-position-codes-as-provisioning-profile-inputs.md) | Proposed | Use Governed Position Codes as Provisioning Profile Inputs |
| [ADR-002](ADRs/ADR-002-automate-establishment-assignment-for-remote-employees.md) | Accepted | Automate Establishment Assignment for Remote Employees |
| [ADR-003](ADRs/ADR-003-integrate-employees-through-boomi-and-edis.md) | Accepted | Integrate Employees through Boomi, APIHub, and EmployeeUserAccess |
| [ADR-004](ADRs/ADR-004-provision-employees-before-their-start-date.md) | Accepted | Provision Employees before Their Start Date |
| [ADR-005](ADRs/ADR-005-monitor-employee-integration-errors-daily.md) | Accepted | Monitor Employee Integration Errors Daily |
| [ADR-006](ADRs/ADR-006-authenticate-through-microsoft-entra-id.md) | Accepted | Authenticate through Microsoft Entra ID |

## Dependencies and Boundaries

- Platform Administration defines the hierarchy, home and login assignments, visibility model, and location-scoped roles populated from employee data.
- Training Management consumes position/profile mappings and must preserve history across termination, rehire, leave, and job changes.
- Incident Management depends on establishment and employee context but governs event-specific attribution and overrides.
- Inspections depends on identity, mobile authentication, role assignments, and site access.

## Source Evidence

- [Design Workshop Day 1 — Morning, September 15, 2026](<raw artifacts/meeting_transcripts/2026-09-15-terra-gen-summit-ehsq-design-workshop-day-1-morning.md>)
- [Design Workshop Day 2 — Morning, September 16, 2026](<raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-morning.md>)
- [Design Workshop Day 2 — Afternoon, September 16, 2026](<raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-afternoon.md>)
- [Paylocity Employee Integration Technical Requirements and Clarifications, September 25, 2026](<raw artifacts/2026-09-25-paylocity-employee-integration-technical-requirements.md>)

ADR **More Information** sections identify the relevant timestamps.

## Open Work

- Approve ADR-001 and validate exact, case-sensitive Position Code uniqueness in the configured Intelex object.
- Validate transactional copying and rollback for Published Position Code scalar fields, M:N Groups, and 1:M Role Assignments.
- Finalize termination, leave, omission, rehire, and deactivation semantics.
- Convert remote-establishment rules into a tested decision table.
- Define minimum pre-start data and identity-matching behavior.
- Finalize APIHub retry, reconciliation, monitoring, and support ownership across the staged record and `EmployeeUserAccess` request.
- Validate SAML identifiers and mobile/offline account-disablement behavior.

Track these items in the [consolidated open-task register](../OPEN-TASKS-AND-QUESTIONS.md).

## Maintaining This Component

Keep integration contracts, provisioning rules, and employee lifecycle semantics aligned. When an employee attribute changes meaning or source, review dependent Platform Administration, Training Management, Incident Management, and Inspections ADRs before accepting the change.
