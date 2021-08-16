import Router from 'next/router'

import { useEffect, useState, useContext } from 'react'
import MenuState from '@/context/menu/MenuState'
import ProgramsState from '@/context/programs/ProgramsState'

import TagManager from 'react-gtm-module'

import { DefaultSeo } from 'next-seo'
import SEO from '../seo.config'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { prod, gtmId } from '@/config/index'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import '@/styles/app.sass'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

    // console.log(document.referrer)

    NProgress.configure({
      showSpinner: false
    })

    const start = () => {
      NProgress.start()
      setLoading(true)
    }
    const end = () => {
      NProgress.done()
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  if (prod) {
    console.log = function () {}
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <ProgramsState>
        <MenuState>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </MenuState>
      </ProgramsState>
    </>
  )
}

export default MyApp
