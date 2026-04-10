import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorInitials',
      title: 'Author Initials',
      type: 'string',
      description: 'e.g. TW — shown in the avatar circle',
      validation: (Rule) => Rule.required().max(3),
    }),
    defineField({
      name: 'authorDetail',
      title: 'Author Detail',
      type: 'string',
      description: 'e.g. Prom Session // Bridgeport, CT',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'authorName', subtitle: 'authorDetail' },
  },
});
