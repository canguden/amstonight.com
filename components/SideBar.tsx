import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AiFillHome, AiFillInstagram } from 'react-icons/ai'
import { FaCrown, FaFacebook } from 'react-icons/fa'
import { MdFestival } from 'react-icons/md'

import SideThemeChanger from './SideThemeChanger'

const MyLoader = () => {
  return ''
}

const SideBar = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const router = useRouter()

  return (
    <div className="z-50 hidden xl:fixed xl:top-0  xl:h-full xl:min-h-screen xl:border-r xl:border-gray-300 xl:dark:border-zinc-900 2xl:flex ">
      <div className="w-96 bg-white dark:bg-black ">
        <Link href="/">
          <h1 className="fex-row ml-8 mt-10 flex px-2 font-bold   md:font-bold">
            <span className="text-2xl font-extrabold">
              Amsterdam Party Agenda
            </span>
          </h1>
        </Link>
        <div className="ml-8 flex flex-col ">
          <div className="">
            <Link
              href="/"
              className={`${
                router.pathname === '/'
                  ? 'mr-3  mt-10 flex flex-row content-center items-center rounded-full py-2 px-2 text-lg font-extrabold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900'
                  : 'text-md  font-regular mr-3 mt-10 flex flex-row content-center items-center rounded-full py-2 px-2 text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900'
              } `}
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
            className={`${
              router.pathname === '/festivals'
                ? 'mr-3 mt-5 flex flex-row content-center items-center rounded-full py-2 px-2 text-lg font-extrabold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900'
                : 'text-md font-regular mr-3 mt-5 flex flex-row content-center items-center rounded-full py-2 px-2 text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900'
            } `}
          >
            <MdFestival className="mr-3 h-7 w-7 justify-end" />
            Festivals
          </Link>

          <Link
            href="/kingsday"
            className={`${
              router.pathname === '/kingsday'
                ? 'mr-3 mt-5 flex flex-row content-center items-center rounded-full py-2 px-2 text-lg font-extrabold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900'
                : 'text-md font-regular mr-3 mt-5 flex flex-row content-center items-center rounded-full py-2 px-2 text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900'
            } `}
          >
            <FaCrown className="mr-3 h-7 w-7 justify-end text-orange-500" />
            King&apos;s Day
          </Link>

          <Link
            href="./ade"
            className={`${
              router.pathname === '/ade'
                ? 'mr-3 mt-3 flex flex-row content-center items-center rounded-full py-2 px-2 text-lg font-extrabold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900'
                : 'text-md font-regular mr-3 mt-3 flex flex-row content-center items-center rounded-full py-2 px-2 text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900'
            } `}
          >
            <Image
              className="mr-3  flex h-7 w-7 flex-row items-center  justify-end"
              src="./logo-ade.png"
              loader={MyLoader}
              unoptimized={true}
              width={30}
              height={30}
              alt="ade"
            />
            Amsterdam Dance Event
          </Link>

          <div className="mt-[350px]">
            <Link
              href="https://www.instagram.com/amstonight"
              target="_blank"
              className="text-md mr-3 mt-5 flex flex-row content-center items-center rounded-full py-2 px-2 font-semibold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900"
            >
              <AiFillInstagram className="mr-3 h-7 w-7 justify-end" />
              @amstonight
            </Link>

            <Link
              href="https://www.facebook.com/apaamstonight"
              target="_blank"
              className="text-md mr-3 mt-1 flex flex-row content-center items-center rounded-full py-2 px-2 font-semibold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-zinc-900"
            >
              <FaFacebook className="mr-3 h-7 w-7 justify-end rounded-lg" />
              @amstonight
            </Link>

            <div className="mr-3 mt-2 flex flex-row content-center items-center py-2 px-2 font-semibold text-black  dark:text-white">
              <span className="mr-3 h-7 w-7">
                {mounted && <SideThemeChanger />}{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
