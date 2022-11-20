import React from 'react'
import Link from 'next/link'

import 'aos/dist/aos.css'

import styles from '../../styles/containers/myblogs.module.scss'
import {MY_BLOGS_STRING} from '../../constants'
import {BlogsList} from '../../contents/blogs'
import {BlogCard, CursorLover} from '../../components'

interface MyBlogsProps {
    limit: number
    showMoreBlogs: boolean
}
export default function MyBlogs({
    limit = 3,
    showMoreBlogs = false,
}: MyBlogsProps) {
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
                    {BlogsList.slice(0, limit).map(blog => {
                        return (
                            <BlogCard
                                blogData={blog}
                                key={`${blog.id}-${blog.link}`}
                            />
                        )
                    })}
                </div>

                {showMoreBlogs && (
                    <div
                        className={styles.moreBlogsButtonHolder}
                        data-aos="fade-up">
                        <button className={styles.moreBlogsButton}>
                            <Link href={MY_BLOGS_STRING}>
                                <a href={MY_BLOGS_STRING}>{'Read More!'}</a>
                            </Link>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
