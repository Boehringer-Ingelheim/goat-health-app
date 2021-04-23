import {
  IonItem,
  IonLabel,
  IonListHeader,
  IonNote,
  IonItemGroup,
} from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { version } from '../../../package.json';

export const SettingsGeneralItems: React.FC = () => {
  const { t } = useTranslation('app');

  return (
    <IonItemGroup>
      <IonListHeader lines="none">
        <IonLabel>{t('SETTINGS.GENERAL.HEADER.TITLE')}</IonLabel>
      </IonListHeader>
      <IonItem>
        <IonLabel>{t('SETTINGS.GENERAL.ITEMS.VERSION.LABEL')}</IonLabel>
        <IonNote slot="end">{version}</IonNote>
      </IonItem>
      <IonItem className="ion-text-wrap">
        <IonLabel>{t('SETTINGS.GENERAL.ITEMS.COPYRIGHT.LABEL')}</IonLabel>
        <IonNote slot="end">Simon Golms</IonNote>
      </IonItem>
      <IonItem routerLink={'/credits'}>
        <IonLabel>{t('SETTINGS.GENERAL.ITEMS.CREDITS.LABEL')}</IonLabel>
      </IonItem>
    </IonItemGroup>
  );
};
