import Image from 'next/image'
import Link from 'next/link'
import { FaStar, FaRegClock, FaMusic } from 'react-icons/fa'
import { BsPinMap } from 'react-icons/bs'
import { IoTicketOutline, IoArrowRedoSharp } from 'react-icons/io5'

const Featured = () => {
  return (
    <section className="mt-1">
      <div className="mx-2 my-5 flex flex-row  items-center px-5 py-10 text-3xl  font-semibold">
        <h1>Featured</h1>
      </div>
      <div className="relative mx-auto w-[500px] max-w-4xl">
        <div className="absolute top-0 right-0 rounded-tr-lg rounded-bl-lg bg-white/20 px-4 py-4 font-bold text-white backdrop-blur-sm">
          <FaStar className="h-8 w-8 text-yellow-500" />
        </div>
        <div className="absolute top-0 left-0 rounded-br-xl rounded-tl-xl  bg-red-500 py-2 px-1 font-bold text-white md:py-4 md:px-2">
          17 April
        </div>

        <img
          className="mx-auto rounded-tr-xl rounded-tl-xl"
          src="/encore.jpg"
          alt="logo"
          width="700"
          height="700"
        />
        <div className="rounded-b-lg  bg-white dark:bg-zinc-800">
          <div className="mx-2 mb-2 flex flex-col justify-start  text-2xl font-bold">
            Overbruggen
            <div className=" text-xl font-semibold text-gray-500">Melkweg</div>
          </div>

          <div className="m-1 flex items-center gap-2">
            <BsPinMap className="h-8 w-8 text-gray-400" />
            <div className="my-1 text-lg font-thin md:text-xl">
              Leidsedwarstraat 12, Amsterdam
            </div>
          </div>

          <div className="m-1 flex items-center gap-2">
            <FaRegClock className="h-8 w-8 text-gray-400" />
            <div className="my-1 text-xl font-thin md:text-xl">
              22:00 - 05:00
            </div>
          </div>

          <div className="m-1 flex items-center gap-2">
            <FaMusic className="h-8 w-8 text-gray-500" />
            <div className=" text-xl font-thin">Hiphop, R&B, Latin</div>
          </div>

          <div className="m-auto flex items-center justify-between gap-2">
            <div className="flex items-center">
              <IoTicketOutline className="h-8 w-8 text-gray-400" />
              <div className="my-1 mx-1 text-lg font-semibold md:text-xl">
                € 16,50
              </div>
            </div>
            <div>
              <Link href="/" target="_blank">
                <div className="flex cursor-pointer items-center ">
                  <button className="m-auto  my-2 mx-2 flex items-center rounded-lg bg-blue-500  py-2 px-2  font-bold text-white">
                    <div className="items my-1 font-semibold md:text-sm">
                      Get Tickets
                    </div>
                    <IoArrowRedoSharp className="ml-1 mt-1 h-5 w-5 " />
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 w-[500px] max-w-4xl">
        <div className="absolute top-0 right-0 rounded-tr-lg rounded-bl-lg bg-white/20 px-4 py-4 font-bold text-white backdrop-blur-sm">
          <FaStar className="h-8 w-8 text-yellow-500" />
        </div>
        <div className="absolute top-0 left-0 rounded-br-xl rounded-tl-xl  bg-red-500 py-2 px-1 font-bold text-white md:py-4 md:px-2">
          17 April
        </div>

        <img
          className="mx-auto rounded-tr-xl rounded-tl-xl"
          src="/encore.jpg"
          alt="logo"
          width="700"
          height="700"
        />
        <div className="rounded-b-lg  bg-white dark:bg-zinc-800">
          <div className="mx-2 mb-2 flex flex-col justify-start  text-2xl font-bold">
            Overbruggen
            <div className=" text-xl font-semibold text-gray-500">Melkweg</div>
          </div>

          <div className="m-1 flex items-center gap-2">
            <BsPinMap className="h-8 w-8 text-gray-400" />
            <div className="my-1 text-lg font-thin md:text-xl">
              Leidsedwarstraat 12, Amsterdam
            </div>
          </div>

          <div className="m-1 flex items-center gap-2">
            <FaRegClock className="h-8 w-8 text-gray-400" />
            <div className="my-1 text-xl font-thin md:text-xl">
              22:00 - 05:00
            </div>
          </div>

          <div className="m-1 flex items-center gap-2">
            <FaMusic className="h-8 w-8 text-gray-500" />
            <div className=" text-xl font-thin">Hiphop, R&B, Latin</div>
          </div>

          <div className="m-auto flex items-center justify-between gap-2">
            <div className="flex items-center">
              <IoTicketOutline className="h-8 w-8 text-gray-400" />
              <div className="my-1 mx-1 text-lg font-semibold md:text-xl">
                € 16,50
              </div>
            </div>
            <div>
              <Link href="/" target="_blank">
                <div className="flex cursor-pointer items-center ">
                  <button className="m-auto  my-2 mx-2 flex items-center rounded-lg bg-blue-500  py-2 px-2  font-bold text-white">
                    <div className="items my-1 font-semibold md:text-sm">
                      Get Tickets
                    </div>
                    <IoArrowRedoSharp className="ml-1 mt-1 h-5 w-5 " />
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
