import produce from 'immer';
import ActionTypes from './chapter.constants';

interface ChapterActions {
  readonly type: string;
  readonly payload: any;
}

export interface ChapterState {
  readonly favorites: Array<string>;
}

const initState = {
  favorites: [],
};

const chapterReducer = (
  state: ChapterState = initState,
  action: ChapterActions,
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.ADD_FAVORITE:
        draft.favorites = [...state.favorites, action.payload];
        break;
      case ActionTypes.REMOVE_FAVORITE:
        draft.favorites = state.favorites.filter(
          (favorite) => !favorite.includes(action.payload),
        );
        break;
      case ActionTypes.RESET_CHAPTER_STATE:
        draft = initState;
        break;
    }
  });

export default chapterReducer;
