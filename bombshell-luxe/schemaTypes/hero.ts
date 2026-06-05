/* //BomshellLuxeCleaning/bombshell-luxe/schemaTypes/hero.ts */


import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',

  fields: [

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),

    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'string',
    }),

    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'string',
    }),

    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

  ],
})

