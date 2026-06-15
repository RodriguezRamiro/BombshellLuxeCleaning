/* //BomshellLuxeCleaning/bombshell-luxe/schemaTypes/transformationsSection.ts */


import { defineField, defineType } from 'sanity'

export const transformationsSectionType = defineType({
  name: 'transformationsSection',
  title: 'Transformations Section',
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
        title: 'Section Active',
        type: 'boolean',
        initialValue: true,
      }),

    ],
  })