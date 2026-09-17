---
status: accepted
date: 2026-09-17
deciders:
  - Matthew Futter
  - Jeremiah Soto
consulted:
  - Dave McLean
informed:
  - Amy Roth
  - Mike Tran
primary_application: Intelex Platform Administration
secondary_applications: Employee Management
---

# Provide Controlled External Support Access

## Context and Problem Statement

Enforcing Entra SSO on the only Intelex URL would prevent implementation and product-support personnel from accessing the environment unless each external person received an account in the organization's Microsoft tenant. That would delay implementation work and later ticket investigation.

## Decision Drivers

* Permit timely implementation and product support.
* Avoid maintaining enterprise accounts for changing support personnel.
* Preserve Entra SSO for normal employee access.
* Limit non-SSO access to an approved support context.

## Considered Options

* Require every user to authenticate through Entra.
* Issue organization-managed Microsoft accounts to support personnel.
* Maintain a separate external Intelex URL pointing to the same database.
* Prohibit external support access.

## Decision Outcome

Chosen option: **Request a separate external Intelex URL for authorized implementation and product-support access while retaining Entra SSO for employees.**

The external route will use the provider's controlled support accounts and credential-management practices.

## Consequences

* Support personnel can investigate issues without organization-issued accounts.
* Support response is less likely to be delayed by account provisioning.
* The environment has an authentication path outside the organization's Entra tenant.
* Provider access controls, credential rotation, and audit logs become important compensating controls.

## More Information

The external URL points to the same Intelex database; it is not a separate application environment.

Transcript references: 1:52:45–1:54:48.
