import { IonLabel, IonListHeader } from '@ionic/react';
import { FC } from 'react';

export const MenuListHeader: FC = ({ children }) => {
  return (
    <IonListHeader>
      <IonLabel>{children}</IonLabel>
    </IonListHeader>
  );
};
