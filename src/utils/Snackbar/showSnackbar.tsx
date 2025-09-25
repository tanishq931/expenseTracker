import Snackbar from 'react-native-snackbar';
import {Colors} from '../../theme/color';

export const showSnackbar = (
  message: string,
  btnText?: string,
  onPressBtn?: () => void,
) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
    action: {
      text: btnText || '',
      textColor: Colors.WHITE,
      onPress: onPressBtn,
    },
  });
};
