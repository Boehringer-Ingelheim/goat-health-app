import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchPopover } from '../../components/SearchPopover';
import { SearchResults } from '../../components/SearchResults';
import { useLunr } from '../../utils/hooks/useLunr';

export const SearchPage: React.FC = () => {
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState('');
  const { results } = useLunr(searchValue);

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
          <IonSearchbar
            value={searchValue}
            onIonChange={(event) => setSearchValue(event.detail.value!)}
          ></IonSearchbar>
          <SearchResults results={results} />
        </div>
      </IonContent>
    </IonPage>
  );
};
