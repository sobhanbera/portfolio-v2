import {config} from 'dotenv'
config()

const {GA_TRACKING_ID} = process.env
export {GA_TRACKING_ID}

const {EMAIL, EMAIL_PASSWORD} = process.env
export {EMAIL, EMAIL_PASSWORD}
