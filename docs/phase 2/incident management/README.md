# Incident Management

This component defines the initial Phase 2 boundaries for incident attribution, privacy-aware access, and contractor-event participation in Intelex.

[Documentation portal](<../../phase 1/README.md>) · [Phase 2 overview](../README.md)

## Scope

Incident Management currently covers three foundational choices: recording both the OSHA establishment and the affected operational resource, deferring contractor self-service with isolated security until the internal workflow and system boundary are better understood, and limiting persistent incident visibility while allowing workflow-derived access.

Detailed incident intake, investigation, classification, regulatory reporting, and corrective-action workflows are not yet represented by ADRs in this component.

## Current Direction

- Proposed: preserve the legally relevant OSHA establishment and the operationally relevant resource as distinct incident attributes, with controlled correction when employee-derived defaults are inaccurate.
- Proposed: keep the initial implementation focused on internal users, defer contractor self-service and isolated contractor security, and revisit that boundary after the internal workflow and contractor-system boundary are stable.
- Restrict persistent incident visibility and use workflow assignments to grant temporary access to participants who need to complete specific work.

## Decision Register

| ADR | Status | Decision |
| --- | --- | --- |
| [ADR-001](ADRs/ADR-001-capture-establishment-and-operational-resource.md) | Proposed | Capture Both OSHA Establishment and Operational Resource |
| [ADR-002](ADRs/ADR-002-defer-contractor-self-service-and-isolated-security.md) | Proposed | Defer Contractor Self-Service and Isolated Security |
| [ADR-003](ADRs/ADR-003-limit-persistent-incident-visibility-and-use-workflow-access.md) | Accepted | Limit Persistent Incident Visibility and Use Workflow-Derived Access |

ADR-001 and ADR-002 remain proposed and should not be treated as approved implementation requirements. ADR-003 is accepted.

## Dependencies and Boundaries

- Platform Administration supplies the establishment hierarchy, operational-resource taxonomy, visibility model, and security foundations.
- Employee Management supplies employee and default establishment context.
- Inspections routes near misses to Incident Management rather than treating inspection findings as incident records.
- Contractor platforms may remain authoritative for detailed contractor records or KPIs; that boundary is unresolved.

## Source Evidence

- [Design Workshop Day 1 — Morning, September 15, 2026](<raw artifacts/meeting_transcripts/2026-09-15-terra-gen-summit-ehsq-design-workshop-day-1-morning.md>)
- [Design Workshop Day 2 — Morning, September 16, 2026](<raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-morning.md>)
- [Design Workshop Day 2 — Afternoon, September 16, 2026](<raw artifacts/meeting_transcripts/2026-09-16-terra-gen-summit-ehsq-design-workshop-day-2-afternoon.md>)

ADR **More Information** sections identify the relevant timestamps.

## Open Work

- Approve and detail dual establishment/resource attribution.
- Standardize the terms establishment, site, resource, asset, project, and legal entity.
- Define selectable operational record types, filtering, defaulting, override permissions, and audit behavior.
- Approve the initial contractor boundary.
- Define minimum contractor data, internal entry responsibility, reconciliation, and KPI ownership.
- Establish triggers for reconsidering contractor self-service and isolated security.
- Create additional ADRs as the detailed incident workflow is designed.

Track these items in the Phase 2 delivery backlog when that register is established.

## Maintaining This Component

Keep incident attribution aligned with the shared site/resource/asset model. New incident workflow decisions should explicitly address privacy, record visibility, regulatory context, corrective actions, and boundaries with Inspections and external contractor systems.
