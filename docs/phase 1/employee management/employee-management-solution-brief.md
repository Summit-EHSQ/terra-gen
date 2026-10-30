# Solution Brief: Employee Management

Draft — October 30, 2026. Describes the planned Phase 1 solution.

Employee Management connects Terra-Gen’s employee information with Intelex so that new starters can be prepared consistently and employee records can be maintained as information changes. It reduces repetitive administration by using an employee’s Position Code to select a standard initial setup, including their login location, security groups, training workgroups and document distribution groups.

The design separates creating an employee record from enabling login access. This allows onboarding preparation to begin before the employee’s first day or before their company sign-in identity is available. Missing configuration remains visible for Administrators to resolve rather than resulting in an arbitrary access assignment.

## How the solution fits together

| Component | Business purpose |
|---|---|
| **Paylocity** | Supplies employee information, including identity, hire date, Position Code and the information needed to determine establishment. |
| **Boomi** | Transfers employee information directly into Intelex, applies establishment rules and manages delivery and retries. |
| **Employee Integration Manager** | A new Intelex application where Administrators maintain Position Code setup and publish the versions used for initial employee preparation. |
| **Intelex Employee records** | Hold employee information and the profile version used for initial setup. Existing Intelex group memberships connect employees to access, training and document audiences. |
| **Microsoft Entra ID** | Provides the company sign-in identity used for Intelex single sign-on. |

Employee Integration Manager is the administration area for the configuration. Employee records remain in the existing Intelex Employee area. Training, Document Control, Incident Management and other applications use this shared employee context while retaining responsibility for their own business processes.

## The employee setup process

1. **Receive the employee information.** Boomi creates or updates the employee record from Paylocity. The proposed feed supports creating sufficiently complete new-starter records before their start date.
2. **Find the Position Code setup.** Intelex associates the employee with the matching Position Code. If a published setup exists, the employee retains that version for initial preparation.
3. **Resolve new codes.** An unfamiliar code starts an Administrator setup workflow. All employees waiting for that code are associated with it, and Administrators receive a setup notification. Employee records can exist while configuration is pending; preparation and login access remain on hold.
4. **Prepare and enable access.** Once the profile is ready, Intelex prepares the initial group memberships and login location. The proposed sequence enables access only after preparation and the required company sign-in information are available.

Later feeds maintain employee information. They do not automatically repeat initial group assignments or replace the retained profile version whenever a Position Code or its configuration changes.

## Maintaining Position Codes

Administrators configure a Position Code once for employees who share the same initial setup. The initial workflow ends when the Administrator clicks **Publish**. Publishing creates a read-only version and makes it available to eligible waiting employees.

After initial setup, Administrators can edit the working Position Code and publish another version while the record remains **Completed**. Working edits do not affect the published setup until publication succeeds. Existing published versions and employee references remain unchanged, so a new publication does not automatically change existing employees’ memberships.

## Location and reporting

Establishment assignment follows an ordered rule: use an established site where the employee is assigned or works; otherwise use San Diego for a remote California resident; otherwise use the main established site designated for the remote employee’s job function. Missing or conflicting mappings require resolution before the affected information is delivered.

Login location is a separate setting. A Position Code can use the employee’s Home Location or its parent location, falling back to Home Location when no parent exists.

## Administration and scope

Only **Administrators** can view the objects in Employee Integration Manager. Existing Employee information continues to use its existing application permissions. Published profile versions are preserved as read-only configuration; a separate Audit Trail is not required. Operational error and notification records support monitoring and recovery.

The application provides initial employee preparation rather than continuous access reassignment. Location-qualified Role assignment remains deferred. Source mappings, lifecycle exceptions and native publishing, membership and account-activation behavior still require implementation closure; this brief does not describe a deployed solution.

Design detail and outstanding inputs are maintained in the [technical specification](ADR-001-004-technical-specification-employee-provisioning.md) and [implementation plan](ADR-001-004-implementation-plan-employee-provisioning.md).
