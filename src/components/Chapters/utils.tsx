import { ChapterId, CS } from '.';
import { chapter } from './ChapterContent';

const CHAPTER_COLOR: Record<ChapterId | string, string> = {
  '01': 'accent-step-0100',
  '02': 'accent-step-0200',
  '03': 'accent-step-0300',
  '04': 'accent-step-0400',
  '05': 'accent-step-0500',
  '06': 'accent-step-0600',
  '07': 'accent-step-0700',
  '08': 'accent-step-0800',
  '09': 'accent-step-0900',
  '10': 'accent-step-1000',
  '11': 'accent-step-1100',
};

export const getChapterColor = (id: ChapterId) => {
  const chapterColor = CHAPTER_COLOR[id];
  return chapterColor;
};

export const getChapterIds = (): ChapterId[] => {
  const chapterIds = Object.keys(chapter) as ChapterId[];
  return chapterIds;
};

export const getSectionIds = (id: ChapterId) => {
  const sectionIds = Object.keys(chapter[id]) as Array<
    keyof typeof chapter[ChapterId]
  >;
  return sectionIds;
};

export const isValidChapterSection = (chapterId: any, sectionId: any) => {
  return chapter?.[chapterId]?.[sectionId] ? true : false;
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
  const [chapterId, sectionId] = id.split('-').slice(1);
  return { chapterId, sectionId } as CS;
};

export const getIdFromChapterIdAndSectionId = ({
  chapterId,
  sectionId,
}: CS) => {
  return `chapter-${chapterId}-${sectionId}`;
};
