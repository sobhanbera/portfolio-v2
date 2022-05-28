import Link from 'next/link'

import styles from '../../styles/components/header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.mainHeader}>
                <div className={styles.logoWrapper}>
                    <Link href="/">
                        <a></a>
                    </Link>
                </div>

                <div className={styles.navigations}></div>
            </div>
        </header>
    )
}
