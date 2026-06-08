/* //BomshellLuxeCleaning/bombshell-luxe/schemaTypes/testimonials.ts */

import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',

  fields: [

    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
    }),

    defineField({
      name: 'review',
      title: 'Review',
      type: 'text',
    }),

    defineField({
      name: 'rating',
      title: 'Star Rating',
      type: 'number',

      validation: (Rule) =>
        Rule.min(1).max(5),
    }),

  ],
})