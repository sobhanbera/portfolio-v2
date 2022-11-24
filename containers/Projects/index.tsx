import React, {ReactNode} from 'react'
import Link from 'next/link'

import 'aos/dist/aos.css'

import styles from '../../styles/containers/project.module.scss'
import {MY_PROJECTS_STRING} from '../../constants'
import {ProjectsList} from '../../contents/projects'
import {
    CodeSvg,
    AndroidSvg,
    WebsiteSvg,
    GitHubSvg,
    PlaystoreSvg,
} from '../../components'

export default function Projects() {
    return (
        <div className={styles.projectContainer} id={MY_PROJECTS_STRING}>
            <div className={styles.projectWrapper}>
                <div className={styles.projectHeader}>
                    <p className={styles.line}></p>
                    <p className={styles.projectHeading}>{'Projects'}</p>
                    <p className={styles.line}></p>
                </div>

                <div className={styles.projectListContainer}>
                    {ProjectsList.map((project, _) => {
                        // console.log(
                        //     project.playstore ? 'AA' + project.title : 'SSS',
                        // )

                        console.log(project.playstore, project.title)

                        return (
                            <Link
                                key={`${project.id}-${_}`}
                                href={project.link}>
                                <a
                                    target={'_blank'}
                                    className={styles.projectCard}>
                                    <div className={styles.projectCardHolder}>
                                        <div className={styles.projectInitials}>
                                            <div
                                                className={
                                                    styles.projectHeader
                                                }>
                                                <div
                                                    className={
                                                        styles.headerIcon
                                                    }>
                                                    {project.iconType ===
                                                    'web' ? (
                                                        <WebsiteSvg />
                                                    ) : project.iconType ===
                                                      'android' ? (
                                                        <AndroidSvg />
                                                    ) : (
                                                        <CodeSvg />
                                                    )}
                                                </div>

                                                <div
                                                    className={
                                                        styles.actionButtons
                                                    }>
                                                    <div
                                                        className={
                                                            styles.hrefButtons
                                                        }>
                                                        <a
                                                            href={project.link}
                                                            target={'_blank'}
                                                            rel="noreferrer">
                                                            <WebsiteSvg />
                                                        </a>
                                                    </div>

                                                    {project?.github ? (
                                                        <div
                                                            className={
                                                                styles.hrefButtons
                                                            }>
                                                            <a
                                                                href={
                                                                    project.github
                                                                }
                                                                target={
                                                                    '_blank'
                                                                }
                                                                rel="noreferrer">
                                                                <GitHubSvg />
                                                            </a>
                                                        </div>
                                                    ) : null}

                                                    {project?.playstore ? (
                                                        <div
                                                            className={
                                                                styles.hrefButtons
                                                            }>
                                                            <a
                                                                className={
                                                                    styles.playstoreSvg
                                                                }
                                                                href={
                                                                    project.playstore
                                                                }
                                                                target={
                                                                    '_blank'
                                                                }
                                                                rel="noreferrer">
                                                                <PlaystoreSvg />
                                                            </a>
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <p
                                                className={
                                                    styles.projectTitleText
                                                }>
                                                {project.title}
                                            </p>

                                            <p
                                                className={
                                                    styles.projectDescriptionText
                                                }>
                                                {project.description}
                                            </p>
                                        </div>

                                        <div
                                            className={
                                                styles.projectTechstacks
                                            }>
                                            {project.techstacks.map(
                                                (techstack, _) => {
                                                    return (
                                                        <span
                                                            key={`${techstack}-${_}`}>
                                                            {techstack}
                                                        </span>
                                                    )
                                                },
                                            )}
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
