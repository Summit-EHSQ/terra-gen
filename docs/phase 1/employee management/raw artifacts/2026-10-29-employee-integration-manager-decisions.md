# Employee Integration Manager — confirmed configuration decisions

Source: user instruction in this chat, October 29, 2026. These statements are requirements, not evidence of deployed tenant configuration.

## User decisions

- Application placement and names: “The new objects should be created into a new application called Employee Integration Manager”.
- Workflow parameters: “all are confirmed as is”.
- Security permissions: “all objects that exist within the Employee Integration Manager context should be visible to Administrators only”.
- Audit scope and retention: “None - Audit Trail is not required for this application”.

## Applied scope

Create Employee Integration Manager and place the six designed custom objects in it: Login Location Rule, Assignment Location Basis, Position Code, Published Position Code, Position Code Role Assignment and Published Position Code Role Assignment. Native Employee, Group, Location and other existing shared objects retain their existing application ownership. Employee extensions remain on native Employee.

Only Administrators may view these application objects. Support navigation means Administrators performing support; there is no separate Support-group visibility grant. Trusted automation must use a supported effective security context consistent with this restriction; the instruction does not prove a bypass or establish the service-account binding.

Audit Trail is not required. Leave Audit Trail disabled for the new custom objects and remove audit-enablement/retention assignments and blockers. Make no Audit Trail change to native Employee or other existing objects. Existing operational execution/error/notification logs and immutable published versions remain part of the design; they are separate from Audit Trail.

## Workflow confirmation applied

Retain the documented business workflow: Position Code has one Initial Setup stage with active/nonterminal status; Person Responsible is Administrators; no automatic Due Date, calendar or escalation is currently defined; Publish ends the initial workflow in terminal Completed; no cancellation/rejection/return/reopen is added. Subsequent Publish runs while Completed. The one-time setup notification and absence of an additional custom completion notification remain as documented.

Confirmation closes business-parameter approval gaps. Native status/assignment/action/form-link identifiers, event timing and transaction/retry support remain implementation questions. No numerical deadline, new native expression or platform capability is inferred from the confirmation.
