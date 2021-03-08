import { innerText } from '../../../utils/innerText';
import { ChapterId } from '../index';
import { useChapterSectionContext } from './useChapterSectionContext';

export const useChapterSectionContent = (
  chapterId: ChapterId,
  sectionId: string,
) => {
  const { Content } = useChapterSectionContext(chapterId, sectionId);
  return {
    text: innerText(Content()),
    Content,
  };
};
