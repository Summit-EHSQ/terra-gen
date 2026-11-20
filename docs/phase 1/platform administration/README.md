# Intelex Platform Administration

Follow-up confirmation: reporting-based Location Structure and separate employee establishment storage are confirmed; Intelex retains hierarchy maintenance and Boomi supplies assignments. Document/training audiences and technical/regulatory bindings remain open. See the [recorded confirmation](<raw artifacts/2026-11-10-reporting-location-establishment-confirmations.md>). Earlier descriptions of unresolved business choices below refer to the initial review.

This component defines the shared structures and controls that support every Phase 1 Intelex application, including hierarchy, visibility, employee placement, workflow roles, reporting, support access, and platform change governance.

[Documentation portal](../README.md) · [Phase 1 change log](../CHANGELOG.md) · [Open tasks and questions](../OPEN-TASKS-AND-QUESTIONS.md)

## Scope

Platform Administration covers the initial location model, the boundary between establishments and asset taxonomy, record visibility, employee home and login assignments, organizational hierarchy ownership, location-scoped workflow roles, shared tasks and reporting, controlled external support access, and first-year platform governance.

It provides shared foundations rather than application-specific business workflows. Each application remains responsible for defining how it uses those foundations.

## Current Direction

- Use a single establishment-based location hierarchy and keep the operational asset taxonomy separate.
- Proposed successor under ADR-009: use the Paylocity reporting structure for Location Structure and hold OSHA establishments separately. The accepted establishment-based baseline remains authoritative until regulatory, employee and application bindings are reconciled and the transition approved.
- Proposed under ADR-010/011: consume a source-governed recursive Asset object through Boomi, with read-only user-facing reference data, stable identities and parent-first API delivery.
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
| [ADR-009](ADRs/ADR-009-separate-reporting-locations-from-osha-establishments.md) | Proposed | Separate Reporting Locations from OSHA Establishments |
| [ADR-010](ADRs/ADR-010-consume-a-governed-asset-hierarchy-from-terra-gen.md) | Proposed | Consume a Governed Asset Hierarchy from Terra-Gen |
| [ADR-011](ADRs/ADR-011-synchronize-assets-through-a-parent-first-api-integration.md) | Proposed | Synchronize Assets through a Parent-First API Integration |

The [November 10 reconciliation](../ADR-RECONCILIATION-2026-11-10.md) records the pending PA-001 successor and PA-004 ownership question. No accepted ADR has been rewritten or marked superseded by these proposals.

## Dependencies and Boundaries

- Employee Management supplies the attributes used to populate employee assignments and provisioning profiles.
- Incident Management depends on establishment and operational-resource attribution plus privacy-aware visibility.
- Inspections depends on governed site/resource/asset context and location-scoped reviewer roles.
- Training Management depends on employee placement and profile-derived workgroups.
- Document Control depends on location applicability, visibility patterns, and approval roles.

## Source Evidence

- [Summit + TG: Asset Hierarchy Setup, November 10, 2026, scheduled 4–5 PM ET](<raw artifacts/meeting_transcripts/2026-11-10-summit-tg-asset-hierarchy-setup.md>) — shared evidence for asset governance/integration, the hierarchy transition and application impacts.
- [Design Workshop Day 1 — Morning, September 15, 2026](<raw artifacts/meeting_transcripts/2026-09-15-terra-gen-summit-ehsq-design-workshop-day-1-morning.md>)
- [Design Workshop Day 2 — Morning, September 16, 2026](<raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-morning.md>)
- [Design Workshop Day 2 — Afternoon, September 16, 2026](<raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-afternoon.md>)
- [Design Workshop Day 3 — Morning, September 17, 2026](<raw artifacts/meeting_transcripts/2026-09-17-terra-gen-summit-ehsq-design-workshop-day-3-morning.md>)

ADR **More Information** sections identify the relevant timestamps.

## Open Work

- Define and approve each application's visibility model and the proposed employee attribution/access-assignment model.
- Approve the source-governed asset model and provide its data dictionary, identifiers, aliases, establishment links and lifecycle rules; define API recovery, reconciliation and support ownership.
- Resolve the separate-establishment proposal against standard regulatory reporting, employee payloads, document applicability, training audiences and inspection security. Confirm who owns organizational hierarchy nodes independently of the source-owned asset hierarchy.
- Document the initial visibility model for each Phase 1 application and test representative personas.
- Name owners and approvers for hierarchies, identifiers, reference data, mappings, roles, and exceptions.
- Establish effective dating, validation, audit, and fallback procedures for master data and unpopulated roles.
- Complete external-support authorization, credential, logging, review, and removal controls.
- Approve shared-task, security-aware reporting, and first-year change-governance proposals.

Track these items in the [consolidated open-task register](../OPEN-TASKS-AND-QUESTIONS.md).

## Maintaining This Component

Treat platform structures as shared contracts. Before changing a hierarchy, assignment, role, or visibility concept, assess every consuming application and preserve stable identifiers wherever possible. Application-specific exceptions should be documented in that application's ADRs and linked back to the relevant platform decision.
