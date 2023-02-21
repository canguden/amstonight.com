import { createClient, groq } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { EventInfo } from '../../models/EventInfo'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export async function getEventsBySlug(slug: string): Promise<EventInfo | null> {
  if (!slug) {
    console.error('No slug provided, can not get event')
    return null
  }

  const parameters = {
    slug: slug,
  }

  let query = groq`*[_type == 'event' && slug.current == $slug] {_id, eventName, slug, eventPrice, eventUrl, addressUrl, eventDate, 'Content': content, 'Description': description, 'eventMusic': music, 'eventClub': club, 'eventTime': timePeriod, 'eventAddress': address, 
      eventImage {asset -> {..., metaData}},
      'tags': eventTags[]->{'name': genre, 'color': color.hex, _id}}`

  const events = await client.fetch<EventInfo[]>(query, parameters)

  if (!events || events?.length === 0) {
    console.error("Event not found");
  }
  return events[0];
}
