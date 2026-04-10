import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

// Minimal client just for image URL building — works even without a token
const imageClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(imageClient);

export function urlFor(source: { asset: { _ref: string } }) {
  return builder.image(source);
}
