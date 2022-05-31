import Link from 'next/link'

import styles from '../../styles/components/footer.module.scss'
import {
    COPYRIGHT_TEXT,
    GITHUB_URL,
    INSTAGRAM_URL,
    LINKEDIN_URL,
    OLD_PORTFOLIO_URL,
} from '../../constants'
import {useThemeSystem} from '../../contexts/ThemeSystem'

export default function Footer() {
    const {themeName, randomizeTheme} = useThemeSystem()
    const scrollToTop = () => window.scrollTo(0, 0)

    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.copyrightTextContainer}>
                    <p>{COPYRIGHT_TEXT}</p>
                </div>

                <div className={styles.socialLinksContainer}>
                    <p>
                        <Link href={GITHUB_URL}>
                            <a target={'_blank'}>GitHub</a>
                        </Link>
                    </p>

                    <p>
                        <Link href={LINKEDIN_URL}>
                            <a target={'_blank'}>Linkedin</a>
                        </Link>
                    </p>

                    <p>
                        <Link href={INSTAGRAM_URL}>
                            <a target={'_blank'}>Instagram</a>
                        </Link>
                    </p>

                    <p>
                        <Link href={OLD_PORTFOLIO_URL}>
                            <a target={'_blank'}>Old Portfolio</a>
                        </Link>
                    </p>
                </div>

                <div className={styles.backToTopButtonContainer}>
                    <p
                        onClick={randomizeTheme}
                        className={styles.randomizeThemeBtn}>
                        {`Theme - ${themeName}`}
                    </p>
                    <p onClick={scrollToTop}>Back To Top</p>
                </div>
            </div>
        </div>
    )
}
