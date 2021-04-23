import { IonItem, IonLabel, IonText } from '@ionic/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CreditMember } from './utils';

export const CreditsMemberItem: FC<CreditMember> = ({ name, position }) => {
  const { t } = useTranslation('app');

  return (
    <IonItem>
      <IonLabel>
        <IonText>
          {t(name)}
          <p>{t(position)}</p>
        </IonText>
      </IonLabel>
    </IonItem>
  );
};
