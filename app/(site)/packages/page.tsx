import type { Metadata } from 'next';
import Packages from '@/components/sections/Packages';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import { getPackages, getTestimonials, getFAQs } from '@/lib/sanity/queries';

export const metadata: Metadata = {
  title: 'Packages — ON1 Images Photography',
  description:
    'Transparent pricing for portraits, sports, weddings, prom, and events. Three tiers to fit every shoot.',
};

export default async function PackagesPage() {
  const [packages, testimonials, faqs] = await Promise.all([
    getPackages(),
    getTestimonials(),
    getFAQs(),
  ]);

  return (
    <>
      <Packages packages={packages} />
      <Testimonials testimonials={testimonials} />
      <FAQ faqs={faqs} />
    </>
  );
}
