import {useEffect, useRef} from 'react'
import Head from 'next/head'

import gsap from 'gsap'
import {motion} from 'framer-motion'

import styles from '../styles/pages/landing.module.scss'
import {
    Footer,
    Greeting,
    Header,
    InfiniteLoopingScrollView,
} from '../components'
import Introduction from '../containers/Intro'
import AboutMe from '../containers/AboutMe'
import MyBlogs from '../containers/MyBlogs'
import ContactMe from '../containers/ContactMe'

export default function Home() {
    return (
        <div className={styles.mainRoot}>
            <Head>
                <title>
                    Sobhan Bera • Developer • Student • Competitive Programmer •
                    Freelancer
                </title>
            </Head>

            <Greeting />

            {/* <InfiniteLoopingScrollView verticalBackups={4}> */}
            <main className={styles.root}>
                <Header />

                <div className={styles.mainContainer}>
                    <Introduction />

                    <AboutMe />

                    <MyBlogs />

                    {/* <ExperienceSection /> */}

                    {/* <Projects /> */}

                    <ContactMe />
                </div>

                <Footer />
            </main>
            {/* </InfiniteLoopingScrollView> */}
        </div>
    )
}
