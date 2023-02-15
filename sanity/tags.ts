import { TagIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
  title: 'Tags',
  name: 'tags',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      title: 'Genre',
      name: 'genre',
      type: 'string',
    }),
  ],
})