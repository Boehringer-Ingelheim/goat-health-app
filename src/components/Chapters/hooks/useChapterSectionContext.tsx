import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { warning } from 'ionicons/icons';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Chapters } from '../ChapterContent/index';
import { ChapterContext, ChapterId } from '../index';

const ChapterSectionNotAvailable = () => {
  const { t } = useTranslation();
  return (
    <IonItem
      className="ion-margin-vertical"
      color="warning"
      detail={false}
      lines="none"
    >
      <IonIcon icon={warning} size="small" slot="start" />
      <IonLabel>
        {t(`APP.ERROR.NOT_AVAILABLE_CHAPTER_SECTION_CONTENT`)}
      </IonLabel>
    </IonItem>
  );
};

export const useChapterSectionContext = (
  chapterId: ChapterId,
  sectionId: string,
  context: ChapterContext = '',
) =>
  useMemo(() => {
    const Content = () =>
      Chapters?.[`Chapter${chapterId}`]?.[`Section${sectionId}`](context) ||
      ChapterSectionNotAvailable();

    return { Content };
  }, [chapterId, sectionId, context]);
