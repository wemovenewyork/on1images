import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Sports', value: 'sports' },
          { title: 'Portraits', value: 'portraits' },
          { title: 'Weddings', value: 'weddings' },
          { title: 'Prom', value: 'prom' },
          { title: 'Events', value: 'events' },
          { title: 'Corporate', value: 'corporate' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaLabel',
      title: 'Meta Label',
      type: 'string',
      description: 'e.g. 01 // KINETIC ENERGY',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
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
    select: { title: 'title', category: 'category', media: 'image' },
    prepare({ title, category, media }) {
      return { title, subtitle: category, media };
    },
  },
});
