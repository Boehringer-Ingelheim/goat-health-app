import { IonCol, IonGrid, IonRow, IonText } from '@ionic/react';
import React, { ReactNode } from 'react';
import { ChapterFooter } from './footer';

interface ComponentProps {
  content: ReactNode | string;
  color?: string;
  link: { next: string; previous: string; self: string };
  subTitle?: string;
  title: string;
}

export const ChapterViewPage: React.FC<ComponentProps> = (props) => {
  const { content, link, title } = props;

  return (
    <>
      <IonGrid class="ion-padding ion-text-justify">
        <IonRow class="ion-justify-content-center">
          <IonCol size="12" sizeSm="6">
            <IonText>
              <h2 className="chapter-title">{title}</h2>
            </IonText>
            {content}
          </IonCol>
        </IonRow>
      </IonGrid>
      <ChapterFooter previousChapter={link.previous} nextChapter={link.next} />
    </>
  );
};
