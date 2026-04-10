import Image from 'next/image';
import { urlFor } from '@/lib/sanity/image';

export interface GalleryImage {
  _id: string;
  title: string;
  category: string;
  metaLabel: string;
  image: { asset: { _ref: string } };
  order: number;
}

interface ArchiveProps {
  images: GalleryImage[];
}

const fallbackImages = [
  {
    _id: '1',
    src: '/images/sports.webp',
    alt: 'Sports Photography by ON1 Images',
    metaLabel: '01 // KINETIC ENERGY',
    title: 'Sports',
  },
  {
    _id: '2',
    src: '/images/portraits.webp',
    alt: 'Portrait Photography by ON1 Images',
    metaLabel: '02 // RAW IDENTITY',
    title: 'Portraits',
  },
  {
    _id: '3',
    src: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Wedding Photography by ON1 Images',
    metaLabel: '03 // CINEMATIC CONNECTION',
    title: 'Weddings',
  },
  {
    _id: '4',
    src: '/images/prom.webp',
    alt: 'Prom Photography by ON1 Images',
    metaLabel: '04 // ELECTRIC NIGHTS',
    title: 'Prom',
  },
];

export default function Archive({ images }: ArchiveProps) {
  const items =
    images && images.length > 0
      ? images.map((img, i) => ({
          _id: img._id,
          src: urlFor(img.image).width(1200).url(),
          alt: `${img.title} Photography by ON1 Images`,
          metaLabel: img.metaLabel || `0${i + 1} // ${img.category.toUpperCase()}`,
          title: img.title,
        }))
      : fallbackImages;

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
          <a key={item._id} href="#" className="card hover-target">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
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
