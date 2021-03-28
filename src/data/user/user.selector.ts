import { createSelector } from '@reduxjs/toolkit';
import { selectLanguageFromSpeechName } from '../speech/speech.selector';
import { RootState } from './../../store';

const selfUserState = (state: RootState) => state.user;

export const selectUserState = createSelector(selfUserState, (state) => state);

export const selectCurrentFavoritesView = createSelector(
  selfUserState,
  (state) => state.currentFavoritesView,
);

export const selectCurrentSearchView = createSelector(
  selfUserState,
  (state) => state.currentSearchView,
);

export const selectCurrentSpeech = createSelector(selfUserState, (state) => {
  const { currentSpeechName } = state;
  return {
    language: selectLanguageFromSpeechName(currentSpeechName),
    name: currentSpeechName,
  };
});

export const selectCurrentThemeName = createSelector(
  selfUserState,
  (state) => state.currentThemeName,
);

export const selectHasSeenTutorial = createSelector(
  selfUserState,
  (state) => state.hasSeenTutorial,
);

export const selectFavorites = createSelector(
  selfUserState,
  (state) => state.favorites,
);

export const selectIsFavoriteById = (id: string) => {
  return createSelector(selectFavorites, (favorites) =>
    favorites.some((favorite) => favorite.id === id),
  );
};
