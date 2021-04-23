import { ChapterId, CS, I18nChapter, Section } from '../Chapters';

type SearchData = CS & {
  chapterTitle: string;
  sectionTitle: string;
  lines: string[];
  imageTitles?: string[];
};

const flattenObject = (object: Object, prefix = '') => {
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

  return Object.entries(flattenSection).reduce(
    (previousValue: string[], [key, value]) => {
      if (key.startsWith('TEXT') && !key.endsWith('_ssml')) {
        return [...previousValue, value];
      }
      return [...previousValue];
    },
    [],
  );
};

export const getSearchDataFromLanguage = (data: I18nChapter) => {
  return Object.entries(data).reduce(
    (acc: SearchData[], [keyChapter, chapter]) => {
      if (keyChapter.startsWith('chapter')) {
        const chapterId = keyChapter.slice(-2) as ChapterId;
        const chapterTitle = chapter?.['00']?.TITLE || '';
        const sectionsData = Object.entries(chapter).reduce<SearchData[]>(
          (accSections: any[], [keySection, section]) => {
            if (keySection === '00') {
              return [...accSections];
            }
            const lines = getTextLinesFromSection(section);
            const sectionTitle = section?.TITLE || '';

            return [
              ...accSections,
              {
                chapterId,
                chapterTitle,
                lines,
                sectionId: keySection,
                sectionTitle,
              },
            ];
          },
          [],
        );
        return [...acc, ...sectionsData];
      }
      return [...acc];
    },
    [],
  );
};
