import { IonImg, IonText } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { ImageViewer } from '../../ImageViewer';
import { ChapterContext, ChapterId } from '../index';

const CHAPTER_ID: ChapterId = '02';

export const Section01 = (context: ChapterContext = '') => {
  const sectionId = '01';
  const { t } = useTranslation();

  return (
    <IonText>
      <p>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.040000`, { context })}</li>
        <ImageViewer
          alt={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
          src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
        >
          <IonImg class="ion-padding-vertical" src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.THUMBNAIL.LARGE`)} />
        </ImageViewer>
        <IonText class="ion-padding-bottom" className="image-text">
          {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.TITLE`, { context })}
        </IonText>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.050000`, { context })}</li>
        <ul>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.050100`, { context })}</li>
        </ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.060000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.070000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.080000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.090000`, { context })}</li>
        <ImageViewer
          alt={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.02.FILENAME`)}
          src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.02.FILENAME`)}
        >
          <IonImg class="ion-padding-vertical" src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.02.THUMBNAIL.LARGE`)} />
        </ImageViewer>
        <IonText class="ion-padding-bottom" className="image-text">
          {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.02.TITLE`, { context })}
        </IonText>
      </ul>
    </IonText>
  );
};

export const Section02 = (context: ChapterContext = '') => {
  const sectionId = '02';
  const { t } = useTranslation();

  return (
    <IonText>
      <p>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.050000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.060000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.070000`, { context })}</li>
      </ul>
      <ImageViewer
        alt={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
        src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
      >
        <IonImg class="ion-padding-vertical" src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section03 = (context: ChapterContext = '') => {
  const sectionId = '03';
  const { t } = useTranslation();

  return (
    <IonText>
      <ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.050000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.060000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.070000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.080000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.090000`, { context })}</li>
      </ul>
      <ImageViewer
        alt={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
        src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
      >
        <IonImg class="ion-padding-vertical" src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section04 = (context: ChapterContext = '') => {
  const sectionId = '04';
  const { t } = useTranslation();

  return (
    <IonText>
      <p>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020000`, { context })}</li>
      </ul>
      <ImageViewer
        alt={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
        src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
      >
        <IonImg class="ion-padding-vertical" src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.TITLE`, { context })}
      </IonText>
      <p>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.PARAGRAPH.02`, { context })}</p>
      <ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.02.010000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.02.020000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.02.030000`, { context })}</li>
      </ul>
      <p>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.PARAGRAPH.03`, { context })}</p>
      <ImageViewer
        alt={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.02.FILENAME`)}
        src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.02.FILENAME`)}
      >
        <IonImg class="ion-padding-vertical" src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.02.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.02.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section05 = (context: ChapterContext = '') => {
  const sectionId = '05';
  const { t } = useTranslation();

  return (
    <IonText>
      <p>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.050000`, { context })}</li>
      </ul>
      <ImageViewer
        alt={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
        src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
      >
        <IonImg class="ion-padding-vertical" src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section06 = (context: ChapterContext = '') => {
  const sectionId = '06';
  const { t } = useTranslation();

  return (
    <IonText>
      <p>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.010000`, { context })}</li>
        <ul>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.010100`, { context })}</li>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.010200`, { context })}</li>
        </ul>
        <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020000`, { context })}</li>
        <ul>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020100`, { context })}</li>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020200`, { context })}</li>
          <li>{t(`CHAPTER.${CHAPTER_ID}.${sectionId}.TEXT.LIST.01.020300`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer
        alt={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
        src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.FILENAME`)}
      >
        <IonImg class="ion-padding-vertical" src={t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`CHAPTER.${CHAPTER_ID}.${sectionId}.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Chapter02 = {
  Section01,
  Section02,
  Section03,
  Section04,
  Section05,
  Section06,
};
