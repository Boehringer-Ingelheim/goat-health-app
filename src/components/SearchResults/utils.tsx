import { Chapter, Section } from '../Chapters';

type SearchData = {
  chapterId: string;
  chapterTitle: string;
  sectionId: string;
  sectionTitle: string;
  lines: string[];
  imageTitles?: string[];
};

const flattenObject = (object, prefix = '') => {
  return Object.keys(object).reduce<Record<string, string>>(
    (previousValue, key) => {
      const pre = prefix.length ? `${prefix}.` : ``;
      if (typeof object[key] === 'object') {
        Object.assign(
          previousValue,
          flattenObject(object[key], `${pre}${key}`),
        );
      } else {
        previousValue[`${pre}${key}`] = object[key];
      }
      return previousValue;
    },
    {},
  );
};

const getTextLinesFromSection = (section: Section) => {
  const flattenSection = flattenObject(section);

  return Object.entries(flattenSection).reduce<string[]>(
    (previousValue, [key, value]) => {
      if (key.startsWith('TEXT') && !key.endsWith('_ssml')) {
        return [...previousValue, value];
      }
      return [...previousValue];
    },
    [],
  );
};

const getSearchDataFromSection = (section: Record<string, Section>) => {
  return Object.entries(section).reduce<
    Omit<SearchData, 'chapterId' | 'chapterTitle'>[]
  >((previousValue, [key, value]) => {
    // CHAPTER.XY.00 = Chapter Title
    if (key === '00') {
      return previousValue;
    }
    const lines = getTextLinesFromSection(value);
    const sectionTitle = value?.TITLE || '';

    return [...previousValue, { lines, sectionId: key, sectionTitle }];
  }, []);
};

export const getSearchDataFromChapter = (chapter: Chapter) => {
  return Object.entries(chapter).flatMap(([chapterId, section]) => {
    const chapterTitle = section?.['00']?.TITLE || '';
    const searchData = getSearchDataFromSection(section);
    return searchData.flatMap((section) => {
      return {
        ...section,
        chapterId,
        chapterTitle,
      };
    });
  });
};
