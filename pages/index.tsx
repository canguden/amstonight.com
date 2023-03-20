import { ListView } from 'components/ListView'
import { format, getMonth } from 'date-fns'
import { PageType } from 'models/PageType'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { groq } from 'next-sanity'
import { useCallback, useEffect, useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BsGrid3X3 } from 'react-icons/bs'
import { FaArrowsAltH } from 'react-icons/fa'

import { DaysScrollMenuItems, EventScrollMenu, Months } from '../components'
import Announcement from '../components/Announcement'
import { MONTHS } from '../lib/constants'
import { EventInfo } from '../models/EventInfo'
import { TagType } from '../models/TagType'
import { client } from '../sanity/lib/client'

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
      {_id, eventName, slug, eventPrice, Description, eventUrl, addressUrl, eventDate, 'eventMusic': music, 'eventClub': club, 'eventTime': timePeriod, 'eventAddress': address, 
      eventImage {asset -> {..., metaData}},
      'tags': eventTags[]->{'name': genre, 'color': color.hex, _id}}`

    const events = await client.fetch<EventInfo[]>(eventsQuery)

    console.log({ events })

    setEventsState(events)
  }, [selectedDay, selectedTags])

  useEffect(() => {
    if (selectedDay && selectedTags) {
      fetchEvents()
    }
  }, [selectedTags, selectedDay, fetchEvents])

  const [show, setShow] = useState(true)

  const MyLoader = () => {
    return ''
  }

  return (
    <>
      <div>
        <Head>
          <title>Amsterdam Party Agenda - DJ and Party Guide</title>
          <meta
            name="description"
            content="Check out all upcoming events in Amsterdam - The best dj and party guide - Awakenings - Open Air - Bars - Clubs"
          />
        </Head>

        <Announcement />
      </div>
      {/* <div className="mb-10 mt-10">
        <Link href="https://thuisbezorgd.nl" target="_blank">
          <Image
            className="h-76 w-full object-cover md:h-auto  md:rounded-xl"
            src="./takeway.png"
            loader={MyLoader}
            unoptimized={true}
            width={1024}
            height={800}
            alt="banner"
          />
          </Link>
        </div> */}
      <div className="align-center ml-5 mt-10 flex flex-row content-center  items-center text-2xl  font-bold md:text-3xl">
        The Best Clubs, Bars, Events and Parties in Amsterdam!
      </div>
      <p className="align-center ml-5 mt-5 flex flex-row content-center  items-center text-lg  font-thin md:text-lg">
        Explore Amsterdam&apos;s Exciting Nightlife with the Ultimate Party
        Calendar! Discover the best parties and events in Amsterdam with our
        comprehensive party calendar. From rooftop bars to festivals and clubs,
        we have all the information you need to make your night out in Amsterdam
        unforgettable!
      </p>

      <div className="">
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

        <div className="align-center ml-5 mt-10 flex flex-row  content-center items-center  text-xl md:text-2xl">
          <AiOutlineCalendar className="mr-3 text-red-500" />
          {selectedDay}
        </div>

        <div className="mb-10">
          <div className="mx-auto mt-5 mr-6 justify-end text-right ">
            <button
              className=" focus:dark:zinc-900  my-1  mx-1 rounded-lg py-2 px-2 focus:bg-gray-300 active:bg-gray-300 focus:dark:bg-zinc-800"
              onClick={() => setShow(true)}
            >
              <BsGrid3X3 className="h-5 w-5" />
            </button>
            <button
              className=" focus:dark-zinc-900  my-1  mx-1 rounded-lg py-2 px-2 focus:bg-gray-300 active:bg-gray-300 focus:dark:bg-zinc-800 active:dark:bg-zinc-800"
              onClick={() => setShow(false)}
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

        <div className="mb-20">
          <Link href="https://bolt.eu" target="_blank">
            <Image
              className="h-76 w-full object-cover md:h-auto  md:rounded-xl"
              src="./bolt.png"
              loader={MyLoader}
              unoptimized={true}
              width={1024}
              height={800}
              alt="banner"
            />
          </Link>
        </div>
      </div>
    </>
  )
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
