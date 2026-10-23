# MARCOM Metadata Analysis

Analysis date: 2026-10-23. Source: [MARCOM Adaptive Learning Course File Name and Metadata Guide 09 10 26.xlsx](<raw artifacts/MARCOM Adaptive Learning Course File Name and Metadata Guide 09 10 26.xlsx>). Original copied unchanged; SHA-256 `b5916eb8a87481b546448196dc483764164be47b1c1a68f0bda470d3d984a1c7`.

Only `English language` and `Spanish language` were analyzed, with row 1 as headers. Both `DiscontinueNotReplaced` sheets were excluded from extraction, counts, comparisons, and design conclusions. The archived workbook preserves the original file, including those unexamined sheets. No workbook content was edited.

## Observed Data

| Measure | English language | Spanish language |
|---|---:|---:|
| Course rows | 358 (2–359) | 194 (2–195) |
| Named metadata fields | 24 (A:X) | 25 (A:Y) |
| Unique three-digit IDs (text comparison) | 195 | 148 |
| Unique trimmed Product Codes | 358 | 194 |
| Unique trimmed current package filenames | 358 | 194 |
| Rows with previous filenames | 65 | 24 |
| Industry values after trimming | 11 | 9 |
| Topic values after trimming | 132 | 104 |
| Missing named regulations field | 16 | 7 |

Total: 552 active-tab course rows and 552 distinct trimmed product codes across both tabs. English rows 360–361 are empty. Spanish has an additional title column D, shifting subsequent columns by one relative to English. Map by header meaning with explicit per-sheet offsets, not one shared positional layout.

### Identity and Language

- Three-digit ID `403` occurs for eight industry variants in each language: English rows 3, 59, 91, 194, 200, 214, 289, 312; Spanish rows 2, 33, 48, 92, 95, 104, 159, 171. It is a searchable provider attribute, not a unique catalogue key.
- IDs include leading-zero text such as English A50 (`075`) and A160 (`025`); storage must retain identifier semantics rather than treating them as quantities.
- Product Codes are unique within and across these tabs after surrounding whitespace is trimmed. Examples: English L3 `cst_bak_adl_en` and L59 `fds_bak_adl_en`; Spanish M2 `cst_bak_adl_sp`. Long-term stability is not demonstrated by a single workbook edition.
- A suffix comparison after trimming finds 190 Spanish codes with an English counterpart. Four do not match by that heuristic: Spanish M17 `cst_hcc_adl_sp`, M86 `hlc_hth_adl_sp`, M123 `ind_hci_adl_sp`, M125 `ind_hml_adl_sp`. This is a diagnostic, not an approved translation map. Even matching suffixes do not prove content equivalence or common revision identity.
- Matching codes can have different titles and copyright dates: English C12/I12 versus Spanish C5/J5; English C13/I13 versus Spanish C6/J6. Do not synchronize releases across languages or merge rows by translated title.
- Spanish C contains the reference title and D contains the Spanish title. Descriptions in Spanish T:V can remain English while objectives in W:X are Spanish. A package language does not guarantee every metadata string is translated.

### Shape and Optional Values

- All 552 rows have producer, titles, current filename, classification, industry, language, duration, copyright, price, discount indicator, product code, topic, three auxiliary filenames, keywords, descriptions, and objectives. Previous filenames and regulations are optional in this edition. Completeness here does not establish a universal provider contract.
- Producer is MARCOM and Classification is one common value in this edition. Retain them as explicit attributes rather than deriving them from industry or topic.
- Durations are 30, 45, or 90 minutes; copyright is textual month/year. Neither is an expiry date or course-release sequence.
- Price is 21.95 and discount indicator is Y throughout the active rows; no currency field is supplied. Preserve provider reference metadata without treating it as Terra-Gen's contracted pricing.
- Distinct short, SCORM, and provider-hosted online descriptions occur in English S:U and Spanish T:V. Preserve their separate meanings. Objectives have separate plain-text and HTML representations in English V:W and Spanish W:X.
- Current package, two thumbnails, and question workbook columns contain filenames, not file bytes, URLs, or proof that the assets are delivered. A question workbook is not evidence of an Intelex Quiz Builder configuration.
- Observed maximum string lengths include Spanish localized title 126 characters, keyterms 430, short description 968, SCORM description 2,016, provider-hosted description 2,553, plain objectives 1,019, HTML objectives 1,118, and regulations 932. Use logical long-text fields where appropriate and validate actual platform limits rather than imposing a universal 255-character field.

## Import Exceptions

| Observation | Exact locators | Proposed handling (analysis) |
|---|---|---|
| Product Code has surrounding whitespace | English L123,L201,L231,L313; Spanish M65,M116 | Preserve raw values and a separate trimmed comparison key; do not rewrite provider tokens or derive them from filenames. |
| Current package filename has whitespace | English D97,D152,D178,D204; Spanish E83 | Preserve raw value and use trimmed value for asset matching. |
| Language has trailing spaces | English G35,G81,G124,G205,G243,G346 | Preserve source text; normalize controlled language to `en`. Spanish H2:H195 maps to `es`; provider filename token `sp` is retained unchanged. |
| Industry has trailing spaces | English F and Spanish G, Healthcare Office and Facilities Personnel values | Trim for controlled-value matching; retain source value. English distinct industry count falls from 12 raw values to 11. |
| Multiple previous filenames in one cell | English M128 `ind_346_adl_en.zip/gen_346_adl_en.zip`; M129 `ind_345_adl_en.zip/gen_345_adl_en.zip` | Preserve complete cell; parse these into two alias children each. General delimiter rules still require validation. |
| Unheaded values beyond named regulations column | English Y42,Y83,Y135,Y189,Y261,Y304,Y352 | Seven regulation-like strings, with no header. Preserve as unmapped source cells and flag review; do not silently append to X or discard. |
| Spanish previous-filename header refers to column D | Spanish N1, versus actual package field E1 | Use named meaning and actual package column E; D is Spanish title. |
| Missing regulations | English X (16 rows); Spanish Y (7 rows) | Keep null, not a claim of regulatory exemption. |

There are 89 populated previous-filename cells. Parsing the two observed slash-separated English cells produces 91 alias occurrences; these are not asserted to be 91 globally unique historical packages or one-to-one replacement links. Do not infer deactivation or deletion from excluded tabs or absence in this snapshot.

## Adaptive-Learning Evidence

English T2 and Spanish U2 describe chapter-level pretesting and skipping chapters where the learner demonstrates knowledge, in the description explicitly intended for customer/distributor SCORM installations. English U2 and Spanish V2 separately describe MARCOM's hosted LMS features. This supplies provider evidence for adaptive behavior within the SCORM offering, narrowing the uncertainty raised in the October call. It is not an observed Intelex test, a SCORM manifest inspection, or a guarantee that every supplied package behaves identically. Validate representative English and Spanish packages, adaptive navigation, resumption, and completion/results under the existing compatibility work.

## Design Interpretation

The proposed [ADR-016 model](ADRs/ADR-016-use-a-reusable-marcom-content-catalogue.md) uses a language-specific Catalogue Entry, retained Content Releases, Previous Filename Alias children, and three separate metadata catalogue objects: **MARCOM Classification**, **MARCOM Industry**, and **MARCOM Topic**. The separate objects follow the user's explicit model clarification on 2026-10-23; each release references one record in each catalogue while retaining the raw source labels. Product code identifies the selectable provider entry; three-digit ID, industry, topic, and titles support search. Package filenames, provider copyright, and metadata are retained with each release. The system explicitly designates the current usable release rather than guessing from copyright or a workbook date. Translation-family linking is optional future scope requiring a verified map.

These are analyst recommendations grounded in the observed shape and existing audit requirement. The workbook contains no approved Intelex schema, provider release identifier, immutable content-history guarantee, production load result, or client sign-off.
