import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from '@ionic/react';
import React from 'react';

interface ComponentProps {
  color?: string;
  imgSrc?: string;
  routerLink?: string;
  subTitle?: string;
  title?: string;
}

export const ChapterViewCard: React.FC<ComponentProps> = (props) => {
  const { color, imgSrc, routerLink, subTitle, title } = props;

  return (
    <IonCard
      button
      className="chapter-card"
      color={color}
      routerDirection="forward"
      routerLink={routerLink}
    >
      <IonImg src={imgSrc} />
      <IonCardContent>
        <IonCardSubtitle>{subTitle}</IonCardSubtitle>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardContent>
    </IonCard>
  );
};
