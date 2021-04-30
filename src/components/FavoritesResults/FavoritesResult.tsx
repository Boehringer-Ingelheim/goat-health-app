import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentFavoritesView } from '../../data/user/user.selector';
import { ChapterViewCard, ChapterViewList } from '../ChapterView';
import { CS } from '../Chapters';

export const FavoritesResult: FC<CS> = ({ chapterId, sectionId }) => {
  const currentView = useSelector(selectCurrentFavoritesView);

  if (currentView === 'card') {
    return <ChapterViewCard chapterId={chapterId} sectionId={sectionId} />;
  }

  if (currentView === 'list') {
    return <ChapterViewList chapterId={chapterId} sectionId={sectionId} />;
  }

  return null;
};
