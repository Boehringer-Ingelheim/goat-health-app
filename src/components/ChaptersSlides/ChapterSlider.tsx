import { IonText } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { ChapterId } from '../Chapters';
import { ChapterViewCard } from '../ChapterView/ChapterViewCard';
import { getSectionIds } from '../Chapters/utils';
import './index.css';

export const ChapterSlider = ({ chapterId = '01' as ChapterId }) => {
  const { t } = useTranslation();
  const sectionIds = getSectionIds(chapterId);

  return (
    <>
      <IonText>
        <h1 className="ion-padding">{t(`CHAPTER.${chapterId}.00.TITLE`)}</h1>
      </IonText>
      <div className="app-chapter-slider-scrolling">
        {sectionIds.reduce((sections, sectionId) => {
          if (sectionId === '00') {
            return sections;
          }

          return [
            ...sections,
            <ChapterViewCard
              chapterId={chapterId}
              key={`chapter-slider-card-${chapterId}-${sectionId}`}
              sectionId={sectionId}
            />,
          ];
        }, [] as JSX.Element[])}
      </div>
    </>
  );
};
