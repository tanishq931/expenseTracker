import {MMKV} from 'react-native-mmkv';

export class LocalStorage {
  static storage = new MMKV({
    id: 'localStorage',
    encryptionKey: 'localStorage',
  });

  static getString(key: string) {
    return this.storage.getString(key);
  }
  static getNumber(key: string) {
    return this.storage.getNumber(key);
  }
  static getBool(key: string) {
    return this.storage.getBoolean(key);
  }
  static setItem(key: string, value: any) {
    this.storage.set(key, JSON.stringify(value));
  }
  static removeItem(key: string) {
    this.storage.delete(key);
  }
  static removeAll() {
    this.storage.clearAll();
  }
  static contains() {
    return this.storage.contains('key');
  }
}
