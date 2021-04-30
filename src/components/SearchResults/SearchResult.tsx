import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentSearchView } from '../../data/user/user.selector';
import { ChapterViewCard, ChapterViewList } from '../ChapterView';
import { CS } from '../Chapters';

export const SearchResult: FC<CS> = ({ chapterId, sectionId }) => {
  const currentSearchView = useSelector(selectCurrentSearchView);

  if (currentSearchView === 'card') {
    return <ChapterViewCard chapterId={chapterId} sectionId={sectionId} />;
  }

  if (currentSearchView === 'list') {
    return <ChapterViewList chapterId={chapterId} sectionId={sectionId} />;
  }

  return null;
};
