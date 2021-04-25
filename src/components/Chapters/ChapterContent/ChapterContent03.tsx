import { IonImg, IonText } from '@ionic/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageViewer } from '../../ImageViewer';
import { Context } from '../index';

export const Section01: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter03');

  return (
    <IonText>
      <p>{t(`01.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`01.TEXT.LIST.01.010000`, { context })}</li>
        <ul>
          <li>{t(`01.TEXT.LIST.01.010100`, { context })}</li>
          <li>{t(`01.TEXT.LIST.01.010200`, { context })}</li>
        </ul>
        <li>{t(`01.TEXT.LIST.01.020000`, { context })}</li>
        <ul>
          <li>{t(`01.TEXT.LIST.01.020100`, { context })}</li>
          <li>{t(`01.TEXT.LIST.01.020200`, { context })}</li>
          <li>{t(`01.TEXT.LIST.01.020300`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer alt={t(`01.IMAGE.01.FILENAME`)} src={t(`01.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`01.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`01.IMAGE.01.TITLE`, { context })}
      </IonText>
      <ImageViewer alt={t(`01.IMAGE.02.FILENAME`)} src={t(`01.IMAGE.02.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`01.IMAGE.02.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`01.IMAGE.02.TITLE`, { context })}
      </IonText>
      <ul>
        <li>{t(`01.TEXT.LIST.01.030000`, { context })}</li>
        <ul>
          <li>{t(`01.TEXT.LIST.01.030100`, { context })}</li>
          <li>{t(`01.TEXT.LIST.01.030200`, { context })}</li>
          <li>{t(`01.TEXT.LIST.01.030300`, { context })}</li>
          <li>{t(`01.TEXT.LIST.01.030400`, { context })}</li>
          <li>{t(`01.TEXT.LIST.01.030500`, { context })}</li>
          <li>{t(`01.TEXT.LIST.01.030600`, { context })}</li>
        </ul>
        <li>{t(`01.TEXT.LIST.01.040000`, { context })}</li>
        <ul>
          <li>{t(`01.TEXT.LIST.01.040100`, { context })}</li>
          <li>{t(`01.TEXT.LIST.01.040200`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer alt={t(`01.IMAGE.03.FILENAME`)} src={t(`01.IMAGE.03.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`01.IMAGE.03.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`01.IMAGE.03.TITLE`, { context })}
      </IonText>
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
  const { t } = useTranslation('chapter03');

  return (
    <IonText>
      <p>{t(`02.TEXT.PARAGRAPH.01`, { context })}</p>
      <p>{t(`02.TEXT.PARAGRAPH.02`, { context })}</p>
      <ul>
        <li>{t(`02.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`02.TEXT.LIST.01.030000`, { context })}</li>
        <ul>
          <li>{t(`02.TEXT.LIST.01.030100`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.030200`, { context })}</li>
          <li>{t(`02.TEXT.LIST.01.030300`, { context })}</li>
        </ul>
        <li>{t(`02.TEXT.LIST.01.040000`, { context })}</li>
      </ul>
      <p>{t(`02.TEXT.PARAGRAPH.03`, { context })}</p>
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
  const { t } = useTranslation('chapter03');

  return (
    <IonText>
      <p>{t(`03.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`03.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`03.TEXT.LIST.01.020000`, { context })}</li>
        <ul>
          <li>{t(`03.TEXT.LIST.01.020100`, { context })}</li>
          <li>{t(`03.TEXT.LIST.01.020200`, { context })}</li>
          <li>{t(`03.TEXT.LIST.01.020300`, { context })}</li>
          <li>{t(`03.TEXT.LIST.01.020400`, { context })}</li>
          <li>{t(`03.TEXT.LIST.01.020500`, { context })}</li>
          <li>{t(`03.TEXT.LIST.01.020600`, { context })}</li>
          <li>{t(`03.TEXT.LIST.01.020700`, { context })}</li>
          <li>{t(`03.TEXT.LIST.01.020800`, { context })}</li>
          <li>{t(`03.TEXT.LIST.01.020900`, { context })}</li>
        </ul>
      </ul>
      <p>{t(`03.TEXT.PARAGRAPH.02`, { context })}</p>
      <p>{t(`03.TEXT.PARAGRAPH.03`, { context })}</p>
      <ImageViewer alt={t(`03.IMAGE.01.FILENAME`)} src={t(`03.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`03.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`03.IMAGE.01.TITLE`, { context })}
      </IonText>
      <ImageViewer alt={t(`03.IMAGE.02.FILENAME`)} src={t(`03.IMAGE.02.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`03.IMAGE.02.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`03.IMAGE.02.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section04: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter03');

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
      <ul>
        <li>{t(`04.TEXT.LIST.01.030000`, { context })}</li>
        <ul>
          <li>{t(`04.TEXT.LIST.01.030100`, { context })}</li>
          <li>{t(`04.TEXT.LIST.01.030200`, { context })}</li>
          <li>{t(`04.TEXT.LIST.01.030300`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer alt={t(`04.IMAGE.02.FILENAME`)} src={t(`04.IMAGE.02.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`04.IMAGE.02.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`04.IMAGE.02.TITLE`, { context })}
      </IonText>
      <ul>
        <li>{t(`04.TEXT.LIST.01.040000`, { context })}</li>
        <ul>
          <li>{t(`04.TEXT.LIST.01.040100`, { context })}</li>
          <li>{t(`04.TEXT.LIST.01.040200`, { context })}</li>
          <li>{t(`04.TEXT.LIST.01.040300`, { context })}</li>
        </ul>
        <li>{t(`04.TEXT.LIST.01.050000`, { context })}</li>
      </ul>
    </IonText>
  );
};

export const Section05: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter03');

  return (
    <IonText>
      <p>{t(`05.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`05.TEXT.LIST.01.010000`, { context })}</li>
        <ul>
          <li>{t(`05.TEXT.LIST.01.010100`, { context })}</li>
          <li>{t(`05.TEXT.LIST.01.010200`, { context })}</li>
          <li>{t(`05.TEXT.LIST.01.010300`, { context })}</li>
          <li>{t(`05.TEXT.LIST.01.010400`, { context })}</li>
        </ul>
        <li>{t(`05.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`05.TEXT.LIST.01.040000`, { context })}</li>
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
  const { t } = useTranslation('chapter03');

  return (
    <IonText>
      <p>{t(`06.TEXT.PARAGRAPH.01`, { context })}</p>
      <p>{t(`06.TEXT.PARAGRAPH.02`, { context })}</p>
      <ul>
        <li>{t(`06.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`06.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`06.TEXT.LIST.01.030000`, { context })}</li>
        <ul>
          <li>{t(`06.TEXT.LIST.01.030100`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.030200`, { context })}</li>
          <li>{t(`06.TEXT.LIST.01.030300`, { context })}</li>
        </ul>
      </ul>
      <p>{t(`06.TEXT.PARAGRAPH.03`, { context })}</p>
      <ul>
        <li>{t(`06.TEXT.LIST.02.010000`, { context })}</li>
        <li>{t(`06.TEXT.LIST.02.020000`, { context })}</li>
        <li>{t(`06.TEXT.LIST.02.030000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`06.IMAGE.01.FILENAME`)} src={t(`06.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`06.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`06.IMAGE.01.TITLE`, { context })}
      </IonText>
      <ImageViewer alt={t(`06.IMAGE.02.FILENAME`)} src={t(`06.IMAGE.02.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`06.IMAGE.02.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`06.IMAGE.02.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section07: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter03');

  return (
    <IonText>
      <p>{t(`07.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`07.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`07.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`07.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`07.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`07.TEXT.LIST.01.050000`, { context })}</li>
        <li>{t(`07.TEXT.LIST.01.060000`, { context })}</li>
        <li>{t(`07.TEXT.LIST.01.070000`, { context })}</li>
      </ul>
      <p>{t(`07.TEXT.PARAGRAPH.02`, { context })}</p>
      <ul>
        <li>{t(`07.TEXT.LIST.02.010000`, { context })}</li>
        <li>{t(`07.TEXT.LIST.02.020000`, { context })}</li>
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
  const { t } = useTranslation('chapter03');

  return (
    <IonText>
      <ul>
        <li>{t(`08.TEXT.LIST.01.010000`, { context })}</li>
        <ul>
          <li>{t(`08.TEXT.LIST.01.010100`, { context })}</li>
          <li>{t(`08.TEXT.LIST.01.010200`, { context })}</li>
          <li>{t(`08.TEXT.LIST.01.010300`, { context })}</li>
          <li>{t(`08.TEXT.LIST.01.010400`, { context })}</li>
          <li>{t(`08.TEXT.LIST.01.010500`, { context })}</li>
        </ul>
        <li>{t(`08.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`08.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`08.TEXT.LIST.01.040000`, { context })}</li>
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

export const Section09: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter03');

  return (
    <IonText>
      <p>{t(`09.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`09.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`09.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`09.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`09.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`09.TEXT.LIST.01.050000`, { context })}</li>
        <li>{t(`09.TEXT.LIST.01.060000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`09.IMAGE.01.FILENAME`)} src={t(`09.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`09.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`09.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section10: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter03');

  return (
    <IonText>
      <p>{t(`10.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`10.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`10.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`10.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`10.TEXT.LIST.01.040000`, { context })}</li>
        <ul>
          <li>{t(`10.TEXT.LIST.01.040100`, { context })}</li>
          <li>{t(`10.TEXT.LIST.01.040200`, { context })}</li>
          <li>{t(`10.TEXT.LIST.01.040300`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer alt={t(`10.IMAGE.01.FILENAME`)} src={t(`10.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`10.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`10.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section11: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter03');

  return (
    <IonText>
      <p>{t(`11.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`11.TEXT.LIST.01.010000`, { context })}</li>
        <ul>
          <li>{t(`11.TEXT.LIST.01.010100`, { context })}</li>
          <li>{t(`11.TEXT.LIST.01.010200`, { context })}</li>
          <ul>
            <li>{t(`11.TEXT.LIST.01.010201`, { context })}</li>
          </ul>
          <li>{t(`11.TEXT.LIST.01.010300`, { context })}</li>
          <ul>
            <li>{t(`11.TEXT.LIST.01.010301`, { context })}</li>
          </ul>
          <li>{t(`11.TEXT.LIST.01.010300`, { context })}</li>
          <li>{t(`11.TEXT.LIST.01.010400`, { context })}</li>
        </ul>
      </ul>
      <ImageViewer alt={t(`11.IMAGE.01.FILENAME`)} src={t(`11.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`11.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`11.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const Section12: FC<Context> = ({ context = '' }) => {
  const { t } = useTranslation('chapter03');

  return (
    <IonText>
      <p>{t(`12.TEXT.PARAGRAPH.01`, { context })}</p>
      <ul>
        <li>{t(`12.TEXT.LIST.01.010000`, { context })}</li>
        <li>{t(`12.TEXT.LIST.01.020000`, { context })}</li>
        <li>{t(`12.TEXT.LIST.01.030000`, { context })}</li>
        <li>{t(`12.TEXT.LIST.01.040000`, { context })}</li>
        <li>{t(`12.TEXT.LIST.01.050000`, { context })}</li>
      </ul>
      <ImageViewer alt={t(`12.IMAGE.01.FILENAME`)} src={t(`12.IMAGE.01.FILENAME`)}>
        <IonImg class="ion-padding-vertical" src={t(`12.IMAGE.01.THUMBNAIL.LARGE`)} />
      </ImageViewer>
      <IonText class="ion-padding-bottom" className="image-text">
        {t(`12.IMAGE.01.TITLE`, { context })}
      </IonText>
    </IonText>
  );
};

export const chapter03 = {
  '01': Section01,
  '02': Section02,
  '03': Section03,
  '04': Section04,
  '05': Section05,
  '06': Section06,
  '07': Section07,
  '08': Section08,
  '09': Section09,
  '10': Section10,
  '11': Section11,
  '12': Section12,
};
