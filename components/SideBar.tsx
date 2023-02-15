import Link from 'next/link'
import ThemeChanger from './ThemeChanger'
import { useState, useEffect } from 'react'
import { FaCompass, FaHome } from 'react-icons/fa'
import { MdFestival, MdOutlineRestaurant } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'


const SideBar = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])


return (
<div className="hidden xl:fixed xl:top-0  xl:min-h-screen xl:border-r xl:border-gray-300 xl:dark:border-gray-800 xl:h-full 2xl:flex ">

<div className='bg-gray-200 dark:bg-black w-72 '>
      <h1 className='text-lg  font-bold md:font-bold ml-8 px-2 mt-10 md:text-2xl'>AmsTonight</h1>
      <div className="flex flex-col ml-8 ">

<div className=''>
      <Link href='/'  className="hover:bg-gray-300 dark:hover:bg-gray-900 rounded-full py-2 px-2 mr-3 items-center text-md flex mt-10 flex-row content-center text-black dark:text-white font-semibold">
            <AiFillHome className="h-7 w-7 mr-3 justify-end" />
            Home
</Link>
</div>



      <Link href='./explore'  className="hover:bg-gray-300 dark:hover:bg-gray-900 rounded-full py-2 px-2 mr-3 items-center text-md flex mt-3 flex-row content-center text-black dark:text-white font-semibold"><FaCompass className="h-7 w-7 mr-3 justify-end" />

Explore

</Link>
<Link href='./festivals'  className="hover:bg-gray-300 dark:hover:bg-gray-900 rounded-full py-2 px-2 mr-3 items-center text-md flex mt-5 flex-row content-center text-black dark:text-white font-semibold"><MdFestival className="h-7 w-7 mr-3 justify-end" />

Festivals

</Link>
<Link href='./restaurants'  className="hover:bg-gray-300 dark:hover:bg-gray-900 rounded-full py-2 px-2 mr-3 items-center text-md flex mt-5 flex-row content-center text-black dark:text-white font-semibold"><MdOutlineRestaurant className="h-7 w-7 mr-3 justify-end" />

Restaurants

</Link>

<div className="py-2 px-2 mr-3 items-center flex mt-5 flex-row content-center text-black dark:text-white font-semibold"><span className="h-7 w-7 mr-3 justify-end">{mounted && <ThemeChanger className='h-7 w-7 mr-3'/>}  </span>


</div>




  

  </div>

  </div>



</div>


)
}

export default SideBar