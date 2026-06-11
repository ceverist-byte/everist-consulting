// The five questions, single source of truth shared by the page and the
// submission route so the rendered text and the emailed text never drift.
export const FIELD_QUESTIONS: readonly string[] = [
  "When leadership last said they wanted to change how you deliver projects, what exactly did they ask for, and what actually changed in how a project runs because they said it?",
  "When your organization asks someone to change how projects get delivered, can that person require a team to do it differently, or can the field decline? Where does their authority actually stop?",
  "When a change leadership asked for does not happen on a project, who is held accountable, and is it the same person who had the authority to make it happen? Does anyone's standing or compensation actually depend on adopting it?",
  "Across your projects, who owns the information teams build from and the standard for how they coordinate, and what happens to that ownership when a project closes or that person leaves?",
  "Before construction starts, is there a defined moment when someone is charged with finding the problems that would otherwise surface in the field, and does that person have the authority to hold the schedule until they are resolved?",
] as const;
