import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'imageCollection',
  title: 'Image Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'imageObject',
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'isLandscape',
              title: 'Is Landscape Orientation?',
              type: 'boolean',
              initialValue: false,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'alt',
              media: 'image',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
});
