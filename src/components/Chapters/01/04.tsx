import React from 'react';
import { connect } from 'react-redux';
import { IonCol, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import ChapterFooter from '../footer';

interface ContainerProps {}

const Chapter0104: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <IonGrid class="ion-padding ion-text-justify">
        <IonRow class="ion-justify-content-center">
          <IonCol size="12" sizeSm="6">
            <IonText>
              <h2 className="chapter-title">{t(`CHAPTER.01.04.TITLE`)}</h2>
            </IonText>
            <IonText>
              <p>{t(`CHAPTER.01.04.TEXT.PARAGRAPH.01`)}</p>
              <ul>
                <li>{t(`CHAPTER.01.04.TEXT.LIST.01.010000`)}</li>
                <li>{t(`CHAPTER.01.04.TEXT.LIST.01.020000`)}</li>
                <ul>
                  <li>{t(`CHAPTER.01.04.TEXT.LIST.01.020100`)}</li>
                  <li>{t(`CHAPTER.01.04.TEXT.LIST.01.020200`)}</li>
                  <li>{t(`CHAPTER.01.04.TEXT.LIST.01.020300`)}</li>
                </ul>
                <li>{t(`CHAPTER.01.04.TEXT.LIST.01.030000`)}</li>
                <ul>
                  <li>{t(`CHAPTER.01.04.TEXT.LIST.01.030100`)}</li>
                  <li>{t(`CHAPTER.01.04.TEXT.LIST.01.030200`)}</li>
                  <li>{t(`CHAPTER.01.04.TEXT.LIST.01.030300`)}</li>
                </ul>
                <li>{t(`CHAPTER.01.04.TEXT.LIST.01.040000`)}</li>
              </ul>
              <IonImg src={t(`CHAPTER.01.04.IMAGE.01.FILENAME`)} />
              <IonText>{t(`CHAPTER.01.04.IMAGE.01.TITLE`)}</IonText>
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
      <ChapterFooter
        previousChapter="/chapter/01/03"
        nextChapter="/chapter/02/01"
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

export default connect(mapStateToProps, mapDispatchToProps)(Chapter0104);
