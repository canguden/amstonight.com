import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import { FaEnvelope, FaEuroSign,FaHeadphones, FaTelegramPlane } from 'react-icons/fa'
import { HiCalendar } from 'react-icons/hi2'
import { MdMarkEmailUnread } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'

const MyLoader = () => {
  return ('')
}


const Featured = () => {
  return (
    <>

{/* Open Air  */}
        <div>
    <Head>
      <title>Amsterdam Dance Event</title>
    </Head>
  </div>

  <div className="mx-auto justify-center">
      <Image
        className="h-76 w-full md:rounded-xl object-cover  md:h-auto"
        src='./yourade.PNG'
        loader={MyLoader}
        unoptimized={true}
        width={1024}
        height={800}
        alt="ad"
      />

      <div className="flexflex-col justify-between mb-10 mx-2 md:mx-0 p-2 leading-normal">
          <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-yellow-500 md:text-3xl">
            Your Ad/Event Here
          </h5>


          <div className="mt-5 flex flex-row">
        <FaTelegramPlane className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-yellow-500" />{' '}
        Feel free to contact us! </div>
        <div className="mt-5 flex flex-row">
        <FaEnvelope className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-yellow-500" />{' '}
        info@amstonight.com</div>
    </div>
    </div>


  </>
  )
}

export default Featured
