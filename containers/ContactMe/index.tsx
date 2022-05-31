import React from 'react'
import Link from 'next/link'

import styles from '../../styles/containers/contactme.module.scss'
import 'aos/dist/aos.css'
import {CONTACT_ME_STRING} from '../../constants'

export default function ContactMe() {
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
                            type="text"
                            required
                            placeholder="I'm excited to know your name!"
                        />
                    </div>

                    <div className={styles.inputWrapper}>
                        <input type="email" required placeholder="Email ID" />
                        <input
                            type="text"
                            required
                            placeholder="Organization's Name (Optional)"
                        />
                    </div>

                    <div className={styles.inputWrapper}>
                        <textarea
                            required
                            placeholder="Tell me! I'm very inquisitive."
                        />
                    </div>

                    <button className={styles.submitBtn}>{'Submit!'}</button>
                </div>
            </div>
        </div>
    )
}
