---
status: proposed
date: 2026-09-17
deciders: []
consulted:
  - Vanessa Newmarker
  - Amy Roth
  - Dave McLean
informed: []
primary_application: Training Management
secondary_applications: Competency Management
---

# Use a Common Course Requirement Across Delivery Methods

## Context and Problem Statement

Some corporate training is delivered live, with a self-paced version available to employees who miss the session. Onboarding and later refreshes can also use different delivery methods for equivalent content.

## Decision Drivers

* Live and self-paced delivery already coexist.
* Equivalent delivery methods must fulfill the relevant employee requirement.
* Repeated completions need to remain traceable over time.

## Considered Options

* Associate multiple delivery methods with a common course requirement.
* Maintain separate requirements for each delivery method.

## Decision Outcome

Chosen option: **Associate multiple delivery methods with a common course requirement**, because equivalent self-paced and session-based delivery should satisfy the same employee obligation.

Record successful completions against that requirement regardless of delivery method. For a course initially delivered live, close the scheduled sessions and record attendance first. After the final preferred live session, enable self-service content for employees whose requirement remains incomplete. Successful completion advances the next due date regardless of delivery method.

## Consequences

* Delivery changes need not fragment the employee's requirement history.
* Employees can satisfy equivalent training through different channels.
* Course configuration must distinguish equivalent alternatives from components that must both be completed.
* Attendance alone cannot be assumed sufficient where a separate quiz or assessment is required.
* Enabling self-service content before the final live session could let employees bypass the preferred delivery route.
* Site-specific content must remain in distinct courses when the delivered material is materially different.

## More Information

Transcript reference: 26:21–30:00.

Live delivery followed by a required quiz was specifically described. Session self-registration and administrator enrollment remain supported rather than universal. The later workshop confirmed the live-session-to-self-service make-up pattern at approximately 00:34:01–00:54:19. See ADR-002 and ADR-004.
