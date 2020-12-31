import {
  IonButton,
  IonCol,
  IonFooter,
  IonGrid,
  IonIcon,
  IonRow,
} from '@ionic/react';
import { arrowBack, arrowForward, star, starOutline } from 'ionicons/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  addFavorite,
  removeFavorite,
} from '../../data/chapter/chapter.actions';
import { selectIsChapterFavorite } from '../../data/chapter/chapter.select';
import { RootState } from '../../store';

type ContainerProps = {
  previousChapter: string;
  nextChapter: string;
};

export const ChapterFooter: React.FC<ContainerProps> = (props) => {
  const { previousChapter, nextChapter } = props;

  const history = useHistory();
  const currentChapter = history.location.pathname;
  const isFavorite = useSelector((state) =>
    selectIsChapterFavorite(state as RootState, currentChapter),
  );
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    if (isFavorite) {
      return dispatch(removeFavorite(currentChapter));
    }
    return dispatch(addFavorite(currentChapter));
  };

  return (
    <IonFooter style={{ position: 'sticky', top: '100vh' }}>
      <IonGrid>
        <IonRow className="ion-justify-content-between ion-text-center">
          <IonCol>
            <IonButton
              className="ion-no-margin"
              color="primary"
              disabled={previousChapter.length === 0}
              fill="clear"
              routerDirection="back"
              routerLink={previousChapter}
              size="small"
            >
              <IonIcon icon={arrowBack} slot="icon-only"></IonIcon>
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton
              className="ion-no-margin"
              color={isFavorite ? 'warning' : ''}
              fill="clear"
              size="small"
              onClick={() => toggleFavorite()}
            >
              <IonIcon
                slot="icon-only"
                icon={isFavorite ? star : starOutline}
              ></IonIcon>
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton
              className="ion-no-margin"
              color="primary"
              disabled={nextChapter.length === 0}
              fill="clear"
              routerLink={nextChapter}
              size="small"
            >
              <IonIcon icon={arrowForward} slot="icon-only"></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
  );
};
