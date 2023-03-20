import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

const Announcement = () => {
  return (
    <div className="align-center mt-10 items-center justify-center py-1 text-lg font-extrabold">
      <Marquee speed={60} gradient={false} pauseOnHover>
        <div className="mr-2 flex text-center">
          <span className="mr-2">Follow us on </span>
          <span className="mr-2">Social Media -</span>
          <Link
            legacyBehavior
            href="https://instagram.com/amstonight"
            target="_blank"
          >
            <span className="mr-2 cursor-pointer text-xl text-red-500 hover:font-extrabold">
              @amstonight -
            </span>
          </Link>
        </div>
        <div>
          <span className="mr-2">Party Agenda</span>
          <span className="mr-2">in your Pocket! </span>
        </div>
      </Marquee>
    </div>
  )
}

export default Announcement
