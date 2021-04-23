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
import { CS } from '../../components/Chapters';
import { ChapterSectionNotAvailable } from '../../components/Chapters/ChapterContent/ChapterSectionNotAvailable';
import { ChapterFooter } from '../../components/ChapterFooter/ChapterFooter';
import { isValidChapterSection } from '../../components/Chapters/utils';
import { ChapterViewPage } from '../../components/ChapterView';
import { SpeechFabButton } from '../../components/SpeechFabButton';

interface RouteChapterProps {
  chapterId: string;
  sectionId: string;
}

export const ChapterPage = () => {
  const { chapterId, sectionId } = useParams<RouteChapterProps>() as CS;
  const exists = isValidChapterSection(chapterId, sectionId);
  const { t } = useTranslation('app');

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
        {exists ? (
          <>
            <SpeechFabButton />
            <ChapterViewPage chapterId={chapterId} sectionId={sectionId} />
          </>
        ) : (
          <ChapterSectionNotAvailable />
        )}
      </IonContent>
      {exists && <ChapterFooter chapterId={chapterId} sectionId={sectionId} />}
    </IonPage>
  );
};
