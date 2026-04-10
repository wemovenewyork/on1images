import type { Metadata } from 'next';
import About from '@/components/sections/About';
import LocationStrip from '@/components/sections/LocationStrip';

export const metadata: Metadata = {
  title: 'Philosophy — ON1 Images Photography',
  description:
    'The eye behind ON1 Images. Bold, honest, authentic photography rooted in Connecticut.',
};

export default function AboutPage() {
  return (
    <>
      <About />
      <LocationStrip />
    </>
  );
}
