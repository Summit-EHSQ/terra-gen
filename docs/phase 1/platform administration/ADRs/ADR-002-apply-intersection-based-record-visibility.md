---
status: proposed
date: null
deciders: []
consulted:
  - Dave McLean
  - Vanessa Newmarker
  - Jeremiah Soto
informed:
  - Matthew Futter
primary_application: Intelex Platform Administration
secondary_applications: Incident Management, Training Management, Inspections, Environmental Compliance
---

# Apply Intersection-Based Record Visibility

## Context and Problem Statement

Some users require all relevant records within one establishment, while functional leaders may require selected data across several establishments. The platform can apply the intersection of Location Structure and Business Hierarchy assignments, but the latest source-data review did not establish a reliable Business Hierarchy for initial go-live. Applications must therefore opt into a second security hierarchy only when its data and access use case have been validated.

## Decision Drivers

* Enforce least-privilege access.
* Support local and cross-establishment responsibilities.
* Keep record scope separate from application capabilities.
* Protect sensitive incident information.
* Avoid a manually maintained group for every routine combination.

## Considered Options

* Determine access only from the Location Structure.
* Determine access only from the Business Hierarchy.
* Use the intersection of Location Structure and Business Hierarchy access for every application.
* Use establishment-based visibility initially and enable intersection-based visibility only for validated applications.
* Create a separate security group for every permitted combination.

## Decision Outcome

Chosen option: **Use establishment-based visibility as the initial baseline and enable intersection-based visibility only for an application with a validated second hierarchy and explicit security requirement.**

Application permissions remain independent from record scope. Inspections will initially use establishment-based visibility; its site, resource, and equipment references are classification and reporting dimensions rather than additional security boundaries. If a later application enables two-hierarchy security, access will use the intersection of the applicable assignments. Exception groups may be used for combinations that cannot be represented cleanly, but should not become the default design.

## Consequences

* The initial access model is supported by currently available source data.
* Applications can adopt a second hierarchy without forcing it onto every other application.
* Central roles can receive broad access to one application without receiving every application.
* Administrators must understand the interaction of hierarchy and application permissions.
* An application that later adopts intersection security must test for unintentionally hidden records.
* Cross-cutting roles may create administrative overhead if many exception groups are needed.

## More Information

This ADR no longer establishes intersection-based visibility as the universal go-live model. The capability remains available for later application-specific adoption. Sensitive fields may also require controls beyond record visibility.

Transcript references: organizational-structure workshop 1:36:17–1:39:33, 1:47:04–1:51:33, 2:08:56–2:16:11, and 2:19:22–2:21:32; integration and inspections workshop 0:01:35–0:06:09, 1:19:31–1:20:18, and 2:28:27–2:43:07.
