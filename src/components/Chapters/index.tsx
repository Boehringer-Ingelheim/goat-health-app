import { chapter } from './ChapterContent';

export type Chapter = Record<string, Record<string, Section>>;

export type I18nChapter = Record<
  `chapter${ChapterId}`,
  Record<keyof typeof chapter[ChapterId], Section>
>;

export type Context = { context?: '' | 'ssml' };

export type ChapterId = keyof typeof chapter;

export type I18nChapterX = {
  [K in `chapter${ChapterId}`]: {
    [S in keyof typeof chapter[ChapterId]]: Section;
  };
};

export type ChapterSection = {
  chapterId: ChapterId;
  sectionId: keyof typeof chapter[ChapterId];
};
export type CS = ChapterSection;

export type ChapterSectionContext = ChapterSection & Context;
export type CSC = ChapterSectionContext;

export type ChapterSectionFunction = (chapterSection: ChapterSection) => void;
export type CSF = ChapterSectionFunction;

export type ChapterSectionContextFunction = (
  chapterSectionContext: ChapterSectionContext,
) => void;
export type CSCF = ChapterSectionContextFunction;

// export type ChapterSectionFunction = <ChapterSection>() => {};

export type SectionContext = {
  context: Context;
};

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
