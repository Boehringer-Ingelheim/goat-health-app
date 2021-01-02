import { IonCol, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChapterFooter } from '../footer';
import { ChapterViewList } from '../ChapterViewList';
import { ChapterViewCard } from '../ChapterViewCard';
import { ChapterProps } from '../types';

export const Chapter0201: React.FC<ChapterProps> = (props) => {
  const { view } = props;
  const { t } = useTranslation();

  if (view === 'card') {
    return (
      <ChapterViewCard
        color="accent-step-0200"
        imgSrc={t(`CHAPTER.02.01.IMAGE.01.FILENAME`)}
        routerLink="/chapter/02/01"
        subTitle={t(`CHAPTER.02.00.TITLE`)}
        title={t(`CHAPTER.02.01.TITLE`)}
      ></ChapterViewCard>
    );
  }
  if (view === 'list') {
    return (
      <ChapterViewList
        color="accent-step-0200"
        content={t(`CHAPTER.02.01.TEXT.PARAGRAPH.01`)}
        routerLink="/chapter/02/01"
        subTitle={t(`CHAPTER.02.00.TITLE`)}
        title={t(`CHAPTER.02.01.TITLE`)}
      ></ChapterViewList>
    );
  }

  return (
    <>
      <IonGrid class="ion-padding ion-text-justify">
        <IonRow class="ion-justify-content-center">
          <IonCol size="12" sizeSm="6">
            <IonText>
              <h2 className="chapter-title">{t(`CHAPTER.02.01.TITLE`)}</h2>
            </IonText>
            <IonText>
              <p>{t(`CHAPTER.02.01.TEXT.PARAGRAPH.01`)}</p>
              <ul>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.010000`)}</li>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.020000`)}</li>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.030000`)}</li>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.040000`)}</li>
                <div className="chapter-image-title">
                  <IonImg src={t(`CHAPTER.02.01.IMAGE.01.FILENAME`)} />
                  <IonText>{t(`CHAPTER.02.01.IMAGE.01.TITLE`)}</IonText>
                </div>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.050000`)}</li>
                <ul>
                  <li>{t(`CHAPTER.02.01.TEXT.LIST.01.050100`)}</li>
                </ul>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.060000`)}</li>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.070000`)}</li>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.080000`)}</li>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.090000`)}</li>
                <div className="chapter-image-title">
                  <IonImg src={t(`CHAPTER.02.01.IMAGE.02.FILENAME`)} />
                  <IonText>{t(`CHAPTER.02.01.IMAGE.02.TITLE`)}</IonText>
                </div>
              </ul>
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
      <ChapterFooter
        nextChapter="/chapter/02/02"
        previousChapter="/chapter/01/04"
      />
    </>
  );
};
