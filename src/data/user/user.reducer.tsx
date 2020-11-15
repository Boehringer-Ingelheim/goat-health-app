import produce from 'immer';
import ActionTypes from './user.constants';
import { getSystemTheme, THEMES, Theme } from '../../utils/theme';

interface UserActions {
  readonly type: string;
  readonly payload: any;
}

export interface UserState {
  readonly fontSize: string;
  readonly hasSeenTutorial: boolean;
  readonly selectedTheme: Theme;
}

const initState = {
  fontSize: '',
  hasSeenTutorial: false,
  selectedTheme: getSystemTheme(),
};

const userReducer = (state: UserState = initState, action: UserActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.SET_FONT_SIZE:
        draft.fontSize = action.payload;
        break;
      case ActionTypes.SET_HAS_SEEN_TUTORIAL:
        draft.hasSeenTutorial = action.payload;
        break;
      case ActionTypes.SET_THEME:
        if (action.payload.name === THEMES.system.name) {
          draft.selectedTheme = getSystemTheme();
          break;
        }
        draft.selectedTheme = action.payload;
        break;
      case ActionTypes.RESET_USER_STATE:
        draft = initState;
        break;
    }
  });

export default userReducer;
