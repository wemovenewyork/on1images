import Image from 'next/image';

const items = [
  {
    id: '1',
    src: '/images/sports.webp',
    alt: 'Sports Photography by ON1 Images',
    metaLabel: '01 // KINETIC ENERGY',
    title: 'Sports',
  },
  {
    id: '2',
    src: '/images/portraits.webp',
    alt: 'Portrait Photography by ON1 Images',
    metaLabel: '02 // RAW IDENTITY',
    title: 'Portraits',
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Wedding Photography by ON1 Images',
    metaLabel: '03 // CINEMATIC CONNECTION',
    title: 'Weddings',
  },
  {
    id: '4',
    src: '/images/prom.webp',
    alt: 'Prom Photography by ON1 Images',
    metaLabel: '04 // ELECTRIC NIGHTS',
    title: 'Prom',
  },
];

export default function Archive() {
  return (
    <section className="services" id="work">
      <div className="section-header">
        <h2 className="section-title">
          THE<br />ARCHIVE.
        </h2>
        <div className="mono-sm" style={{ textAlign: 'right' }}>
          DISPLAY: GRID_VIEW<br />
          FILTER: ALL_WORKS<br />
          STATUS: ACTIVE
        </div>
      </div>

      <div className="grid">
        {items.map((item) => (
          <a key={item.id} href="#" className="card hover-target">
            <Image src={item.src} alt={item.alt} fill style={{ objectFit: 'cover' }} />
            <div className="card-overlay">
              <div className="card-meta">{item.metaLabel}</div>
              <div className="card-title">{item.title}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
