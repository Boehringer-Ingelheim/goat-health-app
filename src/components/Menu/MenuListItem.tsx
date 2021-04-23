import { IonIcon, IonItem, IonLabel, IonMenuToggle } from '@ionic/react';
import { FC } from 'react';
import { useHistory } from 'react-router';
import './index.css';

type ContainerProps = {
  color?: string | undefined;
  icon: string;
  link: string;
};

export const MenuListItem: FC<ContainerProps> = ({
  children,
  color,
  icon = '',
  link = '',
}) => {
  const history = useHistory();

  return (
    <IonMenuToggle autoHide={false}>
      <IonItem
        routerLink={link}
        routerDirection="none"
        lines="none"
        detail={false}
        onClick={() => history.push(link)}
      >
        <IonIcon color={color} icon={icon} slot="start" />
        <IonLabel>{children}</IonLabel>
      </IonItem>
    </IonMenuToggle>
  );
};
