import React from 'react'

import 'aos/dist/aos.css'

/**
 * this component render the sub-tree or the branch of trees sub furthure more
 * nested
 */
interface TreeLeafProps {
    title: string
    children: React.ReactNode
}
export default function TreeBranch({title, children}: TreeLeafProps) {
    return (
        <li data-aos="fade-up">
            <span data-aos="fade-up">{title}</span>

            <ul data-aos="fade-up">{children}</ul>
        </li>
    )
}
