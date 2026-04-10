export default function BookSection() {
  return (
    <section className="book-section" id="book">
      <div className="book-left">
        <div>
          <div
            className="mono-sm"
            style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}
          >
            // SYS.BOOK — SESSION.INIT
          </div>
          <h2 className="book-heading">
            Let&apos;s<br />Create<br />Something.
          </h2>
          <p className="book-sub">
            Fill out the form and we&apos;ll be in touch within 24 hours to confirm your session,
            discuss locations, and lock in your date.
          </p>
        </div>
        <div className="book-location">
          📍 Connecticut — Serving CT, NY, NJ &amp; Beyond
        </div>
      </div>

      <div className="book-right">
        <div className="mono-sm" style={{ marginBottom: 'var(--space-sm)' }}>
          // CONTACT_FORM — ALL FIELDS OPTIONAL
        </div>
        <form className="book-form" action="mailto:on1imagesbusiness@gmail.com" method="GET">
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">First Name</label>
              <input
                className="form-input"
                type="text"
                name="firstName"
                placeholder="Your name"
              />
            </div>
            <div className="form-field">
              <label className="form-label">Last Name</label>
              <input
                className="form-input"
                type="text"
                name="lastName"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="your@email.com"
            />
          </div>

          <div className="form-field">
            <label className="form-label">Phone Number</label>
            <input
              className="form-input"
              type="tel"
              name="phone"
              placeholder="+1 (000) 000-0000"
            />
          </div>

          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Session Type</label>
              <select className="form-select" name="sessionType">
                <option value="">Select type...</option>
                <option>Prom / Senior</option>
                <option>Wedding</option>
                <option>Sports</option>
                <option>Portrait</option>
                <option>Birthday</option>
                <option>Corporate Event</option>
              </select>
            </div>
            <div className="form-field">
              <label className="form-label">Package</label>
              <select className="form-select" name="package">
                <option value="">Select package...</option>
                <option>Lite — $175</option>
                <option>Signature — $225</option>
                <option>Luxe — $375</option>
                <option>Custom / Event</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Tell Us About Your Vision</label>
            <textarea
              className="form-input"
              name="vision"
              rows={3}
              placeholder="Location ideas, vibe, date, anything..."
              style={{ resize: 'vertical' }}
            />
          </div>

          <button type="submit" className="form-submit hover-target">
            <span>→ Send Inquiry</span>
          </button>
        </form>
      </div>
    </section>
  );
}
