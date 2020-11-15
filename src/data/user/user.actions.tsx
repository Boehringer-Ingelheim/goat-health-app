import ActionTypes from './user.constants';

export const setFontSize = (fontSize: string) => ({
  type: ActionTypes.SET_FONT_SIZE,
  payload: fontSize,
});

export const setHasSeenTutorial = (hasSeenTutorial: boolean) => ({
  type: ActionTypes.SET_HAS_SEEN_TUTORIAL,
  payload: hasSeenTutorial,
});

export const setTheme = (theme: string) => ({
  type: ActionTypes.SET_THEME,
  payload: theme,
});

export const resetApp = () => ({
  type: ActionTypes.RESET_USER_STATE,
});
