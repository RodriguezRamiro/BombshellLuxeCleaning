/* //BomshellLuxeCleaning/bombshell-luxe/schemaTypes/contact.ts */


import { defineField, defineType } from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Contact Section',
  type: 'document',

  fields: [

    defineField({
      name: 'active',
      title: 'Section Active',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'label',
      title: 'Contact Label',
      type: 'string',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
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
      name: 'location',
      title: 'Service Areas',
      type: 'string',
    }),

    defineField({
        name: 'businessHours',
        title: 'Business Hours',
        type: 'text',
      }),

    defineField({
      name: 'formEndpoint',
      title: 'FormSpree Endpoint',
      type: 'url',
    }),

    defineField({
      name: 'buttonText',
      title: 'Submit Button Text',
      type: 'string',
    }),

  ],
})