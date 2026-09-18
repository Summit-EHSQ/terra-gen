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
secondary_applications: Microsoft 365
---

# Author Externally and Control Release Candidates in Intelex

## Context and Problem Statement

Drafting may require simultaneous editing, redlining, tracked changes, and file-specific authoring tools. Document Control can distribute copies for review but is not a general collaborative-authoring platform.

## Decision Drivers

* Effective collaboration during drafting.
* Clear distinction between working drafts and controlled revisions.
* Formal approval and release evidence.
* Support for Word, PDF, CAD, and other file types.

## Considered Options

* Perform all drafting and collaboration in Document Control.
* Keep documents outside Intelex until after release.
* Author externally and submit a release candidate for formal control.

## Decision Outcome

Chosen option: **Author externally and submit a release candidate for formal control.**

Authors will collaborate and reconcile changes in the appropriate external tool. When the content is sufficiently mature, the owner will register it or initiate an Intelex revision and use Document Control for any auditable review, formal approval, rejection handling, and release.

Editable source documents will be retained where available, and Intelex will generate normal viewable PDFs from supported sources. Fillable PDFs may remain as exceptions where their Adobe-specific behavior is required. Static signature blocks will be removed from document classes prepared for Intelex-managed approval; release dates, approvers, and revision information may instead be exposed through system metadata and merge fields. Pre-migration reformatting may be phased by document class rather than required for the entire repository.

## Consequences

* Authors retain effective collaborative tools.
* Working drafts are not mistaken for released revisions.
* The owner must transfer the correct release candidate into Intelex.
* Draft history and parallel copies remain outside the controlled repository.
* Some migrated documents may retain legacy formatting until their next controlled revision.
* Fillable-PDF behavior requires separate validation.

## More Information

Transcript references: 00:23:02–00:27:19 and 02:06:15–02:17:26.
