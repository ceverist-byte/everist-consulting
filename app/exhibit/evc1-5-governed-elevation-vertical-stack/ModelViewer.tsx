'use client';

import Script from 'next/script';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          'camera-controls'?: boolean;
          'auto-rotate'?: boolean;
        },
        HTMLElement
      >;
    }
  }
}

export default function ModelViewer() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
        type="module"
        strategy="afterInteractive"
      />
      <model-viewer
        src="/models/evc1-5-governed-elevation.glb"
        alt="Governed-Elevation Vertical Stack — system priority section"
        camera-controls
        auto-rotate
        style={{ width: '100%', height: '100%', backgroundColor: '#F3F0EA' }}
      />
    </div>
  );
}
