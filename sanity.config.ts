import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schema } from './sanity/schema';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'replace-with-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('ON1 Images CMS')
          .items([
            S.listItem()
              .title('Gallery Images')
              .child(S.documentTypeList('galleryImage').title('Gallery Images')),
            S.listItem()
              .title('Packages')
              .child(S.documentTypeList('package').title('Packages')),
            S.listItem()
              .title('Testimonials')
              .child(S.documentTypeList('testimonial').title('Testimonials')),
            S.listItem()
              .title('FAQs')
              .child(S.documentTypeList('faq').title('FAQs')),
          ]),
    }),
    visionTool(),
  ],
});
