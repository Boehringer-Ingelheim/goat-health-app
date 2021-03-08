import {
  IonCol,
  IonGrid,
  IonItem,
  IonLabel,
  IonRow,
  IonText,
} from '@ionic/react';
import { ChapterId } from '../Chapters';
import { useChapterSection } from '../Chapters/hooks/useChapterSection';

export const ChapterViewPage = ({
  chapterId = '01' as ChapterId,
  sectionId = '01',
}) => {
  const { color, view, title } = useChapterSection(chapterId, sectionId);

  return (
    <IonGrid class="ion-padding ion-text-justify">
      <IonRow class="ion-justify-content-center">
        <IonCol size="12" sizeSm="6">
          <IonItem className="chapter-subtitle" lines="none">
            <IonLabel color={color}>{title.chapter}</IonLabel>
          </IonItem>
          <IonText>
            <h2 className="chapter-title">{title.section}</h2>
          </IonText>
          {view.page.Content()}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
