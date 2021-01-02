import { IonGrid, IonNote, IonRow } from '@ionic/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentSearchView } from '../../data/user/user.selector';
import { LunrResult } from '../../utils/lunr';
import { Chapter, getChapterIdsByUrl } from '../Chapters';

interface ContainerProps {
  results: LunrResult[];
}

export const SearchResults: React.FC<ContainerProps> = (props) => {
  const { results } = props;

  const currentSearchView = useSelector(selectCurrentSearchView);

  if (results.length === 0) {
    return (
      <IonGrid>
        <IonRow class="ion-justify-content-center">
          <IonNote class="ion-padding">No results found</IonNote>
        </IonRow>
      </IonGrid>
    );
  }

  return (
    <IonGrid>
      <IonRow key={'number-of-results'}>
        <IonNote class="ion-padding-horizontal">
          Found {results.length} results
        </IonNote>
      </IonRow>
      {results.map((result, resultIndex) => {
        const { id: chapterUrl } = result;
        const { id, subId } = getChapterIdsByUrl(chapterUrl);
        return (
          <IonRow class="ion-justify-content-center" key={resultIndex}>
            <Chapter id={id} subId={subId} view={currentSearchView} />
          </IonRow>
        );
      })}
    </IonGrid>
  );
};
