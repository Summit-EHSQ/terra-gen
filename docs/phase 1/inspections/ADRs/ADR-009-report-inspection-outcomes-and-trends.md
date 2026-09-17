---
status: proposed
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

Establishment and resource are separate reporting dimensions. The organizational hierarchy supplies establishment aggregation, while the selected operational resource provides the more granular location and technology context.

## Consequences

* Stakeholders can monitor inspection activity and resulting issues.
* Site compliance can be displayed against configured requirements.
* Consistent answer semantics and classifications are essential.
* External-report actions and question-linked internal actions must both be represented.
* Detailed KPI definitions and dashboard layouts remain to be established.
* Resource and establishment master data must remain consistently related.

## More Information

Candidate measures include deficiency counts, expected-inspection completion, overdue completion, action status, repeated negative responses, and trends by site or asset. A final KPI catalogue was not approved in the meeting.

Transcript references: 14:12–16:11 and 25:17–30:36 in the Inspections workshop; 0:41:17–0:42:44, 0:55:22–0:55:38, and 1:33:39–1:40:37 in the organizational-structure workshop; integration and inspections workshop 2:14:43–2:23:09.
