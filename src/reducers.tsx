/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import chapterReducer from './data/chapter/chapter.reducer';
import globalReducer from './data/global/global.reducer';
import userReducer from './data/user/user.reducer';
import history from './utils/history';

export type RootState = {
  chapter: ReturnType<typeof chapterReducer>;
  global: ReturnType<typeof globalReducer>;
  user: ReturnType<typeof userReducer>;
  router: ReturnType<typeof connectRouter>;
};

export type RootActions =
  | Parameters<typeof chapterReducer>[1]
  | Parameters<typeof userReducer>[1]
  | Parameters<typeof globalReducer>[1]
  | Parameters<Reducer>[0];

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
const createReducer = (injectedReducers = {}) => {
  const rootReducer = combineReducers<RootState, RootActions>({
    chapter: chapterReducer,
    global: globalReducer,
    user: userReducer,
    router: connectRouter(history) as Reducer,
    ...injectedReducers,
  });

  return rootReducer;
};

export default createReducer;
