import { useRouter } from 'next/router'
import { getEventsBySlug } from '../../sanity/lib/client'
import { useCallback, useEffect, useState } from 'react'
import { EventInfo } from '../../models/EventInfo'

export default async function Slug() {
  const [eventState, setEventState] = useState<EventInfo>()

  const fetchEvent = useCallback(async () => {
    const event = await getEventsBySlug(slug)
    if (!event) return
    setEventState(event)
  }, [])

  useEffect(() => {
    fetchEvent()
  }, [fetchEvent])

  const router = useRouter()
  const slug = router.query?.slug as string

  console.log(eventState)

  return <div> hallo</div>
}
