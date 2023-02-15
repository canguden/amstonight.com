import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='min-h-screen'>
      <Head />
      <body className='overflow-x-hidden min-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
