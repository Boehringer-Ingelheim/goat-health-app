import { IonGrid, IonNote, IonRow } from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../data/user/user.selector';
import { getChapterIdAndSectionIdFromId } from '../Chapters/utils';
import { ChapterId } from '../Chapters';
import { FavoritesResult } from './FavoritesResult';

export const FavoritesResults: React.FC = () => {
  const { t } = useTranslation();
  const results = useSelector(selectFavorites);

  if (results.length === 0) {
    return (
      <IonGrid>
        <IonRow class="ion-justify-content-center">
          <IonNote class="ion-padding">{t('FAVORITES.RESULTS.NONE')}</IonNote>
        </IonRow>
      </IonGrid>
    );
  }

  return (
    <IonGrid>
      {results.map((result, resultIndex) => {
        const { chapterId, sectionId } = getChapterIdAndSectionIdFromId(
          result.id,
        );
        return (
          <IonRow class="ion-justify-content-center" key={resultIndex}>
            <FavoritesResult
              chapterId={chapterId as ChapterId}
              sectionId={sectionId}
            />
          </IonRow>
        );
      })}
    </IonGrid>
  );
};
