import Link from 'next/link'
import ThemeChanger from './ThemeChanger'
import { useState, useEffect } from 'react'


const Header = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])


  return (
    <div className='2xl:hidden sticky z-50 top-0 w-full border-b border-gray-300 dark:border-gray-800
      bg-gray-100 dark:bg-black py-5'>

        <div className="2xl:hidden flex flex-row justify-between items-center mx-auto max-w-4xl">
      
      <div className="2xl:hidden flex justify-start text-center">
          <Link href='/'>
            <h1 className='text-lg font-bold md:font-bold ml-3 md:ml-2 md:text-2xl'>AmsTonight</h1>
            </Link>
          </div>

 


          <div className="2xl:hidden pr-3">
            {mounted && <ThemeChanger />}
          </div>
          </div>
        </div>
  )
}

export default Header
