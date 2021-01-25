import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
} from '@ionic/react';
import './index.css';
import { useTranslation } from 'react-i18next';
import { SettingsResetItem } from './SettingsResetItem';
import { SettingsGeneralItems } from './SettingsGeneralItems';
import { SettingsLanguageItems } from './SettingsLanguageItems';
import { SettingsThemeItems } from './SettingsThemeItems';

export const SettingsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t('SETTINGS.TITLE')}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t('SETTINGS.TITLE')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <SettingsLanguageItems />
          <SettingsThemeItems />
          <SettingsGeneralItems />
          <SettingsResetItem />
        </IonList>
      </IonContent>
    </IonPage>
  );
};
