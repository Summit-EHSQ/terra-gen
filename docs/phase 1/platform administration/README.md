# Intelex Platform Administration

This component defines the shared structures and controls that support every Phase 1 Intelex application, including hierarchy, visibility, employee placement, workflow roles, reporting, support access, and platform change governance.

[Documentation portal](../README.md) · [Phase 1 change log](../CHANGELOG.md) · [Open tasks and questions](../OPEN-TASKS-AND-QUESTIONS.md)

## Scope

Platform Administration covers the initial location model, the boundary between establishments and asset taxonomy, record visibility, employee home and login assignments, organizational hierarchy ownership, location-scoped workflow roles, shared tasks and reporting, controlled external support access, and first-year platform governance.

It provides shared foundations rather than application-specific business workflows. Each application remains responsible for defining how it uses those foundations.

## Current Direction

- Use a single establishment-based location hierarchy and keep the operational asset taxonomy separate.
- Do not use the superseded universal intersection-based visibility model; define access per application and use workflow-derived access where appropriate.
- Proposed: keep employee attribution distinct from exceptional access assignments.
- Maintain the organizational hierarchy in Intelex with governed ownership and stable identifiers.
- Route workflows through location-scoped roles rather than named-person configuration.
- Provide authorized external support through a controlled separate URL to the same Intelex database.
- Use shared tasks and security-aware reporting across applications.
- Establish additional platform change governance during the first year of operation.

## Decision Register

| ADR | Status | Decision |
| --- | --- | --- |
| [ADR-001](ADRs/ADR-001-use-complementary-location-and-business-hierarchies.md) | Accepted | Use a Single Establishment-Based Location Hierarchy and Keep Asset Taxonomy Separate |
| [ADR-002](ADRs/ADR-002-apply-intersection-based-record-visibility.md) | Superseded | Apply Intersection-Based Record Visibility (Superseded) |
| [ADR-003](ADRs/ADR-003-separate-employee-home-and-access-assignments.md) | Proposed | Separate Employee Attribution from Exceptional Access Assignments |
| [ADR-004](ADRs/ADR-004-maintain-the-organizational-hierarchy-in-intelex.md) | Accepted | Maintain the Organizational Hierarchy in Intelex |
| [ADR-005](ADRs/ADR-005-use-location-scoped-roles-for-workflow-routing.md) | Accepted | Use Location-Scoped Roles for Workflow Routing |
| [ADR-006](ADRs/ADR-006-provide-controlled-external-support-access.md) | Accepted | Provide Controlled External Support Access |
| [ADR-007](ADRs/ADR-007-use-shared-tasks-and-security-aware-reporting.md) | Proposed | Use Shared Tasks and Security-Aware Reporting |
| [ADR-008](ADRs/ADR-008-establish-first-year-platform-change-governance.md) | Proposed | Establish First-Year Platform Change Governance |

## Dependencies and Boundaries

- Employee Management supplies the attributes used to populate employee assignments and provisioning profiles.
- Incident Management depends on establishment and operational-resource attribution plus privacy-aware visibility.
- Inspections depends on governed site/resource/asset context and location-scoped reviewer roles.
- Training Management depends on employee placement and profile-derived workgroups.
- Document Control depends on location applicability, visibility patterns, and approval roles.

## Source Evidence

- [Design Workshop Day 1 — Morning, September 15, 2026](<raw artifacts/meeting_transcripts/2026-09-15-terra-gen-summit-ehsq-design-workshop-day-1-morning.md>)
- [Design Workshop Day 2 — Morning, September 16, 2026](<raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-morning.md>)
- [Design Workshop Day 2 — Afternoon, September 16, 2026](<raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-afternoon.md>)
- [Design Workshop Day 3 — Morning, September 17, 2026](<raw artifacts/meeting_transcripts/2026-09-17-terra-gen-summit-ehsq-design-workshop-day-3-morning.md>)

ADR **More Information** sections identify the relevant timestamps.

## Open Work

- Define and approve each application's visibility model and the proposed employee attribution/access-assignment model.
- Define the governed site/resource/asset taxonomy and authoritative sources.
- Document the initial visibility model for each Phase 1 application and test representative personas.
- Name owners and approvers for hierarchies, identifiers, reference data, mappings, roles, and exceptions.
- Establish effective dating, validation, audit, and fallback procedures for master data and unpopulated roles.
- Complete external-support authorization, credential, logging, review, and removal controls.
- Approve shared-task, security-aware reporting, and first-year change-governance proposals.

Track these items in the [consolidated open-task register](../OPEN-TASKS-AND-QUESTIONS.md).

## Maintaining This Component

Treat platform structures as shared contracts. Before changing a hierarchy, assignment, role, or visibility concept, assess every consuming application and preserve stable identifiers wherever possible. Application-specific exceptions should be documented in that application's ADRs and linked back to the relevant platform decision.
