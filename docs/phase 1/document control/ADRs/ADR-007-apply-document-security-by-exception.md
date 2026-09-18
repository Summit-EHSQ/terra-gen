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
secondary_applications: Intelex Platform Administration
---

# Apply Document Security by Exception

## Context and Problem Statement

Most controlled policies should be easy for applicable employees to find, while a smaller set of legal, source-training, or otherwise sensitive content requires restricted access. The product also provides an unauthenticated public portal that is not required by the identified use cases.

## Decision Drivers

* Broad access to applicable controlled documents.
* Least-complex permission administration.
* Protection of exceptional sensitive content.
* Avoidance of unintended public access.

## Considered Options

* Restrict every folder and grant access individually.
* Make all content visible without exceptions.
* Use normal organizational visibility and restrict designated folders through managed groups.
* Enable the unauthenticated public portal.

## Decision Outcome

Chosen option: **Use normal organizational visibility and restrict designated folders through managed groups.**

Additional folder security will be applied by exception. Restricted folders will normally grant access to managed groups rather than many individual users. The unauthenticated public document portal will be disabled unless a later approved use case requires it. Controlled external links remain available for individual sharing needs.

## Consequences

* Routine access remains simple and searchable.
* Sensitive content can be segregated without duplicating the repository.
* Group membership and restricted-folder placement require governance.
* Incorrect placement could expose a document too broadly.

## More Information

Transcript references: 00:35:35–00:39:03 and 01:54:53–01:56:26.
