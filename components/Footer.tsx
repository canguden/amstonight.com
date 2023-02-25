import Image from 'next/image'
import Link from 'next/link'
import {
  FaCompass,
  FaCrown,
  FaHome,
}
from 'react-icons/fa'
import { MdFestival } from 'react-icons/md'


const MyLoader = () => {
  return ('')
}

const Footer = () => {


  return (
    <div className='2xl:hidden py-5 z-50 bottom-0  border-t border-gray-300 dark:border-gray-800
      bg-white dark:bg-black '>


<div className="flex flex-row  justify-between md:justify-evenly text-center max-w-4xl   items-center  mx-auto ">
  <Link href="/">
    <FaHome className='h-6 w-6 ml-3'/>
  </Link>
  
  <Link href="./explore">
    <FaCompass className='h-6 w-6'/>
  </Link>

  <Link href="./festivals">
    <MdFestival className='h-6 w-6'/>
  </Link>

  <Link href="./kingsday">
    <FaCrown className='h-6 w-6 text-orange-500'/>
  </Link>

  <Link href="./ade">
  <Image
        className='mr-3'
        src='./logo-ade.png'
        loader={MyLoader}
        unoptimized={true}
        width={30}
        height={30}
        alt="ade"
      />
        </Link>
  </div>



</div>
  )
}

export default Footer