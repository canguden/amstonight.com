import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { client, getEventsBySlug } from '../../sanity/lib/client'
import { EventInfo } from '../../models/EventInfo'
import { useEffect, useState } from 'react'
import { useNextSanityImage } from 'next-sanity-image'
import { AiFillCloseCircle } from 'react-icons/ai'
import { HiOutlineClock, HiOutlineInformationCircle, HiOutlineMap, HiOutlineMapPin, HiOutlineMusicalNote } from 'react-icons/hi2'
import { FaHeadphones, FaLocationArrow } from 'react-icons/fa'

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
      <div className="mb-2 flex flex-grow justify-end">
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
           {eventState?.eventName} @{eventState?.eventClub}
          </h5>

          <div className="flex flex-row">
          <HiOutlineClock className='h-5 w-5 content-center mr-2 text-red-500'/>{eventState?.eventDate} - {eventState?.eventTime}</div>

          <div className="flex flex-row">
          <HiOutlineInformationCircle className='h-5 w-5 content-center mr-2 text-red-500'/>
          </div>

          <div className="flex flex-row max-w-2xl">{eventState?.Content}</div>

          <div className="flex flex-row">
          <HiOutlineMusicalNote className='h-5 w-5 content-center mr-2 text-red-500'/>{eventState?.eventMusic}</div>

          <div className="flex flex-row">
          <FaHeadphones className='h-5 w-5 content-center mr-2 text-red-500'/>{eventState?.Description}</div>

          <Link href={eventState?.addressUrl} target="_blank">
          <div className="flex flex-row">
          <FaLocationArrow className='h-5 w-5 mt-1 content-center mr-2 text-red-500'/>{eventState?.eventAddress}
          </div>
          </Link>

<div className='flex flex-row'>
          <div className="flex flex-grow justify-start items-center text-xl">€ {eventState?.eventPrice}</div>

          <div className='flex justify-end'>
            <button className="w-24 rounded-lg text-white bg-red-500 px-2 py-2">
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
