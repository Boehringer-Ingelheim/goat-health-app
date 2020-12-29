import React from 'react';
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
import { Chapter } from '../../components/Chapters';

interface MatchParams {
  id: string;
  subId: string;
}

interface ContainerProps extends RouteComponentProps<MatchParams> {}

export const ChapterPage: React.FC<ContainerProps> = (props) => {
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
        <Chapter id={id} subId={subId} />
      </IonContent>
    </IonPage>
  );
};
