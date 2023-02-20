import Image from 'next/image'
import Link from 'next/link'

const Ad = () => {

  return (

    <div className="hidden  2xl:fixed 2xl:top-10 2xl:flex 2xl:flex-row 2xl:right-0  2xl:mr-1">
      
      <div className="w-96  ">
      <Link
    href="https://www.sirdamvodka.com" target='_blank'
    className="text-xl absolute mr-3 flex flex-row content-center items-center py-2 px-2 font-semibold "
  >
      <img src='sirdamad.png' className='h-70 w-50 rounded-md'  alt='sirdam' />
        <div className="absolute mt-80 ml-2 text-white flex flex-col ">
              Amsterdam in a Bottle
          </div>
        </Link>
      </div>
    </div>

  )
}

export default Ad
