import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useNextSanityImage } from 'next-sanity-image'
import { Dispatch, SetStateAction } from 'react'

import { FaRegClock } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { BsPinMap } from "react-icons/bs";
import { IoTicketOutline, IoArrowRedoSharp } from "react-icons/io5";

import { EventInfo } from '../pages/index'
import { client } from '../sanity/lib/client'
// import { Tags } from './'
import { FaFacebook } from 'react-icons/fa'
import { HiOutlineMapPin } from 'react-icons/hi2'

type PropsType = {
  // setSelectedTag: Dispatch<SetStateAction<string[]>>
  // selectedTags: string[]
  selectedDay: string
  eventInfo: EventInfo
  itemId: string
}

export const EventCard: React.FC<PropsType> = ({
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
    eventDescription,
    eventMusic,
    eventUrl,
    slug,
    eventTime,
    tags,
    eventImage,
  } = eventInfo

  useEffect(() => {
    console.log('value of slug:', slug);
  }, [slug]);

  if (!slug) return null;

  const imageProps = useNextSanityImage(client, eventImage.asset) // https://www.sanity.io/plugins/next-sanity-image

  const date = new Date(selectedDay)
  const dayMonth = format(date, 'd MMM').toUpperCase()

  const price = new Intl.NumberFormat('sfb', {
    style: 'currency',
    currency: 'EUR',
  }).format(eventPrice)
  return (
 
    <div className="bottom-0 max-w-4xl relative mt-5 mx-2 object-fill  w-80">
      <Link href={`/event/${slug.current}`}>
      <Image
        src={imageProps.src}
        loader={imageProps?.loader}
        width={440}
        height={540}
        alt="alt"
        priority={true}
        className="rounded-md object-cover h-48 w-68"
      />
      
      <div className="absolute mb-0 top-0 rounded-tl-md rounded-br-md text-md bg-black py-2 px-1 md:py-3  font-bold text-white">
        {dayMonth}
      </div>

      <div className=" flex items-center gap-2">
            <div className="text-sm font-thin">{selectedDay} | {eventTime}</div>
          </div>

        <div className="h-38 w-68 rounded-b-xl ">
          <div className=" flex flex-col justify-start text-xl font-bold">
            {eventName}
            <div className=" mt-1 flex flex-row text-lg font-semibold text-gray-500">
             <HiOutlineMapPin className='content-center mt-1 text-red-500' /> {eventClub}
            </div>
          </div>


          </div>
          </Link>
          </div>
  )
}