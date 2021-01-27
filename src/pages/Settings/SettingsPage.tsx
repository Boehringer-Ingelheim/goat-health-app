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

      <IonContent color="primary-collapse-condense" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
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
