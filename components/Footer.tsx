import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiFillHome, AiTwotoneCrown } from 'react-icons/ai'
import {
  FaCalendarAlt,
  FaCompass,
  FaCrown,
  FaHome,
  FaMicroblog,
} from 'react-icons/fa'
import { MdFestival } from 'react-icons/md'

const MyLoader = () => {
  return ''
}

const Footer = () => {
  const router = useRouter()
  return (
    <div
      className="bottom-0 z-50 mt-10 border-t border-gray-300 bg-white py-6 dark:border-gray-800
      dark:bg-black 2xl:hidden "
    >
      <div className="mx-auto flex max-w-4xl flex-row  items-center justify-between px-4 text-center  dark:text-white ">
        <Link
          href="/"
          className={`${
            router.pathname === '/' ? 'ml-3 text-red-500' : 'ml-3'
          } `}
        >
          <AiFillHome className=" h-8 w-8" />
        </Link>

        {/* <Link href="./explore">
    <FaCompass className='h-6 w-6'/>
  </Link> */}
        <Link
          href="./festivals"
          className={`${
            router.pathname === '/festivals' ? ' text-red-500' : ' '
          } `}
        >
          <MdFestival className="h-8 w-8" />
        </Link>

        {/* <Link
          href="./news"
          className={`${
            router.pathname === '/kingsday' ? ' text-red-500' : 'ml-3'
          } `}
        >
          <FaMicroblog className="h-5 w-5" />
        </Link> */}

        <Link
          href="./kingsday"
          className={`${
            router.pathname === '/kingsday' ? ' text-orange-500' : 'ml-3'
          } `}
        >
          <AiTwotoneCrown className="h-8 w-8" />
        </Link>

        <Link href="./ade">
          <Image
            className=""
            src="./logo-ade.png"
            loader={MyLoader}
            unoptimized={true}
            width={35}
            height={35}
            alt="ade"
          />
        </Link>
      </div>
    </div>
  )
}

export default Footer
