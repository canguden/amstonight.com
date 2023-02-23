import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEventHandler, useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { HiOutlineMapPin } from 'react-icons/hi2'


const MyLoader = () => {
  return ('')
}


const explore = () => {
  return (
    <div className="my-2 min-h-screen mb-20">
            <div className='text-2xl ml-5'>Popular Bars</div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
        <Link href='https://goo.gl/maps/EVKA7gqd8yUJbSdU7' target="_blank">
          <Image
            src="./waterkant.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={440}
            height={540}
            alt="alt"
            className="w-68 h-48 rounded-md object-cover"
          />

          <div className="h-38 w-68 rounded-b-xl ">
            <div className=" flex flex-col justify-start text-xl font-bold">
              Waterkant
              <div className=" mt-1 flex flex-row text-lg font-semibold text-gray-500">
                <HiOutlineMapPin className="mt-1 mr-1 content-center text-red-500" />{' '}
                Marnixstraat
              </div>
            </div>
          </div>
          </Link>
        </div>


        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
        <Link href='https://goo.gl/maps/oKS7TP9tGSyhoyXB9' target="_blank">
          <Image
            src="./palladium.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={440}
            height={540}
            alt="alt"
            className="w-68 h-48 rounded-md object-cover"
          />

          <div className="h-38 w-68 rounded-b-xl ">
            <div className=" flex flex-col justify-start text-xl font-bold">
              Palladium
              <div className=" mt-1 flex flex-row text-lg font-semibold text-gray-500">
                <HiOutlineMapPin className="mt-1 mr-1 content-center text-red-500" />{' '}
                Leidseplein
              </div>
            </div>
          </div>
          </Link>
        </div>

        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
        <Link href='https://goo.gl/maps/F1Ya9fvk6F8GV8Ld6' target="_blank">
          <Image
            src="./lokaal.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={440}
            height={540}
            alt="alt"
            className="w-68 h-48 rounded-md object-cover"
          />

          <div className="h-38 w-68 rounded-b-xl ">
            <div className=" flex flex-col justify-start text-xl font-bold">
              Local of the City
              <div className=" mt-1 flex flex-row text-lg font-semibold text-gray-500">
                <HiOutlineMapPin className="mt-1 mr-1 content-center text-red-500" />{' '}
                Hoofddorpplein
              </div>
            </div>
          </div>
        </Link>
        </div>
      </ScrollMenu>


      <div className='text-2xl mt-20 ml-5'>Popular Restaurants</div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
        <Link href='https://goo.gl/maps/dbsnT28Teo5AV2YT7' target="_blank">
          <Image
            src="./thebutcher.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={440}
            height={540}
            alt="alt"
            className="w-68 h-48 rounded-md object-cover"
          />

          <div className="h-38 w-68 rounded-b-xl ">
            <div className=" flex flex-col justify-start text-xl font-bold">
              The Butcher
              <div className=" mt-1 flex flex-row text-lg font-semibold text-gray-500">
                <HiOutlineMapPin className="mt-1 mr-1 content-center text-red-500" />{' '}
                Albert Cuyp
              </div>
            </div>
          </div>
          </Link>
        </div>


        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
        <Link href='https://goo.gl/maps/HYebr7S88ykNUbQW7' target="_blank">
          <Image
            src="./salmuera.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={440}
            height={540}
            alt="alt"
            className="w-68 h-48 rounded-md object-cover"
          />

          <div className="h-38 w-68 rounded-b-xl ">
            <div className=" flex flex-col justify-start text-xl font-bold">
              Salmuera
              <div className=" mt-1 flex flex-row text-lg font-semibold text-gray-500">
                <HiOutlineMapPin className="mt-1 mr-1 content-center text-red-500" />{' '}
                Rozengracht
              </div>
            </div>
          </div>
          </Link>
        </div>

        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
        <Link href='https://goo.gl/maps/ixezRtos4YGEnsi7A' target="_blank">
          <Image
            src="./mondi.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={440}
            height={540}
            alt="alt"
            className="w-68 h-48 rounded-md object-cover"
          />

          <div className="h-38 w-68 rounded-b-xl ">
            <div className=" flex flex-col justify-start text-xl font-bold">
              Mondi
              <div className=" mt-1 flex flex-row text-lg font-semibold text-gray-500">
                <HiOutlineMapPin className="mt-1 mr-1 content-center text-red-500" />{' '}
                College Hotel
              </div>
            </div>
          </div>
          </Link>
        </div>
      </ScrollMenu>


      <div className='text-2xl mt-20 ml-5'>Popular Coffeeshops</div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
        <Link href='https://goo.gl/maps/5GVWoMYkEZBMdE8dA' target="_blank">
          <Image
            src="./cent.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={440}
            height={540}
            alt="alt"
            className="w-68 h-48 rounded-md object-cover"
          />

          <div className="h-38 w-68 rounded-b-xl ">
            <div className=" flex flex-col justify-start text-xl font-bold">
              Coffee & Coconuts
              <div className=" mt-1 flex flex-row text-lg font-semibold text-gray-500">
                <HiOutlineMapPin className="mt-1 mr-1 content-center text-red-500" />{' '}
                de Pijp
              </div>
            </div>
          </div>
          </Link>
        </div>


        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
        <Link href='https://goo.gl/maps/qeZfXJNudEFEiFa58' target="_blank">
          <Image
            src="./scanemb.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={440}
            height={540}
            alt="alt"
            className="w-68 h-48 rounded-md object-cover"
          />

          <div className="h-38 w-68 rounded-b-xl ">
            <div className=" flex flex-col justify-start text-xl font-bold">
              Scandinavian Embassy
              <div className=" mt-1 flex flex-row text-lg font-semibold text-gray-500">
                <HiOutlineMapPin className="mt-1 mr-1 content-center text-red-500" />{' '}
                Sarphatipark
              </div>
            </div>
          </div>
          </Link>
        </div>

        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
        <Link href='https://goo.gl/maps/F1Ya9fvk6F8GV8Ld6' target="_blank">
          <Image
            src="./backtoblack.jpg"
            loader={MyLoader}
            unoptimized={true}
            width={440}
            height={540}
            alt="alt"
            className="w-68 h-48 rounded-md object-cover"
          />

          <div className="h-38 w-68 rounded-b-xl ">
            <div className=" flex flex-col justify-start text-xl font-bold">
              Back to Black
              <div className=" mt-1 flex flex-row text-lg font-semibold text-gray-500">
                <HiOutlineMapPin className="mt-1 content-center text-red-500" />{' '}
                Weteringstraat 48
              </div>
            </div>
          </div>
          </Link>
        </div>
      </ScrollMenu>
    </div>



  )
}

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext)

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <FaChevronLeft className="ml-5 h-6 w-6 rounded-full bg-gray-300 py-1 px-1 dark:bg-white dark:text-gray-700" />
    </Arrow>
  )
}
const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext)

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <FaChevronRight className="ml-3 h-6 w-6 rounded-full bg-gray-300 py-1 px-1 dark:bg-white dark:text-gray-700" />
    </Arrow>
  )
}

const Arrow = ({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode
  disabled: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'flex cursor-pointer select-none items-center justify-center',
        {
          ['opacity-0']: disabled,
          ['opacity-1']: !disabled,
        }
      )}
    >
      {children}
    </button>
  )
}

export default explore
