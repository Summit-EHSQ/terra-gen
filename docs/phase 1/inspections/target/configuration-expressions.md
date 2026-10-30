# Configuration expressions — Revision 2

Extracted expressions below are preserved from package metadata, not newly asserted tenant-validated formulas. The primary specification provides exact branch conditions and referenced field paths for changed rules; unresolved native bindings are G02 inputs.

### E1897-calculation

PlaDisplayField; E1897.

```text
IF(LEN(CONCATENATE("Action No. - ", ActionNo, " - ", CPARActionReq))>255, CONCATENATE(LEFT( CONCATENATE("Action No. - ", ActionNo, " - ", CPARActionReq), 252), "..."), CONCATENATE("Action No. - ", ActionNo, " - ", CPARActionReq))
```

### E224-calculation

Expression; E224.

```text
IF(OR(DependsOnPub = NULL, COUNT(VisibleIfs) = 0),
	"TRUE"
,
	CONCATENATE(
		'OR("', 
		JOIN(
			VisibleIfs.Reference, 
			CONCATENATE('"=', DependsOnPub.QuestionRef, ',"')
		), 
		'"=', DependsOnPub.QuestionRef
		, 
		IF(VisDepNoAns, CONCATENATE(", ", DependsOnPub.QuestionRef, "=NULL"), "")
		,')'
	)

)
```

### E823-calculation

AnswerText; E823.

```text
IF(PubQuestion.AnswerTypeCode="Choice", 
	Choice.Name
,
	IF(PubQuestion.AnswerTypeCode="Date",
		CONCATENATE(Date, "")
	,
		IF(PubQuestion.AnswerTypeCode="Float", 
			CONCATENATE(Float, "")
		,
			IF(PubQuestion.AnswerTypeCode="Text", 
				Text
			,
				IF(PubQuestion.AnswerTypeCode="Checkbox", 
					CONCATENATE(Checkbox, "")
				,
					""
				)
			)
		)
	)
)
```

### E802-calculation

IsActionMiss; E802.

```text
AND(
	NOT(IFNULL(IsNA, FALSE)),
	PubQuestion.AnswerType.Value = "Choice", 
	Choice <> NULL,
	IFNULL(NbActions, 0) = 0,
	COUNT(FILTER(PubQuestion.ActReqChoices.Id, "=", ChoiceId)) > 0
)
```

### E746-calculation

IsFilled; E746.

```text
IF(OR(
	AND(PubQuestion.AnswerTypeCode="Choice", Choice<>NULL), 
	AND(PubQuestion.AnswerTypeCode="Choices", COUNT(Choices)>0), 
	AND(PubQuestion.AnswerTypeCode="Date", Date<>NULL), 
	AND(PubQuestion.AnswerTypeCode="Float", Float<>NULL), 
	AND(PubQuestion.AnswerTypeCode="Text", Text<>NULL), 
	AND(PubQuestion.AnswerTypeCode="Checkbox", Checkbox<>NULL)
	),1,0)
```

### E896-calculation

IsFindingMiss; E896.

```text
AND(
	NOT(IFNULL(IsNA, FALSE)),
	PubQuestion.AnswerType.Value = "Choice", 
	Choice <> NULL,
	IFNULL(NbFindings, 0) = 0,
	COUNT(FILTER(PubQuestion.FindReqChoices.Id, "=", ChoiceId)) > 0
)
```

### E735-calculation

IsVisible; E735.

```text
OR(
	DependsOn = NULL
,
	AND(
		DependsOn.IsVisible
	,
		OR(
			COUNT(FILTER(PubQuestion.VisibleIfs.Id, "=", DependsOn.Choice.Id)) > 0,
			AND(PubQuestion.VisDepNoAns, DependsOn.IsFilled = 0)
		)
	)
)
```

### E818-calculation

QuesSummaryText; E818.

```text
CONCATENATE(PubQuestion.Content,
IF(AnswerText<>NULL, CONCATENATE(": <b><u>", AnswerText, "</u></b>"), NULL),
IF(Comments<>NULL, CONCATENATE(" <i>(", Comments, ")</i>"), NULL)
)
```

### Proposed limited expression changes

| Mechanism | Proposed expression / instruction | Status |
| --- | --- | --- |
| E629 N/A-comment first condition | `AND(NOT(IFNULL(AllowNA,FALSE)),IFNULL(ComReqIfNA,FALSE))` then set ComReqIfNA FALSE | Proposed using package vocabulary; G02 validation required; apply the additional multiple-choice cleanup changes below |
| E629 ActReqChoices / ComReqChoices cleanup | For Inspection questions, replace each single-choice-only invalid-type test with `AND(AnswerType.Value<>"Choice",AnswerType.Value<>"Choices")`; keep each existing out-of-list membership test. | Proposed scoped edit; G02 supplies the supported scope and event binding. Valid multiple-choice requirement selections must survive saving. |
| E972 Show/Hide Choice List | Show existing Choice_Requirement_Grid_NoFindings for both Choice and Choices in the Inspection scope; hide it for other answer types. | Existing multiple-choice branch hides this grid; expose its existing action/comment selections. |
| W02 initial start condition | `OR(HelperReleaseAP=TRUE,AlBeenCorrected=TRUE)` | Proposed; G06 must confirm native initial completed event order/task suppression |
| S03 review due date | `DATEADD("d",TypeOfInspec.DforFirstReview,TODAY)` | Extracted; retain native expression |
| S04 second review due date | `DATEADD("d",TypeOfInspec.forSecondReview,TODAY)` | Extracted; retain native expression |

Response polarity rule (declarative, not executable XScript): for an answered contributing Choice, read Choice.IsNegative; for Choices, test whether any selected member has IsNegative TRUE. NULL is FALSE. IsActionMiss rule (declarative): for visible applicable Choice/Choices, test whether any selected choice belongs to PubQuestion.ActReqChoices and no distinct linked direct action exists. This replaces the exported single-choice-only test; it is independent of polarity and requires a G02 expression in the Question Answer context.

D01/D02 output branches assign actual configured catalogue record references. Placeholder record IDs and prose conditions are not executable XScript. No unverified runtime type function or fabricated endpoint is provided.
