import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SPEECH_DIRECTORY_PATH } from '../../../data/speech/speech.constants';
import { selectCurrentSpeech } from '../../../data/user/user.selector';
import { useMd5 } from '../../../utils/hooks/useMd5';
import { innerSsml } from '../../../utils/ssml';
import { CS } from '../index';
import { useChapterSectionComponent } from './useChapterSectionComponent';
import { useSsmlSpeakElement } from './useSsmlSpeakElement';

export const useChapterSectionSsml = ({ chapterId, sectionId }: CS) => {
  const { t } = useTranslation(`chapter${chapterId}` as const);
  const Component = useChapterSectionComponent({ chapterId, sectionId });

  const ssml = innerSsml([
    t(`${sectionId}.TITLE` as const, { context: 'ssml' }),
    Component({ context: 'ssml' }),
  ]);

  const speak = useSsmlSpeakElement(ssml);
  const speakHash = useMd5(speak);
  const { name } = useSelector(selectCurrentSpeech);
  const speechName = name.replaceAll('-', '');
  const filenamePrefix = `${chapterId}-${sectionId}-${speechName}`;
  const filename = `${filenamePrefix}-${speakHash}`;

  return {
    filesystem: {
      directory: SPEECH_DIRECTORY_PATH,
      filename,
      filenamePrefix,
      path: `${SPEECH_DIRECTORY_PATH}/${filename}`,
    },
    ssml,
    speak,
  };
};
