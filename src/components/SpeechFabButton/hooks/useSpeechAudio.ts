import { useEffect } from 'react';
import { ChapterId } from '../../../utils/chapters';
import { useChapterSectionSsml } from '../../../utils/hooks/useChapterSectionSsml';
import { useAudio } from '../../../utils/hooks/useAudio';
import { useSpeechSource } from './useSpeechSource';

export const useSpeechAudio = (chapterId: ChapterId, sectionId: string) => {
  const { filesystem, speak } = useChapterSectionSsml(chapterId, sectionId);

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
