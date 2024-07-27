import { configureStore} from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import createSagaMiddleware from 'redux-saga';
import { fetchCollectionsStart } from "./shop/shopSagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
    {
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    // Ignore these action types
                    ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
                    // Ignore these field paths in all actions
                    ignoredActionPaths: ['register', 'rehydrate'],
                    // Ignore these paths in the state
                    ignoredPaths: ['register', 'rehydrate'],
                },
            }).concat(sagaMiddleware),
    }
)

sagaMiddleware.run(fetchCollectionsStart);

//this just creates a persisted verion of our store
const persistor = persistStore(store);

export { store, persistor };