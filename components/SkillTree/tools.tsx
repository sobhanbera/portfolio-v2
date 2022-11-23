import React from 'react'

import 'aos/dist/aos.css'
import TreeBranch from './TreeBranch'
import TreeLeaf from './TreeLeaf'

export default function ToolSkillsTree() {
    return (
        <ul>
            {/* text editors I use */}
            <TreeBranch title="Text Editor">
                <TreeLeaf title="Neovim" />
            </TreeBranch>

            {/* integrated development environment tools */}
            <TreeBranch title="IDEs">
                <TreeLeaf title="VS Code" />
                <TreeLeaf title="Android Studio" />
            </TreeBranch>

            {/* terminal tools */}
            <TreeBranch title="Terminal">
                <TreeLeaf title="Iterm" />
                <TreeLeaf title="Zsh+Tmux" />
            </TreeBranch>

            {/* ui/ux tools */}
            <TreeBranch title="UI">
                <TreeLeaf title="Figma" />
                <TreeLeaf title="Sketch" />
                <TreeLeaf title="Adobe XD" />
            </TreeBranch>

            {/* operating systems */}
            <TreeBranch title="OS">
                <TreeLeaf title="Linux" />
                <TreeLeaf title="MacOS" />
            </TreeBranch>

            {/* deployment related tools */}
            <TreeBranch title="Deployment">
                <TreeLeaf title="Vercel" />
                <TreeLeaf title="GPages" />
            </TreeBranch>
        </ul>
    )
}
