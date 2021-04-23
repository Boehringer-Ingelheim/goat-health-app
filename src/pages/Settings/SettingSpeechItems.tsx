import {
  IonItem,
  IonLabel,
  IonListHeader,
  IonText,
  IonRadioGroup,
  IonRadio,
} from '@ionic/react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentSpeech } from '../../data/user/user.selector';
import { setCurrentSpeechName } from '../../data/user/user.slice';
import {
  SPEECH_LANGUAGES_SUPPORTED,
  SPEECH_LANGUAGE_DEFAULT,
} from '../../data/speech/speech.constants';

export const SettingsSpeechItems: React.FC = () => {
  const { i18n, t } = useTranslation('app');
  const dispatch = useDispatch();
  const { language, name } = useSelector(selectCurrentSpeech);

  useEffect(() => {
    if (!language.startsWith(i18n.language)) {
      const speechName =
        SPEECH_LANGUAGES_SUPPORTED.find((speechLanguge) =>
          speechLanguge.language.startsWith(i18n.language),
        )?.name || SPEECH_LANGUAGE_DEFAULT.name;
      dispatch(setCurrentSpeechName({ currentSpeechName: speechName }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return (
    <IonRadioGroup
      value={name}
      onIonChange={(event) => {
        dispatch(
          setCurrentSpeechName({ currentSpeechName: event.detail.value }),
        );
      }}
    >
      <IonListHeader>
        <IonLabel>{t('SETTINGS.SPEECH.HEADER.TITLE')}</IonLabel>
      </IonListHeader>
      {SPEECH_LANGUAGES_SUPPORTED.map((speech, speechIndex) => {
        return (
          <IonItem
            disabled={!speech.language.startsWith(i18n.language)}
            key={speechIndex}
          >
            <IonLabel>
              <IonText>{speech.displayName}</IonText>
            </IonLabel>
            <IonRadio value={speech.name} />
          </IonItem>
        );
      })}
    </IonRadioGroup>
  );
};
