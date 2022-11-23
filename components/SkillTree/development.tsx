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

                <TreeBranch title="Backend">
                    <TreeLeaf title="Express" />
                </TreeBranch>
            </TreeBranch>

            {/* android development skills */}
            <TreeBranch title="Android Apps">
                <TreeLeaf title="React Native" />
            </TreeBranch>

            {/* git and github */}
            <TreeBranch title="Version Control">
                <TreeBranch title="Git">
                    <TreeLeaf title="GitHub" />
                </TreeBranch>
            </TreeBranch>

            {/* databases */}
            <TreeBranch title="Databases">
                <TreeBranch title="RDBMS">
                    <TreeLeaf title="MySQL" />
                </TreeBranch>

                <TreeLeaf title="Firebase" />
            </TreeBranch>

            {/* containers */}
            <TreeBranch title="DevOps">
                <TreeBranch title="Docker">
                    <TreeLeaf title="CLI" />

                    <TreeLeaf title="Kubernetes" />
                </TreeBranch>

                <TreeLeaf title="CI/CD" />
            </TreeBranch>

            {/* clouds services */}
            <TreeBranch title="Cloud">
                <TreeLeaf title="GCP" />

                <TreeLeaf title="AWS" />
            </TreeBranch>
        </ul>
    )
}
