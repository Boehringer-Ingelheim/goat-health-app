import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';
import { ChapterId } from '../Chapters';
import { useChapterSection } from '../Chapters/hooks/useChapterSection';

export const ChapterViewList = ({
  chapterId = '01' as ChapterId,
  sectionId = '01',
}) => {
  const { color, title, url, view } = useChapterSection(chapterId, sectionId);

  return (
    <IonCard
      button
      className="chapter-list"
      routerDirection="forward"
      routerLink={url}
    >
      <IonCardHeader>
        <IonCardSubtitle color={color}>{title.chapter}</IonCardSubtitle>
        <IonCardTitle>{title.section}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{view.list.content} ...</IonCardContent>
    </IonCard>
  );
};
