---
status: accepted
date: 2026-09-17
deciders:
  - Whitney Goller
  - Mike Tran
consulted:
  - Dave McLean
informed:
  - Emma Lister
  - Matthew Futter
primary_application: Inspections
secondary_applications: Findings, Action Management, Environmental Compliance
---

# Use Inspection Responses and Direct Actions without Formal Findings

## Context and Problem Statement

A negative response identifies a condition requiring explanation and, where configured, corrective action. Externally supplied inspection reports can also identify corrective actions without corresponding Intelex question records. Intelex can insert a separate Finding record between an issue and its actions, but the current and near-term inspection programs do not have a defined finding form, severity model, or root-cause process that justifies the additional step.

## Decision Drivers

* Routine deficiencies should be quick to document and correct.
* Configure for known requirements rather than hypothetical future audits.
* A finding may require multiple actions.
* Issues and actions must remain traceable to their originating response.

## Considered Options

* Create actions directly from deficient answers or external inspection recommendations.
* Require a finding for every deficient answer.
* Support either a direct action or a formal finding with related actions.
* Record findings only as comments.

## Decision Outcome

Chosen option: **Use the negative inspection response, its required comment and attachments, and one or more direct action plans without creating a separate formal Finding record. For externally supplied inspections, create actions directly against the inspection and retain the supplied report as their source context.**

Reports will identify issues by filtering response records for the configured negative answer and including the question, comment, inspection context, related actions, and action status. A future formal audit program may reintroduce Finding records after its classification and investigation requirements are defined.

## Consequences

* Routine issues avoid unnecessary data entry.
* Users do not repeat the issue description on a second form.
* Corrective actions remain related to the response that identified the condition.
* Actions from external inspections remain traceable to the inspection even when no structured question exists.
* Reporting is based on inspection responses rather than a standalone Finding object.
* Formal severity, classification, and root-cause fields are unavailable unless a later program deliberately activates a Finding model.

## More Information

This decision supersedes the earlier proposal to support both direct actions and formal Findings in the current design. Near misses and other events that meet incident criteria are recorded in Incident Management rather than forcing the inspection Finding form to serve as an incident record.

Transcript references: inspections preparation workshop 11:00–16:58; integration and inspections workshop 0:08:37–0:13:27, 0:18:12–0:20:49, 2:35:05–2:45:43, and 2:51:19–2:53:04.
