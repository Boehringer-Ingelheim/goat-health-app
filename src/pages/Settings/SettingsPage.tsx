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
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SettingsGeneralItems } from './SettingsGeneralItems';
import { SettingsLanguageItems } from './SettingsLanguageItems';
import { SettingsResetItem } from './SettingsResetItem';
import { SettingsThemeItems } from './SettingsThemeItems';

export const SettingsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t('SETTINGS.TITLE')}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent color="primary" fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle size="large">{t('SETTINGS.TITLE')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="app-background app-fullscreen">
          <IonList>
            <SettingsLanguageItems />
            <SettingsThemeItems />
            <SettingsGeneralItems />
            <SettingsResetItem />
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};
