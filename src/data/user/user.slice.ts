import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentSearchView {
  currentSearchView: 'card' | 'list';
}

interface CurrentSearchViewPayload {
  currentSearchView: 'card' | 'list';
}

interface CurrentTheme {
  currentTheme: string;
}

interface CurrentThemePayload {
  currentTheme: string;
}

type UserState = {
  hasSeenTutorial: boolean;
} & CurrentSearchView &
  CurrentTheme;

const initialState: UserState = {
  currentSearchView: 'card',
  currentTheme: 'system',
  hasSeenTutorial: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserState() {
      return initialState;
    },
    setCurrentSearchView(
      state,
      action: PayloadAction<CurrentSearchViewPayload>,
    ) {
      const { currentSearchView } = action.payload;
      state.currentSearchView = currentSearchView;
    },
    setCurrentTheme(state, action: PayloadAction<CurrentThemePayload>) {
      const { currentTheme } = action.payload;
      state.currentTheme = currentTheme;
    },
    setHasSeenTutorial(
      state,
      action: PayloadAction<{ hasSeenTutorial: boolean }>,
    ) {
      const { hasSeenTutorial } = action.payload;
      state.hasSeenTutorial = hasSeenTutorial;
    },
  },
});

export const {
  resetUserState,
  setCurrentSearchView,
  setCurrentTheme,
  setHasSeenTutorial,
} = userSlice.actions;

export default userSlice.reducer;
