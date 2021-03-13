import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useFuse } from '../../../utils/hooks/useFuse';
import { Chapter } from '../../Chapters';
import { getSearchDataFromChapter } from '../utils';

export const useSearchResults = (searchQuery: string) => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  const data = useMemo(() => {
    const chapter = (i18n.getDataByLanguage(language)?.translation?.CHAPTER ||
      {}) as Chapter;
    return getSearchDataFromChapter(chapter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const options = {
    shouldSort: true,
    includeMatches: true,
    threshold: 0.1,
    location: 0,
    distance: 100,
    minMatchCharLength: 1,
    keys: ['chapterTitle', 'sectionTitle', 'lines'],
  };

  const { results, search } = useFuse(data, options);

  useEffect(() => {
    return search(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return results;
};
