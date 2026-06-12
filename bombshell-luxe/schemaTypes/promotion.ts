/* //BomshellLuxeCleaning/bombshell-luxe/schemaTypes/promotion.ts */


import { defineField, defineType } from 'sanity'

export const promotionType = defineType({
  name: 'promotion',
  title: 'Promotion',
  type: 'document',

  fields: [

    defineField({
      name: 'title',
      title: 'Promotion Title',
      type: 'string',
    }),

    defineField({
      name: 'active',
      title: 'Promotion Active',
      type: 'boolean',
      initialValue: true,
      }),

    defineField({
      name: 'badge',
      title: 'Promotion Badge',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Promotion Description',
      type: 'text',
    }),

    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),

    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
    }),

    defineField({
      name: 'image',
      title: 'Promotion Image',
      type: 'image',

      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
    }),

  ],
})
