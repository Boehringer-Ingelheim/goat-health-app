import React, { useState } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRouterLink,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { useLunr } from '../../utils/lunr';
import { Chapter, getChapterIdsByUrl } from '../../components/Chapters';

interface ContainerProps {}

export const SearchPage: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState('');
  const { results } = useLunr(searchValue);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary" style={{ '--opacity': 1 }}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t('SEARCH.TITLE')}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar color="primary" style={{ '--opacity': 1 }}>
            <IonTitle size="large">{t('SEARCH.TITLE')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar
          value={searchValue}
          onIonChange={(event) => setSearchValue(event.detail.value!)}
        ></IonSearchbar>
        <div style={{ margin: 'auto', width: 'fit-content' }}>
          {results.map((result, resultIndex) => {
            const chapterUrl = result.id;
            const { id, subId } = getChapterIdsByUrl(chapterUrl);
            return (
              <IonRouterLink
                key={resultIndex}
                routerLink={chapterUrl}
                routerDirection="forward"
              >
                <Chapter id={id} isCard subId={subId} />
              </IonRouterLink>
            );
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};
