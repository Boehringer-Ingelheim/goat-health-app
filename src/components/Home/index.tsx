import { IonCard, IonCardHeader, IonCardTitle, IonText } from '@ionic/react';
import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import { useTranslation } from 'react-i18next';
import { CHAPTER_01 } from '../Chapters/01/config';
import { CHAPTER_02 } from '../Chapters/02/config';

interface ContainerProps {
  name: string;
}

const HomeContainer: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();
  const MENUS = [CHAPTER_01, CHAPTER_02];

  return (
    <>
      {MENUS.map((chapters) => {
        const chapterHeader = chapters[0];
        const chapterContent = chapters.slice(1);

        return (
          <>
            <IonText>
              <h1 className="ion-padding">{t(chapterHeader.title)}</h1>
            </IonText>
            <div className="scrolling-wrapper">
              {chapterContent.map((chapter) => {
                return (
                  <IonCard key={chapter.title} class="app-slide-card">
                    <IonCardHeader color={chapter.color}>
                      <IonCardTitle>{t(chapter.title)}</IonCardTitle>
                    </IonCardHeader>
                    <img alt="" src={t(chapter.image)} />
                  </IonCard>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
