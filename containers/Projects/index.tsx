import React from 'react'

import 'aos/dist/aos.css'

import styles from '../../styles/containers/project.module.scss'
import {MY_PROJECTS_STRING} from '../../constants'
import {ProjectsList} from '../../contents/projects'
import {ProjectCard} from '../../components'

export default function Projects() {
    return (
        <div className={styles.projectContainer} id={MY_PROJECTS_STRING}>
            <div className={styles.projectWrapper}>
                <div className={styles.projectHeader} data-aos="fade-up">
                    <p className={styles.line}></p>
                    <p className={styles.projectHeading}>{'Projects'}</p>
                    <p className={styles.line}></p>
                </div>

                <div className={styles.projectListContainer}>
                    {ProjectsList.map((project, _) => {
                        return (
                            <ProjectCard
                                projectData={project}
                                key={`${project.id}-${_}`}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
