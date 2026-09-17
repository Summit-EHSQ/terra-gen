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
primary_application: Employee Management
secondary_applications: Intelex Platform Administration, Intelex Mobile
---

# Authenticate through Microsoft Entra ID

## Context and Problem Statement

Intelex user accounts must authenticate consistently with the Microsoft identity environment. The username populated through EDIS must match the identifier supplied in the SAML assertion. Email is the likely identifier, but final identity configuration must confirm it.

## Decision Drivers

* Centralize authentication and access termination.
* Avoid separate Intelex passwords for employees.
* Support browser and mobile access.
* Minimize transformation of identity identifiers.

## Considered Options

* Use Intelex-native credentials.
* Use SAML SSO with email as the username.
* Use SAML SSO with UPN or another source-supported identifier.
* Construct a custom identifier in the integration layer.

## Decision Outcome

Chosen option: **Authenticate employees through Microsoft Entra ID using SAML and populate the Intelex username with the identifier carried in the SAML assertion.**

Email will be used unless technical validation establishes another source-supported organizational standard. Mobile users will authenticate while connected and then establish the user-specific Intelex Mobile PIN required for offline access.

## Consequences

* Employees receive the enterprise single-sign-on experience.
* Entra session policy determines whether credentials must be re-entered after an Intelex timeout.
* An employee can exist without user access until the matching identifier is supplied.
* Disabling the Microsoft account is the primary immediate control for former-employee access.
* Offline mobile data remains scoped to the authenticated user and is unsuitable for casual shared-device switching.

## More Information

A separate external support URL was accepted for authorized product and implementation support. Its access controls should be documented as part of platform administration rather than employee authentication.

Transcript references: 0:10:59–0:12:36 and 1:37:57–1:54:48.
