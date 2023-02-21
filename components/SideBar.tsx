import Link from 'next/link'
import ThemeChanger from './ThemeChanger'
import { useState, useEffect } from 'react'
import { FaCompass, FaHome, FaStar } from 'react-icons/fa'
import { MdFestival, MdOutlineRestaurant } from 'react-icons/md'
import { AiFillHome, AiFillInstagram } from 'react-icons/ai'

const SideBar = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="z-50 hidden xl:fixed xl:top-0  xl:h-full xl:min-h-screen xl:border-r xl:border-gray-300 xl:dark:border-gray-800 2xl:flex ">
      <div className="w-96 bg-gray-200 dark:bg-black ">
        <h1 className="ml-8  mt-10 px-2 text-lg font-bold md:text-2xl md:font-bold">
          AmsTonight
        </h1>
        <div className="ml-8 flex flex-col ">
          <div className="">
            <Link
              href="/"
              className="text-md mr-3 mt-10 flex flex-row content-center items-center rounded-full py-2 px-2 font-semibold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900"
            >
              <AiFillHome className="mr-3 h-7 w-7 justify-end" />
              Home
            </Link>
          </div>

          <Link
            href="/explore"
            className="text-md mr-3 mt-3 flex flex-row content-center items-center rounded-full py-2 px-2 font-semibold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900"
          >
            <FaCompass className="mr-3 h-7 w-7 justify-end" />
            Explore
          </Link>
          <Link
            href="/festivals"
            className="text-md mr-3 mt-5 flex flex-row content-center items-center rounded-full py-2 px-2 font-semibold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900"
          >
            <MdFestival className="mr-3 h-7 w-7 justify-end" />
            Festivals
          </Link>
          <Link
            href="/featured"
            className="text-md mr-3 mt-5 flex flex-row content-center items-center rounded-full py-2 px-2 font-semibold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900"
          >
            <FaStar className="mr-3 h-7 w-7 justify-end" />
            Featured
          </Link>


<div className='mt-[450px]'>
          <Link
            href="https://www.instagram.com/amstonight"
            target="_blank"
            className="text-md mr-3 mt-5 flex flex-row content-center items-center rounded-full py-2 px-2 font-semibold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900"
          >
            <AiFillInstagram className="mr-3 h-7 w-7 justify-end" />
            @amstonight
          </Link>

          <div className="mr-3 mt-5 flex flex-row content-center items-center py-2 px-2 font-semibold text-black dark:text-white">
            <span className="mr-3 h-7 w-7">{mounted && <ThemeChanger />} </span>

            <div className="">Theme Mode</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
