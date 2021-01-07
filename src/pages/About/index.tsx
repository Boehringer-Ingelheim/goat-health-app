import {
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { globe, logoFacebook, logoLinkedin, mail } from 'ionicons/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t('ABOUT.TITLE')}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{t('ABOUT.TITLE')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid class="ion-padding ion-text-justify">
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeSm="6">
              <IonImg src={t('ABOUT.IMAGE.01.FILENAME')} />
              <p>{t('ABOUT.TEXT.PARAGRAPH.01')}</p>
              <p>{t('ABOUT.TEXT.PARAGRAPH.02')}</p>
              <p>{t('ABOUT.TEXT.PARAGRAPH.03')}</p>
              <IonItem
                lines="none"
                href="https://makingmorehealth.org"
                target="_blank"
              >
                <IonIcon icon={globe} slot="start" />
                <IonLabel>makingmorehealth.org</IonLabel>
              </IonItem>
              <IonItem
                lines="none"
                href="mailto:info@makingmorehealth.com"
                target="_blank"
              >
                <IonIcon icon={mail} slot="start" />
                <IonLabel>info@makingmorehealth.org</IonLabel>
              </IonItem>
              <IonItem
                lines="none"
                href="https://www.facebook.com/makingmorehealth"
                target="_blank"
              >
                <IonIcon icon={logoFacebook} slot="start" />
                <IonLabel>@makingmorehealth</IonLabel>
              </IonItem>
              <IonItem
                lines="none"
                href="https://www.linkedin.com/company/making-more-health1/"
                target="_blank"
              >
                <IonIcon icon={logoLinkedin} slot="start" />
                <IonLabel>Making More Health</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
