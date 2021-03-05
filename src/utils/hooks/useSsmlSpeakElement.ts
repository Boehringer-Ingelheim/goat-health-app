import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentSpeech } from '../../data/user/user.selector';

export const useSsmlSpeakElement = (content: string = '') => {
  const currentSpeech = useSelector(selectCurrentSpeech);
  const { language, name } = currentSpeech;

  const speakElement = useMemo(() => {
    return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="enasd-${language}">
      <voice name="${name}">
      ${content}
      </voice>
    </speak>`;
  }, [content, language, name]);

  return speakElement;
};
