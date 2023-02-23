import Link from 'next/link'
import { useEffect,useState } from 'react'

import ThemeChanger from './ThemeChanger'



const Header = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])


  return (
    <div className='2xl:hidden sticky z-50 top-0 w-full border-b border-gray-300 dark:border-gray-800
      bg-gray-100 dark:bg-black py-5'>

        <div className="2xl:hidden flex flex-row justify-between items-center mx-auto max-w-4xl">
      
      <div className="2xl:hidden flex justify-start text-center">
          <Link href='/'>
            {/* <h1 className='text-2xl font-bold md:font-bold ml-3 md:ml-2 md:text-2xl'>AmsTonight</h1> */}
            <h1 className="text-2xl flex flex-row font-bold md:font-bold ml-3 md:ml-2 md:text-2xl">
          <span className='text-extrabold text-2xl'>AMS</span><span className='text-lg mt-1'>Tonight</span> <div className="w-6 h-6 mt-2 ml-1 rounded-full py-1 px-1 bg-red-500 text-white flex items-center text-xs justify-center">com</div>
        </h1>
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
