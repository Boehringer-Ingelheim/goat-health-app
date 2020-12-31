import { useTranslation } from 'react-i18next';
import { CHAPTER_01 } from '../components/Chapters/01/config';
import { useMemo } from 'react';
import lunr from 'lunr';
import { CHAPTER_02 } from '../components/Chapters/02/config';

type LunrDocs = {
  [key: string]: {
    id: string;
    title: string;
    body: string;
  };
};

export type LunrResult = {
  id: string;
  title: string;
  body: string;
};

const createLunrDocs = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  const chapters = [...CHAPTER_01, ...CHAPTER_02];

  return chapters.reduce<LunrDocs>((docs, chapter) => {
    if (chapter.isHeader) {
      return docs;
    }

    const doc = {
      [chapter.url]: {
        id: chapter.url,
        title: t(chapter.title),
        body: chapter.body?.map((text) => t(text)).join(' ') || '',
      },
    };

    return { ...docs, ...doc };
  }, {});
};

export const useLunr = (query: string) => {
  const docs = createLunrDocs();

  const idx = useMemo(() => {
    return lunr((builder) => {
      builder.field('body');
      builder.field('title');

      Object.values(docs).forEach((doc) => {
        builder.add(doc);
      });
    });
  }, [docs]);

  const rankings = useMemo(() => {
    if (!query || !idx) {
      return [];
    }
    return idx.search(query);
  }, [query, idx]);

  const results = useMemo(() => {
    if (!rankings) {
      return [];
    }
    return rankings.map(({ ref }) => docs[ref]);
  }, [rankings, docs]);

  return { rankings, results };
};
