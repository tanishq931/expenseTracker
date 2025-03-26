import {createAsyncThunk} from '@reduxjs/toolkit';
import {LocalStorage} from '../services/StorageService';

export const fetchAuthToken = createAsyncThunk(
  'userSlice/fetchAuthToken',
  async () => {
    let response = await LocalStorage.getItem('userDetails');
    return response;
  },
);
