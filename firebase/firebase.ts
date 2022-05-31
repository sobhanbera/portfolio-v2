import {ref, set} from 'firebase/database'

import {database} from '.'
import {CONTACTS_ROOT_REFERENCE} from '../constants'

/**
 * create a new entry to firebase realtime database
 * @param fullname full name from the contact form
 * @param email email of the person
 * @param org organization name which is optional
 * @param message the actual message
 * @param status any status only specific to me, this is TODO
 * @param phoneNumber phone number field value, TODO
 */
export const addNewContactData = (
    fullname: string,
    email: string,
    org: string = '',
    message: string,
    status: string = '',
    phoneNumber: string = '',
): Promise<boolean> => {
    const timestamp = new Date().getTime()

    return new Promise((response, reject) => {
        set(ref(database, `${CONTACTS_ROOT_REFERENCE}/${timestamp}`), {
            fullname,
            email,
            org,
            message,
            timestamp,
            status, // currently these two fields are disabled
            phoneNumber, // currently these two fields are disabled
        })
            .then(res => {
                return response(true)
            })
            .catch(err => {
                return response(false) // this is also success type but with false value
            })
    })
}
