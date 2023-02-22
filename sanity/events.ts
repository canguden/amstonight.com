import { CalendarIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
  title: 'Event',
  name: 'event',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      title: 'Event Name',
      name: 'eventName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },

    defineField({
      title: 'Date',
      name: 'eventDate',
      type: 'date',
      validation: (rule) => rule.required(),
    }),

    defineField({
      title: 'Address',
      name: 'address',
      type: 'string',
      description: 'Event address like - Ziggo Dome, de passage 100, Amsterdam',
      validation: (rule) => rule.required(),
    }),

    defineField({
      title: 'Adress link',
      name: 'addressUrl',
      type: 'url',
    }),

    defineField({
      title: 'Description',
      name: 'description',
      type: 'string',
      description: 'Event Description',
      validation: (rule) => rule.required(),
    }),

    {
      title: 'Content', 
      name: 'content',
      type: 'string', 
    },

    defineField({
      title: 'Age',
      name: 'age',
      type: 'string',
    }),

    defineField({
      title: 'Club',
      name: 'club',
      type: 'string',
      description: 'Club like - Ziggo Dome',
      validation: (rule) => rule.required(),
    }),

    defineField({
      title: 'Time period',
      name: 'timePeriod',
      type: 'string',
      description: 'Time period from to (19-00 21-00)',
      validation: (rule) => rule.required(),
    }),

    defineField({
      title: 'Music',
      name: 'music',
      type: 'string',
      description: 'Example: #hiphop #house',
      validation: (rule) => rule.required(),
    }),

    defineField({
      title: 'Price',
      name: 'eventPrice',
      type: 'number',
      description: '10,99 or 0',
      validation: (rule) => rule.required(),
    }),

    defineField({
      title: 'Image',
      name: 'eventImage',
      type: 'image',
      validation: (rule) => rule.required(),
    }),

    defineField({
      title: 'Event link',
      name: 'eventUrl',
      type: 'url',
      validation: (rule) => rule.required(),
    }),

    defineField({
      title: 'Tags',
      name: 'eventTags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tags' }],
        },
      ],
    }),
  ],
})