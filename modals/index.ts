export type ThemeTypes =
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

/**
 * name: name of the client
 * email: is the email of the client who send the message
 * message: the actual message
 * org: is organization of the client who is contacting
 *
 * color: the color at the current time when the email has to be sent
 */
export interface EmailClientData {
    name: string
    email: string
    message: string
    org: string
}
