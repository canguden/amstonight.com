import Image from 'next/image'
import Link from 'next/link'
import { FaEnvelope, FaTelegramPlane } from 'react-icons/fa'
import { HiCalendar } from 'react-icons/hi2'
import { MdFestival } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'

const MyLoader = () => {
  return ''
}

const Featured = () => {
  return (
    <>
      <div className="align-center ml-5 mt-10 flex flex-row content-center  items-center text-2xl  font-bold md:text-3xl">
        Festivals
      </div>
      <p className="align-center ml-5 mt-5 flex flex-row content-center  items-center text-lg  font-thin md:text-lg">
        Explore Amsterdam&apos;s Festivals Calendar! Discover the best festivals
        in Amsterdam with our comprehensive calendar. From music festivals to
        cultural events, find out what&apos;s happening in the city and plan
        your perfect day out!
      </p>

      <div className="mx-auto mt-20 justify-center">
        <Image
          className="h-76 w-full object-cover md:h-auto  md:rounded-xl"
          src="./youradhere.png"
          loader={MyLoader}
          unoptimized={true}
          width={1024}
          height={800}
          alt="ad"
        />

        <div className="flexflex-col mx-2 mb-10 justify-between p-2 leading-normal md:mx-0">
          <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-purple-500 md:text-3xl">
            Your Ad/Event Here
          </h5>

          <div className="mt-5 flex flex-row">
            <FaTelegramPlane className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-purple-500" />{' '}
            Feel free to contact us!{' '}
          </div>
          <div className="mt-5 flex flex-row">
            <FaEnvelope className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-purple-500" />{' '}
            info@amstonight.com
          </div>
        </div>
      </div>

      {/* DGTL  */}

      <div className="mx-auto mt-20 justify-center">
        <Link href="/event/dgtl-saturday-08-04">
          <Image
            className="h-76 w-full object-cover md:h-auto  md:rounded-xl"
            src="./dgtl.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={1024}
            height={800}
            alt="dgtl"
          />

          <div className="flexflex-col  mx-2 justify-between  p-2 ">
            <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-purple-500 md:text-3xl">
              DGTL 2023
            </h5>
          </div>
        </Link>

        <div className="mx-2 flex flex-row hover:text-blue-500">
          <Link href="https://goo.gl/maps/8ibcfxgTJnn9xAiZ9" target="_blank">
            <div className="flex flex-row">
              <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-purple-500" />
              NDSM-Werf, Amsterdam
            </div>
          </Link>
        </div>

        <div className="mx-2 mt-5 flex flex-row">
          <HiCalendar className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-purple-500" />{' '}
          7 - 9 April 2023
          <div className="ml-2 flex flex-col">12:00 - 23:00</div>
        </div>
      </div>

      {/* pleinvrees festival */}

      <div className="mx-auto mt-20 justify-center">
        <Link href="/event/pleinvrees-27-05">
          <Image
            className="h-76 w-full object-cover md:h-auto  md:rounded-xl"
            src="./pleinvrees.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={1024}
            height={800}
            alt="pleinvrees"
          />

          <div className="flexflex-col  mx-2 justify-between  p-2 ">
            <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-purple-500 md:text-3xl">
              Pleinvrees Festival 2023
            </h5>
          </div>
        </Link>

        <div className="mx-2 flex flex-row hover:text-blue-500">
          <Link href="https://goo.gl/maps/8ibcfxgTJnn9xAiZ9" target="_blank">
            <div className="flex flex-row">
              <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-purple-500" />
              NDSM-Werf, Amsterdam
            </div>
          </Link>
        </div>

        <div className="mx-2 mt-5 flex flex-row">
          <HiCalendar className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-purple-500" />{' '}
          27 May 2023
          <div className="ml-2 flex flex-col">12:00 - 23:00</div>
        </div>
      </div>

      {/* Open Air  */}

      <div className="mx-auto mt-20 justify-center">
        <Link href="/event/open-air-03-06">
          <Image
            className="h-76 w-full object-cover md:h-auto  md:rounded-xl"
            src="./aoa.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={1024}
            height={800}
            alt="openair"
          />

          <div className="flexflex-col mx-2 justify-between  p-2 ">
            <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-purple-500 md:text-3xl">
              Open Air 2023
            </h5>
          </div>
        </Link>

        <div className="mx-2 flex flex-row hover:text-blue-500">
          <Link href="https://goo.gl/maps/Ubs7ZYM6EMiAgoMSA" target="_blank">
            <div className="flex flex-row">
              <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-purple-500" />
              Gaasperpark, Amsterdam
            </div>
          </Link>
        </div>

        <div className="mx-2 mt-5 flex flex-row">
          <HiCalendar className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-purple-500" />{' '}
          3 - 4 June 2023
          <div className="ml-2 flex flex-col">12:00 - 23:00</div>
        </div>
      </div>

      {/* Chin Chin Festival  */}

      <div className="mx-auto mt-20 mb-28 justify-center">
        <Link href="/event/chin-chin-festival">
          <Image
            className="h-76 w-full object-cover md:h-auto  md:rounded-xl"
            src="./chinchin.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={1024}
            height={800}
            alt="chinchin"
          />

          <div className="flexflex-col  mx-2 justify-between  p-2 ">
            <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-purple-500 md:text-3xl">
              Chin Chin Festival 2023
            </h5>
          </div>
        </Link>

        <div className="mx-2 flex flex-row hover:text-blue-500">
          <Link href="https://goo.gl/maps/RMZFYi8yuoPRMQNQ7" target="_blank">
            <div className="flex flex-row">
              <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-purple-500" />
              Tuinen van West, Amsterdam
            </div>
          </Link>
        </div>

        <div className="mx-2 mt-5 flex flex-row">
          <HiCalendar className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-purple-500" />{' '}
          1 July 2023
          <div className="ml-2 flex flex-col">13:00 - 23:00</div>
        </div>
      </div>
    </>
  )
}

export default Featured
