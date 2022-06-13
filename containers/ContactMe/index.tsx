import React, {useEffect, useState} from 'react'

import styles from '../../styles/containers/contactme.module.scss'
import 'aos/dist/aos.css'
import {CONTACT_ME_STRING, EMAIL_REGEX} from '../../constants'
import {addNewContactData} from '../../firebase/firebase'

export default function ContactMe() {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [org, setOrganization] = useState('')
    const [message, setMessage] = useState('')

    const [prompt, setPrompt] = useState('')

    const addContactDetails = () => {
        if (fullname.length <= 5) {
            setPrompt(
                'Please enter a valid fullname. The minimum length of fullname is 5.',
            )
        } else if (!email.toLowerCase().match(EMAIL_REGEX)) {
            setPrompt(
                'The email address you entered is not valid. Please enter a valid email address.',
            )
        } else if (email.length >= 320) {
            setPrompt(
                "Please enter a valid email ID. Email's length must not exceed 320 characters",
            )
        } else if (message.length <= 0) {
            setPrompt(
                'The message you have entered is empty. Please enter some valid message.',
            )
        } else {
            addNewContactData(fullname, email, org, message).then(res => {
                if (res === true) {
                    setPrompt('Thanks for contacting!')
                    // if the prompt is shown then disable it after sometime
                    setTimeout(() => {
                        // this is not the efficient way, just for testing purpose
                        if (prompt.localeCompare('Thanks for contacting!'))
                            setPrompt('')
                    }, 5000)

                    // reseting all the input fields
                    setFullname('')
                    setEmail('')
                    setOrganization('')
                    setMessage('')

                    /**
                     * now sending a temporary mail to this email
                     * for a confirmation or like a thanking mail
                     */
                    // TODO
                } else {
                    setPrompt(
                        "You message can't be sent at the time. This maybe due to any technical failure. Sorry for the inconvineince!",
                    )
                }
            })
        }
    }

    // disabled this for sometime to test and figure out other components using the same
    /**
     * disable scroling when any kind of meny is opened
     * this useEffect will do the same
     * this is same as the header menu function
     */
    // useEffect(() => {
    //     // if menu is enabled then disable the scrolling in body
    //     if (prompt) {
    //         document.body.style.overflow = 'hidden'
    //     } else {
    //         // else enable it
    //         document.body.style.overflow = 'scroll'
    //     }
    // }, [prompt])

    return (
        <div className={styles.contactMeContainer} id={CONTACT_ME_STRING}>
            <div
                className={styles.contactMeWrapper}
                // data-aos="fade-up"
                // data-aos-mirror="true" // since I don't need this goes out of render
                // data-aos-once="false" // because on mobile device due to less height some inputs may got invisible due to this
            >
                <p className={styles.getInTouchText}>{'Keep In Touch'}</p>

                <p className={styles.contactText}>
                    If you have anything to share, go ahead! It could be any
                    joke/funny stuff or any <span>advice</span>. Currently, I am
                    also open for <span>projects</span>. So yeah just enter
                    details and hit that huge <span>submit</span> button.
                </p>

                <div className={styles.contactInputContainer}>
                    <div className={styles.inputWrapper}>
                        <input
                            onChange={e => setFullname(e.target.value)}
                            value={fullname}
                            type="text"
                            required
                            placeholder="I'm excited to know your name!"
                        />
                    </div>

                    <div className={styles.inputWrapper}>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            required
                            placeholder="Email ID"
                        />
                        <input
                            onChange={e => setOrganization(e.target.value)}
                            value={org}
                            type="text"
                            required
                            placeholder="Organization's Name (Optional)"
                        />
                    </div>

                    <div className={styles.inputWrapper}>
                        <textarea
                            onChange={e =>
                                setMessage(
                                    e.target.value.replace(
                                        /(?:\r\n|\r|\n)/g,
                                        '\n',
                                    ),
                                )
                            }
                            value={message}
                            required
                            placeholder="Tell me! I'm very inquisitive."
                        />
                    </div>

                    <button
                        className={styles.submitBtn}
                        onClick={addContactDetails}>
                        {'Submit!'}
                    </button>
                </div>
            </div>

            <div
                className={`${styles.promptContainer} ${
                    prompt.length ? styles.active : styles.inactive
                }`}
                onClick={() => setPrompt('')}>
                <div
                    className={styles.promptCard}
                    onClick={e => e.stopPropagation()}>
                    <div className={styles.promptHeader}>
                        <svg
                            onClick={() => setPrompt('')}
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 512 512">
                            <path
                                d="M485.841,494.293c-2.304,0-4.606-0.879-6.364-2.636L20.459,32.64c-3.515-3.515-3.515-9.213,0-12.728
				c3.515-3.515,9.213-3.515,12.728,0l459.018,459.017c3.515,3.515,3.515,9.214,0,12.729
				C490.447,493.414,488.145,494.293,485.841,494.293z"
                            />
                            <path
                                d="M26.823,494.293c-2.303,0-4.606-0.878-6.363-2.636c-3.515-3.514-3.516-9.213-0.001-12.728L479.477,19.829
				c3.514-3.516,9.212-3.516,12.728-0.002c3.515,3.515,3.516,9.213,0.001,12.729L33.188,491.656
				C31.431,493.414,29.126,494.293,26.823,494.293z"
                            />
                        </svg>
                    </div>

                    <div className={styles.promptMessage}>
                        <p>{prompt}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
