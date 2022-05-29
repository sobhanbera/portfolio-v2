import type {AppProps} from 'next/app'
import {useEffect} from 'react'

import aos from 'aos'

import '../styles/globals.scss'

function MyApp({Component, pageProps}: AppProps) {
    useEffect(() => {
        aos.init({
            duration: 3000,
            initClassName: 'sb-initial-anim',
            once: false,
            mirror: true,
            debounceDelay: 100,
            throttleDelay: 100,
        })
    }, [])

    return <Component {...pageProps} />
}

export default MyApp
