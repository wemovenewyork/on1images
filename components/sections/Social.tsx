import Image from 'next/image';

const instaImages = [
  {
    src: 'https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'ON1 Images Instagram',
  },
  {
    src: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'ON1 Images Instagram',
  },
  {
    src: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'ON1 Images Instagram',
  },
  {
    src: 'https://images.pexels.com/photos/3621234/pexels-photo-3621234.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'ON1 Images Instagram',
  },
  {
    src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'ON1 Images Instagram',
  },
];

export default function Social() {
  return (
    <section className="social-section" id="social">
      <div className="section-header">
        <h2 className="section-title">
          FOLLOW<br />THE WORK.
        </h2>
        <div className="mono-sm">
          PLATFORM: INSTAGRAM<br />
          HANDLE: @ON1IMAGES<br />
          STATUS: LIVE
        </div>
      </div>

      <div className="insta-grid">
        {instaImages.map((img, i) => (
          <div key={i} className="insta-tile">
            <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} />
          </div>
        ))}
        <a
          href="https://instagram.com/on1images"
          target="_blank"
          rel="noopener noreferrer"
          className="insta-cta-tile hover-target"
        >
          <div className="ig-icon">📷</div>
          <span>
            Follow<br />@on1images
          </span>
        </a>
      </div>
    </section>
  );
}
