import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonSlide,
  IonSlides,
  IonToolbar,
} from '@ionic/react';
import { close } from 'ionicons/icons';
import React, {
  cloneElement,
  ReactElement,
  SyntheticEvent,
  useState,
} from 'react';
import './imageViewer.css';

type ContainerProps = {
  alt: string;
  class?: string;
  children?: ReactElement;
  className?: string;
  onError?:
    | ((event: SyntheticEvent<HTMLImageElement, Event>) => void)
    | undefined;
  src: string;
  open?: boolean;
};

export const ImageViewer: React.FC<ContainerProps> = (props) => {
  const { alt, children, onError = () => {}, open = false, src } = props;

  const [isOpen, setIsOpen] = useState(open);

  const slideOpts = {
    passiveListeners: false,
    zoom: {
      maxRatio: 5,
    },
  };

  return (
    <>
      <IonModal
        cssClass="image-viewer"
        isOpen={isOpen}
        onDidDismiss={() => setIsOpen(false)}
        swipeToClose
      >
        <IonHeader translucent>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>
                <IonIcon icon={close}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonSlides
            options={slideOpts}
            // Current workaround for strangely behavior of slides
            // see: https://github.com/ionic-team/ionic-framework/issues/19638#issuecomment-593412711
            onIonSlidesDidLoad={function (this: any) {
              this.update();
            }}
          >
            <IonSlide>
              <img alt={alt} onError={onError} src={src} />
            </IonSlide>
          </IonSlides>
        </IonContent>
      </IonModal>
      {cloneElement(children as ReactElement, {
        onClick: () => setIsOpen(true),
      })}
    </>
  );
};
