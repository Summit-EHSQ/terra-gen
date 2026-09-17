# Phase 1 Change Log

This file records material changes to the Phase 1 architecture decision records and their supporting source artifacts. Dates identify when the documentation was updated; source meeting dates are identified separately.

## 2026-09-17

### Added

* Added the September 15, 2026 **Terra-Gen | Summit EHSQ | Design Workshop Day 1 - Afternoon** transcript to the raw artifacts for Training Management and Competency Management, with shared YAML meeting metadata.
* Added Training Management ADR-012 to record replacement of TPC by Intelex Training Management.
* Added Training Management ADR-013 to govern course, document, quiz, and SCORM version traceability.
* Added Training Management ADR-014 to preserve training history across termination, rehire, job changes, and leave while applying audience-appropriate privacy filters.
* Added four Intelex Platform Administration ADRs covering the complementary hierarchy model, intersection-based visibility, separate home and login assignments, and Intelex ownership of hierarchy roll-ups.
* Added two Employee Management ADRs covering position-code-driven provisioning profiles and rules-based establishment assignment for remote employees.
* Added two Incident Management ADRs covering establishment and resource attribution and the initial boundary for contractor incidents.
* Added the September 15, 2026 **Terra-Gen | Summit EHSQ | Design Workshop Day 1 - Morning** transcript to the raw artifacts for Platform Administration, Employee Management, and Incident Management, with shared YAML meeting metadata.

### Changed

* Revised Training Management ADR-001 to confirm reusable many-to-many workgroups mapped from HR job or position codes.
* Revised Training Management ADR-002 to replace the earlier equal-support scheduling direction with employee-level recurrence for self-service training and sessions for live delivery.
* Revised Training Management ADR-003 to define the live-session-to-self-service make-up pattern.
* Revised Training Management ADR-005 to establish independently governed training topics as atomic courses beneath program and monthly roll-ups.
* Revised Training Management ADR-006 to establish Qualifications as a separate sequenced layer over Training Management.
* Revised Training Management ADR-007 to use separate qualification definitions when populations or equipment scopes require materially different steps.
* Revised Training Management ADR-009 to replace earliest-supporting-course expiry with policy-driven validity and distinct initial and renewal requirements.
* Revised Inspections ADR-008, **Track Inspection Frequency as Configurable Site-Level Requirements**, to distinguish an operational resource or site from its OSHA establishment and require a maintained relationship between them.
* Revised Inspections ADR-009, **Report on Deficiencies, Completion, Timeliness, and Trends**, to add establishment, resource, and technology as distinct reporting dimensions.
* Reviewed the remaining Phase 1 ADRs against the organizational-structure workshop. No conflicts, superseding decisions, or removals were supported by the transcript.

### Removed

* None.

## 2026-09-16

### Added

* Added the Training Management documentation structure under `training management/`.
* Added eleven active Training Management and Competency Management ADRs derived from the September 8, 2026 design-preparation meeting.
* Added the source transcript for **Terra-Gen | Summit EHSQ | Training Mgmt Design Prep**, held September 8, 2026 at 2:00 p.m. ET.
* Added this Phase 1 change log.

### Changed

* Revised Training Management ADR-001, **Assign Training Requirements by Employee Profile and Designation**, to clarify that the authoritative employee-data source and profile mappings were not selected in the meeting.
* Revised Training Management ADR-007 and renamed it **Separate Equipment-Specific Practical Requirements**. The record now captures the supported direction to define separate equipment-specific practical requirements without treating separate competency variants as decided.
* Revised Training Management ADR-009, **Define Validity Rules at the Competency Level**, to identify earliest-required-component expiry as a proposed direction rather than a finalized rule. One-time and fixed-period competency patterns remain unresolved alternatives.
* Reviewed all ten Inspections ADRs against the Training Management discussion. No conflicts, superseding decisions, or required amendments were identified.
* Verified that all active Phase 1 ADRs contain YAML application metadata and the required MADR sections.

### Removed

* Removed the draft Training Management ADR **Bound Phase Integration Work to Identity and Employee Data**. The source discussion confirmed phase scope and workshop sequencing but did not select an architectural approach, source system, identity protocol, matching key, or synchronization model.

## Current ADR Baseline

### Inspections

Source meeting: **Terra-Gen & Summit - Inspections Design Prep**, August 26, 2026.

| ADR | Status | Decision |
| --- | --- | --- |
| ADR-001 | Proposed | Support Mobile and Offline Inspection Execution |
| ADR-002 | Proposed | Configure Inspection Behavior by Inspection Program |
| ADR-003 | Proposed | Support Conditional Questions and Branching |
| ADR-004 | Proposed | Support Questions With or Without Numeric Scoring |
| ADR-005 | Proposed | Support Both Direct Actions and Formal Findings |
| ADR-006 | Proposed | Add Configurable Review and Approval Workflow |
| ADR-007 | Proposed | Generate Branded, Portable Inspection Records |
| ADR-008 | Proposed | Track Inspection Frequency as Configurable Site-Level Requirements |
| ADR-009 | Proposed | Report on Deficiencies, Completion, Timeliness, and Trends |
| ADR-010 | Proposed | Replace SafetyCulture Incrementally Through a Three-Program Initial Release |

### Training Management and Competency Management

Source meeting: **Terra-Gen | Summit EHSQ | Training Mgmt Design Prep**, September 8, 2026.

| ADR | Status | Primary Application | Decision |
| --- | --- | --- | --- |
| ADR-001 | Proposed | Training Management | Assign Training Requirements through Job-Code-Mapped Workgroups |
| ADR-002 | Proposed | Training Management | Use Individual Recurrence for Self-Service Training |
| ADR-003 | Proposed | Training Management | Use a Common Course Requirement Across Delivery Methods |
| ADR-004 | Proposed | Training Management | Match Completion Authority to the Training Requirement |
| ADR-005 | Proposed | Training Management | Model Independently Governed Training Topics as Atomic Courses |
| ADR-006 | Proposed | Competency Management | Build Qualifications as a Separate Layer over Training Management |
| ADR-007 | Proposed | Competency Management | Use Separate Qualification Definitions for Materially Different Scopes |
| ADR-008 | Proposed | Competency Management | Support Authorized Competency Attestation |
| ADR-009 | Proposed | Competency Management | Define Qualification Validity and Renewal from Governing Policy |
| ADR-010 | Accepted | Training Management | Validate Existing Custom Learning Packages before Adoption |
| ADR-011 | Accepted | Training Management | Establish an Ongoing MARCOM Content Refresh Process |
| ADR-012 | Proposed | Training Management | Replace TPC with Intelex Training Management |
| ADR-013 | Proposed | Training Management | Version Training Content for Audit Traceability |
| ADR-014 | Proposed | Training Management | Preserve Training History across Employment Status Changes |

### Intelex Platform Administration

Source meeting: **Organizational Structure and Location Hierarchy Workshop**; meeting date not supplied in the transcript artifact.

| ADR | Status | Decision |
| --- | --- | --- |
| ADR-001 | Proposed | Use Complementary Location and Business Hierarchies |
| ADR-002 | Proposed | Apply Intersection-Based Record Visibility |
| ADR-003 | Proposed | Separate Employee Home and Access Assignments |
| ADR-004 | Proposed | Maintain the Organizational Hierarchy in Intelex |

### Employee Management

Source meeting: **Organizational Structure and Location Hierarchy Workshop**; meeting date not supplied in the transcript artifact.

| ADR | Status | Decision |
| --- | --- | --- |
| ADR-001 | Proposed | Use Position Codes as Provisioning Profile Inputs |
| ADR-002 | Proposed | Automate Establishment Assignment for Remote Employees |

### Incident Management

Source meeting: **Organizational Structure and Location Hierarchy Workshop**; meeting date not supplied in the transcript artifact.

| ADR | Status | Decision |
| --- | --- | --- |
| ADR-001 | Proposed | Capture Both OSHA Establishment and Operational Resource |
| ADR-002 | Proposed | Defer Contractor Self-Service and Isolated Security |

## Documentation Totals

* Inspections: 10 active ADRs.
* Training Management and Competency Management: 14 active ADRs.
* Intelex Platform Administration: 4 active ADRs.
* Employee Management: 2 active ADRs.
* Incident Management: 2 active ADRs.
* Phase 1 total: 32 active ADRs.
