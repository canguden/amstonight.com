import cn from 'classnames'
import { EventInfo } from 'models/EventInfo'
import Image from 'next/image'
import {
  MouseEventHandler,
  useContext,
  useEffect,
  useRef,
} from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaChevronLeft, FaChevronRight, FaEnvelope, FaTelegramPlane } from 'react-icons/fa'

import { EventCard } from './'

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

export const EventScrollMenu: React.FC<PropsType> = ({
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
    <div className="my-2 mb-20">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} apiRef={apiRef}>
        {events.map((el) => (
          <EventCard
            key={el._id}
            itemId={el._id}
            eventInfo={el}
            selectedDay={selectedDay}
            // selectedTags={selectedTags}
            // setSelectedTag={setSelectedTag}
          />
        ))}
      </ScrollMenu>
    </div>

{/* <div className="mx-auto mt-20 justify-center">
<Image
  className="w-full h-58  md:rounded-xl object-cover  md:h-auto"
  src='./youradhere.png'
  loader={MyLoader}
  unoptimized={true}
  width={540}
  height={240}
  alt="ad"
/>

<div className="flexflex-col mb-24 justify-between mt-3 mx-2 md:mx-0 p-2 leading-normal">
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
</>
  )
}

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext)

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <FaChevronLeft className="ml-5 h-6 w-6 py-1 px-1 bg-gray-300 dark:text-gray-700 dark:bg-white rounded-full" />
    </Arrow>
  )
}
const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext)

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <FaChevronRight className="ml-3 h-6 w-6 py-1 px-1 bg-gray-300 dark:text-gray-700 dark:bg-white rounded-full" />
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