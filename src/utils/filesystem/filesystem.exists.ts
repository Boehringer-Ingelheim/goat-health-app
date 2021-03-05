import { Directory, Filesystem } from '@capacitor/filesystem';

const existsFileInFilesystem = async (directory: Directory, path: string) => {
  const pathStructure = path.split('/');
  const fileName = pathStructure[pathStructure.length - 1];
  try {
    const content = await Filesystem.readdir({
      directory,
      path: pathStructure.slice(0, -1).join(),
    });
    const exists = content.files.includes(fileName);
    return exists;
  } catch {
    return false;
  }
};

export const existsFileInCache = async (path: string) => {
  return await existsFileInFilesystem(Directory.Cache, path);
};
