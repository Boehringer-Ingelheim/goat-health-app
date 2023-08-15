import { IonButton, IonContent, IonImg, IonText } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { useDispatch } from "react-redux";
import { setHasSeenTutorial } from "../../data/user/user.slice";
import imgIntro001 from "../../images/intro-001.png";

import "./index.css";
import "swiper/css/bundle";
import "@ionic/react/css/ionic-swiper.css";
import "swiper/css/pagination";

export const TutorialPage: React.FC = () => {
  const dispatch = useDispatch();
  // const slidesRef = useRef<HTMLIonSlidesElement>(null);

  return (
    <IonContent fullscreen>
      <Swiper>
        <SwiperSlide>
          <IonImg src={imgIntro001}></IonImg>
          <IonText color="primary">
            <h1>Ionic React Boilerplate</h1>
          </IonText>
          <p>
            A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Slide 2</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Slide 3</h1>
        </SwiperSlide>
      </Swiper>
      <div className="start-button">
        <IonButton onClick={() => dispatch(setHasSeenTutorial({ hasSeenTutorial: true }))}>Get Started</IonButton>
      </div>
    </IonContent>
  );
};
