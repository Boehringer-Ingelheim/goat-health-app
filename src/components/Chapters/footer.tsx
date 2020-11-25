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
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import {
  addFavorite,
  removeFavorite,
} from '../../data/chapter/chapter.actions';
import { selectChapterFavorites } from '../../data/chapter/chapter.select';
import { RootState } from '../../reducers';

type ContainerProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    previousChapter: string;
    nextChapter: string;
  };

const ChapterFooter: React.FC<ContainerProps> = (props) => {
  console.log('ChapterFooter -> props', props);
  const { chapterFavorites, previousChapter, nextChapter } = props;

  const history = useHistory();
  const currentChapter = history.location.pathname;
  const isFavorite = chapterFavorites.includes(currentChapter);

  const toggleFavorite = () => {
    if (isFavorite) {
      return props.removeFavorite(currentChapter);
    }
    return props.addFavorite(currentChapter);
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

const mapStateToProps = (state: RootState) => {
  return {
    chapterFavorites: selectChapterFavorites(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addFavorite: (chapterId: string) => dispatch(addFavorite(chapterId)),
    removeFavorite: (chapterId: string) => dispatch(removeFavorite(chapterId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChapterFooter);
