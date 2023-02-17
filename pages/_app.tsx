import 'styles/global.css'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Jost } from '@next/font/google'
import { AppProps } from 'next/app'
import SideBar from 'components/SideBar'
import Advert from 'components/Advert'

const sans = Jost({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
})

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
        <Advert />
        <div className="m-auto sm:max-w-3xl">
          <Component {...pageProps} />
        </div>
        <Footer />
      </ThemeProvider>
    </>
  )
}
