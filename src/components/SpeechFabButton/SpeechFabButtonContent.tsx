import { IonIcon, IonSpinner } from '@ionic/react';
import { pause, play } from 'ionicons/icons';
import React from 'react';
import './styles.css';

type Props = {
  isLoading?: boolean;
  isPlaying?: boolean;
};

export const SpeechFabButtonContent: React.FC<Props> = ({
  isLoading = false,
  isPlaying = false,
  children,
}) => {
  return (
    <>
      {isLoading ? (
        <IonSpinner />
      ) : isPlaying ? (
        <>
          <IonIcon
            className={children ? 'audio-fab-button-show-time' : ''}
            icon={pause}
          />
          {children}
        </>
      ) : (
        <IonIcon icon={play} />
      )}
    </>
  );
};
