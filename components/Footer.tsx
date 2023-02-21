import Link from 'next/link'
import {
  FaCompass,
  FaUser,
  FaHome,
  FaPinterest,
  FaStar,
}
from 'react-icons/fa'
import { MdFestival, MdOutlineRestaurant } from 'react-icons/md'




const Footer = () => {


  return (
    <div className='2xl:hidden py-5 sticky z-50 bottom-0  border-t border-gray-300 dark:border-gray-800
      bg-gray-100 dark:bg-black '>


<div className="flex flex-row justify-evenly items-center mx-auto max-w-4xl">
  <Link href="/">
    <FaHome className='h-6 w-6'/>
  </Link>
  
  <Link href="./explore">
    <FaCompass className='h-6 w-6'/>
  </Link>

  <Link href="#">
    <MdFestival className='h-6 w-6'/>
  </Link>

  <Link href="#">
    <FaStar className='h-6 w-6'/>
  </Link>
  </div>



</div>
  )
}

export default Footer