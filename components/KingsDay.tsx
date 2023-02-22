import Image from 'next/image'
import Link from 'next/link'
import { FaHeadphones, FaEuroSign } from 'react-icons/fa'
import { BsFillInfoSquareFill, BsPinMap } from 'react-icons/bs'
import { SiGooglemaps } from 'react-icons/si'
import { HiCalendar } from 'react-icons/hi2'


const KingsDay = () => {
  return (
    <>

    <div className="mx-auto  h-screen justify-center">
      <img
        className="h-76 w-full md:rounded-xl object-cover  md:h-auto"
        src='./aoa.jpg'
        width={1024}
        height={800}
        alt="openair"
      />
      <div className="flexflex-col justify-between mx-2 md:mx-0 p-2 leading-normal">
          <h5 className="mb-2 flex flex-row text-2xl font-bold tracking-tight text-purple-500 md:text-3xl">
            Amsterdam Open Air 2023 - Gaasperpark
          </h5>

        <hr />


          <div className="flex flex-row mt-5 hover:text-blue-500">
          <Link href="https://www.openair.com" target="_blank"><div className='flex flex-row'>
            <SiGooglemaps className="mt-1 mr-2 h-5 w-5 content-center text-purple-500" />
            Gaasperpark, Amsterdam
            </div>
            </Link>
          </div>

        <div className="mt-5 flex flex-row">
          <HiCalendar className="align-center mt-0.5 mr-1 h-6 w-6 content-center items-center text-purple-500" />{' '}
          3 - 4 June 2023
          <div className="ml-2 flex flex-col">12:00 - 23:00</div>
        </div>

        <div className="mt-5 flex flex-row text-xl">
          <BsFillInfoSquareFill className="mt-1 mr-2 h-5 w-5 content-center text-purple-500" />
        </div>

        <div className="flex max-w-3xl ml-6 flex-row">Every year, in the first weekend of June, a collaboration of friends takes place in Amsterdam&apos;s Gaasperpark. A selection of Amsterdam&apos;s hottest promoters join-up to create a fashion forward festival that reflects the nightlife and art culture in our capital city, being a platform for local talent. Along with a culinary festival kitchen, creative collectives and a cosy four day camping, the visitors experience a weekend full of creativity, friendship and musical expression at Amsterdam Open Air.</div>

        <div className="mt-5 flex font-semibold flex-row">
          <FaHeadphones className="mr-2 h-5 w-5 content-center text-purple-500" />
          Astra Club,
          Claude,
          De Jeugd Van Tegenwoordig,
          Dj Daisy,
          Froukje,
          Kilimanjaro,
          Luuk van Dijk,
          Sim—oj
        </div>

        <div className="mt-10 flex flex-row mb-20">
          <div className="flex flex-grow items-center  justify-start text-xl">
            <FaEuroSign className='mr-2 h-5 w-5 content-center text-purple-500' /> 75 - 120
          </div>

          <div className="flex justify-end">
            <button className="rounded-full bg-purple-500 px-6 py-2 text-white hover:bg-purple-600">
              <Link href="https://www.openair.com" target="_blank">
                Get Tickets
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}
export default KingsDay