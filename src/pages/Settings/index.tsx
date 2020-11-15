import React from 'react';

import { connect } from 'react-redux';
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
} from '@ionic/react';
import './index.css';
import { resetApp } from '../../data/global/global.actions';
import { useTranslation } from 'react-i18next';
import { I18N_LANGUAGES_SUPPORTED } from '../../i18n';
import { colorPaletteOutline, languageOutline } from 'ionicons/icons';
import { setTheme } from '../../data/user/user.actions';
import { THEMES, Theme } from '../../utils/theme';

interface ContainerProps {
  setTheme: Function;
  selectedTheme: Theme;
  resetApp: Function;
}

const Page: React.FC<ContainerProps> = (props) => {
  const { setTheme, selectedTheme, resetApp } = props;
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
                onClick={() => {
                  return setTheme(theme);
                }}
              >
                <IonLabel>{t(theme.i18n)}</IonLabel>
                <IonCheckbox
                  checked={theme.name === selectedTheme.name}
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
            <IonNote slot="end">0.0.1</IonNote>
          </IonItem>
          <IonItem className="ion-text-wrap">
            <IonLabel>{t('SETTINGS.GENERAL.ITEMS.COPYRIGHT.LABEL')}</IonLabel>
            <IonNote slot="end">Simon Golms</IonNote>
          </IonItem>
          <IonItem button onClick={() => resetApp()}>
            <IonLabel color="danger">
              {t('SETTINGS.GENERAL.ITEMS.RESET.LABEL')}
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  return {
    selectedTheme: state.user.selectedTheme,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTheme: (theme: string) => {
      dispatch(setTheme(theme));
    },
    resetApp: () => {
      dispatch(resetApp());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page);
