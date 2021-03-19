import { combineReducers } from 'redux';
import searchSlice from './data/search/search.slice';
import userSlice from './data/user/user.slice';

const createReducer = (injectedReducers = {}) => {
  const rootReducer = combineReducers({
    search: searchSlice,
    user: userSlice,
    ...injectedReducers,
  });

  return rootReducer;
};

export default createReducer;
