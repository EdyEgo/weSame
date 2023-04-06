import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";


export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // a lot of the app data it's non-serializable so this setting is for
            // not showing warnings
        }),
});
