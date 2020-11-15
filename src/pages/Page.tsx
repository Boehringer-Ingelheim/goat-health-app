import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';
import HomeContainer from '../components/Home';
import './Page.css';

interface ContainerProps {
  selectedPage: string;
}
const Page: React.FC<RouteComponentProps<{ name: string }>> = ({ match }) => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t(`APP.NAME`)}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <HomeContainer name={match.params.name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
