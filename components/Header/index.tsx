import Link from 'next/link'

import styles from '../../styles/components/header.module.scss'

import {Logo} from '..'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.mainHeader}>
                <div className={styles.logoWrapper}>
                    <Link href="/">
                        <a>
                            <Logo
                                letterColor={'#64daff'}
                                strokeColor={'#64daff'}
                            />
                        </a>
                    </Link>
                </div>

                <div className={styles.navigations}></div>
            </div>
        </header>
    )
}
