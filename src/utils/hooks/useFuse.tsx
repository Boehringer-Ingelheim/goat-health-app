import Fuse from 'fuse.js';
import { useMemo, useState } from 'react';

export const useFuse = <T,>(data: T[], options?: Fuse.IFuseOptions<T>) => {
  const [pattern, setPattern] = useState('');

  const fuse = useMemo(() => {
    const defaultOptions = { tokenize: true, threshold: 0.2 };
    return new Fuse(data, { ...defaultOptions, ...options });
  }, [data, options]);

  const results = fuse.search(pattern);

  return { results, search: setPattern };
};
