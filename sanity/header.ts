import { HomeIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
  title: 'Page title',
  name: 'pageTitle',
  type: 'document',
  icon: HomeIcon,
  fields: [defineField({ title: 'title', name: 'title', type: 'string' })],
})