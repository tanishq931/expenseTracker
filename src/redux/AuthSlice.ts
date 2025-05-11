import {createSlice} from '@reduxjs/toolkit';

const initialState: {authToken?: string | null} = {
  authToken: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
  },
});

export const {setAuthToken} = authSlice.actions;

export default authSlice.reducer;
