import { routerMiddleware, RouterState } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from './reducers';
import history from './utils/history';
import createCapacitorStorage from './utils/capacitorStorage';
import { GlobalState } from './data/global/global.reducer';
import globalSaga from './data/global/global.saga';

export const persistConfig = {
  blacklist: ['router'],
  debug: false,
  key: 'root',
  storage: createCapacitorStorage(),
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, createRootReducer());

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  let enhancer = applyMiddleware(...middlewares);

  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    enhancer = composeWithDevTools(enhancer);
  }

  const store = createStore<any, any, GlobalState, RouterState>(
    persistedReducer,
    enhancer,
  );

  sagaMiddleware.run(globalSaga);

  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
