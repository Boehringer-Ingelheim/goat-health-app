import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  IonNote,
  IonRadioGroup,
  IonRadio,
} from '@ionic/react';
import './index.css';
import { useTranslation } from 'react-i18next';
import { version } from '../../../package.json';
import { I18N_LANGUAGES_SUPPORTED } from '../../i18n';
import { THEMES } from '../../utils/theme';
import { selectCurrentTheme } from '../../data/user/user.selector';
import { setCurrentTheme } from '../../data/user/user.slice';
import { SettingsResetItem } from './SettingsResetItem';

export const SettingsPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const currentTheme = useSelector(selectCurrentTheme);

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
          <IonRadioGroup
            value={currentTheme}
            onIonChange={(event) =>
              dispatch(setCurrentTheme({ currentTheme: event.detail.value }))
            }
          >
            <IonListHeader>
              <IonLabel>{t('SETTINGS.THEME.HEADER.TITLE')}</IonLabel>
            </IonListHeader>
            {Object.values(THEMES).map((theme) => {
              return (
                <IonItem key={theme.name}>
                  <IonLabel>{t(theme.i18n)}</IonLabel>
                  <IonRadio value={theme.name} />
                </IonItem>
              );
            })}
          </IonRadioGroup>

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
          <SettingsResetItem />
        </IonList>
      </IonContent>
    </IonPage>
  );
};
