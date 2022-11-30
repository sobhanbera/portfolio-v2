import nodemailer from 'nodemailer'

import {MY_EMAIL_ID} from '../constants'
import {EMAIL, EMAIL_PASSWORD} from '../configs'
import contactEmailTemplate from '../contents/emailtemplates/contact'
import {EmailClientData} from '../modals/index'

let EmailClient = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD,
    },
    // host: 'smtp.gmail.com',
})

export function sendMail({email, org, message, name}: EmailClientData) {
    const emailTemplate = contactEmailTemplate({
        email,
        org,
        message,
        name,
    })
    const defaultEmailSubject = 'Thanks for Contacting'

    return new Promise((resolve, reject) => {
        console.log(EMAIL, EMAIL_PASSWORD)
        EmailClient.sendMail({
            from: EMAIL,
            to: [email, MY_EMAIL_ID], // sending mail to me and the user together, so that I also get the notification
            subject: defaultEmailSubject,
            html: emailTemplate,
        })
            .then((_result: any) => resolve(true))
            .catch((_err: any) => {
                EmailClient = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: EMAIL,
                        pass: EMAIL_PASSWORD,
                    },
                    // host: 'smtp.gmail.com',
                })

                // console.log(_err)
                resolve(false)
            })
    })
}
