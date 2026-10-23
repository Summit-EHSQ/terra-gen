# Terra-Gen Solution Design Documentation

This directory contains the governed solution-design record for the Terra-Gen Intelex implementation. It preserves architectural decisions, the evidence supporting those decisions, and the history of material documentation changes.

The current documentation covers Phase 1 design across Document Control, Employee Management, Inspections, Intelex Platform Administration, and Training and Competency Management. Phase 2 currently contains the initial Incident Management design.

## How to Use This Documentation

- To understand the current design for an application, start with its architecture decision records (ADRs) in the [documentation map](#documentation-map).
- To verify why a decision was made, review the transcript references in the ADR's **More Information** section and then consult the corresponding source artifact.
- To distinguish an approved direction from an unresolved proposal, check the ADR's `status` and `date` metadata.
- To see how the documented baseline has evolved, consult the [Phase 1 change log](CHANGELOG.md).
- To review change orders, requested enhancements, and discussed alternatives across the available meetings, consult the [transcript change register](../change-orders-and-requests.md). It distinguishes design agreement from commercial authorization.
- To identify work that still requires validation or detailed design, review proposed ADRs and the [known gaps and open design areas](#known-gaps-and-open-design-areas).

## Documentation Status

The working Phase 1 collection currently contains 60 active ADRs: 36 accepted and 24 proposed. It also retains one superseded Platform Administration ADR for history. Phase 2 currently contains three Incident Management ADRs: one accepted and two proposed.

| Domain | Accepted | Proposed | Superseded | Active | Files |
| --- | ---: | ---: | ---: | ---: | ---: |
| Document Control | 10 | 2 | 0 | 12 | 12 |
| Employee Management | 5 | 1 | 0 | 6 | 6 |
| Inspections | 11 | 6 | 0 | 17 | 17 |
| Intelex Platform Administration | 4 | 3 | 1 | 7 | 8 |
| Training and Competency Management | 6 | 12 | 0 | 18 | 18 |
| **Phase 1 total** | **36** | **24** | **1** | **60** | **61** |

These counts describe the current repository contents and should be updated whenever ADRs are added, removed, or change status. The phase change log is the chronological record and may temporarily describe an earlier baseline while a documentation update is in progress.

## Documentation Map

### Phase 1

| Domain | Scope | Decisions | Source artifacts |
| --- | --- | --- | --- |
| Document Control | Controlled-document administration, classification, applicability, security, authoring, numbering, approval, release, distribution, and migration | [Component overview](<document control/README.md>) | [Browse meeting transcripts](<document control/raw artifacts/meeting_transcripts/>) |
| Employee Management | Employee integration, pre-hire provisioning, identity, employee profiles, and establishment assignment | [Component overview](<employee management/README.md>) | [Browse meeting transcripts](<employee management/raw artifacts/meeting_transcripts/>) |
| Inspections | Program configuration, mobile execution, review, corrective actions, reporting, asset context, and migration from SafetyCulture | [Component overview](<inspections/README.md>) | [Browse meeting transcripts](<inspections/raw artifacts/meeting_transcripts/>) |
| Intelex Platform Administration | Organizational and location structures, record visibility, workflow roles, and controlled support access | [Component overview](<platform administration/README.md>) | [Browse meeting transcripts](<platform administration/raw artifacts/meeting_transcripts/>) |
| Training and Competency Management | Training assignments, recurrence, delivery methods, qualifications, content governance, and historical records | [Component overview](<training management/README.md>) | [Browse meeting transcripts](<training management/raw artifacts/meeting_transcripts/>) |

See the [Phase 1 change log](CHANGELOG.md) for additions, revisions, removals, and the recorded baseline at each documentation update.

### Phase 2

| Domain | Scope | Decisions | Source artifacts |
| --- | --- | --- | --- |
| Incident Management | Incident attribution, privacy-aware access, and the initial boundary for contractor participation | [Component overview](<../phase 2/incident management/README.md>) | [Browse meeting transcripts](<../phase 2/incident management/raw artifacts/meeting_transcripts/>) |

See the [Phase 2 overview](<../phase 2/README.md>) for the current scope and status.

## Cross-Domain Architecture

Several decisions form shared foundations or cross-application boundaries across the phases:

- Document Control governs controlled content, applicability, approval, release, and distribution used by other applications.
- Employee data supplies identity, position, profile, establishment, and employment-status inputs used across Intelex.
- Platform hierarchies provide shared establishment and operational-resource context for security, workflow, inspections, incidents, and reporting.
- Location-scoped roles support workflow routing without embedding named individuals in application configuration.
- Inspection responses may create corrective actions, while near misses that meet incident criteria belong in Incident Management.
- Training Management provides the course and completion layer beneath sequenced qualifications in Competency Management.
- Governed classifications and relationships enable reporting across applications without collapsing legally or operationally distinct concepts.

This overview is an orientation aid. The linked ADRs remain authoritative when more detail is required.

## Architecture Decision Records

### What an ADR Represents

An ADR records a consequential design choice together with its context, decision drivers, considered alternatives, outcome, consequences, and supporting evidence. ADRs preserve both the selected direction and material uncertainty so later design work can distinguish established architecture from unresolved implementation detail.

ADR numbers are scoped to a domain. For example, Inspections ADR-001 and Training Management ADR-001 are independent records.

### Status Definitions

| Status | Meaning |
| --- | --- |
| `proposed` | A supported direction that still requires approval, validation, or resolution of material design questions. |
| `accepted` | An approved direction that governs subsequent design and implementation. |
| `superseded` | A historical decision replaced by a newer ADR. The replacement should be identified. |
| `deprecated` | A retained historical decision that is no longer recommended for new work. |
| `rejected` | An option that was explicitly considered and not adopted. |

Only `proposed` and `accepted` are used by active ADRs. Platform Administration ADR-002 is retained as `superseded`; the other historical statuses are not currently used.

### ADR Metadata and Content

ADRs use YAML front matter and the MADR structure. Each record should include:

- `status`
- `date`, using `YYYY-MM-DD` or `null` when no decision date has been established
- `decision-makers`
- `consulted`
- `informed`
- application metadata identifying the relevant Intelex application or domain
- **Context and Problem Statement**
- **Decision Drivers**
- **Considered Options**
- **Decision Outcome**
- **Consequences**
- **More Information**, including traceable source references and related ADRs where applicable

A `null` date means that the decision date has not been established; it does not by itself change the ADR's status.

## Source Artifacts and Traceability

Meeting transcripts under `raw artifacts/meeting_transcripts` are primary source artifacts. ADRs cite relevant transcript timestamps in their **More Information** sections so reviewers can trace each direction to its supporting discussion.

Some workshops cover several applications. An identical transcript may therefore appear under more than one domain to keep the evidence discoverable from each affected application. These copies represent the same source artifact and should remain byte-for-byte identical. When adding or correcting a shared transcript, update every domain copy in the same change and verify that their contents match.

Source artifacts should follow these rules:

- Preserve the supplied source content; do not silently rewrite the evidentiary record.
- Add YAML metadata for the meeting title, known date and time, participants, and source.
- Use filenames beginning with the meeting date in `YYYY-MM-DD` format.
- Record an unknown value explicitly instead of inferring it.
- Put interpretation and design conclusions in ADRs, not in the raw transcript.

## Repository Conventions

The documentation hierarchy follows this pattern:

```text
docs/
  README.md
  phase <number>/
    README.md
    CHANGELOG.md
    <domain>/
      ADRs/
        ADR-NNN-<decision-slug>.md
      raw artifacts/
        meeting_transcripts/
          YYYY-MM-DD-<meeting-slug>.md
```

Non-documentation test content is stored separately under `content/`. The current repository contains two supplied packaged-learning ZIP files under `content/phase 1/training management/`; they support the compatibility validation described by Training Management ADR-010.

Apply the following conventions when extending it:

- Keep ADR numbers sequential within each domain.
- Use lowercase, hyphenated filenames while retaining title case in document headings.
- Rename an ADR file when its decision title changes materially, unless preserving an external link requires the old path.
- Use repository-relative Markdown links and verify them before review.
- Express dates as `YYYY-MM-DD`.
- Refer to applications and business concepts consistently with their established ADR terminology.
- State unresolved details explicitly; do not turn workshop possibilities into accepted requirements.
- Reference related ADRs when a decision supplies a shared foundation, creates a dependency, or establishes an application boundary.
- Do not remove superseded decisions solely to simplify the current view; preserve their status and replacement trail.

## Updating the Documentation

For a normal documentation update:

1. Add or update the source artifact in every relevant domain.
2. Identify supported decisions, rejected alternatives, and unresolved questions.
3. Create or revise the affected ADRs without overstating the source evidence.
4. Set the ADR status and decision date accurately.
5. Add timestamp references and cross-domain links where applicable.
6. Update the phase change log with material additions, changes, and removals.
7. Refresh the status totals and documentation map in this README.
8. Validate metadata, numbering, filenames, links, shared-transcript equality, and source citations.

Changes to a transcript, an accepted ADR, or an ADR's evidentiary interpretation should receive domain-owner review before they become the new baseline.

## Change History

- [Phase 1 change log](CHANGELOG.md)
- Phase 2 does not yet have a separate change log.

The change log records material documentation changes. Git history remains the detailed record of individual edits.

## Known Gaps and Open Design Areas

The active ADRs identify several areas that require further validation or detailed design:

- The authoritative asset hierarchy, asset taxonomy, ownership model, and integration boundary.
- Employee deactivation behavior, including the treatment of inactive employees, omitted records, and termination dates.
- Employee-profile catalogue ownership, mapping rules, exception precedence, and minimal-record behavior.
- Final establishment-assignment rules for remote employees and exceptional cases.
- The inspection KPI catalogue, reporting thresholds, and detailed generated-record requirements.
- Historical SafetyCulture data migration, coexistence, cutover, and decommissioning responsibilities.
- The boundary between Intelex and contractor-management platforms, including contractor KPI ownership.
- Qualification validity and renewal rules derived from the governing policies.
- The technical mechanism for binding an exact training-content version to a completion record.

These are navigation cues, not new decisions. Consult the relevant proposed ADRs for the authoritative context, alternatives, and evidence.

## Ownership and Review

Documentation ownership, domain approvers, and review cadence should be confirmed as part of project governance. Until a formal ownership matrix is established:

- Proposed ADRs should not be treated as approved implementation requirements.
- Domain subject-matter experts should validate business and regulatory interpretations.
- Solution architecture should review cross-domain dependencies and application boundaries.
- Decision-makers identified in an ADR should approve its transition to `accepted`.
- Material revisions to accepted ADRs should be recorded in the phase change log.
