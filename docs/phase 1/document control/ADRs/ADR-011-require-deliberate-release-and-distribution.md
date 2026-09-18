---
status: accepted
date: 2026-09-18
deciders:
  - Amy Roth
  - Mike Tran
  - Whitney Goller
consulted:
  - Dave McLean
informed:
  - Matthew Futter
primary_application: Document Control
secondary_applications: Training Management, Intelex Platform Administration
---

# Require Deliberate Release and Distribution

## Context and Problem Statement

After approval, a revision may simply become available, may need notification or acknowledgment, or may require substantive training. Intelex does not determine whether a revision is material, and its revision numbers do not represent major and minor versions.

## Decision Drivers

* Proportionate distribution.
* Explicit acknowledgment or training decisions.
* Owner accountability for revision impact.
* Avoidance of unnecessary tasks and retraining.

## Considered Options

* Automatically release every approved revision.
* Always distribute every revision to all affected users.
* Retain a ready-for-release stage and make distribution decisions deliberately.

## Decision Outcome

Chosen option: **Retain a ready-for-release stage and make distribution decisions deliberately.**

The owner will decide whether to release without a push, distribute a notification, require acknowledgment, or initiate a separate training activity. The reason-for-revision narrative will describe the nature of the change.

When the required response is only to read and acknowledge a controlled document, the acknowledgement will remain in Document Control and will not create a Training Management course completion. The acknowledgement interaction will include approved language explaining what the user is attesting to.

## Consequences

* Distribution can reflect the significance of the revision.
* Routine updates do not automatically create unnecessary work.
* Release requires another owner action and may be delayed.
* Materiality criteria and owner guidance remain to be defined.

## More Information

Transcript references: 02:17:40–02:22:33 and 02:29:09–02:30:32. See Training Management ADR-004 and ADR-013.
