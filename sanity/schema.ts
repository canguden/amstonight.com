import { SchemaTypeDefinition } from 'sanity'

import events from './events'
import header from './header'
import tags from './tags'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, tags, events],
}
