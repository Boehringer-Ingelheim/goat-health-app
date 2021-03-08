import { useSelector } from 'react-redux';
import { ChapterId } from '../Chapters';
import { ChapterViewCard, ChapterViewList } from '../ChapterView';
import { selectCurrentFavoritesView } from '../../data/user/user.selector';

export const FavoritesResult = ({
  chapterId = '01' as ChapterId,
  sectionId = '01',
}) => {
  const currentView = useSelector(selectCurrentFavoritesView);

  if (currentView === 'card') {
    return <ChapterViewCard chapterId={chapterId} sectionId={sectionId} />;
  }

  if (currentView === 'list') {
    return <ChapterViewList chapterId={chapterId} sectionId={sectionId} />;
  }

  return null;
};
