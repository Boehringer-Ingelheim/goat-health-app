import { IonText } from '@ionic/react';
import React from 'react';
import { useMenuChapters } from '../../utils/hooks/useMenus';
import { Chapter } from '../Chapters';
import './index.css';

export const HomeContainer: React.FC = () => {
  const chapterMenus = useMenuChapters();

  return (
    <>
      {chapterMenus.map((chapterSections, chapterSectionsIndex) => {
        const sectionHeader = chapterSections[0];
        const sections = chapterSections.slice(1);

        return (
          <React.Fragment key={chapterSectionsIndex}>
            <IonText>
              <h1 className="ion-padding">{sectionHeader.title}</h1>
            </IonText>
            <div className="scrolling-wrapper">
              {sections.map((section, sectionIndex) => {
                const { chapterId, sectionId } = section;
                return (
                  <Chapter
                    chapterId={chapterId}
                    key={`${chapterSectionsIndex}-${sectionIndex}`}
                    sectionId={sectionId}
                    view="card"
                  />
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};
