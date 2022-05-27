interface LogoProps {
    fill?: string
    letterColor: string
    strokeColor: string
}

export default function Logo(props: LogoProps) {
    return (
        // <svg
        //     width="70"
        //     height="70"
        //     viewBox="0 0 70 70"
        //     fill={props.fill || 'transparent'}
        //     xmlns="http://www.w3.org/2000/svg">
        //     <circle
        //         cx="35"
        //         cy="35"
        //         r="33.5"
        //         stroke={props.strokeColor}
        //         stroke-width="3"
        //     />
        //     <path
        //         d="M34.9 66.78C32.3 66.78 29.96 66.42 27.88 65.7C25.84 64.94 24.24 63.9 23.08 62.58C21.96 61.22 21.4 59.7 21.4 58.02C21.4 56.18 21.98 54.66 23.14 53.46C24.34 52.26 25.84 51.66 27.64 51.66C28 51.66 28.28 51.72 28.48 51.84C28.68 51.96 28.78 52.1 28.78 52.26C28.78 52.38 28.6 52.7 28.24 53.22C27.92 53.74 27.64 54.32 27.4 54.96C27.16 55.6 27.04 56.36 27.04 57.24C27.04 59.16 27.76 60.72 29.2 61.92C30.64 63.12 32.54 63.72 34.9 63.72C36.98 63.72 38.66 63.18 39.94 62.1C41.22 60.98 41.86 59.46 41.86 57.54C41.86 55.98 41.46 54.66 40.66 53.58C39.86 52.5 38.86 51.62 37.66 50.94C36.5 50.22 34.92 49.42 32.92 48.54C30.64 47.54 28.78 46.6 27.34 45.72C25.94 44.84 24.74 43.68 23.74 42.24C22.78 40.8 22.3 38.98 22.3 36.78C22.3 34.94 22.74 33.22 23.62 31.62C24.54 29.98 25.9 28.68 27.7 27.72C29.5 26.72 31.68 26.22 34.24 26.22C36.56 26.22 38.64 26.56 40.48 27.24C42.32 27.92 43.76 28.86 44.8 30.06C45.84 31.26 46.36 32.64 46.36 34.2C46.36 36.04 45.8 37.56 44.68 38.76C43.6 39.92 42.22 40.5 40.54 40.5C39.82 40.5 39.46 40.28 39.46 39.84C39.46 39.76 39.6 39.48 39.88 39C40.2 38.48 40.48 37.9 40.72 37.26C40.96 36.58 41.08 35.8 41.08 34.92C41.08 33.28 40.44 31.92 39.16 30.84C37.88 29.76 36.24 29.22 34.24 29.22C32.08 29.22 30.42 29.84 29.26 31.08C28.1 32.28 27.52 33.76 27.52 35.52C27.52 36.88 27.9 38.04 28.66 39C29.42 39.96 30.36 40.78 31.48 41.46C32.6 42.1 34.16 42.86 36.16 43.74C38.56 44.82 40.5 45.82 41.98 46.74C43.5 47.66 44.78 48.9 45.82 50.46C46.86 51.98 47.38 53.88 47.38 56.16C47.38 59.4 46.28 61.98 44.08 63.9C41.92 65.82 38.86 66.78 34.9 66.78Z"
        //         fill={props.letterColor}
        //     />
        // </svg>

        <svg
            viewBox="0 0 70 89"
            fill={props.fill || 'transparent'}
            xmlns="http://www.w3.org/2000/svg">
            <circle
                cx="35"
                cy="46"
                r="33.5"
                stroke={props.strokeColor}
                stroke-width="3"
            />
            <path
                d="M34.9 66.78C32.3 66.78 29.96 66.42 27.88 65.7C25.84 64.94 24.24 63.9 23.08 62.58C21.96 61.22 21.4 59.7 21.4 58.02C21.4 56.18 21.98 54.66 23.14 53.46C24.34 52.26 25.84 51.66 27.64 51.66C28 51.66 28.28 51.72 28.48 51.84C28.68 51.96 28.78 52.1 28.78 52.26C28.78 52.38 28.6 52.7 28.24 53.22C27.92 53.74 27.64 54.32 27.4 54.96C27.16 55.6 27.04 56.36 27.04 57.24C27.04 59.16 27.76 60.72 29.2 61.92C30.64 63.12 32.54 63.72 34.9 63.72C36.98 63.72 38.66 63.18 39.94 62.1C41.22 60.98 41.86 59.46 41.86 57.54C41.86 55.98 41.46 54.66 40.66 53.58C39.86 52.5 38.86 51.62 37.66 50.94C36.5 50.22 34.92 49.42 32.92 48.54C30.64 47.54 28.78 46.6 27.34 45.72C25.94 44.84 24.74 43.68 23.74 42.24C22.78 40.8 22.3 38.98 22.3 36.78C22.3 34.94 22.74 33.22 23.62 31.62C24.54 29.98 25.9 28.68 27.7 27.72C29.5 26.72 31.68 26.22 34.24 26.22C36.56 26.22 38.64 26.56 40.48 27.24C42.32 27.92 43.76 28.86 44.8 30.06C45.84 31.26 46.36 32.64 46.36 34.2C46.36 36.04 45.8 37.56 44.68 38.76C43.6 39.92 42.22 40.5 40.54 40.5C39.82 40.5 39.46 40.28 39.46 39.84C39.46 39.76 39.6 39.48 39.88 39C40.2 38.48 40.48 37.9 40.72 37.26C40.96 36.58 41.08 35.8 41.08 34.92C41.08 33.28 40.44 31.92 39.16 30.84C37.88 29.76 36.24 29.22 34.24 29.22C32.08 29.22 30.42 29.84 29.26 31.08C28.1 32.28 27.52 33.76 27.52 35.52C27.52 36.88 27.9 38.04 28.66 39C29.42 39.96 30.36 40.78 31.48 41.46C32.6 42.1 34.16 42.86 36.16 43.74C38.56 44.82 40.5 45.82 41.98 46.74C43.5 47.66 44.78 48.9 45.82 50.46C46.86 51.98 47.38 53.88 47.38 56.16C47.38 59.4 46.28 61.98 44.08 63.9C41.92 65.82 38.86 66.78 34.9 66.78Z"
                fill={props.letterColor}
            />
        </svg>
    )
}
