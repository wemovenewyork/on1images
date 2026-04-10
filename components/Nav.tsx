'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="nav-logo" style={{ padding: '0.5rem var(--space-md)' }}>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="ON1 Images"
              width={120}
              height={40}
              style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>
        </div>

        <div className="nav-links">
          <Link href="/work" className="hover-target">Archive</Link>
          <Link href="/about" className="hover-target">Philosophy</Link>
          <Link href="/packages" className="hover-target">Packages</Link>
          <Link href="/packages#testimonials" className="hover-target">Reviews</Link>
          <Link href="/contact" className="hover-target">Connect</Link>
        </div>

        <div className="nav-right">
          <Link href="/contact" className="nav-cta hover-target">
            <span>Book Session</span>
          </Link>
          <button
            className="nav-hamburger hover-target"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? 'bar bar--open' : 'bar'} />
            <span className={menuOpen ? 'bar bar--open' : 'bar'} />
            <span className={menuOpen ? 'bar bar--open' : 'bar'} />
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link href="/work" className="mobile-link hover-target" onClick={() => setMenuOpen(false)}>Archive</Link>
          <Link href="/about" className="mobile-link hover-target" onClick={() => setMenuOpen(false)}>Philosophy</Link>
          <Link href="/packages" className="mobile-link hover-target" onClick={() => setMenuOpen(false)}>Packages</Link>
          <Link href="/packages" className="mobile-link hover-target" onClick={() => setMenuOpen(false)}>Reviews</Link>
          <Link href="/contact" className="mobile-link hover-target" onClick={() => setMenuOpen(false)}>Connect</Link>
          <Link href="/contact" className="mobile-link mobile-link--cta hover-target" onClick={() => setMenuOpen(false)}>Book Session →</Link>
        </div>
      )}
    </>
  );
}
