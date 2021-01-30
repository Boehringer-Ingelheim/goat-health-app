import { CHAPTER_COLOR } from '../data/chapter/chapter';
import * as translations from '../translations/en.json';
import { increaseValue, decreaseValue } from './format';

export type ChapterId = keyof typeof translations.CHAPTER;

const createChapterSectionUrl = (
  chapterId: ChapterId | string,
  sectionId: string,
) => {
  return `/chapter/${chapterId}/${sectionId}`;
};

export const getChapterColor = (chapterId: ChapterId) => {
  const chapterColor = CHAPTER_COLOR.get(chapterId);
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

export const getSectionIdsWithoutHeaders = (chapterId: ChapterId) => {
  const sectionIds = getSectionIds(chapterId).filter(
    (sectionId) => sectionId !== '00',
  );
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

export const getChapterIdAndSectionIdFromId = (id: string) => {
  // chapter-section-id: 'chapter-01-01'
  if (id.startsWith('chapter-')) {
    const [chapterId, sectionId] = id.split('-').slice(1);
    return { chapterId, sectionId };
  }
  return { chapterId: '', sectionId: '' };
};

export const getChapterNextSectionUrl = (
  chapterId: ChapterId,
  sectionId: string,
) => {
  const sectionIds = getSectionIdsWithoutHeaders(chapterId);
  const indexOfSectionId = sectionIds.indexOf(sectionId);

  if (indexOfSectionId < sectionIds.length - 1) {
    const nextSectionId = increaseValue(sectionId);
    const chapterUrl = createChapterSectionUrl(chapterId, nextSectionId);
    return chapterUrl;
  }

  const chapterIds = getChapterIds();
  const indexOfChapterId = chapterIds.indexOf(chapterId);

  if (indexOfChapterId < chapterIds.length - 1) {
    const nextChapterId = increaseValue(chapterId);
    const chapterUrl = createChapterSectionUrl(nextChapterId, '01');
    return chapterUrl;
  }

  const chapterUrl = createChapterSectionUrl('01', '01');
  return chapterUrl;
};

export const getChapterPreviousSectionUrl = (
  chapterId: ChapterId,
  sectionId: string,
) => {
  const sectionIds = getSectionIdsWithoutHeaders(chapterId);
  const indexOfSectionId = sectionIds.indexOf(sectionId);

  if (indexOfSectionId > 0) {
    const previousSectionId = decreaseValue(sectionId);
    const chapterUrl = createChapterSectionUrl(chapterId, previousSectionId);
    return chapterUrl;
  }

  const chapterIds = getChapterIds();
  const indexOfChapterId = chapterIds.indexOf(chapterId);

  if (indexOfChapterId > 0) {
    const previousChapterId = decreaseValue(chapterId);
    const previousSectionId = getSectionIdsWithoutHeaders(
      previousChapterId as ChapterId,
    );
    const lastChapterSectionId =
      previousSectionId[previousSectionId.length - 1];

    const chapterUrl = createChapterSectionUrl(
      previousChapterId,
      lastChapterSectionId,
    );
    return chapterUrl;
  }

  const lastChapterId = chapterIds[chapterIds.length - 1];
  const previousSectionId = getSectionIdsWithoutHeaders(
    lastChapterId as ChapterId,
  );
  const lastChapterSectionId = previousSectionId[previousSectionId.length - 1];

  const chapterUrl = createChapterSectionUrl(
    lastChapterId,
    lastChapterSectionId,
  );
  return chapterUrl;
};

export const getIdFromChapterIdAndSectionId = (
  chapterId: ChapterId,
  sectionId: string,
) => {
  return `chapter-${chapterId}-${sectionId}`;
};
