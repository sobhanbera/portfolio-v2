import React from 'react'
import Link from 'next/link'

import 'aos/dist/aos.css'

import styles from '../../styles/containers/myblogs.module.scss'
import {BLOGGING_WEBSITE, MY_BLOGS_STRING} from '../../constants'
import {BlogsList} from '../../modals/blogs'
import {CursorLover} from '../../components'

export default function MyBlogs() {
    return (
        <div className={styles.blogsContainer} id={MY_BLOGS_STRING}>
            <div className={styles.blogsWrapper}>
                <div className={styles.blogsHeader} data-aos="fade-up">
                    <p className={styles.line}></p>
                    <p className={styles.blogsHeading}>
                        {'Contents I have written!'}
                    </p>
                    <p className={styles.line}></p>
                </div>

                <div className={styles.blogDescription} data-aos="fade-up">
                    {BlogsList.map(blog => {
                        const formattedLocalBlogpostTime = new Date(
                            blog.timestamp,
                        ).toDateString()

                        return (
                            <div
                                className={styles.blogCard}
                                key={blog.id}
                                data-aos="fade-up"
                                data-aos-duration="2800">
                                <div className={styles.artworkContainer}>
                                    <img
                                        className={styles.blogArtwork}
                                        src={blog.artwork}
                                    />
                                </div>

                                <div className={styles.contentContainer}>
                                    <p className={styles.blogFeatured}>
                                        {blog.property}
                                    </p>

                                    <p className={styles.blogTitle}>
                                        {blog.title}
                                    </p>

                                    <p className={styles.blogUploadedTime}>
                                        {formattedLocalBlogpostTime}
                                    </p>

                                    <p className={styles.blogShortDesc}>
                                        {blog.shortDescription}
                                    </p>

                                    <p className={styles.blogTags}>
                                        {['Tags:']
                                            .concat(blog.tags)
                                            .map((tag, index) => {
                                                return (
                                                    <span
                                                        key={index}
                                                        className={
                                                            styles.blogTag
                                                        }>
                                                        {tag}
                                                    </span>
                                                )
                                            })}
                                    </p>

                                    <div className={styles.visitButtons}>
                                        <button className={styles.visitButton}>
                                            <a
                                                target={'_blank'}
                                                href={`${BLOGGING_WEBSITE}${blog.link}?data=${blog.id}`}>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    aria-label="clap">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z"></path>
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z"></path>
                                                </svg>
                                            </a>
                                        </button>

                                        <button className={styles.visitButton}>
                                            <a
                                                target={'_blank'}
                                                href={`${BLOGGING_WEBSITE}${blog.link}?data=${blog.id}`}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 30 30">
                                                    <path d="M8.5 7A8.5 8.5 0 108.5 24 8.5 8.5 0 108.5 7zM22 8A4 7.5 0 1022 23 4 7.5 0 1022 8zM28.5 9A1.5 6.5 0 1028.5 22 1.5 6.5 0 1028.5 9z" />
                                                </svg>
                                            </a>
                                        </button>

                                        <button className={styles.visitButton}>
                                            <a
                                                target={'_blank'}
                                                href={blog.mediumLink}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 48 48">
                                                    <path d="M 41.470703 4.9863281 A 1.50015 1.50015 0 0 0 41.308594 5 L 27.5 5 A 1.50015 1.50015 0 1 0 27.5 8 L 37.878906 8 L 22.439453 23.439453 A 1.50015 1.50015 0 1 0 24.560547 25.560547 L 40 10.121094 L 40 20.5 A 1.50015 1.50015 0 1 0 43 20.5 L 43 6.6894531 A 1.50015 1.50015 0 0 0 41.470703 4.9863281 z M 12.5 8 C 8.3754991 8 5 11.375499 5 15.5 L 5 35.5 C 5 39.624501 8.3754991 43 12.5 43 L 32.5 43 C 36.624501 43 40 39.624501 40 35.5 L 40 25.5 A 1.50015 1.50015 0 1 0 37 25.5 L 37 35.5 C 37 38.003499 35.003499 40 32.5 40 L 12.5 40 C 9.9965009 40 8 38.003499 8 35.5 L 8 15.5 C 8 12.996501 9.9965009 11 12.5 11 L 22.5 11 A 1.50015 1.50015 0 1 0 22.5 8 L 12.5 8 z" />
                                                </svg>
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
