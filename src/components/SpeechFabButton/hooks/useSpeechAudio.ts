import { useEffect } from 'react';
import { CS } from '../../Chapters';
import { useChapterSectionSsml } from '../../Chapters/hooks/useChapterSectionSsml';
import { useAudio } from '../../../utils/hooks/useAudio';
import { useSpeechSource } from './useSpeechSource';

export const useSpeechAudio = ({ chapterId, sectionId }: CS) => {
  const { filesystem, speak } = useChapterSectionSsml({ chapterId, sectionId });

  const { isLoading, load, source } = useSpeechSource(speak, filesystem.path);
  const { isPlaying, pause, play, restTime } = useAudio(source);

  useEffect(() => {
    pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speak]);

  const playAudio = async () => {
    if (!source) {
      await load();
    }
    play();
  };

  return { isLoading, isPlaying, play: playAudio, pause, restTime };
};
