import type {NextApiRequest, NextApiResponse} from 'next'

import {EMAIL_NOT_SENT, EMAIL_SENT, INVALID_PAYLOAD} from '../../constants'
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
        res.status(200).json({
            error: true,
            code: INVALID_PAYLOAD,
        })
    } else {
        sendMail({
            org,
            name,
            email,
            message,
        })
            .then(emailSent => {
                if (emailSent.result) {
                    res.status(200).json({
                        error: false,
                        code: EMAIL_SENT,
                    })
                } else {
                    res.status(200).json({
                        error: true,
                        code: EMAIL_NOT_SENT,
                    })
                }
            })
            .catch(_err => {
                res.status(200).json({
                    error: true,
                    code: EMAIL_NOT_SENT,
                })
            })
    }
}
