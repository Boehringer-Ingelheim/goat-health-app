import * as translations from '../../translations/en-US.json';

export type Chapter = Record<string, Record<string, Section>>;

export type ChapterContext = '' | 'ssml';

export type ChapterId = keyof typeof translations.CHAPTER;

export type Section = {
  TITLE: string;
  TEXT?: {
    PARAGRAPH: {
      [paragraphId: string]: string;
    };
    LIST?: {
      [listId: string]: {
        [listEntry: string]: string;
      };
    };
  };
  IMAGE?: {
    [imageId: string]: {
      TITLE: string;
    };
  };
};
