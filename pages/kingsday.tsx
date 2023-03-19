import KingsDay from 'components/KingsDay'
import Head from 'next/head'
import React from 'react'

const kingsday = () => {
  return (
    <>
      <div>
        <Head>
          <title>Kingsday - Koningsdag - Events and Festivals </title>
          <meta name="description" content="Check out the events on Kingsday" />
        </Head>
      </div>
      <div>
        <KingsDay />
      </div>
    </>
  )
}

export default kingsday
