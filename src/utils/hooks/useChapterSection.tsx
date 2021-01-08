import { book, bookmark } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { ChapterId, getChapterColor } from '../chapters';
import { innerText } from '../innerText';
import { getChapterSectionContent } from './useChapterSectionContent';

export const useChapterSection = (chapterId: ChapterId, sectionId: string) => {
  const { t } = useTranslation();
  const content = getChapterSectionContent(chapterId, sectionId);
  const text = innerText(content);

  const color = getChapterColor(chapterId);

  const isHeader = sectionId === '00';

  return {
    color,
    icon: isHeader ? book : bookmark,
    id: `chapter${chapterId}${sectionId}`,
    image: t(`CHAPTER.${chapterId}.${sectionId}.IMAGE.01.FILENAME`),
    isHeader,
    title: {
      chapter: t(`CHAPTER.${chapterId}.00.TITLE`) || '',
      section: t(`CHAPTER.${chapterId}.${sectionId}.TITLE`) || '',
    },
    url: `/chapter/${chapterId}/${sectionId}`,
    view: {
      list: {
        content: <>{text[0] || ''}</>,
      },
      page: {
        content,
        text,
      },
    },
  };
};
