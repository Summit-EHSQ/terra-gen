---
status: accepted
date: 2026-09-17
deciders:
  - Amy Roth
  - Mike Tran
consulted:
  - Dave McLean
  - Jeremiah Soto
  - Matthew Futter
informed: []
primary_application: Employee Management
secondary_applications: Integration Management, Intelex Platform Administration
---

# Integrate Employees through Boomi, APIHub, and EmployeeUserAccess

## Context and Problem Statement

Employee creation requires coordinated employee, user, group, hierarchy, and environment-access data. The standard Intelex `EmployeeUserAccess` endpoint can perform those operations but cannot receive Terra-Gen-specific Position Code inputs or retain the intermediate values needed for governed provisioning. A direct Boomi call to that endpoint would therefore bypass required Intelex configuration and calculations.

The design needs one governed inbound contract, an auditable custom record, and a single downstream provisioning request without creating and maintaining separate calls for Employee, user access, and group Member records.

## Decision Drivers

* Keep Paylocity extraction and delivery governed through Boomi.
* Receive Terra-Gen-specific fields through a supported custom-object API.
* Calculate Position Code and settings-derived values inside Intelex.
* Use the supported `EmployeeUserAccess` behavior for employee and user creation.
* Minimize downstream calls and avoid partial multi-call provisioning.
* Link the source record to the resulting Employee for deterministic updates.

## Considered Options

* Maintain employees manually in Intelex.
* Deliver a daily EDIS file through SFTP.
* Call Employee, user-access, and Member endpoints separately.
* Have Boomi call `EmployeeUserAccess` directly.
* Stage the inbound record in Intelex and use APIHub for one calculated `EmployeeUserAccess` request.

## Decision Outcome

Chosen option: **Use Boomi to maintain a custom Paylocity Employee Record and use APIHub to issue one calculated request to `EmployeeUserAccess`.**

Boomi will use the Intelex Object Data API to POST and PATCH Paylocity Employee Records. The custom object will persist the fields supported by `EmployeeUserAccess`, including its processing-control properties, and Terra-Gen-specific inputs such as Position Code Text.

On every source-record creation or update, an Action Handler will use `GETSETTING` to snapshot processing controls from Paylocity Employee Integration Settings. Other handlers will resolve Position Code and, on record creation, capture its Current Published Version in a separate M:1 Published Position Code relation. Login Location and the complete initial membership payload will be calculated from that captured version before enabling `Trigger API Update`.

For a person who is not related to an Intelex Employee, APIHub will issue one `POST /EmployeeUserAccess`. The request will contain the employee fields, user fields, settings-derived controls, and `Groups`. `Groups` will be supplied from a calculated `nvarchar` long-text field containing semicolon-delimited group identifiers and location-qualified Role expressions. APIHub will not issue separate user-access or Member-record requests.

The Employee object will contain an M:1 Paylocity Employee Record relation with its reverse relation enabled. After Employee creation, an Employee Action Handler will use `FETCHVALUE` and Employee Number to set this relation. The successful operation therefore exposes the created Employee and its `Id` from the Paylocity Employee Record.

When the relation identifies an existing Employee, APIHub will issue `PATCH /EmployeeUserAccess({id})` using that Employee `Id`. The PATCH payload will omit `Groups`; Position Code membership calculation applies only during initial Employee creation and does not reconcile memberships on later updates.

If the source record predates the first publication, the initial Publish action will populate its empty Published Position Code relation. APIHub processing will remain blocked until that relation is populated and prerequisite calculations succeed. Later publications and later source-record updates will not replace the captured version. Settings values remain separate snapshots of the values in effect when the Paylocity Employee Record was created or updated.

## Consequences

* Intelex receives one governed source record and one downstream provisioning request per operation.
* Employee, user access, and initial group membership creation use the supported User Management API transaction instead of three independent calls.
* Custom Position Code inputs and calculation evidence remain visible on the Paylocity Employee Record.
* The captured Published Position Code provides traceability to the exact configuration used for initial provisioning.
* A successful initial POST must establish the Employee relation before future PATCH operations rely on its `Id`.
* Existing Employee updates intentionally do not reapply Position Code memberships.
* Unpublished Position Codes delay Employee provisioning until an administrator completes setup.
* APIHub, Action Handler ordering, validation, retry, and monitoring become operational dependencies.
* The accepted EDIS/SFTP transport direction is replaced by API-based staging and orchestration.

## More Information

The detailed field, Action Handler, lookup, publishing, and payload requirements are recorded in [Paylocity Employee Integration Technical Requirements and Clarifications](<../raw artifacts/2026-09-25-paylocity-employee-integration-technical-requirements.md>).

Position Code governance is defined in Employee Management ADR-001, **Use Governed Position Codes as Provisioning Profile Inputs**. The Intelex endpoint contract is documented in the [Intelex User Management API](https://developers.intelex.com/#user-management-api).

Original transcript references: 0:03:27–0:10:27 and 0:20:31–0:23:14. The requirements artifact records the subsequent technical direction that replaces the initially discussed EDIS/SFTP transport.
