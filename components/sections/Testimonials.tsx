const testimonials = [
  {
    id: '1',
    quote:
      "He captured my daughter's prom night perfectly. Every shot had energy and emotion — she cried happy tears when she saw the gallery. Already booked him for her senior portraits.",
    authorName: 'Tamara W.',
    authorDetail: 'Prom Session // Bridgeport, CT',
    authorInitials: 'TW',
  },
  {
    id: '2',
    quote:
      "Booked for our wedding and couldn't be happier. The photos have this cinematic, editorial quality that most photographers just can't touch. Felt like a movie, looked like art.",
    authorName: 'Jordan & Rita M.',
    authorDetail: 'Wedding Session // New Haven, CT',
    authorInitials: 'JR',
  },
  {
    id: '3',
    quote:
      "Got the Signature package for my son's basketball portfolio and the shots were insane. Coaches and scouts were impressed. Fast turnaround, professional, and genuinely talented.",
    authorName: 'Darius L.',
    authorDetail: 'Sports Session // Stamford, CT',
    authorInitials: 'DL',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-header">
        <h2 className="section-title">
          CLIENT<br />REVIEWS.
        </h2>
        <div className="mono-sm">
          VERIFIED: GOOGLE_REVIEWS<br />
          RATING: 5.0 / 5.0<br />
          COUNT: 47+
        </div>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            <div className="google-badge">Google ★★★★★</div>
            <div className="testimonial-stars">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.authorInitials}</div>
              <div>
                <div className="author-name">{t.authorName}</div>
                <div className="author-detail">{t.authorDetail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
