import type { Metadata } from 'next';
import Packages from '@/components/sections/Packages';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';

export const metadata: Metadata = {
  title: 'Packages — ON1 Images Photography',
  description:
    'Transparent pricing for portraits, sports, weddings, prom, and events. Three tiers to fit every shoot.',
};

export default function PackagesPage() {
  return (
    <>
      <Packages />
      <Testimonials />
      <FAQ />
    </>
  );
}
