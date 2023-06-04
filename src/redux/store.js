import {configureStore} from "@reduxjs/toolkit"
import { courseReducer } from "./reducers/courseReducer"
import { paymentReducer } from "./reducers/paymentReducer"
import {profileReducer, userReducer} from './reducers/userReducer'

const store=configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        courses:courseReducer,
        payment:paymentReducer

    }
})
export default store