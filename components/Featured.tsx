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
        Festivals of the Month
      </div>
      <p className="align-center ml-5 mt-5 flex flex-row content-center  items-center text-lg  font-thin md:text-lg">
        Explore Amsterdam&apos;s Festivals Calendar! Discover the best festivals
        in Amsterdam with our comprehensive calendar. From music festivals to
        cultural events, find out what&apos;s happening in the city and plan
        your perfect day out!
      </p>

      <div className="mx-2 mt-20 max-w-4xl justify-center">
        <Image
          className="h-76 rounded-xl object-cover  md:h-auto"
          src="./youradhere.png"
          loader={MyLoader}
          unoptimized={true}
          width={1024}
          height={800}
          alt="ad"
        />

        <div className="flexflex-col mx-2 mb-10 justify-between p-2 leading-normal md:mx-0">
          <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight  md:text-3xl">
            Your Ad/Event Here
          </h5>

          <div className="mt-5 flex flex-row">
            <FaTelegramPlane className="align-center mb-1 mr-2 h-6 w-6 content-center items-center " />{' '}
            Feel free to contact us!{' '}
          </div>
          <div className="mt-5 flex flex-row">
            <FaEnvelope className="align-center mb-1 mr-2 h-6 w-6 content-center items-center " />{' '}
            info@amstonight.com
          </div>
        </div>
      </div>

      <div className="mx-2 mt-20 flex flex-row text-red-500">
        <div className="ml-2 text-xl font-bold">April</div>
        <div className="ml-2 text-xl">2023</div>
      </div>

      <div className="mx-2 mt-5 justify-center">
        <Link href="/event/awakenings-amsterdam-07-04">
          <Image
            className="h-76 w-full rounded-xl object-cover  md:h-auto"
            src="./awakenings.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={1024}
            height={800}
            alt="awakenings"
          />

          <div className="mx-0 flex  flex-col justify-between p-2  lg:mx-2 ">
            <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight  md:text-3xl">
              Awakenings
            </h5>
          </div>
        </Link>

        <div className="mx-2 flex flex-row hover:text-blue-500">
          <Link href="https://goo.gl/maps/jMbg9ETp5Gu3NPvR7" target="_blank">
            <div className="flex flex-row">
              <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-red-500 " />
              Gashouder, Amsterdam
            </div>
          </Link>
        </div>

        <div className="mx-2 mt-5 flex flex-row">
          <HiCalendar className="align-center mb-1 mr-2 h-6 w-6 content-center items-center " />{' '}
          7 April 2023
          <div className="ml-2 flex flex-col">22:00 - 07:00</div>
        </div>
      </div>

      <div className="mx-2 mt-20 justify-center">
        <Link href="/event/overbruggen-26-04">
          <Image
            className="h-76 w-full rounded-xl object-cover  md:h-auto"
            src="./overbruggen.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={1024}
            height={800}
            alt="Overbruggen"
          />

          <div className="mx-0 flex  flex-col justify-between p-2  lg:mx-2 ">
            <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight  md:text-3xl">
              Overbruggen 2023
            </h5>
          </div>
        </Link>

        <div className="mx-2 flex flex-row hover:text-blue-500">
          <Link href="https://goo.gl/maps/8Q1CPdyEG7pfZrD96" target="_blank">
            <div className="flex flex-row">
              <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-red-500" />
              Levenslang, Amsterdam
            </div>
          </Link>
        </div>

        <div className="mx-2 mt-5 flex flex-row">
          <HiCalendar className="align-center mb-1 mr-2 h-6 w-6 content-center items-center " />{' '}
          26 April 2023
          <div className="ml-2 flex flex-col">22:00 - 05:00</div>
        </div>
      </div>

      <div className="mx-2 mt-20 flex flex-row text-red-500">
        <div className="ml-2 text-xl font-bold">May</div>
        <div className="ml-2 text-xl">2023</div>
      </div>

      {/* pleinvrees festival */}

      <div className="mx-2 mt-5 justify-center">
        <Link href="/event/pleinvrees-27-05">
          <Image
            className="h-76 w-full rounded-xl object-cover  md:h-auto"
            src="./pleinvrees.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={1024}
            height={800}
            alt="pleinvrees"
          />

          <div className="flexflex-col  justify-between  p-2 ">
            <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight  md:text-3xl">
              Pleinvrees Festival 2023
            </h5>
          </div>
        </Link>

        <div className="mx-2 flex flex-row hover:text-blue-500">
          <Link href="https://goo.gl/maps/8ibcfxgTJnn9xAiZ9" target="_blank">
            <div className="flex flex-row">
              <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-red-500 " />
              NDSM-Werf, Amsterdam
            </div>
          </Link>
        </div>

        <div className="mx-2 mt-5 flex flex-row">
          <HiCalendar className="align-center mb-1 mr-2 h-6 w-6 content-center items-center " />{' '}
          27 May 2023
          <div className="ml-2 flex flex-col">12:00 - 23:00</div>
        </div>
      </div>

      <div className="mx-2 mt-20 flex flex-row text-red-500">
        <div className="ml-2 text-xl font-bold">June</div>
        <div className="ml-2 text-xl">2023</div>
      </div>

      {/* Open Air  */}

      <div className="mx-2 mt-5 justify-center">
        <Link href="/event/open-air-03-06">
          <Image
            className="h-76 w-full rounded-xl object-cover  md:h-auto"
            src="./aoa.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={1024}
            height={800}
            alt="openair"
          />

          <div className="flex flex-col justify-between  p-2 ">
            <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight  md:text-3xl">
              Open Air 2023
            </h5>
          </div>
        </Link>

        <div className="mx-2 flex flex-row hover:text-blue-500">
          <Link href="https://goo.gl/maps/Ubs7ZYM6EMiAgoMSA" target="_blank">
            <div className="flex flex-row">
              <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-red-500" />
              Gaasperpark, Amsterdam
            </div>
          </Link>
        </div>

        <div className="mx-2 mt-5 flex flex-row">
          <HiCalendar className="align-center mb-1 mr-2 h-6 w-6 content-center items-center " />{' '}
          3 - 4 June 2023
          <div className="ml-2 flex flex-col">12:00 - 23:00</div>
        </div>
      </div>

      <div className="mx-2 mt-20 flex flex-row text-red-500">
        <div className="ml-2 text-xl font-bold">July</div>
        <div className="ml-2 text-xl">2023</div>
      </div>

      {/* Chin Chin Festival  */}

      <div className="mx-2 mt-5 mb-28 justify-center">
        <Link href="/event/chin-chin-festival">
          <Image
            className="h-76 w-full rounded-xl object-cover  md:h-auto"
            src="./chinchin.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={1024}
            height={800}
            alt="chinchin"
          />

          <div className="flex flex-col justify-between  p-2 ">
            <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight  md:text-3xl">
              Chin Chin Festival 2023
            </h5>
          </div>
        </Link>

        <div className="mx-2 flex flex-row hover:text-blue-500">
          <Link href="https://goo.gl/maps/RMZFYi8yuoPRMQNQ7" target="_blank">
            <div className="flex flex-row">
              <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-red-500  " />
              Tuinen van West, Amsterdam
            </div>
          </Link>
        </div>

        <div className="mx-2 mt-5 flex flex-row">
          <HiCalendar className="align-center mb-1 mr-2 h-6 w-6 content-center items-center " />{' '}
          1 July 2023
          <div className="ml-2 flex flex-col">13:00 - 23:00</div>
        </div>
      </div>
    </>
  )
}

export default Featured
