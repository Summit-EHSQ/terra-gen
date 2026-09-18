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

# Classify Documents with Independent Controlled Taxonomies

## Context and Problem Statement

Users need to find documents by organizational applicability, document class, and subject domain. Repeating these dimensions in one nested folder tree would duplicate concepts and make classification difficult to maintain.

## Decision Drivers

* Searchability and browsing.
* Normalized, reusable classifications.
* Controlled values rather than free-form tags.
* Avoidance of duplicated nested folder structures.

## Considered Options

* Use one conventional nested folder tree.
* Allow user-created folders and free-form tags.
* Use independent administrator-managed classification dimensions.

## Decision Outcome

Chosen option: **Use independent administrator-managed classification dimensions.**

Each document will be classified by organizational location, folder or document class, and document type or business domain. Initial folder classes are policies, procedures, work instructions, and forms. The dimensions operate as independent filters rather than levels of one hierarchy.

A second organizational hierarchy will become a fourth property only if Platform Administration validates its source and application use case.

## Consequences

* Each classification concept is maintained once and combined at search time.
* Users cannot create uncontrolled categories.
* Registration requires users to understand several metadata dimensions.
* Final taxonomy values and stewardship remain implementation tasks.

## More Information

Transcript references: 00:41:10–01:05:03 and 01:06:00–01:11:38. See Platform Administration ADR-001 and ADR-002.
