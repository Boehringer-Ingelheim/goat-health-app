import { IonGrid, IonNote, IonRow } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectSearchValue } from '../../data/search/search.selector';
import { ChapterId } from '../Chapters';
import { useSearchResults } from './hooks/useSearchResults';
import { SearchResult } from './SearchResult';

export const SearchResults = () => {
  const { t } = useTranslation();

  const searchValue = useSelector(selectSearchValue);
  const results = useSearchResults(searchValue);

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
        const { chapterId, sectionId } = result.item;
        return (
          <IonRow class="ion-justify-content-center" key={resultIndex}>
            <SearchResult
              chapterId={chapterId as ChapterId}
              sectionId={sectionId}
            />
          </IonRow>
        );
      })}
    </IonGrid>
  );
};
