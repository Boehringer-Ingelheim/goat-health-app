import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
  IonText,
} from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { ChapterFooter } from '../footer';
import { ChapterProps } from '../types';

export const Chapter0203: React.FC<ChapterProps> = (props) => {
  const { isCard = false } = props;
  const { t } = useTranslation();

  if (isCard) {
    return (
      <IonCard className="chapter-card" color="accent-step-0200">
        <IonImg src={t(`CHAPTER.02.03.IMAGE.01.FILENAME`)} />
        <IonCardContent>
          <IonCardSubtitle>{t(`CHAPTER.02.00.TITLE`)}</IonCardSubtitle>
          <IonCardTitle>{t(`CHAPTER.02.03.TITLE`)}</IonCardTitle>
        </IonCardContent>
      </IonCard>
    );
  }

  return (
    <>
      <IonGrid class="ion-padding ion-text-justify">
        <IonRow class="ion-justify-content-center">
          <IonCol size="12" sizeSm="6">
            <IonText>
              <h2 className="chapter-title">{t(`CHAPTER.02.03.TITLE`)}</h2>
            </IonText>
            <IonText>
              <ul>
                <li>{t(`CHAPTER.02.03.TEXT.LIST.01.010000`)}</li>
                <li>{t(`CHAPTER.02.03.TEXT.LIST.01.020000`)}</li>
                <li>{t(`CHAPTER.02.03.TEXT.LIST.01.030000`)}</li>
                <li>{t(`CHAPTER.02.03.TEXT.LIST.01.040000`)}</li>
                <li>{t(`CHAPTER.02.03.TEXT.LIST.01.050000`)}</li>
                <li>{t(`CHAPTER.02.03.TEXT.LIST.01.060000`)}</li>
                <li>{t(`CHAPTER.02.03.TEXT.LIST.01.070000`)}</li>
                <li>{t(`CHAPTER.02.03.TEXT.LIST.01.080000`)}</li>
                <li>{t(`CHAPTER.02.03.TEXT.LIST.01.090000`)}</li>
              </ul>
              <IonImg src={t(`CHAPTER.02.03.IMAGE.01.FILENAME`)} />
              <IonText>{t(`CHAPTER.02.03.IMAGE.01.TITLE`)}</IonText>
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
      <ChapterFooter
        previousChapter="/chapter/02/02"
        nextChapter="/chapter/02/04"
      />
    </>
  );
};
