import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SPEECH_DIRECTORY_PATH } from '../../../data/speech/speech.constants';
import { selectCurrentSpeech } from '../../../data/user/user.selector';
import { useMd5 } from '../../../utils/hooks/useMd5';
import { useSsmlSpeakElement } from '../../../utils/hooks/useSsmlSpeakElement';
import { innerSsml } from '../../../utils/ssml';
import { ChapterId } from '../index';
import { useChapterSectionContext } from './useChapterSectionContext';

export const useChapterSectionSsml = (
  chapterId: ChapterId,
  sectionId: string,
) => {
  const { t } = useTranslation();
  const { Content } = useChapterSectionContext(chapterId, sectionId, 'ssml');

  const ssml = innerSsml(
    <>
      {t(`CHAPTER.${chapterId}.${sectionId}.TITLE`, { context: 'ssml' })}
      {Content()}
    </>,
  );
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
