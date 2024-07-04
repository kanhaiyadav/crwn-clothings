import { combineReducers } from '@reduxjs/toolkit'
import userReducer from "./user-reducer/user.reducer";
import cartReducer from "./cart/cart.reducer";

//this is combining all the reducers into an giant object
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default rootReducer;