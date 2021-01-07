import { CHAPTER_COLOR } from '../data/chapter/chapter';
import * as translations from '../translations/en.json';

export type ChapterId = keyof typeof translations.CHAPTER;

export const getChapterColor = (id: string) => {
  const chapterColor = CHAPTER_COLOR.get(id);
  return chapterColor;
};

export const getChapterStructures = () => {
  const chapterIds = getChapterIds();
  const structure = chapterIds.map((chapterId) => {
    const sectionIds = getSectionIds(chapterId);
    return sectionIds.map((sectionId) => {
      return { chapterId, sectionId };
    });
  });
  return structure;
};

export const getChapterIds = (): ChapterId[] => {
  const chapterIds = Object.keys(translations.CHAPTER).sort();
  return chapterIds as ChapterId[];
};

export const getSectionIds = (chapterId: ChapterId) => {
  const sectionIds = Object.keys(translations.CHAPTER[chapterId]).sort();
  return sectionIds;
};

export const getChapterIdsByUrl = (url: string) => {
  // url syntax: '/chapter/01/01'
  if (url.startsWith('/chapter/')) {
    const [id, subId] = url.split('/').slice(2);
    return { id, subId };
  }
  return { id: '', subId: '' };
};
