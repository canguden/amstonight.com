import Featured from 'components/Featured'
import Head from 'next/head'
import React from 'react'

const festivals = () => {
  return (
    <>
        <div>
    <Head>
      <title>Festivals</title>
      <meta
  name="description"
  content="Check out all upcoming festivals in Amsterdam"
/>
    </Head>
  </div>
    <div>
      <Featured />
    </div>
    </>
  )
}

export default festivals
