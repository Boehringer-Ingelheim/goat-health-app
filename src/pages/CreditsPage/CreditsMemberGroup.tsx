import { IonItemDivider, IonLabel } from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CreditsMemberItem } from './CreditsMemberItem';

type ComponentProps = {
  members: Array<{ name: string; position: string }>;
  title?: string;
};

export const CreditsMemberGroup: React.FC<ComponentProps> = (props) => {
  const { members, title = '' } = props;

  const { t } = useTranslation();

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
            name={t(member.name)}
            position={t(member.position)}
          />
        );
      })}
    </>
  );
};
