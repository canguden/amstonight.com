import Link from 'next/link'
import {
  FaCompass,
  FaCrown,
  FaHome,
  FaPinterest,
  FaStar,
  FaUser,
}
from 'react-icons/fa'
import { MdFestival, MdOutlineRestaurant } from 'react-icons/md'




const Footer = () => {


  return (
    <div className='2xl:hidden py-5 sticky z-50 bottom-0  border-t border-gray-300 dark:border-gray-800
      bg-white dark:bg-black '>


<div className="flex flex-row justify-between pr-2 ml-5 mr-5 items-center mx-auto max-w-4xl">
  <Link href="/">
    <FaHome className='h-6 w-6'/>
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
  </div>



</div>
  )
}

export default Footer