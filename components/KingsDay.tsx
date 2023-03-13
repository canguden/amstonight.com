import Image from 'next/image'
import Link from 'next/link'
import { FaCrown, FaEnvelope, FaTelegramPlane } from 'react-icons/fa'
import { HiCalendar } from 'react-icons/hi2'
import { SiGooglemaps } from 'react-icons/si'


const MyLoader = () => {
  return ('')
}

const KingsDay = () => {

  return (
    <>

<div className="align-center ml-5 mt-10 flex font-bold flex-row  content-center items-center  text-2xl md:text-3xl">
<FaCrown className="mr-3 h-10 w-10 justify-end text-orange-500" />
      King&apos;s Day - 27th of April
      </div>

<div className="mx-auto mt-20 justify-center">
    <Image
      className="w-full h-58  md:rounded-xl object-cover  md:h-auto"
      src='./youradk.png'
      loader={MyLoader}
      unoptimized={true}
      width={540}
      height={240}
      alt="ad"
    />

    <div className="flexflex-col justify-between mb-10 mx-2 md:mx-0 p-2 leading-normal">
        <h5 className="mb-2 flex flex-row text-md font-bold tracking-tight text-orange-500 md:text-3xl">
          Your Ad/Event Here
        </h5>


      <div className="mt-5 flex flex-row">
        <FaTelegramPlane className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-orange-500" />{' '}
        Feel free to contact us! </div>
        <div className="mt-5 flex flex-row">
        <FaEnvelope className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-orange-500" />{' '}
        info@amstonight.com</div>
        
     
  </div>
  </div>

    <div className="mx-auto mb-28 justify-center">
    <Link href="/event/kingsland-27-04">
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
          <div className="ml-2 flex mb-24 flex-col">12:00 - 23:00</div>
        </div>
      

        </div>
        </Link>
      </div>
    </>

  )
}
export default KingsDay

