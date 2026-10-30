# Establishment assignment — supplied flow

Source: user-supplied diagram, received October 28, 2026. Title: “Process Flow to Determine Establishment”; subtitle: “Accounting for Employee Hours and Injury/Illness Events in OSHA Forms 300, 300A and 301”.

[Original diagram](2026-10-28-establishment-assignment-flow.png)

## Source transcription

Trigger: employee is new, relocated or changed job.

1. Is the employee assigned to, or does the employee work at, an established site? If yes, account for the employee on OSHA forms for that established site. End.
2. Otherwise, the employee is remote. Is the employee a California resident? If yes, account for the employee on OSHA forms for the San Diego site. End.
3. Otherwise, determine the employee’s job function. Account for the employee on OSHA forms for the established site designated as the main location for that job function. End.

The diagram covers accounting for employee hours and injury/illness events on Forms 300, 300A and 301. Employee Management supplies the resulting establishment; event-specific attribution remains governed by Incident Management.

## Implementation interpretation and remaining inputs

The ordered branches resolve the standard establishment rules in specification section 10.1. Boomi remains the calculation owner and delivers the result through HomeLocationCode. The flow does not specify source field names, site identifiers, job-function mappings, handling of conflicting assigned/actual sites, or correction authority. Retain the specification’s hold-on-missing/conflicting-data behavior until those inputs are supplied. Do not equate job function with JobCode/Position Code without a supplied mapping. Reporting-chain traversal is not a branch in this flow.

## ADR Reconciliation Plan

This is a clarification of ADR-002’s existing choice to automate a deterministic ruleset, rather than a change to the integration boundary. Preserve its September 17 acceptance record and original rationale; append the dated detailed rule. No new ADR identifier or approval is assigned.

| Existing/Candidate ADR | Current status | New finding | Disposition | Target ADR | Evidence | Rationale |
|---|---|---|---|---|---|---|
| ADR-001 | Proposed | No change to Position Code profiles | retain unchanged | ADR-001 | Supplied flow, all branches | Establishment is calculated separately |
| ADR-002 | Accepted | Ordered establishment branches now supplied | retain unchanged | ADR-002, dated clarification | Supplied flow, all branches | Retain the accepted architectural choice and historical text; add its detailed business rule |
| ADR-003 | Accepted | No change to integration ownership | retain unchanged | ADR-003 | Supplied flow | Transport reconciliation remains outside this clarification |
| ADR-004 | Accepted | New employee is an explicit calculation trigger | retain unchanged | ADR-004 | Supplied flow, start | Consistent with pre-start provisioning |
| ADR-005 | Accepted | No monitoring decision supplied | retain unchanged | ADR-005 | Supplied flow | No change to monitoring decision |
| ADR-006 | Accepted | No authentication decision supplied | retain unchanged | ADR-006 | Supplied flow | No change to authentication decision |

### Change summary and gaps

ADR-002 receives a dated clarification; specification section 10.1, OPEN-05, the implementation plan’s INT-01 and the component index are synchronized. No ADR is added, superseded or removed. Source-to-field and source-to-LocationCode mappings, job-function mapping ownership, ambiguous-site resolution and durable correction authority remain open. Existing transport differences between older ADRs and the accepted specification remain recorded separately in specification section 2.2.
