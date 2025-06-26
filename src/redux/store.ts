import {configureStore} from '@reduxjs/toolkit';
import transactionReducer from './TransactionSlice';
import userReducer from './UserSlice';
import utilsReducer from './UtilsSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    userProfile: userReducer,
    utilsSlice: utilsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
