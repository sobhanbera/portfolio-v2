import type {AppProps} from 'next/app'
import {useEffect} from 'react'

import aos from 'aos'

import '../styles/globals.scss'
import '../styles/theming.scss'

import ThemeSystem from '../contexts/ThemeSystem'

function MyApp({Component, pageProps}: AppProps) {
    useEffect(() => {
        aos.init({
            duration: 1828.3268, // birthday digits (everybody?) :)...
            initClassName: 'sb-initial-anim',
            once: false,
            mirror: true,
            debounceDelay: 100,
            throttleDelay: 100,
        })
    }, [])

    return (
        <ThemeSystem>
            <Component {...pageProps} />
        </ThemeSystem>
    )
}

export default MyApp
