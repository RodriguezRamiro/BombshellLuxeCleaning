/* //BomshellLuxeCleaning/bombshell-luxe/schemaTypes/testimonials.ts */

import { defineField, defineType } from 'sanity'

export const testimonialsSectionType = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'document',

  fields: [

    defineField({
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'string',
    }),

    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    }),

    defineField({
      name: 'googleReviewsUrl',
      title: 'Google Reviews URL',
      type: 'url',
    }),

    defineField({
      name: 'leaveReviewUrl',
      title: 'Leave Review URL',
      type: 'url',
    }),

    defineField({
      name: 'stats',
      title: 'Trust Stats',
      type: 'array',

      of: [
        {
          type: 'object',

          fields: [

            defineField({
              name: 'value',
              title: 'Stat Value',
              type: 'string',
            }),

            defineField({
              name: 'label',
              title: 'Stat Label',
              type: 'string',
            }),

            defineField({
              name: 'location',
              title: 'Client Location',
              type: 'string',
            }),

          ],
        },
      ],
    }),

  ],
})
