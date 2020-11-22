import React from 'react';
import { connect } from 'react-redux';
import { IonCol, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import ChapterFooter from '../footer';

interface ContainerProps {}

const Chapter0204: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <IonGrid class="ion-padding ion-text-justify">
        <IonRow class="ion-justify-content-center">
          <IonCol size="12" sizeSm="6">
            <IonText>
              <h2 className="chapter-title">{t(`CHAPTER.02.04.TITLE`)}</h2>
            </IonText>
            <IonText>
              <p>{t(`CHAPTER.02.04.TEXT.PARAGRAPH.01`)}</p>
              <ul>
                <li>{t(`CHAPTER.02.04.TEXT.LIST.01.010000`)}</li>
                <li>{t(`CHAPTER.02.04.TEXT.LIST.01.020000`)}</li>
                <div className="chapter-image-title">
                  <IonImg src={t(`CHAPTER.02.04.IMAGE.01.FILENAME`)} />
                  <IonText>{t(`CHAPTER.02.04.IMAGE.01.TITLE`)}</IonText>
                </div>
              </ul>
              <p>{t(`CHAPTER.02.04.TEXT.PARAGRAPH.02`)}</p>
              <ul>
                <li>{t(`CHAPTER.02.04.TEXT.LIST.02.010000`)}</li>
                <li>{t(`CHAPTER.02.04.TEXT.LIST.02.020000`)}</li>
                <li>{t(`CHAPTER.02.04.TEXT.LIST.02.030000`)}</li>
              </ul>
              <p>{t(`CHAPTER.02.04.TEXT.PARAGRAPH.03`)}</p>
              <div className="chapter-image-title">
                <IonImg src={t(`CHAPTER.02.04.IMAGE.02.FILENAME`)} />
                <IonText>{t(`CHAPTER.02.04.IMAGE.02.TITLE`)}</IonText>
              </div>
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
      <ChapterFooter
        previousChapter="/chapter/02/03"
        nextChapter="/chapter/02/05"
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

export default connect(mapStateToProps, mapDispatchToProps)(Chapter0204);
