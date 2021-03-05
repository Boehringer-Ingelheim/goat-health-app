import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';

const readFileData = async (directory: Directory, path) => {
  const content = await Filesystem.readFile({
    directory: directory,
    encoding: Encoding.UTF8,
    path,
  });
  return content.data;
};

export const readFileFromCache = async (path: string) => {
  return await readFileData(Directory.Cache, path);
};
