import { IonImg, IonText } from '@ionic/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageViewer } from '../../ImageViewer';
import { Context } from '../index';

export const Section01: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter04');

  return (
    <IonText>
      <p>{t(`01.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`01.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.01.020000`, { context })}</li>
        <ul>
          <li>{t(`01.TEXT.LIST.01.020100`, { context })}</li>
          <li>{t(`01.TEXT.LIST.01.020200`, { context })}</li>
        </ul>
        <li>{t(`01.TEXT.LIST.01.030000`, { context })}</li>
        <ul>
          <li>{t(`01.TEXT.LIST.01.030100`, { context })}</li>
          <li>{t(`01.TEXT.LIST.01.030200`, { context })}</li>
          <li>{t(`01.TEXT.LIST.01.030300`, { context })}</li>
          <li>{t(`01.TEXT.LIST.01.030400`, { context })}</li>
        </ul>
        <li>{t(`01.TEXT.LIST.01.040000`, { context })}</li>
        <ul>
          <li>{t(`01.TEXT.LIST.01.040100`, { context })}</li>
          <li>{t(`01.TEXT.LIST.01.040200`, { context })}</li>
        </ul>
        <li>{t(`01.TEXT.LIST.01.050000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.01.060000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.01.070000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`01.IMAGE.01.FILENAME`)} src={t(`01.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`01.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`01.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section02: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter04');

  return (
    <IonText>
      <p>{t(`02.TEXT.PARAGRAPH.01`, { context })}</p>
      <p>{t(`02.TEXT.PARAGRAPH.02`, { context })}</p>
      <ul>
        <li>{t(`02.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.01.030000`, { context })}</li>
      </ul>
      <p>{t(`02.TEXT.PARAGRAPH.03`, { context })}</p>
      <ul>
        <li>{t(`02.TEXT.LIST.02.010000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.02.020000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.02.030000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.01.FILENAME`)} src={t(`02.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.01.TITLE`, { context })}
      </IonText>
      <p>{t(`02.TEXT.PARAGRAPH.04`, { context })}</p>
      <ul>
        <li>{t(`02.TEXT.LIST.03.010000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.03.020000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.02.FILENAME`)} src={t(`02.IMAGE.02.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.02.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.02.TITLE`, { context })}
      </IonText>
      <p>{t(`02.TEXT.PARAGRAPH.05`, { context })}</p>
      <ImageViewer alt={t(`02.IMAGE.03.FILENAME`)} src={t(`02.IMAGE.03.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.03.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.03.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section03: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter04');

  return (
    <IonText>
      <p>{t(`03.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`03.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.050000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`03.IMAGE.01.FILENAME`)} src={t(`03.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`03.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`03.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section04: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter04');

  return (
    <IonText>
      <ul>
        <li>{t(`04.TEXT.LIST.01.010000`, { context })}</li>
        <ul>
          <li>{t(`04.TEXT.LIST.01.010100`, { context })}</li>
          <li>{t(`04.TEXT.LIST.01.010200`, { context })}</li>
          <li>{t(`04.TEXT.LIST.01.010300`, { context })}</li>
          <li>{t(`04.TEXT.LIST.01.010400`, { context })}</li>
          <li>{t(`04.TEXT.LIST.01.010500`, { context })}</li>
        </ul>
        <li>{t(`04.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`04.TEXT.LIST.01.030000`, { context })}</li>
        <ul>
          <li>{t(`04.TEXT.LIST.01.010100`, { context })}</li>
          <li>{t(`04.TEXT.LIST.01.010200`, { context })}</li>
        </ul>
        <li>{t(`04.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`04.TEXT.LIST.01.050000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`04.IMAGE.01.FILENAME`)} src={t(`04.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`04.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`04.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section05: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter04');

  return (
    <IonText>
      <ul>
        <li>{t(`05.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.050000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.060000`, { context })}</li>
        <ul>
          <li>{t(`05.TEXT.LIST.01.060100`, { context })}</li>
          <li>{t(`05.TEXT.LIST.01.060200`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer alt={t(`05.IMAGE.01.FILENAME`)} src={t(`05.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`05.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`05.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const chapter04 = {
  '01': Section01,
  '02': Section02,
  '03': Section03,
  '04': Section04,
  '05': Section05,
};
