import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useNextSanityImage } from 'next-sanity-image'
import { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import { FaEuroSign, FaHeadphones, FaMusic } from 'react-icons/fa'
import { GiAges } from 'react-icons/gi'
import { HiCalendar } from 'react-icons/hi2'
import { SiGooglemaps } from 'react-icons/si'

import { EventInfo } from '../../models/EventInfo'
import { client, getEventsBySlug } from '../../sanity/lib/client'

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
  }, [setEventState, router.isReady, slug])

  const image = useNextSanityImage(client, eventState?.eventImage?.asset!)
  // hack omdat hij blijkbaar al geladen word voor image gezet is, duurt heel even blijkbaar
  if (!image?.src) {
    return
  }

  return (
    <>
      
      <div className="mb-2 mr-2 flex flex-grow justify-end">
        <button type="button" onClick={() => router.back()}>
          <AiFillCloseCircle className="h-8 w-8 text-red-500 justify-end " />
        </button>
      </div>
      <div className="mx-auto h-screen justify-center">
        <Image
          className="h-76 w-full object-cover md:h-auto  md:rounded-xl"
          src={image?.src}
          loader={image?.loader}
          width={1024}
          height={800}
          alt=""
        />
        <div className="mx-2 flex flex-col justify-between p-2 leading-normal md:mx-0">
          <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
            {eventState?.eventName} - {eventState?.eventClub}
          </h5>

          <hr />

          <div className="mt-5 flex flex-row text-blue-500 hover:text-blue-400">
            <Link  href={`${eventState?.addressUrl}`} target="_blank">
              <div className="flex flex-row">
                <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-red-500" />
                {eventState?.eventAddress}
              </div>
            </Link>
          </div>

          <div className="mt-5 flex flex-row">
            <HiCalendar className="align-center mt-0.5 mr-1 h-6 w-6 content-center items-center text-red-500" />{' '}
            {`${eventState?.eventDate}`} |
            <div className="ml-2 flex flex-col">{eventState?.eventTime}</div>
          </div>


          <div className="mt-5 flex flex-row text-xl">
            <BsFillInfoSquareFill className="mt-1 mr-2 h-5 w-5 content-center text-red-500" />
          </div>

          <div className="mt-5 flex max-w-3xl flex-row">
            {eventState?.Content}
          </div>

          <div className="mt-5 flex flex-row">
            <GiAges className="mr-2 h-5 w-5 content-center text-red-500" />
            {eventState?.Age}
          </div>

          <div className="mt-5 flex flex-row">
            <FaMusic className="mr-2 h-5 w-5 content-center text-red-500" />
            {eventState?.eventMusic}
          </div>


          <div className="mt-5 flex flex-row text-xl">
            <FaHeadphones className="mt-1 mr-2 h-5 w-5 content-center text-red-500" />
          </div>

          <div className="mt-5 flex flex-row">
            {eventState?.Description}
          </div>

          <div className="mt-10 mb-20 flex flex-row">
            <div className="flex flex-grow items-center  justify-start text-xl">
              <FaEuroSign className="mr-2 h-5 w-5 content-center text-red-500" />{' '}
              {eventState?.eventPrice}
            </div>

            <div className="flex justify-end">
              <button className="rounded-full bg-red-500 px-6 py-2 text-white hover:bg-red-600">
                <Link href={`${eventState?.eventUrl}`} target="_blank">
                  Get Tickets
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
