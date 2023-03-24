import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'

type Event = {
  name: string
  club: string
  time: string
  music: string
  url: string
}

function Ade() {
  const [date, setDate] = useState(new Date('2023-04-01'))

  const events: Record<string, Event[]> = {
    '2023-04-26': [
      {
        name: 'Overbruggen',
        club: 'Levenslang',
        time: 'TBA',
        music: 'TBA',
        url: 'https://example.com/event1',
      },
    ],
    '2023-04-27': [
      {
        name: 'Kingsday Festival',
        club: 'RAI',
        time: 'TBA',
        music: 'TBA',
        url: 'https://example.com/event3',
      },
    ],
  }

  const MyLoader = () => {
    return ''
  }

  const daysToRender = [26, 27]

  return (
    <div className="mx-4 mb-20">
      <div className=" flex items-center">
        <Image
          className="mr-3  flex h-10 w-10 flex-row items-center justify-end  rounded-md"
          src="./willy.jpg"
          loader={MyLoader}
          unoptimized={true}
          width={50}
          height={50}
          alt="kingsday"
        />
        <div className="text-xl font-bold">
          {date.toLocaleString('default', { month: 'long' })}{' '}
          {date.getFullYear()}
        </div>
      </div>
      {daysToRender.map((day) => {
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${day.toString().padStart(2, '0')}`
        const eventsForDay = events[formattedDate]

        return (
          <div key={day} className="my-4">
            <div className="flex flex-row">
              <div className="text-xl font-bold">{day}</div>
              <div className="ml-2 text-xl"></div>
              {date.toLocaleString('default', { month: 'long' })}
            </div>
            {eventsForDay ? (
              <div className="mt-2">
                {eventsForDay.map((event) => (
                  <div
                    key={event.name}
                    className="dark:bg-white-400 mt-2 mb-2 rounded-lg  border-2 p-2 text-black dark:border-zinc-900 dark:text-white"
                  >
                    <div className=" text-lg font-bold">{event.name}</div>
                    <div className="borderb border-2 border-orange-500"></div>
                    <div className="mt-2 text-sm">{event.club}</div>
                    <div className="text-sm">{event.time}</div>
                    <div className="text-sm">{event.music}</div>
                    <a
                      href={event.url}
                      rel="noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      More details
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-2 rounded bg-blue-200 p-2">No events</div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Ade
