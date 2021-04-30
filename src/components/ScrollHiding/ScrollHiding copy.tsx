import {
  AnimationCallbackOptions,
  AnimationLifecycle,
  CreateAnimation,
  IonFooter,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { ScrollDetail } from '@ionic/core/dist/types/components/content/content-interface';
import React, { ReactNode, useEffect, useReducer, useState } from 'react';

type ProgressStart =
  | {
      forceLinearEasing: boolean;
      step?: number;
    }
  | undefined;

type ProgressStep =
  | {
      step: number;
    }
  | undefined;

type ProgressEnd =
  | {
      playTo: 0 | 1 | undefined;
      step: number;
      dur?: number | undefined;
    }
  | undefined;

type OnFinish =
  | {
      callback: AnimationLifecycle;
      opts?: AnimationCallbackOptions | undefined;
    }
  | undefined;

const MAX_TRANSLATE = 44;

let isStarted = false;
let progressStart: ProgressStart = undefined;
let progressStep: ProgressStep = undefined;
let progressEnd: ProgressEnd = undefined;

let scrollDetail: ScrollDetail | undefined = undefined;

let initialStep = 0;

let onFinish: OnFinish = undefined;

const getStep = (event: ScrollDetail | undefined) => {
  const delta = initialStep + (event?.deltaY || 0);
  return clamp(0, delta / MAX_TRANSLATE, 1);
};

const clamp = (min: number, n: number, max: number) => {
  return Math.max(min, Math.min(n, max));
};

export const onMove = (event: CustomEvent<ScrollDetail>) => {
  const { detail } = event;

  scrollDetail = detail;

  if (!isStarted) {
    progressStart = { forceLinearEasing: true };
    isStarted = true;
  }

  const step = getStep(detail);

  progressStep = { step };
};

export const onEnd = () => {
  if (!isStarted) {
    return;
  }

  const step = getStep(scrollDetail);
  const isScrollTop = scrollDetail?.scrollTop === 0;
  const shouldComplete = step > 0.5;

  progressEnd = { playTo: shouldComplete && !isScrollTop ? 1 : 0, step };
  onFinish = {
    callback: () => {
      progressStart = undefined;
      progressStep = undefined;
      progressEnd = undefined;
      return;
    },
    opts: { oneTimeCallback: true },
  };
  initialStep = shouldComplete ? MAX_TRANSLATE : 0;
  isStarted = false;
};

const useProgressStep = (progress: ProgressStep = undefined) => {
  const [progressStep, setProgressStep] = useState<ProgressStep>(undefined);

  useEffect(() => {
    setProgressStep(progress);
  }, [progress]);

  return progressStep;
};

export const useOnMove = (event: CustomEvent<ScrollDetail>) => {
  //   console.log('🚀 ~ file: ScrollHiding.tsx ~ line 114 ~ useOnMove ~ event');

  const { detail } = event;

  const step = getStep(detail);
  const tmp = useProgressStep({ step });
  console.log('🚀 ~ file: ScrollHiding.tsx ~ line 117 ~ useOnMove ~ tmp', tmp);
  //   useProgressStep({ step });
};

// function useFriendStatus(friendID) {
//   const [isOnline, setIsOnline] = useState(null);

//   function handleStatusChange(status) {
//     setIsOnline(status.isOnline);
//   }

//   useEffect(() => {
//     ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
//     return () => {
//       ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
//     };
//   });

//   return isOnline;
// }

type CProp = {
  children: ReactNode;
  test?: ProgressStep;
};

export const ScrollHiding: React.FC<CProp> = ({ test = progressStep }) => {
  console.log('🚀 ~ file: ScrollHiding.tsx ~ line 152 ~ state', test);

  return (
    <CreateAnimation
      duration={500}
      progressStart={progressStart}
      progressStep={progressStep}
      progressEnd={progressEnd}
      onFinish={onFinish}
      fromTo={{
        property: 'transform',
        fromValue: 'translateY(0)',
        toValue: `translateY(${MAX_TRANSLATE}px)`,
      }}
    >
      <>
        {progressStep}
        <IonFooter>
          <IonToolbar>
            <IonTitle>Footer</IonTitle>
          </IonToolbar>
        </IonFooter>
      </>
    </CreateAnimation>
  );
};

// export const useScrollHiding = () => {
//   const [state, setState] = useState(1);

//   const increment = () => {
//     setState((state) => state + 1);
//   };

//   const decrement = () => {
//     setState((state) => state + 1);
//   };

//   const Wrapper = () => {
//     return <div>{state}</div>;
//   };

//   return { increment, decrement, Wrapper };
// };
