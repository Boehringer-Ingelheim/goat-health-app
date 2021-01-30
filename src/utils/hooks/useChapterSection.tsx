import { book, bookmark } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import {
  ChapterId,
  getIdFromChapterIdAndSectionId,
  getChapterColor,
} from '../chapters';
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
    id: getIdFromChapterIdAndSectionId(chapterId, sectionId),
    image: {
      original: t(`CHAPTER.${chapterId}.${sectionId}.IMAGE.01.FILENAME`),
      thumbnail: {
        small: t(`CHAPTER.${chapterId}.${sectionId}.IMAGE.01.THUMBNAIL.SMALL`),
        medium: t(
          `CHAPTER.${chapterId}.${sectionId}.IMAGE.01.THUMBNAIL.MEDIUM`,
        ),
        large: t(`CHAPTER.${chapterId}.${sectionId}.IMAGE.01.THUMBNAIL.LARGE`),
      },
    },
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
