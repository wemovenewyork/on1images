import { client } from './client';
import type { GalleryImage } from '@/components/sections/Archive';
import type { PackageItem } from '@/components/sections/Packages';
import type { TestimonialItem } from '@/components/sections/Testimonials';
import type { FAQItem } from '@/components/sections/FAQ';

export async function getGalleryImages(): Promise<GalleryImage[]> {
  if (!client) return [];
  try {
    return await client.fetch(
      `*[_type == "galleryImage"] | order(order asc) {
        _id,
        title,
        category,
        metaLabel,
        image,
        order
      }`
    );
  } catch {
    return [];
  }
}

export async function getPackages(): Promise<PackageItem[]> {
  if (!client) return [];
  try {
    return await client.fetch(
      `*[_type == "package"] | order(order asc) {
        _id,
        name,
        code,
        price,
        badge,
        featured,
        features,
        order
      }`
    );
  } catch {
    return [];
  }
}

export async function getTestimonials(): Promise<TestimonialItem[]> {
  if (!client) return [];
  try {
    return await client.fetch(
      `*[_type == "testimonial"] | order(order asc) {
        _id,
        quote,
        authorName,
        authorInitials,
        authorDetail,
        order
      }`
    );
  } catch {
    return [];
  }
}

export async function getFAQs(): Promise<FAQItem[]> {
  if (!client) return [];
  try {
    return await client.fetch(
      `*[_type == "faq"] | order(order asc) {
        _id,
        number,
        question,
        answer,
        order
      }`
    );
  } catch {
    return [];
  }
}
