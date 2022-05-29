import {useEffect, useRef} from 'react'

import gsap from 'gsap'
import {motion} from 'framer-motion'

import styles from '../styles/pages/landing.module.scss'
import {
    Footer,
    Greeting,
    Header,
    InfiniteLoopingScrollView,
} from '../components'

export default function Home() {
    return (
        <div className={styles.mainRoot}>
            <Greeting />

            {/* <InfiniteLoopingScrollView verticalBackups={4}> */}
            <main className={styles.root}>
                <Header />

                {/* <MainContainer /> */}

                <Footer />
            </main>
            {/* </InfiniteLoopingScrollView> */}
        </div>
    )
}
