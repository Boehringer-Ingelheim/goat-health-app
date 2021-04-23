import {
  IonContent,
  IonList,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import {
  bookmark,
  homeOutline,
  information,
  searchOutline,
  settingsOutline,
  starOutline,
} from 'ionicons/icons';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  getChapterColor,
  getChapterIds,
  getSectionIds,
} from '../Chapters/utils';
import './index.css';
import { MenuListHeader } from './MenuListHeader';
import { MenuListItem } from './MenuListItem';

export const Menu: FC = () => {
  const { t } = useTranslation();

  const chapterIds = getChapterIds();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <MenuListItem icon={homeOutline} link={`/home`}>
            {t(`app:HOME.TITLE`)}
          </MenuListItem>
          <MenuListItem icon={information} link={`/about`}>
            {t(`app:ABOUT.TITLE`)}
          </MenuListItem>
          <MenuListItem icon={searchOutline} link={`/search`}>
            {t(`app:SEARCH.TITLE`)}
          </MenuListItem>
          <MenuListItem icon={starOutline} link={`/favorites`}>
            {t(`app:FAVORITES.TITLE`)}
          </MenuListItem>
          <MenuListItem icon={settingsOutline} link={`/settings`}>
            {t(`app:SETTINGS.TITLE`)}
          </MenuListItem>
          {chapterIds.map((chapterId) => {
            const color = getChapterColor(chapterId);
            const sectionIds = getSectionIds(chapterId);
            return (
              <React.Fragment key={chapterId}>
                <MenuListHeader>
                  {t(`chapter${chapterId}:00.TITLE` as const)}
                </MenuListHeader>
                {sectionIds.map((sectionId) => {
                  return (
                    <MenuListItem
                      color={color}
                      icon={bookmark}
                      key={sectionId}
                      link={`/chapter/${chapterId}/${sectionId}`}
                    >
                      {t(`chapter${chapterId}:${sectionId}.TITLE` as const)}
                    </MenuListItem>
                  );
                })}
              </React.Fragment>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
