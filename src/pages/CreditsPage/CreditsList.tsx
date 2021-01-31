import { IonLabel, IonList, IonListHeader } from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  CREDITS_TEAM_MENTOR,
  CREDITS_TEAM_MMH,
  CREDITS_TEAM_PROJECT,
} from '../../data/credits/credits';
import { CreditsMemberGroup } from './CreditsMemberGroup';

export const CreditsList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>{t('CREDITS.TEAM.PROJECT')}</IonLabel>
      </IonListHeader>
      {CREDITS_TEAM_PROJECT.map((team, teamIndex) => {
        const { members, title } = team;
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
      {CREDITS_TEAM_MENTOR.map((team, teamIndex) => {
        const { members } = team;
        return (
          <CreditsMemberGroup
            key={teamIndex}
            members={members}
          ></CreditsMemberGroup>
        );
      })}
      <IonListHeader>
        <IonLabel>{t('CREDITS.TEAM.MMH')}</IonLabel>
      </IonListHeader>
      {CREDITS_TEAM_MMH.map((team, teamIndex) => {
        const { members } = team;
        return (
          <CreditsMemberGroup
            key={teamIndex}
            members={members}
          ></CreditsMemberGroup>
        );
      })}
    </IonList>
  );
};
