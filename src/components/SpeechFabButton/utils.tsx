import {
  AudioConfig,
  AudioOutputStream,
  SpeechConfig,
  SpeechSynthesizer,
} from 'microsoft-cognitiveservices-speech-sdk';
import { writeAudioBufferToCache } from '../../utils/filesystem';

export const formatSecondsToTimeMinutes = (seconds: number) => {
  const minutes = (seconds % 3600) / 60;
  return [minutes, seconds % 60]
    .map((value) => `0${Math.floor(value)}`.slice(-2))
    .join(':');
};

const getAudioConfig = () => {
  const stream = AudioOutputStream.createPullStream();
  const audioConfig = AudioConfig.fromStreamOutput(stream);
  return audioConfig;
};

const getSpeechConfig = () => {
  const speechConfig = SpeechConfig.fromSubscription(
    process.env.REACT_APP_AZURE_COGNITIVE_TTS_SUBSCRIPTION_KEY || '',
    process.env.REACT_APP_AZURE_COGNITIVE_TTS_SERVICE_REGION || '',
  );
  return speechConfig;
};

export const synthesizeSpeechToFile = async (ssml: string, path: string) => {
  const audioConfig = getAudioConfig();
  const speechConfig = getSpeechConfig();
  const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);

  return new Promise<ArrayBuffer>((resolve, reject) =>
    synthesizer.speakSsmlAsync(
      ssml,
      async (result) => {
        synthesizer.close();
        const { audioData, errorDetails } = result;
        if (!audioData) {
          reject(errorDetails);
        }
        await writeAudioBufferToCache(path, audioData, 'audio/wav');
        resolve(audioData);
      },
      (error) => {
        synthesizer.close();
        reject(error);
      },
    ),
  );
};
