import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';
import { Chapter } from '../../components/Chapters';
import { ChapterId } from '../../utils/chapters';

interface MatchParams {
  chapterId: ChapterId;
  sectionId: string;
}

interface ContainerProps extends RouteComponentProps<MatchParams> {}

export const ChapterPage: React.FC<ContainerProps> = (props) => {
  const { match } = props;
  const { chapterId, sectionId } = match.params;

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
        <Chapter chapterId={chapterId} sectionId={sectionId} />
      </IonContent>
    </IonPage>
  );
};
