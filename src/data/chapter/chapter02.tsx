import { IonImg, IonText } from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const CHAPTER_ID = '02';

export const Section01 = () => {
  const sectionId = '01';
  const { t } = useTranslation();

  return (
    <IonText>
      <p>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.PARAGRAPH.01`)}</p>
      <ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.010000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.030000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.040000`)}</li>
        <div>
          <IonImg
            class="ion-padding-vertical"
            src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
          />
          <IonText class="ion-padding-bottom" className="image-text">
            {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.TITLE`)}
          </IonText>
        </div>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.050000`)}</li>
        <ul>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.050100`)}</li>
        </ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.060000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.070000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.080000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.090000`)}</li>
        <div>
          <IonImg
            class="ion-padding-vertical"
            src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.02.FILENAME`)}
          />
          <IonText class="ion-padding-bottom" className="image-text">
            {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.02.TITLE`)}
          </IonText>
        </div>
      </ul>
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
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.070000`)}</li>
      </ul>
      <IonImg
        class="ion-padding-vertical"
        src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
      />
      <IonText class="ion-padding-bottom" className="image-text">
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
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.070000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.080000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.090000`)}</li>
      </ul>
      <IonImg
        class="ion-padding-vertical"
        src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
      />
      <IonText class="ion-padding-bottom" className="image-text">
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
        <div className="chapter-image-title">
          <IonImg
            class="ion-padding-vertical"
            src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
          />
          <IonText class="ion-padding-bottom" className="image-text">
            {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.TITLE`)}
          </IonText>
        </div>
      </ul>
      <p>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.PARAGRAPH.02`)}</p>
      <ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.02.010000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.02.020000`)}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.02.030000`)}</li>
      </ul>
      <p>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.PARAGRAPH.03`)}</p>
      <div className="chapter-image-title">
        <IonImg
          class="ion-padding-vertical"
          src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.02.FILENAME`)}
        />
        <IonText class="ion-padding-bottom" className="image-text">
          {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.02.TITLE`)}
        </IonText>
      </div>
    </IonText>
  );
};

export const Section05 = () => {
  const sectionId = '05';
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
      </ul>
      <div className="chapter-image-title">
        <IonImg
          class="ion-padding-vertical"
          src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
        />
        <IonText class="ion-padding-bottom" className="image-text">
          {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.TITLE`)}
        </IonText>
      </div>
    </IonText>
  );
};

export const Section06 = () => {
  const sectionId = '06';
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
      </ul>
      <div className="chapter-image-title">
        <IonImg
          class="ion-padding-vertical"
          src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
        />
        <IonText class="ion-padding-bottom" className="image-text">
          {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.TITLE`)}
        </IonText>
      </div>
    </IonText>
  );
};

export const Chapter = {
  Section01,
  Section02,
  Section03,
  Section04,
  Section05,
  Section06,
};
