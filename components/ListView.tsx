import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import cn from 'classnames'
import { EventInfo } from 'models/EventInfo'
import Image from 'next/image'
import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaEnvelope, FaTelegramPlane } from 'react-icons/fa'

import { EventsList } from './EventsList'

const MyLoader = () => {
  return ('')
}

type PropsType = {
  // setSelectedTag: Dispatch<SetStateAction<string[]>>
  // selectedTags: string[]
  selectedDay: string
  events: EventInfo[]
}

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>

export const ListView: React.FC<PropsType> = ({
  // selectedTags,
  // setSelectedTag,
  selectedDay,
  events,
}) => {
  const apiRef = useRef({} as scrollVisibilityApiType)

  useEffect(() => {
    if (events.length > 0) {
      apiRef.current?.scrollToItem?.(
        // @ts-ignore
        apiRef.current?.getItemElementById(selectedDay),
        'smooth',
        'center',
        'nearest'
      )
    }
  }, [selectedDay, events])

  return (
<>
    {/* <div className="mx-auto justify-center">
    <Image
      className="w-full h-58  md:rounded-xl object-cover  md:h-auto"
      src='./youradhere.png'
      loader={MyLoader}
      unoptimized={true}
      width={540}
      height={240}
      alt="ad"
    />

    <div className="flexflex-col justify-between mb-10 mx-2 md:mx-0 p-2 leading-normal">
        <h5 className="mb-2 flex flex-row text-md font-bold tracking-tight text-red-500 md:text-lg">
          Your Ad/Event Here
        </h5>


        <div className="mt-5 flex flex-row">
        <FaTelegramPlane className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-red-500" />{' '}
        Feel free to contact us! </div>
        <div className="mt-5 flex flex-row">
        <FaEnvelope className="align-center mb-1 mr-2 h-6 w-6 content-center items-center text-red-500" />{' '}
        info@amstonight.com</div>
  </div>
  </div> */}

    <div className="">
          <ScrollMenu apiRef={apiRef}>
      
      </ScrollMenu>
      <div
        className="mx-auto mt-5 mb-10 max-w-4xl items-center justify-center"
      >
        <div className="mx-auto  mb-20 gap-6 ml-2 mr-2 grid grid-cols-1 grid-rows-1 justify-center sm:grid-cols-3 ">
          {events.map((el) => (
            <EventsList
              key={el._id}
              itemId={el._id}
              eventInfo={el}
              selectedDay={selectedDay}

              // selectedTags={selectedTags}
              // setSelectedTag={setSelectedTag}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
