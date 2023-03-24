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
  const [date, setDate] = useState(new Date('2023-10-01'))

  const events: Record<string, Event[]> = {
    '2023-10-18': [
      {
        name: 'Elrow Amsterdam',
        club: 'TBA',
        time: 'TBA',
        music: 'TBA',
        url: 'https://example.com/event1',
      },
      {
        name: 'CircoLoco',
        club: 'TBA',
        time: 'TBA',
        music: 'TBA',
        url: 'https://example.com/event2',
      },
    ],
    '2023-10-19': [
      {
        name: 'Elrow',
        club: 'TBA',
        time: 'TBA',
        music: 'TBA',
        url: 'https://example.com/event3',
      },
    ],
    '2023-10-20': [
      {
        name: 'Martin Garrix ADE',
        club: 'RAI Amsterdam',
        time: '22:00 - 06:00',
        music: 'House',
        url: 'https://example.com/event3',
      },
      {
        name: 'Into the Woods ADE Festival',
        club: 'NDSM-werf',
        time: '12:00 - 23:00',
        music: 'House',
        url: 'https://example.com/event3',
      },
    ],
    '2023-10-22': [
      {
        name: 'CircoLoco',
        club: 'TBA',
        time: 'TBA',
        music: 'TBA',
        url: 'https://example.com/event2',
      },
    ],
    '2023-10-21': [
      {
        name: 'CircoLoco',
        club: 'TBA',
        time: 'TBA',
        music: 'TBA',
        url: 'https://example.com/event2',
      },
    ],
  }

  const MyLoader = () => {
    return ''
  }

  const daysToRender = [18, 19, 20, 21, 22]

  return (
    <div className="mx-4 mb-20">
      <div className=" flex items-center">
        <Image
          className="mr-3  flex h-10 w-10 flex-row items-center  justify-end"
          src="./logo-ade.png"
          loader={MyLoader}
          unoptimized={true}
          width={50}
          height={50}
          alt="ade"
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
                    <div className="borderb border-2 border-yellow-300 dark:border-yellow-400 "></div>
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
