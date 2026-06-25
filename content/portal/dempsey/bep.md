---
revision: "REV 3"
date: "June 25, 2026"
status: "For transmittal, June 25, 2026"
---

# Lite BIM Execution Plan

**La Jolla Cove Hotel · Job 25029 · Scan Bridge**

A coordination governance work product. It makes existing field authority legible so that every party reading it can see who decides, when, on what evidence, and how the decision is traced afterward.

| | |
|---|---|
| Project | La Jolla Cove Hotel, 1155 Coast Blvd, La Jolla, CA 92037 |
| Job number | 25029 |
| Prepared by | Everist Consulting |
| Revision | REV 3 |
| Date | June 25, 2026 |
| Status | For transmittal, June 25, 2026 |
| Supersedes | REV 2, June 19, 2026. Incorporates capture-ingest 04, ARC as-built delivery June 24, deliverables table with zone sets, Flag 1 INFILLED LIGHTWELL encoding, Flag 2 shaft naming, Exhibit 2 findings, four-area coordination structure, and June 25 site-walk assumption register updates |
| Governing milestone | Overhead rough-in start at Level 2, July 29, 2026 |

---

## A. Purpose and Boundary

This plan makes the project's existing field authority legible. It is not a contractual mechanism and does not present itself as one. It carries no authority of its own. It borrows the field authority Dempsey Construction already holds and makes that authority legible to every party that reads it.

The plan does three things:

1. It codifies the coordination priority rules established in the first coordination session: structural, then ceilings, then ducts, then fire protection.
2. It cues each coordination decision to the party that owns it, by trade.
3. It defines a single instruction vector for carrying a coordination finding to a held install, and it adopts RFI-number tagging as the method that traces a changed element from decision to install.

The plan does not require True Air to model, does not impose retroactive procurement standards, and does not declare expectations the contracts do not back.

The countersigned Letter of Engagement, effective June 1, 2026, and its six scope items define what Everist Consulting owns on this engagement. This plan documents coordination governance within that scope. It does not extend Everist Consulting into markup or shop-drawing production, fabrication or installation modeling, or design responsibility, each of which the Letter of Engagement excludes. The plan runs alongside the coordination sessions and captures what each session reveals.

---

## B. Project Information and Roles

The engagement extends the prior Phase 1 relationship, closed May 2026, into a defined bridge scope ahead of the overhead rough-in. The overhead rough-in starts at Level 2 on July 29, 2026, with Level 3 following on August 14, Level 4 on September 4, and Level 1 on September 23.

| Role | Party | Scope on this engagement |
|---|---|---|
| General contractor and field authority | Dempsey Construction. Jackson Tews, Assistant Superintendent. Joe Ciaccio, Senior Superintendent. | Owns field direction, RFIs, the field back-check at install, and install holds |
| General contractor, submittal review | Dempsey Construction. Jason Garrett, Dempsey PE. | Owns quality control, the admin back-check of True Air markups against RFI direction, and RFI administration. Coached by Chris Everist and Jackson Tews for cycle one. Joins the Tuesday model review. |
| Coordination | Everist Consulting | Scan scope definition, scan vendor coordination, existing-conditions integration, this plan, the coordination session, routing analysis for the named systems, and the back-check checklist with first-cycle coaching |
| Mechanical, installing subcontractor | True Air | Produces marked-up mechanical plans, the project's shop-drawing equivalent, and owns their submission. Owns fabrication and installation. |
| Design team and structural engineer of record | Design team and SEOR | Owns design intent and engineering authority decisions |
| Plumbing engineer of record | H+W Engineering. Travis Wagner, P.E., Mechanical and Plumbing Director. | Authored the Level 4 ceiling plumbing rework. A design-intent reference for Level 4 integration, not a decision owned by Dempsey or Everist Consulting. |
| Scan vendor | ARC, Architectural Resource Consultants | Produces the registered scan and the existing-conditions model under direct contract to Dempsey Construction |

**Scan scope of record.** A registered scan and existing-conditions model of the whole building, Levels 1 through 4, under Dempsey notice to proceed dated June 10, 2026. The scan executed June 11, 2026. The point cloud is delivered in Autodesk ReCap. The existing-conditions model was delivered by ARC on June 24, 2026, to full Dempsey distribution. Both architectural and structural systems and MEP and fire-protection systems models were delivered in native Revit format and IFC export. IFC is the confirmed SketchUp import path and imports cleanly. Survey control is excluded from this scope. The scan uses a stairwell and internal control loop only, because the studs are underway, the floors are stable, and the scope is overhead coordination rather than floor flatness. The exclusion is recorded so that any future floor-flatness mapping is recognized as new scope.

**Scan accuracy, measured and represented.** Measured accuracy, the accuracy of the captured points, is near LOA 30 at plus or minus 15 mm on the USIBD scale. Represented accuracy, the accuracy a reader should attribute to the modeled geometry, may be LOA 20, a coarser level, because the as-built model abstracts the point cloud. Any measurement that requires LOA 30 is taken from the point cloud, not from the model. The validation method and the path for geometry that falls outside the stated accuracy are defined in section D.

**Broker note.** The scan vendor contracts directly with Dempsey Construction. Everist Consulting coordinates the scan and does not contract, price, warrant, or direct the scan vendor's work.

---

## C. System Priority Structure

Priority resolves which system governs when two occupy the same space. The lower the priority number, the higher the precedence.

**Baseline.** The typical coordination hierarchy is the starting point, and it is the reference every project exception is measured against. In order of precedence: existing to remain, structural, ceilings, architectural including light fixtures, miscellaneous metals, equipment and devices including clearances, duct mains and branches, then the remaining distribution systems, with fire mains, fire stand pipe, and fire branches near the flexible end of the order. This hierarchy is typical. Exceptions exist on this project and are named below.

The session-one rules map onto the baseline as the project default: structural, then ceilings, then ducts, then fire protection.

**Priority 1, existing to remain, is scan-anchored on this engagement.** The registered scan and the existing-conditions model are the evidence layer for existing structure, slab, and overhead conditions across the whole building. Dimensions are pulled from that record.

**Project exceptions, named, with rationale and owner.**

Exception 1. The ceiling resolves into two elements with different precedence.

- The finished ceiling height is a protected datum and holds high precedence. It is the height the coordination protects. The targets of record are 7 ft 2 in at restrooms and 8 ft 2 in at bedrooms. Because the finish flooring type and thickness are not yet selected, the targets are set against the thickest candidate finish, so a thinner selection yields a taller ceiling and never a shorter one. The assumed thickness and the reasoning are documented in section D.
- The ceiling assembly is the flexible solver and holds low precedence. The assembly adapts to the confirmed positions above it. The assembly under coordination is the locking drywall grid system at approximately 1.5 inches, carried under RFI 102.

Decision owned by: owner and design team for finish selection and tolerance. Dempsey for tolerance adoption and installed-height confirmation. Design team for the assembly selection under RFI 102.

Exception 2. Committed equipment is elevated.

- The per-bathroom fan coil units are committed and installed, turned to clear the plumber and set within the stud framing. Committed equipment of this kind is coordinated as near-fixed, an exception to the typical equipment rank.

Decision owned by: Dempsey field, as the condition that committed them.

**Priority is not urgency.** A system low in the priority order yields when it shares space with a system above it. That is a separate matter from how binding its clearance is on the schedule. The fire-protection and sprinkler main is low in the priority order and routes around the systems above it, and its clearance is at the same time among the tightest conditions on the floor. The plan keeps the two axes separate so that low priority is never read as low urgency.

An illustrated governed-elevation version of this priority structure is maintained as Exhibit 2 for field confirmation, so that the team can confirm the structure is complete and accurate before it anchors coordination.

---

## D. Modeling Scope by System

This section is the single source of truth for the modeling scope. The Model Element Table below classifies every modeled system by Uniformat II, with its Model Element Author, its level of development, and its current status in one consolidated grid. The As-Built Integration Scope that follows is the work program: the four study areas anchored at Level 2, the numbered studies that resolve the building within each area, the located study map at Exhibit 3, and the backlog held separately. The table is the scope and where each element stands; the study inventory is the work program, why each study exists, where it is proposed to land, what it is delivering, and what it is waiting on.

### Model Element Table

| Uniformat | System | Comment | Model Element Author | LOD | Status |
|---|---|---|---|---|---|
| Existing reference | Existing structure, slab, and overhead conditions, whole building, Levels 1 through 4 | ARC Revit as-built; the measured base every study coordinates against | ARC | LOD 200, captured near LOA 30, represented at LOA 20 | Delivered June 24, 2026. Arch/struct and MEP/FP systems in native Revit and IFC. IFC confirmed as the SketchUp import path. |
| B1010 | Superstructure, structural penetration coordination, elevator lobby south conflict zone | Elevator-lobby penetration study | Everist Consulting, coordination | LOD 300 or below | Partial, In coordination |
| C1010 | Interior construction, critical metal framing constraining the overhead plenum | Installed framing arrives in the as-built; un-installed treatment pending the as-built | ARC for installed, Everist Consulting for un-installed, pending | As-built LOA for installed, pending for un-installed | Partial, In coordination |
| C3030 | Interior finishes, ceiling assembly under RFI 102 GridLock | The tolerance solver named in section C; the surface named systems coordinate against | Everist Consulting, coordination | LOD 300 | Released, In coordination |
| D3040 | HVAC distribution, exhaust ductwork | Exhaust routing study | Everist Consulting, coordination; True Air, markups | LOD 300 or below | Partial, Pending design direction |
| D3040 | HVAC distribution, refrigerant piping, VRF | Refrigerant and branch-box relocation study | Everist Consulting, coordination; True Air, markups | LOD 300 or below | Partial, In coordination |
| D3050 | HVAC terminal units, fan coils | Fan coil placement study | Everist Consulting, coordination; True Air, markups | LOD 300 or below | Partial, In coordination |
| D4010 | Fire protection, sprinkler main and branches | Fire protection routing study | Everist Consulting, coordination; fire-protection subcontractor, shops | LOD 300 or below | Partial, In coordination |

Status reads in two parts: the release state of what each study models against, and the modeling progress. Partial means the basis is in hand but incomplete; Released means it is firm. Exhaust reads Partial because the routing direction is pending a design team response. No exhaust routing solution is advanced beyond the pending design direction. The ceiling row reads Released, In coordination because the governing datum is firm and coordination against it is underway.

**Source model and revision sequence.** The ARC as-built model was delivered June 24, 2026, as noted in section B. This revision is the first to coordinate against a delivered model. It establishes the deliverables table, advances all five studies off Not Started, adopts the INFILLED LIGHTWELL structural constraint encoding, folds in the Study 04 shaft naming, and incorporates the Exhibit 2 coordination findings for Studies 03 and 05.

**Modeling scope by level.** The scan captured all four levels. Level 2 is the priority level, with the overhead rough-in starting July 29, 2026. Levels 3 and 4 replicate the Level 2 four-area structure except as noted. Level 1 and Level 4 conditions are held in the backlog below.

**Location basis and four-area coordination structure.** The verified model carries two core shafts. RF-SHFT is the exhaust riser, 26 by 6 inches, carried from Level 1 to roof via the top of the electrical room. GRS-SHFT is the grease shaft, 24 by 14 inches, carried from Level 1 to roof. The former lightwell is not a routing zone; it is carried as the INFILLED LIGHTWELL structural constraint, the reinforced infill bays across Levels 2 to 4. Canonical encoding: grey line-hatch fill, grey outline, one label per level, Level 2 through Level 4. Distribution: one bay at Level 2, five bays at Level 3, five bays at Level 4. It is a structural constraint, not a routing zone. Tag exactly as written: INFILLED LIGHTWELL. The West Corridor, W-COR, is refrigerant-dominant, carrying exhaust co-present on Levels 2, 3, and 4.

The four study areas anchor at Level 2, with Levels 3 and 4 following the same structure unless noted:

**Corridor.** Refrigerant bundle and fire protection main route through the structural bays. The available beam penetration in the corridor is 5 inches by 18 inches; it fits fire protection and refrigerant, and does not fit exhaust. Branch selector box distributor terminations are also present in this zone. The corridor ceiling ranges from 7 ft 2 in at the beams to 7 ft 6 in to 7 ft 8 in between beams.

**Elevator lobby south.** Shaft vertical-to-horizontal duct transition, routing around existing structure, ducts, and fire conditions. Elevator-lobby fan coil at FC-3-329 on Level 3, studied as the typical condition.

**Elevator lobby north.** Refrigerant corner turn and structural beam crossing at the north end of the elevator lobby. Beam penetration under review.

**West corridor.** Fan coil, exhaust, and fire protection convergence. Existing conditions modeled per the June 25 site walk. The routing through this zone is represented as existing conditions; the exhaust routing is not resolved.

The located study map at Exhibit 3 places the repeating conditions on the floor plans, color by system under a six-system key, with the two core shafts threaded through every level.

**Validation protocol.** Measurements are checked against the point cloud as the evidence layer. When a modeled element falls outside the stated level of accuracy, it is flagged and routed to the relevant stakeholder for a decision. It is never silently absorbed. The flag path is to identify the out-of-accuracy element, flag it with the affected system and location, and route it to the owner named for that decision.

**Assumption register.** Modeling conventions adopted on this engagement are recorded so that any reader can reproduce the basis of a modeled element.

- Sagging pipe is modeled at true diameter, fit to the point cloud, with the lowest captured point governing.
- Finish flooring thickness is set at the thickest candidate finish until a selection is made, consistent with the ceiling-height tolerance in section C.
- Congestion weighting is a relative priority, stated as an order rather than a count. It is a closed approximation, not a pending validation.
- Beam bottom, measured by ARC, June 24, 2026: Level 4 ranges from 7 ft 7 in to 7 ft 9 in with approximately 2-inch variance across the floor; Level 3 approximately 1.5-inch variance; Level 2 approximately 1-inch variance; Level 1 level and orthogonal. The fan coil slot at Level 4 is as tight as 5 inches between the 7 ft 2 in bath ceiling lower bound and the 7 ft 7 in worst-case beam bottom. This is the dimensioned basis for Exhibit 2 Finding 2. Supersedes the prior unverified 8.5-inch beam-depth assumption.
- Corridor beam penetration: 5 inches by 18 inches available through the structural bays; fits fire protection and refrigerant; does not fit exhaust. Source: field and True Air, verified at the June 25 site walk. Phase-0 verify: confirm per level.
- Elevator-lobby fan coil (FC-3-329, Level 3 studied unit): 57 inches wide by 24 inches high by 10 inches deep. Height resolved to 24 inches at the June 25 field session. Phase-0 verify: confirm per level against the equipment schedule; units differ at lower levels.
- Refrigerant branch selector box: approximately 24 inches by 24 inches by 12 inches. Source: field and True Air supplied. Phase-0 verify: confirm per level.
- Worst-case refrigerant bundle envelope: approximately 3 inches by 30 inches; three mains at 3 inches each. Source: refrigerant shops June 15 and June 18 session. Phase-0 verify: confirm per level.

**Prefabrication boundary.** Anything not modeled to a coordinated state cannot be prefabricated.

**Conditions consciously deprioritized.** Perimeter walls are excluded from the existing-conditions model scope. Glazing and storefront framing are not within the scan areas. Survey control and floor-flatness mapping are excluded, as recorded in section B. Equipment beyond the committed fan coils, such as rooftop units and panels, is outside the modeled scope at this revision. These are deprioritized for field coordination at this revision and are documented so the boundary is explicit. As scope firms, conditions that move into or out of the coordinated set are recorded in the capture register, cited to the RFI or session that moved them.

### As-Built Integration Scope

The conditions deferred at the Phase 1 close return on this engagement as coordination studies, each anchored to the ARC as-built point cloud rather than the design drawings, and cited by RFI. The ARC as-built model is delivered as of June 24, 2026, and this is the scope it makes real. Each study is a known gap the integration inherits, tested against the point cloud at the lowest-point convention, with its decision cued to its owner. Governed-elevation representative sections, the method carried forward from Phase 1, are the test instrument.

Exhibit 2 is the annotated vertical stack at the Level 3 typical condition. It documents four coordination conditions with numbered 3D text, keys 1 through 4: (1) main duct conflicts with the bath ceiling at 7 ft 2 in; (2) bath fan coil bounded between the 7 ft 2 in bath ceiling and the deck bottom; (3) fire protection main running parallel alongside the main duct; (4) no overhead systems run above the 8 ft 2 in living area ceiling. Findings 1 and 2 are adopted below as the Study 03 primary finding. Finding 3 is adopted below as the Study 05 co-presence note. Finding 4 governs all studies and is noted under the governing constraint at the close of this section.

Zone bindings in the studies below are proposed pending field markup return on Exhibit 3. Field marks govern any divergence per the field-authority hierarchy. Field-seated calls sit with the field leads per the established cadence and the field-authority hierarchy; the routing and structural calls route to the design and structural authority by RFI where noted.

**Active studies.**

**01 Refrigerant distribution.** The branch refrigerant boxes that serve the fan coils relocate from the hallways into the suites to free hallway plenum for the central duct run. Because the boxes serve the fan coils, the refrigerant distribution and the fan coil placements coordinate together. The main refrigerant line sets run the full corridor overhead at a worst-case bundle envelope of approximately 3 inches by 30 inches, with three mains at 3 inches each. Branch selector box terminations are distributed through the corridor zone. Proposed zone: West Corridor (dominant); north suites and south suites (co-present). Bounded deliverable: routing section, west line-set route against ceiling targets through the corridor, with a coordination note on corridor congestion at the structural bays. Status: In coordination. *Decision owned by: design team, with True Air input.*

**02 Exhaust routing.** The study evaluates three routing options: beam penetrations, corridor routing, and in-unit fan. The north suite exhaust resolves at 4 inches and is confirmed. The south suite residual zones at 3 inches are below the fabrication floor and remain open. The viable path for the corridor routing is a 90-degree turn down the corridor, a design change that affects fire-sprinkler hydraulics. The contractor is issuing an RFI to the design team covering the problem areas, the penetration constraints, the in-unit option, and a request to resolve the combination. No exhaust routing solution advances beyond pending design direction. The west corridor exhaust runs on Levels 2, 3, and 4 are represented as existing conditions in the WCOR area; the routing through those zones is not resolved. Proposed zone: south suites (dominant); north suites, corridor, and West Corridor (co-present); exhaust riser terminus RF-SHFT at the elevator lobby, Level 1 to roof. Bounded deliverable: decision log pending design team RFI response; the record documents the problem areas, the three options, and the combination constraint. Status: Pending design direction. *RFI open to the design team. References RFI 146.*

**03 Fan coils.** Representative placements at four north-south locations, coordinated with the refrigerant distribution that serves them. The elevator-lobby fan coil is studied at FC-3-329 on Level 3 (studied typical, 57 inches wide by 24 inches high by 10 inches deep) and repeats at Level 4 as FC-429, a distinct Daikin split system on a dedicated heat pump, outside the current Level 3 elevator-lobby study scope. The same fan coil condition occurs at FC-1B-2 on Level 1, carried with the Level 1 backlog; Level 2 carries none, so the repeat is not a clean upward sequence. Levels 2 and 3 north released to hang June 22. Proposed zone: north suites (dominant); south suites and West Corridor (co-present); elevator lobby south at Level 3 and Level 4. Bounded deliverable: typical-condition section at the studied elevator-lobby fan coil, FC-3-329. Coordination note: Level 1, Level 3, and Level 4 carry the fan coil condition with Level 2 skipped; the Level 4 replicated instance is a separate split system. Status: In coordination. *Decision owned by: Dempsey field.*

Exhibit 2 findings, Study 03 (primary). Finding 1: The main duct at 16 by 6 inches, constrained variant, conflicts with the RFI 102-approved bath ceiling assembly at 7 ft 2 in AFF. The duct cannot run at its current elevation without cutting into the approved ceiling plane. Three resolution paths: resize the duct, reroute above the conflict zone, or accept a ceiling variant. None of these is owned by Everist; the finding is documented for resolution by the general contractor and design team. Finding 2: The bath fan coil at 9 by 32 inches must sit above the 7 ft 2 in bath ceiling as the lower bound and below the deck bottom as the upper bound. ARC measured beam bottom ranges from 7 ft 7 in to 7 ft 9 in at Level 4, making the fan coil slot as tight as 5 inches at the worst-case beam bottom. The duct connection to the bath main is flagged pending field verification. *Decision owned by: Dempsey field coordination with the design team. References RFI 102.*

**04 Elevator-lobby penetrations.** The south-side conflict zone integrated against the scan data. The SEOR-approved penetration stubs per RFI 146, at 5 by 18, 5 by 16, 5 by 14, and 5 by 12 inches, are the decision record and are modeled against the point cloud. Larger beam penetration requests route to the structural and SEOR contact, pending confirmation. GRS-SHFT (grease shaft, 24 by 14 inches, confirmed on M203, keynote 23.06) and RF-SHFT (exhaust riser terminus, 26 by 6 inches, Level 1 to roof) both bind to the elevator lobby and are both enclosed by this study. Neither is a standalone study subject. GRS-SHFT is a structural constraint encoding and a floor-plate penetration condition at each level from Level 1 base to the roof head; it is not a routing element. RF-SHFT is also the Study 02 exhaust riser terminus. Proposed zone: elevator lobby south (dominant); north suites and south suites (co-present); INFILLED LIGHTWELL structural constraint adjacent. Bounded deliverable: assumption-register entry documenting the ARC-measured beam-bottom data, including the fan coil slot constraint at Level 4, and a coordination note on penetration locations through structure. Status: In coordination. *Decision owned by: design team and SEOR. References RFI 146.*

**05 Fire protection.** The sprinkler main and branch lines in representative north-south bays, modeled to the deferred fire-protection submittal. The 4-inch sprinkler main competes with the refrigerant line sets and branch selector boxes in the coffered corridor. Proposed zone: north suites, south suites, corridor, and West Corridor (co-present overlay, never dominant); shaft enclosures at the elevator lobby, Level 1 to roof. Bounded deliverable: coordination note on the fire-protection overlay against the other systems and the fire-rated shaft enclosures at the elevator lobby, on the deferred-submittal basis. Status: In coordination. *Decision owned by: design team, with the fire-protection subcontractor.*

Exhibit 2 finding, Study 05 (co-presence note). Finding 3: The 4-inch fire protection main runs parallel alongside the main duct through the same overhead zone. No conflict. Both elements must be coordinated and detailed side by side.

**Governing constraint, all studies.** Finding 4 from Exhibit 2: The living-zone ceiling target at 8 ft 2 in AFF is the hard stop for the living zone. No overhead systems run above it across Levels 2, 3, and 4. All routing decisions for Studies 01, 02, 03, and 05 are governed by this constraint.

**Backlogged studies, not started and not prioritized.**

**Level 4 guest suites.** Held pending updated drawings from the design team, integrated when issued. The Level 4 ceiling plumbing rework, authored by Travis Wagner at H+W Engineering and targeting 7 ft 2 in, is a design-team coordination item to verify against the overhead stack when the study opens. *Decision owned by: design team, on the drawing issue.*

**Level 1 conditions.** Held pending prioritization. Mechanical and plumbing fit to the point cloud where ceilings are low and existing beams are present; the study identifies where the 7-foot beam condition forecloses the current design as drawn, flagged and not absorbed. *Decision owned by: design team and SEOR.*

**Scope boundary, plumbing engineer of record model.** The plumbing engineer of record at H+W Engineering issued a Revit plumbing model, received by way of Dempsey on June 15, 2026, showing the Level 4 and roof grease and waste re-route that achieves the 7 ft 2 in target. It is received as a reference for the Level 4 ceiling-height verification. It is not absorbed into the As-Built Integration scope as a modeled input. Any formal ingestion of that plumbing geometry is new scope.

**Scope basis and residual risk.** This assessment resolves the building by study, not by room. Each system's typical condition is coordinated once and carried across every instance where it repeats, which is most of the building. The spaces that are genuinely different, the Level 4 suites and the low-ceiling areas on Level 1, are carried as named exceptions and coordinated on their own terms. The basis is deliberate: it puts the coordination effort where it returns the most and keeps the non-standard work to a short, explicit list.

The boundary is stated plainly. The assessment coordinates the typical and names the exceptions; it does not individually model every room. The residual risk is that a space assumed to match the typical carries a condition the typical study did not. That risk is bounded by the validation in this plan: every replicated instance is subject to the LOA and LOD validation protocol and the out-of-LOA flag path, and the field back-check at install is where a condition outside the typical is caught and routed. An instance that fails validation, or a field condition the typical did not anticipate, converts from a replicated instance to an exception and is coordinated as one.

---

## E. Decision Ownership

Coordination decisions are cued to the party that owns them, in the form Decision owned by: [party]. The plan cues decisions to their owners and does not commit a solution on an owner's behalf. The decision-by-decision sequence is carried in the integrated swim-lane, Exhibit 1.

Governing decisions from the current record, cued and not committed:

- Scan extent. Resolved to the whole building, Levels 1 through 4. *Decision owned by: Dempsey, by notice to proceed dated June 10, 2026.*
- Markup back-check, admin owner. The Dempsey submittal-review owner who checks markups against RFI direction, confirmed as Jason Garrett, Dempsey PE, June 16, 2026. *Decision owned by: Dempsey.*
- Refrigerant distribution strategy. The branch refrigerant boxes that serve the fan coils relocate from the hallways into the suites to free hallway plenum for the central duct run, coordinated together with the fan coil locations they serve. *Decision owned by: design team, with True Air input.*
- Exhaust routing. Three options under evaluation: beam penetrations, corridor routing, and in-unit fan. The corridor routing path involves a 90-degree turn that affects fire-sprinkler hydraulics; the contractor is issuing an RFI to the design team to resolve the combination. Open, pending design team RFI response. *Decision owned by: design team, with True Air and SEOR input. References RFI 146.*
- Main duct elevation at the bath conflict zone. The main duct conflicts with the approved bath ceiling assembly at 7 ft 2 in AFF. Resolution paths: resize, reroute above, or accept a ceiling variant. Open. *Decision owned by: design team and general contractor. References RFI 102.*
- Bath fan coil duct connection field verification. The connection to the bath main is flagged pending field verification. *Decision owned by: Dempsey field.*
- Structural penetration path for larger beam penetration requests. *Decision owned by: design team and SEOR, pending confirmation.*
- Ceiling assembly selection, the grid system under RFI 102. *Decision owned by: design team, with Dempsey for installed-height confirmation.*
- Fan coil installed position. *Decision owned by: Dempsey field.*
- Level 4 ceiling-height verification against the overhead stack, referencing the plumbing engineer of record rework by Travis Wagner at H+W Engineering. *Decision owned by: design team.*
- Finish selection and tolerance adoption. *Decision owned by: owner and design team for the finish, Dempsey for tolerance adoption.*

---

## F. Shop-Drawing and Markup Ownership

On this project the installing subcontractor produces marked-up mechanical plans rather than new shop drawings. The markups are the project's shop-drawing equivalent. True Air owns and submits its marked-up mechanical plans, and True Air owns its fabrication and installation. Consistent with the Letter of Engagement, Everist Consulting does not produce mechanical or fire-protection markups or shop drawings.

The back-check of the markups is owned by Dempsey and runs as a split:

- Admin accountability. The markups are checked against the confirmed RFI direction by the Dempsey submittal-review owner, Jason Garrett, Dempsey PE, confirmed June 16, 2026 and coached by Chris Everist and Jackson Tews for cycle one.
- Field accountability. The hold at install is owned by Jackson Tews and Joe Ciaccio.

Everist Consulting builds the back-check checklist and coaches the first cycle only. The back-check is not a recurring Everist duty. It is capability transferred to the Dempsey owner.

The ownership and submission lanes are carried in the integrated swim-lane, Exhibit 1.

---

## G. Instruction Vector

The named systems follow a single instruction vector:

**coordination finding → RFI → confirmed direction → True Air plan markups → back-check against the RFI → hold at install**

On this project, plan markups stand in for shop drawings, and the back-check checks the markups against the confirmed RFI direction. The back-check is owned by Dempsey and is split between an admin owner, who checks markups against RFI direction, and the field, which holds at install. The admin owner is Jason Garrett, Dempsey PE, confirmed June 16, 2026.

RFI-number tagging is the tracing method. Every model element changed by an RFI carries that RFI number from the decision, through the markup, to the install back-check. The RFI number is the thread that lets any party confirm at install that what is being built traces to a confirmed decision.

The vector is carried in the integrated swim-lane, Exhibit 1.

---

## H. Coordination Cadence

Coordination runs twice weekly. Tuesdays are a virtual session by Teams for model review and coordination-meeting preparation, with Jackson Tews, Joe Ciaccio, Jason Garrett, and Chris Everist. Thursdays are coordination with True Air and the other contractors. The first Tuesday session was held June 16, 2026. The first True Air coordination session was held June 18, 2026. The June 25 site walk confirmed existing conditions in the west corridor and elevator-lobby north zones and updated the assumption register.

Each session carries an expected output. The Tuesday session produces a reviewed model and a prepared agenda for the contractor coordination. The Thursday coordination is a back-check kickoff when True Air markups are in hand, and a rules-of-the-road session when they are not, in which case the markups become the dated deliverable out of the meeting.

**Schedule anchor.** Overhead rough-ins begin July 29, 2026, Level 2 first, then Level 3 on August 14, Level 4 on September 4, and Level 1 on September 23, per the June 15, 2026 construction schedule. Level 2 line of sight is the near-term driver. The cadence runs ahead of the rough-in and captures what each session reveals into the capture register.

---

## I. Capture Register

The plan advances from a standing capture register, not from memory. After each coordination session the capture is recorded in a fixed format: decisions made, owner named per decision, RFIs triggered or referenced, open busts, and items assigned with dates. Each revision of this plan traces its changes to entries in the register.

The register is maintained by Everist Consulting. Capture-ingest 01 was logged June 10, 2026 from two on-site sessions, the Letter of Engagement review and the ARC scan walk. Capture-ingest 02 was logged June 16, 2026 from the first Tuesday model-review session. Capture-ingest 03 was logged June 18, 2026 from the first True Air coordination session: exhaust direction evaluated, Levels 2 and 3 north fan coils released to hang, the two-shaft location basis verified, and the fan coil occurrence pattern verified. Capture-ingest 04 was logged June 24, 2026: ARC as-built delivery confirmed, ARC measured beam-bottom data received and adopted into the assumption register, and the REV3 gate opened. The June 25 site walk confirmed west corridor and elevator-lobby north existing conditions and updated the assumption register with corridor penetration dimensions, fan coil dimensions, branch selector box dimensions, and worst-case bundle envelope. This revision incorporates capture-ingest 04 and the June 25 site-walk updates.

---

## Exhibits

- **Exhibit 1 · Coordination Swim-Lane.** Roles, decision ownership, markup and shop-drawing ownership, and the instruction vector as one sequence of work. Sections E, F, and G reference it. Live at the portal.
- **Exhibit 2 · Governed-Elevation Vertical Stack.** The system priority structure of section C rendered as a representative section at governed elevations, annotated with numbered conditions 1 through 4 at the Level 3 typical: (1) main duct versus bath ceiling conflict at 7 ft 2 in; (2) bath fan coil bounded between 7 ft 2 in AFF and the deck bottom; (3) fire protection main running parallel alongside the main duct; (4) living-area ceiling at 8 ft 2 in as the governing hard stop. Adopted into Section D as Study 03 primary finding and Study 05 co-presence note. Live at the portal.
- **Exhibit 3 · Located Study Map.** The building's repeating conditions placed on the floor plans, color by system under a six-system key, across Levels 2 to 4. A five-panel stack: a Level 1 reference panel with the origin markers and both shaft bases, the color-by-system zones across Levels 2 to 4, and a roof panel with the two shaft heads, because the shafts run Level 1 to roof. The INFILLED LIGHTWELL structural constraint shown with grey line-hatch, grey outline, one label per level, held distinct from the system-color zones. A relative-priority weight panel in the legend. Live at the portal.

---

*Everist Consulting · La Jolla Cove Hotel · Job 25029 · REV 3 · June 25, 2026*
