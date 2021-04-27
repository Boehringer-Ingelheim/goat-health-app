import { IonImg, IonText } from '@ionic/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageViewer } from '../../ImageViewer';
import { Context } from '../index';

export const Section01: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter07');

  return (
    <IonText>
      <p>{t(`01.TEXT.PARAGRAPH.01`, { context })}</p>
      <p>{t(`01.TEXT.PARAGRAPH.02`, { context })}</p>
      <ul>
        <li>{t(`01.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.01.050000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.01.060000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`01.IMAGE.01.FILENAME`)} src={t(`01.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`01.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`01.IMAGE.01.TITLE`, { context })}
      </IonText>
      <p>{t(`01.TEXT.PARAGRAPH.03`, { context })}</p>
      <ul>
        <li>{t(`01.TEXT.LIST.02.010000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.02.020000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.02.030000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.02.040000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.02.050000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.02.060000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.02.070000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.02.080000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`01.IMAGE.02.FILENAME`)} src={t(`01.IMAGE.02.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`01.IMAGE.02.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`01.IMAGE.02.TITLE`, { context })}
      </IonText>
      <ImageViewer alt={t(`01.IMAGE.03.FILENAME`)} src={t(`01.IMAGE.03.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`01.IMAGE.03.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`01.IMAGE.03.TITLE`, { context })}
      </IonText>
      <p>{t(`01.TEXT.PARAGRAPH.04`, { context })}</p>
      <ul>
        <li>{t(`01.TEXT.LIST.03.010000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.03.020000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.03.030000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.03.040000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.03.050000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.03.060000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.03.070000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.03.080000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.03.090000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.03.100000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`01.IMAGE.04.FILENAME`)} src={t(`01.IMAGE.04.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`01.IMAGE.04.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`01.IMAGE.04.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section02: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter07');

  return (
    <IonText>
      <p>{t(`02.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`02.TEXT.LIST.01.010000`, { context })}</li>
        <ul>
          <li>{t(`02.TEXT.LIST.01.010100`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.010200`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.010300`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.010400`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.010500`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.010600`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.010700`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.01.FILENAME`)} src={t(`02.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.01.TITLE`, { context })}
      </IonText>
      <ul>
        <li>{t(`02.TEXT.LIST.01.020000`, { context })}</li>
        <ul>
          <li>{t(`02.TEXT.LIST.01.010100`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.010200`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.010300`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.010400`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.010500`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.02.FILENAME`)} src={t(`02.IMAGE.02.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.02.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.02.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section03: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter07');

  return (
    <IonText>
      <p>{t(`03.TEXT.PARAGRAPH.01`, { context })}</p>
      <p>{t(`03.TEXT.PARAGRAPH.02`, { context })}</p>
      <p>{t(`03.TEXT.PARAGRAPH.03`, { context })}</p>
      <ul>
        <li>{t(`03.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.050000`, { context })}</li>
      </ul>
      <p>{t(`03.TEXT.PARAGRAPH.04`, { context })}</p>
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
  const { t } = useTranslation('chapter07');

  return (
    <IonText>
      <p>{t(`04.TEXT.PARAGRAPH.01`, { context })}</p>
      <p>{t(`04.TEXT.PARAGRAPH.02`, { context })}</p>

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
      <ul>
        <li>{t(`04.TEXT.LIST.01.030000`, { context })}</li>
        <ul>
          <li>{t(`04.TEXT.LIST.01.030100`, { context })}</li>
          <ul>
            <li>{t(`04.TEXT.LIST.01.030101`, { context })}</li>
            <li>{t(`04.TEXT.LIST.01.030102`, { context })}</li>
            <li>{t(`04.TEXT.LIST.01.030103`, { context })}</li>
            <li>{t(`04.TEXT.LIST.01.030104`, { context })}</li>
          </ul>
        </ul>
      </ul>
      <ImageViewer alt={t(`04.IMAGE.02.FILENAME`)} src={t(`04.IMAGE.02.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`04.IMAGE.02.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`04.IMAGE.02.TITLE`, { context })}
      </IonText>
      <p>{t(`04.TEXT.PARAGRAPH.03`, { context })}</p>
      <ImageViewer alt={t(`04.IMAGE.03.FILENAME`)} src={t(`04.IMAGE.03.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`04.IMAGE.03.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`04.IMAGE.03.TITLE`, { context })}
      </IonText>
      <p>{t(`04.TEXT.PARAGRAPH.04`, { context })}</p>
      <ul>
        <li>{t(`04.TEXT.LIST.02.010000`, { context })}</li>
        <li>{t(`04.TEXT.LIST.02.020000`, { context })}</li>
      </ul>
      <p>{t(`04.TEXT.PARAGRAPH.05`, { context })}</p>
      <ul>
        <li>{t(`04.TEXT.LIST.03.010000`, { context })}</li>
        <li>{t(`04.TEXT.LIST.03.020000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`04.IMAGE.04.FILENAME`)} src={t(`04.IMAGE.04.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`04.IMAGE.04.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`04.IMAGE.04.TITLE`, { context })}
      </IonText>
      <p>{t(`04.TEXT.PARAGRAPH.06`, { context })}</p>
      <ImageViewer alt={t(`04.IMAGE.05.FILENAME`)} src={t(`04.IMAGE.05.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`04.IMAGE.05.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`04.IMAGE.05.TITLE`, { context })}
      </IonText>
      <p>{t(`04.TEXT.PARAGRAPH.07`, { context })}</p>
      <ul>
        <li>{t(`04.TEXT.LIST.04.010000`, { context })}</li>
        <li>{t(`04.TEXT.LIST.04.020000`, { context })}</li>
      </ul>
    </IonText>
  );
};

export const Section05: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter07');

  return (
    <IonText>
      <p>{t(`05.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`05.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.040000`, { context })}</li>
      </ul>
      <p>{t(`05.TEXT.PARAGRAPH.02`, { context })}</p>
      <p>{t(`05.TEXT.PARAGRAPH.03`, { context })}</p>
      <ul>
        <li>{t(`05.TEXT.LIST.02.010000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.02.020000`, { context })}</li>
        <ul>
          <li>{t(`05.TEXT.LIST.02.020100`, { context })}</li>
          <ul>
            <li>{t(`05.TEXT.LIST.02.020101`, { context })}</li>
          </ul>
        </ul>
      </ul>
      <p>{t(`05.TEXT.PARAGRAPH.04`, { context })}</p>
      <ImageViewer alt={t(`05.IMAGE.01.FILENAME`)} src={t(`05.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`05.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`05.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const chapter07 = {
  '01': Section01,
  '02': Section02,
  '03': Section03,
  '04': Section04,
  '05': Section05,
};
