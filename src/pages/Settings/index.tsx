import React, { useState } from 'react';
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
  IonCheckbox,
  IonListHeader,
  IonText,
  IonNote,
  IonIcon,
  IonItemGroup,
  IonItemDivider,
  IonAlert,
} from '@ionic/react';
import './index.css';
import { useTranslation } from 'react-i18next';
import { version } from '../../../package.json';
import { I18N_LANGUAGES_SUPPORTED } from '../../i18n';
import { colorPaletteOutline, languageOutline } from 'ionicons/icons';
import { THEMES } from '../../utils/theme';
import { selectCurrentTheme } from '../../data/user/user.selector';
import { resetUserState, setCurrentTheme } from '../../data/user/user.slice';

export const SettingsPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [showAlertReset, setShowAlertReset] = useState(false);

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
        <IonItemGroup>
          <IonItem lines="none" color="primary">
            <IonIcon icon={languageOutline} slot="start"></IonIcon>
            <IonLabel>
              <IonText>
                <h2>{t('SETTINGS.LANGUAGE.HEADER.TITLE')}</h2>
              </IonText>
            </IonLabel>
          </IonItem>
          {I18N_LANGUAGES_SUPPORTED.map((language, i) => {
            return (
              <IonItem
                className="ion-text-wrap"
                key={i}
                onClick={() => {
                  return i18n.changeLanguage(language.cultureLang);
                }}
              >
                <IonLabel>
                  <IonText>{language.nativeName}</IonText>
                  <p>{language.name}</p>
                </IonLabel>
                <IonCheckbox
                  checked={language.cultureLang === i18n.language}
                ></IonCheckbox>
              </IonItem>
            );
          })}
        </IonItemGroup>
        <IonItemDivider />
        <IonItemGroup>
          <IonItem lines="none" color="primary">
            <IonIcon icon={colorPaletteOutline} slot="start"></IonIcon>
            <IonLabel>
              <IonText>
                <h2>{t('SETTINGS.THEME.HEADER.TITLE')}</h2>
              </IonText>
            </IonLabel>
          </IonItem>
          {Object.values(THEMES).map((theme) => {
            return (
              <IonItem
                className="ion-text-wrap"
                key={theme.name}
                onClick={() =>
                  dispatch(setCurrentTheme({ currentTheme: theme.name }))
                }
              >
                <IonLabel>{t(theme.i18n)}</IonLabel>
                <IonCheckbox
                  checked={theme.name === currentTheme}
                ></IonCheckbox>
              </IonItem>
            );
          })}
        </IonItemGroup>
        <IonList>
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
          <IonItem
            button
            detail={false}
            onClick={() => setShowAlertReset(true)}
          >
            <IonLabel color="danger">
              {t('SETTINGS.GENERAL.ITEMS.RESET.LABEL')}
            </IonLabel>
          </IonItem>
        </IonList>
        <IonAlert
          isOpen={showAlertReset}
          onDidDismiss={() => setShowAlertReset(false)}
          header={t('SETTINGS.GENERAL.ITEMS.RESET.ALERT.HEADER')}
          message={t('SETTINGS.GENERAL.ITEMS.RESET.ALERT.MESSAGE')}
          buttons={[
            {
              text: t('SETTINGS.GENERAL.ITEMS.RESET.ALERT.BUTTON.CANCEL'),
              role: 'cancel',
            },
            {
              cssClass: 'alert-button-danger',
              text: t('SETTINGS.GENERAL.ITEMS.RESET.ALERT.BUTTON.RESET'),
              handler: () => {
                dispatch(resetUserState());
              },
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};
