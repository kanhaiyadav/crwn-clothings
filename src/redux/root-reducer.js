import { combineReducers } from '@reduxjs/toolkit'
import userReducer from "./user-reducer/user.reducer";

//this is combining all the reducers into an giant object
const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer;