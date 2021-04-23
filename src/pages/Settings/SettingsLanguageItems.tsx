import {
  IonItem,
  IonLabel,
  IonListHeader,
  IonText,
  IonRadioGroup,
  IonRadio,
} from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { I18N_LANGUAGES_SUPPORTED } from '../../i18n';

export const SettingsLanguageItems: React.FC = () => {
  const { t, i18n } = useTranslation('app');

  return (
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
  );
};
