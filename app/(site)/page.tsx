import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import Archive from '@/components/sections/Archive';
import LocationStrip from '@/components/sections/LocationStrip';
import { getGalleryImages } from '@/lib/sanity/queries';

export default async function HomePage() {
  const images = await getGalleryImages();

  return (
    <>
      <Hero />
      <Marquee />
      <Archive images={images} />
      <LocationStrip />
    </>
  );
}
