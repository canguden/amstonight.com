
  import Image from 'next/image'
  import Link from 'next/link'
  import { FaStar, FaRegClock, FaMusic } from "react-icons/fa";
  import { BsPinMap } from "react-icons/bs";
  import { IoTicketOutline, IoArrowRedoSharp } from "react-icons/io5";



const Featured = () => {
  return (
    <section className='mt-1'>
        <div className="text-3xl mx-2 px-5 py-10  my-5 flex flex-row items-center text-red-500 font-semibold">
            <h1>Featured</h1>
        </div>
    <div className="w-[700px] max-w-4xl relative mx-2">
      
      <div className="absolute top-0 right-0 backdrop-blur-sm rounded-tr-lg rounded-bl-lg bg-white/20 px-4 py-4 font-bold text-white">
      <FaStar  className='h-8 w-8 text-yellow-500'/>
      </div>
      <div className="absolute top-0 left-0 rounded-br-xl rounded-tl-xl  bg-red-500 py-2 px-1 md:py-4 md:px-2 font-bold text-white">
        17 April
      </div>
      
      <img className='rounded-tr-xl rounded-tl-xl'src="/encore.jpg" alt="logo" width="700" height="700" />
      <div className="rounded-b-lg  bg-white dark:bg-zinc-800">
        <div className="mx-2 mb-2 flex flex-col justify-start  text-2xl font-bold">
          Overbruggen
          <div className=" text-xl text-gray-500 font-semibold">Melkweg</div>
        </div>

        <div className="m-1 flex items-center gap-2">
          <BsPinMap className="h-8 w-8 text-gray-400" />
          <div className="my-1 text-lg md:text-xl font-thin">Leidsedwarstraat 12, Amsterdam</div>
        </div>

        <div className="m-1 flex items-center gap-2">
          <FaRegClock className="h-8 w-8 text-gray-400" />
          <div className="my-1 text-xl md:text-xl font-thin">22:00 - 05:00</div>
        </div>

        <div className="m-1 flex items-center gap-2">
          <FaMusic className="h-8 w-8 text-gray-500" />
          <div className=" text-xl font-thin">Hiphop, R&B, Latin</div>
        </div>

        <div className="m-auto flex justify-between items-center gap-2">
          <div className="flex items-center">
            <IoTicketOutline className="h-8 w-8 text-gray-400" />
            <div className="my-1 mx-1 text-lg md:text-xl font-semibold">€ 16,50</div>
          </div>
          <div>
            <Link href="/" target="_blank">
              <div className="flex cursor-pointer items-center ">
                <button className='flex  items-center m-auto bg-gray-300 dark:bg-zinc-600 hover:text-gray-600 dark:hover:text-gray-800 font-bold my-3  mx-2 py-2  px-10 rounded-lg'>
                <div className="my-1 items text-xl md:text-xl-center font-semibold">Get Tickets</div>
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