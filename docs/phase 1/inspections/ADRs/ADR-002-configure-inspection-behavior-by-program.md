---
status: accepted
date: 2026-09-17
deciders:
  - Whitney Goller
  - Mike Tran
consulted:
  - Dave McLean
  - Matthew Futter
informed:
  - Emma Lister
primary_application: Inspections
secondary_applications: Action Management, Document Management, Environmental Compliance
---

# Configure Inspection Behavior by Inspection Program

## Context and Problem Statement

The initial health and safety, environmental compliance, and office EH&S inspection programs share a common application foundation but require identifiable program groupings, potentially different checklists, and selected workflow variations. The application must also record third-party inspections and audits whose detailed checklists remain in external systems and are received as completed reports. Additional programs are expected later, so these differences should not be embedded directly in checklist-specific application logic.

## Decision Drivers

* Programs have different governance and review requirements.
* Workflow, equipment, frequency, and access requirements may vary.
* External inspections must be retained without recreating a third party's checklist.
* The form should show only fields relevant to the selected inspection type.
* Future programs must be introduced without rebuilding the application.
* Unnecessary configuration switches increase administrator training and inconsistency.

## Considered Options

* Hard-code behavior for each initial checklist.
* Apply one rule set to every inspection.
* Configure reusable behavior at the inspection-program level.
* Create a separate application for each program.
* Record external reports outside Inspections and track only their actions in Intelex.

## Decision Outcome

Chosen option: **Represent each inspection program as an inspection type containing one or more checklists and selected program-level behavior**, because present and future programs require different combinations of common capabilities.

The inspection type will govern its checklist collection, review rules, review due period, site- or equipment-reference behavior, frequency rules, access, reporting identity, and whether the inspection is internally executed or externally supplied. Controls that the latest workshop established as universal—checklist completion validation, enabled sections, hidden numeric scoring, and the current no-formal-Finding pathway—will be defaulted and hidden rather than left as routine program choices.

For an externally supplied inspection, the form will omit checklist selection and execution, capture the external party and inspection date, provide a report upload, and allow corrective actions to be entered after the record is saved. Review may still be enabled by type. Internal inspections will continue to capture structured checklist responses and question-level evidence.

## Consequences

* New programs can reuse the same application foundation.
* Third-party inspections can appear in the same inventory and reporting structure as internal inspections.
* Administrators can activate only relevant program-level capabilities.
* Program configuration becomes an architecturally significant part of the application.
* Validation is required to prevent incomplete or contradictory settings.
* Externally supplied reports will not provide question-level data unless it is separately entered.
* Universal controls are simpler to administer but require a configuration change if a future defined program establishes a contrary requirement.

## More Information

The transcript supports configuration on the inspection-type record and does not establish a separate Preferences object. The three initial inspection types are project health and safety, project environmental compliance, and office EH&S.

Transcript references: inspections preparation workshop 19:31–21:22 and 26:08–27:38; integration and inspections workshop 0:06:34–0:12:12, 2:01:06–2:17:26, and 2:30:03–2:35:05.
