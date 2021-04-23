import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';
import { FC } from 'react';
import { CS } from '../Chapters';
import { useChapterSection } from '../Chapters/hooks/useChapterSection';

export const ChapterViewList: FC<CS> = ({ chapterId, sectionId }) => {
  const { color, title, url, view } = useChapterSection({
    chapterId,
    sectionId,
  });
  const { Component } = view.list;

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
      <IonCardContent>
        <Component />
      </IonCardContent>
    </IonCard>
  );
};
