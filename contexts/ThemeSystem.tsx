import React, {createContext, useContext, useEffect, useState} from 'react'
import Head from 'next/head'

type ThemeTypes =
    | 'dark-default'
    | 'dark-blue'
    | 'dark-pink'
    | 'dark-green'
    | 'dark-yellow'
    | 'dark-red'
    // light themes
    | 'light-default'
    | 'light-blue'
    | 'light-pink'
    | 'light-green'
    | 'light-yellow'
    | 'light-red'
const AvailableThemesArray: ThemeTypes[] = [
    'dark-default',
    'dark-blue',
    'dark-pink',
    'dark-green',
    'dark-yellow',
    'dark-red',
    // light themes
    'light-default',
    'light-blue',
    'light-pink',
    'light-green',
    'light-yellow',
    'light-red',
]
export const ThemesName: Array<{themeCode: ThemeTypes; themeName: string}> = [
    {themeCode: 'dark-default', themeName: 'Dark Default'},
    {themeCode: 'dark-blue', themeName: 'Dark Blue'},
    {themeCode: 'dark-pink', themeName: 'Dark Pink'},
    {themeCode: 'dark-green', themeName: 'Dark Green'},
    {themeCode: 'dark-yellow', themeName: 'Dark Yellow'},
    {themeCode: 'dark-red', themeName: 'Dark Red'},
    {themeCode: 'light-default', themeName: 'Light Default'},
    {themeCode: 'light-blue', themeName: 'Light Blue'},
    {themeCode: 'light-pink', themeName: 'Light Pink'},
    {themeCode: 'light-green', themeName: 'Light Green'},
    {themeCode: 'light-yellow', themeName: 'Light Yellow'},
    {themeCode: 'light-red', themeName: 'Light Red'},
]
/**
 *
 * @param theme a string which denotes any of the above themes
 * @returns if the theme provided is valid through this website or not...
 */
function isOfTypeTheme(theme: ThemeTypes): theme is ThemeTypes {
    return AvailableThemesArray.includes(theme)
}
const DEFAULT_THEME: ThemeTypes = 'dark-default'
const DEFAULT_THEME_NAME: string = 'Dark Default'

interface ThemeSystemContextProp {
    theme: ThemeTypes
    themeName: string
    randomizeTheme(): any
}
const ThemeSystemContext = createContext<ThemeSystemContextProp>({
    theme: DEFAULT_THEME,
    themeName: DEFAULT_THEME_NAME,
    randomizeTheme: () => {},
})
interface Props {
    children: React.ReactChild
}
export default function ThemeSystem(props: Props) {
    const [theme, setTheme] = useState<ThemeTypes>(DEFAULT_THEME) // the theme code
    const [themeName, setThemeName] = useState<string>(DEFAULT_THEME_NAME) // the actual themes name dedicatd to each theme code

    const setThemeLocal = () => {}

    /**
     * selects a random theme for every instance of the website
     */
    const selectRandomTheme = () => {
        const randomTheme =
            AvailableThemesArray[
                Math.floor(Math.random() * AvailableThemesArray.length)
            ]
        setTheme(randomTheme)
        document.body.className = randomTheme

        // also update the theme name
        const themeNameLocal = ThemesName.filter(
            themeName => themeName.themeCode === randomTheme,
        )
        setThemeName(themeNameLocal[0].themeName)
    }

    useEffect(() => {
        selectRandomTheme()
    }, [])

    useEffect(() => {
        // curently disabled the local storage feature
        //
        // const themeLocal: ThemeTypes = localStorage.theme
        // const finalTheme = isOfTypeTheme(themeLocal)
        //     ? themeLocal
        //     : DEFAULT_THEME
        // setTheme(finalTheme)
    }, [])

    const value = {
        theme,
        themeName,
        randomizeTheme: selectRandomTheme,
    }
    return (
        <ThemeSystemContext.Provider value={value}>
            {/* <div
                className={
                    AvailableThemesArray[
                        Math.floor(Math.random() * AvailableThemesArray.length)
                    ]
                }> */}

            <Head>
                <meta name="theme-color" content="#000000" />
            </Head>

            {props.children}

            {/* </div> */}
        </ThemeSystemContext.Provider>
    )
}

export const useThemeSystem = () => useContext(ThemeSystemContext)
