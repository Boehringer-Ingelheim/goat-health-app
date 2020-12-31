import { RootState } from '../../store';

export const selectChapterState = (state: RootState) => {
  return state.chapter;
};

export const selectChapterFavorites = (state: RootState) => {
  const chapterState = selectChapterState(state);
  return chapterState.favorites;
};

export const selectIsChapterFavorite = (
  state: RootState,
  chapterId: string,
): boolean => {
  const chapterFavorites = selectChapterFavorites(state);
  const isFavorite = chapterFavorites.includes(chapterId);
  return isFavorite;
};
