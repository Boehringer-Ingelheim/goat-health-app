import {
  IonItem,
  IonLabel,
  IonListHeader,
  IonRadioGroup,
  IonRadio,
} from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTheme } from '../../data/user/user.selector';
import { setCurrentTheme } from '../../data/user/user.slice';
import { THEMES } from '../../utils/theme';

export const SettingsThemeItems: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const currentTheme = useSelector(selectCurrentTheme);

  return (
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
  );
};
