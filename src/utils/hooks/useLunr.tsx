import lunr from 'lunr';
import { useMemo } from 'react';
import { ChapterId, getChapterStructures } from '../chapters';
import { useChapterSection } from './useChapterSection';

type LunrDocs = {
  [key: string]: {
    body: string;
    chapterId: ChapterId;
    id: string;
    sectionId: string;
    title: string;
  };
};

export type LunrResult = {
  chapterId: ChapterId;
  body: string;
  id: string;
  sectionId: string;
  title: string;
};

const createLunrDocs = (): LunrDocs => {
  const chapters = getChapterStructures();
  const lunrDocs = chapters.reduce((docs, sections) => {
    const chapterDocs = sections.reduce((sectionDocs, section) => {
      const { chapterId, sectionId } = section;
      if (sectionId === '00') {
        return sectionDocs;
      }

      const { title, url, view } = useChapterSection(chapterId, sectionId);

      return {
        ...sectionDocs,
        [url]: {
          body: view.page.text.join(' '),
          chapterId,
          id: url,
          sectionId,
          title: title.section,
        },
      };
    }, {});

    return { ...docs, ...chapterDocs };
  }, {});

  return lunrDocs;
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
