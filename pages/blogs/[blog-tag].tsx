import React, {ReactElement, useEffect, useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'

import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

import styles from '../../styles/pages/blogcontent.module.scss'
import markdownStyle from '../../styles/components/markdown.module.scss'

import {Blog} from '../../modals/blogs'
import {BlogsList} from '../../contents/blogs'
import {ThemeBackgroundColors, useThemeSystem} from '../../contexts/ThemeSystem'
import {LightCodeTheme, DarkCodeTheme} from '../../contents/themes'
import dayjs from 'dayjs'
import {MarkdownRenderer} from '../../components'

const BareBlogData: Blog = {
    id: '',
    title: '',
    body: '',
    bodyHeader: '',
    shortDescription: '',
    readTime: 0,
    timestamp: 0,
    artwork: '',
    pageTitle: '',
    link: '',
    mediumLink: '',
    property: '',
    tags: [],
}
interface Props {}
export default function ActualBlogPage({}: Props): ReactElement {
    const {asPath} = useRouter()
    const {theme} = useThemeSystem()

    // if that particular blog exists or not, if not then show the error page
    const [noBlogExists, setNoBlogExists] = useState(false)
    // the page title to show
    const [pageTitle, setPageTitle] = useState('Blogs | Sobhan Bera')
    // the blog data
    const [blogData, setBlogData] = useState<Blog>(BareBlogData)

    const parsedDate = dayjs(blogData.timestamp).format('MMM DD, YYYY')

    // loadBlog function load the blog from the local data
    // first of all the path of the website should contain a query parameter
    // "data": with any value which should be an id of any blog
    // then we will filter the blogs and load one of them which is exact the id of the provided id
    useEffect(() => {
        const pathOfBlog = asPath.replace('/blogs/', '')
        const blogData: Blog[] = BlogsList.filter(
            (blog: Blog) => blog.link === pathOfBlog,
        )

        if (blogData.length > 0) {
            setNoBlogExists(false)
            setPageTitle(blogData[0].pageTitle)
            setBlogData(blogData[0])
        } else {
            setNoBlogExists(true)
            setPageTitle('Blogs | Sobhan Bera')
            setBlogData(BareBlogData)
        }
    }, [asPath])

    return (
        <div className={styles.blogPage}>
            <Head>
                <title>{pageTitle}</title>

                <meta
                    name="theme-color"
                    content={ThemeBackgroundColors[theme]}
                />
            </Head>

            <div className={styles.blogContainer}>
                <MarkdownRenderer
                    body={blogData.bodyHeader}
                    includeBottomSpacing={false}
                />

                <p className={styles.blogTimestamp}>
                    <span>{parsedDate}</span>
                    <span> • </span>
                    <span>{`${blogData.readTime} min read`}</span>
                </p>

                <p className={styles.blogTags}>
                    {blogData.tags.map(tag => {
                        return <span key={tag}>{tag}</span>
                    })}
                </p>

                <img
                    className={styles.blogArtwork}
                    src={blogData.artwork}
                    alt="Blog cover image"
                />

                <MarkdownRenderer body={blogData.body} includeBottomSpacing />
            </div>
        </div>
    )
}
