---
status: accepted
date: 2026-09-18
deciders:
  - Amy Roth
consulted:
  - Dave McLean
informed:
  - Matthew Futter
primary_application: Document Control
secondary_applications: Intelex Platform Administration
---

# Validate Document Migration through a Representative Pilot and Metadata-Driven Production Load

## Context and Problem Statement

The candidate repository contains hundreds or potentially thousands of documents. Each file requires controlled metadata such as owner, establishment, folder, category, release date, and review settings. Attempting a full migration before validating the configuration and metadata process would make defects costly to correct.

## Decision Drivers

* Validate configuration before the production load.
* Support repeatable bulk migration.
* Exercise lifecycle and approval behavior with representative content.
* Reduce the risk of a large one-time migration.
* Allow final production scope to reflect pilot findings and content readiness.

## Considered Options

* Enter documents manually.
* Perform a single full-volume migration.
* Migrate corporate documents first without a representative pilot.
* Run a representative pilot followed by a metadata-driven production migration.

## Decision Outcome

Chosen option: **Run a representative pilot followed by a metadata-driven production migration.**

Approximately 20–30 documents will first be uploaded to an Intelex staging area and assigned stable identifiers. The pilot will include a cross-section of document types and scopes, including corporate and site-specific examples. The associated metadata workbook will then be populated and loaded so users can exercise revisions, periodic reviews, approvals, and change requests. Pilot content may be discarded before the production load.

The validated staging and metadata process will be used for production migration. A controlled period will be established between file submission and production loading so that source revisions are not omitted. Final production scope and sequencing will be confirmed after the pilot and related governance decisions are sufficiently mature.

## Consequences

* Migration rules can be validated with manageable data volumes.
* Business owners must prepare and quality-check metadata.
* A content-freeze or controlled-change window is required.
* Pilot findings may alter lifecycle, template, or approval configuration.
* Corporate and site content can be sequenced according to readiness rather than a fixed universal rule.

## More Information

This decision supersedes the earlier proposed corporate-first migration sequence in this ADR. Corporate content may still be prioritized operationally, but it is not an architectural prerequisite for site content.

Latest workshop references: 00:50:54–01:02:40.
