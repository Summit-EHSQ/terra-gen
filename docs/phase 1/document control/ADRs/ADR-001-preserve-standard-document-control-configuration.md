---
status: accepted
date: 2026-09-18
deciders:
  - Amy Roth
  - Mike Tran
  - Whitney Goller
consulted:
  - Dave McLean
informed:
  - Matthew Futter
primary_application: Document Control
secondary_applications: Intelex Platform Administration
---

# Preserve the Standard Document Control Configuration

## Context and Problem Statement

Intelex delivers Document Control as an updateable product whose normal variations are expressed through settings, lifecycles, approval processes, taxonomies, and permissions. Changing or hiding standard forms and workflow elements would increase upgrade and support risk.

## Decision Drivers

* Preserve compatibility with vendor updates.
* Minimize custom configuration and regression risk.
* Use supported parameters for process variation.
* Keep the application maintainable by administrators and support partners.

## Considered Options

* Preserve the standard product and configure supported settings.
* Customize selected forms or workflows.
* Extensively tailor the application to reproduce existing processes.

## Decision Outcome

Chosen option: **Preserve the standard product and configure supported settings.**

Unused standard options will not be removed merely to simplify the administrative interface. Requirements will be implemented through supported settings, lifecycles, approval processes, taxonomies, and permissions unless a separately approved exception is required.

## Consequences

* Product updates can be accepted with less conflict.
* Support and troubleshooting remain aligned with standard behavior.
* Administrators may see options that are not used operationally.
* Some labels or interactions may not exactly reproduce current practices.

## More Information

Transcript references: 00:05:02–00:07:29.
