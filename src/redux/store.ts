import {configureStore} from '@reduxjs/toolkit';
import transactionReducer from './TransactionSlice';
import userReducer from './UserSlice';
import authReducer from './AuthSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    userProfile: userReducer,
    authState: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
