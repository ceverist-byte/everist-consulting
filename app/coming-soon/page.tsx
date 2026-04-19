export default function ComingSoon() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Everist Consulting</title>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            background: #0f1117;
            color: #f0ece4;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 24px;
          }
          .container { max-width: 600px; width: 100%; }
          .monogram {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border: 1px solid #c1914b;
            color: #c1914b;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            margin-bottom: 40px;
          }
          h1 {
            font-size: clamp(1.5rem, 3vw, 2rem);
            font-weight: 800;
            letter-spacing: -0.03em;
            line-height: 1.1;
            margin-bottom: 8px;
          }
          .tagline {
            font-size: 0.9375rem;
            color: #9a9590;
            font-style: italic;
            margin-bottom: 32px;
          }
          .body-text {
            font-size: 0.9375rem;
            color: #9a9590;
            line-height: 1.75;
            margin-bottom: 20px;
          }
          .model-statement {
            font-size: 0.9375rem;
            color: #9a9590;
            line-height: 1.75;
            margin-bottom: 32px;
          }
          .model-statement em { color: #f0ece4; font-style: italic; }
          h2 {
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #c1914b;
            margin-bottom: 16px;
            margin-top: 32px;
          }
          ul {
            list-style: none;
            padding: 0;
            margin-bottom: 32px;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          ul li {
            font-size: 0.9rem;
            color: #9a9590;
            line-height: 1.6;
            display: flex;
            gap: 10px;
            align-items: flex-start;
          }
          ul li::before {
            content: '▸';
            color: #c1914b;
            font-size: 0.5rem;
            padding-top: 6px;
            flex-shrink: 0;
          }
          code {
            font-family: monospace;
            font-size: 0.85em;
            color: #c1914b;
            background: rgba(193,145,75,0.08);
            padding: 1px 5px;
            border-radius: 3px;
          }
          blockquote {
            border-left: 2px solid #c1914b;
            padding-left: 16px;
            margin: 32px 0;
            font-size: 0.9375rem;
            color: #9a9590;
            font-style: italic;
            line-height: 1.65;
          }
          .divider {
            border: none;
            border-top: 1px solid rgba(240,236,228,0.06);
            margin: 32px 0;
          }
          .closing {
            font-size: 0.875rem;
            color: #6b6762;
            line-height: 1.7;
          }
          .cta {
            color: #c1914b;
            text-decoration: none;
            border-bottom: 1px solid rgba(193,145,75,0.3);
            padding-bottom: 1px;
          }
          .cta:hover { border-color: #c1914b; }
          strong { color: #f0ece4; font-weight: 600; }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="monogram">EC</div>
          <h1>Everist Consulting</h1>
          <p className="tagline">Governance and operating model design for construction technology.</p>
          <p className="body-text">
            Everist Consulting sits between building owners and their general contractors as a <strong>VDC governance layer</strong> — defining BIM requirements, managing execution partners, and advising on AI-enabled workflows without carrying billing risk for the execution work itself.
          </p>
          <p className="model-statement">
            The model is deliberate: <em>I govern, you execute.</em> Clients contract directly with the execution partners I help scope and select. I hold the standards, the scope boundaries, and the quality bar.
          </p>
          <h2>What the practice covers</h2>
          <ul>
            <li>BIM Execution Plan design, aligned with <code>ISO 19650</code> and owner-side governance</li>
            <li>Scan-to-BIM scoping and oversight for existing-conditions work</li>
            <li>Operating model design for construction-tech adoption</li>
            <li>Coalition formation across scanning, civil, and offshore production partners</li>
          </ul>
          <h2>Why it exists</h2>
          <p className="body-text">
            After twenty years inside construction technology leadership — across general contracting and owner-side capital programs — I kept seeing the same failure: owners signing BIM requirements they could not enforce, and contractors shipping models no one was actually governing. Everist Consulting is the layer that closes that gap.
          </p>
          <blockquote>Digital strategy without governance is theater.</blockquote>
          <hr className="divider" />
          <p className="closing">
            Currently engaged on healthcare and civil projects in Southern California. Reach out at{" "}
            <a href="mailto:chris@everistconsulting.com" className="cta">chris@everistconsulting.com</a>
          </p>
        </div>
      </body>
    </html>
  );
}