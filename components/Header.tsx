import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

import ThemeChanger from './ThemeChanger'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div
      className="sticky top-0 z-50  w-full border-b border-gray-300 bg-white/80 py-5
      backdrop-blur dark:border-zinc-900 dark:bg-black/80 2xl:hidden"
    >
      <div className="mx-auto flex max-w-4xl flex-row items-center justify-between 2xl:hidden">
        <div className="flex justify-start text-center 2xl:hidden">
          <Link href="/">
            {/* <h1 className='text-2xl font-bold md:font-bold ml-3 md:ml-2 md:text-2xl'>AmsTonight</h1> */}
            <h1 className="ml-3 flex flex-row font-bold md:ml-2 md:text-2xl md:font-bold">
              <span className="text-lg font-extrabold">
                Amsterdam Party Agenda
              </span>
            </h1>
          </Link>
        </div>
        <ul className="flex flex-row">
          <Link href="https://www.instagram.com/amstonight" target="_blank">
            <li className="">
              <FaInstagram className="mt-1 h-5 w-5 items-center" />
            </li>
          </Link>

          <Link href="https://www.facebook.com/apaamstonight" target="_blank">
            <li className="mx-4">
              <FaFacebook className="mt-1 h-5 w-5 items-center" />
            </li>
          </Link>
          <li>
            <div className="mr-5   2xl:hidden">
              {mounted && <ThemeChanger />}
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
