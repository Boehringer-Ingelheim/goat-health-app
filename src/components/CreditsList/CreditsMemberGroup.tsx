import { IonItemDivider, IonLabel } from '@ionic/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CreditsMemberItem } from './CreditsMemberItem';
import { CreditTeam } from './utils';

export const CreditsMemberGroup: FC<CreditTeam> = ({ members, title }) => {
  const { t } = useTranslation('app');

  return (
    <>
      {title.length > 0 && (
        <IonItemDivider class="ion-padding-top">
          <IonLabel>{t(title)}</IonLabel>
        </IonItemDivider>
      )}
      {members.map((member, memberIndex) => {
        return (
          <CreditsMemberItem
            key={memberIndex}
            name={member.name}
            position={member.position}
          />
        );
      })}
    </>
  );
};
