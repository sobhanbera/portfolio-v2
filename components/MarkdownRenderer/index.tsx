import React, {ReactElement} from 'react'
import Link from 'next/link'

import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

import markdownStyle from '../../styles/components/markdown.module.scss'

import {LightCodeTheme, DarkCodeTheme} from '../../contents/themes'
import {useThemeSystem} from '../../contexts/ThemeSystem'

interface MarkdownRendererProps {
    body: any
    includeBottomSpacing: boolean
}
export default function MarkdownRenderer({
    body,
    includeBottomSpacing = false,
}: MarkdownRendererProps): ReactElement {
    const {theme} = useThemeSystem()

    return (
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
            {body}
        </ReactMarkdown>
    )
}
