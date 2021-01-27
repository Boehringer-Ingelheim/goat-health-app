import {
  book,
  bookmark,
  homeOutline,
  information,
  searchOutline,
  settingsOutline,
} from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import {
  ChapterId,
  getChapterColor,
  getChapterIds,
  getSectionIds,
} from '../chapters';

export interface Menu {
  color: string | undefined;
  icon: string;
  isHeader: boolean;
  title: string;
  url: string;
}

interface MenuChapter extends Menu {
  chapterId: ChapterId;
  sectionId: string;
}

export const useMenus = (): Menu[] => {
  const about = useMenuAbout();
  const home = useMenuHome();
  const search = useMenuSearch();
  const settings = useMenuSettings();
  const chapters = useMenuChapters();

  return [home, about, search, settings, ...chapters.flat()];
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

export const useMenuChapters = (): MenuChapter[][] => {
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

const useMenuSettings = (): Menu => {
  const { t } = useTranslation();

  return {
    color: '',
    icon: settingsOutline,
    isHeader: false,
    title: t('SETTINGS.TITLE'),
    url: '/settings',
  };
};
