import { book, bookmark } from 'ionicons/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { getChapterColor } from '../chapters';
import { innerText } from '../innerText';
import { getChapterSectionContent } from './useChapterSectionContent';

const increaseValue = (value: string, count: number = 1): string => {
  const result = Number(value) + count;
  return result.toString().padStart(2, '0');
};

const decreaseValue = (value: string, count: number = 1): string => {
  const result = Number(value) - count;
  return result.toString().padStart(2, '0');
};

export const useChapterSection = (chapterId: string, sectionId: string) => {
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
    link: {
      next: `/chapter/${chapterId}/${increaseValue(sectionId)}`,
      previous: `/chapter/${chapterId}/${decreaseValue(sectionId)}`,
      self: `/chapter/${chapterId}/${sectionId}`,
    },
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
