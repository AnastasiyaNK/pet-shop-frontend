import { configureStore } from "@reduxjs/toolkit";
import { petReducer } from "./petSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const petPersistConfig = {
  key: "pet",
  storage,
  whitelist: ["categories", "products"],
};

const persistedReducer = persistReducer(petPersistConfig, petReducer);

export const store = configureStore({
  reducer: {
    pet: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //   devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
