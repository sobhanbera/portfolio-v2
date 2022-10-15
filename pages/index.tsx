import {} from 'react'
import Head from 'next/head'

// import gsap from 'gsap'
// import {motion} from 'framer-motion'

import styles from '../styles/pages/landing.module.scss'
import {
    Footer,
    FloatingFooter,
    Greeting,
    Header,
    // InfiniteLoopingScrollView,
} from '../components'
import Introduction from '../containers/Intro'
import AboutMe from '../containers/AboutMe'
import MyBlogs from '../containers/MyBlogs'
import SkillsSection from '../containers/SkillsSection'
// import Projects from '../containers/Projects'
import ContactMe from '../containers/ContactMe'

export default function Home() {
    return (
        <div className={styles.mainRoot}>
            <Head>
                <title>Sobhan Bera • Software Developer</title>
            </Head>

            <Greeting />

            {/* <InfiniteLoopingScrollView verticalBackups={4}> */}
            <main className={styles.root}>
                <Header />

                <div className={styles.mainContainer}>
                    <Introduction />

                    <AboutMe />

                    <MyBlogs />

                    <SkillsSection />

                    {/* <Projects /> */}

                    <ContactMe />
                </div>

                <div>
                    <FloatingFooter />

                    <Footer />
                </div>
            </main>
            {/* </InfiniteLoopingScrollView> */}
        </div>
    )
}
