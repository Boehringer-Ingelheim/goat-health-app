import { IonImg, IonText } from '@ionic/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageViewer } from '../../ImageViewer';
import { Context } from '../index';

export const Section01: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter05');

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
      <p>{t(`01.TEXT.PARAGRAPH.02`, { context })}</p>
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
    </IonText>
  );
};

export const Section02: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter05');

  return (
    <IonText>
      <p>{t(`02.TEXT.PARAGRAPH.01`, { context })}</p>
      <p>{t(`02.TEXT.PARAGRAPH.02`, { context })}</p>
      <ul>
        <li>{t(`02.TEXT.LIST.01.010000`, { context })}</li>
        <ul>
          <li>{t(`02.TEXT.LIST.01.010100`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.010200`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.010300`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.010400`, { context })}</li>
          <ul>
            <li>{t(`02.TEXT.LIST.01.010401`, { context })}</li>
            <li>{t(`02.TEXT.LIST.01.010402`, { context })}</li>
          </ul>
        </ul>
        <li>{t(`02.TEXT.LIST.01.020000`, { context })}</li>
        <ul>
          <li>{t(`02.TEXT.LIST.01.020100`, { context })}</li>
          <ul>
            <li>{t(`02.TEXT.LIST.01.020101`, { context })}</li>
            <li>{t(`02.TEXT.LIST.01.020102`, { context })}</li>
          </ul>
          <li>{t(`02.TEXT.LIST.01.020200`, { context })}</li>
          <ul>
            <li>{t(`02.TEXT.LIST.01.020201`, { context })}</li>
            <li>{t(`02.TEXT.LIST.01.020202`, { context })}</li>
          </ul>
        </ul>
        <li>{t(`02.TEXT.LIST.01.030000`, { context })}</li>
        <ul>
          <li>{t(`02.TEXT.LIST.01.030100`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.030200`, { context })}</li>
        </ul>
        <li>{t(`02.TEXT.LIST.01.040000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.01.FILENAME`)} src={t(`02.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.01.TITLE`, { context })}
      </IonText>
      <p>{t(`02.TEXT.PARAGRAPH.03`, { context })}</p>
      <ul>
        <li>{t(`02.TEXT.LIST.02.010000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.02.020000`, { context })}</li>
      </ul>
      <ul>
        <li>{t(`02.TEXT.LIST.03.010000`, { context })}</li>
        <ul>
          <li>{t(`02.TEXT.LIST.03.010100`, { context })}</li>
          <li>{t(`02.TEXT.LIST.03.010200`, { context })}</li>
          <li>{t(`02.TEXT.LIST.03.010300`, { context })}</li>
          <li>{t(`02.TEXT.LIST.03.010400`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.02.FILENAME`)} src={t(`02.IMAGE.02.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.02.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.02.TITLE`, { context })}
      </IonText>
      <ul>
        <li>{t(`02.TEXT.LIST.03.020000`, { context })}</li>
        <ul>
          <li>{t(`02.TEXT.LIST.03.020100`, { context })}</li>
          <li>{t(`02.TEXT.LIST.03.020200`, { context })}</li>
          <li>{t(`02.TEXT.LIST.03.020300`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.03.FILENAME`)} src={t(`02.IMAGE.03.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.03.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.03.TITLE`, { context })}
      </IonText>
      <ul>
        <li>{t(`02.TEXT.LIST.03.030000`, { context })}</li>
        <ul>
          <li>{t(`02.TEXT.LIST.03.030100`, { context })}</li>
          <li>{t(`02.TEXT.LIST.03.030200`, { context })}</li>
          <li>{t(`02.TEXT.LIST.03.030300`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.04.FILENAME`)} src={t(`02.IMAGE.04.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.04.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.04.TITLE`, { context })}
      </IonText>
      <ul>
        <li>{t(`02.TEXT.LIST.03.040000`, { context })}</li>
        <ul>
          <li>{t(`02.TEXT.LIST.03.040100`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.05.FILENAME`)} src={t(`02.IMAGE.05.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.05.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.05.TITLE`, { context })}
      </IonText>
      <ul>
        <ul>
          <li>{t(`02.TEXT.LIST.03.040200`, { context })}</li>
          <li>{t(`02.TEXT.LIST.03.040300`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.06.FILENAME`)} src={t(`02.IMAGE.06.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.06.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.06.TITLE`, { context })}
      </IonText>
      <ul>
        <ul>
          <li>{t(`02.TEXT.LIST.03.040400`, { context })}</li>
          <li>{t(`02.TEXT.LIST.03.040500`, { context })}</li>
          <li>{t(`02.TEXT.LIST.03.040600`, { context })}</li>
          <li>{t(`02.TEXT.LIST.03.040700`, { context })}</li>
          <li>{t(`02.TEXT.LIST.03.040800`, { context })}</li>
          <ul>
            <li>{t(`02.TEXT.LIST.03.040801`, { context })}</li>
            <li>{t(`02.TEXT.LIST.03.040802`, { context })}</li>
          </ul>
        </ul>
      </ul>
      <ImageViewer alt={t(`02.IMAGE.07.FILENAME`)} src={t(`02.IMAGE.07.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`02.IMAGE.07.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`02.IMAGE.07.TITLE`, { context })}
      </IonText>
      <ul>
        <li>{t(`02.TEXT.LIST.03.040900`, { context })}</li>
        <li>{t(`02.TEXT.LIST.03.041000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.03.041100`, { context })}</li>
      </ul>
    </IonText>
  );
};

export const Section03: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter05');

  return (
    <IonText>
      <p>{t(`03.TEXT.PARAGRAPH.01`, { context })}</p>
      <p>{t(`03.TEXT.PARAGRAPH.02`, { context })}</p>
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
        <li>{t(`03.TEXT.LIST.01.100000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.110000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.120000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`03.IMAGE.01.FILENAME`)} src={t(`03.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`03.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`03.IMAGE.01.TITLE`, { context })}
      </IonText>
      <p>{t(`03.TEXT.PARAGRAPH.03`, { context })}</p>
      <ul>
        <li>{t(`03.TEXT.LIST.02.010000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.02.020000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.02.030000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.02.040000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.02.050000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.02.060000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.02.070000`, { context })}</li>
        <ul>
          <li>{t(`03.TEXT.LIST.02.070100`, { context })}</li>
          <li>{t(`03.TEXT.LIST.02.070200`, { context })}</li>
        </ul>
        <li>{t(`03.TEXT.LIST.02.080000`, { context })}</li>
        <ul>
          <li>{t(`03.TEXT.LIST.02.080100`, { context })}</li>
        </ul>
        <li>{t(`03.TEXT.LIST.02.090000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.02.100000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.02.110000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.02.120000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.02.130000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.02.140000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.02.150000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.02.160000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`03.IMAGE.02.FILENAME`)} src={t(`03.IMAGE.02.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`03.IMAGE.02.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`03.IMAGE.02.TITLE`, { context })}
      </IonText>
      <p>{t(`03.TEXT.PARAGRAPH.04`, { context })}</p>
      <ul>
        <li>{t(`03.TEXT.LIST.03.010000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.03.020000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.03.030000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.03.040000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.03.050000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`03.IMAGE.03.FILENAME`)} src={t(`03.IMAGE.03.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`03.IMAGE.03.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`03.IMAGE.03.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section04: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter05');

  return (
    <IonText>
      <p>{t(`04.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`04.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`04.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`04.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`04.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`04.TEXT.LIST.01.050000`, { context })}</li>
        <li>{t(`04.TEXT.LIST.01.060000`, { context })}</li>
        <li>{t(`04.TEXT.LIST.01.070000`, { context })}</li>
        <li>{t(`04.TEXT.LIST.01.080000`, { context })}</li>
        <ul>
          <li>{t(`04.TEXT.LIST.01.080100`, { context })}</li>
        </ul>
      </ul>
      <p>{t(`04.TEXT.PARAGRAPH.02`, { context })}</p>
      <p>{t(`04.TEXT.PARAGRAPH.03`, { context })}</p>
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
  const { t } = useTranslation('chapter05');

  return (
    <IonText>
      <p>{t(`05.TEXT.PARAGRAPH.01`, { context })}</p>
      <p>{t(`05.TEXT.PARAGRAPH.02`, { context })}</p>

      <ul>
        <li>{t(`05.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.050000`, { context })}</li>
      </ul>
      <p>{t(`05.TEXT.PARAGRAPH.03`, { context })}</p>
      <p>{t(`05.TEXT.PARAGRAPH.04`, { context })}</p>
      <p>{t(`05.TEXT.PARAGRAPH.05`, { context })}</p>
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
  const { t } = useTranslation('chapter05');

  return (
    <IonText>
      <p>{t(`06.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`06.TEXT.LIST.01.010000`, { context })}</li>
        <ul>
          <li>{t(`06.TEXT.LIST.01.010100`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.010200`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.010300`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.010400`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.010500`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.010600`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.010700`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.010800`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.010900`, { context })}</li>
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
      <ul>
        <li>{t(`06.TEXT.LIST.01.030000`, { context })}</li>
        <ul>
          <li>{t(`06.TEXT.LIST.01.030100`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.030200`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.030300`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.030400`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer alt={t(`06.IMAGE.02.FILENAME`)} src={t(`06.IMAGE.02.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`06.IMAGE.02.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`06.IMAGE.02.TITLE`, { context })}
      </IonText>
      <ul>
        <li>{t(`06.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`06.TEXT.LIST.01.050000`, { context })}</li>
        <li>{t(`06.TEXT.LIST.01.060000`, { context })}</li>
        <li>{t(`06.TEXT.LIST.01.070000`, { context })}</li>
        <li>{t(`06.TEXT.LIST.01.080000`, { context })}</li>
        <li>{t(`06.TEXT.LIST.01.090000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`06.IMAGE.03.FILENAME`)} src={t(`06.IMAGE.03.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`06.IMAGE.03.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`06.IMAGE.03.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section07: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter05');

  return (
    <IonText>
      <p>{t(`07.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`07.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`07.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`07.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`07.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`07.TEXT.LIST.01.050000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`07.IMAGE.01.FILENAME`)} src={t(`07.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`07.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`07.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section08: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter05');

  return (
    <IonText>
      <p>{t(`08.TEXT.PARAGRAPH.01`, { context })}</p>
      <p>{t(`08.TEXT.PARAGRAPH.02`, { context })}</p>
      <p>{t(`08.TEXT.PARAGRAPH.03`, { context })}</p>
      <p>{t(`08.TEXT.PARAGRAPH.04`, { context })}</p>
      <ul>
        <li>{t(`08.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`08.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`08.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`08.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`08.TEXT.LIST.01.050000`, { context })}</li>
        <li>{t(`08.TEXT.LIST.01.060000`, { context })}</li>
        <li>{t(`08.TEXT.LIST.01.070000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`08.IMAGE.01.FILENAME`)} src={t(`08.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`08.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`08.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const chapter05 = {
  '01': Section01,
  '02': Section02,
  '03': Section03,
  '04': Section04,
  '05': Section05,
  '06': Section06,
  '07': Section07,
  '08': Section08,
};
