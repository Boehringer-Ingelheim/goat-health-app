import { Storage } from '@capacitor/storage';

const createCapacitorStorage = () => {
  return {
    getAllKeys: (): Promise<string[]> => {
      return new Promise(async (resolve, reject) => {
        try {
          const { keys } = await Storage.keys();
          resolve(keys);
        } catch (error) {
          reject(error);
        }
      });
    },
    getItem: (key: string): Promise<string> => {
      return new Promise(async (resolve, reject) => {
        try {
          const { value } = await Storage.get({ key });
          if (value !== null) resolve(value);
          resolve('');
        } catch (error) {
          reject(error);
        }
      });
    },
    setItem: (key: string, value: string): Promise<void> => {
      return new Promise(async (resolve, reject) => {
        try {
          Storage.set({ key, value });
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    removeItem: (key: string): Promise<void> => {
      return new Promise(async (resolve, reject) => {
        try {
          Storage.remove({ key });
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
  };
};

export default createCapacitorStorage;
