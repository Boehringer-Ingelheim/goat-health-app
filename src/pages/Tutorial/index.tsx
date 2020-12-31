import {
  IonButton,
  IonContent,
  IonSlides,
  IonSlide,
  IonImg,
  IonText,
} from '@ionic/react';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setHasSeenTutorial } from '../../data/user/user.slice';
import imgIntro001 from '../../images/intro-001.png';
import './index.css';

export const Tutorial: React.FC = () => {
  const dispatch = useDispatch();
  const slidesRef = useRef<HTMLIonSlidesElement>(null);

  return (
    <IonContent fullscreen>
      <IonSlides pager={true} ref={slidesRef}>
        <IonSlide>
          <IonImg src={imgIntro001}></IonImg>
          <IonText color="primary">
            <h1>Ionic React Boilerplate</h1>
          </IonText>
          <p>
            A highly scalable, offline-first foundation with the best DX and a
            focus on performance and best practices
          </p>
        </IonSlide>
        <IonSlide>
          <h1>Slide 2</h1>
        </IonSlide>
        <IonSlide>
          <h1>Slide 3</h1>
        </IonSlide>
      </IonSlides>
      <div className="start-button">
        <IonButton
          onClick={() =>
            dispatch(setHasSeenTutorial({ hasSeenTutorial: true }))
          }
        >
          Get Started
        </IonButton>
      </div>
    </IonContent>
  );
};
