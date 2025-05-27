import {createSlice} from '@reduxjs/toolkit';
import {TRANSACTION} from '../constants/types/Transaction';
import {TRANSACTION_TYPE} from '../constants/constants';
import {REDUX_SLICES_NAME} from './sliceNames';

const initialState: {
  userTransactions: Array<TRANSACTION>;
  totalIncomeAmount: number;
  totalExpensesAmount: number;
  totalTransfersAmount: number;
} = {
  userTransactions: [],
  totalIncomeAmount: 0,
  totalExpensesAmount: 0,
  totalTransfersAmount: 0,
};

const transactionSlice = createSlice({
  name: REDUX_SLICES_NAME.TRANSACTION_SLICE,
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state = action?.payload;
    },
    addTransaction: (state, action) => {
      state.userTransactions.push(action.payload);
    },
    removeTransaction: (state, action) => {
      let removedTransaction: TRANSACTION | undefined;
      state.userTransactions.filter(val => {
        if (val.id === action.payload) {
          removedTransaction = val;
        }
        return val.id != action.payload;
      });
      if (!!removedTransaction) {
        if (removedTransaction.transactionType === TRANSACTION_TYPE.EXPENSE) {
          state.totalExpensesAmount -= removedTransaction.amount;
        } else if (
          removedTransaction.transactionType === TRANSACTION_TYPE.INCOME
        ) {
          state.totalIncomeAmount -= removedTransaction.amount;
        } else {
          //Logic for returning the amount to accounts here
        }
      }
    },
  },
});

export const {setTransactions, addTransaction, removeTransaction} =
  transactionSlice.actions;

export default transactionSlice.reducer;
