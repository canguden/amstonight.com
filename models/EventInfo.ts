import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { Slug } from '@sanity/types'

import { TagType } from './TagType'

export type EventInfo = {
  endDate: string
  _id: string
  eventImage: { asset: SanityImageSource }
  eventDate: Date
  eventName: string
  tags: TagType[]
  eventTime: string
  Content: string
  Description: string
  Age: string
  eventClub: string
  eventMusic: string
  eventAddress: string
  eventPrice: number
  eventUrl: string
  addressUrl: string
  slug: Slug
}
