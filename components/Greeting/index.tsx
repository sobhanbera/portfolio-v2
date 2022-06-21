import {useEffect, useState} from 'react'
import {Name} from '..'

import styles from '../../styles/components/greeting.module.scss'

const Hellos = [
    'Hello',
    'नमस्ते',
    'হ্যালো',
    'কেমন আছো',
    'வணக்கம்',
    'హలో',
    'नमस्कार',
    'Hola',
    'Bonjour',
    'Привет',
    'Ciao',
    'Olá',
    'Guten Tag',
    'Konnichiwa',
    'Nǐn hǎo',
    'Anyoung haseyo',
    'Goddag',
    'Shikamoo',
    'Goedendag',
    'Welcome',
]

export default function Greeting() {
    // variable that controls which welcome text to render based on the index from Hellos array above
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    // after some time fixed time if the website is loaded then the greeting will be removed with animation
    // it will be controlled using css class along with animation
    const [showGreeting, setShowGreeting] = useState<boolean>(true)

    // a button will be shown which will when pressed will disable the greeting
    // this var control wheather to show that buttton or not
    // actually after some time interval this button will be visible in the view...
    // const [showTapToContinueButton, setShowTapToContinueButton] =
    // useState(false)

    useEffect(() => {
        // at first just stop the scrolling so that unwanted scrolls don't take place
        // next when the gretting is finished normalize the scroll behaviour
        // that's it for the scroll UIUX
        document.body.style.overflow = 'hidden'
        console.log('value', document.body.style.overflow)

        // to update the greeting text
        setInterval(() => {
            setCurrentIndex(value => value + 1)
        }, 175)

        // toggle the greeting screen
        // the prefered calculated time from css animation to all the greeting text animation
        // is almost 4 seconds
        // so it am setting a time more than 5-6 seconds
        setTimeout(() => {
            setShowGreeting(false)
            // setShowTapToContinueButton(false)
            document.body.style.overflow = 'scroll'
        }, 3500)

        // 3 second is the deafult time when everything is loaded
        // setTimeout(() => {
        //     setShowTapToContinueButton(true)
        // }, 3000)
    }, [])

    return (
        <div
            className={`${styles.greeting} ${
                showGreeting ? styles.active : styles.inactive
            }`}
            onClick={() => {
                setShowGreeting(false)
                // normalizing the overflow property of the body
                document.body.style.overflow = 'scroll'
            }}>
            {/* bare component, just to maintain the space-between properties in css */}
            {/* <div className={styles.flexBalancer}></div> */}

            <div className={styles.greetingContainer}>
                {/* since the index will go to infinite, for that to control the behaviour we are using % operator */}
                {/* if greeting is visible then move on else show hello only */}

                <h3>
                    {showGreeting
                        ? Hellos[currentIndex % Hellos.length]
                        : Hellos[0]}
                </h3>

                <h4>I am</h4>

                <Name extraClass={styles.nameContainer} />
            </div>

            {/* continue button if the user is frustated :) hehe */}
            {/* <div className={styles.greetingContinue}>
                {showTapToContinueButton ? (
                    <span>Tap Anywhere To Continue...</span>
                ) : null}
            </div> */}
        </div>
    )
}
