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
