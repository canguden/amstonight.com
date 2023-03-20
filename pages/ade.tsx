import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import {
  FaEnvelope,
  FaEuroSign,
  FaHeadphones,
  FaTelegramPlane,
} from 'react-icons/fa'
import { HiCalendar } from 'react-icons/hi2'
import { MdMarkEmailUnread } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'

const MyLoader = () => {
  return ''
}

const Featured = () => {
  return (
    <>
      {/* Mystic Garden ADE */}
      <div className="align-center ml-5 mt-10 flex flex-row content-center  items-center text-2xl  font-bold md:text-3xl">
        <Image
          className="mr-3  flex h-12 w-12 flex-row items-center  justify-end"
          src="./logo-ade.png"
          loader={MyLoader}
          unoptimized={true}
          width={30}
          height={30}
          alt="ade"
        />
        Amsterdam Dance Event
      </div>

      <div className="mx-auto  justify-center">
        <p className="align-center ml-5 mt-5 mb-10 mr-1 flex flex-row  content-center items-center  text-lg font-thin md:text-lg">
          Experience the Best of Amsterdam Dance Event! Join us for the ultimate
          music experience at Amsterdam Dance Event! Enjoy a variety of music
          genres, from house to techno, and explore the vibrant nightlife of
          Amsterdam. With over 500 artists performing across 80 venues,
          you&apos;re sure to find something that will make your night
          unforgettable. Don&apos;t miss out on this incredible event!
        </p>

        <Link href="/event/mystic-garden-21-10">
          <Image
            className="h-76 w-full object-cover md:h-auto  md:rounded-xl"
            src="./mysticgardenfestival.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={1024}
            height={800}
            alt="pleinvrees"
          />

          <div className="mx-2 flex  flex-col justify-between  p-2 ">
            <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-yellow-500 md:text-3xl">
              Mystic Garden ADE 2023
            </h5>
          </div>
        </Link>

        <div className="mx-2 flex flex-row hover:text-blue-500">
          <Link href="https://goo.gl/maps/jriRWrGn7n9V1iWH6" target="_blank">
            <div className="flex flex-row">
              <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-yellow-500" />
              Havenpark, Amsterdam
            </div>
          </Link>
        </div>

        <div className="mx-2 mt-5 flex flex-row">
          <HiCalendar className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-yellow-500" />{' '}
          21 October 2023
          <div className="ml-2 flex flex-col">14:00 - 02:00</div>
        </div>
      </div>

      {/* Open Air  */}
      <div>
        <Head>
          <title>Amsterdam Dance Event</title>
        </Head>
      </div>

      <div className="mx-auto mt-20 mb-20 justify-center">
        <Image
          className="h-76 w-full object-cover md:h-auto  md:rounded-xl"
          src="./yourade.png"
          loader={MyLoader}
          unoptimized={true}
          width={1024}
          height={800}
          alt="ad"
        />

        <div className="flexflex-col mx-2 mb-10 justify-between p-2 leading-normal md:mx-0">
          <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-yellow-500 md:text-3xl">
            Your Ad/Event Here
          </h5>

          <div className="mt-5 flex flex-row">
            <FaTelegramPlane className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-yellow-500" />{' '}
            Feel free to contact us!{' '}
          </div>
          <div className="mt-5 flex flex-row">
            <FaEnvelope className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-yellow-500" />{' '}
            info@amstonight.com
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured
