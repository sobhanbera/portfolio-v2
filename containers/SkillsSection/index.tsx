import React from 'react'

import styles from '../../styles/containers/skills.module.scss'
import 'aos/dist/aos.css'
import {MY_EXPERIENCE_STRING} from '../../constants'

export default function SkillsSection() {
    return (
        <div className={styles.skillsContainer} id={MY_EXPERIENCE_STRING}>
            <div className={styles.skillsWrapper}>
                <div className={styles.skillsHeader}>
                    <p className={styles.line}></p>
                    <p className={styles.skillsHeading}>{'Technologies'}</p>
                    <p className={styles.line}></p>
                </div>
            </div>
        </div>
    )
}
