import { IonImg, IonText } from '@ionic/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageViewer } from '../../ImageViewer';
import { Context } from '../index';

export const Section01: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter02');

  return (
    <IonText>
      <p>{t(`01.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`01.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.01.040000`, { context })}</li>
        <ImageViewer alt={t(`01.IMAGE.01.FILENAME`)} src={t(`01.IMAGE.01.FILENAME`)}>
          <IonImg class="ion-padding-vertical" src={t(`01.IMAGE.01.THUMBNAIL.LARGE`)} />
        </ImageViewer>
        <IonText class="ion-padding-bottom" className="image-text">
          {t(`01.IMAGE.01.TITLE`, { context })}
        </IonText>
        <li>{t(`01.TEXT.LIST.01.050000`, { context })}</li>
        <ul>
          <li>{t(`01.TEXT.LIST.01.050100`, { context })}</li>
        </ul>
        <li>{t(`01.TEXT.LIST.01.060000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.01.070000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.01.080000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.01.090000`, { context })}</li>
        <ImageViewer alt={t(`01.IMAGE.02.FILENAME`)} src={t(`01.IMAGE.02.FILENAME`)}>
          <IonImg class="ion-padding-vertical" src={t(`01.IMAGE.02.THUMBNAIL.LARGE`)} />
        </ImageViewer>
        <IonText class="ion-padding-bottom" className="image-text">
          {t(`01.IMAGE.02.TITLE`, { context })}
        </IonText>
      </ul>
    </IonText>
  );
};

export const Section02: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter02');

  return (
    <IonText>
      <p>{t(`02.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`02.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.01.050000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.01.060000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.01.070000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.01.FILENAME`)} src={t(`02.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section03: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter02');

  return (
    <IonText>
      <ul>
        <li>{t(`03.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.050000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.060000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.070000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.080000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.090000`, { context })}</li>
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
  const { t } = useTranslation('chapter02');

  return (
    <IonText>
      <p>{t(`04.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`04.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`04.TEXT.LIST.01.020000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`04.IMAGE.01.FILENAME`)} src={t(`04.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`04.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`04.IMAGE.01.TITLE`, { context })}
      </IonText>
      <p>{t(`04.TEXT.PARAGRAPH.02`, { context })}</p>
      <ul>
        <li>{t(`04.TEXT.LIST.02.010000`, { context })}</li>
        <li>{t(`04.TEXT.LIST.02.020000`, { context })}</li>
        <li>{t(`04.TEXT.LIST.02.030000`, { context })}</li>
      </ul>
      <p>{t(`04.TEXT.PARAGRAPH.03`, { context })}</p>
      <ImageViewer alt={t(`04.IMAGE.02.FILENAME`)} src={t(`04.IMAGE.02.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`04.IMAGE.02.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`04.IMAGE.02.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section05: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter02');

  return (
    <IonText>
      <p>{t(`05.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`05.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.050000`, { context })}</li>
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

export const Section06: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter02');

  return (
    <IonText>
      <p>{t(`06.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`06.TEXT.LIST.01.010000`, { context })}</li>
        <ul>
          <li>{t(`06.TEXT.LIST.01.010100`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.010200`, { context })}</li>
        </ul>
        <li>{t(`06.TEXT.LIST.01.020000`, { context })}</li>
        <ul>
          <li>{t(`06.TEXT.LIST.01.020100`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.020200`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.020300`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer alt={t(`06.IMAGE.01.FILENAME`)} src={t(`06.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`06.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`06.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const chapter02 = {
  '01': Section01,
  '02': Section02,
  '03': Section03,
  '04': Section04,
  '05': Section05,
  '06': Section06,
};
