import { IonImg, IonText } from '@ionic/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageViewer } from '../../ImageViewer';
import { Context } from '../index';

export const Section01: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter06');

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
      </ul>
      <p>{t(`01.TEXT.PARAGRAPH.03`, { context })}</p>
      <ul>
        <li>{t(`01.TEXT.LIST.02.010000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.02.020000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.02.030000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.02.040000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.02.050000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.02.060000`, { context })}</li>
      </ul>
      <p>{t(`01.TEXT.PARAGRAPH.04`, { context })}</p>
      <ul>
        <li>{t(`01.TEXT.LIST.03.010000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.03.020000`, { context })}</li>
        <li>{t(`01.TEXT.LIST.03.030000`, { context })}</li>
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
  const { t } = useTranslation('chapter06');

  return (
    <IonText>
      <p>{t(`02.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`02.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.01.050000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.01.FILENAME`)} src={t(`02.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.01.TITLE`, { context })}
      </IonText>
      <p>{t(`02.TEXT.PARAGRAPH.02`, { context })}</p>
      <ul>
        <li>{t(`02.TEXT.LIST.02.010000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.02.020000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.02.030000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.02.040000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.02.050000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.02.060000`, { context })}</li>
      </ul>
      <p>{t(`02.TEXT.PARAGRAPH.03`, { context })}</p>
      <ul>
        <li>{t(`02.TEXT.LIST.03.010000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.02.FILENAME`)} src={t(`02.IMAGE.02.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.02.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.02.TITLE`, { context })}
      </IonText>
      <p>{t(`02.TEXT.PARAGRAPH.04`, { context })}</p>
      <ul>
        <li>{t(`02.TEXT.LIST.04.010000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.04.020000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.04.030000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.03.FILENAME`)} src={t(`02.IMAGE.03.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.03.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.03.TITLE`, { context })}
      </IonText>
      <p>{t(`02.TEXT.PARAGRAPH.05`, { context })}</p>
      <ul>
        <li>{t(`02.TEXT.LIST.05.010000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.05.020000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.05.030000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.04.FILENAME`)} src={t(`02.IMAGE.04.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.04.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.04.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const chapter06 = {
  '01': Section01,
  '02': Section02,
};
