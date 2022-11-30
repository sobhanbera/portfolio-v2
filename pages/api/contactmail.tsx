import type {NextApiRequest, NextApiResponse} from 'next'

import {EMAIL_NOT_SENT, EMAIL_SENT, INVALID_PAYLOAD} from '../../constants'
import {EMAIL, EMAIL_PASSWORD} from '../../configs'
import {sendMail} from '../../utils'

export default function SendMailAfterContacting(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const org = String(req.body.org) || '' // the org name of the client who is sending message
    const name = String(req.body.name) || '' // client's name
    const email = String(req.body.email) || '' // his email address
    const message = String(req.body.message) || '' // the actual message he sent

    if (!email || !message || !name) {
        return res.status(200).json({
            error: true,
            code: INVALID_PAYLOAD,
        })
    } else {
        // sendMail({
        //     org,
        //     name,
        //     email,
        //     message,
        // }).then(emailSent => {
        //     if (emailSent) {
        res.status(200).json({
            error: false,
            code: EMAIL_SENT,
            email: EMAIL,
            pass: EMAIL_PASSWORD,
        })
        //     } else {
        //         res.status(200).json({error: true, code: EMAIL_NOT_SENT})
        //     }
        // })
    }
}
