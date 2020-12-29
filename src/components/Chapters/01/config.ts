import { book, bookmark } from 'ionicons/icons';
import { Chapter } from '../types';

export const CHAPTER_01_00: Chapter = {
  color: 'accent-step-0100',
  icon: book,
  image: '',
  isHeader: true,
  title: 'CHAPTER.01.00.TITLE',
  url: '',
};

export const CHAPTER_01_01: Chapter = {
  body: [
    'CHAPTER.01.01.TEXT.PARAGRAPH.01',
    'CHAPTER.01.01.TEXT.LIST.01.010000',
    'CHAPTER.01.01.TEXT.LIST.01.010100',
    'CHAPTER.01.01.TEXT.LIST.01.010200',
    'CHAPTER.01.01.TEXT.LIST.01.020000',
    'CHAPTER.01.01.TEXT.LIST.01.020100',
    'CHAPTER.01.01.TEXT.LIST.01.020200',
    'CHAPTER.01.01.TEXT.LIST.01.020300',
    'CHAPTER.01.01.TEXT.LIST.01.030000',
    'CHAPTER.01.01.TEXT.LIST.01.040000',
    'CHAPTER.01.01.TEXT.LIST.01.050000',
    'CHAPTER.01.01.TEXT.LIST.01.060000',
    'CHAPTER.01.01.TEXT.LIST.01.070000',
    'CHAPTER.01.01.TEXT.LIST.01.080000',
    'CHAPTER.01.01.IMAGE.01.TITLE',
  ],
  color: 'accent-step-0100',
  icon: bookmark,
  image: 'CHAPTER.01.01.IMAGE.01.FILENAME',
  isHeader: false,
  title: 'CHAPTER.01.01.TITLE',
  url: '/chapter/01/01',
};

export const CHAPTER_01_02: Chapter = {
  body: [
    'CHAPTER.01.02.TEXT.PARAGRAPH.01',
    'CHAPTER.01.02.TEXT.LIST.01.010000',
    'CHAPTER.01.02.TEXT.LIST.01.020000',
    'CHAPTER.01.02.TEXT.LIST.01.030000',
    'CHAPTER.01.02.TEXT.LIST.01.040000',
    'CHAPTER.01.02.TEXT.LIST.01.050000',
    'CHAPTER.01.02.TEXT.LIST.01.060000',
    'CHAPTER.01.02.IMAGE.01.TITLE',
  ],
  color: 'accent-step-0100',
  icon: bookmark,
  image: 'CHAPTER.01.02.IMAGE.01.FILENAME',
  isHeader: false,
  title: 'CHAPTER.01.02.TITLE',
  url: '/chapter/01/02',
};

export const CHAPTER_01_03: Chapter = {
  body: [
    'CHAPTER.01.03.TEXT.LIST.01.010000',
    'CHAPTER.01.03.TEXT.LIST.01.020000',
    'CHAPTER.01.03.TEXT.LIST.01.030000',
    'CHAPTER.01.03.TEXT.LIST.01.040000',
    'CHAPTER.01.03.TEXT.LIST.01.050000',
    'CHAPTER.01.03.TEXT.LIST.01.060000',
    'CHAPTER.01.03.IMAGE.01.TITLE',
  ],
  title: 'CHAPTER.01.03.TITLE',
  image: 'CHAPTER.01.03.IMAGE.01.FILENAME',
  isHeader: false,
  url: '/chapter/01/03',
  icon: bookmark,
  color: 'accent-step-0100',
};

export const CHAPTER_01_04: Chapter = {
  body: [
    'CHAPTER.01.04.TEXT.PARAGRAPH.01',
    'CHAPTER.01.04.TEXT.LIST.01.010000',
    'CHAPTER.01.04.TEXT.LIST.01.020000',
    'CHAPTER.01.04.TEXT.LIST.01.020100',
    'CHAPTER.01.04.TEXT.LIST.01.020200',
    'CHAPTER.01.04.TEXT.LIST.01.020300',
    'CHAPTER.01.04.TEXT.LIST.01.030000',
    'CHAPTER.01.04.TEXT.LIST.01.030100',
    'CHAPTER.01.04.TEXT.LIST.01.030200',
    'CHAPTER.01.04.TEXT.LIST.01.030300',
    'CHAPTER.01.04.TEXT.LIST.01.040000',
    'CHAPTER.01.04.IMAGE.01.TITLE',
  ],
  title: 'CHAPTER.01.04.TITLE',
  image: 'CHAPTER.01.04.IMAGE.01.FILENAME',
  isHeader: false,
  url: '/chapter/01/04',
  icon: bookmark,
  color: 'accent-step-0100',
};

export const CHAPTER_01: Chapter[] = [
  CHAPTER_01_00,
  CHAPTER_01_01,
  CHAPTER_01_02,
  CHAPTER_01_03,
  CHAPTER_01_04,
];
