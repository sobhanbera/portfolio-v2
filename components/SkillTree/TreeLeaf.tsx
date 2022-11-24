import React from 'react'

import 'aos/dist/aos.css'

/**
 * this component renders the single node or leaf
 * of the tree
 * here the tree could be nested
 */
interface TreeLeafProps {
    title: string
}
export default function TreeLeaf({title}: TreeLeafProps) {
    return (
        <li>
            <span data-aos="fade-up">{title}</span>
        </li>
    )
}
