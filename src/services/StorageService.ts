import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorage {
  static asyncStorage = AsyncStorage;

  static async getItem(key: string) {
    return await this.asyncStorage.getItem(key);
  }
  static async setItem(key: string, value: any) {
    await this.asyncStorage.setItem(key, JSON.stringify(value));
  }
  static async removeItem(key: string) {
    await this.asyncStorage.removeItem(key);
  }
  static async removeAll() {
    const keys = await this.asyncStorage.getAllKeys();
    await this.asyncStorage.multiRemove(keys);
  }
}