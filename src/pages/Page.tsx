import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { HomeContainer } from '../components/Home';
import './Page.css';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t(`APP.NAME`)}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="primary" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle size="large">{t('APP.NAME')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="app-background app-fullscreen">
          <HomeContainer />
        </div>
      </IonContent>
    </IonPage>
  );
};
