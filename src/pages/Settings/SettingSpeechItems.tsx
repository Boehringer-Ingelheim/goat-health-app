import {
  IonItem,
  IonLabel,
  IonListHeader,
  IonText,
  IonRadioGroup,
  IonRadio,
} from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentSpeech } from '../../data/user/user.selector';
import { setCurrentSpeechName } from '../../data/user/user.slice';
import { SPEECH_LANGUAGES_SUPPORTED } from '../../data/speech/speech.constants';

export const SettingsSpeechItems: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentSpeech = useSelector(selectCurrentSpeech);
  return (
    <IonRadioGroup
      value={currentSpeech.name}
      onIonChange={(event) => {
        console.log(
          '🚀 ~ file: SettingSpeechItems.tsx ~ line 24 ~ event',
          event,
        );
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
          <IonItem key={speechIndex}>
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
