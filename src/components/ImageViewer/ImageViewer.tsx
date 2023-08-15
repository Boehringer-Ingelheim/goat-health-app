import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonToolbar } from "@ionic/react";
import "swiper/css";
import "@ionic/react/css/ionic-swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { close } from "ionicons/icons";
import React, { cloneElement, ReactElement, SyntheticEvent, useState } from "react";
import "./imageViewer.css";

type ContainerProps = {
  alt: string;
  class?: string;
  children?: ReactElement;
  className?: string;
  onError?: ((event: SyntheticEvent<HTMLImageElement, Event>) => void) | undefined;
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
      <IonModal cssClass="image-viewer" isOpen={isOpen} onDidDismiss={() => setIsOpen(false)} canDismiss={true}>
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
          <Swiper {...slideOpts}>
            <SwiperSlide>
              <img alt={alt} onError={onError} src={src} />
            </SwiperSlide>
          </Swiper>
        </IonContent>
      </IonModal>
      {cloneElement(children as ReactElement, {
        onClick: () => setIsOpen(true),
      })}
    </>
  );
};
