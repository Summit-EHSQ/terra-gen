# Solution Brief: OSHA Establishment

Draft for consultant kickoff — November 20, 2026

Terra-Gen needs to track safety performance by organizational location and prepare OSHA reports by establishment. A single establishment can include work from several locations. The proposed solution adds a separate OSHA Establishment register in Intelex Safety Metrics and gives teams one place to enter monthly hours. Location reports use Terra-Gen’s organizational hierarchy, while establishment reports use the establishment assigned to each hours entry or case.

## What the consultant will configure

1. **OSHA Establishment register.** Give authorized users a place to maintain each establishment’s code, legal reporting name, address and other reporting details. The register links to that establishment’s monthly summaries, safety measures and annual OSHA records.
2. **Shared Hours Worked entry.** Record employee and contractor hours separately for each month. An entry can apply to a location, an establishment or both. Intelex calculates each monthly summary’s hours from its linked entries. Users maintain employee and contractor headcounts directly on the summaries. A March entry for 1,200 employee hours assigned both ways contributes 1,200 hours to each view. The underlying work totals 1,200 hours.
3. **Monthly safety performance.** Use the injury and illness records assigned to each establishment to calculate measures such as the number of recordable injuries and illnesses and days away from work. The planned dashboard compares four incident rates with targets entered by authorized users.
4. **Annual OSHA reporting.** Summarize recordable cases, days away from work, days on restricted duty or job transfer, employee hours and average employee headcount. The annual summary saves the establishment’s reporting details for that year and lets authorized users make corrections and record the reason. Planned outputs include OSHA and Cal/OSHA 300 logs and their combined versions, OSHA and Cal/OSHA 300A annual summaries, access to individual OSHA 301 reports for authorized users, and a file for electronic submission.

## Decisions and inputs for the build

- **Incident attribution and access.** The Incident Management design supplies the establishment for each relevant injury or illness, the eligible cases for each annual log and the information needed when a case is corrected. The build needs approved access rules for each reporting view, including which users can correct historical records and view individual cases.
- **Reporting rules and refresh.** Obtain the existing Intelex rate formulas and dashboard to reproduce them for establishments. Confirm the remaining case classification rules, which months require data, and how annual reporting treats missing submissions, confirmed zero values and partial years. Confirm how Intelex will refresh all affected results after hours, headcounts or cases change, including earlier periods and prior assignments.
- **Forms, exports and hours feeds.** Confirm the OSHA and Cal/OSHA templates, how the target Intelex environment can generate them from establishment summaries, and the required electronic file format. Identify any existing hours feeds that need to send data through the shared Hours Worked entry.

The consultant’s assignment covers the Safety Metrics configuration with Intelex Audit Trail disabled for this build. Separate workstreams cover incident, employee and asset design, historical data migration, live-system verification, formal testing and production release.

The build references provide the detailed rules, assignments and dependencies. [Technical specification](technical-specification.md) · [Configuration implementation plan](implementation-plan.md)
