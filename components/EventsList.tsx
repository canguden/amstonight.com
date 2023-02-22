import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useNextSanityImage } from 'next-sanity-image'
import { Dispatch, SetStateAction } from 'react'


import { EventInfo } from '../models/EventInfo'
import { client } from '../sanity/lib/client'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { FaMusic } from 'react-icons/fa'
// import { Tags } from './'

type PropsType = {
  // setSelectedTag: Dispatch<SetStateAction<string[]>>
  // selectedTags: string[]
  selectedDay: string
  eventInfo: EventInfo
  itemId: string
}

export const EventsList: React.FC<PropsType> = ({
  // setSelectedTag,
  // selectedTags,
  selectedDay,
  eventInfo,
}) => {
  const {
    eventAddress,
    eventName,
    eventDate,
    eventPrice,
    eventClub,
    eventMusic,
    eventUrl,
    addressUrl,
    slug,
    eventTime,
    tags,
    eventImage,
  } = eventInfo

  useEffect(() => {
    console.log('value of slug:', slug)
  }, [slug])

  if (!slug) return null

  const imageProps = useNextSanityImage(client, eventImage.asset) // https://www.sanity.io/plugins/next-sanity-image
  const date = new Date(selectedDay)
  const dayMonth = format(date, 'd MMM').toUpperCase()
  const price = new Intl.NumberFormat('sfb', {
    style: 'currency',
    currency: 'EUR',
  }).format(eventPrice)

  return (
    <div className="relative mx-2 mt-5 max-w-4xl object-fill ">
      <Link href={`/event/${slug.current}`}>
        <Image
          src={imageProps?.src}
          loader={imageProps?.loader}
          width={540}
          height={240}
          alt="alt"
          priority={true}
          className="w-68  h-48 rounded-md object-cover"
        />

        <div className="absolute top-0 rounded-tl-md rounded-br-md bg-black py-1 px-1 font-bold text-white md:py-2">
          {dayMonth}
        </div>

        <div className=" flex items-center mt-2  gap-2">
            <div className="text-md text-gray-600 dark:text-gray-400 font-thin">{selectedDay} | {eventTime}</div>
          </div>

        <div className="h-38 w-68 rounded-b-xl ">
          <div className=" flex flex-col justify-start text-xl font-bold">
            {eventName}
            <div className=" mt-1 flex flex-row text-lg font-semibold text-gray-600 dark:text-gray-400">
             <HiOutlineMapPin className='content-center mt-1 mr-1 text-red-500' /> {eventClub}
            </div>

            <div className=" mt-1 flex flex-row text-sm font-semibold text-gray-600 dark:text-gray-400">
             <FaMusic className='content-center mt-1 mr-2  text-red-500' /> {eventMusic}
            </div>
          </div>
          </div>
      </Link>
    </div>
  )
}
