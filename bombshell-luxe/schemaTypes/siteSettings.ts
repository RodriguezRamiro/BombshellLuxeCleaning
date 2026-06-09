/* //BomshellLuxeCleaning/bombshell-luxe/schemaTypes/siteSettings.ts */


import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [

    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
    }),

    defineField({
    name: 'businessDescription',
    title: 'Business Description',
    type: 'text',
    }),

    defineField({
    name: 'phone',
    title: 'Phone Number',
    type: 'string',
    }),

    defineField({
    name: 'email',
    title: 'Email Address',
    type: 'string',
    }),

    defineField({
    name: 'designerCredit',
    title: 'Designer Credit',
    type: 'string',
    }),

    defineField({
      name: 'navButtonText',
      title: 'Navbar Button Text',
      type: 'string',
    }),

    defineField({
      name: 'navButtonLink',
      title: 'Navbar Button Link',
      type: 'string',
    }),

    defineField({
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',

      of: [
        {
          type: 'object',

          fields: [

            defineField({
              name: 'label',
              title: 'Link Label',
              type: 'string',
            }),

            defineField({
              name: 'href',
              title: 'Anchor Link',
              type: 'string',
            }),

          ],
        },
      ],
    }),

    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
    }),

    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),

    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
    }),

  ],
})