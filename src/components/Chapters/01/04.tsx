import React from 'react';
import { IonCol, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { ChapterFooter } from '../footer';
import { ChapterViewList } from '../ChapterViewList';
import { ChapterViewCard } from '../ChapterViewCard';
import { ChapterProps } from '../types';

export const Chapter0104: React.FC<ChapterProps> = (props) => {
  const { view } = props;
  const { t } = useTranslation();

  if (view === 'card') {
    return (
      <ChapterViewCard
        color="accent-step-0100"
        imgSrc={t(`CHAPTER.01.04.IMAGE.01.FILENAME`)}
        routerLink="/chapter/01/04"
        subTitle={t(`CHAPTER.01.00.TITLE`)}
        title={t(`CHAPTER.01.04.TITLE`)}
      ></ChapterViewCard>
    );
  }

  if (view === 'list') {
    return (
      <ChapterViewList
        color="accent-step-0100"
        content={t(`CHAPTER.01.04.TEXT.PARAGRAPH.01`)}
        routerLink="/chapter/01/04"
        subTitle={t(`CHAPTER.01.00.TITLE`)}
        title={t(`CHAPTER.01.04.TITLE`)}
      ></ChapterViewList>
    );
  }

  return (
    <>
      <IonGrid class="ion-padding ion-text-justify">
        <IonRow class="ion-justify-content-center">
          <IonCol size="12" sizeSm="6">
            <IonText>
              <h2 className="chapter-title">{t(`CHAPTER.01.04.TITLE`)}</h2>
            </IonText>
            <IonText>
              <p>{t(`CHAPTER.01.04.TEXT.PARAGRAPH.01`)}</p>
              <ul>
                <li>{t(`CHAPTER.01.04.TEXT.LIST.01.010000`)}</li>
                <li>{t(`CHAPTER.01.04.TEXT.LIST.01.020000`)}</li>
                <ul>
                  <li>{t(`CHAPTER.01.04.TEXT.LIST.01.020100`)}</li>
                  <li>{t(`CHAPTER.01.04.TEXT.LIST.01.020200`)}</li>
                  <li>{t(`CHAPTER.01.04.TEXT.LIST.01.020300`)}</li>
                </ul>
                <li>{t(`CHAPTER.01.04.TEXT.LIST.01.030000`)}</li>
                <ul>
                  <li>{t(`CHAPTER.01.04.TEXT.LIST.01.030100`)}</li>
                  <li>{t(`CHAPTER.01.04.TEXT.LIST.01.030200`)}</li>
                  <li>{t(`CHAPTER.01.04.TEXT.LIST.01.030300`)}</li>
                </ul>
                <li>{t(`CHAPTER.01.04.TEXT.LIST.01.040000`)}</li>
              </ul>
              <IonImg src={t(`CHAPTER.01.04.IMAGE.01.FILENAME`)} />
              <IonText>{t(`CHAPTER.01.04.IMAGE.01.TITLE`)}</IonText>
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
      <ChapterFooter
        previousChapter="/chapter/01/03"
        nextChapter="/chapter/02/01"
      />
    </>
  );
};
