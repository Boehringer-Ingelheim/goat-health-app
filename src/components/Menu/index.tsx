import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonFooter,
  IonHeader,
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
  settingsOutline,
  information,
  homeOutline,
  searchOutline,
} from 'ionicons/icons';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import './index.css';
import { useTranslation } from 'react-i18next';
import { CHAPTER_01 } from '../Chapters/01/config';
import { CHAPTER_02 } from '../Chapters/02/config';

interface AppPage {
  color?: string;
  isHeader?: boolean;
  icon: string;
  title: string;
  url: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/home',
    icon: homeOutline,
  },
  {
    title: 'About',
    url: '/page/about',
    icon: information,
  },
  {
    title: 'SEARCH.TITLE',
    url: '/page/search',
    icon: searchOutline,
  },
  ...CHAPTER_01,
  ...CHAPTER_02,
];

interface MenuProps {}

export const Menu: React.FunctionComponent<MenuProps> = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonHeader>
        <IonItem lines="none" detail={false} color="primary">
          <IonLabel>Menu</IonLabel>
        </IonItem>
      </IonHeader>
      <IonContent>
        <IonList>
          {appPages.map((appPage, appPageIndex) => {
            const { color, icon, title } = appPage;

            if (appPage.isHeader) {
              return (
                <IonListHeader key={appPageIndex}>
                  <IonLabel>{t(title)}</IonLabel>
                </IonListHeader>
              );
            }

            return (
              <IonMenuToggle key={appPageIndex} autoHide={false}>
                <IonItem
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                  onClick={() => dispatch(push(appPage.url))}
                >
                  <IonIcon color={color} icon={icon} slot="start" />
                  <IonLabel>{t(title)}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
      <IonFooter>
        <IonMenuToggle autoHide={false}>
          <IonItem
            routerLink={'/settings'}
            routerDirection="none"
            lines="none"
            detail={false}
            onClick={() => dispatch(push('/settings'))}
          >
            <IonIcon slot="start" icon={settingsOutline} />
            <IonLabel>Settings</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonFooter>
    </IonMenu>
  );
};
