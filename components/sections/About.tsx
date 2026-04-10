import Image from 'next/image';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image-col">
        <div className="about-tag">// BEHIND THE LENS</div>
        <Image
          src="https://images.pexels.com/photos/3471028/pexels-photo-3471028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="ON1 Images Photographer"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="about-text-col">
        <div className="about-eyebrow">// SYS.ABOUT — PHILOSOPHY.EXE</div>
        <h2 className="about-heading">
          The Eye<br />Behind<br />
          <span style={{ color: 'var(--brand)' }}>ON1.</span>
        </h2>
        <p className="about-body">
          Photography has always been about more than a shot — it&apos;s about making you feel something you can&apos;t put into words. Every frame I capture carries intention, energy, and a visual language that speaks louder than any caption.
        </p>
        <p className="about-body">
          My approach is simple: no stiff poses, no forced smiles. Just you, in your element, captured honestly and powerfully. Whether it&apos;s the sideline of a championship game or the first dance at your wedding — I&apos;m there for the real moments.
        </p>
        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">200+</div>
            <div className="stat-label">Sessions Shot</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">6+</div>
            <div className="stat-label">Specialties</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">CT</div>
            <div className="stat-label">Home Base</div>
          </div>
        </div>
      </div>
    </section>
  );
}
