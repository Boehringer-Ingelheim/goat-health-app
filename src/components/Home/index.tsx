import { IonRouterLink, IonText } from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Chapter, getChapterIdsByUrl } from '../Chapters';
import { CHAPTER_01 } from '../Chapters/01/config';
import { CHAPTER_02 } from '../Chapters/02/config';
import './index.css';

interface ContainerProps {
  name: string;
}

export const HomeContainer: React.FC<ContainerProps> = (props) => {
  const { t } = useTranslation();
  const MENUS = [CHAPTER_01, CHAPTER_02];

  return (
    <>
      {MENUS.map((chapters, chaptersIndex) => {
        const chapterHeader = chapters[0];
        const chapterContent = chapters.slice(1);

        return (
          <React.Fragment key={chaptersIndex}>
            <IonText>
              <h1 className="ion-padding">{t(chapterHeader.title)}</h1>
            </IonText>
            <div className="scrolling-wrapper">
              {chapterContent.map((chapter, chapterIndex) => {
                const chapterUrl = chapter.url;
                const { id, subId } = getChapterIdsByUrl(chapterUrl);
                return (
                  <IonRouterLink
                    key={`${chaptersIndex}-${chapterIndex}`}
                    routerLink={chapterUrl}
                    routerDirection="forward"
                  >
                    <Chapter id={id} isCard subId={subId} />
                  </IonRouterLink>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};
