'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav>
      <div className="nav-logo" style={{ padding: '0.5rem var(--space-md)' }}>
        <Link href="/">
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
      <Link href="/contact" className="nav-cta hover-target">
        <span>Book Session</span>
      </Link>
    </nav>
  );
}
