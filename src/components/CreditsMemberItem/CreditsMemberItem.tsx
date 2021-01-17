import { IonItem, IonLabel, IonText } from '@ionic/react';
import React from 'react';

type ComponentProps = {
  name: string;
  position: string;
};

export const CreditsMemberItem: React.FC<ComponentProps> = (props) => {
  const { name, position } = props;

  return (
    <IonItem>
      <IonLabel>
        <IonText>
          {name}
          <p>{position}</p>
        </IonText>
      </IonLabel>
    </IonItem>
  );
};
