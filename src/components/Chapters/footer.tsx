import {
  IonButton,
  IonCol,
  IonFooter,
  IonGrid,
  IonIcon,
  IonRow,
} from '@ionic/react';
import { arrowBack, arrowForward, star } from 'ionicons/icons';
import React from 'react';
import { connect } from 'react-redux';

interface ContainerProps {
  previousChapter: string;
  nextChapter: string;
}

const ChapterFooter: React.FC<ContainerProps> = (props) => {
  const { previousChapter, nextChapter } = props;

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
            <IonButton className="ion-no-margin" fill="clear" size="small">
              <IonIcon slot="icon-only" icon={star}></IonIcon>
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

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChapterFooter);
