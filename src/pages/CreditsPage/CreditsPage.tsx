import {
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CreditsList } from '../../components/CreditsList/CreditsList';

export const CreditsPage: FC = () => {
  const { t } = useTranslation('app');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t('CREDITS.TITLE')}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent color="primary-collapse-condense" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle size="large">{t('CREDITS.TITLE')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="app-background app-fullscreen">
          <IonItem class="ion-padding" lines="none">
            <IonImg
              class="ion-padding"
              className="drop-shadow margin-auto width-15rem"
              src={t('CREDITS.IMAGE.01.FILENAME')}
            />
          </IonItem>
          <CreditsList></CreditsList>
        </div>
      </IonContent>
    </IonPage>
  );
};
