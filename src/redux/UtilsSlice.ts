import {createSlice} from '@reduxjs/toolkit';
import {REDUX_SLICES_NAME} from './sliceNames';

const initialState: {
  bottomSheetVisible: boolean;
  bottomSheetType: string;
  bottomSheetProps: object;
  imageViewUrl?: string;
} = {
  bottomSheetVisible: false,
  bottomSheetType: '',
  bottomSheetProps: {},
  imageViewUrl: '',
};

const utilsSlice = createSlice({
  name: REDUX_SLICES_NAME.UTILS_SLICE,
  initialState,
  reducers: {
    showBottomSheet: (state, action) => {
      state.bottomSheetVisible = true;
      state.bottomSheetType = action.payload.type;
      state.bottomSheetProps = action.payload.props || {};
    },
    hideBottomSheet: state => {
      state.bottomSheetVisible = false;
      state.bottomSheetType = '';
      state.bottomSheetProps = {};
    },
    setImageViewUrl: (state, action) => {
      state.imageViewUrl = action.payload;
    },
  },
});

export const {showBottomSheet, hideBottomSheet, setImageViewUrl} = utilsSlice.actions;

export default utilsSlice.reducer;
