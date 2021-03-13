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
import { SearchBar } from '../../components/SearchBar';
import { SearchPopover } from '../../components/SearchPopover';
import { SearchResults } from '../../components/SearchResults';

export const SearchPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t('SEARCH.TITLE')}</IonTitle>
          <IonButtons slot="primary">
            <SearchPopover />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent color="primary-collapse-condense" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle size="large">{t('SEARCH.TITLE')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="app-background app-fullscreen">
          <SearchBar />
          <SearchResults />
        </div>
      </IonContent>
    </IonPage>
  );
};
