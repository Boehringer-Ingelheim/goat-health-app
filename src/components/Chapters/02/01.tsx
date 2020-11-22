import React from 'react';
import { connect } from 'react-redux';
import { IonCol, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import ChapterFooter from '../footer';

interface ContainerProps {}

const Chapter0201: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <IonGrid class="ion-padding ion-text-justify">
        <IonRow class="ion-justify-content-center">
          <IonCol size="12" sizeSm="6">
            <IonText>
              <h2 className="chapter-title">{t(`CHAPTER.02.01.TITLE`)}</h2>
            </IonText>
            <IonText>
              <p>{t(`CHAPTER.02.01.TEXT.PARAGRAPH.01`)}</p>
              <ul>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.010000`)}</li>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.020000`)}</li>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.030000`)}</li>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.040000`)}</li>
                <div className="chapter-image-title">
                  <IonImg src={t(`CHAPTER.02.01.IMAGE.01.FILENAME`)} />
                  <IonText>{t(`CHAPTER.02.01.IMAGE.01.TITLE`)}</IonText>
                </div>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.050000`)}</li>
                <ul>
                  <li>{t(`CHAPTER.02.01.TEXT.LIST.01.050100`)}</li>
                </ul>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.060000`)}</li>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.070000`)}</li>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.080000`)}</li>
                <li>{t(`CHAPTER.02.01.TEXT.LIST.01.090000`)}</li>
                <div className="chapter-image-title">
                  <IonImg src={t(`CHAPTER.02.01.IMAGE.02.FILENAME`)} />
                  <IonText>{t(`CHAPTER.02.01.IMAGE.02.TITLE`)}</IonText>
                </div>
              </ul>
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
      <ChapterFooter
        nextChapter="/chapter/02/02"
        previousChapter="/chapter/01/04"
      />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Chapter0201);
