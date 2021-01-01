import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './../../store';

const selfUserState = (state: RootState) => state.user;

export const selectUserState = createSelector(selfUserState, (state) => state);

export const selectCurrentSearchView = createSelector(
  selfUserState,
  (state) => state.currentSearchView,
);

export const selectCurrentTheme = createSelector(
  selfUserState,
  (state) => state.currentTheme,
);

export const selectHasSeenTutorial = createSelector(
  selfUserState,
  (state) => state.hasSeenTutorial,
);

export const selectFavorites = createSelector(
  selfUserState,
  (state) => state.favorites,
);

export const selectIsFavorite = (chapterId: string) => {
  return createSelector(selectFavorites, (favorites) =>
    favorites.includes(chapterId),
  );
};
