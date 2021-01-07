import { IonImg, IonText } from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const CHAPTER_ID = '01';

export const Section01 = () => {
  const sectionId = '01';
  const { t } = useTranslation();

  return (
    <IonText>
      <p>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.PARAGRAPH.01`)}</p>
      <ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.010000`)}</li>
        <ul>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.010100`)}</li>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.010200`)}</li>
        </ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020000`)}</li>
        <ul>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020100`)}</li>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020200`)}</li>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020300`)}</li>
        </ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.030000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.040000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.050000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.060000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.070000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.080000`)}</li>
      </ul>
      <IonImg src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)} />
      <IonText>
        {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.TITLE`)}
      </IonText>
    </IonText>
  );
};

export const Section02 = () => {
  const sectionId = '02';
  const { t } = useTranslation();

  return (
    <IonText>
      <p>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.PARAGRAPH.01`)}</p>
      <ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.010000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.030000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.040000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.050000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.060000`)}</li>
      </ul>
      <IonImg src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)} />
      <IonText>
        {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.TITLE`)}
      </IonText>
    </IonText>
  );
};

export const Section03 = () => {
  const sectionId = '03';
  const { t } = useTranslation();

  return (
    <IonText>
      <ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.010000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.030000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.040000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.050000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.060000`)}</li>
      </ul>
      <IonImg src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)} />
      <IonText>
        {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.TITLE`)}
      </IonText>
    </IonText>
  );
};

export const Section04 = () => {
  const sectionId = '04';
  const { t } = useTranslation();

  return (
    <IonText>
      <p>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.PARAGRAPH.01`)}</p>
      <ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.010000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020000`)}</li>
        <ul>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020100`)}</li>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020200`)}</li>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020300`)}</li>
        </ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.030000`)}</li>
        <ul>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.030100`)}</li>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.030200`)}</li>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.030300`)}</li>
        </ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.040000`)}</li>
      </ul>
      <IonImg src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)} />
      <IonText>
        {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.TITLE`)}
      </IonText>
    </IonText>
  );
};

export const Chapter01 = {
  Section01,
  Section02,
  Section03,
  Section04,
};
