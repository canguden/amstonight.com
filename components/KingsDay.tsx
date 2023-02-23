import Image from 'next/image'
import Link from 'next/link'
import { BsFillInfoSquareFill, BsPinMap } from 'react-icons/bs'
import { FaEuroSign,FaHeadphones } from 'react-icons/fa'
import { HiCalendar } from 'react-icons/hi2'
import { SiGooglemaps } from 'react-icons/si'

import KingsDayImage from '../public/kingsland.jpg'

const MyLoader = () => {
  return ('')
}

const KingsDay = () => {

  return (
    <>

    <div className="mx-auto  h-screen justify-center">
      <Image
        className="h-76 w-full md:rounded-xl object-cover  md:h-auto"
        src='./kingsland.jpg'
        unoptimized={true}
        loader={MyLoader}
        width={1024}
        height={800}
        alt="kingsland"
      />
      <div className="flexflex-col justify-between mx-2 md:mx-0 p-2 leading-normal">
          <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-orange-500 md:text-3xl">
            Kingsland Festival 2023
          </h5>

        <hr />


          <div className="flex flex-row mt-5 hover:text-blue-500">
          <Link href="https://goo.gl/maps/xomLaBipndc8doGk6" target="_blank"><div className='flex flex-row'>
            <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-orange-500" />
            RAI Amsterdam
            </div>
            </Link>
          </div>

        <div className="mt-5 flex flex-row">
          <HiCalendar className="align-center mt-0.5 mr-1 h-6 w-6 content-center items-center text-orange-500" />{' '}
          27 April
          <div className="ml-2 flex flex-col">12:00 - 23:00</div>
        </div>

        <div className="mt-5 flex flex-row text-xl">
          <BsFillInfoSquareFill className="mt-1 mr-2 h-5 w-5 content-center text-orange-500" />
        </div>

        <div className="flex max-w-3xl ml-6 flex-row">

        Kingsland Festival is an annual electronic music festival held in the Netherlands. It takes place in Amsterdam, Rotterdam, Utrecht and Eindhoven. The festival features a wide range of genres including house, techno, hardstyle, drum & bass and more. Kingsland Festival has been running since 2013 and has grown to become one of the biggest festivals in the Netherlands. The festival also hosts a variety of activities such as art installations, food stalls and other attractions.
          </div>

        <div className="mt-5 flex font-semibold flex-row">
          <FaHeadphones className="mr-2 h-5 w-5 content-center text-orange-500" />
          AFROJACK +
          ANTOON +
          BILAL WAHIB +
          BIZZEY +
          BRENNAN HEART +
          CHO +
          CKAY +
          FRENNA DELUXE +
          HEF +
          KEVIN +
          KRIS KROSS AMSTERDAM +
          LIJPE +
          LUCAS & STEVE +
          POKE +
          RONNIE FLEX +
          SIGOURNEY K +
          WAFF B2B CUARTERO
          & MANY MORE
        </div>

        <div className="mt-10 flex flex-row mb-20">
          <div className="flex flex-grow items-center  justify-start text-xl">
            <FaEuroSign className='mr-2 h-5 w-5 content-center text-orange-500' /> 60
          </div>

          <div className="flex justify-end">
            <button className="rounded-full bg-orange-500 px-6 py-2 text-white hover:bg-orange-600">
              <Link href="https://shop.paylogic.com/02353a040c624cd2a7caa3f1094b77d5" target="_blank">
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
export default KingsDay

