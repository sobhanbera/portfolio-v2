import {config} from 'dotenv'
config()

const {GA_TRACKING_ID_ENV} = process.env
export {GA_TRACKING_ID_ENV}

const {EMAIL, EMAIL_PASSWORD} = process.env
export {EMAIL, EMAIL_PASSWORD}
