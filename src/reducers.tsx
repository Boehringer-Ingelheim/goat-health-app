/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import globalReducer from './data/global/global.reducer';
import userReducer from './data/user/user.reducer';

import history from './utils/history';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
const createReducer = (injectedReducers = {}) => {
  const rootReducer = combineReducers({
    global: globalReducer,
    user: userReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
};

export default createReducer;
