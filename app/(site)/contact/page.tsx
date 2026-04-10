import type { Metadata } from 'next';
import Social from '@/components/sections/Social';
import BookSection from '@/components/sections/BookSection';

export const metadata: Metadata = {
  title: 'Book a Session — ON1 Images Photography',
  description:
    'Ready to create something real? Book your ON1 Images session today. Serving CT, NY, NJ and beyond.',
};

export default function ContactPage() {
  return (
    <>
      <BookSection />
      <Social />
    </>
  );
}
