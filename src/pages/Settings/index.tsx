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
  IonItem,
  IonLabel,
  IonListHeader,
  IonText,
  IonRadioGroup,
  IonRadio,
} from '@ionic/react';
import './index.css';
import { useTranslation } from 'react-i18next';
import { I18N_LANGUAGES_SUPPORTED } from '../../i18n';
import { SettingsResetItem } from './SettingsResetItem';
import { SettingsGeneralItems } from './SettingsGeneralItems';
import { SettingsThemeItems } from './SettingsThemeItems';

export const SettingsPage: React.FC = () => {
  const { t, i18n } = useTranslation();

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
          <IonRadioGroup
            value={i18n.language}
            onIonChange={(event) => i18n.changeLanguage(event.detail.value)}
          >
            <IonListHeader>
              <IonLabel>{t('SETTINGS.LANGUAGE.HEADER.TITLE')}</IonLabel>
            </IonListHeader>
            {I18N_LANGUAGES_SUPPORTED.map((language, languageIndex) => {
              return (
                <IonItem key={languageIndex}>
                  <IonLabel>
                    <IonText>{language.nativeName}</IonText>
                    <p>{language.name}</p>
                  </IonLabel>
                  <IonRadio value={language.cultureLang} />
                </IonItem>
              );
            })}
          </IonRadioGroup>
          <SettingsThemeItems />
          <SettingsGeneralItems />
          <SettingsResetItem />
        </IonList>
      </IonContent>
    </IonPage>
  );
};
