import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCrown } from 'react-icons/fa'
import { HiCalendar } from 'react-icons/hi2'
import { SiGooglemaps } from 'react-icons/si'

const MyLoader = () => {
  return ''
}

const kingsday = () => {
  return (
    <>
      <div>
        <Head>
          <title>Kingsday - Koningsdag - Events and Festivals </title>
          <meta name="description" content="Check out the events on Kingsday" />
        </Head>
      </div>
      <div className="align-center  mt-10 flex flex-row content-center  items-center text-2xl  font-bold md:text-3xl">
        <FaCrown className="mr-3  ml-2 h-10 w-10 justify-end text-orange-500" />
        King&apos;s Day - 27th of April
      </div>
      <p className="align-center ml-5 mt-5 mb-10 mr-1 flex flex-row content-center  items-center text-lg  font-thin md:text-lg">
        Celebrate Kingsday in the Netherlands: Festivals and Events for All
        Ages! Experience the vibrant culture of the Netherlands this Kingsday
        with a variety of festivals and events for all ages. From traditional
        Dutch music and dance to carnival rides and food stalls, there&apos;s
        something for everyone to enjoy. Celebrate the Dutch monarchy with a day
        of fun, festivities, and memories that will last a lifetime!
      </p>

      <div className="mx-auto mb-28 justify-center">
        <Link href="/event/kingsland-27-04">
          <Image
            className="h-76 w-full object-cover md:h-auto  md:rounded-xl"
            src="./kingsland.jpg"
            unoptimized={true}
            loader={MyLoader}
            width={1024}
            height={800}
            alt="kingsland"
          />
        </Link>
        <div className="flexflex-col mx-2 justify-between p-2 leading-normal md:mx-0">
          <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-orange-500 md:text-3xl">
            Kingsland Festival 2023
          </h5>

          <div className="mt-5 flex flex-row hover:text-blue-500">
            <Link href="https://goo.gl/maps/xomLaBipndc8doGk6" target="_blank">
              <div className="flex flex-row">
                <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-orange-500" />
                RAI Amsterdam
              </div>
            </Link>
          </div>

          <div className="mt-5 flex flex-row">
            <HiCalendar className="align-center mt-0.5 mr-1 h-6 w-6 content-center items-center text-orange-500" />{' '}
            27 April
            <div className="ml-2 mb-24 flex flex-col">12:00 - 23:00</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default kingsday
