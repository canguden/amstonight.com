import Image from 'next/image'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import { AiFillHome, AiFillInstagram } from 'react-icons/ai'
import { FaCompass, FaCrown } from 'react-icons/fa'
import { MdFestival } from 'react-icons/md'

import SideThemeChanger from './SideThemeChanger'

const MyLoader = () => {
  return ('')
}

const SideBar = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="z-50 hidden xl:fixed xl:top-0  xl:h-full xl:min-h-screen xl:border-r xl:border-gray-300 xl:dark:border-gray-800 2xl:flex ">
      <div className="w-96 bg-gray-100 dark:bg-black ">
      <Link
              href="/"
            >
        <h1 className="ml-8 mt-10 px-2 font-bold flex fex-row   md:font-bold">
          <span className='text-extrabold text-3xl'>AMS</span><span className='text-lg mt-2'>Tonight</span> <div className="w-6 h-6 mt-2 ml-1 rounded-full py-1 px-1 bg-red-500 text-white flex items-center text-xs justify-center">com</div>
        </h1>
        </Link>
        <div className="ml-8 flex flex-col ">
          <div className="">
            <Link
              href="/"
              className="text-md  mr-3 mt-10 flex flex-row content-center items-center rounded-full py-2 px-2 font-semibold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900"
            >
              <AiFillHome className="mr-3 h-7 w-7 justify-end" />
              Home
            </Link>
          </div>

          {/* <Link
            href="/explore"
            className="text-md mr-3 mt-3 flex flex-row content-center items-center rounded-full py-2 px-2 font-semibold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900"
          >
            <FaCompass className="mr-3 h-7 w-7 justify-end" />
            Explore
          </Link> */}
          <Link
            href="/festivals"
            className="text-md mr-3 mt-5 flex flex-row content-center items-center rounded-full py-2 px-2 font-semibold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900"
          >
            <MdFestival className="mr-3 h-7 w-7 justify-end text-purple-500" />
            Festivals
          </Link>

          <Link
            href="/kingsday"
            className="text-md mr-3 mt-5 flex flex-row content-center items-center rounded-full py-2 px-2 font-semibold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900"
          >
            <FaCrown className="mr-3 h-7 w-7 justify-end text-orange-500" />
            Kings Day
          </Link>

          <Link 
          href="./ade"
          className="text-md mr-3 mt-3 flex flex-row content-center items-center rounded-full py-2 px-2 font-semibold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900"
          >
  <Image
        className='mr-3  h-7 w-7 flex flex-row items-center  justify-end'
        src='./logo-ade.png'
        loader={MyLoader}
        unoptimized={true}
        width={30}
        height={30}
        alt="ade"
      />
      <h1 className='text-md font-semibold'>ADE</h1>
        </Link>



<div className='mt-[350px]'>
          <Link
            href="https://www.instagram.com/amstonight"
            target="_blank"
            className="text-md mr-3 mt-5 flex flex-row content-center items-center rounded-full py-2 px-2 font-semibold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900"
          >
            <AiFillInstagram className="mr-3 h-7 w-7 justify-end" />
            @amstonight
          </Link>

          <div className="mr-3 mt-2 flex flex-row content-center items-center py-2 px-2 font-semibold text-black  dark:text-white">
            <span className="mr-3 h-7 w-7">{mounted && <SideThemeChanger />} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
