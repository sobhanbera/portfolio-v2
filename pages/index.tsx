import type {NextPage} from 'next'
import {useEffect, useState} from 'react'
import {motion} from 'framer-motion'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    const [color, setColor] = useState('black')

    const listenScrollEvent = e => {
        if (window.scrollY > 400) {
            setColor('black')
        } else {
            setColor('white')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])

    return (
        <motion.div
            animate={{
                background: color,
            }}
            className={styles.container}>
            asdf
        </motion.div>
    )
}

export default Home
