import md5 from 'md5';
import { useMemo } from 'react';

export const useMd5 = (input: string) =>
  useMemo(() => {
    const hash = md5(input);
    return hash;
  }, [input]);
