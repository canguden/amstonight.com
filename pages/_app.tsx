import 'styles/global.css'

import { Analytics } from '@vercel/analytics/react'
import Announcement from 'components/Announcement'
import SideBar from 'components/SideBar'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

import Footer from '../components/Footer'
import Header from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Header />
        {/* <Ad /> */}
        <div className="m-auto  mt-10 sm:max-w-3xl">
          <Component {...pageProps} />
        </div>
        <Analytics />
        <div className="fixed bottom-0 mt-20 w-full flex-grow"></div>
      </ThemeProvider>
    </>
  )
}
