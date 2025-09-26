import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {useNavigation} from '@react-navigation/native';
import {BackHandler} from 'react-native';

const handleBackBtnClickedOnSheet = (callback?: () => void) => {
  const isVisible = useSelector(
    (state: RootState) => state.utilsSlice.bottomSheetVisible,
  );
  const navigate = useNavigation();

  useEffect(() => {
    const onBackPress = () => {
      if (!isVisible) {
        if (!!callback) {
          callback();
        }
        navigate.goBack();
      }
      return true;
    };

    const listener = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => listener.remove();
  }, [isVisible]);
};

export default handleBackBtnClickedOnSheet;
