import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {hideBottomSheet, showBottomSheet} from '../../redux/UtilsSlice';

const useBottomSheet = () => {
  const dispatch: AppDispatch = useDispatch();

  const openSheet = (type: string) => {
    dispatch(showBottomSheet({type}));
  };
  const closeSheet = () => {
    dispatch(hideBottomSheet());
  };

  return {openSheet, closeSheet};
};

export default useBottomSheet;
