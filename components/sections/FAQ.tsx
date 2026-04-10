export interface FAQItem {
  _id: string;
  number: string;
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const fallbackFAQs: FAQItem[] = [
  {
    _id: '1',
    number: 'Q.01',
    question: 'How far in advance should I book?',
    answer:
      'At least 2–3 weeks out for portraits and sports sessions. For weddings and larger events, 2–3 months is ideal. Peak season (prom, summer, fall) books fast.',
  },
  {
    _id: '2',
    number: 'Q.02',
    question: 'Do I get the raw/unedited files?',
    answer:
      'No — all packages include professionally edited digital images only. The editing is part of the art. Raw files are not part of any package.',
  },
  {
    _id: '3',
    number: 'Q.03',
    question: 'What if the weather doesn\'t cooperate?',
    answer:
      'Outdoor sessions affected by weather can be rescheduled at no cost. We\'ll work together to find the next best date.',
  },
  {
    _id: '4',
    number: 'Q.04',
    question: 'How long until I receive my photos?',
    answer:
      'Turnaround is typically 5–10 business days. Rush delivery (3 days) is available for an additional fee.',
  },
  {
    _id: '5',
    number: 'Q.05',
    question: 'Do you travel outside Connecticut?',
    answer:
      'Absolutely. Travel is available to New York, New Jersey, Massachusetts, and beyond. Inquire for travel rates.',
  },
  {
    _id: '6',
    number: 'Q.06',
    question: 'What should I wear to my session?',
    answer:
      'Wear what makes you feel like yourself — confident, comfortable, and real. Avoid logos and busy patterns unless that\'s your style. We\'ll discuss before the shoot.',
  },
];

export default function FAQ({ faqs }: FAQProps) {
  const items = faqs && faqs.length > 0 ? faqs : fallbackFAQs;

  return (
    <section className="faq-section" id="faq">
      <div className="section-header">
        <h2 className="section-title">
          GOT<br />QUESTIONS.
        </h2>
        <div className="mono-sm">
          MODE: TRANSPARENCY<br />
          TOPICS: BOOKING / PROCESS<br />
          STATUS: ANSWERED
        </div>
      </div>

      <div className="faq-grid">
        {items.map((faq) => (
          <div key={faq._id} className="faq-item">
            <div className="faq-question">
              <span className="faq-q-num">{faq.number}</span>
              {faq.question}
            </div>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
