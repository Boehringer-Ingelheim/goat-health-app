import { Preferences } from "@capacitor/preferences";

const createCapacitorPreferences = () => {
  return {
    getAllKeys: (): Promise<string[]> => {
      return new Promise(async (resolve, reject) => {
        try {
          const keys = await Preferences.keys();
          resolve(keys);
        } catch (error) {
          reject(error);
        }
      });
    },
    getItem: (key: string): Promise<string> => {
      return new Promise(async (resolve, reject) => {
        try {
          const value = await Preferences.get({ key });
          if (value !== null) resolve(value);
          resolve("");
        } catch (error) {
          reject(error);
        }
      });
    },
    setItem: (key: string, value: string): Promise<void> => {
      return new Promise(async (resolve, reject) => {
        try {
          await Preferences.set({ key, value });
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    removeItem: (key: string): Promise<void> => {
      return new Promise(async (resolve, reject) => {
        try {
          await Preferences.remove({ key });
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
  };
};

export default createCapacitorPreferences;
