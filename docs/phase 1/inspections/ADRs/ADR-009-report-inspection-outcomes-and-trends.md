---
status: proposed
last_revised: 2026-11-10
deciders:
  - Whitney Goller
  - Mike Tran
consulted:
  - Dave McLean
informed:
  - Emma Lister
  - Matthew Futter
primary_application: Inspections
secondary_applications: Reporting, Action Management, Intelex Platform Administration
---

# Report on Deficiencies, Completion, Timeliness, and Trends

## Context and Problem Statement

The inspection program is intended to show strengths, weaknesses, and improvement over time. Useful performance information comes from deficient responses, corrective actions, completion against frequency requirements, and timeliness rather than aggregate checklist scores.

## Decision Drivers

* The organization needs to identify trends and improvement opportunities.
* Deficiencies derive from configured negative responses.
* Completion must be compared with site-level requirements.
* Late completion may differ materially from on-time completion.
* Repeated negative responses may indicate site, asset, or management outliers.

## Considered Options

* Report primarily on numeric scores.
* Report only the number of completed inspections.
* Report on deficiencies, actions, compliance, timeliness, and trends.
* Produce reports manually from PDF records.

## Decision Outcome

Chosen option: **Report on deficiencies, actions, completion, timeliness, and trends**, because these measures reflect the stated objectives more directly than numeric scores. Analysis will support relevant dimensions such as OSHA establishment, operational resource or site, asset, technology, program, period, question, responsible supervisor, and category where available.

Dashboards should distinguish expected inspections from completed inspections so users can identify missing sites. Outcome reporting should emphasize categorical results, negative responses, repeat failures, and open actions rather than percentages that could imply that partial compliance is acceptable.

Establishment and resource are separate reporting dimensions. Under the accepted platform baseline, Location Structure supplies establishment context. The November 10 proposal instead relates the selected asset to a separately held establishment, directly or through its parent. If that proposal is adopted, use the explicit asset-establishment relationship for establishment aggregation rather than assuming the reporting Location Structure is an OSHA establishment tree. [Call, 0:26:03–0:29:24; PA ADR-009]

Support establishment-oriented views of inspections, inspected asset types and closure states, alongside supervisor/team views of inspection activity and outstanding corrective actions. Inspection completion and action completion remain distinct under [ADR-015](ADR-015-separate-inspection-and-action-lifecycles.md). The asset hierarchy and establishment links provide reporting slices; they do not themselves grant record access. Apply the viewer's authorized application/location security context independently. [Call, 0:30:29–0:31:27]

## Consequences

* Stakeholders can monitor inspection activity and resulting issues.
* Site compliance can be displayed against configured requirements.
* Consistent answer semantics and classifications are essential.
* External-report actions and question-linked internal actions must both be represented.
* Detailed KPI definitions and dashboard layouts remain to be established.
* Resource and establishment master data must remain consistently related.
* Architectural analysis: a changed hierarchy requires reporting reconciliation so organizational roll-ups are not mislabeled as regulatory establishments.

## More Information

Candidate measures include deficiency counts, expected-inspection completion, overdue completion, action status, repeated negative responses, and trends by site or asset. A final KPI catalogue was not approved in the meeting.

Transcript references: 14:12–16:11 and 25:17–30:36 in the Inspections workshop; 0:41:17–0:42:44, 0:55:22–0:55:38, and 1:33:39–1:40:37 in the organizational-structure workshop; integration and inspections workshop 2:14:43–2:23:09.

Additional evidence: [November 10 asset-hierarchy call](<../raw artifacts/meeting_transcripts/2026-11-10-summit-tg-asset-hierarchy-setup.md>), 0:26:03–0:31:27. [Platform Administration ADR-009](<../../platform administration/ADRs/ADR-009-separate-reporting-locations-from-osha-establishments.md>) records the unresolved hierarchy transition; [PA ADR-007](<../../platform administration/ADRs/ADR-007-use-shared-tasks-and-security-aware-reporting.md>) governs shared security-aware reporting.

At 0:31:30–0:32:50, coordinates and later geographic analysis in external tools are conditional possibilities. Data availability must be checked; no Power BI integration, mandatory coordinate fields, native map capability or severity metric is selected or verified. The illustrative word “findings” does not reinstate the formal Finding layer excluded by accepted ADR-005. Detailed KPI formulas, team traversal, dashboard layouts and audiences remain open. Proposed status and the original absence of a decision date are preserved.
