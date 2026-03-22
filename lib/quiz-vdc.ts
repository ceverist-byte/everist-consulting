export interface QuizQuestion {
  id: string;
  domain: string;
  question: string;
  subtext?: string;
  options: { label: string; text: string }[];
}

export interface QuizTrack {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  questions: QuizQuestion[];
  resultTitle: (archetypeName: string) => string;
  resultSubtitle: string;
}

// ------------------------------------------------------------------
// VDC ARCHETYPE FINDER
// 12 questions across 4 domains
// Answers A–D map to low→high on engagement timing and authority axes
// ------------------------------------------------------------------
export const VDC_QUIZ: QuizTrack = {
  id: "vdc",
  title: "Find Your VDC Archetype",
  subtitle: "VDC Organizational Design Assessment",
  description:
    "12 questions. 5 minutes. Understand where your VDC capability sits today — and what it would take to shift it.",
  ctaLabel: "Start the Assessment",
  resultTitle: (name) => `You're a ${name}`,
  resultSubtitle:
    "Here's what that means for your organization, and what the path forward looks like.",
  questions: [
    // --- DOMAIN 1: ENGAGEMENT TIMING ---
    {
      id: "q1",
      domain: "Engagement Timing",
      question:
        "At what point in a typical project lifecycle does your VDC team first meaningfully engage?",
      subtext:
        "Think about a recent major project — not an exceptional one. When did VDC actually show up?",
      options: [
        {
          label: "A",
          text: "During construction execution — after design is substantially complete and coordination problems are surfacing",
        },
        {
          label: "B",
          text: "During preconstruction or buyout — we're involved in estimating or logistics planning before work starts",
        },
        {
          label: "C",
          text: "During pursuit — VDC helps shape how we propose to win the project",
        },
        {
          label: "D",
          text: "Before pursuit — VDC is involved in client relationship strategy and delivery model selection",
        },
      ],
    },
    {
      id: "q2",
      domain: "Engagement Timing",
      question:
        "When prefabrication decisions are made on your projects, where is your VDC team in that conversation?",
      options: [
        {
          label: "A",
          text: "We're not usually in that conversation — prefab is a trade or operations decision",
        },
        {
          label: "B",
          text: "We support the conversation with models and logistics analysis, but don't drive it",
        },
        {
          label: "C",
          text: "VDC influences prefab scope and sequencing, though we're not the final decision-maker",
        },
        {
          label: "D",
          text: "VDC drives prefabrication strategy from pursuit through installation",
        },
      ],
    },
    {
      id: "q3",
      domain: "Engagement Timing",
      question:
        "How does your VDC team contribute to the firm's business development and pursuit process?",
      options: [
        {
          label: "A",
          text: "VDC isn't typically involved in pursuits — we support projects after award",
        },
        {
          label: "B",
          text: "We help with pursuit graphics and visualization, mostly as a support function to precon",
        },
        {
          label: "C",
          text: "VDC contributes logistics diagrams and delivery strategy to most major pursuits",
        },
        {
          label: "D",
          text: "VDC shapes how we propose to deliver projects — it's a competitive differentiator we lead with",
        },
      ],
    },
    {
      id: "q4",
      domain: "Engagement Timing",
      question:
        "How are VDC deliverables currently integrated into your project delivery contracts?",
      options: [
        {
          label: "A",
          text: "VDC is informal — no contract language or scope definition exists",
        },
        {
          label: "B",
          text: "We have basic BIM exhibit language but it varies by PM or project",
        },
        {
          label: "C",
          text: "Standardized BIM Execution Plan requirements are written into most projects",
        },
        {
          label: "D",
          text: "VDC scope, LOD requirements, and use cases are contractually defined on all projects with digital owner deliverables specified",
        },
      ],
    },

    // --- DOMAIN 2: DECISION AUTHORITY ---
    {
      id: "q5",
      domain: "Decision Authority",
      question: "Who controls the budget for digital and VDC initiatives?",
      subtext:
        "Not who approves individual invoices — who controls the strategic technology budget.",
      options: [
        {
          label: "A",
          text: "Project budgets control VDC spend — each project team decides independently",
        },
        {
          label: "B",
          text: "Operations or preconstruction leadership controls the budget case-by-case",
        },
        {
          label: "C",
          text: "There's a dedicated VDC budget managed at the regional or division level",
        },
        {
          label: "D",
          text: "VDC has a dedicated enterprise budget with executive-level governance over allocation",
        },
      ],
    },
    {
      id: "q6",
      domain: "Decision Authority",
      question:
        "Can your VDC team set standards that apply across all projects in your region or division?",
      options: [
        {
          label: "A",
          text: "No — each project team adopts VDC standards at their discretion",
        },
        {
          label: "B",
          text: "We have recommended standards, but compliance varies significantly by project",
        },
        {
          label: "C",
          text: "Most projects follow VDC standards — we have reasonable enterprise adoption",
        },
        {
          label: "D",
          text: "Yes — VDC standards are mandatory enterprise requirements with accountability structures",
        },
      ],
    },
    {
      id: "q7",
      domain: "Decision Authority",
      question:
        "If your VDC team identifies a coordination problem that requires changing the delivery approach, can they make that call?",
      options: [
        {
          label: "A",
          text: "No — they document the issue and escalate to the PM, who may or may not act",
        },
        {
          label: "B",
          text: "They can recommend changes but need approval from operations leadership to implement",
        },
        {
          label: "C",
          text: "VDC has authority to direct coordination changes within a project team",
        },
        {
          label: "D",
          text: "VDC has cross-functional authority to require delivery changes — and the executive backing to enforce them",
        },
      ],
    },
    {
      id: "q8",
      domain: "Decision Authority",
      question:
        "Where does your VDC leader sit in the organizational hierarchy relative to operations and preconstruction?",
      options: [
        {
          label: "A",
          text: "VDC reports into operations — the VDC manager is a peer to superintendents or senior PMs",
        },
        {
          label: "B",
          text: "VDC reports into preconstruction — the VDC manager is a peer to estimators or precon managers",
        },
        {
          label: "C",
          text: "VDC has a director-level leader who reports alongside operations and preconstruction",
        },
        {
          label: "D",
          text: "VDC is led by a VP or equivalent who sits in regional leadership alongside ops, precon, and finance",
        },
      ],
    },

    // --- DOMAIN 3: CROSS-PROJECT MANDATE ---
    {
      id: "q9",
      domain: "Cross-Project Mandate",
      question:
        "Does your VDC team participate in regional leadership planning or strategy sessions?",
      options: [
        {
          label: "A",
          text: "No — VDC is not part of leadership planning. We're project-level support.",
        },
        {
          label: "B",
          text: "Occasionally, when a specific project or technology initiative warrants it",
        },
        {
          label: "C",
          text: "VDC provides input into planning cycles but doesn't have a regular seat at the table",
        },
        {
          label: "D",
          text: "VDC is a standing participant in regional leadership strategy and planning",
        },
      ],
    },
    {
      id: "q10",
      domain: "Cross-Project Mandate",
      question:
        "How consistent is your VDC team's involvement across different project types and sizes?",
      options: [
        {
          label: "A",
          text: "Inconsistent — some PMs use VDC heavily, others barely at all",
        },
        {
          label: "B",
          text: "Fairly consistent on larger projects, hit or miss on smaller ones",
        },
        {
          label: "C",
          text: "VDC is involved on most projects above a threshold — we have defined minimum requirements",
        },
        {
          label: "D",
          text: "VDC is consistently integrated across all project types with scaled deliverables for each",
        },
      ],
    },

    // --- DOMAIN 4: STRATEGIC INTEGRATION ---
    {
      id: "q11",
      domain: "Strategic Integration",
      question:
        "How does your regional leadership think about VDC — as a service, a function, or a capability?",
      subtext:
        "This is about how leadership talks about VDC, not just how it's officially described.",
      options: [
        {
          label: "A",
          text: "As a service or specialty — VDC is a tool the project teams use when they need it",
        },
        {
          label: "B",
          text: "As a function — VDC is a department that supports projects and pursuits",
        },
        {
          label: "C",
          text: "As a capability — VDC is something the firm has that competitors don't, to varying degrees",
        },
        {
          label: "D",
          text: "As a competitive advantage — VDC is explicitly part of how the firm positions itself in the market",
        },
      ],
    },
    {
      id: "q12",
      domain: "Strategic Integration",
      question:
        "What would happen to project delivery consistency if your VDC leader left tomorrow?",
      options: [
        {
          label: "A",
          text: "Minimal disruption — VDC is project-level work that others would pick up",
        },
        {
          label: "B",
          text: "Significant disruption on pursuits and proposals, less impact on execution",
        },
        {
          label: "C",
          text: "Real disruption — the team and processes would continue, but direction would be uncertain",
        },
        {
          label: "D",
          text: "Serious organizational risk — VDC is a strategic function and succession planning is actively part of our governance",
        },
      ],
    },
  ],
};

// ------------------------------------------------------------------
// AI ADOPTION IN CONSTRUCTION QUIZ
// 15 questions across 5 domains (3 per domain)
// Results: 3 tiers (Foundational / Developing / Advanced)
// ------------------------------------------------------------------
export interface AITier {
  id: "foundational" | "developing" | "advanced";
  name: string;
  scoreRange: [number, number];
  tagline: string;
  description: string;
  focusAreas: string[];
  nextStep: string;
}

export const AI_TIERS: Record<string, AITier> = {
  foundational: {
    id: "foundational",
    name: "Foundational",
    scoreRange: [0, 32],
    tagline: "Significant opportunity. The gap is structural, not technical.",
    description:
      "Your organization is early in AI adoption. The most important work isn't choosing the right tools — it's ensuring data quality, identifying concrete use cases, and building the internal readiness to act on AI outputs. Organizations that skip this step buy software they don't use.",
    focusAreas: [
      "Data infrastructure and availability",
      "Use case identification with clear ROI",
      "Internal champion identification",
      "Governance and risk baseline",
    ],
    nextStep:
      "A structured AI Readiness Diagnostic is the right starting point. It takes 2–4 weeks and gives your leadership a clear picture of where investment will generate returns versus where it will disappear.",
  },
  developing: {
    id: "developing",
    name: "Developing",
    scoreRange: [33, 47],
    tagline: "You've started. Now the question is whether it's going to stick.",
    description:
      "Your organization has identified AI opportunities and is running experiments or pilots. The risk at this stage is that momentum stalls — either because early wins weren't connected to real workflow change, or because governance hasn't caught up to the pace of adoption. The path forward is about connecting pilots to operating model change.",
    focusAreas: [
      "Connecting pilots to enterprise workflows",
      "Change management and adoption drivers",
      "Governance frameworks that scale",
      "Vendor evaluation and platform consolidation",
    ],
    nextStep:
      "An AI Operating Model Design engagement identifies which pilots are worth scaling and builds the organizational structure to make adoption durable.",
  },
  advanced: {
    id: "advanced",
    name: "Advanced",
    scoreRange: [48, 60],
    tagline: "You're ahead of the industry. Now the question is how to stay there.",
    description:
      "Your organization has moved past experiments into operational AI deployment. The strategic question is no longer 'how do we adopt AI' — it's 'how do we continue innovating as the technology evolves and our competitors catch up.' Governance, IP, and workforce strategy become central.",
    focusAreas: [
      "AI IP strategy and proprietary data assets",
      "Workforce transformation and capability building",
      "Vendor relationship and technology roadmap",
      "Competitive differentiation through AI",
    ],
    nextStep:
      "A Strategic AI Roadmap engagement maps where your AI capability needs to be in 18–36 months and builds the organizational decisions that get you there.",
  },
};

export const AI_QUIZ: QuizTrack = {
  id: "ai",
  title: "AI Adoption in Construction",
  subtitle: "AI Readiness Assessment for Capital Programs & GCs",
  description:
    "15 questions across 5 domains. Understand where your organization stands on AI adoption — and what's actually holding you back.",
  ctaLabel: "Start the AI Assessment",
  resultTitle: (tier) => `${tier} — here's what that means`,
  resultSubtitle:
    "Your AI adoption profile and the structural decisions that will determine whether your investments stick.",
  questions: [
    // --- DOMAIN 1: DATA INFRASTRUCTURE ---
    {
      id: "q1",
      domain: "Data Infrastructure",
      question:
        "How would you describe the quality and accessibility of your project data today?",
      options: [
        {
          label: "A",
          text: "Project data is fragmented across spreadsheets, emails, and siloed systems — finding it requires manual effort",
        },
        {
          label: "B",
          text: "We have central systems (Procore, ACC, etc.) but data quality and completeness vary significantly by project",
        },
        {
          label: "C",
          text: "Most project data is centralized and reasonably consistent — we can generate reports without major data cleaning",
        },
        {
          label: "D",
          text: "We have clean, structured data with clear ownership, consistent schemas, and a defined approach to data governance",
        },
      ],
    },
    {
      id: "q2",
      domain: "Data Infrastructure",
      question:
        "When your team needs to analyze project performance across multiple jobs, what does that process look like?",
      options: [
        {
          label: "A",
          text: "Manual — someone compiles data from multiple sources in a spreadsheet. It takes days and the results are often inconsistent",
        },
        {
          label: "B",
          text: "Semi-manual — we have dashboards that help, but significant data cleaning or merging is still required",
        },
        {
          label: "C",
          text: "Mostly automated — standard reports are available, though complex cross-project analysis still requires effort",
        },
        {
          label: "D",
          text: "We have real-time cross-project analytics with a defined data model and consistent outputs",
        },
      ],
    },
    {
      id: "q3",
      domain: "Data Infrastructure",
      question:
        "Does your organization have a defined strategy for what data you collect, how you store it, and who owns it?",
      options: [
        {
          label: "A",
          text: "No formal strategy — teams collect what they need for their immediate work",
        },
        {
          label: "B",
          text: "Informal guidelines exist, but data ownership and collection standards aren't consistently enforced",
        },
        {
          label: "C",
          text: "We have data standards for key systems, though coverage isn't complete across all workflows",
        },
        {
          label: "D",
          text: "Yes — defined data strategy with ownership, collection protocols, retention policies, and access controls",
        },
      ],
    },

    // --- DOMAIN 2: USE CASE IDENTIFICATION ---
    {
      id: "q4",
      domain: "Use Case Identification",
      question:
        "How does your organization identify where AI could add value?",
      options: [
        {
          label: "A",
          text: "We respond to vendor pitches or follow industry press — we don't have a systematic identification process",
        },
        {
          label: "B",
          text: "Individual leaders champion specific tools based on their experience or peer recommendations",
        },
        {
          label: "C",
          text: "We have an informal process for evaluating AI opportunities against business problems",
        },
        {
          label: "D",
          text: "We have a structured process to identify, score, and prioritize AI use cases based on data availability, ROI, and implementation complexity",
        },
      ],
    },
    {
      id: "q5",
      domain: "Use Case Identification",
      question:
        "How many AI tools or platforms is your organization actively using in production today?",
      options: [
        {
          label: "A",
          text: "None — we're evaluating options or waiting for the technology to mature",
        },
        {
          label: "B",
          text: "1–3 tools, mostly point solutions in specific workflows (e.g., a scheduling tool, an RFI tool)",
        },
        {
          label: "C",
          text: "4–8 tools across several departments, with some coordination between them",
        },
        {
          label: "D",
          text: "A platform approach — AI is integrated into our core workflows with a defined technology stack",
        },
      ],
    },
    {
      id: "q6",
      domain: "Use Case Identification",
      question:
        "When you evaluate a new AI tool, what does your evaluation process look like?",
      options: [
        {
          label: "A",
          text: "Informal — a leader or team tries it and decides based on intuition",
        },
        {
          label: "B",
          text: "We run a pilot but don't have a consistent evaluation framework",
        },
        {
          label: "C",
          text: "We have a defined pilot process with success criteria, though governance oversight varies",
        },
        {
          label: "D",
          text: "Structured evaluation with defined criteria, cross-functional review, data requirements, and governance sign-off",
        },
      ],
    },

    // --- DOMAIN 3: WORKFORCE & CHANGE READINESS ---
    {
      id: "q7",
      domain: "Workforce & Change Readiness",
      question:
        "How does your field and office workforce generally respond to new technology adoption?",
      options: [
        {
          label: "A",
          text: "Resistance is the default — new tools get mandated from above and adoption is inconsistent",
        },
        {
          label: "B",
          text: "Mixed — some teams adapt well, others resist. Adoption depends heavily on individual project leadership",
        },
        {
          label: "C",
          text: "Generally open to change — we have pockets of strong adoption, though consistency is still a challenge",
        },
        {
          label: "D",
          text: "Change capability is a core organizational strength — we have tested change management processes and internal champions",
        },
      ],
    },
    {
      id: "q8",
      domain: "Workforce & Change Readiness",
      question:
        "Does your organization have internal leaders who are actively championing AI adoption?",
      options: [
        {
          label: "A",
          text: "No identified champions — AI is talked about but no one owns it",
        },
        {
          label: "B",
          text: "One or two enthusiasts, but they don't have formal authority or dedicated time",
        },
        {
          label: "C",
          text: "We have a designated leader (Innovation Director, CTO, etc.) but resources are limited",
        },
        {
          label: "D",
          text: "AI ownership is formal — clear leader with budget, executive sponsorship, and a cross-functional team",
        },
      ],
    },
    {
      id: "q9",
      domain: "Workforce & Change Readiness",
      question:
        "How are you building AI literacy across your workforce?",
      options: [
        {
          label: "A",
          text: "We're not — individuals learn on their own if they choose to",
        },
        {
          label: "B",
          text: "Ad hoc — we share articles or run occasional lunch-and-learns, but no structured program",
        },
        {
          label: "C",
          text: "We have a training program for specific tools, though enterprise AI literacy isn't a formal goal",
        },
        {
          label: "D",
          text: "Structured AI literacy program with role-specific training, tracking, and integration into onboarding",
        },
      ],
    },

    // --- DOMAIN 4: GOVERNANCE & RISK ---
    {
      id: "q10",
      domain: "Governance & Risk",
      question:
        "Does your organization have defined policies for how employees can and can't use AI tools?",
      options: [
        {
          label: "A",
          text: "No policies — employees use whatever tools they choose",
        },
        {
          label: "B",
          text: "Informal guidance exists but it's not enforced or consistently communicated",
        },
        {
          label: "C",
          text: "We have a basic AI use policy covering data privacy and approved tools",
        },
        {
          label: "D",
          text: "Comprehensive AI governance policy with approved tool list, data handling rules, output validation requirements, and regular review",
        },
      ],
    },
    {
      id: "q11",
      domain: "Governance & Risk",
      question:
        "How does your leadership think about AI-related risk?",
      options: [
        {
          label: "A",
          text: "Risk hasn't been formally discussed — we're focused on opportunities first",
        },
        {
          label: "B",
          text: "General awareness of risk, but no structured assessment or mitigation plan",
        },
        {
          label: "C",
          text: "We've identified key risk categories (data privacy, bias, liability) and have basic mitigations in place",
        },
        {
          label: "D",
          text: "AI risk is integrated into our enterprise risk framework with defined thresholds, monitoring, and escalation paths",
        },
      ],
    },
    {
      id: "q12",
      domain: "Governance & Risk",
      question:
        "When AI outputs are used in project decisions, what validation process exists?",
      options: [
        {
          label: "A",
          text: "None — AI outputs are used as-is if they seem reasonable",
        },
        {
          label: "B",
          text: "Individual users apply judgment, but there's no standardized validation step",
        },
        {
          label: "C",
          text: "We have validation checkpoints for high-stakes AI outputs (e.g., safety, estimating)",
        },
        {
          label: "D",
          text: "Defined validation workflows for all AI-assisted decisions, with human accountability documented",
        },
      ],
    },

    // --- DOMAIN 5: VENDOR EVALUATION ---
    {
      id: "q13",
      domain: "Vendor Evaluation",
      question:
        "How do you evaluate AI vendor claims and product capabilities?",
      options: [
        {
          label: "A",
          text: "We rely primarily on vendor presentations and demos — limited independent evaluation",
        },
        {
          label: "B",
          text: "We ask for references and run trials, but don't have a structured evaluation framework",
        },
        {
          label: "C",
          text: "We have an evaluation checklist covering data handling, integration, support, and outcome metrics",
        },
        {
          label: "D",
          text: "Multi-stage vendor evaluation with technical proof-of-concept, security review, integration testing, and reference verification",
        },
      ],
    },
    {
      id: "q14",
      domain: "Vendor Evaluation",
      question:
        "How do you approach data ownership and portability when selecting AI vendors?",
      options: [
        {
          label: "A",
          text: "We haven't thought through data ownership — it's not a primary consideration",
        },
        {
          label: "B",
          text: "We review the data terms but rely heavily on vendor assurances",
        },
        {
          label: "C",
          text: "Data ownership and portability are part of our contract negotiations",
        },
        {
          label: "D",
          text: "Defined data ownership requirements are non-negotiable in all AI vendor contracts, with export and portability terms specified",
        },
      ],
    },
    {
      id: "q15",
      domain: "Vendor Evaluation",
      question:
        "Does your organization have a view on the AI technology landscape and where it's heading over the next 2–3 years?",
      options: [
        {
          label: "A",
          text: "No — we react to what becomes available rather than anticipating the roadmap",
        },
        {
          label: "B",
          text: "Individual leaders track trends, but there's no shared organizational view",
        },
        {
          label: "C",
          text: "We have an informal technology watch process and share insights across leadership periodically",
        },
        {
          label: "D",
          text: "We have a formal technology horizon scanning process with an 18–36 month roadmap that informs investment decisions",
        },
      ],
    },
  ],
};

// AI score calculation — straightforward Likert sum (A=1, B=2, C=3, D=4)
export function computeAITier(answers: Record<string, string>): keyof typeof AI_TIERS {
  const answerToScore: Record<string, number> = { A: 1, B: 2, C: 3, D: 4 };
  let total = 0;
  for (const answer of Object.values(answers)) {
    total += answerToScore[answer] ?? 0;
  }
  if (total <= 32) return "foundational";
  if (total <= 47) return "developing";
  return "advanced";
}
