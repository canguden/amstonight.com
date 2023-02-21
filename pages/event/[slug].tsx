import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { client, getEventsBySlug } from '../../sanity/lib/client'
import { EventInfo } from '../../models/EventInfo'
import { useEffect, useState } from 'react'
import { useNextSanityImage } from 'next-sanity-image'
import { AiFillCloseCircle } from 'react-icons/ai'
import { HiCalendar } from 'react-icons/hi2'
import { FaEuroSign, FaHeadphones, FaMusic } from 'react-icons/fa'
import { SiGooglemaps } from 'react-icons/si'
import { BsFillInfoSquareFill } from 'react-icons/bs'

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
    return
  }

  return (
    <>
      <div className="mb-2 mr-2 flex flex-grow justify-end">
        <button type="button" onClick={() => router.back()}>
          <AiFillCloseCircle className="h-8 w-8 justify-end " />
        </button>
      </div>
      <div className="mx-auto h-screen justify-center">
        <Image
          className="h-76 w-full rounded-xl object-cover  md:h-auto"
          src={image?.src}
          loader={image?.loader}
          width={1024}
          height={800}
          alt=""
        />
        <div className="flex flex-col justify-between p-2 leading-normal">
            <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
              {eventState?.eventName} - {eventState?.eventClub}
            </h5>

          <hr/>

          <Link href={eventState?.addressUrl} target="_blank">
            <div className="flex flex-row mt-5 hover:text-blue-500">
              <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-red-500" />
              {eventState?.eventAddress}
            </div>
          </Link>

          <div className="mt-5 flex flex-row">
            <HiCalendar className="align-center mt-0.5 mr-1 h-6 w-6 content-center items-center text-red-500" />{' '}
            {eventState?.eventDate} |
            <div className="ml-2 flex flex-col">{eventState?.eventTime}</div>
          </div>

          <div className="mt-5 flex flex-row text-xl">
            <BsFillInfoSquareFill className="mt-1 mr-2 h-5 w-5 content-center text-red-500" />
          </div>

          <div className="flex max-w-3xl ml-6 flex-row">{eventState?.Content}</div>

          <div className="mt-5 flex flex-row">
            <FaMusic className="mr-2 h-5 w-5 content-center text-red-500" />
            {eventState?.eventMusic}
          </div>

          <div className="mt-5 flex flex-row">
            <FaHeadphones className="mr-2 h-5 w-5 content-center text-red-500" />
            {eventState?.Description}
          </div>

          <div className="mt-10 flex flex-row mb-20">
            <div className="flex flex-grow items-center  justify-start text-xl">
              <FaEuroSign className='mr-2 h-5 w-5 content-center text-red-500' /> {eventState?.eventPrice}
            </div>

            <div className="flex justify-end">
              <button className="rounded-full bg-red-500 px-6 py-2 text-white hover:bg-red-600">
                <Link href={eventState?.eventUrl} target="_blank">
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
