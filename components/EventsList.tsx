import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useNextSanityImage } from 'next-sanity-image'
import { Dispatch, SetStateAction } from 'react'

import { IoTicketOutline } from 'react-icons/io5'

import { EventInfo } from '../pages/index'
import { client } from '../sanity/lib/client'
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
    eventPrice,
    eventClub,
    eventMusic,
    eventUrl,
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
        <div className="h-38 w-68 rounded-b-xl ">
          <div className=" flex flex-col justify-start text-xl font-bold">
            {eventName}
            <div className=" text-lg font-semibold text-gray-500">
              {eventClub}
            </div>
          </div>

          <div className="m-1 flex items-center gap-2">
            <div className="  text-md font-thin">{eventAddress}</div>
          </div>

          <div className="m-1 flex items-center gap-2">
            <div className="text-md  my-1 font-thin">{eventTime}</div>
          </div>

          <div className="m-1 flex items-center gap-2">
            <div className=" text-sm font-thin">{eventMusic}</div>
          </div>

          <div className="m-1 flex items-center justify-between gap-1">
            <div className="flex items-center text-gray-800 dark:text-gray-300">
              <Link href={eventUrl} target="_blank">
                Tickets
              </Link>
            </div>
            <div className="mx-1 flex flex-row content-center items-center font-semibold text-black dark:text-white">
              <IoTicketOutline className="mr-1 h-4 w-4 justify-end" />

              {price}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
