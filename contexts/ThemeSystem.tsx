import React, {createContext, useContext, useEffect, useState} from 'react'

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
/**
 *
 * @param theme a string which denotes any of the above themes
 * @returns if the theme provided is valid through this website or not...
 */
function isOfTypeTheme(theme: ThemeTypes): theme is ThemeTypes {
    return AvailableThemesArray.includes(theme)
}
const DEFAULT_THEME: ThemeTypes = 'light-default'

interface ThemeSystemContextProp {
    theme: ThemeTypes
}
const ThemeSystemContext = createContext<ThemeSystemContextProp>({
    theme: DEFAULT_THEME,
})
interface Props {
    children: React.ReactChild
}
export default function ThemeSystem(props: Props) {
    const [theme, setTheme] = useState<ThemeTypes>(DEFAULT_THEME)

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
        console.log('RANDOM', randomTheme)
    }

    useEffect(() => {
        selectRandomTheme()
    }, [])

    useEffect(() => {
        const themeLocal: ThemeTypes = localStorage.theme
        const finalTheme = isOfTypeTheme(themeLocal)
            ? themeLocal
            : DEFAULT_THEME
        setTheme(finalTheme)
    }, [])

    const value = {
        theme,
    }
    return (
        <ThemeSystemContext.Provider value={value}>
            {/* <div
                className={
                    AvailableThemesArray[
                        Math.floor(Math.random() * AvailableThemesArray.length)
                    ]
                }> */}
            {props.children}
            {/* </div> */}
        </ThemeSystemContext.Provider>
    )
}

export const useThemeSystem = () => useContext(ThemeSystemContext)
