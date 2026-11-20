# Event-service report lineage — package 1.0.2.0

Extracted source configuration. This inventory verifies report composition and import bindings; it does not certify a live run, report correctness, effective permissions or a supported invocation API. An arrow/reference runs from a consumer to its source. All 25 report Definition values are unchanged from version 1.0.1.0.

## Event handlers and ordered imports

### [Safety Metrics] Incident Rate KPI Data Update

Stable ID: `ffc98d00-0752-44cf-978e-017c0cc7cc9c`.

1. [SM-KPI] 01 - Initialization (`1149cbde-fdb0-400b-a0aa-f1373864ee9f`) → report `c1c3c27c-ca0c-4cee-9431-4031be32dedf`.
2. [SM-KPI] 04 - Location Data Import (`a0d81d37-7b7a-4e94-9c49-68995608350a`) → report `80a10d42-4032-4f8e-a222-41509b97a0d9`.
3. [SM-KPI] 04 - Rollup Data Import (`f566a443-cc20-4122-88ea-95e3fc1780c4`) → report `512fd2ab-40e6-470d-9282-75fffc7b5513`.

### [Safety Metrics] OSHA Summary Data Update

Stable ID: `d389a540-b9fd-41ac-ba86-a1cee1074707`.

1. [SM-OSHA] 01 - Initialization (`b3512beb-c298-41cb-b4c9-0667af8dca41`) → report `f5623fa3-07b1-41a1-bbde-648f2824571c`.
2. [SM-OSHA] 02 - Relate OII's (`e878e419-caec-4cca-88fa-12bc5d9179b2`) → report `eecbcf27-bcfa-4065-a1c0-e0ed27ab7fb2`.
3. [SM-OSHA] 05 - Location Data Import (`2b22ad45-9bb6-4274-8129-815fc87fff60`) → report `17e9824e-34e5-4e45-b62d-d4d97bb57ff6`.
4. [SM-OSHA] 05 - Rollup Data Import (`ff25e60b-57f1-4775-8278-817f1f0f5b62`) → report `b8862b4b-e8b2-47f8-a1a1-27db988c96ad`.

### [Safety Metrics] Generate Location Hours and Headcount Records

Stable ID: `f6fb7c3d-c144-4fd2-a017-7a2995afa57e`.

1. [Safety Metrics] Generate Employee Hours and Heacount (`dd67ef10-c087-4ecb-96b6-4652aed641ad`) → report `1d608ee4-57d7-41c8-bed7-1cffe15d80a3`.

## Import-to-report and writer contracts

| Scheduled import | Source report and stable ID | Target object | Match keys | Written values |
|---|---|---|---|---|
| [SM-KPI] 01 - Initialization | [SM-KPI] 01 - Initialization (`c1c3c27c-ca0c-4cee-9431-4031be32dedf`) | `SafetyMetrics_IncidentRateKPIObject` | `.Date`, `.Location.Id` | `.LocationIdHelp`, `.LocNameHelper` |
| [SM-KPI] 04 - Rollup Data Import | [SM-KPI] 04 - Rollup Data Import (2/2) (`512fd2ab-40e6-470d-9282-75fffc7b5513`) | `SafetyMetrics_IncidentRateKPIObject` | `.Date`, `.Location.Id` | `.RuNumFatalities`, `.RuCntrctWrkdHrs`, `.RuEmplWrkdHours`, `.RuNumDaysAway`, `.RuNumIncLostTim`, `.RuNumIncDayAway`, `.RuNumLostDays`, `.RuCtRecordable`, `.RuNumTrnsfRstDy`, `.RuCtIncidents` |
| [SM-KPI] 04 - Location Data Import | [SM-KPI] 04 - Location Data Import (`80a10d42-4032-4f8e-a222-41509b97a0d9`) | `SafetyMetrics_IncidentRateKPIObject` | `.Date`, `.Location.Id` | `.LoNumIncDayAway`, `.LoNumDaysAway`, `.LoCntrctWrkdHrs`, `.LoNumLostDays`, `.LoCtIncidents`, `.LoNumIncLostTim`, `.LoEmplWrkdHours`, `.LoNumFatalities`, `.LoNumTrnsfRstDy`, `.LoCtRecordable` |
| [Safety Metrics] Generate Employee Hours and Heacount | [SM-HH] Initialize Head Count and Hours Worked Records (`1d608ee4-57d7-41c8-bed7-1cffe15d80a3`) | `SafetyMetrics_HrsandHeadcountObject` | `.Date`, `.Location.Id` | None; initializer supplies key fields only |
| [SM-OSHA] 05 - Rollup Data Import | [SM-OSHA] 05 - Rollup Data Import (2/2) (`b8862b4b-e8b2-47f8-a1a1-27db988c96ad`) | `SafetyMetrics_OSHASummaryObject` | `.Date`, `.Location.Id` | `.RUNumHrsWorked`, `.RuCtHearingLoss`, `.RuCtInjuries`, `.RuNumRstOrJobTr`, `.RuAvgNumEmploye`, `.RuCtFatalities`, `.RuNumDaysAway`, `.RuCtAllOtherIln`, `.RuCtPoisonings`, `.RuCtSkinDisordr`, `.RuCtRespiratorC`, `.RuCtDaysAway`, `.RuCtTrnfrOrRest`, `.RuCtOthrRecrdbl` |
| [SM-OSHA] 05 - Location Data Import | [SM-OSHA] 05 - Location Data Import (`17e9824e-34e5-4e45-b62d-d4d97bb57ff6`) | `SafetyMetrics_OSHASummaryObject` | `.Location.Id`, `.Date` | `.LoCtRespiratorC`, `.LoNumDaysAway`, `.LoCtTrnfrOrRest`, `.LoCtInjuries`, `.LoNumHrsWorked`, `.LoCtFatalities`, `.LoCtOthrRecrdbl`, `.LoAvgNumEmploye`, `.LoCtDaysAway`, `.LoCtHearingLoss`, `.LoCtSkinDisordr`, `.LoCtAllOtherIln`, `.LoCtPoisonings`, `.LoNumRstOrJobTr` |
| [SM-OSHA] 02 - Relate OII's | [SM-OSHA] 02 - Relate OII's (`eecbcf27-bcfa-4065-a1c0-e0ed27ab7fb2`) | `EHSIncidentMang_OIIObject` | `.Id` | `.OSHASummary.Id` |
| [SM-OSHA] 01 - Initialization | [SM-OSHA] 01 - Initialization (`f5623fa3-07b1-41a1-bbde-648f2824571c`) | `SafetyMetrics_OSHASummaryObject` | `.Date`, `.Location.Id` | `.ReporLocationId`, `.LocationPostal`, `.LocationState`, `.NAICSCode`, `.LocationCity`, `.LocationStreet`, `.SICCode`, `.Year`, `.LocationName` |

The match keys are import matching settings, not proof of database uniqueness or locking. All eight import settings are nontransactional. All 75 source aliases resolve to a projection on their import source report.

## Complete report inventory and direct sources

| Report | Stable ID | Graph ID in 1.0.2.0 | Direct source reports | Reporting folder |
|---|---|---|---|---|
| [SM-KPI] 04 - Rollup Data Import (2/2) | `512fd2ab-40e6-470d-9282-75fffc7b5513` | 280 | [SM-KPI] 04 - Rollup Data Import (1/2) (`1c2059ec-a97d-45ef-afc9-81030ab22d67`)<br>[SM-KPI] 02 - Rollup KPI Data (`619364dd-17f7-4bcc-8e5a-c1c214b84106`)<br>[SM-KPI] 03 - Rollup Hours and Headcount (`2967c223-2a5f-474b-a880-88cfb66036a8`) | OOB - Incident Rate Data Setup |
| [SM-KPI] 01 - Initialization | `c1c3c27c-ca0c-4cee-9431-4031be32dedf` | 454 | [SM-KPI] 00 - Location base report for KPI data. (`5659bef0-85f0-4105-86f6-f392271275bb`) | OOB - Incident Rate Data Setup |
| [SM-KPI] 04 - Location Data Import | `80a10d42-4032-4f8e-a222-41509b97a0d9` | 880 | [SM-KPI] 04 - Last Modified Base (`f76200b2-6cc1-4696-9ade-7aef7d45eac6`)<br>[SM-KPI] 02 - Location KPI Data (`7d7e7854-b87e-45a5-a3ed-9d3d679d1b61`)<br>[SM-KPI] 03 - Location Hours and Headcount (`25105669-b87c-4561-b948-88428c2a2ef0`) | OOB - Incident Rate Data Setup |
| [SM-HH] Initialize Head Count and Hours Worked Records | `1d608ee4-57d7-41c8-bed7-1cffe15d80a3` | 1054 | No report sources; reads entities/expressions | OOB - Incident Rate Data Setup |
| [SM-OSHA] 00 - Base rollup report | `d7afe974-07b9-403c-9ca1-96ac8c33f1d7` | 1776 | No report sources; reads entities/expressions | OOB - OSHA Data Setup |
| [SM-OSHA] 05 - Rollup Data Import (1/2) | `1a9f3c5e-bcce-44b4-8efb-f271134ad523` | 1903 | [SM-OSHA] 05 - Location Data Import (`17e9824e-34e5-4e45-b62d-d4d97bb57ff6`) | OOB - OSHA Data Setup |
| [SM-OSHA] 05 - Location Data Import | `17e9824e-34e5-4e45-b62d-d4d97bb57ff6` | 1905 | [SM-OSHA] 05 - Last Modified Base (`b6b3f72b-1222-4671-add1-eabfdd2c307a`)<br>[SM-OSHA] 03 - Location Recordable Data (`c2735e8e-73ea-421b-99ea-bdc6fd07ef1d`)<br>[SM-OSHA] 04 - Hours and Headcount (2/3) (`df4a8ed4-400d-44a9-a77c-7442cad754d4`) | OOB - OSHA Data Setup |
| [SM-KPI] 00 - Location base report for KPI data. | `5659bef0-85f0-4105-86f6-f392271275bb` | 1946 | No report sources; reads entities/expressions | OOB - Incident Rate Data Setup |
| [SM-OSHA] 05 - Rollup Data Import (2/2) | `b8862b4b-e8b2-47f8-a1a1-27db988c96ad` | 2002 | [SM-OSHA] 05 - Rollup Data Import (1/2) (`1a9f3c5e-bcce-44b4-8efb-f271134ad523`)<br>[SM-OSHA] 03 - Rollup Recordable Data (`c997e490-c6d0-4ded-a3b1-db81c2628cfa`)<br>[SM-OSHA] 04 - Hours and Headcount (3/3) (`cce6d073-a2aa-497a-8b8f-9e23faf47b52`) | OOB - OSHA Data Setup |
| [SM-KPI] 02 - Rollup KPI Data | `619364dd-17f7-4bcc-8e5a-c1c214b84106` | 2146 | [SM-KPI] 00 - Rollup base data for KPI reports. (`12ea179a-f422-4d41-9820-7a90799b1b65`) | OOB - Incident Rate Data Setup |
| [SM-KPI] 00 - Rollup base data for KPI reports. | `12ea179a-f422-4d41-9820-7a90799b1b65` | 2148 | No report sources; reads entities/expressions | OOB - Incident Rate Data Setup |
| [SM-OSHA] 01 - Initialization | `f5623fa3-07b1-41a1-bbde-648f2824571c` | 2157 | [SM-OSHA] 00 - Base location report (`3caddcd4-62a1-4686-bff3-3b037f440119`) | OOB - OSHA Data Setup |
| [SM-OSHA] 03 - Rollup Recordable Data | `c997e490-c6d0-4ded-a3b1-db81c2628cfa` | 2290 | [SM-OSHA] 00 - Base rollup report (`d7afe974-07b9-403c-9ca1-96ac8c33f1d7`) | OOB - OSHA Data Setup |
| [SM-OSHA] 04 - Hours and Headcount (3/3) | `cce6d073-a2aa-497a-8b8f-9e23faf47b52` | 2292 | [SM-OSHA] 00 - Base rollup report (`d7afe974-07b9-403c-9ca1-96ac8c33f1d7`) | OOB - OSHA Data Setup |
| [SM-KPI] 03 - Rollup Hours and Headcount | `2967c223-2a5f-474b-a880-88cfb66036a8` | 2308 | [SM-KPI] 00 - Rollup base data for KPI reports. (`12ea179a-f422-4d41-9820-7a90799b1b65`) | OOB - Incident Rate Data Setup |
| [SM-KPI] 04 - Rollup Data Import (1/2) | `1c2059ec-a97d-45ef-afc9-81030ab22d67` | 2465 | [SM-KPI] 04 - Location Data Import (`80a10d42-4032-4f8e-a222-41509b97a0d9`) | OOB - Incident Rate Data Setup |
| [SM-OSHA] 05 - Last Modified Base | `b6b3f72b-1222-4671-add1-eabfdd2c307a` | 2562 | [SM-OSHA] 00 - Base location report (`3caddcd4-62a1-4686-bff3-3b037f440119`) | OOB - OSHA Data Setup |
| [SM-OSHA] 00 - Base location report | `3caddcd4-62a1-4686-bff3-3b037f440119` | 2564 | No report sources; reads entities/expressions | OOB - OSHA Data Setup |
| [SM-KPI] 03 - Location Hours and Headcount | `25105669-b87c-4561-b948-88428c2a2ef0` | 2622 | [SM-KPI] 00 - Location base report for KPI data. (`5659bef0-85f0-4105-86f6-f392271275bb`) | OOB - Incident Rate Data Setup |
| [SM-OSHA] 04 - Hours and Headcount (1/3) | `1dfd076d-51c8-4254-8607-77f8ecf93906` | 2630 | [SM-OSHA] 00 - Base location report (`3caddcd4-62a1-4686-bff3-3b037f440119`) | OOB - OSHA Data Setup |
| [SM-OSHA] 04 - Hours and Headcount (2/3) | `df4a8ed4-400d-44a9-a77c-7442cad754d4` | 2632 | [SM-OSHA] 04 - Hours and Headcount (1/3) (`1dfd076d-51c8-4254-8607-77f8ecf93906`) | OOB - OSHA Data Setup |
| [SM-OSHA] 02 - Relate OII's | `eecbcf27-bcfa-4065-a1c0-e0ed27ab7fb2` | 2654 | No report sources; reads entities/expressions | OOB - OSHA Data Setup |
| [SM-KPI] 04 - Last Modified Base | `f76200b2-6cc1-4696-9ade-7aef7d45eac6` | 2660 | [SM-KPI] 00 - Location base report for KPI data. (`5659bef0-85f0-4105-86f6-f392271275bb`) | OOB - Incident Rate Data Setup |
| [SM-OSHA] 03 - Location Recordable Data | `c2735e8e-73ea-421b-99ea-bdc6fd07ef1d` | 2662 | [SM-OSHA] 00 - Base location report (`3caddcd4-62a1-4686-bff3-3b037f440119`) | OOB - OSHA Data Setup |
| [SM-KPI] 02 - Location KPI Data | `7d7e7854-b87e-45a5-a3ed-9d3d679d1b61` | 2747 | [SM-KPI] 00 - Location base report for KPI data. (`5659bef0-85f0-4105-86f6-f392271275bb`) | OOB - Incident Rate Data Setup |

## Validation and limits

- 25 report definitions, 27 report-to-report source references, eight scheduled imports, three event handlers and 75 mappings resolve. All 25 reports are reachable from the eight import roots; no report dependency cycle or missing report/entity binding was found.
- Five Reporting records place the preparation reports under Applications → Health & Safety → Safety Metrics → OOB - Incident Rate Data Setup / OOB - OSHA Data Setup. ParentReporting is the exact source navigation field name, not object inheritance.
- The five folder records and report-folder links are new evidence in 1.0.2.0. Twenty report metadata records now explicitly carry Visualizations=null; that is not an actual-rate dashboard or regulatory form definition.
- The KPI and OSHA Last Modified Base descriptions specify a 36-hour lookback; their predicates inspect both OII and monthly-summary DateModified and allow either Deleted value. These select scopes; they do not restrict incident aggregation to the last 36 hours.
- Those joins use current location/period values. Neither report provides original-scope history or a complete recovery mechanism for missed runs, hard deletion or moved records. A0–A4 retain the full original/corrected-scope refresh requirement.
- Period-window DateTimeOperand values are serialized enum/count pairs. dateTimeSpan=5 is not a literal five-year window. Exact enum interpretation, boundary/timezone behavior and a supported historical rebuild route remain unverified.

[Decoded report definitions](report-definitions-v1.0.2.0.json) retain predicates, joins, expressions and projections. [Machine-readable lineage](report-lineage-v1.0.2.0.json) retains each mapping path, source alias, projection caption and source mapping rule.
