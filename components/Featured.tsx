import Image from 'next/image'
import Link from 'next/link'
import { FaEnvelope, FaTelegramPlane } from 'react-icons/fa'
import { HiCalendar } from 'react-icons/hi2'
import { SiGooglemaps } from 'react-icons/si'

const MyLoader = () => {
  return ('')
}


const Featured = () => {
  return (
    <>


<div className="mx-auto justify-center">
      <Image
        className="h-76 w-full md:rounded-xl object-cover  md:h-auto"
        src='./YOURADHERE.PNG'
        loader={MyLoader}
        unoptimized={true}
        width={1024}
        height={800}
        alt="ad"
      />

      <div className="flexflex-col justify-between mb-10 mx-2 md:mx-0 p-2 leading-normal">
          <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-red-500 md:text-3xl">
            Your Ad/Event Here
          </h5>


          <div className="mt-5 flex flex-row">
        <FaTelegramPlane className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-red-500" />{' '}
        Feel free to contact us! </div>
        <div className="mt-5 flex flex-row">
        <FaEnvelope className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-red-500" />{' '}
        info@amstonight.com</div>
    </div>
    </div>

{/* DGTL  */}



    <div className="mx-auto mt-10 justify-center">
 
    <Link href="/event/dgtl-saturday-08-04">
      <Image
        className="h-76 w-full md:rounded-xl object-cover  md:h-auto"
        src='./dgtl.jpg'
        loader={MyLoader}
        unoptimized={true}
        width={1024}
        height={800}
        alt="dgtl"
      />


      <div className="flexflex-col  justify-between mx-2  p-2 ">
          <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-purple-500 md:text-3xl">
            DGTL 2023
          </h5>
          </div>
          </Link>
      


          <div className="flex flex-row mx-2 hover:text-blue-500">
          <Link href="https://goo.gl/maps/8ibcfxgTJnn9xAiZ9" target="_blank"><div className='flex flex-row'>
            <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-purple-500" />
            NDSM-Werf, Amsterdam
            </div>
            </Link>
          </div>

        <div className="mt-5 flex flex-row mx-2">
          <HiCalendar className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-purple-500" />{' '}
          7 - 9 April 2023
          <div className="ml-2 flex flex-col">12:00 - 23:00</div>
          
        </div>
      </div>
      

      {/* Open Air  */}



    <div className="mx-auto mt-10 mb-28 justify-center">
 
 <Link href="/event/open-air-03-06">
   <Image
     className="h-76 w-full md:rounded-xl object-cover  md:h-auto"
     src='./aoa.jpg'
     loader={MyLoader}
     unoptimized={true}
     width={1024}
     height={800}
     alt="openair"
   />


   <div className="flexflex-col justify-between mx-2  p-2 ">
       <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-purple-500 md:text-3xl">
         Open Air 2023
       </h5>
       </div>
       </Link>
   


       <div className="flex flex-row mx-2 hover:text-blue-500">
       <Link href="https://goo.gl/maps/Ubs7ZYM6EMiAgoMSA" target="_blank"><div className='flex flex-row'>
         <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-purple-500" />
         Gaasperpark, Amsterdam
         </div>
         </Link>
       </div>

     <div className="mt-5 flex flex-row mx-2">
       <HiCalendar className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-purple-500" />{' '}
       3 - 4 June 2023
       <div className="ml-2 flex flex-col">12:00 - 23:00</div>
       
     </div>
   </div>
  </>
  )
}

export default Featured
