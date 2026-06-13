import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "The Red Pencil — Everist Consulting",
  description:
    "A first job in the late nineties — blueprints, redlines, and a stamp that never carried my name. The platforms changed for twenty years. The cycles survived every one.",
};

const paragraphs = [
  <>I took my first job out of architecture school because the firm used Apple computers.</>,
  <>
    That was a defiant position in the late nineties, when the PC and Windows owned the
    profession. Choosing the Mac as an aspiring architect came with a cost, and with a front-row
    seat to what would soon be called BIM. The platform was VectorWorks, freshly rebranded from
    MiniCAD. Who would want a CAD platform that admitted to being mini. I learned it. I taught
    it. I was seduced. There was magic happening inside those cathode ray tubes. The flat screen
    had not escaped the laptop yet.
  </>,
  <>
    My charge was a cycle of carports and additions. One estate was a sprawling fractalation of
    them: carports that morphed into additions that sprouted new carports that, you guessed it,
    became additions. No permits. The job was to make the constellation feel cohesive and reach
    a retroactive state of compliance.
  </>,
  <>Compliance. That&apos;s a good word to slow down on.</>,
  <>
    The office sat walking distance from the city permit counter. I would literally walk the
    sheets over, fresh off a proper blueprint contraption, still carrying the odor of ammonia
    from the bubbling jug. It does not get more analog retro than that. Where are you, hipster
    architects? Bring back the blueprint.
  </>,
  <>
    Before any sheet reached that counter, it had survived cycles of redlines. Redlining was
    exactly what it sounds like. The person who had accumulated the institutional knowledge
    imparted it through a red pencil. The mentee, that was me, soaked it up with a yellow
    highlighter. <em>Don&apos;t forget to put the cap on.</em> I can still hear it.
  </>,
  <>
    Cycles upon cycles. I remember asking: where is the checklist? Who knows how to do this
    right, so we don&apos;t rinse the redlines in yellow and repeat? Nobody handed me one. The
    checklist was a person.
  </>,
  <>
    And at the counter, the sheets carried a stamp. Stamped and signed by my cranky old boss.
    Weeks of my labor on those sheets, and the only mark that mattered belonged to someone else.
  </>,
  <>Looking back, I wonder where governance was.</>,
  <>
    When the office got slow, I went to the field. Design-build meant boots when the drafting
    dried up. I remember hand-digging trenches for a gas line I assumed was in one place and
    discovered was nowhere near that place. Trading a neat cursor for a shovel, navigating
    rattlesnakes and prickly pear, made the cost of an assumption feel like sweat, tears, and
    sometimes blood. Ask me about waste sometime.
  </>,
  <>
    One too many afternoons sanding a drywall ceiling and I made a change. I traded the Mac for
    a Windows machine, AutoCAD Architectural Desktop, and my first flat-screen monitor. New
    platform. Same production. The work was still mostly 2D, with a faint hint of something 3D
    beyond. The routine felt like drawing with an Etch A Sketch, or as a friend put it, like
    drawing with light on the television.
  </>,
  <>
    The work product was more physical now. A literal stack of paper. Definitive. Behind the
    stack, a vast array of digital files with strict naming conventions, assembled under a
    layering standard that governed line weights.
  </>,
  <>There&apos;s that word again.</>,
  <>
    Our titles were &ldquo;tech.&rdquo; We had degrees, but &ldquo;architect&rdquo; was reserved
    for those who passed a series of exams. Eventually I did. Each tech took a single sheet from
    the set and picked up redlines, transferred the changes into the digital ether, printed the
    delta on a black-and-white laser printer (I can still see <em>PC LOAD LTR</em>), cut the
    drawing out with scissors, and taped it to the full-size sheet. This was called pasting up.
    Pasting up was the cadence of production.
  </>,
  <>
    The red pen stayed reserved for the person with the knowledge. The transfer still ran
    through the yellow highlighter. Sometimes it ran through a lunch and learn, where the
    knowledge arrived with an unspoken obligation to return what the lunch cost.
  </>,
  <>
    I changed machines. I changed platforms. I changed firms. The redlines came with me.
  </>,
  <>
    So stand where I stood for a minute. Twenty-something, license pending, ammonia in your
    nose, highlighter in hand. Three things were true in that office, and nobody ever said them
    out loud.
  </>,
  <>
    The red pencil was never handed to the fastest tech, or the one who knew the software best.
    Someone decided who got to hold it. Who decided that? And in your organization, who holds it
    now, and who decided?
  </>,
  <>
    The stamp never carried my name, no matter whose hands produced the sheets. The output
    belonged to someone before the first line was drawn. Whose name does your output carry? And
    was that secured by design, or by default?
  </>,
  <>
    And the redline cycles survived everything. They survived MiniCAD and VectorWorks and
    AutoCAD. They survived the ammonia jug and the laser printer, the cathode ray tube and the
    flat screen. Every platform I traded for, the cycles came along untouched. If the cycles
    survive the tool, what exactly were we buying when we bought the tool?
  </>,
  <>
    I went looking for the magic in the cathode ray tubes because the tubes were what I could
    see. The thing I was actually looking for never lived there. It lived in a red pencil, a
    rubber stamp, and a sequence nobody wrote down.
  </>,
];

const bodyParaStyle = {
  fontSize: "1rem",
  color: "var(--text-primary)",
  lineHeight: 1.75,
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

export default function TheRedPencilPage() {
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
            Notes · 04
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
            The Red Pencil
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
          <div style={{ marginBottom: "48px" }}>
            <Image
              src="/images/notes/the-red-pencil-comic.png"
              alt="Eleven-panel editorial comic strip tracing the arc of redline cycles from a first job in architecture through two decades of platform changes. A red pencil, a rubber stamp, and a sequence nobody wrote down."
              width={1200}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
            {paragraphs.map((para, idx) => (
              <p key={idx} style={bodyParaStyle}>
                {para}
              </p>
            ))}
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
