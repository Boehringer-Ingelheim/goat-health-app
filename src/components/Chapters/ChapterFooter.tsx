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
import { selectIsFavorite } from '../../data/user/user.selector';
import { addFavorite, removeFavorite } from '../../data/user/user.slice';
import {
  ChapterId,
  getChapterNextSectionUrl,
  getChapterPreviousSectionUrl,
} from '../../utils/chapters';

type ContainerProps = {
  chapterId: ChapterId;
  sectionId: string;
};

export const ChapterFooter: React.FC<ContainerProps> = (props) => {
  const { chapterId, sectionId } = props;

  const id = `chapter${chapterId}${sectionId}`;
  const next = getChapterNextSectionUrl(chapterId, sectionId);
  const previous = getChapterPreviousSectionUrl(chapterId, sectionId);
  const isFavorite = useSelector(selectIsFavorite(id));
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    if (isFavorite) {
      return dispatch(removeFavorite(id));
    }
    return dispatch(addFavorite(id));
  };

  return (
    <IonFooter style={{ position: 'sticky', top: '100vh' }}>
      <IonGrid>
        <IonRow className="ion-justify-content-between ion-text-center">
          <IonCol>
            <IonButton
              className="ion-no-margin"
              color="primary"
              fill="clear"
              routerDirection="back"
              routerLink={previous}
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
              fill="clear"
              routerLink={next}
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
