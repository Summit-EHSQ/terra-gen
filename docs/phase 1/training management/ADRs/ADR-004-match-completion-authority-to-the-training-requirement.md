---
status: proposed
date: 2026-09-08
deciders: []
consulted:
  - Vanessa Newmarker
  - Whitney Goller
  - Dave McLean
informed: []
primary_application: Training Management
secondary_applications: Document Control, Competency Management
---

# Match Completion Evidence and System of Record to the Requirement

## Context and Problem Statement

The curriculum includes independent learning, document review, facilitated training, and practical evaluations. These activities require different evidence and different parties to confirm completion. The Document Control workshop further established that a simple read-and-attest obligation is a document-distribution outcome rather than training in the strict sense.

## Decision Drivers

* Self-paced content can validate successful completion.
* Some policy reviews require employee acknowledgement.
* Facilitated training can require instructor-recorded results.
* Practical requirements can require another person's sign-off.
* The system of record should remain aligned with the activity being evidenced.

## Considered Options

* Use a completion mechanism appropriate to each requirement.
* Require administrator or instructor sign-off for every activity.
* Allow employee self-attestation for every activity.
* Model every document acknowledgment as a Training Management course.

## Decision Outcome

Chosen option: **Use a completion mechanism and system of record appropriate to each requirement**, because the evidence needed for e-learning, document review, facilitated instruction, and practical evaluation differs.

A simple obligation to read a controlled document and attest that it was read will use Document Control distribution and acknowledgment. It will not create a Training Management course completion. Training Management will remain the system of record when the activity includes a quiz, SCORM package, structured instruction, scheduled retraining, or another substantive learning requirement. Instructor and authorized-evaluator results remain applicable to facilitated and practical requirements.

Competency Management will remain the system of record for qualification evidence and status. A Training Management completion may be reviewed as evidence by a qualification administrator, but it will not directly set qualification status in the initial architecture.

Acknowledgment and training records may be presented together through reporting, but remain separate record types.

## Consequences

* Completion evidence can reflect the nature of the requirement.
* Self-paced activities can be completed without routine administrator intervention.
* Human-controlled evaluations require appropriate authority and access configuration.
* Requirements containing multiple completion components need explicit satisfaction rules.
* Simple acknowledgments remain traceable to the exact controlled-document revision.
* A complete employee evidence history may require a combined dashboard or more than one report.
* Acknowledgment records do not prove that the employee opened or read the file before attesting.

## More Information

Training-preparation transcript references: 24:34–26:14, 26:45–29:46, 33:44–35:03, and 51:20–53:16. Document Control workshop references: 02:20:55–02:30:32 and 02:51:34–02:52:26.

No universal quiz pass threshold or detailed permission matrix was agreed. Document-specific acknowledgment text is not supported by the discussed global text setting. See ADR-003, ADR-006, ADR-008, Document Control ADR-003, and Document Control ADR-011.
