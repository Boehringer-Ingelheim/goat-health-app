import { IonLabel, IonList, IonListHeader } from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  CREDITS_TEAM_MENTOR,
  CREDITS_TEAM_MMH,
  CREDITS_TEAM_PROJECT,
} from './utils';
import { CreditsMemberGroup } from './CreditsMemberGroup';

export const CreditsList: React.FC = () => {
  const { t } = useTranslation('app');

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>{t('CREDITS.TEAM.PROJECT')}</IonLabel>
      </IonListHeader>
      {CREDITS_TEAM_PROJECT.map(({ members, title }, teamIndex) => {
        return (
          <CreditsMemberGroup
            key={teamIndex}
            members={members}
            title={title}
          ></CreditsMemberGroup>
        );
      })}
      <IonListHeader>
        <IonLabel>{t('CREDITS.TEAM.MENTOR')}</IonLabel>
      </IonListHeader>
      {CREDITS_TEAM_MENTOR.map(({ members, title }, teamIndex) => {
        return (
          <CreditsMemberGroup
            key={teamIndex}
            members={members}
            title={title}
          ></CreditsMemberGroup>
        );
      })}
      <IonListHeader>
        <IonLabel>{t('CREDITS.TEAM.MMH')}</IonLabel>
      </IonListHeader>
      {CREDITS_TEAM_MMH.map(({ members, title }, teamIndex) => {
        return (
          <CreditsMemberGroup
            key={teamIndex}
            members={members}
            title={title}
          ></CreditsMemberGroup>
        );
      })}
    </IonList>
  );
};
