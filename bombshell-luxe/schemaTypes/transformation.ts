/* //BomshellLuxeCleaning/bombshell-luxe/schemaTypes/transformation.ts */


import { defineField, defineType } from 'sanity'

export const transformationType = defineType({
  name: 'transformations',
  title: 'Transformation',
  type: 'document',

  fields: [

    defineField({
      name: 'title',
      title: 'Transformation Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'beforeImage',
      title: 'Before Image',
      type: 'image',

      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'beforeAlt',
      title: 'Before Alt Text',
      type: 'string',
    }),

    defineField({
      name: 'afterImage',
      title: 'After Image',
      type: 'image',

      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'afterAlt',
      title: 'After Alt Text',
      type: 'string',
    }),

  ],
})