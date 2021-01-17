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
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CreditsList } from '../../components/Credits';

export const CreditsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t('CREDITS.TITLE')}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t('CREDITS.TITLE')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem class="ion-padding" lines="none">
          <IonImg
            class="ion-padding"
            className="drop-shadow margin-auto width-15rem"
            src={t('CREDITS.IMAGE.01.FILENAME')}
          />
        </IonItem>
        <CreditsList></CreditsList>
      </IonContent>
    </IonPage>
  );
};
