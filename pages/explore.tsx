import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import cn from 'classnames'
import { MouseEventHandler, useContext } from 'react'
import { HiOutlineMapPin } from 'react-icons/hi2'

const explore = () => {
  return (
    <div className="my-2 min-h-screen mb-20">
            <div className='text-2xl ml-5'>Popular Bars</div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
          <img
            src="./waterkant.jpg"
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
        </div>


        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
          <img
            src="./palladium.jpg"
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
        </div>

        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
          <img
            src="./lokaal.jpg"
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
        </div>
      </ScrollMenu>


      <div className='text-2xl mt-20 ml-5'>Popular Restaurants</div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
          <img
            src="./thebutcher.jpg"
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
        </div>


        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
          <img
            src="./salmuera.jpg"
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
        </div>

        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
          <img
            src="./mondi.jpg"
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
        </div>
      </ScrollMenu>


      <div className='text-2xl mt-20 ml-5'>Popular Coffeeshops</div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
          <img
            src="./cent.jpg"
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
        </div>


        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
          <img
            src="./scanemb.jpg"
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
                de Pijp
              </div>
            </div>
          </div>
        </div>

        <div className="relative bottom-0 mx-2 mt-5 w-80 max-w-4xl  object-fill">
          <img
            src="./party.jpeg"
            width={440}
            height={540}
            alt="alt"
            className="w-68 h-48 rounded-md object-cover"
          />

          <div className="h-38 w-68 rounded-b-xl ">
            <div className=" flex flex-col justify-start text-xl font-bold">
              eventname
              <div className=" mt-1 flex flex-row text-lg font-semibold text-gray-500">
                <HiOutlineMapPin className="mt-1 content-center text-red-500" />{' '}
                club name
              </div>
            </div>
          </div>
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
