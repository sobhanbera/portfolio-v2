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
                <TreeLeaf title="Iterm2+ZSH" />
                <TreeLeaf title="Tmux" />
            </TreeBranch>

            {/* deployment related tools */}
            <TreeBranch title="Deployment">
                <TreeLeaf title="Vercel" />
                <TreeLeaf title="GitHub Pages" />
            </TreeBranch>
        </ul>
    )
}
