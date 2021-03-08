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
import { useParams } from 'react-router';
import { ChapterId } from '../../components/Chapters';
import { ChapterFooter } from '../../components/Chapters/ChapterFooter';
import { ChapterViewPage } from '../../components/ChapterView';
import { SpeechFabButton } from '../../components/SpeechFabButton';

interface RouteChapterProps {
  chapterId: ChapterId;
  sectionId: string;
}

export const ChapterPage = () => {
  const { chapterId, sectionId } = useParams<RouteChapterProps>();
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
      <IonContent fullscreen>
        <SpeechFabButton />
        <ChapterViewPage chapterId={chapterId} sectionId={sectionId} />
      </IonContent>
      <ChapterFooter chapterId={chapterId} sectionId={sectionId} />
    </IonPage>
  );
};
