import {
  IonItem,
  IonLabel,
  IonAlert,
  IonItemGroup,
  IonItemDivider,
} from '@ionic/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { resetUserState } from '../../data/user/user.slice';
import './index.css';

export const SettingsResetItem: React.FC = () => {
  const { t } = useTranslation();

  const [showAlertReset, setShowAlertReset] = useState(false);

  const dispatch = useDispatch();

  return (
    <IonItemGroup>
      <IonItemDivider />
      <IonItem
        button
        detail={false}
        lines="full"
        onClick={() => setShowAlertReset(true)}
      >
        <IonLabel color="danger">
          {t('SETTINGS.GENERAL.ITEMS.RESET.LABEL')}
        </IonLabel>
      </IonItem>
      <IonAlert
        isOpen={showAlertReset}
        onDidDismiss={() => setShowAlertReset(false)}
        header={t('SETTINGS.ALERT.RESET.HEADER')}
        message={t('SETTINGS.ALERT.RESET.MESSAGE')}
        buttons={[
          {
            text: t('SETTINGS.ALERT.RESET.BUTTON.CANCEL'),
            role: 'cancel',
          },
          {
            cssClass: 'alert-button-danger',
            text: t('SETTINGS.ALERT.RESET.BUTTON.OKAY'),
            handler: () => {
              dispatch(resetUserState());
            },
          },
        ]}
      />
    </IonItemGroup>
  );
};
