---
status: proposed
date: 2026-10-28
deciders: []
consulted:
  - Dave McLean
  - Paul Niemer
  - Matthew Futter
informed: []
primary_application: Competency Management
secondary_applications: Training Management
---

# Defer Qualification Delivery Pending Program and Scope Reassessment

## Context and Problem Statement

Participants report a client direction to defer qualification and certification work to a later phase. The program's required rules, automation, and manual activities still need refinement, which may affect implementation scope and cost. [Call, 47:52–51:06]

Existing ADRs preserve accepted and proposed qualification architecture. Deferral does not by itself establish that those decisions are rejected or that a different architecture has been selected.

## Decision Drivers

- Give the client time to refine its qualification program.
- Determine required automation and data-entry responsibilities.
- Compare refined requirements with the existing scope before recommitting delivery.
- Preserve useful design work during deferral.
- Avoid promising future implementation cost before scope is understood. [Call, 48:09–52:29]

## Considered Options

- Defer delivery, preserve existing design evidence, and reassess scope before restarting.
- Continue implementation against the current design before program refinement — analyst-derived alternative.
- Defer while guaranteeing unchanged future scope and cost — an assumption explicitly not supported by the discussion.

## Decision Outcome

Chosen option: **Defer qualification/certification delivery and require program and scope reassessment before restarting**, because the required behavior and its fit with the existing commitment remain unresolved. [Call, 49:11–52:29]

Preserve the existing qualification ADRs and supporting design as inputs to that reassessment. Deferral does not supersede the accepted standalone workflow or mandatory-evidence decisions.

Before implementation resumes, compare the refined program with the existing scope, establish the automation and manual responsibilities, identify any required ADR changes, and agree the resulting scope and commercial terms.

No restart date, replacement architecture, or future price is established by this draft.

## Consequences

The following are architectural analysis:

- Qualification delivery is separated from the proceeding training workstream.
- Existing design remains available without implying implementation completion.
- Reassessment may confirm the current architecture or justify later revisions and supersessions.
- Future effort and budget depend on the agreed requirements.
- A reported no-cost administrative deferral does not guarantee no-cost future implementation.

## More Information

[Call — Terra-Gen Training Setup Q&A, October 28, 2026, 3:30 PM ET](<../raw artifacts/meeting_transcripts/2026-10-28-terra-gen-training-setup-qa.md>):

- 47:52–49:57: deferral rationale and proposed rescoping.
- 50:07–51:06: reported client email and no-cost deferral discussion.
- 51:06–52:29: discovery and scope/budget review before recommitment.

The referenced client email and change order were not supplied. This ADR records a proposed delivery boundary, not proof of an executed contractual amendment.

Related: Training Management [ADR-006](ADR-006-build-qualifications-as-a-separate-layer-over-training-management.md), [ADR-007](ADR-007-use-separate-qualification-definitions-for-materially-different-scopes.md), [ADR-008](ADR-008-support-authorized-competency-attestation.md), [ADR-009](ADR-009-define-qualification-validity-and-renewal-from-governing-policy.md), and [ADR-015](ADR-015-require-objective-evidence-and-centralized-qualification-completion.md).
