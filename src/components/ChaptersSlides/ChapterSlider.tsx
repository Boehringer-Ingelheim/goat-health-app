import { IonText } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { ChapterId } from '../Chapters';
import { ChapterViewCard } from '../ChapterView/ChapterViewCard';
import { getSectionIds } from '../Chapters/utils';
import './index.css';
import { FC } from 'react';

export const ChapterSlider: FC<{ chapterId: ChapterId }> = ({ chapterId }) => {
  const { t } = useTranslation();
  const sectionIds = getSectionIds(chapterId);

  return (
    <>
      <IonText>
        <h1 className="ion-padding">
          {t(`chapter${chapterId}:00.TITLE` as const)}
        </h1>
      </IonText>
      <div className="app-chapter-slider-scrolling">
        {sectionIds.map((sectionId) => (
          <ChapterViewCard
            chapterId={chapterId}
            key={`chapter-slider-card-${chapterId}-${sectionId}`}
            sectionId={sectionId}
          />
        ))}
      </div>
    </>
  );
};
