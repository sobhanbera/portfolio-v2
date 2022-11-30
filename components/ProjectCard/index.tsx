import Link from 'next/link'

import styles from '../../styles/components/projectcard.module.scss'
import {ProjectObject} from '../../modals/blogs'
import {AndroidSvg, CodeSvg, GitHubSvg, PlaystoreSvg, WebsiteSvg} from '../Svgs'

interface ProjectCardProps {
    projectData: ProjectObject
}
export default function ProjectCard({projectData}: ProjectCardProps) {
    const {
        // id,
        title,
        description,
        techstacks,
        iconType,
        link,
        github,
        playstore,
        // org,
        // year,
        // orgURL,
        // otherLink,
    } = projectData

    return (
        <Link href={link}>
            <a target={'_blank'} className={styles.projectCard}>
                <div className={styles.projectCardHolder} data-aos="fade-up">
                    <div className={styles.projectInitials}>
                        <div className={styles.projectHeader}>
                            <div className={styles.headerIcon}>
                                {iconType === 'web' ? (
                                    <WebsiteSvg />
                                ) : iconType === 'android' ? (
                                    <AndroidSvg />
                                ) : (
                                    <CodeSvg />
                                )}
                            </div>

                            <div className={styles.actionButtons}>
                                <div className={styles.hrefButtons}>
                                    <a
                                        href={link}
                                        target={'_blank'}
                                        rel="noreferrer">
                                        <WebsiteSvg />
                                    </a>
                                </div>

                                {github ? (
                                    <div className={styles.hrefButtons}>
                                        <a
                                            href={github}
                                            target={'_blank'}
                                            rel="noreferrer">
                                            <GitHubSvg />
                                        </a>
                                    </div>
                                ) : null}

                                {playstore ? (
                                    <div className={styles.hrefButtons}>
                                        <a
                                            className={styles.playstoreSvg}
                                            href={playstore}
                                            target={'_blank'}
                                            rel="noreferrer">
                                            <PlaystoreSvg />
                                        </a>
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        <p className={styles.projectTitleText}>{title}</p>

                        {/* <p className={styles.projectYear}>{year}</p> */}

                        <p className={styles.projectDescriptionText}>
                            {description}
                        </p>
                    </div>

                    <div className={styles.projectTechstacks}>
                        {techstacks.map((techstack, _) => {
                            return (
                                <span key={`${techstack}-${_}`}>
                                    {techstack}
                                </span>
                            )
                        })}
                    </div>
                </div>
            </a>
        </Link>
    )
}
