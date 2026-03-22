export type ArchetypeId = "1" | "2" | "3" | "4";

export interface Archetype {
  id: ArchetypeId;
  name: string;
  tagline: string;
  orgPosition: string;
  description: string;
  signals: string[];
  leadershipComplaint: string;
  whatItMeans: string;
  shiftPath: string;
  engagementFit: "Phase1" | "Phase1+2" | "Phase2" | "Phase2+3";
  color: string;
  borderColor: string;
  badgeLabel: string;
}

export const ARCHETYPES: Record<ArchetypeId, Archetype> = {
  "1": {
    id: "1",
    name: "Coordination Shop",
    tagline: "The most common VDC structure in the industry.",
    orgPosition: "Operations → VDC",
    description:
      "VDC enters projects after design is substantially complete. The team focuses on clash detection, model coordination, scanning, and field support. Budget authority sits in operations and is measured project by project.",
    signals: [
      "VDC is requested after design coordination issues appear",
      "Each project team decides how much VDC involvement they want",
      "VDC staff are treated as specialists, not strategic advisors",
      "Tools have been purchased, but delivery model hasn't changed",
      "Leadership asks: 'Why isn't VDC moving faster?'",
    ],
    leadershipComplaint:
      '"We invested in BIM but nothing really changed about how we deliver projects."',
    whatItMeans:
      "Your VDC capability is structurally positioned downstream of the decisions it needs to influence. It can improve coordination efficiency — but it cannot touch prefabrication adoption, delivery model design, or competitive differentiation without authority it doesn't currently have.",
    shiftPath:
      "Moving from Coordination Shop to meaningful strategic impact requires a structural repositioning — not more software. The first step is a clear diagnosis of where decisions actually get made and whether VDC has proximity to those gates.",
    engagementFit: "Phase1+2",
    color: "rgba(193,75,75,0.08)",
    borderColor: "rgba(193,75,75,0.25)",
    badgeLabel: "Archetype 1",
  },
  "2": {
    id: "2",
    name: "Preconstruction Tool Group",
    tagline: "Strong pursuits. Inconsistent execution.",
    orgPosition: "Preconstruction → VDC",
    description:
      "VDC is embedded in preconstruction, contributing to estimates, proposals, and logistics diagrams. The team is valued for winning work — but their influence often ends when the project is handed to operations.",
    signals: [
      "VDC is heavily involved in proposals and pursuit graphics",
      "Estimating uses models and 4D for client presentations",
      "Field adoption of VDC standards varies by project and PM",
      "Operations teams frequently bypass preconstruction-designed workflows",
      "The VDC team feels like they're fighting for relevance once work is won",
    ],
    leadershipComplaint:
      '"We use VDC to win work, but the field doesn\'t seem to carry it through."',
    whatItMeans:
      "Your VDC capability is positioned where commitment decisions happen, but lacks the authority to enforce consistency through execution. The precon/operations handoff is the structural weak point. Innovation happens at the front — but it stalls when it hits the field.",
    shiftPath:
      "The path forward is clarifying where enterprise standards authority lives and whether VDC has cross-functional mandate or is only effective when precon controls the project.",
    engagementFit: "Phase1+2",
    color: "rgba(193,145,75,0.08)",
    borderColor: "rgba(193,145,75,0.25)",
    badgeLabel: "Archetype 2",
  },
  "3": {
    id: "3",
    name: "Execution Engine",
    tagline: "Operationally excellent. Strategically capped.",
    orgPosition: "Operations → [Scheduling, Prefab, VDC]",
    description:
      "VDC is deeply integrated into operations alongside scheduling and prefabrication. Projects are delivered more efficiently. The VDC team has operational authority — but they're still project-centric and rarely influence pursuit strategy or delivery model design.",
    signals: [
      "VDC drives logistics planning and model-based scheduling",
      "Prefab adoption is real, not aspirational",
      "VDC has enterprise-level tool standards that mostly stick",
      "The team builds better projects but isn't shaping how the firm competes",
      "Regional leadership rarely involves VDC in pursuit strategy",
    ],
    leadershipComplaint:
      '"VDC is executing well. I\'m not sure what the next level looks like."',
    whatItMeans:
      "Your VDC capability is the most operationally mature in the industry. You've solved the tactical problem. The remaining gap is strategic — VDC participates in how projects are built, but not in the decisions about which delivery approach to pursue, how to structure owner relationships, or how to compete on delivery capability.",
    shiftPath:
      "The shift to Strategic Delivery Office requires repositioning VDC reporting and connecting it to regional strategy — not more operational improvement. The question is whether executive sponsorship exists to make that jump.",
    engagementFit: "Phase2+3",
    color: "rgba(75,145,193,0.08)",
    borderColor: "rgba(75,145,193,0.25)",
    badgeLabel: "Archetype 3",
  },
  "4": {
    id: "4",
    name: "Strategic Delivery Office",
    tagline: "VDC as competitive advantage. Rare. Powerful.",
    orgPosition: "Regional Strategy → [Preconstruction, Operations, VDC]",
    description:
      "VDC sits at the same level as preconstruction and operations, with access to regional leadership and cross-functional authority. The team shapes delivery model design, defines digital owner deliverables, and helps the firm compete on how it builds — not just what it builds.",
    signals: [
      "VDC participates in pursuit strategy and delivery model selection",
      "The VDC leader has a seat in regional leadership meetings",
      "Prefabrication, logistics, and sequencing decisions flow through VDC",
      "Owner digital deliverables are standardized and contractually defined",
      "The firm wins projects because of how it delivers them",
    ],
    leadershipComplaint:
      '"We need to figure out how to scale this without losing what makes it work."',
    whatItMeans:
      "You've built something most firms spend years trying to reach. VDC is a competitive moat — it influences delivery architecture, not just coordination. The risk at this level is organizational: as you scale, the structures that made this work can erode. Governance, succession, and capability transfer become the core design problems.",
    shiftPath:
      "The focus at Archetype 4 is sustainability and scale — documenting the governance that makes the operating model survive personnel changes, and extending the model to new geographies or project types.",
    engagementFit: "Phase2+3",
    color: "rgba(75,193,145,0.08)",
    borderColor: "rgba(75,193,145,0.25)",
    badgeLabel: "Archetype 4",
  },
};

// Scoring: each question produces an archetype signal.
// The final result is determined by the weighted dominant pattern
// across engagement timing (axis 1) and authority level (axis 2).

export function computeArchetype(answers: Record<string, string>): ArchetypeId {
  // Axis scores: engagementTiming (late=0, early=3) and authority (low=0, high=3)
  let timingScore = 0;
  let authorityScore = 0;
  let timingMax = 0;
  let authorityMax = 0;

  const questionWeights: Record<string, { axis: "timing" | "authority"; score: number }> = {
    // Timing questions
    q1: { axis: "timing", score: 0 }, // overridden per answer
    q2: { axis: "timing", score: 0 },
    q3: { axis: "timing", score: 0 },
    q4: { axis: "timing", score: 0 },
    // Authority questions
    q5: { axis: "authority", score: 0 },
    q6: { axis: "authority", score: 0 },
    q7: { axis: "authority", score: 0 },
    q8: { axis: "authority", score: 0 },
    // Mixed / both axes
    q9: { axis: "timing", score: 0 },
    q10: { axis: "authority", score: 0 },
    q11: { axis: "timing", score: 0 },
    q12: { axis: "authority", score: 0 },
  };

  // Each answer is encoded as a letter: A=1 (lowest), B=2, C=3, D=4 (highest)
  const answerToScore: Record<string, number> = { A: 0, B: 1, C: 2, D: 3 };

  for (const [qId, answer] of Object.entries(answers)) {
    const weight = questionWeights[qId];
    if (!weight) continue;
    const score = answerToScore[answer] ?? 0;
    if (weight.axis === "timing") {
      timingScore += score;
      timingMax += 3;
    } else {
      authorityScore += score;
      authorityMax += 3;
    }
  }

  // Normalize to 0–1
  const tNorm = timingMax > 0 ? timingScore / timingMax : 0;
  const aNorm = authorityMax > 0 ? authorityScore / authorityMax : 0;

  // 2×2 matrix quadrant assignment
  const earlyEngagement = tNorm >= 0.5;
  const highAuthority = aNorm >= 0.5;

  if (!earlyEngagement && !highAuthority) return "1"; // Coordination Shop
  if (earlyEngagement && !highAuthority) return "2";  // Preconstruction Tool Group
  if (!earlyEngagement && highAuthority) return "3";  // Execution Engine
  return "4"; // Strategic Delivery Office
}
