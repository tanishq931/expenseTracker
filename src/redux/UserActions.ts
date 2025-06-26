import {createAsyncThunk} from '@reduxjs/toolkit';
import {LocalStorage} from '../services/StorageService';
import {STORAGE_KEYS} from '../constants/constants';

export const fetchAuthToken = createAsyncThunk(
  'userSlice/fetchAuthToken',
  async () => {
    let response = LocalStorage.getString(STORAGE_KEYS.AUTH_TOKEN);
    return response;
  },
);

export const fetchCustomCategories = createAsyncThunk(
  'userSlice/fetchCustomCategories',
  async () => {
    let response = LocalStorage.getString(STORAGE_KEYS.CUSTOM_CATEGORIES);
    return JSON.parse(response!);
  },
);

export const fetchCustomAccounts = createAsyncThunk(
  'userSlice/fetchCustomAccounts',
  async () => {
    let response = LocalStorage.getString(STORAGE_KEYS.CUSTOM_ACCOUNTS);
    return JSON.parse(response!);
  },
);
