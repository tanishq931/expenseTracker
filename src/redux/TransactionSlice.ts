import {createSlice} from '@reduxjs/toolkit';
import {TRANSACTION} from '../constants/types/Transaction';
import {STORAGE_KEYS, TRANSACTION_TYPE} from '../constants/constants';
import {REDUX_SLICES_NAME} from './sliceNames';
import {LocalStorage} from '../services/StorageService';
import {sortTransactions} from '../utils/SortTransactions/SortTransactions';

const initialState: {
  userTransactions: Array<TRANSACTION>;
  totalIncomeAmount: number;
  totalExpensesAmount: number;
  totalTransfersAmount: number;
  newTransactionCategory: string;
  pickedImgUrl: string;
} = {
  userTransactions: [],
  totalIncomeAmount: 0,
  totalExpensesAmount: 0,
  totalTransfersAmount: 0,
  newTransactionCategory: '',
  pickedImgUrl: '',
};

const transactionSlice = createSlice({
  name: REDUX_SLICES_NAME.TRANSACTION_SLICE,
  initialState,
  reducers: {
    getTransactions: state => {
      let data = LocalStorage.getString(STORAGE_KEYS.TRANSACTIONS);
      if (data) {
        const parsedData: Array<TRANSACTION> = JSON.parse(JSON.parse(data));
        state.userTransactions = parsedData;
        state.totalIncomeAmount = parsedData
          .filter(val => val.transactionType === TRANSACTION_TYPE.INCOME)
          .reduce((acc, curr) => acc + curr.amount, 0);
        state.totalExpensesAmount = parsedData
          .filter(val => val.transactionType === TRANSACTION_TYPE.EXPENSE)
          .reduce((acc, curr) => acc + curr.amount, 0);
        state.totalTransfersAmount = parsedData
          .filter(val => val.transactionType === TRANSACTION_TYPE.TRANSFER)
          .reduce((acc, curr) => acc + curr.amount, 0);
      }
    },
    setTransactions: (state, action) => {
      state.userTransactions = action?.payload;
    },
    addTransaction: (state, action) => {
      const data = {...action?.payload, id: Date.now().toString()};
      const transactions = sortTransactions([data, ...state?.userTransactions]);
      state.userTransactions = transactions;
      LocalStorage.setItem(
        STORAGE_KEYS.TRANSACTIONS,
        JSON.stringify(transactions),
      );
    },
    removeTransaction: (state, action) => {
      let removedTransaction: TRANSACTION | undefined;
      let data = state.userTransactions.filter(val => {
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
      state.userTransactions = data;
      LocalStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(data));
    },
    setNewTransactionCategory: (state, action) => {
      state.newTransactionCategory = action?.payload;
    },
    setPickedImageUrl: (state, action) => {
      state.pickedImgUrl = action?.payload;
    },
    removeNewFormData: state => {
      state.newTransactionCategory = '';
      state.pickedImgUrl = '';
    },
  },
});

export const {
  getTransactions,
  setTransactions,
  addTransaction,
  removeTransaction,
  setNewTransactionCategory,
  setPickedImageUrl,
  removeNewFormData,
} = transactionSlice.actions;

export default transactionSlice.reducer;
