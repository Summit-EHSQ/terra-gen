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

Some users require all relevant records within one establishment, while functional leaders may require one branch of data across several establishments. Either hierarchy alone would grant too much access or prevent users from seeing records they are responsible for.

## Decision Drivers

* Enforce least-privilege access.
* Support local and cross-establishment responsibilities.
* Keep record scope separate from application capabilities.
* Protect sensitive incident information.
* Avoid a manually maintained group for every routine combination.

## Considered Options

* Determine access only from the Location Structure.
* Determine access only from the Business Hierarchy.
* Use the intersection of Location Structure and Business Hierarchy access.
* Create a separate security group for every permitted combination.

## Decision Outcome

Chosen option: **Use the intersection of a user's login Location and login Business Hierarchy assignments to determine record scope, with application and role permissions determining the types of records and functions available.**

A broad assignment in one hierarchy does not by itself grant broad record access when the other hierarchy is narrow. Application permissions remain independent; for example, a learning and development role can have broad Training Management access without equivalent Incident Management access. Exception groups may be used for combinations that cannot be represented cleanly, but should not become the default design.

## Consequences

* Local and matrix responsibilities can be represented using the same model.
* Central roles can receive broad access to one application without receiving every application.
* Administrators must understand the interaction of hierarchy and application permissions.
* Incorrect assignments in either hierarchy can hide required records.
* Cross-cutting roles may create administrative overhead if many exception groups are needed.

## More Information

The high-voltage scenario remains an open test of whether the model can support selected branches across both hierarchies without moving a user to an overly broad parent node. Sensitive fields may also require controls beyond record visibility.

Transcript references: 1:36:17–1:39:33, 1:47:04–1:51:33, 2:08:56–2:16:11, and 2:19:22–2:21:32.
