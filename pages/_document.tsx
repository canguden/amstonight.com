import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='min-h-screen'>
      <Head>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body className='overflow-x-hidden min-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
