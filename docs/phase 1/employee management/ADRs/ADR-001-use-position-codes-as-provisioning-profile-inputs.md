---
status: proposed
date: 2026-09-17
last_revised: 2026-10-29
deciders:
  - Amy Roth
  - Mike Tran
consulted:
  - Dave McLean
  - Jeremiah Soto
  - Vanessa Newmarker
informed:
  - Matthew Futter
primary_application: Employee Management
secondary_applications: Training Management, Intelex Platform Administration, Integration Management
---

# Use Governed Position Codes as Provisioning Profile Inputs

## Context and Problem Statement

Terra-Gen needs repeatable initial Employee preparation driven by a Paylocity Position Code. Boomi delivers the code in EmployeeUserAccess.JobCode; native Employee processing resolves governed Intelex configuration and retains the immutable version used for initial preparation. A new code can arrive before an Administrator has configured it, and working edits must not alter published configuration or replay initial memberships.

The proposed record is revised against the accepted specification and the user’s October 29 application/workflow/security/Audit Trail decisions. Its proposed status and original decision date are retained; no new formal ADR approval is implied.

## Decision Drivers

* Configure repeatable initial login location and security/training/document group selections once per Position Code.
* Govern previously unseen codes without preventing employee-only creation.
* Separate editable working configuration from immutable published versions.
* Keep configuration visible only to Administrators in one application.
* Avoid Audit Trail configuration that the user has explicitly excluded.
* Retain the initial published version and helper origin on Employees without replaying memberships on later changes.

## Considered Options

* Configure every Employee independently.
* Calculate assignments entirely outside Intelex from ungoverned code text.
* Maintain one editable Position Code without immutable versions.
* Use a stable authoring Position Code with separately published immutable versions in a governed application.

## Decision Outcome

Chosen option: **Resolve Employee.JobCode to governed Position Code authoring records in Employee Integration Manager and capture an immutable published configuration for initial preparation.**

Create the new **Employee Integration Manager** application. Place Login Location Rule, Assignment Location Basis, Position Code, Published Position Code, Position Code Role Assignment and Published Position Code Role Assignment in it. Implement the two catalogue configurations first. Native Employee and existing Group, Location and Role structures stay in their current applications; the seven Employee extensions are added to native Employee.

Only the existing **Administrators** group may view application objects. Administrators maintain authoring configuration and Publish; committed versions and their copied children remain immutable. Support within this application means Administrators performing support, not a separate visibility grant. Trusted automated processing must use a supported security context consistent with this boundary.

**Audit Trail is not required.** Leave it disabled on new application objects and assign no audit-retention setup or native Employee Audit Trail change. Published versions, helper references and existing operational execution/notification diagnostics remain available under their own design responsibilities; no custom audit object is introduced.

The Employee handler first checks JobCode and uses FETCHVALUE to match Position Code.Code exactly and case sensitively. It captures an existing Current Published Version only into an empty Employee.Position Code Version. A genuine no-match uses GETRELATED create/resolve to create one authoring code and start its initial workflow. Concurrent or already-unpublished codes share the same authoring record. Employee.[Helper] Create New Position Code Relation is an M:1 with the inverse Source Employees grid, retaining all Employees waiting for first publication separately from ordinary current-code usage.

Position Code owns one initial **Initial Setup** stage, active/nonterminal, with **Administrators** responsible and **no automatic Due Date/calendar/escalation**. **Publish** is the only exit and completes the workflow in terminal **Completed**. Validation failure leaves it in Initial Setup; no cancellation, rejection, return or reopen is defined. These business parameters are confirmed. Later edits and Publish occur while Completed without restarting workflow. Published objects have no workflow.

The visible Publish link creates a new independent immutable version containing the authoring Login Location Rule, complete Groups set and copied Role rows. It sets Current Published Version only after complete validation. First publication fills eligible empty current-code/version references through Source Employees and completes the initial workflow in the same controlled change. Later publication changes neither existing Employee captures nor initial memberships. Required failure restores publication, pointer, eligible Employee assignments and workflow effects while preserving saved authoring edits.

Login Location Rule uses stable catalogue codes SAME_HOME or HOME_PARENT; HOME_PARENT falls back to Home Location if no parent exists. One Groups relation is presented through three subtype-filtered authoring grids. Location-qualified Role execution remains deferred; storage/copy structure does not authorize an unqualified membership fallback.

One setup notification is sent to Administrators only for integration-created codes after at least one source-helper link exists. Successful delivery sets Setup Notification Sent; manual creation, later source arrivals and subsequent publications send no additional setup message. No additional custom completion notification is defined.

Employee-only creation is allowed before publication. Native post-commit preparation adds only missing captured-profile memberships, stores initial home/login references and stamps completion last. Account activation remains subject to profile/SSO readiness and verified native feasibility. Current-code navigation may change later, but the captured version and helper origin are retained and initial memberships are not replayed.

## Consequences

* The six new configuration objects share a named Administrators-only application boundary.
* Administrators edit authoring configuration and publish complete versions deliberately; historical versions remain independent and immutable.
* Multiple Employees can wait for one new code and receive its first published version through the helper inverse.
* No Audit Trail enablement or retention configuration is required; operational failure monitoring remains separate.
* Native exact matching, concurrency, publication atomicity, terminal links, membership-before-access and later account activation still require supported implementation bindings/results.
* Required deferred Role behavior continues to hold affected profiles.

## More Information

Current operative design: [Employee Management technical specification](../ADR-001-004-technical-specification-employee-provisioning.md). New confirmed requirements: [October 29 application decisions](<../raw artifacts/2026-10-29-employee-integration-manager-decisions.md>). Revision disposition: [ADR reconciliation](../ADR-RECONCILIATION-2026-10-29-employee-integration-manager.md).

The earlier [September 25 requirements](<../raw artifacts/2026-09-25-paylocity-employee-integration-technical-requirements.md>) preserve historical staging/version-side Draft proposals. They are not current build instructions. Accepted ADR-003’s older transport outcome still requires formal reconciliation; the current specification explicitly governs direct delivery.

Original transcript references: organizational-structure workshop 2:21:49–2:23:08 and 2:27:15–2:32:29; integration and inspections workshop 0:24:50–0:29:40 and 2:31:33–2:32:18.
