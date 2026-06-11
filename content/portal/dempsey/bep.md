# EVC-1.5 Lite BIM Execution Plan
## La Jolla Cove Hotel · Job 25029 · Dempsey Construction

**Document control**
REV 0 · 2026-06-10 · Status: Draft for coordination review
Prepared by Everist Consulting under Letter of Engagement EVC-1.5 (effective 2026-06-01, executed 2026-06-09), Item 4. This document governs the routing coordination under LOE Item 6.

---

## A. Purpose and Boundary

This plan makes existing field authority legible. It is not a contractual mechanism and does not pretend to be. It carries no authority of its own. It borrows Dempsey's field authority by making it legible.

The plan does three things:

1. It codifies the coordination priority rules established in the first session: structure, then ceilings, then ducts, then fire protection.
2. It cues each coordination decision to its owner by trade.
3. It defines a single instruction vector for the named systems.

The plan does not require the installing subcontractor to model, does not impose retroactive procurement standards, and does not declare expectations the contracts do not back.

The plan runs slightly behind the coordination sessions with the installing subcontractor and captures what each session reveals.

---

## B. Project Information and Roles

| Field | Information |
|---|---|
| Project | La Jolla Cove Hotel renovation |
| Address | 1155 Coast Blvd, La Jolla, CA 92037 |
| Job | 25029 |
| Client | Dempsey Construction |
| Consultant | Everist Consulting (Chris Everist, Principal) |
| Engagement | EVC-1.5 Scan Bridge, LOE effective 2026-06-01 |
| Governing milestone | Overhead rough-ins begin 2026-07-29, Level 2 first |

**Coordination roles**

| Lane | Party | Role |
|---|---|---|
| Dempsey field | Jackson Tews, Superintendent | Field authority, coordination direction, back-check |
| Dempsey field | Joe Ciaccio, Senior Superintendent | Field authority |
| Consultant | Everist Consulting | Coordination, conflict identification, integration |
| Installing subcontractor | True Air | Mechanical installation for the named systems, shop drawings |
| Design | Design team and engineers of record | Design intent, RFI responses |
| Scan vendor | ARC (Architectural Resource Consultants) | Registered scan and existing-conditions model |

**Scan vendor relationship.** The registered scan and existing-conditions model are contracted directly between Dempsey and the scan vendor. Everist coordinates the scan scope and reviews the deliverable for fitness against the coordination need. Everist does not contract, price, warrant, or direct the scan vendor.

**Scan scope of record.** A registered scan and existing-conditions model of the Level 1 and Level 4 areas bounded by the marked-up plans dated 2026-06-01. Scan accuracy at LOA 30 (plus or minus 15 mm, USIBD Level of Accuracy). Modeled content at LOD 200. The point cloud is web-hosted, with measurement available through the Autodesk Recap viewer. Because the bounded areas are unframed, captured content is predominantly existing structure, slab, and overhead piping from the floors above.

---

## C. System Priority Structure

When two systems occupy the same space, the system with the higher priority (the lower number) takes precedence. The hierarchy below is typical. Exceptions are named where this project departs from it, and the named exceptions are the substance the field team confirms.

**Priority 1 is Existing-to-Remain.** This is a scan-anchored engagement. The registered point cloud is the evidence layer for existing conditions, and dimensions are pulled from it. Existing-to-remain outranks every proposed system.

**Adopted priority hierarchy (typical baseline)**

1. Existing-to-Remain
2. Structural
3. Ceilings
4. Architectural, including light fixtures
5. Miscellaneous metals
6. Equipment and devices, including required clearances
7. Duct mains and branches
8. Process piping
9. Gravity plumbing (sloping lines take priority)
10. Large electrical racks
11. Cable tray
12. Piping racks
13. Fire mains
14. Fire standpipe
15. Small electrical racks
16. Mechanical pipe branches
17. Fire branches

The first-session rules (structure, then ceilings, then ducts, then fire protection) map onto this hierarchy and govern where the named systems conflict.

**Project exceptions**

1. **Ceiling, read as two elements.** The finished ceiling height is a protected target and ranks high among the constraints. The ceiling assembly is the adjustable solver, presently the GridLock assembly under RFI 102, and ranks low because it adapts to the confirmed positions above it. *Decision owned by: design team for the assembly selection (RFI 102 record); Dempsey for installed height confirmation.*

2. **Committed equipment elevated.** The committed and installed fan coil units are coordinated as near-fixed rather than at the typical equipment rank, because they are committed in the field. *Decision owned by: Dempsey field for installed position; True Air for unit data.*

**Priority is not urgency.** Fire protection ranks low in precedence because it yields and routes last. At the same time it carries the tightest clearance in the named-system scope. Low precedence does not mean low urgency.

The priority structure is rendered as a governed-elevation vertical-stack section (Exhibit 2) so the field team can confirm on paper that it is complete and accurate before it anchors coordination.

---

## D. Modeling Scope by System

This section establishes the level to which each system is modeled, the conditions consciously deprioritized for field coordination, and the prefabrication boundary. It is a scaffold at REV 0 and is issued as a draft for the team to confirm. It will fill as the existing-conditions model and the coordination sessions reveal scope.

Systems are organized by Uniformat II classification. The table below scaffolds the Work Breakdown Structure and carries, for each element, the model element author (MEA) and the level of development (LOD).

| Uniformat | System or deliverable | Author (MEA) | LOD | Coordination state |
|---|---|---|---|---|
| B1010 | Existing structure and slab (deck above, beam) | Scan vendor, existing-conditions model | 200 / LOA 30 | Existing-to-remain reference |
| D2020 | Existing overhead piping from floors above | Scan vendor, existing-conditions model | 200 | Existing-to-remain reference |
| D3050 | Fan coil units (committed equipment) | True Air for unit data; existing-conditions model where installed | 200 reference | Near-fixed reference |
| C3030 | Ceiling height target | Design and RCP record | Datum | Protected target |
| C3030 | Ceiling assembly (GridLock, RFI 102) | Installing framing subcontractor for shops; Everist coordination reference | 200 to 300 | Coordinated, RFI 102 |
| D3040 | Exhaust duct main (proposed routing) | Everist coordination model for conflict identification; True Air for shops | 300 or below | Coordinated for conflict ID |
| D4010 | Fire protection main (proposed routing) | Everist coordination model for conflict identification; installing subcontractor for shops | 300 or below | Coordinated for conflict ID |

**Prefabrication boundary.** Anything not modeled to a coordinated state is not available for prefabrication.

**Conditions consciously deprioritized at this stage.** Perimeter walls are excluded from the existing-conditions model scope. Glazing and storefront framing are not within the scan areas. These are deprioritized for field coordination at REV 0 and are documented here so the boundary is explicit.

---

## E. Decision Ownership

Each coordination decision is cued to its trade owner using the formula "Decision owned by: [party]." This section does not commit solutions on an owner's behalf. The detailed sequence is carried in the integrated swim-lane (Exhibit 1).

Governing decisions from the current record, cued and not committed:

- Base versus four-floor scan extent (the Levels 2 and 3 framing line-of-sight add). *Decision owned by: Dempsey.*
- Shop-drawing back-check owner. *Decision owned by: Dempsey (named owner to be assigned).*
- Exhaust branch diameter through the beam zone. *Decision owned by: mechanical engineer of record (per the RFI 146 record). Raised by Dempsey field.*
- Ceiling assembly selection. *Decision owned by: design team (RFI 102 record).*
- Fan coil installed position. *Decision owned by: Dempsey field.*

---

## F. Shop-Drawing Ownership and Submission Structure

The installing subcontractor owns and submits the shop drawings for its scope. For the named mechanical systems, True Air owns and submits. The back-check of the shop drawings against the governing RFI is owned by Dempsey. Consistent with the LOE, Everist does not produce mechanical or fire-protection shop drawings.

The ownership and submission lanes are carried in the integrated swim-lane (Exhibit 1).

---

## G. Instruction Vector

The named systems follow a single instruction vector:

**coordination finding → RFI → confirmed direction → True Air shop drawings → back-check against the RFI (Dempsey-owned) → hold at install**

The back-check step requires a named Dempsey owner. If it is unowned, it defaults to nobody. The vector is carried in the integrated swim-lane (Exhibit 1).

---

## H. Coordination Cadence

Coordination runs twice weekly: one virtual session and one on-site session on Thursdays. Each meeting type carries an expected output.

- **Virtual session.** Status, open-item triage, and RFI tracking.
- **On-site session, Thursdays.** Working coordination with the installing subcontractor. The meeting type depends on shop-drawing status. With shops in hand, the session is a back-check kickoff against the RFIs. Without shops, the session sets the rules of the road, and shops become the dated deliverable out of the meeting.

The cadence runs slightly behind the True Air sessions and captures what each reveals into the capture register.

**Schedule anchor.** Overhead rough-ins begin 2026-07-29, Level 2 first, then Level 3 on 8-14, Level 4 on 9-04, and Level 1 on 9-23, per the 2026-06-15 construction schedule. Framing line of sight on Levels 2 and 3 is the near-term driver.

---

## I. Capture Register

The plan advances from a standing capture register, not from memory. After each coordination session the capture is recorded in a fixed format: decisions made, owner named per decision, RFIs triggered or referenced, open busts, and items assigned with dates. Section updates follow from the register.

The register is maintained by Everist Consulting and is empty at REV 0. The first captures land after the coordination session on 2026-06-11.
