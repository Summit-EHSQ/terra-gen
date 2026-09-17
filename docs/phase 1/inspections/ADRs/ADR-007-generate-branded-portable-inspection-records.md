---
status: proposed
deciders:
  - Whitney Goller
consulted:
  - Dave McLean
  - Mike Tran
informed:
  - Emma Lister
  - Matthew Futter
primary_application: Inspections
secondary_applications: Document Management
---

# Generate Branded, Portable Inspection Records

## Context and Problem Statement

Completed inspections are compliance records and may be distributed to internal clients, external clients, regulators, or other stakeholders without Intelex access. A browser printout or screen capture would not provide an adequate official record.

## Decision Drivers

* Inspection results are compliance records.
* External recipients may not have Intelex accounts.
* Records must remain readable outside the platform.
* Distributed records should appear complete and professional.
* Relevant inspection evidence and context must be retained.

## Considered Options

* Provide access only through Intelex.
* Use browser printouts or screen captures.
* Generate a structured and branded PDF using Intelex Merge Templates.
* Manually reformat data in a separate document.

## Decision Outcome

Chosen option: **Generate a structured and branded PDF using Intelex Merge Templates**, because the record must support retention and controlled distribution beyond the Intelex user community.

The **Intelex Merge Templates functionality will be used** to generate the portable inspection record from the finalized inspection. The merge template will present relevant inspection information, including checklist responses, evidence, findings, and actions, as determined during detailed report design.

## Consequences

* Records can be shared with parties who lack Intelex access.
* Compliance records have a consistent branded presentation.
* Merge Templates provide an Intelex-native generation mechanism.
* Templates must accommodate conditional questions, attachments, findings, and actions.
* Draft and finalized outputs must be distinguishable.
* Changes after generation may require regeneration or versioning.

## More Information

Retention periods, electronic signatures, PDF versioning, and presentation of photographs were not defined. Detailed design must confirm how child questions, findings, actions, and attachments will be exposed to the Merge Template and where generated files will be stored.

Transcript references: 22:09–23:18.
