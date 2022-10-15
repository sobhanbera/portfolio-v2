import Link from 'next/link'

import styles from '../../styles/components/floatingfooter.module.scss'
import {
    EMAIL_ID_REDIRECT_URL,
    // COPYRIGHT_TEXT,
    GITHUB_URL,
    INSTAGRAM_URL,
    LINKEDIN_URL,
    OLD_PORTFOLIO_URL,
} from '../../constants'
import {
    EmailSvg,
    GitHubSvg,
    InstagramSvg,
    LinkedinSvg,
    // TwitterSvg,
    WebsiteSvg,
} from '../Svgs'

export default function FloatingFooter() {
    return (
        <div className={styles.floatingFooter}>
            <div className={styles.floatingFooterContainer}>
                <div className={styles.floatingFooterLeft}>
                    <ul>
                        <li>
                            <Link href={EMAIL_ID_REDIRECT_URL}>
                                <a className={styles.floatingFooterLink}>
                                    <EmailSvg />
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={GITHUB_URL}>
                                <a className={styles.floatingFooterLink}>
                                    <GitHubSvg />
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={LINKEDIN_URL}>
                                <a className={styles.floatingFooterLink}>
                                    <LinkedinSvg />
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={INSTAGRAM_URL}>
                                <a className={styles.floatingFooterLink}>
                                    <InstagramSvg />
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href={OLD_PORTFOLIO_URL}>
                                <a className={styles.floatingFooterLink}>
                                    <WebsiteSvg />
                                </a>
                            </Link>
                        </li>

                        <li>
                            <div className={styles.floatingVerticalLine}></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
