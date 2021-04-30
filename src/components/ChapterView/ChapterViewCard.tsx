import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from '@ionic/react';
import { useChapterSection } from '../Chapters/hooks/useChapterSection';
import { CS } from '../Chapters';
import { FC } from 'react';

export const ChapterViewCard: FC<CS> = ({ chapterId, sectionId }) => {
  const { color, image, title, url } = useChapterSection({
    chapterId,
    sectionId,
  });

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
