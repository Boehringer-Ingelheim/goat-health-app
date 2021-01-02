import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';
import React, { ReactNode } from 'react';

interface ComponentProps {
  content?: ReactNode | string;
  color?: string;
  routerLink?: string;
  subTitle?: string;
  title?: string;
}

export const ChapterViewList: React.FC<ComponentProps> = (props) => {
  const { children, color, content, routerLink, subTitle, title } = props;

  return (
    <IonCard
      button
      className="chapter-list"
      routerDirection="forward"
      routerLink={routerLink}
    >
      <IonCardHeader>
        <IonCardSubtitle color={color}>{subTitle}</IonCardSubtitle>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{content || children} ...</IonCardContent>
    </IonCard>
  );
};
