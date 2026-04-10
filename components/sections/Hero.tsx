'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  useEffect(() => {
    const timeElement = document.getElementById('time-stamp');
    if (!timeElement) return;

    const interval = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      timeElement.innerText = `SYNC: ${h}:${m}:${s}`;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="crosshair" style={{ top: '10px', left: '10px' }} />
      <div className="crosshair" style={{ top: '10px', right: '10px' }} />
      <div className="crosshair" style={{ bottom: '10px', left: '10px' }} />

      <div className="hero-text">
        <div className="mono-sm" style={{ marginBottom: '1rem' }}>[SYS.OP.24 // CAPTURE]</div>
        <div className="hero-text-top">
          <h1 className="hero-h1">
            Raw<br />
            Authentic<br />
            <span style={{ color: 'var(--brand)' }}>Motion.</span>
          </h1>
          <div className="hero-sub-row">
            <p className="hero-sub">
              We don&apos;t pose. We document. Turning fleeting moments into permanent, undeniable art. Bold personal portraits, high-energy sports, and cinematic event coverage.
            </p>
            <Image
              src="/images/logo-badge.png"
              alt="ON1 Images Logo"
              width={80}
              height={80}
              className="hero-logo-badge"
            />
          </div>
        </div>
        <div className="hero-meta">
          <span className="mono-sm">LAT 40.7128 N / LON 74.0060 W</span>
          <span className="mono-sm" id="time-stamp">SYNC: 00:00:00</span>
          <div className="barcode" style={{ width: '100px' }}>
            <span style={{ width: '2px' }} />
            <span style={{ width: '4px' }} />
            <span style={{ width: '1px' }} />
            <span style={{ width: '5px' }} />
            <span style={{ width: '2px' }} />
            <span style={{ width: '1px' }} />
            <span style={{ width: '3px' }} />
            <span style={{ width: '6px' }} />
            <span style={{ width: '2px' }} />
            <span style={{ width: '1px' }} />
            <span style={{ width: '4px' }} />
          </div>
        </div>
      </div>

      <div className="hero-image-container">
        <Image
          src="/images/hero-photo.jpg"
          alt="ON1 Images Photographer"
          fill
          className="hero-image"
          priority
        />
      </div>
    </section>
  );
}
