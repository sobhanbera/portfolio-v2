import Head from 'next/head'

import MyBlogs from '../../containers/MyBlogs'
import {ThemeBackgroundColors, useThemeSystem} from '../../contexts/ThemeSystem'

export default function BlogsListPage() {
    const {theme} = useThemeSystem()

    return (
        <div>
            <Head>
                <title>Blogs by Sobhan Bera</title>
                <meta
                    name="theme-color"
                    content={ThemeBackgroundColors[theme]}
                />
                s
            </Head>

            <MyBlogs limit={1000} showMoreBlogs={false} />
        </div>
    )
}
