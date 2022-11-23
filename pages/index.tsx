import {} from 'react'
import Head from 'next/head'

// import gsap from 'gsap'
// import {motion} from 'framer-motion'

import styles from '../styles/pages/landing.module.scss'
import Introduction from '../containers/Intro'
import AboutMe from '../containers/AboutMe'
import MyBlogs from '../containers/MyBlogs'
import SkillsSection from '../containers/SkillsSection'
// import Projects from '../containers/Projects'
import ContactMe from '../containers/ContactMe'
import {ThemeBackgroundColors, useThemeSystem} from '../contexts/ThemeSystem'
import {FloatingFooter} from '../components'

export default function Home() {
    const {theme} = useThemeSystem()

    return (
        <div>
            <Head>
                <title>
                    Sobhan Bera • Software Developer | Competitive Programmer |
                    Freelancer | Student
                </title>

                <meta
                    name="theme-color"
                    content={ThemeBackgroundColors[theme]}
                />
            </Head>

            <Introduction />

            <AboutMe />

            <SkillsSection />

            <MyBlogs limit={3} showMoreBlogs={true} />

            {/* <Projects /> */}

            <ContactMe />

            {/* footer which floats */}
            <FloatingFooter />
        </div>
    )
}
