import { useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'

type Event = {
  name: string
  club: string
  time: string
  music: string
  url: string
}

function MyCalendar() {
  const [date, setDate] = useState(new Date())

  const events: Record<string, Event[]> = {
    '2023-03-25': [
      {
        name: 'GIRLS GIRLS GIRLS',
        club: 'Chicago Social Club',
        time: '23:00 - 05:00',
        music: 'R&B, HipHop, DanceHall, Afro',
        url: '/event/girls-girls-girls-25-03',
      },
      {
        name: 'Hitjesgolf',
        club: 'Disco Dolly',
        time: '23:00 - 05:00',
        music: 'Hits',
        url: '/event/hitjesgolf-25-03',
      },
      {
        name: 'R&B Social',
        club: 'PARADISO',
        time: '23:59 - 05:00',
        music: 'R&B',
        url: '/event/rb-social-25-03',
      },
      {
        name: 'Brainwash',
        club: 'Escape',
        time: '23:00 - 05:00',
        music: 'R&B, HipHop, DanceHall, Afro',
        url: '/event/brainwash-25-03',
      },
      {
        name: 'Skybar 747',
        club: 'Corendon Village',
        time: '22:00 - 02:00',
        music: 'Latin',
        url: '/event/skybar-747-25-03',
      },
      {
        name: 'THRWBCK',
        club: 'Club Air',
        time: '23:00 - 05:00',
        music: 'HipHop, R&B',
        url: '/event/thrwbck-25-03',
      },
    ],

    '2023-03-26': [
      {
        name: 'OMG',
        club: 'Club Air',
        time: '23:00 - 04:00',
        music: 'R&B Hits',
        url: '/event/omg-26-03',
      },
      {
        name: 'Juice',
        club: 'Escape',
        time: '23:00 - 04:00',
        music: 'House',
        url: '/event/juice-26-03',
      },
    ],
    '2023-03-27': [
      {
        name: 'Mondi Mondays',
        club: 'Club Air',
        time: '19:00 - 23:00',
        music: 'Carribean Vibes',
        url: '/event/mondi-mondays-27-03',
      },
      {
        name: 'Cheeky Monday',
        club: 'Escape',
        time: '23:00 - 04:00',
        music: 'House',
        url: '/event/juice-27-03',
      },
    ],
    '2023-03-28': [
      {
        name: 'Techno Tuesday',
        club: 'Melkweg',
        time: '23:30 - 05:00',
        music: 'Techno',
        url: '/event/techno-tuesday-28-03',
      },
      {
        name: 'Club Stelz',
        club: 'Disco Dolly',
        time: '23:00 - 04:00',
        music: 'Mix',
        url: '/event/stelz-28-03',
      },
      {
        name: 'Dipsh*t',
        club: 'Chicago Social Club',
        time: '23:00 - 05:00',
        music: 'Hits',
        url: '/event/dipsht-28-03',
      },
    ],

    '2023-03-29': [
      {
        name: 'Wazig',
        club: 'Disco Dolly',
        time: '23:00 - 04:00',
        music: 'Mix',
        url: '/event/wazig-29-03',
      },
      {
        name: 'Hotspot',
        club: 'Escape',
        time: '23:00 - 05:00',
        music: 'House, Urban, Eclectic',
        url: '/event/hotspot-29-03',
      },
    ],

    '2023-03-30': [
      {
        name: 'Blossom',
        club: 'Jimmy Woo',
        time: '23:00 - 03:00',
        music: 'HipHop, R&B, Afro, Hits',
        url: '/event/blossom-30-03',
      },
      {
        name: 'Nyx on Thursday',
        club: 'Club Nyx',
        time: '22:00 - 04:00',
        music: 'House, R&B, Hits',
        url: '/event/nyx-thursday-30-03',
      },
      {
        name: 'Freaky',
        club: 'Supperclub',
        time: '23:00 - 04:00',
        music: 'Hits, HipHop, Disco, R&B, House',
        url: '/event/freaky-30-03',
      },
      {
        name: 'Super Social',
        club: 'Chicago Social Club',
        time: '23:00 - 04:00',
        music: 'Hits',
        url: '/event/super-social-30-03',
      },
      {
        name: 'BAMBU',
        club: 'Oliva',
        time: '22:00 - 04:00',
        music: 'House, R&B, Hits, HipHop, Disco',
        url: '/event/bambu-30-03',
      },
      {
        name: 'Video',
        club: 'Escape',
        time: '23:00 - 04:00',
        music: 'House, EDM, Electric',
        url: '/event/video-30-03',
      },
      {
        name: 'Twist',
        club: 'Club Air',
        time: '23:00 - 04:00',
        music: 'Eclectic, R&B, Hits',
        url: '/event/twist-30-03',
      },
      {
        name: 'Kiki',
        club: 'Disco Dolly',
        time: '23:00 - 05:00',
        music: 'House, Disco, Hits',
        url: '/event/kiki-30-03',
      },
    ],
  }

  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate()

  const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()

  const formatDay = (day: number) => {
    const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const weekdayIndex = new Date(
      date.getFullYear(),
      date.getMonth(),
      day
    ).getDay()
    const formattedDay = weekdayNames[weekdayIndex]
    const formattedDate = `${day
      .toString()
      .padStart(2, '0')} ${date.toLocaleString('default', {
      month: 'short',
    })}`

    const currentDate = new Date()
    const isPastDay =
      date.getMonth() < currentDate.getMonth() ||
      (date.getMonth() === currentDate.getMonth() &&
        day < currentDate.getDate())

    if (isPastDay) {
      return (
        <div
          key={day}
          className="my-4 hidden opacity-50"
          style={{ height: 0, opacity: 0, overflow: 'hidden' }}
        >
          <div className="text-lg font-bold">{formattedDay}</div>
          <div className="text-sm">{formattedDate}</div>
          <div className="mb-2 rounded-md bg-blue-200 p-2">No events</div>
        </div>
      )
    }

    return (
      <div key={day} className="my-4 mx-4">
        <div className=" flex flex-row">
          <div className="text-xl font-bold">{formattedDay}</div>
          <div className="ml-2 text-xl">{formattedDate}</div>
        </div>
        {events[
          `${date.getFullYear()}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${day.toString().padStart(2, '0')}`
        ] &&
          events[
            `${date.getFullYear()}-${(date.getMonth() + 1)
              .toString()
              .padStart(2, '0')}-${day.toString().padStart(2, '0')}`
          ].map((event, index) => (
            <div
              key={index}
              className="dark:bg-white-400 mt-2 mb-2 rounded-lg  border-2 p-2 text-black dark:border-zinc-900 dark:text-white"
            >
              <div className=" text-lg font-bold">{event.name}</div>
              <div className="borderb border-2 border-red-500 "></div>
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
    )
  }

  const days = []
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(formatDay(i))
  }

  const goToNextMonth = () => {
    setDate((prevDate) => {
      const nextMonth = prevDate.getMonth() + 1
      const nextYear =
        nextMonth > 11 ? prevDate.getFullYear() + 1 : prevDate.getFullYear()
      return new Date(nextYear, nextMonth, 1)
    })
  }

  const goToPrevMonth = () => {
    setDate((prevDate) => {
      const prevMonth = prevDate.getMonth() - 1
      const prevYear =
        prevMonth < 0 ? prevDate.getFullYear() - 1 : prevDate.getFullYear()
      return new Date(prevYear, prevMonth, 1)
    })
  }

  return (
    <div>
      <div className="my-2 mx-7 mb-5 text-xl">
        <AiOutlineCalendar className="mr-3 h-10 w-10 text-red-500" />
      </div>
      <div className="text-md mx-4  mb-4 font-bold">
        <div className="flex items-center justify-between">
          <div className="mx-4">
            {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </div>
          <div className="mx-4 flex items-center">
            <button
              className="mx-4 mr-2 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
              onClick={goToPrevMonth}
            >
              Previous
            </button>
            <button
              className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
              onClick={() => setDate(new Date())}
            >
              Tonight
            </button>
            <button
              className="ml-2 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
              onClick={goToNextMonth}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="full-w mx-4 grid grid-cols-1 gap-4">{days}</div>
    </div>
  )
}

export default MyCalendar
