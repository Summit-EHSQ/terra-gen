---
status: proposed
date: null
deciders: []
consulted:
  - Dave McLean
  - Vanessa Newmarker
informed:
  - Matthew Futter
primary_application: Incident Management
secondary_applications: Contractor Management, Integration Management
---

# Defer Contractor Self-Service and Isolated Security

## Context and Problem Statement

Terra-Gen needs visibility into relevant contractor incidents, while contractor firms may maintain their own detailed records and onboarding systems. Direct contractor access would introduce identity management, onboarding, and contractor-to-contractor data-isolation requirements that the initial implementation is not ready to support.

## Decision Drivers

* Capture contractor incidents relevant to Terra-Gen.
* Allow internal EHS personnel to document investigations and root-cause analysis.
* Avoid premature contractor identity and security complexity.
* Recognize existing contractor qualification and KPI systems.
* Preserve a later path to broader contractor functionality.

## Considered Options

* Exclude contractor incidents from Intelex.
* Give contractors direct access to submit and manage incidents.
* Have Terra-Gen personnel record relevant contractor incidents without contractor logins.
* Integrate complete contractor incident and KPI data in the initial phase.

## Decision Outcome

Chosen option: **In the initial phase, Terra-Gen personnel will record and manage relevant contractor incidents without contractor logins or contractor-isolated security.**

Contractor incidents will be classified as contractor events and related to the applicable establishment and resource. Contractor self-service, contractor-specific security contexts, a dedicated contractor workflow, and automated KPI ingestion are deferred for later consideration.

## Consequences

* Contractor incidents can contribute to the overall safety record.
* Internal teams can use Intelex investigation tools.
* The initial identity and security model remains manageable.
* Internal personnel must enter or upload contractor information.
* Some data may exist in both Intelex and contractor systems.
* Adding contractor access later will require a security and workflow decision.

## More Information

The boundary between Intelex and existing contractor platforms, including the source for contractor KPIs, remains unresolved. It should be revisited after the internal Incident Management workflow is stable.

Transcript references: 2:33:20–2:40:52.
