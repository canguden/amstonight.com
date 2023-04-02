import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import cn from 'classnames'
import { EventInfo } from 'models/EventInfo'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import { EventsList } from './EventsList'

const MyLoader = () => {
  return ''
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
      <div className="">
        <ScrollMenu apiRef={apiRef}>
          <div></div>
        </ScrollMenu>
        <div className="mx-auto mt-5 mb-10 max-w-4xl items-center justify-center">
          <div className="mx-auto  mb-20 ml-2 mr-2 grid grid-cols-1 grid-rows-1 justify-center gap-6 sm:grid-cols-3 ">
            {events.map((el) => (
              <EventsList
                key={el._id}
                itemId={el._id}
                eventInfo={el}
                selectedDay={selectedDay}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
