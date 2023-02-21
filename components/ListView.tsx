import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import cn from 'classnames'
import { EventInfo } from 'pages'
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

import { EventsList } from './EventsList'

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
    <div className="">
      <ScrollMenu
        apiRef={apiRef}
        className="mx-auto mt-10 max-w-4xl items-center justify-center"
      >
        <div className="mx-auto min-h-screen mb-10 ml-2 mr-2 grid grid-cols-1 grid-rows-1 justify-center sm:grid-cols-3 sm:grid-rows-3">
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
      </ScrollMenu>
    </div>
  )
}
