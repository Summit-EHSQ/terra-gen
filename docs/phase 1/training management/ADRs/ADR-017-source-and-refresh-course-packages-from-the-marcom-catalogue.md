---
status: proposed
date: 2026-10-23
deciders: []
consulted:
  - Dave McLean
  - Khurram Agha
  - Edvert Colegio
  - Ethan Hung
informed: []
primary_application: Training Management
secondary_applications: ""
---

# Source and Refresh Course Packages from the MARCOM Catalogue

## Context and Problem Statement

The call proposes selecting MARCOM content during training course-version setup and cascading provider revisions to all associated courses so learners receive current content. This adds a managed source alongside manual package upload. The historical-content requirement in ADR-013 must also be addressed. [KT, 0:03–2:56; 16:47–17:45; ADR-013]

## Decision Drivers

* Allow course authors to select manual upload or a MARCOM library source. [KT, 0:03–2:56]
* Pull the latest provider package when the link is selected. [KT, 0:03–2:56]
* Propagate new provider content across associated client courses. [KT, 0:03–2:56; 16:47–17:45]

## Considered Options

* Link a stable catalogue entry and automatically refresh associated course packages.
* Pin each course to a provider revision and refresh it manually (analyst-derived alternative).
* Manually upload all packages to client course versions (analyst-derived alternative).

## Decision Outcome

Chosen option: **Link course versions to a stable MARCOM catalogue entry and cascade the latest package to associated courses**, because the stated direction is to keep provider-backed learning content current without reselecting every course. [KT, 0:03–2:56; 16:47–17:45]

During course-version setup, the author indicates whether the course has e-learning content. If so, the author chooses manual upload or selection from the MARCOM library. The library choice exposes a catalogue selector. The relationship targets the main catalogue entry, rather than a specific provider revision, and selection pulls the latest associated package onto the training course version. A new provider revision should update all courses linked to that entry for use going forward. [KT, 0:03–2:56; 16:47–17:45]

The metadata follow-up refines the target: select one **language-specific Catalogue Entry**, using title, language, industry, topic, and Product Code to disambiguate it. Resolve the entry's explicitly designated usable **Current Release**, and retain a Resolved Release reference with the training course version's package. The catalogue-source relation remains to the stable Entry, so it can follow later releases. A change to that Entry's Current Release propagates only to courses linked to that Entry; it must not substitute another language or industry variant based on a shared three-digit ID. Manual-upload courses remain independent. These are analyst-proposed rules based on [ADR-016's metadata model](ADR-016-use-a-reusable-marcom-content-catalogue.md), not verified Intelex functionality.

Latest means the explicitly designated Current Release, not the largest ID, newest copyright month, or lexically greatest filename. An incomplete draft release cannot replace the current usable package. The catalogue supplies the selected package to the training course version; existing Training Management functionality owns learner attempts, completions, and historical evidence. No additional evidence object or attempt/completion integration is required for the catalogue. The update implementation, failure/retry behavior, publication permissions, and whether propagation creates a new training course version remain open. Validate package propagation against existing Training Management behavior without extending the catalogue into learner-evidence management. [Metadata, English A,D,G,I,L; Spanish A,E,H,J,M; analyst design; user scope clarification, 2026-10-23]

## Consequences

The following are architectural analysis:

* Central package changes affect multiple client course versions, making failed or partial propagation operationally significant.
* Manual and catalogue-backed sources require distinct configuration behavior.
* Updating an attachment without retaining the content used historically could prevent audit reconstruction; the mechanism remains unresolved rather than implicitly permitting historical overwrite.
* Provider release detection remains a separate upstream dependency under ADR-011.

## More Information

[MARCOM Course Catalog Technical Specification](../MARCOM-COURSE-CATALOG-TECHNICAL-SPECIFICATION.md) defines the proposed source-selection fields, publication/propagation handlers, failure boundaries, permissions, and acceptance criteria. Native course-version update behavior remains a tenant-verification gate; no learner-evidence functionality is added.

[KT — MARCOM Requirements Knowledge Transfer, October 23, 2026](<../raw artifacts/meeting_transcripts/2026-10-23-terra-gen-training-management-marcom-requirements-knowledge-transfer.md>), 0:03–2:56 and 16:47–17:45.

At 8:37–11:32 and 17:45–18:21, participants question what adaptive learning means and whether it belongs to the package or an external LMS. Later evidence in the [supplied metadata guide](<../raw artifacts/MARCOM Adaptive Learning Course File Name and Metadata Guide 09 10 26.xlsx>), `English language!T2` and `Spanish language!U2`, describes chapter pretesting and skipping mastered chapters within the SCORM offering. The separate hosted descriptions (`English language!U2`, `Spanish language!V2`) describe MARCOM's LMS capabilities. The earlier suggestion that adaptive behavior must be external to SCORM is therefore not retained as a design premise. This is provider-described intent, not a target-environment test; validate English and Spanish package navigation, resumption, and completion/results under ADR-010. No new adaptive-learning engine, translation equivalence, or hosted-LMS integration is selected.

Related: [ADR-011](ADR-011-establish-an-ongoing-marcom-content-refresh-process.md), [ADR-013](ADR-013-version-training-content-for-audit-traceability.md), and [ADR-016](ADR-016-use-a-reusable-marcom-content-catalogue.md). Status remains proposed pending review of the direction and resolution of these boundaries.
