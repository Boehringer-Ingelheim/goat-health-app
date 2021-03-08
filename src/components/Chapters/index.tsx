import * as translations from '../../translations/en.json';

export type ChapterContext = '' | 'ssml';

export type ChapterId = keyof typeof translations.CHAPTER;
