import {config} from 'dotenv'
config()

const {EMAIL, EMAIL_PASSWORD} = process.env
export {EMAIL, EMAIL_PASSWORD}
