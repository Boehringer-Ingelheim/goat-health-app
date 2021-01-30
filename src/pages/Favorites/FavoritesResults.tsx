import { IonGrid, IonNote, IonRow } from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Chapter } from '../../components/Chapters';
import {
  selectCurrentFavoritesView,
  selectFavorites,
} from '../../data/user/user.selector';
import {
  ChapterId,
  getChapterIdAndSectionIdFromId,
} from '../../utils/chapters';

export const FavoritesResults: React.FC = () => {
  const { t } = useTranslation();
  const currentView = useSelector(selectCurrentFavoritesView);
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
      {results.map((resultId, resultIndex) => {
        const { chapterId, sectionId } = getChapterIdAndSectionIdFromId(
          resultId,
        );
        return (
          <IonRow class="ion-justify-content-center" key={resultIndex}>
            <Chapter
              chapterId={chapterId as ChapterId}
              sectionId={sectionId}
              view={currentView}
            />
          </IonRow>
        );
      })}
    </IonGrid>
  );
};
