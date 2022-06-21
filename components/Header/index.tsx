import React, {useEffect, useRef, useState} from 'react'
import Link from 'next/link'

import {
    ABOUT_ME_TAG,
    CONTACT_ME_TAG,
    GITHUB_URL,
    HOME_URL_OR_STRING,
    HOME_URL_OR_TAG,
    INSTAGRAM_URL,
    LINKEDIN_URL,
    MAX_HEADER_HEIGHT,
    MY_BLOGS_TAG,
    MY_EXPERIENCE_TAG,
    MY_PROJECTS_TAG,
    OLD_PORTFOLIO_URL,
} from '../../constants'

import styles from '../../styles/components/header.module.scss'
import {CursorLover} from '..'
import {useThemeSystem} from '../../contexts/ThemeSystem'

export default function Header() {
    const {randomizeTheme, themeName} = useThemeSystem()

    // var to control a button which toggles meny when header is scrolled above
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    // toggle for showing menu
    const [showMenu, setShowMenu] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            // console.log(window.scrollY > MAX_HEADER_HEIGHT, isScrolled)

            setIsScrolled(window.scrollY > MAX_HEADER_HEIGHT)
        })
    }, [])

    /**
     * all these scroll behavious should be performed under state update
     * functions else greeting scroll controllers are not working that well
     */
    const hideMenu = () => {
        setShowMenu(false)
        // also nomalize the scroll
        document.body.style.overflow = 'scroll'
    }

    /**
     * disable scroling when any kind of meny is opened
     * this useEffect will do the same
     */
    //  useEffect(() => {
    //     // if menu is enabled then disable the scrolling in body
    //     if (showMenu) {
    //         document.body.style.overflow = 'hidden'
    //     } else {
    //         // else enable it
    //         document.body.style.overflow = 'scroll'
    //     }
    // }, [showMenu])

    /**
     * disable scroling when any kind of meny is opened
     * this useEffect will do the same
     *
     * this will be perfomed in toggleMenu function instead of
     * above useEffect for much more elegant state and scroll control
     */
    const toggleMenu = () =>
        setShowMenu(value => {
            // if menu is enabled then disable the scrolling in body
            if (!value) document.body.style.overflow = 'hidden'
            // else enable it
            else document.body.style.overflow = 'scroll'

            return !value
        })

    return (
        <header className={styles.header} id={HOME_URL_OR_STRING}>
            <div className={styles.mainHeader}>
                <div className={styles.logoWrapper}>
                    <CursorLover>
                        <Link href="/">
                            <a>
                                ©
                                <p data-link-alternative="Sobhan Bera">
                                    <span>Designed By Sobhan</span>
                                </p>
                            </a>
                        </Link>
                    </CursorLover>
                </div>

                <div className={styles.navigations}>
                    <ol className={styles.navigationsList}>
                        <CursorLover>
                            <li>
                                <Link href={ABOUT_ME_TAG}>
                                    <a onClick={hideMenu}>About</a>
                                </Link>
                            </li>
                        </CursorLover>
                        <CursorLover>
                            <li>
                                <Link href={MY_BLOGS_TAG}>
                                    <a onClick={hideMenu}>Blogs</a>
                                </Link>
                            </li>
                        </CursorLover>

                        <CursorLover>
                            <li>
                                <Link href={MY_EXPERIENCE_TAG}>
                                    <a onClick={hideMenu}>Experience</a>
                                </Link>
                            </li>
                        </CursorLover>

                        <CursorLover>
                            <li>
                                <Link href={MY_PROJECTS_TAG}>
                                    <a onClick={hideMenu}>Projects</a>
                                </Link>
                            </li>
                        </CursorLover>

                        <CursorLover>
                            <li>
                                <Link href={CONTACT_ME_TAG}>
                                    <a onClick={hideMenu}>Contact</a>
                                </Link>
                            </li>
                        </CursorLover>
                    </ol>

                    <div
                        className={styles.menuIconContainer}
                        onClick={toggleMenu}>
                        <svg
                            // width="100"
                            // height="64"
                            viewBox="0 0 100 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="6" rx="3" />
                            <rect y="29" width="100" height="6" rx="3" />
                            <rect y="58" width="53" height="6" rx="3" />
                        </svg>
                    </div>
                </div>

                <div
                    className={`${styles.menuButton} ${
                        isScrolled || showMenu ? styles.active : styles.inactive
                    }`}
                    onClick={toggleMenu}>
                    <svg
                        className={showMenu ? styles.active : styles.inactive}
                        // width="100"
                        // height="64"
                        viewBox="0 0 100 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="6" rx="3" />
                        <rect y="29" width="100" height="6" rx="3" />
                        <rect y="58" width="53" height="6" rx="3" />
                    </svg>
                </div>

                <div
                    className={`${styles.menuContainer} ${
                        showMenu ? styles.active : styles.inactive
                    }`}>
                    <div className={styles.menuBackdrop}>
                        <div
                            className={styles.menuRightPartition}
                            onClick={() => {
                                // toggle the menu if pressed out of context
                                hideMenu()
                            }}></div>
                        <div className={styles.menuPartition}>
                            <p className={styles.navigationHeading}>
                                Navigations
                            </p>

                            <ol className={styles.navigationsList}>
                                <li>
                                    <Link href={HOME_URL_OR_TAG}>
                                        <a onClick={hideMenu}>Home</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href={ABOUT_ME_TAG}>
                                        <a onClick={hideMenu}>About</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href={MY_BLOGS_TAG}>
                                        <a onClick={hideMenu}>Blogs</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href={MY_EXPERIENCE_TAG}>
                                        <a onClick={hideMenu}>Experience</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href={MY_PROJECTS_TAG}>
                                        <a onClick={hideMenu}>Projects</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href={CONTACT_ME_TAG}>
                                        <a onClick={hideMenu}>Contact</a>
                                    </Link>
                                </li>

                                {/* theme randomizer button in header menu */}
                                <p
                                    className={styles.randomizeThemeBtn}
                                    onClick={randomizeTheme}>
                                    {`Theme - ${themeName}`}
                                </p>
                            </ol>

                            <div className={styles.socialMediaContainer}>
                                <ol className={styles.socialsList}>
                                    <CursorLover>
                                        <li>
                                            <Link href={GITHUB_URL}>
                                                <a target={'_blank'}>GitHub</a>
                                            </Link>
                                        </li>
                                    </CursorLover>
                                    <CursorLover>
                                        <li>
                                            <Link href={LINKEDIN_URL}>
                                                <a target={'_blank'}>
                                                    Linkedin
                                                </a>
                                            </Link>
                                        </li>
                                    </CursorLover>

                                    <CursorLover>
                                        <li>
                                            <Link href={INSTAGRAM_URL}>
                                                <a target={'_blank'}>
                                                    Instagram
                                                </a>
                                            </Link>
                                        </li>
                                    </CursorLover>

                                    <CursorLover>
                                        <li>
                                            <Link href={OLD_PORTFOLIO_URL}>
                                                <a target={'_blank'}>
                                                    Old Portfolio
                                                </a>
                                            </Link>
                                        </li>
                                    </CursorLover>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
