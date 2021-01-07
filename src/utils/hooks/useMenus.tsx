import {
  book,
  bookmark,
  homeOutline,
  information,
  searchOutline,
} from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import { getChapterColor, getChapterIds, getSectionIds } from '../chapters';

export interface Menu {
  chapterId?: string;
  color: string | undefined;
  icon: string;
  isHeader: boolean;
  sectionId?: string;
  title: string;
  url: string;
}

export const useMenus = (): Menu[] => {
  const about = useMenuAbout();
  const home = useMenuHome();
  const search = useMenuSearch();
  const chapters = useMenuChapters();

  return [home, about, search, ...chapters.flat()];
};

const useMenuAbout = (): Menu => {
  const { t } = useTranslation();

  return {
    color: '',
    icon: information,
    isHeader: false,
    title: t('ABOUT.TITLE'),
    url: '/page/about',
  };
};

export const useMenuChapters = (): Menu[][] => {
  const { t } = useTranslation();

  const chapterIds = getChapterIds();
  const chapterMenus = chapterIds.map((chapterId) => {
    const sectionIds = getSectionIds(chapterId);
    const sectionMenus = sectionIds.flatMap((sectionId) => {
      const color = getChapterColor(chapterId);
      const isHeader = sectionId === '00';
      return {
        chapterId,
        color,
        icon: isHeader ? book : bookmark,
        isHeader,
        sectionId,
        title: t(`CHAPTER.${chapterId}.${sectionId}.TITLE`),
        url: `/chapter/${chapterId}/${sectionId}`,
      };
    });
    return sectionMenus;
  });
  return chapterMenus;
};

const useMenuHome = (): Menu => {
  const { t } = useTranslation();

  return {
    color: '',
    icon: homeOutline,
    isHeader: false,
    title: t('HOME.TITLE'),
    url: '/page/home',
  };
};

const useMenuSearch = (): Menu => {
  const { t } = useTranslation();

  return {
    color: '',
    icon: searchOutline,
    isHeader: false,
    title: t('SEARCH.TITLE'),
    url: '/page/search',
  };
};
