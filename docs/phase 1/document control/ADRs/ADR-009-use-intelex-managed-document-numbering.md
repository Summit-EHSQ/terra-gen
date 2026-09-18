---
status: proposed
date: 2026-09-18
deciders: []
consulted:
  - Amy Roth
  - Dave McLean
informed:
  - Matthew Futter
primary_application: Document Control
secondary_applications: Intelex Platform Administration
---

# Use Intelex-Managed Document Numbering

## Context and Problem Statement

Existing files contain established identifiers and cross-references. Intelex can preserve those numbers or assign persistent identifiers from an automatic scheme. Immediate replacement of every embedded reference would create substantial migration effort.

## Decision Drivers

* Consistent numbering for future documents.
* Persistent identifiers.
* Searchability by legacy identifiers during transition.
* Practical migration effort.

## Considered Options

* Preserve every legacy number.
* Renumber and update all embedded references before migration.
* Apply Intelex numbering and transition embedded references over time.
* Maintain multiple sequences by domain or document class.

## Decision Outcome

Chosen option: **Apply Intelex numbering and transition embedded references over time.**

A simple automatic scheme is preferred to several domain-specific sequences. Legacy numbers will be retained in explicit searchable metadata or another governed legacy-identifier field. Existing revision tables may remain as pre-Intelex historical context, while subsequent revisions will be recorded through Intelex. Embedded references should be updated in bulk where practical or during later controlled reviews.

The exact numbering format is not yet decided.

## Consequences

* Future identifiers are consistent and automatically assigned.
* Migration does not depend on rewriting every file first.
* Documents may temporarily show both legacy and Intelex identifiers.
* Migration metadata must include the legacy identifier and relevant historical release context.
* A migration mapping and final numbering specification are required.

## More Information

Transcript references: 01:27:52–01:34:36.
