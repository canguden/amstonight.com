import Image from 'next/image'
import Link from 'next/link'

const Ad = () => {



  return (

    <div className="hidden  2xl:fixed 2xl:top-10 2xl:flex 2xl:flex-row 2xl:right-0">
      
      <div className="w-80 ">
      <Link
    href="https://www.sirdamvodka.com" target='_blank'
    className="text-xl absolute mr-3 flex flex-row content-center items-center py-2 px-2 font-semibold "
  >
      <Image src='sirdamad.png'  className='h-70 w-70 rounded-md'  alt='sirdam' />
        </Link>
      </div>
    </div>

  )
}

export default Ad
