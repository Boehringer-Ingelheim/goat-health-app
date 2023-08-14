import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import createRootReducer from "./reducers";
import createCapacitorStorage from "./utils/capacitorStorage";

export type RootState = ReturnType<typeof store.getState>;

export const persistConfig = {
  debug: false,
  key: "root",
  storage: createCapacitorStorage(),
  version: 1,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, createRootReducer());

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
