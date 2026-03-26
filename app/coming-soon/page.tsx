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
            padding: 24px;
          }
          .container {
            max-width: 540px;
            width: 100%;
          }
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
            margin-bottom: 48px;
          }
          h1 {
            font-size: clamp(1.75rem, 4vw, 2.5rem);
            font-weight: 800;
            letter-spacing: -0.03em;
            line-height: 1.1;
            margin-bottom: 24px;
          }
          .description {
            font-size: 1rem;
            color: #9a9590;
            line-height: 1.75;
            margin-bottom: 40px;
          }
          .cta {
            font-size: 0.875rem;
            color: #c1914b;
            text-decoration: none;
            border-bottom: 1px solid rgba(193,145,75,0.3);
            padding-bottom: 2px;
          }
          .cta:hover { border-color: #c1914b; }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="monogram">EC</div>
          <h1>Something is being refined.</h1>
          <p className="description">VDC strategy and operating model design for general contractors and owner-side capital programs.</p>
          <a href="mailto:chris@everistconsulting.com" className="cta">Get in touch: chris@everistconsulting.com</a>
        </div>
      </body>
    </html>
  );
}
