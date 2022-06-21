import React from 'react'
import Link from 'next/link'

import 'aos/dist/aos.css'

import styles from '../../styles/containers/intro.module.scss'
import {RESUME_LOCAL_URL} from '../../constants'

export default function Introduction() {
    return (
        <div className={styles.introContainer}>
            <div className={styles.introWrapper} data-aos="fade-up">
                <p className={styles.greetingText}>{'Hi There, I am ->'}</p>

                <p className={styles.nameText}>{'Sobhan Bera.'}</p>

                <p className={styles.workText}>
                    {'I build stuffs for web & android.'}
                </p>

                <p className={styles.currentStatusText}>
                    {`I'm a full-stack software developer. I build both for web
                    and android devices. Currently, I'm more concentrating on
                    client projects. I love to guide and support others.`}
                </p>

                <button className={styles.resumeDownloadButton}>
                    <Link href={RESUME_LOCAL_URL}>
                        <a href={RESUME_LOCAL_URL} target="_blank" download>
                            {'Download my Resume!'}
                        </a>
                    </Link>
                </button>
            </div>
        </div>
    )
}
