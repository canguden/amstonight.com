import Featured from 'components/Featured'
import Head from 'next/head'
import React from 'react'

const festivals = () => {
  return (
    <>
        <div>
    <Head>
      <title>Festivals</title>
    </Head>
  </div>
    <div>
      <Featured />
    </div>
    </>
  )
}

export default festivals
