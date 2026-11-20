---
status: proposed
date: 2026-11-10
deciders: []
consulted:
  - Amy Roth
  - Jeremiah Soto
  - Dave McLean
  - Matthew Futter
informed: []
primary_application: Intelex Platform Administration
secondary_applications: Employee Management, Inspections, Document Control, Training Management, Incident Management
---

# Separate Reporting Locations from OSHA Establishments

## Context and Problem Statement

Accepted [PA ADR-001](ADR-001-use-complementary-location-and-business-hierarchies.md) uses a relatively flat establishment-based Location Structure. The November 10 meeting describes a different direction: use the reporting structure available from Paylocity for the Location Structure, retain OSHA establishments in a separate object, and relate employees and assets to establishments independently. Amy supports the direction while discussing security and inspection reporting. [Call, 0:26:03–0:29:24]

The user subsequently confirmed the reporting-based Location Structure and unchanged establishment calculation stored separately from organizational Home Location. Intelex will maintain hierarchy nodes and parent relationships, with Boomi supplying assignments. Document/training audiences remain open. [Follow-up confirmation, decisions 1–4]

This remains a **proposed successor ADR** while consumer and technical bindings are completed. The confirmed choices do not need further business confirmation. PA ADR-001 remains the recorded accepted baseline pending a coordinated supersession; its conflicting establishment-based structure must not be treated as the newly confirmed target. The meeting does not supply a verified regulatory-reporting mechanism for establishments held outside Location Structure.

## Decision Drivers

* Represent the reporting structure described as available from Paylocity. [Call, 0:26:03–0:26:51]
* Keep employee establishment attribution available for regulatory purposes. [Call, 0:26:30–0:27:08]
* Support establishment and asset reporting without making the asset hierarchy a security hierarchy. [Call, 0:27:30–0:31:27]
* Reduce repeated establishment selection when an inspected asset already supplies that context. [Call, 0:27:30–0:29:24]

## Considered Options

* Retain the accepted establishment-based Location Structure.
* Use a reporting-based Location Structure with separately related OSHA establishments — meeting direction.
* Put reporting units, establishments and every asset into one security hierarchy — analyst-derived alternative; not selected in the meeting.

## Decision Outcome

Chosen option: **Use a reporting-based Location Structure with separate OSHA establishment records**, because the meeting identifies organizational placement/security and regulatory attribution as different dimensions. [Call, 0:26:03–0:29:24]

The user confirms that organizational Home Location and the calculated employee OSHA establishment are separate values. Retain the existing ordered establishment calculation unchanged and store its result separately from organizational Home Location. This changes the old establishment-to-HomeLocationCode binding; the new storage property and delivery mechanism remain technical design inputs. [Follow-up confirmation, decisions 1–2]

Maintain organizational hierarchy nodes and parent-child roll-ups within Intelex. Boomi supplies assignments and does not take ownership of the tree. This reaffirms accepted [PA ADR-004](ADR-004-maintain-the-organizational-hierarchy-in-intelex.md). [Follow-up confirmation, decision 4]

Under this direction, an employee's organizational home/login location does not by itself establish the employee's regulatory establishment. Establishment assignment retains its governed business rules. Assets relate directly to an establishment or inherit that context from their parent asset; inspections can derive establishment from the inspected asset. The asset hierarchy supplies operational context and reporting slices and does not independently grant or restrict access. [Call, 0:26:30–0:31:27]

The following must be resolved before this proposal can govern implementation:

* The actual Paylocity source codes, stable identifiers, hierarchy levels and assignment mapping. Ownership is resolved: Intelex maintains nodes/roll-ups and Boomi supplies assignments.
* The exact employee-establishment property and supported integration mechanism, implementing the confirmed separation from organizational Home Location. The [accepted Employee specification](<../../employee management/ADR-001-004-technical-specification-employee-provisioning.md>), sections 10–10.1, currently places the calculated establishment in that property.
* The supported OSHA-reporting binding and Phase 2 incident attribution behavior. Mentioning a separate table does not verify native regulatory behavior.
* The business basis for document applicability and training audiences remains open: organizational unit, OSHA establishment, actual workplace or a combination. Inspection security-location binding, role routing and existing-record transition also require design review. Reporting filters remain distinct from authorization.

The follow-up resolves the business choices stated above. These remaining items are implementation/consumer closure requirements; they do not reopen the confirmed choices.

## Consequences

The following are architectural analysis:

* Reporting-location changes and regulatory establishment changes can be represented independently.
* Existing consumers that equate establishment with Location Structure require explicit mapping and regression review.
* A separate establishment reference cannot be assumed to preserve standard regulatory outputs without validation.
* Mixing this proposal with the accepted employee payload would give HomeLocationCode incompatible meanings.
* Approval requires a coordinated transition, rather than changing the shared hierarchy in isolation.

## More Information

[November 10 follow-up confirmation](<../raw artifacts/2026-11-10-reporting-location-establishment-confirmations.md>) records the user’s exact response and the four referenced questions. Decisions 1, 2 and 4 are confirmed; decision 3 remains open. The ADR remains proposed as a complete record; this does not downgrade the explicit confirmations or imply completed technical validation.

[Call — Summit + TG: Asset Hierarchy Setup, November 10, 2026](<../raw artifacts/meeting_transcripts/2026-11-10-summit-tg-asset-hierarchy-setup.md>): 0:26:03–0:27:08, reporting locations and separate establishments; 0:27:30–0:29:24, asset establishment inheritance; 0:30:29–0:31:27, reporting versus security.

[Reconciliation plan](../../ADR-RECONCILIATION-2026-11-10.md) identifies the intended PA ADR-001 succession and all affected records. No active `supersedes`/`superseded_by` edge or status change is recorded while the transition remains unresolved. If approved, link both records and preserve PA ADR-001 as superseded history in the same change that reconciles its consumers.

Related: [PA ADR-003](ADR-003-separate-employee-home-and-access-assignments.md), [PA ADR-010](ADR-010-consume-a-governed-asset-hierarchy-from-terra-gen.md), [Employee ADR-002](<../../employee management/ADRs/ADR-002-automate-establishment-assignment-for-remote-employees.md>), [Document Control ADR-006](<../../document control/ADRs/ADR-006-use-location-placement-and-shortcuts-for-applicability.md>), [Training ADR-019](<../../training management/ADRs/ADR-019-combine-independent-position-location-and-individual-training-assignments.md>), and [Incident ADR-001](<../../../phase 2/incident management/ADRs/ADR-001-capture-establishment-and-operational-resource.md>). Accepted incident privacy controls remain unchanged.
