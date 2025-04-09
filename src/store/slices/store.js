import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session"; // 👈 вот здесь
import { persistReducer, persistStore } from "redux-persist";
import { api } from "../services/api.js";
import userReducer from "./userSlice.js";

const persistConfig = {
  key: "root",
  storage: storageSession,
  version: 1,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/FLUSH",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);
