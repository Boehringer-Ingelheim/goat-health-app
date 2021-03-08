import { IonGrid, IonNote, IonRow } from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LunrResult } from '../../utils/hooks/useLunr';
import { SearchResult } from './SearchResult';

interface ContainerProps {
  results: LunrResult[];
}

export const SearchResults: React.FC<ContainerProps> = ({ results }) => {
  const { t } = useTranslation();

  if (results.length === 0) {
    return (
      <IonGrid>
        <IonRow class="ion-justify-content-center">
          <IonNote class="ion-padding">{t('SEARCH.RESULTS.NONE')}</IonNote>
        </IonRow>
      </IonGrid>
    );
  }

  return (
    <IonGrid>
      <IonRow key={'number-of-results'}>
        <IonNote class="ion-padding-horizontal">
          {t('SEARCH.RESULTS.FOUND_WITH_COUNT', { count: results.length })}
        </IonNote>
      </IonRow>
      {results.map((result, resultIndex) => {
        const { chapterId, sectionId } = result;
        return (
          <IonRow class="ion-justify-content-center" key={resultIndex}>
            <SearchResult chapterId={chapterId} sectionId={sectionId} />
          </IonRow>
        );
      })}
    </IonGrid>
  );
};
