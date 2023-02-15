import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Featured from 'components/Featured'
import { format, getMonth } from 'date-fns'
import { GetServerSideProps } from 'next'
import { groq } from 'next-sanity'
import { useCallback, useEffect, useState } from 'react'
import { ListView } from 'components/ListView'

import {
  CurrentYear,
  DaysScrollMenuItems,
  EventCard,
  EventScrollMenu,
  Months,
  Tags,
} from '../components'
import { MONTHS } from '../lib/constants'
import { client } from '../sanity/lib/client'
import { FaArrowsAltH, FaCalendar } from 'react-icons/fa'
import { BsFillCalendarDateFill, BsFillGrid3X3GapFill, BsGrid3X3 } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai'

type PropsType = {
  title: string
  tags: TagType[]
}

export default function IndexPage({ title, tags }: PropsType) {
  const currentDate = new Date()
  const monthIndex = getMonth(currentDate)
  const today = currentDate.toDateString()

  const [selectedMonth, setSelectedMonth] = useState(MONTHS[monthIndex])
  const [selectedDay, setSelectedDay] = useState<string>(today)
  const [selectedTags, setSelectedTag] = useState<string[]>([])
  const [eventsState, setEventsState] = useState<EventInfo[]>([])

  const fetchEvents = useCallback(async () => {
    const selectedDate = format(new Date(selectedDay), 'yyyy-MM-dd')
    const match =
      selectedTags.length === 0
        ? "'*'"
        : selectedTags.map((el) => `"${el}"`).join(', ')

    const eventsQuery = groq`*[_type == 'event' && eventDate == '${selectedDate}' && eventTags[]->genre match [${match}]]
      {_id, eventName, eventPrice, eventUrl, 'eventMusic': music, 'eventClub': club, 'eventTime': timePeriod, 'eventAddress': address, 
      eventImage {asset -> {..., metaData}},
      'tags': eventTags[]->{'name': genre, 'color': color.hex, _id}}`

    const events = await client.fetch<EventInfo[]>(eventsQuery)

    setEventsState(events)
  }, [selectedDay, selectedTags])

  useEffect(() => {
    if (selectedDay && selectedTags) {
      fetchEvents()
    }
  }, [selectedTags, selectedDay, fetchEvents])

  const [show, setShow] = useState(true)

  return (
    <div className="m-auto sm:max-w-3xl">
      {/* <CurrentYear /> */}
      <Months
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <DaysScrollMenuItems
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      {/* <div className="my-10 mx-4 mt-10 mb-10 flex items-center justify-center mx-auto max-4xl md:mx-6">
        <Tags
          tags={tags}
          setSelectedTag={setSelectedTag}
          selectedTags={selectedTags}
        />
      </div> */}
      <div className='content-center align-center items-center text-2xl ml-5 mt-20  flex flex-row'>
        <AiOutlineCalendar className='mr-3'/>
        {selectedDay}
        </div>

      <div className="mb-10">
        <div className="mx-auto mt-5 mr-6 justify-end text-right ">
          <button
            className=" focus:dark:zinc-900  my-1  mx-1 rounded-lg py-2 px-2 focus:bg-gray-300 active:bg-gray-300 focus:dark:bg-zinc-800"
            onClick={() => setShow(!false)}
          >
            <BsGrid3X3 className="h-5 w-5" />
          </button>
          <button
            className=" focus:dark-zinc-900  my-1  mx-1 rounded-lg py-2 px-2 focus:bg-gray-300 active:bg-gray-300 focus:dark:bg-zinc-800 active:dark:bg-zinc-800"
            onClick={() => setShow(!true)}
          >
            <FaArrowsAltH className="h-5 w-5" />
          </button>
        </div>
        {show ? (
          <ListView
            // setSelectedTag={setSelectedTag}
            // selectedTags={selectedTags}
            selectedDay={selectedDay}
            events={eventsState}
          />
        ) : true ? (
          <EventScrollMenu
            // setSelectedTag={setSelectedTag}
            // selectedTags={selectedTags}
            selectedDay={selectedDay}
            events={eventsState}
          />
        ) : (
          false
        )}
      </div>

      {/* <div className="mx-auto">
        <Featured />
      </div> */}
    </div>
  )
}

type PageType = {
  title: string
}

export type TagType = {
  _id: string
  name: string
  color: string
}

export type EventInfo = {
  _id: string
  eventImage: { asset: SanityImageSource }
  eventDate: Date
  eventName: string
  tags: TagType[]
  eventTime: string
  eventClub: string
  eventAddress: string
  eventPrice: number
  eventUrl: string
}

// initial loading datas like page header and all existing tags
export const getServerSideProps: GetServerSideProps = async () => {
  const pageTitleQuery = groq`*[_type == 'pageTitle'][0]`
  const tagsQuery = groq`*[_type == 'tags']{'name': genre, _id, 'color': color.hex}`

  const page = await client.fetch<PageType>(pageTitleQuery)
  const tags = await client.fetch<TagType[]>(tagsQuery)

  return {
    props: {
      title: page.title,
      tags,
    },
  }
}
