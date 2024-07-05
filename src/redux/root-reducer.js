import { combineReducers } from '@reduxjs/toolkit'
import userReducer from "./user-reducer/user.reducer";
import cartReducer from "./cart/cart.reducer";

//this makes our reducer persist
import { persistReducer } from 'redux-persist';

//here we are importing the type of storage we want (as we want localstorage and storage represent local storage) 
import storage from 'redux-persist/lib/storage';

const persistConfig = {

    //This is the key used in storage to save your persisted state. It acts as a unique identifier for your persisted Redux state.
    key: 'root',

    //Specifies the storage engine to use for persisting the state. For web applications, 
    //you typically use localStorage or sessionStorage.There are other storage engines 
    //available for different environments, like redux- persist / lib / storage / session for session storage.
    storage,

    //An array of reducer keys (as strings) that specifies which parts of the state should be persisted. Only the listed reducers will be persisted.
    whitelist: ['cart']
}

//this is combining all the reducers into an giant object
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer);