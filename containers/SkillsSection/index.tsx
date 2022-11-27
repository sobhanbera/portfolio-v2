import React from 'react'

import styles from '../../styles/containers/skills.module.scss'
import 'aos/dist/aos.css'
import {MY_EXPERIENCE_STRING} from '../../constants'
import {
    DevelopmentSkillsTree,
    LanguageSkillsTree,
    ToolSkillsTree,
} from '../../components'

export default function SkillsSection() {
    return (
        <div className={styles.skillsContainer} id={MY_EXPERIENCE_STRING}>
            <div className={styles.skillsWrapper}>
                <div className={styles.skillsHeader} data-aos="fade-up">
                    <p className={styles.line}></p>
                    <p className={styles.skillsHeading}>{'Technologies'}</p>
                    <p className={styles.line}></p>
                </div>

                <div className={styles.skillsContent} data-aos="fade-up">
                    {/* this tree is for the develpment/techstack related skills */}
                    <ul className={styles.skillsTree} data-aos="fade-up">
                        <li data-aos="fade-up">
                            <span
                                className={styles.skillsTreeRoot}
                                data-aos="fade-up">
                                Development
                            </span>

                            <DevelopmentSkillsTree />
                        </li>
                    </ul>

                    {/* tree will display what languages I know */}
                    <ul className={styles.skillsTree} data-aos="fade-up">
                        <li data-aos="fade-up">
                            <span
                                className={styles.skillsTreeRoot}
                                data-aos="fade-up">
                                Languages
                            </span>

                            <LanguageSkillsTree />
                        </li>
                    </ul>

                    {/* this tree will show what tools I use */}
                    <ul className={styles.skillsTree} data-aos="fade-up">
                        <li data-aos="fade-up">
                            <span
                                className={styles.skillsTreeRoot}
                                data-aos="fade-up">
                                Tools
                            </span>

                            <ToolSkillsTree />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
