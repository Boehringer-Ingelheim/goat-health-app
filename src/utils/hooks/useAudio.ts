import { useEffect, useState } from 'react';

export const useAudio = (url) => {
  const [audio] = useState(new Audio(url));

  useEffect(() => {
    if (url) {
      audio.src = url;
    }
  }, [audio, url]);

  const [, _forceUpdate] = useState(false);
  const forceUpdate = () => _forceUpdate((prevState) => !prevState);

  useEffect(() => {
    audio.addEventListener('play', forceUpdate);
    audio.addEventListener('pause', forceUpdate);
    audio.addEventListener('ended', forceUpdate);
    audio.addEventListener('timeupdate', forceUpdate);

    return () => {
      audio.removeEventListener('play', forceUpdate);
      audio.removeEventListener('pause', forceUpdate);
      audio.removeEventListener('ended', forceUpdate);
      audio.addEventListener('timeupdate', forceUpdate);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const play = () => audio.play();
  const pause = () => audio.pause();

  const restTime = audio.duration - audio.currentTime || 0;

  return {
    isPlaying: !audio.paused,
    currentTime: audio.currentTime,
    duration: audio.duration,
    play,
    pause,
    restTime,
  };
};
