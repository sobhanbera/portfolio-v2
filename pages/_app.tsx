import {useEffect} from 'react'
import Head from 'next/head'
import type {AppProps} from 'next/app'
import {useRouter} from 'next/router'
import Script from 'next/script'

import aos from 'aos'

import '../styles/globals.scss'
import '../styles/theming.scss'
import styles from '../styles/globals.module.scss'
import {Header, Footer, MetaDatas, Greeting} from '../components'
import ThemeSystem from '../contexts/ThemeSystem'
import * as gtag from '../lib/gtag'

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter()
    const {asPath} = router

    /**
     * this useEffect is responsible for making the google analytics api call
     * this useEffect makes sure to update the gtag in analytics
     */
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            gtag.pageview(url)
            console.log('TRIGGERED', url)
        }
        /**
         * entereing into the events to call the actual function
         * or initialize it
         */
        router.events.on('routeChangeComplete', handleRouteChange)
        router.events.on('hashChangeComplete', handleRouteChange)
        /**
         * removing the triggers or the events
         */
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
            router.events.off('hashChangeComplete', handleRouteChange)
        }
    }, [router.events])

    useEffect(() => {
        aos.init({
            duration: 1828.3268, // birthday digits (everybody?) :)...
            initClassName: 'sb-initial-anim',
            once: true,
            mirror: true,
            offset: 50,
            debounceDelay: 100,
            throttleDelay: 100,
        })
    }, [])

    return (
        <ThemeSystem>
            <div className={styles.mainRoot}>
                {/* default header for every page */}
                <Head>
                    <title>Sobhan Bera</title>

                    <title>
                        Sobhan Bera • Software Developer | Competitive
                        Programmer | Freelancer | Student
                    </title>

                    {/* this meta data doesn't work as of now, so custom metadata must be provided from all the different pages */}
                    <MetaDatas />
                </Head>

                {/**
                 * greeting to be in the page
                 * but this will only show up when it is the home page
                 **/}
                {asPath === '/' ? <Greeting /> : null}

                <main className={styles.root}>
                    <Header />

                    <div className={styles.mainContainer}>
                        {/* Global Site Tag (gtag.js) - Google Analytics */}
                        <Script
                            strategy="afterInteractive"
                            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                        />
                        <Script
                            id="gtag-init"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${gtag.GA_TRACKING_ID}', {
                                        page_path: window.location.pathname,
                                    });
                                `,
                            }}
                        />

                        {/* main component of the page */}
                        <Component {...pageProps} />
                    </div>

                    {/* separate footer component */}
                    <div>
                        <Footer />
                    </div>
                </main>
            </div>
        </ThemeSystem>
    )
}

export default MyApp
