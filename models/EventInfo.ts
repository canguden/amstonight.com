import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { Slug } from '@sanity/types'
import { TagType } from './TagType'

export type EventInfo = {
  _id: string
  eventImage: { asset: SanityImageSource }
  eventDate: Date
  eventName: string
  tags: TagType[]
  eventTime: string
  eventClub: string
  eventAddress: string
  eventPrice: number
  eventUrl: string
  slug: Slug
}
