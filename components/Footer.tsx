import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div
        className="footer-huge"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 0',
          gridColumn: '1 / -1',
        }}
      >
        <Image
          src="/images/logo-footer.png"
          alt="ON1 Images"
          width={400}
          height={240}
          style={{
            height: 'clamp(120px, 20vw, 240px)',
            width: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>

      <nav className="footer-nav">
        <Link href="/work" className="hover-target">Archive</Link>
        <Link href="/about" className="hover-target">Philosophy</Link>
        <Link href="/packages" className="hover-target">Packages</Link>
        <Link href="/packages#testimonials" className="hover-target">Reviews</Link>
        <Link href="/packages#faq" className="hover-target">FAQ</Link>
        <Link href="/contact" className="hover-target">Book Session</Link>
      </nav>

      <div>
        <div className="mono-sm">LOCATION</div>
        <p style={{ fontWeight: 700, marginTop: '0.5rem', fontSize: '1.2rem' }}>
          Connecticut, USA<br />
          Serving CT · NY · NJ &amp; Beyond
        </p>
      </div>

      <div style={{ textAlign: 'right' }}>
        <div className="mono-sm">CONNECT</div>
        <p style={{ fontWeight: 700, marginTop: '0.5rem', fontSize: '1.2rem' }}>
          <a href="mailto:on1imagesbusiness@gmail.com" className="hover-target" style={{ color: 'inherit', textDecoration: 'none' }}>
            on1imagesbusiness@gmail.com
          </a>
          <br />
          <a href="https://instagram.com/on1images" className="hover-target" style={{ color: 'inherit', textDecoration: 'none' }}>
            @on1images
          </a>
        </p>
      </div>

      <svg
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          opacity: 0.15,
        }}
        viewBox="0 0 200 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="100" height="2" fill="var(--fg)" />
        <rect x="0" y="4" width="80" height="1" fill="var(--fg)" />
        <rect x="0" y="8" width="90" height="4" fill="var(--fg)" />
      </svg>

      <div className="footer-legal">
        © 2025 ON1 Images Photography · Connecticut · All Rights Reserved · Built with Purpose.
      </div>
    </footer>
  );
}
