import { RootState } from '../../reducers';

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
) => {
  const chapterFavorites = selectChapterFavorites(state);
  return chapterFavorites.includes(chapterId);
};
