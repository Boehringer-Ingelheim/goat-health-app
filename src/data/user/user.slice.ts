import { CS } from './../../components/Chapters/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeName } from '../../utils/hooks/useTheme';
import { SPEECH_LANGUAGE_DEFAULT } from '../speech/speech.constants';

type CurrentView = 'card' | 'list';

interface CurrentSpeechName {
  currentSpeechName: string;
}

interface CurrentSpeechNamePayload {
  currentSpeechName: string;
}

type CurrentThemeName = ThemeName;

type Favorite = CS & {
  addedAt: Date;
  id: string;
};

type UserState = {
  favorites: Favorite[];
  hasSeenTutorial: boolean;
  currentFavoritesView: CurrentView;
  currentSearchView: CurrentView;
  currentThemeName: CurrentThemeName;
} & CurrentSpeechName;

const initialState: UserState = {
  favorites: [],
  currentFavoritesView: 'card',
  currentSearchView: 'card',
  currentSpeechName: SPEECH_LANGUAGE_DEFAULT.name,
  currentThemeName: 'system',
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
    setCurrentFavoritesView(state, action: PayloadAction<CurrentView>) {
      state.currentFavoritesView = action.payload;
    },
    setCurrentSearchView(state, action: PayloadAction<CurrentView>) {
      state.currentSearchView = action.payload;
    },
    setCurrentSpeechName(
      state,
      action: PayloadAction<CurrentSpeechNamePayload>,
    ) {
      const { currentSpeechName } = action.payload;
      state.currentSpeechName = currentSpeechName;
    },
    setCurrentTheme(state, action: PayloadAction<CurrentThemeName>) {
      state.currentThemeName = action.payload;
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
