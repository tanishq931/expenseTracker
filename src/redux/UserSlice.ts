import {createSlice} from '@reduxjs/toolkit';
import {
  CATEGORY,
  USER_ACCOUNT,
  USER_DETAILS,
} from '../constants/types/UserDetails';
import {fetchCustomAccounts, fetchCustomCategories} from './UserActions';
import {REDUX_SLICES_NAME} from './sliceNames';
import {DEFAULT_ACCOUNTS, DEFAULT_CATEGORIES} from '../constants/constants';

const initialState: {
  userDetails: USER_DETAILS | null;
  userAccounts: Array<USER_ACCOUNT>;
  categories: Array<CATEGORY>;
} = {
  userDetails: {
    currency: 'Rs.',
    userId: '',
    firstName: '',
    lastName: '',
    phoneNo: '',
  },
  userAccounts: DEFAULT_ACCOUNTS,
  categories: DEFAULT_CATEGORIES,
};

const userSlice = createSlice({
  name: REDUX_SLICES_NAME.USER_SLICE,
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    addAccount: (state, action) => {
      state.userAccounts.push(action?.payload);
    },
    removeAccount: (state, action) => {
      let removedAccount: USER_ACCOUNT | undefined;
      state.userAccounts.filter(val => {
        if (val.id === action.payload) {
          removedAccount = val;
        }
        return val.id != action.payload;
      });
      if (!!removedAccount) {
        //Logic for removing the account from the user's account list
      }
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      let removedCategory;
      state.categories.filter(val => {
        if (val.id === action.payload) {
          removedCategory = val;
        }
        return val.id != action.payload;
      });
      if (!!removedCategory) {
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCustomCategories.fulfilled, (state, action) => {
      if (action?.payload?.length > 0) {
        state.categories = [...state?.categories, ...action?.payload];
      }
    });
    builder.addCase(fetchCustomAccounts.fulfilled, (state, action) => {
      if (action?.payload?.length > 0) {
        state.userAccounts = [...state?.userAccounts, ...action?.payload];
      }
    });
  },
});

export const {
  setUserData,
  setUserDetails,
  addAccount,
  addCategory,
  removeAccount,
  removeCategory,
} = userSlice.actions;

export default userSlice.reducer;
