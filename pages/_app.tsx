import {useEffect} from 'react'
import Head from 'next/head'
import type {AppProps} from 'next/app'

import aos from 'aos'

import '../styles/globals.scss'
import '../styles/theming.scss'
import styles from '../styles/globals.module.scss'

import {
    Header,
    FloatingFooter,
    Footer,
    MetaDatas,
    Greeting,
} from '../components'
import ThemeSystem from '../contexts/ThemeSystem'

function MyApp({Component, pageProps}: AppProps) {
    useEffect(() => {
        aos.init({
            duration: 1828.3268, // birthday digits (everybody?) :)...
            initClassName: 'sb-initial-anim',
            once: false,
            mirror: true,
            debounceDelay: 100,
            throttleDelay: 100,
        })
    }, [])

    return (
        <ThemeSystem>
            <div className={styles.mainRoot}>
                <Head>
                    <title>Sobhan Bera</title>

                    <title>
                        Sobhan Bera • Software Developer | Competitive
                        Programmer | Freelancer | Student
                    </title>

                    <MetaDatas />
                </Head>

                {/* greeting to be in the page */}
                <Greeting />

                {/* <InfiniteLoopingScrollView verticalBackups={4}> */}
                <main className={styles.root}>
                    <Header />

                    {/* main component of the page */}

                    <div className={styles.mainContainer}>
                        <Component {...pageProps} />
                    </div>

                    <div>
                        {/* <FloatingFooter /> */}

                        <Footer />
                    </div>
                </main>

                {/* </InfiniteLoopingScrollView> */}
            </div>
        </ThemeSystem>
    )
}

export default MyApp
