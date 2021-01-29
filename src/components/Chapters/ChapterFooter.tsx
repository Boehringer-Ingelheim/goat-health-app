import {
  IonButton,
  IonButtons,
  IonFooter,
  IonIcon,
  IonToolbar,
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
    <IonFooter>
      <IonToolbar color="light">
        <IonButtons class="ion-justify-content-between">
          <IonButton fill="clear" routerDirection="back" routerLink={previous}>
            <IonIcon icon={arrowBack} slot="icon-only"></IonIcon>
          </IonButton>
          <IonButton
            color={isFavorite ? 'warning' : ''}
            fill="clear"
            onClick={() => toggleFavorite()}
          >
            <IonIcon
              icon={isFavorite ? star : starOutline}
              slot="icon-only"
            ></IonIcon>
          </IonButton>
          <IonButton fill="clear" routerLink={next} size="small">
            <IonIcon icon={arrowForward} slot="icon-only"></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonFooter>
  );
};
