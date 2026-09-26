---
artifact_title: "Paylocity Employee Integration Technical Requirements and Clarifications"
artifact_type: requirements
date: 2026-09-25
source: "Technical requirements and clarifications supplied for the Terra-Gen Employee Management design"
status: draft
---

# Paylocity Employee Integration Technical Requirements and Clarifications

## Purpose

This artifact records the technical requirements and Intelex platform constraints used to refine the Employee Management architecture. It supplements the workshop transcripts and is the source for the corresponding ADR revisions.

## Integration Boundary

1. Paylocity is the source of employee data. Terra-Gen will use Boomi to create and update custom Paylocity Employee Record records through the standard Intelex Object Data API.
2. The custom Paylocity Employee Record is required because the standard `EmployeeUserAccess` endpoint cannot receive all Terra-Gen-specific inputs, including Position Code Text.
3. APIHub will consolidate downstream provisioning into one request to the standard Intelex `EmployeeUserAccess` endpoint.
4. APIHub will create a person who is not already related to an Intelex Employee by issuing `POST /EmployeeUserAccess` with employee, user-access, settings-derived, and initial group-membership data.
5. APIHub will update an existing person by issuing `PATCH /EmployeeUserAccess({id})` using the related Employee `Id`. The PATCH payload must omit `Groups`; position-code-derived memberships are applied only during initial Employee creation.

## Paylocity Employee Record

1. The object will persist the employee fields, user fields, settings flags, and processing-control properties supported by `EmployeeUserAccess`, together with Terra-Gen-specific and integration-helper fields.
2. Persisted settings flags include `IgnoreUserAccess`, `SendEmail`, `RevokeUserAccess`, `ArchiveIfTasksAssigned`, `DoNotAddGroupAssignments`, `RemoveFromUnlistedGroups`, and `RemoveFromUnlistedBusinessHierarchies`.
3. The record will include, at minimum, these additional fields:
   - `Position Code Text`: text, maximum 255 characters.
   - `Position Code`: M:1 relation to Position Code.
   - `Published Position Code`: M:1 relation to the Published Position Code version captured for provisioning.
   - `Calculated Groups`: calculated `nvarchar` long text containing the serialized group payload.
   - `Trigger API Update`: helper field used to initiate APIHub processing.
   - Reverse access to the related Intelex Employee established through the Employee-to-Paylocity relation.
4. On every Paylocity Employee Record creation or update, an Action Handler will call `GETSETTING` to copy the current processing-control values from Paylocity Employee Integration Settings onto the record.
5. The copied settings are a point-in-time snapshot. Later settings changes affect future record creations and updates but do not retroactively change untouched records.
6. When the record is created and its Position Code is resolved, `Published Position Code` will be set to that Position Code's Current Published Version.
7. If the Paylocity Employee Record is created before its Position Code has ever been published, `Published Position Code` will remain empty and APIHub processing will remain blocked. When the first version is successfully published, the publication process will populate the waiting record with that first Published Position Code.
8. `Published Position Code` is a provisioning snapshot. Later Position Code publications and later updates to the Paylocity Employee Record must not replace the captured version.
9. The APIHub trigger must remain blocked until all prerequisite calculations succeed and `Published Position Code` is populated.

## Position Code Resolution

1. When `Position Code Text` is populated or changed, an Action Handler will call `GETRELATED` to resolve an existing Position Code by exact value.
2. Matching is exact and case-sensitive. Values such as `PC-100` and `pc-100` are distinct.
3. Position Code values must be unique using the same matching semantics.
4. If an exact Position Code exists, the handler will populate the Paylocity Employee Record's Position Code relation.
5. If no exact Position Code exists, the handler will create one and populate the relation.
6. Clearing `Position Code Text` must clear the Position Code relation.

## Automatically Created Position Codes and Notification

1. An automatically created Position Code will set:
   - `Created by Paylocity Integration = true`.
   - `Setup Notification Sent = false`.
   - `Source Paylocity Employee Record` to the record that introduced the code.
2. A Position Code Action Handler will immediately notify all users in the Administrators group when an integration-created Position Code requires setup.
3. The notification will include a direct link to the Position Code, the source employee, and setup instructions. Creation time is not required.
4. The notification must be sent only once. After successful delivery, `Setup Notification Sent` will be set to true.
5. Manually created Position Codes must not produce this notification.

## Position Code Provisioning Configuration

1. Position Code defines the initial user-provisioning policy for employees assigned that code.
2. `Login Location Rule` is required and supports:
   - Same as Home Location.
   - Home Location's Parent.
3. If Home Location's Parent is selected but the Home Location has no parent, Login Location will fall back to Home Location. The form must contain a text hint explaining this rule.
4. One M:N `Groups` relation to the common Intelex Group ancestor will hold Security Groups, Training Workgroups, and Document Distribution Groups. The form will present the same underlying relation as three distinct, type-filtered grids.
5. Document Distribution Groups are eligible because they inherit from the Intelex Group object.
6. Roles require a separate 1:M Position Code Role Assignment structure. Each row contains:
   - One Role relation.
   - Assignment Location Basis: Home Location or Login Location.
7. A Role may occur only once for a Position Code.
8. On initial Employee creation, the system will combine the shared Groups relation and Role Assignments into `Calculated Groups`.
9. Group identifiers will be semicolon-delimited. Location-qualified Roles will use the `EmployeeUserAccess.Groups` notation, such as `RoleId(LocationId)` or `RoleId(LocationCode)`.
10. An empty displayed group category means that the category is unmanaged; it is not an instruction to remove existing membership. Because all three categories share one underlying relation and roles are separately calculated, the creation payload contains one complete initial membership instruction.

## Position Code Publishing Model

1. Provisioning configuration uses two objects:
   - Position Code: stable master record and current approved provisioning values.
   - Published Position Code: version record related M:1 to Position Code.
2. Position Code contains `Current Published Version`, an M:1 relation to Published Position Code.
3. Creating a Position Code will also create its first Published Position Code in the `Draft` stage.
4. Published Position Code uses a single-stage workflow. The user completes the Draft stage through a Publish action.
5. A newly created Position Code is ineligible for APIHub processing until a Published Position Code has successfully completed the Publish action.
6. On successful publication, the handler will:
   - Replace matching scalar values on Position Code with values from the version.
   - Replace the complete Groups M:N relation on Position Code.
   - Replace the complete Position Code Role Assignment collection on Position Code, including location-basis values.
   - Set `Current Published Version` to the successfully published version.
7. `Current Published Version` must be set only after all copy operations and the Publish workflow action complete successfully.
8. Publication must have rollback semantics. A failed publication must leave the prior master configuration and Current Published Version unchanged.
9. Administrators create later versions manually from the Published Versions 1:M grid on Position Code.
10. A new version will be prepopulated from its predecessor, including scalar values, Groups, and Role Assignment rows. When a current published version exists, it is the predecessor.
11. Draft changes do not affect provisioning. The latest successfully published configuration remains active until another version is successfully published.
12. On first publication only, the publication handler will populate `Published Position Code` on Paylocity Employee Records related to the Position Code that are waiting without a captured version. Later publications must not update existing captured-version relations.

## Employee Creation, Linking, and Update

1. Before triggering APIHub, Action Handlers will resolve Position Code, capture or confirm Published Position Code, calculate Login Location and memberships from that captured version, serialize Calculated Groups, snapshot settings, and populate all other derived request properties.
2. For a new Employee, APIHub will send one POST request to `EmployeeUserAccess`. `Groups` will contain the Calculated Groups value so employee creation, user-access creation, and initial memberships are handled in one request.
3. The Intelex Employee object will contain an M:1 Paylocity Employee Record relation with its reverse relation enabled.
4. After an Employee is created, an Employee Action Handler will use `FETCHVALUE` and Employee Number to associate the Employee with its Paylocity Employee Record.
5. The reverse relation makes the new Employee and its `Id` available from the Paylocity Employee Record after successful creation.
6. For an existing related Employee, APIHub will PATCH `EmployeeUserAccess` using that Employee `Id` and will omit `Groups`.
7. Position-code-derived provisioning is therefore applied on initial Employee creation. A Paylocity Employee Record update does not reapply or reconcile memberships for an existing Employee.

## Validation and Acceptance Criteria

1. Duplicate Position Codes and duplicate Roles within one Position Code are rejected.
2. APIHub cannot trigger when Position Code is unresolved, Published Position Code is empty, or a required calculation fails.
3. POST requests contain the complete calculated initial membership string; PATCH requests never contain `Groups`.
4. Exact Position Code matching, including case, is preserved through lookup and uniqueness validation.
5. Clearing source Position Code Text clears the related Position Code.
6. Automatically created Position Codes generate exactly one setup notification; manually created Position Codes generate none.
7. Failed publication does not change the active Position Code configuration.
8. A successful Employee creation establishes the Employee-to-Paylocity relation using Employee Number before future updates depend on the related Employee `Id`.
9. A Paylocity Employee Record created after publication captures the then-current Published Position Code; one created before first publication captures the first successfully published version when it becomes available.
10. Republishing a Position Code does not change a Published Position Code already captured on a Paylocity Employee Record.

## Source API Reference

The baseline request fields, group notation, validation rules, and POST/PATCH behavior are documented in the [Intelex User Management API](https://developers.intelex.com/#user-management-api).
