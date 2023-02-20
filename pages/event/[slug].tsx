import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { client, getEventsBySlug } from '../../sanity/lib/client';
import { EventInfo } from '../../models/EventInfo';
import { useEffect, useState } from 'react';
import { useNextSanityImage } from 'next-sanity-image';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { FaMapMarked, FaMusic, FaRegClock } from 'react-icons/fa';

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

      <div
        className="mx-auto h-screen justify-center"
      >
        <Image
          className="h-96 w-full object-cover md:h-auto  rounded-xl"
          src={image?.src}
          loader={image?.loader}
          width={1024}
          height={800}
          alt=""
        />


        <div className="flex flex-col justify-between p-2 leading-normal">
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {eventState?.eventName} 
          </h5>

          <hr/>


          <div className="flex flex-row mt-5 text-2xl">
          <HiOutlineMapPin className='content-center mt-1' />  {eventState?.eventClub}
        </div>
   
        <div className="flex mt-5 text-xl flex-row">
        <FaMapMarked className='content-center mt-1 mr-2' />{eventState?.eventAddress}
        </div>
 
        <div className="flex mt-5 text-xl flex-row">
        <FaRegClock className='content-center mt-1 mr-2' />{eventState?.eventTime}
        </div>

        <div className="flex mt-5 text-xl flex-row">
        <FaMusic className='content-center mt-1 mr-2' />{eventState?.eventMusic}
        </div>

        <div className="flex text-xl font-bold justify-end text-md items-center">
<div className="flex flex-grow">
        € {eventState?.eventPrice}
        </div>
          <button className='w-50 mt-5 text-white dark:text-white bg-blue-500 dark:bg-blue-500 rounded-lg px-2 py-2'>
          <Link href={eventState?.eventUrl} target="_blank">
              Get Tickets
            </Link>
            </button>
          </div>


        </div>
      </div>
    </>
  )
}
