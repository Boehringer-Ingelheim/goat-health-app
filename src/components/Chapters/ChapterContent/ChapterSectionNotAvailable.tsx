import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { warning } from 'ionicons/icons';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const ChapterSectionNotAvailable: FC = () => {
  const { t } = useTranslation('app');
  return (
    <IonItem className="ion-margin-vertical" color="warning" detail={false} lines="none">
      <IonIcon icon={warning} size="small" slot="start" />
      <IonLabel>{t(`APP.ERROR.NOT_AVAILABLE_CHAPTER_SECTION_CONTENT`)}</IonLabel>
    </IonItem>
  );
};
