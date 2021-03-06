import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChapterId } from '../../utils/chapters';
import { SPEECH_LANGUAGE_DEFAULT } from '../speech/speech.constants';

type CurrentView = 'card' | 'list';

interface CurrentViewPayload {
  currentView: CurrentView;
}

interface CurrentSpeechName {
  currentSpeechName: string;
}

interface CurrentSpeechNamePayload {
  currentSpeechName: string;
}
interface CurrentTheme {
  currentTheme: string;
}

interface CurrentThemePayload {
  currentTheme: string;
}

interface Favorite {
  addedAt: Date;
  chapterId: ChapterId;
  id: string;
  sectionId: string;
}

type UserState = {
  favorites: Favorite[];
  hasSeenTutorial: boolean;
  currentFavoritesView: CurrentView;
  currentSearchView: CurrentView;
} & CurrentSpeechName &
  CurrentTheme;

const initialState: UserState = {
  favorites: [],
  currentFavoritesView: 'card',
  currentSearchView: 'card',
  currentSpeechName: SPEECH_LANGUAGE_DEFAULT.name,
  currentTheme: 'system',
  hasSeenTutorial: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Favorite>) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavoriteById(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(
        (favorite) => !favorite.id.includes(action.payload),
      );
    },
    resetUserState() {
      return initialState;
    },
    setCurrentFavoritesView(state, action: PayloadAction<CurrentViewPayload>) {
      const { currentView } = action.payload;
      state.currentFavoritesView = currentView;
    },
    setCurrentSearchView(state, action: PayloadAction<CurrentViewPayload>) {
      const { currentView } = action.payload;
      state.currentSearchView = currentView;
    },
    setCurrentSpeechName(
      state,
      action: PayloadAction<CurrentSpeechNamePayload>,
    ) {
      const { currentSpeechName } = action.payload;
      state.currentSpeechName = currentSpeechName;
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
  addFavorite,
  removeFavoriteById,
  resetUserState,
  setCurrentFavoritesView,
  setCurrentSearchView,
  setCurrentSpeechName,
  setCurrentTheme,
  setHasSeenTutorial,
} = userSlice.actions;

export default userSlice.reducer;
