import Image from 'next/image'
import Link from 'next/link'

const Advert = () => {

  return (
    <div className="hidden  2xl:absolute 2xl:flex 2xl:flex-row 2xl:right-0 2xl:mr-28">
      <div className="w-96 bg-gray-200 dark:bg-black ">
      <img src='sirdamad.jpg'className='h-70 w-50'  alt='sirdam' />
        <h1 className="ml-8  mt-10 px-2 text-lg font-bold md:text-2xl md:font-bold">
          Sir Dam
        </h1>     
        <div className="ml-8 flex flex-col ">
          <div className="">
            <Link
              href="/"
              className="text-md relative mr-3 mt-10 flex flex-row content-center items-center rounded-full py-2 px-2 font-semibold text-black hover:bg-gray-300 dark:text-white dark:hover:bg-gray-900"
            >
              Amsterdam in a Bottle
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advert
