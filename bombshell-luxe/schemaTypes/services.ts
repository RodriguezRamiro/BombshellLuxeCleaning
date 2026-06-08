/* //BomshellLuxeCleaning/bombshell-luxe/schemaTypes/seervices.ts */

import { defineField, defineType } from 'sanity'

export const servicesType = defineType({
  name: 'services',
  title: 'Services Section',
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
      name: 'servicesList',
      title: 'Services List',
      type: 'array',

      of: [
        {
          type: 'object',

          fields: [

            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'string',
            }),

            defineField({
              name: 'description',
              title: 'Service Description',
              type: 'text',
            }),

            defineField({
              name: 'icon',
              title: 'Service Icon',
              type: 'image',

              options: {
                hotspot: true,
              },
            }),

          ],
        },
      ],
    }),

  ],
})