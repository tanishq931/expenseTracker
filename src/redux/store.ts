import {configureStore} from '@reduxjs/toolkit';
import transactionReducer from './TransactionSlice';
import userReducer from './UserSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    userProfile: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
