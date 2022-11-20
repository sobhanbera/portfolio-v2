import {ThemeBackgroundColors, useThemeSystem} from '../../contexts/ThemeSystem'

export default function MetaDatas() {
    const {theme} = useThemeSystem()

    return <meta name="theme-color" content={ThemeBackgroundColors[theme]} />
}
