import ActionTypes from './chapter.constants';

export const addFavorite = (chapterId: string) => ({
  type: ActionTypes.ADD_FAVORITE,
  payload: chapterId,
});

export const removeFavorite = (chapterId: string) => ({
  type: ActionTypes.REMOVE_FAVORITE,
  payload: chapterId,
});

export const resetChapterState = () => ({
  type: ActionTypes.RESET_CHAPTER_STATE,
});
