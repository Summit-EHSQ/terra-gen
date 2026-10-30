---
status: proposed
date: 2026-10-28
deciders: []
consulted:
  - Dave McLean
  - Paul Niemer
  - Matthew Futter
  - Vanessa Newmarker
informed: []
primary_application: Training Management
secondary_applications: Employee Management, Integration Management, Intelex Platform Administration
---

# Combine Independent Position, Location, and Individual Training Assignments

## Context and Problem Statement

Employees may share a position code while working at different locations. Some training depends on the position, while other training applies to everyone at a particular location regardless of position.

The call initially explored a combined position/location profile key and a custom location-overlay model. It concluded that independent position-based and location-based assignment streams could address the described need without changing the position-code feed. Individual assignment remains available for exceptions. [Call, 03:07–13:12, 25:27–31:53, 54:28–54:47]

## Decision Drivers

- Reuse common position-based training bundles.
- Assign site-specific requirements independently of employee position.
- Use the existing position and location inputs.
- Avoid maintaining a separate full profile for each position/location combination when independent applicability rules suffice.
- Work within the existing design commitment rather than adding the discussed custom location-overlay logic. [Call, 13:07–13:38, 18:46–21:37, 28:00–31:53]

## Considered Options

- Combine position-code-mapped workgroups, location-based course assignments, and individual assignments.
- Send a unique combined position/location value and maintain each resulting profile independently.
- Add custom logic combining a universal position profile with location-specific additions or modifications.
- Assign all requirements individually — analyst-derived alternative.

## Decision Outcome

Chosen option: **Combine independent position-based, location-based, and individual training assignments**, because the client identified its described requirements as separate assignment streams rather than a course variation selected by the intersection of position and location. [Call, 30:21–31:53]

Position codes continue to select reusable workgroups and their courses under [ADR-001](ADR-001-assign-training-requirements-through-job-code-mapped-workgroups.md). Courses that apply to everyone at a location are configured against that location. Specific exceptions may be assigned directly to an employee.

Do not concatenate position and location into the provisioning key or implement the discussed custom location-overlay engine for this direction.

This approach does not resolve a requirement that depends on a particular position/location intersection. Any such cases must be identified and assessed before assuming the independent streams cover them.

Location-based configuration is conditional on confirming that the employee location used for assignment represents the intended training audience. The call identifies the integrated location as the establishment; it does not define a replacement location model. [Call, 54:47–55:16]

## Consequences

The following are architectural analysis:

- Position-based bundles can be reused without copying them for every site.
- Location-only courses can be maintained separately from position profiles.
- Direct assignments introduce an administrative responsibility for exceptions.
- Assignment reconciliation must verify how overlapping sources are handled; this call does not demonstrate native deduplication across all three routes.
- Establishment mappings may require further design review where administrative establishment and actual work location differ.
- Transfer, position-change, and assignment-removal behavior remains to be reconciled with the initial-only provisioning design.

## More Information

[Call — Terra-Gen Training Setup Q&A, October 28, 2026, 3:30 PM ET](<../raw artifacts/meeting_transcripts/2026-10-28-terra-gen-training-setup-qa.md>):

- 03:07–13:12: composite key and custom logic alternatives.
- 24:17–27:37: incomplete exception analysis; seven is not a confirmed total.
- 28:00–31:53: independent position and location streams.
- 53:38–55:16: final confirmation and establishment dependency.

Related decisions:

- [Training Management ADR-001](ADR-001-assign-training-requirements-through-job-code-mapped-workgroups.md): position-code-mapped workgroups.
- [Employee Management ADR-002](<../../employee management/ADRs/ADR-002-automate-establishment-assignment-for-remote-employees.md>): establishment assignment.
- [Platform Administration ADR-001](<../../platform administration/ADRs/ADR-001-use-complementary-location-and-business-hierarchies.md>) and [ADR-003](<../../platform administration/ADRs/ADR-003-separate-employee-home-and-access-assignments.md>): hierarchy and employee attribution.

The described location-assignment capability requires target-configuration verification; the transcript is not an implementation test.
