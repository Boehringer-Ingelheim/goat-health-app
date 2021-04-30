import { IonFab, IonFabButton } from '@ionic/react';
import { FC, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { formatSecondsToTimeMinutes } from './utils';
import { CS } from '../Chapters';
import { useSpeechAudio } from './hooks/useSpeechAudio';
import { SpeechFabButtonContent } from './SpeechFabButtonContent';
interface RouteChapterProps {
  chapterId: string;
  sectionId: string;
}

export const SpeechFabButton: FC = () => {
  const location = useLocation();
  const { chapterId, sectionId } = useParams<RouteChapterProps>() as CS;
  const { isLoading, isPlaying, pause, play, restTime } = useSpeechAudio({
    chapterId,
    sectionId,
  });

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
