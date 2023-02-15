import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useNextSanityImage } from 'next-sanity-image'
import { Dispatch, SetStateAction } from 'react'

import { IoTicketOutline } from "react-icons/io5";

import { EventInfo } from '../pages/index'
import { client } from '../sanity/lib/client'
// import { Tags } from './'
import { FaFacebook } from 'react-icons/fa'

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
    eventMaps,
    eventTime,
    tags,
    eventImage,
  } = eventInfo

  const imageProps = useNextSanityImage(client, eventImage.asset) // https://www.sanity.io/plugins/next-sanity-image

  const date = new Date(selectedDay)
  const dayMonth = format(date, 'd MMM').toUpperCase()

  const price = new Intl.NumberFormat('sfb', {
    style: 'currency',
    currency: 'EUR',
  }).format(eventPrice)
  return (
    <div className="max-w-4xl relative mt-5 mx-2 object-fill ">
      <Image
        src={imageProps.src}
        loader={imageProps?.loader}
        width={540}
        height={240}
        alt="alt"
        priority={true}
        className="rounded-md  object-cover h-48 w-68"
      />
      
      <div className="absolute top-0 rounded-tl-md rounded-br-md bg-black py-1 px-1 md:py-2 font-bold text-white">
        {dayMonth}
      </div>
      <div className="rounded-b-xl h-38 w-68 ">
        <div className=" flex flex-col justify-start text-xl font-bold">
          {eventName}
          <div className=" text-lg text-gray-500 font-semibold">{eventClub}</div>
        </div>

        <div className="m-1 flex items-center gap-2">
          <div className="  text-xs font-thin">{eventAddress}</div>
        </div>

        <div className="m-1 flex items-center gap-2">
          <div className="my-1   text-xs font-thin">{eventTime}</div>
        </div>

        <div className="m-1 flex items-center gap-2">
          <div className=" text-xs font-thin">{eventMusic}</div>
        </div>

        <div className="m-1 flex justify-between items-center gap-1">
          <div className="flex items-center text-gray-500">
          <Link href={eventUrl} target="_blank">
              Learn More
            </Link>
          </div>
            <div className="mx-1 items-center flex flex-row content-center text-black dark:text-white font-semibold"><IoTicketOutline className="h-4 w-4 mr-1 justify-end" />

              {price}
            
            </div>
          </div>
          </div>

    </div>
  )
}