import Link from 'next/link';

export interface PackageItem {
  _id: string;
  name: string;
  price: number;
  badge?: string;
  featured: boolean;
  code: string;
  features: string[];
}

interface PackagesProps {
  packages: PackageItem[];
}

const fallbackPackages: PackageItem[] = [
  {
    _id: '1',
    code: 'PKG.01 // ENTRY',
    name: 'Lite',
    price: 175,
    featured: false,
    features: [
      'One Location',
      '30 Minute Session',
      '15 Edited Digital Images',
      'Print Release Included',
      'Online Gallery Delivery',
    ],
  },
  {
    _id: '2',
    code: 'PKG.02 // STANDARD',
    name: 'Signature',
    price: 225,
    badge: 'Most Popular',
    featured: true,
    features: [
      'One Location',
      '1 Hour Session',
      '30 Edited Digital Images',
      'Print Release Included',
      'Online Gallery Delivery',
      '+$50 Per Additional Image',
    ],
  },
  {
    _id: '3',
    code: 'PKG.03 // PREMIUM',
    name: 'Luxe',
    price: 375,
    featured: false,
    features: [
      'Two Locations',
      '1.5 Hour Session',
      '2 Outfit Changes',
      '40 Edited Digital Images',
      'Print Release Included',
      'Priority Scheduling',
    ],
  },
];

export default function Packages({ packages }: PackagesProps) {
  const items = packages && packages.length > 0 ? packages : fallbackPackages;

  return (
    <section className="packages-section" id="packages">
      <div className="section-header">
        <h2 className="section-title">
          THE<br />PACKAGES.
        </h2>
        <div className="mono-sm">
          MODE: TRANSPARENT_PRICING<br />
          ALL PACKAGES INCLUDE PRINT RELEASE<br />
          STATUS: BOOKING_OPEN
        </div>
      </div>

      <div className="packages-grid">
        {items.map((pkg) => (
          <div key={pkg._id} className={`package-card${pkg.featured ? ' featured' : ''}`}>
            {pkg.badge && <div className="pkg-badge">{pkg.badge}</div>}
            <div className="mono-sm">{pkg.code}</div>
            <div className="pkg-name">{pkg.name}</div>
            <div className="pkg-price">
              <sup>$</sup>{pkg.price}
            </div>
            <ul className="pkg-features">
              {pkg.features.map((f, i) => (
                <li key={i} className="pkg-feature">{f}</li>
              ))}
            </ul>
            <Link href="/contact" className="pkg-cta hover-target">
              Book {pkg.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
