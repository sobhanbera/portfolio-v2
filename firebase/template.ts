import {initializeApp} from 'firebase/app'

import 'firebase/analytics'

import 'firebase/auth'
import 'firebase/firestore'

import {getDatabase} from 'firebase/database'

const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
}

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)

export default app
export {database}
