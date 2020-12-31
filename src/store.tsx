import { routerMiddleware } from 'connected-react-router';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import createRootReducer from './reducers';
import createCapacitorStorage from './utils/capacitorStorage';
import history from './utils/history';

export type RootState = ReturnType<typeof store.getState>;

export const persistConfig = {
  blacklist: ['router'],
  debug: false,
  key: 'root',
  storage: createCapacitorStorage(),
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, createRootReducer());

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [routerMiddleware(history)],
});

export const persistor = persistStore(store);
