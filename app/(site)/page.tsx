import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import Archive from '@/components/sections/Archive';
import LocationStrip from '@/components/sections/LocationStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Archive />
      <LocationStrip />
    </>
  );
}
