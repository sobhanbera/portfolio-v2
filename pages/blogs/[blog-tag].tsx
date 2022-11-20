import React, {ReactElement, useEffect, useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
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

const BareBlogData: Blog = {
    id: '',
    title: '',
    body: '',
    shortDescription: '',
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
                <ReactMarkdown
                    components={{
                        pre({children}) {
                            return <>{children}</>
                        },
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '')

                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={
                                        theme.includes('light')
                                            ? LightCodeTheme
                                            : DarkCodeTheme
                                    }
                                    language={match[1]}
                                    PreTag="p"
                                    {...props}>
                                    {String(children).replace(/\n$/, '')}{' '}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            )
                        },

                        p({children}) {
                            return <p>{children}</p>
                        },

                        strong({children}) {
                            return <strong>{children}</strong>
                        },

                        a({href, children}) {
                            return (
                                <Link href={String(href)}>
                                    <a target="_blank">{children}</a>
                                </Link>
                            )
                        },

                        table({children}) {
                            return <table>{children}</table>
                        },
                    }}
                    remarkPlugins={[remarkGfm]}
                    className={`${markdownStyle.markdown} ${
                        !theme ? markdownStyle.dark : markdownStyle.light
                    }`}>
                    {blogData.body}
                </ReactMarkdown>
            </div>
        </div>
    )
}
