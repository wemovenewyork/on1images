import type { Metadata } from 'next';
import Archive from '@/components/sections/Archive';
import LocationStrip from '@/components/sections/LocationStrip';
import { getGalleryImages } from '@/lib/sanity/queries';

export const metadata: Metadata = {
  title: 'Archive — ON1 Images Photography',
  description:
    'Browse the full ON1 Images portfolio. Sports, portraits, weddings, prom, and event photography in Connecticut.',
};

export default async function WorkPage() {
  const images = await getGalleryImages();

  return (
    <>
      <Archive images={images} />
      <LocationStrip />
    </>
  );
}
