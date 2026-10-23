---
title: MARCOM course update and Training Course Version pinning decision
date: 2026-10-23
source: User-provided decision in this chat
speaker: null
---

# MARCOM Course Version Pinning Decision

The user supplied the following answer to the open question about handling MARCOM content updates. The quoted text is preserved as supplied; speaker identity and an independent tenant test are not established by this record.

## Supplied decision

> My preference would be to follow what Intelex does already.
>
> As is, if I assign you a course (v1) with a scorm package, then add a new version (v2) with a new scorm package - when you go to complete the course you will see the latest (v2)
>
> Meaning that if there was an automated process to feed new content to the catalog, and if the catalog automatically took a new MARCOM course version and made a new Course Version record out of it - that new version would be what people see. That would happen without any review on the part of the client's training team, whatsoever.
>
> So given that - the decision will be that new MARCOM course records will not create a new Course version in training management automatically. The relationship between training management's Course Version object and the MARCOM Course should capture the specific Version of the MARCOM course that was current at the time the Course Version was created and should only use the file from that course version.
>
> If a new MARCOM version comes into Intelex, the user would have to manually create a new Course Version in Training Management, select the MARCOM Course to pull content from and let the system grab the "latest" version of it when saving the Course Version at that time (triggered on Create and Update, but only when MARCOM Couse is not null and ISCHANGED)

## Interpretation applied to the design

- Select the stable MARCOM Catalogue Entry and store the exact resolved MARCOM Content Release and its file on the Training Course Version.
- Resolve content on Create or Update only when the MARCOM Course is populated and that field is changed. An initial non-empty selection on Create counts as the initial change; exact tenant `ISCHANGED` behavior/syntax still needs configuration confirmation.
- An ordinary save with the same MARCOM Course does not refresh its package, even when a newer catalogue release exists.
- A new catalogue release or a Current Release change does not update existing Training Course Versions and does not create Training Course Versions automatically.
- Adopting a new release of the same MARCOM course requires the user to create a new Training Course Version and select that MARCOM Course.
- Existing Training Management retains learner selection/execution/history behavior. The stated latest-course-version behavior is user-supplied platform context, not an independently verified test result.
