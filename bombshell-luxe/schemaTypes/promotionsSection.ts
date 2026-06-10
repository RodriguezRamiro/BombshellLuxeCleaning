/* //BomshellLuxeCleaning/bombshell-luxe/schemaTypes/promotionsSection.ts */

import { defineField, defineType } from 'sanity'

export const promotionsSectionType = defineType({
  name: 'promotionsSection',
  title: 'Promotions Section',
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
        name: 'active',
        title: 'Promotion Active',
        type: 'boolean',
        initialValue: true,
      }),

  ],
})