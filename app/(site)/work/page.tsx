import type { Metadata } from 'next';
import Archive from '@/components/sections/Archive';
import LocationStrip from '@/components/sections/LocationStrip';

export const metadata: Metadata = {
  title: 'Archive — ON1 Images Photography',
  description:
    'Browse the full ON1 Images portfolio. Sports, portraits, weddings, prom, and event photography in Connecticut.',
};

export default function WorkPage() {
  return (
    <>
      <Archive />
      <LocationStrip />
    </>
  );
}
