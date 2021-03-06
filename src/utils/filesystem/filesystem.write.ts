import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';

const transformArrayBufferToBase64 = (
  buffer: ArrayBuffer,
  mimeType: string,
) => {
  const encode = btoa(
    new Uint8Array(buffer).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      '',
    ),
  );
  return `data:${mimeType};base64,${encode}`;
};

const writeFile = async (directory: Directory, path: string, data: string) => {
  return await Filesystem.writeFile({
    data,
    directory,
    encoding: Encoding.UTF8,
    path,
  });
};

const writeFileToCache = async (path: string, data: string) => {
  return await writeFile(Directory.Cache, path, data);
};

export const writeAudioBufferToCache = async (
  path: string,
  buffer: ArrayBuffer,
  mimeType: string,
) => {
  return await writeFileToCache(
    path,
    transformArrayBufferToBase64(buffer, mimeType),
  );
};
