import React from 'react'

import 'aos/dist/aos.css'
import TreeLeaf from './TreeLeaf'
import TreeBranch from './TreeBranch'

export default function DevelopmentSkillsTree() {
    return (
        <ul data-aos="fade-up">
            {/* web development skills */}
            <TreeBranch title="Website">
                <TreeBranch title="Frontend">
                    <TreeLeaf title="Next" />
                    <TreeLeaf title="React" />
                </TreeBranch>

                <TreeBranch title="̆Backend">
                    <TreeLeaf title="Express" />
                </TreeBranch>
            </TreeBranch>

            {/* android development skills */}
            <TreeBranch title="Android Apps">
                <TreeLeaf title="React Native" />
            </TreeBranch>

            {/* git and github */}
            <TreeBranch title="Version Control">
                <TreeLeaf title="Git" />

                <TreeLeaf title="GitHub" />
            </TreeBranch>

            {/* databases */}
            <TreeBranch title="Databases">
                <TreeLeaf title="MySQL" />

                <TreeLeaf title="Firebase" />
            </TreeBranch>

            {/* containers */}
            <TreeBranch title="DevOps">
                <TreeLeaf title="Docker" />

                <TreeLeaf title="Kubernetes" />

                <TreeLeaf title="CI/CD" />
            </TreeBranch>
        </ul>
    )
}
