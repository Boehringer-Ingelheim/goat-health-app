import produce from 'immer';
import ActionTypes from './global.constants';

interface Action {
  readonly type: string;
  readonly payload: any;
}

export interface GlobalState {
  readonly activePage: string;
}

const initState: GlobalState = {
  activePage: 'home',
};

const globalReducer = (state: GlobalState = initState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.SET_ACTIVE_PAGE:
        draft.activePage = action.payload;
        break;
      case ActionTypes.RESET_APP:
        draft = initState;
        break;
    }
  });

export default globalReducer;
