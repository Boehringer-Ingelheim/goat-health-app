import { IonFab, IonFabButton } from '@ionic/react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { ChapterId } from '../Chapters';
import { formatSecondsToTimeMinutes } from '../../utils/format';
import { useSpeechAudio } from './hooks/useSpeechAudio';
import { SpeechFabButtonContent } from './SpeechFabButtonContent';

interface RouteChapterProps {
  chapterId: ChapterId;
  sectionId: string;
}

export const SpeechFabButton = () => {
  const location = useLocation();
  const { chapterId, sectionId } = useParams<RouteChapterProps>();
  const { isLoading, isPlaying, pause, play, restTime } = useSpeechAudio(
    chapterId,
    sectionId,
  );

  // NOTE: pause audio when navigating to another page
  useEffect(() => {
    return () => {
      pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

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
