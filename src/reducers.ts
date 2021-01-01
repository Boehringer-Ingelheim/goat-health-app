/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './utils/history';
import userSlice from './data/user/user.slice';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
const createReducer = (injectedReducers = {}) => {
  const rootReducer = combineReducers({
    user: userSlice,
    router: connectRouter(history) as Reducer,
    ...injectedReducers,
  });

  return rootReducer;
};

export default createReducer;
