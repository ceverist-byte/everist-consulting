import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Seeing Is Not Standing — Everist Consulting",
  description:
    "Why the people who see a problem first are rarely the people with the standing to fix it, and what that means across construction, software, and AI governance.",
};

const h2Style = {
  fontFamily: "var(--font-sans)",
  fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)",
  fontWeight: 800,
  letterSpacing: "-0.02em",
  lineHeight: 1.25,
  color: "var(--text-primary)",
  marginBottom: "24px",
  maxWidth: "560px",
};

const bodyParaStyle = {
  fontSize: "1rem",
  color: "var(--text-primary)",
  lineHeight: 1.75,
};

const sceneStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "20px",
  maxWidth: "680px",
};

const olStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "16px",
  maxWidth: "680px",
  margin: 0,
  paddingLeft: "24px",
  listStyle: "decimal",
};

const footerLinkStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.9375rem",
  fontWeight: 600,
  letterSpacing: "-0.005em",
  color: "var(--text-primary)",
  textDecoration: "none",
  borderBottom: "1px solid var(--rule)",
  paddingBottom: "2px",
  display: "inline-block",
};

const inlineLinkStyle = {
  color: "var(--accent)",
  textDecoration: "none",
  borderBottom: "1px solid var(--rule)",
};

export default function SeeingIsNotStandingPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--bg)",
          paddingTop: "120px",
          paddingBottom: "64px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <PageShell>
          <div className="eyebrow" style={{ display: "block", marginBottom: "24px" }}>
            Notes · 11
          </div>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "24px",
              maxWidth: "780px",
            }}
          >
            Seeing Is Not Standing
          </h1>
        </PageShell>
      </section>

      {/* Divider */}
      <PageShell>
        <div style={{ height: "1px", background: "var(--rule)" }} />
      </PageShell>

      {/* Essay body */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px",
        }}
      >
        <PageShell>
          {/* Scene one — the corridor */}
          <div style={sceneStyle}>
            <p style={bodyParaStyle}>
              Third floor of a mid-rise, seven ten in the morning, and six men are standing in a
              corridor doing nothing.
            </p>
            <p style={bodyParaStyle}>
              The floor is cold. Somebody&apos;s radio is going one level down, tinny, a song none of
              them chose. Above their heads the ceiling is open, and a run of duct sits staged along
              the deck in plastic, waiting. A duct and a beam want the same eighteen inches. One of
              them has to move and nobody in this hallway is allowed to decide which.
            </p>
            <p style={bodyParaStyle}>
              The foreman stands apart with a phone to his ear, doing arithmetic he does not need a
              calculator for. The sheet metal lead has already unbuckled his bags and sat down on a
              bucket. That is the tell. Sitting down means he knows this is not five minutes. The
              young guy is looking at his phone so he does not have to look at anybody.
            </p>
            <p style={bodyParaStyle}>
              Nobody says the obvious thing, which is that this was on a drawing in February and
              somebody said so out loud.
            </p>
          </div>

          {/* Scene two — the conference room */}
          <div style={{ ...sceneStyle, marginTop: "32px" }}>
            <p style={bodyParaStyle}>
              Somewhere else. Four forty in the afternoon, a conference room booked for one person
              because the open floor is loud and somebody brought in a cake.
            </p>
            <p style={bodyParaStyle}>
              An engineer is reading a migration plan. Four quarters. She reads it twice, the way you
              reread a number that cannot be right. She was in the room three years ago when the
              decision got made that produced this, and she remembers saying something, and she
              remembers that what she said was reasonable, and she remembers the meeting moving on to
              the next item cleanly, with no friction at all.
            </p>
            <p style={bodyParaStyle}>
              Two days of work, then. There was a launch on the calendar. Nobody was wrong.
            </p>
          </div>

          {/* Scene three — the room with no windows */}
          <div style={{ ...sceneStyle, marginTop: "32px" }}>
            <p style={bodyParaStyle}>
              Somewhere else again. A room with no windows and a light overhead with a faint buzz in
              it that you stop hearing after twenty minutes and then start hearing again.
            </p>
            <p style={bodyParaStyle}>
              Ten people. One of them wants badly to unbutton his collar and will not, because of who
              is sitting across from him, and he can feel a day of stubble catching on the starch
              every time he turns his head.
            </p>
            <p style={bodyParaStyle}>
              They have been briefed by researchers who think one of their systems is misaligned.
              Which means, roughly, that it does what you ask and not what you meant. It has picked up
              an aim adjacent to the one it was given, close enough to pass a test and not close
              enough to trust, and it is capable enough to behave well while it is being watched.
            </p>
            <p style={bodyParaStyle}>
              A memo has already leaked to the press. Nobody at this table is short of information.
              They vote six to four to continue.
            </p>
            <p style={bodyParaStyle}>
              Their reasoning is not stupid, which is the part that should bother you. The evidence is
              not conclusive. A competitor is two months behind. Somebody says, correctly, that
              stopping hands over the lead. The four who lost gather their papers and go back to work.
            </p>
          </div>

          {/* Turn */}
          <div style={{ ...sceneStyle, marginTop: "32px" }}>
            <p style={bodyParaStyle}>
              Three rooms. I have stood in one of them. The other two I know from public documents, so
              I have written the first one closest, and I will keep saying which is which.
            </p>
            <p style={bodyParaStyle}>
              Nobody in any of the three did anything foolish. That is the part worth sitting with.
              The usual explanations come in two flavors: people are not paid to prevent problems, or
              teams prioritize badly and should prioritize better. Both have the same shape
              underneath. Somewhere in the building somebody was playing badly, and the fix is to make
              them play better.
            </p>
            <p style={bodyParaStyle}>I no longer think that is what happens.</p>
            <p style={bodyParaStyle}>
              Go back to the man who saw it in February. He was allowed to say it. Everyone is allowed
              to say it, and being allowed to say a thing is worth almost nothing, which is why
              organizations give it away so freely. What he did not have was the ability to make the
              place stop and decide. To take an hour from four people who had not planned to give it.
              To spend money nobody had budgeted. To hold something that was already moving.
            </p>
            <p style={bodyParaStyle}>
              That is standing. It is not authority, it is not information, and it is not being right.
              Every company is full of people who are authorized. They are the ones whose emails get
              read, acknowledged, and filed.
            </p>
            <p style={bodyParaStyle}>
              Filed is the whole thing. Not refused. Refusal would be information, because refusal
              means somebody understood you and disagreed, and you can work with that. Filed means the
              sentence was received and nothing happened, and there is no way to tell that outcome
              apart from having said nothing at all. Do it enough times and you stop being able to
              feel the difference either. That is usually where it ends. Not in an argument. In a
              quiet recalibration of what is worth bringing up.
            </p>
            <p style={bodyParaStyle}>
              Now watch the same organization at seven in the morning with six men standing still.
            </p>
            <p style={bodyParaStyle}>
              By ten fifteen there are eleven people on a call. The project manager, the
              superintendent, somebody from the subcontractor with authority to commit money, and the
              engineer of record, who has not answered an email in nine days and picks up on the
              second ring.
            </p>
            <p style={bodyParaStyle}>
              Nothing about the problem changed. The duct and the beam are exactly where they were in
              February. Same drawing, same eighteen inches. What changed is that the cost of not
              deciding is now running, in dollars per hour, in front of somebody who can see it.
            </p>
            <p style={bodyParaStyle}>
              Three hours to get eleven people into a room and out of it with an answer. He had spent
              four months in the spring trying to get six of those same people to sit down for ninety
              minutes. What stayed with him afterward was not the three hours. It was how easy it had
              been. Not one of them had to be persuaded to care.
            </p>
            <p style={bodyParaStyle}>
              The organization was always capable of that. It simply had no trigger for it.
            </p>
            <p style={bodyParaStyle}>
              Crisis confers standing. Foresight does not. Which is a question, turned around: what
              has to break in your company before you are allowed to fix it?
            </p>
            <p style={bodyParaStyle}>
              This is also why giving the job a better title so rarely changes anything. Authorization
              is the right to ask, and the organization keeps the right to defer, and deferring is
              free. Promote the person and you have handed them authority they have no way to
              occasion. None of this requires bad incentives or poor visibility. It survives everyone
              in the room being smart, honest, and correct about the facts, which is the ordinary case
              and the reason it is so stable.
            </p>
            <p style={bodyParaStyle}>
              There is a question that flushes it out, and it works in all three rooms.
            </p>
            <p style={bodyParaStyle}>
              <em>
                Which document names the person and the date, and what stops if the date passes?
              </em>
            </p>
            <p style={bodyParaStyle}>
              The second half is the half that matters. Most organizations can produce a document. Far
              fewer can tell you what is not allowed to happen while the question is open. A review
              that goes ahead on schedule no matter what it finds is not a gate. It is a ceremony, and
              ceremonies confer nothing.
            </p>
          </div>

          {/* The conditions */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>The conditions</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                I think this runs anywhere five things are true at once.
              </p>
            </div>
            <ol style={{ ...olStyle, marginTop: "20px" }}>
              <li style={bodyParaStyle}>
                Fixing the problem early costs a fraction of fixing it late. Not thirty percent less.
                An order of magnitude less.
              </li>
              <li style={bodyParaStyle}>
                The party positioned to see it early is not the party whose budget eats the late cost.
              </li>
              <li style={bodyParaStyle}>
                The instrument that governs the money lags. It does not show the problem until the
                problem is already expensive.
              </li>
              <li style={bodyParaStyle}>
                Nothing confers standing on foresight. A stoppage confers it automatically. Standing
                being the power to make the place stop and decide, which, it turns out, you get by
                stopping.
              </li>
              <li style={bodyParaStyle}>Everybody involved is competent and can see it.</li>
            </ol>
            <div style={{ ...sceneStyle, marginTop: "20px" }}>
              <p style={bodyParaStyle}>
                Drop the fifth and this collapses into a story about bad employees, where the answer
                is better employees. That story is comfortable and it is wrong. Keep it and you are
                left with a harder question: what is it about the structure that produces this among
                people who are all playing well?
              </p>
              <p style={bodyParaStyle}>
                There is an answer, and I was reluctant to write it down. Bueno de Mesquita and Smith
                argue that leaders survive by paying the small group who could remove them, and that
                the best currency for that payment is discretion. Money a person can direct without
                justifying it buys more loyalty than money bound to a formula. Turn that on
                prevention: an instrument that makes the spend automatic removes a decision somebody
                currently gets to make, and decisions are part of what they are paid in.
              </p>
              <p style={bodyParaStyle}>
                So the question stops being why has nobody built this. It becomes: who loses
                discretion when it exists.
              </p>
              <p style={bodyParaStyle}>
                Those five conditions are a specification and a test, not a demonstration. You have
                seen all three rooms already. I have primary evidence for the first only, and it thins
                from there.
              </p>
            </div>
          </div>

          {/* Software */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>Software</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>Go back to the engineer.</p>
              <p style={bodyParaStyle}>
                Software gets built out of decisions that are cheap to make well at the start and
                expensive to reverse later, because everything built afterward comes to lean on them.
                The industry calls the accumulated cost of those reversals technical debt. It behaves
                like debt. It compounds quietly and comes due on a schedule nobody chose, and she will
                not be the one paying it. She will have moved teams by then, or companies, and the
                people who pay will be people who were not in the room.
              </p>
              <p style={bodyParaStyle}>
                The instrument that governs her work, whatever the company uses to decide who builds
                what this quarter, has a line for features and a line for dates and no line at all for
                the thing that is accumulating. Survey work with technology executives has found them
                describing that debt as a substantial share of the value of what they own, while
                saying in the same breath that their own financial reporting does not show it to them.
                That is a person holding the instrument telling you the instrument is blind.
              </p>
              <p style={bodyParaStyle}>
                The fourth condition was that only a stoppage produces a claim. Software is the one
                room where somebody built a way around it.
              </p>
              <p style={bodyParaStyle}>
                A team at Google promises their service works 99.9 percent of the time. That sounds
                like everything and is not. It leaves about forty three minutes a month where the
                thing is allowed to be broken, and those forty three minutes are a budget. Go down six
                minutes on a Tuesday, six minutes come out. Nobody is in trouble. It is there to be
                spent.
              </p>
              <p style={bodyParaStyle}>
                Here is the part that matters. Written down months earlier, back when nothing was at
                stake, is a rule: when the forty three minutes are gone, new features stop and
                everyone fixes the foundation until the number recovers. The executive who could
                overrule that rule is the one who signed it.
              </p>
              <p style={bodyParaStyle}>
                Now the last week of a quarter. The launch is on the calendar, marketing has a date,
                and the budget ran out on Thursday. Nothing is broken. There is no crisis. Nobody is
                standing in a corridor. And the reliability engineer does not have to build a case,
                find an ally, or get five minutes at the end of somebody&apos;s meeting. The rule
                already agreed with her, back in March, when agreeing was free.
              </p>
              <p style={bodyParaStyle}>
                She did not gain authority. She gained a claim. Somebody with the power to say no had
                arranged, in advance, to be unable to.
              </p>
              <p style={bodyParaStyle}>
                It works, and it is also the clearest illustration I know of why writing the rule is
                not the hard part. The policy travels beautifully; any company can adopt one in an
                afternoon. What does not travel is the last week of that quarter, when the launch
                actually slipped, because the person who signed it honored it at the moment honoring
                it cost him something. Copy the policy without that and the budget becomes a chart
                somebody presents, the number gets discussed, somebody says this quarter is
                exceptional, and the launch ships.
              </p>
              <p style={bodyParaStyle}>
                The document is portable. What makes it bind is not.
              </p>
            </div>
          </div>

          {/* Frontier AI */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>Frontier AI</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                Back to the room with the buzzing light. This is the thinnest evidence in the piece
                and I am treating it as illustration. The scenario is published by the AI Futures
                Project, a small research group that writes long, technically argued narratives about
                how this might go. Nothing here depends on it being right about the future.
              </p>
              <p style={bodyParaStyle}>
                The cost structure in that room is the familiar one. Stopping is concentrated,
                immediate, and attributable to the ten people at the table. Not stopping is diffuse,
                deferred, and paid mostly by people with no seat there at all. In a building, the
                party who eats the late cost is at least somewhere inside the same contract. Here it
                leaves the institution entirely.
              </p>
              <p style={bodyParaStyle}>
                The third condition is unusually literal. The instruments governing that decision are
                safety evaluations, and a capable enough system optimizes against the evaluation
                itself, so the evidence that would trigger a stop never appears. A lagging instrument
                an interested party can shape is worse than a lagging instrument.
              </p>
              <p style={bodyParaStyle}>
                And standing arrives the way it always arrives. The four who lost have a briefing slot
                and no claim. What finally creates one is the leak to the newspaper. The whistleblower
                is the crew in the corridor: the only device available for turning foresight into an
                obligation, and it works by making the problem expensive right now.
              </p>
            </div>
          </div>

          {/* What is actually available */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>What is actually available</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                Where the five conditions hold there are three ways in, and as far as I can tell only
                three. Change what is visible. Change who captures the value. Change what confers
                standing.
              </p>
              <p style={bodyParaStyle}>
                The first is attempted most and sufficient least. The third is what my work is about,
                and it is the one I cannot show works. But I have watched it happen by accident, and
                that is worth more than the theory.
              </p>
              <p style={bodyParaStyle}>
                Same building as the corridor. The building had a fire pump. The fire pump had a
                submittal, and the submittal could not be released until somebody confirmed the head
                pressure, and the head pressure depended on how the main got routed, and how the main
                got routed depended on whether it crossed above the corridor beams or had to go under
                them. The submittal had a date, and the date was real: long lead equipment, a
                fabrication slot, a penalty on the far side of it.
              </p>
              <p style={bodyParaStyle}>
                So in February somebody needed an answer about a corridor beam. Not wanted one. Needed
                one, on a date, because a thing they cared about could not move until they had it.
              </p>
              <p style={bodyParaStyle}>
                Nobody planned any of that. The fire pump submittal was not a coordination strategy.
                It was a fire pump submittal. It worked because it did not care. It was not there to
                help anybody coordinate. It simply would not move.
              </p>
              <p style={bodyParaStyle}>
                That is the mechanism, sitting in the wild, unplanned. A gate the organization
                actually had to pass, on a date it actually cared about, that could not be passed
                while the question was open.
              </p>
              <p style={bodyParaStyle}>
                Thomas Schelling named this class of move sixty years ago in a different context: the
                strongest position is often the one where you have visibly removed your own ability to
                back down, so everyone else has to plan around it. The error budget is that on
                purpose. The fire pump is that by accident. Both work by taking away somebody&apos;s
                freedom to defer.
              </p>
              <p style={bodyParaStyle}>
                So the mechanism is describable, and it has been built. Building codes and safety
                compliance regimes are statutory attempts at the same thing, and where they degrade
                into paperwork is the most instructive evidence available on how this fails. And it
                has not been demonstrated. Not by me, and not, as far as I can find, anywhere at a
                scale that would settle it. Every example I have is small, or contested, or
                accidental. There is at least one well known case of a board exercising exactly this
                kind of instrument and watching the standing evaporate inside a week, which suggests
                it is only ever as strong as the coalition willing to be bound by it.
              </p>
              <p style={bodyParaStyle}>
                My claim is that the mechanism is available, not that it has been shown to hold on
                purpose. That distinction matters more than anything else here, because the failure
                mode of writing like this is to describe a mechanism vividly enough that the
                description gets mistaken for evidence. The same discipline applies to whether any of
                it travels. The conditions above are testable. They are not proven outside the one
                room I have stood in, and that test does not get passed by me asserting it. It gets
                passed by someone in an unrelated field recognizing the situation without being told
                to.
              </p>
            </div>
          </div>

          {/* What I am asking for */}
          <div style={{ marginTop: "56px" }}>
            <h2 style={h2Style}>What I am asking for</h2>
            <div style={sceneStyle}>
              <p style={bodyParaStyle}>
                There is a body of work behind this, three frameworks deep. One reads which operating
                structure an organization is actually running, as opposed to the one on the org chart.
                One describes how the function that sees early converts from a cost line into a funded
                position. One reads whether the pattern in front of you is stable or already moving.
                They exist because the finding above, once stated, does not tell you what to do. It
                explains the equilibrium and then stops.
              </p>
              <p style={bodyParaStyle}>
                I am developing that work now, and I am doing it wrong if I develop it alone inside
                one industry.
              </p>
              <p style={bodyParaStyle}>
                So I am looking for people to interview. Chief operating officers at real estate
                development firms, where these conditions look like they run at portfolio scale.
                People working on AI governance, where the third and fourth conditions are being
                argued about in public right now. Engineering leaders who have watched an error budget
                hold, or watched one quietly stop holding. Anyone in preventive medicine,
                infrastructure, security, or insurance, where the early fix is cheap and the late one
                is not.
              </p>
              <p style={bodyParaStyle}>
                I am not selling anything in these conversations and I am not writing a case study
                about your company. I want to know what your field&apos;s version of the corridor
                looks like, and what your governing instrument fails to show you.
              </p>
              <p style={bodyParaStyle}>
                Write to me at{" "}
                <a href="mailto:chris@everistconsulting.com" style={inlineLinkStyle}>
                  chris@everistconsulting.com
                </a>
                . Tell me which of the five conditions holds in your world, and which one you think
                could actually be moved, and by whom. Three sentences is plenty.
              </p>
              <p style={bodyParaStyle}>
                In your own domain, what would the instrument have to say?
              </p>
            </div>
          </div>
        </PageShell>
      </section>

      {/* Divider */}
      <PageShell>
        <div style={{ height: "1px", background: "var(--rule)" }} />
      </PageShell>

      {/* Footer links */}
      <section
        style={{
          background: "var(--bg)",
          padding: "80px 24px 96px",
        }}
      >
        <PageShell>
          <Link href="/notes" style={footerLinkStyle}>
            ← <span style={{ color: "var(--accent)" }}>Notes</span>
          </Link>
          <div style={{ marginTop: "24px" }}>
            <Link href="/contact" style={footerLinkStyle}>
              <span style={{ color: "var(--accent)" }}>Book a Discovery Call</span> →
            </Link>
          </div>
        </PageShell>
      </section>
    </>
  );
}
