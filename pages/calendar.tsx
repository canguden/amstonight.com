import { groq } from 'next-sanity'
import React, { useEffect, useState } from 'react'
import events from 'sanity/events'

import { EventInfo } from '../models/EventInfo'
import { client } from '../sanity/lib/client'

const Calendar = () => {
  const [events, setEvents] = useState([])

  const fetchEvents = async () => {
    const eventsQuery = groq`*[_type == 'event' && eventDate && eventTags[]
          {_id, eventName, slug, eventPrice, Description, eventUrl, addressUrl, eventDate, 'eventMusic': music, 'eventClub': club, 'eventTime': timePeriod, 'eventAddress': address, 
          eventImage {asset -> {..., metaData}},
          'tags': eventTags[]->{'name': genre, 'color': color.hex, _id}}`

    const event = await client.fetch<EventInfo[]>(eventsQuery)

    setEvents(events)
  }

  return (
    <>
      {events.map((event) => (
        <div key={event}>
          <div>{event}</div>
          {event}
        </div>
      ))}
    </>
  )
}

export default Calendar
