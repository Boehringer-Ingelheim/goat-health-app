import { ChapterId, CS } from '../Chapters';
import { getChapterIds, getSectionIds } from '../Chapters/utils';

const createChapterSectionUrl = (chapterId: ChapterId, sectionId: string) => {
  return `/chapter/${chapterId}/${sectionId}`;
};

const decreaseValue = <Type extends string | number>(
  value: Type,
  count: number = 1,
): Type | string => {
  const result = Number(value) - count;
  return result.toString().padStart(2, '0');
};

const increaseValue = <Type extends string | number>(
  value: Type,
  count: number = 1,
): Type | string => {
  const result = Number(value) + count;
  return result.toString().padStart(2, '0');
};

export const getChapterNextSectionUrl = ({ chapterId, sectionId }: CS) => {
  const sectionIds = getSectionIds(chapterId);
  const indexOfSectionId = sectionIds.indexOf(sectionId);

  if (indexOfSectionId < sectionIds.length - 1) {
    const nextSectionId = increaseValue(sectionId);
    const chapterUrl = createChapterSectionUrl(chapterId, nextSectionId);
    return chapterUrl;
  }

  const chapterIds = getChapterIds();
  const indexOfChapterId = chapterIds.indexOf(chapterId);

  if (indexOfChapterId < chapterIds.length - 1) {
    const nextChapterId = increaseValue(chapterId) as ChapterId;
    const chapterUrl = createChapterSectionUrl(nextChapterId, '01');
    return chapterUrl;
  }

  const chapterUrl = createChapterSectionUrl('01', '01');
  return chapterUrl;
};

export const getChapterPreviousSectionUrl = ({ chapterId, sectionId }: CS) => {
  const sectionIds = getSectionIds(chapterId);
  const indexOfSectionId = sectionIds.indexOf(sectionId);

  if (indexOfSectionId > 0) {
    const previousSectionId = decreaseValue(sectionId);
    const chapterUrl = createChapterSectionUrl(chapterId, previousSectionId);
    return chapterUrl;
  }

  const chapterIds = getChapterIds();
  const indexOfChapterId = chapterIds.indexOf(chapterId);

  if (indexOfChapterId > 0) {
    const previousChapterId = decreaseValue(chapterId) as ChapterId;
    const previousSectionId = getSectionIds(previousChapterId);
    const lastChapterSectionId =
      previousSectionId[previousSectionId.length - 1];

    const chapterUrl = createChapterSectionUrl(
      previousChapterId,
      lastChapterSectionId,
    );
    return chapterUrl;
  }

  const lastChapterId = chapterIds[chapterIds.length - 1];
  const previousSectionId = getSectionIds(lastChapterId as ChapterId);
  const lastChapterSectionId = previousSectionId[previousSectionId.length - 1];

  const chapterUrl = createChapterSectionUrl(
    lastChapterId,
    lastChapterSectionId,
  );
  return chapterUrl;
};
