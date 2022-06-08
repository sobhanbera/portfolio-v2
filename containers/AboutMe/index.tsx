import React from 'react'
import Link from 'next/link'

import 'aos/dist/aos.css'

import styles from '../../styles/containers/aboutme.module.scss'
import {CursorLover} from '../../components'
import {ABOUT_ME_STRING} from '../../constants'

const ABOUT_ME_TEXT = `
Hello Geeks, I'm Sobhan Bera! I hold a deep interest in Programming, especially in designing software. I am currently a professional full-stack web developer and full-stack android developer. At the time, I work for different clients to create and enhance their products.
\nExcept for this, I enjoy guiding and helping individuals who got stuck in any programming related problem. I have assisted many students in getting started with coding. I have also guided them to learn Git/GitHub from scratch.
\nMoreover, I like to read books. I also practice improving my cubing skills (Wanna watch me solve it? or I shouldn't have told this). And besides this I also enjoy cycling.
`

const ABOUT_ME_TEXT1 = `Hello Geeks, I'm Sobhan Bera! I hold a deep interest in Programming, especially in designing software. I am currently a professional full-stack web developer and full-stack android developer. At the time, I work for different clients to create and enhance their products.`
const ABOUT_ME_TEXT2 = `Except for this, I enjoy guiding and helping individuals who got stuck in any programming related problem. I have assisted many students in getting started with coding. I have also guided them to learn Git/GitHub from scratch.`
const ABOUT_ME_TEXT3 = `Moreover, I like to read books. I also practice improving my cubing skills (Wanna watch me solve it? or I shouldn't have told this). And besides this I also enjoy cycling.`

export default function AboutMe() {
    return (
        <div className={styles.aboutMeContainer} id={ABOUT_ME_STRING}>
            <div className={styles.aboutMeWrapper}>
                <div className={styles.aboutMeHeader}>
                    <p className={styles.line}></p>
                    <p className={styles.aboutMeHeading}>{'About Me '}</p>
                    <p className={styles.line}></p>
                </div>

                <div className={styles.description}>
                    <p className={styles.aboutMeText} data-aos="fade-up">
                        {ABOUT_ME_TEXT1}
                    </p>

                    <p className={styles.aboutMeText} data-aos="fade-up">
                        {ABOUT_ME_TEXT2}
                    </p>

                    <p className={styles.aboutMeText} data-aos="fade-up">
                        {ABOUT_ME_TEXT3}
                    </p>
                </div>
                <div></div>
            </div>
        </div>
    )
}
