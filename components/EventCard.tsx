import { format } from 'date-fns'
import { EventInfo } from 'models/EventInfo'
import Image from 'next/image'
import Link from 'next/link'
import { useNextSanityImage } from 'next-sanity-image'
import { useEffect } from 'react'
import { FaMusic } from "react-icons/fa";
// import { Tags } from './'
import { FaFacebook } from 'react-icons/fa'
import { HiOutlineMapPin } from 'react-icons/hi2'

import { client } from '../sanity/lib/client'

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

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
      
      <div className="absolute mb-0 top-0 rounded-tl-md rounded-br-md text-md bg-red-500 py-2 px-1 md:py-3  font-bold text-white">
        {dayMonth}
      </div>

      <div className=" flex items-center mt-2 gap-2">
            <div className="text-md font-thin text-gray-600 dark:text-gray-400">{selectedDay} | {eventTime}</div>
          </div>

        <div className="h-38 w-68 rounded-b-xl ">
          <div className=" flex flex-col justify-start text-xl font-bold">
            {eventName}
            <div className=" mt-1 flex flex-row text-lg font-semibold text-gray-600 dark:text-gray-400">
             <HiOutlineMapPin className='content-center mt-1 mr-1  text-red-500' /> {eventClub}
            </div>
          </div>

          <div className=" mt-1 flex flex-row text-sm font-semibold text-gray-600 dark:text-gray-400">
             <FaMusic className='content-center mt-1 mr-2  text-red-500' /> {eventMusic}
            </div>


          </div>
          </Link>
          </div>

          
  )
}