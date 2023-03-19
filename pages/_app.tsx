import 'styles/global.css'

import { Roboto } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react';
import SideBar from 'components/SideBar'
import { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from 'next-themes'

import Footer from '../components/Footer'
import Header from '../components/Header'

const sans = Roboto({
  variable: '--font-sen',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

const MyLoader = () => {
  return ('')
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-sans: ${sans.style.fontFamily};
          }
        `}
      </style>
      
      <ThemeProvider enableSystem={true} attribute="class">
        <SideBar />
        <Header />
        {/* <Ad /> */}
        <div className="m-auto  sm:max-w-3xl mt-10">
          <Component {...pageProps} />
        </div>
        <Analytics />
        <div className='flex-grow mt-20 w-full fixed bottom-0'>
        <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}
