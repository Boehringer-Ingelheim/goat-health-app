import { SPEECH_LANGUAGES_SUPPORTED } from './speech.constants';

export const selectLanguageFromSpeechName = (name: string) => {
  const language =
    SPEECH_LANGUAGES_SUPPORTED.find(
      (speechLanguage) => speechLanguage.name === name,
    )?.language || '';
  return language;
};
