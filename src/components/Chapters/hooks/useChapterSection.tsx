import { useTranslation } from 'react-i18next';
import { CS } from '..';
import { innerText } from '../../../utils/innerText';
import { getIdFromChapterIdAndSectionId, getChapterColor } from '../utils';
import { useChapterSectionComponent } from './useChapterSectionComponent';

export const useChapterSection = ({ chapterId, sectionId }: CS) => {
  const { t } = useTranslation(`chapter${chapterId}` as const);
  const Component = useChapterSectionComponent({
    chapterId,
    sectionId,
  });
  const text = innerText(Component({ context: '' }));

  return {
    color: getChapterColor(chapterId),
    id: getIdFromChapterIdAndSectionId({ chapterId, sectionId }),
    image: {
      original: t(`${sectionId}.IMAGE.01.FILENAME` as const),
      thumbnail: {
        small: t(`${sectionId}.IMAGE.01.THUMBNAIL.SMALL` as const),
        medium: t(`${sectionId}.IMAGE.01.THUMBNAIL.MEDIUM` as const),
        large: t(`${sectionId}.IMAGE.01.THUMBNAIL.LARGE` as const),
      },
    },
    title: {
      chapter: t(`00.TITLE`),
      section: t(`${sectionId}.TITLE` as const),
    },
    url: `/chapter/${chapterId}/${sectionId}`,
    view: {
      list: {
        Component: () => <>{text[0] || ''} ...</>,
      },
      page: {
        Component,
        text,
      },
    },
  };
};
