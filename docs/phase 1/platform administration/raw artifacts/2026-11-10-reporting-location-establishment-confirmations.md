---
title: Reporting location and OSHA establishment follow-up confirmations
date: 2026-11-10
source: User confirmation in this chat after the November 10 ADR reconciliation
---

# Reporting Location and Establishment Confirmations

## Supplied confirmation

> 1 and 2 are confirmed. 3 is still open, 4 - the hierarchy will be maintained within Intelex with boomi supplying assignments

## Referenced decisions

1. Location Structure represents the Paylocity reporting organization. Exact source codes, levels and sample mappings remain implementation inputs.
2. Keep the existing employee establishment calculation unchanged and store its result separately from organizational Home Location. The old establishment-to-HomeLocationCode mapping requires reconciliation; no new field name or endpoint binding was supplied.
3. The basis for document and training audiences remains open: organizational unit, OSHA establishment, actual workplace or a combination.
4. Maintain organizational hierarchy nodes and parent relationships within Intelex; Boomi supplies assignments. This retains the ownership boundary in accepted Platform Administration ADR-004.

The user confirmed the design choices above. This is not evidence of tenant configuration, verified regulatory reporting or acceptance of every remaining part of ADR-009. Technical storage/integration bindings, regulatory outputs and application impacts still require resolution; choices 1, 2 and 4 do not need to be reconfirmed.
