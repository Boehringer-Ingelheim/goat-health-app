import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import searchSlice from './data/search/search.slice';
import userSlice from './data/user/user.slice';
import history from './utils/history';

const createReducer = (injectedReducers = {}) => {
  const rootReducer = combineReducers({
    search: searchSlice,
    user: userSlice,
    router: connectRouter(history) as Reducer,
    ...injectedReducers,
  });

  return rootReducer;
};

export default createReducer;
