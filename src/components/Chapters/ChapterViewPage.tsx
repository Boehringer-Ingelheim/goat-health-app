import { IonCol, IonGrid, IonRow, IonText } from '@ionic/react';
import React, { ReactNode } from 'react';
import { ChapterId } from '../../utils/chapters';
import { ChapterFooter } from './ChapterFooter';

interface ComponentProps {
  chapterId: ChapterId;
  content: ReactNode | string;
  color?: string;
  sectionId: string;
  subTitle?: string;
  title: string;
}

export const ChapterViewPage: React.FC<ComponentProps> = (props) => {
  const { chapterId, content, sectionId, title } = props;

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
      <ChapterFooter chapterId={chapterId} sectionId={sectionId} />
    </>
  );
};
