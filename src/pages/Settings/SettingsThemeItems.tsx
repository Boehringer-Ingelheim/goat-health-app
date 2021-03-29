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
import { selectCurrentThemeName } from '../../data/user/user.selector';
import { setCurrentTheme } from '../../data/user/user.slice';
import { THEMES } from '../../utils/hooks/useTheme';

export const SettingsThemeItems: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentThemeName = useSelector(selectCurrentThemeName);

  return (
    <IonRadioGroup
      value={currentThemeName}
      onIonChange={(event) => dispatch(setCurrentTheme(event.detail.value))}
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
