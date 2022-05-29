import React from 'react'
import Link from 'next/link'

import styles from '../../styles/containers/intro.module.scss'
import 'aos/dist/aos.css'

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
                    <Link href="">
                        <a>{'Download my Resume!'}</a>
                    </Link>
                </button>
            </div>
        </div>
    )
}
