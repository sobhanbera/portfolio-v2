import React, {useLayoutEffect, useCallback, useState, useRef} from 'react'

import styles from '../../styles/components/infiniteLoopingScrollView.module.scss'

interface InfiniteLoopingScrollViewProps {
    verticalBackups: number // its value must be greater than zero have a smooth loop
    outerStyle?: React.CSSProperties // style for the outer container
    innerStyle?: React.CSSProperties // style for the children containing container
    children: React.ReactNode // the main container
}

export default function InfiniteLoopingScrollView(
    props: InfiniteLoopingScrollViewProps,
) {
    // height of the main container which will contains all the children of the parent component
    const [height, setHeight] = useState<number>(0)

    // main container reference
    const contentRef = useRef<HTMLDivElement | null>(null)
    // the container which will be looped in actual view port
    const scrollRef = useRef<HTMLDivElement | null>(null)

    // number of the children to render on both top and bottom of the main children
    // this will act as virtual components
    const backupHeight = height * props.verticalBackups

    const handleScroll = useCallback(() => {
        if (scrollRef.current) {
            const scroll = scrollRef.current.scrollTop
            if (scroll < backupHeight || scroll >= backupHeight + height) {
                scrollRef.current.scrollTop = backupHeight + (scroll % height)
            }
        }
    }, [height])

    // setting the current viewing height to the main children's
    useLayoutEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.offsetHeight)
            // this line is not actually commented, since this component is not in use and this line is providing error while building, so...
            // if (scrollRef) scrollRef?.current?.scrollTop = backupHeight
        }
    })

    return (
        <div
            className={styles.infiniteLoopingScrollViewOuterLoop}
            style={props.outerStyle}>
            <div
                className={styles.infiniteLoopingScrollViewInnerLoop}
                ref={scrollRef}
                style={{
                    height,
                    ...props.innerStyle,
                }}
                onScroll={handleScroll}>
                {/* rendering the backup components at the top of the main container */}
                {/* virtual components to set the illusion of looping */}
                {Array(props.verticalBackups)
                    .fill(0)
                    .map((node, index) => (
                        <div key={index}>{props.children}</div>
                    ))}

                {/* the main children */}
                <div ref={contentRef}>{props.children}</div>

                {/* rendering the backup components at the bottom of the main container */}
                {/* virtual components to set the illusion of looping */}
                {Array(props.verticalBackups)
                    .fill(0)
                    .map((node, index) => (
                        <div key={index}>{props.children}</div>
                    ))}
            </div>
        </div>
    )
}
