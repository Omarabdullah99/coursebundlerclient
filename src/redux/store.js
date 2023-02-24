import {configureStore} from "@reduxjs/toolkit"
import { courseReducer } from "./reducers/courseReducer"
import {profileReducer, userReducer} from './reducers/userReducer'

const store=configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        courses:courseReducer

    }
})
export default store