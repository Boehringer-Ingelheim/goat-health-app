import React from 'react';
import { connect } from 'react-redux';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';
import Chapters from '../../components/Chapters';

interface MatchParams {
  id: string;
  subId: string;
}

interface ContainerProps extends RouteComponentProps<MatchParams> {}

const ChapterPage: React.FC<ContainerProps> = (props) => {
  console.log('props', props);
  const { match } = props;
  const { params } = match;
  const { id, subId } = params;

  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t(`APP.NAME`)}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <Chapters id={id} subId={subId} />
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ChapterPage);
