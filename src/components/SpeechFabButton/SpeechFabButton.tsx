import { IonFab, IonFabButton } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import { ChapterId } from '../Chapters';
import { formatSecondsToTimeMinutes } from '../../utils/format';
import { useSpeechAudio } from './hooks/useSpeechAudio';
import { SpeechFabButtonContent } from './SpeechFabButtonContent';

interface RouteChapterProps {
  chapterId: ChapterId;
  sectionId: string;
}

export const SpeechFabButton = () => {
  const { chapterId, sectionId } = useParams<RouteChapterProps>();
  const { isLoading, isPlaying, pause, play, restTime } = useSpeechAudio(
    chapterId,
    sectionId,
  );

  return (
    <IonFab vertical="top" horizontal="end" edge slot="fixed">
      <IonFabButton
        color="secondary"
        onClick={() => (isPlaying ? pause() : play())}
      >
        <SpeechFabButtonContent isLoading={isLoading} isPlaying={isPlaying}>
          {formatSecondsToTimeMinutes(restTime)}
        </SpeechFabButtonContent>
      </IonFabButton>
    </IonFab>
  );
};
