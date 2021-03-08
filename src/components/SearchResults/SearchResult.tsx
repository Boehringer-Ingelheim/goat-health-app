import { useSelector } from 'react-redux';
import { ChapterViewCard, ChapterViewList } from '../ChapterView';
import { ChapterId } from '../Chapters';
import { selectCurrentSearchView } from '../../data/user/user.selector';

export const SearchResult = ({
  chapterId = '01' as ChapterId,
  sectionId = '01',
}) => {
  const currentSearchView = useSelector(selectCurrentSearchView);

  if (currentSearchView === 'card') {
    return <ChapterViewCard chapterId={chapterId} sectionId={sectionId} />;
  }

  if (currentSearchView === 'list') {
    return <ChapterViewList chapterId={chapterId} sectionId={sectionId} />;
  }

  return null;
};
