---
status: proposed
date: 2026-09-17
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

Terra-Gen needs repeatable initial user provisioning without configuring each employee independently. Paylocity can supply a Position Code as text, but Intelex needs governed configuration for login location, security groups, location-scoped roles, training workgroups, and document distribution groups. New codes may arrive before an administrator has configured them, and draft changes must not affect live provisioning.

The standard `EmployeeUserAccess` payload does not provide a place to receive Terra-Gen's Position Code input. The design therefore requires a custom Paylocity Employee Record and a controlled Position Code publishing model.

## Decision Drivers

* Derive initial user access consistently from a stable Paylocity value.
* Detect and govern previously unseen Position Codes.
* Prevent incomplete or draft configuration from provisioning users.
* Reuse the Intelex group inheritance model without maintaining four conflicting membership fields.
* Support location-qualified Role assignments.
* Retain a traceable history of approved Position Code configurations.

## Considered Options

* Configure every employee individually.
* Treat Position Code as unvalidated text and calculate assignments outside Intelex.
* Maintain one directly editable Position Code record without versioning.
* Use separate persisted relations for every group category.
* Use a governed Position Code master with separately published configuration versions.

## Decision Outcome

Chosen option: **Resolve exact Paylocity Position Codes to governed, versioned Intelex provisioning profiles and use only successfully published configuration for initial Employee creation.**

`Position Code Text` on the Paylocity Employee Record will resolve through `GETRELATED` to a unique Position Code using exact, case-sensitive matching. If the value is new, Intelex will create the Position Code and its first Published Position Code in Draft. Clearing the source text will clear the relation.

The Paylocity Employee Record will retain both an M:1 Position Code relation and an M:1 Published Position Code relation. On record creation, it will capture the Position Code's Current Published Version. If no version has yet been published, the captured-version relation will remain empty and the first successful publication will populate it. Later publications and later updates to the Paylocity Employee Record will not replace the captured Published Position Code.

Automatically created Position Codes will retain the Source Paylocity Employee Record and two notification controls: `Created by Paylocity Integration` and `Setup Notification Sent`. A Position Code Action Handler will immediately send one setup notification to the Administrators group. The message will include the Position Code link, source employee, and setup instructions. Manually created Position Codes will not send this notification.

Position Code configuration will define:

* A Login Location Rule of either Same as Home Location or Home Location's Parent. When the selected Home Location has no parent, the rule falls back to Home Location; the form will state this behavior.
* One underlying M:N Groups relation, presented as separate type-filtered grids for Security Groups, Training Workgroups, and Document Distribution Groups.
* A separate 1:M Position Code Role Assignment collection. Each unique Role specifies whether its assignment is qualified by Home Location or Login Location.

The publishing structure contains a stable Position Code master and 1:M Published Position Code versions. Published Position Code uses a single-stage Draft workflow. Completing its Publish action replaces the master's matching scalar values, complete Groups relation, and complete Role Assignment collection, then sets `Current Published Version`. The relation is set only when every publication step succeeds; failure leaves the prior active configuration unchanged.

The first draft is created automatically. Later drafts are created manually from the master's Published Versions grid and are prepopulated from the current published predecessor, including Groups and Role Assignment rows. Draft edits do not affect provisioning until successfully published.

Employee provisioning is blocked until the Paylocity Employee Record has captured a Published Position Code. During initial Employee creation, Intelex calculates Login Location and a semicolon-delimited Groups payload from that captured configuration. Location-qualified Roles use the `RoleId(LocationId)` or `RoleId(LocationCode)` syntax expected by `EmployeeUserAccess`. Position-code-derived memberships are not reapplied during later Employee updates.

## Consequences

* Initial access, workflow roles, document distribution, and training audiences are configured once per Position Code and applied consistently.
* New Position Codes become visible and actionable instead of silently receiving arbitrary access.
* A new Employee cannot be provisioned until the related Position Code has a successfully published version.
* Administrators must maintain draft versions and publish them deliberately.
* The master/version copy operation must replace relationship collections and provide rollback semantics to avoid partially activating a configuration.
* Each Paylocity Employee Record preserves which Published Position Code governed its initial provisioning, even after a newer version is published.
* Exact, case-sensitive matching intentionally permits values such as `PC-100` and `pc-100` to represent different codes.
* Later Position Code changes affect subsequent new Employee provisioning; they do not automatically reconcile existing Employee memberships.

## More Information

The detailed object, field, workflow, notification, and serialization requirements are recorded in [Paylocity Employee Integration Technical Requirements and Clarifications](<../raw artifacts/2026-09-25-paylocity-employee-integration-technical-requirements.md>).

Training-specific applicability remains documented in Training Management ADR-001, **Assign Training Requirements through Job-Code-Mapped Workgroups**. Employee payload orchestration is defined in Employee Management ADR-003, **Integrate Employees through Boomi, APIHub, and EmployeeUserAccess**.

Original transcript references: organizational-structure workshop 2:21:49–2:23:08 and 2:27:15–2:32:29; integration and inspections workshop 0:24:50–0:29:40 and 2:31:33–2:32:18.
