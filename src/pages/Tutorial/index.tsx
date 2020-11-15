import React, { useRef } from 'react';
import { connect } from 'react-redux';
import {
  IonButton,
  IonContent,
  IonSlides,
  IonSlide,
  IonImg,
  IonText,
} from '@ionic/react';
import './index.css';
import imgIntro001 from '../../images/intro-001.png';
import { setHasSeenTutorial } from '../../data/user/user.actions';

interface ContainerProps {
  setHasSeenTutorial: Function;
}

const Tutorial: React.FC<ContainerProps> = props => {
  const slidesRef = useRef<HTMLIonSlidesElement>(null);
  console.log('slidesRef', slidesRef);

  return (
    <>
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
          <IonButton onClick={() => props.setHasSeenTutorial(true)}>
            Get Started
          </IonButton>
        </div>
      </IonContent>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setHasSeenTutorial: (hasSeenTutorial: boolean) =>
      dispatch(setHasSeenTutorial(hasSeenTutorial)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tutorial);
