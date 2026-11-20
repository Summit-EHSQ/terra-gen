---
status: proposed
date: 2026-10-23
last_revised: 2026-11-10
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

# Pin MARCOM Content to Training Course Versions

## Context and Problem Statement

The October 23 call proposed distributing updated provider packages automatically. The later [user-provided update decision](<../raw artifacts/2026-10-23-marcom-course-version-pinning-decision.md>), Supplied decision paragraphs 2–5, replaces that proposal. The supplied platform context is that learners see the latest Training Management Course Version, even when assignment originated against an older version. Automatically creating a Course Version from incoming provider content would therefore change learner content without a deliberate decision by the client's training team. This behavior is user-provided context, not a recorded independent tenant test.

The November 10 client discussion supports a notification followed by deliberate adoption: make new provider content available in the library, notify the client contact, then let the training team adopt it for the course. Amy expects routine updates usually to be accepted but clarifies that she is not asking for automation. The provider/distributor mechanism for detecting and delivering releases remains unresolved. [Call, 0:53:42–0:57:49]

## Decision Drivers

* Keep adoption of updated MARCOM content under the training team's control. [Update decision, paragraphs 3–5]
* Retain the exact provider release/file selected for each Training Course Version. [Update decision, paragraph 4]
* Use existing Training Management course-version behavior and learner-evidence functionality. [Update decision; prior user scope clarification]
* Preserve manual-upload and catalogue-sourced content setup. [October call, 0:03–2:56]
* Make available updates visible to the client without changing assigned learning content before adoption. [Call, 0:56:02–0:57:49]

## Considered Options

* Automatically replace linked packages or create Training Course Versions when MARCOM content changes — earlier proposal, replaced by the update decision.
* Pin the selected provider release/file and adopt updates through a manually created Training Course Version — selected.
* Manually upload every provider package independently — analyst-derived alternative.

## Decision Outcome

Chosen option: **Pin the exact MARCOM Content Release and its file when the MARCOM Course selection is initially set or changed; adopt later provider content through a user-created Training Course Version.** [Update decision, paragraphs 4–5]

The proposed refresh handoff is **notify, then deliberately adopt**. Once a usable new release is available in the library, notify the designated client training contact so the team can decide to use it. Matthew is used as the example contact in the meeting; no permanent production recipient or new security role is approved. Provider-side detection, ingestion/publication ownership and the notification channel/trigger remain to be defined under [ADR-011](ADR-011-establish-an-ongoing-marcom-content-refresh-process.md). A repeatable notification handoff is the direction, not a claim that a feed or notification is implemented. [Call, 0:53:42–0:54:45; 0:56:16–0:57:49]

The author selects a language-specific MARCOM Catalogue Entry through Training Course Version.MARCOM Course. On an eligible save, the system reads that Entry's usable Current Release and stores it as Resolved MARCOM Release together with that release's SCORM file. The selector remains a relationship to the stable Entry; the resolved relationship captures the specific provider version. The course uses the file from that pinned release, not a live lookup of the catalogue's latest package.

Run package resolution on Create and Update **only when MARCOM Course is not null and that field is changed (`ISCHANGED`)**. The initial non-empty selection on Create is the initial change. On Update with the same MARCOM Course, leave the pinned release/file unchanged, including an ordinary save after a newer release arrives. Internal changes to generated fields must not re-enter resolution. Exact tenant syntax and Create-time `ISCHANGED` behavior remain implementation confirmation points; no executable expression is invented here.

Changing an Entry's Current Release or importing/publishing a newer provider record neither modifies existing Training Course Versions nor creates new ones. There is no catalogue-driven course-update handler, successor-version generator, refresh action, or update-retry queue. To adopt the latest release of the same MARCOM course, the training user manually creates a new Training Course Version, selects the MARCOM Course, and saves. A changed MARCOM Course selection on an otherwise editable version follows the same guarded resolution rule and existing native edit restrictions.

Normal manual-source/no-e-learning clearing and replacement validation remain applicable, but they cannot refresh an unchanged non-null MARCOM selection. A failed eligible resolution preserves the previously saved working package/reference pair. Latest means the Entry's explicitly designated usable Current Release at the eligible save, not a copyright date or filename sort. Package arrival alone does not establish usability or approval.

Interpret the meeting's confirmation to use a newer release through the existing user-created Course Version pattern above. It does not select a new one-click confirmation action, automatic refresh, old-content deletion or learner-attempt restart behavior. Future course takers are described as receiving the adopted version; exact effects on in-progress attempts remain a validation question. Preserve earlier provider releases and pinned versions rather than removing them as a prerequisite to adoption. [Call, 0:56:16–0:57:49; October 23 update decision; ADR-013/016]

## Consequences

* Existing course versions retain their selected provider package even when the catalogue advances.
* The training team controls adoption by manually creating a Course Version; ordinary saves cannot silently take a newer package.
* A newer-release comparison can inform the team of available content, but a difference is intentional and must not trigger repair or automatic refresh.
* Retained provider releases/files support the pinned reference. Existing Training Management owns learner attempts, completions, and history; no additional evidence object is needed.
* Provider release detection, ingestion, and catalogue publication responsibility remain separate concerns under ADR-011/016/018.
* Architectural analysis: content may be available in the provider library before the client adopts it; missing notification or unclear contact ownership can delay that adoption without justifying automatic replacement.

## More Information

[Update decision](<../raw artifacts/2026-10-23-marcom-course-version-pinning-decision.md>), Supplied decision paragraphs 2–5, is the current direction. [Pinning reconciliation](../ADR-RECONCILIATION-2026-10-23-PINNING.md) records the draft revisions and removed automation. The ADR ID and proposed status are retained; the filename/title change reflects the revised outcome, not a new ADR or implementation claim.

[MARCOM Course Catalog Technical Specification](../MARCOM-COURSE-CATALOG-TECHNICAL-SPECIFICATION.md) and [Implementation Plan](../MARCOM-COURSE-CATALOG-IMPLEMENTATION-PLAN.md) define the pinned selection contract and its guarded Create/Update implementation. Earlier automatic propagation in the [October 23 call](<../raw artifacts/meeting_transcripts/2026-10-23-terra-gen-training-management-marcom-requirements-knowledge-transfer.md>), 0:03–2:56 and 16:47–17:45, is historical and no longer the selected design.

At 8:37–11:32 and 17:45–18:21, participants question what adaptive learning means and whether it belongs to the package or an external LMS. Later evidence in the [supplied metadata guide](<../raw artifacts/MARCOM Adaptive Learning Course File Name and Metadata Guide 09 10 26.xlsx>), `English language!T2` and `Spanish language!U2`, describes chapter pretesting and skipping mastered chapters within the SCORM offering. The separate hosted descriptions (`English language!U2`, `Spanish language!V2`) describe MARCOM's LMS capabilities. The earlier suggestion that adaptive behavior must be external to SCORM is therefore not retained as a design premise. This is provider-described intent, not a target-environment test; validate English and Spanish package navigation, resumption, and completion/results under ADR-010. No new adaptive-learning engine, translation equivalence, or hosted-LMS integration is selected.

Related: ADR-011, ADR-013, ADR-016, and ADR-018. No provider compatibility result, learner-history implementation, or automatic provider feed is inferred from this decision.

Additional evidence: [November 10 asset-hierarchy call](<../raw artifacts/meeting_transcripts/2026-11-10-summit-tg-asset-hierarchy-setup.md>), 0:51:27–0:53:42, reported library deployment and blocked package loading; 0:53:42–0:57:49, unresolved provider refresh and manual adoption; 0:57:49–1:02:00, packaged-quiz validation. These reports do not independently establish deployed behavior or a successful adaptive-learning test. [Reconciliation plan](../../ADR-RECONCILIATION-2026-11-10.md) records the evidence gaps. Original date, ID, Create/Update change guard and proposed status are retained.

For the reported custom SCORM quiz issue, the final clarification is to upload the complete package with its embedded assessment, not recreate its questions in Quiz Builder. Validate both failed and passed attempts and the recorded completion/result before adoption under accepted [ADR-010](ADR-010-validate-existing-custom-learning-packages-before-adoption.md). MARCOM adaptive navigation, resumption and result behavior likewise remain target-environment checks; the conversation supplies no successful test result or new supported SCORM-version determination.
