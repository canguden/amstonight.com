import { SchemaTypeDefinition } from 'sanity'
import header from './header'
import tags from './tags'
import events from './events'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, tags, events],
}