import { useEffect, useState } from 'react';
import {
  existsFileInCache,
  readFileFromCache,
} from '../../../utils/filesystem';
import { synthesizeSpeechToFile } from '../utils';

export const useSpeechSource = (ssml: string, path: string) => {
  const [source, setSource] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSource('');
  }, [path]);

  const load = async () => {
    setIsLoading(true);
    try {
      const existFile = await existsFileInCache(path);
      if (!existFile) {
        await synthesizeSpeechToFile(ssml, path);
      }
      const file = await readFileFromCache(path);
      setSource(file);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return { isLoading, load, source };
};
