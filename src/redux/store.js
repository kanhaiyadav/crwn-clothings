import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const store = configureStore(
    {
        reducer: rootReducer
    }
)

//this just creates a persisted verion of our store
const persistor = persistStore(store);

export { store, persistor };