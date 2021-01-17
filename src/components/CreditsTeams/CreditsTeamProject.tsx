import { IonItemDivider, IonLabel, IonList, IonListHeader } from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CREDITS_TEAM_PROJECT } from '../../data/credits/credits';
import { CreditsMemberItem } from '../CreditsMemberItem';

export const CreditsTeamProject: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>{t('CREDITS.TEAM.PROJECT')}</IonLabel>
      </IonListHeader>
      {CREDITS_TEAM_PROJECT.map((team, teamIndex) => {
        return (
          <React.Fragment key={teamIndex}>
            <IonItemDivider class="ion-padding-top">
              <IonLabel>{t(team.title)}</IonLabel>
            </IonItemDivider>
            {team.members.map((member, memberIndex) => {
              return (
                <CreditsMemberItem
                  key={memberIndex}
                  name={t(member.name)}
                  position={t(member.position)}
                />
              );
            })}
          </React.Fragment>
        );
      })}
    </IonList>
  );
};
