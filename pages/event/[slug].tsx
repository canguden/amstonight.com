import { useRouter } from 'next/router'
import Image from 'next/image'
import { client, getEventsBySlug } from '../../sanity/lib/client'
import { EventInfo } from '../../models/EventInfo'
import { useEffect, useState } from 'react'
import { useNextSanityImage } from 'next-sanity-image'

export default function Slug() {
  const [eventState, setEventState] = useState<EventInfo | null>(null)
  const router = useRouter()
  const slug = router.query?.slug as string
  console.log(slug)

  useEffect(() => {
    if (router.isReady) {
      getEventsBySlug(slug).then((event) => {
        if (event == null) {
          return
        }
        console.log(event)
        setEventState(event)
      })
    }
  }, [setEventState, router.isReady])

  const image = useNextSanityImage(client, eventState?.eventImage?.asset!)

  // hack omdat hij blijkbaar al geladen word voor image gezet is, duurt heel even blijkbaar
  if (!image?.src) {
    return <div>Image heeft geen src</div>
  }

  return (
    <>
      <a
        href="#"
        className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
      >
        <Image
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image?.src}
          loader={image?.loader}
          width={1024}
          height={800}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {eventState?.eventName} @{eventState?.eventClub}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Hier meer informatie
          </p>
        </div>
      </a>
    </>
  )
}
