import { ChapterId } from '../chapters';
import { innerText } from '../innerText';
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
