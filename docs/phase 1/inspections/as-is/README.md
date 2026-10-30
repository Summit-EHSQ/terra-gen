# Inspections baseline specification

[Read the Solution Specification](solution-specification.md).

- [Logical diagrams](baseline-diagrams.md)
- [Exact behavior and form register](configuration-register.md)
- [Source evidence registry](evidence.json)
- [Extraction validation](validation.json)

Baseline only, from the 28 October 2026 package export. Repository ADRs were excluded.

Regenerate from the repository root using Node.js:

```powershell
node scripts/document-inspections-baseline.cjs "C:\Users\DaveMcLean\Downloads\Inspections + Checklist Framework Config Extract(v1.0.0.0).ipack" "docs/phase 1/inspections/as-is"
```
