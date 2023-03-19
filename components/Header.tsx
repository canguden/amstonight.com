import Link from 'next/link'
import { useEffect, useState } from 'react'

import ThemeChanger from './ThemeChanger'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div
      className="sticky top-0 z-50 w-full border-b border-gray-300 bg-gray-100 py-5
      dark:border-gray-800 dark:bg-black 2xl:hidden"
    >
      <div className="mx-auto flex max-w-4xl flex-row items-center justify-between 2xl:hidden">
        <div className="flex justify-start text-center 2xl:hidden">
          <Link href="/">
            {/* <h1 className='text-2xl font-bold md:font-bold ml-3 md:ml-2 md:text-2xl'>AmsTonight</h1> */}
            <h1 className="ml-3 flex flex-row text-2xl font-bold md:ml-2 md:text-2xl md:font-bold">
              <span className="text-extrabold text-2xl">Amsterdam</span>
              <span className="mt-1 text-lg">Tonight</span>{' '}
              <div className="mt-2 ml-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 py-1 px-1 text-xs text-white">
                com
              </div>
            </h1>
          </Link>
        </div>

        <div className="pr-3 2xl:hidden">{mounted && <ThemeChanger />}</div>
      </div>
    </div>
  )
}

export default Header
