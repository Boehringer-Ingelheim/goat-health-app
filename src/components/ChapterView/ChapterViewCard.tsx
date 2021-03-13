import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from '@ionic/react';
import { ChapterId } from '../Chapters';
import { useChapterSection } from '../Chapters/hooks/useChapterSection';

export const ChapterViewCard = ({
  chapterId = '01' as ChapterId,
  sectionId = '01',
}) => {
  const { color, image, title, url } = useChapterSection(chapterId, sectionId);

  return (
    <IonCard
      button
      className="chapter-card"
      color={color}
      routerDirection="forward"
      routerLink={url}
    >
      <IonImg src={image.thumbnail.medium} />
      <IonCardContent>
        <IonCardSubtitle>{title.chapter}</IonCardSubtitle>
        <IonCardTitle>{title.section}</IonCardTitle>
      </IonCardContent>
    </IonCard>
  );
};
