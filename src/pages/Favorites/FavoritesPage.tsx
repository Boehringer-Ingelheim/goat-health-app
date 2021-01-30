import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FavoritesPopover } from './FavoritesPopover';
import { FavoritesResults } from './FavoritesResults';

export const FavoritesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t('FAVORITES.TITLE')}</IonTitle>
          <IonButtons slot="primary">
            <FavoritesPopover />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent color="primary-collapse-condense" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle size="large">{t('FAVORITES.TITLE')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="app-background app-fullscreen">
          <FavoritesResults />
        </div>
      </IonContent>
    </IonPage>
  );
};
