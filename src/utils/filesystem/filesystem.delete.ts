import { Directory, Filesystem } from '@capacitor/filesystem';

const deleteDirectory = async (
  directory: Directory,
  path = '.',
  recursive = true,
) => {
  return await Filesystem.rmdir({
    directory,
    path,
    recursive,
  });
};

export const deleteCache = async () => {
  return await deleteDirectory(Directory.Cache);
};
